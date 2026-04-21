import {
  b,
  d,
  x,
  y as y2
} from "./chunk-Y2I2R73C.js";
import {
  R,
  j,
  w
} from "./chunk-YP7OFZOK.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-SGNC5H35.js";
import "./chunk-UDZGHAOY.js";
import {
  s
} from "./chunk-WELNJYNI.js";
import {
  s as s2
} from "./chunk-BBIVWVW2.js";
import {
  l as l2
} from "./chunk-E4NBW3X4.js";
import {
  g
} from "./chunk-SSFB5U5H.js";
import {
  m,
  y
} from "./chunk-UBZI7BAL.js";
import {
  _
} from "./chunk-4E4BWIUF.js";
import {
  e
} from "./chunk-WA4JKPH3.js";
import "./chunk-2HNVQGYK.js";
import "./chunk-RNT2VJHG.js";
import {
  l
} from "./chunk-VLYAMZP3.js";
import "./chunk-IJHRPSGC.js";
import "./chunk-TMW4JZMV.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-X4YO53U7.js";
import "./chunk-5MDFQFDX.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-56NUZKCZ.js";
import {
  b as b2
} from "./chunk-FWUMTZJM.js";
import "./chunk-EZOPIZCP.js";
import "./chunk-MUE6QDRN.js";
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
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import {
  z2 as z
} from "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import {
  f2
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
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
  f2 as f
} from "./chunk-2KP24SU5.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/GaussianSplatLayer.js
var T = class extends l2(g(_(l(e(s2(s(b2))))))) {
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
//# sourceMappingURL=GaussianSplatLayer-WVQ6CPUC.js.map
