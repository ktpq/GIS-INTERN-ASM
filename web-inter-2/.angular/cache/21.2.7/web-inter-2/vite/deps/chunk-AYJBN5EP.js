import {
  E,
  H,
  c,
  d,
  e,
  l,
  o as o2
} from "./chunk-SGNC5H35.js";
import {
  m
} from "./chunk-GW2SZHYT.js";
import {
  o
} from "./chunk-OCN6JBSQ.js";
import {
  n,
  r
} from "./chunk-KEY3YQEB.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import {
  I
} from "./chunk-JC2AZ2NN.js";
import {
  M
} from "./chunk-253Z6EVN.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/tiles3DUtils.js
var x = new S({ wkid: 4326, vcsWkid: 115700 });
var d2 = new z(-180, -90, 180, 90, x);
function S2(e2, t) {
  if (!Array.isArray(e2) || e2.length < t) return false;
  for (const r2 of e2) if ("number" != typeof r2) return false;
  return true;
}
var p = 7645211;
var R = { xmin: -180, ymin: -90, zmin: -450, xmax: 180, ymax: 90, zmax: 8850 };
var _ = /* @__PURE__ */ new Map([[5773, new m({ heightModel: "gravity-related-height", heightUnit: "meters", vertCRS: "EGM96_Geoid" })], [3855, new m({ heightModel: "gravity-related-height", heightUnit: "meters", vertCRS: "EGM2008_Geoid" })], [115700, new m({ heightModel: "ellipsoidal", heightUnit: "meters", vertCRS: "WGS_1984" })], [115701, new m({ heightModel: "ellipsoidal", heightUnit: "meters", vertCRS: "ETRS_1989" })], [6360, new m({ heightModel: "gravity-related-height", heightUnit: "us-feet", vertCRS: "NAVD88_height_(ftUS)" })], [7837, new m({ heightModel: "gravity-related-height", heightUnit: "meters", vertCRS: "DHHN2016_(height)" })], [5709, new m({ heightModel: "gravity-related-height", heightUnit: "meters", vertCRS: "NAP" })]]);
function b(e2) {
  return !(!(e2.extensions?.ESRI_crs?.wkid || e2.extensions?.ESRI_crs?.latestWkid || e2.extensions?.ESRI_crs?.wkt) || !e2.root?.extensions?.ESRI_crs?.boundingVolume?.box && !e2.root?.extensions?.ESRI_crs?.boundingVolume?.sphere);
}
function y(g, x2 = false) {
  let d3 = new S({ wkid: 4326, vcsWkid: 115700 }), _2 = g.root?.boundingVolume, w = false, E2 = g?.root?.transform;
  if (x2 && (g.extensions?.ESRI_crs?.wkid || g.extensions?.ESRI_crs?.latestWkid || g.extensions?.ESRI_crs?.wkt) && (g.root?.extensions?.ESRI_crs?.boundingVolume?.box || g.root?.extensions?.ESRI_crs?.boundingVolume?.sphere)) d3 = new S(g.extensions?.ESRI_crs), _2 = g.root?.extensions?.ESRI_crs?.boundingVolume, E2 = g.root?.transform, w = true;
  else if (!_2) return new z(-180, -90, 180, 90, d3);
  if (_2.box) {
    const e2 = _2?.box;
    if (e2[3] > p && e2[7] > p && e2[11] > p) return new z(__spreadProps(__spreadValues({}, R), { spatialReference: d3 }));
  }
  const b2 = n();
  if (!w && _2.region && S2(_2.region, 6)) {
    const t = _2.region, r2 = M(t[0]), n2 = M(t[1]), i = t[4], o3 = M(t[2]), s = M(t[3]), m2 = t[5];
    return new z({ xmin: r2, ymin: n2, zmin: i, xmax: o3, ymax: s, zmax: m2, spatialReference: d3 });
  }
  if (_2.sphere && S2(_2.sphere, 4)) {
    const e2 = _2.sphere, m2 = r(e2[0], e2[1], e2[2]), g2 = e2[3] / Math.sqrt(3), x3 = n();
    e(x3, m2, r(g2, g2, g2));
    const p2 = n();
    if (c(p2, m2, r(g2, g2, g2)), E2 && S2(E2, 16)) {
      const e3 = E2;
      E(b2, x3, e3), o2(x3, b2), E(b2, p2, e3), o2(p2, b2);
    }
    w || (o(x3, I, 0, x3, S.WGS84, 0), o(p2, I, 0, p2, S.WGS84, 0));
    const R2 = n(), y2 = n();
    return l(R2, x3, p2), d(y2, x3, p2), new z({ xmin: R2[0], ymin: R2[1], zmin: R2[2], xmax: y2[0], ymax: y2[1], zmax: y2[2], spatialReference: d3 });
  }
  if (_2.box && S2(_2.box, 12)) {
    const e2 = _2.box, t = r(e2[0], e2[1], e2[2]), i = r(e2[3], e2[4], e2[5]), g2 = r(e2[6], e2[7], e2[8]), x3 = r(e2[9], e2[10], e2[11]), p2 = [];
    for (let r2 = 0; r2 < 8; ++r2) p2.push(n());
    if (c(p2[0], t, i), c(p2[0], p2[0], g2), c(p2[0], p2[0], x3), H(p2[1], t, i), c(p2[1], p2[1], g2), c(p2[1], p2[1], x3), c(p2[2], t, i), H(p2[2], p2[2], g2), c(p2[2], p2[2], x3), H(p2[3], t, i), H(p2[3], p2[3], g2), c(p2[3], p2[3], x3), c(p2[4], t, i), c(p2[4], p2[4], g2), H(p2[4], p2[4], x3), H(p2[5], t, i), c(p2[5], p2[5], g2), H(p2[5], p2[5], x3), c(p2[6], t, i), H(p2[6], p2[6], g2), H(p2[6], p2[6], x3), H(p2[7], t, i), H(p2[7], p2[7], g2), H(p2[7], p2[7], x3), E2 && S2(E2, 16)) {
      const e3 = E2;
      for (let t2 = 0; t2 < 8; ++t2) E(p2[t2], p2[t2], e3);
    }
    const R2 = r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), b3 = r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    for (let r2 = 0; r2 < 8; ++r2) w || o(p2[r2], I, 0, p2[r2], S.WGS84, 0), l(b3, b3, p2[r2]), d(R2, R2, p2[r2]);
    return new z({ xmin: b3[0], ymin: b3[1], zmin: b3[2], xmax: R2[0], ymax: R2[1], zmax: R2[2], spatialReference: d3 });
  }
  return new z(-180, -90, 180, 90, d3);
}

export {
  x,
  d2 as d,
  b,
  y
};
//# sourceMappingURL=chunk-AYJBN5EP.js.map
