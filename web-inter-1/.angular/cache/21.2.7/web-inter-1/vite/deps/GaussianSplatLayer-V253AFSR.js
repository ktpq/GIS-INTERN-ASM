import {
  b,
  d,
  x,
  y as y2
} from "./chunk-J3J2VECW.js";
import {
  R,
  j,
  w
} from "./chunk-KWGDYBY5.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-SGNC5H35.js";
import {
  s as s2
} from "./chunk-HWUPLHAX.js";
import {
  s
} from "./chunk-6LOCYJ7K.js";
import "./chunk-DPKT4LYX.js";
import {
  l as l2
} from "./chunk-BOS3CHZM.js";
import {
  _
} from "./chunk-KB2EHMQZ.js";
import "./chunk-VIFYHMCM.js";
import "./chunk-MQRKJL3K.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-Y4WJAV66.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-MCLMCBJF.js";
import {
  l
} from "./chunk-LPNV4GQD.js";
import {
  g
} from "./chunk-O6NQ3G3U.js";
import {
  e
} from "./chunk-T3TXTZDJ.js";
import {
  m,
  y
} from "./chunk-J5YAKAE5.js";
import "./chunk-IJHRPSGC.js";
import {
  b as b2
} from "./chunk-I5YTT2EB.js";
import "./chunk-22SI6UZM.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-23U7MZU6.js";
import "./chunk-NNUIV2NH.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
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
import "./chunk-YY44XNLW.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-HMYFPFVG.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-TNGHAIJZ.js";
import "./chunk-2RBIX73A.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import {
  f2
} from "./chunk-LAAWMBRE.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  f2 as f
} from "./chunk-WARIPJQI.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
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
//# sourceMappingURL=GaussianSplatLayer-V253AFSR.js.map
