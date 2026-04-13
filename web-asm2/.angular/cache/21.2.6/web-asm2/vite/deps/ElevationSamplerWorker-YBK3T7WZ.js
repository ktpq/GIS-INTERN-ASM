import {
  q
} from "./chunk-UH6VD2JG.js";
import "./chunk-Q6DYSTEJ.js";
import "./chunk-LDPJG6VN.js";
import {
  c
} from "./chunk-M3LOK5P4.js";
import "./chunk-MDYX2LWI.js";
import "./chunk-DHN4IH5D.js";
import "./chunk-3EN5CV4O.js";
import {
  s
} from "./chunk-FP5JHMI2.js";
import "./chunk-B3N4XLHQ.js";
import "./chunk-7MRJRWGA.js";
import "./chunk-3XHSBUJ5.js";
import "./chunk-CENX2LFJ.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
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
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
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
  has
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js
var n = class {
  async createIndex(t, r) {
    const n2 = new Array();
    if (!t.vertexAttributes?.position) return new s();
    const o2 = a(t), s3 = null != r ? await r.invoke("createIndexThread", o2, { transferList: n2 }) : this.createIndexThread(o2).result;
    return i().fromJSON(s3);
  }
  createIndexThread(e) {
    const t = i();
    if (!e) return { result: t.toJSON() };
    const r = new Float64Array(e.position);
    return e.components ? s2(t, r, e.components.map((e2) => new Uint32Array(e2))) : o(t, r);
  }
};
function o(e, t) {
  const r = new Array(t.length / 9);
  let n2 = 0;
  for (let o2 = 0; o2 < t.length; o2 += 9) r[n2++] = c2(t, o2, o2 + 3, o2 + 6);
  return e.load(r), { result: e.toJSON() };
}
function s2(e, t, r) {
  let n2 = 0;
  for (const a2 of r) n2 += a2.length / 3;
  const o2 = new Array(n2);
  let s3 = 0;
  for (const a2 of r) for (let e2 = 0; e2 < a2.length; e2 += 3) o2[s3++] = c2(t, 3 * a2[e2], 3 * a2[e2 + 1], 3 * a2[e2 + 2]);
  return e.load(o2), { result: e.toJSON() };
}
function a(e) {
  const { vertexAttributes: { position: n2 }, vertexSpace: o2, spatialReference: s3, transform: a2 } = e, i2 = q({ vertexAttributes: { position: n2 }, vertexSpace: o2, spatialReference: s3, transform: a2 }, c.absolute, { allowBufferReuse: true })?.position;
  return i2 ? !e.components || e.components.some((e2) => !e2.faces) ? { position: i2.buffer } : { position: i2.buffer, components: e.components.map((e2) => e2.faces) } : null;
}
function i() {
  return new s(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
}
function c2(e, t, r, n2) {
  return { minX: Math.min(e[t], e[r], e[n2]), maxX: Math.max(e[t], e[r], e[n2]), minY: Math.min(e[t + 1], e[r + 1], e[n2 + 1]), maxY: Math.max(e[t + 1], e[r + 1], e[n2 + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r], e[r + 1], e[r + 2]], p2: [e[n2], e[n2 + 1], e[n2 + 2]] };
}
export {
  n as default
};
//# sourceMappingURL=ElevationSamplerWorker-YBK3T7WZ.js.map
