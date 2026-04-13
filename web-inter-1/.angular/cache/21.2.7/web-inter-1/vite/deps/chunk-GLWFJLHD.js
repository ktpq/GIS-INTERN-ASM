// node_modules/@arcgis/core/core/compilerUtils.js
function n(n3) {
  return () => n3;
}
function r(n3) {
  return n3;
}

// node_modules/@arcgis/core/core/RandomLCG.js
var t = class _t {
  static {
    this._m = 2147483647;
  }
  static {
    this._a = 48271;
  }
  static {
    this._c = 0;
  }
  constructor(t3 = 1) {
    this._seed = t3;
  }
  set seed(e3) {
    this._seed = e3 ?? Math.random() * _t._m;
  }
  getInt() {
    return this._seed = (_t._a * this._seed + _t._c) % _t._m, this._seed;
  }
  getFloat() {
    return this.getInt() / (_t._m - 1);
  }
  getIntRange(t3, e3) {
    return Math.round(this.getFloatRange(t3, e3));
  }
  getFloatRange(e3, s3) {
    const a3 = s3 - e3;
    return e3 + this.getInt() / _t._m * a3;
  }
};

// node_modules/@arcgis/core/core/arrayUtils.js
var e = 1.5;
var r2 = 1 / e;
var l = 0.5;
function o(n3) {
  return n3;
}
function f(n3, t3 = o) {
  if (!n3 || 0 === n3.length) return;
  let e3 = n3[0], r4 = t3(e3);
  for (let l3 = 1; l3 < n3.length; ++l3) {
    const u2 = n3[l3], o3 = Number(t3(u2));
    o3 > r4 && (r4 = o3, e3 = u2);
  }
  return e3;
}
function i(n3, t3 = o) {
  return f(n3, (n4) => -t3(n4));
}
function c(n3, t3) {
  return t3 ? n3.filter((n4, e3, r4) => r4.findIndex(t3.bind(null, n4)) === e3) : Array.from(new Set(n3));
}
function s(n3, t3, e3, r4, l3, u2, o3) {
  if (null == n3 && null == r4) return true;
  t3 = Math.max(0, t3), l3 = Math.max(0, l3), e3 = Math.max(0, e3 < 0 ? (n3?.length ?? 0) + e3 : e3), u2 = Math.max(0, u2 < 0 ? (r4?.length ?? 0) + u2 : u2);
  const f3 = e3 - t3;
  if (null == n3 || null == r4 || f3 !== u2 - l3) return false;
  if (o3) {
    for (let i3 = 0; i3 < f3; i3++) if (!o3(n3[t3 + i3], r4[l3 + i3])) return false;
  } else for (let i3 = 0; i3 < f3; i3++) if (n3[t3 + i3] !== r4[l3 + i3]) return false;
  return true;
}
function h(n3, t3, e3) {
  return s(n3, 0, n3?.length ?? 0, t3, 0, t3?.length ?? 0, e3);
}
function a() {
  return (n3, t3) => {
    if (null == n3 && null == t3) return true;
    if (null == n3 || null == t3 || n3.length !== t3.length) return false;
    for (let e3 = 0; e3 < n3.length; e3++) if (n3[e3] !== t3[e3]) return false;
    return true;
  };
}
function d(n3, t3, e3) {
  let r4, l3;
  return e3 ? (r4 = t3.filter((t4) => !n3.some((n4) => e3(n4, t4))), l3 = n3.filter((n4) => !t3.some((t4) => e3(t4, n4)))) : (r4 = t3.filter((t4) => !n3.includes(t4)), l3 = n3.filter((n4) => !t3.includes(n4))), { added: r4, removed: l3 };
}
function p(n3) {
  return n3 && "number" == typeof n3.length;
}
function M(n3, t3) {
  const e3 = n3.length;
  if (0 === e3) return [];
  const r4 = [];
  for (let l3 = 0; l3 < e3; l3 += t3) r4.push(n3.slice(l3, l3 + t3));
  return r4;
}
var y = class {
  constructor() {
    this.last = 0;
  }
};
var A = new y();
function b(n3, t3, e3, r4) {
  r4 = r4 || A;
  const l3 = Math.max(0, r4.last - 10);
  for (let o3 = l3; o3 < e3; ++o3) if (n3[o3] === t3) return r4.last = o3, o3;
  const u2 = Math.min(l3, e3);
  for (let o3 = 0; o3 < u2; ++o3) if (n3[o3] === t3) return r4.last = o3, o3;
  return -1;
}
function S(t3, e3, r4, l3) {
  const u2 = r4 ?? t3.length, o3 = b(t3, r(e3), u2, l3);
  if (-1 !== o3) return t3[o3] = t3[u2 - 1], null == r4 && t3.pop(), e3;
}
var j = /* @__PURE__ */ new Set();
function v(n3, t3, e3 = n3.length, r4 = t3.length, l3, u2) {
  if (0 === r4 || 0 === e3) return e3;
  j.clear();
  for (let f3 = 0; f3 < r4; ++f3) j.add(t3[f3]);
  l3 = l3 || A;
  const o3 = Math.max(0, l3.last - 10);
  for (let f3 = o3; f3 < e3; ++f3) if (j.has(n3[f3]) && (u2?.push(n3[f3]), j.delete(n3[f3]), n3[f3] = n3[e3 - 1], --e3, --f3, 0 === j.size || 0 === e3)) return j.clear(), e3;
  for (let f3 = 0; f3 < o3; ++f3) if (j.has(n3[f3]) && (u2?.push(n3[f3]), j.delete(n3[f3]), n3[f3] = n3[e3 - 1], --e3, --f3, 0 === j.size || 0 === e3)) return j.clear(), e3;
  return j.clear(), e3;
}
function z(n3, t3) {
  let e3 = 0;
  for (let r4 = 0; r4 < n3.length; ++r4) {
    const l3 = n3[r4];
    t3(l3, r4) && (n3[e3] = l3, e3++);
  }
  return n3.length = e3, n3;
}
function I(n3, t3, e3) {
  const r4 = n3.length;
  if (t3 >= r4) return n3.slice();
  const l3 = C(e3), u2 = /* @__PURE__ */ new Set(), o3 = [];
  for (; o3.length < t3; ) {
    const t4 = Math.floor(l3() * r4);
    u2.has(t4) || (u2.add(t4), o3.push(n3[t4]));
  }
  return o3;
}
function C(n3) {
  return n3 ? (F.seed = n3, () => F.getFloat()) : Math.random;
}
var F = new t();
function G(n3, t3) {
  if (!n3) return n3;
  const e3 = C(t3);
  for (let r4 = n3.length - 1; r4 > 0; r4--) {
    const t4 = Math.floor(e3() * (r4 + 1)), l3 = n3[r4];
    n3[r4] = n3[t4], n3[t4] = l3;
  }
  return n3;
}
function L(n3, t3) {
  const e3 = n3.indexOf(t3);
  return -1 !== e3 ? (n3.splice(e3, 1), t3) : null;
}
function N(n3, t3) {
  return null != n3;
}
function O(n3, ...t3) {
  for (const e3 of t3) null != e3 && n3.push(e3);
  return n3.length;
}
function U(n3) {
  return Array.isArray(n3);
}
var q = [];

