import {
  d,
  s
} from "./chunk-C4QCLG62.js";
import {
  h,
  l
} from "./chunk-T7J5OLWV.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  c
} from "./chunk-XCGM4D6U.js";
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
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/support/flow/FlowWorker.js
var o = class {
  constructor() {
    this._tileData = /* @__PURE__ */ new Map();
  }
  async generateStreamlines(t) {
    const { flowData: e, flowExtentInfo: s2, needsMagnitude: a, simulationSettings: r, startPositions: o2 } = t, n2 = l2(h(r, e), r, s2.modelSize, a, o2);
    return { result: { streamlines: n2 }, transferList: n2?.map((t2) => t2.vertices.buffer) };
  }
  async generateTiledStreamlines(t) {
    const { flowDataTiles: e, flowExtentInfo: a, needsMagnitude: i, reset: r, simulationSettings: o2, startPositions: n2 } = t;
    this._updateTileData(e, r);
    const f = l2(d(o2, this._tileData, a), o2, a.modelSize, i, n2);
    return { result: { streamlines: f }, transferList: f?.map((t2) => t2.vertices.buffer) ?? [] };
  }
  _updateTileData(t, e) {
    if (e) for (const s2 of this._tileData.keys()) t.has(s2) || this._tileData.delete(s2);
    t.forEach((t2, e2) => {
      "delete" === t2.type ? this._tileData.delete(e2) : "on-worker" !== t2.type && "invalid" !== t2.type && this._tileData.set(e2, t2.data);
    });
  }
};
o = __decorate([c("esri.views.3d.support.flow.FlowWorker")], o);
var n = o;
function l2(t, e, s2, i, o2) {
  if (null == t) return;
  const n2 = l(e, t, s2[0], s2[1], { positions: o2 }), l3 = [], f = s(i);
  for (const { vertices: a, stage: r } of n2) {
    const t2 = new Float32Array(a.length * f);
    for (let e2 = 0; e2 < a.length; e2++) t2[e2 * f] = a[e2].x, t2[e2 * f + 1] = a[e2].y, t2[e2 * f + 2] = a[e2].time, i && (t2[e2 * f + 3] = a[e2].speed);
    l3.push({ vertices: t2, stage: r, hasMagnitude: i });
  }
  return l3;
}
export {
  n as default
};
//# sourceMappingURL=FlowWorker-R5C6JHCU.js.map
