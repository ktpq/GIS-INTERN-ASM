import {
  t
} from "./chunk-VWE6YEAX.js";
import {
  c as c4
} from "./chunk-MFVAXLDO.js";
import "./chunk-DZB4TMG3.js";
import "./chunk-BXFSKL77.js";
import "./chunk-DDMDNRMF.js";
import "./chunk-ASBTVODU.js";
import "./chunk-NIOT37JE.js";
import "./chunk-VQOLBZYG.js";
import "./chunk-2HXGMW4Y.js";
import "./chunk-AFJPK766.js";
import "./chunk-AQGWPQ4L.js";
import "./chunk-GDMLFOX7.js";
import "./chunk-OKL2JLQU.js";
import {
  o as o2
} from "./chunk-D5AGPHYX.js";
import {
  a as a4
} from "./chunk-MNFWQFAC.js";
import "./chunk-X4R43FDP.js";
import "./chunk-NFUHF2IU.js";
import "./chunk-MC4L6QKA.js";
import "./chunk-JRYX6JST.js";
import "./chunk-4DVAYK5J.js";
import "./chunk-ESFGILEN.js";
import {
  c as c5,
  p
} from "./chunk-MY4KRETZ.js";
import "./chunk-HAPSASFY.js";
import "./chunk-YP7OFZOK.js";
import "./chunk-LDDM3CX4.js";
import "./chunk-WQBN2KKE.js";
import "./chunk-K3TG4ANK.js";
import "./chunk-AGQQQ6D2.js";
import {
  o
} from "./chunk-PTZQU6ZC.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-T6SJ457A.js";
import "./chunk-MXHLIIX3.js";
import "./chunk-ACXV2BJH.js";
import "./chunk-UFNIHRKY.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-IBCQZ6GX.js";
import "./chunk-IODIHRP7.js";
import {
  h
} from "./chunk-TXF5FFQH.js";
import "./chunk-47CFN4JI.js";
import "./chunk-SGNC5H35.js";
import "./chunk-L6ET72DF.js";
import "./chunk-64GACA3E.js";
import "./chunk-G2AJQACY.js";
import "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-X4YO53U7.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-IANKUBS7.js";
import {
  n
} from "./chunk-KEY3YQEB.js";
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
import "./chunk-253Z6EVN.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3,
  c as c3
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import {
  a as a2,
  c as c2,
  e2 as e,
  l2 as l,
  s
} from "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import {
  N,
  a2 as a,
  c2 as c,
  m
} from "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=SceneLayerSnappingSource-4YWSWR7H.js.map
