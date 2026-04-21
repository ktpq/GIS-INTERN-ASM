import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/handleUtils.js
var n = { remove: () => {
} };
function e(e4) {
  return e4 ? { remove() {
    e4 && (e4(), e4 = void 0);
  } } : n;
}
function o(n5) {
  n5.forEach((n6) => n6?.remove());
}
function r2(n5) {
  o(n5), n5.length = 0;
}
function t(n5) {
  return e(() => o(n5));
}
function u(n5) {
  return e(() => n5()?.remove());
}
function i(n5) {
  return e(() => n5?.abort());
}
function c(n5) {
  return e(null != n5 ? () => n5.destroy() : void 0);
}
function f(n5) {
  return "object" == typeof n5 && !!n5 && "remove" in n5 && "function" == typeof n5.remove;
}
function l(n5) {
  f(n5) && n5.remove();
}
function m(n5) {
  return { [Symbol.dispose]() {
    n5.remove();
  } };
}

// node_modules/@arcgis/core/core/maybe.js
function n2(n5, u4) {
  if (null == n5) throw new Error(u4 ?? "value is None");
}
function u2(n5) {
  return n5?.destroy(), null;
}
function r3(n5) {
  return n5?.dispose(), null;
}
function l2(n5) {
  return n5?.remove(), null;
}
function e2(n5) {
  return n5?.abort(), null;
}
function t2(n5) {
  return n5?.release(), null;
}
function o2(n5, u4, r5) {
  return null != n5 && null != u4 ? null != r5 ? r5(n5, u4) : n5.equals(u4) : n5 === u4;
}
function f2(n5, u4) {
  let r5;
  return n5.some((n6, l4) => (r5 = u4(n6, l4), null != r5)), r5 ?? void 0;
}

// node_modules/@arcgis/core/core/clock.js
function e3(e4) {
  return { setTimeout: (o5, r5) => {
    const i3 = e4.setTimeout(o5, r5);
    return e(() => e4.clearTimeout(i3));
  } };
}
var o3 = e3(globalThis);

// node_modules/@arcgis/core/core/events.js
function n3(e4) {
  return t3(e4) || r4(e4);
}
function t3(e4) {
  return null != e4 && "object" == typeof e4 && "on" in e4 && "function" == typeof e4.on;
}
function r4(e4) {
  return null != e4 && "object" == typeof e4 && "addEventListener" in e4 && "function" == typeof e4.addEventListener;
}
function o4(e4, t4, o5) {
  if (!n3(e4)) throw new TypeError("target is not a Evented or EventTarget object");
  return r4(e4) ? i2(e4, t4, o5) : e4.on(t4, o5);
}
function i2(n5, t4, r5, o5) {
  if (Array.isArray(t4)) {
    const i3 = t4.slice();
    for (const e4 of i3) n5.addEventListener(e4, r5, o5);
    return e(() => {
      for (const e4 of i3) n5.removeEventListener(e4, r5, o5);
    });
  }
  return n5.addEventListener(t4, r5, o5), e(() => n5.removeEventListener(t4, r5, o5));
}
function c2(e4, t4, r5) {
  if (!n3(e4)) throw new TypeError("target is not a Evented or EventTarget object");
  if ("once" in e4) return e4.once(t4, r5);
  const i3 = o4(e4, t4, (n5) => {
    i3.remove(), r5.call(e4, n5);
  });
  return i3;
}

