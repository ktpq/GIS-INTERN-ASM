import {
  t
} from "./chunk-QEC6BDSY.js";
import {
  g
} from "./chunk-EE4SGCNH.js";
import {
  q
} from "./chunk-A65L2IOA.js";
import {
  v
} from "./chunk-Z5I3WFZJ.js";
import {
  J,
  M,
  Q,
  i
} from "./chunk-PWZ6VVYN.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  Bt,
  f2 as f,
  s2
} from "./chunk-RVKOLALF.js";
import {
  a,
  s2 as s
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/layers/support/kmlUtils.js
var c = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function d(e) {
  const o = e.folders || [], t2 = o.slice(), r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Map(), f2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i2, esriGeometryPolygon: f2 };
  (e.featureCollection?.layers || []).forEach((e2) => {
    const o2 = a(e2);
    o2.featureSet.features = [];
    const t3 = e2.featureSet.geometryType;
    r.set(t3, o2);
    const a3 = e2.layerDefinition.objectIdField;
    "esriGeometryPoint" === t3 ? h(n, a3, e2.featureSet.features) : "esriGeometryPolyline" === t3 ? h(i2, a3, e2.featureSet.features) : "esriGeometryPolygon" === t3 && h(f2, a3, e2.featureSet.features);
  }), e.groundOverlays && e.groundOverlays.forEach((e2) => {
    a2.set(e2.id, e2);
  }), o.forEach((o2) => {
    o2.networkLinkIds.forEach((r2) => {
      const s3 = P(r2, o2.id, e.networkLinks);
      s3 && t2.push(s3);
    });
  }), t2.forEach((e2) => {
    if (e2.featureInfos) {
      e2.points = a(r.get("esriGeometryPoint")), e2.polylines = a(r.get("esriGeometryPolyline")), e2.polygons = a(r.get("esriGeometryPolygon")), e2.mapImages = [];
      for (const o2 of e2.featureInfos) switch (o2.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon": {
          const t3 = l[o2.type].get(o2.id);
          t3 && e2[c[o2.type]]?.featureSet.features.push(t3);
          break;
        }
        case "GroundOverlay": {
          const t3 = a2.get(o2.id);
          t3 && e2.mapImages.push(t3);
          break;
        }
      }
      e2.fullExtent = I([e2]);
    }
  });
  const u = I(t2);
  return { folders: o, sublayers: t2, extent: u };
}
function g2(t2, s3, i2, f2) {
  const a2 = s2?.findCredential(t2);
  t2 = Bt(t2, { token: a2?.token });
  const l = s.kmlServiceUrl;
  return f(l, { query: { url: t2, model: "simple", folders: "", refresh: 0 !== i2 || void 0, outSR: JSON.stringify(s3) }, responseType: "json", signal: f2 });
}
function S2(e, o, t2 = null, r = []) {
  const s3 = [], n = {}, i2 = o.sublayers, f2 = new Set(o.folders.map((e2) => e2.id));
  return i2.forEach((o2) => {
    const i3 = new e();
    if (t2 ? i3.read(o2, t2) : i3.read(o2), r.length && f2.has(i3.id) && (i3.visible = r.includes(i3.id)), n[o2.id] = i3, null != o2.parentFolderId && -1 !== o2.parentFolderId) {
      const e2 = n[o2.parentFolderId];
      e2.sublayers || (e2.sublayers = []), e2.sublayers?.unshift(i3);
    } else s3.unshift(i3);
  }), s3;
}
function h(e, o, t2) {
  t2.forEach((t3) => {
    e.set(t3.attributes[o], t3);
  });
}
function G(e, o) {
  let t2;
  return o.some((o2) => o2.id === e && (t2 = o2, true)), t2;
}
function P(e, o, t2) {
  const r = G(e, t2);
  return r && (r.parentFolderId = o, r.networkLink = r), r;
}
async function b(e, o, r, s3) {
  const n = e[o];
  if (!n) return [];
  const i2 = g.fromJSON(n.featureSet).features, f2 = n.layerDefinition, a2 = t(f2.drawingInfo.renderer), l = q.fromJSON(n.popupInfo), u = [];
  for (const t2 of i2) {
    const e2 = await a2.getSymbolAsync(t2);
    t2.symbol = e2, t2.popupTemplate = l, t2.visible = true;
    const o2 = r.sublayerById.get(s3);
    t2.origin = o2.origin, u.push(t2);
  }
  return u;
}
function I(e) {
  const o = i(Q), t2 = i(Q);
  for (const r of e) {
    if (r.polygons?.featureSet?.features) for (const e2 of r.polygons.featureSet.features) v(o, e2.geometry), M(t2, o);
    if (r.polylines?.featureSet?.features) for (const e2 of r.polylines.featureSet.features) v(o, e2.geometry), M(t2, o);
    if (r.points?.featureSet?.features) for (const e2 of r.points.featureSet.features) v(o, e2.geometry), M(t2, o);
    if (r.mapImages) for (const e2 of r.mapImages) v(o, e2.extent), M(t2, o);
  }
  return J(t2, Q) ? void 0 : { xmin: t2[0], ymin: t2[1], zmin: t2[2], xmax: t2[3], ymax: t2[4], zmax: t2[5], spatialReference: S.WGS84 };
}

export {
  d,
  g2 as g,
  S2 as S,
  b,
  I
};
//# sourceMappingURL=chunk-SBE2IJZG.js.map
