import {
  u
} from "./chunk-46C6BG5F.js";
import {
  s
} from "./chunk-4GTXGXDC.js";
import {
  r
} from "./chunk-HRVGYTNY.js";
import {
  K
} from "./chunk-B2F3RTYB.js";

// node_modules/@arcgis/core/layers/support/LayerLoadContext.js
var e = class {
  constructor() {
    this._serviceMetadatas = /* @__PURE__ */ new Map(), this._itemDatas = /* @__PURE__ */ new Map();
  }
  async fetchServiceMetadata(e2, a2) {
    const s3 = this._serviceMetadatas.get(e2);
    if (s3) return s3;
    const r2 = await r(e2, a2);
    return this._serviceMetadatas.set(e2, r2), r2;
  }
  async fetchItemData(t) {
    const { id: e2 } = t;
    if (!e2) return null;
    const { _itemDatas: a2 } = this;
    if (a2.has(e2)) return a2.get(e2);
    const s3 = await t.fetchData();
    return a2.set(e2, s3), s3;
  }
  async fetchCustomParameters(t, e2) {
    const a2 = await this.fetchItemData(t);
    return a2 && "object" == typeof a2 && (e2 ? e2(a2) : a2.customParameters) || null;
  }
};

// node_modules/@arcgis/core/portal/support/loadUtils.js
function a(e2) {
  const t = { id: e2.id, name: e2.name }, a2 = u(e2.type);
  return "FeatureLayer" !== a2 && (t.layerType = a2), t;
}
async function l(e2, r2, l2) {
  let n2;
  if (null == e2?.layers || null == e2?.tables) {
    const u3 = await l2.fetchServiceMetadata(r2, { customParameters: s2(e2)?.customParameters });
    n2 = K(), (e2 = e2 || {}).layers = e2.layers || u3?.layers?.map(a), e2.tables = e2.tables || u3?.tables?.map(a);
  }
  return { data: e2, preferredHost: n2 };
}
function s2(e2) {
  if (!e2) return null;
  const { layers: r2, tables: t } = e2;
  return r2?.length ? r2[0] : t?.length ? t[0] : null;
}
function n(e2, r2) {
  if (null == r2) return null;
  return [...e2.layers || [], ...e2.tables || []].find((e3) => e3.id === r2);
}
function u2(e2, r2) {
  return [...e2.layers || [], ...e2.tables || []].filter(({ layerType: e3 }) => e3 ? r2.includes(e3) : r2.includes("ArcGISFeatureLayer"));
}
function c(e2) {
  return (e2?.layers?.length ?? 0) + (e2?.tables?.length ?? 0);
}
function o(e2) {
  switch (e2) {
    case "catalog":
      return ["CatalogLayer"];
    case "feature":
      return ["ArcGISFeatureLayer"];
    case "oriented-imagery":
      return ["OrientedImageryLayer"];
    case "subtype-group":
      return ["SubtypeGroupLayer", "SubtypeGroupTable"];
  }
  return null;
}
function i(e2) {
  switch (e2) {
    case "CatalogLayer":
      return "CatalogLayer";
    case "OrientedImageryLayer":
      return "OrientedImageryLayer";
    case "SubtypeGroupLayer":
    case "SubtypeGroupTable":
      return "SubtypeGroupLayer";
  }
  return "FeatureLayer";
}
async function y(r2, t, l2) {
  if (!r2?.url) return t ?? {};
  if (t ??= {}, !t.layers) {
    const e2 = await l2.fetchServiceMetadata(r2.url);
    t.layers = e2.layers?.map(a);
  }
  const { serverUrl: n2, portalItem: u3 } = await s(r2.url, { sceneLayerItem: r2, customParameters: s2(t)?.customParameters }).catch(() => ({ serverUrl: null, portalItem: null }));
  if (null == n2) return t.tables = [], t;
  if (!t.tables && u3) {
    const e2 = await u3.fetchData().catch(() => null);
    if (e2?.tables) t.tables = e2.tables.map(a);
    else {
      const r3 = await l2.fetchServiceMetadata(n2, { customParameters: s2(e2)?.customParameters }).catch(() => null);
      t.tables = r3?.tables?.map(a);
    }
  }
  if (t.tables) for (const e2 of t.tables) e2.url = `${n2}/${e2.id}`;
  return t;
}

export {
  e,
  a,
  l,
  s2 as s,
  n,
  u2 as u,
  c,
  o,
  i,
  y
};
//# sourceMappingURL=chunk-YCJDSV3D.js.map
