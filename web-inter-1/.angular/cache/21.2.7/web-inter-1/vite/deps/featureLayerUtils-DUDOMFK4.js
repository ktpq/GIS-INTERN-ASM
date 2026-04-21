import {
  $,
  I,
  P,
  d as d2,
  f,
  m as m2,
  p,
  v,
  w
} from "./chunk-2UUZIOKG.js";
import {
  i
} from "./chunk-FLIHJ2WP.js";
import "./chunk-QGIGOSOK.js";
import {
  n,
  u as u2
} from "./chunk-KPVMG5ZM.js";
import "./chunk-X6CJS2LR.js";
import "./chunk-UGNCDVPZ.js";
import {
  o
} from "./chunk-TUWUJRA7.js";
import {
  E,
  c,
  l,
  s,
  u
} from "./chunk-2HNVQGYK.js";
import "./chunk-RNT2VJHG.js";
import {
  U
} from "./chunk-5MDFQFDX.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-56NUZKCZ.js";
import "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
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
  m2 as m
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
import {
  N,
  d,
  h
} from "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/save/featureLayerUtils.js
var g = "Feature Service";
var E2 = "feature-layer-utils";
var P2 = `${E2}-save`;
var O = `${E2}-save-as`;
var A = `${E2}-saveall`;
var x = `${E2}-saveall-as`;
function N2(e) {
  return { isValid: U(e) && (!("dynamicDataSource" in e) || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function $2(e, r2) {
  const a = o(e, "portal-item");
  return r2?.isTable && (a.layerContainerType = "tables"), a;
}
function j(e) {
  const r2 = $2(e), a = $2(e);
  return a.layerContainerType = "tables", { forLayers: r2, forTables: a };
}
function U2(e) {
  const r2 = [], a = [];
  for (const { layer: t, layerJSON: n2 } of e) R(t) ? a.push(n2) : r2.push(n2);
  return { layers: r2, tables: a };
}
function R(e, r2) {
  return e.isTable;
}
function C(e) {
  return U2([e]);
}
async function J(e, r2) {
  return /\/\d+\/?$/.test(e.url) ? C(r2[0]) : G(r2, e);
}
async function G(e, r2) {
  if (e.reverse(), !r2) return U2(e);
  const a = await _(r2, e);
  for (const t of e) V(t.layer, t.layerJSON, a);
  return M(a, e), a;
}
async function _(e, r2) {
  let a = await e.fetchData("json");
  if (D(a) && !s(e, E.HOSTED_SERVICE)) return a;
  a ||= {}, F(a);
  const { layer: { url: t, customParameters: n2, apiKey: s2 } } = r2[0];
  return await B(a, { url: t ?? "", customParameters: n2, apiKey: s2 }, r2.map((e2) => e2.layer.layerId)), a;
}
function D(e) {
  return !!(e && Array.isArray(e.layers) && Array.isArray(e.tables));
}
function F(e) {
  e.layers ||= [], e.tables ||= [];
}
function M(e, r2) {
  const a = [], t = [];
  for (const { layer: n2 } of r2) {
    const { isTable: e2, layerId: r3 } = n2;
    e2 ? t.push(r3) : a.push(r3);
  }
  Y(e.layers, a), Y(e.tables, t);
}
function Y(e, a) {
  if (e.length < 2) return;
  const t = [];
  for (const { id: r2 } of e) t.push(r2);
  h(t.sort(k), a.slice().sort(k)) && e.sort((e2, r2) => {
    const t2 = a.indexOf(e2.id), n2 = a.indexOf(r2.id);
    return t2 < n2 ? -1 : t2 > n2 ? 1 : 0;
  });
}
function k(e, r2) {
  return e < r2 ? -1 : e > r2 ? 1 : 0;
}
async function B(e, r2, a) {
  const { url: t, customParameters: n2, apiKey: s2 } = r2, { serviceJSON: o2, layersJSON: l2 } = await n(t, { customParameters: n2, apiKey: s2 }), i2 = K(e.layers, o2.layers, a), c2 = K(e.tables, o2.tables, a);
  e.layers = i2.itemResources, e.tables = c2.itemResources;
  const u3 = [...i2.added, ...c2.added], y = l2 ? [...l2.layers, ...l2.tables] : [];
  await z(e, u3, t, y);
}
function K(e, r2, t) {
  const n2 = d(e, r2, (e2, r3) => e2.id === r3.id);
  e = e.filter((e2) => !n2.removed.some((r3) => r3.id === e2.id));
  const s2 = n2.added;
  return s2.forEach(({ id: r3 }) => {
    e.push({ id: r3 });
  }), { itemResources: e, added: s2.filter(({ id: e2 }) => !t.includes(e2)) };
}
async function z(e, r2, a, t) {
  const n2 = await H(r2), s2 = r2.map(({ id: e2, type: r3 }) => new (n2.get(r3))({ url: a, layerId: e2, sourceJSON: t.find(({ id: r4 }) => r4 === e2) }));
  await Promise.allSettled(s2.map((e2) => e2.load())), s2.forEach((r3) => {
    const { layerId: a2, loaded: t2, defaultPopupTemplate: n3 } = r3;
    if (!t2 || null == n3) return;
    const s3 = { id: a2, popupInfo: n3.toJSON() };
    V(r3, "ArcGISFeatureLayer" === r3.operationalLayerType ? s3 : __spreadProps(__spreadValues({}, s3), { layerType: r3.operationalLayerType }), e);
  });
}
async function H(e) {
  const r2 = [];
  e.forEach(({ type: e2 }) => {
    switch (u2(e2)) {
      case "CatalogLayer":
        r2.push(import("./CatalogLayer-SBRPK6YV.js").then((e3) => e3.default));
        break;
      case "FeatureLayer":
        r2.push(import("./@arcgis_core_layers_FeatureLayer.js").then((e3) => e3.default));
        break;
      case "OrientedImageryLayer":
        r2.push(import("./OrientedImageryLayer-NAZ6B4A5.js").then((e3) => e3.default));
    }
  });
  const a = await Promise.all(r2), t = /* @__PURE__ */ new Map();
  return e.forEach(({ type: e2 }, r3) => {
    t.set(e2, a[r3]);
  }), t;
}
function V(e, r2, a) {
  e.isTable ? q(a.tables, r2) : q(a.layers, r2);
}
function q(e, r2) {
  const a = e.findIndex(({ id: e2 }) => e2 === r2.id);
  -1 === a ? e.push(r2) : e[a] = r2;
}
function Q(e, r2) {
  if (!e.length) throw new r(`${r2}:missing-parameters`, "'layers' array should contain at least one feature layer");
}
function W(e, r2) {
  const a = e.map((e2) => e2.portalItem.id);
  if (new Set(a).size > 1) throw new r(`${r2}:invalid-parameters`, "All layers in the 'layers' array should be loaded from the same portal item");
}
function X(e, r2) {
  const a = e.map((e2) => e2.layerId);
  if (new Set(a).size !== a.length) throw new r(`${r2}:invalid-parameters`, "'layers' array should contain only one instance each of layer or table in a feature service");
}
async function Z(e) {
  Q(e, A), await Promise.all(e.map((e2) => e2.load()));
  for (const r2 of e) p(r2, A, N2), f({ layer: r2, itemType: g, errorNamePrefix: A });
  W(e, A), X(e, A);
}
function ee(e) {
  if (!("layerType" in e)) return !!e.charts?.length;
  switch (e.layerType) {
    case "OrientedImageryLayer":
      return !!e.charts?.length;
    case "SubtypeGroupLayer":
      return !!e.layers.some((e2) => !!e2.charts?.length);
    case "SubtypeGroupTable":
      return !!e.tables.some((e2) => !!e2.charts?.length);
    case "CatalogLayer":
      return !!e.footprintLayer?.charts?.length;
  }
}
function re(e, r2) {
  let a = 0, t = 0, n2 = 0, s2 = 0;
  for (const o2 of [...r2.layers, ...r2.tables]) if (ee(o2) && s2++, "layerType" in o2) switch (o2.layerType) {
    case "OrientedImageryLayer":
      a++;
      break;
    case "SubtypeGroupLayer":
      t++;
      break;
    case "SubtypeGroupTable":
      n2++;
  }
  u(e, E.ORIENTED_IMAGERY_LAYER, a > 0), u(e, E.SUBTYPE_GROUP_LAYER, t > 0), u(e, E.SUBTYPE_GROUP_TABLE, n2 > 0), u(e, E.CHARTS, s2 > 0);
}
function ae(e, r2, a) {
  c(r2, E.METADATA), u(r2, E.MULTI_LAYER, e.length > 1), u(r2, E.SINGLE_LAYER, 1 === e.length), u(r2, E.TABLE, a.tables.length > 0 && 0 === a.layers.length), re(r2, a);
}
async function te(e, r2, a) {
  re(r2, a);
}
async function ne(e, r2, a) {
  const { url: t, layerId: n2, title: s2, fullExtent: o2, isTable: l2 } = e, i2 = m(t);
  r2.url = ("FeatureServer" === i2?.serverType ? t : `${t}/${n2}`) ?? null, r2.title ||= s2, r2.extent = null, l2 || null == o2 || (r2.extent = await l(o2)), ae([e], r2, a);
}
function se(e, r2) {
  for (const o2 of e) {
    const a2 = o2.parsedUrl.path, n3 = m(a2), s3 = n3?.url.path;
    if (!s3) throw new r(`${r2}:invalid-parameters`, m2(o2, `has unsupported url pattern: ${a2}`), { layer: o2 });
    const l2 = n3?.serverType;
    if ("FeatureServer" !== l2 && "MapServer" !== l2) throw new r(`${r2}:invalid-parameters`, m2(o2, `has unsupported server type: ${l2}`), { layer: o2 });
    if ("MapServer" === l2 && e.length > 1) throw new r(`${r2}:invalid-parameters`, "Only one layer or table in a map service can be saved");
  }
  const a = m(e[0].parsedUrl.path), n2 = a?.url.path, s2 = e.every((e2) => {
    const r3 = m(e2.parsedUrl.path);
    return r3?.url.path === n2;
  });
  if (!s2) throw new r(`${r2}:invalid-parameters`, "'layers' array should only contain layers or tables that belong to the same feature service");
}
async function oe(e) {
  Q(e, x), await Promise.all(e.map((e2) => e2.load()));
  for (const r2 of e) p(r2, x, N2);
  se(e, x), X(e, x);
}
function le(e, r2) {
  re(e, r2), I(e);
}
async function ie(r2, a, t) {
  let n2 = 0;
  for (const { isTable: e } of r2) e || n2++;
  const s2 = r2[0].parsedUrl.path, o2 = m(s2);
  if (a.url = "FeatureServer" === o2?.serverType ? o2.url.path : s2, a.title ||= o2.title, a.extent = null, n2 > 0) {
    const t2 = r2.map((e) => e.fullExtent).filter(N).reduce((e, r3) => e.clone().union(r3));
    t2 && (a.extent = await l(t2));
  }
  ae(r2, a, t), I(a);
}
async function ce(e, r2) {
  return P({ layer: e, itemType: g, validateLayer: N2, createJSONContext: (r3) => $2(r3, e), createItemData: (e2, r3) => J(r3, [e2]), errorNamePrefix: P2, setItemProperties: te }, r2);
}
async function ue(e, r2) {
  await Z(e);
  const a = e[0].portalItem, t = j(a), s2 = await Promise.all(e.map((e2) => w(e2, e2.isTable ? t.forTables : t.forLayers, r2))), o2 = await J(a, e.map((e2, r3) => ({ layer: e2, layerJSON: s2[r3] })));
  return le(a, o2), await a.update({ data: o2 }), await Promise.all(e.slice(1).map((e2) => e2.portalItem.reload())), i(t.forLayers), i(t.forTables), a.clone();
}
async function ye(e, r2, a) {
  return $({ layer: e, itemType: g, validateLayer: N2, createJSONContext: (r3) => $2(r3, e), createItemData: (e2, r3) => Promise.resolve(C(e2)), errorNamePrefix: O, newItem: r2, setItemProperties: ne }, a);
}
async function pe(e, r2, a) {
  await oe(e);
  const t = d2({ itemType: g, errorNamePrefix: x, newItem: r2 }), s2 = j(t), o2 = await Promise.all(e.map((e2) => w(e2, e2.isTable ? s2.forTables : s2.forLayers, a))), u3 = await G(e.map((e2, r3) => ({ layer: e2, layerJSON: o2[r3] })));
  await ie(e, t, u3), await v(t, u3, a);
  for (const n2 of e) n2.portalItem = t.clone();
  return i(s2.forLayers), i(s2.forTables), t;
}
export {
  ce as save,
  ue as saveAll,
  pe as saveAllAs,
  ye as saveAs
};
//# sourceMappingURL=featureLayerUtils-DUDOMFK4.js.map
