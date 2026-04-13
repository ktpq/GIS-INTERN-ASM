import {
  e as e2
} from "./chunk-6VQYM3D7.js";
import {
  C
} from "./chunk-D3QUHIAT.js";
import "./chunk-4NHNZEMY.js";
import {
  a as a3
} from "./chunk-MSBLYCTJ.js";
import {
  s
} from "./chunk-VJAFIHLD.js";
import "./chunk-EHGPAPWW.js";
import "./chunk-2OF4GYBZ.js";
import "./chunk-NC2Y6MYH.js";
import "./chunk-P3DZKXTE.js";
import {
  d,
  n2 as n3,
  t
} from "./chunk-YKTWMXBU.js";
import {
  w as w2
} from "./chunk-RLDU2HIW.js";
import "./chunk-GGRH56KM.js";
import {
  l as l2
} from "./chunk-T56BSLVZ.js";
import {
  l as l4
} from "./chunk-3DBHRTTW.js";
import {
  _
} from "./chunk-XQWWS2MW.js";
import "./chunk-N2GOMHYA.js";
import "./chunk-6Q36DUGX.js";
import "./chunk-OCXIU36X.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import {
  k
} from "./chunk-IDQ6F3RQ.js";
import {
  p
} from "./chunk-ESHFEOYZ.js";
import {
  l as l3
} from "./chunk-5W2KFO6C.js";
import "./chunk-WFD24ML4.js";
import "./chunk-WYBA72UW.js";
import {
  g
} from "./chunk-SNVXOKVA.js";
import {
  e
} from "./chunk-SWNARI4F.js";
import "./chunk-DJHTC3GB.js";
import "./chunk-W3KPPCSW.js";
import {
  b
} from "./chunk-JWSXOJ4W.js";
import "./chunk-SKQFZRJZ.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-IRE2Q6SD.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-Q25A4AK6.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import {
  U,
  a as a2,
  l,
  w
} from "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
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
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import {
  n as n2
} from "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import {
  L,
  f2 as f
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var V = class extends p(l3(g(_(n3(d(e(b))))))) {
  constructor(e3) {
    super(e3), this._allLayers = new l4({ getCollections: () => [this.layers], getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (e4, t2, i) => {
      const { save: r2, saveAs: s2 } = await import("./groupLayerUtils-GWD3ULTL.js");
      switch (e4) {
        case 0:
          return r2(this, t2);
        case 1:
          return s2(this, i, t2);
      }
    });
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([l(() => {
      let e3 = this.parent;
      for (; e3 && "parent" in e3 && e3.parent; ) e3 = e3.parent;
      return e3 && e2 in e3;
    }, (e3) => {
      const t2 = "prevent-adding-tables";
      this.removeHandles(t2), e3 && (this.tables.removeAll(), this.addHandles(a2(() => this.tables, "before-add", (e4) => {
        e4.preventDefault(), n.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), t2));
    }, w), l(() => this.visible, this._onVisibilityChange.bind(this), U)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get allLayers() {
    return this._allLayers;
  }
  get sourceIsPortalItem() {
    return this.portalItem && 7 === this.originIdOf("portalItem");
  }
  _writeLayers(e3, t2, i, r2) {
    const s2 = [];
    if (!e3) return s2;
    e3.forEach((e4) => {
      const t3 = w2(e4, r2.webmap ? r2.webmap.getLayerJSONFromResourceInfo(e4) : null, r2);
      t3?.layerType && s2.push(t3);
    }), t2.layers = s2;
  }
  set portalItem(e3) {
    this._set("portalItem", e3);
  }
  readPortalItem(e3, t2, i) {
    const { itemId: r2, layerType: s2 } = t2;
    if ("GroupLayer" === s2 && r2) return new k({ id: r2, portal: i?.portal });
  }
  writePortalItem(e3, t2) {
    e3?.id && (t2.itemId = e3.id);
  }
  set visibilityMode(e3) {
    const t2 = this._get("visibilityMode") !== e3;
    this._set("visibilityMode", e3), t2 && this._enforceVisibility(e3, this.visible);
  }
  async beforeSave() {
    return s(this);
  }
  load(e3) {
    const t2 = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service", "Video Service"], layerModuleTypeMap: a3, populateGroupLayer: C }, e3).catch((e4) => {
      if (f(e4), this.sourceIsPortalItem) throw e4;
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  async loadAll() {
    return l2(this, (e3) => {
      e3(this.layers, this.tables);
    });
  }
  async save(e3) {
    return this._debouncedSaveOperations(0, e3);
  }
  async saveAs(e3, t2) {
    return this._debouncedSaveOperations(1, t2, e3);
  }
  layerAdded(e3) {
    e3.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e3) : "inherited" === this.visibilityMode && (e3.visible = this.visible), this.hasHandles(e3.uid) ? console.error(`Layer read to Grouplayer: uid=${e3.uid}`) : this.addHandles(l(() => e3.visible, (t2) => this._onChildVisibilityChange(e3, t2), U), e3.uid);
  }
  layerRemoved(e3) {
    this.removeHandles(e3.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e3) {
    this.layers.forEach((t2) => {
      t2 !== e3 && (t2.visible = false);
    });
  }
  _enforceVisibility(e3, t2) {
    if (!n2(this).initialized) return;
    const i = this.layers;
    let r2 = i.find((e4) => e4.visible);
    switch (e3) {
      case "exclusive":
        i.length && !r2 && (r2 = i.at(0), r2.visible = true), this._turnOffOtherLayers(r2);
        break;
      case "inherited":
        i.forEach((e4) => {
          e4.visible = t2;
        });
    }
  }
  _onVisibilityChange(e3) {
    "inherited" === this.visibilityMode && this.layers.forEach((t2) => {
      t2.visible = e3;
    });
  }
  _onChildVisibilityChange(e3, t2) {
    switch (this.visibilityMode) {
      case "exclusive":
        t2 ? this._turnOffOtherLayers(e3) : this._isAnyLayerVisible() || (e3.visible = true);
        break;
      case "inherited":
        e3.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e3) => e3.visible);
  }
};
__decorate([a({ readOnly: true })], V.prototype, "allLayers", null), __decorate([a({ readOnly: true })], V.prototype, "allTables", void 0), __decorate([a({ json: { read: true, write: true } })], V.prototype, "blendMode", void 0), __decorate([a()], V.prototype, "fullExtent", void 0), __decorate([a({ readOnly: true })], V.prototype, "sourceIsPortalItem", null), __decorate([a({ json: { read: false, write: { ignoreOrigin: true } } })], V.prototype, "layers", void 0), __decorate([r("layers")], V.prototype, "_writeLayers", null), __decorate([a({ type: ["GroupLayer"] })], V.prototype, "operationalLayerType", void 0), __decorate([a({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e3, t2, i) {
  return { enabled: "Group Layer" === e3?.type && i?.initiator !== this };
} } }, "web-scene": { read: false, write: false } } } })], V.prototype, "portalItem", null), __decorate([o("web-map", "portalItem", ["itemId"])], V.prototype, "readPortalItem", null), __decorate([r("web-map", "portalItem", { itemId: { type: String } })], V.prototype, "writePortalItem", null), __decorate([a({ type: S })], V.prototype, "spatialReference", void 0), __decorate([a({ json: { read: false }, readOnly: true, value: "group" })], V.prototype, "type", void 0), __decorate([a({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e3, t2, i) => {
  "inherited" !== e3 && (t2[i] = e3);
} } } } })], V.prototype, "visibilityMode", null), V = __decorate([c("esri.layers.GroupLayer")], V);
var T = V;
export {
  T as default
};
//# sourceMappingURL=GroupLayer-J7FJL4V3.js.map
