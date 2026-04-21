import {
  a as a2,
  c as c2,
  d,
  f as f3,
  f2 as f4,
  u
} from "./chunk-3AZ5N7RH.js";
import {
  n as n2
} from "./chunk-4BJ3M6CP.js";
import {
  P
} from "./chunk-F32PRJK5.js";
import {
  f as f2
} from "./chunk-FNL3SIHY.js";
import {
  g
} from "./chunk-KNE7SVYH.js";
import {
  j
} from "./chunk-JXLQUNSA.js";
import {
  f2 as f
} from "./chunk-TPFIN626.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import {
  a3 as a,
  c,
  o,
  o4 as o2
} from "./chunk-7ELXYOAW.js";
import {
  N
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/support/RouteResult.js
var n3 = class extends n {
  constructor(t) {
    super(t), this.directionLines = null, this.directionPoints = null, this.directions = null, this.route = null, this.routeName = null, this.stops = null, this.traversedEdges = null, this.traversedJunctions = null, this.traversedTurns = null;
  }
};
__decorate([a({ type: g, json: { write: true } })], n3.prototype, "directionLines", void 0), __decorate([a({ type: g, json: { write: true } })], n3.prototype, "directionPoints", void 0), __decorate([a({ type: f4, json: { write: true } })], n3.prototype, "directions", void 0), __decorate([a({ type: j, json: { write: true } })], n3.prototype, "route", void 0), __decorate([a({ type: String, json: { write: true } })], n3.prototype, "routeName", void 0), __decorate([a({ type: [j], json: { write: true } })], n3.prototype, "stops", void 0), __decorate([a({ type: g, json: { write: true } })], n3.prototype, "traversedEdges", void 0), __decorate([a({ type: g, json: { write: true } })], n3.prototype, "traversedJunctions", void 0), __decorate([a({ type: g, json: { write: true } })], n3.prototype, "traversedTurns", void 0), n3 = __decorate([c("esri.rest.support.RouteResult")], n3);
var u2 = n3;

// node_modules/@arcgis/core/rest/support/RouteSolveResult.js
function u3(r) {
  return r ? g.fromJSON(r).features.filter(N) : [];
}
var y = class extends n {
  constructor(r) {
    super(r), this.checksum = null, this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(r, e) {
    return u3(e.barriers);
  }
  readPolylineBarriers(r) {
    return u3(r);
  }
  readPolygonBarriers(r) {
    return u3(r);
  }
};
__decorate([a({ type: String })], y.prototype, "checksum", void 0), __decorate([a({ type: [a2] })], y.prototype, "messages", void 0), __decorate([a({ type: [j] })], y.prototype, "pointBarriers", void 0), __decorate([o2("pointBarriers", ["barriers"])], y.prototype, "readPointBarriers", null), __decorate([a({ type: [j] })], y.prototype, "polylineBarriers", void 0), __decorate([o2("polylineBarriers")], y.prototype, "readPolylineBarriers", null), __decorate([a({ type: [j] })], y.prototype, "polygonBarriers", void 0), __decorate([o2("polygonBarriers")], y.prototype, "readPolygonBarriers", null), __decorate([a({ type: [u2] })], y.prototype, "routeResults", void 0), y = __decorate([c("esri.rest.support.RouteSolveResult")], y);

// node_modules/@arcgis/core/rest/route.js
function p(e) {
  return e instanceof g;
}
async function l(c3, f5, l2) {
  const y2 = [], d2 = [], h = {}, g2 = {}, R = f2(c3), { path: v } = R;
  p(f5.stops) && u(f5.stops.features, d2, "stops.features", h), p(f5.pointBarriers) && u(f5.pointBarriers.features, d2, "pointBarriers.features", h), p(f5.polylineBarriers) && u(f5.polylineBarriers.features, d2, "polylineBarriers.features", h), p(f5.polygonBarriers) && u(f5.polygonBarriers.features, d2, "polygonBarriers.features", h);
  const B = await P(d2);
  for (const e in h) {
    const r = h[e];
    y2.push(e), g2[e] = B.slice(r[0], r[1]);
  }
  if (c2(g2, y2)) {
    let e = null;
    try {
      e = await d(v, f5.apiKey, l2);
    } catch {
    }
    e && !e.hasZ && f3(g2, y2);
  }
  for (const e in g2) g2[e].forEach((t, s) => {
    o(f5, e)[s].geometry = t;
  });
  const E = __spreadProps(__spreadValues({}, l2), { query: __spreadProps(__spreadValues(__spreadValues({}, R.query), n2(f5)), { f: "json" }) }), T = v.endsWith("/solve") ? v : `${v}/solve`, { data: b } = await f(T, E);
  return m(b);
}
function m(e) {
  const { barriers: r, checksum: t, directionLines: s, directionPoints: o3, directions: a3, messages: u4, polygonBarriers: i, polylineBarriers: n4, routes: c3, stops: p2, traversedEdges: l2, traversedJunctions: m2, traversedTurns: y2 } = e, d2 = (e2) => {
    const r2 = g2.find((r3) => r3.routeName === e2);
    if (null != r2) return r2;
    const t2 = { routeId: g2.length + 1, routeName: e2 };
    return g2.push(t2), t2;
  }, h = (e2) => {
    const r2 = g2.find((r3) => r3.routeId === e2);
    if (null != r2) return r2;
    const t2 = { routeId: e2, routeName: null };
    return g2.push(t2), t2;
  }, g2 = [];
  c3?.features.forEach((e2, r2) => {
    e2.geometry.spatialReference = c3.spatialReference ?? void 0;
    const t2 = e2.attributes.Name, s2 = r2 + 1;
    g2.push({ routeId: s2, routeName: t2, route: e2 });
  }), a3?.forEach((e2) => {
    const { routeName: r2 } = e2;
    d2(r2).directions = e2;
  });
  const R = (p2?.features.every((e2) => null == e2.attributes.RouteName) ?? false) && g2.length > 0 ? g2[0].routeName : null;
  return p2?.features.forEach((e2) => {
    e2.geometry && (e2.geometry.spatialReference ??= p2.spatialReference ?? void 0);
    const r2 = R ?? e2.attributes.RouteName, t2 = d2(r2);
    t2.stops ??= [], t2.stops.push(e2);
  }), s?.features.forEach((e2) => {
    const r2 = e2.attributes.RouteID, t2 = h(r2), { geometryType: o4, spatialReference: a4 } = s;
    t2.directionLines ??= { features: [], geometryType: o4, spatialReference: a4 }, t2.directionLines.features.push(e2);
  }), o3?.features.forEach((e2) => {
    const r2 = e2.attributes.RouteID, t2 = h(r2), { geometryType: s2, spatialReference: a4 } = o3;
    t2.directionPoints ??= { features: [], geometryType: s2, spatialReference: a4 }, t2.directionPoints.features.push(e2);
  }), l2?.features.forEach((e2) => {
    const r2 = e2.attributes.RouteID, t2 = h(r2), { geometryType: s2, spatialReference: o4 } = l2;
    t2.traversedEdges ??= { features: [], geometryType: s2, spatialReference: o4 }, t2.traversedEdges.features.push(e2);
  }), m2?.features.forEach((e2) => {
    const r2 = e2.attributes.RouteID, t2 = h(r2), { geometryType: s2, spatialReference: o4 } = m2;
    t2.traversedJunctions ??= { features: [], geometryType: s2, spatialReference: o4 }, t2.traversedJunctions.features.push(e2);
  }), y2?.features.forEach((e2) => {
    const r2 = e2.attributes.RouteID, t2 = h(r2);
    t2.traversedTurns ??= { features: [] }, t2.traversedTurns.features.push(e2);
  }), y.fromJSON({ barriers: r, checksum: t, messages: u4, polygonBarriers: i, polylineBarriers: n4, routeResults: g2 });
}

export {
  l
};
//# sourceMappingURL=chunk-CXJ63PBP.js.map
