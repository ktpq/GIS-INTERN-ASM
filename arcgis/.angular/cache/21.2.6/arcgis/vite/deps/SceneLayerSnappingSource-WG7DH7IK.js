import {
  o as o2
} from "./chunk-CMIKMRJF.js";
import {
  a as a4
} from "./chunk-2H6CSSHD.js";
import "./chunk-EWB3NJAR.js";
import "./chunk-Q2X7B3G7.js";
import "./chunk-G6Z7GZKS.js";
import "./chunk-AOH3KBTD.js";
import "./chunk-K3AAWICR.js";
import "./chunk-HIVNEJHE.js";
import {
  c as c5,
  p
} from "./chunk-FQA45FSP.js";
import "./chunk-6ZXIHJYY.js";
import "./chunk-2M5GBFWO.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-7F556GNA.js";
import "./chunk-M5IWHRCT.js";
import {
  o
} from "./chunk-AVRDYMQL.js";
import "./chunk-2TISYHLG.js";
import "./chunk-6NPKRFWB.js";
import "./chunk-FZCTYYND.js";
import "./chunk-KEB6LZZ5.js";
import "./chunk-C6P3JIAK.js";
import "./chunk-A4P3ERHS.js";
import {
  t
} from "./chunk-5AUZAVKL.js";
import {
  c as c4
} from "./chunk-HVAH5EWA.js";
import "./chunk-NZ4VA6UU.js";
import "./chunk-NV3NZKNW.js";
import "./chunk-NQFL7IHW.js";
import "./chunk-GM4J4SMK.js";
import "./chunk-G7LDH7VD.js";
import "./chunk-7U4LQW5Y.js";
import "./chunk-ALTGJATZ.js";
import "./chunk-FWMUKVLY.js";
import "./chunk-LOSFMTMN.js";
import "./chunk-B3N4XLHQ.js";
import "./chunk-7MRJRWGA.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-F4H4QHCY.js";
import "./chunk-YHHRJ56I.js";
import "./chunk-OQNSFBL3.js";
import {
  h
} from "./chunk-BEEP3FKE.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-YM62CGUL.js";
import "./chunk-RCUTEESF.js";
import "./chunk-AHPCQT3Y.js";
import "./chunk-QEE2QYIE.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-DESITEXU.js";
import "./chunk-D7RUZBWM.js";
import "./chunk-OFY6GFSK.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
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
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3,
  c as c3
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  a as a2,
  c as c2,
  e2 as e,
  l2 as l,
  s
} from "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
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
__decorate([a3({ constructOnly: true })], l2.prototype, "renderCoordsHelper", void 0), __decorate([a3({ constructOnly: true })], l2.prototype, "fetchEdgeLocations", void 0), __decorate([a3({ constructOnly: true })], l2.prototype, "schedule", void 0), __decorate([a3({ readOnly: true })], l2.prototype, "availability", void 0), l2 = __decorate([c3("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")], l2);
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
    null == r || a2(e2) || (this._tracker = r.trackSnappingSources({ add: (r2, t2) => {
      this._updatingHandles.addPromise(this._workerHandle.add({ id: r2, bounds: t2.toJSON() }, e2));
    }, remove: (r2) => {
      this._updatingHandles.addPromise(this._workerHandle.remove({ id: r2 }, e2));
    } }));
  }
};
function h2(e2) {
  return (r) => e2.immediate.schedule(r);
}
__decorate([a3({ constructOnly: true })], p3.prototype, "getLayerView", void 0), __decorate([a3({ constructOnly: true })], p3.prototype, "view", void 0), __decorate([a3({ readOnly: true })], p3.prototype, "updating", null), __decorate([a3({ readOnly: true })], p3.prototype, "availability", void 0), p3 = __decorate([c3("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p3);

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
__decorate([a3({ constructOnly: true })], n2.prototype, "layerSource", void 0), __decorate([a3({ constructOnly: true })], n2.prototype, "view", void 0), __decorate([a3({ readOnly: true })], n2.prototype, "updating", null), __decorate([a3({ readOnly: true })], n2.prototype, "availability", void 0), n2 = __decorate([c3("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], n2);
export {
  n2 as SceneLayerSnappingSource
};
//# sourceMappingURL=SceneLayerSnappingSource-WG7DH7IK.js.map
