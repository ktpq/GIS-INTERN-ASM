import {
  e as e2
} from "./chunk-PNVUVXFO.js";
import {
  n
} from "./chunk-UG7GC5ST.js";
import {
  v
} from "./chunk-WSE2ZKFY.js";
import {
  te
} from "./chunk-DMD5CGVA.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  s
} from "./chunk-2KP24SU5.js";
import {
  a,
  l3 as l
} from "./chunk-XE7VYYSA.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationAlignment.js
function r(e4 = false, t2) {
  if (e4) {
    const { elevationInfo: e5, alignPointsInFeatures: s3 } = t2;
    return new u(e5, s3);
  }
  return new a2();
}
var a2 = class {
  async alignCandidates(e4, t2, s3) {
    return e4;
  }
  notifyElevationSourceChange() {
  }
};
var c = 1024;
var u = class {
  constructor(t2, s3) {
    this._elevationInfo = t2, this._alignPointsInFeatures = s3, this._alignmentsCache = new e2(c), this._cacheVersion = 0;
  }
  async alignCandidates(e4, t2, s3) {
    const n3 = this._elevationInfo;
    return null == n3 || "absolute-height" !== n3.mode || n3.featureExpressionInfo ? this._alignComputedElevationCandidates(e4, t2, s3) : (p(e4, t2, n3), e4);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  async _alignComputedElevationCandidates(e4, n3, o3) {
    const i3 = /* @__PURE__ */ new Map();
    for (const s3 of e4) e(i3, s3.objectId, d).push(s3);
    const [r4, a5, c4] = this._prepareQuery(i3, n3), u2 = await this._alignPointsInFeatures(r4, o3);
    s(o3);
    if (c4 !== this._cacheVersion) return this._alignComputedElevationCandidates(e4, n3, o3);
    this._applyCacheAndResponse(r4, u2, a5);
    const { drapedObjectIds: h2, failedObjectIds: l3 } = u2, p2 = [];
    for (const t2 of e4) {
      const { objectId: e5 } = t2;
      h2.has(e5) && "edge" === t2.type && (t2.draped = true), l3.has(e5) || p2.push(t2);
    }
    return p2;
  }
  _prepareQuery(e4, t2) {
    const s3 = [], n3 = [];
    for (const [o3, i3] of e4) {
      const e5 = [];
      for (const t3 of i3) this._addToQueriesOrCachedResult(o3, t3.target, e5, n3), "edge" === t3.type && (this._addToQueriesOrCachedResult(o3, t3.start, e5, n3), this._addToQueriesOrCachedResult(o3, t3.end, e5, n3));
      0 !== e5.length && s3.push({ objectId: o3, points: e5 });
    }
    return [{ spatialReference: t2.toJSON(), pointsInFeatures: s3 }, n3, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e4, t2, s3, n3) {
    const o3 = l2(e4, t2), i3 = this._alignmentsCache.get(o3);
    null == i3 ? s3.push(t2) : n3.push(new h(t2, i3));
  }
  _applyCacheAndResponse(e4, { elevations: t2, drapedObjectIds: s3, failedObjectIds: n3 }, o3) {
    for (const a5 of o3) a5.apply();
    let i3 = 0;
    const r4 = this._alignmentsCache;
    for (const { objectId: a5, points: c4 } of e4.pointsInFeatures) {
      if (n3.has(a5)) {
        i3 += c4.length;
        continue;
      }
      const e5 = !s3.has(a5);
      for (const s4 of c4) {
        const n4 = l2(a5, s4), o4 = t2[i3++];
        s4.z = o4, e5 && r4.put(n4, o4, 1);
      }
    }
  }
};
var h = class {
  constructor(e4, t2) {
    this.point = e4, this.z = t2;
  }
  apply() {
    this.point.z = this.z;
  }
};
function l2(e4, { x: t2, y: s3, z: n3, spatialReference: o3 }) {
  return `${e4}-${t2}-${s3}-${n3 ?? 0}}-wkid:${o3?.wkid}`;
}
function p(e4, t2, s3) {
  const { offset: r4, unit: a5 } = s3;
  if (null == r4) return;
  const c4 = te(t2), u2 = r4 * (n(a5 ?? "meters") / c4);
  for (const n3 of e4) switch (n3.type) {
    case "edge":
      n3.start.z += u2, n3.end.z += u2, n3.curve && (v(n3.curve)[2] += u2);
      continue;
    case "vertex":
      n3.target.z += u2;
      continue;
  }
}
function d() {
  return [];
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/snappingCandidateElevationFilter.js
var t = class {
  filter(t2, n3) {
    return n3;
  }
  notifyElevationSourceChange() {
  }
};
var n2 = class {
  filter(t2, n3) {
    const { point: r4, distance: o3 } = t2, { z: c4 } = r4;
    if (!(null != c4)) return n3;
    if (0 === n3.length) return n3;
    const i3 = s2(o3), u2 = this._updateCandidatesTo3D(n3, r4, i3).filter(e3);
    return u2.sort(a3), u2;
  }
  _updateCandidatesTo3D(t2, n3, e4) {
    for (const r4 of t2) switch (r4.type) {
      case "edge":
        o(r4, n3, e4);
        continue;
      case "vertex":
        i(r4, n3, e4);
        continue;
    }
    return t2;
  }
};
function e3(t2) {
  return t2.distance <= 1;
}
function r2(e4 = false) {
  return e4 ? new n2() : new t();
}
function o(t2, n3, { x: e4, y: r4, z: o3 }) {
  const { start: i3, end: s3, target: a5 } = t2;
  if (t2.curve) throw new Error("Curves are not yet supported.");
  t2.draped || c2(a5, n3, i3, s3);
  const u2 = (n3.x - a5.x) / e4, d2 = (n3.y - a5.y) / r4, f = (n3.z - a5.z) / o3;
  t2.distance = Math.sqrt(u2 * u2 + d2 * d2 + f * f);
}
function c2(t2, n3, e4, r4) {
  const o3 = r4.x - e4.x, c4 = r4.y - e4.y, i3 = r4.z - e4.z, s3 = o3 * o3 + c4 * c4 + i3 * i3, a5 = (n3.x - e4.x) * o3 + (n3.y - e4.y) * c4 + i3 * (n3.z - e4.z), u2 = Math.min(1, Math.max(0, a5 / s3)), d2 = e4.x + o3 * u2, f = e4.y + c4 * u2, y = e4.z + i3 * u2;
  t2.x = d2, t2.y = f, t2.z = y;
}
function i(t2, n3, { x: e4, y: r4, z: o3 }) {
  const { target: c4 } = t2, i3 = (n3.x - c4.x) / e4, s3 = (n3.y - c4.y) / r4, a5 = (n3.z - c4.z) / o3, u2 = Math.sqrt(i3 * i3 + s3 * s3 + a5 * a5);
  t2.distance = u2;
}
function s2(t2) {
  return "number" == typeof t2 ? { x: t2, y: t2, z: t2 } : t2;
}
function a3(t2, n3) {
  return t2.distance - n3.distance;
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/symbologySnappingCandidates.js
function o2(t2 = false, e4) {
  return t2 ? new i2(e4) : new c3();
}
var c3 = class {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
};
var r3 = 1024;
var i2 = class {
  constructor(t2) {
    this._getSymbologyCandidates = t2, this._candidatesCache = new e2(r3), this._cacheVersion = 0;
  }
  async fetch(e4, s3) {
    if (0 === e4.length) return [];
    const o3 = [], c4 = [], r4 = this._candidatesCache;
    for (const n3 of e4) {
      const e5 = a4(n3), s4 = r4.get(e5);
      if (s4) for (const n4 of s4) c4.push(a(n4));
      else o3.push(n3), r4.put(e5, [], 1);
    }
    if (0 === o3.length) return c4;
    const i3 = this._cacheVersion, { candidates: h2, sourceCandidateIndices: d2 } = await this._getSymbologyCandidates(o3, s3);
    s(s3);
    if (i3 !== this._cacheVersion) return this.fetch(e4, s3);
    const f = [], { length: g } = h2;
    for (let n3 = 0; n3 < g; ++n3) {
      const e5 = h2[n3], s4 = a4(o3[d2[n3]]), c5 = r4.get(s4);
      c5.push(e5), r4.put(s4, c5, c5.length), f.push(a(e5));
    }
    return c4.concat(f);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
};
function a4(t2) {
  switch (t2.type) {
    case "vertex": {
      const { objectId: e4, target: n3 } = t2, o3 = `${e4}-vertex-${n3.x}-${n3.y}-${n3.z ?? 0}`;
      return l(o3).toString();
    }
    case "edge": {
      const { objectId: e4, start: n3, end: o3 } = t2, c4 = `${e4}-edge-${n3.x}-${n3.y}-${n3.z ?? 0}-to-${o3.x}-${o3.y}-${o3.z ?? 0}`;
      return l(c4).toString();
    }
    default:
      return "";
  }
}

export {
  r,
  r2,
  o2 as o
};
//# sourceMappingURL=chunk-XURGJML3.js.map
