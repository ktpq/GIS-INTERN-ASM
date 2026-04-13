import {
  O,
  r,
  r2,
  u as u2
} from "./chunk-7RAWFBKH.js";
import {
  ye
} from "./chunk-RT42MRFR.js";
import {
  g
} from "./chunk-RNSOC4NC.js";
import {
  A,
  I,
  J,
  M as M2,
  j as j2,
  rt
} from "./chunk-D2Z2HLWL.js";
import {
  s as s2
} from "./chunk-VJCO7ZMT.js";
import {
  e
} from "./chunk-YSGX52WP.js";
import {
  i as i4
} from "./chunk-WGYRGOG2.js";
import {
  o as o2
} from "./chunk-3EE7FDFG.js";
import {
  a,
  i as i3,
  u
} from "./chunk-WOCPFOF3.js";
import {
  n as n2
} from "./chunk-47CFN4JI.js";
import {
  c
} from "./chunk-E4TLNY2F.js";
import {
  i
} from "./chunk-LQMHYEKG.js";
import {
  n,
  s
} from "./chunk-IO7CXLQO.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  i as i2
} from "./chunk-PWZ6VVYN.js";
import {
  m
} from "./chunk-SH72BZH2.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  o,
  re
} from "./chunk-NR66QFNF.js";
import {
  t
} from "./chunk-FZD4GVUW.js";
import {
  M
} from "./chunk-253Z6EVN.js";
import {
  has
} from "./chunk-6I475YAP.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/features/FeatureSpatialIndex.js
var n3 = class _n {
  static fromReader(s5) {
    const o8 = [], r9 = s5.copy(), i8 = i2();
    for (; r9.next(); ) {
      r9.getBounds(i8) && o8.push(r9.getIndex());
    }
    const m2 = i4(9, (s6) => (r9.setIndex(s6), { minX: r9.getBoundsXMin(), minY: r9.getBoundsYMin(), maxX: r9.getBoundsXMax(), maxY: r9.getBoundsYMax() }));
    return m2.load(o8), new _n(m2, o8.length);
  }
  constructor(s5, t5) {
    this._index = s5, this._size = t5;
  }
  get usedMemory() {
    return this._size * n;
  }
  search(s5) {
    const t5 = { minX: s5[0], minY: s5[1], maxX: s5[2], maxY: s5[3] };
    return this._index.search(t5);
  }
};

// node_modules/@arcgis/core/geohash/geohashUtils.js
var p = n2();
var g2 = n2();
var S2 = 64;
function b(t5, o8, r9, c4) {
  const l3 = [t5.xmin, t5.ymin, t5.xmax, t5.ymax], a4 = j.fromExtent(m(l3, c4)), u4 = g(a4, c4, S.WGS84, { extendedParams: { densificationStep: o8 * S2 } });
  if (!u4) return null;
  const h3 = A(u4, false, false), m2 = h3.coords.filter((t6, o9) => !(o9 % 2)), p2 = h3.coords.filter((t6, o9) => o9 % 2), g3 = Math.min(...m2), x = Math.min(...p2), d5 = Math.max(...m2), y = Math.max(...p2), M3 = v(g3, x, r9, S.WGS84), j3 = v(d5, y, r9, S.WGS84);
  return M3 && j3 ? { bounds: l3, geohashBounds: { xLL: M3[0], yLL: M3[1], xTR: j3[0], yTR: j3[1] }, level: r9 } : null;
}
function v(o8, r9, n9, s5) {
  if (s5.isWebMercator) {
    const e3 = M(o8 / t.radius), s6 = e3 - 360 * Math.floor((e3 + 180) / 360), i9 = [0, 0];
    return B(i9, 0, M(Math.PI / 2 - 2 * Math.atan(Math.exp(-r9 / t.radius))), s6, n9), i9;
  }
  const i8 = g({ x: o8, y: r9 }, s5, S.WGS84);
  if (!i8) return null;
  const l3 = [0, 0];
  return B(l3, 0, i8.y, i8.x, n9), l3;
}
function X(t5, o8) {
  let r9 = -90, n9 = 90, e3 = -180, s5 = 180;
  for (let c4 = 0; c4 < o8; c4++) {
    const o9 = Math.ceil((c4 + 1) / 2), i8 = Math.floor((c4 + 1) / 2), f = 1 - c4 % 2, l3 = 30 - (3 * o9 + 2 * i8), a4 = 30 - (2 * o9 + 3 * i8), u4 = 3 * f + 2 * (1 - f), h3 = 2 * f + 3 * (1 - f), m2 = 3 * f + 7 * (1 - f) << a4, p2 = (7 * f + 3 * (1 - f) << l3 & t5.geohashX) >> l3, g3 = (m2 & t5.geohashY) >> a4;
    for (let t6 = u4 - 1; t6 >= 0; t6--) {
      const o10 = (e3 + s5) / 2, r10 = p2 & 1 << t6 ? 1 : 0;
      e3 = (1 - r10) * e3 + r10 * o10, s5 = (1 - r10) * o10 + r10 * s5;
    }
    for (let t6 = h3 - 1; t6 >= 0; t6--) {
      const o10 = (r9 + n9) / 2, e4 = g3 & 1 << t6 ? 1 : 0;
      r9 = (1 - e4) * r9 + e4 * o10, n9 = (1 - e4) * o10 + e4 * n9;
    }
  }
  return [e3, r9, s5, n9];
}
function B(t5, o8, r9, n9, e3) {
  e3 % 2 && (e3 += 1);
  let s5 = 0, c4 = 0, i8 = -90, f = 90, l3 = -180, a4 = 180;
  for (let u4 = 0; u4 < e3 / 2; u4++) {
    for (let t6 = 0; t6 < 5; t6++) {
      const o9 = (l3 + a4) / 2, r10 = n9 > o9 ? 1 : 0;
      s5 |= r10 << 29 - (t6 + 5 * u4), l3 = (1 - r10) * l3 + r10 * o9, a4 = (1 - r10) * o9 + r10 * a4;
    }
    for (let t6 = 0; t6 < 5; t6++) {
      const o9 = (i8 + f) / 2, n10 = r9 > o9 ? 1 : 0;
      c4 |= n10 << 29 - (t6 + 5 * u4), i8 = (1 - n10) * i8 + n10 * o9, f = (1 - n10) * o9 + n10 * f;
    }
  }
  t5[2 * o8] = s5, t5[2 * o8 + 1] = c4;
}

