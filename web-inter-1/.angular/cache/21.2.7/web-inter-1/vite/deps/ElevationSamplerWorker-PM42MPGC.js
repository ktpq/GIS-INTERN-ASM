import {
  q
} from "./chunk-EEIMB7C6.js";
import "./chunk-PQF6AZP6.js";
import "./chunk-NZKVNPZ3.js";
import "./chunk-U53G3X2R.js";
import "./chunk-UKLHBUGA.js";
import {
  c
} from "./chunk-WRWVENVU.js";
import {
  s
} from "./chunk-AEE6QW6C.js";
import "./chunk-GDMLFOX7.js";
import "./chunk-OKL2JLQU.js";
import "./chunk-MPUSMVYE.js";
import "./chunk-QOQBWURX.js";
import "./chunk-JNQAAWDS.js";
import "./chunk-47CFN4JI.js";
import "./chunk-SGNC5H35.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
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
  has
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=ElevationSamplerWorker-PM42MPGC.js.map
