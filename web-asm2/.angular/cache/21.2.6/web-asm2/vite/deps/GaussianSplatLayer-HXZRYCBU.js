import {
  b,
  d,
  x,
  y as y2
} from "./chunk-U327G4VM.js";
import {
  R,
  j,
  w
} from "./chunk-MWXSARGP.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-ZKQBZGUV.js";
import "./chunk-YM62CGUL.js";
import {
  s as s2
} from "./chunk-KXNKZ5SG.js";
import {
  s
} from "./chunk-YGVCVRWD.js";
import {
  l as l2
} from "./chunk-IL4FQAB7.js";
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
import "./chunk-IDQ6F3RQ.js";
import {
  l
} from "./chunk-5W2KFO6C.js";
import {
  g
} from "./chunk-SNVXOKVA.js";
import {
  e
} from "./chunk-SWNARI4F.js";
import {
  m,
  y
} from "./chunk-DJHTC3GB.js";
import "./chunk-W3KPPCSW.js";
import {
  b as b2
} from "./chunk-JWSXOJ4W.js";
import "./chunk-SKQFZRJZ.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
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
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-VSDCDWT5.js";
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
import {
  f2
} from "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
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
  f2 as f
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GaussianSplatLayer.js
var T = class extends l2(g(_(l(e(s(s2(b2))))))) {
  constructor(e2) {
    super(e2), this.operationalLayerType = "GaussianSplatLayer", this.type = "gaussian-splat", this.opacity = 1, this.minScale = 0, this.maxScale = 0, this.url = null, this.rootTilesetJSON = null, this.fullExtent = d, this.spatialReference = x, this.esriCrsSpatialReference = null, this.esriCrsFullExtent = null;
  }
  get supportedSpatialReferences() {
    return this.initialized && this.esriCrsSpatialReference ? [x, this.esriCrsSpatialReference] : [x];
  }
  get fullExtents() {
    return this.initialized && this.esriCrsFullExtent ? [d, this.esriCrsFullExtent] : [d];
  }
  set elevationInfo(e2) {
    null != e2 && "absolute-height" !== e2.mode || this._set("elevationInfo", e2), this._validateElevationInfo(e2);
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  async _doLoad(e2) {
    const r2 = null != e2 ? e2.signal : null;
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e3) => {
        if (e3.typeKeywords?.includes("GaussianSplat")) return true;
        throw new r("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service" });
      } }, e2);
    } catch (s3) {
      f(s3);
    }
    if (this.url) {
      const e3 = f2(this.url, { query: __spreadProps(__spreadValues({}, this.customParameters), { token: this.apiKey }), responseType: "json", signal: r2 }).then((e4) => {
        this.rootTilesetJSON = e4.data, this.fullExtent = y2(this.rootTilesetJSON, false);
        b(this.rootTilesetJSON) && (this.esriCrsFullExtent = y2(this.rootTilesetJSON, true), this.esriCrsSpatialReference = this.esriCrsFullExtent.spatialReference, this.spatialReference = this.esriCrsSpatialReference);
      }, (e4) => {
        f(e4);
      });
      await e3;
    }
  }
  _validateElevationInfo(e2) {
    const t = "Gaussian Splat layers";
    j(n.getLogger(this), w(t, "absolute-height", e2)), j(n.getLogger(this), R(t, e2));
  }
};
__decorate([a({ type: ["GaussianSplatLayer"] })], T.prototype, "operationalLayerType", void 0), __decorate([a({ readOnly: true })], T.prototype, "type", void 0), __decorate([a({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], T.prototype, "opacity", void 0), __decorate([a({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], T.prototype, "minScale", void 0), __decorate([a({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], T.prototype, "maxScale", void 0), __decorate([a(y)], T.prototype, "url", void 0), __decorate([a({ type: z })], T.prototype, "fullExtent", void 0), __decorate([a({ type: S })], T.prototype, "spatialReference", void 0), __decorate([a({ readOnly: true })], T.prototype, "supportedSpatialReferences", null), __decorate([a({ type: [z] })], T.prototype, "fullExtents", null), __decorate([a({ type: ["show", "hide"] })], T.prototype, "listMode", void 0), __decorate([a(m)], T.prototype, "elevationInfo", null), T = __decorate([c("esri.layers.GaussianSplatLayer")], T);
var C = T;
export {
  C as default
};
//# sourceMappingURL=GaussianSplatLayer-HXZRYCBU.js.map
