import {
  I,
  e as e2,
  e2 as e3,
  u
} from "./chunk-XUZBRFKA.js";
import {
  F
} from "./chunk-XNNRUT34.js";
import {
  f,
  l,
  s
} from "./chunk-E73BLMZG.js";
import {
  e
} from "./chunk-POW25PFR.js";
import {
  h,
  j
} from "./chunk-IDI4VM7T.js";

// node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleTrackingTarget.js
var s2 = class extends s {
  constructor(t3) {
    super(new i(t3)), this._observer && e4.register(this, new WeakRef(this._observer), this);
  }
  destroy() {
    this._observer && e4.unregister(this._observer), this.accessed?.clear(), this.clear(), this._observer?.destroy();
  }
};
var i = class {
  constructor(t3) {
    this._notify = t3, this._invalidCount = 0, this.destroyed = false;
  }
  onInvalidated() {
    this._invalidCount++;
  }
  onCommitted() {
    if (this.destroyed) return;
    const t3 = this._invalidCount;
    if (1 === t3) return this._invalidCount = 0, void this._notify();
    this._invalidCount = t3 > 0 ? t3 - 1 : 0;
  }
  destroy() {
    this.destroyed = true, this._notify = r;
  }
};
var e4 = new FinalizationRegistry((t3) => {
  t3.deref()?.destroy();
});
function r() {
}

// node_modules/@arcgis/core/core/ArrayPool.js
function r2(e7) {
  e7.length = 0;
}
var t = class {
  constructor(t3 = 50, o4 = 50) {
    this._pool = new e2(() => [], void 0, r2, o4, t3);
  }
  acquire() {
    return this._pool.acquire();
  }
  release(e7) {
    this._pool.release(e7);
  }
  prune() {
    this._pool.prune(0);
  }
  static acquire() {
    return o.acquire();
  }
  static release(e7) {
    return o.release(e7);
  }
  static prune() {
    o.prune();
  }
};
var o = new t(100);

// node_modules/@arcgis/core/core/ReentrantObjectPool.js
var s3 = class extends e2 {
  constructor() {
    super(...arguments), this._set = /* @__PURE__ */ new Set();
  }
  destroy() {
    super.destroy(), this._set = null;
  }
  acquire(...e7) {
    const s4 = super.acquire(...e7);
    return this._set.delete(s4), s4;
  }
  release(e7) {
    e7 && !this._set.has(e7) && (super.release(e7), this._set.add(e7));
  }
  _dispose(e7) {
    this._set.delete(e7), super._dispose(e7);
  }
};

// node_modules/@arcgis/core/core/SetUtils.js
function n(n2, r4) {
  for (const t3 of n2.values()) if (r4(t3)) return true;
  return false;
}
function r3(n2, r4) {
  if (!r4) return n2;
  for (const t3 of r4) null != t3 && n2.add(t3);
  return n2;
}
function t2(n2, r4) {
  if (!r4) return n2;
  for (const t3 of r4) n2.delete(t3);
  return n2;
}
function u2(n2, r4) {
  return null != r4 && n2.add(r4), n2;
}
function e5(n2, t3) {
  const u4 = /* @__PURE__ */ new Set();
  return r3(u4, n2), r3(u4, t3), u4;
}
function o2(n2, r4) {
  const t3 = /* @__PURE__ */ new Set();
  for (const u4 of r4) n2.has(u4) && t3.add(u4);
  return t3;
}
function f2(n2, r4) {
  if (!n2 || !r4) return false;
  if (n2 === r4) return true;
  for (const t3 of n2) if (!r4.has(t3)) return false;
  return true;
}
function i2(n2, r4) {
  if (null == n2 && null == r4) return true;
  if (null == n2 || null == r4 || n2.size !== r4.size) return false;
  for (const t3 of n2) if (!r4.has(t3)) return false;
  return true;
}
function c(n2, r4) {
  const t3 = new Set(n2);
  for (const u4 of r4) t3.delete(u4);
  return t3;
}
function l2(n2, r4) {
  return c(e5(n2, r4), o2(n2, r4));
}

// node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var u3 = false;
var l3 = [];
function o3(l4, o4) {
  let e7 = new s2(a), i4 = null, s4 = false;
  function a() {
    if (!e7 || s4) return;
    if (u3) return void c2(a);
    const n2 = i4;
    e7.clear(), u3 = true, s4 = true, i4 = f(e7, l4), s4 = false, u3 = false, o4(i4, n2), f3();
  }
  function m2() {
    e7 && (e7.destroy(), e7 = null, i4 = null);
  }
  return s4 = true, i4 = f(e7, l4), s4 = false, e(m2);
}
function e6(u4, l4) {
  let o4 = new s2(i4), e7 = null;
  function i4() {
    l4(e7, f4);
  }
  function c3() {
    o4 && (o4.destroy(), o4 = null), e7 = null;
  }
  function f4() {
    return o4 ? (o4.clear(), e7 = f(o4, u4), e7) : null;
  }
  return f4(), e(c3);
}
function i3(l4, o4) {
  let e7 = false, i4 = false;
  const s4 = !!o4?.sync;
  let a = new s2(() => {
    e7 || i4 || (i4 = true, s4 ? m2() : queueMicrotask(m2));
  });
  function m2() {
    i4 = false, a && !e7 && (u3 ? c2(m2) : (a.clear(), u3 = true, e7 = true, f(a, l4), e7 = false, u3 = false, f3()));
  }
  function p2() {
    a && (a.destroy(), a = null);
  }
  return e7 = true, f(a, l4), e7 = false, e(p2);
}
function c2(n2) {
  l3.includes(n2) || l3.unshift(n2);
}
function f3() {
  for (; l3.length; ) l3.pop()();
}

