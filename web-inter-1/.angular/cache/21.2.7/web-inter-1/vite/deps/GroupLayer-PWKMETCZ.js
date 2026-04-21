import {
  e as e2
} from "./chunk-E6MEHWGJ.js";
import {
  C
} from "./chunk-YDGLV2MB.js";
import "./chunk-L6EDOPXJ.js";
import {
  a as a3
} from "./chunk-75STTQ74.js";
import {
  s
} from "./chunk-QGIGOSOK.js";
import "./chunk-7GIPCGGG.js";
import "./chunk-UPGJRQQY.js";
import "./chunk-KPVMG5ZM.js";
import "./chunk-X6CJS2LR.js";
import {
  d,
  n2 as n3,
  t
} from "./chunk-WIC2DCCI.js";
import {
  w as w2
} from "./chunk-6RCABQKW.js";
import "./chunk-SODGZZPV.js";
import {
  l as l2
} from "./chunk-N63D5K2K.js";
import {
  l as l4
} from "./chunk-QKTLZRQU.js";
import {
  g
} from "./chunk-SSFB5U5H.js";
import "./chunk-UBZI7BAL.js";
import {
  _
} from "./chunk-4E4BWIUF.js";
import {
  e
} from "./chunk-WA4JKPH3.js";
import "./chunk-2HNVQGYK.js";
import {
  k
} from "./chunk-RNT2VJHG.js";
import {
  p
} from "./chunk-FJNDADL6.js";
import {
  l as l3
} from "./chunk-VLYAMZP3.js";
import "./chunk-XCIG2MTW.js";
import "./chunk-OUD4F5KK.js";
import "./chunk-IJHRPSGC.js";
import "./chunk-TMW4JZMV.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-X4YO53U7.js";
import "./chunk-5MDFQFDX.js";
import "./chunk-5O7ZGCWS.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-IRS5H2YE.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-56NUZKCZ.js";
import {
  b
} from "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
import "./chunk-3Y2ZRVZS.js";
import "./chunk-6PVP32FV.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-DWF2MCID.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import {
  U,
  a,
  l,
  w
} from "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c,
  o4 as o,
  r4 as r
} from "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import {
  n as n2
} from "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import {
  L,
  f2 as f
} from "./chunk-2KP24SU5.js";
import {
  n2 as n
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var V = class extends p(l3(g(_(n3(d(e(b))))))) {
  constructor(e3) {
    super(e3), this._allLayers = new l4({ getCollections: () => [this.layers], getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (e4, t2, i) => {
      const { save: r2, saveAs: s2 } = await import("./groupLayerUtils-Y4QYITV7.js");
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
//# sourceMappingURL=GroupLayer-PWKMETCZ.js.map
