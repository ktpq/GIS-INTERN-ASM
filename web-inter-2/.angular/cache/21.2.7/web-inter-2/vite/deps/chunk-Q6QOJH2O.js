import {
  p as p2
} from "./chunk-FQP6WOBG.js";
import {
  i as i4
} from "./chunk-V3SSXFIC.js";
import {
  t as t4
} from "./chunk-WE7SVOVV.js";
import {
  C
} from "./chunk-JDSCGR2O.js";
import {
  t as t5
} from "./chunk-O4DRMHJZ.js";
import {
  r as r2
} from "./chunk-WMLNU33A.js";
import {
  h as h2,
  i as i2
} from "./chunk-3CTDWY66.js";
import {
  _,
  l as l3
} from "./chunk-LJM2ZWSL.js";
import {
  e as e5,
  n as n4
} from "./chunk-JTTFG3NZ.js";
import {
  M,
  e as e4,
  i as i3,
  s as s3
} from "./chunk-JXCCENBV.js";
import {
  n as n5
} from "./chunk-YORNLQGX.js";
import {
  Ot,
  Pt,
  et,
  l as l2,
  q as q2,
  tt,
  xt
} from "./chunk-3EE7FDFG.js";
import {
  A,
  F,
  G,
  I as I2,
  L,
  P,
  T,
  U,
  ee,
  g,
  h as h3,
  j as j3,
  le,
  v,
  w,
  x as x2,
  z
} from "./chunk-P3OSPFTR.js";
import {
  o2 as o4
} from "./chunk-EB3674W2.js";
import {
  u as u3
} from "./chunk-QO36ALPE.js";
import {
  y
} from "./chunk-WDHJMFLW.js";
import {
  s as s2
} from "./chunk-V5XS2I7U.js";
import {
  I,
  N as N2,
  j as j2,
  l,
  n as n2,
  t as t2
} from "./chunk-76B4KLE5.js";
import {
  f as f2,
  x
} from "./chunk-N7K4YSHO.js";
import {
  h
} from "./chunk-FFRDPIUM.js";
import {
  S as S2,
  o as o2
} from "./chunk-5GPMO33J.js";
import {
  N,
  b,
  f,
  j,
  o,
  p,
  q,
  u
} from "./chunk-FVU6XCMJ.js";
import {
  e as e2,
  i,
  n as n3,
  o as o3,
  t as t3
} from "./chunk-GM5PCDS3.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import {
  e as e3,
  u as u2
} from "./chunk-UXWT3ISO.js";
import {
  s
} from "./chunk-253Z6EVN.js";
import {
  e
} from "./chunk-XCGM4D6U.js";
import {
  a,
  has,
  n2 as n,
  r3 as r
} from "./chunk-TX75HZKJ.js";
import {
  t
} from "./chunk-GLWFJLHD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/cim/effects/EffectAddControlPoints.js
var e6 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e24, s16) {
    return new t6(e24, s16);
  }
};
var t6 = class {
  constructor(e24, t23) {
    this._inputGeometries = e24, this._angleTolerance = void 0 !== t23.angleTolerance ? t23.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let e24 = this._inputGeometries.next();
    if (!e24) return null;
    for (; e24; ) {
      if ("esriGeometryPolygon" === e24.geometryType) this._isClosed = true;
      else if ("esriGeometryPolyline" === e24.geometryType) this._isClosed = false;
      else {
        if ("esriGeometryEnvelope" !== e24.geometryType) {
          e24 = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle) return e24;
        this._isClosed = true;
      }
      for (; e24.nextPath(); ) this._processPath(e24);
      return e24.reset(), e24;
    }
    return null;
  }
  _processPath(e24) {
    if (e24.nextPoint()) {
      const t23 = e24.x, s16 = e24.y;
      let n25 = t23, i16 = s16, o11 = e24.pathSize, l9 = 0, r15 = 0, a10 = 0, h12 = 0, c4 = 0, _5 = 0;
      this._isClosed && ++o11;
      for (let u10 = 1; e24.nextPoint() || u10 < o11; ++u10) {
        let x4, m4;
        this._isClosed && u10 === o11 - 1 ? (x4 = t23, m4 = s16) : (x4 = e24.x, m4 = e24.y);
        const y5 = x4 - n25, g4 = m4 - i16, C2 = Math.sqrt(y5 * y5 + g4 * g4);
        if (u10 > 1 && C2 > 0 && a10 > 0) {
          (l9 * y5 + r15 * g4) / C2 / a10 <= this._maxCosAngle && e24.setControlPointAt(u10 - 1);
        }
        1 === u10 && (h12 = y5, c4 = g4, _5 = C2), C2 > 0 && (n25 = x4, i16 = m4, l9 = y5, r15 = g4, a10 = C2);
      }
      if (this._isClosed && a10 > 0 && _5 > 0) {
        (l9 * h12 + r15 * c4) / _5 / a10 <= this._maxCosAngle && e24.setControlPointAt(0);
      }
    }
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMPlacements.js
var t7 = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (null == this.rz || 0 === this.rz && 1 !== this.rzCos && 0 !== this.rzSin) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t23, s16) {
    this.tx = t23, this.ty = s16;
  }
  setTranslateZ(t23) {
    this.tz = t23;
  }
  setRotateCS(t23, s16) {
    this.rz = void 0, this.rzCos = t23, this.rzSin = s16;
  }
  setRotate(t23) {
    this.rz = t23, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t23) {
    this.ry = t23;
  }
  setScale(t23) {
    this.s = t23;
  }
  setMeasure(t23) {
    this.m = t23;
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMCursor.js
function e7(t23, e24) {
  t23[4] = e24;
}
var i5 = class {
  constructor(e24, i16 = true, s16 = true, r15 = 0) {
    this._angleToLine = true, this._keepUpright = false, this.isClosed = false, this.geometryCursor = null, this.geometryCursor = !i16 && "esriGeometryPolygon" === e24.geometryType || !s16 && "esriGeometryPolyline" === e24.geometryType ? null : e24, this.geomUnitsPerPoint = r15, this.iterateMultiPath = false, this.iteratePath = false, this.internalPlacement = new t7();
  }
  next() {
    if (!this.geometryCursor) return null;
    const t23 = this.processMultiPath(this.geometryCursor);
    if (this.iterateMultiPath && t23 || (this.geometryCursor = null), !t23) return null;
    const e24 = t23.getAngle();
    if (this._angleToLine && this._keepUpright && Math.abs(e24) > 0.5 * Math.PI) {
      const i16 = e24 + Math.PI, s16 = Math.atan2(Math.sin(i16), Math.cos(i16));
      Number.isNaN(s16) || t23.setRotate(s16);
    }
    return t23;
  }
  processMultiPath(t23) {
    for (; this.iteratePath || t23.pathIndex < t23.totalSize - 1; ) {
      this.iteratePath || t23.nextPath(), this.iterateMultiPath = true;
      const e24 = this.processPath(t23);
      if (e24) return e24;
    }
    return this.iterateMultiPath = false, null;
  }
};
var s4 = class {
  constructor(t23, e24, i16, s16 = 0) {
    this.isClosed = false, this.inputGeometries = t23, this.acceptPolygon = e24, this.acceptPolyline = i16, this.geomUnitsPerPoint = s16, this.iteratePath = false, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let t23 = this.inputGeometries.next();
        for (; t23 && (this.isClosed = this.acceptPolygon && "esriGeometryPolygon" === t23.geometryType || "esriGeometryEnvelope" === t23.geometryType, this.multiPathCursor = t23, !this.multiPathCursor); ) t23 = this.inputGeometries.next();
        if (!this.multiPathCursor) return null;
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t23 = this.processPath(this.multiPathCursor);
        if (t23) return t23;
      }
      this.multiPathCursor = null;
    }
  }
};

