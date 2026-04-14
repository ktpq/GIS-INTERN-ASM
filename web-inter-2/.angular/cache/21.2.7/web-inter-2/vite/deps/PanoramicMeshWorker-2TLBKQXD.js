import {
  c2 as c
} from "./chunk-TCLIDMQ5.js";
import {
  s
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

// node_modules/@arcgis/core/widgets/PanoramicViewer/support/PanoramicMeshWorker.js
function e({ distance: r, yaw: e2, horizontalFieldOfView: n2, pitch: o2, verticalFieldOfView: i, origin: s2 = [0, 0, 0], positionLength: a = 25 }) {
  const f = a - 1, l = a * a, c2 = new Float32Array(2 * l), u = new Float64Array(3 * l), h = new Float32Array(3 * l).fill(0), p = new Uint32Array(f ** 2 * 6);
  for (let w = 0, m = 0; w < l; w++) {
    const l2 = Math.floor(w / a), g = w % a, y = 1 - g / f, A = l2 / f, b = 2 * w, d = 3 * w;
    c2[b] = y, c2[b + 1] = A;
    const F = o2 + i / 2 - A * i, M = s(e2 - n2 / 2 + y * n2), L = s(F), D = Math.sin(L), O = Math.cos(L), j = [D * Math.sin(M), Math.cos(M) * D, -O];
    u[d] = s2[0] + r * j[0], u[d + 1] = s2[1] + r * j[1], u[d + 2] = s2[2] + r * j[2], h[d] = -j[0], h[d + 1] = -j[1], h[d + 2] = -j[2], l2 !== f && g !== f && (p[m++] = w, p[m++] = w + a, p[m++] = w + a + 1, p[m++] = w, p[m++] = w + a + 1, p[m++] = w + 1);
  }
  return { result: { position: u, uv: c2, normal: h, faces: p }, transferList: [u.buffer, c2.buffer, h.buffer, p?.buffer] };
}
function n(t) {
  const e2 = c.fromJSON(t);
  e2.premultiplyAlpha = true;
  const n2 = e2.getAsRGBA(), o2 = e2.width, i = e2.height, s2 = new ImageData(n2, o2, i);
  return { result: s2, transferList: [s2.data.buffer] };
}
function o({ oldDistance: t, newDistance: r, position: e2, origin: n2 = [0, 0, 0] }) {
  const o2 = e2.length / 3;
  for (let i = 0; i < o2; i += 3) {
    const o3 = 3 * i;
    e2[o3] = n2[0] + (e2[o3] - n2[0]) * (r / t), e2[o3 + 1] = n2[1] + (e2[o3 + 1] - n2[1]) * (r / t), e2[o3 + 2] = n2[2] + (e2[o3 + 2] - n2[2]) * (r / t);
  }
  return { result: e2, transferList: [e2.buffer] };
}
export {
  n as convertPixelBlockToImageData,
  e as getFacesWithVertexAttributes,
  o as recomputePositions
};
//# sourceMappingURL=PanoramicMeshWorker-2TLBKQXD.js.map
