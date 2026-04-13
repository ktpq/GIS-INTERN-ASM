import {
  w
} from "./chunk-YDGQJ4JD.js";
import {
  W
} from "./chunk-7LDW6E3Y.js";
import "./chunk-4256WDOP.js";
import "./chunk-52ORZUGM.js";
import {
  Al,
  Cc,
  Dc,
  Eh,
  Hu,
  I,
  Ic,
  Ps,
  Rg,
  Yu,
  Zl,
  bc,
  cs,
  ds,
  ks,
  o,
  qh,
  tc,
  wc,
  zl
} from "./chunk-XQTWTSU3.js";
import "./chunk-ZNBUMLFY.js";
import {
  Kn,
  X,
  fm,
  mr,
  qt
} from "./chunk-MKUY72VH.js";
import {
  x as x2
} from "./chunk-GAJDBZ5G.js";
import {
  n as n3
} from "./chunk-FZMMQS4X.js";
import {
  $t,
  B2 as B,
  C2 as C,
  H,
  P,
  Pt,
  Ut,
  Wt,
  Yt,
  a,
  b,
  j,
  j2,
  mi,
  n,
  n2,
  x2 as x,
  z2 as z
} from "./chunk-U3KYTZUD.js";
import "./chunk-GBACRMDK.js";
import "./chunk-S5K7KX5U.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/OperatorGeodeticArea.js
var Q = class {
  constructor(e, t, i, s, n4 = 100) {
    this.m_startPt = e.clone(), this.m_endPt = t.clone(), this.m_cE2 = s, this.m_cE = Math.sqrt(this.m_cE2), this.m_c1By2e = 1 / (2 * this.m_cE), this.m_cRpu = i.getGCS().getUnit().getUnitToBaseFactor(), this.isPcs = 2 === i.getCoordinateSystemType(), this.PEProjcs = i.getPECoordSys(), this.m_points = Yt(2 * n4, Number.NaN);
  }
  setSegmentEndPoints(e, t) {
    this.m_startPt.assign(e), this.m_endPt.assign(t);
  }
  makeFunctor() {
    return (e) => {
      const t = [0, 0];
      t[0] = this.m_startPt.x * (1 - e) + this.m_endPt.x * e, t[1] = this.m_startPt.y * (1 - e) + this.m_endPt.y * e, this.isPcs && wc.projToGeogCenter(this.PEProjcs, 1, t, 0);
      const i = Math.sin(t[1] * this.m_cRpu);
      if (0 === this.m_cE2) return i;
      return -Math.log((1 - this.m_cE * i) / (1 + this.m_cE * i)) * this.m_c1By2e + i / (1 - this.m_cE2 * i * i);
    };
  }
};
function V(e, t, i) {
  const s = new n3();
  e.queryEnvelope(s);
  const n4 = qt(t, s, true).total(), a2 = t.getPannableExtent();
  a2.xmin = s.xmin - 10 * n4, a2.xmax = s.xmax + 10 * n4;
  const r = new I().execute(e, a2, t, i).getImpl().querySegmentIterator();
  r.stripAttributes();
  const h = Hu();
  t.querySpheroidData(h);
  const o2 = h.e2, m = 0 === o2 ? 2 : 1, p = new mi(0, 0), u = new mi(0, 0), c = new n2(0), g = new Q(p, u, t, o2, 100);
  for (; r.nextPath(); ) for (; r.hasNextSegment(); ) {
    const e2 = r.nextSegment();
    p.assign(e2.getStartXY()), u.assign(e2.getEndXY()), g.setSegmentEndPoints(p, u);
    const t2 = Kn(6, 0, 1, 1e-12, 1e-15, g.makeFunctor());
    c.pe((u.x - p.x) * t2);
  }
  const d = h.majorSemiAxis;
  return m * d * d * (1 - o2) * Math.PI * c.getResult() / t.getPannableExtent().width();
}
function Z(e, t, i, s, n4) {
  const a2 = se(e, t, n4);
  let _ = W2(e, a2.first, i, s, n4), r = 1, h = 0, o2 = 0;
  do {
    if (r++, a2.first *= 0.5, a2.first < 50 * t.getTolerance(0)) return _;
    a2.second *= 2, o2 = W2(e, a2.first, i, s, n4), h = Math.abs(o2 - _), _ = o2;
  } while (Math.abs(_) > 1 && h > 1e-8 * Math.abs(_) && (a2.second < 65e3 && r < 8 || r < 4));
  return o2;
}
function W2(e, t, i, s, n4) {
  const a2 = new o().execute(e, t, 0, 0, n4);
  let _;
  _ = s ? new qh().execute(a2, s, n4) : a2;
  const r = 1 === i.getUnit().getUnitToBaseFactor() ? Math.PI / 180 : 1, o2 = new n3();
  _.queryEnvelope(o2);
  const m = new n3(), l = new n3(), p = new n3();
  m.setCoords({ xmin: o2.xmin, ymin: 75 * r, xmax: o2.xmax, ymax: 90 * r }), l.setCoords({ xmin: o2.xmin, ymin: -60 * r, xmax: o2.xmax, ymax: 75 * r }), p.setCoords({ xmin: o2.xmin, ymin: -90 * r, xmax: o2.xmax, ymax: -60 * r }), m.inflateCoords(0.01 * m.width(), 0), l.inflateCoords(0.01 * l.width(), 0), p.inflateCoords(0.01 * p.width(), 0);
  let c = 0;
  return c += K(_, m, i, n4), c += K(_, l, i, n4), c += K(_, p, i, n4), c;
}
function K(e, t, i, s) {
  const n4 = new I().execute(e, t, i, s);
  if (null !== n4 && !n4.isEmpty()) {
    const e2 = new n3();
    n4.queryEnvelope(e2);
    const { first: t2, second: a2 } = ie(i, e2, false), _ = Rg(i, t2, null), r = new qh().execute(n4, _, s).calculateArea2D();
    return a2 && t2.destroy(), r;
  }
  return 0;
}
var ee = [null, null, null, null, null, null, null];
function te(e, t, i) {
  const a2 = e.getUnit().getUnitToBaseFactor(), _ = t.getCenter();
  _.scale(180 * a2 / Math.PI);
  const r = new mi();
  r.x = 0, r.y = 0;
  let h = 0;
  if (0 === h) {
    _.y > 45 ? (r.y = Wt, h = 0) : _.y < -45 ? (r.y = -Wt, h = 1) : _.x >= 45 && _.x < 135 ? (r.x = Wt, h = 2) : _.x >= 135 || _.x < -135 ? (r.x = Wt, h = 3) : _.x < -45 && _.x >= -135 ? (r.x = -Wt, h = 4) : (r.x = 0, h = 5);
    const e2 = a2 * Math.sqrt(H(t.xmin - t.xmax) + H(t.ymin - t.ymax)), i2 = r.clone(), s = t.getCenter();
    s.scale(a2), h < 2 && (i2.x = s.x);
    if (mi.distance(i2, s) + 0.5 * e2 > Wt) return null;
  }
  const o2 = ee[h];
  if (null !== o2 && o2.getGCS().equalHorizontal(e)) return o2;
  const m = e.getText(), l = r.x, p = r.y, u = 0, f = 0;
  let E = 0, P2 = -1;
  6 !== h ? P2 = bc.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA : (n(i), E = 0, P2 = bc.PE_PRJ_CYLINDRICAL_EQAREA);
  const S = tc("EqualAreaPCS");
  let A;
  P2 === bc.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA ? A = `PROJCS["${S}",${m},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${u}],PARAMETER["False_Northing",${f}],PARAMETER["Central_Meridian",${l}],PARAMETER["Latitude_of_Origin",${p}],UNIT["Meter",1.0]]` : P2 === bc.PE_PRJ_CYLINDRICAL_EQAREA ? A = `PROJCS["${S}",${m},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${u}],PARAMETER["False_Northing",${f}],PARAMETER["Central_Meridian",${l}],PARAMETER["Standard_Parallel_1",${E}],PARAMETER["Latitude_of_Origin",${p}],UNIT["Meter",1.0]]` : b("getEqualAreaPcsFixed");
  const x3 = Yu(A);
  return ee[h] && ee[h].destroy(), ee[h] = x3, x3;
}
function ie(e, t, i) {
  const n4 = te(e, t, i);
  if (null !== n4) return $t(n4, false);
  const a2 = e.getText(), _ = e.getUnit().getUnitToBaseFactor(), r = (t.xmin + t.width() / 2) * _, h = (t.ymin + t.height() / 2) * _, o2 = 0, m = 0;
  let l = 0, p = 0, u = -1;
  t.ymin * _ >= 75 * Math.PI / 180 || t.ymax * _ <= -60 * Math.PI / 180 ? u = bc.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA : t.ymin > 0 || t.ymax < 0 ? (l = (t.ymin + 1 / 3 * t.height()) * _, p = (t.ymin + 2 / 3 * t.height()) * _, u = bc.PE_PRJ_ALBERS) : (l = (t.ymin + 2 / 3 * t.height()) * _, u = bc.PE_PRJ_CYLINDRICAL_EQAREA);
  const f = tc("EqualAreaPCS");
  let E;
  return u === bc.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA ? E = `PROJCS["${f}",${a2},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${o2}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${r}],PARAMETER["Latitude_of_Origin",${h}],UNIT["Meter",1.0]]` : u === bc.PE_PRJ_ALBERS ? E = `PROJCS["${f}",${a2},PROJECTION["Albers"],PARAMETER["False_Easting",${o2}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${r}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Standard_Parallel_2",${p}],PARAMETER["Latitude_of_Origin",${h}],UNIT["Meter",1.0]]` : u === bc.PE_PRJ_CYLINDRICAL_EQAREA ? E = `PROJCS["${f}",${a2},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${o2}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${r}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Latitude_of_Origin",${h}],UNIT["Meter",1.0]]` : b("getEqualAreaPCSInstance"), $t(Yu(E), true);
}
function se(e, t, i) {
  const s = e.calculateLength2D(), n4 = new w().execute(e, t, i) / 25e3, a2 = s / e.getSegmentCount() * 2;
  let _ = Math.min(a2, s / n4);
  0 === _ && (_ = 1);
  return $t(_, s / _);
}
var ne = class {
  getOperatorType() {
    return 10314;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, i) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(s, n4, _) {
    if (0 === n4.getCoordinateSystemType() && P(""), s.isEmpty() || s.getDimension() < 2) return 0;
    if (j(s), s.getGeometryType() === a.enumEnvelope) {
      const e = new mr();
      return e.addEnvelope(s, false), this.execute(e, n4, _);
    }
    let r = s;
    s.getDescription().getAttributeCount() > 1 && (r = s.clone(), r.dropAllAttributes());
    const l = new o().execute(r, 0, n4.getTolerance(0), 0, _);
    let p = null;
    const u = n4.getGCS();
    u !== n4 && (p = Rg(n4, u));
    let c = new Eh().execute(l, n4, false, _);
    return c.isEmpty() ? 0 : (c === s && (c = s.clone()), n4.isPannable() ? V(c, n4, _) : Z(c, n4, u, p, _));
  }
};
function ae() {
  return { m_p_PCS: new mi(), m_factor: Number.NaN, setValues: _e, assign: re };
}
function _e(e, t) {
  this.m_factor = e, this.m_p_PCS.assign(t);
}
function re(e) {
  this.m_factor = e.m_factor, this.m_p_PCS.assign(e.m_p_PCS);
}
var he = class {
  constructor(e, t, i, s) {
    this.m_ptStart = new X(), this.m_ptEnd = new X(), this.m_ptStart.assign(t), this.m_ptEnd.assign(i), this.m_deltaX = this.m_ptEnd.x - this.m_ptStart.x, this.m_deltaY = this.m_ptEnd.y - this.m_ptStart.y, this.m_e = Math.sqrt(e), this.m_e2 = e, this.m_c1MinusE2 = 1 - e;
    const n4 = Math.sin(s);
    let a2;
    a2 = 0 === this.m_e2 ? 2 * n4 : n4 * (z(this.m_e * n4) + 1 / (1 - this.m_e2 * n4 * n4)), this.m_baseA = a2;
  }
  setSegmentEndPoints(e, t) {
    this.m_ptStart.assign(e), this.m_ptEnd.assign(t), this.m_deltaX = this.m_ptEnd.x - this.m_ptStart.x, this.m_deltaY = this.m_ptEnd.y - this.m_ptStart.y;
  }
  makeFunctor() {
    return (e) => {
      const t = 1 - e, i = t * this.m_ptStart.x + e * this.m_ptEnd.x, s = t * this.m_ptStart.y + e * this.m_ptEnd.y, n4 = t * this.m_ptStart.z + e * this.m_ptEnd.z, a2 = i * i + s * s, _ = n4 / Math.sqrt(n4 * n4 + this.m_c1MinusE2 * this.m_c1MinusE2 * a2);
      let r;
      if (0 === this.m_e2) r = 2 * _;
      else {
        r = _ * (z(this.m_e * _) + 1 / (1 - this.m_e2 * _ * _));
      }
      return (this.m_deltaY * i - this.m_deltaX * s) / a2 * (r - this.m_baseA);
    };
  }
};
function oe() {
  return { e: Number.NaN, one_p_e: Number.NaN, one_m_e: Number.NaN, one_m_e_2: Number.NaN, atanh_e_over_e: Number.NaN, half_qp: Number.NaN, f: Number.NaN, z: Number.NaN };
}
function me() {
  return { sin_phi: Number.NaN, one_p_sin_phi: Number.NaN, one_m_sin_phi: Number.NaN, one_m_e_2_sin_2_phi: Number.NaN, sin_half_phi_pf: Number.NaN, sin_half_phi_pz: Number.NaN, sin_half_asin_e_sin_phi_pf: Number.NaN, sin_half_asin_e_sin_phi_pz: Number.NaN, atanh_sin_phi: Number.NaN, atanh_esin_phi: Number.NaN, make_negative: false, initialize: le, changeSign: pe, assign: ue, clone: ce };
}
function le(e, t, i, s) {
  const n4 = 0.5 * e;
  this.sin_phi = Math.sin(e);
  const a2 = t * this.sin_phi, _ = 0.5 * Math.asin(a2);
  this.one_p_sin_phi = 1 + this.sin_phi, this.one_m_sin_phi = 1 - this.sin_phi, this.one_m_e_2_sin_2_phi = (1 + a2) * (1 - a2), this.sin_half_phi_pf = Math.sin(n4 + i), this.sin_half_phi_pz = Math.sin(n4 + s), this.sin_half_asin_e_sin_phi_pf = Math.sin(_ + i), this.sin_half_asin_e_sin_phi_pz = Math.sin(_ + s), this.atanh_sin_phi = Math.log(this.sin_half_phi_pf / this.sin_half_phi_pz), this.atanh_esin_phi = Math.log(this.sin_half_asin_e_sin_phi_pf / this.sin_half_asin_e_sin_phi_pz);
}
function pe() {
  this.sin_phi = -this.sin_phi;
  let e = this.one_p_sin_phi;
  this.one_p_sin_phi = this.one_m_sin_phi, this.one_m_sin_phi = e, e = this.sin_half_phi_pf, this.sin_half_phi_pf = this.sin_half_phi_pz, this.sin_half_phi_pz = e, e = this.sin_half_asin_e_sin_phi_pf, this.sin_half_asin_e_sin_phi_pf = this.sin_half_asin_e_sin_phi_pz, this.sin_half_asin_e_sin_phi_pz = e, this.atanh_sin_phi = -this.atanh_sin_phi, this.atanh_esin_phi = -this.atanh_esin_phi;
}
function ue(e) {
  this.sin_phi = e.sin_phi, this.one_p_sin_phi = e.one_p_sin_phi, this.one_m_sin_phi = e.one_m_sin_phi, this.one_m_e_2_sin_2_phi = e.one_m_e_2_sin_2_phi, this.sin_half_phi_pf = e.sin_half_phi_pf, this.sin_half_phi_pz = e.sin_half_phi_pz, this.sin_half_asin_e_sin_phi_pf = e.sin_half_asin_e_sin_phi_pf, this.sin_half_asin_e_sin_phi_pz = e.sin_half_asin_e_sin_phi_pz, this.atanh_sin_phi = e.atanh_sin_phi, this.atanh_esin_phi = e.atanh_esin_phi, this.make_negative = e.make_negative;
}
function ce() {
  return __spreadValues({}, this);
}
var ge = class {
  constructor(t, i, s) {
    this.m_transformPCS2GCS = null, this.m_scaleToRadians = new x2(), this.m_scaleToDegrees = new x2(), this.m_progressTracker = s, n(4 !== i), this.m_curveType = i, this.m_inputSR = t, t && 0 !== t.getCoordinateSystemType() || P(""), this.m_inputGCS = t.getGCS(), this.m_a = 0, this.m_eSquared = 0, this.m_b = 0, this.m_rpu = 0;
  }
  executePolygonGeodeticArea(e) {
    let t, i = e.clone();
    if (i.dropAllAttributes(), e.hasNonLinearSegments()) {
      i = new o().execute(i, 0, this.m_inputSR.getTolerance(0), 0, this.m_progressTracker);
    }
    if (this.m_inputSR.isPannable()) {
      const e2 = new n3();
      i.queryEnvelope(e2);
      const t2 = this.m_inputSR.getPannableExtent();
      if (!t2.containsEnvelope(e2)) {
        const s2 = t2.getCenterX() - e2.getCenterX(), n5 = new x2();
        n5.setShiftCoords(s2, 0), i.applyTransformation(n5), e2.move(s2, 0);
        const a2 = new x();
        t2.queryIntervalX(a2);
        const _ = new x();
        e2.queryIntervalX(_), i = a2.contains(_) ? Al(i, this.m_inputSR) : new qh().foldInto360RangeGeodetic(i, this.m_inputSR, this.m_curveType);
      }
    }
    if (this.m_transformPCS2GCS ? (i = new Eh().execute(i, this.m_inputSR, false, this.m_progressTracker), t = i.createInstance(), Zl(this.m_transformPCS2GCS, i, t, this.m_progressTracker) || (t = new qh().execute(i, this.m_transformPCS2GCS, this.m_progressTracker))) : t = new Eh().execute(i, this.m_inputGCS, false, this.m_progressTracker), t.isEmpty()) return 0;
    if (1 === this.m_curveType) {
      const e2 = Hu();
      return this.m_inputGCS.querySpheroidData(e2), this.m_a = e2.majorSemiAxis, this.m_eSquared = e2.e2, this.loxodromeArea(t);
    }
    const s = t.getImpl();
    this.m_rpu = this.m_inputGCS.getUnit().getUnitToBaseFactor(), this.m_scaleToRadians.setScale(this.m_rpu), s.applyTransformation(this.m_scaleToRadians), this.m_scaleToDegrees = this.m_scaleToRadians, this.m_scaleToDegrees.invertThis();
    const n4 = Hu();
    if (this.m_inputGCS.querySpheroidData(n4), this.m_a = n4.majorSemiAxis, this.m_b = n4.minorSemiAxis, this.m_eSquared = n4.e2, 2 === this.m_curveType) return this.executeClippedPolygonGreatEllipticArea(t);
    {
      const e2 = { stack: [], error: void 0, hasError: false };
      try {
        const i2 = Ic.unit(9101), s2 = this.m_inputGCS.getPECoordSys(), n5 = __addDisposableResource(e2, s2.cloneAlterUnits(i2), false);
        let a2, _, r = this.executeClippedPolygonGeodeticArea(t, n5, 0), h = 0;
        do {
          h++, a2 = this.executeClippedPolygonGeodeticArea(t, n5, h), _ = Math.abs(a2 - r), r = a2;
        } while (Math.abs(a2) > 1 && _ > 1e-8 * Math.abs(a2) && h < 7);
        return a2;
      } catch (a2) {
        e2.error = a2, e2.hasError = true;
      } finally {
        __disposeResources(e2);
      }
    }
  }
  executeClippedPolygonGeodeticArea(e, t, i) {
    const s = { stack: [], error: void 0, hasError: false };
    try {
      const n4 = new n3();
      e.queryEnvelope(n4);
      const a2 = __addDisposableResource(s, this.getEqualAreaPCSInstance(t, n4), false), _ = e.clone();
      zl(a2, _);
      const r = 50, h = _.getImpl().getAttributeStreamRef(0), o2 = e.getImpl().getAttributeStreamRef(0), m = __addDisposableResource(s, new Cc(), false), l = __addDisposableResource(s, new Cc(), false), u = 40, c = [0, 0], g = Ut(ae, u), d = Yt(u, -1), f = ae(), E = ae();
      let P2, y;
      const R = a2;
      let M = _.calculateArea2D();
      const C2 = new n2(0), q = 0.5 * Math.PI, b2 = 1e-10 * Math.abs(M) + 1e-6, I2 = e.getPathCount();
      let v, D, O, G;
      const k = new mi(), F = new mi(), J = new mi(), U = new mi(), Y = new mi(), j3 = new mi();
      let B2, H2;
      for (D = e.getPathStart(0), v = 0; v < I2; v++, D = O) for (O = e.getPathEnd(v), h.queryPoint2D(O - 1 << 1, J), o2.queryPoint2D(O - 1 << 1, k), Math.abs(k.y) > q && (k.y = B(q, k.y)), G = D; G < O; G++, J.assign(U), k.assign(F)) {
        if (h.queryPoint2D(G << 1, U), o2.queryPoint2D(G << 1, F), Math.abs(F.y) > q && (F.y = B(q, F.y)), B2 = mi.distance(J, U), B2 < r || 0 === k.y && 0 === F.y) continue;
        Dc.geodeticDistance(this.m_a, this.m_eSquared, k.x, k.y, F.x, F.y, m, l, null, this.m_curveType);
        const e2 = m.val, t2 = l.val;
        for (f.setValues(0, J), E.setValues(1, U), y = i, g[0].assign(E), d[0] = i, P2 = 0; P2 >= 0; ) {
          H2 = 0.5 * (f.m_factor + E.m_factor), Dc.geodeticCoordinate(this.m_a, this.m_eSquared, k.x, k.y, e2 * H2, t2, m, l, this.m_curveType), Y.x = m.val, Y.y = l.val, c[0] = Y.x, c[1] = Y.y, wc.geogToProj(R, 1, c), j3.x = c[0], j3.y = c[1];
          const i2 = -j3.offset(f.m_p_PCS, E.m_p_PCS), s2 = 0.5 * i2 * mi.distance(f.m_p_PCS, E.m_p_PCS);
          if (C2.pe(s2), Math.abs(s2) > b2 || Math.abs(s2) > 0 && y > 0) E.setValues(H2, j3), P2++, g[P2].assign(E), Math.abs(s2) <= b2 ? (y--, d[P2 - 1] = y, d[P2] = y) : (y = d[P2 - 1], d[P2] = y);
          else {
            if (P2 <= 0) break;
            f.assign(E), P2--, E.assign(g[P2]), y = d[P2];
          }
        }
      }
      return M += C2.getResult(), Math.abs(M);
    } catch (n4) {
      s.error = n4, s.hasError = true;
    } finally {
      __disposeResources(s);
    }
  }
  executeClippedPolygonGreatEllipticArea(e) {
    const t = [], i = [], s = new mi(), n4 = new mi(), a2 = ds(1, this.m_eSquared, new mi(0, 0.5 * Math.PI)), _ = new n2(0), r = new n2(0), h = new n2(0), o2 = new X(), m = new X(), l = new n3();
    e.queryLooseEnvelope(l);
    let p = 0;
    l.containsCoords(l.xmin, 0) || (p = Math.abs(l.ymin) < Math.abs(l.ymax) ? l.ymin : l.ymax);
    const u = new he(this.m_eSquared, o2, m, p), c = this.m_a * this.m_a, g = e.getImpl().querySegmentIterator();
    for (g.stripAttributes(); g.nextPath(); ) for (; g.hasNextSegment(); ) {
      const e2 = g.nextSegment();
      s.assign(e2.getStartXY()), n4.assign(e2.getEndXY()), n4.x - s.x > Math.PI ? s.x += 2 * Math.PI : n4.x - s.x < -Math.PI && (n4.x += 2 * Math.PI), this.splitSegmentCrossingItegralThreshold(e2, t, i);
      for (let i2 of t) o2.assign(ds(this.m_a, this.m_eSquared, i2.getStartXY())), m.assign(ds(this.m_a, this.m_eSquared, i2.getEndXY())), u.setSegmentEndPoints(o2, m), this.adaptiveIntegrationWithRomberg(u, _);
      for (let t2 of i) {
        let e3 = t2.getStartXY(), i2 = t2.getEndXY(), s2 = p;
        e3.y < 0 && (i2 = Pt(e3, e3 = i2), e3.y = -e3.y, i2.y = -i2.y, s2 = -s2);
        const n5 = ds(1, this.m_eSquared, e3), _2 = ds(1, this.m_eSquared, i2), o3 = Math.min(e3.y, i2.y), m2 = ks(this.m_eSquared, e3.x, i2.x, s2, o3);
        r.pe(m2);
        const l2 = Math.abs(ks(this.m_eSquared, e3.x, i2.x, o3, Wt)), u2 = new X();
        u2.setSub(n5, a2);
        const g2 = new X();
        g2.setSub(_2, a2);
        const d = new X();
        d.setCrossProductVector(u2, g2);
        let f = c * (l2 - 0.5 * d.length());
        f = B(f, i2.x - e3.x), h.pe(f);
      }
      t.length = 0, i.length = 0;
    }
    return h.getResult() + c * (0.5 * (1 - this.m_eSquared) * _.getResult() + r.getResult());
  }
  getEqualAreaPCSInstance(e, t) {
    const i = t.getCenterX(), s = 0, n4 = 0;
    let a2, _;
    const r = t.height();
    let h, o2;
    (h = t.ymin > 45 * Math.PI / 180 || t.ymax < 45 * -Math.PI / 180) ? a2 = B(0.5 * Math.PI, t.getCenterY()) : (a2 = t.getCenterY(), _ = t.ymin + r * (2 / 3));
    const m = tc("EqualAreaPCS"), l = e.toString();
    return o2 = h ? Ic.fromString(bc.PE_TYPE_PROJCS, `PROJCS["${m}", ${l}, PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${s}],PARAMETER["False_Northing", ${n4}],PARAMETER["Central_Meridian", ${i}], PARAMETER["Latitude_of_Origin", ${a2}], UNIT["Meter",1.0]]`, true) : Ic.fromString(bc.PE_TYPE_PROJCS, `PROJCS["${m}", ${l}, PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting", ${s}],PARAMETER["False_Northing", ${n4}],PARAMETER["Central_Meridian", ${i}],PARAMETER["Standard_Parallel_1", ${_}],PARAMETER["Latitude_of_Origin", ${a2}],UNIT["Meter",1.0]]`, true), o2;
  }
  splitSegmentCrossingItegralThreshold(e, t, i) {
    const s = 100, n4 = 20, a2 = n4 * n4, _ = ds(this.m_a, this.m_eSquared, new mi(0, Wt)), h = ds(this.m_a, this.m_eSquared, new mi(0, -Wt)), o2 = this.splitSegmentPassingThroughPole(e);
    for (let m of o2) {
      const e2 = m.getStartXY(), o3 = m.getEndXY(), l = ds(this.m_a, this.m_eSquared, e2), p = ds(this.m_a, this.m_eSquared, o3), u = new mi(), c = new X();
      let g = X.sqrDistance(_, l), d = X.sqrDistance(l, p);
      if (g <= s) {
        if (!(d > a2)) {
          i.push(new fm({ start: e2, end: o3 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(l.add(c.mul(n4))), u.assign(Ps(this.m_a, this.m_eSquared, c)), i.push(new fm({ start: e2, end: u })), e2.assign(u);
      }
      if (l.assign(ds(this.m_a, this.m_eSquared, e2)), g = X.sqrDistance(_, p), d = X.sqrDistance(l, p), g <= s) {
        if (!(d > a2)) {
          i.push(new fm({ start: e2, end: o3 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(p.sub(c.mul(n4))), u.assign(Ps(this.m_a, this.m_eSquared, c)), i.push(new fm({ start: u, end: o3 })), o3.assign(u);
      }
      if (l.assign(ds(this.m_a, this.m_eSquared, e2)), p.assign(ds(this.m_a, this.m_eSquared, o3)), g = X.sqrDistance(h, l), d = X.sqrDistance(l, p), g <= s) {
        if (!(d > a2)) {
          i.push(new fm({ start: e2, end: o3 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(l.add(c.mul(n4))), u.assign(Ps(this.m_a, this.m_eSquared, c)), i.push(new fm({ start: e2, end: u })), e2.assign(u);
      }
      if (l.assign(ds(this.m_a, this.m_eSquared, e2)), p.assign(ds(this.m_a, this.m_eSquared, o3)), g = X.sqrDistance(h, p), d = X.sqrDistance(l, p), g <= s) {
        if (!(d > a2)) {
          i.push(new fm({ start: e2, end: o3 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(p.sub(c.mul(n4))), u.assign(Ps(this.m_a, this.m_eSquared, c)), i.push(new fm({ start: u, end: o3 })), o3.assign(u);
      }
      t.push(new fm({ start: e2, end: o3 }));
    }
  }
  splitSegmentPassingThroughPole(e) {
    const t = { stack: [], error: void 0, hasError: false };
    try {
      const i = [], s = new X(), n4 = new X(), a2 = new X(), _ = new mi(), h = 20, o2 = 3.124139361, m = 10, l = e.getStartXY(), p = e.getEndXY(), u = __addDisposableResource(t, new Cc(), false);
      if (Dc.geodeticDistance(this.m_a, this.m_eSquared, l.x, l.y, p.x, p.y, u, null, null, 2), Math.abs(p.x - l.x) > o2 && u.val > h) {
        const e2 = new W(new mi(0, 90), l.divide(this.m_rpu), p.divide(this.m_rpu), this.m_inputGCS, 2, 2);
        let t2 = cs(e2.makeFunctor(), 0, 1, 1e-10);
        if (t2.second <= m && t2.first > 0 && t2.first < 1) return s.assign(ds(this.m_a, this.m_eSquared, l)), n4.assign(ds(this.m_a, this.m_eSquared, p)), j2(s, n4, t2.first, a2), _.assign(Ps(this.m_a, this.m_eSquared, a2)), i.push(new fm({ start: l, end: _ })), i.push(new fm({ start: _, end: p })), i;
        if (e2.setPointDistFrom(new mi(0, -90)), t2 = cs(e2.makeFunctor(), 0, 1, 1e-10), t2.second <= m && t2.first > 0 && t2.first < 1) return s.assign(ds(this.m_a, this.m_eSquared, l)), n4.assign(ds(this.m_a, this.m_eSquared, p)), j2(s, n4, t2.first, a2), _.assign(Ps(this.m_a, this.m_eSquared, a2)), i.push(new fm({ start: l, end: _ })), i.push(new fm({ start: _, end: p })), i;
      }
      return i.push(new fm({ start: l, end: p })), i;
    } catch (i) {
      t.error = i, t.hasError = true;
    } finally {
      __disposeResources(t);
    }
  }
  adaptiveIntegrationWithRomberg(e, t) {
    const i = e.makeFunctor();
    let s = 0, n4 = 1, a2 = i(s), r = i(n4);
    const h = 1e-17, o2 = 1e-14;
    let m = (s + n4) / 2, l = i(m), p = Math.abs(l - a2), u = Math.abs(r - l), c = 0;
    for (; c++ < 32 && (p / u < 0.1 || u / p < 0.1); ) p < u ? (t.pe(Kn(5, s, m, o2, h, i)), s = m, a2 = l) : (t.pe(Kn(5, m, n4, o2, h, i)), n4 = m, r = l), m = (s + n4) / 2, l = Math.abs(i(m)), p = Math.abs(l - a2), u = Math.abs(r - l);
    t.pe(Kn(5, s, n4, o2, h, i));
  }
  loxodromeAreaHemi(e, t, i, s, n4) {
    const a2 = i.clone(), _ = n4.clone();
    let r, h, o2, m, l, p, u, c, g, d, f, E, P2, S, A, x3;
    return a2.make_negative && a2.changeSign(), _.make_negative && _.changeSign(), f = s - t, 1 === Math.abs(a2.sin_phi) || 1 === Math.abs(_.sin_phi) ? e.half_qp * f : a2.sin_phi === _.sin_phi ? (d = 0.5 * e.one_m_e_2 * a2.sin_phi * (1 / a2.one_m_e_2_sin_2_phi + z(e.e * a2.sin_phi)) * f, d) : (A = Math.log(_.sin_half_phi_pf * a2.sin_half_phi_pz / (_.sin_half_phi_pz * a2.sin_half_phi_pf)), x3 = Math.log(_.sin_half_asin_e_sin_phi_pf * a2.sin_half_asin_e_sin_phi_pz / (_.sin_half_asin_e_sin_phi_pz * a2.sin_half_asin_e_sin_phi_pf)), 1 === this.m_eSquared ? (l = 0, r = 0.5 * (A + _.sin_phi / _.one_m_e_2_sin_2_phi - a2.sin_phi / a2.one_m_e_2_sin_2_phi), h = 0) : (l = -2 * e.atanh_e_over_e * (Math.log(_.one_p_sin_phi / a2.one_p_sin_phi) - e.e * x3), r = (A - e.e * x3) / e.one_m_e_2, h = (Math.log(_.one_m_e_2_sin_2_phi / a2.one_m_e_2_sin_2_phi) + l / e.atanh_e_over_e) / e.one_m_e_2), o2 = -x3 * (a2.atanh_esin_phi + _.atanh_esin_phi), m = 1 / a2.one_m_e_2_sin_2_phi - 1 / _.one_m_e_2_sin_2_phi, p = C(_.one_m_sin_phi / e.one_p_e, e.e) - C(a2.one_m_sin_phi / e.one_p_e, e.e), u = C(_.one_p_sin_phi / e.one_p_e, e.e) - C(a2.one_p_sin_phi / e.one_p_e, e.e), c = C(a2.one_m_sin_phi / -e.one_m_e, e.e) - C(_.one_m_sin_phi / -e.one_m_e, e.e), g = C(a2.one_p_sin_phi / -e.one_m_e, e.e) - C(_.one_p_sin_phi / -e.one_m_e, e.e), d = 0.25 / r * (h + o2 + m + l + 0.5 * (p + u + c + g)), d += e.half_qp, E = 0.5 * e.one_m_e_2 * a2.sin_phi * (1 / a2.one_m_e_2_sin_2_phi + z(e.e * a2.sin_phi)), P2 = 0.5 * e.one_m_e_2 * _.sin_phi * (1 / _.one_m_e_2_sin_2_phi + z(e.e * _.sin_phi)), P2 < E && (S = E, E = P2, P2 = S), d < E && (d = E), d > P2 && (d = P2), d *= f, d);
  }
  loxodromeArea(e) {
    const t = Math.PI / 180;
    let i = 0;
    const s = oe(), n4 = me(), a2 = me();
    s.e = Math.sqrt(this.m_eSquared), s.one_p_e = 1 + s.e, s.one_m_e = 1 - s.e, s.one_m_e_2 = 1 - this.m_eSquared, s.atanh_e_over_e = z(s.e), this.m_eSquared >= 1 ? s.half_qp = 1 : s.half_qp = 0.5 * (1 + s.atanh_e_over_e * s.one_m_e_2), s.f = 0.25 * Math.PI, s.z = 0.75 * Math.PI, a2.initialize(0, s.e, s.f, s.z);
    const _ = e.getPathCount(), r = new mi(), h = new mi(), o2 = e.getImpl().getAttributeStreamRef(0);
    for (let m = 0; m < _; m++) {
      const _2 = e.getPathStart(m), l = e.getPathEnd(m);
      if (!(l - _2 <= 1)) {
        o2.queryPoint2D(2 * (l - 1), r);
        for (let e2 = _2; e2 < l; e2++) {
          o2.queryPoint2D(2 * e2, h);
          const m2 = r.y * t, l2 = h.y * t;
          if (e2 === _2 ? (n4.initialize(m2, s.e, s.f, s.z), n4.make_negative = false) : n4.assign(a2), a2.initialize(l2, s.e, s.f, s.z), a2.make_negative = false, r.y * h.y < 0) {
            if (r.y >= 90 && h.y <= -90 || h.y >= 90 && r.y <= -90) return Number.NaN;
            const e3 = me();
            e3.initialize(0, s.e, s.f, s.z), e3.make_negative = false;
            const _3 = n4.atanh_sin_phi - s.e * n4.atanh_esin_phi, o3 = a2.atanh_sin_phi - s.e * a2.atanh_esin_phi, l3 = (o3 * r.x - _3 * h.x) / (o3 - _3);
            m2 < 0 ? (n4.make_negative = true, i -= this.loxodromeAreaHemi(s, r.x * t, n4, l3 * t, e3), n4.make_negative = false, i += this.loxodromeAreaHemi(s, l3 * t, e3, h.x * t, a2)) : (i += this.loxodromeAreaHemi(s, r.x * t, n4, l3 * t, e3), a2.make_negative = true, i -= this.loxodromeAreaHemi(s, l3 * t, e3, h.x * t, a2), a2.make_negative = false);
          } else r.y >= 0 ? i += this.loxodromeAreaHemi(s, r.x * t, n4, h.x * t, a2) : (n4.make_negative = true, a2.make_negative = true, i -= this.loxodromeAreaHemi(s, r.x * t, n4, h.x * t, a2), n4.make_negative = false, a2.make_negative = false);
          r.assign(h);
        }
      }
    }
    return this.m_a * i * this.m_a;
  }
  calculate(e) {
    if (e.isEmpty() || e.getDimension() < 2) return 0;
    if (e.getGeometryType() === a.enumEnvelope) {
      const t = new mr();
      return t.addEnvelope(e, false), this.calculate(t);
    }
    return this.m_inputSR !== this.m_inputGCS && null === this.m_transformPCS2GCS && (this.m_transformPCS2GCS = Rg(this.m_inputSR, this.m_inputGCS, null)), this.executePolygonGeodeticArea(e);
  }
};
var de = class {
  getOperatorType() {
    return 10311;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, i) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, i, s, n4) {
    if (j(e), 4 === s) return new ne().execute(e, i, n4);
    return new ge(i, s, n4).calculate(e);
  }
};
export {
  de as OperatorGeodeticArea
};
//# sourceMappingURL=OperatorGeodeticArea-WZ3TJZDP.js.map
