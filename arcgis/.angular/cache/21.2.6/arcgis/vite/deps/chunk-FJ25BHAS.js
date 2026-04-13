import {
  l2 as l,
  m2,
  o2,
  r,
  t
} from "./chunk-LV7AMIAU.js";
import {
  S,
  q
} from "./chunk-MSRN4ADD.js";
import {
  I,
  e,
  o
} from "./chunk-XUZBRFKA.js";
import {
  s as s3
} from "./chunk-AEGIA5BY.js";
import {
  a as a2,
  f,
  i,
  m,
  p,
  s as s2,
  y
} from "./chunk-E73BLMZG.js";
import {
  u2 as u
} from "./chunk-POW25PFR.js";
import {
  a,
  j,
  n2 as n,
  s2 as s
} from "./chunk-IDI4VM7T.js";

// node_modules/@arcgis/core/core/iteratorUtils.js
function n2(n5) {
  const t5 = [];
  return function* () {
    yield* t5;
    let e6, o5 = t5.length;
    for (; !(e6 = n5.next()).done; ) for (t5.push(e6.value), yield e6.value; ++o5 < t5.length; ) yield t5[o5];
  };
}
var t2 = Object.freeze({ done: true, value: void 0 });
function e2(n5) {
  const e6 = [];
  let o5 = null, l3 = null, u5 = false;
  async function r4() {
    if (u5) return t2;
    if (null != l3) return l3;
    l3 = n5.next();
    try {
      const n6 = await l3;
      return l3 = null, n6.done ? (u5 = true, t2) : (e6.push(n6.value), n6);
    } catch (r5) {
      throw u5 = true, l3 = null, o5 = r5, r5;
    }
  }
  return async function* () {
    yield* e6;
    let n6, t5 = e6.length;
    for (; !(n6 = await r4()).done; ) for (yield n6.value; ++t5 < e6.length; ) yield e6[t5];
    if (null != o5) throw o5;
  };
}
function o3(n5, t5) {
  for (const e6 of n5) if (null != e6 && t5(e6)) return e6;
}
function l2(n5, t5) {
  for (const e6 of n5) if (t5(e6)) return true;
  return false;
}
function u2(n5) {
  return null != n5 && "function" == typeof n5[Symbol.iterator];
}

// node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var e3 = 8;
function r2(e6) {
  switch (e6) {
    case "defaults":
      return 0;
    case "service":
      return 2;
    case "portal-item":
      return 3;
    case "web-scene":
      return 4;
    case "web-map":
      return 5;
    case "link-chart":
      return 6;
    case "user":
      return 7;
    default:
      return null;
  }
}
function t3(e6) {
  switch (e6) {
    case 0:
      return "defaults";
    case 2:
      return "service";
    case 3:
      return "portal-item";
    case 4:
      return "web-scene";
    case 5:
      return "web-map";
    case 6:
      return "link-chart";
    case 7:
      return "user";
  }
}
function u3(e6) {
  return t3(e6);
}

// node_modules/@arcgis/core/core/Handles.js
var r3 = class {
  constructor() {
    this._groups = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.removeAll();
  }
  get size() {
    let t5 = 0;
    return this._groups.forEach((r4) => {
      t5 += r4.length;
    }), t5;
  }
  add(r4, e6) {
    if (u2(r4)) {
      const t5 = this._getOrCreateGroup(e6);
      for (const e7 of r4) o4(e7) && t5.push(e7);
    } else if (o4(r4)) {
      this._getOrCreateGroup(e6).push(r4);
    }
    return this;
  }
  forEach(t5, r4) {
    if ("function" == typeof t5) this._groups.forEach((r5) => r5.forEach(t5));
    else {
      const e6 = this._getGroup(t5);
      e6 && r4 && e6.forEach(r4);
    }
  }
  has(t5) {
    return this._groups.has(e4(t5));
  }
  remove(r4) {
    if ("string" != typeof r4 && u2(r4)) {
      for (const t5 of r4) this.remove(t5);
      return this;
    }
    return this.has(r4) ? (s4(this._getGroup(r4)), this._groups.delete(e4(r4)), this) : this;
  }
  removeAll() {
    return this._groups.forEach(s4), this._groups.clear(), this;
  }
  removeReference(t5) {
    return this._groups.delete(t5), this;
  }
  _getOrCreateGroup(t5) {
    if (this.has(t5)) return this._getGroup(t5);
    const r4 = [];
    return this._groups.set(e4(t5), r4), r4;
  }
  _getGroup(t5) {
    return this._groups.get(e4(t5));
  }
};
function e4(t5) {
  return t5 || "_default_";
}
function s4(t5) {
  for (const e6 of t5) e6 instanceof r3 ? e6.removeAll() : e6.remove();
}
function o4(t5) {
  return null != t5 && (!!t5.remove || t5 instanceof r3);
}