// node_modules/@arcgis/core/symbols/cim/CurveHelper.js
var e8 = 0.03;
var n6 = class {
  constructor(t23 = 0, e24 = false) {
  }
  isEmpty(t23) {
    if (!t23.nextPoint()) return true;
    let e24, n25, s16, r15;
    for (e24 = t23.x, n25 = t23.y; t23.nextPoint(); e24 = n25, n25 = r15) if (s16 = t23.x, r15 = t23.y, s16 !== e24 || r15 !== n25) return t23.seekPathStart(), false;
    return t23.seekPathStart(), true;
  }
  normalize(t23) {
    const e24 = Math.sqrt(t23[0] * t23[0] + t23[1] * t23[1]);
    0 !== e24 && (t23[0] /= e24, t23[1] /= e24);
  }
  getLength(t23, e24, n25, s16) {
    const r15 = n25 - t23, o11 = s16 - e24;
    return Math.sqrt(r15 * r15 + o11 * o11);
  }
  getSegLength(t23) {
    const [[e24, n25], [s16, r15]] = t23;
    return this.getLength(e24, n25, s16, r15);
  }
  getCoord2D(t23, e24, n25, s16, r15) {
    return [t23 + (n25 - t23) * r15, e24 + (s16 - e24) * r15];
  }
  getSegCoord2D(t23, e24) {
    const [[n25, s16], [r15, o11]] = t23;
    return this.getCoord2D(n25, s16, r15, o11, e24);
  }
  getAngle(t23, e24, n25, s16, r15) {
    const o11 = n25 - t23, i16 = s16 - e24;
    return Math.atan2(i16, o11);
  }
  getAngleCS(t23, e24, n25, s16, r15, o11) {
    null == t23 && (t23 = [0, 0]);
    const i16 = s16 - e24, h12 = r15 - n25, u10 = Math.sqrt(i16 * i16 + h12 * h12);
    return 0 !== u10 ? (t23[0] = i16 / u10, t23[1] = h12 / u10, t23) : (t23[0] = 1, t23[1] = 0, t23);
  }
  getSegAngleCS(t23, e24, n25) {
    const [[s16, r15], [o11, i16]] = e24;
    return this.getAngleCS(t23, s16, r15, o11, i16, n25);
  }
  cut(t23, e24, n25, s16, r15, o11) {
    return [r15 <= 0 ? [t23, e24] : this.getCoord2D(t23, e24, n25, s16, r15), o11 >= 1 ? [n25, s16] : this.getCoord2D(t23, e24, n25, s16, o11)];
  }
  getSubCurve(e24, n25, s16) {
    const r15 = _.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r15, e24, n25, s16) ? r15 : null;
  }
  appendSubCurve(t23, e24, n25, s16) {
    t23.startPath(), e24.seekPathStart();
    let r15 = 0, o11 = true;
    if (!e24.nextPoint()) return false;
    let i16 = e24.x, h12 = e24.y;
    for (; e24.nextPoint(); ) {
      const u10 = this.getLength(i16, h12, e24.x, e24.y);
      if (0 !== u10) {
        if (o11) {
          if (r15 + u10 > n25) {
            const l9 = (n25 - r15) / u10;
            let c4 = 1, a10 = false;
            r15 + u10 >= s16 && (c4 = (s16 - r15) / u10, a10 = true);
            const f5 = this.cut(i16, h12, e24.x, e24.y, l9, c4);
            if (f5 && t23.pushPoints(f5), a10) break;
            o11 = false;
          }
        } else {
          if (r15 + u10 > s16) {
            const n26 = this.cut(i16, h12, e24.x, e24.y, 0, (s16 - r15) / u10);
            n26 && t23.pushPoint(n26[1]);
            break;
          }
          t23.pushXY(e24.x, e24.y);
        }
        r15 += u10, i16 = e24.x, h12 = e24.y;
      } else i16 = e24.x, h12 = e24.y;
    }
    return true;
  }
  getCIMPointAlong(t23, e24) {
    if (!t23.nextPoint()) return null;
    let n25, s16, r15, o11, i16 = 0;
    for (n25 = t23.x, s16 = t23.y; t23.nextPoint(); n25 = r15, s16 = o11) {
      r15 = t23.x, o11 = t23.y;
      const h12 = this.getLength(n25, s16, r15, o11);
      if (0 !== h12) {
        if (i16 + h12 > e24) {
          const t24 = (e24 - i16) / h12;
          return this.getCoord2D(n25, s16, r15, o11, t24);
        }
        i16 += h12;
      }
    }
    return null;
  }
  offset(t23, e24, n25, s16, r15) {
    if (!t23 || t23.length < 2) return null;
    let o11 = 0, i16 = t23[o11++], h12 = o11;
    for (; o11 < t23.length; ) {
      const e25 = t23[o11];
      e25[0] === i16[0] && e25[1] === i16[1] || (o11 !== h12 && (t23[h12] = t23[o11]), i16 = t23[h12++]), o11++;
    }
    const u10 = t23[0][0] === t23[h12 - 1][0] && t23[0][1] === t23[h12 - 1][1];
    if (u10 && --h12, h12 < (u10 ? 3 : 2)) return null;
    const l9 = [];
    i16 = u10 ? t23[h12 - 1] : null;
    let c4 = t23[0];
    for (let a10 = 0; a10 < h12; a10++) {
      const r16 = a10 === h12 - 1 ? u10 ? t23[0] : null : t23[a10 + 1];
      if (i16) if (r16) {
        const t24 = [r16[0] - c4[0], r16[1] - c4[1]];
        this.normalize(t24);
        const o12 = [c4[0] - i16[0], c4[1] - i16[1]];
        this.normalize(o12);
        const h13 = o12[0] * t24[1] - o12[1] * t24[0], u11 = o12[0] * t24[0] + o12[1] * t24[1];
        if (0 === h13 && 1 === u11) {
          c4 = r16;
          continue;
        }
        if (h13 >= 0 == e24 <= 0) {
          if (u11 < 1) {
            const n26 = [t24[0] - o12[0], t24[1] - o12[1]];
            this.normalize(n26);
            const r17 = Math.sqrt((1 + u11) / 2);
            if (r17 > 1 / s16) {
              const t25 = -Math.abs(e24) / r17;
              l9.push([c4[0] - n26[0] * t25, c4[1] - n26[1] * t25]);
            }
          }
        } else switch (n25) {
          case "Mitered": {
            const n26 = Math.sqrt((1 + u11) / 2);
            if (n26 > 0 && 1 / n26 < s16) {
              const s17 = [t24[0] - o12[0], t24[1] - o12[1]];
              this.normalize(s17);
              const r17 = Math.abs(e24) / n26;
              l9.push([c4[0] - s17[0] * r17, c4[1] - s17[1] * r17]);
              break;
            }
          }
          case "Bevelled":
            l9.push([c4[0] + o12[1] * e24, c4[1] - o12[0] * e24]), l9.push([c4[0] + t24[1] * e24, c4[1] - t24[0] * e24]);
            break;
          case "Rounded":
            if (u11 < 1) {
              l9.push([c4[0] + o12[1] * e24, c4[1] - o12[0] * e24]);
              const n26 = Math.floor(2.5 * (1 - u11));
              if (n26 > 0) {
                const s17 = 1 / n26;
                let r17 = s17;
                for (let i17 = 1; i17 < n26; i17++, r17 += s17) {
                  const n27 = [o12[1] * (1 - r17) + t24[1] * r17, -o12[0] * (1 - r17) - t24[0] * r17];
                  this.normalize(n27), l9.push([c4[0] + n27[0] * e24, c4[1] + n27[1] * e24]);
                }
              }
              l9.push([c4[0] + t24[1] * e24, c4[1] - t24[0] * e24]);
            }
            break;
          default:
            if (h13 < 0) l9.push([c4[0] + (o12[1] + o12[0]) * e24, c4[1] + (o12[1] - o12[0]) * e24]), l9.push([c4[0] + (t24[1] - t24[0]) * e24, c4[1] - (t24[0] + t24[1]) * e24]);
            else {
              const n26 = Math.sqrt((1 + Math.abs(u11)) / 2), s17 = [t24[0] - o12[0], t24[1] - o12[1]];
              this.normalize(s17);
              const r17 = e24 / n26;
              l9.push([c4[0] - s17[0] * r17, c4[1] - s17[1] * r17]);
            }
        }
      } else {
        const t24 = [c4[0] - i16[0], c4[1] - i16[1]];
        this.normalize(t24), l9.push([c4[0] + t24[1] * e24, c4[1] - t24[0] * e24]);
      }
      else {
        const t24 = [r16[0] - c4[0], r16[1] - c4[1]];
        this.normalize(t24), l9.push([c4[0] + t24[1] * e24, c4[1] - t24[0] * e24]);
      }
      i16 = c4, c4 = r16;
    }
    return l9.length < (u10 ? 3 : 2) ? null : (u10 && l9.push([l9[0][0], l9[0][1]]), l9);
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectArrow.js
var s5 = 1.7320508075688772;
var i6 = 5;
var c = "OpenEnded";
var u4 = class _u {
  static {
    this.instance = null;
  }
  static local() {
    return null === _u.instance && (_u.instance = new _u()), _u.instance;
  }
  execute(t23, e24, r15) {
    return new h4(t23, e24, r15);
  }
};
var h4 = class extends s4 {
  constructor(t23, e24, r15) {
    super(t23, false, true), this._curveHelper = new n6(), this._width = (void 0 !== e24.width ? e24.width : i6) * r15, this._arrowType = void 0 !== e24.geometricEffectArrowType ? e24.geometricEffectArrowType : void 0 !== e24.arrowType ? e24.arrowType : c, this._offsetFlattenError = e8 * r15;
  }
  processPath(e24) {
    const r15 = _.createEmptyOptimizedCIM(e24.geometryType);
    switch (this._arrowType) {
      case "OpenEnded":
      default:
        this._constructSimpleArrow(r15, e24, true);
        break;
      case "Block":
        this._constructSimpleArrow(r15, e24, false);
        break;
      case "Crossed":
        this._constructCrossedArrow(r15, e24);
    }
    return r15;
  }
  _constructSimpleArrow(t23, r15, n25) {
    const o11 = r15.pathLength();
    let s16 = this._width;
    o11 < 2 * s16 && (s16 = o11 / 2);
    const i16 = this._curveHelper.getSubCurve(r15, 0, o11 - s16);
    if (!i16 || !i16.nextPath()) return;
    i16.seekPathStart();
    const c4 = s16 / 2;
    if (this._curveHelper.isEmpty(i16)) return;
    const u10 = n2(i16), h12 = this._constructOffset(u10, -c4);
    if (!h12) return;
    const P3 = this._constructOffset(u10, c4);
    if (!P3) return;
    const l9 = this._constructArrowBasePoint(h12, -c4 / 2);
    if (!l9) return;
    const p6 = this._constructArrowBasePoint(P3, c4 / 2);
    if (!p6) return;
    r15.seekInPath(r15.pathSize - 1);
    const a10 = [r15.x, r15.y];
    t23.pushPath(P3), t23.nextPath(), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(p6), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(a10), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(l9), t23.nextPoint(), t23.setControlPoint(), t23.pushPoints(h12.reverse()), t23.setControlPoint(), n25 || (t23.setControlPointAt(0), t23.setControlPointAt(t23.pathSize - 1), t23.pushPoint(P3[0])), t23.reset();
  }
  _constructCrossedArrow(t23, r15) {
    const n25 = r15.pathLength();
    let o11 = this._width;
    n25 < o11 * (1 + s5 + 1) && (o11 = n25 / (1 + s5 + 1)), r15.seekPathStart();
    const i16 = this._curveHelper.getSubCurve(r15, 0, n25 - o11 * (1 + s5));
    if (!i16) return;
    i16.nextPath();
    const c4 = o11 / 2;
    if (this._curveHelper.isEmpty(i16)) return;
    const u10 = n2(i16), h12 = this._constructOffset(u10, c4);
    if (!h12) return;
    const P3 = this._constructOffset(u10, -c4);
    if (!P3) return;
    const l9 = this._curveHelper.getSubCurve(r15, 0, n25 - o11);
    if (!l9) return;
    if (l9.nextPath(), this._curveHelper.isEmpty(l9)) return;
    const p6 = n2(l9), a10 = this._constructOffset(p6, c4);
    if (!a10) return;
    const f5 = this._constructOffset(p6, -c4);
    if (!f5) return;
    const _5 = a10[a10.length - 1], C2 = this._constructArrowBasePoint(a10, c4 / 2);
    if (!C2) return;
    const w4 = f5[f5.length - 1], m4 = this._constructArrowBasePoint(f5, -c4 / 2);
    if (!m4) return;
    r15.seekInPath(r15.pathSize - 1);
    const x4 = [r15.x, r15.y];
    t23.pushPath(h12), t23.nextPath(), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(w4), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(m4), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(x4), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(C2), t23.nextPoint(), t23.setControlPoint(), t23.pushPoint(_5), t23.nextPoint(), t23.setControlPoint(), t23.pushPoints(P3.reverse()), t23.nextPoint(), t23.setControlPoint(), t23.reset();
  }
  _constructOffset(t23, e24) {
    return this._curveHelper.offset(t23, e24, "Rounded", 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t23, e24) {
    if (!t23 || t23.length < 2) return null;
    const r15 = t23[t23.length - 2], n25 = t23[t23.length - 1], o11 = [n25[0] - r15[0], n25[1] - r15[1]];
    return this._curveHelper.normalize(o11), [n25[0] + o11[1] * e24, n25[1] - o11[0] * e24];
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMEffects.js
var o5 = P(() => import("./bufferOperator-4QYJWHX7.js"));
var s6 = P(() => import("./convexHullOperator-K65JVXAG.js"));
var m = P(() => import("./lengthOperator-H3NMBKOW.js"));
var n7 = P(() => import("./generalizeOperator-EW7TPMEA.js"));
var i7 = P(() => import("./graphicBufferOperator-PR6VW2S2.js"));
var p3 = P(() => import("./offsetOperator-U5TRWMCT.js"));
var f3 = P(() => import("./simplifyOperator-IYH6XJOG.js"));
var a2 = P(() => import("./jsonConverter-4ABSNMIA.js"));
var c2 = 512;
var l4;
function g2(e24) {
  switch (e24.type) {
    case "CIMGeometricEffectDonut":
    case "CIMGeometricEffectBuffer":
      return o5.getImportPromise();
    case "CIMGeometricEffectEnclosingPolygon":
      return s6.getImportPromise();
    case "CIMGeometricEffectOffset":
      return Promise.all([p3.getImportPromise(), i7.getImportPromise()]);
    case "CIMGeometricEffectTaperedPolygon":
      return Promise.all([f3.getImportPromise(), m.getImportPromise(), n7.getImportPromise()]);
    default:
      return Promise.resolve();
  }
}
function u5(e24) {
  return "CIMMarkerPlacementAtMeasuredUnits" === e24.type ? a2.getImportPromise() : Promise.resolve();
}
var y2 = class {
  constructor(e24) {
    this._geometry = e24;
  }
  next() {
    const e24 = this._geometry;
    return this._geometry = null, e24;
  }
};
function P2(t23, o11, s16) {
  if (!t23) return null;
  l4 || (l4 = new h2(0, 0, 0, 1));
  const m4 = s16 ? -1 : 1, n25 = "esriGeometryPolygon" === t23.geometryType, i16 = n25 ? 3 : 2, p6 = n25 ? 3 : 2;
  let f5, a10;
  for (l4.reset(i16), l4.setPixelMargin(o11 + 1), l4.setExtent(c2); t23.nextPath(); ) if (!(t23.pathSize < p6)) {
    for (t23.nextPoint(), f5 = t23.x, a10 = m4 * t23.y, l4.moveTo(f5, a10); t23.nextPoint(); ) f5 = t23.x, a10 = m4 * t23.y, l4.lineTo(f5, a10);
    n25 && l4.close();
  }
  const g4 = l4.result(false);
  if (g4) {
    const r15 = _.createEmptyOptimizedCIM(t23.geometryType);
    for (const e24 of g4) {
      r15.startPath();
      for (const t24 of e24) r15.pushXY(t24.x, m4 * t24.y);
    }
    return r15.reset(), r15;
  }
  return null;
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectBuffer.js
var m2 = class _m {
  static {
    this.instance = null;
  }
  static local() {
    return null === _m.instance && (_m.instance = new _m()), _m.instance;
  }
  execute(e24, t23, i16, s16, r15, n25) {
    return new l5(e24, t23, i16, s16, r15, n25);
  }
};
var l5 = class {
  constructor(e24, t23, i16, s16, r15, m4) {
    this._preventClipping = m4, this._inputGeometries = e24, this._tileKey = s16, this._curveHelper = new n6(), this._size = (void 0 !== t23.size ? t23.size : 1) * i16, this._maxInflateSize = r15 * i16, this._offsetFlattenError = e8 * i16;
  }
  next() {
    let n25;
    for (; n25 = this._inputGeometries.next(); ) {
      if (0 === this._size) return n25;
      if ("esriGeometryEnvelope" === n25.geometryType) {
        if (this._size > 0) {
          const i16 = _.createEmptyOptimizedCIM(n25.geometryType), s16 = t2(n25)[0], r15 = this._curveHelper.offset(s16, this._size, "Rounded", 4, this._offsetFlattenError);
          if (r15) return i16.pushPath(r15), i16;
        } else if (this._size < 0) {
          const t23 = n25.asJSON();
          if (Math.min(t23.xmax - t23.xmin, t23.ymax - t23.ymin) + 2 * this._size > 0) return _.fromJSONCIM({ xmin: t23.xmin - this._size, xmax: t23.xmax + this._size, ymin: t23.ymin - this._size, ymax: t23.ymax + this._size });
        }
      }
      const o11 = !this._preventClipping && this._tileKey ? P2(n25, this._maxInflateSize, true) : n25;
      if (!o11) continue;
      const m4 = o5.module, l9 = __spreadProps(__spreadValues({}, o11.asJSON()), { spatialReference: { wkid: S.WebMercator.wkid } }), a10 = m4.execute(l9, this._size);
      return a10 ? _.fromJSONCIM(a10) : null;
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectControlMeasureLine.js
var e9 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(s16, t23, i16) {
    return new r3(s16, t23, i16);
  }
};
var r3 = class {
  constructor(s16, t23, i16) {
    this._defaultPointSize = 20, this._inputGeometries = s16, this._geomUnitsPerPoint = i16, this._rule = t23.rule ?? "FullGeometry", this._defaultSize = this._defaultPointSize * i16;
  }
  next() {
    let i16;
    for (; i16 = this._inputGeometries.next(); ) {
      const h12 = this._processGeom(t2(i16));
      if (h12?.length) return _.fromJSONCIM({ paths: h12 });
    }
    return null;
  }
  _clone(s16) {
    return [s16[0], s16[1]];
  }
  _mid(s16, t23) {
    return [(s16[0] + t23[0]) / 2, (s16[1] + t23[1]) / 2];
  }
  _mix(s16, t23, i16, h12) {
    return [s16[0] * t23 + i16[0] * h12, s16[1] * t23 + i16[1] * h12];
  }
  _add(s16, t23) {
    return [s16[0] + t23[0], s16[1] + t23[1]];
  }
  _add2(s16, t23, i16) {
    return [s16[0] + t23, s16[1] + i16];
  }
  _sub(s16, t23) {
    return [s16[0] - t23[0], s16[1] - t23[1]];
  }
  _dist(s16, t23) {
    return Math.sqrt((s16[0] - t23[0]) * (s16[0] - t23[0]) + (s16[1] - t23[1]) * (s16[1] - t23[1]));
  }
  _norm(s16) {
    return Math.sqrt(s16[0] * s16[0] + s16[1] * s16[1]);
  }
  _normalize(s16, t23 = 1) {
    const i16 = t23 / this._norm(s16);
    s16[0] *= i16, s16[1] *= i16;
  }
  _leftPerpendicular(s16) {
    const t23 = -s16[1], i16 = s16[0];
    s16[0] = t23, s16[1] = i16;
  }
  _leftPerp(s16) {
    return [-s16[1], s16[0]];
  }
  _rightPerpendicular(s16) {
    const t23 = s16[1], i16 = -s16[0];
    s16[0] = t23, s16[1] = i16;
  }
  _rightPerp(s16) {
    return [s16[1], -s16[0]];
  }
  _dotProduct(s16, t23) {
    return s16[0] * t23[0] + s16[1] * t23[1];
  }
  _crossProduct(s16, t23) {
    return s16[0] * t23[1] - s16[1] * t23[0];
  }
  _rotateDirect(s16, t23, i16) {
    const h12 = s16[0] * t23 - s16[1] * i16, e24 = s16[0] * i16 + s16[1] * t23;
    s16[0] = h12, s16[1] = e24;
  }
  _makeCtrlPt(s16) {
    const t23 = [s16[0], s16[1]];
    return e7(t23, 1), t23;
  }
  _addAngledTicks(s16, t23, i16, h12) {
    const e24 = this._sub(i16, t23);
    this._normalize(e24);
    const r15 = this._crossProduct(e24, this._sub(h12, t23));
    let _5;
    _5 = r15 > 0 ? this._rightPerp(e24) : this._leftPerp(e24);
    const c4 = Math.abs(r15) / 2, u10 = [];
    u10.push([t23[0] + (_5[0] - e24[0]) * c4, t23[1] + (_5[1] - e24[1]) * c4]), u10.push(t23), u10.push(i16), u10.push([i16[0] + (_5[0] + e24[0]) * c4, i16[1] + (_5[1] + e24[1]) * c4]), s16.push(u10);
  }
  _addBezier2(s16, t23, i16, h12, e24) {
    if (0 === e24--) return void s16.push(h12);
    const r15 = this._mid(t23, i16), _5 = this._mid(i16, h12), c4 = this._mid(r15, _5);
    this._addBezier2(s16, t23, r15, c4, e24), this._addBezier2(s16, c4, _5, h12, e24);
  }
  _addBezier3(s16, t23, i16, h12, e24, r15) {
    if (0 === r15--) return void s16.push(e24);
    const _5 = this._mid(t23, i16), c4 = this._mid(i16, h12), u10 = this._mid(h12, e24), o11 = this._mid(_5, c4), a10 = this._mid(c4, u10), n25 = this._mid(o11, a10);
    this._addBezier3(s16, t23, _5, o11, n25, r15), this._addBezier3(s16, n25, a10, u10, e24, r15);
  }
  _add90DegArc(s16, t23, i16, h12, e24) {
    const r15 = e24 ?? this._crossProduct(this._sub(i16, t23), this._sub(h12, t23)) > 0, _5 = this._mid(t23, i16), c4 = this._sub(_5, t23);
    r15 ? this._leftPerpendicular(c4) : this._rightPerpendicular(c4), _5[0] += c4[0], _5[1] += c4[1], this._addBezier3(s16, t23, this._mix(t23, 0.33333, _5, 0.66667), this._mix(i16, 0.33333, _5, 0.66667), i16, 4);
  }
  _addArrow(s16, t23, i16) {
    const h12 = t23[0], e24 = t23[1], r15 = t23[t23.length - 1], _5 = this._sub(h12, e24), c4 = this._norm(_5);
    this._normalize(_5);
    const u10 = Math.abs(this._crossProduct(_5, this._sub(r15, e24)));
    let o11 = this._dotProduct(_5, this._sub(r15, e24));
    o11 < 0.05 * c4 ? o11 = 0.05 * c4 : o11 > 0.95 * c4 && (o11 = 0.95 * c4);
    const a10 = 0.5 * u10, n25 = this._leftPerp(_5), p6 = [e24[0] + _5[0] * o11, e24[1] + _5[1] * o11], d = t23.length - 1, l9 = [];
    l9.push(i16 ? [-n25[0], -n25[1]] : n25);
    let b3 = [-_5[0], -_5[1]];
    for (let P3 = 1; P3 < d - 1; P3++) {
      const s17 = this._sub(t23[P3 + 1], t23[P3]);
      this._normalize(s17);
      const i17 = this._dotProduct(s17, b3), h13 = this._crossProduct(s17, b3), e25 = Math.sqrt((1 + i17) / 2), r16 = this._sub(s17, b3);
      this._normalize(r16), r16[0] /= e25, r16[1] /= e25, l9.push(h13 < 0 ? [-r16[0], -r16[1]] : r16), b3 = s17;
    }
    l9.push(this._rightPerp(b3));
    for (let P3 = l9.length - 1; P3 > 0; P3--) s16.push([t23[P3][0] + l9[P3][0] * a10, t23[P3][1] + l9[P3][1] * a10]);
    s16.push([p6[0] + l9[0][0] * a10, p6[1] + l9[0][1] * a10]), s16.push([p6[0] + l9[0][0] * u10, p6[1] + l9[0][1] * u10]), s16.push(h12), s16.push([p6[0] - l9[0][0] * u10, p6[1] - l9[0][1] * u10]), s16.push([p6[0] - l9[0][0] * a10, p6[1] - l9[0][1] * a10]);
    for (let P3 = 1; P3 < l9.length; P3++) s16.push([t23[P3][0] - l9[P3][0] * a10, t23[P3][1] - l9[P3][1] * a10]);
  }
  _addDash(s16, t23, i16) {
    const h12 = this._norm(i16) / 7;
    this._normalize(i16);
    let e24 = [];
    for (let r15 = 0; r15 <= 7; r15++) e24.push([t23[0] + i16[0] * r15 * h12, t23[1] + i16[1] * r15 * h12]), 1 & r15 && (s16.push(e24), e24 = []);
  }
  _cp2(s16, t23, i16) {
    return s16.length >= 2 ? s16[1] : this._add2(s16[0], t23 * this._defaultSize, i16 * this._defaultSize);
  }
  _cp3(s16, t23, i16, h12) {
    if (s16.length >= 3) return s16[2];
    const e24 = this._mix(s16[0], 1 - i16, t23, i16), r15 = this._sub(t23, s16[0]);
    return this._normalize(r15), this._rightPerpendicular(r15), [e24[0] + r15[0] * h12 * this._defaultSize, e24[1] + r15[1] * h12 * this._defaultSize];
  }
  _arrowPath(s16) {
    if (s16.length > 2) return s16;
    const t23 = s16[0], i16 = this._cp2(s16, -4, 0), h12 = this._sub(t23, i16);
    this._normalize(h12);
    const e24 = this._rightPerp(h12);
    return [t23, i16, [t23[0] + (e24[0] - h12[0]) * this._defaultSize, t23[1] + (e24[1] - h12[1]) * this._defaultSize]];
  }
  _arrowLastSeg(s16) {
    const t23 = s16[0], i16 = this._cp2(s16, -4, 0);
    let h12;
    if (s16.length >= 3) h12 = s16[s16.length - 1];
    else {
      const s17 = this._sub(t23, i16);
      this._normalize(s17);
      const e24 = this._rightPerp(s17);
      h12 = [t23[0] + (e24[0] - s17[0]) * this._defaultSize, t23[1] + (e24[1] - s17[1]) * this._defaultSize];
    }
    return [i16, h12];
  }
  _processGeom(s16) {
    if (!s16) return null;
    const t23 = [];
    for (const e24 of s16) {
      const s17 = e24.length > 1 && h(e24) < this._defaultSize;
      if (!e24 || 0 === e24.length || s17) continue;
      const r15 = e24.length;
      let _5 = e24[0];
      switch (this._rule) {
        case "PerpendicularFromFirstSegment": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 4), h12 = [];
          h12.push(i16), h12.push(this._mid(_5, s18)), t23.push(h12);
          break;
        }
        case "ReversedFirstSegment": {
          const s18 = this._cp2(e24, 0, -1);
          t23.push([s18, _5]);
          break;
        }
        case "PerpendicularToSecondSegment": {
          if (e24.length < 3) return [];
          const s18 = this._cp2(e24, -4, 1), i16 = this._cp3(e24, s18, 0.882353, -1.94), h12 = [];
          h12.push(this._mid(s18, i16)), h12.push(_5), t23.push(h12);
          break;
        }
        case "SecondSegmentWithTicks": {
          if (e24.length < 3) return [];
          const s18 = this._cp2(e24, -4, 1), i16 = this._cp3(e24, s18, 0.882353, -1.94), h12 = this._sub(i16, s18);
          let r16;
          r16 = this._crossProduct(h12, this._sub(_5, s18)) > 0 ? this._rightPerp(h12) : this._leftPerp(h12);
          const c4 = [];
          c4.push([s18[0] + (r16[0] - h12[0]) / 3, s18[1] + (r16[1] - h12[1]) / 3]), c4.push(s18), c4.push(i16), c4.push([i16[0] + (r16[0] + h12[0]) / 3, i16[1] + (r16[1] + h12[1]) / 3]), t23.push(c4);
          break;
        }
        case "DoublePerpendicular": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 3), h12 = this._mid(_5, s18), r16 = this._sub(h12, i16);
          this._normalize(r16);
          const c4 = this._crossProduct(r16, this._sub(_5, i16));
          this._leftPerpendicular(r16);
          const u10 = [];
          u10.push(_5), u10.push([i16[0] + r16[0] * c4, i16[1] + r16[1] * c4]), t23.push(u10);
          const o11 = [];
          o11.push([i16[0] - r16[0] * c4, i16[1] - r16[1] * c4]), o11.push(s18), t23.push(o11);
          break;
        }
        case "OppositeToFirstSegment": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 3), h12 = this._mid(_5, s18), r16 = this._sub(h12, i16);
          this._normalize(r16);
          const c4 = this._crossProduct(r16, this._sub(_5, i16));
          this._leftPerpendicular(r16);
          const u10 = [];
          u10.push([i16[0] + r16[0] * c4, i16[1] + r16[1] * c4]), u10.push([i16[0] - r16[0] * c4, i16[1] - r16[1] * c4]), t23.push(u10);
          break;
        }
        case "TriplePerpendicular": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 4), h12 = this._mid(_5, s18), r16 = this._sub(h12, i16);
          this._normalize(r16);
          const c4 = this._crossProduct(r16, this._sub(_5, i16));
          this._leftPerpendicular(r16);
          const u10 = [];
          u10.push([i16[0] + r16[0] * c4 * 0.8, i16[1] + r16[1] * c4 * 0.8]), u10.push([h12[0] + 0.8 * (_5[0] - h12[0]), h12[1] + 0.8 * (_5[1] - h12[1])]), t23.push(u10), t23.push([i16, h12]);
          const o11 = [];
          o11.push([i16[0] - r16[0] * c4 * 0.8, i16[1] - r16[1] * c4 * 0.8]), o11.push([h12[0] + 0.8 * (s18[0] - h12[0]), h12[1] + 0.8 * (s18[1] - h12[1])]), t23.push(o11);
          break;
        }
        case "HalfCircleFirstSegment": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 4), h12 = this._mid(_5, s18);
          let r16 = this._sub(s18, _5);
          const c4 = Math.cos(Math.PI / 18), u10 = Math.sin(Math.PI / 18), o11 = Math.sqrt((1 + c4) / 2), a10 = Math.sqrt((1 - c4) / 2), n25 = [];
          let p6;
          this._crossProduct(r16, this._sub(i16, _5)) > 0 ? (n25.push(_5), r16 = this._sub(_5, h12), p6 = s18) : (n25.push(s18), r16 = this._sub(s18, h12), p6 = _5), this._rotateDirect(r16, o11, a10), r16[0] /= o11, r16[1] /= o11;
          for (let t24 = 1; t24 <= 18; t24++) n25.push(this._add(h12, r16)), this._rotateDirect(r16, c4, u10);
          n25.push(p6), t23.push(n25);
          break;
        }
        case "HalfCircleSecondSegment": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 1, -1);
          let h12 = this._sub(_5, s18);
          this._normalize(h12);
          const r16 = this._crossProduct(h12, this._sub(i16, s18)) / 2;
          this._leftPerpendicular(h12);
          const c4 = [s18[0] + h12[0] * r16, s18[1] + h12[1] * r16];
          h12 = this._sub(s18, c4);
          const u10 = Math.cos(Math.PI / 18);
          let o11 = Math.sin(Math.PI / 18);
          r16 > 0 && (o11 = -o11);
          const a10 = [s18];
          for (let t24 = 1; t24 <= 18; t24++) this._rotateDirect(h12, u10, o11), a10.push(this._add(c4, h12));
          t23.push(a10);
          break;
        }
        case "HalfCircleExtended": {
          const s18 = this._cp2(e24, 0, -2), i16 = this._cp3(e24, s18, 1, -1);
          let h12;
          if (r15 >= 4) h12 = e24[3];
          else {
            const t24 = this._sub(_5, s18);
            h12 = this._add(i16, t24);
          }
          const c4 = this._dist(s18, i16) / 2 / 0.75, u10 = this._sub(s18, _5);
          this._normalize(u10, c4);
          const o11 = this._sub(i16, h12);
          this._normalize(o11, c4);
          const a10 = [h12, i16];
          t23.push(a10);
          const n25 = [this._clone(i16)];
          this._addBezier3(n25, i16, this._add(i16, o11), this._add(s18, u10), s18, 4), n25.push(_5), t23.push(n25);
          break;
        }
        case "OpenCircle": {
          const s18 = this._cp2(e24, -2, 0), i16 = this._sub(s18, _5), h12 = Math.cos(Math.PI / 18), r16 = -Math.sin(Math.PI / 18), c4 = [s18];
          for (let t24 = 1; t24 <= 33; t24++) this._rotateDirect(i16, h12, r16), c4.push(this._add(_5, i16));
          t23.push(c4);
          break;
        }
        case "CoverageEdgesWithTicks": {
          const s18 = this._cp2(e24, 0, -1);
          let i16, h12;
          if (r15 >= 3) i16 = e24[2];
          else {
            const t24 = this._sub(s18, _5), h13 = this._leftPerp(t24);
            i16 = [_5[0] + h13[0] - 0.25 * t24[0], _5[1] + h13[1] - 0.25 * t24[1]];
          }
          if (r15 >= 4) h12 = e24[3];
          else {
            const t24 = this._mid(_5, s18), e25 = this._sub(_5, s18);
            this._normalize(e25), this._leftPerpendicular(e25);
            const r16 = this._crossProduct(e25, this._sub(i16, t24));
            this._rightPerpendicular(e25), h12 = [i16[0] + e25[0] * r16 * 2, i16[1] + e25[1] * r16 * 2];
          }
          const c4 = this._sub(s18, _5);
          let u10, o11;
          u10 = this._crossProduct(c4, this._sub(i16, _5)) > 0 ? this._rightPerp(c4) : this._leftPerp(c4), o11 = [], o11.push(i16), o11.push(_5), o11.push([_5[0] + (u10[0] - c4[0]) / 3, _5[1] + (u10[1] - c4[1]) / 3]), t23.push(o11), u10 = this._crossProduct(c4, this._sub(h12, s18)) > 0 ? this._rightPerp(c4) : this._leftPerp(c4), o11 = [], o11.push([s18[0] + (u10[0] + c4[0]) / 3, s18[1] + (u10[1] + c4[1]) / 3]), o11.push(s18), o11.push(h12), t23.push(o11);
          break;
        }
        case "GapExtentWithDoubleTicks": {
          const s18 = this._cp2(e24, 0, 2), i16 = this._cp3(e24, s18, 0, 1);
          let h12;
          if (r15 >= 4) h12 = e24[3];
          else {
            const t24 = this._sub(s18, _5);
            h12 = this._add(i16, t24);
          }
          this._addAngledTicks(t23, _5, s18, this._mid(i16, h12)), this._addAngledTicks(t23, i16, h12, this._mid(_5, s18));
          break;
        }
        case "GapExtentMidline": {
          const s18 = this._cp2(e24, 2, 0), i16 = this._cp3(e24, s18, 0, 1);
          let h12;
          if (r15 >= 4) h12 = e24[3];
          else {
            const t24 = this._sub(s18, _5);
            h12 = this._add(i16, t24);
          }
          const c4 = [];
          c4.push(this._mid(_5, i16)), c4.push(this._mid(s18, h12)), t23.push(c4);
          break;
        }
        case "Chevron": {
          const s18 = this._cp2(e24, -1, -1);
          let i16;
          if (r15 >= 3) i16 = e24[2];
          else {
            const t24 = this._sub(s18, _5);
            this._leftPerpendicular(t24), i16 = this._add(_5, t24);
          }
          t23.push([s18, this._makeCtrlPt(_5), i16]);
          break;
        }
        case "PerpendicularWithArc": {
          const s18 = this._cp2(e24, 0, -2), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._sub(s18, _5), c4 = this._norm(h12);
          h12[0] /= c4, h12[1] /= c4;
          const u10 = this._crossProduct(h12, this._sub(i16, _5));
          let o11 = this._dotProduct(h12, this._sub(i16, _5));
          o11 < 0.05 * c4 ? o11 = 0.05 * c4 : o11 > 0.95 * c4 && (o11 = 0.95 * c4);
          const a10 = [_5[0] + h12[0] * o11, _5[1] + h12[1] * o11];
          let n25 = this._leftPerp(h12), p6 = [];
          if (p6.push([a10[0] - n25[0] * u10, a10[1] - n25[1] * u10]), p6.push([a10[0] + n25[0] * u10, a10[1] + n25[1] * u10]), t23.push(p6), r15 >= 4) {
            const s19 = e24[3];
            let i17 = this._dotProduct(h12, this._sub(s19, _5));
            i17 < 0.1 * c4 ? i17 = 0.1 * c4 : i17 > 0.9 * c4 && (i17 = 0.9 * c4);
            const r16 = [_5[0] + h12[0] * i17, _5[1] + h12[1] * i17], u11 = this._crossProduct(h12, this._sub(s19, _5)), o12 = [];
            o12.push([r16[0] - n25[0] * u11, r16[1] - n25[1] * u11]), o12.push([r16[0] + n25[0] * u11, r16[1] + n25[1] * u11]), t23.push(o12);
          }
          const d = [s18[0] + n25[0] * u10, s18[1] + n25[1] * u10];
          n25 = this._sub(s18, d);
          const l9 = Math.cos(Math.PI / 18);
          let b3 = Math.sin(Math.PI / 18);
          u10 < 0 && (b3 = -b3), p6 = [_5, s18];
          for (let t24 = 1; t24 <= 9; t24++) this._rotateDirect(n25, l9, b3), p6.push(this._add(d, n25));
          t23.push(p6);
          break;
        }
        case "ClosedHalfCircle": {
          const s18 = this._cp2(e24, 2, 0), i16 = this._mid(_5, s18), h12 = this._sub(s18, i16), r16 = Math.cos(Math.PI / 18), c4 = Math.sin(Math.PI / 18), u10 = [_5, s18];
          for (let t24 = 1; t24 <= 18; t24++) this._rotateDirect(h12, r16, c4), u10.push(this._add(i16, h12));
          t23.push(u10);
          break;
        }
        case "TripleParallelExtended": {
          const s18 = this._cp2(e24, 0, -2), i16 = this._cp3(e24, s18, 1, -2), r16 = this._mid(_5, s18), c4 = this._sub(i16, s18);
          this._normalize(c4);
          const u10 = Math.abs(this._crossProduct(c4, this._sub(r16, s18))) / 2, o11 = this._dist(s18, i16), a10 = [s18, _5];
          a10.push([_5[0] + c4[0] * o11 * 0.5, _5[1] + c4[1] * o11 * 0.5]), t23.push(a10);
          const n25 = [];
          n25.push([r16[0] - c4[0] * u10, r16[1] - c4[1] * u10]), n25.push([r16[0] + c4[0] * o11 * 0.375, r16[1] + c4[1] * o11 * 0.375]), e7(n25[n25.length - 1], 1), n25.push([r16[0] + c4[0] * o11 * 0.75, r16[1] + c4[1] * o11 * 0.75]), t23.push(n25);
          const p6 = [s18, i16];
          t23.push(p6);
          break;
        }
        case "ParallelWithTicks": {
          const s18 = this._cp2(e24, 3, 0), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._sub(i16, s18);
          this._normalize(h12);
          const r16 = this._crossProduct(h12, this._sub(i16, _5));
          this._leftPerpendicular(h12), this._addAngledTicks(t23, _5, s18, i16), this._addAngledTicks(t23, this._mix(_5, 1, h12, r16), this._mix(s18, 1, h12, r16), this._mid(_5, s18));
          break;
        }
        case "Parallel": {
          const s18 = this._cp2(e24, 3, 0), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._sub(s18, _5);
          this._normalize(h12);
          const r16 = this._leftPerp(h12), c4 = this._crossProduct(h12, this._sub(i16, _5));
          let u10 = [_5, s18];
          t23.push(u10), u10 = [], u10.push([_5[0] + r16[0] * c4, _5[1] + r16[1] * c4]), u10.push([s18[0] + r16[0] * c4, s18[1] + r16[1] * c4]), t23.push(u10);
          break;
        }
        case "PerpendicularToFirstSegment": {
          const s18 = this._cp2(e24, 3, 0), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._mid(_5, s18), r16 = this._sub(s18, _5);
          this._normalize(r16);
          const c4 = this._crossProduct(r16, this._sub(i16, _5));
          this._leftPerpendicular(r16);
          const u10 = [];
          u10.push([h12[0] - r16[0] * c4 * 0.25, h12[1] - r16[1] * c4 * 0.25]), u10.push([h12[0] + r16[0] * c4 * 1.25, h12[1] + r16[1] * c4 * 1.25]), t23.push(u10);
          break;
        }
        case "ParallelOffset": {
          const s18 = this._cp2(e24, 3, 0), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._sub(s18, _5);
          this._normalize(h12);
          const r16 = this._crossProduct(h12, this._sub(i16, _5));
          this._leftPerpendicular(h12);
          const c4 = [];
          c4.push([_5[0] - h12[0] * r16, _5[1] - h12[1] * r16]), c4.push([s18[0] - h12[0] * r16, s18[1] - h12[1] * r16]), t23.push(c4);
          const u10 = [];
          u10.push([_5[0] + h12[0] * r16, _5[1] + h12[1] * r16]), u10.push([s18[0] + h12[0] * r16, s18[1] + h12[1] * r16]), t23.push(u10);
          break;
        }
        case "OffsetOpposite": {
          const s18 = this._cp2(e24, 3, 0), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._sub(s18, _5);
          this._normalize(h12);
          const r16 = this._crossProduct(h12, this._sub(i16, _5));
          this._leftPerpendicular(h12);
          const c4 = [];
          c4.push([_5[0] - h12[0] * r16, _5[1] - h12[1] * r16]), c4.push([s18[0] - h12[0] * r16, s18[1] - h12[1] * r16]), t23.push(c4);
          break;
        }
        case "OffsetSame": {
          const s18 = this._cp2(e24, 3, 0), i16 = this._cp3(e24, s18, 0.5, -1), h12 = this._sub(s18, _5);
          this._normalize(h12);
          const r16 = this._crossProduct(h12, this._sub(i16, _5));
          this._leftPerpendicular(h12);
          const c4 = [];
          c4.push([_5[0] + h12[0] * r16, _5[1] + h12[1] * r16]), c4.push([s18[0] + h12[0] * r16, s18[1] + h12[1] * r16]), t23.push(c4);
          break;
        }
        case "CircleWithArc": {
          let s18 = this._cp2(e24, 3, 0);
          const i16 = this._cp3(e24, s18, 0.5, -1);
          let c4, u10;
          if (r15 >= 4) c4 = e24[3], u10 = this._crossProduct(this._sub(c4, s18), this._sub(i16, s18)) > 0;
          else {
            c4 = s18, u10 = this._crossProduct(this._sub(c4, _5), this._sub(i16, _5)) > 0;
            const t24 = 24 * this._geomUnitsPerPoint, h12 = this._sub(c4, _5);
            this._normalize(h12, t24);
            const e25 = Math.sqrt(2) / 2;
            this._rotateDirect(h12, e25, u10 ? e25 : -e25), s18 = this._add(_5, h12);
          }
          const o11 = this._sub(s18, _5), a10 = Math.cos(Math.PI / 18), n25 = Math.sin(Math.PI / 18), p6 = [s18];
          for (let t24 = 1; t24 <= 36; t24++) this._rotateDirect(o11, a10, n25), p6.push(this._add(_5, o11));
          this._add90DegArc(p6, s18, c4, i16, u10), e7(p6[p6.length - 8], 1), t23.push(p6);
          break;
        }
        case "DoubleJog": {
          let s18, i16 = this._cp2(e24, -3, 1), h12 = this._cp3(e24, i16, -1, -0.5);
          if (r15 >= 4) s18 = e24[3];
          else {
            const t24 = _5;
            _5 = i16, s18 = h12;
            const e25 = this._dist(_5, t24), r16 = this._dist(s18, t24);
            let c5 = 30 * this._geomUnitsPerPoint;
            0.5 * e25 < c5 && (c5 = 0.5 * e25), 0.5 * r16 < c5 && (c5 = 0.5 * r16), i16 = this._mix(_5, c5 / e25, t24, (e25 - c5) / e25), h12 = this._mix(s18, c5 / r16, t24, (r16 - c5) / r16);
          }
          const c4 = this._mid(_5, i16), u10 = this._mid(s18, h12), o11 = this._dist(_5, i16), a10 = this._dist(h12, s18);
          let n25 = Math.min(o11, a10) / 8;
          n25 = Math.min(n25, 24 * this._geomUnitsPerPoint);
          const p6 = Math.cos(Math.PI / 4);
          let d = this._sub(_5, i16);
          this._normalize(d, n25), this._crossProduct(d, this._sub(s18, i16)) > 0 ? this._rotateDirect(d, p6, -p6) : this._rotateDirect(d, p6, p6);
          let l9 = [];
          l9.push(i16), l9.push(this._add(c4, d)), l9.push(this._sub(c4, d)), l9.push(_5), t23.push(l9), d = this._sub(s18, h12), this._normalize(d, n25), this._crossProduct(d, this._sub(_5, h12)) < 0 ? this._rotateDirect(d, p6, p6) : this._rotateDirect(d, p6, -p6), l9 = [], l9.push(h12), l9.push(this._add(u10, d)), l9.push(this._sub(u10, d)), l9.push(s18), t23.push(l9);
          break;
        }
        case "PerpendicularOffset": {
          const s18 = this._cp2(e24, -4, 1), i16 = this._cp3(e24, s18, 0.882353, -1.94), h12 = this._sub(i16, s18);
          this._crossProduct(h12, this._sub(_5, s18)) > 0 ? this._rightPerpendicular(h12) : this._leftPerpendicular(h12);
          const r16 = [h12[0] / 8, h12[1] / 8], c4 = this._sub(this._mid(s18, i16), r16);
          t23.push([c4, _5]);
          break;
        }
        case "LineExcludingLastSegment": {
          const s18 = this._arrowPath(e24), i16 = [];
          let h12 = s18.length - 2;
          for (; h12--; ) i16.push(s18[h12]);
          t23.push(i16);
          break;
        }
        case "MultivertexArrow": {
          const s18 = this._arrowPath(e24), i16 = [];
          this._addArrow(i16, s18, false), t23.push(i16);
          break;
        }
        case "CrossedArrow": {
          const s18 = this._arrowPath(e24), i16 = [];
          this._addArrow(i16, s18, true), t23.push(i16);
          break;
        }
        case "ChevronArrow": {
          const [s18, i16] = this._arrowLastSeg(e24), h12 = 10 * this._geomUnitsPerPoint, r16 = this._sub(_5, s18), c4 = this._norm(r16);
          this._normalize(r16);
          const u10 = this._crossProduct(r16, this._sub(i16, s18));
          let o11 = this._dotProduct(r16, this._sub(i16, s18));
          o11 < 0.05 * c4 ? o11 = 0.05 * c4 : o11 > 0.95 * c4 - h12 && (o11 = 0.95 * c4 - h12);
          const a10 = [s18[0] + r16[0] * o11, s18[1] + r16[1] * o11], n25 = this._leftPerp(r16), p6 = [];
          p6.push([a10[0] + n25[0] * u10 + r16[0] * h12, a10[1] + n25[1] * u10 + r16[1] * h12]), p6.push(_5), p6.push([a10[0] - n25[0] * u10 + r16[0] * h12, a10[1] - n25[1] * u10 + r16[1] * h12]), t23.push(p6);
          break;
        }
        case "ChevronArrowOffset": {
          const [s18, i16] = this._arrowLastSeg(e24), h12 = this._sub(_5, s18), r16 = this._norm(h12);
          this._normalize(h12);
          const c4 = this._crossProduct(h12, this._sub(i16, s18));
          let u10 = this._dotProduct(h12, this._sub(i16, s18));
          u10 < 0.05 * r16 ? u10 = 0.05 * r16 : u10 > 0.95 * r16 && (u10 = 0.95 * r16);
          const o11 = [s18[0] + h12[0] * u10, s18[1] + h12[1] * u10];
          this._leftPerpendicular(h12);
          const a10 = [];
          a10.push([o11[0] + h12[0] * c4 * 0.5, o11[1] + h12[1] * c4 * 0.5]), a10.push(this._mid(o11, _5)), a10.push([o11[0] - h12[0] * c4 * 0.5, o11[1] - h12[1] * c4 * 0.5]), t23.push(a10);
          break;
        }
        case "PartialFirstSegment": {
          const [s18, i16] = this._arrowLastSeg(e24), h12 = this._sub(_5, s18), r16 = this._norm(h12);
          this._normalize(h12);
          let c4 = this._dotProduct(h12, this._sub(i16, s18));
          c4 < 0.05 * r16 ? c4 = 0.05 * r16 : c4 > 0.95 * r16 && (c4 = 0.95 * r16);
          const u10 = [s18[0] + h12[0] * c4, s18[1] + h12[1] * c4];
          t23.push([s18, u10]);
          break;
        }
        case "Arch": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 1), h12 = this._sub(_5, s18), r16 = this._mix(i16, 1, h12, 0.55), c4 = this._mix(i16, 1, h12, -0.55), u10 = [_5];
          this._addBezier2(u10, _5, r16, i16, 4), this._addBezier2(u10, i16, c4, s18, 4), t23.push(u10);
          break;
        }
        case "CurvedParallelTicks": {
          const s18 = this._cp2(e24, -4, 1), i16 = this._cp3(e24, s18, 0.882353, -1.94), h12 = this._sub(i16, s18);
          this._crossProduct(h12, this._sub(_5, s18)) > 0 ? this._rightPerpendicular(h12) : this._leftPerpendicular(h12);
          const r16 = [h12[0] / 8, h12[1] / 8], c4 = this._sub(this._mid(s18, i16), r16), u10 = this._sub(this._mix(s18, 0.75, i16, 0.25), r16), o11 = this._sub(this._mix(s18, 0.25, i16, 0.75), r16), a10 = [s18];
          this._addBezier2(a10, s18, u10, c4, 3), this._addBezier2(a10, c4, o11, i16, 3), t23.push(a10);
          for (let e25 = 0; e25 < 8; e25++) {
            const s19 = a10[2 * e25 + 1], i17 = [this._clone(s19)];
            i17.push(this._add(s19, [h12[0] / 4, h12[1] / 4])), t23.push(i17);
          }
          break;
        }
        case "Arc90Degrees": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 1), h12 = [s18];
          this._add90DegArc(h12, s18, _5, i16), t23.push(h12);
          break;
        }
        case "TipWithPerpendicularAndTicks": {
          const [s18, i16] = this._arrowLastSeg(e24), h12 = 10 * this._geomUnitsPerPoint, r16 = this._sub(_5, s18), c4 = this._norm(r16);
          this._normalize(r16);
          let u10 = this._crossProduct(r16, this._sub(i16, s18)), o11 = this._dotProduct(r16, this._sub(i16, s18));
          o11 < 0.05 * c4 ? o11 = 0.05 * c4 : o11 > 0.95 * c4 - h12 && (o11 = 0.95 * c4 - h12);
          const a10 = this._leftPerp(r16), n25 = [_5[0] - r16[0] * h12, _5[1] - r16[1] * h12], p6 = 0.5 * Math.max(c4 - o11 - h12, h12);
          u10 = Math.abs(u10);
          const d = [];
          d.push([n25[0] + a10[0] * (u10 + p6) - r16[0] * p6, n25[1] + a10[1] * (u10 + p6) - r16[1] * p6]), d.push([n25[0] + a10[0] * u10, n25[1] + a10[1] * u10]), d.push([n25[0] - a10[0] * u10, n25[1] - a10[1] * u10]), d.push([n25[0] - a10[0] * (u10 + p6) - r16[0] * p6, n25[1] - a10[1] * (u10 + p6) - r16[1] * p6]), t23.push(d), t23.push([n25, _5]);
          break;
        }
        case "ConcentricCircles": {
          const s18 = this._cp2(e24, 1, 0), i16 = this._cp3(e24, s18, 2, 0), c4 = Math.cos(Math.PI / 18), u10 = Math.sin(Math.PI / 18);
          let o11 = this._dist(s18, _5), a10 = [o11, 0], n25 = [];
          for (let t24 = 0; t24 <= 36; t24++) n25.push(this._add(_5, a10)), this._rotateDirect(a10, c4, u10);
          if (t23.push(n25), r15 >= 4) {
            n25 = [];
            const s19 = e24[3];
            o11 = this._dist(s19, _5), a10 = [o11, 0];
            for (let t24 = 0; t24 <= 36; t24++) n25.push(this._add(_5, a10)), 0 === t24 && (n25.push(this._add(_5, a10)), e7(n25[1], 1)), this._rotateDirect(a10, c4, u10);
            t23.push(n25);
          }
          n25 = [], o11 = this._dist(i16, _5), a10 = [o11, 0];
          for (let t24 = 0; t24 <= 36; t24++) n25.push(this._add(_5, a10)), this._rotateDirect(a10, c4, u10);
          t23.push(n25);
          break;
        }
        case "DoubleJogArrow": {
          _5 = this._arrowPath(e24)[0];
          const [s18, i16] = this._arrowLastSeg(e24), h12 = this._sub(_5, s18), r16 = this._norm(h12);
          this._normalize(h12);
          const c4 = Math.abs(this._crossProduct(h12, this._sub(i16, _5)));
          let u10 = Math.abs(this._dotProduct(h12, this._sub(i16, _5)));
          u10 < 0.05 * r16 ? u10 = 0.05 * r16 : u10 > 0.95 * r16 && (u10 = 0.95 * r16);
          const o11 = Math.max(c4, u10), a10 = this._leftPerp(h12);
          let n25 = [];
          const p6 = [_5[0] - h12[0] * u10 * 0.5 + a10[0] * c4 * 0.5, _5[1] - h12[1] * u10 * 0.5 + a10[1] * c4 * 0.5];
          n25.push([p6[0], p6[1]]), p6[0] += h12[0] * o11 * 0.5 + a10[0] * o11 * 0.4, p6[1] += h12[1] * o11 * 0.5 + a10[1] * o11 * 0.4, n25.push([p6[0], p6[1]]), p6[0] -= a10[0] * o11 * 0.25, p6[1] -= a10[1] * o11 * 0.25, n25.push([p6[0], p6[1]]), p6[0] += h12[0] * o11 * 0.5 + a10[0] * o11 * 0.4, p6[1] += h12[1] * o11 * 0.5 + a10[1] * o11 * 0.4, n25.push([p6[0], p6[1]]), t23.push(n25), n25 = [], p6[0] = _5[0] - h12[0] * u10 * 0.5 - a10[0] * c4 * 0.5, p6[1] = _5[1] - h12[1] * u10 * 0.5 - a10[1] * c4 * 0.5, n25.push([p6[0], p6[1]]), p6[0] += h12[0] * o11 * 0.5 - a10[0] * o11 * 0.4, p6[1] += h12[1] * o11 * 0.5 - a10[1] * o11 * 0.4, n25.push([p6[0], p6[1]]), p6[0] += a10[0] * o11 * 0.25, p6[1] += a10[1] * o11 * 0.25, n25.push([p6[0], p6[1]]), p6[0] += h12[0] * o11 * 0.5 - a10[0] * o11 * 0.4, p6[1] += h12[1] * o11 * 0.5 - a10[1] * o11 * 0.4, n25.push([p6[0], p6[1]]), t23.push(n25);
          break;
        }
        case "LinkedChevrons": {
          const s18 = this._cp2(e24, -5, 0), i16 = this._cp3(e24, s18, -0.2, 1), h12 = this._sub(_5, s18);
          this._normalize(h12);
          const r16 = this._leftPerp(h12), c4 = Math.abs(this._crossProduct(h12, this._sub(i16, s18)));
          t23.push([s18, _5]);
          const u10 = [];
          u10.push([_5[0] - h12[0] * c4 + r16[0] * c4, _5[1] - h12[1] * c4 + r16[1] * c4]), u10.push(_5), u10.push([_5[0] - h12[0] * c4 - r16[0] * c4, _5[1] - h12[1] * c4 - r16[1] * c4]), t23.push(u10), this._addDash(t23, s18, [-h12[0] * c4 + r16[0] * c4, -h12[1] * c4 + r16[1] * c4]), this._addDash(t23, s18, [-h12[0] * c4 - r16[0] * c4, -h12[1] * c4 - r16[1] * c4]);
          break;
        }
        case "SegmentThenHalfCircle": {
          const s18 = this._cp2(e24, 2, 0), i16 = this._cp3(e24, s18, 1.5, 0);
          let h12;
          h12 = r15 >= 4 ? e24[3] : this._cp3(e24, s18, 1.25, -0.5);
          const c4 = this._sub(s18, _5);
          this._normalize(c4);
          const u10 = 0.5 * this._dist(s18, i16), o11 = this._crossProduct(c4, this._sub(h12, _5)) > 0, a10 = Math.cos(Math.PI / 18);
          let n25 = Math.sin(Math.PI / 18);
          o11 && (n25 = -n25);
          const p6 = [_5, s18];
          c4[0] *= u10, c4[1] *= u10;
          const d = this._add(s18, c4);
          c4[0] = -c4[0], c4[1] = -c4[1];
          for (let t24 = 1; t24 <= 18; t24++) this._rotateDirect(c4, a10, n25), p6.push(this._add(d, c4));
          t23.push(p6);
          break;
        }
        case "LineWithStraightTicks": {
          const s18 = this._cp2(e24, -2, 1), i16 = this._cp3(e24, s18, -1, -0.5), h12 = this._sub(i16, s18);
          this._normalize(h12);
          const r16 = this._dotProduct(h12, this._sub(s18, _5)), c4 = this._dotProduct(h12, this._sub(i16, _5));
          let u10 = [_5];
          u10.push([_5[0] + h12[0] * r16, _5[1] + h12[1] * r16]), u10.push(s18), t23.push(u10), u10 = [_5], u10.push([_5[0] + h12[0] * c4, _5[1] + h12[1] * c4]), u10.push(i16), t23.push(u10);
          break;
        }
        case "DoubleCurve": {
          const s18 = this._cp2(e24, -5, -1), i16 = this._cp3(e24, s18, 2, 0), r16 = Math.atan2(1, 5), c4 = Math.cos(r16), u10 = Math.sin(r16), o11 = this._sub(s18, _5), a10 = this._dist(_5, s18);
          this._normalize(o11), this._rotateDirect(o11, c4, -u10);
          const n25 = [_5];
          n25.push([_5[0] + o11[0] * a10 * 0.5, _5[1] + o11[1] * a10 * 0.5]), e7(n25[1], 1), n25.push([_5[0] + o11[0] * a10 * 0.8, _5[1] + o11[1] * a10 * 0.8]), this._addBezier2(n25, n25[2], [_5[0] + o11[0] * a10, _5[1] + o11[1] * a10], s18, 3);
          const p6 = this._sub(i16, s18), d = this._dist(s18, i16);
          this._normalize(p6), this._rotateDirect(p6, c4, -u10), this._addBezier2(n25, s18, [i16[0] - p6[0] * d, i16[1] - p6[1] * d], [i16[0] - p6[0] * d * 0.8, i16[1] - p6[1] * d * 0.8], 3), n25.push(i16), t23.push(n25);
          break;
        }
        case "ParallelWithTicksByWidth": {
          const s18 = this._cp2(e24, 0, -1), i16 = this._cp3(e24, s18, 0.5, 3), h12 = this._sub(s18, _5);
          this._normalize(h12);
          const r16 = this._crossProduct(h12, this._sub(i16, _5));
          this._leftPerpendicular(h12), r16 > 0 ? (this._addAngledTicks(t23, _5, [_5[0] + h12[0] * r16, _5[1] + h12[1] * r16], s18), this._addAngledTicks(t23, s18, [s18[0] + h12[0] * r16, s18[1] + h12[1] * r16], _5)) : (this._addAngledTicks(t23, [_5[0] + h12[0] * r16, _5[1] + h12[1] * r16], _5, s18), this._addAngledTicks(t23, [s18[0] + h12[0] * r16, s18[1] + h12[1] * r16], _5, s18));
          break;
        }
        case "EnclosingRoundedRectangle": {
          const s18 = this._cp2(e24, 3, -2), t24 = [Math.min(_5[0], s18[0]), Math.max(_5[1], s18[1])], i16 = [Math.max(_5[0], s18[0]), Math.min(_5[1], s18[1])], h12 = i16[0] - t24[0], r16 = t24[1] - i16[1], c4 = Math.min(h12, r16) / 10, u10 = [];
          u10.push([t24[0] + c4 + 0.75 * (h12 - 2 * c4), t24[1]]), u10.push([i16[0] - c4, t24[1]]), this._add90DegArc(u10, [i16[0] - c4, t24[1]], [i16[0], t24[1] - c4], [i16[0], t24[1]]), u10.push([i16[0], i16[1] + c4]), this._add90DegArc(u10, [i16[0], i16[1] + c4], [i16[0] - c4, i16[1]], i16), u10.push([t24[0] + c4, i16[1]]), this._add90DegArc(u10, [t24[0] + c4, i16[1]], [t24[0], i16[1] + c4], [t24[0], i16[1]]), u10.push([t24[0], t24[1] - c4]), this._add90DegArc(u10, [t24[0], t24[1] - c4], [t24[0] + c4, t24[1]], t24), u10.push([t24[0] + c4 + 0.75 * (h12 - 2 * c4), t24[1]]);
          break;
        }
        default:
          t23.push(e24);
      }
    }
    return t23;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectCut.js
