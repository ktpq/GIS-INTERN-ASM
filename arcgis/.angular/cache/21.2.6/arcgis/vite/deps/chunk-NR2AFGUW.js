import {
  r as r11,
  u as u2,
  w as w3
} from "./chunk-SRLJYNHD.js";
import {
  c as c4,
  f as f2,
  o as o5
} from "./chunk-VTDNMAHF.js";
import {
  b as b5
} from "./chunk-RN5EOLXT.js";
import {
  A as A5,
  R as R3,
  S as S2,
  d,
  h as h4,
  k as k2,
  q,
  v as v4,
  w as w2,
  y as y5
} from "./chunk-RNHOJFMM.js";
import {
  h as h3,
  m as m4,
  v as v2
} from "./chunk-J6S2XDA4.js";
import {
  w
} from "./chunk-2M5GBFWO.js";
import {
  b as b4,
  k,
  v as v3,
  y as y4
} from "./chunk-7F556GNA.js";
import {
  L as L3,
  O as O3
} from "./chunk-DBTV7T3O.js";
import {
  p as p4
} from "./chunk-RCFUJF2D.js";
import {
  L as L2,
  O as O2,
  U as U2,
  Z,
  m as m3,
  v,
  y as y3
} from "./chunk-6NPKRFWB.js";
import {
  x as x3
} from "./chunk-KEB6LZZ5.js";
import {
  n as n6
} from "./chunk-DZSF27H2.js";
import {
  r as r10
} from "./chunk-G7LDH7VD.js";
import {
  t as t3
} from "./chunk-7U4LQW5Y.js";
import {
  a as a4
} from "./chunk-ICUJG4IU.js";
import {
  A as A4,
  R as R2,
  _ as _2
} from "./chunk-AFCXMSTT.js";
import {
  n as n5,
  r as r9,
  t as t2
} from "./chunk-ULRT2MRD.js";
import {
  A as A3,
  C as C2,
  E as E3,
  G,
  H,
  I,
  P,
  U,
  W,
  _,
  a as a3,
  c as c3,
  e as e4,
  g as g2,
  o as o4,
  p as p3,
  u,
  x as x2,
  y as y2
} from "./chunk-YM62CGUL.js";
import {
  A,
  C,
  R,
  X,
  b as b3,
  c as c2,
  h as h2,
  l as l4,
  n as n3,
  p,
  s as s3
} from "./chunk-D4W5U2I5.js";
import {
  n as n4,
  r as r8
} from "./chunk-IXOUFXRS.js";
import {
  L,
  O,
  m as m2,
  o as o3,
  p as p2,
  r as r7,
  x,
  z as z2
} from "./chunk-XA4KTSOB.js";
import {
  N,
  a as a2,
  n as n2,
  o as o2,
  r as r4,
  t
} from "./chunk-MLBRAI7B.js";
import {
  e as e3
} from "./chunk-XSQPGBLC.js";
import {
  A as A2
} from "./chunk-CEHUBL44.js";
import {
  r as r6
} from "./chunk-JC7PAMG4.js";
import {
  j as j2
} from "./chunk-V7SQTPST.js";
import {
  g
} from "./chunk-ZEMVKL33.js";
import {
  y
} from "./chunk-4F4IE6P5.js";
import {
  e as e2
} from "./chunk-EF6HOWDG.js";
import {
  E as E2,
  T,
  r as r5
} from "./chunk-EFJUSEVJ.js";
import {
  e
} from "./chunk-7RKO4CUB.js";
import {
  f,
  s as s2
} from "./chunk-QWNB5I7T.js";
import {
  M,
  b as b2,
  l as l3,
  o,
  r as r3,
  s
} from "./chunk-ZILR7JK7.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  j
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  E
} from "./chunk-66OU277M.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  l2,
  m2 as m
} from "./chunk-LV7AMIAU.js";
import {
  h,
  l
} from "./chunk-55ZAYF5P.js";
import {
  r2
} from "./chunk-POW25PFR.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js
var g3 = class {
  constructor() {
    this._transform = e3(), this._transformInverse = new M2({ value: this._transform }, h2, e3), this._transformInverseTranspose = new M2(this._transformInverse, s3, e3), this._transformTranspose = new M2({ value: this._transform }, s3, e3), this._transformInverseRotation = new M2({ value: this._transform }, y, e2);
  }
  _invalidateLazyTransforms() {
    this._transformInverse.invalidate(), this._transformInverseTranspose.invalidate(), this._transformTranspose.invalidate(), this._transformInverseRotation.invalidate();
  }
  get transform() {
    return this._transform;
  }
  get inverse() {
    return this._transformInverse.value;
  }
  get inverseTranspose() {
    return this._transformInverseTranspose.value;
  }
  get inverseRotation() {
    return this._transformInverseRotation.value;
  }
  get transpose() {
    return this._transformTranspose.value;
  }
  setTransformMatrix(t8) {
    n3(this._transform, t8);
  }
  multiplyTransform(t8) {
    c2(this._transform, this._transform, t8);
  }
  set(t8) {
    n3(this._transform, t8), this._invalidateLazyTransforms();
  }
  setAndInvalidateLazyTransforms(t8, s8) {
    this.setTransformMatrix(t8), this.multiplyTransform(s8), this._invalidateLazyTransforms();
  }
};
var M2 = class {
  constructor(t8, s8, r15) {
    this._original = t8, this._update = s8, this._dirty = true, this._transform = r15();
  }
  invalidate() {
    this._dirty = true;
  }
  get value() {
    return this._dirty && (this._update(this._transform, this._original.value), this._dirty = false), this._transform;
  }
};
var v5 = class {
  constructor(t8 = 0) {
    this.offset = t8, this.tmpVertex = n2();
  }
  applyToVertex(t8, s8, r15) {
    const e10 = u(j3, t8, s8, r15), i6 = c3(w4, e10, this.localOrigin), o9 = this.offset / a3(i6);
    return g2(this.tmpVertex, e10, i6, o9), this.tmpVertex;
  }
  applyToAabb(t8) {
    const s8 = S3, r15 = q2, e10 = z3;
    for (let n11 = 0; n11 < 3; ++n11) s8[n11] = t8[0 + n11] + this.localOrigin[n11], r15[n11] = t8[3 + n11] + this.localOrigin[n11], e10[n11] = s8[n11];
    const i6 = this.applyToVertex(s8[0], s8[1], s8[2]);
    for (let n11 = 0; n11 < 3; ++n11) t8[n11] = i6[n11], t8[n11 + 3] = i6[n11];
    const o9 = (s9) => {
      const r16 = this.applyToVertex(s9[0], s9[1], s9[2]);
      for (let e11 = 0; e11 < 3; ++e11) t8[e11] = Math.min(t8[e11], r16[e11]), t8[e11 + 3] = Math.max(t8[e11 + 3], r16[e11]);
    };
    for (let n11 = 1; n11 < 8; ++n11) {
      for (let t9 = 0; t9 < 3; ++t9) e10[t9] = n11 & 1 << t9 ? r15[t9] : s8[t9];
      o9(e10);
    }
    let a9 = 0;
    for (let n11 = 0; n11 < 3; ++n11) {
      s8[n11] * r15[n11] < 0 && (a9 |= 1 << n11);
    }
    if (0 !== a9 && 7 !== a9) {
      for (let n11 = 0; n11 < 8; ++n11) if (0 === (a9 & n11)) {
        for (let t9 = 0; t9 < 3; ++t9) e10[t9] = a9 & 1 << t9 ? 0 : n11 & 1 << t9 ? s8[t9] : r15[t9];
        o9(e10);
      }
    }
    for (let n11 = 0; n11 < 3; ++n11) t8[n11] -= this.localOrigin[n11], t8[n11 + 3] -= this.localOrigin[n11];
    return t8;
  }
};
var b6 = class {
  constructor(t8 = 0) {
    this.componentLocalOriginLength = 0, this._totalOffset = 0, this._offset = 0, this._tmpVertex = n2(), this._tmpMbs = new w(), this._tmpObb = new O3(), this._resetOffset(t8);
  }
  _resetOffset(t8) {
    this._offset = t8, this._totalOffset = t8;
  }
  set offset(t8) {
    this._resetOffset(t8);
  }
  get offset() {
    return this._offset;
  }
  set componentOffset(t8) {
    this._totalOffset = this._offset + t8;
  }
  set localOrigin(t8) {
    this.componentLocalOriginLength = a3(t8);
  }
  applyToVertex(t8, s8, r15) {
    const e10 = u(j3, t8, s8, r15), i6 = u(w4, t8, s8, r15 + this.componentLocalOriginLength), o9 = this._totalOffset / a3(i6);
    return g2(this._tmpVertex, e10, i6, o9), this._tmpVertex;
  }
  applyToAabb(t8) {
    const s8 = this.componentLocalOriginLength, r15 = t8[0], e10 = t8[1], i6 = t8[2] + s8, o9 = t8[3], a9 = t8[4], n11 = t8[5] + s8, h6 = Math.abs(r15), f8 = Math.abs(e10), m10 = Math.abs(i6), l9 = Math.abs(o9), p7 = Math.abs(a9), c8 = Math.abs(n11), _7 = 0.5 * (1 + Math.sign(r15 * o9)) * Math.min(h6, l9), u6 = 0.5 * (1 + Math.sign(e10 * a9)) * Math.min(f8, p7), g8 = 0.5 * (1 + Math.sign(i6 * n11)) * Math.min(m10, c8), M5 = Math.max(h6, l9), v9 = Math.max(f8, p7), b10 = Math.max(m10, c8), x6 = Math.sqrt(_7 * _7 + u6 * u6 + g8 * g8), T3 = Math.sign(h6 + r15), O6 = Math.sign(f8 + e10), d6 = Math.sign(m10 + i6), y9 = Math.sign(l9 + o9), V4 = Math.sign(p7 + a9), L5 = Math.sign(c8 + n11), I6 = this._totalOffset;
    if (x6 < I6) return t8[0] -= (1 - T3) * I6, t8[1] -= (1 - O6) * I6, t8[2] -= (1 - d6) * I6, t8[3] += y9 * I6, t8[4] += V4 * I6, t8[5] += L5 * I6, t8;
    const j8 = I6 / Math.sqrt(M5 * M5 + v9 * v9 + b10 * b10), w8 = I6 / x6, S8 = w8 - j8, q3 = -S8;
    return t8[0] += r15 * (T3 * q3 + w8), t8[1] += e10 * (O6 * q3 + w8), t8[2] += i6 * (d6 * q3 + w8), t8[3] += o9 * (y9 * S8 + j8), t8[4] += a9 * (V4 * S8 + j8), t8[5] += n11 * (L5 * S8 + j8), t8;
  }
  applyToMbs(t8) {
    const s8 = t8.center, r15 = a3(s8), e10 = this._totalOffset / r15;
    return g2(this._tmpMbs.center, s8, s8, e10), this._tmpMbs.radius = t8.radius + t8.radius * this._totalOffset / r15, this._tmpMbs;
  }
  applyToObb(t8) {
    return L3(t8, this._totalOffset, this._totalOffset, 1, this._tmpObb), this._tmpObb;
  }
};
var x4 = class {
  constructor(t8 = 0) {
    this.offset = t8, this.tmpVertex = n2(), this._tmpSphere = new w();
  }
  applyToVertex(t8, s8, r15) {
    const e10 = this.objectTransform.transform, i6 = u(j3, t8, s8, r15), o9 = E3(i6, i6, e10), a9 = this.offset / a3(o9);
    g2(o9, o9, o9, a9);
    const l9 = this.objectTransform.inverse;
    return E3(this.tmpVertex, o9, l9), this.tmpVertex;
  }
  applyToMinMax(t8, s8) {
    const r15 = this.offset / a3(t8);
    g2(t8, t8, t8, r15);
    const e10 = this.offset / a3(s8);
    g2(s8, s8, s8, e10);
  }
  applyToAabb(t8) {
    const s8 = this.offset / Math.sqrt(t8[0] * t8[0] + t8[1] * t8[1] + t8[2] * t8[2]);
    t8[0] += t8[0] * s8, t8[1] += t8[1] * s8, t8[2] += t8[2] * s8;
    const r15 = this.offset / Math.sqrt(t8[3] * t8[3] + t8[4] * t8[4] + t8[5] * t8[5]);
    return t8[3] += t8[3] * r15, t8[4] += t8[4] * r15, t8[5] += t8[5] * r15, t8;
  }
  applyToBoundingSphere(t8) {
    const s8 = t8.center, r15 = a3(s8), e10 = this.offset / r15;
    return g2(this._tmpSphere.center, s8, s8, e10), this._tmpSphere.radius = t8.radius + t8.radius * this.offset / r15, this._tmpSphere;
  }
};
var T2 = new x4();
function O4(t8) {
  return null != t8 ? (T2.offset = t8, T2) : null;
}
var d2 = new b6();
var V = new v5();
var j3 = n2();
var w4 = n2();
var S3 = n2();
var q2 = n2();
var z3 = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/lighting/Lightsources.js
var i = class {
  constructor(s8 = o2()) {
    this.intensity = s8;
  }
};
var r12 = class {
  constructor(i6 = o2(), r15 = r4(0.57735, 0.57735, 0.57735)) {
    this.intensity = i6, this.direction = r15;
  }
};
var c5 = class {
  constructor(i6 = o2(), r15 = r4(0.57735, 0.57735, 0.57735), c8 = true, n11 = 1, o9 = 1) {
    this.intensity = i6, this.direction = r15, this.castShadows = c8, this.specularStrength = n11, this.environmentStrength = o9;
  }
};
var n7 = class {
  constructor() {
    this.r = [0], this.g = [0], this.b = [0];
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/LongVectorMath.js
function n8(t8, n11, e10) {
  (e10 = e10 || t8).length = t8.length;
  for (let l9 = 0; l9 < t8.length; l9++) e10[l9] = t8[l9] * n11[l9];
  return e10;
}
function e5(t8, n11, e10) {
  (e10 = e10 || t8).length = t8.length;
  for (let l9 = 0; l9 < t8.length; l9++) e10[l9] = t8[l9] * n11;
  return e10;
}
function l5(t8, n11, e10) {
  (e10 = e10 || t8).length = t8.length;
  for (let l9 = 0; l9 < t8.length; l9++) e10[l9] = t8[l9] + n11[l9];
  return e10;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SphericalHarmonics.js
function l6(t8) {
  return (t8 + 1) * (t8 + 1);
}
function u3(n11) {
  return r3(Math.floor(Math.sqrt(n11) - 1), 0, 2);
}
function m5(t8, n11, o9) {
  const r15 = t8[0], e10 = t8[1], i6 = t8[2], s8 = o9 || [];
  return s8.length = l6(n11), n11 >= 0 && (s8[0] = 0.28209479177), n11 >= 1 && (s8[1] = 0.4886025119 * r15, s8[2] = 0.4886025119 * i6, s8[3] = 0.4886025119 * e10), n11 >= 2 && (s8[4] = 1.09254843059 * r15 * e10, s8[5] = 1.09254843059 * e10 * i6, s8[6] = 0.31539156525 * (3 * i6 * i6 - 1), s8[7] = 1.09254843059 * r15 * i6, s8[8] = 0.54627421529 * (r15 * r15 - e10 * e10)), s8;
}
function p5(t8, n11) {
  const o9 = l6(t8), r15 = n11 || { r: [], g: [], b: [] };
  r15.r.length = r15.g.length = r15.b.length = o9;
  for (let e10 = 0; e10 < o9; e10++) r15.r[e10] = r15.g[e10] = r15.b[e10] = 0;
  return r15;
}
function b7(t8, n11) {
  const o9 = u3(n11.r.length);
  for (const e10 of t8) y2(I2, e10.direction), m5(I2, o9, v6), n8(v6, P2), e5(v6, e10.intensity[0], x5), l5(n11.r, x5), e5(v6, e10.intensity[1], x5), l5(n11.g, x5), e5(v6, e10.intensity[2], x5), l5(n11.b, x5);
  return n11;
}
function y6(t8, n11) {
  m5(I2, 0, v6);
  for (const o9 of t8) n11.r[0] += v6[0] * P2[0] * o9.intensity[0] * 4 * Math.PI, n11.g[0] += v6[0] * P2[0] * o9.intensity[1] * 4 * Math.PI, n11.b[0] += v6[0] * P2[0] * o9.intensity[2] * 4 * Math.PI;
  return n11;
}
function M3(t8, r15, e10, s8) {
  p5(r15, s8), u(e10.intensity, 0, 0, 0);
  let c8 = false;
  const l9 = S4, u6 = d3, m10 = j4;
  l9.length = 0, u6.length = 0, m10.length = 0;
  for (const n11 of t8) n11 instanceof c5 && !c8 ? (o4(e10.direction, n11.direction), o4(e10.intensity, n11.intensity), e10.specularStrength = n11.specularStrength, e10.environmentStrength = n11.environmentStrength, e10.castShadows = n11.castShadows, c8 = true) : n11 instanceof c5 || n11 instanceof r12 ? l9.push(n11) : n11 instanceof i ? u6.push(n11) : n11 instanceof n7 && m10.push(n11);
  b7(l9, s8), y6(u6, s8);
  for (const n11 of m10) l5(s8.r, n11.r), l5(s8.g, n11.g), l5(s8.b, n11.b);
}
var S4 = [];
var d3 = [];
var j4 = [];
var v6 = [0];
var x5 = [0];
var I2 = n2();
var P2 = [3.141593, 2.094395, 2.094395, 2.094395, 0.785398, 0.785398, 0.785398, 0.785398, 0.785398];

// node_modules/@arcgis/core/views/3d/webgl-engine/lighting/SceneLighting.js
var g4 = class {
  constructor() {
    this.color = n2(), this.intensity = 1;
  }
};
var m6 = class {
  constructor() {
    this.direction = n2(), this.ambient = new g4(), this.diffuse = new g4();
  }
};
var l7 = 0.4;
var _3 = class {
  constructor() {
    this._shOrder = 2, this._legacy = new m6(), this.globalFactor = 0.5, this.noonFactor = 0.5, this._sphericalHarmonics = new n7(), this._mainLight = new c5(n2(), r4(1, 0, 0), false);
  }
  get legacy() {
    return this._legacy;
  }
  get sh() {
    return this._sphericalHarmonics;
  }
  get mainLight() {
    return this._mainLight;
  }
  set(i6) {
    M3(i6, this._shOrder, this._mainLight, this._sphericalHarmonics), this.updateLegacy();
  }
  updateLegacy() {
    o4(this._legacy.direction, this._mainLight.direction);
    const i6 = 1 / Math.PI;
    this._legacy.ambient.color[0] = 0.282095 * this._sphericalHarmonics.r[0] * i6, this._legacy.ambient.color[1] = 0.282095 * this._sphericalHarmonics.g[0] * i6, this._legacy.ambient.color[2] = 0.282095 * this._sphericalHarmonics.b[0] * i6, x2(this._legacy.diffuse.color, this._mainLight.intensity, i6), o4(L4, this._legacy.diffuse.color), x2(L4, L4, l7 * this.globalFactor), c3(this._legacy.ambient.color, this._legacy.ambient.color, L4);
  }
  copyFrom(i6) {
    this._sphericalHarmonics.r = Array.from(i6.sh.r), this._sphericalHarmonics.g = Array.from(i6.sh.g), this._sphericalHarmonics.b = Array.from(i6.sh.b), o4(this._mainLight.direction, i6.mainLight.direction), o4(this._mainLight.intensity, i6.mainLight.intensity), this._mainLight.castShadows = i6.mainLight.castShadows, this._mainLight.specularStrength = i6.mainLight.specularStrength, this._mainLight.environmentStrength = i6.mainLight.environmentStrength, this.globalFactor = i6.globalFactor, this.noonFactor = i6.noonFactor;
  }
  lerpLighting(s8, h6, a9) {
    if (I(this._mainLight.intensity, s8.mainLight.intensity, h6.mainLight.intensity, a9), this._mainLight.environmentStrength = o(s8.mainLight.environmentStrength, h6.mainLight.environmentStrength, a9), this._mainLight.specularStrength = o(s8.mainLight.specularStrength, h6.mainLight.specularStrength, a9), o4(this._mainLight.direction, h6.mainLight.direction), this._mainLight.castShadows = h6.mainLight.castShadows, this.globalFactor = o(s8.globalFactor, h6.globalFactor, a9), this.noonFactor = o(s8.noonFactor, h6.noonFactor, a9), s8.sh.r.length === h6.sh.r.length) for (let t8 = 0; t8 < h6.sh.r.length; t8++) this._sphericalHarmonics.r[t8] = o(s8.sh.r[t8], h6.sh.r[t8], a9), this._sphericalHarmonics.g[t8] = o(s8.sh.g[t8], h6.sh.g[t8], a9), this._sphericalHarmonics.b[t8] = o(s8.sh.b[t8], h6.sh.b[t8], a9);
    else for (let i6 = 0; i6 < h6.sh.r.length; i6++) this._sphericalHarmonics.r[i6] = h6.sh.r[i6], this._sphericalHarmonics.g[i6] = h6.sh.g[i6], this._sphericalHarmonics.b[i6] = h6.sh.b[i6];
    this.updateLegacy();
  }
};
var L4 = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShader.js
var t4 = class {
  constructor(t8, o9) {
    this._module = t8, this._load = o9;
  }
  get() {
    return this._module;
  }
  async reload() {
    return this._module = await this._load(), this._module;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js
var i2 = [];
var n9 = [new t3("position", 3, R2.FLOAT, 0, 12)];
var r13 = [new t3("position", 2, R2.FLOAT, 0, 8)];
var s4 = r10(r13);
var p6 = [new t3("position", 2, R2.FLOAT, 0, 12), new t3("uv0", 2, R2.HALF_FLOAT, 8, 12)];
var w5 = [new t3("position", 2, R2.FLOAT, 0, 16), new t3("uv0", 2, R2.FLOAT, 8, 16)];

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Program.js
var e6 = class {
  constructor(e10, i6, s8) {
    this._context = e10, this.locations = s8, this._textures = /* @__PURE__ */ new Map(), this.source = a4() ? i6 : null, i6.attributeNames.forEach((r15) => {
      s8.has(r15) || n.getLogger("esri.views.3d.webgl-engine.lib.Program").error(`Missing VertexAttributeLocation for ${r15} used in shader`);
    }), this._glProgram = e10.programCache.acquire(i6.generate("vertex", true), i6.generate("fragment", true), s8), this._glProgram.stop = () => {
      throw new Error("Wrapped _glProgram used directly");
    }, this.bind = i6.generateBind(this), this.bindPass = i6.generateBindPass(this), this.bindDraw = i6.generateBindDraw(this);
  }
  dispose() {
    this._glProgram.dispose();
  }
  get glName() {
    return this._glProgram.glName;
  }
  get hasTransformFeedbackVaryings() {
    return this._glProgram.hasTransformFeedbackVaryings;
  }
  get compiled() {
    return this._glProgram.compiled;
  }
  setUniform1b(t8, r15) {
    this._glProgram.setUniform1i(t8, r15 ? 1 : 0);
  }
  setUniform1i(t8, r15) {
    this._glProgram.setUniform1i(t8, r15);
  }
  setUniform1f(t8, r15, e10) {
    this._glProgram.setUniform1f(t8, r15, e10);
  }
  setUniform2fv(t8, r15, e10) {
    this._glProgram.setUniform2fv(t8, r15, e10);
  }
  setUniform3fv(t8, r15, e10) {
    this._glProgram.setUniform3fv(t8, r15, e10);
  }
  setUniform4fv(t8, r15, e10) {
    this._glProgram.setUniform4fv(t8, r15, e10);
  }
  setUniformMatrix3fv(t8, r15, e10) {
    this._glProgram.setUniformMatrix3fv(t8, r15, false, e10);
  }
  setUniformMatrix4fv(t8, r15, e10) {
    this._glProgram.setUniformMatrix4fv(t8, r15, false, e10);
  }
  setUniformMatrices4fv(t8, r15, e10) {
    this._glProgram.setUniformMatrices4fv(t8, r15, false, e10);
  }
  setUniform1fv(t8, r15, e10) {
    this._glProgram.setUniform1fv(t8, r15, e10);
  }
  setUniform1iv(t8, r15) {
    this._glProgram.setUniform1iv(t8, r15);
  }
  setUniform2iv(t8, r15) {
    this._glProgram.setUniform2iv(t8, r15);
  }
  setUniform3iv(t8, r15) {
    this._glProgram.setUniform3iv(t8, r15);
  }
  setUniform4iv(t8, r15) {
    this._glProgram.setUniform4iv(t8, r15);
  }
  assertCompatibleVertexAttributeLocations(t8, r15) {
    let e10 = t8.locations;
    if (r15) {
      const t9 = new Map(e10);
      r15.forEach((r16, i6) => t9.set(i6, e10.size + r16)), e10 = t9;
    }
    e10.size !== this.locations.size && console.error(`VertexAttributeLocations are incompatible: ${e10}, ${this.locations}`), this.locations.forEach((t9, r16) => {
      e10.get(r16) !== t9 && console.error(`VertexAttributeLocations are incompatible: Program has ${r16} at position ${t9}, VAO has it at position ${e10.get(r16)}.`);
    });
  }
  stop() {
    this._textures.clear();
  }
  bindTexture(t8, e10) {
    if (!e10?.glName) {
      const i7 = `Texture sampler ${t8} in ${this._context.debugBoundTechnique} has no given Texture in ${new Error().stack}`;
      a4() && console.error(i7), e10 = this._context.emptyTexture;
    }
    const i6 = this._ensureTextureUnit(t8, e10);
    this._context.useProgram(this), this.setUniform1i(t8, i6.unit), this._context.bindTexture(e10, i6.unit);
  }
  _ensureTextureUnit(t8, r15) {
    let e10 = this._textures.get(t8);
    return null == e10 ? (e10 = { texture: r15, unit: this._textures.size }, this._textures.set(t8, e10)) : e10.texture = r15, e10;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js
var d4 = () => n.getLogger("esri.views.3d.webgl.ShaderTechnique");
var g5 = class extends b {
  constructor(e10, i6, r15) {
    super({}), this._context = e10, this._configuration = i6, this.primitiveType = _2.TRIANGLES, this.key = i6.key, this.locations = r10(r15 ?? r13), this._pipeline = this.initializePipeline(i6), this.reload = async (r16) => {
      if (r16 && await this.shader.reload(), !this.key.equals(i6.key)) return void d4().warn(`Configuration was changed after construction, cannot reload shader for ${this.declaredClass}.`);
      r2(this._program);
      const s8 = this.shader.get().build(i6);
      s8.debugName = this.declaredClass, this._program = new e6(e10.rctx, s8, this.locations), this._pipeline = this.initializePipeline(i6);
    };
  }
  initialize() {
    const e10 = this.shader.get().build(this._configuration);
    e10.debugName = this.declaredClass, this._program = new e6(this._context.rctx, e10, this.locations);
  }
  destroy() {
    this._program = r2(this._program), this._pipeline = null;
  }
  get program() {
    return this._program;
  }
  get compiled() {
    return this.program.compiled;
  }
  ensureAttributeLocations(e10) {
    this.program.assertCompatibleVertexAttributeLocations(e10);
  }
  getPipeline(e10, i6) {
    return this._pipeline;
  }
  initializePipeline(e10) {
    return w3({ blending: r11, colorWrite: u2 });
  }
};
function f3(e10, i6) {
  return b5(e10) ? { buffers: [A4] } : i6 ?? null;
}
g5 = __decorate([c("esri.views.3d.webgl-engine.core.shaderTechnique.ShaderTechnique")], g5);

// node_modules/@arcgis/core/views/3d/state/utils/viewUtils.js
function s5(m10, s8, f8) {
  m10.worldUpAtPosition(s8, c6), e4(e7, f8, s8);
  const l9 = a3(e7);
  return 0 === l9 ? 0 : b2(A3(e7, c6) / l9);
}
var c6 = n2();
var e7 = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/fov.js
function t5(t8, a9, n11) {
  return 2 * Math.atan(Math.sqrt(a9 * a9 + n11 * n11) * Math.tan(0.5 * t8) / a9);
}
function a5(t8, a9, n11) {
  return 2 * Math.atan(Math.sqrt(a9 * a9 + n11 * n11) * Math.tan(0.5 * t8) / n11);
}
function n10(t8, a9, n11) {
  return 2 * Math.atan(a9 * Math.tan(0.5 * t8) / Math.sqrt(a9 * a9 + n11 * n11));
}
function r14(t8, a9, n11) {
  return 2 * Math.atan(n11 * Math.tan(0.5 * t8) / Math.sqrt(a9 * a9 + n11 * n11));
}

// node_modules/@arcgis/core/views/3d/webgl/RenderCamera.js
var $;
var tt = $ = class extends b {
  constructor(t8) {
    super(t8), this._ray = b4(), this._viewport = r8(0, 0, 1, 1), this._padding = r8(0, 0, 0, 0), this._fov = 55 / 180 * Math.PI, this._nearFar = r9(1, 1e3), this._viewDirty = true, this._viewMatrix = e3(), this._viewProjectionDirty = true, this._viewProjectionMatrix = e3(), this._viewInverseTransposeMatrixDirty = true, this._viewInverseTransposeMatrix = e3(), this._frustumDirty = true, this._frustum = v4(), this._fullViewport = n4(), this._pixelRatio = 1, this.row = 0, this.column = 0, this._rows = 1, this._columns = 1, this._center = n2(), this._up = n2(), this.relativeElevation = 0;
  }
  get pixelRatio() {
    return this._pixelRatio;
  }
  set pixelRatio(t8) {
    this._pixelRatio = t8 > 0 ? t8 : 1;
  }
  get rows() {
    return this._rows;
  }
  set rows(t8) {
    this._rows = Math.max(1, t8);
  }
  get columns() {
    return this._columns;
  }
  set columns(t8) {
    this._columns = Math.max(1, t8);
  }
  get eye() {
    return this._ray.origin;
  }
  set eye(t8) {
    this._compareAndSetView(t8, this._ray.origin);
  }
  get center() {
    return this._center;
  }
  set center(t8) {
    this._compareAndSetView(t8, this._center, "_center");
  }
  get ray() {
    return e4(this._ray.direction, this.center, this.eye), this._ray;
  }
  get up() {
    return this._up;
  }
  set up(t8) {
    this._compareAndSetView(t8, this._up, "_up");
  }
  get viewMatrix() {
    return this._ensureViewClean(), this._viewMatrix;
  }
  set viewMatrix(t8) {
    n3(this._viewMatrix, t8), this.notifyChange("_viewMatrix"), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get viewForward() {
    return this._ensureViewClean(), u(n2(), -this._viewMatrix[2], -this._viewMatrix[6], -this._viewMatrix[10]);
  }
  get viewUp() {
    return this._ensureViewClean(), u(n2(), this._viewMatrix[1], this._viewMatrix[5], this._viewMatrix[9]);
  }
  get viewRight() {
    return this._ensureViewClean(), u(n2(), this._viewMatrix[0], this._viewMatrix[4], this._viewMatrix[8]);
  }
  get nearFar() {
    return this._nearFar;
  }
  get near() {
    return this._nearFar[0];
  }
  set near(t8) {
    this._nearFar[0] !== t8 && (this._nearFar[0] = t8, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_nearFar"));
  }
  get far() {
    return this._nearFar[1];
  }
  set far(t8) {
    this._nearFar[1] !== t8 && (this._nearFar[1] = t8, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_nearFar"));
  }
  get viewport() {
    return this._viewport;
  }
  set viewport(t8) {
    this.x = t8[0], this.y = t8[1], this.width = t8[2], this.height = t8[3];
  }
  get screenViewport() {
    if (1 === this.pixelRatio) return this._viewport;
    const t8 = m2(n4(), this._viewport, 1 / this.pixelRatio), i6 = this._get("screenViewport");
    return i6 && O(t8, i6) ? i6 : t8;
  }
  get screenPadding() {
    if (1 === this.pixelRatio) return this._padding;
    const t8 = m2(n4(), this._padding, 1 / this.pixelRatio), i6 = this._get("screenPadding");
    return i6 && O(t8, i6) ? i6 : t8;
  }
  get x() {
    return this._viewport[0];
  }
  set x(t8) {
    t8 += this._padding[3], this._viewport[0] !== t8 && (this._viewport[0] = t8, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get y() {
    return this._viewport[1];
  }
  set y(t8) {
    t8 += this._padding[2], this._viewport[1] !== t8 && (this._viewport[1] = t8, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get width() {
    return this._viewport[2];
  }
  set width(t8) {
    this._viewport[2] !== t8 && (this._viewport[2] = t8, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get height() {
    return this._viewport[3];
  }
  set height(t8) {
    this._viewport[3] !== t8 && (this._viewport[3] = t8, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get fullWidth() {
    return this._viewport[2] + this._padding[1] + this._padding[3];
  }
  set fullWidth(t8) {
    this.width = t8 - (this._padding[1] + this._padding[3]);
  }
  get fullHeight() {
    return this._viewport[3] + this._padding[0] + this._padding[2];
  }
  set fullHeight(t8) {
    this.height = t8 - (this._padding[0] + this._padding[2]);
  }
  get fullViewport() {
    return this._fullViewport[0] = this._viewport[0] - this._padding[3], this._fullViewport[1] = this._viewport[1] - this._padding[2], this._fullViewport[2] = this.fullWidth, this._fullViewport[3] = this.fullHeight, this._fullViewport;
  }
  get _aspect() {
    return this.width / this.height;
  }
  get padding() {
    return this._padding;
  }
  set padding(t8) {
    L(this._padding, t8) || (this._viewport[0] += t8[3] - this._padding[3], this._viewport[1] += t8[2] - this._padding[2], this._viewport[2] -= t8[1] + t8[3] - (this._padding[1] + this._padding[3]), this._viewport[3] -= t8[0] + t8[2] - (this._padding[0] + this._padding[2]), r7(this._padding, t8), this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_padding"), this.notifyChange("_viewport"));
  }
  get viewProjectionMatrix() {
    return this._viewProjectionDirty && (c2(this._viewProjectionMatrix, this.projectionMatrix, this.viewMatrix), this._viewProjectionDirty = false), this._viewProjectionMatrix;
  }
  get projectionMatrix() {
    return this._projectionMatrixInternal;
  }
  get inverseProjectionMatrix() {
    return h2(e3(), this.projectionMatrix) || this._get("inverseProjectionMatrix") || e3();
  }
  get fov() {
    return this._fov;
  }
  set fov(t8) {
    this._fov = t8, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovX() {
    return n10(this._fov, this.width, this.height);
  }
  set fovX(t8) {
    this._fov = t5(t8, this.width, this.height), this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovY() {
    return r14(this._fov, this.width, this.height);
  }
  set fovY(t8) {
    this._fov = a5(t8, this.width, this.height), this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get distance() {
    return p3(this.center, this.eye);
  }
  get frustum() {
    return this._recomputeFrustum(), this._frustum;
  }
  get viewInverseTransposeMatrix() {
    return (this._viewInverseTransposeMatrixDirty || this._viewDirty) && (h2(this._viewInverseTransposeMatrix, this.viewMatrix), s3(this._viewInverseTransposeMatrix, this._viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), this._viewInverseTransposeMatrix;
  }
  depthNDCToWorld(t8) {
    const { near: i6, far: e10 } = this;
    return 2 * i6 * e10 / (e10 + i6 - t8 * (e10 - i6));
  }
  get perRenderPixelRatio() {
    return Math.tan(this.fovX / 2) / (this.width / 2);
  }
  get perScreenPixelRatio() {
    return this.perRenderPixelRatio * this.pixelRatio;
  }
  get aboveGround() {
    return null != this.relativeElevation && this.relativeElevation >= 0;
  }
  get _projectionMatrixInternal() {
    const t8 = this.width, i6 = this.height, e10 = this.near * Math.tan(this.fovY / 2) * 2, r15 = e10 * this._aspect, s8 = e10 / this.rows, o9 = r15 / this.columns, n11 = -r15 / 2 + this.column * o9, h6 = n11 + o9, a9 = -e10 / 2 + this.row * s8, p7 = a9 + s8, u6 = A(e3(), n11 * (1 + 2 * this._padding[3] / t8), h6 * (1 + 2 * this._padding[1] / t8), a9 * (1 + 2 * this._padding[2] / i6), p7 * (1 + 2 * this._padding[0] / i6), this.near, this.far), l9 = this._get("projectionMatrix");
    return l9 && C(l9, u6) ? l9 : u6;
  }
  copyFrom(t8) {
    o4(this._ray.origin, t8.eye), this.center = t8.center, this.up = t8.up, r7(this._viewport, t8.viewport), this.notifyChange("_viewport"), r7(this._padding, t8.padding), this.notifyChange("_padding"), r5(this._nearFar, t8.nearFar), this.notifyChange("_nearFar"), this._fov = t8.fov, this.row = t8.row, this.column = t8.column, this.rows = t8.rows, this.columns = t8.columns, this.relativeElevation = t8.relativeElevation;
    const i6 = t8;
    return this._viewDirty = i6._viewDirty, this._viewDirty || (n3(this._viewMatrix, t8.viewMatrix), this.notifyChange("_viewMatrix")), this._viewProjectionDirty = true, this._frustumDirty = i6._frustumDirty, this._frustumDirty || (k2(this._frustum, t8.frustum), this._frustumDirty = false), i6._viewInverseTransposeMatrixDirty ? this._viewInverseTransposeMatrixDirty = true : (n3(this._viewInverseTransposeMatrix, t8.viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), r7(this._fullViewport, t8.fullViewport), this.pixelRatio = t8.pixelRatio, this;
  }
  copyViewFrom(t8) {
    this.eye = t8.eye, this.center = t8.center, this.up = t8.up, this.fov = t8.fov;
  }
  clone() {
    return new $().copyFrom(this);
  }
  equals(t8) {
    return C2(this.eye, t8.eye) && C2(this.center, t8.center) && C2(this.up, t8.up) && L(this._viewport, t8.viewport) && L(this._padding, t8.padding) && E2(this.nearFar, t8.nearFar) && this._fov === t8.fov && this.pixelRatio === t8.pixelRatio && this.relativeElevation === t8.relativeElevation && this.row === t8.row && this.column === t8.column && this.rows === t8.rows && this.columns === t8.columns;
  }
  almostEquals(t8) {
    const i6 = Math.max(1, 1 / this.pixelRatio, 1 / t8.pixelRatio);
    if (Math.abs(t8.fov - this._fov) >= 1e-3 || x(t8.screenPadding, this.screenPadding) >= i6 || x(this.screenViewport, t8.screenViewport) >= i6 || this.row !== t8.row || this.column !== t8.column || this.rows !== t8.rows || this.columns !== t8.columns) return false;
    H(st, t8.eye, t8.center), H(ot, this.eye, this.center);
    const e10 = A3(st, ot), r15 = W(st), s8 = W(ot), o9 = 5e-4;
    return e10 * e10 >= (1 - 1e-10) * r15 * s8 && U(t8.eye, this.eye) < Math.max(r15, s8) * o9 * o9;
  }
  computeRenderPixelSizeAt(t8) {
    return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t8));
  }
  computeRenderPixelSizeAtDist(t8) {
    return t8 * this.perRenderPixelRatio;
  }
  computeScreenPixelSizeAt(t8) {
    return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t8));
  }
  _viewDirectionDistance(t8) {
    return Math.abs(m3(this.viewForward, e4(st, t8, this.eye)));
  }
  computeScreenPixelSizeAtDist(t8) {
    return t8 * this.perScreenPixelRatio;
  }
  computeDistanceFromRadius(t8, i6) {
    return t8 / Math.tan(Math.min(this.fovX, this.fovY) / (2 * (i6 || 1)));
  }
  getScreenCenter(t8 = f()) {
    return t8[0] = (this.padding[3] + this.width / 2) / this.pixelRatio, t8[1] = (this.padding[0] + this.height / 2) / this.pixelRatio, t8;
  }
  getRenderCenter(t8, i6 = 0.5, e10 = 0.5) {
    return t8[0] = this.padding[3] + this.width * i6, t8[1] = this.padding[2] + this.height * e10, t8[2] = 0.5, t8;
  }
  setGLViewport(t8) {
    const i6 = this.viewport, e10 = this.padding;
    t8.setViewport(i6[0] - e10[3], i6[1] - e10[2], i6[2] + e10[1] + e10[3], i6[3] + e10[0] + e10[2]);
  }
  applyProjection(t8, i6) {
    t8 !== et && o4(et, t8), et[3] = 1, z2(et, et, this.projectionMatrix);
    const e10 = Math.abs(et[3]);
    x2(et, et, 1 / e10);
    const s8 = this.fullViewport;
    i6[0] = o(0, s8[0] + s8[2], 0.5 + 0.5 * et[0]), i6[1] = o(0, s8[1] + s8[3], 0.5 + 0.5 * et[1]), i6[2] = 0.5 * (et[2] + 1), i6[3] = e10;
  }
  unapplyProjection(t8, i6) {
    const e10 = this.fullViewport;
    et[0] = (t8[0] / (e10[0] + e10[2]) * 2 - 1) * t8[3], et[1] = (t8[1] / (e10[1] + e10[3]) * 2 - 1) * t8[3], et[2] = (2 * t8[2] - 1) * t8[3], et[3] = t8[3], null != this.inverseProjectionMatrix && (z2(et, et, this.inverseProjectionMatrix), i6[0] = et[0], i6[1] = et[1], i6[2] = et[2]);
  }
  projectToScreen(t8, i6) {
    return this.projectToRenderScreen(t8, nt), this.renderToScreen(nt, i6), i6;
  }
  projectToRenderScreen(t8, i6) {
    if (et[0] = t8[0], et[1] = t8[1], et[2] = t8[2], et[3] = 1, z2(et, et, this.viewProjectionMatrix), 0 === et[3]) return null;
    const e10 = et;
    x2(e10, e10, 1 / Math.abs(et[3]));
    const s8 = this.fullViewport, o9 = o(0, s8[0] + s8[2], 0.5 + 0.5 * e10[0]), n11 = o(0, s8[1] + s8[3], 0.5 + 0.5 * e10[1]);
    return "x" in i6 ? (i6.x = o9, i6.y = n11) : (i6[0] = o9, i6[1] = n11, i6.length > 2 && (i6[2] = 0.5 * (e10[2] + 1))), i6;
  }
  unprojectFromScreen(t8, i6) {
    return this.unprojectFromRenderScreen(this.screenToRender(t8, nt), i6);
  }
  unprojectFromRenderScreen(t8, i6) {
    if (c2(rt, this.projectionMatrix, this.viewMatrix), !h2(rt, rt)) return null;
    const e10 = this.fullViewport;
    return et[0] = 2 * (t8[0] - e10[0]) / e10[2] - 1, et[1] = 2 * (t8[1] - e10[1]) / e10[3] - 1, et[2] = 2 * t8[2] - 1, et[3] = 1, z2(et, et, rt), 0 === et[3] ? null : (i6[0] = et[0] / et[3], i6[1] = et[1] / et[3], i6[2] = et[2] / et[3], i6);
  }
  constrainWindowSize(t8, i6, e10, r15) {
    const s8 = t8 * this.pixelRatio, o9 = i6 * this.pixelRatio, n11 = Math.max(s8 - e10 / 2, 0), h6 = Math.max(this.fullHeight - o9 - r15 / 2, 0), a9 = -Math.min(s8 - e10 / 2, 0), p7 = -Math.min(this.fullHeight - o9 - r15 / 2, 0), u6 = e10 - a9 - -Math.min(this.fullWidth - s8 - e10 / 2, 0), l9 = r15 - p7 - -Math.min(o9 - r15 / 2, 0);
    return [Math.round(n11), Math.round(h6), Math.round(u6), Math.round(l9)];
  }
  computeUp(t8) {
    1 === t8 ? this._computeUpGlobal() : this._computeUpLocal();
  }
  screenToRender(t8, i6) {
    const e10 = t8[0] * this.pixelRatio, r15 = this.fullHeight - t8[1] * this.pixelRatio;
    return i6[0] = e10, i6[1] = r15, i6;
  }
  renderToScreen(t8, i6) {
    const e10 = t8[0] / this.pixelRatio, r15 = (this.fullHeight - t8[1]) / this.pixelRatio;
    i6[0] = e10, i6[1] = r15;
  }
  sphereFrustumCoverage(t8, i6) {
    const { center: e10, eye: r15, distance: s8, fovY: o9 } = this, n11 = Math.abs(Math.PI / 2 - s5(i6, e10, r15));
    return t8.frustumCoverage(n11, s8, o9);
  }
  _computeUpGlobal() {
    e4(st, this.center, this.eye);
    const t8 = a3(this.center);
    t8 < 1 ? C2(this._up, N) && (o4(this._up, N), this._markViewDirty(), this.notifyChange("_up")) : Math.abs(A3(st, this.center)) > 0.9999 * a3(st) * t8 || (P(ot, st, this.center), P(ot, ot, st), _(ot, ot), C2(this._up, ot) || (o4(this._up, ot), this.notifyChange("_up"), this._markViewDirty()));
  }
  _computeUpLocal() {
    G(st, this.eye, this.center), Math.abs(st[2]) <= 0.9999 && (x2(st, st, st[2]), u(st, -st[0], -st[1], 1 - st[2]), _(st, st), C2(this._up, st) || (o4(this._up, st), this.notifyChange("_up"), this._markViewDirty()));
  }
  _compareAndSetView(t8, i6, r15 = "") {
    "number" == typeof t8[0] && isFinite(t8[0]) && "number" == typeof t8[1] && isFinite(t8[1]) && "number" == typeof t8[2] && isFinite(t8[2]) ? C2(t8, i6) || (o4(i6, t8), this._markViewDirty(), r15.length && this.notifyChange(r15)) : n.getLogger("esri.views.3d.webgl-engine.lib.RenderCamera").warn("RenderCamera vector contains invalid number, ignoring value");
  }
  _markViewDirty() {
    this._viewDirty = true, this._frustumDirty = true, this._viewProjectionDirty = true;
  }
  _recomputeFrustum() {
    this._frustumDirty && (y5(this.viewMatrix, this.projectionMatrix, this._frustum), this._frustumDirty = false);
  }
  _ensureViewClean() {
    this._viewDirty && (X(this._viewMatrix, this.eye, this.center, this.up), this.notifyChange("_viewMatrix"), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true);
  }
};
__decorate([a()], tt.prototype, "_viewport", void 0), __decorate([a()], tt.prototype, "_padding", void 0), __decorate([a()], tt.prototype, "_fov", void 0), __decorate([a()], tt.prototype, "_nearFar", void 0), __decorate([a()], tt.prototype, "_viewDirty", void 0), __decorate([a()], tt.prototype, "_viewMatrix", void 0), __decorate([a()], tt.prototype, "_pixelRatio", void 0), __decorate([a()], tt.prototype, "pixelRatio", null), __decorate([a()], tt.prototype, "row", void 0), __decorate([a()], tt.prototype, "column", void 0), __decorate([a()], tt.prototype, "_rows", void 0), __decorate([a()], tt.prototype, "rows", null), __decorate([a()], tt.prototype, "_columns", void 0), __decorate([a()], tt.prototype, "columns", null), __decorate([a()], tt.prototype, "eye", null), __decorate([a()], tt.prototype, "center", null), __decorate([a()], tt.prototype, "_center", void 0), __decorate([a()], tt.prototype, "up", null), __decorate([a()], tt.prototype, "_up", void 0), __decorate([a()], tt.prototype, "viewMatrix", null), __decorate([a({ readOnly: true })], tt.prototype, "viewForward", null), __decorate([a({ readOnly: true })], tt.prototype, "viewUp", null), __decorate([a({ readOnly: true })], tt.prototype, "viewRight", null), __decorate([a({ readOnly: true })], tt.prototype, "nearFar", null), __decorate([a()], tt.prototype, "near", null), __decorate([a()], tt.prototype, "far", null), __decorate([a()], tt.prototype, "viewport", null), __decorate([a({ readOnly: true })], tt.prototype, "screenViewport", null), __decorate([a({ readOnly: true })], tt.prototype, "screenPadding", null), __decorate([a()], tt.prototype, "x", null), __decorate([a()], tt.prototype, "y", null), __decorate([a()], tt.prototype, "width", null), __decorate([a()], tt.prototype, "height", null), __decorate([a()], tt.prototype, "fullWidth", null), __decorate([a()], tt.prototype, "fullHeight", null), __decorate([a({ readOnly: true })], tt.prototype, "_aspect", null), __decorate([a()], tt.prototype, "padding", null), __decorate([a({ readOnly: true })], tt.prototype, "projectionMatrix", null), __decorate([a({ readOnly: true })], tt.prototype, "inverseProjectionMatrix", null), __decorate([a()], tt.prototype, "fov", null), __decorate([a()], tt.prototype, "fovX", null), __decorate([a()], tt.prototype, "fovY", null), __decorate([a()], tt.prototype, "viewInverseTransposeMatrix", null), __decorate([a({ readOnly: true })], tt.prototype, "_projectionMatrixInternal", null), __decorate([a()], tt.prototype, "relativeElevation", void 0), tt = $ = __decorate([c("esri.views.3d.webgl.RenderCamera")], tt);
var it = tt;
var et = n4();
var rt = e3();
var st = n2();
var ot = n2();
var nt = s2();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DepthRange.js
var t6 = class _t {
  constructor(t8 = 1 / 0, r15 = -1 / 0) {
    this.near = t8, this.far = r15;
  }
  set(t8, r15) {
    this.near = t8, this.far = r15;
  }
  union(t8) {
    return null != t8 && (this.near = Math.min(this.near, t8.near), this.far = Math.max(this.far, t8.far)), this;
  }
  within(t8) {
    return this.near <= t8 && t8 <= this.far;
  }
  equals(t8) {
    return this.near === t8.near && this.far === t8.far;
  }
  static {
    this.Zero = new _t(0, 0);
  }
  static {
    this.Infinite = new _t();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js
var e8 = class {
  constructor() {
    this.verticalOffset = 0, this.selectionMode = false, this.hud = true, this.selectOpaqueTerrainOnly = true, this.invisibleTerrain = false, this.backfacesTerrain = true, this.isFiltered = false, this.filteredLayerViewUids = [], this.store = 2, this.normalRequired = true, this.excludeLabels = false;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Intersector.js
var m7 = 1e-5;
var u4 = class {
  constructor(t8) {
    this.options = new e8(), this._results = new _4(), this.transform = new g3(), this.camera = new it(), this.tolerance = m7, this.verticalOffset = null, this._ray = b4(), this._rayEnd = n2(), this._rayBeginTransformed = n2(), this._rayEndTransformed = n2(), this.viewingMode = t8 ?? 1;
  }
  get results() {
    return this._results;
  }
  get ray() {
    return this._ray;
  }
  get rayBegin() {
    return this._ray.origin;
  }
  get rayEnd() {
    return this._rayEnd;
  }
  reset(t8, i6, r15) {
    this.resetWithRay(y4(t8, i6, this._ray), r15);
  }
  resetWithRay(i6, r15) {
    this.camera = r15, i6 !== this._ray && k(i6, this._ray), 0 !== this.options.verticalOffset ? 2 === this.viewingMode ? this._ray.origin[2] -= this.options.verticalOffset : this.verticalOffset = this.options.verticalOffset : this.verticalOffset = null, c3(this._rayEnd, this._ray.origin, this._ray.direction), this._results.init(this._ray);
  }
  intersect(t8 = null, i6, r15, s8, e10) {
    this.point = i6, this.filterPredicate = s8, this.tolerance = r15 ?? m7;
    const n11 = O4(this.verticalOffset);
    if (t8 && t8.length > 0) {
      const i7 = e10 ? (t9) => {
        e10(t9) && this.intersectObject(t9);
      } : (t9) => {
        this.intersectObject(t9);
      };
      for (const r16 of t8) {
        const t9 = r16.getSpatialQueryAccelerator?.();
        null != t9 ? (null != n11 ? t9.forEachAlongRayWithVerticalOffset(this._ray.origin, this._ray.direction, i7, n11) : t9.forEachAlongRay(this._ray.origin, this._ray.direction, i7), this.options.selectionMode && this.options.hud && t9.forEachDegenerateObject(i7)) : r16.objects.forEach((t10) => i7(t10));
      }
    }
    this.sortResults();
  }
  intersectObject(t8) {
    const r15 = t8.geometries;
    if (!r15) return;
    const s8 = t8.effectiveTransformation, e10 = O4(this.verticalOffset);
    for (const n11 of r15) {
      if (!n11.visible) continue;
      const { material: r16, id: a9 } = n11;
      if (!r16.visible) continue;
      this.transform.setAndInvalidateLazyTransforms(s8, n11.transformation), E3(this._rayBeginTransformed, this.rayBegin, this.transform.inverse), E3(this._rayEndTransformed, this.rayEnd, this.transform.inverse);
      const o9 = this.transform.transform;
      null != e10 && (e10.objectTransform = this.transform), r16.intersect(n11, this.transform.transform, this, this._rayBeginTransformed, this._rayEndTransformed, (i6, r17, s9, e11) => this.handleObjectIntersection({ object: t8, geometryId: a9, primitiveIndex: s9 }, i6, r17, o9, e11));
    }
  }
  handleObjectIntersection(t8, i6, r15, s8, e10) {
    if (i6 < 0 || null != this.filterPredicate && !this.filterPredicate(this._ray.origin, this._rayEnd, i6)) return;
    const n11 = e10 ? this._results.hud : this._results;
    t8 = e10 ? new c4(t8, e10) : t8;
    const a9 = e10 ? (s9) => s9.set(1, t8, i6, r15) : (e11) => e11.set(4, t8, i6, r15, s8);
    if ((null == n11.min.distance || i6 < n11.min.distance) && a9(n11.min), 0 !== this.options.store && (null == n11.max.distance || i6 > n11.max.distance) && a9(n11.max), 2 === this.options.store) if (e10) {
      const t9 = new o5(this._ray);
      a9(t9), this._results.hud.all.push(t9);
    } else {
      const t9 = new f2(this._ray);
      a9(t9), this._results.all.push(t9);
    }
  }
  sortResults(t8 = this._results.all) {
    t8.sort((t9, i6) => t9.distance !== i6.distance ? (t9.distance ?? 0) - (i6.distance ?? 0) : t9.drapedLayerOrder !== i6.drapedLayerOrder ? y7(t9.drapedLayerOrder, i6.drapedLayerOrder) : y7(t9.renderPriority, i6.renderPriority));
  }
};
function y7(t8, i6) {
  return (i6 ?? -Number.MAX_VALUE) - (t8 ?? -Number.MAX_VALUE);
}
var _4 = class {
  constructor() {
    this.min = new f2(b4()), this.max = new f2(b4()), this.hud = { min: new o5(b4()), max: new o5(b4()), all: new Array() }, this.ground = new f2(b4()), this.all = [];
  }
  init(t8) {
    this.min.init(t8), this.max.init(t8), this.ground.init(t8), this.all.length = 0, this.hud.min.init(t8), this.hud.max.init(t8), this.hud.all.length = 0;
  }
};

// node_modules/@arcgis/core/views/3d/camera/intersectionUtils.js
var H2 = n2();
var R4 = n2();
var j5 = n2();

// node_modules/@arcgis/core/geometry/support/polygonExtentClipping.js
function e9(t8, n11) {
  const r15 = [], e10 = [];
  return c7(r15, t8, n11, 0), c7(e10, r15, n11, 1), c7(r15, e10, n11, 2), c7(e10, r15, n11, 3), e10;
}
function c7(t8, r15, e10, c8) {
  const f8 = s6(e10, c8);
  if (t8.length = 0, r15.length) {
    1 === f8(i3, r15[0], r15[0]) && o6(t8, r15[0]);
    for (let e11 = 0; e11 < r15.length; e11++) {
      const c9 = r15[e11 === r15.length - 1 ? 0 : e11 + 1];
      switch (f8(i3, r15[e11], c9)) {
        case 1:
          o6(t8, c9);
          break;
        case 3:
          o6(t8, t2(i3));
          break;
        case 2:
          o6(t8, t2(i3)), o6(t8, c9);
      }
    }
  }
}
function o6(n11, r15) {
  0 !== n11.length && T(n11.at(-1), r15) || n11.push(r15);
}
function s6(t8, n11) {
  const r15 = 0 === n11 || 2 === n11 ? 0 : 1, e10 = t8[n11], c8 = 0 === n11 || 1 === n11 ? 1 : -1, o9 = 0 === r15 ? 1 : 0;
  return (t9, n12, s8) => {
    if (n12[r15] < e10 && s8[r15] < e10) return 1 === c8 ? 0 : 1;
    if (n12[r15] > e10 && s8[r15] > e10) return 1 === c8 ? 1 : 0;
    const i6 = (s8[o9] - n12[o9]) / (s8[r15] - n12[r15]), f8 = n12[o9] + i6 * (e10 - n12[r15]);
    return t9[r15] = e10, t9[o9] = f8, (n12[r15] < e10 ? 1 : -1) * c8 > 0 ? 2 : 3;
  };
}
var i3 = n5();

// node_modules/@arcgis/core/views/3d/support/cameraUtilsInternal.js
var f4 = n2();
var u5 = n2();
function g6() {
  return { direction: n2(), up: n2() };
}
function h5(l9, a9, p7, g8, h6) {
  let j8 = _(f4, l9), b10 = A3(j8, g8);
  const d6 = b10 > 0;
  b10 = Math.abs(b10), b10 > 0.99 && (b10 = Math.abs(A3(a9, g8)), b10 < 0.99 ? (o4(j8, a9), d6 && x2(j8, j8, -1)) : j8 = null);
  let x6 = 0;
  if (j8) {
    x2(u5, g8, A3(g8, j8)), e4(j8, j8, u5);
    const r15 = A3(j8, h6) / (a3(j8) * a3(h6));
    P(u5, j8, h6);
    x6 = (A3(u5, g8) > 0 ? 1 : -1) * M(b2(r15));
  }
  const v9 = M(b2(-A3(g8, l9) / a3(l9)));
  return p7 ? (p7.heading = x6, p7.tilt = v9, p7) : { heading: x6, tilt: v9 };
}
function j6(t8, o9, r15, e10) {
  e4(b8, r15, o9), L2(e10, m4(o9, b8), t8) || t8 === r15 || o4(t8, r15);
}
var b8 = n2();

// node_modules/@arcgis/core/chunks/cameraUtilsPlanar.js
var v8 = r4(0, 1, 0);
var A6 = r4(0, 0, 1);
var w7 = e3();
var C3 = n2();
var E4 = n2();
function H3(t8, i6, n11, a9 = g6()) {
  const { direction: m10, up: l9 } = a9;
  return R(w7, -s(i6)), l4(w7, w7, s(n11)), E3(m10, A6, w7), x2(m10, m10, -1), E3(l9, v8, w7), a9;
}
function U3(e10, t8, r15, o9) {
  return h5(t8, r15, o9, A6, v8);
}
function V2(e10, t8, r15, o9) {
  const i6 = H3(e10, r15, o9), n11 = n2();
  return x2(n11, i6.direction, -t8), c3(n11, n11, e10), { up: i6.up, eye: n11, heading: r15, tilt: o9 };
}
function _5(e10) {
  return M(e10);
}
function P3(t8) {
  return s(t8);
}
function S5(e10, t8, r15, o9, i6) {
  const n11 = e10.renderSpatialReference, s8 = e10.spatialReference ?? t8.spatialReference;
  return n6(t8, C3, n11), n6(t8, E4, n11), C3[0] -= r15 / 2, E4[0] += r15 / 2, C3[1] -= o9 / 2, E4[1] += o9 / 2, p4(C3, n11, C3, s8), p4(E4, n11, E4, s8), i6 ? (i6.xmin = C3[0], i6.ymin = C3[1], i6.xmax = E4[0], i6.ymax = E4[1], i6.spatialReference = s8) : i6 = new z(C3[0], C3[1], E4[0], E4[1], s8), i6;
}
function k3(e10, t8) {
  const r15 = e10.frustum, { renderCoordsHelper: o9 } = e10, i6 = o9.getAltitude(t8), s8 = e10.spatialReference, a9 = e10.state.camera.eye, c8 = [], m10 = r15.planes[5];
  for (let l9 = 0; l9 < 4; l9++) {
    const e11 = r15.lines[l9];
    o9.intersectInfiniteManifold(v3(e11.origin, e11.direction), i6, O5) || I3(O5, r15, o9, e11.endpoint, i6), j6(O5, a9, O5, m10), c8.push(r9(O5[0], O5[1]));
  }
  return M4(e9(c8, o9.extent), o9, s8);
}
function I3(e10, t8, r15, o9, i6) {
  const n11 = t8.lines[11].direction, s8 = (i6 - r15.getAltitude(o9)) / n11[2];
  g2(e10, o9, n11, s8);
}
function M4(e10, t8, r15) {
  const o9 = e10.map((e11) => (u(O5, e11[0], e11[1], 0), t8.fromRenderCoords(O5, O5, r15), [O5[0], O5[1]]));
  return o9.length <= 2 ? new j2({ spatialReference: r15 }) : (o9.push(o9[0].slice()), g(o9) || o9.reverse(), new j2({ rings: [o9], spatialReference: r15 }));
}
var O5 = n2();
var z4 = Object.freeze(Object.defineProperty({ __proto__: null, directionToHeadingTilt: U3, eyeForCenterWithHeadingTilt: V2, eyeTiltToLookAtTilt: P3, headingTiltToDirectionUp: H3, lookAtTiltToEyeTilt: _5, toArea: k3, toExtent: S5 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/views/3d/state/Frustum.js
var f5 = class {
  get planes() {
    return this.frustum;
  }
  get points() {
    return this._points;
  }
  get mutablePoints() {
    return this._points;
  }
  get direction() {
    return this._direction;
  }
  get origin() {
    return this._origin;
  }
  get boundingSphere() {
    return this._boundingSphereDirty && this._updateBoundingSphere(), this._boundingSphere;
  }
  constructor(t8) {
    this.renderCoordsHelper = t8, this.frustum = v4(), this._points = h4(), this.lines = new Array(12), this._origin = n2(), this._direction = n2(), this._boundingSphere = new w(), this._altitude = null, this._boundingSphereDirty = true;
    for (let i6 = 0; i6 < 12; i6++) this.lines[i6] = { origin: null, direction: n2(), endpoint: null };
  }
  update(i6) {
    y5(i6.viewMatrix, i6.projectionMatrix, this.frustum, this._points), o4(this._origin, i6.eye), o4(this._direction, i6.viewForward), this._altitude = this.renderCoordsHelper.getAltitude(this._origin), this._updateLines(), this._boundingSphereDirty = true;
  }
  updatePoints(i6) {
    for (let e10 = 0; e10 < this._points.length; e10++) o4(this._points[e10], i6[e10]);
    S2(this.frustum, this._points), this._updateLines();
  }
  get altitude() {
    return this._altitude;
  }
  intersectsSphere(t8) {
    return d(this.frustum, t8);
  }
  intersectsRay(t8) {
    return w2(this.frustum, t8);
  }
  intersectsLineSegment(t8, i6) {
    return R3(this.frustum, t8, i6);
  }
  intersectsPoint(t8) {
    return q(this.frustum, t8);
  }
  _updateLines() {
    const t8 = this._points;
    for (let i6 = 0; i6 < 4; i6++) {
      const e10 = i6 + 4;
      S6(this.lines[i6], t8[i6], t8[e10]), S6(this.lines[i6 + 4], t8[i6], 3 === i6 ? t8[0] : t8[i6 + 1]), S6(this.lines[i6 + 8], t8[e10], 3 === i6 ? t8[4] : t8[e10 + 1]);
    }
  }
  _updateBoundingSphere() {
    const { origin: t8 } = this, n11 = y8;
    _(n11, this.direction);
    const o9 = b9;
    H(o9, this.points[4], t8);
    const h6 = 0.5 * A3(o9, o9) / A3(n11, o9), u6 = this._boundingSphere, p7 = g2(j7, t8, n11, h6);
    u6.center = p7, u6.radius = h6;
  }
  static {
    this.planePointIndices = A5;
  }
  static {
    this.nearFarLineIndices = [[0, 4], [1, 5], [2, 6], [3, 7]];
  }
};
function S6(t8, i6, e10) {
  t8.origin = i6, t8.endpoint = e10, G(t8.direction, i6, e10);
}
var b9 = n2();
var y8 = n2();
var j7 = n2();

// node_modules/@arcgis/core/views/3d/environment/atmosphereUtils.js
var t7 = 1e5;
var i4 = 1e6 - t7;
var m8 = r4(5802e-9, 13558e-9, 331e-7);
var s7 = 3;
var f6 = r4(65e-8 * s7, 1881e-9 * s7, 85e-9 * s7);
var a6 = r4(m8[0] + f6[0], m8[1] + f6[1], m8[2] + f6[2]);

// node_modules/@arcgis/core/views/3d/state/NearFarHeuristic.js
var D = 2;
var z5 = n2();
var I4 = n2();
var U4 = new w();
var A7 = b4();
var V3 = new z({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0 });

// node_modules/@arcgis/core/views/3d/support/earthUtils.js
function l8(e10, r15, u6) {
  const i6 = r15 / u6, s8 = s(e10), l9 = Math.sin(i6 / 2), a9 = Math.cos(s8), c8 = 2 * l3(Math.sqrt(l9 * l9 / (a9 * a9)));
  return M(c8);
}

// node_modules/@arcgis/core/chunks/cameraUtilsSpherical.js
var Y = r4(0, 0, 1);
var Z2 = _(n2(), r4(1, 1, 1));
var $2 = e3();
var ee = n2();
var te = n2();
function re2(e10, r15, o9, s8 = g6()) {
  P(ee, e10, Y), 0 === A3(ee, ee) && P(ee, e10, Z2), p($2, -s(r15), e10), b3($2, $2, -s(o9), ee);
  const { up: n11, direction: c8 } = s8;
  return P(n11, ee, e10), _(n11, n11), E3(n11, n11, $2), _(c8, e10), y2(c8, c8), E3(c8, c8, $2), s8;
}
function oe(e10, t8, r15, o9) {
  const s8 = ee, n11 = te;
  return _(s8, e10), P(te, s8, Y), 0 === A3(te, te) && P(te, s8, Z2), P(n11, te, s8), h5(t8, r15, o9, s8, n11);
}
function se(e10, r15, s8, n11) {
  const i6 = { eye: n2(), up: null, tilt: n11, heading: s8 }, a9 = ee;
  a9[0] = e10[0], a9[1] = e10[2], a9[2] = -e10[1];
  const c8 = r15, l9 = s(s8), m10 = s(n11), p7 = Math.sin(l9), h6 = Math.cos(l9), g8 = Math.sin(m10), y9 = Math.cos(m10), d6 = a3(a9);
  let M5;
  if (Math.abs(m10) < 1e-8) M5 = c8 + d6;
  else {
    const e11 = d6 / g8, t8 = l3(c8 / e11), r16 = Math.PI - m10 - t8;
    M5 = e11 * Math.sin(r16);
  }
  const j8 = y9 * c8, b10 = c8 * c8 * (g8 * g8), x6 = h6 * h6 * b10, T3 = M5 - j8, w8 = T3 * T3, C4 = x6 * (x6 + w8 - a9[1] * a9[1]);
  if (C4 < 0) return x2(i6.eye, a9, M5 / d6), i6.tilt = 0, ie(i6, e10);
  const R5 = Math.sqrt(C4), S8 = a9[1] * T3, U5 = x6 + w8;
  let P4;
  if (P4 = h6 > 0 ? -R5 + S8 : R5 + S8, Math.abs(U5) < 1e-8) return d6 < 1e-8 ? (i6.eye[0] = 0, i6.eye[1] = 0, i6.eye[2] = c8) : x2(i6.eye, a9, M5 / d6), i6.tilt = 0, ne(i6.eye), ie(i6, e10);
  i6.eye[1] = P4 / U5;
  const H4 = p7 * p7 * b10, I6 = g8 * c8, q3 = h6 * I6 * i6.eye[1], A9 = i6.eye[1] * i6.eye[1], E5 = 1 - A9, k4 = Math.sqrt(E5), F = x6 * A9 + H4 - 2 * q3 * k4 * T3 + E5 * w8;
  return Math.abs(F) < 1e-8 ? (x2(i6.eye, a9, M5 / d6), i6.tilt = 0, ne(i6.eye), ie(i6, e10)) : (i6.eye[0] = (E5 * (M5 * a9[0] - j8 * a9[0]) - I6 * k4 * (a9[0] * i6.eye[1] * h6 + a9[2] * p7)) / F, i6.eye[2] = (E5 * (M5 * a9[2] - j8 * a9[2]) - I6 * k4 * (a9[2] * i6.eye[1] * h6 - a9[0] * p7)) / F, x2(i6.eye, i6.eye, M5), ne(i6.eye), ie(i6, e10));
}
function ne(e10) {
  const t8 = e10[1];
  e10[1] = -e10[2], e10[2] = t8;
}
function ie(e10, t8) {
  const r15 = re2(t8, e10.heading, e10.tilt);
  return e10.up = r15.up, e10;
}
function ae(e10, t8, s8) {
  const n11 = a3(t8), i6 = Math.sqrt(s8 * s8 + n11 * n11 - 2 * s8 * n11 * Math.cos(Math.PI - e10)), a9 = l3(s8 / (i6 / Math.sin(e10)));
  return M(e10 - a9);
}
function ce(e10, r15, s8) {
  const n11 = s(e10), i6 = a3(r15);
  return l3(s8 / (i6 / Math.sin(n11))) + n11;
}
function le(o9, s8, n11, i6, a9) {
  let c8, l9, m10, p7;
  const u6 = s8.latitude, f8 = E(o9.spatialReference).radius, h6 = s8.longitude, g8 = l8(u6, n11, f8) / 2;
  c8 = h6 - g8, l9 = h6 + g8;
  const y9 = s(u6), d6 = (1 + Math.sin(y9)) / (1 - Math.sin(y9)), M5 = (d6 + 1) * Math.tan(i6 / f8 / 2), j8 = M5 * M5;
  function b10(t8) {
    const r15 = Math.PI / 2;
    return (t8 = r6.normalize(t8, -r15)) > r15 && (t8 = Math.PI - t8), t8;
  }
  if (m10 = 1.5 * Math.PI - 2 * Math.atan(0.5 * (M5 + Math.sqrt(4 * d6 + j8))), p7 = m10 + i6 / f8, m10 = b10(m10), p7 = b10(p7), p7 < m10) {
    const e10 = p7;
    p7 = m10, m10 = e10;
  }
  if (m10 = Math.max(M(m10), -90), p7 = Math.min(M(p7), 90), l9 = A2.monotonic(c8, l9), l9 - c8 > 180) {
    const e10 = (l9 - c8 - 180) / 2;
    c8 += e10, l9 -= e10;
  }
  const x6 = o9.spatialReference && o9.spatialReference.isGeographic ? o9.spatialReference : S.WGS84;
  return a9 ? (a9.xmin = c8, a9.ymin = m10, a9.xmax = l9, a9.ymax = p7, a9.spatialReference = x6) : a9 = new z(c8, m10, l9, p7, x6), o9.spatialReference && o9.spatialReference.isWebMercator && j(a9, false, a9), a9;
}
function me(e10, t8) {
  const { renderCoordsHelper: r15 } = e10, o9 = e10.state.camera.clone(), i6 = new f5(r15);
  o9.near = D, i6.update(o9);
  const a9 = r15.getAltitude(t8), c8 = e10.spatialReference, l9 = r15.referenceEllipsoid.radius, m10 = o9.eye, p7 = 1 + p3(m10, t8) / (l9 + a9), u6 = Math.sqrt(p7 * p7 - 1), { minCurvature: f8, maxCurvature: h6, minSamples: g8, maxSamples: j8 } = ge, v9 = he(e10), T3 = r3((u6 - f8) / (h6 - f8), 0, 1), R5 = Math.round(o(g8, j8, T3)), S8 = o9.aboveGround, U5 = i6.planes[5], P4 = [], I6 = U2(a2, ye, v()), q3 = U2(a2, de, v());
  o3(Te, 0, 0, 0, 0);
  const A9 = (e11) => {
  };
  for (let n11 = 0; n11 < 4; n11++) {
    const e11 = 1 === n11 && !S8 || 3 === n11 && S8 ? 1 - v9 : 0, t9 = 1 === n11 && S8 || 3 === n11 && !S8 ? v9 : 1, o10 = i6.lines[n11], c9 = i6.lines[3 === n11 ? 0 : n11 + 1];
    for (let i7 = 0; i7 < R5; i7++) {
      const l10 = i7 / R5, p8 = 0 === i7 ? 0 : o(e11, t9, 1 === n11 ? 1 - (1 - l10) ** 2 : 3 === n11 ? l10 ** 2 : l10), u7 = I(je, o10.origin, c9.origin, p8), f9 = x3(o10.direction, c9.direction, p8, Me);
      r15.intersectManifoldClosestSilhouette(v3(u7, f9), a9, be), j6(be, m10, be, U5), P4.push(t(be)), 0 !== P4.length && A9(U(P4.at(-1), be));
      const h7 = (O2(I6, be) ? 1 : 0) | (O2(q3, be) ? 2 : 0);
      Te[h7] = 1;
    }
  }
  P4.length > 2 && A9(U(P4[0], P4.at(-1)));
  const E5 = pe(p2(Te) > 1 ? ue(fe(P4, I6), q3) : [P4], r15, c8);
  return new j2({ rings: E5, spatialReference: c8 });
}
function pe(e10, t8, r15) {
  const o9 = 2 * e();
  return e10.map((e11) => {
    const s8 = [];
    let n11 = false;
    for (const i6 of e11) t8.fromRenderCoords(i6, be, r15), Math.abs(i6[0]) < o9 && Math.abs(i6[1]) < o9 ? (s8.push([null, be[1]]), s8.push([null, be[1]]), n11 = true) : s8.push([be[0], be[1]]);
    if (n11) for (let t9 = 0; t9 < s8.length; t9++) {
      const e12 = s8[t9];
      if (null != e12[0]) continue;
      const r16 = s8[t9 + 1], o10 = s8.at(0 === t9 ? -1 : t9 - 1);
      e12[0] = o10[0], t9++;
      const n12 = s8.at(t9 === s8.length - 1 ? 0 : t9 + 1);
      r16[0] = n12[0];
    }
    return s8.push(s8[0]), g(s8) || s8.reverse(), s8;
  });
}
function ue(e10, t8) {
  const r15 = [];
  for (const o9 of e10) r15.push(...fe(o9, t8));
  return r15;
}
function fe(e10, t8) {
  const r15 = [], o9 = [], s8 = e();
  for (let i6 = 0; i6 < e10.length; i6++) {
    const n12 = e10[i6], a9 = i6 === e10.length - 1 ? e10[0] : e10[i6 + 1], c8 = h3(n12, a9, ve), l9 = Z(t8, c8.origin, c8.vector, 0, be);
    switch (l9) {
      case 2:
        r15.push(n12);
        break;
      case 3:
        o9.push(n12);
        break;
      case 0:
      case 1: {
        const [e11, i7, a10] = 0 === l9 ? [1, r15, o9] : [-1, o9, r15], c9 = y3(t8), m10 = g2(n2(), be, c9, e11 * s8), p7 = g2(n2(), be, c9, e11 * -s8);
        i7.push(n12), i7.push(m10), a10.push(p7);
      }
    }
  }
  const n11 = [];
  return r15.length && n11.push(r15), o9.length && n11.push(o9), n11;
}
function he(e10) {
  const { renderCoordsHelper: t8, state: r15 } = e10, o9 = Math.abs(t8.getAltitude(r15.camera.center));
  return xe.radius = t8.referenceEllipsoid.radius + o9, r15.camera.sphereFrustumCoverage(xe, t8);
}
var ge = { minCurvature: s(5), maxCurvature: s(50), minSamples: 1, maxSamples: 6 };
var ye = r4(1, 0, 0);
var de = r4(0, 1, 0);
var Me = n2();
var je = n2();
var be = n2();
var xe = new w();
var ve = v2();
var Te = n4();
var we = Object.freeze(Object.defineProperty({ __proto__: null, directionToHeadingTilt: oe, eyeForCenterWithHeadingTilt: se, eyeTiltToLookAtTilt: ce, headingTiltToDirectionUp: re2, lookAtTiltToEyeTilt: ae, toArea: me, toExtent: le }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/views/3d/webgl.js
var A8 = { OPAQUE: "opaque-color", TRANSPARENT: "transparent-color", COMPOSITE: "composite-color", FINAL: "final-color" };
var g7 = { ANTIALIASING: "aa-color", CUTFILL_COLOR: "cutfill-color", CUTFILL_DEPTH: "cutfill-depth", FOCUSAREA_COLOR: "focusarea-color", FOCUSAREA: "focusarea", GAUSSIAN_SPLAT: "gaussian-splat", HIGHLIGHTS: "highlight-color", LASERLINES: "laserline-color", MAGNIFIER: "magnifier-color", OCCLUDED: "occluded-color", OPAQUE_ENVIRONMENT: "opaque-environment-color", OPAQUE_TERRAIN: "opaque-terrain-color", SSAO: "ssao", TRANSPARENT_ENVIRONMENT: "transparent-environment-color", VIEWSHED: "viewshed-color" };
var I5 = n2();

// node_modules/@arcgis/core/views/3d/webgl/RenderNode.js
var a8 = class extends b {
  constructor(e10) {
    super(e10), this.view = null, this.consumes = { required: [] }, this.produces = A8.COMPOSITE, this.requireGeometryDepth = false, this._dirty = true;
  }
  initialize() {
    this.addHandles([l(() => this.view.ready, (e10) => {
      e10 && this.view.stage?.renderer.addRenderNode(this);
    }, h)]);
  }
  destroy() {
    this.view.stage?.renderer?.removeRenderNode(this);
  }
  precompile() {
  }
  render() {
    throw new r("RenderNode:render-function-not-implemented", "render() is not implemented.");
  }
  get camera() {
    return this.view.state.camera.clone();
  }
  get sunLight() {
    return this.bindParameters.lighting.legacy;
  }
  get gl() {
    return this.view.stage.renderView.renderingContext.gl;
  }
  get techniques() {
    return this.view.stage.renderView.techniques;
  }
  acquireOutputFramebuffer() {
    const e10 = this._frameBuffer?.getTexture()?.descriptor, r15 = this.view.stage.renderer.fboCache.acquire(e10?.width ?? 640, e10?.height ?? 480, this.produces);
    return r15.fbo?.initializeAndBind(), r15;
  }
  bindRenderTarget() {
    return this._frameBuffer?.fbo?.initializeAndBind(), this._frameBuffer;
  }
  requestRender(e10) {
    switch (e10) {
      case 2:
        this.view.state.fading = true;
      case 1:
        this.view.stage?.renderView.requestRender(e10);
      case 0:
      case void 0:
        this._dirty = true;
    }
  }
  resetWebGLState() {
    this.renderingContext.resetState(), this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo);
  }
  get fboCache() {
    return this.view.stage.renderer.fboCache;
  }
  get bindParameters() {
    return this.renderContext.bind;
  }
  get renderingContext() {
    return this.view.stage.renderView.renderingContext;
  }
  get renderContext() {
    return this.view.stage?.renderer.renderContext;
  }
  updateAnimation(e10) {
    return !!this._dirty && (this._dirty = false, true);
  }
  doRender(e10) {
    this._frameBuffer = e10.find(({ name: e11 }) => e11 === this.produces);
    try {
      return this.render(e10);
    } finally {
      this._frameBuffer = null;
    }
  }
};
__decorate([m({ constructOnly: true })], a8.prototype, "view", void 0), __decorate([m({ constructOnly: true })], a8.prototype, "consumes", void 0), __decorate([m()], a8.prototype, "produces", void 0), __decorate([m({ readOnly: true })], a8.prototype, "techniques", null), a8 = __decorate([l2("esri.views.3d.webgl.RenderNode")], a8);

export {
  O4 as O,
  t4 as t,
  i2 as i,
  g5 as g,
  f3 as f,
  it,
  u4 as u,
  t6 as t2,
  g7 as g2,
  a8 as a,
  i as i2,
  l7 as l,
  _3 as _
};
//# sourceMappingURL=chunk-NR2AFGUW.js.map
