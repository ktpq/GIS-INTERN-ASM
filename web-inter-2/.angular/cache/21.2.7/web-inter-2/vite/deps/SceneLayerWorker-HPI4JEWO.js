import {
  a,
  h
} from "./chunk-6RW4R63U.js";
import "./chunk-4ZAH5GQG.js";
import "./chunk-VYBZD663.js";
import "./chunk-TZSKNWRI.js";
import {
  c
} from "./chunk-BZX2IS72.js";
import {
  d,
  n as n2
} from "./chunk-NZKVNPZ3.js";
import "./chunk-ZFWTLX5G.js";
import {
  i
} from "./chunk-BPRFDKSL.js";
import "./chunk-IMJBZ4A5.js";
import "./chunk-QGNQJYZT.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import "./chunk-IRGX4DBZ.js";
import "./chunk-3PLUKWC5.js";
import "./chunk-AHEHRQEH.js";
import "./chunk-DVV55TEN.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-F6AS75CS.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import {
  f,
  u
} from "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import {
  n
} from "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-AGHTZMGO.js";
import {
  T
} from "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/libs/i3s/I3SModule.js
function s() {
  return n3 ??= (async () => {
    const s2 = await import("./i3s-PTT4EHKS.js");
    return await s2.default({ locateFile: (s3) => n(`esri/libs/i3s/${s3}`) });
  })(), n3;
}
function i2() {
  n3 = null;
}
var n3;

