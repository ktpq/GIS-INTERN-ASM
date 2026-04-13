import {
  I
} from "./chunk-SLQLDNYL.js";
import "./chunk-MXAZZ5UX.js";
import {
  c,
  p
} from "./chunk-YFEVWOQM.js";
import "./chunk-QJHP7M5C.js";
import {
  p as p2
} from "./chunk-7WSSXDPD.js";
import {
  r as r2
} from "./chunk-J5XU3PTN.js";
import {
  A as A2,
  G
} from "./chunk-FCVEMPGG.js";
import {
  j
} from "./chunk-D5MS4RFG.js";
import "./chunk-UOTNWVQN.js";
import "./chunk-AEEIJGHJ.js";
import "./chunk-MK2KB2KA.js";
import "./chunk-NIXSIW3X.js";
import "./chunk-DZN3R4UM.js";
import "./chunk-OD52MENG.js";
import "./chunk-XK2FSQWW.js";
import "./chunk-AIECNX6R.js";
import "./chunk-ZPAQA4G3.js";
import "./chunk-WLCIR5JN.js";
import "./chunk-OFIL7BYT.js";
import "./chunk-M3PLR22U.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import {
  Ee
} from "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-QU4UZ7C2.js";
import "./chunk-HKOFZI3I.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-T6F4SXOT.js";
import "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-U3CRXBTW.js";
import "./chunk-QLC3W7PG.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import {
  P as P2
} from "./chunk-CEHUBL44.js";
import "./chunk-55DFFBOE.js";
import "./chunk-LHEB3G3E.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-TUNGPGHU.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import {
  A,
  O,
  P,
  T
} from "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  ot
} from "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import {
  e
} from "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  $
} from "./chunk-POW25PFR.js";
import {
  a,
  n2 as n,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
  if (p(e2) && e2.url) i = c(e2.url, e2.layerId, d, "original-and-current-features" === s.returnServiceEditsOption);
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
  if (!p2(r3)) throw new r(`${t.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
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
//# sourceMappingURL=editingSupport-AUYTOYO5.js.map
