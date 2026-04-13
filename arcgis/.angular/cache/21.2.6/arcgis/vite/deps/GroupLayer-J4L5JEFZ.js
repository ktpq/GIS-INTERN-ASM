import {
  e as e2
} from "./chunk-6VQYM3D7.js";
import {
  C
} from "./chunk-3YZE2GOA.js";
import "./chunk-V5324B6V.js";
import {
  a as a3
} from "./chunk-2P5V547O.js";
import {
  s
} from "./chunk-THHD4X2W.js";
import "./chunk-UT2LSNSL.js";
import "./chunk-JZKXFFUU.js";
import "./chunk-R6ZHN7WQ.js";
import "./chunk-GHPELFQE.js";
import {
  d,
  n2 as n3,
  t
} from "./chunk-2PAXWVF4.js";
import {
  w as w2
} from "./chunk-VV43WA2Z.js";
import "./chunk-4POYBJCS.js";
import {
  l as l2
} from "./chunk-GIFJQDMK.js";
import {
  l as l4
} from "./chunk-2DTYOH22.js";
import {
  p
} from "./chunk-V4FCUJHW.js";
import {
  l as l3
} from "./chunk-6A5V3JU3.js";
import {
  g
} from "./chunk-SXJ6VOTR.js";
import "./chunk-TFKEOGZ6.js";
import "./chunk-W3KPPCSW.js";
import {
  _
} from "./chunk-MCN6PQSA.js";
import {
  e
} from "./chunk-6I4LGQ74.js";
import "./chunk-IQ4Y4GKS.js";
import "./chunk-AHPCQT3Y.js";
import "./chunk-PDKX3TBX.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import {
  k
} from "./chunk-JAXZMTZX.js";
import "./chunk-QIZKSHGT.js";
import "./chunk-TO4LSEU2.js";
import "./chunk-FCVEMPGG.js";
import "./chunk-QEE2QYIE.js";
import "./chunk-2RVDN6RH.js";
import "./chunk-S4XOMMCM.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-XK2FSQWW.js";
import "./chunk-AIECNX6R.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-S3BACLSK.js";
import "./chunk-T6F4SXOT.js";
import {
  b
} from "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-BMYA7NZP.js";
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
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c,
  o3 as o,
  r4 as r
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  U,
  a,
  l,
  w
} from "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import {
  n as n2
} from "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  L,
  f2 as f
} from "./chunk-POW25PFR.js";
import {
  n2 as n
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var V = class extends p(l3(g(_(n3(d(e(b))))))) {
  constructor(e3) {
    super(e3), this._allLayers = new l4({ getCollections: () => [this.layers], getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (e4, t2, i) => {
      const { save: r2, saveAs: s2 } = await import("./groupLayerUtils-KLQHAJ5S.js");
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
      this.removeHandles(t2), e3 && (this.tables.removeAll(), this.addHandles(a(() => this.tables, "before-add", (e4) => {
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
__decorate([a2({ readOnly: true })], V.prototype, "allLayers", null), __decorate([a2({ readOnly: true })], V.prototype, "allTables", void 0), __decorate([a2({ json: { read: true, write: true } })], V.prototype, "blendMode", void 0), __decorate([a2()], V.prototype, "fullExtent", void 0), __decorate([a2({ readOnly: true })], V.prototype, "sourceIsPortalItem", null), __decorate([a2({ json: { read: false, write: { ignoreOrigin: true } } })], V.prototype, "layers", void 0), __decorate([r("layers")], V.prototype, "_writeLayers", null), __decorate([a2({ type: ["GroupLayer"] })], V.prototype, "operationalLayerType", void 0), __decorate([a2({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e3, t2, i) {
  return { enabled: "Group Layer" === e3?.type && i?.initiator !== this };
} } }, "web-scene": { read: false, write: false } } } })], V.prototype, "portalItem", null), __decorate([o("web-map", "portalItem", ["itemId"])], V.prototype, "readPortalItem", null), __decorate([r("web-map", "portalItem", { itemId: { type: String } })], V.prototype, "writePortalItem", null), __decorate([a2({ type: S })], V.prototype, "spatialReference", void 0), __decorate([a2({ json: { read: false }, readOnly: true, value: "group" })], V.prototype, "type", void 0), __decorate([a2({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e3, t2, i) => {
  "inherited" !== e3 && (t2[i] = e3);
} } } } })], V.prototype, "visibilityMode", null), V = __decorate([c("esri.layers.GroupLayer")], V);
var T = V;
export {
  T as default
};
//# sourceMappingURL=GroupLayer-J4L5JEFZ.js.map
