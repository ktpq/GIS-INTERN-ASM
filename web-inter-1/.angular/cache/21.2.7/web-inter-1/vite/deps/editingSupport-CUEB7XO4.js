import {
  I
} from "./chunk-DPCFI5B5.js";
import "./chunk-DPFYRE7L.js";
import {
  P as P2
} from "./chunk-PW6Z3BNO.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-EM42ND2E.js";
import "./chunk-TTRHBDVK.js";
import "./chunk-MXBCSABZ.js";
import {
  c,
  p as p2
} from "./chunk-AOZPM4BK.js";
import "./chunk-SZSPBGRC.js";
import {
  p
} from "./chunk-ACTGCYFB.js";
import {
  A as A2,
  G
} from "./chunk-MQRKJL3K.js";
import "./chunk-I5YTT2EB.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import {
  r as r2
} from "./chunk-Z3PP4SLW.js";
import {
  j
} from "./chunk-N7QYCMB5.js";
import "./chunk-75MOJZ4V.js";
import "./chunk-YDL4QMG6.js";
import "./chunk-YZDX62BD.js";
import "./chunk-BS2V2OFQ.js";
import "./chunk-TX6LXUDP.js";
import "./chunk-L3KMIFH7.js";
import "./chunk-YAY7KCP6.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-PJDZXW5F.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-YY44XNLW.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import {
  q
} from "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import {
  Ee
} from "./chunk-TNGHAIJZ.js";
import "./chunk-2RBIX73A.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import {
  A,
  O,
  P,
  T
} from "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import {
  ot
} from "./chunk-LAAWMBRE.js";
import "./chunk-PKBHGDEY.js";
import "./chunk-XPGSGU2C.js";
import "./chunk-EKLJIMB3.js";
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
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  $
} from "./chunk-WARIPJQI.js";
import {
  a,
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/graphics/editingSupport.js
function A3(e2) {
  return null != e2?.applyEdits;
}
var v = () => n.getLogger("esri.layers.graphics.editingSupport");
var I2 = /* @__PURE__ */ new WeakMap();
async function $2(e2, t, a2, s = {}) {
  let i;
  const n2 = "gdbVersion" in e2 ? e2.gdbVersion : null, d = s.gdbVersion ?? n2;
  if (p2(e2) && e2.url) i = c(e2.url, e2.layerId, d, "original-and-current-features" === s.returnServiceEditsOption);
  else {
    i = $(), i.promise.then((t3) => {
      (t3.addedFeatures.length || t3.updatedFeatures.length || t3.deletedFeatures.length || t3.addedAttachments.length || t3.updatedAttachments.length || t3.deletedAttachments.length) && e2.emit("edits", t3);
    });
    const t2 = { result: i.promise };
    e2.emit("apply-edits", t2);
  }
  try {
    const { results: o, edits: n3 } = await E(e2, t, a2, s), d2 = (e3) => e3.filter((e4) => !e4.error).map(a), l = { edits: n3, addedFeatures: d2(o.addFeatureResults), updatedFeatures: d2(o.updateFeatureResults), deletedFeatures: d2(o.deleteFeatureResults), addedAttachments: d2(o.addAttachmentResults), updatedAttachments: d2(o.updateAttachmentResults), deletedAttachments: d2(o.deleteAttachmentResults), exceededTransferLimit: false, historicMoment: o.editMoment ? new Date(o.editMoment) : null, globalIdToObjectId: s.globalIdToObjectId };
    return o.editedFeatureResults?.length && (l.editedFeatures = o.editedFeatureResults), i.resolve(l), o;
  } catch (l) {
    throw i.reject(l), l;
  }
}
async function E(e2, t, r3, s) {
  if (await e2.load(), !A3(t)) throw new r(`${e2.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e2 });
  if (!G(e2)) throw new r(`${e2.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e2 });
  const { edits: i, options: o } = await S(e2, r3, s);
  return i.addFeatures?.length || i.updateFeatures?.length || i.deleteFeatures?.length || i.addAttachments?.length || i.updateAttachments?.length || i.deleteAttachments?.length ? { edits: i, results: await t.applyEdits(i, o) } : { edits: i, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
}
async function S(e2, t, r3) {
  const s = A2(e2), o = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures), n2 = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments), d = null != e2.infoFor3D;
  if (G2(t, s, r3, !!o, !!n2, `${e2.type}-layer`), !s.data.isVersioned && r3?.gdbVersion) throw new r(`${e2.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!s.editing.supportsRollbackOnFailure && r3?.rollbackOnFailureEnabled) throw new r(`${e2.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  const l = __spreadValues({}, r3);
  if (null != l.rollbackOnFailureEnabled || s.editing.supportsRollbackOnFailure || (l.rollbackOnFailureEnabled = true), l.rollbackOnFailureEnabled || "original-and-current-features" !== l.returnServiceEditsOption || (false === l.rollbackOnFailureEnabled && v().warn(`${e2.type}-layer:invalid-parameter`, "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."), l.rollbackOnFailureEnabled = true), !s.editing.supportsReturnServiceEditsInSourceSpatialReference && l.returnServiceEditsInSourceSR) throw new r(`${e2.type}-layer:invalid-parameter`, "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
  if (l.returnServiceEditsInSourceSR && "original-and-current-features" !== l.returnServiceEditsOption) throw new r(`${e2.type}-layer:invalid-parameter`, "'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");
  const u = D(t, s, `${e2.type}-layer`), p3 = r3?.globalIdUsed || d, c2 = e2.fields.filter((e3) => "big-integer" === e3.type || "oid" === e3.type && (e3.length || 0) >= 8);
  if (p3) {
    const { globalIdField: t2 } = e2;
    if (null == t2) throw new r(`${e2.type}-layer:invalid-parameter`, "Layer does not specify a global id field.");
    u.addFeatures.forEach((e3) => T2(e3, t2));
  }
  u.addFeatures.forEach((t2) => j2(t2, e2, p3, c2)), u.updateFeatures.forEach((t2) => k(t2, e2, p3, c2)), u.deleteFeatures.forEach((t2) => U(t2, e2, p3, c2)), u.addAttachments.forEach((t2) => L(t2, e2)), u.updateAttachments.forEach((t2) => L(t2, e2)), d && await x(u, e2);
  const m = e(I2, e2, () => /* @__PURE__ */ new Map());
  return { edits: await B(u, s.data.supportedCurveTypes ?? [], m), options: l };
}
function R(e2, t, r3, s) {
  if (r3) {
    if ("attributes" in e2 && !e2.attributes[t.globalIdField]) throw new r(`${t.type}-layer:invalid-parameter`, `Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);
    if (!("attributes" in e2) && !e2.globalId) throw new r(`${t.type}-layer:invalid-parameter`, "`'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if (s.length && "attributes" in e2) for (const i of s) {
    const r4 = e2.attributes[i.name];
    if (void 0 !== r4 && !Ee(i, r4)) throw new r(`${t.type}-layer:invalid-parameter`, `Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`, { feature: e2 });
  }
  if ("geometry" in e2 && null != e2.geometry) {
    if (e2.geometry.hasZ && false === t.capabilities?.data.supportsZ) throw new r(`${t.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e2.geometry.hasM && false === t.capabilities?.data.supportsM) throw new r(`${t.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function O2(e2, t) {
  if ("geometry" in e2 && "mesh" === e2.geometry?.type && null != t.infoFor3D && null != t.spatialReference) {
    const { geometry: r3 } = e2, { spatialReference: s, vertexSpace: i } = r3, o = t.spatialReference, n2 = "local" === i.type, d = A(o), l = T(o, s), h = l || P(o) && (P(s) || O(s));
    if (!(n2 && d && h || !n2 && !d && l)) throw new r(`${t.type}-layer:mesh-unsupported`, `Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${o.wkid} is not supported.`);
  }
}
function j2(e2, t, a2, r3) {
  R(e2, t, a2, r3), O2(e2, t);
}
function U(e2, t, a2, r3) {
  R(e2, t, a2, r3);
}
function k(e2, t, r3, s) {
  R(e2, t, r3, s), O2(e2, t);
  const i = A2(t);
  if ("geometry" in e2 && null != e2.geometry && !i?.editing.supportsGeometryUpdate) throw new r(`${t.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function L(e2, t) {
  const { feature: r3, attachment: s } = e2;
  if (!r3 || "attributes" in r3 && !r3.attributes[t.globalIdField]) throw new r(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in r3) && !r3.globalId) throw new r(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!s.globalId) throw new r(`${t.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!s.data && !s.uploadId) throw new r(`${t.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(s.data instanceof File && !!s.data.name) && !s.name) throw new r(`${t.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!t.capabilities?.editing.supportsUploadWithItemId && s.uploadId) throw new r(`${t.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if ("string" == typeof s.data) {
    const e3 = ot(s.data);
    if (e3 && !e3.isBase64) throw new r(`${t.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
function T2(e2, t) {
  const { attributes: a2 } = e2;
  null == a2[t] && (a2[t] = r2());
}
async function B(e2, t, a2) {
  const r3 = e2.addFeatures ?? [], s = e2.updateFeatures ?? [], i = r3.concat(s).map((e3) => e3.geometry), o = await I(i, t, a2), n2 = await P2(o), d = r3.length, u = s.length;
  return n2.slice(0, d).forEach((e3, t2) => r3[t2].geometry = e3), n2.slice(d, d + u).forEach((e3, t2) => s[t2].geometry = e3), e2;
}
function M(e2) {
  return { addFeatures: Array.from(e2?.addFeatures ?? []), updateFeatures: Array.from(e2?.updateFeatures ?? []), deleteFeatures: e2 && q.isCollection(e2.deleteFeatures) ? e2.deleteFeatures.toArray() : e2.deleteFeatures || [], addAttachments: e2.addAttachments || [], updateAttachments: e2.updateAttachments || [], deleteAttachments: e2.deleteAttachments || [] };
}
function D(e2, t, r3) {
  const s = M(e2);
  if (s.addFeatures?.length && !t.operations.supportsAdd) throw new r(`${r3}:unsupported-operation`, "Layer does not support adding features.");
  if (s.updateFeatures?.length && !t.operations.supportsUpdate) throw new r(`${r3}:unsupported-operation`, "Layer does not support updating features.");
  if (s.deleteFeatures?.length && !t.operations.supportsDelete) throw new r(`${r3}:unsupported-operation`, "Layer does not support deleting features.");
  return s.addFeatures = s.addFeatures.map(V), s.updateFeatures = s.updateFeatures.map(V), s.addAssetFeatures = [], s;
}
function G2(e2, t, r3, s, i, o) {
  if (!(e2 && (s || i) || r3?.usingTelecomOperations)) throw new r(`${o}:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  const n2 = t.editing.supportsGlobalId || r3?.usingFeatureServiceEndpoint;
  if (!n2 && r3?.globalIdUsed) throw new r(`${o}:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!n2 && i) throw new r(`${o}:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if (!r3?.globalIdUsed && i) throw new r(`${o}:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
}
function V(t) {
  const a2 = new j();
  return t.attributes || (t.attributes = {}), a2.geometry = t.geometry, a2.attributes = t.attributes, a2;
}
async function x(e2, t) {
  const { infoFor3D: r3 } = t;
  if (null == r3) return;
  if (!p(r3)) throw new r(`${t.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
  e2.addAssetFeatures ??= [];
  const { addAssetFeatures: s } = e2;
  for (const a2 of e2.addFeatures ?? []) z(a2) && s.push(a2);
  for (const a2 of e2.updateFeatures ?? []) z(a2) && s.push(a2);
}
function z(e2) {
  return "mesh" === e2?.geometry?.type;
}
function C(e2, t, r3, s) {
  if (!A3(t)) throw new r(`${e2.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e2 });
  if (!t.uploadAssets) throw new r(`${e2.type}-layer:no-asset-upload-support`, "Layer source does not support uploadAssets capability", { layer: e2 });
  return t.uploadAssets(r3, s);
}
export {
  $2 as applyEdits,
  G2 as checkEditingCapabilities,
  M as normalizeCollections,
  D as normalizeEdits,
  B as processGeometries,
  V as shallowCloneFeature,
  C as uploadAssets
};
//# sourceMappingURL=editingSupport-CUEB7XO4.js.map
