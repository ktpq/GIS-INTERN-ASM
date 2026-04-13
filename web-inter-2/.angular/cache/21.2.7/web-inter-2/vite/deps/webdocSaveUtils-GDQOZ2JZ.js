import {
  p as p2
} from "./chunk-L5R4XDY6.js";
import {
  i as i2
} from "./chunk-FLIHJ2WP.js";
import {
  i as i3,
  n,
  s as s2
} from "./chunk-7YHZNK4V.js";
import "./chunk-UNQD2IKR.js";
import {
  n as n2,
  n2 as n3
} from "./chunk-5BCJ35VJ.js";
import "./chunk-UGNCDVPZ.js";
import {
  o
} from "./chunk-J75ZMBKV.js";
import {
  E,
  c,
  i,
  s,
  u
} from "./chunk-YDQ5OQ56.js";
import {
  T as T2,
  U as U2
} from "./chunk-SCB6GXME.js";
import {
  d,
  m
} from "./chunk-A4RZA5BF.js";
import "./chunk-ARSM4E5P.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-NTFCNJJY.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import {
  k
} from "./chunk-N2NNQJRW.js";
import {
  p
} from "./chunk-T3TXTZDJ.js";
import "./chunk-BEBG2VYN.js";
import "./chunk-23U7MZU6.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-MVS4RVUO.js";
import "./chunk-XJP3RSS7.js";
import {
  M
} from "./chunk-LF4XI7IU.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-HJMMRQXJ.js";
import {
  j
} from "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import {
  S as S2
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import {
  I,
  T,
  U
} from "./chunk-2F6BRQJJ.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/webdoc/support/webdocSaveUtils.js
var A = ["NatGeo_World_Map", "Ocean_Basemap", "USA_Topo_Maps", "World_Imagery", "World_Street_Map", "World_Terrain_Base", "World_Topo_Map", "World_Hillshade", "Canvas/World_Light_Gray_Base", "Canvas/World_Light_Gray_Reference", "Canvas/World_Dark_Gray_Base", "Canvas/World_Dark_Gray_Reference", "Ocean/World_Ocean_Base", "Ocean/World_Ocean_Reference", "Reference/World_Boundaries_and_Places", "Reference/World_Reference_Overlay", "Reference/World_Transportation"].map((e) => e.toLowerCase());
async function P(e, t, r2) {
  r2 ??= {}, U3(e, t), await j(() => !t.updatingFromView), await t.load(), await E2(t), await s2(t), await M2(e, t);
  const a = t.portalItem, { json: n4, jsonContext: i4 } = await O(t, a, e.origin);
  return n(i4, { errorName: `${e.name}:save` }, r2), await k2(t, a), await ge(e, t, a, n4, i4), await Promise.all([t.updateItemThumbnail(), p2(t.resourceReferences, i4)]), a;
}
async function O(e, t, o2) {
  const r2 = o(t, o2, true), a = e.write({}, r2);
  return await Promise.all(r2.resources.pendingOperations), { json: a, jsonContext: r2 };
}
async function T3(e, t, r2, a) {
  a ??= {};
  const n4 = D(e, r2);
  await j(() => !t.updatingFromView), await t.load(), await E2(t), await s2(t), await M2(e, t);
  const { json: i4, jsonContext: s3 } = await O(t, n4, e.origin);
  n(s3, { errorName: `${e.name}:save` }, a), await X(t, n4);
  const l = t.getThumbnailState();
  return await he(e, t, n4, i4, s3, a) && (t.resourceReferences.portalItem = n4), t.restoreThumbnailFromState(l), await Promise.all([t.updateItemThumbnail(), p2(t.resourceReferences, s3)]), n4;
}
function U3(t, o2) {
  if (!o2.portalItem) throw new r(`${t.name}:portal-item-not-set`, "Portal item to save to has not been set on the WebMap");
  C(t, o2.portalItem);
}
function C(t, o2) {
  if (o2.type !== t.itemType) throw new r(`${t.name}:portal-item-wrong-type`, `Portal item needs to have type "${t.itemType}"`);
}
async function M2(t, o2) {
  if ("linkchart" !== t.name && !o2.basemap?.baseLayers.length) throw new r(`${t.name}:save`, "Map does not have a valid basemap with a base layer.");
}
function D(e, t) {
  let o2 = k.from(t);
  return o2.id && (o2 = o2.clone(), o2.id = null), o2.type || (o2.type = e.itemType), o2.portal || (o2.portal = M.getDefault()), C(e, o2), o2;
}
function E2(e) {
  const t = [];
  return e.basemap && t.push(e.basemap.load()), e.ground && t.push(e.ground.load()), Promise.allSettled(t).then(() => {
  });
}
async function k2(e, t) {
  t.extent = await ce(e.portalItem, e.initialViewProperties.viewpoint.targetGeometry), await Y(e, t);
}
var G = E.JSAPI;
var L = "CollectorDisabled";
var x = "Collector";
var N = "Data Editing";
var V = "OfflineDisabled";
var B = "Offline";
var $ = "Workforce Project";
var F = "Workforce Worker";
var H = "Workforce Dispatcher";
var K = "Offline Map Areas";
var J = "FieldMapsDisabled";
var q = E.DEVELOPER_BASEMAP;
var z = "UtilityNetwork";
var Q = "IPS";
async function X(e, t) {
  c(t, L), c(t, J), c(t, E.METADATA), c(t, V), c(t, K), c(t, H), c(t, $), c(t, F), await k2(e, t);
}
async function Y(e, t) {
  i(t, G), await Z(e), re(e, t), ae(e, t), ne(e, t), ie(e, t), se(e, t), le(e, t), pe(e, t), t.typeKeywords && (t.typeKeywords = t.typeKeywords.filter((e2, t2, o2) => o2.indexOf(e2) === t2));
}
function Z(e) {
  const t = ee(e).map((e2) => e2.load()).toArray();
  return Promise.allSettled(t).then(() => {
  });
}
function ee(e) {
  return e.allLayers.concat(e.allTables);
}
function te(e) {
  return ee(e).some((e2) => e2.loaded && U2(e2) && e2.capabilities.operations.supportsEditing && e2.editingEnabled && ("subtype-group" !== e2.type || e2.sublayers.some((e3) => e3.editingEnabled)));
}
function oe(e) {
  return ee(e).filter((e2) => "group" !== e2.type).every((t) => t.loaded && fe(e, t));
}
function re(e, t) {
  s(t, L) || s(t, $) || s(t, F) || s(t, H) || !te(e) ? c(t, x) : i(t, x);
}
function ae(e, t) {
  te(e) ? i(t, N) : c(t, N);
}
function ne(e, t) {
  !s(t, V) && oe(e) ? i(t, B) : c(t, B);
}
function ie(e, t) {
  m(e.basemap) ? i(t, q) : c(t, q);
}
function se(e, t) {
  e.utilityNetworks?.length ? i(t, z) : c(t, z);
}
function le(e, t) {
  e.ipsInfo ? i(t, Q) : c(t, Q);
}
function pe(e, t) {
  u(t, E.CHARTS, i3(e));
}
async function ce(e, t) {
  const o2 = t.clone().normalize();
  let r2;
  if (o2.length > 1) for (const a of o2) r2 ? a.width > r2.width && (r2 = a) : r2 = a;
  else r2 = o2[0];
  return ue(e, r2);
}
async function ue(e, t) {
  const o2 = t.spatialReference;
  if (o2.isWGS84) return t.clone();
  if (o2.isWebMercator) return S2(t);
  const { getGeometryServiceURL: r2 } = await import("./geometryServiceUtils-OCJ3FMOK.js"), a = await r2(e), n4 = new n2({ geometries: [t], outSpatialReference: S.WGS84 });
  return (await n3(a, n4))[0];
}
function me(e) {
  return T2(e) || "map-notes" === e.type || "route" === e.type;
}
function fe(e, t) {
  return U2(t) && t.capabilities.operations.supportsSync || me(t) && !t.portalItem || de(t) && !ye(t) && t.spatialReference.equals(e.initialViewProperties.spatialReference);
}
function de(e) {
  return ("tile" === e.type || "vector-tile" === e.type) && (e.capabilities.operations.supportsExportTiles || we(e) || d(e));
}
function ye(e) {
  return "vector-tile" === e.type && Object.keys(e.sourceNameToSource).length > 1;
}
function we(e) {
  return "tile" === e.type && (U(e.url) && A.some((t) => e.url?.toLowerCase().includes("/" + t + "/")));
}
async function ge(e, t, o2, r2, a) {
  await o2.update({ data: r2 }), be(e, t, o2, r2, a);
}
async function he(t, o2, r2, a, n4, i4) {
  const s3 = o2.portalItem, l = { item: s3, authenticated: !(!s3?.id || !s3.portal.user) }, p3 = r2.portal;
  await p3.signIn();
  const { copyAllowed: c2, itemReloaded: u2 } = await _e(l, p3);
  if (l.authenticated ||= u2, !c2) throw new r(`${t.name}:save-as-copy-not-allowed`, "Owner of this map does not allow others to save a copy");
  const m2 = await je(r2, l, a, i4);
  return o2.portalItem = r2, be(t, o2, r2, a, n4), m2;
}
async function _e(e, t) {
  const { item: o2, authenticated: r2 } = e;
  return o2?.id && o2.typeKeywords?.includes("useOnly") ? o2.portal.portalHostname !== t.portalHostname ? { copyAllowed: false, itemReloaded: false } : (r2 || await o2.reload(), { copyAllowed: "admin" === o2.itemControl || "update" === o2.itemControl, itemReloaded: true }) : { copyAllowed: true, itemReloaded: false };
}
async function je(e, t, o2, a) {
  const n4 = e.portal, { item: i4 } = t, { folder: s3, copyAllResources: l } = a;
  let p3 = false;
  if (l && i4?.id && T(i4.portal.url, n4.url) && parseInt(i4.portal.currentVersion, 10) >= 2023) {
    const { total: e2 } = await i4.fetchResources();
    p3 = !!e2;
  }
  if (p3) {
    const t2 = await i4.copy({ copyResources: "all", folder: s3 });
    e.id = t2.id, e.portal = t2.portal;
    const r2 = e.toJSON();
    await e.load(), e.read(r2), await e.update({ data: o2 });
  } else await n4.user.addItem({ item: e, folder: s3, data: o2 });
  return p3;
}
function be(e, o2, r2, i4, s3) {
  p.prototype.read.call(o2, { version: i4.version, authoringApp: i4.authoringApp, authoringAppVersion: i4.authoringAppVersion }, { origin: e.origin, ignoreDefaults: true, url: r2.itemUrl ? I(r2.itemUrl) : void 0 }), i2(s3), o2.resourceInfo = i4;
}
export {
  O as createJSON,
  je as initializeNewItem,
  _e as isCopyAllowed,
  P as save,
  T3 as saveAs
};
//# sourceMappingURL=webdocSaveUtils-GDQOZ2JZ.js.map
