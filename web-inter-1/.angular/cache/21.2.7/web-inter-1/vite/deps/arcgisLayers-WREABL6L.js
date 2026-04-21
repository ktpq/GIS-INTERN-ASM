import {
  a
} from "./chunk-75STTQ74.js";
import {
  s
} from "./chunk-UPGJRQQY.js";
import {
  n,
  u
} from "./chunk-KPVMG5ZM.js";
import {
  r as r2
} from "./chunk-X6CJS2LR.js";
import "./chunk-RNT2VJHG.js";
import {
  H,
  j
} from "./chunk-5MDFQFDX.js";
import "./chunk-56NUZKCZ.js";
import "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-P476LLZ4.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  I,
  h2 as h,
  m2 as m,
  qt
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import {
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/arcgisLayers.js
var f = { FeatureLayer: true, SceneLayer: true, VideoLayer: true };
async function p(e) {
  const { properties: r3, url: a2 } = e, t = __spreadProps(__spreadValues({}, r3), { url: a2 }), s2 = await w(a2, r3?.customParameters), { Constructor: l, layerId: o, sourceJSON: n2, parsedUrl: c, layers: i, tables: u2 } = s2;
  if (i.length + u2.length === 0) return null != o && (t.layerId = o), null != n2 && (t.sourceJSON = n2), new l(t);
  const y = new (0, (await import("./GroupLayer-PWKMETCZ.js")).default)({ title: c.title });
  return await v(y, s2, t), y;
}
function m2(e, r3) {
  return e ? e.find(({ id: e2 }) => e2 === r3) : null;
}
function d(e, r3, a2, t, s2) {
  const l = __spreadProps(__spreadValues({}, s2), { layerId: r3 });
  return null != e && (l.url = e), null != a2 && (l.sourceJSON = a2), "sublayerTitleMode" in t.prototype && (l.sublayerTitleMode = "service-name"), new t(l);
}
async function v(e, r3, a2) {
  const t = r3.sublayerConstructorProvider;
  for (const { id: s2, serverUrl: l } of r3.layers) {
    const o = m2(r3.sublayerInfos, s2), n2 = d(l, s2, o, (o && t?.(o)) ?? r3.Constructor, a2);
    e.add(n2);
  }
  if (r3.tables.length) {
    const t2 = await L("FeatureLayer");
    r3.tables.forEach(({ id: s2, serverUrl: l }) => {
      const o = d(l, s2, m2(r3.tableInfos, s2), t2, a2);
      e.tables.add(o);
    });
  }
}
async function w(r3, a2) {
  let s2 = m(r3);
  if (null == s2 && (s2 = await S(r3, a2)), null == s2) throw new r("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r3 });
  const { serverType: l, sublayer: n2 } = s2;
  let u2;
  const p2 = { FeatureServer: "FeatureLayer", KnowledgeGraphServer: "KnowledgeGraphLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer", VideoServer: "VideoLayer" }, m3 = "FeatureServer" === l, d2 = "SceneServer" === l, v2 = { parsedUrl: s2, Constructor: null, layerId: m3 || d2 ? n2 ?? void 0 : void 0, layers: [], tables: [] };
  switch (l) {
    case "MapServer":
      if (null != n2) {
        const { type: t } = await r2(r3, { customParameters: a2 });
        switch (u2 = "FeatureLayer", t) {
          case "Catalog Layer":
            u2 = "CatalogLayer";
            break;
          case "Catalog Dynamic Group Layer":
            throw new r("arcgis-layers:unsupported", `fromUrl() not supported for "${t}" layers`);
        }
      } else {
        u2 = await g(r3, a2) ? "TileLayer" : "MapImageLayer";
      }
      break;
    case "ImageServer": {
      const e = await r2(r3, { customParameters: a2 }), { tileInfo: t, cacheType: s3 } = e;
      u2 = t ? "LERC" !== t?.format?.toUpperCase() || s3 && "elevation" !== s3.toLowerCase() ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const e = await r2(s2.url.path, { customParameters: a2 });
      if (u2 = "SceneLayer", e) {
        const r4 = e?.layers;
        if ("Voxel" === e?.layerType) u2 = "VoxelLayer";
        else if (r4?.length) {
          const e2 = r4[0]?.layerType;
          null != e2 && null != j[e2] && (u2 = j[e2]);
        }
      }
      break;
    }
    case "3DTilesServer":
      throw new r("arcgis-layers:unsupported", "fromUrl() not supported for 3DTiles layers");
    case "FeatureServer":
      if (u2 = "FeatureLayer", null != n2) {
        const e = await r2(r3, { customParameters: a2 });
        v2.sourceJSON = e, v2.preferredUrl = H(), u2 = u(e.type);
      }
      break;
    default:
      u2 = p2[l];
  }
  if (f[u2] && null == n2) {
    const e = await h2(r3, l, a2);
    m3 && (v2.preferredUrl = e.preferredUrl, v2.sublayerInfos = e.layerInfos, v2.tableInfos = e.tableInfos);
    if (1 !== e.layers.length + e.tables.length) v2.layers = e.layers, v2.tables = e.tables, m3 && e.layerInfos?.length && (v2.sublayerConstructorProvider = await P(e.layerInfos));
    else if (m3 || d2) {
      const r4 = e.layerInfos?.[0] ?? e.tableInfos?.[0];
      if (v2.layerId = e.layers[0]?.id ?? e.tables[0]?.id, v2.sourceJSON = r4, m3) {
        const e2 = r4?.type;
        u2 = u(e2);
      }
    }
  }
  return v2.Constructor = await L(u2), v2;
}
async function S(e, t) {
  const l = await r2(e, { customParameters: t });
  let o = null, n2 = null;
  const c = l.type;
  if ("Feature Layer" === c || "Table" === c ? (o = "FeatureServer", n2 = l.id ?? null) : "indexedVector" === c ? o = "VectorTileServer" : l.hasOwnProperty("mapName") ? o = "MapServer" : l.hasOwnProperty("bandCount") && l.hasOwnProperty("pixelSizeX") ? o = "ImageServer" : l.hasOwnProperty("maxRecordCount") && l.hasOwnProperty("allowGeometryUpdates") ? o = "FeatureServer" : l.hasOwnProperty("streamUrls") ? o = "StreamServer" : b(l) ? (o = "SceneServer", n2 = l.id) : l.hasOwnProperty("layers") && b(l.layers?.[0]) && (o = "SceneServer"), !o) return null;
  const i = null != n2 ? h(e) : null;
  return { title: null != i && l.name || qt(e), serverType: o, sublayer: n2, url: { path: null != i ? i.serviceUrl : I(e).path } };
}
function b(e) {
  return null != e && e.hasOwnProperty("store") && e.hasOwnProperty("id") && "number" == typeof e.id;
}
async function h2(e, r3, a2) {
  let t, s2, l, o = false;
  switch (r3) {
    case "FeatureServer": {
      const r4 = await n(e, { customParameters: a2 });
      l = H(e, { preferredHost: r4.preferredHost }), o = !!r4.layersJSON, t = r4.layersJSON || r4.serviceJSON;
      break;
    }
    case "SceneServer": {
      const r4 = await I2(e, a2);
      t = r4.serviceInfo, s2 = r4.tableServerUrl;
      break;
    }
    default:
      t = await r2(e, { customParameters: a2 });
  }
  const i = t?.layers, u2 = t?.tables;
  return { preferredUrl: l, layers: i?.map((e2) => ({ id: e2.id })).reverse() || [], tables: u2?.map((e2) => ({ serverUrl: s2, id: e2.id })).reverse() || [], layerInfos: o ? i : [], tableInfos: o ? u2 : [] };
}
async function I2(e, r3) {
  const a2 = await r2(e, { customParameters: r3 }), t = a2.layers?.[0];
  if (!t) return { serviceInfo: a2 };
  try {
    const { serverUrl: t2 } = await s(e), s2 = await r2(t2, { customParameters: r3 }).catch(() => null);
    return s2 && (a2.tables = s2.tables), { serviceInfo: a2, tableServerUrl: t2 };
  } catch {
    return { serviceInfo: a2 };
  }
}
async function L(e) {
  return (0, a[e])();
}
async function g(e, r3) {
  return (await r2(e, { customParameters: r3 })).tileInfo;
}
async function P(e) {
  if (!e.length) return;
  const r3 = /* @__PURE__ */ new Set(), a2 = [];
  for (const { type: l } of e) r3.has(l) || (r3.add(l), a2.push(L(u(l))));
  const t = await Promise.all(a2), s2 = /* @__PURE__ */ new Map();
  return Array.from(r3).forEach((e2, r4) => {
    s2.set(e2, t[r4]);
  }), (e2) => s2.get(e2.type);
}
export {
  p as fromUrl
};
//# sourceMappingURL=arcgisLayers-WREABL6L.js.map