// node_modules/@arcgis/core/core/accessorSupport/Property.js
var n3 = class extends s3 {
  constructor(t5, i2) {
    super(), this.propertyName = t5, this.metadata = i2, this.trackingTarget = new s2(this), this.flags = 0, this.flags = i.Dirty | (i2.nonNullable ? i.NonNullable : 0) | (i2.hasOwnProperty("value") ? i.HasDefaultValue : 0) | (void 0 === i2.get ? i.DepTrackingInitialized : 0) | (void 0 === i2.dependsOn ? i.AutoTracked : 0);
  }
  destroy() {
    this.flags & i.Dirty && this.onCommitted(), super.destroy(), this.trackingTarget.destroy();
  }
  getComputed(t5, a3) {
    t5.mutable && a2(this);
    const n5 = t5.store, l3 = this.propertyName, g2 = this.flags, h = n5.get(l3);
    if (g2 & i.Computing) return h;
    if (!(g2 & i.Dirty) && n5.has(l3)) return h;
    let d2;
    this.flags |= i.Computing;
    const { host: m5 } = t5;
    g2 & i.AutoTracked ? d2 = f(this.trackingTarget, a3, m5) : (m(m5, this), d2 = a3.call(m5)), this.flags |= i.DepTrackingInitialized, n5.set(l3, d2, 1);
    const c = n5.get(l3);
    return c === h ? this.flags &= ~i.Dirty : p(this.commit, this), this.flags &= ~i.Computing, c;
  }
  notifyChange() {
    this.onInvalidated(), this.onCommitted();
  }
  invalidate() {
    this.onInvalidated();
  }
  commit() {
    this.flags &= ~i.Dirty, this.onCommitted();
  }
  onInvalidated() {
    ~this.flags & i.Overridden && (this.flags |= i.Dirty);
    const t5 = this._observers;
    if (t5 && t5.length > 0) for (const i2 of t5) i2.onInvalidated();
  }
  onCommitted() {
    const t5 = this._observers;
    if (t5 && t5.length > 0) {
      const i2 = t5.slice();
      for (const t6 of i2) t6.onCommitted();
    }
  }
};

// node_modules/@arcgis/core/core/accessorSupport/Store.js
var e5 = class _e {
  constructor() {
    this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = false;
  }
  clone(t5) {
    const r4 = new _e();
    return this._values.forEach((e6, i2) => {
      t5 && t5.has(i2) || r4.set(i2, a(e6));
    }), r4;
  }
  get(s5) {
    return this._values.get(s5);
  }
  originOf() {
    return 7;
  }
  keys() {
    return [...this._values.keys()];
  }
  set(s5, e6) {
    this._values.set(s5, e6);
  }
  delete(s5) {
    this._values.delete(s5);
  }
  has(s5) {
    return this._values.has(s5);
  }
  isAtOrigin(s5, e6) {
    return this.has(s5);
  }
  isBelowOrigin(s5, e6) {
    return !this.has(s5);
  }
  forEach(s5) {
    this._values.forEach(s5);
  }
};