// node_modules/@arcgis/core/core/typedArrayUtil.js
function n2(n3) {
  return n3 instanceof ArrayBuffer;
}
function r3(n3) {
  return "Int8Array" === n3?.constructor?.name;
}
function t2(n3) {
  return "Uint8Array" === n3?.constructor?.name;
}
function u(n3) {
  return "Uint8ClampedArray" === n3?.constructor?.name;
}
function o2(n3) {
  return "Int16Array" === n3?.constructor?.name;
}
function c2(n3) {
  return "Uint16Array" === n3?.constructor?.name;
}
function e2(n3) {
  return "Int32Array" === n3?.constructor?.name;
}
function a2(n3) {
  return "Uint32Array" === n3?.constructor?.name;
}
function i2(n3) {
  return "Float16Array" === n3?.constructor?.name;
}
function f2(n3) {
  return "Float32Array" === n3?.constructor?.name;
}
function s2(n3) {
  return "Float64Array" === n3?.constructor?.name;
}
function m(n3) {
  return "buffer" in n3;
}
var y2 = 1024;
function A2(n3) {
  return s2(n3) || f2(n3) || e2(n3) || o2(n3) || r3(n3);
}
function l2(n3) {
  return s2(n3) || f2(n3);
}
function U2(n3) {
  return s2(n3) ? 179769e303 : i2(n3) ? 65504 : f2(n3) ? 3402823e32 : a2(n3) ? 4294967295 : c2(n3) ? 65535 : t2(n3) || u(n3) ? 255 : e2(n3) ? 2147483647 : o2(n3) ? 32767 : r3(n3) ? 127 : 256;
}
var F2 = -32768;
var I2 = -2147483648;
var b2 = 2 ** 32 - 1;
function d2(n3) {
  return n3;
}

export {
  n,
  r,
  t,
  e,
  r2,
  l,
  i,
  c,
  s,
  h,
  a,
  d,
  p,
  M,
  y,
  b,
  S,
  v,
  z,
  I,
  C,
  G,
  L,
  N,
  O,
  U,
  q,
  n2,
  r3,
  t2,
  u,
  o2 as o,
  c2,
  e2,
  a2,
  i2,
  f2 as f,
  s2,
  m,
  y2,
  A2 as A,
  l2,
  U2,
  F2 as F,
  I2,
  d2
};
//# sourceMappingURL=chunk-GLWFJLHD.js.map
