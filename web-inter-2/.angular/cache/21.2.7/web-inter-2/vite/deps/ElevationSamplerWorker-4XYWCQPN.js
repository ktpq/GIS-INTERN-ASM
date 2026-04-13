import {
  q
} from "./chunk-FN2DGEWI.js";
import "./chunk-GSWONWCV.js";
import "./chunk-53OZ2LR7.js";
import {
  c
} from "./chunk-FSUIID2U.js";
import "./chunk-NZKVNPZ3.js";
import "./chunk-VLXEOEMU.js";
import "./chunk-5QBZBLPU.js";
import {
  s
} from "./chunk-JA2JMXB7.js";
import "./chunk-GDMLFOX7.js";
import "./chunk-OKL2JLQU.js";
import "./chunk-CV6DGA6Y.js";
import "./chunk-JNQAAWDS.js";
import "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-MYLK6AZ6.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
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
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
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
  has
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=ElevationSamplerWorker-4XYWCQPN.js.map