// node_modules/@arcgis/core/core/accessorSupport/watch.js
var h2 = class _h {
  constructor() {
    this.uid = e3(), this.removed = false, this.type = null, this.oldValue = null, this.callback = null, this.getValue = null, this.target = null, this.path = null, this.equals = null;
  }
  static {
    this.pool = new s3(() => new _h());
  }
  static acquireUntracked(e7, t3, l4, o4, i4) {
    return this.pool.acquire(0, e7, t3, l4, o4, i4, j);
  }
  static acquireTracked(e7, t3, r4, l4) {
    return this.pool.acquire(1, e7, t3, r4, null, null, l4);
  }
  notify(e7, t3) {
    0 === this.type ? this.callback.call(this.target, e7, t3, this.path, this.target) : this.callback.call(null, e7, t3, void 0, void 0);
  }
  acquire(e7, t3, r4, l4, o4, i4, n2) {
    this.uid = e3(), this.removed = false, this.type = e7, this.oldValue = t3, this.callback = r4, this.getValue = l4, this.target = o4, this.path = i4, this.equals = n2;
  }
  release() {
    this.target = this.path = this.oldValue = this.callback = this.getValue = null, this.uid = e3(), this.removed = true;
  }
};
var m = new t();
var p = /* @__PURE__ */ new Set();
var v;
function _(e7) {
  p.delete(e7), p.add(e7), g();
}
function g() {
  v || (v = F(k));
}
function j2(e7) {
  if (e7.removed) return;
  const t3 = e7.oldValue, r4 = e7.getValue();
  e7.equals(t3, r4) || (e7.oldValue = r4, e7.notify(r4, t3));
}
function q(e7) {
  for (const t3 of p.values()) t3.target === e7 && (t3.removed = true);
}
function k() {
  let e7 = 10;
  for (; v && e7--; ) {
    v = null;
    const e8 = y(), t3 = m.acquire();
    for (const r4 of e8) {
      const e9 = r4.uid;
      j2(r4), e9 === r4.uid && r4.removed && t3.push(r4);
    }
    for (const r4 of p) r4.removed && (t3.push(r4), p.delete(r4));
    for (const r4 of t3) h2.pool.release(r4);
    m.release(t3), m.release(e8), V.forEach((e9) => e9());
  }
}
function y() {
  const e7 = m.acquire();
  e7.length = p.size;
  let t3 = 0;
  for (const r4 of p) e7[t3] = r4, ++t3;
  return p.clear(), e7;
}
var V = /* @__PURE__ */ new Set();
function E(e7) {
  return V.add(e7), e(() => V.delete(e7));
}
function b(e7, r4, l4) {
  let o4 = l(e7, r4, l4, (e8, r5, l5) => {
    let i4, n2, s4 = e6(() => u(e8, r5), (t3, s5) => {
      e8.__accessor__?.lifecycle === I.DESTROYED || i4 && i4.uid !== n2 ? o4.remove() : (i4 || (i4 = h2.acquireUntracked(t3, l5, s5, e8, r5), n2 = i4.uid), _(i4));
    });
    return e(() => {
      s4.remove(), i4 && (i4.uid !== n2 || i4.removed || (i4.removed = true, _(i4)), i4 = null), o4 = s4 = null;
    });
  });
  return o4;
}
function D(e7, t3, l4) {
  const o4 = l(e7, t3, l4, (e8, t4, l5) => {
    let i4 = false;
    return o3(() => u(e8, t4), (n2, s4) => {
      e8.__accessor__.lifecycle !== I.DESTROYED ? i4 || (i4 = true, j(s4, n2) || l5.call(e8, n2, s4, t4, e8), i4 = false) : o4.remove();
    });
  });
  return o4;
}
function S(e7, r4, l4, o4 = false) {
  return e7.__accessor__ && e7.__accessor__.lifecycle !== I.DESTROYED ? o4 ? D(e7, r4, l4) : b(e7, r4, l4) : e();
}
function w(e7, r4, l4) {
  let o4, i4, n2 = e6(e7, (e8, t3) => {
    o4 && o4.uid !== i4 ? n2.remove() : (o4 || (o4 = h2.acquireTracked(e8, r4, t3, l4), i4 = o4.uid), _(o4));
  });
  return e(() => {
    n2.remove(), o4 && (o4.uid !== i4 || o4.removed || (o4.removed = true, _(o4)), o4 = null), n2 = null;
  });
}
function T(e7, t3, r4) {
  let l4 = false;
  return o3(e7, (e8, o4) => {
    l4 || (l4 = true, r4(o4, e8) || t3(e8, o4), l4 = false);
  });
}
function U(e7, t3, r4 = false, o4 = h) {
  return r4 ? T(e7, t3, o4) : w(e7, t3, o4);
}
function O(e7) {
  return n(p, (t3) => t3.oldValue === e7);
}

export {
  s2 as s,
  t,
  s3 as s2,
  n,
  r3 as r,
  t2,
  u2 as u,
  e5 as e,
  o2 as o,
  f2 as f,
  i2 as i,
  c,
  l2 as l,
  i3 as i2,
  g,
  q,
  E,
  S,
  U,
  O
};
//# sourceMappingURL=chunk-MSRN4ADD.js.map
