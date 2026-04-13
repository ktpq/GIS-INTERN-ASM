import {
  t
} from "./chunk-3JCQU56S.js";
import {
  S,
  Y,
  o
} from "./chunk-D2Z2HLWL.js";
import {
  s
} from "./chunk-VJCO7ZMT.js";
import {
  Fe,
  d
} from "./chunk-WDPGHXN4.js";
import {
  P
} from "./chunk-LANOLZOB.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js
var u = { LineString: "esriGeometryPolyline", MultiLineString: "esriGeometryPolyline", MultiPoint: "esriGeometryMultipoint", Point: "esriGeometryPoint", Polygon: "esriGeometryPolygon", MultiPolygon: "esriGeometryPolygon" };
function f(e) {
  return u[e];
}
function* p(e) {
  switch (e.type) {
    case "Feature":
      yield e;
      break;
    case "FeatureCollection":
      for (const t2 of e.features) t2 && (yield t2);
  }
}
function* a(e) {
  if (e) switch (e.type) {
    case "Point":
      yield e.coordinates;
      break;
    case "LineString":
    case "MultiPoint":
      yield* e.coordinates;
      break;
    case "MultiLineString":
    case "Polygon":
      for (const t2 of e.coordinates) yield* t2;
      break;
    case "MultiPolygon":
      for (const t2 of e.coordinates) for (const e2 of t2) yield* e2;
  }
}
function* y(e, t2 = {}) {
  const { geometryType: o2, objectIdField: n } = t2;
  for (const r2 of e) {
    const { geometry: e2, properties: s2, id: c } = r2;
    if (e2 && f(e2.type) !== o2) continue;
    const l = s2 || {};
    let u2;
    n && (u2 = l[n], null == c || u2 || (l[n] = u2 = c)), yield new o(e2 && P2(e2, t2), l, null, u2);
  }
}
function d2(e) {
  for (const t2 of e) if (t2.length > 2) return true;
  return false;
}
function g(e) {
  return !h(e);
}
function m(e) {
  return h(e);
}
function h(e) {
  let t2 = 0;
  for (let o2 = 0; o2 < e.length; o2++) {
    const n = e[o2], r2 = e[(o2 + 1) % e.length];
    t2 += n[0] * r2[1] - r2[0] * n[1];
  }
  return t2 <= 0;
}
function w(e) {
  const t2 = e[0], o2 = e[e.length - 1];
  t2[0] === o2[0] && t2[1] === o2[1] && t2[2] === o2[2] || e.push(t2);
}
function P2(e, t2) {
  const { coordinates: o2, type: i } = e, c = t2.hasZ ?? false, l = true;
  switch (i) {
    case "Point":
      return new s([], [...o2], c, false);
    case "LineString":
      return S({ paths: [o2], hasZ: l }, c, false);
    case "MultiLineString":
      return S({ paths: o2, hasZ: l }, c, false);
    case "MultiPoint":
      return Y({ points: o2, hasZ: l }, c, false);
    case "Polygon":
    case "MultiPolygon": {
      const e2 = new s([], [], c, false);
      for (const t3 of "Polygon" === i ? [o2] : o2) {
        j(e2, t3[0], c);
        for (let o3 = 1; o3 < t3.length; o3++) b(e2, t3[o3], c);
      }
      return e2;
    }
  }
}
function j(e, t2, o2) {
  w(t2), g(t2) ? F(e, t2, o2) : S2(e, t2, o2);
}
function b(e, t2, o2) {
  w(t2), m(t2) ? F(e, t2, o2) : S2(e, t2, o2);
}
function S2(e, t2, o2) {
  for (const n of t2) G(e, n, o2);
  e.lengths.push(t2.length);
}
function F(e, t2, o2) {
  for (let n = t2.length - 1; n >= 0; n--) G(e, t2[n], o2);
  e.lengths.push(t2.length);
}
function G(e, [t2, o2, n], r2) {
  e.coords.push(t2, o2), r2 && e.coords.push(n || 0);
}
function k(t2) {
  switch (typeof t2) {
    case "string":
      return t(t2) ? "esriFieldTypeDate" : "esriFieldTypeString";
    case "number":
      return "esriFieldTypeDouble";
    default:
      return "unknown";
  }
}
function M(e, n = 4326) {
  if (!e) throw new r("geojson-layer:empty", "GeoJSON data is empty");
  if ("Feature" !== e.type && "FeatureCollection" !== e.type) throw new r("geojson-layer:unsupported-geojson-object", "missing or not supported GeoJSON object type", { data: e });
  const { crs: r2 } = e;
  if (!r2) return;
  const i = "string" == typeof r2 ? r2 : "name" === r2.type ? r2.properties.name : "EPSG" === r2.type ? r2.properties.code : null, s2 = P({ wkid: n }) ? new RegExp(".*(CRS84H?|4326)$", "i") : new RegExp(`.*(${n})$`, "i");
  if (!i || !s2.test(i)) throw new r("geojson:unsupported-crs", "unsupported GeoJSON 'crs' member", { crs: r2 });
}
function T(e, t2 = {}) {
  const o2 = [], n = /* @__PURE__ */ new Set(), r2 = /* @__PURE__ */ new Set();
  let i, s2 = false, u2 = null, y2 = false, { geometryType: g2 = null } = t2;
  for (const l of p(e)) {
    const { geometry: e2, properties: t3, id: p2 } = l;
    if (!e2 || (g2 || (g2 = f(e2.type)), f(e2.type) === g2)) {
      if (!s2) {
        s2 = d2(a(e2));
      }
      if (y2 || (y2 = null != p2, y2 && (i = typeof p2, t3 && (u2 = Object.keys(t3).filter((e3) => t3[e3] === p2)))), t3 && u2 && y2 && null != p2 && (u2.length > 1 ? u2 = u2.filter((e3) => t3[e3] === p2) : 1 === u2.length && (u2 = t3[u2[0]] === p2 ? u2 : [])), t3) for (const e3 in t3) {
        if (n.has(e3)) continue;
        const i2 = k(t3[e3]);
        if ("unknown" === i2) {
          r2.add(e3);
          continue;
        }
        r2.delete(e3), n.add(e3);
        const s3 = d(e3);
        s3 && o2.push({ name: s3, alias: e3, type: i2 });
      }
    }
  }
  const m2 = d(1 === u2?.length && u2[0] || null) ?? void 0;
  if (m2) {
    for (const c of o2) if (c.name === m2 && Fe(c)) {
      c.type = "esriFieldTypeOID";
      break;
    }
  }
  return { fields: o2, geometryType: g2, hasZ: s2, objectIdFieldName: m2, objectIdFieldType: i, unknownFields: Array.from(r2) };
}
function O(e, t2) {
  return Array.from(y(p(e), t2));
}

export {
  f,
  M,
  T,
  O
};
//# sourceMappingURL=chunk-MQ24MHK5.js.map