// node_modules/@arcgis/core/views/2d/layers/features/aggregation/AAggregateCell.js
var t2 = class {
  constructor(t5) {
    this._statistics = t5;
  }
  get statistics() {
    return this._statistics;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/aggregation/AccumulatedStatistics.js
var s3 = Math.PI / 180;
var i5 = class _i {
  static create(t5) {
    return new _i(t5.map((t6) => n4(t6)));
  }
  constructor(t5) {
    this._statistics = t5;
  }
  static get estimatedMemory() {
    return s + 4 * s;
  }
  values() {
    return this._statistics.values();
  }
  insert(t5, e3) {
    for (const s5 of this._statistics) s5.insert(t5, e3);
  }
  merge(t5) {
    for (let e3 = 0; e3 < this._statistics.length; e3++) {
      const s5 = this._statistics[e3], i8 = t5._statistics[e3];
      if (s5.field.name !== i8.field.name) throw new Error("InternalError: Tried to merge incompatible statistics");
      s5.merge(i8);
    }
  }
  clone() {
    return new _i(this._statistics.map((t5) => t5.clone()));
  }
};
function n4(t5) {
  switch (t5.statisticType) {
    case "min":
      return new u3(t5);
    case "max":
      return new a2(t5);
    case "avg":
      return new o4(t5);
    case "avg_angle":
      return new h(t5);
    case "sum":
    case "count":
      return new c2(t5);
    case "mode":
      return new l(t5);
  }
}
var r3 = class {
  constructor(t5) {
    this.field = t5;
  }
  insert(t5, s5) {
    if (!this.field.computed) return;
    const i8 = this.field.computed.read(t5, s5);
    r(i8) || this._insertValue(i8);
  }
};
var u3 = class _u extends r3 {
  constructor() {
    super(...arguments), this.type = "min", this.value = Number.MAX_VALUE;
  }
  _insertValue(t5) {
    this.value = Math.min(this.value, t5);
  }
  merge(t5) {
    this.value = Math.min(this.value, t5.value);
  }
  clone() {
    const t5 = new _u(this.field);
    return t5.value = this.value, t5;
  }
};
var a2 = class _a extends r3 {
  constructor() {
    super(...arguments), this.type = "max", this.value = Number.MIN_VALUE;
  }
  _insertValue(t5) {
    this.value = Math.max(this.value, t5);
  }
  merge(t5) {
    this.value = Math.max(this.value, t5.value);
  }
  clone() {
    const t5 = new _a(this.field);
    return t5.value = this.value, t5;
  }
};
var c2 = class _c extends r3 {
  constructor() {
    super(...arguments), this.type = "sum", this.value = 0;
  }
  _insertValue(t5) {
    this.value += t5;
  }
  merge(t5) {
    this.value += t5.value;
  }
  clone() {
    const t5 = new _c(this.field);
    return t5.value = this.value, t5;
  }
};
var o4 = class _o extends r3 {
  constructor() {
    super(...arguments), this.type = "avg", this._total = 0, this._count = 0;
  }
  get value() {
    return this._total / this._count;
  }
  _insertValue(t5) {
    this._total += t5, this._count += 1;
  }
  merge(t5) {
    this._total += t5._total, this._count += t5._count;
  }
  clone() {
    const t5 = new _o(this.field);
    return t5._total = this._total, t5._count = this._count, t5;
  }
};
var h = class _h extends r3 {
  constructor() {
    super(...arguments), this.type = "avg_angle", this._x = 0, this._y = 0, this._count = 0;
  }
  get value() {
    const t5 = this._x / this._count, e3 = this._y / this._count, s5 = 180 / Math.PI;
    return Math.atan2(e3, t5) * s5;
  }
  _insertValue(t5) {
    this._x = this._x + Math.cos(t5 * s3), this._y = this._y + Math.sin(t5 * s3), this._count += 1;
  }
  merge(t5) {
    this._x += t5._x, this._y += t5._y, this._count += t5._count;
  }
  clone() {
    const t5 = new _h(this.field);
    return t5._x = this._x, t5._y = this._y, t5._count = this._count, t5;
  }
};
var l = class _l extends r3 {
  constructor() {
    super(...arguments), this._frequencies = /* @__PURE__ */ new Map();
  }
  get value() {
    let t5, e3 = 0;
    for (const [s5, i8] of this._frequencies.entries()) i8 > e3 && (e3 = i8, t5 = s5);
    return t5;
  }
  _insertValue(t5) {
    const e3 = this._frequencies.get(t5);
    null != e3 ? this._frequencies.set(t5, e3 + 1) : this._frequencies.set(t5, 1);
  }
  merge(t5) {
    for (const [e3, s5] of t5._frequencies.entries()) {
      const t6 = this._frequencies.get(e3);
      null != t6 ? this._frequencies.set(e3, t6 + s5) : this._frequencies.set(e3, s5);
    }
  }
  clone() {
    const t5 = new _l(this.field);
    return t5._frequencies = new Map(this._frequencies), t5;
  }
};

// node_modules/@arcgis/core/geohash/GeohashCell.js
var d = 32;
var c3 = class _c extends t2 {
  static create(t5, e3, o8, s5) {
    const i8 = i5.create(t5), r9 = new Array(d);
    for (let h3 = 0; h3 < r9.length; h3++) r9[h3] = null;
    return new _c(i8, e3, o8, s5, r9);
  }
  constructor(t5, e3, o8, s5, i8) {
    super(t5), this.xNode = e3, this.yNode = o8, this.depth = s5, this.children = i8, this._objectIds = /* @__PURE__ */ new Set(), this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._xGeohashTotal = 0, this._yGeohashTotal = 0, this.next = null;
  }
  static get estimatedMemory() {
    let o8 = 0;
    return o8 += 2 * s, o8 += n * d, o8 += i5.estimatedMemory, o8;
  }
  get id() {
    return `${this.xNode}.${this.yNode}`;
  }
  get containedObjectIds() {
    return this._objectIds;
  }
  get count() {
    return this._count;
  }
  clone() {
    const t5 = new _c(this._statistics.clone(), this.xNode, this.yNode, this.depth, this.children);
    return t5._count = this._count, t5._xWorldTotal = this._xWorldTotal, t5._yWorldTotal = this._yWorldTotal, t5._xGeohashTotal = this._xGeohashTotal, t5._yGeohashTotal = this._yGeohashTotal, t5.next = this.next, t5._objectIds = new Set(this._objectIds), t5;
  }
  insert(t5, e3, o8, s5, i8, r9) {
    this._count += 1, this._xWorldTotal += e3, this._yWorldTotal += o8, this._xGeohashTotal += s5, this._yGeohashTotal += i8, this._statistics.insert(t5, r9), this._objectIds.add(t5.getObjectId());
  }
  merge(t5) {
    if (0 !== t5._count) {
      this._count += t5._count, this._xWorldTotal += t5._xWorldTotal, this._yWorldTotal += t5._yWorldTotal, this._xGeohashTotal += t5._xWorldTotal, this._yGeohashTotal += t5._yWorldTotal, this._statistics.merge(t5._statistics);
      for (const e3 of t5._objectIds.values()) this._objectIds.add(e3);
    }
  }
  getCentroid(t5) {
    throw new Error("getCentroid not supported for GeohashNode");
  }
  getGeometry(t5, e3) {
    const o8 = this._getLngLatBounds(), [h3, n9, l3, d5] = o8, c4 = g({ rings: [[[h3, n9], [h3, d5], [l3, d5], [l3, n9], [h3, n9]]] }, S.WGS84, t5), _ = A(c4);
    return null != e3 ? rt(_, "esriGeometryPolygon", e3, false, false) : _;
  }
  getGeometricCentroid(t5, e3) {
    const o8 = this._getLngLatBounds(), [i8, n9, l3, d5] = o8, c4 = g({ x: (i8 + l3) / 2, y: (n9 + d5) / 2 }, S.WGS84, t5), _ = j2(c4);
    return null != e3 ? rt(_, "esriGeometryPoint", e3, false, false) : _;
  }
  getAttributes() {
    const t5 = { aggregateId: this.id };
    for (const e3 of this._statistics.values()) t5[e3.field.name] = e3.value;
    return t5.aggregateCount = this._count, t5;
  }
  find(t5, e3, o8, s5, i8, r9) {
    if (s5 >= o8) return this;
    const h3 = 1 - s5 % 2, a4 = 3 * h3 + 2 * (1 - h3), n9 = 2 * h3 + 3 * (1 - h3), l3 = 30 - i8 - a4, d5 = 30 - r9 - n9, c4 = ((t5 & 7 * h3 + 3 * (1 - h3) << l3) >> l3) + ((e3 & 3 * h3 + 7 * (1 - h3) << d5) >> d5) * (8 * h3 + 4 * (1 - h3)), _ = this.children[c4];
    return null == _ ? null : _.find(t5, e3, o8, s5 + 1, i8 + a4, r9 + n9);
  }
  _getLngLatBounds() {
    const t5 = this.depth, e3 = Math.ceil(t5 / 2), s5 = Math.floor(t5 / 2), i8 = 30 - (3 * e3 + 2 * s5), r9 = 30 - (2 * e3 + 3 * s5), h3 = this.xNode << i8, a4 = this.yNode << r9;
    return X({ geohashX: h3, geohashY: a4 }, this.depth);
  }
};

// node_modules/@arcgis/core/geohash/GeohashTree.js
var e2 = class {
  constructor(e3) {
    this._fields = e3, this._size = 0, this._depth = 0, this._root = c3.create(this._fields, 0, 0, 0);
  }
  destroy() {
  }
  get size() {
    return this._size;
  }
  get depth() {
    return this._depth;
  }
  get usedMemory() {
    return this._size * c3.estimatedMemory;
  }
  find(t5, e3, s5) {
    return this._root.find(t5, e3, s5, 0, 0, 0);
  }
  insert(e3, s5, i8, o8, n9, h3, r9) {
    let l3 = this._root, d5 = 0, c4 = 0, a4 = 0;
    for (; null !== l3; ) {
      if (l3.insert(e3, s5, i8, o8, n9, r9), d5 >= h3) return;
      const u4 = Math.ceil((d5 + 1) / 2), f = Math.floor((d5 + 1) / 2), _ = 1 - d5 % 2, x = 30 - (3 * u4 + 2 * f), m2 = 30 - (2 * u4 + 3 * f), M3 = (o8 & 7 * _ + 3 * (1 - _) << x) >> x, p2 = (n9 & 3 * _ + 7 * (1 - _) << m2) >> m2, g3 = M3 + p2 * (8 * _ + 4 * (1 - _));
      c4 = c4 << 3 * _ + 2 * (1 - _) | M3, a4 = a4 << 2 * _ + 3 * (1 - _) | p2, null == l3.children[g3] && (l3.children[g3] = c3.create(this._fields, c4, a4, d5 + 1), this._depth = Math.max(this._depth, d5 + 1), this._size += 1), d5 += 1, l3 = l3.children[g3];
    }
  }
  putBins(t5, e3) {
    for (const s5 of this.getNodes(e3)) {
      const e4 = t5.get(s5.id);
      e4 ? e4.merge(s5) : t5.set(s5.id, s5.clone());
    }
  }
  getNodes(t5) {
    const e3 = [], { geohashBounds: s5, level: i8 } = t5;
    let o8 = this._root;
    for (; null !== o8; ) {
      const t6 = o8.depth, n9 = o8.xNode, h3 = o8.yNode;
      if (t6 >= i8) {
        e3.push(o8), o8 = o8.next;
        continue;
      }
      const r9 = Math.ceil((t6 + 1) / 2), l3 = Math.floor((t6 + 1) / 2), d5 = 1 - t6 % 2, c4 = 30 - (3 * r9 + 2 * l3), a4 = 30 - (2 * r9 + 3 * l3), u4 = ~((1 << c4) - 1), f = ~((1 << a4) - 1), _ = (s5.xLL & u4) >> c4, x = (s5.yLL & f) >> a4, m2 = (s5.xTR & u4) >> c4, M3 = (s5.yTR & f) >> a4, p2 = n9 << 3 * d5 + 2 * (1 - d5), g3 = h3 << 2 * d5 + 3 * (1 - d5), y = p2 + 8 * d5 + 4 * (1 - d5), z = g3 + 4 * d5 + 8 * (1 - d5), L = Math.max(p2, _), N = Math.max(g3, x), B2 = Math.min(y, m2), R = Math.min(z, M3);
      let T = null, j3 = null;
      for (let e4 = N; e4 <= R; e4++) for (let t7 = L; t7 <= B2; t7++) {
        const s6 = t7 - p2 + (e4 - g3) * (8 * d5 + 4 * (1 - d5)), i9 = o8.children[s6];
        i9 && (T || (T = i9, T.next = o8.next), j3 && (j3.next = i9), j3 = i9, i9.next = o8.next);
      }
      o8 = T || o8.next;
    }
    return e3;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/aggregation/AAggregateSpatialIndex.js
var r4 = class {
  constructor(t5) {
    this._options = t5;
  }
  insert(t5, r9) {
    const o8 = t5.getCursor(), { arcadeContextInfo: s5, scale: i8 } = this._options, n9 = e(i8, s5);
    for (; o8.next(); ) this._insertFeature(o8, n9, this._options.sqlOptions, r9);
  }
  _insertFeature(e3, r9, o8, s5) {
    const { featureFilter: i8 } = this._options;
    if (null !== i8 && !i8.check(e3, o8)) return;
    let n9 = 0, c4 = 0;
    if ("esriGeometryPoint" === e3.geometryType) n9 = e3.readXWorldSpace(), c4 = e3.readYWorldSpace();
    else {
      if (s5) {
        const r11 = e3.readCentroidForDisplay();
        if (null == r11) return;
        const [o9, s6] = r11.coords;
        if (o9 < 0 || o9 > o2 || s6 < 0 || s6 > o2) return;
      }
      const r10 = e3.readCentroidWorldSpace();
      if (null == r10) return;
      n9 = r10.coords[0], c4 = r10.coords[1];
    }
    this._insert(e3, n9, c4, r9);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/aggregation/GeohashSpatialIndex.js
var r5 = class extends r4 {
  constructor(t5) {
    super(t5), this._tree = new e2(this._options.fields);
  }
  get usedMemory() {
    return this._tree.usedMemory;
  }
  put(e3) {
    throw new Error("Geohash tree does not support put");
  }
  putBounded(e3, s5, o8) {
    const { geohashLevel: r9, spatialReference: h3 } = this._options, i8 = b(s5, o8, r9, h3);
    null != i8 && this._tree.putBins(e3, i8);
  }
  _insert(e3, t5, o8, r9) {
    const { geohashLevel: h3, spatialReference: i8 } = this._options, n9 = v(t5, o8, h3, i8);
    n9 && this._tree.insert(e3, t5, o8, n9[0], n9[1], h3, r9);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/aggregation/GridCell.js
var l2 = class _l extends t2 {
  static createId(t5, e3) {
    return `${t5}.${e3}`;
  }
  static create(t5, e3, r9, i8) {
    return new _l(t5, e3, i5.create(r9), i8);
  }
  constructor(t5, e3, r9, i8) {
    super(r9), this.gridX = t5, this.gridY = e3, this._worldUnitsPerCell = i8, this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._objectIds = /* @__PURE__ */ new Set();
  }
  get id() {
    return _l.createId(this.gridX, this.gridY);
  }
  get containedObjectIds() {
    return this._objectIds;
  }
  get count() {
    return this._count;
  }
  get firstObjectId() {
    return this._objectIds.values().next().value;
  }
  get centroidXWorld() {
    return this._xWorldTotal / this._count;
  }
  get centroidYWorld() {
    return this._yWorldTotal / this._count;
  }
  get usedMemory() {
    return 48;
  }
  clone() {
    const t5 = new _l(this.gridX, this.gridY, this._statistics.clone(), this._worldUnitsPerCell);
    return t5._count = this._count, t5._xWorldTotal = this._xWorldTotal, t5._yWorldTotal = this._yWorldTotal, t5._firstFeatureAttributes = this._firstFeatureAttributes, t5._objectIds = new Set(this._objectIds), t5;
  }
  insert(t5, e3, r9, i8) {
    0 === this._count ? this._firstFeatureAttributes = t5.readAttributes() : this._firstFeatureAttributes = null, this._count += 1, this._xWorldTotal += r9, this._yWorldTotal += i8, this._statistics.insert(t5, e3), this._objectIds.add(t5.getObjectId());
  }
  merge(t5) {
    if (0 !== t5._count) {
      this._count += t5._count, this._firstFeatureAttributes = t5._firstFeatureAttributes, this._xWorldTotal += t5._xWorldTotal, this._yWorldTotal += t5._yWorldTotal, this._statistics.merge(t5._statistics);
      for (const e3 of t5._objectIds.values()) this._objectIds.add(e3);
    }
  }
  getCentroidX(e3) {
    return null == e3 ? this.centroidXWorld : I(e3, this.centroidXWorld);
  }
  getCentroidY(t5) {
    return null == t5 ? this.centroidYWorld : M2(t5, this.centroidYWorld);
  }
  getGeometry(t5, e3) {
    const s5 = this.gridX * this._worldUnitsPerCell, o8 = this.gridY * this._worldUnitsPerCell, l3 = new s2([4], [s5, o8, s5 + this._worldUnitsPerCell, o8, s5 + this._worldUnitsPerCell, o8 + this._worldUnitsPerCell, s5, o8 + this._worldUnitsPerCell]);
    return null != e3 ? rt(l3, "esriGeometryPolygon", e3) : l3;
  }
  getCentroid(t5) {
    const e3 = new s2([], [this.centroidXWorld, this.centroidYWorld]);
    return null != t5 ? rt(e3, "esriGeometryPoint", t5) : e3;
  }
  getGeometricCentroid(t5, e3) {
    const s5 = this.gridX * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, o8 = this.gridY * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, l3 = new s2([], [s5, o8]);
    return null != e3 ? rt(l3, "esriGeometryPoint", e3) : l3;
  }
  getAttributes() {
    const t5 = { aggregateId: this.id };
    for (const e3 of this._statistics.values()) t5[e3.field.name] = e3.value;
    return null != this._firstFeatureAttributes ? __spreadValues(__spreadValues({}, t5), this._firstFeatureAttributes) : t5;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/aggregation/GridSpatialIndex.js
var o5 = 96;
function r6(e3, i8) {
  return re(e3) * o * o5 / i8;
}
var n5 = class extends r4 {
  constructor(e3) {
    super(e3), this._cells = /* @__PURE__ */ new Map(), this._pixelsPerMapUnit = r6(e3.spatialReference, e3.scale);
  }
  get usedMemory() {
    const t5 = this._cells.values().next().value;
    return t5 ? (n + t5.usedMemory) * this._cells.size : 0;
  }
  put(e3) {
    for (const t5 of this._cells.values()) {
      const s5 = e3.get(t5.id);
      s5 ? s5.merge(t5) : e3.set(t5.id, t5.clone());
    }
  }
  putBounded(e3, t5, s5) {
    const i8 = [t5.xmin, t5.ymin, t5.xmax, t5.ymax], [l3, o8, r9, n9] = i8, c4 = Math.floor(l3 * this._pixelsPerMapUnit / this._options.cellSize), p2 = Math.floor(o8 * this._pixelsPerMapUnit / this._options.cellSize), a4 = Math.ceil(r9 * this._pixelsPerMapUnit / this._options.cellSize), h3 = Math.ceil(n9 * this._pixelsPerMapUnit / this._options.cellSize);
    for (let _ = p2; _ <= h3; _++) for (let t6 = c4; t6 <= a4; t6++) {
      const s6 = `${t6}.${_}`, i9 = this._cells.get(s6);
      if (!i9) continue;
      const l4 = e3.get(i9.id);
      l4 ? i9 && !e3.has(i9.id) && l4.merge(i9) : e3.set(i9.id, i9.clone());
    }
  }
  _insert(e3, t5, s5, i8) {
    const l3 = t5 * this._pixelsPerMapUnit, o8 = s5 * this._pixelsPerMapUnit, r9 = Math.floor(l3 / this._options.cellSize), n9 = Math.floor(o8 / this._options.cellSize);
    this._getCellOrCreate(r9, n9).insert(e3, i8, t5, s5);
  }
  _getCellOrCreate(e3, t5) {
    const s5 = l2.createId(e3, t5);
    let i8 = this._cells.get(s5);
    if (!i8) {
      const o8 = 1 * this._options.cellSize / this._pixelsPerMapUnit;
      i8 = l2.create(e3, t5, this._options.fields, o8), this._cells.set(s5, i8);
    }
    return i8;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderIndirect.js
var d2 = class _d extends O {
  static from(e3, r9) {
    if (e3 instanceof this) {
      const t5 = new Set(r9), s5 = e3._indices.filter((e4) => t5.has(e4));
      return new _d(e3._reader, s5);
    }
    return new _d(e3.copy(), r9);
  }
  constructor(e3, r9) {
    super(e3.metadata), this._currentIndex = -1, this._displayTransform = null, this._reader = e3, this._indices = r9;
  }
  setTransformForDisplay(e3) {
    const t5 = this._reader.getInTransform();
    if (null == t5) return void (this._displayTransform = u(e3));
    const s5 = u(t5), a4 = u(e3), [i8, d5] = s5.scale, [n9, o8] = s5.translate, [h3, u4] = a4.scale, [_, l3] = a4.translate, y = i8 / h3, c4 = d5 / u4, p2 = (n9 - _) / h3, m2 = (o8 - l3) / u4;
    this._displayTransform = { originPosition: "lowerLeft", scale: [1 / y, 1 / c4, 1, 1], translate: [-p2 / y, -m2 / c4, 0, 0] };
  }
  getInTransform() {
    return this._reader.getInTransform();
  }
  get fields() {
    return this._reader.fields;
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e3 = new _d(this._reader.copy(), this._indices);
    return e3._currentIndex = this._currentIndex, e3._displayTransform = this._displayTransform, e3._processorAttributes = this._processorAttributes, e3;
  }
  get contextTimeZone() {
    return this._reader.contextTimeZone;
  }
  set contextTimeZone(e3) {
    this._reader.contextTimeZone = e3;
  }
  get usedMemory() {
    return s + this._reader.usedMemory;
  }
  setProcessorAttributes(e3) {
    this._processorAttributes = Object.assign(this._processorAttributes ?? {}, e3);
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), true);
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); ) ;
    return this._currentIndex < this._indices.length;
  }
  readXForDisplay() {
    return this._displayTransform ? i3(this._displayTransform, this._reader.readXForDisplay()) : this._reader.readXForDisplay();
  }
  readYForDisplay() {
    return this._displayTransform ? a(this._displayTransform, this._reader.readYForDisplay()) : this._reader.readYForDisplay();
  }
  readGeometryForDisplay() {
    return this._displayTransform ? this._reader.readGeometryForDisplayTransformed(this._displayTransform) : this._reader.readGeometryForDisplay();
  }
  readCentroidForDisplay() {
    const e3 = this._reader.readCentroidForDisplay()?.clone();
    if (e3) {
      const [r9, a4] = e3.coords;
      this._displayTransform && (e3.coords[0] = i3(this._displayTransform, r9), e3.coords[1] = a(this._displayTransform, a4));
    }
    return e3;
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  readAttribute(e3, r9 = false) {
    const t5 = this._reader.readAttribute(e3, r9);
    return null == t5 && this._processorAttributes ? this._processorAttributes[e3] : t5;
  }
  readAttributes() {
    return __spreadValues(__spreadValues({}, this._processorAttributes), this._reader.readAttributes());
  }
  joinAttributes(e3) {
    return this._reader.joinAttributes(e3);
  }
  getBounds(e3) {
    return this._reader.getBounds(e3);
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e3) {
    return this._reader.setDisplayId(e3);
  }
  setIndex(e3) {
    return this._reader.setIndex(e3);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readXWorldSpace() {
    return this._reader.readXWorldSpace();
  }
  readYWorldSpace() {
    return this._reader.readYWorldSpace();
  }
  _readX() {
    return this._reader.readXForDisplay();
  }
  _readY() {
    return this._reader.readYForDisplay();
  }
  _readServerCentroid() {
    return this._reader._readServerCentroid();
  }
  readLegacyFeatureForDisplay() {
    const e3 = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e3 && { x: e3.coords[0], y: e3.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e3 = this.readGeometryForDisplay();
    return J(e3, this.geometryType, false, false);
  }
  readGeometryArea() {
    return this._displayTransform ? this._reader.readGeometryForDisplayTransformed(this._displayTransform)?.area() ?? 0 : this._reader.readGeometryArea();
  }
  readGeometryWorldSpace() {
    return this._reader.readGeometryWorldSpace();
  }
  _readGeometry() {
    return this._reader._readGeometry();
  }
  _readAttribute(e3, r9) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e3) {
    return this._reader.field(e3);
  }
  hasField(e3) {
    return this._reader.hasField(e3);
  }
  setField(e3, r9) {
    return this._reader.setField(e3, r9);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e3 = false) {
    return this._reader.castToText(e3);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/sources/strategies/chunks/ASourceChunk.js
var s4 = class {
  size() {
    return this.reader.getSize();
  }
  get fields() {
    return this.reader.fields;
  }
  invalidate() {
    this._aggregateIndex = null, this._aggregateIndexHash = null, this._spatialIndex = null;
  }
  get usedMemory() {
    let e3 = 0;
    return e3 += this.reader.underlyingMemory, this._aggregateIndex && (e3 += this._aggregateIndex.usedMemory), this._spatialIndex && (e3 += this._spatialIndex.usedMemory), e3;
  }
  getObjectIds() {
    const e3 = this.reader.getCursor(), t5 = [];
    for (; e3.next(); ) t5.push(e3.getObjectId());
    return t5;
  }
  registerOverrides(e3) {
    this.reader.registerOverrides(e3), this.invalidate();
  }
  queryFeaturesInBounds(e3) {
    const t5 = this._getSpatialIndex().search(e3);
    return d2.from(this.reader, t5);
  }
  getAggregateIndex(e3) {
    const a4 = JSON.stringify(e3);
    if (a4 !== this._aggregateIndexHash) {
      switch (this._aggregateIndexHash = a4, e3.type) {
        case "grid":
          this._aggregateIndex = new n5(e3);
          break;
        case "geohash":
          this._aggregateIndex = new r5(e3);
      }
      this._aggregateIndex.insert(this.reader, this.isTiled);
    }
    return this._aggregateIndex;
  }
  _getSpatialIndex() {
    return this._spatialIndex || (this._spatialIndex = n3.fromReader(this.reader)), this._spatialIndex;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/sources/strategies/chunks/FeatureSnapshotSourceChunk.js
var t3 = class extends s4 {
  constructor(e3, t5, s5, r9, i8 = 0) {
    super(), this._reader = e3, this._queryJSON = t5, this._page = s5, this._end = r9, this.fileIndex = i8, this.chunkId = `${this.fileIndex}.${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = this.chunkId;
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return 0 === this._page;
  }
  get end() {
    return this._end;
  }
  get queryInfo() {
    return { type: "snapshot", chunkId: this.chunkId, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get isTiled() {
    return false;
  }
  getTileReader(e3) {
    const t5 = this.queryFeaturesInBounds(e3.bounds);
    return t5.setTransformForDisplay(e3.transform), t5;
  }
};

// node_modules/@arcgis/core/layers/graphics/sources/support/parquetIdUtils.js
function n6(n9) {
  return n9 >>> 24 & 255;
}
function r7(n9) {
  return 16777215 & n9;
}
function t4(n9, r9) {
  return n9 << 24 | r9;
}

// node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderParquet.js
var i6;
var d3 = new TextDecoder();
var o6 = class _o extends O {
  constructor(t5, r9, n9, s5, i8 = new Uint32Array(n9.size())) {
    super(t5), this._indexMap = r9, this._inner = n9, this._fileId = s5, this._displayIds = i8, this._index = -1, this.usedMemory = s, this._size = this._inner.size();
    t5.featureIdInfo.type;
  }
  destroy() {
    super.destroy(), this._inner.free();
  }
  get fields() {
    return this.metadata.fieldsIndex;
  }
  get geometryType() {
    return this.metadata.geometryType;
  }
  get hasFeatures() {
    return true;
  }
  get hasNext() {
    throw new Error("Method not implemented.");
  }
  get exceededTransferLimit() {
    return false;
  }
  get hasZ() {
    return false;
  }
  get hasM() {
    return false;
  }
  async updateFields(e3, t5, r9, n9) {
    const s5 = this._inner.rowGroup(), i8 = new Uint32Array(this._inner.readIdsUnsafe()), d5 = await e3.createPatch(t5, s5, i8, r9, n9);
    this._inner.insertPatchBytes(new Uint8Array(d5));
  }
  getInTransform() {
    return null;
  }
  getSize() {
    return this._size;
  }
  getCursor() {
    return this.copy();
  }
  getAttributeHash() {
    let e3 = "";
    for (const t5 of this.fields.fields) e3 += this._readAttribute(t5.name, false) + ".";
    return e3;
  }
  getObjectId() {
    return t4(this._fileId, this._inner.rowId(this._index));
  }
  getDisplayId() {
    return this._displayIds[this._index];
  }
  setDisplayId(e3) {
    this._displayIds[this._index] = e3;
  }
  setIndex(e3) {
    this._index = e3;
  }
  getBoundsXMin() {
    return this._inner.boundsXMin(this._index);
  }
  getBoundsYMin() {
    return this._inner.boundsYMin(this._index);
  }
  getBoundsXMax() {
    return this._inner.boundsXMax(this._index);
  }
  getBoundsYMax() {
    return this._inner.boundsYMax(this._index);
  }
  setBoundsXMin(e3) {
    throw new Error("InternalError: Setting bounds is unsupported");
  }
  setBoundsYMin(e3) {
    throw new Error("InternalError: Setting bounds is unsupported");
  }
  setBoundsXMax(e3) {
    throw new Error("InternalError: Setting bounds is unsupported");
  }
  setBoundsYMax(e3) {
    throw new Error("InternalError: Setting bounds is unsupported");
  }
  getIndex() {
    return this._index;
  }
  next() {
    for (; ++this._index < this._size && !this._getExists(); ) ;
    return this._index < this._size;
  }
  readGeometryArea() {
    return this.readGeometryForDisplay()?.area() ?? 0;
  }
  copy() {
    const e3 = new _o(this.metadata, this._indexMap, this._inner, this._fileId, this._displayIds);
    return this.copyInto(e3), e3;
  }
  copyInto(e3) {
    super.copyInto(e3), e3._index = this._index;
  }
  readGeometryForDisplayTransformed(e3) {
    const [r9, s5] = e3.translate, [d5, o8] = e3.scale;
    i6 || (i6 = ye.new());
    return this._inner.transformGeometry(i6, r9, s5, d5, o8, this._index) ? new s2(i6.readLengthsUnsafe(), i6.readCoordsUnsafe(), this.hasZ, this.hasM) : null;
  }
  _readGeometry(e3) {
    const r9 = this._inner.readCoordsUnsafe(this._index), n9 = this._inner.readLengthsUnsafe(this._index);
    return r9 && n9 ? new s2(n9, r9, this.hasZ, this.hasM) : null;
  }
  _readX() {
    return this._inner.readX(this._index);
  }
  _readY() {
    return this._inner.readY(this._index);
  }
  _readServerCentroid() {
    return null;
  }
  _readAttribute(e3, t5) {
    const r9 = this.fields.get(e3);
    if (!r9) return;
    const n9 = this._indexMap[r9.name];
    if (null == n9) return this.getObjectId();
    const s5 = this._inner.readAttribute(this._index, n9);
    if (null == s5) return s5;
    if ("esriFieldTypeString" === r9.type || "esriFieldTypeDateOnly" === r9.type || "esriFieldTypeTimeOnly" === r9.type || "esriFieldTypeTimestampOffset" === r9.type) {
      const e4 = this._inner.readAttribute(this._index, n9);
      return d3.decode(e4);
    }
    const i8 = this.fields.isDateField(r9.name);
    return t5 ? null == s5 ? s5 : i8 ? new Date(s5) : s5 : s5;
  }
  _readAttributes() {
    const e3 = {};
    for (const t5 of this.metadata.fieldsIndex.fields) {
      if (null == this._indexMap[t5.name]) continue;
      const r9 = this._readAttribute(t5.name, false);
      void 0 !== r9 && (e3[t5.name] = r9);
    }
    return e3.__OBJECTID = this.getObjectId(), e3;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/sources/strategies/chunks/Overrides.js
var r8 = 1e4;
var i7 = 1e3;
var a3 = class _a {
  static async create(t5) {
    const { metadata: s5, definitionExpression: r9 } = t5, i8 = r9 ? await c(r9, s5.fieldsIndex) : null;
    return new _a(s5, i8, r9);
  }
  constructor(e3, t5, s5) {
    this.metadata = e3, this._clause = t5, this._definitionExpression = s5;
  }
  get hash() {
    return this._definitionExpression;
  }
  testFeature(e3) {
    return null == this._clause || this._clause.testFeature(e3);
  }
};
var o7 = class _o {
  constructor() {
    this.modified = /* @__PURE__ */ new Map(), this.removed = /* @__PURE__ */ new Set();
  }
  modify(e3) {
    this.modified.set(e3.objectId, e3), this.removed.has(e3.objectId) && this.removed.delete(e3.objectId);
  }
  remove(e3) {
    this.modified.delete(e3), this.removed.add(e3);
  }
  get isEmpty() {
    return 0 === this.modified.size && 0 === this.removed.size;
  }
  applyWhereClause(e3) {
    const t5 = new _o();
    for (const [s5, r9] of this.modified) e3.testFeature(r9) ? t5.modified.set(s5, r9) : t5.removed.add(r9.objectId);
    for (const s5 of this.removed) t5.removed.add(s5);
    return t5;
  }
};
var n7 = class _n extends s4 {
  constructor(e3) {
    super(), this._reader = e3, this.chunkId = "override", this.normalizedChunkId = "override";
  }
  static fromFeatures(e3, t5) {
    const r9 = u2.fromOptimizedFeatures(e3, t5);
    return new _n(r9);
  }
  get reader() {
    return this._reader;
  }
  get queryInfo() {
    return {};
  }
  get first() {
    return false;
  }
  get end() {
    return false;
  }
  get isTiled() {
    return false;
  }
  getTileReader(e3) {
    if (!this._reader.getSize()) return null;
    const t5 = this.queryFeaturesInBounds(e3.bounds);
    return t5.setTransformForDisplay(e3.transform), t5;
  }
};
var d4 = class {
  constructor(e3, t5) {
    this.inner = e3, this.isWeak = t5, this.lastWeak = null;
  }
  get isStrong() {
    return !this.isWeak;
  }
};
var h2 = class {
  constructor(e3) {
    this._parameters = e3, this._overrides = /* @__PURE__ */ new Map(), this._update = new o7(), this._lastCleanup = 0;
  }
  update(e3) {
    this._parameters = e3;
  }
  hasOverride(e3) {
    return this._overrides.has(e3);
  }
  onChunkInsert(e3) {
    if (this._overrides.size) {
      const t5 = e3.reader.getCursor();
      for (; t5.next(); ) {
        const e4 = t5.getObjectId(), s5 = this._overrides.get(e4);
        if (s5?.lastWeak && (s5.lastWeak = null), s5?.isWeak) {
          const e5 = t5.readOptimizedFeatureWorldSpace(), r9 = s5.inner?.attributes ?? {};
          e5.attributes = __spreadValues(__spreadValues({}, r9), e5.attributes), s5.inner = e5, this._update.modify(e5), this.invalidate();
        }
      }
    }
    e3.registerOverrides(this);
  }
  apply(e3, t5) {
    const { updateWeak: s5, removeWeak: r9, update: i8, remove: a4, release: o8 } = e3.commands;
    this.invalidate();
    for (const n9 of s5) {
      const e4 = new d4(n9, true), t6 = this._overrides.get(n9.objectId);
      t6?.isStrong ? t6.lastWeak = e4 : (this._overrides.set(n9.objectId, e4), this._update.modify(n9));
    }
    for (const n9 of i8) {
      const e4 = new d4(n9, false), t6 = this._overrides.get(n9.objectId);
      e4.lastWeak = t6?.isWeak ? t6 : t6?.lastWeak ?? null, this._overrides.set(n9.objectId, e4), this._update.modify(n9);
    }
    for (const n9 of r9) {
      const e4 = new d4(null, true), t6 = this._overrides.get(n9);
      t6?.isStrong ? t6.lastWeak = e4 : (this._overrides.set(n9, e4), this._update.remove(n9));
    }
    for (const n9 of a4) {
      const e4 = new d4(null, false), t6 = this._overrides.get(n9);
      e4.lastWeak = t6?.isWeak ? t6 : t6?.lastWeak ?? null, this._overrides.set(n9, e4), this._update.remove(n9);
    }
    if (o8.length) {
      const e4 = /* @__PURE__ */ new Set();
      for (const t6 of o8) {
        const s6 = this._overrides.get(t6);
        s6?.lastWeak ? (this._overrides.set(t6, s6.lastWeak), null == s6.lastWeak.inner ? this._update.remove(t6) : this._update.modify(s6.lastWeak.inner)) : s6 && !s6.isWeak && (this._overrides.delete(t6), e4.add(t6));
      }
      t5.forEachUnsafe((t6) => {
        const s6 = t6.getObjectId();
        e4.has(s6) && (this._update.modify(t6.readOptimizedFeatureWorldSpace()), e4.delete(s6));
      });
      for (const t6 of e4.values()) this._update.remove(t6);
    }
  }
  clearWeakOverrides() {
    for (const [e3, t5] of this._overrides.entries()) t5.isWeak && this._overrides.delete(e3);
    this.invalidate();
  }
  cleanup(e3) {
    if (this._overrides.size < r8) return;
    const t5 = performance.now();
    if (t5 - this._lastCleanup < i7) return;
    this._lastCleanup = t5;
    const s5 = this._getWeakDeletions();
    if (!(s5.size < r8)) {
      for (const t6 of e3) {
        const e4 = t6.reader.withoutOverrides().getCursor();
        for (; e4.next(); ) {
          const t7 = e4.getObjectId();
          s5.delete(t7);
        }
      }
      for (const e4 of s5) this._overrides.delete(e4);
      s5.size && this.invalidate();
    }
  }
  takeOverrideUpdate() {
    const e3 = this._update;
    return e3.isEmpty ? null : (this._update = new o7(), e3.applyWhereClause(this._parameters));
  }
  asChunk() {
    const e3 = this._parameters;
    if (this._lastOverrideParametersHash !== e3.hash && (this._lastOverrideParametersHash = e3.hash, this._chunk = null), !this._chunk) {
      const t5 = [];
      for (const s5 of this._overrides.values()) null != s5.inner && e3.testFeature(s5.inner) && t5.push(s5.inner);
      this._chunk = n7.fromFeatures(t5, e3.metadata);
    }
    return this._chunk;
  }
  invalidate() {
    this._chunk = null;
  }
  putWeakObjectIdsFromGlobalIds(e3, t5, s5) {
    for (const [r9, i8] of this._overrides.entries()) {
      if (i8.isWeak && null != i8.inner) {
        const a4 = i8.inner.attributes[s5];
        a4 && t5.has(a4) && !e3.has(a4) && e3.set(a4, r9);
        continue;
      }
      if (null != i8.lastWeak && null != i8.lastWeak.inner) {
        const a4 = i8.lastWeak.inner.attributes[s5];
        a4 && t5.has(a4) && !e3.has(a4) && e3.set(a4, r9);
      }
    }
  }
  _getWeakDeletions() {
    const e3 = /* @__PURE__ */ new Set();
    for (const [t5, s5] of this._overrides.entries()) s5.isWeak && null == s5.inner && e3.add(t5);
    return e3;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/sources/strategies/chunks/SourceChunkStore.js
var n8 = class {
  constructor() {
    this._chunks = /* @__PURE__ */ new Map(), this._chunksToRemove = [], this.events = new i(), this.featureAdapter = new r2();
  }
  destroy() {
    this.clear();
  }
  clear() {
    for (const e3 of this._chunks.values()) this._chunksToRemove.push(e3);
    this._chunks.clear(), this._overrides?.clearWeakOverrides();
  }
  get usedMemory() {
    let e3 = 0;
    for (const s5 of this._chunks.values()) e3 += s5.usedMemory;
    return e3;
  }
  async update(e3) {
    if (this._overrides) {
      const s5 = await a3.create(e3);
      this._overrides.update(s5);
    }
    this._postQueryFilter = e3.postQueryFilter;
    for (const { reader: s5 } of this.insertedChunks()) s5.applyPostQueryFilter(this._postQueryFilter);
    this._schema = e3;
  }
  *chunks() {
    this._overrides && (yield this._overrides.asChunk()), yield* this._chunks.values();
  }
  insertedChunks() {
    return this._chunks.values();
  }
  insert(e3) {
    has("esri-2d-update-debug") && console.debug(`Chunk[${e3.chunkId}] SourceChunkStore.insert`), this._overrides?.onChunkInsert(e3), this._chunks.set(e3.chunkId, e3), this._postQueryFilter && e3.reader.applyPostQueryFilter(this._postQueryFilter), this.events.emit("changed");
  }
  remove(e3) {
    has("esri-2d-update-debug") && console.debug(`Chunk[${e3.chunkId}] SourceChunkStore.remove`), this._chunks.delete(e3.chunkId), this._chunksToRemove.push(e3);
  }
  removeById(e3) {
    has("esri-2d-update-debug") && console.debug(`Chunk[${e3}] SourceChunkStore.remove`);
    const s5 = this._chunks.get(e3);
    this._chunks.delete(e3), s5 && this._chunksToRemove.push(s5);
  }
  cleanup() {
    const e3 = this._chunksToRemove;
    return this._chunksToRemove = [], this._overrides?.cleanup(this._chunks.values()), e3;
  }
  async applyOverride(e3) {
    if (null == this._overrides) {
      const e4 = await a3.create(this._schema);
      this._overrides = new h2(e4);
      for (const s5 of this._chunks.values()) this._overrides.onChunkInsert(s5);
    }
    this._overrides.apply(e3, this), this.events.emit("changed");
    for (const s5 of this._chunks.values()) s5.invalidate();
  }
  takeOverrideUpdate() {
    return this._overrides?.takeOverrideUpdate();
  }
  refresh() {
    this.events.emit("refresh");
  }
  forEach(e3) {
    const s5 = /* @__PURE__ */ new Set();
    for (const t5 of this.chunks()) {
      const r9 = t5.reader.getCursor();
      for (; r9.next(); ) {
        const t6 = r9.getObjectId();
        s5.has(t6) || (e3(r9.copy()), s5.add(t6));
      }
    }
  }
  forEachUnsafe(e3) {
    const s5 = /* @__PURE__ */ new Set();
    for (const t5 of this.chunks()) {
      const r9 = t5.reader.getCursor();
      for (; r9.next(); ) {
        const t6 = r9.getObjectId();
        s5.has(t6) || (e3(r9), s5.add(t6));
      }
    }
  }
  mapObjectIdsFromGlobalIds(e3, s5) {
    const t5 = /* @__PURE__ */ new Map(), r9 = new Set(e3);
    return this._overrides?.putWeakObjectIdsFromGlobalIds(t5, r9, s5), this._forEachUnsafeIgnoreOverrides((e4) => {
      const o8 = e4.readAttribute(s5);
      if (o8 && r9.has(o8) && !t5.has(o8)) {
        const s6 = e4.getObjectId();
        t5.set(o8, s6);
      }
    }), t5;
  }
  forEachInBounds(e3, s5) {
    const t5 = /* @__PURE__ */ new Set();
    for (const r9 of this.chunks()) {
      const o8 = r9.queryFeaturesInBounds(e3);
      for (; o8.next(); ) {
        const e4 = o8.getObjectId();
        t5.has(e4) || (s5(o8.copy()), t5.add(e4));
      }
    }
  }
  forEachBounds(e3, t5) {
    const r9 = i2();
    for (const s5 of e3) {
      s5.getBounds(r9) && t5(r9);
    }
  }
  _forEachUnsafeIgnoreOverrides(e3) {
    const s5 = /* @__PURE__ */ new Set();
    for (const t5 of this._chunks.values()) {
      const r9 = t5.reader.withoutOverrides().getCursor();
      for (; r9.next(); ) {
        const t6 = r9.getObjectId();
        s5.has(t6) || (e3(r9), s5.add(t6));
      }
    }
  }
};

export {
  i5 as i,
  l2 as l,
  r6 as r,
  d2 as d,
  s4 as s,
  n7 as n,
  t3 as t,
  n6 as n2,
  r7 as r2,
  o6 as o,
  n8 as n3
};
//# sourceMappingURL=chunk-OVEDLBGT.js.map