var r4 = class _r {
  static {
    this.instance = null;
  }
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(e24, t23, i16) {
    return new u6(e24, t23, i16);
  }
};
var u6 = class extends s4 {
  constructor(e24, t23, r15) {
    super(e24, true, true), this._curveHelper = new n6(), this._beginCut = (void 0 !== t23.beginCut ? t23.beginCut : 1) * r15, this._endCut = (void 0 !== t23.endCut ? t23.endCut : 1) * r15, this._middleCut = (void 0 !== t23.middleCut ? t23.middleCut : 0) * r15, this._invert = void 0 !== t23.invert && t23.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t23) {
    const { _beginCut: i16, _endCut: r15, _middleCut: u10 } = this, s16 = t23.pathLength(), n25 = _.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (0 !== i16 || 0 !== r15 || 0 !== u10) if (i16 + r15 + u10 >= s16) for (n25.startPath(); t23.nextPoint(); ) n25.pushXY(t23.x, t23.y);
      else this._curveHelper.appendSubCurve(n25, t23, 0, i16), this._curveHelper.appendSubCurve(n25, t23, 0.5 * (s16 - u10), 0.5 * (s16 + u10)), this._curveHelper.appendSubCurve(n25, t23, s16 - r15, r15);
    } else if (0 === i16 && 0 === r15 && 0 === u10) for (n25.startPath(); t23.nextPoint(); ) n25.pushXY(t23.x, t23.y);
    else i16 + r15 + u10 < s16 && (0 === u10 ? this._curveHelper.appendSubCurve(n25, t23, i16, s16 - r15) : (this._curveHelper.appendSubCurve(n25, t23, i16, 0.5 * (s16 - u10)), this._curveHelper.appendSubCurve(n25, t23, 0.5 * (s16 + u10), s16 - r15)));
    return 0 === n25.totalSize ? null : n25;
  }
};

