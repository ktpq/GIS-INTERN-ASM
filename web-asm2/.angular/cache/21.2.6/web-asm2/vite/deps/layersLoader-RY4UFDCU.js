import {
  a,
  c,
  e,
  i,
  l,
  o,
  s as s2,
  u,
  y
} from "./chunk-EHGPAPWW.js";
import "./chunk-2OF4GYBZ.js";
import {
  n
} from "./chunk-NC2Y6MYH.js";
import {
  r as r2
} from "./chunk-P3DZKXTE.js";
import {
  t
} from "./chunk-GGRH56KM.js";
import {
  e as e2
} from "./chunk-VDWEOSPM.js";
import {
  s
} from "./chunk-N2GOMHYA.js";
import {
  K,
  Q,
  W
} from "./chunk-6Q36DUGX.js";
import "./chunk-OCXIU36X.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-IDQ6F3RQ.js";
import "./chunk-JWSXOJ4W.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import {
  M
} from "./chunk-IQ4J5AR2.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import {
  m2 as m
} from "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import {
  r3 as r
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/portal/support/layersLoader.js
async function b(e3, t2) {
  const r3 = e3.instance.portalItem;
  if (r3?.id) return await r3.load(t2), v(e3), e3.validateItem && e3.validateItem(r3), L(e3, t2);
}
function v(t2) {
  const r3 = t2.instance.portalItem;
  if (!r3?.type || !t2.supportedTypes.includes(r3.type)) throw new r("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r3?.type, expectedType: t2.supportedTypes.join(", ") });
}
async function L(e3, t2) {
  const r3 = e3.instance, o2 = r3.portalItem;
  if (!o2) return;
  let { url: n2 } = o2;
  const { title: s3 } = o2, l2 = e2(o2, "portal-item");
  if ("group" === r3.type) return S(r3, l2, e3);
  n2 && "media" !== r3.type && r3.read({ url: n2 }, l2);
  const p = new e(), { data: u2, preferredHost: c2 } = await x(e3, p, t2);
  return n2 = o2.url, "isUrlHostModified" in r3 && (c2 ? r3.applyPreferredHost({ preferredHost: c2 }) : r3.applyHostFromPortalItem()), u2 && r3.read(u2, l2), r3.resourceReferences = { portalItem: o2, paths: l2.readResourcePaths ?? [] }, "subtype-group" !== r3.type && r3.read({ title: s3 }, l2), t(r3, l2);
}
async function S(t2, r3, a2) {
  const o2 = t2.portalItem;
  if (!t2.sourceIsPortalItem) return;
  const { title: n2, type: s3 } = o2;
  if ("Group Layer" === s3) {
    if (!s(o2, "Map")) throw new r("portal:invalid-layer-item-typekeyword", "'Group Layer' item without 'Map' type keyword is not supported");
    return T(t2, a2);
  }
  return t2.read({ title: n2 }, r3), j(t2, a2);
}
async function T(t2, r3) {
  const a2 = t2.portalItem, o2 = await a2.fetchData("json");
  if (!o2) return;
  if (!r3.populateGroupLayer) throw new r("portal:missing-populate-group-layer", "Missing populate group layer");
  const n2 = e2(a2, "web-map");
  t2.read(o2, n2), await r3.populateGroupLayer(t2, o2, { context: n2 }), t2.resourceReferences = { portalItem: a2, paths: n2.readResourcePaths ?? [] };
}
async function j(t2, r3) {
  let n2;
  const { portalItem: s3 } = t2;
  if (!s3) return;
  const l2 = s3.type, i2 = r3.layerModuleTypeMap;
  if (!i2) throw new r("portal:missing-layer-module-type-map", "Layer module type map is required to construct sub layers");
  switch (l2) {
    case "Feature Service":
    case "Feature Collection":
      n2 = i2.FeatureLayer;
      break;
    case "Stream Service":
      n2 = i2.StreamLayer;
      break;
    case "Scene Service":
      n2 = i2.SceneLayer;
      break;
    case "Video Service":
      n2 = i2.VideoLayer;
      break;
    default:
      throw new r("portal:unsupported-item-type-as-group", `The item type '${l2}' is not supported as a 'GroupLayer'`);
  }
  const p = "Video Service" === l2, u2 = new e();
  let [m2, { data: w }] = await Promise.all([n2(), p ? { data: null } : x(r3, u2)]), h = () => m2;
  if (p) return H(t2, h, i2);
  if ("Feature Service" === l2) {
    const e3 = s2(w)?.customParameters;
    w = s3.url ? (await l(w, s3.url, u2)).data : {}, h = await E(w, i2) || h;
    const { provider: r4, preferredHost: a2 } = await U(s3.url, { customParameters: e3, loadContext: u2 });
    return W(s3, a2), await M2(t2, h, h, w, i2, r4);
  }
  return "Scene Service" === l2 && s3.url && (w = await y(s3, w, u2)), c(w) > 0 ? await M2(t2, h, null, w, i2) : await F(t2, h, i2);
}
async function F(e3, t2, r3) {
  const { portalItem: a2 } = e3;
  if (!a2?.url) return;
  const o2 = await r2(a2.url);
  o2 && M2(e3, t2, null, { layers: o2.layers?.map(a), tables: o2.tables?.map(a) }, r3);
}
async function H(e3, t2, r3) {
  const { portalItem: a2 } = e3;
  if (!a2?.url) return;
  const o2 = await r2(a2.url);
  o2 && M2(e3, t2, null, { layers: o2.layers?.map(({ id: e4, name: t3 }) => ({ id: e4, name: t3 })) }, r3);
}
async function M2(e3, t2, r3, a2, o2, n2) {
  let s3 = a2.layers || [];
  const l2 = a2.tables || [];
  if ("Feature Collection" === e3.portalItem?.type ? (s3.forEach((e4, t3) => {
    e4.id = t3, "Table" === e4?.layerDefinition?.type && l2.push(e4);
  }), s3 = s3.filter((e4) => "Table" !== e4?.layerDefinition?.type)) : (s3.reverse(), l2.reverse()), s3.forEach((r4) => {
    const o3 = n2?.(r4);
    if (o3 || !n2) {
      const n3 = P(e3, t2(r4), a2, r4, o3);
      e3.add(n3);
    }
  }), l2.length) {
    const t3 = r3 ? null : await o2.FeatureLayer();
    l2.forEach((o3) => {
      const s4 = n2?.(o3);
      if (s4 || !n2) {
        const n3 = P(e3, r3 ? r3(o3) : t3, a2, o3, s4);
        e3.tables.add(n3);
      }
    });
  }
}
function P(e3, t2, r3, a2, o2) {
  const n2 = e3.portalItem, s3 = { portalItem: n2.clone(), layerId: a2.id };
  null != a2.url && (s3.url = a2.url);
  const i2 = new t2(s3);
  if ("sourceJSON" in i2 && (i2.sourceJSON = o2), "subtype-group" !== i2.type && "catalog" !== i2.type && (i2.sublayerTitleMode = "service-name"), "Feature Collection" === n2.type) {
    const e4 = { origin: "portal-item", portal: n2.portal || M.getDefault() };
    i2.read(a2, e4);
    const t3 = r3.showLegend;
    null != t3 && i2.read({ showLegend: t3 }, e4);
  }
  return i2;
}
async function x(e3, t2, r3) {
  if (false === e3.supportsData) return { data: void 0 };
  const a2 = e3.instance, n2 = a2.portalItem;
  if (!n2) return { data: void 0 };
  let s3 = null;
  try {
    s3 = "video" === a2.type ? null : await n2.fetchData("json", r3);
  } catch (l2) {
  }
  if (C(a2)) {
    let e4 = null;
    const { count: r4, preferredHost: l2 } = await G(n2, s3, t2);
    if (W(n2, l2), (s3?.layers || s3?.tables) && r4 > 0) {
      if (null == a2.layerId) {
        const e5 = o(a2.type), t3 = e5?.length ? u(s3, e5)[0] : s2(s3);
        t3 && (a2.layerId = t3.id);
      }
      e4 = k(s3, a2), "OrientedImageryLayer" === e4?.layerType && "oriented-imagery" === a2.type && a2.supportedSourceTypes.add("Feature Layer"), e4 && null != s3.showLegend && (e4.showLegend = s3.showLegend);
    }
    return r4 > 1 && "sublayerTitleMode" in a2 && "service-name" !== a2.sublayerTitleMode && (a2.sublayerTitleMode = "item-title-and-service-name"), { data: e4, preferredHost: l2 };
  }
  return { data: s3 };
}
async function G(e3, r3, a2) {
  if (r3?.layers && r3?.tables) return { count: c(r3) };
  const o2 = m(e3.url);
  if (!o2) return { count: 1 };
  const l2 = o2.url.path, i2 = await a2.fetchServiceMetadata(l2, { customParameters: s2(r3)?.customParameters }).catch(() => null);
  return { count: (r3?.layers?.length ?? i2?.layers?.length ?? 0) + (r3?.tables?.length ?? i2?.tables?.length ?? 0), preferredHost: Q(e3) ? K() : null };
}
function k(e3, t2) {
  const { layerId: r3 } = t2, a2 = e3.layers?.find((e4) => e4.id === r3) || e3.tables?.find((e4) => e4.id === r3);
  return a2 && D(a2, t2) ? a2 : null;
}
function C(e3) {
  return "stream" !== e3.type && "layerId" in e3;
}
function D(e3, t2) {
  const r3 = "layerType" in e3 && e3.layerType, { type: a2 } = t2;
  return !("feature" === a2 && r3 && "ArcGISFeatureLayer" !== e3.layerType || "catalog" === a2 && !r3 || "oriented-imagery" === a2 && !r3 || "subtype-group" === a2 && !r3);
}
async function U(e3, t2) {
  const { layersJSON: a2, preferredHost: o2 } = await n(e3, t2);
  if (!a2) return { provider: null, preferredHost: o2 };
  const n2 = [...a2.layers, ...a2.tables];
  return { provider: (e4) => n2.find((t3) => t3.id === e4.id), preferredHost: o2 };
}
async function E(e3, t2) {
  const { layers: r3, tables: a2 } = e3, o2 = [...r3 ?? [], ...a2 ?? []];
  if (!o2.length) return;
  const n2 = /* @__PURE__ */ new Set(), s3 = [];
  for (const { layerType: p } of o2) {
    const e4 = p ?? "ArcGISFeatureLayer";
    if (n2.has(e4)) continue;
    n2.add(e4);
    const r4 = t2[i(e4)];
    s3.push(r4());
  }
  const l2 = await Promise.all(s3), i2 = /* @__PURE__ */ new Map();
  return Array.from(n2).forEach((e4, t3) => {
    i2.set(e4, l2[t3]);
  }), ({ layerType: e4 }) => {
    const t3 = e4 ?? "ArcGISFeatureLayer";
    return i2.get(t3);
  };
}
export {
  b as load
};
//# sourceMappingURL=layersLoader-RY4UFDCU.js.map
