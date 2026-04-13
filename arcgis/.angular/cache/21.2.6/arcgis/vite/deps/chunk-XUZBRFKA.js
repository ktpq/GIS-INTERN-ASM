import {
  e,
  n,
  o
} from "./chunk-E73BLMZG.js";
import {
  has
} from "./chunk-IDI4VM7T.js";

// node_modules/@arcgis/core/core/ObjectPool.js
function t(t3) {
  return t3?.release && "function" == typeof t3.release;
}
function i(t3) {
  return t3?.acquire && "function" == typeof t3.acquire;
}
var e2 = class _e {
  constructor(t3, i3, e5, s2 = 1, o3 = 0) {
    this._creator = t3, this._acquireFunction = i3, this._releaseFunction = e5, this.allocationSize = s2, this._pool = new Array(o3), this._initialSize = o3;
    for (let r = 0; r < o3; r++) this._pool[r] = this._creator();
    this.allocationSize = Math.max(s2, 1);
  }
  destroy() {
    this.prune(0);
  }
  acquire(...t3) {
    let s2;
    if (_e.test.disabled) s2 = this._creator();
    else {
      if (0 === this._pool.length) {
        const t4 = this.allocationSize;
        for (let i3 = 0; i3 < t4; i3++) this._pool[i3] = this._creator();
      }
      s2 = this._pool.pop();
    }
    return this._acquireFunction ? this._acquireFunction(s2, ...t3) : i(s2) && s2.acquire(...t3), s2;
  }
  release(i3) {
    i3 && !_e.test.disabled && (this._releaseFunction ? this._releaseFunction(i3) : t(i3) && i3.release(), this._pool.push(i3));
  }
  prune(t3 = this._initialSize) {
    if (!(t3 >= this._pool.length)) {
      for (let i3 = t3; i3 < this._pool.length; ++i3) {
        const t4 = this._pool[i3];
        this._dispose(t4);
      }
      this._pool.length = t3;
    }
  }
  _dispose(t3) {
    t3.dispose && "function" == typeof t3.dispose && t3.dispose();
  }
  static {
    this.test = { disabled: !!has("esri-tests-disable-memory-pools") };
  }
};

// node_modules/@arcgis/core/core/uid.js
var t2 = 0;
function e3() {
  return ++t2;
}

// node_modules/@arcgis/core/core/accessorSupport/get.js
function i2(t3, i3) {
  const e5 = t3.endsWith("?") ? t3.slice(0, -1) : t3;
  if (null != i3.getItemAt || Array.isArray(i3)) {
    const t4 = parseInt(e5, 10);
    if (!isNaN(t4)) return Array.isArray(i3) ? i3[t4] : i3.at(t4);
  }
  const u2 = n(i3);
  return e(u2, e5) ? u2.get(e5) : i3[e5];
}
function e4(t3, n2, r) {
  if (null == t3) return t3;
  const u2 = i2(n2[r], t3);
  return !u2 && r < n2.length - 1 ? void 0 : r === n2.length - 1 ? u2 : e4(u2, n2, r + 1);
}
function u(n2, r, u2 = 0) {
  return "string" != typeof r || r.includes(".") ? e4(n2, o(r), u2) : i2(r, n2);
}
function o2(t3, n2) {
  return u(t3, n2);
}
function s(t3, n2) {
  return void 0 !== u(n2, t3);
}

// node_modules/@arcgis/core/core/accessorSupport/Lifecycle.js
var I = { INITIALIZING: 0, CONSTRUCTING: 1, CONSTRUCTED: 2, DESTROYING: 3, DESTROYED: 4 };

export {
  e2 as e,
  e3 as e2,
  u,
  o2 as o,
  s,
  I
};
//# sourceMappingURL=chunk-XUZBRFKA.js.map
