import {
  a as a2,
  c,
  d,
  l,
  n as n5,
  p,
  r as r3,
  t as t2,
  t2 as t3,
  u as u2
} from "./chunk-XRP7UT6W.js";
import {
  i as i2,
  n as n4
} from "./chunk-WVCUK642.js";
import {
  b,
  f as f3,
  i,
  n as n3,
  y
} from "./chunk-A6I6UCEQ.js";
import "./chunk-V7VHUXCE.js";
import "./chunk-Q65CRSH6.js";
import "./chunk-6Q257Z6L.js";
import "./chunk-UFNIHRKY.js";
import {
  F,
  a,
  m,
  s as s2,
  u
} from "./chunk-ACTGCYFB.js";
import "./chunk-SGNC5H35.js";
import "./chunk-OR24MDO6.js";
import {
  rn
} from "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import {
  r as r2
} from "./chunk-Z3PP4SLW.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-QRPQOATM.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import {
  S as S2
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import {
  Dt,
  S,
  V,
  f2
} from "./chunk-2F6BRQJJ.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import {
  n as n2,
  r,
  t
} from "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import {
  e as e2
} from "./chunk-RTVKY37F.js";
import {
  T,
  e2 as e,
  f2 as f,
  s
} from "./chunk-WARIPJQI.js";
import {
  has,
  n2 as n
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js
var e3 = { upload: { createFromFiles: 0.8, loadMesh: 0.2 }, uploadAssetBlobs: { prepareAssetItems: 0.9, uploadAssetItems: 0.1 }, uploadConvertibleSource: { uploadEditSource: 0.5, serviceAssetsToGlb: 0.5 }, uploadLocalMesh: { meshToAssetBlob: 0.5, uploadAssetBlobs: 0.5 } };

// node_modules/@arcgis/core/support/progressUtils.js
function i3(s3, t4 = (s4) => {
}, e4) {
  return new n6(s3, t4, e4);
}
var n6 = class {
  constructor(s3, t4 = (s4) => {
  }, e4) {
    if (this.onProgress = t4, this.taskName = e4, this._progressMap = /* @__PURE__ */ new Map(), this._startTime = void 0, this._timingsMap = /* @__PURE__ */ new Map(), "number" == typeof s3) {
      this._weights = {};
      for (let t5 = 0; t5 < s3; t5++) {
        const e5 = t5, r4 = 1 / s3;
        this._weights[e5] = r4, this._progressMap.set(e5, 0);
      }
    } else this._weights = s3;
    this.emitProgress();
  }
  emitProgress() {
    let s3 = 0;
    for (const [t4, e4] of this._progressMap.entries()) {
      s3 += e4 * this._weights[t4];
    }
    if (1 === s3 && has("enable-feature:esri-3dofl-upload-timings")) {
      const s4 = Math.round(performance.now() - (this._startTime ?? 0)) / 1e3;
      console.log(`${this.taskName} done in ${s4} sec`);
      for (const [t4, e4] of this._timingsMap) {
        const r4 = Math.round(e4.end - e4.start) / 1e3, o = Math.round(r4 / s4 * 100);
        console.log(this.taskName ?? "Task", { stepKey: t4, stepTime: r4, relativeTime: o });
      }
    }
    this.onProgress(s3);
  }
  setProgress(s3, e4) {
    if (this._progressMap.set(s3, e4), has("enable-feature:esri-3dofl-upload-timings")) {
      const r4 = performance.now();
      this._startTime ??= r4;
      const o = e2(this._timingsMap, s3, () => ({ start: r4, end: 0 }));
      1 === e4 && (o.end = r4);
    }
    this.emitProgress();
  }
  simulate(s3, t4) {
    return a3((t5) => this.setProgress(s3, t5), t4);
  }
  makeOnProgress(s3) {
    return (t4) => this.setProgress(s3, t4);
  }
};
function a3(t4 = (s3) => {
}, e4 = l2) {
  const r4 = performance.now();
  t4(0);
  const o = setInterval(() => {
    const s3 = performance.now() - r4, o2 = 1 - Math.exp(-s3 / e4);
    t4(o2);
  }, g);
  return e(() => {
    clearInterval(o), t4(1);
  });
}
function h(s3, t4 = c2) {
  return r(t(s3 * f4 / t4));
}
function m2(s3, t4 = p2) {
  return r(t(s3 * f4 / t4));
}
var c2 = 10;
var p2 = 10;
var f4 = 8e-6;
var g = n2(50);
var l2 = n2(1e3);

// node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js
var n7 = 1e6;
var i4 = 20 * n7;
var p3 = 2e9;
var l3 = 3;
async function m3({ data: m4, name: f5, description: d2 }, u3, h2) {
  let w = null;
  try {
    const y2 = V(u3, "uploads"), j = V(y2, "info"), { data: g2 } = await f2(j, { query: { f: "json" }, responseType: "json" });
    s(h2);
    const q2 = S(u3), z2 = g2.maxUploadFileSize * n7, T2 = q2 ? p3 : z2, U = q2 ? Math.min(i4, z2) : i4;
    if (m4.size > T2) throw new Error("Data too large");
    const A = V(y2, "register"), { data: E } = await f2(A, { query: { f: "json", itemName: c3(f5), description: d2 }, responseType: "json", method: "post" });
    if (s(h2), !E.success) throw new Error("Registration failed");
    const { itemID: P } = E.item;
    w = V(y2, P);
    const D = V(w, "uploadPart"), I = Math.ceil(m4.size / U), M2 = new Array();
    for (let e4 = 0; e4 < I; ++e4) M2.push(m4.slice(e4 * U, Math.min((e4 + 1) * U, m4.size)));
    const v = M2.slice().reverse(), x = new Array(), F2 = i3(I, h2?.onProgress, "uploadItem"), _2 = async () => {
      for (; 0 !== v.length; ) {
        const t4 = M2.length - v.length, r4 = v.pop(), s3 = new FormData(), n8 = F2.simulate(t4, h(r4.size));
        try {
          s3.append("f", "json"), s3.append("file", r4), s3.append("partId", `${t4}`);
          const { data: a4 } = await f2(D, { timeout: 0, body: s3, responseType: "json", method: "post" });
          if (s(h2), !a4.success) throw new Error("Part upload failed");
        } finally {
          n8.remove();
        }
      }
    };
    for (let e4 = 0; e4 < l3 && 0 !== v.length; ++e4) x.push(_2());
    await Promise.all(x);
    const b2 = V(w, "commit"), { data: C } = await f2(b2, { query: { f: "json", parts: M2.map((e4, o) => o).join(",") }, responseType: "json", method: "post" });
    if (s(h2), !C.success) throw new Error("Commit failed");
    return C.item;
  } catch (y2) {
    if (null != w) {
      const o = V(w, "delete");
      await f2(o, { query: { f: "json" }, responseType: "json", method: "post" });
    }
    throw y2;
  }
}
function c3(e4) {
  return e4.replaceAll("/", "_").replaceAll("\\", "_");
}

// node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js
async function q(e4, s3, t4) {
  const r4 = e4.length;
  if (!r4) return t4?.onProgress?.(1), [];
  const o = i3(r4, t4?.onProgress, "uploadAssets");
  return Promise.all(e4.map((e5, r5) => L(e5, s3, __spreadProps(__spreadValues({}, t4), { onProgress: o.makeOnProgress(r5) }))));
}
async function L(e4, { layer: s3, ongoingUploads: t4 }, r4) {
  const o = t4.get(e4);
  if (o) return o;
  if (!ae(s3)) throw new r3();
  if (H(e4, s3)) return r4?.onProgress?.(1), { mesh: e4 };
  const n8 = $(e4, s3, r4);
  t4.set(e4, n8);
  try {
    return await n8;
  } finally {
    t4.delete(e4);
  }
}
function H(e4, s3) {
  const { parsedUrl: t4 } = s3;
  return null != t4 && e4.metadata.externalSources.some((e5) => f3(e5, t4));
}
async function $(e4, s3, r4) {
  const { metadata: o } = e4, { displaySource: n8 } = o, a4 = K(n8?.source, s3, { checkForConversionRequired: true }), i5 = null != a4 ? J(e4, a4, s3, r4) : o.externalSources.length > 0 ? z(e4, s3, r4) : G(e4, s3, r4), { external: c4, info: u3 } = await i5;
  return s(r4), e4.addExternalSources([c4]), u3;
}
async function J(e4, s3, t4, r4) {
  return { external: { source: { type: "service", assets: await V2(s3, t4, r4) }, original: true, unitConversionDisabled: true }, info: { mesh: e4 } };
}
async function z(e4, s3, t4) {
  const r4 = ie(s3), { externalSources: o } = e4.metadata, n8 = W(o, s3);
  if (!n8) throw new n5();
  const a4 = i3(e3.uploadConvertibleSource, t4?.onProgress, "uploadConvertibleSource"), i5 = { type: "service", assets: await V2(n8, s3, { onProgress: a4.makeOnProgress("uploadEditSource") }) };
  e4.addExternalSources([{ source: i5, original: true }]);
  const c4 = n8.reduce((e5, { asset: s4 }) => s4 instanceof File ? e5 + s4.size : e5, 0), l4 = a4.simulate("serviceAssetsToGlb", m2(c4));
  try {
    const { source: o2, transform: n9, origin: a5 } = await te(i5, s3, r4);
    if (e4.transform = n9, a5 && t4?.useAssetOrigin) {
      const s4 = await rn(a5, e4.spatialReference, t4);
      e4.vertexSpace.origin = [s4.x, s4.y, s4.z ?? 0];
    }
    return { external: { source: o2, unitConversionDisabled: true }, info: { mesh: e4, georeferenceInfo: a5 ? { origin: a5 } : void 0 } };
  } finally {
    l4.remove();
  }
}
async function G(e4, s3, t4) {
  const r4 = i3(e3.uploadLocalMesh, t4?.onProgress, "uploadLocalMesh"), o = M(e4, s3, __spreadProps(__spreadValues({}, t4), { onProgress: r4.makeOnProgress("meshToAssetBlob") }));
  return { external: { source: { type: "service", assets: await X([o], s3, __spreadProps(__spreadValues({}, t4), { onProgress: r4.makeOnProgress("uploadAssetBlobs") })) }, extent: e4.extent.clone(), original: true }, info: { mesh: e4 } };
}
async function M(e4, s3, r4) {
  const o = ie(s3), n8 = await e4.load(r4), a4 = await n8.toBinaryGLTF({ origin: n8.origin, signal: r4?.signal, ignoreLocalTransform: true, unitConversionDisabled: true });
  return s(r4), { blob: new Blob([a4], { type: "model/gltf-binary" }), assetName: `${r2()}.glb`, assetType: o };
}
function W(e4, s3) {
  for (const t4 of e4) {
    const e5 = K(t4.source, s3);
    if (e5) return e5;
  }
  return null;
}
function K(e4, { infoFor3D: s3 }, t4 = {}) {
  if (!e4) return null;
  const r4 = b(e4);
  if (!r4) return null;
  const { supportedFormats: o, editFormats: n8 } = s3, a4 = new Array(), i5 = F(s3), c4 = m(s3);
  let u3 = false;
  for (const l4 of r4) {
    const e5 = Q(l4, o);
    if (!e5) return null;
    const { assetType: s4 } = e5;
    if (t4.checkForConversionRequired && (s4 === i5 || s4 === c4)) return null;
    n8.includes(s4) && (u3 = true), a4.push(e5);
  }
  return u3 ? a4 : null;
}
function Q(e4, s3) {
  const t4 = y(e4, s3);
  return t4 ? { asset: e4, assetType: t4 } : null;
}
async function V2(e4, s3, t4) {
  return X(e4.map((e5) => Y(e5, t4)), s3, t4);
}
async function X(e4, s3, r4) {
  const o = i3(e3.uploadAssetBlobs, r4?.onProgress, "uploadAssetBlobs"), n8 = await _(e4, s3, __spreadProps(__spreadValues({}, r4), { onProgress: o.makeOnProgress("prepareAssetItems") }));
  s(r4);
  const a4 = n8.map(({ item: e5 }) => e5), { uploadResults: i5 } = await ee(a4, s3, __spreadProps(__spreadValues({}, r4), { onProgress: o.makeOnProgress("uploadAssetItems") }));
  return s(r4), e4.map((e5, t4) => se(n8[t4], i5[t4], s3));
}
async function Y(e4, s3) {
  const { asset: r4, assetType: o } = e4;
  if (r4 instanceof File) return { blob: r4, assetName: r4.name, assetType: o };
  const n8 = await r4.toBlob(s3);
  return s(s3), { blob: n8, assetName: r4.assetName, assetType: o };
}
async function Z(e4, s3, r4) {
  const { blob: n8, assetType: a4, assetName: c4 } = e4;
  let u3 = null;
  try {
    const e5 = await m3({ data: n8, name: c4 }, s3.url, r4);
    s(r4), u3 = { assetType: a4, assetUploadId: e5.itemID };
  } catch (l4) {
    f(l4), ce().warnOnce(`Service ${s3.url} does not support the REST Uploads API.`);
  }
  if (!u3) {
    const e5 = await Dt(n8);
    if (s(r4), !e5.isBase64) throw new u2();
    u3 = { assetType: a4, assetData: e5.data };
  }
  if (!u3) throw new p();
  return { item: u3, assetName: c4 };
}
function _(e4, s3, r4) {
  const o = i3(e4.length, r4?.onProgress, "prepareAssetItems");
  return Promise.all(e4.map(async (e5, n8) => {
    const a4 = Z(await e5, s3, __spreadProps(__spreadValues({}, r4), { onProgress: o.makeOnProgress(n8) }));
    return s(r4), a4;
  }));
}
async function ee(s3, r4, o) {
  const n8 = a3(o?.onProgress);
  try {
    const n9 = await f2(V(r4.parsedUrl.path, "uploadAssets"), { timeout: 0, query: { f: "json", assets: JSON.stringify(s3) }, method: "post", responseType: "json" });
    if (s(o), n9.data.uploadResults.length !== s3.length) throw new a2(s3.length, n9.data.uploadResults.length);
    return n9.data;
  } finally {
    n8.remove();
  }
}
function se(e4, s3, t4) {
  const { success: r4 } = s3;
  if (!r4) {
    const { error: t5 } = s3;
    throw new d(e4.assetName, t5);
  }
  const { assetHash: o } = s3, { assetName: n8, item: { assetType: a4 } } = e4, { infoFor3D: { supportedFormats: i5 } } = t4, c4 = s2(a4, i5);
  if (!c4) throw new c(a4);
  return new i(n8, c4, [new n3(`${t4.parsedUrl.path}/assets/${o}`, o)]);
}
async function te({ assets: e4 }, s3, t4) {
  const r4 = e4.map(({ assetName: e5, parts: s4 }) => ({ assetName: e5, assetHash: s4[0].partHash }));
  let o;
  try {
    const e5 = V(s3.parsedUrl.path, "convert3D"), n8 = s3.capabilities?.operations.supportsAsyncConvert3D;
    o = (await (n8 ? ne : oe)(e5, { query: { f: "json", assets: JSON.stringify(r4), transportType: "esriTransportTypeUrl", targetFormat: t4, async: n8 }, responseType: "json", timeout: 0 })).data;
  } catch (n8) {
    throw new l();
  }
  return re(s3, o);
}
function re(e4, s3) {
  const t4 = { source: { type: "service", assets: s3.assets.map((s4) => {
    const t5 = u(s4.contentType, e4.infoFor3D.supportedFormats);
    if (!t5) throw new c(t5);
    return new i(s4.assetName, s4.contentType, [new n3(s4.assetURL, s4.assetHash)]);
  }) }, origin: void 0, transform: void 0 };
  if (s3.transform) {
    if (t4.transform = i2(s3.transform), s3.spatialReference) {
      const e5 = S2.fromJSON(s3.spatialReference);
      t4.origin = n4(s3.transform, e5);
    }
  } else t4.transform = t3(e4.spatialReference);
  return t4;
}
function oe(s3, t4) {
  return f2(s3, t4);
}
async function ne(s3, t4) {
  const o = (await f2(s3, t4)).data.statusUrl;
  for (; ; ) {
    const s4 = (await f2(o, { query: { f: "json" }, responseType: "json" })).data;
    switch (s4.status) {
      case "Completed":
        return f2(s4.resultUrl, { query: { f: "json" }, responseType: "json" });
      case "CompletedWithErrors":
        throw new Error(s4.status);
      case "Failed ImportChanges":
      case "InProgress":
      case "Pending":
      case "ExportAttachments":
      case "ExportChanges":
      case "ExportingData":
      case "ExportingSnapshot":
      case "ImportAttachments":
      case "ProvisioningReplica":
      case "UnRegisteringReplica":
        break;
      default:
        throw new Error();
    }
    await T(ue);
  }
}
function ae(e4) {
  return !!e4.infoFor3D && !!e4.url;
}
function ie({ infoFor3D: e4 }) {
  const s3 = a(e4);
  if (!s3) throw new t2();
  return s3;
}
function ce() {
  return n.getLogger("esri.layers.graphics.sources.support.uploadAssets");
}
var ue = n2(1e3);
export {
  q as uploadAssets
};
//# sourceMappingURL=uploadAssets-F6SSA5IO.js.map
