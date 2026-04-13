import {
  u
} from "./chunk-DGKXKWQB.js";
import {
  a,
  c,
  d,
  f,
  g,
  n
} from "./chunk-AKWOWBXO.js";
import "./chunk-NZ4VA6UU.js";
import "./chunk-NV3NZKNW.js";
import "./chunk-ALTGJATZ.js";
import "./chunk-NQFL7IHW.js";
import "./chunk-4QDZOIQK.js";
import "./chunk-FWMUKVLY.js";
import "./chunk-LOSFMTMN.js";
import "./chunk-G7LDH7VD.js";
import "./chunk-7U4LQW5Y.js";
import "./chunk-B3N4XLHQ.js";
import "./chunk-7MRJRWGA.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-KWV5EQET.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js
var o = class {
  async extract(e) {
    const t = c2(e), n2 = c(t), r = [t.data.buffer];
    return { result: u2(n2, r), transferList: r };
  }
  async extractComponentsEdgeLocations(t) {
    const s = c2(t), i = f(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = d(i, p), o2 = [];
    return { result: u(a2.regular.instancesData, o2), transferList: o2 };
  }
  async extractEdgeLocations(t) {
    const s = c2(t), i = f(s.data, s.skipDeduplicate, s.indices, s.indicesLength), a2 = d(i, f2), o2 = [];
    return { result: u(a2.regular.instancesData, o2), transferList: o2 };
  }
};
function c2(e) {
  return { data: n.createView(e.dataBuffer), indices: "Uint32Array" === e.indicesType ? new Uint32Array(e.indices) : "Uint16Array" === e.indicesType ? new Uint16Array(e.indices) : "Uint8Array" === e.indicesType ? new Uint8Array(e.indices) : e.indices, indicesLength: e.indicesLength, writerSettings: e.writerSettings, skipDeduplicate: e.skipDeduplicate };
}
function u2(t, n2) {
  n2.push(t.regular.lodInfo.lengths.buffer), n2.push(t.silhouette.lodInfo.lengths.buffer);
  return { regular: { instancesData: u(t.regular.instancesData, n2), lodInfo: { lengths: t.regular.lodInfo.lengths.buffer } }, silhouette: { instancesData: u(t.silhouette.instancesData, n2), lodInfo: { lengths: t.silhouette.lodInfo.lengths.buffer } }, averageEdgeLength: t.averageEdgeLength };
}
var l = class {
  allocate(e) {
    return g.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n2) {
    e.position0.setVec(t, n2.position0), e.position1.setVec(t, n2.position1);
  }
};
var d2 = class {
  allocate(e) {
    return a.createBuffer(e);
  }
  trim(e, t) {
    return e.slice(0, t);
  }
  write(e, t, n2) {
    e.position0.setVec(t, n2.position0), e.position1.setVec(t, n2.position1), e.componentIndex.set(t, n2.componentIndex);
  }
};
var f2 = new l();
var p = new d2();
export {
  o as default
};
//# sourceMappingURL=EdgeProcessingWorker-LOEHHZ7I.js.map
