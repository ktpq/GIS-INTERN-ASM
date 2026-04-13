import {
  o as o2
} from "./chunk-PMIICJPH.js";
import {
  a as a4
} from "./chunk-FVUWM462.js";
import "./chunk-EWB3NJAR.js";
import "./chunk-5R5DKW26.js";
import "./chunk-G6Z7GZKS.js";
import "./chunk-AOH3KBTD.js";
import "./chunk-K3AAWICR.js";
import "./chunk-HIVNEJHE.js";
import {
  c as c5,
  p
} from "./chunk-6EWCUMLH.js";
import "./chunk-OZ4UTONJ.js";
import "./chunk-MWXSARGP.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-JU72IZ4F.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-ZRQNE4ME.js";
import "./chunk-M5IWHRCT.js";
import {
  o
} from "./chunk-SPY6G63G.js";
import "./chunk-G4CWCLTJ.js";
import "./chunk-52KYWONX.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-2TISYHLG.js";
import "./chunk-KEB6LZZ5.js";
import "./chunk-UMSS7GXZ.js";
import {
  t
} from "./chunk-DGKXKWQB.js";
import {
  c as c4
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
import "./chunk-OANXGOUH.js";
import "./chunk-2V4Q54HN.js";
import {
  h
} from "./chunk-GHG4ULKJ.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-JSUZNUEF.js";
import "./chunk-N7DF7CMI.js";
import "./chunk-2UK7CYH6.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-XSQPGBLC.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
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
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a2,
  c as c3
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import {
  a as a3,
  c as c2,
  e2 as e,
  l2 as l,
  s
} from "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import {
  N,
  a2 as a,
  c2 as c,
  m
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js
var a5 = class extends o {
  constructor(e2) {
    super("EdgeProcessingWorker", "extract", { extract: (e3) => [e3.dataBuffer], extractComponentsEdgeLocations: (e3) => [e3.dataBuffer], extractEdgeLocations: (e3) => [e3.dataBuffer] }, e2);
  }
  async process(e2, t2, r) {
    if (r) return c4(e2);
    return o3(await this.invoke(new c6(e2), t2));
  }
  async extractEdgeLocations(e2, t2) {
    const r = await this.invokeMethod("extractEdgeLocations", new c6(e2), t2);
    return t(r);
  }
  async extractComponentsEdgeLocations(e2, t2) {
    const r = await this.invokeMethod("extractComponentsEdgeLocations", new c6(e2), t2);
    return t(r);
  }
};
function o3(e2) {
  return { regular: { instancesData: t(e2.regular.instancesData), lodInfo: { lengths: new Float32Array(e2.regular.lodInfo.lengths) } }, silhouette: { instancesData: t(e2.silhouette.instancesData), lodInfo: { lengths: new Float32Array(e2.silhouette.lodInfo.lengths) } }, averageEdgeLength: e2.averageEdgeLength };
}
var c6 = class {
  constructor(n3) {
    this.dataBuffer = n3.data.buffer, this.writerSettings = n3.writerSettings, this.skipDeduplicate = n3.skipDeduplicate, this.indices = m(n3.indices) ? n3.indices.buffer : n3.indices, this.indicesType = m(n3.indices) ? a(n3.indices) ? "Uint32Array" : c(n3.indices) ? "Uint16Array" : "Uint8Array" : "Array", this.indicesLength = n3.indicesLength;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js
var l2 = class extends b {
  constructor(e2) {
    super(e2), this.availability = 0, this._ids = /* @__PURE__ */ new Set();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new p2(this.schedule, { fetchAllEdgeLocations: (e2, t2) => this._fetchAllEdgeLocations(e2, t2) });
  }
  async fetchCandidates(e2, t2) {
    const r = e2.coordinateHelper, { point: o4 } = e2, i = n();
    if (!this.renderCoordsHelper.toRenderCoords(o4, r.spatialReference, i)) return [];
    const s2 = e2.distance, d = "number" == typeof s2 ? s2 : s2.distance, a6 = await this._workerHandle.invoke({ mbsJSON: { center: i, radius: d }, returnEdge: e2.returnEdge, returnVertex: "none" !== e2.vertexMode }, t2);
    return a6.candidates.sort((e3, t3) => e3.distance - t3.distance), a6.candidates.map((e3) => this._convertCandidate(r, e3));
  }
  async add(e2, t2) {
    this._ids.add(e2.id), await this._workerHandle.invokeMethod("add", e2, t2);
  }
  async remove(e2, t2) {
    this._ids.delete(e2.id), await this._workerHandle.invokeMethod("remove", e2, t2);
  }
  _convertCandidate(e2, t2) {
    switch (t2.type) {
      case "edge":
        return new a4({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), edgeStart: this._convertRenderCoordinate(e2, t2.start), edgeEnd: this._convertRenderCoordinate(e2, t2.end), isDraped: false });
      case "vertex":
        return new o2({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), isDraped: false });
    }
  }
  _convertRenderCoordinate({ spatialReference: e2 }, t2) {
    const r = n();
    return this.renderCoordsHelper.fromRenderCoords(t2, r, e2), c5(r);
  }
  async _fetchAllEdgeLocations(e2, t2) {
    const r = [], o4 = [];
    for (const { id: n3, uid: i } of e2.components) this._ids.has(n3) && r.push((async () => {
      const e3 = await this.fetchEdgeLocations(n3, t2.signal), r2 = e3.locations.buffer;
      return o4.push(r2), { id: n3, uid: i, objectIds: e3.objectIds, locations: r2, origin: e3.origin, type: e3.type };
    })());
    return { result: { components: (await Promise.all(r)).filter(({ id: e3 }) => this._ids.has(e3)) }, transferList: o4 };
  }
};
__decorate([a2({ constructOnly: true })], l2.prototype, "renderCoordsHelper", void 0), __decorate([a2({ constructOnly: true })], l2.prototype, "fetchEdgeLocations", void 0), __decorate([a2({ constructOnly: true })], l2.prototype, "schedule", void 0), __decorate([a2({ readOnly: true })], l2.prototype, "availability", void 0), l2 = __decorate([c3("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")], l2);
var p2 = class extends o {
  constructor(e2, t2) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js
var p3 = class extends b {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._updatingHandles = new h(), this._abortController = new AbortController();
  }
  destroy() {
    this._tracker = l(this._tracker), this._abortController = e(this._abortController), this._updatingHandles.destroy();
  }
  initialize() {
    const { view: e2 } = this, r = e2.resourceController;
    this._edgeWorker = new a5(h2(r)), this._workerHandle = new l2({ renderCoordsHelper: this.view.renderCoordsHelper, schedule: h2(r), fetchEdgeLocations: async (e3, r2) => {
      if (null == this._tracker) throw new Error("tracker-not-initialized");
      return this._tracker.fetchEdgeLocations(e3, this._edgeWorker, r2);
    } }), this._updatingHandles.addPromise(this._setupLayerView()), this.addHandles([c2(this._workerHandle), c2(this._edgeWorker)]);
  }
  async fetchCandidates(e2, r) {
    return this._workerHandle.fetchCandidates(e2, r);
  }
  refresh() {
  }
  async _setupLayerView() {
    if (this.destroyed) return;
    const e2 = this._abortController?.signal, r = await this.getLayerView();
    null == r || a3(e2) || (this._tracker = r.trackSnappingSources({ add: (r2, t2) => {
      this._updatingHandles.addPromise(this._workerHandle.add({ id: r2, bounds: t2.toJSON() }, e2));
    }, remove: (r2) => {
      this._updatingHandles.addPromise(this._workerHandle.remove({ id: r2 }, e2));
    } }));
  }
};
function h2(e2) {
  return (r) => e2.immediate.schedule(r);
}
__decorate([a2({ constructOnly: true })], p3.prototype, "getLayerView", void 0), __decorate([a2({ constructOnly: true })], p3.prototype, "view", void 0), __decorate([a2({ readOnly: true })], p3.prototype, "updating", null), __decorate([a2({ readOnly: true })], p3.prototype, "availability", void 0), p3 = __decorate([c3("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p3);

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js
var n2 = class extends b {
  get updating() {
    return this._i3sSources.some((e2) => e2.updating);
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._i3sSources = [];
  }
  destroy() {
    this._i3sSources.forEach((e2) => e2.destroy()), this._i3sSources.length = 0;
  }
  initialize() {
    const { view: e2 } = this, r = this.layerSource.layer;
    this._i3sSources = "building-scene" === r.type ? this._getBuildingSceneI3SSources(e2, r) : [this._getSceneLayerI3SSource(e2, r)];
  }
  async fetchCandidates(e2, r) {
    const t2 = await Promise.all(this._i3sSources.map((t3) => t3.fetchCandidates(e2, r)));
    return s(r), t2.flat();
  }
  refresh() {
    this._i3sSources.forEach((e2) => e2.refresh());
  }
  _getBuildingSceneI3SSources(e2, r) {
    return r.allSublayers.toArray().map((t2) => "building-component" === t2.type ? new p3({ getLayerView: async () => (await e2.whenLayerView(r)).whenSublayerView(t2), view: e2 }) : null).filter(N);
  }
  _getSceneLayerI3SSource(e2, r) {
    return new p3({ getLayerView: async () => {
      const t2 = await e2.whenLayerView(r);
      return "scene-layer-graphics-3d" === t2.type ? void 0 : t2;
    }, view: e2 });
  }
};
__decorate([a2({ constructOnly: true })], n2.prototype, "layerSource", void 0), __decorate([a2({ constructOnly: true })], n2.prototype, "view", void 0), __decorate([a2({ readOnly: true })], n2.prototype, "updating", null), __decorate([a2({ readOnly: true })], n2.prototype, "availability", void 0), n2 = __decorate([c3("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], n2);
export {
  n2 as SceneLayerSnappingSource
};
//# sourceMappingURL=SceneLayerSnappingSource-NBPVV4PP.js.map