// node_modules/@arcgis/core/core/accessorSupport/Properties.js
function f2(t5, e6, i2) {
  return void 0 !== t5;
}
function p2(t5, e6, s5, r4) {
  return void 0 !== t5 && (!(null == s5 && t5.flags & i.NonNullable) || (r4.lifecycle, I.INITIALIZING, false));
}
var m3 = class {
  constructor(t5) {
    this.host = t5, this.propertiesByName = /* @__PURE__ */ new Map(), this.ctorArgs = null, this.lifecycle = I.INITIALIZING, this.store = new e5(), this.mutable = true, this._origin = 7;
    const e6 = this.host.constructor.__accessorMetadata__;
    for (const i2 in e6) {
      const t6 = new n3(i2, e6[i2]);
      this.propertiesByName.set(i2, t6);
    }
    this.metadata = e6;
  }
  initialize() {
    this.lifecycle = I.CONSTRUCTING;
  }
  constructed() {
    this.lifecycle = I.CONSTRUCTED;
  }
  destroy() {
    this.lifecycle = I.DESTROYED, this.propertiesByName.forEach((t5) => t5.destroy());
  }
  get initialized() {
    return this.lifecycle !== I.INITIALIZING;
  }
  get(t5) {
    const e6 = this.propertiesByName.get(t5);
    if (!f2(e6)) return;
    const i2 = e6.metadata.get;
    if (i2) return e6.getComputed(this, i2);
    this.mutable && a2(e6);
    const s5 = this.store;
    return s5.has(t5) ? s5.get(t5) : e6.metadata.value;
  }
  originOf(t5) {
    const e6 = this.store.originOf(t5);
    if (void 0 === e6) {
      const e7 = this.propertiesByName.get(t5);
      if (void 0 !== e7 && e7.flags & i.HasDefaultValue) return "defaults";
    }
    return t3(e6);
  }
  has(t5) {
    return this.propertiesByName.has(t5) && this.store.has(t5);
  }
  keys() {
    return [...this.propertiesByName.keys()];
  }
  internalGet(t5) {
    const e6 = this.propertiesByName.get(t5);
    if (f2(e6)) return this.store.has(t5) ? this.store.get(t5) : e6.metadata.value;
  }
  internalSet(t5, e6) {
    const i2 = this.propertiesByName.get(t5);
    f2(i2) && this._internalSet(i2, e6);
  }
  getDependsInfo(t5, e6, i2) {
    const r4 = this.propertiesByName.get(e6);
    if (!f2(r4)) return "";
    const n5 = new s2(), a3 = f(n5, () => r4.metadata.get?.call(t5));
    let o5 = `${i2}${t5.declaredClass.split(".").pop()}.${e6}: ${a3}
`;
    const l3 = n5.accessed ?? /* @__PURE__ */ new Set();
    if (0 === l3.size) return o5;
    i2 += "  ";
    for (const c of l3) {
      if (!(c instanceof n3)) continue;
      o5 += `${i2}${c.propertyName}: undefined
`;
    }
    return o5;
  }
  setAtOrigin(t5, e6, i2) {
    const s5 = this.propertiesByName.get(t5);
    if (f2(s5)) return this._setAtOrigin(s5, e6, i2);
  }
  isOverridden(t5) {
    const e6 = this.propertiesByName.get(t5);
    return void 0 !== e6 && !!(e6.flags & i.Overridden);
  }
  clearOrigin(t5, e6) {
    const i2 = this.store, s5 = this.propertiesByName.get(t5);
    if (!f2(s5)) return;
    const r4 = i2.isAtOrigin(t5, e6) && !(s5.flags & i.Overridden);
    i2.delete(t5, e6), r4 && s5.notifyChange();
  }
  clearOverride(t5) {
    const e6 = this.propertiesByName.get(t5);
    e6 && e6.flags & i.Overridden && (e6.flags &= ~i.Overridden, e6.notifyChange());
  }
  override(t5, e6) {
    const i2 = this.propertiesByName.get(t5);
    if (!p2(i2, t5, e6, this)) return;
    const s5 = i2.metadata.cast;
    if (s5) {
      const t6 = this._cast(s5, e6), { valid: i3, value: r4 } = t6;
      if (d.release(t6), !i3) return;
      e6 = r4;
    }
    i2.flags |= i.Overridden, this._internalSet(i2, e6);
  }
  set(t5, e6) {
    const i2 = this.propertiesByName.get(t5);
    if (!p2(i2, t5, e6, this)) return;
    const s5 = i2.metadata.cast;
    if (s5) {
      const t6 = this._cast(s5, e6), { valid: i3, value: r5 } = t6;
      if (d.release(t6), !i3) return;
      e6 = r5;
    }
    const r4 = i2.metadata.set;
    r4 ? r4.call(this.host, e6) : this._internalSet(i2, e6);
  }
  setDefaultOrigin(t5) {
    this._origin = r2(t5);
  }
  getDefaultOrigin() {
    return t3(this._origin);
  }
  notifyChange(t5) {
    this.propertiesByName.get(t5)?.notifyChange();
  }
  invalidate(t5) {
    this.propertiesByName.get(t5)?.invalidate();
  }
  commit(t5) {
    this.propertiesByName.get(t5)?.commit();
  }
  _internalSet(t5, e6) {
    const s5 = this.lifecycle !== I.INITIALIZING ? this._origin : 0;
    this._setAtOrigin(t5, e6, s5);
  }
  _setAtOrigin(e6, i2, s5) {
    const r4 = this.store, n5 = e6.propertyName, a3 = r4.isAtOrigin(n5, s5);
    if (a3 && ~e6.flags & i.Overridden && j(i2, r4.get(n5))) return;
    const o5 = r4.isBelowOrigin(n5, s5) || a3;
    o5 && e6.invalidate(), r4.set(n5, i2, s5), o5 && e6.commit(), y(this.host, e6);
  }
  _cast(t5, e6) {
    const i2 = d.acquire();
    return i2.valid = true, i2.value = e6, t5 && (i2.value = t5.call(this.host, e6, i2)), i2;
  }
};
var u4 = class {
  constructor() {
    this.value = null, this.valid = true;
  }
  acquire() {
    this.valid = true;
  }
  release() {
    this.value = null;
  }
};
var d = new e(() => new u4());

