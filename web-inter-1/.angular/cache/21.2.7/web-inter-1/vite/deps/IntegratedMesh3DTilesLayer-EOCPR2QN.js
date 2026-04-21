import {
  p as p2
} from "./chunk-7FTXI4VS.js";
import {
  d,
  x,
  y as y2
} from "./chunk-Y2I2R73C.js";
import {
  f as f3,
  u
} from "./chunk-4JPTRRZL.js";
import {
  l as l3,
  r as r2
} from "./chunk-PKNJC377.js";
import {
  R,
  j,
  w
} from "./chunk-YP7OFZOK.js";
import "./chunk-PTZQU6ZC.js";
import "./chunk-CKZBO2VZ.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-QOQBWURX.js";
import {
  j as j2
} from "./chunk-SWDUU527.js";
import "./chunk-SL3X53X2.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-SGNC5H35.js";
import "./chunk-SQCKII37.js";
import "./chunk-UDZGHAOY.js";
import "./chunk-L6ET72DF.js";
import "./chunk-64GACA3E.js";
import "./chunk-G2AJQACY.js";
import "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
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
import {
  t
} from "./chunk-5MDFQFDX.js";
import "./chunk-AP2NAWWU.js";
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
import "./chunk-Z3PP4SLW.js";
import "./chunk-6PVP32FV.js";
import "./chunk-KEY3YQEB.js";
import {
  M
} from "./chunk-P476LLZ4.js";
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
  f2,
  p
} from "./chunk-TPFIN626.js";
import {
  U,
  a
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
  o4 as o
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
  has,
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var A = class extends l2(g(_(l(e(s2(s(b))))))) {
  readModifications(e2, t2, o2) {
    this._modificationsSource = { url: p(e2, o2), context: o2 };
  }
  initialize() {
    this.addHandles(a(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U));
  }
  constructor(e2) {
    super(e2), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.modifications = null, this._modificationsSource = null, this.spatialReference = x, this.fullExtent = d, this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0, this._rootTilesetJSON = null, this._rootTileset = null, this._key = null, this._session = null, this._rootRequestPromise = null, this.queryElevationCallback = null;
  }
  set elevationInfo(e2) {
    null != e2 && "absolute-height" !== e2.mode || this._set("elevationInfo", e2), this._validateElevationInfo(e2);
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  get rootTilesetJSON() {
    return this._rootTilesetJSON;
  }
  get rootTileset() {
    return this._rootTileset;
  }
  get key() {
    return this._key;
  }
  get session() {
    return this._session;
  }
  _findSessionParameter(e2) {
    const t2 = [e2];
    for (; t2?.length > 0; ) {
      const e3 = t2.pop();
      if (!e3) return;
      for (const [r3, i] of Object.entries(e3)) {
        if ("uri" === r3) try {
          const e4 = new URL("https://tmp" + i).searchParams.get("session");
          if (e4) return e4;
        } catch (o2) {
        }
        "object" == typeof i && null !== i && t2.push(i);
      }
    }
    return null;
  }
  async requestRootAndSession(e2) {
    const i = (e3, t2) => new r("3dtiles-init:" + e3, t2);
    return this._rootRequestPromise || (this._rootRequestPromise = new Promise((o2, a3) => {
      this.url || a3(i("url-missing", "Layer url missing")), this._key = this.customParameters ? this.customParameters.key : null;
      new Promise((e3, o3) => {
        if (this.replacesTerrain && !this._key) {
          const r3 = this.portalItem?.portal || this.parent?.portalItem?.portal || M.getDefault();
          r3.signIn().then(() => {
            r3.g3dTilesEnabled ? f2(r3.restUrl + "/portals/self/modules/g3dtiles", { responseType: "json", query: { f: "json" } }).then((t2) => {
              this._key = t2.data.keyString, e3();
            }, () => o3(i("g3dtiles-key-error", "Error fetching Google 3D Tiles key from portal"))) : o3(i("g3dTilesEnabled-false", "Google 3D Tiles are not enabled on Portal " + r3.url));
          }, () => o3(i("sign-in-failed", "Error signing in to Portal")));
        } else e3();
      }).then(() => {
        f2(this.url, { query: this._key ? { key: this._key, token: this.apiKey } : { token: this.apiKey }, responseType: "array-buffer", signal: e2 }).then((e3) => {
          try {
            this._rootTilesetJSON = JSON.parse(new TextDecoder().decode(e3.data));
          } catch (t2) {
            return void a3(i("root-parse-failed", "Error parsing root tile, details: " + t2));
          }
          this._rootTilesetJSON ? (this._session = this._findSessionParameter(this._rootTilesetJSON), this._rootTileset = e3.data, this.fullExtent = y2(this._rootTilesetJSON), o2(), this._rootRequestPromise = null) : a3(i("root-is-null", "Root tile is null."));
        }, (e3) => {
          f(e3), a3(i("root-load-failed", "Error loading root tile")), this._rootRequestPromise = null, n.getLogger("IntegratedMesh3DTilesLayer").error("Layer loading failed", e3);
        });
      }, (e3) => a3(e3));
    })), this._rootRequestPromise;
  }
  async _doLoad(e2) {
    const t2 = null != e2 ? e2.signal : null;
    if (this.isUsedAsGroundLayer && !has("enable-feature:basemap-groundlayers")) throw new r("3dtiles-init:not-supported-in-groundlayers", "Layer is not supported in basemap.");
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e3) => {
        if (e3.typeKeywords?.includes("IntegratedMesh")) return true;
        throw new r("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, e2);
    } catch (i) {
      f(i);
    }
    if (null != this._modificationsSource) {
      const t3 = await p2.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
      if (t3 && t3.length > 0) {
        await l3();
        try {
          const e3 = u(null, t3.toArray(), this.spatialReference), o2 = r2({ modifications: e3, inVCS: 115700 });
          o2.success && o2.modifications && f3(o2.modifications, t3);
        } catch (a3) {
          n.getLogger(this).error("convert-mesh-modification-z-error", "Error when converting:", a3);
        }
        null != this._modificationsSource && this.setAtOrigin("modifications", t3, this._modificationsSource.context.origin), this._modificationsSource = null;
      }
    }
    await this.requestRootAndSession(t2);
  }
  async beforeSave() {
    if (null == this._modificationsSource) {
      const { modifications: e2 } = this;
      return void (e2 && e2.length > 0 && await l3());
    }
    await this.load().then(() => {
    }, () => {
    });
  }
  get hasAttributionData() {
    return false;
  }
  _validateElevationInfo(e2) {
    const t2 = "Integrated mesh 3d tiles layers";
    j(n.getLogger(this), w(t2, "absolute-height", e2)), j(n.getLogger(this), R(t2, e2));
  }
  get replacesTerrain() {
    return !!has("enable-feature:basemap-groundlayers") && this.hasGoogleUrl && this.isUsedAsGroundLayer;
  }
  get isUsedAsGroundLayer() {
    return t(this.parent);
  }
  get hasGoogleUrl() {
    return !!this.url?.match(/.+\.googleapis.com/);
  }
};
__decorate([a2({ type: ["IntegratedMesh3DTilesLayer"] })], A.prototype, "operationalLayerType", void 0), __decorate([a2({ type: p2, clonable: (e2) => e2.clone() }), j2({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), __decorate([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), __decorate([a2({ type: S })], A.prototype, "spatialReference", void 0), __decorate([a2({ type: z })], A.prototype, "fullExtent", void 0), __decorate([a2(m)], A.prototype, "elevationInfo", null), __decorate([a2({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), __decorate([a2(y)], A.prototype, "url", void 0), __decorate([a2({ readOnly: true })], A.prototype, "type", void 0), __decorate([a2({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), __decorate([a2({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], A.prototype, "minScale", void 0), __decorate([a2({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], A.prototype, "maxScale", void 0), __decorate([a2({ readOnly: true })], A.prototype, "hasAttributionData", null), __decorate([a2()], A.prototype, "replacesTerrain", null), __decorate([a2()], A.prototype, "isUsedAsGroundLayer", null), __decorate([a2()], A.prototype, "hasGoogleUrl", null), A = __decorate([c("esri.layers.IntegratedMesh3DTilesLayer")], A);
var G = A;
export {
  G as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-EOCPR2QN.js.map