// node_modules/@arcgis/core/symbols/cim/GeometryWalker.js
var i8 = 1e-7;
var n8 = class {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return 0 === this._values.length;
  }
  size() {
    return this._values.length;
  }
  init(t23, e24 = true) {
    if (this._setEmpty(), !t23 || 0 === t23.length) return false;
    for (let s16 = 0; s16 < t23.length; s16++) {
      let n25 = Math.abs(t23[s16]);
      e24 && n25 < i8 && (n25 = i8), this._values.push(n25), this._length += n25;
    }
    return 0 !== this._length && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, true);
  }
  scale(t23) {
    const e24 = this._values ? this._values.length : 0;
    for (let s16 = 0; s16 < e24; ++s16) this._values[s16] *= t23;
    this._length *= t23, this.extPtGap *= t23, this.ctrlPtGap *= t23;
  }
  addValue(t23) {
    this._length += t23, this._values.push(t23);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
};
var h5 = class {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var r5 = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = false, this.isPartEnd = false;
  }
  isValid() {
    return null !== this.segment;
  }
  copyTo(t23) {
    t23.segment = this.segment, t23.segmentLength = this.segmentLength, t23.abscissa = this.abscissa, t23.isPathEnd = this.isPathEnd, t23.isPartEnd = this.isPartEnd;
  }
};
var a3 = class extends n6 {
  constructor(t23 = 0, e24 = false) {
    super(t23, e24), this._tempPos = new r5(), this._tempPt = [0, 0], this._tolerance = e8, this._currentPosition = new r5();
  }
  updateTolerance(t23) {
    this._tolerance = e8 * t23;
  }
  init(t23, e24, s16 = true) {
    return s16 ? (this._patternLength = e24.length(), this._partExtPtGap = e24.extPtGap, this._partCtrlPtGap = e24.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t23, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t23, e24 = 0) {
    const s16 = new r5();
    return !!this._nextPosition(t23, s16, null, e24) && (s16.copyTo(this._currentPosition), true);
  }
  curPointAndAngle(t23) {
    t23.pt = this._getPoint(this._currentPosition);
    const [e24, s16] = this._getAngleCS(this._tempPt, this._currentPosition);
    t23.ca = e24, t23.sa = s16;
  }
  nextPointAndAngle(t23, e24, s16 = 0) {
    const i16 = this._tempPos;
    if (!this._nextPosition(t23, i16, null, s16)) return false;
    i16.copyTo(this._currentPosition), e24.pt = this._getPoint(i16);
    const [n25, h12] = this._getAngleCS(this._tempPt, i16);
    return e24.ca = n25, e24.sa = h12, true;
  }
  nextCurve(e24) {
    if (0 === e24) return null;
    const s16 = _.createEmptyOptimizedCIM("esriGeometryPolyline");
    s16.startPath(), s16.nextPath();
    const i16 = new r5();
    return this._nextPosition(e24, i16, s16, 1) ? (i16.copyTo(this._currentPosition), s16) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t23) {
    return this._pathCursor.seekInPath(t23), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t23) {
    return [this.getPt(t23), this.getPt(t23 + 1)];
  }
  _nextPosition(t23, e24, s16, i16) {
    if (this._currentPosition.isPathEnd) return false;
    let n25 = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (n25 /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e24); e24.abscissa + t23 * this._partLengthRatio > e24.segmentLength + this._tolerance; ) {
      if (s16) {
        if (0 === s16.pathSize) if (0 === n25) {
          const t25 = e24.segment[0];
          s16.pushXY(t25[0], t25[1]);
        } else s16.pushPoint(this.getSegCoord2D(e24.segment, n25));
        const t24 = e24.segment[1];
        s16.pushXY(t24[0], t24[1]);
      }
      if (n25 = 0, t23 -= (e24.segmentLength - e24.abscissa) / this._partLengthRatio, this._partSegCount) e24.segment = this._nextSegment(), e24.segmentLength = this.getSegLength(e24.segment), e24.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart()) return 0 !== i16 && (e24.segmentLength = this.getSegLength(e24.segment), e24.isPartEnd = true, 1 === i16 ? (e24.abscissa = e24.segmentLength, e24.isPathEnd = true) : e24.abscissa = e24.segmentLength + t23, true);
        this._currentPosition.copyTo(e24);
      }
    }
    if (e24.abscissa += t23 * this._partLengthRatio, s16) {
      0 === s16.pathSize && (0 === n25 ? s16.pushPoint(e24.segment[0]) : s16.pushPoint(this.getSegCoord2D(e24.segment, n25)));
      const t24 = e24.abscissa / e24.segmentLength;
      1 === t24 ? s16.pushPoint(e24.segment[1]) : s16.pushPoint(this.getSegCoord2D(e24.segment, t24));
    }
    return this._partSegCount || Math.abs(e24.abscissa - e24.segmentLength) < this._tolerance && (e24.isPathEnd = this._partIsLast, e24.isPartEnd = true), true;
  }
  _getPoint(t23) {
    const e24 = t23.segmentLength <= 0 ? 0 : t23.abscissa / t23.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e24);
  }
  _getAngleCS(t23, e24) {
    const s16 = e24.segmentLength <= 0 ? 0 : e24.abscissa / e24.segmentLength;
    return this.getSegAngleCS(t23, this._currentPosition.segment, s16);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; ) this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment()) return false;
    for (this._partLength = 0, this._partIsLast = true, this._partSegCount = 0; this._hasNextSegment(); ) if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
      this._partIsLast = !this._hasNextSegment();
      break;
    }
    let t23 = this._partSegCount;
    for (; t23; ) this._previousSegment(), --t23;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = false, --this._partSegCount;
    const e24 = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e24);
    let s16 = e24 + this._partSegCount + 1;
    if (s16 >= this._pathCursor.pathSize && (s16 = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s16), this._patternLength > 0) {
      const t24 = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, e25 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let s17 = Math.round((this._partLength - (t24 + e25)) / this._patternLength);
      s17 <= 0 && (s17 = t24 + e25 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t24 + e25 + s17 * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else this._partLengthRatio = 1;
    return true;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.pathSize - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectDashes.js
var n9 = class _n {
  static {
    this.instance = null;
  }
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t23, e24, s16) {
    return new h6(t23, e24, s16);
  }
};
var h6 = class extends s4 {
  constructor(t23, e24, s16) {
    super(t23, true, true), this._firstCurve = null, this._walker = new a3(), this._walker.updateTolerance(s16), this._endings = e24.lineDashEnding ?? "NoConstraint", this._customDashPos = -(e24.offsetAlongLine ?? 0) * s16, this._offsetAtEnd = (e24.customEndingOffset ?? 0) * s16;
    let n25 = j3(e24).dashTemplate;
    null == n25 && (n25 = []), n25.length % 2 && (n25 = [...n25, ...n25]);
    let h12 = 0;
    for (; h12 < n25.length && 0 === n25[h12]; ) h12++;
    let l9 = 0;
    const u10 = [];
    for (let i16 = h12; i16 < n25.length; i16++) 0 === n25[i16] ? l9++ : 0 === l9 ? u10.push(n25[i16]) : 1 & l9 ? (u10[u10.length - 1] += n25[i16], l9 = 0) : (u10.push(n25[i16]), l9 = 0);
    n25 = u10, n25.length <= 1 ? n25 = 0 === n25.length || h12 % 2 == 0 ? [] : [-1] : n25.length % 2 == 1 ? h12 % 2 == 1 ? n25.unshift(0) : n25.push(0) : h12 % 2 == 1 && (n25.unshift(0), n25.push(0)), this._pattern = new n8(), this._pattern.init(n25, false), this._pattern.scale(s16);
  }
  processPath(s16) {
    if (this._pattern.size() % 2 == 1) return null;
    if (0 === this._pattern.length()) {
      this.iteratePath = false;
      const i17 = n2(s16);
      return _.fromJSONCIM({ paths: [i17] });
    }
    if (!this.iteratePath) {
      let i17 = true;
      switch (this._endings) {
        case "HalfPattern":
        case "HalfGap":
        default:
          this._pattern.extPtGap = 0;
          break;
        case "FullPattern":
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case "FullGap":
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case "NoConstraint":
          this.isClosed || (i17 = false);
          break;
        case "Custom":
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const r16 = s16.pathLength();
      if (this._pattern.isEmpty() || r16 < 0.1 * this._pattern.length()) {
        const i18 = n2(s16);
        return _.fromJSONCIM({ paths: [i18] });
      }
      if (!this._walker.init(s16, this._pattern, i17)) {
        const i18 = n2(s16);
        return _.fromJSONCIM({ paths: [i18] });
      }
    }
    let i16;
    if (this.iteratePath) i16 = this._pattern.nextValue();
    else {
      let t23;
      switch (this._endings) {
        case "HalfPattern":
        default:
          t23 = 0.5 * this._pattern.firstValue();
          break;
        case "HalfGap":
          t23 = 0.5 * -this._pattern.lastValue();
          break;
        case "FullGap":
          t23 = -this._pattern.lastValue();
          break;
        case "FullPattern":
          t23 = 0;
          break;
        case "NoConstraint":
        case "Custom":
          t23 = -this._customDashPos;
      }
      let e24 = t23 / this._pattern.length();
      e24 -= Math.floor(e24), t23 = e24 * this._pattern.length(), this._pattern.reset(), i16 = this._pattern.nextValue();
      let s17 = false;
      for (; t23 >= i16; ) t23 -= i16, i16 = this._pattern.nextValue(), s17 = !s17;
      i16 -= t23, s17 ? (this._walker.nextPosition(i16), i16 = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(i16), i16 = this._pattern.nextValue(), this._walker.nextPosition(i16), i16 = this._pattern.nextValue());
    }
    0 === i16 && (i16 = this._pattern.nextValue(), this._walker.nextPosition(i16), i16 = this._pattern.nextValue());
    let r15 = this._walker.nextCurve(i16);
    if (r15) if (this._walker.isPathEnd()) {
      if (this.iteratePath = false, this._firstCurve) {
        for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); ) r15.pushXY(this._firstCurve.x, this._firstCurve.y);
        this._firstCurve = null;
      }
    } else i16 = this._pattern.nextValue(), !this._walker.nextPosition(i16) || this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (r15.pushCursor(this._firstCurve), this._firstCurve = null)) : this.iteratePath = true;
    else this.iteratePath = false, r15 = this._firstCurve, this._firstCurve = null;
    return r15?.reset(), r15;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectDonut.js
var s7 = class _s {
  static {
    this.instance = null;
  }
  static local() {
    return null === _s.instance && (_s.instance = new _s()), _s.instance;
  }
  execute(t23, i16, e24, n25, s16, h12) {
    return new r6(t23, i16, e24, n25, s16, h12);
  }
};
var r6 = class {
  constructor(t23, i16, e24, n25, s16, r15) {
    this._preventClipping = r15, this._inputGeometries = t23, this._tileKey = n25, this._maxInflateSize = s16 * e24, this._width = (void 0 !== i16.width ? i16.width : 2) * e24, i16.method, this._option = i16.option ?? "Accurate";
  }
  next() {
    let s16;
    for (; s16 = this._inputGeometries.next(); ) {
      if ("esriGeometryEnvelope" === s16.geometryType && this._width > 0) {
        const i16 = s16.asJSON();
        return Math.min(i16.xmax - i16.xmin, i16.ymax - i16.ymin) - 2 * this._width < 0 ? s16 : _.fromJSONCIM({ paths: [[[i16.xmin + this._width, i16.ymin + this._width], [i16.xmax - this._width, i16.ymin + this._width], [i16.xmax - this._width, i16.ymax - this._width], [i16.xmin + this._width, i16.ymax - this._width], [i16.xmin + this._width, i16.ymin + this._width]], [[i16.xmin, i16.ymin], [i16.xmin, i16.ymax], [i16.xmax, i16.ymax], [i16.xmax, i16.ymin], [i16.xmin, i16.ymin]]] });
      }
      if ("esriGeometryPolygon" === s16.geometryType) {
        if (0 === this._width) return s16.clone();
        const t23 = o5.module, r15 = !this._preventClipping && this._tileKey ? P2(s16, this._maxInflateSize, true) : s16.clone();
        if (!r15) continue;
        const h12 = __spreadProps(__spreadValues({}, r15.asJSON()), { spatialReference: { wkid: S.WebMercator.wkid } }), o11 = t23.execute(h12, -this._width);
        if (o11) {
          for (const i16 of o11.rings) if (i16) {
            r15.startPath();
            for (const t24 of i16.reverse()) r15.pushXY(t24[0], r15.yFactor * t24[1]);
          }
        }
        return r15;
      }
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectEnclosingPolygon.js
var o6 = class _o {
  static {
    this.instance = null;
  }
  static local() {
    return null === _o.instance && (_o.instance = new _o()), _o.instance;
  }
  execute(e24, t23) {
    return new s8(e24, t23);
  }
};
var s8 = class {
  constructor(e24, t23) {
    this._inputGeometries = e24, this._medhod = t23.method;
  }
  next() {
    let e24 = this._inputGeometries.next();
    const t23 = this._medhod;
    for (; null != e24; ) {
      if (e24.totalSize > 0) switch (t23) {
        case "RectangularBox":
          return i9(e24);
        case "ConvexHull":
          return this._constructConvexHull(e24);
        default:
          return u7(e24);
      }
      e24 = this._inputGeometries.next();
    }
    return null;
  }
  _constructConvexHull(r15) {
    switch (r15.geometryType) {
      case "esriGeometryPolyline":
      case "esriGeometryPolygon": {
        const o11 = s6.module, s16 = __spreadProps(__spreadValues({}, r15.asJSON()), { spatialReference: { wkid: S.WebMercator.wkid } }), i16 = o11.execute(s16);
        return i16 ? _.fromJSONCIM(i16) : null;
      }
      case "esriGeometryEnvelope":
        return r15;
      default:
        return null;
    }
  }
};
function i9(t23) {
  const n25 = x(t23), o11 = { xmin: n25[0], ymin: n25[1], xmax: n25[2], ymax: n25[3] };
  return _.fromJSONCIM(o11);
}
function u7(t23) {
  switch (t23.geometryType) {
    case "esriGeometryPolyline": {
      const r15 = [];
      for (; t23.nextPath(); ) l6(t23, r15);
      return _.fromJSONCIM({ rings: r15 });
    }
    case "esriGeometryPolygon":
    case "esriGeometryEnvelope":
      return t23;
    default:
      return null;
  }
}
function l6(e24, t23) {
  if (e24.seekPathStart(), !e24.nextPoint()) return;
  const r15 = e24.x, n25 = e24.y, o11 = [[r15, n25]];
  for (t23.push(o11); e24.nextPoint(); ) o11.push([e24.x, e24.y]);
  o11.push([r15, n25]);
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectJog.js
var e10 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t23, i16, s16) {
    return new n10(t23, i16, s16);
  }
};
var n10 = class extends s4 {
  constructor(t23, i16, e24) {
    super(t23, false, true), this._curveHelper = new n6(), this._length = (void 0 !== i16.length ? i16.length : 20) * e24, this._angle = void 0 !== i16.angle ? i16.angle : 225, this._position = void 0 !== i16.position ? i16.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = false;
  }
  processPath(i16) {
    const s16 = _.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(i16)) return null;
    i16.seekInPath(0);
    const e24 = i16.x, n25 = i16.y;
    i16.seekInPath(i16.pathSize - 1);
    const o11 = i16.x, r15 = i16.y, h12 = [o11 - e24, r15 - n25];
    this._curveHelper.normalize(h12);
    const l9 = e24 + (o11 - e24) * this._position / 100, a10 = n25 + (r15 - n25) * this._position / 100, _5 = Math.cos((90 - this._angle) / 180 * Math.PI);
    let p6 = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (p6 = -p6), this._mirror = !this._mirror;
    const c4 = [l9 - this._length / 2 * _5, a10 - this._length / 2 * p6], m4 = [l9 + this._length / 2 * _5, a10 + this._length / 2 * p6];
    return s16.pushPath([[e24, n25], c4, m4, [o11, r15]]), s16;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectMove.js
var t8 = class _t2 {
  static {
    this.instance = null;
  }
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t23, s16, n25) {
    return new e11(t23, s16, n25);
  }
};
var e11 = class {
  constructor(t23, e24, s16) {
    this._inputGeometries = t23, this._offsetX = void 0 !== e24.offsetX ? e24.offsetX * s16 : 0, this._offsetY = void 0 !== e24.offsetY ? e24.offsetY * s16 : 0;
  }
  next() {
    let t23 = this._inputGeometries.next();
    for (; t23; ) {
      if (t23.totalSize > 0) return this._move(t23.clone(), this._offsetX, this._offsetY);
      t23 = this._inputGeometries.next();
    }
    return null;
  }
  _move(t23, e24, s16) {
    for (; t23.nextPath(); ) for (; t23.nextPoint(); ) t23.x = t23.x + e24, t23.y = t23.y + s16;
    return t23.reset(), t23;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectOffset.js
var a4 = 10;
var l7 = class _l {
  static {
    this.instance = null;
  }
  static local() {
    return null === _l.instance && (_l.instance = new _l()), _l.instance;
  }
  execute(e24, t23, r15, s16, i16, o11) {
    return new h7(e24, t23, r15, s16, i16, o11);
  }
};
var h7 = class {
  constructor(e24, t23, r15, s16, i16, o11) {
    this._preventClipping = o11, this._inputGeometries = e24, this._tileKey = s16, this._curveHelper = new n6(), this._offset = (t23.offset ?? 1) * r15, this._method = t23.method ?? "Square", this._maxInflateSize = Math.max(Math.abs(i16 * r15), a4), this._option = t23.option || "Fast", this._offsetFlattenError = e8 * r15;
  }
  next() {
    let f5;
    for (; f5 = this._inputGeometries.next(); ) {
      if (0 === this._offset) return f5.clone();
      if ("esriGeometryEnvelope" === f5.geometryType) {
        if ("Rounded" === this._method && this._offset > 0) {
          const r16 = n2(f5), s16 = this._curveHelper.offset(r16, -this._offset, this._method, 4, this._offsetFlattenError);
          if (s16) {
            const t23 = _.createEmptyOptimizedCIM(f5.geometryType);
            return t23.pushPath(s16), t23;
          }
          return null;
        }
        const r15 = f5.asJSON();
        if (n3(r15) && Math.min(r15.xmax - r15.xmin, r15.ymax - r15.ymin) + 2 * this._offset > 0) return _.fromJSONCIM({ xmin: r15.xmin - this._offset, xmax: r15.xmax + this._offset, ymin: r15.ymin - this._offset, ymax: r15.ymax + this._offset });
      }
      const m4 = !this._preventClipping && this._tileKey ? P2(f5, this._maxInflateSize, true) : f5.clone();
      if (!m4) continue;
      const a10 = p3.module, l9 = i7.module, h12 = __spreadProps(__spreadValues({}, m4.asJSON()), { spatialReference: { wkid: S.WebMercator.wkid } });
      let c4, p6 = u8(this._method);
      return "esriGeometryPolygon" === f5.geometryType && this._offset > 0 ? ("square" === p6 && (p6 = "bevel"), c4 = l9.executeMany([h12], [this._offset], p6, "round")[0]) : c4 = a10.execute(h12, -this._offset, { joins: p6, flattenError: this._offsetFlattenError, miterLimit: 4 }), c4 ? _.fromJSONCIM(c4) : null;
    }
    return null;
  }
};
function u8(e24) {
  switch (e24) {
    case "Rounded":
      return "round";
    case "Bevelled":
      return "bevel";
    case "Mitered":
      return "miter";
    case "Square":
      return "square";
  }
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectRadial.js
var n11 = class _n {
  static {
    this.instance = null;
  }
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t23, e24, i16) {
    return new r7(t23, e24, i16);
  }
};
var r7 = class {
  constructor(t23, e24, n25) {
    this._inputGeometries = t23, this._length = (void 0 !== e24.length ? e24.length : o4.CIMGeometricEffectRadial.length) * n25, this._angle = void 0 !== e24.angle ? e24.angle * Math.PI / 180 : o4.CIMGeometricEffectRadial.angle, this._lx = Math.cos(this._angle) * this._length, this._ly = Math.sin(this._angle) * this._length;
  }
  next() {
    let i16 = this._inputGeometries.next();
    for (; i16; ) {
      if ("esriGeometryPoint" === i16.geometryType || "esriGeometryMultipoint" === i16.geometryType) {
        const e24 = _.createEmptyOptimizedCIM("esriGeometryPolyline");
        return i16.nextPath() && i16.nextPoint() && e24.pushPath([[i16.x, i16.y], [i16.x + this._lx, i16.y + this._ly]]), e24;
      }
      if ("esriGeometryPolygon" === i16.geometryType) {
        const n25 = I(i16);
        if (!n25) return null;
        const r15 = _.createEmptyOptimizedCIM("esriGeometryPolyline");
        return r15.pushPath([[n25[0], n25[1]], [n25[0] + this._lx, n25[1] + this._ly]]), r15;
      }
      i16 = this._inputGeometries.next();
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectReverse.js
var e12 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e24, n25, r15) {
    return new t9(e24, n25, r15);
  }
};
var t9 = class {
  constructor(e24, t23, n25) {
    this._inputGeometries = e24, this._reverse = void 0 === t23.reverse || t23.reverse;
  }
  next() {
    let e24 = this._inputGeometries.next();
    for (; e24; ) {
      if (!this._reverse) return e24;
      if ("esriGeometryPolyline" === e24.geometryType) return n12(e24.clone());
      e24 = this._inputGeometries.next();
    }
    return null;
  }
};
function n12(e24) {
  for (; e24.nextPath(); ) for (let t23 = 0; t23 < e24.pathSize / 2; t23++) {
    e24.seekInPath(t23);
    const n25 = e24.x, r15 = e24.y;
    e24.seekInPath(e24.pathSize - t23 - 1);
    const s16 = e24.x, i16 = e24.y;
    e24.x = n25, e24.y = r15, e24.seekInPath(t23), e24.x = s16, e24.y = i16;
  }
  return e24.reset(), e24;
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectRotate.js
var e13 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t23, e24, r15) {
    return new n13(t23, e24, r15);
  }
};
var n13 = class {
  constructor(t23, e24, n25) {
    this._inputGeometries = t23, this._rotateAngle = void 0 !== e24.angle ? e24.angle * Math.PI / 180 : 0;
  }
  next() {
    let e24 = this._inputGeometries.next();
    for (; e24; ) {
      if (0 === this._rotateAngle || "esriGeometryPoint" === e24.geometryType) return e24;
      if (e24.totalSize > 0) {
        const n25 = x(e24), r15 = (n25[2] + n25[0]) / 2, s16 = (n25[3] + n25[1]) / 2;
        return e24.reset(), this._rotate(e24.clone(), r15, s16);
      }
      e24 = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t23, e24, n25) {
    const r15 = Math.cos(this._rotateAngle), s16 = Math.sin(this._rotateAngle);
    for (; t23.nextPath(); ) for (; t23.nextPoint(); ) {
      const o11 = t23.x - e24, i16 = t23.y - n25;
      t23.x = e24 + o11 * r15 - i16 * s16, t23.y = n25 + o11 * s16 + i16 * r15;
    }
    return t23.reset(), t23;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectScale.js
var e14 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t23, e24, s16) {
    return new r8(t23, e24, s16);
  }
};
var r8 = class {
  constructor(t23, e24, r15) {
    this._inputGeometries = t23, this._xFactor = void 0 !== e24.xScaleFactor ? e24.xScaleFactor : 1.15, this._yFactor = void 0 !== e24.yScaleFactor ? e24.yScaleFactor : 1.15;
  }
  next() {
    const e24 = this._inputGeometries.next();
    if (e24) {
      if (1 === this._xFactor && 1 === this._yFactor) return e24;
      if ("esriGeometryPoint" === e24.geometryType) return e24;
      if (e24.totalSize > 0) {
        const r15 = x(e24), s16 = (r15[2] + r15[0]) / 2, o11 = (r15[3] + r15[1]) / 2;
        return e24.reset(), this._scaleCursor(e24.clone(), s16, o11);
      }
    }
    return null;
  }
  _scaleCursor(t23, e24, r15) {
    for (; t23.nextPath(); ) for (; t23.nextPoint(); ) t23.x = e24 + (t23.x - e24) * this._xFactor, t23.y = r15 + (t23.y - r15) * this._yFactor;
    return t23.reset(), t23;
  }
};

// node_modules/@arcgis/core/geometry/support/PolylineBuilder.js
var t10 = class {
  constructor() {
    this._polyline = [];
  }
  beginPath(t23) {
    this._polyline.push([t23]);
  }
  lineTo(t23) {
    if (0 === this._polyline.length) throw new Error("No path started. Call beginPath first.");
    this._polyline[this._polyline.length - 1].push(t23);
  }
  getPointCount() {
    return this._polyline.reduce((t23, e24) => t23 + e24.length, 0);
  }
  addSegment(t23, e24, l9) {
    l9 && this.beginPath(t23), this.lineTo(e24);
  }
  getXY(t23) {
    let e24 = 0;
    for (const l9 of this._polyline) {
      if (t23 < e24 + l9.length) return l9[t23 - e24];
      e24 += l9.length;
    }
    return null;
  }
  getGeometry() {
    return this._polyline;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectSuppress.js
var r9 = class _r {
  static {
    this.instance = null;
  }
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(t23, e24, n25) {
    return new s9(t23, e24, n25);
  }
};
var s9 = class extends s4 {
  constructor(t23, e24, n25) {
    super(t23, false, true), this._suppress = void 0 !== e24.suppress && e24.suppress, this._invert = void 0 !== e24.invert && e24.invert;
  }
  processPath(n25) {
    if (n25.totalSize <= 0) return null;
    if (!this._suppress) {
      const e24 = _.createEmptyOptimizedCIM("esriGeometryPolygon", false, false, n25.yFactor);
      for (n25.seekPathEnd(); n25.nextPoint(); ) e24.pushXY(n25.x, n25.y);
      return e24;
    }
    const r15 = [], s16 = new Array(n25.pathSize);
    let o11 = 0;
    for (n25.seekPathStart(); n25.nextPoint(); ) s16[o11++] = n25.getControlPoint(), r15.push([n25.x, n25.y]);
    let i16 = true, l9 = true, h12 = false, p6 = !this._invert;
    o11 = 0;
    const u10 = new t10();
    let c4 = r15[0];
    for (; o11 < r15.length - 1; ) {
      const t23 = r15[o11 + 1], e24 = s16[o11], n26 = s16[o11 + 1];
      o11++, l9 && (p6 = e24 || n26 ? this._invert : !this._invert, l9 = false), p6 ? (u10.addSegment(c4, t23, i16), i16 = false) : h12 = true, c4 = t23, n26 && (p6 ? (p6 = false, i16 = true) : p6 = true);
    }
    const a10 = u10.getGeometry();
    if (0 === a10.length) return null;
    if (!h12 && r15[0][0] === r15[r15.length - 1][0] && r15[0][1] === r15[r15.length - 1][1]) {
      const e24 = a10[a10.length - 1];
      return e24[0][0] === e24[e24.length - 1][0] && e24[0][1] === e24[e24.length - 1][1] || e24.push([e24[0][0], e24[0][1]]), _.fromJSONCIM({ paths: a10 });
    }
    const g4 = a10[a10.length - 1];
    return u10.getPointCount() > 1 && "esriGeometryPolygon" === n25.geometryType && g4[0][0] === g4[g4.length - 1][0] && g4[0][1] === g4[g4.length - 1][1] && a10.length > 1 && (a10[a10.length - 1].push(...a10[0]), a10.splice(0, 1)), _.fromJSONCIM({ paths: a10 });
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectTaperedPolygon.js
var p4 = () => n.getLogger("esri.symbols.cim.effects.EffectTaperedPolygon");
var y3 = class _y {
  static {
    this.instance = null;
  }
  static local() {
    return null === _y.instance && (_y.instance = new _y()), _y.instance;
  }
  execute(e24, t23, s16) {
    return new f4(e24, t23, s16);
  }
};
var f4 = class extends s4 {
  constructor(e24, t23, s16) {
    super(e24, false, true), this._slopeS = 0, this._slopeC = 1, this._lastTangent1 = new i2(NaN, NaN), this._lastWidth = 0, this._geomUnitsPerPoint = s16, this._halfFromWidth = Math.abs(void 0 !== t23.fromWidth ? t23.fromWidth : 0) * s16 * 0.5, this._halfToWidth = Math.abs(void 0 !== t23.toWidth ? t23.toWidth : 1) * s16 * 0.5, this._originalLength = (void 0 !== t23.length ? t23.length : 0) * s16, this._length = 0;
  }
  processPath(t23) {
    if (t23.totalSize <= 0) return null;
    if (this._halfFromWidth <= 0 && this._halfToWidth <= 0) {
      const e24 = _.createEmptyOptimizedCIM("esriGeometryPolygon", false, false, t23.yFactor);
      for (t23.seekPathEnd(); t23.prevPoint(); ) e24.pushXY(t23.x, t23.y);
      for (t23.seekPathStart(); t23.nextPoint(); ) e24.pushXY(t23.x, t23.y);
      return e24;
    }
    const n25 = t23.getCurrentPath().asJSON(), h12 = n7.module.execute(n25, 0.25 * this._geomUnitsPerPoint, { removeDegenerateParts: true }), y5 = null == h12 ? null : o3(h12) ? h12.rings : e2(h12) ? h12.paths : null;
    if (!y5) return p4().error(new r("mapview-bad-resource", "Unable to process geometry")), null;
    const f5 = m.module.execute(h12);
    if ((0 === this._originalLength || this._originalLength > f5) && f5 > 0) {
      this._length = f5;
      const e24 = (this._halfToWidth - this._halfFromWidth) / this._length;
      if (Math.abs(e24) < 1) {
        const t24 = e24 * e24;
        this._slopeC = Math.sqrt(1 / (1 + t24)), this._slopeS = Math.sqrt(t24 / (1 + t24)), e24 < 0 && (this._slopeS = -this._slopeS);
      } else this._slopeC = this._slopeS = 0.7071;
    } else this._length = this._originalLength, this._slopeC = 1, this._slopeS = 0;
    const m4 = [];
    for (const e24 of y5) {
      const t24 = new t10(), s16 = new t10();
      let o11 = 0;
      this._setFromOffset(e24.slice(0, 2), t24, s16);
      for (let r15 = 0, n26 = 3; n26 <= e24.length; ++r15, ++n26) o11 = this._setOffset(e24.slice(r15, n26), o11, t24, s16);
      this._setToOffset(e24.slice(-2), o11, t24, s16);
      const [i16] = t24.getGeometry(), [l9] = s16.getGeometry();
      m4.push([...i16, ...l9.reverse()]);
    }
    const x4 = { rings: m4, spatialReference: { wkid: S.WebMercator.wkid } }, d = f3.module.execute(x4);
    return _.fromJSONCIM(d);
  }
  _setFromOffset([[e24, t23], [s16, o11]], i16, l9) {
    const r15 = this._halfFromWidth, h12 = new i2(s16 - e24, o11 - t23).normalize().scale(r15);
    i16.beginPath([e24 - h12.y, t23 + h12.x]), l9.beginPath([e24 + h12.y, t23 - h12.x]);
  }
  _setToOffset([[e24, t23], [s16, o11]], i16, l9, r15) {
    let h12;
    h12 = (i16 += Math.sqrt((s16 - e24) ** 2 + (o11 - t23) ** 2)) >= this._length ? this._halfToWidth : this._halfFromWidth + (this._halfToWidth - this._halfFromWidth) * i16 / this._length;
    const a10 = new i2(s16 - e24, o11 - t23).normalize().scale(h12);
    l9.lineTo([s16 - a10.y, o11 + a10.x]), r15.lineTo([s16 + a10.y, o11 - a10.x]);
  }
  _setOffset([[t23, s16], [o11, i16], [l9, r15]], h12, a10, c4) {
    const _5 = Math.sqrt((o11 - t23) ** 2 + (i16 - s16) ** 2);
    let y5;
    y5 = h12 + _5 >= this._length ? this._halfToWidth : this._halfFromWidth + (this._halfToWidth - this._halfFromWidth) * (h12 + _5) / this._length, h12 += _5;
    const f5 = new i2(o11, i16), m4 = new i2(o11 - t23, i16 - s16).normalize(), x4 = new i2(l9 - o11, r15 - i16).normalize(), d = i2.sub(x4, m4), g4 = a10.getPointCount(), u10 = c4.getPointCount();
    m4.leftPerpendicular(), x4.leftPerpendicular();
    const T4 = m4.x * x4.x + m4.y * x4.y;
    if (T4 > 0.99) {
      const e24 = i2.add(m4, x4).scale(y5 / 2), t24 = e24.clone().rotate(this._slopeC, this._slopeS);
      a10.lineTo([f5.x + t24.x, f5.y + t24.y]);
      const s17 = e24.rotateReverse(this._slopeC, this._slopeS);
      c4.lineTo([f5.x - s17.x, f5.y - s17.y]);
    } else {
      const o12 = m4.x * x4.y - m4.y * x4.x;
      if (d.scale(1 / o12), o12 < 0) {
        d.scale(-y5).rotateReverse(this._slopeC, this._slopeS);
        const t24 = c4.getXY(u10 - 1);
        t24 || p4().error(new r("mapview-bad-resource", "Unable to process geometry, index out of scope"));
        const s17 = i2.add(f5, d).sub(i2.fromArray(t24));
        if (m4.x * s17.y - m4.y * s17.x > 0) {
          const e24 = m4.clone().scale(-y5).rotateReverse(this._slopeC, this._slopeS), t25 = x4.clone().scale(-y5).rotateReverse(this._slopeC, this._slopeS);
          c4.lineTo([f5.x + e24.x, f5.y + e24.y]), c4.lineTo([f5.x, f5.y]), c4.lineTo([f5.x + t25.x, f5.y + t25.y]);
        } else c4.lineTo([f5.x + d.x, f5.y + d.y]);
      } else {
        d.scale(y5).rotate(this._slopeC, this._slopeS);
        const t24 = a10.getXY(g4 - 1);
        t24 || p4().error(new r("mapview-bad-resource", "Unable to process geometry, index out of scope"));
        const s17 = i2.add(f5, d).sub(i2.fromArray(t24));
        if (m4.x * s17.y - m4.y * s17.x > 0) {
          const e24 = m4.clone().scale(y5).rotate(this._slopeC, this._slopeS), t25 = x4.clone().scale(y5).rotate(this._slopeC, this._slopeS);
          a10.lineTo([f5.x + e24.x, f5.y + e24.y]), a10.lineTo([f5.x, f5.y]), a10.lineTo([f5.x + t25.x, f5.y + t25.y]);
        } else a10.lineTo([f5.x + d.x, f5.y + d.y]);
      }
      const i17 = Math.acos(T4);
      let l10 = 1;
      if (y5 > 0.25) {
        const e24 = 2 * Math.acos(1 - 0.25 / y5);
        e24 < i17 && (l10 = Math.round(i17 / e24));
      }
      const r16 = Math.cos(i17 / l10), h13 = Math.sin(i17 / l10), _6 = m4.clone();
      if (o12 < 0) {
        _6.rotate(this._slopeC, this._slopeS);
        const o13 = a10.getXY(g4 - 1);
        o13 || p4().error(new r("mapview-bad-resource", "Unable to process geometry, index out of scope"));
        const i18 = i2.add(f5, _6.clone().scale(this._lastWidth)), l11 = i2.sub(i18, i2.fromArray(o13)), r17 = m4.x * l11.y - m4.y * l11.x;
        if (!isNaN(this._lastTangent1.x) && !isNaN(this._lastTangent1.y) && r17 > 0) {
          const e24 = new i2(t23, s16), o14 = this._lastTangent1.clone().scale(this._lastWidth);
          o14.rotate(this._slopeC, this._slopeS);
          const i19 = m4.clone().scale(this._lastWidth);
          i19.rotate(this._slopeC, this._slopeS), a10.lineTo([e24.x + o14.x, e24.y + o14.y]), a10.lineTo([e24.x, e24.y]), a10.lineTo([e24.x + i19.x, e24.y + i19.y]);
        }
      } else {
        _6.scale(-1).rotateReverse(this._slopeC, this._slopeS);
        const o13 = c4.getXY(u10 - 1);
        o13 || p4().error(new r("mapview-bad-resource", "Unable to process geometry, index out of scope"));
        const i18 = i2.add(f5, _6.clone().scale(this._lastWidth)), l11 = i2.sub(i18, i2.fromArray(o13)), r17 = m4.x * l11.y - m4.y * l11.x;
        if (!isNaN(this._lastTangent1.x) && !isNaN(this._lastTangent1.y) && r17 > 0) {
          const e24 = new i2(t23, s16), o14 = this._lastTangent1.clone().scale(-this._lastWidth);
          o14.rotateReverse(this._slopeC, this._slopeS);
          const i19 = m4.clone().scale(-this._lastWidth);
          i19.rotateReverse(this._slopeC, this._slopeS), c4.lineTo([e24.x + o14.x, e24.y + o14.y]), c4.lineTo([e24.x, e24.y]), c4.lineTo([e24.x + i19.x, e24.y + i19.y]);
        }
      }
      _6.scale(y5);
      for (let e24 = 0; e24 <= l10; e24++) o12 < 0 ? (a10.lineTo([f5.x + _6.x, f5.y + _6.y]), _6.rotateReverse(r16, h13)) : (c4.lineTo([f5.x + _6.x, f5.y + _6.y]), _6.rotate(r16, h13));
    }
    return this._lastTangent1.setCoords(m4.x, m4.y), this._lastWidth = y5, h12;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectWave.js
var h8 = class _h {
  static {
    this.instance = null;
  }
  static local() {
    return null === _h.instance && (_h.instance = new _h()), _h.instance;
  }
  execute(t23, e24, i16) {
    return new n14(t23, e24, i16);
  }
};
var n14 = class {
  constructor(t23, s16, h12) {
    this._inputGeometries = t23, this._height = (void 0 !== s16.amplitude ? s16.amplitude : 2) * h12, this._period = (void 0 !== s16.period ? s16.period : 3) * h12, this._style = s16.waveform ?? "Sinus", this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new n8(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new a3(), this._walker.updateTolerance(h12);
  }
  next() {
    let t23 = this._inputGeometries.next();
    for (; t23; ) {
      if (0 === this._height || 0 === this._period) return t23;
      const e24 = this._processGeom(t23);
      if (e24) return e24;
      t23 = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(e24) {
    const i16 = _.createEmptyOptimizedCIM(e24.geometryType);
    for (; e24.nextPath(); ) {
      i16.startPath();
      const t23 = e24.pathLength();
      if (this._walker.init(e24, this._pattern)) switch (this._style) {
        case "Sinus":
        default:
          this._constructCurve(i16, t23, false);
          break;
        case "Square":
          this._constructSquare(i16, t23);
          break;
        case "Triangle":
          this._constructTriangle(i16, t23);
          break;
        case "Random":
          this._constructCurve(i16, t23, true);
      }
      else for (; e24.nextPoint(); ) i16.pushXY(e24.x, e24.y);
    }
    return i16;
  }
  _constructCurve(t23, e24, i16) {
    let h12 = Math.round(e24 / this._period);
    0 === h12 && (h12 = 1);
    const n25 = h12 * 16 + 1, r15 = e24 / h12, a10 = this._period / 16, o11 = 1 / n25, p6 = 2 * Math.PI * e24 / r15, _5 = 2 * Math.PI * Math.random(), u10 = 2 * Math.PI * Math.random(), c4 = 2 * Math.PI * Math.random(), l9 = 0.75 - Math.random() / 2, d = 0.75 - Math.random() / 2, g4 = new h5();
    this._walker.curPointAndAngle(g4), t23.pushPoint(g4.pt);
    let w4 = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(a10, g4)) {
        t23.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const e25 = w4;
        let s16;
        if (w4 += o11, i16) {
          const t24 = this._height / 2 * (1 + 0.3 * Math.sin(l9 * p6 * e25 + _5));
          s16 = t24 * Math.sin(p6 * e25 + u10), s16 += t24 * Math.sin(d * p6 * e25 + c4), s16 /= 2;
        } else s16 = 0.5 * this._height * Math.sin(0.5 * p6 * e25);
        t23.pushXY(g4.pt[0] - s16 * g4.sa, g4.pt[1] + s16 * g4.ca);
      }
    }
  }
  _constructSquare(t23, e24) {
    Math.round(e24 / this._period);
    let i16 = true;
    for (; ; ) {
      let e25 = false;
      if (this._walker.curPositionIsValid()) {
        const h12 = new h5();
        this._walker.curPointAndAngle(h12);
        const n25 = new h5();
        if (this._walker.nextPointAndAngle(this._period, n25)) {
          const r15 = new h5();
          this._walker.nextPointAndAngle(this._period, r15) && (i16 ? (t23.pushPoint(h12.pt), i16 = false) : t23.pushPoint(h12.pt), t23.pushXY(h12.pt[0] - this._height / 2 * h12.sa, h12.pt[1] + this._height / 2 * h12.ca), t23.pushXY(n25.pt[0] - this._height / 2 * n25.sa, n25.pt[1] + this._height / 2 * n25.ca), t23.pushXY(n25.pt[0] + this._height / 2 * n25.sa, n25.pt[1] - this._height / 2 * n25.ca), t23.pushXY(r15.pt[0] + this._height / 2 * r15.sa, r15.pt[1] - this._height / 2 * r15.ca), e25 = true);
        }
      }
      if (!e25) {
        t23.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t23, e24) {
    Math.round(e24 / this._period);
    let i16 = true;
    for (; ; ) {
      let e25 = false;
      if (this._walker.curPositionIsValid()) {
        const h12 = new h5();
        this._walker.curPointAndAngle(h12);
        const n25 = new h5();
        if (this._walker.nextPointAndAngle(this._period / 2, n25)) {
          const r15 = new h5();
          this._walker.nextPointAndAngle(this._period, r15) && (this._walker.nextPosition(this._period / 2) && (i16 ? (t23.pushPoint(h12.pt), i16 = false) : t23.pushPoint(h12.pt), t23.pushXY(n25.pt[0] - this._height / 2 * n25.sa, n25.pt[1] + this._height / 2 * n25.ca), t23.pushXY(r15.pt[0] + this._height / 2 * r15.sa, r15.pt[1] - this._height / 2 * r15.ca)), e25 = true);
        }
      }
      if (!e25) {
        t23.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAlongLineSameSize.js
var n15 = class _n {
  static {
    this.instance = null;
  }
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t23, e24, s16) {
    return new a5(t23, e24, s16);
  }
};
var a5 = class extends i5 {
  constructor(t23, i16, n25) {
    super(t23), this._geometryWalker = new a3(), this._geometryWalker.updateTolerance(n25), this._angleToLine = i16.angleToLine ?? true, this._keepUpright = i16.keepUpright ?? false, this._offset = (i16.offset ? i16.offset : 0) * n25, this._originalEndings = i16.endings ?? "WithHalfGap", this._offsetAtEnd = (i16.customEndingOffset ? i16.customEndingOffset : 0) * n25, this._position = -(i16.offsetAlongLine ? i16.offsetAlongLine : 0) * n25, this._pattern = new n8(), this._pattern.init(i16.placementTemplate), this._pattern.scale(n25), this._endings = this._originalEndings;
  }
  processPath(t23) {
    if (this._pattern.isEmpty()) return null;
    let e24;
    if (this.iteratePath) e24 = this._pattern.nextValue();
    else {
      "WithFullGap" === this._originalEndings && this.isClosed ? this._endings = "WithMarkers" : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let s17, i16 = true;
      switch (this._endings) {
        case "NoConstraint":
          s17 = -this._position, s17 = this._adjustPosition(s17), i16 = false;
          break;
        case "WithHalfGap":
        default:
          s17 = -this._pattern.lastValue() / 2;
          break;
        case "WithFullGap":
          s17 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case "WithMarkers":
          s17 = 0;
          break;
        case "Custom":
          s17 = -this._position, s17 = this._adjustPosition(s17), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t23, this._pattern, i16)) return null;
      this._pattern.reset();
      let n25 = 0;
      for (; s17 > n25; ) s17 -= n25, n25 = this._pattern.nextValue();
      n25 -= s17, e24 = n25, this.iteratePath = true;
    }
    const s16 = new h5();
    return this._geometryWalker.nextPointAndAngle(e24, s16) ? "WithFullGap" === this._endings && this._geometryWalker.isPathEnd() ? (this.iteratePath = false, null) : "WithMarkers" === this._endings && this._geometryWalker.isPathEnd() && (this.iteratePath = false, this.isClosed) ? null : (this.internalPlacement.setTranslate(s16.pt[0] - this._offset * s16.sa, s16.pt[1] + this._offset * s16.ca), this._angleToLine && this.internalPlacement.setRotateCS(s16.ca, s16.sa), this.internalPlacement) : (this.iteratePath = false, null);
  }
  _adjustPosition(t23) {
    let e24 = t23 / this._pattern.length();
    return e24 -= Math.floor(e24), e24 * this._pattern.length();
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAtExtremities.js
var s10 = class _s {
  static {
    this.instance = null;
  }
  static local() {
    return null === _s.instance && (_s.instance = new _s()), _s.instance;
  }
  execute(t23, e24, s16) {
    return new i10(t23, e24, s16);
  }
};
var i10 = class extends i5 {
  constructor(t23, s16, i16) {
    super(t23, false, true), this._curveHelper = new n6(), this._placePerPart = s16.placePerPart ?? false, this._angleToLine = void 0 === s16.angleToLine || s16.angleToLine, this._keepUpright = s16.keepUpright ?? false, this._offset = void 0 !== s16.offset ? s16.offset * i16 : 0, this._type = s16.extremityPlacement ?? "Both", this._position = void 0 !== s16.offsetAlongLine ? s16.offsetAlongLine * i16 : 0, this._beginProcessed = false;
  }
  processMultiPath(t23) {
    return this._placePerPart ? super.processMultiPath(t23) : this.processPath(t23);
  }
  processPath(t23) {
    let e24;
    switch (this._type) {
      case "Both":
      default:
        this._beginProcessed ? (e24 = this._atExtremities(t23, this._position, false), this._beginProcessed = false, this.iterateMultiPath = false, this.iteratePath = false) : (e24 = this._atExtremities(t23, this._position, true), this._beginProcessed = true, this.iterateMultiPath = true, this.iteratePath = true);
        break;
      case "JustBegin":
        e24 = this._atExtremities(t23, this._position, true);
        break;
      case "JustEnd":
        e24 = this._atExtremities(t23, this._position, false);
      case "None":
    }
    return e24;
  }
  _atExtremities(t23, e24, s16) {
    if (this._placePerPart || (s16 ? t23.seekPath(0) : t23.seekPath(t23.totalSize - 1)), s16 || t23.seekPathEnd(), s16 ? t23.nextPoint() : t23.prevPoint()) {
      let i16 = 0, [r15, n25] = [0, 0], [a10, o11] = [t23.x, t23.y];
      const h12 = [0, 0];
      for (; s16 ? t23.nextPoint() : t23.prevPoint(); ) {
        r15 = a10, n25 = o11, a10 = t23.x, o11 = t23.y;
        const s17 = this._curveHelper.getLength(r15, n25, a10, o11);
        if (i16 + s17 > e24) {
          const t24 = (e24 - i16) / s17, [l9, c4] = this._curveHelper.getAngleCS(h12, r15, n25, a10, o11, t24), p6 = this._curveHelper.getCoord2D(r15, n25, a10, o11, t24);
          return this.internalPlacement.setTranslate(p6[0] - this._offset * c4, p6[1] + this._offset * l9), this._angleToLine && this.internalPlacement.setRotateCS(-l9, -c4), this.internalPlacement;
        }
        i16 += s17;
      }
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAtMeasuredUnits.js
var e15 = 2;
var h9 = 1e-3;
var r10 = class _r {
  static {
    this.instance = null;
  }
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(t23, s16, i16) {
    return new a6(t23, s16, i16);
  }
};
var a6 = class extends i5 {
  constructor(t23, s16, e24) {
    super(t23), this._segmentIterator = null, this._segCount = 0, this._firstSeg = true, this._seg = null, this._ms = [], this._from = 0, this._to = 0, this._pt = null, this._walker = new a3(), this._walker.updateTolerance(e24), this._placePerPart = s16.placePerPart ?? false, this._angleToLine = s16.angleToLine ?? false, this._keepUpright = s16.keepUpright ?? false, this._offset = (s16.offset ?? 0) * e24, this._interval = (s16.interval ?? 0) * e24, this._interval <= 0 && (this._interval = 10 * h9), this._skipRate = s16.skipMarkerRate ?? 0, this._skipRate <= 1 && (this._skipRate = 0), this._placeAtExtremities = s16.placeAtExtremities ?? false;
  }
  processPath(t23) {
    if (!this.iteratePath) {
      const { fromGeometry: i17 } = a2.module, e24 = i17(t23.getCurrentPath().asJSON()).getGeometry(), h12 = e24.getPathStart(0);
      this._segmentIterator = e24.querySegmentIteratorAtVertex(h12), this._segCount = e24.getSegmentCountPath(0), this._firstSeg = true, this.iteratePath = true, this._pt = e24.getXY(0).clone();
    }
    for (; 0 === this._ms.length && this._segmentIterator?.hasNextSegment(); ) {
      --this._segCount, this._seg = this._segmentIterator.nextSegment(), this._from = this._seg.getStartAttributeAsDbl(e15, 0), this._to = this._seg.getEndAttributeAsDbl(e15, 0);
      const s16 = !isNaN(this._from), i17 = !isNaN(this._to);
      s16 && (this._from = Math.round(this._from / h9) * h9, Math.abs(this._from) < h9 && (this._from = 0)), i17 && (this._to = Math.round(this._to / h9) * h9, Math.abs(this._to) < h9 && (this._to = 0));
      let r16 = s16 ? Math.floor(this._from / this._interval) : 0, a11 = i17 ? Math.floor(this._to / this._interval) : 0;
      if (s16 && (this._placeAtExtremities || !this._firstSeg || !this._placePerPart && t23.pathIndex > 0) && Math.abs(r16 * this._interval - this._from) < h9 && (!this._skipRate || r16 % this._skipRate) && this._ms.push(this._from), this._firstSeg = false, s16 && i17 && !(Math.abs(this._from - this._to) < h9)) if (this._from <= this._to) {
        r16 * this._interval < this._from + h9 && ++r16, a11 * this._interval > this._to - h9 && --a11;
        for (let t24 = r16; t24 <= a11; ++t24) (!this._skipRate || t24 % this._skipRate) && this._ms.push(t24 * this._interval);
      } else {
        r16 * this._interval > this._from - h9 && --r16, a11 * this._interval < this._to + h9 && ++a11;
        for (let t24 = a11; t24 <= r16; ++t24) (!this._skipRate || t24 % this._skipRate) && this._ms.push(t24 * this._interval);
      }
    }
    let i16 = 0;
    if (0 === this._ms.length) {
      if (this.iteratePath = false, !this._segCount && this._placeAtExtremities && !isNaN(this._to) && (this._placePerPart || t23.pathIndex === t23.totalSize - 1)) {
        const t24 = Math.floor(this._to / this._interval);
        Math.abs(t24 * this._interval - this._to) < h9 && (!this._skipRate || t24 % this._skipRate) && (this._ms.push(this._to), i16 = 1);
      }
      if (0 === this._ms.length) return null;
    }
    const r15 = this._ms.pop(), a10 = isNaN(this._from) || isNaN(this._to) || Math.abs(this._from - this._to) < h9 ? i16 : (r15 - this._from) / (this._to - this._from);
    this._seg.queryCoord2D(a10, this._pt);
    const _5 = this._seg.getTangent(a10), { x: o11, y: n25 } = _5.normalize();
    return this.internalPlacement.setTranslate(this._pt.x - this._offset * n25, this._pt.y + this._offset * o11), this._angleToLine && this.internalPlacement.setRotateCS(o11, n25), this.internalPlacement.setMeasure(r15), this.internalPlacement;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAtRatioPositions.js
var n16 = class _n {
  static {
    this.instance = null;
  }
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t23, i16, s16) {
    return new h10(t23, i16, s16);
  }
};
var h10 = class extends i5 {
  constructor(t23, e24, n25) {
    super(t23), this._walker = new a3(), this._walker.updateTolerance(n25), this._angleToLine = void 0 === e24.angleToLine || e24.angleToLine, this._keepUpright = e24.keepUpright ?? false, this._offset = void 0 !== e24.offset ? e24.offset * n25 : 0, this._beginGap = void 0 !== e24.beginPosition ? e24.beginPosition * n25 : 0, this._endGap = void 0 !== e24.endPosition ? e24.endPosition * n25 : 0, this._flipFirst = void 0 === e24.flipFirst || e24.flipFirst, this._pattern = new n8(), this._pattern.init(e24.positionArray, false), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0;
  }
  processPath(t23) {
    if (this._pattern.isEmpty()) return null;
    let i16;
    if (this.iteratePath) {
      const t24 = this._pattern.nextValue() * this._subPathLen, s17 = this._beginGap + t24;
      i16 = s17 - this._prevPos, this._prevPos = s17;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0, this._subPathLen = t23.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0) return this.iteratePath = false, null;
      if (!this._walker.init(t23, this._pattern, false)) return null;
      this._pattern.reset();
      const s17 = this._pattern.nextValue() * this._subPathLen, e24 = this._beginGap + s17;
      i16 = e24 - this._prevPos, this._prevPos = e24, this.iteratePath = true;
    }
    const s16 = new h5();
    if (!this._walker.nextPointAndAngle(i16, s16, 1)) return this.iteratePath = false, null;
    this.internalPlacement.setTranslate(s16.pt[0] - this._offset * s16.sa, s16.pt[1] + this._offset * s16.ca);
    const n25 = this._isFirst && this._flipFirst;
    let h12, r15;
    return this._angleToLine ? (h12 = s16.ca, r15 = s16.sa) : (h12 = 1, r15 = 0), n25 && (h12 = -h12, r15 = -r15), this.internalPlacement.setRotateCS(h12, r15), this._isFirst = false, this._posCount--, 0 === this._posCount && (this.iteratePath = false), this.internalPlacement;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementInsidePolygon.js
var i11 = 512;
var e16 = 10;
var h11 = 24;
var n17 = 1e-6;
var _2 = class __ {
  static {
    this.instance = null;
  }
  static local() {
    return null === __.instance && (__.instance = new __()), __.instance;
  }
  execute(t23, s16, i16, e24) {
    return new r11(t23, s16, i16, e24);
  }
};
var r11 = class _r {
  constructor(e24, h12, n25, _5) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = false, this._verticalSubdivision = true, this._stepX = Math.abs(h12.stepX ?? 16) * n25, this._stepY = Math.abs(h12.stepY ?? 16) * n25, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, 0 !== this._stepX && 0 !== this._stepY) {
      if (this._gridType = h12.gridType ?? "Fixed", "Random" === this._gridType) {
        const s16 = h12.seed ?? 13, i16 = 1;
        this._randomLCG = new t(s16 * i16), this._randomness = (h12.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = false, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = h12.gridAngle ?? 0, this._shiftOddRows = h12.shiftOddRows ?? false, this._offsetX = (h12.offsetX ?? 0) * n25, this._offsetY = (h12.offsetY ?? 0) * n25, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX) if (this._offsetX < 0) for (; this._offsetX < -0.5 * this._stepX; ) this._offsetX += this._stepX;
        else for (; this._offsetX >= 0.5 * this._stepX; ) this._offsetX -= this._stepX;
        if (this._stepY) if (this._offsetY < 0) for (; this._offsetY < -0.5 * this._stepY; ) this._offsetY += this._stepY;
        else for (; this._offsetY >= 0.5 * this._stepY; ) this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, null != _5) {
        const [t23, s16, e25, h13] = _5.split("/"), n26 = parseFloat(t23), r15 = parseFloat(s16), a10 = parseFloat(e25), o11 = parseFloat(h13);
        this._graphicOriginX = -(o11 * 2 ** n26 + a10) * i11, this._graphicOriginY = r15 * i11, this._testInsidePolygon = true;
      }
      this._internalPlacement = new t7(), this._calculateMinMax(e24), this._geometryCursor = e24;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!_r._randValues) {
      _r._randValues = [];
      for (let t23 = 0; t23 < h11; t23++) for (let s16 = 0; s16 < h11; s16++) _r._randValues.push(this._randomLCG.getFloat()), _r._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t23) {
    let s16, e24, h12, n25, _5, r15, a10, o11, l9, f5, c4, u10, p6, M3;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, a10 = o11 = p6 = c4 = Number.MAX_VALUE, l9 = f5 = M3 = u10 = -Number.MAX_VALUE;
    const g4 = 1 !== this._cosAngle;
    for (t23.reset(); t23.nextPath(); ) for (; t23.nextPoint(); ) r15 = t23.x, _5 = t23.y, s16 = r15 - this._graphicOriginX - this._offsetX, e24 = _5 - this._graphicOriginY - this._offsetY, g4 ? (h12 = this._cosAngle * s16 - this._sinAngle * e24, n25 = this._sinAngle * s16 + this._cosAngle * e24) : (h12 = s16, n25 = e24), a10 = Math.min(a10, h12), l9 = Math.max(l9, h12), o11 = Math.min(o11, n25), f5 = Math.max(f5, n25), c4 = Math.min(c4, _5), u10 = Math.max(u10, _5), p6 = Math.min(p6, r15), M3 = Math.max(M3, r15);
    c4 = c4 !== Number.MAX_VALUE ? c4 : -i11 - this._stepY, u10 = u10 !== -Number.MAX_VALUE ? u10 : this._stepY, p6 = p6 !== Number.MAX_VALUE ? p6 : -this._stepX, M3 = M3 !== -Number.MAX_VALUE ? M3 : i11 + this._stepX;
    const d = u10 - c4, X2 = M3 - p6;
    if (this._verticalSubdivision = d >= X2, this._polygonMin = this._verticalSubdivision ? c4 : p6, this._testInsidePolygon) {
      let t24 = 0 - this._graphicOriginX - this._offsetX - this._stepX, s17 = i11 - this._graphicOriginX - this._offsetX + this._stepX, e25 = -i11 - this._graphicOriginY - this._offsetY - this._stepY, h13 = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (g4) {
        const i16 = [[t24, e25], [t24, h13], [s17, e25], [s17, h13]];
        t24 = e25 = Number.MAX_VALUE, s17 = h13 = -Number.MAX_VALUE;
        for (const n26 of i16) {
          const i17 = this._cosAngle * n26[0] - this._sinAngle * n26[1], _6 = this._sinAngle * n26[0] + this._cosAngle * n26[1];
          t24 = Math.min(t24, i17), s17 = Math.max(s17, i17), e25 = Math.min(e25, _6), h13 = Math.max(h13, _6);
        }
      }
      a10 = a10 !== Number.MAX_VALUE ? Math.max(a10, t24) : t24, o11 = o11 !== Number.MAX_VALUE ? Math.max(o11, e25) : e25, l9 = l9 !== -Number.MAX_VALUE ? Math.min(l9, s17) : s17, f5 = f5 !== -Number.MAX_VALUE ? Math.min(f5, h13) : h13;
    }
    this._xMin = Math.round(a10 / this._stepX), this._xMax = Math.round(l9 / this._stepX), this._yMin = Math.round(o11 / this._stepY), this._yMax = Math.round(f5 / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t23, p6, M3, c4, u10);
  }
  _buildAccelerationMap(t23, s16, h12, n25, _5) {
    t23.reset();
    const r15 = /* @__PURE__ */ new Map(), a10 = this._verticalSubdivision, l9 = a10 ? _5 - n25 : h12 - s16;
    let f5 = Math.ceil(l9 / e16);
    if (f5 <= 1) return;
    const c4 = Math.floor(l9 / f5);
    let u10, p6, M3, g4, d, X2, m4, x4, A4, Y2, y5;
    for (f5++, this._delta = c4, a10 ? (A4 = -i11 - 2 * this._stepY, Y2 = 2 * this._stepY, y5 = n25) : (A4 = -2 * this._stepX, Y2 = i11 + 2 * this._stepX, y5 = s16); t23.nextPath(); ) if (!(t23.pathSize < 2) && t23.nextPoint()) for (u10 = t23.x, p6 = t23.y; t23.nextPoint(); u10 = M3, p6 = g4) {
      if (M3 = t23.x, g4 = t23.y, a10) {
        if (p6 === g4 || p6 < A4 && g4 < A4 || p6 > Y2 && g4 > Y2) continue;
        d = Math.min(p6, g4), X2 = Math.max(p6, g4);
      } else {
        if (u10 === M3 || u10 < A4 && M3 < A4 || u10 > Y2 && M3 > Y2) continue;
        d = Math.min(u10, M3), X2 = Math.max(u10, M3);
      }
      for (; d < X2; ) m4 = Math.floor((d - y5) / c4), o7(m4, u10, p6, M3, g4, r15), d += c4;
      x4 = Math.floor((X2 - y5) / c4), x4 > m4 && o7(x4, u10, p6, M3, g4, r15);
    }
    this._accelerationMap = r15;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax) return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t23 = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t23 += 0.5 * this._stepX);
      const s16 = this._currentY * this._stepY + this._offsetY;
      let i16, e24;
      if (this._currentX++, "Random" === this._gridType) {
        const n25 = (this._currentX % h11 + h11) % h11, _5 = (this._currentY % h11 + h11) % h11;
        i16 = this._graphicOriginX + t23 + this._stepX * this._randomness * (0.5 - _r._randValues[_5 * h11 + n25]) * 2 / 3, e24 = this._graphicOriginY + s16 + this._stepY * this._randomness * (0.5 - _r._randValues[_5 * h11 + n25 + 1]) * 2 / 3;
      } else i16 = this._graphicOriginX + this._cosAngle * t23 + this._sinAngle * s16, e24 = this._graphicOriginY - this._sinAngle * t23 + this._cosAngle * s16;
      if (!this._testInsidePolygon || this._isInsidePolygon(i16, e24, this._geometryCursor)) return this._internalPlacement.setTranslate(i16, e24), this._internalPlacement;
    }
  }
  _isInsidePolygon(t23, s16, i16) {
    if (null == this._accelerationMap) return a7(t23, s16, i16);
    t23 += n17, s16 += n17;
    const e24 = this._verticalSubdivision, h12 = e24 ? s16 : t23, _5 = Math.floor((h12 - this._polygonMin) / this._delta), r15 = this._accelerationMap.get(_5);
    if (!r15) return false;
    let o11, l9, f5, c4 = 0;
    for (const n25 of r15) {
      if (o11 = n25[0], l9 = n25[1], e24) {
        if (o11[1] > s16 == l9[1] > s16) continue;
        f5 = (l9[0] - o11[0]) * (s16 - o11[1]) - (l9[1] - o11[1]) * (t23 - o11[0]);
      } else {
        if (o11[0] > t23 == l9[0] > t23) continue;
        f5 = (l9[1] - o11[1]) * (t23 - o11[0]) - (l9[0] - o11[0]) * (s16 - o11[1]);
      }
      f5 > 0 ? c4++ : c4--;
    }
    return 0 !== c4;
  }
};
function a7(t23, s16, i16) {
  let e24, h12, _5, r15, a10 = 0;
  for (t23 += n17, s16 += n17, i16.reset(); i16.nextPath(); ) if (i16.nextPoint()) for (e24 = i16.x, h12 = i16.y; i16.nextPoint(); e24 = _5, h12 = r15) {
    if (_5 = i16.x, r15 = i16.y, h12 > s16 == r15 > s16) continue;
    (_5 - e24) * (s16 - h12) - (r15 - h12) * (t23 - e24) > 0 ? a10++ : a10--;
  }
  return 0 !== a10;
}
function o7(t23, s16, i16, e24, h12, n25) {
  let _5 = n25.get(t23);
  _5 || (_5 = [], n25.set(t23, _5)), _5.push([[s16, i16], [e24, h12]]);
}

// node_modules/@arcgis/core/symbols/cim/placements/PlacementOnLine.js
var n18 = 1e-3;
var i12 = class _i {
  static {
    this.instance = null;
  }
  static local() {
    return null === _i.instance && (_i.instance = new _i()), _i.instance;
  }
  execute(t23, e24, n25) {
    return new s11(t23, e24, n25);
  }
};
var s11 = class extends i5 {
  constructor(t23, i16, s16) {
    super(t23), this._curveHelper = new n6(), this._angleToLine = void 0 === i16.angleToLine || i16.angleToLine, this._keepUpright = i16.keepUpright ?? false, this._offset = void 0 !== i16.offset ? i16.offset * s16 : 0, this._relativeTo = i16.relativeTo ?? "LineMiddle", this._position = void 0 !== i16.startPointOffset ? i16.startPointOffset * s16 : 0, this._epsilon = n18 * s16;
  }
  processPath(t23) {
    const e24 = this._position;
    if ("SegmentMidpoint" === this._relativeTo) {
      if (this.iteratePath || (this.iteratePath = true), t23.nextPoint()) {
        let [e25, n26] = [t23.x, t23.y], [i16, s16] = [0, 0];
        const r15 = [0, 0];
        for (; t23.nextPoint(); ) {
          i16 = t23.x, s16 = t23.y;
          const o11 = this._curveHelper.getLength(e25, n26, i16, s16);
          if (o11 < this._epsilon) {
            e25 = i16, n26 = s16;
            continue;
          }
          const a10 = 0.5 + this._position / o11, [l9, h12] = this._curveHelper.getAngleCS(r15, e25, n26, i16, s16, a10), c4 = this._curveHelper.getCoord2D(e25, n26, i16, s16, a10);
          return this.internalPlacement.setTranslate(c4[0] - this._offset * h12, c4[1] + this._offset * l9), this._angleToLine && this.internalPlacement.setRotateCS(l9, h12), this.internalPlacement;
        }
      }
      return this.iteratePath = false, null;
    }
    const n25 = "LineEnd" === this._relativeTo;
    return this.onLine(t23, e24, n25);
  }
  onLine(t23, e24, n25) {
    let i16, s16 = false;
    switch (this._relativeTo) {
      case "LineMiddle":
      default:
        t23.seekPathStart(), i16 = t23.pathLength() / 2 + e24;
        break;
      case "LineBeginning":
        i16 = e24;
        break;
      case "LineEnd":
        i16 = e24, s16 = true;
    }
    n25 ? t23.seekPathEnd() : t23.seekPathStart();
    let r15 = 0;
    if (n25 ? t23.prevPoint() : t23.nextPoint()) {
      let [e25, o11] = [t23.x, t23.y], [a10, l9] = [0, 0];
      const h12 = [0, 0];
      for (; n25 ? t23.prevPoint() : t23.nextPoint(); ) {
        a10 = t23.x, l9 = t23.y;
        const n26 = this._curveHelper.getLength(e25, o11, a10, l9);
        if (r15 + n26 > i16) {
          const t24 = (i16 - r15) / n26, [c4, f5] = this._curveHelper.getAngleCS(h12, e25, o11, a10, l9, t24), p6 = this._curveHelper.getCoord2D(e25, o11, a10, l9, t24), u10 = s16 ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(p6[0] - u10 * f5, p6[1] + u10 * c4), this._angleToLine && (s16 ? this.internalPlacement.setRotateCS(-c4, -f5) : this.internalPlacement.setRotateCS(c4, f5)), this.internalPlacement;
        }
        e25 = a10, o11 = l9, r15 += n26;
      }
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementOnVertices.js
var s12 = 1e-15;
var i13 = class _i {
  static {
    this.instance = null;
  }
  static local() {
    return null === _i.instance && (_i.instance = new _i()), _i.instance;
  }
  execute(t23, e24, s16) {
    return new n19(t23, e24, s16);
  }
};
var n19 = class extends i5 {
  constructor(t23, s16, i16) {
    super(t23), this._curveHelper = new n6(), this._angleToLine = void 0 === s16.angleToLine || s16.angleToLine, this._keepUpright = s16.keepUpright ?? false, this._offset = void 0 !== s16.offset ? s16.offset * i16 : 0, this._endPoints = void 0 === s16.placeOnEndPoints || s16.placeOnEndPoints, this._controlPoints = void 0 === s16.placeOnControlPoints || s16.placeOnControlPoints, this._regularVertices = void 0 === s16.placeOnRegularVertices || s16.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t23) {
    if (this.iteratePath || (this._preparePath(t23), this.iteratePath = true), this._tagIterator >= this._tags.length) return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = false, null;
    const e24 = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e24[2]);
    let s16 = e24[0], i16 = e24[1];
    if (0 !== this._offset) {
      const t24 = Math.cos(e24[2]), n25 = Math.sin(e24[2]);
      s16 -= this._offset * n25, i16 += this._offset * t24;
    }
    return this.internalPlacement.setTranslate(s16, i16), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t23) {
    this._tags.length = 0, this._tagIterator = 0, t23.seekPathStart();
    const e24 = t23.isClosed();
    let s16 = 0, i16 = false, n25 = 0, r15 = 0;
    if (t23.seekPathStart(), t23.nextPoint()) {
      let a10 = t23.x, h12 = t23.y, l9 = t23.getControlPoint(), _5 = true, c4 = t23.nextPoint();
      for (; c4; ) {
        const g4 = t23.x, p6 = t23.y, P3 = t23.getControlPoint();
        (this._angleToLine || 0 !== this._offset) && (n25 = this._curveHelper.getAngle(a10, h12, g4, p6, 0)), _5 ? (_5 = false, e24 ? (s16 = n25, i16 = l9) : (this._endPoints || this._controlPoints && l9) && this._tags.push([a10, h12, n25])) : l9 ? this._controlPoints && this._tags.push([a10, h12, o8(r15, n25)]) : this._regularVertices && this._tags.push([a10, h12, o8(r15, n25)]), (this._angleToLine || 0 !== this._offset) && (r15 = this._curveHelper.getAngle(a10, h12, g4, p6, 1)), c4 = t23.nextPoint(), c4 || (e24 ? P3 || i16 ? this._controlPoints && this._tags.push([g4, p6, o8(r15, s16)]) : this._regularVertices && this._tags.push([g4, p6, o8(r15, s16)]) : (this._endPoints || this._controlPoints && P3) && this._tags.push([g4, p6, r15])), a10 = g4, h12 = p6, l9 = P3;
      }
    }
    this._tagIterator = 0;
  }
};
function o8(t23, e24) {
  const i16 = Math.PI;
  for (; Math.abs(e24 - t23) > i16 + 2 * s12; ) e24 - t23 > i16 ? e24 -= 2 * i16 : e24 += 2 * i16;
  return (t23 + e24) / 2;
}

// node_modules/@arcgis/core/symbols/cim/placements/PlacementPolygonCenter.js
var n20 = class _n {
  static {
    this.instance = null;
  }
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t23, e24, s16) {
    return new o9(t23, e24, s16);
  }
};
var o9 = class {
  constructor(t23, e24, s16) {
    this._geometryCursor = t23, this._offsetX = void 0 !== e24.offsetX ? e24.offsetX * s16 : 0, this._offsetY = void 0 !== e24.offsetY ? e24.offsetY * s16 : 0, this._method = void 0 !== e24.method ? e24.method : "OnPolygon", this._placementPerPart = void 0 !== e24.placePerPart && e24.placePerPart, this._internalPlacement = new t7();
  }
  next() {
    const t23 = this._geometryCursor;
    if (!t23) return null;
    if (!this._placementPerPart) return this._geometryCursor = null, this._polygonCenter(t23);
    for (; t23.nextPath(); ) if (!(t23.getCurrentRingArea() < 0)) return this._polygonCenter(t23.getCurrentPath());
    return this._geometryCursor = null, null;
  }
  _polygonCenter(r15) {
    let n25 = false;
    switch (this._method) {
      case "CenterOfMass":
        {
          const t23 = N2(r15);
          t23 && (this._internalPlacement.setTranslate(t23[0] + this._offsetX, t23[1] + this._offsetY), n25 = true);
        }
        break;
      case "BoundingBoxCenter":
        {
          const e24 = x(r15);
          e24 && (this._internalPlacement.setTranslate((e24[2] + e24[0]) / 2 + this._offsetX, (e24[3] + e24[1]) / 2 + this._offsetY), n25 = true);
        }
        break;
      default: {
        const t23 = l3(r15);
        null !== t23 && (this._internalPlacement.setTranslate(t23[0] + this._offsetX, t23[1] + this._offsetY), n25 = true);
      }
    }
    return n25 ? this._internalPlacement : null;
  }
};

// node_modules/@arcgis/core/symbols/dimensions/effects/LinearDimensionArrowEffect.js
var t11 = class _t2 {
  static {
    this.instance = null;
  }
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t23, n25, s16) {
    return new e17(t23, n25, s16);
  }
};
var e17 = class {
  constructor(t23, e24, n25) {
  }
  next() {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@arcgis/core/symbols/dimensions/effects/LinearDimensionExtensionLineEffect.js
var t12 = class _t2 {
  static {
    this.instance = null;
  }
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t23, n25, s16) {
    return new e18(t23, n25, s16);
  }
};
var e18 = class {
  constructor(t23, e24, n25) {
  }
  next() {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@arcgis/core/symbols/dimensions/effects/LinearDimensionLeaderLineEffect.js
var t13 = class _t2 {
  static {
    this.instance = null;
  }
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t23, n25, s16) {
    return new e19(t23, n25, s16);
  }
};
var e19 = class {
  constructor(t23, e24, n25) {
  }
  next() {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@arcgis/core/symbols/dimensions/effects/LinearDimensionLineEffect.js
var t14 = class _t2 {
  static {
    this.instance = null;
  }
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t23, n25, s16) {
    return new e20(t23, n25, s16);
  }
};
var e20 = class {
  constructor(t23, e24, n25) {
  }
  next() {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@arcgis/core/symbols/dimensions/effects/LinearDimensionPointEffect.js
var e21 = class _e {
  static {
    this.instance = null;
  }
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e24, t23, i16) {
    if ("linearDimensionPointEffect" !== t23?.type) throw new Error("Invalid effect type for LinearDimensionPointEffect");
    return new n21(e24, t23, i16);
  }
};
var n21 = class {
  constructor(e24, n25, t23) {
  }
  next() {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@arcgis/core/symbols/dimensions/effects/LinearDimensionTextEffect.js
var t15 = class _t2 {
  static {
    this.instance = null;
  }
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t23, n25, s16) {
    return new e22(t23, n25, s16);
  }
};
var e22 = class {
  constructor(t23, e24, n25) {
  }
  next() {
    throw new Error("Method not implemented.");
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMImageColorSubstitutionHelper.js
var t16 = class {
  applyColorSubstitution(t23, a10) {
    if (!a10) return t23;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e24, height: n25 } = t23, o11 = this._rasterizationCanvas, r15 = o11.getContext("2d", { willReadFrequently: true });
    t23 !== o11 && (o11.width = e24, o11.height = n25, r15.drawImage(t23, 0, 0, e24, n25));
    const i16 = r15.getImageData(0, 0, e24, n25).data;
    if (a10) {
      for (const l9 of a10) if (l9 && l9.oldColor && 4 === l9.oldColor.length && l9.newColor && 4 === l9.newColor.length) {
        const [t24, a11, e25, n26] = l9.oldColor, [o12, r16, s17, h12] = l9.newColor;
        if (t24 === o12 && a11 === r16 && e25 === s17 && n26 === h12) continue;
        for (let l10 = 0; l10 < i16.length; l10 += 4) t24 === i16[l10] && a11 === i16[l10 + 1] && e25 === i16[l10 + 2] && n26 === i16[l10 + 3] && (i16[l10] = o12, i16[l10 + 1] = r16, i16[l10 + 2] = s17, i16[l10 + 3] = h12);
      }
    }
    const s16 = new ImageData(i16, e24, n25);
    return r15.putImageData(s16, 0, 0), o11;
  }
  tintImageData(t23, a10) {
    if (!a10 || a10.length < 4) return t23;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e24, height: n25 } = t23, o11 = this._rasterizationCanvas, r15 = o11.getContext("2d", { willReadFrequently: true });
    t23 !== o11 && (o11.width = e24, o11.height = n25, r15.drawImage(t23, 0, 0, e24, n25));
    const i16 = r15.getImageData(0, 0, e24, n25), s16 = new Uint8Array(i16.data), l9 = [a10[0] / 255, a10[1] / 255, a10[2] / 255, a10[3] / 255];
    for (let g4 = 0; g4 < s16.length; g4 += 4) s16[g4] *= l9[0], s16[g4 + 1] *= l9[1], s16[g4 + 2] *= l9[2], s16[g4 + 3] *= l9[3];
    const h12 = new ImageData(new Uint8ClampedArray(s16.buffer), e24, n25);
    return r15.putImageData(h12, 0, 0), o11;
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMOperators.js
function w2(P3) {
  if (!P3) return null;
  switch (P3.type) {
    case "CIMGeometricEffectAddControlPoints":
      return e6.local();
    case "CIMGeometricEffectArrow":
      return u4.local();
    case "CIMGeometricEffectBuffer":
      return m2.local();
    case "CIMGeometricEffectControlMeasureLine":
      return e9.local();
    case "CIMGeometricEffectCut":
      return r4.local();
    case "CIMGeometricEffectDashes":
      return n9.local();
    case "CIMGeometricEffectDonut":
      return s7.local();
    case "CIMGeometricEffectJog":
      return e10.local();
    case "CIMGeometricEffectMove":
      return t8.local();
    case "CIMGeometricEffectOffset":
      return l7.local();
    case "CIMGeometricEffectRadial":
      return n11.local();
    case "CIMGeometricEffectReverse":
      return e12.local();
    case "CIMGeometricEffectRotate":
      return e13.local();
    case "CIMGeometricEffectScale":
      return e14.local();
    case "CIMGeometricEffectSuppress":
      return r9.local();
    case "CIMGeometricEffectTaperedPolygon":
      return y3.local();
    case "CIMGeometricEffectWave":
      return h8.local();
    case "CIMGeometricEffectEnclosingPolygon":
      return o6.local();
    case "LinearDimensionLineEffect":
      return t14.local();
    case "LinearDimensionLeaderLineEffect":
      return t13.local();
    case "LinearDimensionPointEffect":
      return e21.local();
    case "LinearDimensionArrowEffect":
      return t11.local();
    case "LinearDimensionTextEffect":
      return t15.local();
    case "LinearDimensionExtensionLineEffect":
      return t12.local();
  }
  return null;
}
function O(e24) {
  if (!e24) return null;
  switch (e24.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return n15.local();
    case "CIMMarkerPlacementAtExtremities":
      return s10.local();
    case "CIMMarkerPlacementAtMeasuredUnits":
      return r10.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return n16.local();
    case "CIMMarkerPlacementInsidePolygon":
      return _2.local();
    case "CIMMarkerPlacementOnLine":
      return i12.local();
    case "CIMMarkerPlacementOnVertices":
      return i13.local();
    case "CIMMarkerPlacementPolygonCenter":
      return n20.local();
  }
  return null;
}

// node_modules/@arcgis/core/symbols/cim/imageUtils.js
function t17(t23) {
  const e24 = t23.getFrame(0);
  if (e24 instanceof HTMLImageElement || e24 instanceof HTMLCanvasElement) return e24;
  const n25 = document.createElement("canvas");
  n25.width = t23.width, n25.height = t23.height;
  const a10 = n25.getContext("2d");
  return e24 instanceof ImageData ? a10.putImageData(e24, 0, 0) : a10.drawImage(e24, 0, 0), n25;
}

// node_modules/@arcgis/core/symbols/cim/mathUtils.js
function t18(t23, n25 = 0) {
  if (0 === n25) return t23;
  const r15 = Math.cos(n25), o11 = Math.sin(n25), [c4, e24] = t23;
  return [c4 * r15 + e24 * -o11, c4 * o11 + e24 * r15];
}

// node_modules/@arcgis/core/symbols/cim/Rect.js
var t19 = class _t2 {
  constructor(t23 = 0, h12 = 0, i16 = 0, s16 = 0) {
    this.x = t23, this.y = h12, this.width = i16, this.height = s16;
  }
  static fromExtent(h12) {
    return new _t2(h12.xmin, -h12.ymax, h12.xmax - h12.xmin, h12.ymax - h12.ymin);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t23) {
    this.x = Math.min(this.x, t23.x), this.y = Math.min(this.y, t23.y), this.width = Math.max(this.width, t23.width), this.height = Math.max(this.height, t23.height);
  }
};

// node_modules/@arcgis/core/symbols/cim/TextRasterizer.js
function i14(e24) {
  return `rgb(${e24.slice(0, 3).toString()})`;
}
function n22(e24) {
  return `rgba(${e24.slice(0, 3).toString()},${e24[3]})`;
}
var s13 = class {
  constructor(e24) {
    e24 && (this._textRasterizationCanvas = e24);
  }
  rasterizeText(e24, s16) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const a10 = this._textRasterizationCanvas, h12 = a10.getContext("2d", { willReadFrequently: true });
    r12(h12, s16), this._parameters = s16, this._textLines = e24.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const { decoration: l9, weight: d } = s16.font;
    this._lineThroughWidthOffset = l9 && "line-through" === l9 ? 0.1 * this._lineHeight : 0;
    const c4 = null != s16.backgroundColor || null != s16.borderLine, _5 = c4 ? s2 : 0, u10 = this._computeTextWidth(h12, s16) + 2 * _5, g4 = this._lineHeight * this._textLines.length + 2 * _5;
    if (a10.width = u10 + 2 * this._lineThroughWidthOffset, a10.height = g4, 0 === a10.width || 0 === a10.height) return a10.width = a10.height = 1, { size: [0, 0], image: new Uint32Array(0), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0, canvas: a10 };
    this._renderedLineHeight = Math.round(this._lineHeight), this._renderedOutlineSize = (s16.outline.size || 0) * s16.pixelRatio, this._renderedHaloSize = (s16.halo.size || 0) * s16.pixelRatio, this._renderedWidth = u10, this._renderedHeight = g4, this._lineThroughWidthOffset *= s16.pixelRatio;
    const f5 = (s16.outline && s16.outline.color) ?? [0, 0, 0, 0], m4 = s16.color ?? [0, 0, 0, 0], p6 = s16.halo && s16.halo.color ? s16.halo.color : [0, 0, 0, 0];
    this._fillStyle = n22(m4), this._outlineStyle = n22(f5), this._haloStyle = i14(p6);
    const x4 = this._renderedLineHeight, z3 = this._renderedOutlineSize, b3 = this._renderedHaloSize;
    h12.save(), h12.clearRect(0, 0, a10.width, a10.height), r12(h12, s16);
    const w4 = _5 * s16.pixelRatio, v4 = o10(h12.textAlign, this._renderedWidth - 2 * w4, this._renderedHaloSize + this._renderedOutlineSize) + w4, S3 = b3 + z3 + w4, y5 = b3 > 0;
    let R3 = this._lineThroughWidthOffset, C2 = 0;
    if (c4) {
      h12.save();
      const e25 = s16.backgroundColor ?? [0, 0, 0, 0], t23 = s16.borderLine?.color ?? [0, 0, 0, 0], i16 = 2 * (s16.borderLine?.size ?? 0);
      h12.fillStyle = n22(e25), h12.strokeStyle = n22(t23), h12.lineWidth = i16, h12.fillRect(0, 0, a10.width, a10.height), h12.strokeRect(0, 0, a10.width, a10.height), h12.restore();
    }
    y5 && this._renderHalo(h12, v4, S3, R3, C2, s16), z3 > 0 && this._renderOutline(h12, v4, S3, R3, C2, s16), C2 += S3, R3 += v4;
    for (const t23 of this._textLines) y5 ? (h12.globalCompositeOperation = "destination-out", h12.fillStyle = "rgb(0, 0, 0)", h12.fillText(t23, R3, C2), h12.globalCompositeOperation = "source-over", h12.fillStyle = this._fillStyle, h12.fillText(t23, R3, C2)) : (h12.fillStyle = this._fillStyle, h12.fillText(t23, R3, C2)), l9 && "none" !== l9 && this._renderDecoration(h12, R3, C2, l9, d), C2 += x4;
    h12.restore();
    const H2 = this._renderedWidth + 2 * this._lineThroughWidthOffset, W2 = this._renderedHeight, T4 = h12.getImageData(0, 0, H2, W2), k = new Uint8Array(T4.data);
    if (s16.premultiplyColors) {
      let e25;
      for (let t23 = 0; t23 < k.length; t23 += 4) e25 = k[t23 + 3] / 255, k[t23] = k[t23] * e25, k[t23 + 1] = k[t23 + 1] * e25, k[t23 + 2] = k[t23 + 2] * e25;
    }
    let L3, O3;
    switch (s16.horizontalAlignment) {
      case "left":
        L3 = -0.5;
        break;
      case "right":
        L3 = 0.5;
        break;
      default:
        L3 = 0;
    }
    switch (s16.verticalAlignment) {
      case "bottom":
        O3 = -0.5;
        break;
      case "top":
        O3 = 0.5;
        break;
      case "baseline":
        O3 = -1 / 6;
        break;
      default:
        O3 = 0;
    }
    return { size: [H2, W2], image: new Uint32Array(k.buffer), sdf: false, simplePattern: false, anchorX: L3, anchorY: O3, canvas: a10 };
  }
  _renderHalo(e24, t23, i16, n25, s16, o11) {
    const a10 = this._renderedWidth, h12 = this._renderedHeight;
    this._outlineRasterizationCanvas || (this._outlineRasterizationCanvas = document.createElement("canvas")), this._outlineRasterizationCanvas.width = a10, this._outlineRasterizationCanvas.height = h12;
    const l9 = this._outlineRasterizationCanvas, d = l9.getContext("2d");
    d.clearRect(0, 0, a10, h12), r12(d, o11);
    const { decoration: c4, weight: _5 } = o11.font;
    d.fillStyle = this._haloStyle, d.strokeStyle = this._haloStyle, d.lineJoin = "round", this._renderOutlineNative(d, t23, i16, c4, _5, this._renderedHaloSize + this._renderedOutlineSize), e24.globalAlpha = this._parameters.halo.color[3], e24.drawImage(l9, 0, 0, a10, h12, n25, s16, a10, h12), e24.globalAlpha = 1;
  }
  _renderOutline(e24, t23, i16, n25, s16, o11) {
    const a10 = this._renderedWidth, h12 = this._renderedHeight;
    this._outlineRasterizationCanvas || (this._outlineRasterizationCanvas = document.createElement("canvas")), this._outlineRasterizationCanvas.width = a10, this._outlineRasterizationCanvas.height = h12;
    const l9 = this._outlineRasterizationCanvas, d = l9.getContext("2d");
    d.clearRect(0, 0, a10, h12), r12(d, o11);
    const { decoration: c4, weight: _5 } = o11.font;
    d.fillStyle = this._outlineStyle, d.strokeStyle = this._outlineStyle, d.lineJoin = "round", this._renderOutlineNative(d, t23, i16, c4, _5, this._renderedOutlineSize), e24.globalAlpha = this._parameters.outline.color[3], e24.drawImage(l9, 0, 0, a10, h12, n25, s16, a10, h12), e24.globalAlpha = 1;
  }
  _renderOutlineNative(e24, t23, i16, n25, s16, r15) {
    const o11 = this._renderedLineHeight;
    for (const a10 of this._textLines) {
      const h12 = 2 * r15, l9 = 5, d = 0.1;
      for (let r16 = 0; r16 < l9; r16++) {
        const o12 = (1 - (l9 - 1) * d + r16 * d) * h12;
        e24.lineWidth = o12, e24.strokeText(a10, t23, i16), n25 && "none" !== n25 && this._renderDecoration(e24, t23, i16, n25, s16, o12);
      }
      i16 += o11;
    }
  }
  computeTextSize(e24, t23) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const i16 = this._textRasterizationCanvas, n25 = i16.getContext("2d");
    r12(n25, t23), this._parameters = t23, this._textLines = e24.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const s16 = this._computeTextWidth(n25, t23), o11 = this._lineHeight * this._textLines.length;
    return i16.width = s16, i16.height = o11, [s16 * t23.pixelRatio, o11 * t23.pixelRatio];
  }
  _computeTextWidth(t23, i16) {
    let n25 = 0;
    for (const e24 of this._textLines) n25 = Math.max(n25, t23.measureText(e24).width);
    const s16 = i16.font;
    return ("italic" === s16.style || "oblique" === s16.style || "string" == typeof s16.weight && ("bold" === s16.weight || "bolder" === s16.weight) || "number" == typeof s16.weight && s16.weight > 600) && (n25 += 0.3 * t23.measureText("w").width), n25 += 2 * u2(this._parameters.halo.size), Math.round(n25);
  }
  _computeLineHeightBase() {
    return 1.275 * this._parameters.size;
  }
  _computeLineHeight() {
    let t23 = this._computeLineHeightBase();
    const i16 = this._parameters.font.decoration;
    return i16 && "underline" === i16 && (t23 *= 1.3), Math.round(t23 + 2 * u2(this._parameters.halo.size));
  }
  _renderDecoration(e24, t23, i16, n25, s16, r15) {
    let o11 = 0.9 * this._lineHeight;
    const a10 = "bold" === s16 ? 0.06 : "bolder" === s16 ? 0.09 : 0.04;
    switch (e24.textAlign) {
      case "center":
        t23 -= this._renderedWidth / 2;
        break;
      case "right":
        t23 -= this._renderedWidth;
    }
    const h12 = e24.textBaseline;
    if ("underline" === n25) switch (o11 = 0.9 * this._computeLineHeightBase(), h12) {
      case "top":
        i16 += o11;
        break;
      case "middle":
        i16 += o11 / 2;
    }
    else if ("line-through" === n25) switch (h12) {
      case "top":
        i16 += o11 / 1.5;
        break;
      case "middle":
        i16 += o11 / 3;
    }
    const l9 = r15 ? 1.5 * r15 : Math.ceil(o11 * a10);
    e24.save(), e24.beginPath(), e24.strokeStyle = e24.fillStyle, e24.lineWidth = l9, e24.moveTo(t23 - this._lineThroughWidthOffset, i16), e24.lineTo(t23 + this._renderedWidth + 2 * this._lineThroughWidthOffset, i16), e24.stroke(), e24.restore();
  }
};
function r12(t23, i16) {
  const n25 = Math.max(i16.size, 0.5), s16 = i16.font, r15 = `${s16.style} ${s16.weight} ${u2(n25).toFixed(1)}px ${s16.family}, sans-serif`;
  let o11;
  switch (t23.font = r15, t23.textBaseline = "top", i16.horizontalAlignment) {
    case "left":
    default:
      o11 = "left";
      break;
    case "right":
      o11 = "right";
      break;
    case "center":
      o11 = "center";
  }
  t23.textAlign = o11;
}
function o10(e24, t23, i16) {
  return "center" === e24 ? 0.5 * t23 : "right" === e24 ? t23 - i16 : i16;
}

// node_modules/@arcgis/core/views/2d/engine/svgUtils.js
function t20(t23) {
  return document.createElementNS("http://www.w3.org/2000/svg", t23);
}
function e23() {
  const e24 = t20("svg");
  return e24.setAttribute("style", "position: absolute;"), e24.setAttribute("width", "0"), e24.setAttribute("height", "0"), e24.setAttribute("aria-hidden", "true"), e24.setAttribute("role", "presentation"), document.body.appendChild(e24), e24;
}
function n23(t23) {
  return null != t23 && document.body.removeChild(t23), null;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js
var t21 = () => n.getLogger("esri.views.2d.engine.webgl.alignmentUtils");
function r13(e24) {
  if (!e24) return 0;
  switch (e24) {
    case "Left":
    case "left":
      return -1;
    case "Right":
    case "right":
      return 1;
    case "Justify":
      return t21().warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), 0;
    case "Center":
    case "center":
      return 0;
  }
}
function n24(e24) {
  if (!e24) return 0;
  switch (e24) {
    case "Top":
    case "top":
      return 1;
    case "Center":
    case "middle":
      return 0;
    case "Baseline":
    case "baseline":
      return 2;
    case "Bottom":
    case "bottom":
      return -1;
  }
}
function a8(e24) {
  switch (e24) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return ["right", "bottom"];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return ["center", "bottom"];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return ["left", "bottom"];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return ["right", "middle"];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return ["center", "middle"];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return ["left", "middle"];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return ["right", "top"];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return ["center", "top"];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return ["left", "top"];
    default:
      return console.debug(`Found invalid placement type ${e24}`), ["center", "middle"];
  }
}
function c3(e24) {
  switch (e24) {
    case 1:
    case "right":
      return -1;
    case 0:
    case "center":
      return 0;
    case -1:
    case "left":
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${e24}`), 0;
  }
}
function s14(e24) {
  switch (e24) {
    case 1:
    case "top":
      return 1;
    case 0:
    case "middle":
      return 0;
    case -1:
    case 2:
    case "baseline":
    case "bottom":
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${e24}`), 0;
  }
}

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/shapingUtils.js
var g3 = 22;
var _3 = 4;
var l8 = g3 + _3;
var u9 = g3 - 6;
var x3 = Math.PI / 180;
var p5 = 8;
var b2 = 1.5;
var y4 = class {
  constructor(t23, s16, i16, e24) {
    this._rotationT = n4(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const h12 = i16.rect, n25 = new Float32Array(8);
    t23 *= e24, s16 *= e24;
    const r15 = 0 === i16.code ? i16.metrics.width : h12.width * e24, a10 = 0 === i16.code ? i16.metrics.height : h12.height * e24;
    this.width = r15, this.height = a10, n25[0] = t23, n25[1] = s16, n25[2] = t23 + r15, n25[3] = s16, n25[4] = t23, n25[5] = s16 + a10, n25[6] = t23 + r15, n25[7] = s16 + a10, this._data = n25, this._setTextureCoords(h12), this._scale = e24, this._mosaic = i16, this.x = t23, this.y = s16, this.maxOffset = Math.max(t23 + r15, s16 + a10);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(s16) {
    this._angle = s16, M(this._rotationT, -s16), this._setOffsets();
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(), this._offsets;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t23, width: i16 } = this._mosaic.metrics, e24 = i16 * this._scale, n25 = Math.abs(t23) * this._scale, r15 = new Float32Array(8);
      r15[0] = this.x, r15[1] = this.y, r15[2] = this.x + e24, r15[3] = this.y, r15[4] = this.x, r15[5] = this.y + n25, r15[6] = this.x + e24, r15[7] = this.y + n25;
      const a10 = e4(n4(), this._rotationT, this._transform);
      e5(r15, r15, a10);
      let f5 = 1 / 0, c4 = 1 / 0, d = -1 / 0, g4 = -1 / 0;
      for (let s16 = 0; s16 < 4; s16++) {
        const t24 = r15[2 * s16], i17 = r15[2 * s16 + 1];
        f5 = Math.min(f5, t24), c4 = Math.min(c4, i17), d = Math.max(d, t24), g4 = Math.max(g4, i17);
      }
      const _5 = d - f5, l9 = g4 - c4, u10 = f5 + _5 / 2, x4 = c4 + l9 / 2;
      this._bounds = new i4(u10, x4, _5, l9);
    }
    return this._bounds;
  }
  setTransform(t23) {
    this._transform = t23, this._offsets = null;
  }
  _setOffsets() {
    this._offsets || (this._offsets = { topLeft: [0, 0], topRight: [0, 0], bottomLeft: [0, 0], bottomRight: [0, 0] });
    const t23 = e4(n4(), this._rotationT, this._transform);
    this._offsets.topLeft[0] = this._data[0], this._offsets.topLeft[1] = this._data[1], this._offsets.topRight[0] = this._data[2], this._offsets.topRight[1] = this._data[3], this._offsets.bottomLeft[0] = this._data[4], this._offsets.bottomLeft[1] = this._data[5], this._offsets.bottomRight[0] = this._data[6], this._offsets.bottomRight[1] = this._data[7], S2(this._offsets.topLeft, this._offsets.topLeft, t23), S2(this._offsets.topRight, this._offsets.topRight, t23), S2(this._offsets.bottomLeft, this._offsets.bottomLeft, t23), S2(this._offsets.bottomRight, this._offsets.bottomRight, t23);
  }
  _setTextureCoords({ x: t23, y: s16, width: i16, height: e24 }) {
    this._texcoords = { topLeft: [t23, s16], topRight: [t23 + i16, s16], bottomLeft: [t23, s16 + e24], bottomRight: [t23 + i16, s16 + e24] };
  }
};
var w3 = (t23, s16) => ({ code: 0, page: 0, sdf: true, rect: new t5(0, 0, 11, 8), textureBinding: s16, metrics: { advance: 0, height: 4, width: t23, left: 0, top: 0 } });
function L2(t23, s16) {
  return t23.forEach((t24) => S2(t24, t24, s16)), { topLeft: t23[0], topRight: t23[1], bottomLeft: t23[2], bottomRight: t23[3] };
}
var M2 = class {
  constructor(t23, s16, i16, e24) {
    this._rotation = 0, this._decorate(t23, s16, i16, e24), this.glyphs = t23, this.bounds = this._createBounds(t23), this.isMultiline = s16.length > 1, this._hasRotation = 0 !== i16.angle, this._transform = this._createGlyphTransform(this.bounds, i16), this._borderLineSizePx = i16.borderLineSizePx, (i16.borderLineSizePx || i16.hasBackground) && ([this.bounds, this.textBox] = this.shapeBackground(this._transform));
    for (const o11 of t23) o11.setTransform(this._transform);
  }
  setRotation(i16) {
    if (0 === i16 && 0 === this._rotation) return;
    this._rotation = i16;
    const e24 = this._transform, h12 = M(n4(), i16);
    e4(e24, h12, e24);
    for (const t23 of this.glyphs) t23.setTransform(this._transform);
  }
  _decorate(t23, s16, i16, e24) {
    if (!i16.decoration || "none" === i16.decoration || !t23.length) return;
    const o11 = i16.scale, h12 = "underline" === i16.decoration ? e24?.baseline ?? l8 : e24?.midline ?? u9, n25 = t23[0].textureBinding;
    for (const r15 of s16) {
      const s17 = r15.startX * o11, i17 = r15.startY * o11, e25 = (r15.width + r15.glyphWidthEnd) * o11;
      t23.push(new y4(s17, i17 + h12 * o11, w3(e25, n25), 1));
    }
  }
  shapeBackground(t23) {
    const s16 = this._borderLineSizePx || 0, i16 = (b2 + s16) / 2, e24 = this._borderLineSizePx ? i16 : 0, { xmin: o11, ymin: h12, xmax: n25, ymax: r15, x: a10, y: f5, width: c4, height: d } = this.bounds, g4 = [o11 - p5, h12 - p5], _5 = [n25 + p5, h12 - p5], l9 = [o11 - p5, r15 + p5], u10 = [n25 + p5, r15 + p5], x4 = L2([[g4[0] - i16, g4[1] - i16], [_5[0] + i16, _5[1] - i16], [g4[0] + e24, g4[1] + e24], [_5[0] - e24, _5[1] + e24]], t23), y5 = L2([[l9[0] + e24, l9[1] - e24], [u10[0] - e24, u10[1] - e24], [l9[0] - i16, l9[1] + i16], [u10[0] + i16, u10[1] + i16]], t23), w4 = L2([[g4[0] - i16, g4[1] - i16], [g4[0] + e24, g4[1] + e24], [l9[0] - i16, l9[1] + i16], [l9[0] + e24, l9[1] - e24]], t23), M3 = L2([[_5[0] - e24, _5[1] + e24], [_5[0] + i16, _5[1] - i16], [u10[0] - e24, u10[1] - e24], [u10[0] + i16, u10[1] + i16]], t23), R3 = { main: L2([g4, _5, l9, u10], t23), top: x4, bot: y5, left: w4, right: M3 };
    return [new i4(a10, f5, c4 + 2 * i16, d + 2 * i16), R3];
  }
  get boundsT() {
    const t23 = this.bounds, s16 = o2(n5(), t23.x, t23.y);
    if (S2(s16, s16, this._transform), this._hasRotation) {
      const i16 = Math.max(t23.width, t23.height);
      return new i4(s16[0], s16[1], i16, i16);
    }
    return new i4(s16[0], s16[1], t23.width, t23.height);
  }
  _createBounds(t23) {
    let s16 = 1 / 0, i16 = 1 / 0, e24 = 0, o11 = 0;
    for (const r15 of t23) s16 = Math.min(s16, r15.xTopLeft), i16 = Math.min(i16, r15.yTopLeft), e24 = Math.max(e24, r15.xBottomRight), o11 = Math.max(o11, r15.yBottomRight);
    const h12 = e24 - s16, n25 = o11 - i16;
    return new i4(s16 + h12 / 2, i16 + n25 / 2, h12, n25);
  }
  _createGlyphTransform(t23, s16) {
    const h12 = x3 * s16.angle, n25 = n4(), f5 = n5();
    return i3(n25, n25, o2(f5, s16.xOffset, -s16.yOffset)), s16.useCIMAngleBehavior ? s3(n25, n25, h12) : (i3(n25, n25, o2(f5, t23.x, t23.y)), s3(n25, n25, h12), i3(n25, n25, o2(f5, -t23.x, -t23.y))), n25;
  }
};
var R = class {
  constructor(t23, s16, i16, e24, o11, h12) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s16, i16)), this.end = Math.max(0, Math.max(s16, i16)), this.end < t23.length && (this.glyphWidthEnd = t23[this.end].metrics.width), this.width = e24, this.yMin = o11, this.yMax = h12;
  }
};
var B = (t23) => 10 === t23;
var T2 = (t23) => 32 === t23;
function v2(t23, s16, i16) {
  const e24 = new Array(), o11 = 1 / i16.scale, h12 = i16.maxLineWidth * o11, n25 = s16 ? t23.length - 1 : 0, r15 = s16 ? -1 : t23.length, a10 = s16 ? -1 : 1;
  let f5 = n25, c4 = 0, d = 0, m4 = f5, g4 = m4, _5 = 0, l9 = 1 / 0, u10 = 0;
  for (; f5 !== r15; ) {
    const { code: s17, metrics: i17 } = t23[f5], o12 = Math.abs(i17.top);
    if (B(s17) || T2(s17) || (l9 = Math.min(l9, o12), u10 = Math.max(u10, o12 + i17.height)), B(s17)) f5 !== n25 && (e24.push(new R(t23, m4, f5 - a10, c4, l9 === 1 / 0 ? 0 : l9, u10)), l9 = 1 / 0, u10 = 0), c4 = 0, m4 = f5 + a10, g4 = f5 + a10, d = 0;
    else if (T2(s17)) g4 = f5 + a10, d = 0, _5 = i17.advance, c4 += i17.advance;
    else if (c4 > h12) {
      if (g4 !== m4) {
        const s18 = g4 - 2 * a10;
        c4 -= _5, e24.push(new R(t23, m4, s18, c4 - d, l9, u10)), l9 = 1 / 0, u10 = 0, m4 = g4, c4 = d;
      } else e24.push(new R(t23, m4, f5 - a10, c4, l9, u10)), l9 = 1 / 0, u10 = 0, m4 = f5, g4 = f5, c4 = 0;
      c4 += i17.advance, d += i17.advance;
    } else c4 += i17.advance, d += i17.advance;
    f5 += a10;
  }
  const x4 = new R(t23, m4, f5 - a10, c4, l9, u10);
  return x4.start >= 0 && x4.end < t23.length && e24.push(x4), e24;
}
function j4(t23, s16) {
  let i16 = 0;
  for (let h12 = 0; h12 < t23.length; h12++) {
    const { width: s17 } = t23[h12];
    i16 = Math.max(s17, i16);
  }
  const e24 = "underline" === s16.decoration ? _3 : 0, o11 = t23[0].yMin;
  return { x: 0, y: o11, height: t23[t23.length - 1].yMax + s16.lineHeight * (t23.length - 1) + e24 - o11, width: i16 };
}
function A2(t23, s16) {
  const i16 = s16.scale, e24 = new Array(), o11 = t23.sdfPadding, { faceInfo: h12, glyphs: n25, isRightToLeft: r15 } = t23, a10 = v2(n25, r15, s16), d = a10.length ? j4(a10, s16) : { y: 0, height: 0 }, m4 = r13(s16.horizontalAlignment), _5 = n24(s16.verticalAlignment), l9 = 2 === _5 ? 1 : 0, u10 = l9 ? 0 : _5 - 1, x4 = (1 - l9) * -d.y + u10 * (d.height / 2) + l9 * -g3;
  for (let f5 = 0; f5 < a10.length; f5++) {
    const { start: h13, end: r16, width: c4 } = a10[f5];
    let d2 = -1 * (m4 + 1) * (c4 / 2) - o11;
    const g4 = (t23.isRightToLeft ? a10.length - 1 - f5 : f5) * s16.lineHeight + x4 - o11;
    a10[f5].startX = d2, a10[f5].startY = g4;
    for (let t24 = h13; t24 <= r16; t24++) {
      const s17 = n25[t24];
      if (B(s17.code)) continue;
      const o12 = new y4(d2 + s17.metrics.left, g4 - s17.metrics.top, s17, i16);
      d2 += s17.metrics.advance, e24.push(o12);
    }
  }
  return new M2(e24, a10, s16, h12);
}

// node_modules/@arcgis/core/views/2d/layers/graphics/graphicsUtils.js
var i15 = 50;
function m3(n25) {
  if (!n25) return null;
  const { xmin: e24, ymin: t23, xmax: o11, ymax: i16, spatialReference: m4 } = n25;
  return new j2({ rings: [[[e24, t23], [e24, i16], [o11, i16], [o11, t23], [e24, t23]]], spatialReference: m4 });
}
function s15(r15) {
  return e3(Math.round(u2(r15)));
}
function a9(e24) {
  const r15 = e3(Ot), i16 = e3(Pt);
  return Math.max(r15, Math.min(e24 || i16, i16));
}

// node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js
var st = Math.PI / 180;
var ot = 0.5;
var nt = () => n.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
var at = class _at {
  constructor(t23) {
    this._t = t23;
  }
  static createIdentity() {
    return new _at([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t23 = this._t;
    return new _at(t23.slice());
  }
  transform(t23) {
    const e24 = this._t;
    return [e24[0] * t23[0] + e24[1] * t23[1] + e24[2], e24[3] * t23[0] + e24[4] * t23[1] + e24[5]];
  }
  static createScale(t23, e24) {
    return new _at([t23, 0, 0, 0, e24, 0]);
  }
  scale(t23, e24) {
    const r15 = this._t;
    return r15[0] *= t23, r15[1] *= t23, r15[2] *= t23, r15[3] *= e24, r15[4] *= e24, r15[5] *= e24, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t23, e24) {
    return new _at([0, 0, t23, 0, 0, e24]);
  }
  translate(t23, e24) {
    const r15 = this._t;
    return r15[2] += t23, r15[5] += e24, this;
  }
  static createRotate(t23) {
    const e24 = Math.cos(t23), r15 = Math.sin(t23);
    return new _at([e24, -r15, 0, r15, e24, 0]);
  }
  rotate(t23) {
    return _at.multiply(this, _at.createRotate(t23), this);
  }
  angle() {
    const t23 = this._t[0], e24 = this._t[3], r15 = Math.sqrt(t23 * t23 + e24 * e24);
    return [t23 / r15, e24 / r15];
  }
  static multiply(t23, e24, r15) {
    const i16 = t23._t, s16 = e24._t, o11 = i16[0] * s16[0] + i16[3] * s16[1], n25 = i16[1] * s16[0] + i16[4] * s16[1], a10 = i16[2] * s16[0] + i16[5] * s16[1] + s16[2], l9 = i16[0] * s16[3] + i16[3] * s16[4], h12 = i16[1] * s16[3] + i16[4] * s16[4], c4 = i16[2] * s16[3] + i16[5] * s16[4] + s16[5], m4 = r15._t;
    return m4[0] = o11, m4[1] = n25, m4[2] = a10, m4[3] = l9, m4[4] = h12, m4[5] = c4, r15;
  }
  invert() {
    const t23 = this._t;
    let e24 = t23[0] * t23[4] - t23[1] * t23[3];
    if (0 === e24) return new _at([0, 0, 0, 0, 0, 0]);
    e24 = 1 / e24;
    const r15 = (t23[1] * t23[5] - t23[2] * t23[4]) * e24, i16 = (t23[2] * t23[3] - t23[0] * t23[5]) * e24, s16 = t23[4] * e24, o11 = -t23[1] * e24, n25 = -t23[3] * e24, a10 = t23[0] * e24;
    return new _at([s16, o11, r15, n25, a10, i16]);
  }
};
var lt = class {
  constructor(t23, e24) {
    this._resourceManager = t23, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new e(() => new t7(), void 0, void 0, 100), this._earlyReturn = false, this._mapRotation = 0, this._transfos.push(e24 || at.createIdentity()), this._sizeTransfos.push(e24 ? e24.scaleRatio() : 1);
  }
  setTransform(t23, e24) {
    this._transfos = [t23 || at.createIdentity()], this._sizeTransfos = [e24 || (t23 ? t23.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t23) {
    this._geomUnitsPerPoint = t23;
  }
  transformPt(t23) {
    return this._transfos[this._transfos.length - 1].transform(t23);
  }
  transformSize(t23) {
    return t23 * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t23) {
    return this._transfos[this._transfos.length - 1].invert().transform(t23);
  }
  reverseTransformSize(t23) {
    return t23 / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformScalar(t23) {
    return t23 / this._transfos[this._transfos.length - 1].scaleRatio();
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  prevGeomUnitsPerPoint() {
    return this._transfos.length > 2 ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t23, e24) {
    const r15 = e24 ? t23.scaleRatio() : 1;
    at.multiply(t23, this.back(), t23), this._transfos.push(t23), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * r15);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t23, e24, r15) {
    if (t23) switch (t23.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this.drawMultiLayerSymbol(t23, e24);
        break;
      case "CIMTextSymbol":
        this.drawTextSymbol(t23, e24, r15);
    }
  }
  drawMultiLayerSymbol(t23, e24) {
    if (!t23 || !e24) return;
    const r15 = t23.symbolLayers;
    if (!r15) return;
    const i16 = t23.effects;
    if (i16 && i16.length > 0) {
      const t24 = this.executeEffects(i16, e24);
      if (t24) {
        let e25 = t24.next();
        for (; e25; ) this.drawSymbolLayers(r15, e25.asJSON()), e25 = t24.next();
      }
    } else this.drawSymbolLayers(r15, e24);
  }
  executeEffects(t23, e24) {
    let r15 = new y2(_.fromJSONCIM(e24));
    for (const i16 of t23) {
      const t24 = w2(i16);
      t24 && (r15 = t24.execute(r15, i16, this.geomUnitsPerPoint(), null));
    }
    return r15;
  }
  drawSymbolLayers(t23, e24) {
    let r15 = t23.length;
    for (; r15--; ) {
      const i16 = t23[r15];
      if (!i16 || false === i16.enable) continue;
      const s16 = i16.effects;
      if (s16 && s16.length > 0) {
        const t24 = this.executeEffects(s16, e24);
        if (t24) {
          let e25 = null;
          for (; (e25 = t24.next()) && (this.drawSymbolLayer(i16, e25.asJSON()), !this._earlyReturn); ) ;
        }
      } else this.drawSymbolLayer(i16, e24);
      if (this._earlyReturn) return;
    }
  }
  drawSymbolLayer(t23, e24) {
    switch (t23.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e24, t23.color, t23.path);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e24, t23);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e24, t23);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e24, t23);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e24, t23.color, t23.width, t23.capStyle, t23.joinStyle, t23.miterLimit, t23.path);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e24, t23);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e24, t23);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t23, e24);
    }
  }
  drawHatchFill(t23, e24) {
    const r15 = ft(e24, t23, this.geomUnitsPerPoint());
    r15 && (this.pushClipPath(t23), this.drawMultiLayerSymbol(e24.lineSymbol, r15), this.popClipPath());
  }
  drawPictureFill(t23, e24) {
  }
  drawGradientFill(t23, e24) {
  }
  drawPictureStroke(t23, e24) {
  }
  drawGradientStroke(t23, e24) {
  }
  drawMarkerLayer(t23, e24) {
    const r15 = t23.markerPlacement;
    if (r15) {
      const i16 = O(r15);
      if (i16) {
        const s16 = "CIMMarkerPlacementInsidePolygon" === r15.type || "CIMMarkerPlacementPolygonCenter" === r15.type && r15.clipAtBoundary;
        s16 && this.pushClipPath(e24);
        const o11 = i16.execute(_.fromJSONCIM(e24), r15, this.geomUnitsPerPoint(), null);
        if (o11) {
          let e25 = null;
          for (; (e25 = o11.next()) && (this.drawMarker(t23, e25), !this._earlyReturn); ) ;
        }
        s16 && this.popClipPath();
      }
    } else {
      const r16 = this._placementPool.acquire();
      if (t3(e24)) r16.tx = e24.x, r16.ty = e24.y, this.drawMarker(t23, r16);
      else if (o3(e24)) {
        const i16 = l(e24);
        i16 && ([r16.tx, r16.ty] = i16, this.drawMarker(t23, r16));
      } else if (e2(e24)) {
        for (const i16 of e24.paths) for (const e25 of i16) if (r16.tx = e25[0], r16.ty = e25[1], this.drawMarker(t23, r16), this._earlyReturn) break;
      } else for (const i16 of e24.points) if (r16.tx = i16[0], r16.ty = i16[1], this.drawMarker(t23, r16), this._earlyReturn) break;
      this._placementPool.release(r16);
    }
  }
  drawMarker(t23, e24) {
    switch (t23.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t23, e24);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t23, e24);
    }
  }
  drawPictureMarker(t23, e24) {
    if (!t23) return;
    const r15 = this._resourceManager.getResource(t23.url), i16 = I2(t23.size, o4.CIMPictureMarker.size);
    if (null == r15 || i16 <= 0) return;
    const s16 = r15.width, o11 = r15.height;
    if (!s16 || !o11) return;
    const n25 = s16 / o11, a10 = I2(t23.scaleX, 1), l9 = at.createIdentity(), h12 = t23.anchorPoint;
    if (h12) {
      let e25 = h12.x, r16 = h12.y;
      "Absolute" !== t23.anchorPointUnits && (e25 *= i16 * n25 * a10, r16 *= i16), l9.translate(-e25, -r16);
    }
    let c4 = I2(t23.rotation);
    t23.rotateClockwise && (c4 = -c4), this._mapRotation && (c4 += this._mapRotation), c4 && l9.rotate(c4 * st);
    let m4 = I2(t23.offsetX), f5 = I2(t23.offsetY);
    if (m4 || f5) {
      if (this._mapRotation) {
        const t24 = st * this._mapRotation, e25 = Math.cos(t24), r16 = Math.sin(t24), i17 = m4 * r16 + f5 * e25;
        m4 = m4 * e25 - f5 * r16, f5 = i17;
      }
      l9.translate(m4, f5);
    }
    const u10 = this.geomUnitsPerPoint();
    1 !== u10 && l9.scale(u10, u10);
    const d = e24.getAngle();
    d && l9.rotate(d), l9.translate(e24.tx, e24.ty), this.push(l9, false), this.drawImage(t23, i16), this.pop();
  }
  drawVectorMarker(t23, e24) {
    if (!t23) return;
    const r15 = t23.markerGraphics;
    if (!r15) return;
    const i16 = I2(t23.size, o4.CIMVectorMarker.size), s16 = t23.frame, o11 = s16 ? s16.ymax - s16.ymin : 0, n25 = i16 && o11 ? i16 / o11 : 1, a10 = at.createIdentity();
    s16 && a10.translate(0.5 * -(s16.xmax + s16.xmin), 0.5 * -(s16.ymax + s16.ymin));
    const l9 = t23.anchorPoint;
    if (l9) {
      let e25 = l9.x, r16 = l9.y;
      "Absolute" !== t23.anchorPointUnits ? s16 && (e25 *= s16.xmax - s16.xmin, r16 *= s16.ymax - s16.ymin) : (e25 /= n25, r16 /= n25), a10.translate(-e25, -r16);
    }
    1 !== n25 && a10.scale(n25, n25);
    let h12 = I2(t23.rotation);
    t23.rotateClockwise && (h12 = -h12), this._mapRotation && (h12 += this._mapRotation), h12 && a10.rotate(h12 * st);
    let c4 = I2(t23.offsetX), m4 = I2(t23.offsetY);
    if (c4 || m4) {
      if (this._mapRotation) {
        const t24 = st * this._mapRotation, e25 = Math.cos(t24), r16 = Math.sin(t24), i17 = c4 * r16 + m4 * e25;
        c4 = c4 * e25 - m4 * r16, m4 = i17;
      }
      a10.translate(c4, m4);
    }
    const f5 = this.geomUnitsPerPoint();
    1 !== f5 && a10.scale(f5, f5);
    const u10 = e24.getAngle();
    u10 && a10.rotate(u10), a10.translate(e24.tx, e24.ty), this.push(a10, t23.scaleSymbolsProportionally);
    for (const d of r15) {
      d?.symbol && d.geometry || nt().error("Invalid marker graphic", d);
      let t24 = d.textString;
      if ("number" == typeof t24 && (t24 = t24.toString()), this.drawSymbol(d.symbol, d.geometry, t24), this._earlyReturn) break;
    }
    this.pop();
  }
  drawTextSymbol(t23, e24, r15) {
    if (!t23) return;
    if (!t3(e24)) return;
    if (I2(t23.height, o4.CIMTextSymbol.height) <= 0) return;
    const i16 = at.createIdentity();
    let s16 = I2(t23.angle);
    s16 = -s16, s16 && i16.rotate(s16 * st);
    const o11 = I2(t23.offsetX), n25 = I2(t23.offsetY);
    (o11 || n25) && i16.translate(o11, n25);
    const a10 = this.geomUnitsPerPoint();
    1 !== a10 && i16.scale(a10, a10), i16.translate(e24.x, e24.y), this.push(i16, false), this.drawText(t23, r15), this.pop();
  }
};
var ht = class extends lt {
  constructor(t23, e24) {
    super(t23, e24), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new t19(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return o(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t23) {
    if (t23 && !(this._clipCount > 0)) if (o3(t23)) this._processPath(t23.rings, 0);
    else if (e2(t23)) this._processPath(t23.paths, 0);
    else if (n3(t23)) {
      const e24 = gt(t23);
      e24 && this._processPath(e24.rings, 0);
    } else console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t23, e24, r15) {
    if (!t23 || this._clipCount > 0 || null == r15 || r15 <= 0) return;
    const i16 = Math.max(0.5 * this.transformSize(I2(r15, o4.CIMSolidStroke.width)), 0.5 * ot);
    if (o3(t23)) this._processPath(t23.rings, i16);
    else if (e2(t23)) this._processPath(t23.paths, i16);
    else if (n3(t23)) {
      const e25 = gt(t23);
      e25 && this._processPath(e25.rings, i16);
    } else console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t23, e24) {
    o3(e24) && t23.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t23.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t23.markerPlacement.type && t23.markerPlacement.clipAtBoundary) ? this._processPath(e24.rings, 0) : super.drawMarkerLayer(t23, e24);
  }
  drawHatchFill(t23, e24) {
    this.drawSolidFill(t23);
  }
  drawPictureFill(t23, e24) {
    this.drawSolidFill(t23);
  }
  drawGradientFill(t23, e24) {
    this.drawSolidFill(t23);
  }
  drawPictureStroke(t23, e24) {
    this.drawSolidStroke(t23, null, e24.width);
  }
  drawGradientStroke(t23, e24) {
    this.drawSolidStroke(t23, null, e24.width);
  }
  pushClipPath(t23) {
    this.drawSolidFill(t23), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t23, e24) {
    const { url: r15 } = t23, i16 = I2(t23.scaleX, 1);
    let s16 = i16 * e24, o11 = e24;
    const n25 = this._resourceManager.getResource(r15);
    if (null != n25) {
      const t24 = n25.height / n25.width;
      s16 = i16 * (e24 ? t24 > 1 ? e24 : e24 / t24 : n25.width), o11 = e24 ? t24 > 1 ? e24 * t24 : e24 : n25.height;
    }
    this._merge(this.transformPt([-s16 / 2, -o11 / 2]), 0), this._merge(this.transformPt([-s16 / 2, o11 / 2]), 0), this._merge(this.transformPt([s16 / 2, -o11 / 2]), 0), this._merge(this.transformPt([s16 / 2, o11 / 2]), 0);
  }
  drawText(t23, e24) {
    if (!e24 || 0 === e24.length) return;
    this._textRasterizer || (this._textRasterizer = new s13());
    const r15 = yt(t23);
    let [i16, s16] = this._textRasterizer.computeTextSize(e24, r15);
    i16 = e3(i16), s16 = e3(s16);
    const o11 = this.transformSize(1) * this.reverseTransformScalar(1);
    i16 *= o11, s16 *= o11;
    let a10 = 0;
    switch (t23.horizontalAlignment) {
      case "Left":
        a10 = i16 / 2;
        break;
      case "Right":
        a10 = -i16 / 2;
    }
    let l9 = 0;
    switch (t23.verticalAlignment) {
      case "Bottom":
        l9 = s16 / 2;
        break;
      case "Top":
        l9 = -s16 / 2;
        break;
      case "Baseline":
        l9 = s16 / 6;
    }
    this._merge(this.transformPt([-i16 / 2 + a10, -s16 / 2 + l9]), 0), this._merge(this.transformPt([-i16 / 2 + a10, s16 / 2 + l9]), 0), this._merge(this.transformPt([i16 / 2 + a10, -s16 / 2 + l9]), 0), this._merge(this.transformPt([i16 / 2 + a10, s16 / 2 + l9]), 0);
  }
  _processPath(t23, e24) {
    if (t23) for (const r15 of t23) {
      const t24 = r15 ? r15.length : 0;
      if (t24 > 1) {
        this._merge(this.transformPt(r15[0]), e24);
        for (let i16 = 1; i16 < t24; i16++) this._merge(this.transformPt(r15[i16]), e24);
      }
    }
  }
  _merge(t23, e24) {
    t23[0] - e24 < this._xmin && (this._xmin = t23[0] - e24), t23[0] + e24 > this._xmax && (this._xmax = t23[0] + e24), t23[1] - e24 < this._ymin && (this._ymin = t23[1] - e24), t23[1] + e24 > this._ymax && (this._ymax = t23[1] + e24);
  }
};
var ct = class extends lt {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null, this._svg = null, this._path = null, this._canvas = null;
  }
  destroy() {
    this._svg = n23(this._svg), this._path = null, this._canvas = null;
  }
  hitTest(t23, e24, r15, i16, s16, a10) {
    const l9 = a10 * u2(1);
    this.setTransform(), this.setGeomUnitsPerPoint(l9), this._searchPoint = [(t23[0] + t23[2]) / 2, (t23[1] + t23[3]) / 2], this._searchDistPoint = (t23[2] - t23[0]) / 2 / l9, this._textInfo = i16;
    const h12 = e24 && ("CIMPointSymbol" === e24.type && "Map" !== e24.angleAlignment || "CIMTextSymbol" === e24.type);
    if (this._mapRotation = h12 ? s16 : 0, !has("esri-mobile")) {
      const t24 = e3(tt * window.devicePixelRatio), r16 = e3(et);
      !(("CIMLineSymbol" === e24?.type || "CIMPolygonSymbol" === e24?.type) && e24.symbolLayers?.some(h3)) && "CIMMeshSymbol" !== e24?.type && (U(e24) ?? 0) < r16 && (this._searchDistPoint = t24);
    }
    return this._earlyReturn = false, this.drawSymbol(e24, r15), this._earlyReturn;
  }
  executeEffects(t23, e24) {
    return "CIMGeometricEffectDashes" === t23.at(-1)?.type && (t23 = t23.slice(0, -1)), super.executeEffects(t23, e24);
  }
  drawSolidFill(t23, e24, r15) {
    null != r15 ? this._hittestSvgPath(t23, r15, true) : this._hitTestFill(t23);
  }
  drawHatchFill(t23, e24) {
    this._hitTestFill(t23);
  }
  drawPictureFill(t23, e24) {
    this._hitTestFill(t23);
  }
  drawGradientFill(t23, e24) {
    this._hitTestFill(t23);
  }
  drawSolidStroke(t23, e24, r15, i16, s16, o11, n25) {
    null != n25 ? this._hittestSvgPath(t23, n25, false, r15) : this._hitTestStroke(t23, r15);
  }
  drawPictureStroke(t23, e24) {
    this._hitTestStroke(t23, e24.width);
  }
  drawGradientStroke(t23, e24) {
    this._hitTestStroke(t23, e24.width);
  }
  drawMarkerLayer(t23, e24) {
    t23.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t23.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t23.markerPlacement.type && t23.markerPlacement.clipAtBoundary) ? this._hitTestFill(e24) : super.drawMarkerLayer(t23, e24);
  }
  pushClipPath(t23) {
  }
  popClipPath() {
  }
  drawImage(t23, e24) {
    const { url: r15 } = t23, i16 = I2(t23.scaleX, 1), s16 = this._resourceManager.getResource(r15);
    if (null == s16 || 0 === s16.height || 0 === e24) return;
    const o11 = e24 * this.geomUnitsPerPoint(), n25 = o11 * i16 * (s16.width / s16.height), a10 = this.reverseTransformPt(this._searchPoint), l9 = this._searchDistPoint;
    Math.abs(a10[0]) < n25 / 2 + l9 && Math.abs(a10[1]) < o11 / 2 + l9 && (this._earlyReturn = true);
  }
  drawText(t23, e24) {
    const r15 = this._textInfo;
    if (!r15) return;
    const i16 = r15.get(t23);
    if (!i16) return;
    if (!i16.glyphMosaicItems.glyphs.length) return;
    const s16 = s15(I2(t23.height, o4.CIMTextSymbol.height)), { lineGapType: o11, lineGap: n25 } = t23, a10 = o11 ? _t(o11, I2(n25), s16) : 0, l9 = "CIMBackgroundCallout" === t23.callout?.type, h12 = A2(i16.glyphMosaicItems, { scale: s16 / q2, angle: 0, xOffset: 0, yOffset: 0, horizontalAlignment: t23.horizontalAlignment, verticalAlignment: t23.verticalAlignment, maxLineWidth: a9(t23.lineWidth), lineHeight: l2 * Math.max(0.25, Math.min(a10 || 1, 4)), decoration: t23.font.decoration || "none", useCIMAngleBehavior: true, hasBackground: l9 }), c4 = this.reverseTransformPt(this._searchPoint), m4 = c4[0], f5 = c4[1];
    for (const u10 of h12.glyphs) if (m4 > u10.xTopLeft && m4 < u10.xBottomRight && f5 > -u10.yBottomRight && f5 < -u10.yTopLeft) {
      this._earlyReturn = true;
      break;
    }
  }
  _hitTestFill(t23) {
    let e24 = null;
    if (n3(t23)) {
      const r16 = t23;
      e24 = [[[r16.xmin, r16.ymin], [r16.xmin, r16.ymax], [r16.xmax, r16.ymax], [r16.xmax, r16.ymin], [r16.xmin, r16.ymin]]];
    } else if (o3(t23)) e24 = t23.rings;
    else {
      if (!e2(t23)) return;
      e24 = t23.paths;
    }
    const r15 = this.reverseTransformPt(this._searchPoint);
    if (ut(r15, e24) && (this._earlyReturn = true), !this._earlyReturn) {
      dt(r15, e24, this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = true);
    }
  }
  _getSvgPath() {
    return null != this._svg && null != this._path || (this._svg ??= e23(), this._path ??= t20("path"), this._svg.appendChild(this._path)), this._path;
  }
  _getCanvasContext(t23, e24) {
    return this._canvas ??= document.createElement("canvas"), this._canvas.width = t23, this._canvas.height = e24, this._canvas.getContext("2d", { willReadFrequently: true });
  }
  _hittestSvgPath(t23, e24, r15, i16 = 0) {
    const s16 = this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint(), o11 = this.reverseTransformPt(this._searchPoint), n25 = u();
    f2(n25, t23);
    const a10 = { x: n25[0], y: n25[1], width: n25[2] - n25[0], height: n25[3] - n25[1] }, h12 = this._getSvgPath();
    h12.setAttribute("d", e24);
    const c4 = h12.getBBox();
    let m4 = Math.max(c4.width / a10.width, c4.height / a10.height), f5 = 1;
    const u10 = 2 * s16 * m4;
    u10 < 1 && (f5 = 2 / u10, m4 *= f5, c4.x *= f5, c4.y *= f5, c4.width *= f5, c4.height *= f5);
    const d = 1 + i16 * m4 / 2, p6 = this._getCanvasContext(c4.width + 2 * d, c4.height + 2 * d);
    p6.setTransform(f5, 0, 0, f5, -c4.x + d, -c4.y + d);
    const _5 = new Path2D(e24);
    r15 ? p6.fill(_5) : (p6.lineWidth = i16 * (m4 / f5), p6.stroke(_5));
    const y5 = (a10.width * m4 - c4.width) / 2, P3 = (a10.height * m4 - c4.height) / 2, S3 = Math.floor((o11[0] - a10.x - s16) * m4 - y5 + d), w4 = Math.floor((a10.height - (o11[1] - a10.y) - s16) * m4 + P3 + d), x4 = Math.ceil(2 * s16 * m4), M3 = Math.ceil(2 * s16 * m4), b3 = p6.getImageData(S3, w4, x4, M3).data;
    for (let l9 = 3; l9 < b3.length; l9 += 4) if (b3[l9] > 127.5) return void (this._earlyReturn = true);
  }
  _hitTestStroke(t23, e24) {
    let r15 = null;
    if (n3(t23)) {
      const e25 = t23;
      r15 = [[[e25.xmin, e25.ymin], [e25.xmin, e25.ymax], [e25.xmax, e25.ymax], [e25.xmax, e25.ymin], [e25.xmin, e25.ymin]]];
    } else if (o3(t23)) r15 = t23.rings;
    else {
      if (!e2(t23)) return;
      r15 = t23.paths;
    }
    dt(this.reverseTransformPt(this._searchPoint), r15, I2(e24, o4.CIMSolidStroke.width) * this.geomUnitsPerPoint() / 2 + this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = true);
  }
};
var mt = class extends lt {
  constructor(t23, e24, r15, i16) {
    super(e24, r15), this._applyAdditionalRenderProps = i16, this._colorSubstitutionHelper = new t16(), this._ctx = t23;
  }
  drawSolidFill(t23, e24) {
    if (!t23) return;
    if (o3(t23)) this._buildPath(t23.rings, true);
    else if (e2(t23)) this._buildPath(t23.paths, true);
    else if (n3(t23)) this._buildPath(gt(t23).rings, true);
    else {
      if (!i(t23)) return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const r15 = this._ctx;
    r15.fillStyle = "string" == typeof e24 ? e24 : "rgba(" + Math.round(e24[0]) + "," + Math.round(e24[1]) + "," + Math.round(e24[2]) + "," + (e24[3] ?? 255) / 255 + ")", r15.fill("evenodd");
  }
  drawSolidStroke(t23, e24, r15, i16, s16, o11) {
    if (!t23 || !e24 || 0 === r15) return;
    if (o3(t23)) this._buildPath(t23.rings, true);
    else if (e2(t23)) this._buildPath(t23.paths, false);
    else {
      if (!n3(t23)) return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(gt(t23).rings, true);
    }
    const n25 = this._ctx;
    n25.strokeStyle = "string" == typeof e24 ? e24 : "rgba(" + Math.round(e24[0]) + "," + Math.round(e24[1]) + "," + Math.round(e24[2]) + "," + (e24[3] ?? 255) / 255 + ")", n25.lineWidth = Math.max(this.transformSize(r15), ot), this._setCapStyle(i16), this._setJoinStyle(s16), n25.miterLimit = o11, n25.stroke();
  }
  pushClipPath(t23) {
    if (this._ctx.save(), o3(t23)) this._buildPath(t23.rings, true);
    else if (e2(t23)) this._buildPath(t23.paths, true);
    else {
      if (!n3(t23)) return;
      this._buildPath(gt(t23).rings, true);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t23, e24) {
    const { colorSubstitutions: r15, url: i16, tintColor: s16 } = t23, o11 = I2(t23.scaleX, 1), n25 = this._resourceManager.getResource(i16);
    if (null == n25) return;
    let a10 = e24 * (n25.width / n25.height), l9 = e24;
    e24 || (a10 = n25.width, l9 = n25.height);
    const h12 = G(i16) || "src" in n25 && G(n25.src);
    let c4 = "getFrame" in n25 ? t17(n25) : n25;
    r15 && (c4 = this._colorSubstitutionHelper.applyColorSubstitution(c4, r15)), this._applyAdditionalRenderProps && !h12 && s16 && (c4 = this._colorSubstitutionHelper.tintImageData(c4, s16));
    const m4 = this.transformPt([0, 0]), [f5, u10] = this.getTransformAngle(), d = this.transformSize(1), p6 = this._ctx;
    p6.save(), p6.setTransform({ m11: o11 * d * f5, m12: o11 * d * u10, m21: -d * u10, m22: d * f5, m41: m4[0], m42: m4[1] }), p6.drawImage(c4, -a10 / 2, -l9 / 2, a10, l9), p6.restore();
  }
  drawText(t23, e24) {
    if (!e24 || 0 === e24.length) return;
    this._textRasterizer || (this._textRasterizer = new s13());
    const r15 = yt(t23, this.transformSize(e3(1))), i16 = this._textRasterizer.rasterizeText(e24, r15);
    if (!i16) return;
    const { size: s16, anchorX: o11, anchorY: a10, canvas: l9 } = i16, h12 = s16[0] * (o11 + 0.5), c4 = s16[1] * (a10 - 0.5), m4 = this._ctx, f5 = this.transformPt([0, 0]), [u10, d] = this.getTransformAngle(), p6 = 1;
    m4.save(), m4.setTransform({ m11: p6 * u10, m12: p6 * d, m21: -p6 * d, m22: p6 * u10, m41: f5[0] - p6 * h12, m42: f5[1] + p6 * c4 }), m4.drawImage(l9, 0, 0), m4.restore();
  }
  drawPictureFill(t23, e24) {
    if (!t23) return;
    let { colorSubstitutions: r15, height: i16, offsetX: s16, offsetY: o11, rotation: n25, scaleX: a10, tintColor: l9, url: h12 } = e24;
    const c4 = this._resourceManager.getResource(h12);
    if (null == c4) return;
    if (o3(t23)) this._buildPath(t23.rings, true);
    else if (e2(t23)) this._buildPath(t23.paths, true);
    else if (n3(t23)) this._buildPath(gt(t23).rings, true);
    else {
      if (!i(t23)) return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const m4 = this._ctx, f5 = G(h12) || "src" in c4 && G(c4.src);
    let u10, d = "getFrame" in c4 ? t17(c4) : c4;
    if (r15 && (d = this._colorSubstitutionHelper.applyColorSubstitution(d, r15)), this._applyAdditionalRenderProps) {
      f5 || l9 && (d = this._colorSubstitutionHelper.tintImageData(d, l9)), u10 = m4.createPattern(d, "repeat");
      const t24 = this.transformSize(1);
      n25 || (n25 = 0), s16 ? s16 *= t24 : s16 = 0, o11 ? o11 *= t24 : o11 = 0, i16 && (i16 *= t24);
      const e25 = i16 ? i16 / c4.height : 1, r16 = a10 && i16 ? a10 * i16 / c4.width : 1;
      if (0 !== n25 || 1 !== e25 || 1 !== r16 || 0 !== s16 || 0 !== o11) {
        const t25 = new DOMMatrix();
        t25.rotateSelf(0, 0, -n25).translateSelf(s16, o11).scaleSelf(r16, e25, 1), u10.setTransform(t25);
      }
    } else u10 = m4.createPattern(d, "repeat");
    m4.save(), m4.fillStyle = u10, m4.fill("evenodd"), m4.restore();
  }
  drawPictureStroke(t23, r15) {
    if (!t23) return;
    let { colorSubstitutions: i16, capStyle: s16, joinStyle: n25, miterLimit: a10, tintColor: l9, url: h12, width: c4 } = r15;
    const m4 = this._resourceManager.getResource(h12);
    if (null == m4) return;
    let f5;
    if (o3(t23)) f5 = t23.rings;
    else if (e2(t23)) f5 = t23.paths;
    else {
      if (!n3(t23)) return i(t23) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      f5 = gt(t23).rings;
    }
    c4 || (c4 = m4.width);
    const u10 = G(h12) || "src" in m4 && G(m4.src);
    let d = "getFrame" in m4 ? t17(m4) : m4;
    i16 && (d = this._colorSubstitutionHelper.applyColorSubstitution(d, i16)), this._applyAdditionalRenderProps && (u10 || l9 && (d = this._colorSubstitutionHelper.tintImageData(d, l9)));
    const p6 = Math.max(this.transformSize(u2(c4)), 0.5), g4 = p6 / d.width, _5 = this._ctx, w4 = _5.createPattern(d, "repeat-y");
    let M3, b3;
    _5.save(), this._setCapStyle(s16), this._setJoinStyle(n25), void 0 !== a10 && (_5.miterLimit = a10), _5.lineWidth = p6;
    for (let o11 of f5) if (o11 = a(o11), St(o11), o11 && !(o11.length <= 1)) {
      M3 = this.transformPt(o11[0]);
      for (let t24 = 1; t24 < o11.length; t24++) {
        b3 = this.transformPt(o11[t24]);
        const e24 = pt(M3, b3), r16 = new DOMMatrix();
        r16.translateSelf(0, M3[1] - p6 / 2).scaleSelf(g4, g4, 1).rotateSelf(0, 0, 90 - e24), w4.setTransform(r16), _5.strokeStyle = w4, _5.beginPath(), _5.moveTo(M3[0], M3[1]), _5.lineTo(b3[0], b3[1]), _5.stroke(), M3 = b3;
      }
    }
    _5.restore();
  }
  drawGradientFill(t23, e24) {
    if (!t23) return;
    let r15;
    if (o3(t23)) r15 = t23.rings;
    else if (e2(t23)) r15 = t23.paths;
    else {
      if (!n3(t23)) return void nt().error("Unable to draw gradient fill");
      r15 = gt(t23).rings;
    }
    this._buildPath(r15, true);
    const { angle: s16, gradientMethod: n25, gradientSize: a10, gradientSizeUnits: l9 } = e24, h12 = o4.CIMGradientFill, g4 = e24.gradientType ?? h12.gradientType, _5 = -s(s16 ?? 0), w4 = N();
    for (const i16 of r15) {
      const t24 = i16 ? i16.length : 0;
      if (t24 > 1) for (let e25 = 0; e25 < t24; e25++) {
        let t25 = this.transformPt(i16[e25]);
        "Linear" !== n25 && "Rectangular" !== n25 || (t25 = t18(t25, -_5)), f(w4, t25);
      }
    }
    const [x4, M3, b3, k] = w4, C2 = this._ctx;
    switch (C2.save(), n25) {
      case "Buffered":
        nt().error(`Gradient method "${n25}" currently unsupported.`);
        break;
      case "Linear": {
        const t24 = (M3 + k) / 2, r16 = "Absolute" === l9 ? this.transformSize(u2(a10)) : ee(a10, h12.gradientSize) * (b3 - x4), [i16, s17] = "Discrete" === g4 ? [b3, b3 - r16] : [x4 + r16, x4], n26 = t18([i16, t24], _5), c4 = t18([s17, t24], _5), m4 = C2.createLinearGradient(n26[0], n26[1], c4[0], c4[1]);
        p2(m4, e24), C2.fillStyle = m4, C2.fill("evenodd");
        break;
      }
      case "Circular": {
        const t24 = j(w4), r16 = q(w4) / 2, i16 = "Absolute" === l9 ? this.transformSize(u2(a10)) : ee(a10, h12.gradientSize) * r16, [s17, n26] = "Discrete" === g4 ? [r16, r16 - i16] : [i16, 0], c4 = C2.createRadialGradient(t24[0], t24[1], s17, t24[0], t24[1], n26);
        p2(c4, e24), C2.fillStyle = c4, C2.fill("evenodd");
        break;
      }
      case "Rectangular": {
        const r16 = j(w4), i16 = r16[0], s17 = r16[1], n26 = t18(r16, _5), c4 = (r17, i17, s18, o11, a11, l10, h13, c5) => {
          C2.save(), this.pushClipPath(t23);
          const m5 = t18([a11, l10], _5), f5 = t18([h13, c5], _5);
          C2.beginPath(), C2.moveTo(n26[0], n26[1]), C2.lineTo(m5[0], m5[1]), C2.lineTo(f5[0], f5[1]), C2.lineTo(n26[0], n26[1]), C2.clip();
          const u10 = t18([r17, i17], _5), d = t18([s18, o11], _5), p7 = C2.createLinearGradient(u10[0], u10[1], d[0], d[1]);
          p2(p7, e24), C2.fillStyle = p7, C2.fill("evenodd"), C2.restore();
        };
        let m4 = "Absolute" === l9 ? this.transformSize(u2(a10)) : ee(a10, h12.gradientSize) * (p(w4) / 2), [p6, y5] = "Discrete" === g4 ? [b3, b3 - m4] : [i16 + m4, i16];
        c4(p6, s17, y5, s17, b3, M3, b3, k), [p6, y5] = "Discrete" === g4 ? [x4, x4 + m4] : [i16 - m4, i16], c4(p6, s17, y5, s17, x4, k, x4, M3), m4 = "Absolute" === l9 ? this.transformSize(u2(a10)) : ee(a10, h12.gradientSize) * (b(w4) / 2);
        let [P3, S3] = "Discrete" === g4 ? [k, k - m4] : [s17 + m4, s17];
        c4(i16, P3, i16, S3, b3, k, x4, k), [P3, S3] = "Discrete" === g4 ? [M3, M3 + m4] : [s17 - m4, s17], c4(i16, P3, i16, S3, x4, M3, b3, M3);
        break;
      }
    }
    C2.restore();
  }
  drawGradientStroke(t23, r15) {
    const { capStyle: i16, gradientMethod: s16, gradientSize: n25, gradientSizeUnits: a10, joinStyle: l9, miterLimit: h12, width: c4 } = r15;
    if (!t23 || 0 === c4) return;
    let m4;
    if (o3(t23)) m4 = t23.rings;
    else if (e2(t23)) m4 = t23.paths;
    else {
      if (!n3(t23)) return void nt().error("Unable to draw gradient stroke");
      m4 = gt(t23).rings;
    }
    const f5 = r15.gradientType ?? o4.CIMGradientStroke.gradientType, u10 = Math.max(this.transformSize(u2(c4)), 0.5), d = this._ctx;
    let p6, g4;
    d.save(), this._setCapStyle(i16), this._setJoinStyle(l9), void 0 !== h12 && (d.miterLimit = h12), d.lineWidth = u10;
    for (let _5 of m4) {
      if (_5 = a(_5), St(_5), !_5 || _5.length <= 1) continue;
      let t24 = 0;
      p6 = this.transformPt(_5[0]);
      for (let e24 = 1; e24 < _5.length; e24++) {
        g4 = this.transformPt(_5[e24]);
        const r16 = g4[0] - p6[0], i18 = g4[1] - p6[1];
        t24 += Math.sqrt(r16 * r16 + i18 * i18), p6 = g4;
      }
      const i17 = "Absolute" === a10 ? this.transformSize(u2(n25)) : ee(n25, o4.CIMGradientStroke.gradientSize) * ("AcrossLine" === s16 ? u10 : t24);
      let l10 = 0;
      p6 = this.transformPt(_5[0]);
      for (let e24 = 1; e24 < _5.length; e24++) {
        g4 = this.transformPt(_5[e24]);
        const o11 = g4[0] - p6[0], n26 = g4[1] - p6[1], a11 = Math.sqrt(o11 * o11 + n26 * n26);
        let h13, c5, m5, y5;
        switch (s16) {
          case "AcrossLine": {
            const [t25, e25] = t18([o11 / a11, n26 / a11], -Math.PI / 2), r16 = u10 / 2, s17 = "Discrete" === f5 ? r16 : i17 - r16;
            h13 = (p6[0] + g4[0]) / 2 + t25 * s17, c5 = (p6[1] + g4[1]) / 2 + e25 * s17, m5 = h13 - t25 * i17, y5 = c5 - e25 * i17;
            break;
          }
          case "AlongLine": {
            const e25 = o11 / a11, r16 = n26 / a11;
            "Discrete" === f5 ? (h13 = p6[0] - e25 * l10, c5 = p6[1] - r16 * l10, m5 = h13 + e25 * i17, y5 = c5 + r16 * i17) : (m5 = p6[0] + e25 * (t24 - l10), y5 = p6[1] + r16 * (t24 - l10), h13 = m5 - e25 * i17, c5 = y5 - r16 * i17);
            break;
          }
          default:
            return nt().error("Unrecognized gradient method:", s16), void d.restore();
        }
        const P3 = d.createLinearGradient(h13, c5, m5, y5);
        p2(P3, r15), d.strokeStyle = P3, d.beginPath(), d.moveTo(p6[0], p6[1]), d.lineTo(g4[0], g4[1]), d.stroke(), l10 += a11, p6 = g4;
      }
    }
    d.restore();
  }
  _buildPath(t23, e24) {
    const r15 = this._ctx;
    if (r15.beginPath(), t23) for (const i16 of t23) {
      const t24 = i16 ? i16.length : 0;
      if (t24 > 1) {
        let s16 = this.transformPt(i16[0]);
        r15.moveTo(s16[0], s16[1]);
        for (let e25 = 1; e25 < t24; e25++) s16 = this.transformPt(i16[e25]), r15.lineTo(s16[0], s16[1]);
        e24 && r15.closePath();
      }
    }
  }
  _setCapStyle(t23) {
    switch (t23) {
      case "Butt":
        this._ctx.lineCap = "butt";
        break;
      case "Round":
        this._ctx.lineCap = "round";
        break;
      case "Square":
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t23) {
    switch (t23) {
      case "Bevel":
        this._ctx.lineJoin = "bevel";
        break;
      case "Round":
        this._ctx.lineJoin = "round";
        break;
      case "Miter":
        this._ctx.lineJoin = "miter";
    }
  }
};
function ft(t23, e24, r15) {
  let i16 = I2(t23.separation, o4.CIMHatchFill.separation) * r15, s16 = I2(t23.rotation);
  if (0 === i16) return null;
  i16 < 0 && (i16 = -i16);
  let o11 = 0;
  const n25 = 0.5 * i16;
  for (; o11 > n25; ) o11 -= i16;
  for (; o11 < -n25; ) o11 += i16;
  const a10 = u();
  f2(a10, e24), a10[0] -= n25, a10[1] -= n25, a10[2] += n25, a10[3] += n25;
  const h12 = [[a10[0], a10[1]], [a10[0], a10[3]], [a10[2], a10[3]], [a10[2], a10[1]]];
  for (; s16 > 180; ) s16 -= 180;
  for (; s16 < 0; ) s16 += 180;
  const c4 = Math.cos(s16 * st), m4 = Math.sin(s16 * st), f5 = -i16 * m4, u10 = i16 * c4;
  let d, p6, _5, y5;
  o11 = I2(t23.offsetX) * r15 * m4 - I2(t23.offsetY) * r15 * c4, d = _5 = Number.MAX_VALUE, p6 = y5 = -Number.MAX_VALUE;
  for (const l9 of h12) {
    const t24 = l9[0], e25 = l9[1], r16 = c4 * t24 + m4 * e25, i17 = -m4 * t24 + c4 * e25;
    d = Math.min(d, r16), _5 = Math.min(_5, i17), p6 = Math.max(p6, r16), y5 = Math.max(y5, i17);
  }
  _5 = Math.floor(_5 / i16) * i16;
  let P3 = c4 * d - m4 * _5 - f5 * o11 / i16, S3 = m4 * d + c4 * _5 - u10 * o11 / i16, w4 = c4 * p6 - m4 * _5 - f5 * o11 / i16, x4 = m4 * p6 + c4 * _5 - u10 * o11 / i16;
  const M3 = 1 + Math.round((y5 - _5) / i16), b3 = [];
  for (let l9 = 0; l9 < M3; l9++) P3 += f5, S3 += u10, w4 += f5, x4 += u10, b3.push([[P3, S3], [w4, x4]]);
  return { paths: b3 };
}
function ut(t23, e24) {
  let r15 = 0;
  for (const i16 of e24) {
    const e25 = i16.length;
    for (let s16 = 1; s16 < e25; s16++) {
      const e26 = i16[s16 - 1], o11 = i16[s16];
      if (e26[1] > t23[1] == o11[1] > t23[1]) continue;
      (o11[0] - e26[0]) * (t23[1] - e26[1]) - (o11[1] - e26[1]) * (t23[0] - e26[0]) > 0 ? r15++ : r15--;
    }
  }
  return 0 !== r15;
}
function dt(t23, e24, r15) {
  for (const i16 of e24) {
    const e25 = i16.length;
    for (let s16 = 1; s16 < e25; s16++) {
      const e26 = i16[s16 - 1], o11 = i16[s16];
      let n25 = (o11[0] - e26[0]) * (o11[0] - e26[0]) + (o11[1] - e26[1]) * (o11[1] - e26[1]);
      if (0 === n25) continue;
      n25 = Math.sqrt(n25);
      const a10 = ((o11[0] - e26[0]) * (t23[1] - e26[1]) - (o11[1] - e26[1]) * (t23[0] - e26[0])) / n25;
      if (Math.abs(a10) < r15) {
        const i17 = ((o11[0] - e26[0]) * (t23[0] - e26[0]) + (o11[1] - e26[1]) * (t23[1] - e26[1])) / n25;
        if (i17 > -r15 && i17 < n25 + r15) return true;
      }
    }
  }
  return false;
}
function pt(t23, e24) {
  const r15 = e24[0] - t23[0], i16 = e24[1] - t23[1];
  return 180 / Math.PI * Math.atan2(i16, r15);
}
var gt = (t23) => t23 ? { spatialReference: t23.spatialReference, rings: [[[t23.xmin, t23.ymin], [t23.xmin, t23.ymax], [t23.xmax, t23.ymax], [t23.xmax, t23.ymin], [t23.xmin, t23.ymin]]] } : null;
var _t = (t23, e24, r15) => {
  switch (t23) {
    case "ExtraLeading":
      return 1 + e24 / r15;
    case "Multiple":
      return e24;
    case "Exact":
      return e24 / r15;
  }
};
function yt(e24, r15 = 1) {
  const i16 = T(e24), s16 = L(e24.fontStyleName), o11 = e24.fontFamilyName ?? t4, { weight: n25, style: a10 } = s16, l9 = r15 * (e24.height || 5), h12 = F(e24.horizontalAlignment), c4 = z(e24.verticalAlignment), m4 = x2(e24), f5 = x2(e24.haloSymbol), u10 = null != f5 ? r15 * (e24.haloSize ?? 0) : 0, d = A(e24.symbol), p6 = r15 * (v(e24.symbol) || 0), g4 = "CIMBackgroundCallout" === e24.callout?.type ? e24.callout.backgroundSymbol : null, _5 = x2(g4), y5 = v(g4), P3 = A(g4);
  return { color: m4, size: l9, horizontalAlignment: h12, verticalAlignment: c4, font: { family: o11, style: g(a10), weight: w(n25), decoration: i16 }, outline: { size: p6 || 0, color: d }, halo: { size: u10 || 0, color: f5, style: a10 }, backgroundColor: _5, borderLine: null != y5 && null != P3 ? { size: y5, color: P3 } : null, pixelRatio: 1, premultiplyColors: true };
}
var Pt2 = 1e-4;
function St(t23) {
  let e24, r15, i16, s16, o11, n25 = t23[0], a10 = 1;
  for (; a10 < t23.length; ) e24 = t23[a10][0] - n25[0], r15 = t23[a10][1] - n25[1], s16 = 0 !== e24 ? r15 / e24 : Math.PI / 2, void 0 !== i16 && Math.abs(s16 - i16) <= Pt2 ? (t23.splice(a10 - 1, 1), n25 = o11) : (o11 = n25, n25 = t23[a10], a10++), i16 = s16;
}

// node_modules/@arcgis/core/core/BidiText.js
var r14 = new C();
function t22(n25, t23 = true) {
  if (!r14.hasBidiChar(n25)) return [n25, false, __spreadValues({}, r14)];
  let i16;
  i16 = "rtl" === r14.checkContextual(n25) ? "IDNNN" : "ICNNN";
  const N4 = t23 ? "VLYSN" : "VLYNN";
  return [r14.bidiTransform(n25, i16, N4), true, __spreadValues({}, r14)];
}

// node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js
var z2 = Math.PI;
var D = z2 / 2;
var G2 = Math.PI / 180;
var T3 = 96 / 72;
var E = 1.4142135623730951;
var v3 = 2;
var A3 = 4;
var R2 = () => n.getLogger("esri.symbols.cim.CIMSymbolHelper");
function j5(e24) {
  let t23;
  switch (e24.type) {
    case "cim":
      return e24.data;
    case "web-style":
      return e24;
    case "simple-marker": {
      const r15 = _4.fromSimpleMarker(e24);
      if (!r15) throw new Error("InternalError: Cannot convert symbol to CIM");
      t23 = r15;
      break;
    }
    case "picture-marker":
      t23 = _4.fromPictureMarker(e24);
      break;
    case "simple-line":
      t23 = _4.fromSimpleLineSymbol(e24);
      break;
    case "simple-fill":
      t23 = _4.fromSimpleFillSymbol(e24);
      break;
    case "picture-fill":
      t23 = _4.fromPictureFillSymbol(e24);
      break;
    case "text":
      t23 = _4.fromTextSymbol(e24);
  }
  return { type: "CIMSymbolReference", symbol: t23 };
}
function B2(e24, t23, r15) {
  switch (t23.type) {
    case "CIMSymbolReference":
      return B2(e24, t23.symbol, r15);
    case "CIMPointSymbol":
      null == r15 && (r15 = { x: 0, y: 0 }), e24.drawSymbol(t23, r15);
      break;
    case "CIMLineSymbol":
      null == r15 && (r15 = { paths: [[[0, 0], [10, 0]]] }), e24.drawSymbol(t23, r15);
      break;
    case "CIMPolygonSymbol":
      null == r15 && (r15 = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), e24.drawSymbol(t23, r15);
      break;
    case "CIMTextSymbol": {
      const r16 = { x: 0, y: 0 };
      e24.drawSymbol(t23, r16);
      break;
    }
    case "CIMVectorMarker": {
      const r16 = new t7();
      e24.drawMarker(t23, r16);
      break;
    }
  }
  return e24.envelope();
}
function X(e24) {
  if (!e24) return 0;
  switch (e24.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(e24.offset ?? 0);
    default:
      return 0;
  }
}
function V(e24) {
  if (!e24) return 0;
  let t23 = 0;
  for (const r15 of e24) t23 += Y(r15);
  return t23;
}
function Y(e24) {
  if (!e24) return 0;
  if (le(e24)) return e24.inflateSize ?? 256;
  switch (e24.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * e24.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(e24.size);
    case "CIMGeometricEffectControlMeasureLine":
      return 500;
    case "CIMGeometricEffectExtension":
      return Math.abs(e24.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * e24.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(I2(e24.offsetX)), Math.abs(I2(e24.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(e24.offset);
    case "CIMGeometricEffectRadial":
      return Math.abs(e24.length ?? 5);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(e24.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(e24.fromWidth), Math.abs(e24.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(e24.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(e24.width);
  }
}
var N3 = class {
  static getSymbolInflateSize(e24, t23, r15, o11, a10) {
    return e24 || (e24 = [0, 0, 0, 0]), t23 ? this._getInflateSize(e24, t23, r15, o11, a10) : e24;
  }
  static safeSize(e24) {
    const t23 = Math.max(Math.abs(e24[0]), Math.abs(e24[2])), r15 = Math.max(Math.abs(e24[1]), Math.abs(e24[3]));
    return Math.sqrt(t23 * t23 + r15 * r15);
  }
  static _vectorMarkerBounds(e24, t23, r15, o11) {
    let a10 = true;
    const i16 = u();
    if (t23?.markerGraphics) for (const s16 of t23.markerGraphics) {
      const t24 = [0, 0, 0, 0];
      s16.geometry && (f2(i16, s16.geometry), t24[0] = 0, t24[1] = 0, t24[2] = 0, t24[3] = 0, this.getSymbolInflateSize(t24, s16.symbol, r15, 0, o11), i16[0] += t24[0], i16[1] += t24[1], i16[2] += t24[2], i16[3] += t24[3], a10 ? (e24[0] = i16[0], e24[1] = i16[1], e24[2] = i16[2], e24[3] = i16[3], a10 = false) : (e24[0] = Math.min(e24[0], i16[0]), e24[1] = Math.min(e24[1], i16[1]), e24[2] = Math.max(e24[2], i16[2]), e24[3] = Math.max(e24[3], i16[3])));
    }
    return e24;
  }
  static _getInflateSize(e24, t23, r15, o11, a10) {
    if (ee2(t23)) {
      const s16 = this._getLayersInflateSize(e24, t23.symbolLayers, r15, o11, a10), i16 = V(t23.effects);
      return i16 > 0 && (s16[0] -= i16, s16[1] -= i16, s16[2] += i16, s16[3] += i16), s16;
    }
    return this._getTextInflatedSize(e24, t23, a10);
  }
  static _getLayersInflateSize(e24, t23, r15, o11, a10) {
    let n25 = true;
    if (!t23) return e24;
    for (const l9 of t23) {
      if (!l9) continue;
      let t24 = [0, 0, 0, 0];
      switch (l9.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const e25 = l9;
          let r16 = e25.width;
          null != r16 && ("Square" === e25.capStyle || "Miter" === e25.joinStyle ? r16 /= E : r16 /= 2, t24[0] = -r16, t24[1] = -r16, t24[2] = r16, t24[3] = r16);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const e25 = l9;
          if ("CIMVectorMarker" === l9.type) {
            const e26 = l9;
            if (t24 = this._vectorMarkerBounds(t24, e26, r15, a10), e26.frame) {
              const r16 = (e26.frame.xmin + e26.frame.xmax) / 2, o12 = (e26.frame.ymin + e26.frame.ymax) / 2;
              if (t24[0] -= r16, t24[1] -= o12, t24[2] -= r16, t24[3] -= o12, null != e26.size) {
                const r17 = e26.size / (e26.frame.ymax - e26.frame.ymin);
                t24[0] *= r17, t24[1] *= r17, t24[2] *= r17, t24[3] *= r17;
              }
            }
          } else if ("CIMPictureMarker" === l9.type) {
            const o12 = l9, a11 = r15.getResource(o12.url);
            let s16 = 1;
            if (null != a11 && a11.height && (s16 = a11.width / a11.height), null != e25.size) {
              const r16 = e25.size / 2, a12 = e25.size * s16 * (o12.scaleX ?? 1) / 2;
              t24 = [-a12, -r16, a12, r16];
            }
          } else if (null != e25.size) {
            const r16 = e25.size / 2;
            t24 = [-r16, -r16, r16, r16];
          }
          if (e25.anchorPoint) {
            let r16, o12;
            "Absolute" === e25.anchorPointUnits ? (r16 = e25.anchorPoint.x, o12 = e25.anchorPoint.y) : (r16 = e25.anchorPoint.x * (t24[2] - t24[0]), o12 = e25.anchorPoint.y * (t24[3] - t24[1]));
            const a11 = 1.25 * Math.sqrt(r16 * r16 + o12 * o12);
            t24[0] -= a11, t24[1] -= a11, t24[2] += a11, t24[3] += a11;
          }
          let n26 = I2(e25.rotation);
          if (e25.rotateClockwise && (n26 = -n26), o11 && (n26 -= o11), n26) {
            const e26 = G2 * n26, r16 = Math.cos(e26), o12 = Math.sin(e26), a11 = u([r2, r2, -r2, -r2]);
            f(a11, [t24[0] * r16 - t24[1] * o12, t24[0] * o12 + t24[1] * r16]), f(a11, [t24[0] * r16 - t24[3] * o12, t24[0] * o12 + t24[3] * r16]), f(a11, [t24[2] * r16 - t24[1] * o12, t24[2] * o12 + t24[1] * r16]), f(a11, [t24[2] * r16 - t24[3] * o12, t24[2] * o12 + t24[3] * r16]), t24 = a11;
          }
          let c5 = I2(e25.offsetX), m4 = I2(e25.offsetY);
          if (o11) {
            const e26 = G2 * o11, t25 = Math.cos(e26), r16 = Math.sin(e26), a11 = c5 * r16 + m4 * t25;
            c5 = c5 * t25 - m4 * r16, m4 = a11;
          }
          t24[0] += c5, t24[1] += m4, t24[2] += c5, t24[3] += m4;
          const f5 = X(e25.markerPlacement);
          f5 > 0 && (t24[0] -= f5, t24[1] -= f5, t24[2] += f5, t24[3] += f5);
          break;
        }
      }
      const c4 = V(l9.effects);
      c4 > 0 && (t24[0] -= c4, t24[1] -= c4, t24[2] += c4, t24[3] += c4), n25 ? (e24[0] = t24[0], e24[1] = t24[1], e24[2] = t24[2], e24[3] = t24[3], n25 = false) : (e24[0] = Math.min(e24[0], t24[0]), e24[1] = Math.min(e24[1], t24[1]), e24[2] = Math.max(e24[2], t24[2]), e24[3] = Math.max(e24[3], t24[3]));
    }
    return e24;
  }
  static _getTextInflatedSize(e24, t23, r15) {
    const o11 = s15(t23.height ?? o4.CIMTextSymbol.height);
    if (e24[0] = -o11 / 2, e24[1] = -o11 / 2, e24[2] = o11 / 2, e24[3] = o11 / 2, !r15) return e24;
    const a10 = r15.get(t23);
    if (!a10) return e24;
    if (!a10.glyphMosaicItems.glyphs.length) return e24;
    const { lineGapType: s16, lineGap: i16 } = t23, n25 = s16 ? _t(s16, i16 ?? 0, o11) : 0, l9 = "CIMBackgroundCallout" === t23.callout?.type, c4 = A2(a10.glyphMosaicItems, { scale: o11 / q2, angle: I2(t23.angle), xOffset: I2(t23.offsetX), yOffset: I2(t23.offsetY), horizontalAlignment: t23.horizontalAlignment, verticalAlignment: t23.verticalAlignment, maxLineWidth: a9(t23.lineWidth), lineHeight: l2 * Math.max(0.25, Math.min(n25 || 1, 4)), decoration: t23.font.decoration || "none", useCIMAngleBehavior: true, hasBackground: l9 }).boundsT, m4 = Math.sqrt(c4.width * c4.width + c4.height * c4.height);
    return e24[0] -= c4.x + m4, e24[1] -= c4.y - m4, e24[2] += c4.x + m4, e24[3] += -c4.y + m4, e24;
  }
};
var _4 = class __ {
  static getEnvelope(e24, t23, r15) {
    if (!e24) return null;
    const o11 = new ht(r15);
    if (Array.isArray(e24)) {
      let r16;
      for (const a10 of e24) r16 ? r16.union(B2(o11, a10, t23)) : r16 = B2(o11, a10, t23);
      return r16;
    }
    return B2(o11, e24, t23);
  }
  static getTextureInfo(e24, t23, r15, o11, a10) {
    const s16 = o11 ?? this.getEnvelope(e24, null, t23);
    if (!s16) return [0, 0, 0, 0, 1];
    const i16 = Math.max(s16.width, s16.height) * T3;
    let n25 = null != a10 ? Math.max(a10 / i16, 1) : 1;
    n25 *= T3, s16.x *= n25, s16.y *= n25, s16.width *= n25, s16.height *= n25, s16.width = Math.max(Math.ceil(s16.x + s16.width) - Math.floor(s16.x), 1) - 1, s16.height = Math.max(Math.ceil(s16.y + s16.height) - Math.floor(s16.y), 1) - 1;
    let l9 = s16.x + 0.5 * s16.width, c4 = s16.y + 0.5 * s16.height;
    return l9 += s16.x - Math.floor(s16.x), c4 += s16.y - Math.floor(s16.y), o11 || (s16.width += r15, s16.height += r15, l9 += r15 / 2, c4 += r15 / 2), [s16.width, s16.height, l9, c4, n25];
  }
  static getTextureAnchor(e24, t23, r15) {
    const [o11, a10, s16, i16, n25] = this.getTextureInfo(e24, t23, v3, null, r15);
    return [-s16 / o11, -i16 / a10, a10 / n25 * T3];
  }
  static rasterize(e24, t23, r15, o11, a10 = true, s16) {
    const [i16, n25, l9, c4, m4] = this.getTextureInfo(t23, o11, v3, r15, s16);
    e24.width = i16, e24.height = n25;
    const y5 = e24.getContext("2d", { willReadFrequently: true }), u10 = at.createScale(m4, -m4);
    u10.translate(0.5 * i16 - l9, 0.5 * n25 + c4);
    const p6 = new mt(y5, o11, u10);
    switch (t23.type) {
      case "CIMPointSymbol": {
        const e25 = { type: "point", x: 0, y: 0 };
        p6.drawSymbol(t23, e25);
        break;
      }
      case "CIMVectorMarker": {
        const e25 = new t7();
        p6.drawMarker(t23, e25);
        break;
      }
    }
    const S3 = y5.getImageData(0, 0, e24.width, e24.height), d = new Uint8Array(S3.data);
    if (a10) {
      let e25;
      for (let t24 = 0; t24 < d.length; t24 += 4) e25 = d[t24 + 3] / 255, d[t24] = d[t24] * e25, d[t24 + 1] = d[t24 + 1] * e25, d[t24 + 2] = d[t24 + 2] * e25;
    }
    return [d, e24.width, e24.height, -l9 / i16, -c4 / n25];
  }
  static fromTextSymbol(e24) {
    const { text: t23 } = e24;
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: __.createCIMTextSymbolfromTextSymbol(e24), textString: t23 }], scaleSymbolsProportionally: true, respectFrame: true }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(e24) {
    const { height: t23, outline: r15, width: o11, xoffset: a10, xscale: s16, yoffset: i16, yscale: n25 } = e24, l9 = [], c4 = { type: "CIMPolygonSymbol", symbolLayers: l9 };
    if (r15) {
      const e25 = oe(r15);
      e25 && l9.push(e25);
    }
    let m4 = e24.url;
    "esriPFS" === e24.type && e24.imageData && (m4 = e24.imageData);
    const f5 = "angle" in e24 ? e24.angle ?? 0 : 0, y5 = (o11 ?? 0) * (s16 || 1), h12 = (t23 ?? 0) * (n25 || 1);
    return l9.push({ type: "CIMPictureFill", enable: true, invertBackfaceTexture: false, scaleX: 1, textureFilter: "Picture", tintColor: null, url: m4, height: h12, width: y5, offsetX: I2(a10), offsetY: I2(i16), rotation: I2(-f5), colorSubstitutions: null }), c4;
  }
  static fromSimpleFillSymbol(e24) {
    const { color: r15, style: o11, outline: s16 } = e24, i16 = [], n25 = { type: "CIMPolygonSymbol", symbolLayers: i16 };
    if (s16) {
      const e25 = oe(s16);
      e25 && i16.push(e25);
    }
    if (o11 && "solid" !== o11 && "none" !== o11 && "esriSFSSolid" !== o11 && "esriSFSNull" !== o11) {
      const e25 = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: $(r15), capStyle: "Butt", joinStyle: "Miter", width: 0.75 }] };
      let s17 = 0;
      const n26 = e3(re(o11) ? 8 : 10);
      switch (o11) {
        case "vertical":
        case "esriSFSVertical":
          s17 = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          s17 = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          s17 = 45;
          break;
        case "cross":
        case "esriSFSCross":
          s17 = 0;
      }
      i16.push({ type: "CIMHatchFill", lineSymbol: e25, offsetX: 0, offsetY: 0, rotation: s17, separation: n26 }), "cross" === o11 || "esriSFSCross" === o11 ? i16.push({ type: "CIMHatchFill", lineSymbol: a(e25), offsetX: 0, offsetY: 0, rotation: 90, separation: n26 }) : "diagonal-cross" !== o11 && "esriSFSDiagonalCross" !== o11 || i16.push({ type: "CIMHatchFill", lineSymbol: a(e25), offsetX: 0, offsetY: 0, rotation: 45, separation: n26 });
    } else !o11 || "solid" !== o11 && "esriSFSSolid" !== o11 || i16.push({ type: "CIMSolidFill", enable: true, color: $(r15) });
    return n25;
  }
  static fromSimpleLineSymbol(e24) {
    const { cap: t23, color: r15, join: o11, marker: a10, miterLimit: s16, style: i16, width: n25 } = e24;
    let l9 = null;
    "solid" !== i16 && "none" !== i16 && "esriSLSSolid" !== i16 && "esriSLSNull" !== i16 && (l9 = [{ type: "CIMGeometricEffectDashes", dashTemplate: Z(i16, t23), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]);
    const c4 = [];
    if (a10) {
      let e25;
      switch (a10.placement) {
        case "begin-end":
          e25 = "Both";
          break;
        case "begin":
          e25 = "JustBegin";
          break;
        case "end":
          e25 = "JustEnd";
          break;
        default:
          e25 = "None";
      }
      const t24 = __.fromSimpleMarker(a10, n25, r15).symbolLayers[0];
      t24.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", placePerPart: false, angleToLine: true, keepUpright: false, offset: 0, extremityPlacement: e25, offsetAlongLine: 0 }, c4.push(t24);
    }
    return c4.push({ type: "CIMSolidStroke", color: "none" !== i16 && "esriSLSNull" !== i16 ? $(r15) : [0, 0, 0, 0], capStyle: U2(t23), joinStyle: H(o11), miterLimit: s16, width: n25, effects: l9 }), { type: "CIMLineSymbol", symbolLayers: c4 };
  }
  static fromPictureMarker(e24) {
    const { angle: t23, height: r15, width: o11, xoffset: a10, yoffset: s16 } = e24;
    let i16 = e24.url;
    return "esriPMS" === e24.type && e24.imageData && (i16 = e24.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: false, scaleX: 1, textureFilter: "Picture", tintColor: null, url: i16, size: r15, width: o11, offsetX: I2(a10), offsetY: I2(s16), rotation: I2(-t23) }] };
  }
  static createCIMTextSymbolfromTextSymbol(t23) {
    const { angle: r15, color: o11, font: a10, haloColor: s16, haloSize: i16, horizontalAlignment: n25, kerning: l9, lineWidth: c4, text: m4, verticalAlignment: f5, xoffset: y5, yoffset: h12, backgroundColor: u10, borderLineColor: M3, borderLineSize: p6 } = t23;
    let S3, b3, g4, C2, x4, I3;
    a10 && (S3 = a10.family, b3 = a10.style, g4 = a10.weight, C2 = a10.size, x4 = a10.decoration);
    let k = false;
    if (m4) {
      k = t22(m4)[1];
    }
    return (u10 || p6) && (I3 = { type: "CIMBackgroundCallout", margin: null, backgroundSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: $(u10) }, { type: "CIMSolidStroke", enable: true, color: $(M3), width: p6 ?? 0 }] }, accentBarSymbol: null, gap: null, leaderLineSymbol: null, lineStyle: null }), { type: "CIMTextSymbol", angle: r15, blockProgression: 2, depth3D: 1, extrapolateBaselines: true, fontEffects: 0, fontEncoding: 1, fontFamilyName: S3 || "Arial", fontStyleName: J(b3, g4), fontType: 0, haloSize: i16, height: C2, hinting: 1, horizontalAlignment: O2(n25 ?? "center"), kerning: l9, letterWidth: 100, ligatures: true, lineGapType: "Multiple", lineWidth: c4, offsetX: I2(y5), offsetY: I2(h12), strikethrough: "line-through" === x4, underline: "underline" === x4, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: $(o11) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: $(s16) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: k ? 1 : 0, verticalAlignment: W(f5 ?? "baseline"), verticalGlyphOrientation: 0, wordSpacing: 100, billboardMode3D: 2, callout: I3 };
  }
  static createPictureMarkerRasterizationParam(e24) {
    const { angle: t23, height: r15, width: o11, xoffset: a10, yoffset: s16 } = e24, i16 = e24.url ?? e24.source?.url ?? e24.source?.imageData;
    return i16 ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureMarker", enable: true, invertBackfaceTexture: false, scaleX: 1, textureFilter: "Picture", tintColor: null, url: i16, size: r15, width: o11, offsetX: I2(a10), offsetY: I2(s16), rotation: I2(-t23) } } : null;
  }
  static createPictureFillRasterizationParam(e24) {
    const { width: t23, height: r15, xoffset: o11, yoffset: a10, url: s16 } = e24;
    return s16 ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureFill", enable: true, scaleX: 1, textureFilter: "Picture", tintColor: null, url: s16, width: t23, height: r15, offsetX: I2(o11), offsetY: I2(a10), rotation: 0 } } : null;
  }
  static fromSimpleMarker(e24, t23, r15) {
    const { style: o11 } = e24, a10 = e24.color ?? r15;
    if ("path" === o11 || "esriSMSPath" === o11) {
      const t24 = [];
      if ("outline" in e24 && e24.outline) {
        const r17 = e24.outline;
        t24.push({ type: "CIMSolidStroke", enable: true, width: r17.width, color: $(r17.color), path: e24.path });
      }
      t24.push({ type: "CIMSolidFill", enable: true, color: $(a10), path: e24.path });
      const [r16, o12] = te("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: -I2(e24.angle), size: I2(e24.size || 6), offsetX: I2(e24.xoffset), offsetY: I2(e24.yoffset), scaleSymbolsProportionally: false, frame: r16, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: o12, symbol: { type: "CIMPolygonSymbol", symbolLayers: t24 } }] }] };
    }
    const s16 = [];
    let i16, n25, l9 = e24.size;
    if ("outline" in e24 && e24.outline && "none" !== e24.outline.style && "esriSLSNull" !== e24.outline.style) {
      const t24 = e24.outline, r16 = "solid" !== t24.style && "esriSLSSolid" !== t24.style;
      [i16, n25] = r16 ? te(o11, e24.size) : te(o11);
      const a11 = t24.width ?? u3.width;
      if (r16) {
        const t25 = a11 / e24.size, r17 = (i16.xmax - i16.xmin) * t25 / 2, o12 = (i16.ymax - i16.ymin) * t25 / 2;
        i16.xmin -= r17, i16.xmax += r17, i16.ymin -= o12, i16.ymax += o12, l9 && (l9 += a11);
      }
      const c5 = "cross" !== e24.style && "x" !== e24.style || "dot" === e24?.outline.style || "short-dot" === e24?.outline.style ? "HalfGap" : "FullPattern", m4 = r16 ? [{ type: "CIMGeometricEffectAddControlPoints" }, { type: "CIMGeometricEffectDashes", dashTemplate: Z(t24.style, null).map((e25) => t24.width && t24.width > 0 ? e25 * t24.width : e25), lineDashEnding: c5, controlPointEnding: "FullPattern" }] : void 0;
      s16.push({ type: "CIMSolidStroke", capStyle: r16 ? "Round" : "Butt", enable: true, width: a11, color: $(t24.color), effects: m4 });
    } else !t23 || "line-marker" !== e24.type || "cross" !== e24.style && "x" !== e24.style ? [i16, n25] = te(o11) : ([i16, n25] = te(o11), s16.push({ type: "CIMSolidStroke", enable: true, width: t23, color: $(a10) }));
    s16.push({ type: "CIMSolidFill", enable: true, color: $(a10) });
    const c4 = { type: "CIMPolygonSymbol", symbolLayers: s16 };
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: I2(-e24.angle), size: I2(l9 || 6 * t23), offsetX: I2(e24.xoffset), offsetY: I2(e24.yoffset), scaleSymbolsProportionally: false, frame: i16, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: n25, symbol: c4 }] }] };
  }
  static fromCIMHatchFill(e24, r15) {
    const o11 = r15 * (e24.separation ?? o4.CIMHatchFill.separation), a10 = o11 / 2, s16 = a(e24.lineSymbol);
    s16.symbolLayers?.forEach((e25) => {
      switch (e25.type) {
        case "CIMSolidStroke":
          null != e25.width && (e25.width *= r15), e25.effects?.forEach((e26) => {
            if ("CIMGeometricEffectDashes" === e26.type) {
              const t23 = e26.dashTemplate;
              e26.dashTemplate = t23?.map((e27) => e27 * r15);
            }
          });
          break;
        case "CIMVectorMarker": {
          null != e25.size && (e25.size *= r15);
          const t23 = e25.markerPlacement;
          null != t23 && "placementTemplate" in t23 && (t23.placementTemplate = t23.placementTemplate.map((e26) => e26 * r15));
          break;
        }
      }
    });
    let i16 = this._getLineSymbolPeriod(s16) || A3;
    for (; i16 < A3; ) i16 *= 2;
    const n25 = i16 / 2;
    return { type: "CIMVectorMarker", enable: true, frame: { xmin: -n25, xmax: n25, ymin: -a10, ymax: a10 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-n25, 0], [n25, 0]]] }, symbol: s16 }], size: o11 };
  }
  static fetchResources(e24, t23, r15, o11 = null) {
    if (!e24 || !t23) return r15;
    switch (e24.type) {
      case "CIMMeshSymbol":
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        for (const t24 of e24.effects || []) r15.push(g2(t24));
    }
    return q3(e24, (e25) => {
      for (const t24 of e25.effects || []) r15.push(g2(t24));
      "CIMVectorMarker" === e25.type && e25.markerPlacement && r15.push(u5(e25.markerPlacement)), "url" in e25 && e25.url && r15.push(t23.fetchResource(e25.url, { signal: o11 }));
    }), r15;
  }
  static fetchFonts(e24, t23, r15) {
    if (e24 && t23) {
      if ("symbolLayers" in e24 && e24.symbolLayers) {
        for (const o11 of e24.symbolLayers) if ("CIMVectorMarker" === o11.type && o11.markerGraphics) for (const e25 of o11.markerGraphics) e25?.symbol && __.fetchFonts(e25.symbol, t23, r15);
      } else if ("CIMTextSymbol" === e24.type) {
        const { fontFamilyName: o11, fontStyleName: a10 } = e24;
        if (!o11 || "calcitewebcoreicons" === o11.toLowerCase()) return;
        const { style: s16, weight: i16 } = L(a10), n25 = T(e24), c4 = new y({ family: o11, style: s16, weight: i16, decoration: n25 });
        r15.push(t23.loadFont(c4).catch(() => {
          R2().error(`Unsupported font ${o11} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(e24) {
    if (e24) {
      const t23 = this._getEffectsRepeat(e24.effects);
      if (t23) return t23;
      if (e24.symbolLayers) {
        for (const r15 of e24.symbolLayers) if (r15) {
          const e25 = this._getEffectsRepeat(r15.effects);
          if (e25) return e25;
          switch (r15.type) {
            case "CIMCharacterMarker":
            case "CIMPictureMarker":
            case "CIMVectorMarker":
            case "CIMObjectMarker3D":
            case "CIMglTFMarker3D": {
              const e26 = this._getPlacementRepeat(r15.markerPlacement);
              if (e26) return e26;
            }
          }
        }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(e24) {
    if (e24) {
      for (const t23 of e24) if (t23) switch (t23.type) {
        case "CIMGeometricEffectDashes": {
          const e25 = t23.dashTemplate;
          if (e25 && e25.length) {
            let t24 = 0;
            for (const r15 of e25) t24 += r15;
            return 1 & e25.length && (t24 *= 2), t24;
          }
          break;
        }
        case "CIMGeometricEffectWave":
          return t23.period;
        default:
          R2().error(`unsupported geometric effect type ${t23.type}`);
      }
    }
    return 0;
  }
  static _getPlacementRepeat(e24) {
    if (e24) switch (e24.type) {
      case "CIMMarkerPlacementAlongLineSameSize":
      case "CIMMarkerPlacementAlongLineRandomSize":
      case "CIMMarkerPlacementAlongLineVariableSize": {
        const t23 = e24.placementTemplate;
        if (t23 && t23.length) {
          let e25 = 0;
          for (const r15 of t23) e25 += +r15;
          return 1 & t23.length && (e25 *= 2), e25;
        }
        break;
      }
    }
    return 0;
  }
  static fromCIMInsidePolygon(e24) {
    const t23 = e24.markerPlacement, r15 = __spreadValues({}, e24);
    r15.markerPlacement = null, r15.anchorPoint = null;
    const s16 = Math.abs(t23.stepX), i16 = Math.abs(t23.stepY), n25 = (t23.randomness ?? 100) / 100;
    let l9, c4, m4, f5;
    if ("Random" === t23.gridType) {
      const e25 = e3(xt), r16 = Math.max(Math.floor(e25 / s16), 1), y5 = Math.max(Math.floor(e25 / i16), 1);
      l9 = r16 * s16 / 2, c4 = y5 * i16 / 2, m4 = 2 * c4;
      const h12 = new t(t23.seed), u10 = n25 * s16 / 1.5, M3 = n25 * i16 / 1.5;
      f5 = [];
      for (let t24 = 0; t24 < r16; t24++) for (let e26 = 0; e26 < y5; e26++) {
        const r17 = t24 * s16 - l9 + u10 * (0.5 - h12.getFloat()), o11 = e26 * i16 - c4 + M3 * (0.5 - h12.getFloat());
        f5.push({ x: r17, y: o11 }), 0 === t24 && f5.push({ x: r17 + 2 * l9, y: o11 }), 0 === e26 && f5.push({ x: r17, y: o11 + 2 * c4 });
      }
    } else true === t23.shiftOddRows ? (l9 = s16 / 2, c4 = i16, m4 = 2 * i16, f5 = [{ x: -l9, y: 0 }, { x: l9, y: 0 }, { x: 0, y: c4 }, { x: 0, y: -c4 }]) : (l9 = s16 / 2, c4 = i16 / 2, m4 = i16, f5 = [{ x: -s16, y: 0 }, { x: 0, y: -i16 }, { x: -s16, y: -i16 }, { x: 0, y: 0 }, { x: s16, y: 0 }, { x: 0, y: i16 }, { x: s16, y: i16 }, { x: -s16, y: i16 }, { x: s16, y: -i16 }]);
    return { type: "CIMVectorMarker", enable: true, frame: { xmin: -l9, xmax: l9, ymin: -c4, ymax: c4 }, markerGraphics: f5.map((e25) => ({ type: "CIMMarkerGraphic", geometry: e25, symbol: { type: "CIMPointSymbol", symbolLayers: [r15] } })), size: m4 };
  }
};
function q3(e24, t23) {
  if (e24) switch (e24.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      const r15 = e24.symbolLayers;
      if (!r15) return;
      for (const e25 of r15) if (t23(e25), "CIMVectorMarker" === e25.type) {
        const r16 = e25.markerGraphics;
        if (!r16) continue;
        for (const e26 of r16) if (e26) {
          const r17 = e26.symbol;
          r17 && q3(r17, t23);
        }
      }
      break;
    }
  }
}
var U2 = (e24) => {
  if (!e24) return "Butt";
  switch (e24) {
    case "butt":
      return "Butt";
    case "square":
      return "Square";
    case "round":
      return "Round";
  }
};
var H = (e24) => {
  if (!e24) return "Miter";
  switch (e24) {
    case "miter":
      return "Miter";
    case "round":
      return "Round";
    case "bevel":
      return "Bevel";
  }
};
var O2 = (e24) => {
  if (null == e24) return "Center";
  switch (e24) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
};
var W = (e24) => {
  if (null == e24) return "Center";
  switch (e24) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
};
var $ = (e24) => {
  if (!e24) return [0, 0, 0, 0];
  const { r: t23, g: r15, b: o11, a: a10 } = e24;
  return [t23, r15, o11, 255 * a10];
};
var J = (e24, t23) => {
  const r15 = K(t23), o11 = Q(e24);
  return r15 && o11 ? `${r15}-${o11}` : `${r15}${o11}`;
};
var K = (e24) => {
  if (!e24) return "";
  switch (e24.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
};
var Q = (e24) => {
  if (!e24) return "";
  switch (e24.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
};
var Z = (e24, t23) => {
  const r15 = 1e-3, o11 = "butt" === t23;
  switch (e24) {
    case "dash":
    case "esriSLSDash":
      return o11 ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return o11 ? [4, 3, 1, 3] : [3, 4, r15, 4];
    case "dot":
    case "esriSLSDot":
      return o11 ? [1, 3] : [r15, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return o11 ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return o11 ? [8, 3, 1, 3] : [7, 4, r15, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return o11 ? [8, 3, 1, 3, 1, 3] : [7, 4, r15, 4, r15, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return o11 ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return o11 ? [4, 1, 1, 1] : [3, 2, r15, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return o11 ? [4, 1, 1, 1, 1, 1] : [3, 2, r15, 2, r15, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return o11 ? [1, 1] : [r15, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return R2().error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return R2().error(`Tried to rasterize SLS, but found an unexpected style: ${e24}!`), [0, 0];
  }
};
function ee2(e24) {
  return void 0 !== e24.symbolLayers;
}
var te = (e24, t23 = 100) => {
  const r15 = t23 / 2;
  let o11, a10;
  const s16 = e24;
  if ("circle" === s16 || "esriSMSCircle" === s16) {
    const e25 = 0.25;
    let t24 = Math.acos(1 - e25 / r15), s17 = Math.ceil(z2 / t24 / 4);
    0 === s17 && (s17 = 1), t24 = D / s17, s17 *= 4;
    const i16 = [];
    i16.push([r15, 0]);
    for (let o12 = 1; o12 < s17; o12++) i16.push([r15 * Math.cos(o12 * t24), -r15 * Math.sin(o12 * t24)]);
    i16.push([r15, 0]), o11 = { rings: [i16] }, a10 = { xmin: -r15, ymin: -r15, xmax: r15, ymax: r15 };
  } else if ("cross" === s16 || "esriSMSCross" === s16) {
    const e25 = 0;
    o11 = { paths: [[[e25, r15], [e25, -r15]], [[r15, e25], [-r15, e25]]] }, a10 = { xmin: -r15, ymin: -r15, xmax: r15, ymax: r15 };
  } else if ("diamond" === s16 || "esriSMSDiamond" === s16) o11 = { rings: [[[-r15, 0], [0, r15], [r15, 0], [0, -r15], [-r15, 0]]] }, a10 = { xmin: -r15, ymin: -r15, xmax: r15, ymax: r15 };
  else if ("square" === s16 || "esriSMSSquare" === s16) o11 = { rings: [[[-r15, -r15], [-r15, r15], [r15, r15], [r15, -r15], [-r15, -r15]]] }, a10 = { xmin: -r15, ymin: -r15, xmax: r15, ymax: r15 };
  else if ("x" === s16 || "esriSMSX" === s16) o11 = { paths: [[[r15, r15], [-r15, -r15]], [[r15, -r15], [-r15, r15]]] }, a10 = { xmin: -r15, ymin: -r15, xmax: r15, ymax: r15 };
  else if ("triangle" === s16 || "esriSMSTriangle" === s16) {
    const e25 = t23 * 0.5773502691896257, r16 = -e25, s17 = 2 / 3 * t23, i16 = s17 - t23;
    o11 = { rings: [[[r16, i16], [0, s17], [e25, i16], [r16, i16]]] }, a10 = { xmin: r16, ymin: i16, xmax: e25, ymax: s17 };
  } else "arrow" === s16 && (o11 = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, a10 = { xmin: -r15, ymin: -r15, xmax: r15, ymax: r15 });
  return [a10, o11];
};
var re = (e24) => "vertical" === e24 || "horizontal" === e24 || "cross" === e24 || "esriSFSCross" === e24 || "esriSFSVertical" === e24 || "esriSFSHorizontal" === e24;
function oe(e24) {
  if (!e24) return null;
  let t23 = null;
  const { cap: r15, color: o11, join: a10, miterLimit: s16, style: i16, width: n25 } = e24;
  return "solid" !== i16 && "none" !== i16 && "esriSLSSolid" !== i16 && "esriSLSNull" !== i16 && (t23 = [{ type: "CIMGeometricEffectDashes", dashTemplate: Z(i16, r15), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]), { type: "CIMSolidStroke", color: "esriSLSNull" !== i16 && "none" !== i16 ? $(o11) : [0, 0, 0, 0], capStyle: U2(r15), joinStyle: H(a10), miterLimit: s16, width: n25, effects: t23 };
}

export {
  g2 as g,
  y2 as y,
  P2 as P,
  w2 as w,
  O,
  t22 as t,
  t19 as t2,
  t20 as t3,
  e23 as e,
  n23 as n,
  a8 as a,
  c3 as c,
  s14 as s,
  A2 as A,
  i15 as i,
  m3 as m,
  at,
  ct,
  mt,
  j5 as j,
  V,
  N3 as N,
  _4 as _,
  q3 as q,
  Z
};
//# sourceMappingURL=chunk-Q6QOJH2O.js.map