// node_modules/@arcgis/core/core/promiseUtils.js
function u3(t4 = "Aborted") {
  return new r("AbortError", t4);
}
function s(t4, r5 = "Aborted") {
  if (a(t4)) throw u3(r5);
}
function l3(t4) {
  return t4 instanceof AbortSignal ? t4 : t4?.signal ?? void 0;
}
function a(t4) {
  const r5 = l3(t4);
  return null != r5 && r5.aborted;
}
function f3(t4) {
  if (d(t4)) throw t4;
}
function m2(t4) {
  if (!d(t4)) throw t4;
}
function w(t4, r5) {
  const n5 = l3(t4);
  if (null != n5) {
    if (!n5.aborted) return c2(n5, "abort", () => r5());
    r5();
  }
}
function h(t4, r5) {
  const n5 = l3(t4);
  if (null != n5) return s(n5), c2(n5, "abort", () => r5(u3()));
}
function p(t4, r5) {
  return null == l3(r5) ? t4 : new Promise((e4, n5) => {
    let i3 = w(r5, () => n5(u3()));
    const s2 = () => {
      i3 = l2(i3);
    };
    t4.then(s2, s2), t4.then(e4, n5);
  });
}
function d(t4) {
  return "AbortError" === t4?.name;
}
async function y(t4) {
  try {
    return await t4;
  } catch (r5) {
    if (!d(r5)) throw r5;
    return;
  }
}
async function j(t4) {
  if (!t4) return;
  if ("function" != typeof t4.forEach) {
    const r6 = Object.keys(t4), e4 = r6.map((r7) => t4[r7]), n5 = await j(e4), o5 = {};
    return r6.map((t5, r7) => o5[t5] = n5[r7]), o5;
  }
  const r5 = t4;
  return Promise.allSettled(r5).then((t5) => Array.from(r5, (r6, e4) => {
    const n5 = t5[e4];
    return "fulfilled" === n5.status ? { promise: r6, value: n5.value } : { promise: r6, error: n5.reason };
  }));
}
async function A(t4) {
  return (await Promise.allSettled(t4)).filter((t5) => "fulfilled" === t5.status).map((t5) => t5.value);
}
async function P(t4) {
  return (await Promise.allSettled(t4)).filter((t5) => "rejected" === t5.status).map((t5) => t5.reason);
}
function T(t4, r5 = void 0, e4) {
  const n5 = new AbortController();
  return w(e4, () => n5.abort()), new Promise((e5, o5) => {
    let i3 = setTimeout(() => {
      i3 = 0, e5(r5);
    }, t4);
    w(n5, () => {
      i3 && (clearTimeout(i3), o5(u3()));
    });
  });
}
function E(t4, e4, n5, o5) {
  const i3 = n5 && "abort" in n5 ? n5 : null;
  null != o5 || i3 || (o5 = n5);
  let u4 = setTimeout(() => {
    u4 = 0, i3?.abort();
  }, e4);
  const s2 = () => o5 || new r("promiseUtils:timeout", "The wrapped promise did not resolve within " + e4 + " ms");
  return t4.then((t5) => {
    if (0 === u4) throw s2();
    return clearTimeout(u4), t5;
  }, (t5) => {
    throw clearTimeout(u4), 0 === u4 ? s2() : t5;
  });
}
function S(t4, r5) {
  const e4 = new AbortController(), n5 = setTimeout(() => e4.abort(), r5);
  return w(t4, () => {
    e4.abort(), clearTimeout(n5);
  }), __spreadProps(__spreadValues({}, t4), { signal: e4.signal });
}
function C(t4) {
  return t4 && "function" == typeof t4.then;
}
function k(t4) {
  return C(t4) ? t4 : Promise.resolve(t4);
}
function L(t4, r5 = -1) {
  let e4, n5, o5, i3, s2 = null;
  const c3 = (...l4) => {
    if (e4) {
      n5 = l4, i3 && i3.reject(u3()), i3 = $();
      const t5 = i3.promise;
      if (s2) {
        const t6 = s2;
        s2 = null, t6.abort();
      }
      return t5;
    }
    if (o5 = i3 || $(), i3 = null, r5 > 0) {
      const n6 = new AbortController();
      e4 = k(t4(...l4, n6.signal));
      const o6 = e4;
      T(r5).then(() => {
        e4 === o6 && (i3 ? n6.abort() : s2 = n6);
      });
    } else e4 = 1, e4 = k(t4(...l4));
    const a2 = () => {
      const t5 = n5;
      n5 = o5 = e4 = s2 = null, null != t5 && c3(...t5);
    }, f4 = e4, m3 = o5;
    return f4.then(a2, a2), f4.then(m3.resolve, m3.reject), m3.promise;
  };
  return c3;
}
function $() {
  let r5, e4;
  const n5 = new Promise((t4, n6) => {
    r5 = t4, e4 = n6;
  }), o5 = (t4) => {
    r5(t4);
  };
  return o5.resolve = (t4) => r5(t4), o5.reject = (t4) => e4(t4), o5.timeout = (r6, e5) => o3.setTimeout(() => o5.reject(e5), r6), o5.promise = n5, o5;
}
function D(t4, r5) {
  r5.then(t4.resolve, t4.reject);
}
async function O(t4) {
  await Promise.resolve(), s(t4);
}

export {
  e,
  o,
  r2 as r,
  t,
  u,
  i,
  c,
  l,
  m,
  n3 as n,
  o4 as o2,
  c2,
  n2,
  u2,
  r3 as r2,
  l2,
  e2,
  t2,
  o2 as o3,
  f2 as f,
  o3 as o4,
  u3,
  s,
  l3,
  a,
  f3 as f2,
  m2,
  w,
  h,
  p,
  d,
  y,
  j,
  A,
  P,
  T,
  E,
  S,
  C,
  k,
  L,
  $,
  D,
  O
};
//# sourceMappingURL=chunk-2KP24SU5.js.map
