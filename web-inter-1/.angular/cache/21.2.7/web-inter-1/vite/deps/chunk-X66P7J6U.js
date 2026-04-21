import {
  r
} from "./chunk-35U22IME.js";
import {
  n,
  r as r2
} from "./chunk-JDO3PFYI.js";
import {
  t
} from "./chunk-OVDW6BG5.js";
import {
  t as t2
} from "./chunk-Y3RUSY4O.js";
import {
  P
} from "./chunk-F32PRJK5.js";
import {
  I,
  V,
  f2 as f
} from "./chunk-TPFIN626.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/operations/query.js
var a = "Layer does not support extent calculation.";
function y(t3, n2, r3) {
  return n(t3, n2, r3);
}
async function l(t3, n2, r3, e, o) {
  const u = n2.timeExtent?.isEmpty ? { features: [] } : await E(t3, n2, "json", e, void 0, o);
  return t2(n2, r3, u), u;
}
async function f2(t3, n2, r3, e, o) {
  if (n2.timeExtent?.isEmpty) return r3.featureSet;
  const s = await m(t3, n2, e, o);
  return r(s, r3);
}
function m(t3, n2, r3, e) {
  return E(t3, n2, "pbf", r3, void 0, e);
}
function p(t3, n2, r3, e) {
  return n2.timeExtent?.isEmpty ? Promise.resolve({ objectIds: [] }) : E(t3, n2, "json", r3, { returnIdsOnly: true }, e);
}
async function O(t3, n2, r3, e) {
  return n2.timeExtent?.isEmpty ? 0 : (await E(t3, n2, "json", r3, { returnIdsOnly: true, returnCountOnly: true }, e)).count;
}
async function d(t3, n2, r3) {
  if (n2.timeExtent?.isEmpty) return { count: 0, extent: null };
  const e = await E(t3, n2, r2, r3, { returnExtentOnly: true, returnCountOnly: true });
  if (e.hasOwnProperty("extent")) return e;
  const o = "string" == typeof t3 ? t3 : t3.path;
  if (/\/imageserver\/?$/i.test(o) && e.hasOwnProperty("count")) {
    const o2 = await E(t3, n2, r2, r3, { returnExtentOnly: true });
    return { count: e.count, extent: o2.extent };
  }
  if (e.features) throw new Error(a);
  if (e.hasOwnProperty("count")) throw new Error(a);
  return e;
}
function w(t3, n2) {
  if (!t3.returnIdsOnly || !n2.uniqueIdFields) return t3;
  const r3 = __spreadProps(__spreadValues({}, t3), { returnUniqueIdsOnly: true });
  return delete r3.returnIdsOnly, r3;
}
async function E(n2, r3, e, o = {}, u = {}, s = {}) {
  const i = await j(n2, r3, e, o, u, s), c = "json" === e ? "json" : "array-buffer";
  return f(i.url, __spreadValues({ responseType: c }, i.options)).then(({ data: t3 }) => t3);
}
async function j(t3, u, s, i, c = {}, a2 = {}) {
  const l2 = "string" == typeof t3 ? I(t3) : t3, f3 = u.geometry ? [u.geometry] : [], m2 = await P(f3, null, { signal: i.signal }), p2 = m2?.[0];
  if (null != p2) {
    const t4 = u.clone();
    t4.geometry = p2.clone(), u = t4;
  }
  const O2 = t(__spreadValues(__spreadValues(__spreadProps(__spreadValues({}, l2.query), { f: s }), w(c, a2)), y(u, c, a2)));
  return i = __spreadProps(__spreadValues({}, i), { query: __spreadValues(__spreadValues({}, O2), i.query) }), new x(V(l2.path, h(u, c) ? "query3d" : "query"), i);
}
var x = class {
  constructor(t3, n2) {
    this.url = t3, this.options = n2;
  }
};
function h(t3, n2) {
  return null != t3.formatOf3DObjects && !(n2.returnCountOnly || n2.returnExtentOnly || n2.returnIdsOnly);
}

export {
  l,
  f2 as f,
  m,
  p,
  O,
  d,
  j
};
//# sourceMappingURL=chunk-X66P7J6U.js.map
