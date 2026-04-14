import {
  e as e2
} from "./chunk-E6MEHWGJ.js";
import {
  C
} from "./chunk-26OIETTP.js";
import "./chunk-IPH7QSCZ.js";
import {
  a as a3
} from "./chunk-JSLIUVPU.js";
import {
  s
} from "./chunk-H5PQOJ5Z.js";
import "./chunk-D4UZS7YU.js";
import "./chunk-MSVPPUQN.js";
import "./chunk-JZV4LTC3.js";
import "./chunk-HAQ47X6V.js";
import {
  d,
  n2 as n3,
  t
} from "./chunk-7U6BFVUB.js";
import {
  w as w2
} from "./chunk-BRS73DGN.js";
import {
  l as l2
} from "./chunk-YDKOND5U.js";
import {
  l as l4
} from "./chunk-ZGU4JJQC.js";
import "./chunk-4MLCFR6A.js";
import {
  _
} from "./chunk-BZNIQO2Y.js";
import "./chunk-OTOTHRZE.js";
import "./chunk-YK5DPRSK.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-5L27TA3I.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import {
  k
} from "./chunk-TDVHS7EW.js";
import {
  p
} from "./chunk-SP5EDG5W.js";
import {
  l as l3
} from "./chunk-LPNV4GQD.js";
import "./chunk-MX77LL4S.js";
import "./chunk-ZVRAKVBJ.js";
import {
  g
} from "./chunk-AUNLF36X.js";
import {
  e
} from "./chunk-T3TXTZDJ.js";
import "./chunk-PX67TG6P.js";
import "./chunk-IJHRPSGC.js";
import {
  b
} from "./chunk-DVV7T3XR.js";
import "./chunk-Z5NNQZAE.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-2JGVYNV6.js";
import "./chunk-OOTSAG75.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-DVLEZ3TT.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-BGBXZWYV.js";
import "./chunk-DMOCO4H5.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-HJMMRQXJ.js";
import {
  U,
  a as a2,
  l,
  w
} from "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-GALDA7CN.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-QRPQOATM.js";
import "./chunk-OIICDJNU.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import {
  n as n2
} from "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  L,
  f2 as f
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var V = class extends p(l3(g(_(n3(d(e(b))))))) {
  constructor(e3) {
    super(e3), this._allLayers = new l4({ getCollections: () => [this.layers], getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (e4, t2, i) => {
      const { save: r2, saveAs: s2 } = await import("./groupLayerUtils-Z6CGRVHG.js");
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
//# sourceMappingURL=GroupLayer-DIOOJWIM.js.map
