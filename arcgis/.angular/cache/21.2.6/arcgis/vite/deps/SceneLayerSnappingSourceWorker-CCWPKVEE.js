import {
  l
} from "./chunk-VWHPHPUA.js";
import "./chunk-RNHOJFMM.js";
import {
  M,
  h,
  v
} from "./chunk-J6S2XDA4.js";
import {
  w
} from "./chunk-2M5GBFWO.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-7F556GNA.js";
import "./chunk-M5IWHRCT.js";
import "./chunk-6NPKRFWB.js";
import "./chunk-FZCTYYND.js";
import "./chunk-KEB6LZZ5.js";
import "./chunk-C6P3JIAK.js";
import {
  a
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
import "./chunk-AFCXMSTT.js";
import "./chunk-ULRT2MRD.js";
import {
  c as c2,
  g,
  p,
  x
} from "./chunk-YM62CGUL.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import {
  n,
  t
} from "./chunk-MLBRAI7B.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-ZILR7JK7.js";
import {
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  e2 as e
} from "./chunk-XUZBRFKA.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import {
  s
} from "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js
var o = 1e3;
function s2(o2, s4, m) {
  const i = new w();
  return x(i.center, o2, 0.5), g(i.center, i.center, s4, 0.5), i.radius = p(i.center, o2), c2(i.center, i.center, m), i;
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SnappingCandidate.js
var t2 = class {
  constructor(t3, s4, e3) {
    this.objectId = t3, this.target = s4, this.distance = e3;
  }
};
var s3 = class extends t2 {
  constructor(t3, s4, e3) {
    super(t3, s4, e3), this.type = "vertex";
  }
};
var e2 = class extends t2 {
  constructor(t3, s4, e3, r, c3) {
    super(t3, s4, e3), this.start = r, this.end = c3, this.type = "edge";
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js
var b = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new l((e3) => e3.bounds), this._edges = new l((e3) => e3.bounds), this._tmpLineSegment = v(), this._tmpP1 = n(), this._tmpP2 = n(), this._tmpP3 = n(), this.remoteClient = null;
  }
  async fetchCandidates(e3, o2) {
    await Promise.resolve(), s(o2);
    const s4 = e3;
    s4.mbs = new w(e3.mbsJSON), await this._ensureEdgeLocations(s4, o2);
    const n2 = [];
    return this._edges.forEachNeighbor((e4) => (this._addCandidates(s4, e4, n2), n2.length < o), s4.mbs), { result: { candidates: n2 } };
  }
  async _ensureEdgeLocations(e3, t3) {
    const o2 = [];
    if (this._components.forEachNeighbor((e4) => {
      if (null == e4.info) {
        const { id: t4, uid: s5 } = e4;
        o2.push({ id: t4, uid: s5 });
      }
      return true;
    }, e3.mbs), !o2.length) return;
    const s4 = { components: o2 }, n2 = await this.remoteClient.invoke("fetchAllEdgeLocations", s4, t3 ?? {});
    for (const i of n2.components) this._setFetchEdgeLocations(i);
  }
  async add(e3) {
    const t3 = new C(e3.id, new w(e3.bounds));
    return this._idToComponent.set(t3.id, t3), this._components.add([t3]), { result: {} };
  }
  async remove(e3) {
    const t3 = this._idToComponent.get(e3.id);
    if (t3) {
      const e4 = [];
      this._edges.forEachNeighbor((o2) => (o2.component === t3 && e4.push(o2), true), t3.bounds), this._edges.remove(e4), this._components.remove([t3]), this._idToComponent.delete(t3.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e3) {
    const t3 = this._idToComponent.get(e3.id);
    if (null == t3 || e3.uid !== t3.uid) return;
    const o2 = a.createView(e3.locations), s4 = new Array(o2.count), n2 = n(), i = n();
    for (let r = 0; r < o2.count; r++) {
      o2.position0.getVec(r, n2), o2.position1.getVec(r, i);
      const c4 = s2(n2, i, e3.origin), d2 = new S(t3, r, c4);
      s4[r] = d2;
    }
    this._edges.add(s4);
    const { objectIds: c3, origin: d } = e3;
    t3.info = { locations: o2, objectIds: c3, origin: d };
  }
  _addCandidates(e3, t3, o2) {
    const { info: s4 } = t3.component, { origin: i, objectIds: r } = s4, c3 = s4.locations, d = c3.position0.getVec(t3.index, this._tmpP1), m = c3.position1.getVec(t3.index, this._tmpP2);
    c2(d, d, i), c2(m, m, i);
    const a2 = r[c3.componentIndex.get(t3.index)];
    this._addEdgeCandidate(e3, a2, d, m, o2), j(e3, a2, d, o2), j(e3, a2, m, o2);
  }
  _addEdgeCandidate(e3, t3, o2, s4, n2) {
    if (!e3.returnEdge) return;
    const r = e3.mbs.center, d = h(o2, s4, this._tmpLineSegment), p2 = M(d, r, this._tmpP3);
    e3.mbs.contains(p2) && n2.push(new e2(t3, t(p2), p(r, p2), t(o2), t(s4)));
  }
};
b = __decorate([c("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], b);
var w2 = b;
function j(e3, t3, o2, s4) {
  e3.returnVertex && e3.mbs.contains(o2) && s4.push(new s3(t3, t(o2), p(e3.mbs.center, o2)));
}
var C = class {
  constructor(e3, t3) {
    this.id = e3, this.bounds = t3, this.info = null, this.uid = e();
  }
};
var S = class {
  constructor(e3, t3, o2) {
    this.component = e3, this.index = t3, this.bounds = o2;
  }
};
export {
  w2 as default
};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-CCWPKVEE.js.map