// node_modules/@arcgis/core/core/accessorSupport/testSupport.js
var n4;
function t4() {
  return n4;
}

// node_modules/@arcgis/core/core/Accessor.js
var f3;
var y2;
function m4(e6) {
  if (null == e6) return { value: e6 };
  if (Array.isArray(e6)) return { type: [e6[0]], value: null };
  switch (typeof e6) {
    case "object":
      return e6.constructor?.__accessorMetadata__ || e6 instanceof Date ? { type: e6.constructor, value: e6 } : e6;
    case "boolean":
      return { type: Boolean, value: e6 };
    case "string":
      return { type: String, value: e6 };
    case "number":
      return { type: Number, value: e6 };
    case "function":
      return { type: e6, value: null };
    default:
      return;
  }
}
var v = /* @__PURE__ */ Symbol("Accessor-Handles");
var g = /* @__PURE__ */ Symbol("Accessor-Initialized");
var b = class _b {
  static {
    f3 = v, y2 = g;
  }
  static createSubclass(e6 = {}) {
    if (Array.isArray(e6)) throw new Error("Multi-inheritance unsupported since 4.16");
    const { properties: t5, declaredClass: r4, constructor: s5 } = e6;
    delete e6.declaredClass, delete e6.properties, delete e6.constructor;
    const o5 = this;
    class c extends o5 {
      constructor(...e7) {
        super(...e7), this.inherited = null, s5 && s5.apply(this, e7);
      }
    }
    r(c.prototype);
    for (const i2 in e6) {
      const t6 = e6[i2];
      c.prototype[i2] = "function" == typeof t6 ? function(...e7) {
        const r5 = this.inherited;
        let s6;
        this.inherited = function(...e8) {
          if (o5.prototype[i2]) return o5.prototype[i2].apply(this, e8);
        };
        try {
          s6 = t6.apply(this, e7);
        } catch (c2) {
          throw this.inherited = r5, c2;
        }
        return this.inherited = r5, s6;
      } : e6[i2];
    }
    for (const i2 in t5) {
      const e7 = m4(t5[i2]);
      m2(e7)(c.prototype, i2);
    }
    return l(r4)(c);
  }
  static freeze(e6) {
    return e6 instanceof _b ? e6.__accessor__.mutable = false : Object.freeze(e6), e6;
  }
  static isFrozen(e6) {
    return e6 instanceof _b ? !e6.__accessor__.mutable : Object.isFrozen(e6);
  }
  constructor(...e6) {
    if (this[f3] = null, this[y2] = false, this.constructor === _b) throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");
    const t5 = new m3(this);
    Object.defineProperty(this, "__accessor__", { enumerable: false, value: t5 }), e6.length > 0 && (t5.ctorArgs = this.normalizeCtorArgs?.apply(this, e6) ?? e6[0]), t4()?.onInstanceConstruct(this);
  }
  postscript() {
    const e6 = this.__accessor__, t5 = e6.ctorArgs;
    e6.initialize(), t5 && (this.set(t5), e6.ctorArgs = null), e6.constructed(), this.initialize(), this[g] = true;
  }
  initialize() {
  }
  [o2]() {
    this[v] = u(this[v]);
  }
  destroy() {
    this.destroyed || (q(this), this.__accessor__.destroy(), t4()?.onInstanceDestroy(this));
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get constructed() {
    return this.__accessor__ && this.__accessor__.initialized || false;
  }
  get initialized() {
    return this[g];
  }
  get destroyed() {
    return this.__accessor__?.lifecycle === I.DESTROYED || false;
  }
  get destroying() {
    return this.__accessor__?.lifecycle === I.DESTROYING || false;
  }
  commitProperty(e6) {
    o(this, e6);
  }
  hasOwnProperty(e6) {
    return this.__accessor__ ? this.__accessor__.has(e6) : Object.prototype.hasOwnProperty.call(this, e6);
  }
  keys() {
    return this.__accessor__ ? this.__accessor__.keys() : [];
  }
  set(e6, t5) {
    return t(this, e6, t5), this;
  }
  watch(t5, s5, o5) {
    return s(n.getLogger(this), "`watch` is deprecated in favor of reactiveUtils.watch", { replacement: "reactiveUtils.watch", version: "4.32", see: "https://arcg.is/1vaqf42#watch", warnOnce: true }), S(this, t5, s5, o5);
  }
  addHandles(e6, r4) {
    if (this.destroyed) {
      const t5 = Array.isArray(e6) ? e6 : [e6];
      for (const e7 of t5) e7.remove();
      return;
    }
    (this[v] ??= new r3()).add(e6, r4);
  }
  removeHandles(e6) {
    this[v]?.remove(e6);
  }
  removeAllHandles() {
    this[v]?.removeAll();
  }
  removeHandlesReference(e6) {
    this[v]?.removeReference(e6);
  }
  hasHandles(e6) {
    return true === this[v]?.has(e6);
  }
  _override(e6, t5) {
    void 0 === t5 ? this.__accessor__.clearOverride(e6) : this.__accessor__.override(e6, t5);
  }
  _clearOverride(e6) {
    return this.__accessor__.clearOverride(e6);
  }
  _overrideIfSome(e6, t5) {
    null == t5 ? this.__accessor__.clearOverride(e6) : this.__accessor__.override(e6, t5);
  }
  _isOverridden(e6) {
    return this.__accessor__.isOverridden(e6);
  }
  notifyChange(e6) {
    this.__accessor__.notifyChange(e6);
  }
  _get(e6) {
    return this.__accessor__.internalGet(e6);
  }
  _set(e6, t5) {
    return this.__accessor__.internalSet(e6, t5), this;
  }
};

export {
  n2 as n,
  e2 as e,
  o3 as o,
  l2 as l,
  u2 as u,
  r3 as r,
  e3 as e2,
  r2,
  t3 as t,
  u3 as u2,
  b
};
//# sourceMappingURL=chunk-FJ25BHAS.js.map
