import {
  A
} from "./chunk-2M6DJG7I.js";
import {
  an,
  on,
  tn
} from "./chunk-QBEV3F3C.js";
import {
  j
} from "./chunk-JXLQUNSA.js";
import {
  u
} from "./chunk-K5YEU7YE.js";
import {
  ce
} from "./chunk-DMD5CGVA.js";
import {
  T
} from "./chunk-VHQJAPCR.js";
import {
  Dt
} from "./chunk-TPFIN626.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/editing/types.js
function n2(n3) {
  return "object" == typeof n3 && null != n3 && "objectId" in n3 && !!n3.objectId;
}
function e(e2) {
  return e2.every(n2);
}
function t(n3) {
  return "object" == typeof n3 && null != n3 && "globalId" in n3 && !!n3.globalId;
}
function o(n3) {
  return n3.every(t);
}

// node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js
async function m(e2, t2, r2) {
  const { geometry: s } = t2, o2 = __spreadValues({}, t2.attributes);
  if (null != r2 && "mesh" === s?.type) {
    const { transformFieldRoles: t3 } = r2, { origin: n3, spatialReference: d, vertexSpace: m2 } = s, f2 = s.transform ?? new A(), g2 = "local" === m2.type, b2 = e2.spatialReference, y2 = b2.isGeographic, R2 = T(b2, d), h2 = on(d, b2) && tn(d, b2);
    if (!(g2 && y2 && h2 || !g2 && !y2 && R2)) return null;
    const I2 = an(n3, d, b2);
    if (null == I2) return null;
    if (o2[t3.originX] = I2.x, o2[t3.originY] = I2.y, o2[t3.originZ] = I2.z ?? 0, null != f2) {
      const { translation: e3, scale: r3, rotation: s2 } = f2, n4 = g2 ? 1 : ce(d) / ce(b2);
      o2[t3.translationX] = e3[0] * n4, o2[t3.translationY] = e3[2] * n4, o2[t3.translationZ] = -e3[1] * n4, o2[t3.scaleX] = r3[0], o2[t3.scaleY] = r3[2], o2[t3.scaleZ] = r3[1], o2[t3.rotationX] = s2[0], o2[t3.rotationY] = s2[2], o2[t3.rotationZ] = -s2[1], o2[t3.rotationDeg] = s2[3];
    }
    return { attributes: o2 };
  }
  return null == s ? { attributes: o2 } : "mesh" === s.type || "extent" === s.type ? null : { geometry: s.toJSON(), attributes: o2 };
}
async function f(e2, t2) {
  const r2 = await Promise.all((t2.addAttachments ?? []).map((t3) => g(e2, t3))), a = await Promise.all((t2.updateAttachments ?? []).map((t3) => g(e2, t3))), s = t2.deleteAttachments ?? [];
  return r2.length || a.length || s.length ? { adds: r2, updates: a, deletes: [...s] } : null;
}
async function g(e2, t2) {
  const { feature: r2, attachment: a } = t2, { globalId: o2, name: n3, contentType: l, data: i, uploadId: u2 } = a, d = { globalId: o2 };
  if (r2 && ("attributes" in r2 ? d.parentGlobalId = r2.attributes?.[e2.globalIdField] : r2.globalId && (d.parentGlobalId = r2.globalId)), u2) d.uploadId = u2;
  else if (i) {
    const e3 = await Dt(i);
    e3 && (d.contentType = e3.mediaType, d.data = e3.data), i instanceof File && (d.name = i.name);
  }
  return n3 && (d.name = n3), l && (d.contentType = l), d;
}
function b(e2, t2, r2) {
  if (!t2 || 0 === t2.length) return [];
  if (r2 && o(t2)) return t2.map((e3) => e3.globalId);
  if (e(t2)) return t2.map((e3) => e3.objectId);
  const a = r2 ? e2.globalIdField : e2.objectIdField;
  return a ? t2.map((e3) => e3.getAttribute(a)) : [];
}
function y(e2) {
  const t2 = e2?.assetMaps;
  if (t2) {
    for (const e3 of t2.addResults) e3.success || n.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e3.globalId}.`);
    for (const e3 of t2.updateResults) e3.success || n.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e3.globalId}.`);
  }
  const a = e2?.attachments, s = { addFeatureResults: e2?.addResults?.map(R) ?? [], updateFeatureResults: e2?.updateResults?.map(R) ?? [], deleteFeatureResults: e2?.deleteResults?.map(R) ?? [], addAttachmentResults: a?.addResults ? a.addResults.map(R) : [], updateAttachmentResults: a?.updateResults ? a.updateResults.map(R) : [], deleteAttachmentResults: a?.deleteResults ? a.deleteResults.map(R) : [] };
  return e2?.editMoment && (s.editMoment = e2.editMoment), s;
}
function R(e2) {
  const r2 = true === e2.success ? null : e2.error || { code: void 0, description: "Feature edit failed" };
  return { objectId: e2.objectId, globalId: e2.globalId, error: r2 ? new r("feature-layer-source:edit-failure", r2.description, { code: r2.code }) : null };
}
function h(t2, r2) {
  return new j({ attributes: t2.attributes, geometry: u(__spreadProps(__spreadValues({}, t2.geometry), { spatialReference: r2 })) });
}
function I(e2, t2) {
  return { adds: e2?.adds?.map((e3) => h(e3, t2)) || [], updates: e2?.updates?.map((e3) => ({ original: h(e3[0], t2), current: h(e3[1], t2) })) || [], deletes: e2?.deletes?.map((e3) => h(e3, t2)) || [], spatialReference: t2 };
}
function j2(e2) {
  const t2 = e2.details.raw, r2 = +t2.code, a = +t2.extendedCode;
  return 500 === r2 && (-2147217144 === a || -2147467261 === a);
}

export {
  m,
  f,
  b,
  y,
  R,
  I,
  j2 as j
};
//# sourceMappingURL=chunk-SA5VTERZ.js.map