// node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js
async function m(e) {
  A = await v();
  const r = [e.geometryBuffer];
  return { result: x(A, e, r), transferList: r };
}
async function p(e) {
  A = await v();
  const r = [e.geometryBuffer], { geometryBuffer: t } = e, o = t.byteLength, n4 = A._malloc(o), s2 = new Uint8Array(A.HEAPU8.buffer, n4, o);
  s2.set(new Uint8Array(t));
  const i3 = A.dracoDecompressPointCloudData(n4, s2.byteLength);
  if (A._free(n4), i3.error.length > 0) throw new Error(`i3s.wasm: ${i3.error}`);
  const a2 = i3.featureIds?.length > 0 ? i3.featureIds.slice() : null, f2 = i3.positions.slice();
  return a2 && r.push(a2.buffer), r.push(f2.buffer), { result: { positions: f2, featureIds: a2 }, transferList: r };
}
async function y(e) {
  await v(), S2(e);
  const r = { buffer: e.buffer };
  return { result: r, transferList: [r.buffer] };
}
async function h2(e) {
  await v(), L(e);
}
async function d2(e) {
  A = await v(), A.setLegacySchema(e.context, e.jsonSchema);
}
async function g(e) {
  const { localMatrix: i3, origin: a2, positions: f2, vertexSpace: c2 } = e, l = S.fromJSON(e.inSpatialReference), u2 = S.fromJSON(e.outSpatialReference), m2 = i3 ? u(i3) : void 0, p2 = f(a2);
  let y2;
  const [{ projectBuffer: h3 }, { initializeProjection: d3 }] = await Promise.all([import("./projectBuffer-MPV63K66.js"), import("./projectionUtils-MW6TU2Y3.js")]);
  await d3(l, u2);
  const g2 = [0, 0, 0];
  if (!h3(p2, l, 0, g2, u2, 0)) throw new Error("Failed to project");
  if ("georeferenced" === c2.type && null == c2.origin) {
    if (y2 = new Float64Array(f2.length), !h3(f2, l, 0, y2, u2, 0, y2.length / 3)) throw new Error("Failed to project");
  } else {
    const e2 = "georeferenced" === c2.type ? c.fromJSON(c2) : i.fromJSON(c2), { projectMeshVertexPositions: r } = await import("./projectMeshVertexPositions-J7PV6NTI.js"), t = r({ vertexAttributes: { position: f2 }, transform: m2 ? { localMatrix: m2 } : void 0, vertexSpace: e2, spatialReference: l }, u2);
    if (!t) throw new Error("Failed to project");
    y2 = t;
  }
  const b2 = y2.length, [w2, j2, A2] = g2;
  for (let r = 0; r < b2; r += 3) y2[r] -= w2, y2[r + 1] -= j2, y2[r + 2] -= A2;
  return { result: { projected: y2, original: f2, projectedOrigin: g2 }, transferList: [y2.buffer, f2.buffer] };
}
async function b({ normalMatrix: r, normals: t }) {
  const o = new Float32Array(t.length);
  return n2(o, t, r), T(r) && d(o, o), { result: { transformed: o, original: t }, transferList: [o.buffer, t.buffer] };
}
function w(e) {
  U(e);
}
var j;
var A;
function L(e) {
  if (!A) return;
  const r = e.modifications, t = A._malloc(8 * r.length), o = new Float64Array(A.HEAPU8.buffer, t, r.length);
  for (let n4 = 0; n4 < r.length; ++n4) o[n4] = r[n4];
  A.setModifications(e.context, t, r.length, e.isGeodetic), A._free(t);
}
function x(e, r, t) {
  const { context: o, globalTrafo: n4, mbs: s2, obbData: i3, layouts: a2, needNormals: f2, elevationOffset: c2, geometryBuffer: m2, geometryDescriptor: p2, indexToVertexProjector: y2, vertexToRenderProjector: h3, normalReferenceFrame: d3 } = r, g2 = e._malloc(m2.byteLength), b2 = 33, w2 = e._malloc(b2 * Float64Array.BYTES_PER_ELEMENT), j2 = new Uint8Array(e.HEAPU8.buffer, g2, m2.byteLength);
  j2.set(new Uint8Array(m2));
  const A2 = new Float64Array(e.HEAPU8.buffer, w2, b2);
  P(A2, [NaN, NaN, NaN], 0);
  let L2 = 3;
  P(A2, n4, L2), L2 += 16, P(A2, s2.center, L2), L2 += 3, A2[L2++] = s2.radius, i3 && P(A2, i3, L2++);
  const x2 = { isDraco: false, isLegacy: false, color: a2.some((e2) => e2.some((e3) => "color" === e3.name)), normal: f2 && a2.some((e2) => e2.some((e3) => "normalCompressed" === e3.name)), uv0: a2.some((e2) => e2.some((e3) => "uv0" === e3.name)), uvRegion: a2.some((e2) => e2.some((e3) => "uvRegion" === e3.name)), featureIndex: p2.featureIndex }, E2 = e.process(o, !!i3, g2, j2.byteLength, p2, x2, w2, c2, y2, h3, d3);
  if (e._free(w2), e._free(g2), E2.error.length > 0) throw new Error(`i3s.wasm: ${E2.error}`);
  if (E2.discarded) return null;
  const S3 = E2.componentOffsets.length > 0 ? E2.componentOffsets.slice() : null, U2 = E2.featureIds.length > 0 ? E2.featureIds.slice() : null, _2 = E2.anchorIds.length > 0 ? Array.from(E2.anchorIds) : null, v2 = E2.anchors.length > 0 ? Array.from(E2.anchors) : null, N2 = E2.interleavedVertedData.slice().buffer, F = 1 === E2.indicesType ? new Uint16Array(E2.indices.buffer, E2.indices.byteOffset, E2.indices.byteLength / 2).slice() : new Uint32Array(E2.indices.buffer, E2.indices.byteOffset, E2.indices.byteLength / 4).slice(), I = E2.positions.slice(), { buffer: M, byteOffset: O, byteLength: B } = E2.positionIndices, R = 1 === E2.positionIndicesType ? new Uint16Array(M, O, B / 2).slice() : new Uint32Array(M, O, B / 4).slice(), T2 = new h(r.layouts[0], N2, F, E2.hasColors, E2.hasModifications, { data: I, indices: R });
  return U2 && t.push(U2.buffer), S3 && t.push(S3.buffer), t.push(N2), t.push(F.buffer), t.push(I.buffer), t.push(R.buffer), new a(S3, U2, _2, v2, T2, n4, E2.obb);
}
function E(e) {
  return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3;
}
function S2(e) {
  if (!A) return;
  const { context: r, buffer: t } = e, o = A._malloc(t.byteLength), n4 = t.byteLength / Float64Array.BYTES_PER_ELEMENT, s2 = new Float64Array(A.HEAPU8.buffer, o, n4), i3 = new Float64Array(t);
  s2.set(i3), A.filterOBBs(r, o, n4), i3.set(s2), A._free(o);
}
function U(e) {
  0 === A?.destroy(e) && (A = null, j = null, i2());
}
function P(e, r, t) {
  for (let o = 0; o < r.length; ++o) e[o + t] = r[o];
}
async function _() {
  A || await v();
}
async function v() {
  return A || (A = await (j ??= s())), A;
}
var N = { transform: (e, r) => A && x(A, e, r), destroy: U };
export {
  w as destroyContext,
  p as dracoDecompressPointCloudData,
  y as filterObbsForModifications,
  S2 as filterObbsForModificationsSync,
  _ as initialize,
  E as interpretObbModificationResults,
  m as process,
  g as project,
  d2 as setLegacySchema,
  h2 as setModifications,
  L as setModificationsSync,
  N as test,
  b as transformNormals
};
//# sourceMappingURL=SceneLayerWorker-HPI4JEWO.js.map
