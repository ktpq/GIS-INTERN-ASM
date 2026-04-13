import {
  J,
  sn
} from "./chunk-65PBNPQY.js";
import {
  M,
  R,
  d
} from "./chunk-2ZL6ZCDF.js";
import {
  O,
  T,
  U
} from "./chunk-TIZ3VJFS.js";
import {
  $
} from "./chunk-POW25PFR.js";
import {
  N
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var u = [0, 0];
function p(s, t) {
  if (!t) return null;
  if ("x" in t) {
    const e = { x: 0, y: 0 };
    return [e.x, e.y] = s(t.x, t.y, u), null != t.z && (e.z = t.z), null != t.m && (e.m = t.m), e;
  }
  if ("xmin" in t) {
    const e = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
    return [e.xmin, e.ymin] = s(t.xmin, t.ymin, u), [e.xmax, e.ymax] = s(t.xmax, t.ymax, u), t.hasZ && (e.zmin = t.zmin, e.zmax = t.zmax, e.hasZ = true), t.hasM && (e.mmin = t.mmin, e.mmax = t.mmax, e.hasM = true), e;
  }
  return "rings" in t ? { rings: c(t.rings, s), hasM: t.hasM, hasZ: t.hasZ } : "paths" in t ? { paths: c(t.paths, s), hasM: t.hasM, hasZ: t.hasZ } : "points" in t ? { points: h(t.points, s), hasM: t.hasM, hasZ: t.hasZ } : null;
}
function c(s, t) {
  const e = [];
  for (const n of s) e.push(h(n, t));
  return e;
}
function h(s, t) {
  const e = [];
  for (const n of s) {
    const s2 = t(n[0], n[1], [0, 0]);
    e.push(s2), n.length > 2 && s2.push(n[2]), n.length > 3 && s2.push(n[3]);
  }
  return e;
}
async function f(t, n) {
  if (!t || !n) return;
  const r = Array.isArray(t) ? t.map((s) => null != s.geometry ? s.geometry.spatialReference : null).filter(N) : [t];
  await sn(r.map((s) => ({ source: s, dest: n })));
}
var x = p.bind(null, d);
var y = p.bind(null, R);
function g(s, t, e, m) {
  if (!s) return null;
  if (e || (e = t, t = s.spatialReference), !U(t) || !U(e) || T(t, e)) return s;
  if (M(t, e)) {
    const t2 = O(e) ? x(s) : y(s);
    return t2.spatialReference = e, t2;
  }
  return J([s], t, e, m)[0];
}
var _ = class {
  constructor() {
    this._jobs = [], this._timer = null, this._process = this._process.bind(this);
  }
  async push(s, e, n, r) {
    if (!s?.length || !e || !n || T(e, n)) return s;
    const o = { geometries: s, inSpatialReference: e, outSpatialReference: n, options: r, resolve: $() };
    return this._jobs.push(o), this._timer ??= setTimeout(this._process, 10), o.resolve.promise;
  }
  _process() {
    this._timer = null;
    const s = this._jobs.shift();
    if (!s) return;
    const { geometries: t, inSpatialReference: e, outSpatialReference: r, resolve: i, options: m } = s, l = t.filter((s2) => null != s2);
    let u2;
    u2 = M(e, r) && null == m?.extendedParams ? O(r) ? l.map(x) : l.map(y) : J(l, e, r, m);
    let p2 = 0;
    i(t.map((s2) => null == s2 ? null : u2[p2++])), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
  }
};
var j = new _();
function M2(s, t, e, n) {
  return j.push(s, t, e, n);
}

export {
  f,
  g,
  M2 as M
};
//# sourceMappingURL=chunk-AR7ZBAWX.js.map
