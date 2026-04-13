import {
  d
} from "./chunk-VIZQEP3L.js";
import {
  w
} from "./chunk-7VLR4FEU.js";
import {
  v as v2
} from "./chunk-3AKQYIL2.js";
import {
  c as c2
} from "./chunk-OKL2JLQU.js";
import {
  I,
  c,
  v,
  x
} from "./chunk-SGNC5H35.js";
import {
  n,
  r as r2
} from "./chunk-KEY3YQEB.js";
import {
  e
} from "./chunk-JM4CKTH2.js";
import {
  r
} from "./chunk-PFC2RERS.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
var l = class _l {
  get bounds() {
    return this._root.bounds;
  }
  get halfSize() {
    return this._root.halfSize;
  }
  get root() {
    return this._root.node;
  }
  get maximumObjectsPerNode() {
    return this._maximumObjectsPerNode;
  }
  get maximumDepth() {
    return this._maximumDepth;
  }
  get objectCount() {
    return this._objectCount;
  }
  constructor(e2, t) {
    this.objectToBoundingSphere = e2, this._maximumObjectsPerNode = 10, this._maximumDepth = 20, this._degenerateObjects = /* @__PURE__ */ new Set(), this._root = new m(), this._objectCount = 0, t && (void 0 !== t.maximumObjectsPerNode && (this._maximumObjectsPerNode = t.maximumObjectsPerNode), void 0 !== t.maximumDepth && (this._maximumDepth = t.maximumDepth));
  }
  destroy() {
    this._degenerateObjects.clear(), m.clearPool(), R[0] = null, C.prune(), J.prune();
  }
  add(e2) {
    const t = Array.from(e2);
    this._grow(t);
    const n2 = m.acquire();
    for (const r3 of t) ++this._objectCount, this._isDegenerate(r3) ? this._degenerateObjects.add(r3) : (n2.init(this._root), this._add(r3, n2));
    m.release(n2);
  }
  remove(e2, t = null) {
    this._objectCount -= e2.length;
    const n2 = m.acquire();
    for (const r3 of e2) {
      const e3 = t ?? this.objectToBoundingSphere(r3);
      A(e3.radius) ? (n2.init(this._root), p(r3, e3, n2)) : this._degenerateObjects.delete(r3);
    }
    m.release(n2), this._shrink();
  }
  update(e2, t) {
    if (!A(t.radius) && this._isDegenerate(e2)) return;
    const n2 = v3(e2);
    this.remove(n2, t), this.add(n2);
  }
  forEachAlongRay(e2, t, n2) {
    const r3 = v2(e2, t);
    f(this._root, (e3) => {
      if (!g(r3, e3)) return false;
      const t2 = e3.node;
      return t2.terminals.forAll((e4) => {
        this._intersectsObject(r3, e4) && n2(e4);
      }), null !== t2.residents && t2.residents.forAll((e4) => {
        this._intersectsObject(r3, e4) && n2(e4);
      }), true;
    });
  }
  forEachAlongRayWithVerticalOffset(e2, t, n2, r3) {
    const i = v2(e2, t);
    f(this._root, (e3) => {
      if (!S(i, e3, r3)) return false;
      const t2 = e3.node;
      return t2.terminals.forAll((e4) => {
        this._intersectsObjectWithOffset(i, e4, r3) && n2(e4);
      }), null !== t2.residents && t2.residents.forAll((e4) => {
        this._intersectsObjectWithOffset(i, e4, r3) && n2(e4);
      }), true;
    });
  }
  forEach(e2) {
    f(this._root, (t) => {
      const n2 = t.node;
      return n2.terminals.forAll(e2), null !== n2.residents && n2.residents.forAll(e2), true;
    }), this._degenerateObjects.forEach(e2);
  }
  forEachDegenerateObject(e2) {
    this._degenerateObjects.forEach(e2);
  }
  findClosest(e2, t, n2, r3 = () => true, s = 1 / 0) {
    let a = 1 / 0, d2 = 1 / 0, u = null;
    const c3 = T(e2, t), l2 = (i) => {
      if (--s, !r3(i)) return;
      const o = this.objectToBoundingSphere(i);
      if (!d(n2, o)) return;
      const c4 = D(e2, t, o.center), l3 = c4 - o.radius, m2 = c4 + o.radius;
      l3 < a && (a = l3, d2 = m2, u = i);
    };
    return _(this._root, (r4) => {
      if (s <= 0 || !d(n2, r4.bounds)) return false;
      x(E, c3, r4.halfSize), c(E, E, r4.bounds.center);
      if (D(e2, t, E) > d2) return false;
      const a2 = r4.node;
      return a2.terminals.forAll((e3) => l2(e3)), null !== a2.residents && a2.residents.forAll((e3) => l2(e3)), true;
    }, e2, t), u;
  }
  forEachInDepthRange(e2, t, n2, r3, s, a, d2) {
    let u = -1 / 0, c3 = 1 / 0;
    const l2 = { setRange: (e3) => {
      1 === n2 ? (u = Math.max(u, e3.near), c3 = Math.min(c3, e3.far)) : (u = Math.max(u, -e3.far), c3 = Math.min(c3, -e3.near));
    } };
    l2.setRange(r3);
    const m2 = D(t, n2, e2), f2 = T(t, n2), p2 = T(t, -n2), b2 = (e3) => {
      if (!d2(e3)) return;
      const r4 = this.objectToBoundingSphere(e3), i = D(t, n2, r4.center) - m2, o = i - r4.radius, f3 = i + r4.radius;
      o > c3 || f3 < u || !d(a, r4) || s(e3, l2);
    };
    _(this._root, (e3) => {
      if (!d(a, e3.bounds)) return false;
      x(E, f2, e3.halfSize), c(E, E, e3.bounds.center);
      if (D(t, n2, E) - m2 > c3) return false;
      x(E, p2, e3.halfSize), c(E, E, e3.bounds.center);
      if (D(t, n2, E) - m2 < u) return false;
      const r4 = e3.node;
      return r4.terminals.forAll((e4) => b2(e4)), null !== r4.residents && r4.residents.forAll((e4) => b2(e4)), true;
    }, t, n2);
  }
  forEachNode(e2) {
    f(this._root, (t) => e2(t.node, t.bounds, t.halfSize, t.depth));
  }
  forEachNeighbor(e2, t) {
    const n2 = t.radius, i = t.center, o = (t2) => {
      const o2 = this.objectToBoundingSphere(t2), s2 = o2.radius, a2 = n2 + s2;
      return !(v(o2.center, i) - a2 * a2 <= 0) || e2(t2);
    };
    let s = true;
    const a = (e3) => {
      s && (s = o(e3));
    };
    f(this._root, (e3) => {
      const t2 = e3.bounds.radius, o2 = n2 + t2;
      if (v(e3.bounds.center, i) - o2 * o2 > 0) return false;
      const h = e3.node;
      return h.terminals.forAll(a), s && null !== h.residents && h.residents.forAll(a), s;
    }), s && this.forEachDegenerateObject(a);
  }
  _intersectsObject(e2, t) {
    const n2 = this.objectToBoundingSphere(t);
    return !(n2.radius > 0) || n2.intersectRay(e2);
  }
  _intersectsObjectWithOffset(e2, t, n2) {
    const r3 = this.objectToBoundingSphere(t);
    return !(r3.radius > 0) || n2.applyToBoundingSphere(r3).intersectRay(e2);
  }
  _add(e2, t) {
    t.advanceTo(this.objectToBoundingSphere(e2)) ? t.node.terminals.push(e2) : (t.node.residents.push(e2), t.node.residents.length > this._maximumObjectsPerNode && t.depth < this._maximumDepth && this._split(t));
  }
  _split(e2) {
    const t = e2.node.residents;
    e2.node.residents = null;
    for (let n2 = 0; n2 < t.length; n2++) {
      const r3 = m.acquire().init(e2);
      this._add(t.at(n2), r3), m.release(r3);
    }
  }
  _grow(e2) {
    if (M(e2, (e3) => this.objectToBoundingSphere(e3), k), A(k.radius) && !this._fitsInsideTree(k)) if (j(this._root.node)) this._root.bounds.copyFrom(k), this._root.halfSize = 1.25 * this._root.bounds.radius, this._root.updateBoundsRadiusFromHalfSize();
    else {
      const e3 = this._rootBoundsForRootAsSubNode(k);
      this._placingRootViolatesMaxDepth(e3) ? this._rebuildTree(k, e3) : this._growRootAsSubNode(e3), m.release(e3);
    }
  }
  _rebuildTree(e2, t) {
    I2.center = t.bounds.center, I2.radius = t.halfSize, M([e2, I2], (e3) => e3, L);
    const n2 = m.acquire().init(this._root);
    this._root.initFrom(null, L, L.radius), this._root.increaseHalfSize(1.25), f(n2, (e3) => (this.add(e3.node.terminals.data), null !== e3.node.residents && this.add(e3.node.residents.data), true)), m.release(n2);
  }
  _placingRootViolatesMaxDepth(e2) {
    const t = Math.log(e2.halfSize / this._root.halfSize) * Math.LOG2E;
    let n2 = 0;
    return f(this._root, (e3) => (n2 = Math.max(n2, e3.depth), n2 + t <= this._maximumDepth)), n2 + t > this._maximumDepth;
  }
  _rootBoundsForRootAsSubNode(e2) {
    const t = e2.radius, n2 = e2.center;
    let r3 = -1 / 0;
    const i = this._root.bounds.center, o = this._root.halfSize;
    for (let a = 0; a < 3; a++) {
      const e3 = i[a] - o - (n2[a] - t), s2 = n2[a] + t - (i[a] + o), h = Math.max(0, Math.ceil(e3 / (2 * o))), d2 = Math.max(0, Math.ceil(s2 / (2 * o))) + 1, u = 2 ** Math.ceil(Math.log(h + d2) * Math.LOG2E);
      r3 = Math.max(r3, u), H[a].min = h, H[a].max = d2;
    }
    for (let a = 0; a < 3; a++) {
      let e3 = H[a].min, t2 = H[a].max;
      const n3 = (r3 - (e3 + t2)) / 2;
      e3 += Math.ceil(n3), t2 += Math.floor(n3);
      const s2 = i[a] - o - e3 * o * 2;
      F.center[a] = s2 + (t2 + e3) * o;
    }
    const s = r3 * o;
    return F.radius = s * y, m.acquire().initFrom(null, F, s, 0);
  }
  _growRootAsSubNode(e2) {
    const t = this._root.node;
    k.center = this._root.bounds.center, k.radius = this._root.halfSize, this._root.init(e2), e2.advanceTo(k, null, true), e2.node.children = t.children, e2.node.residents = t.residents, e2.node.terminals = t.terminals;
  }
  _shrink() {
    for (; ; ) {
      const e2 = this._findShrinkIndex();
      if (-1 === e2) break;
      this._root.advance(e2), this._root.depth = 0;
    }
  }
  _findShrinkIndex() {
    if (0 !== this._root.node.terminals.length || this._root.isLeaf()) return -1;
    let e2 = null;
    const t = this._root.node.children;
    let n2 = 0, r3 = 0;
    for (; r3 < t.length && null == e2; ) n2 = r3++, e2 = t[n2];
    for (; r3 < t.length; ) if (t[r3++]) return -1;
    return n2;
  }
  _isDegenerate(e2) {
    return !A(this.objectToBoundingSphere(e2).radius);
  }
  _fitsInsideTree(e2) {
    const t = this._root.bounds, n2 = this._root.halfSize;
    return e2.radius <= n2 && e2.center[0] >= t.center[0] - n2 && e2.center[0] <= t.center[0] + n2 && e2.center[1] >= t.center[1] - n2 && e2.center[1] <= t.center[1] + n2 && e2.center[2] >= t.center[2] - n2 && e2.center[2] <= t.center[2] + n2;
  }
  toJSON() {
    const { maximumDepth: e2, maximumObjectsPerNode: t, _objectCount: n2 } = this, r3 = this._nodeToJSON(this._root.node);
    return { maximumDepth: e2, maximumObjectsPerNode: t, objectCount: n2, root: { bounds: this._root.bounds, halfSize: this._root.halfSize, depth: this._root.depth, node: r3 } };
  }
  _nodeToJSON(e2) {
    const t = e2.children.map((e3) => e3 ? this._nodeToJSON(e3) : null), n2 = e2.residents?.map((e3) => this.objectToBoundingSphere(e3)), r3 = e2.terminals?.map((e3) => this.objectToBoundingSphere(e3));
    return { children: t, residents: n2, terminals: r3 };
  }
  static fromJSON(e2) {
    const t = new _l((e3) => e3, { maximumDepth: e2.maximumDepth, maximumObjectsPerNode: e2.maximumObjectsPerNode });
    return t._objectCount = e2.objectCount, t._root.initFrom(e2.root.node, e2.root.bounds, e2.root.halfSize, e2.root.depth), t;
  }
};
var m = class _m {
  constructor() {
    this.bounds = new w(), this.halfSize = 0, this.initFrom(null, null, 0, 0);
  }
  init(e2) {
    return this.initFrom(e2.node, e2.bounds, e2.halfSize, e2.depth);
  }
  initFrom(e2, t, n2, r3 = this.depth) {
    return this.node = null != e2 ? e2 : _m.createEmptyNode(), t && this.bounds.copyFrom(t), this.halfSize = n2, this.depth = r3, this;
  }
  increaseHalfSize(e2) {
    this.halfSize *= e2, this.updateBoundsRadiusFromHalfSize();
  }
  updateBoundsRadiusFromHalfSize() {
    this.bounds.radius = this.halfSize * y;
  }
  advance(e2) {
    let t = this.node.children[e2];
    t || (t = _m.createEmptyNode(), this.node.children[e2] = t), this.node = t, this.halfSize /= 2, this.depth++;
    const n2 = w2[e2];
    return this.bounds.center[0] += n2[0] * this.halfSize, this.bounds.center[1] += n2[1] * this.halfSize, this.bounds.center[2] += n2[2] * this.halfSize, this.updateBoundsRadiusFromHalfSize(), this;
  }
  advanceTo(e2, t, n2 = false) {
    for (; ; ) {
      if (this.isTerminalFor(e2)) return t?.(this, -1), true;
      if (this.isLeaf()) {
        if (!n2) return t?.(this, -1), false;
        this.node.residents = null;
      }
      const r3 = this._childIndex(e2);
      t?.(this, r3), this.advance(r3);
    }
  }
  isLeaf() {
    return null != this.node.residents;
  }
  isTerminalFor(e2) {
    return e2.radius > this.halfSize / 2;
  }
  _childIndex(e2) {
    const t = this.bounds.center;
    return (t[0] < e2.center[0] ? 1 : 0) + (t[1] < e2.center[1] ? 2 : 0) + (t[2] < e2.center[2] ? 4 : 0);
  }
  static createEmptyNode() {
    return { children: [null, null, null, null, null, null, null, null], terminals: new r({ shrink: true }), residents: new r({ shrink: true }) };
  }
  static {
    this._pool = new e(() => new _m());
  }
  static acquire() {
    return _m._pool.acquire();
  }
  static release(e2) {
    _m._pool.release(e2);
  }
  static clearPool() {
    _m._pool.prune();
  }
};
function f(e2, t) {
  let n2 = m.acquire().init(e2);
  const r3 = [n2];
  for (; 0 !== r3.length; ) {
    if (n2 = r3.pop(), t(n2) && !n2.isLeaf()) for (let e3 = 0; e3 < n2.node.children.length; e3++) {
      n2.node.children[e3] && r3.push(m.acquire().init(n2).advance(e3));
    }
    m.release(n2);
  }
}
function _(e2, t, n2, r3 = 1) {
  let i = m.acquire().init(e2);
  const o = [i];
  for (N(n2, r3, W); 0 !== o.length; ) {
    if (i = o.pop(), t(i) && !i.isLeaf()) for (let e3 = 7; e3 >= 0; --e3) {
      const t2 = W[e3];
      i.node.children[t2] && o.push(m.acquire().init(i).advance(t2));
    }
    m.release(i);
  }
}
function p(e2, t, n2) {
  C.clear();
  const r3 = n2.advanceTo(t, (e3, t2) => {
    C.push(e3.node), C.push(t2);
  }) ? n2.node.terminals : n2.node.residents;
  if (r3.removeUnordered(e2), 0 === r3.length) for (let i = C.length - 2; i >= 0; i -= 2) {
    if (!b(C.data[i], C.data[i + 1])) break;
  }
}
function b(e2, n2) {
  return n2 >= 0 && (e2.children[n2] = null), !!j(e2) && (null === e2.residents && (e2.residents = new r({ shrink: true })), true);
}
function g(e2, t) {
  return z(t.bounds.center, 2 * -t.halfSize, P), z(t.bounds.center, 2 * t.halfSize, q), c2(e2.origin, e2.direction, P, q);
}
function S(e2, t, n2) {
  return z(t.bounds.center, 2 * -t.halfSize, P), z(t.bounds.center, 2 * t.halfSize, q), n2.applyToMinMax(P, q), c2(e2.origin, e2.direction, P, q);
}
function j(e2) {
  if (0 !== e2.terminals.length) return false;
  if (null !== e2.residents) return 0 === e2.residents.length;
  for (let t = 0; t < e2.children.length; t++) if (e2.children[t]) return false;
  return true;
}
function x2(e2, t) {
  e2[0] = Math.min(e2[0], t.center[0] - t.radius), e2[1] = Math.min(e2[1], t.center[1] - t.radius), e2[2] = Math.min(e2[2], t.center[2] - t.radius);
}
function O(e2, t) {
  e2[0] = Math.max(e2[0], t.center[0] + t.radius), e2[1] = Math.max(e2[1], t.center[1] + t.radius), e2[2] = Math.max(e2[2], t.center[2] + t.radius);
}
function z(e2, t, n2) {
  n2[0] = e2[0] + t, n2[1] = e2[1] + t, n2[2] = e2[2] + t;
}
function M(e2, t, r3) {
  P[0] = 1 / 0, P[1] = 1 / 0, P[2] = 1 / 0, q[0] = -1 / 0, q[1] = -1 / 0, q[2] = -1 / 0;
  for (const n2 of e2) {
    const e3 = t(n2);
    A(e3.radius) && (x2(P, e3), O(q, e3));
  }
  I(r3.center, P, q, 0.5), r3.radius = Math.max(q[0] - P[0], q[1] - P[1], q[2] - P[2]) / 2;
}
function N(e2, t, n2) {
  if (!J.length) for (let r3 = 0; r3 < 8; ++r3) J.push({ index: 0, distance: 0 });
  for (let r3 = 0; r3 < 8; ++r3) {
    const n3 = w2[r3];
    J.data[r3].index = r3, J.data[r3].distance = D(e2, t, n3);
  }
  J.sort((e3, t2) => e3.distance - t2.distance);
  for (let r3 = 0; r3 < 8; ++r3) n2[r3] = J.data[r3].index;
}
function T(e2, t) {
  let n2, r3 = 1 / 0;
  for (let i = 0; i < 8; ++i) {
    const o = D(e2, t, B[i]);
    o < r3 && (r3 = o, n2 = B[i]);
  }
  return n2;
}
function D(e2, t, n2) {
  return t * (e2[0] * n2[0] + e2[1] * n2[1] + e2[2] * n2[2]);
}
function A(e2) {
  return !isNaN(e2) && e2 !== -1 / 0 && e2 !== 1 / 0 && e2 > 0;
}
var w2 = [r2(-1, -1, -1), r2(1, -1, -1), r2(-1, 1, -1), r2(1, 1, -1), r2(-1, -1, 1), r2(1, -1, 1), r2(-1, 1, 1), r2(1, 1, 1)];
var B = [r2(-1, -1, -1), r2(-1, -1, 1), r2(-1, 1, -1), r2(-1, 1, 1), r2(1, -1, -1), r2(1, -1, 1), r2(1, 1, -1), r2(1, 1, 1)];
var y = Math.sqrt(3);
var R = [null];
function v3(e2) {
  return R[0] = e2, R;
}
var F = new w();
var E = n();
var P = n();
var q = n();
var C = new r();
var k = new w();
var I2 = new w();
var L = new w();
var H = [{ min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }];
var J = new r();
var W = [0, 0, 0, 0, 0, 0, 0, 0];

export {
  l
};
//# sourceMappingURL=chunk-OAD722AG.js.map
