import {
  d,
  s
} from "./chunk-NNSNFNJR.js";
import {
  h,
  l
} from "./chunk-7WUX5YIS.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-SVWIACQP.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=FlowWorker-W2NXCKPG.js.map
