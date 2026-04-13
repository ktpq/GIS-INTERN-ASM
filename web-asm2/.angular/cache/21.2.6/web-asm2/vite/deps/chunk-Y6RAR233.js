import {
  i as i2,
  r,
  s
} from "./chunk-EH727TX6.js";
import {
  f
} from "./chunk-DHIQ5CF2.js";
import {
  m
} from "./chunk-EKUGKFFS.js";
import {
  e,
  i,
  n,
  o,
  t as t2
} from "./chunk-47Z5HJ52.js";
import {
  u
} from "./chunk-SLHRVNEB.js";
import {
  G,
  O
} from "./chunk-4X5LQ2UO.js";
import {
  t
} from "./chunk-5AVTDH3Y.js";

// node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js
function p(t3) {
  return f2(t3, true);
}
function a(t3) {
  return f2(t3, false);
}
function f2(i3, n2) {
  if (null == i3) return null;
  const p2 = i3.spatialReference, a2 = G(p2), f3 = t(i3) ? i3.toJSON() : i3;
  if (!a2) return f3;
  const I2 = O(p2) ? 102100 : 4326, g2 = r[I2].maxX, v2 = r[I2].minX;
  if (t2(f3)) return d(f3, g2, v2);
  if (i(f3)) return f3.points = f3.points.map((t3) => d(t3, g2, v2)), f3;
  if (n(f3)) return y(f3, a2);
  if (o(f3) || e(f3)) {
    const t3 = f(T, f3), i4 = { xmin: t3[0], ymin: t3[1], xmax: t3[2], ymax: t3[3] }, e2 = i2(i4.xmin, v2) * (2 * g2), h = 0 === e2 ? f3 : s(f3, e2);
    return i4.xmin += e2, i4.xmax += e2, i4.xmax > g2 ? C(h, g2, n2) : i4.xmin < v2 ? C(h, v2, n2) : h;
  }
  return f3;
}
function y(t3, i3) {
  if (!i3) return t3;
  const s2 = I(t3, i3).map((t4) => t4.extent);
  return s2.length < 2 ? s2[0] || t3 : s2.length > 2 ? (t3.xmin = i3.valid[0], t3.xmax = i3.valid[1], t3) : { rings: s2.map((t4) => [[t4.xmin, t4.ymin], [t4.xmin, t4.ymax], [t4.xmax, t4.ymax], [t4.xmax, t4.ymin], [t4.xmin, t4.ymin]]) };
}
function d(t3, i3, s2) {
  if (Array.isArray(t3)) {
    const n2 = t3[0];
    if (n2 > i3) {
      const s3 = i2(n2, i3);
      t3[0] = n2 + s3 * (-2 * i3);
    } else if (n2 < s2) {
      const i4 = i2(n2, s2);
      t3[0] = n2 + i4 * (-2 * s2);
    }
  } else {
    const n2 = t3.x;
    if (n2 > i3) {
      const s3 = i2(n2, i3);
      t3.x += s3 * (-2 * i3);
    } else if (n2 < s2) {
      const i4 = i2(n2, s2);
      t3.x += i4 * (-2 * s2);
    }
  }
  return t3;
}
function I(t3, i3) {
  const s2 = [], { ymin: n2, ymax: e2, xmin: h, xmax: o2 } = t3, u2 = t3.xmax - t3.xmin, [r2, m2] = i3.valid, { x, frameId: l } = g(t3.xmin, i3), { x: _, frameId: c } = g(t3.xmax, i3), p2 = x === _ && u2 > 0;
  if (u2 > 2 * m2) {
    const t4 = { xmin: h < o2 ? x : _, ymin: n2, xmax: m2, ymax: e2 }, i4 = { xmin: r2, ymin: n2, xmax: h < o2 ? _ : x, ymax: e2 }, u3 = { xmin: 0, ymin: n2, xmax: m2, ymax: e2 }, p3 = { xmin: r2, ymin: n2, xmax: 0, ymax: e2 }, a2 = [], f3 = [];
    v(t4, u3) && a2.push(l), v(t4, p3) && f3.push(l), v(i4, u3) && a2.push(c), v(i4, p3) && f3.push(c);
    for (let s3 = l + 1; s3 < c; s3++) a2.push(s3), f3.push(s3);
    s2.push(new P(t4, [l]), new P(i4, [c]), new P(u3, a2), new P(p3, f3));
  } else x > _ || p2 ? s2.push(new P({ xmin: x, ymin: n2, xmax: m2, ymax: e2 }, [l]), new P({ xmin: r2, ymin: n2, xmax: _, ymax: e2 }, [c])) : s2.push(new P({ xmin: x, ymin: n2, xmax: _, ymax: e2 }, [l]));
  return s2;
}
function g(t3, i3) {
  const [s2, n2] = i3.valid, e2 = 2 * n2;
  let h, o2 = 0;
  return t3 > n2 ? (h = Math.ceil(Math.abs(t3 - n2) / e2), t3 -= h * e2, o2 = h) : t3 < s2 && (h = Math.ceil(Math.abs(t3 - s2) / e2), t3 += h * e2, o2 = -h), { x: t3, frameId: o2 };
}
function v(t3, i3) {
  const { xmin: s2, ymin: n2, xmax: e2, ymax: h } = i3;
  return O2(t3, s2, n2) && O2(t3, s2, h) && O2(t3, e2, h) && O2(t3, e2, n2);
}
function O2(t3, i3, s2) {
  return i3 >= t3.xmin && i3 <= t3.xmax && s2 >= t3.ymin && s2 <= t3.ymax;
}
function C(t3, i3, s2 = true) {
  const e2 = !e(t3);
  if (e2 && m(t3), s2) {
    return new S().cut(t3, i3);
  }
  const h = e2 ? t3.rings : t3.paths, o2 = e2 ? 4 : 2, u2 = h.length, m2 = -2 * i3;
  for (let n2 = 0; n2 < u2; n2++) {
    const t4 = h[n2];
    if (t4 && t4.length >= o2) {
      const i4 = [];
      for (const [s3, ...n3] of t4) i4.push([s3 + m2, ...n3]);
      h.push(i4);
    }
  }
  return e2 ? t3.rings = h : t3.paths = h, t3;
}
var P = class {
  constructor(t3, i3) {
    this.extent = t3, this.frameIds = i3;
  }
};
var T = u();
var S = class {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(t3, i3) {
    let s2;
    if (this._xCut = i3, t3.rings) this._closed = true, s2 = t3.rings, this._minPts = 4;
    else {
      if (!t3.paths) return null;
      this._closed = false, s2 = t3.paths, this._minPts = 2;
    }
    for (const e2 of s2) {
      if (!e2 || e2.length < this._minPts) continue;
      let t4 = true;
      for (const i4 of e2) t4 ? (this.moveTo(i4), t4 = false) : this.lineTo(i4);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), s2 = [];
    for (const e2 of this._linesIn) e2 && e2.length >= this._minPts && s2.push(e2);
    const n2 = -2 * this._xCut;
    for (const e2 of this._linesOut) if (e2 && e2.length >= this._minPts) {
      for (const t4 of e2) t4[0] += n2;
      s2.push(e2);
    }
    return this._closed ? t3.rings = s2 : t3.paths = s2, t3;
  }
  moveTo(t3) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(t3[0]), this._moveTo(t3[0], t3[1], this._prevSide), this._prevPt = t3, this._firstPt = t3;
  }
  lineTo(t3) {
    const i3 = this._side(t3[0]);
    if (i3 * this._prevSide === -1) {
      const s2 = this._intersect(this._prevPt, t3);
      this._lineTo(this._xCut, s2, 0), this._prevSide = 0, this._lineTo(t3[0], t3[1], i3);
    } else this._lineTo(t3[0], t3[1], i3);
    this._prevSide = i3, this._prevPt = t3;
  }
  close() {
    const t3 = this._firstPt, i3 = this._prevPt;
    t3[0] === i3[0] && t3[1] === i3[1] || this.lineTo(t3), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(t3, i3, s2) {
    this._closed ? (this._lineIn.push([s2 <= 0 ? t3 : this._xCut, i3]), this._lineOut.push([s2 >= 0 ? t3 : this._xCut, i3])) : (s2 <= 0 && this._lineIn.push([t3, i3]), s2 >= 0 && this._lineOut.push([t3, i3]));
  }
  _lineTo(t3, i3, s2) {
    this._closed ? (j(this._lineIn, s2 <= 0 ? t3 : this._xCut, i3), j(this._lineOut, s2 >= 0 ? t3 : this._xCut, i3)) : s2 < 0 ? (0 === this._prevSide && this._pushLineOut(), this._lineIn.push([t3, i3])) : s2 > 0 ? (0 === this._prevSide && this._pushLineIn(), this._lineOut.push([t3, i3])) : this._prevSide < 0 ? (this._lineIn.push([t3, i3]), this._lineOut.push([t3, i3])) : this._prevSide > 0 && (this._lineOut.push([t3, i3]), this._lineIn.push([t3, i3]));
  }
  _checkClosingPt(t3) {
    const i3 = t3.length;
    i3 > 3 && t3[0][0] === this._xCut && t3[i3 - 2][0] === this._xCut && t3[1][0] === this._xCut && (t3[0][1] = t3[i3 - 2][1], t3.pop());
  }
  _side(t3) {
    return t3 < this._xCut ? -1 : t3 > this._xCut ? 1 : 0;
  }
  _intersect(t3, i3) {
    const s2 = (this._xCut - t3[0]) / (i3[0] - t3[0]);
    return t3[1] + s2 * (i3[1] - t3[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
};
function j(t3, i3, s2) {
  const n2 = t3.length;
  n2 > 1 && t3[n2 - 1][0] === i3 && t3[n2 - 2][0] === i3 ? t3[n2 - 1][1] = s2 : t3.push([i3, s2]);
}

export {
  p,
  a
};
//# sourceMappingURL=chunk-Y6RAR233.js.map
