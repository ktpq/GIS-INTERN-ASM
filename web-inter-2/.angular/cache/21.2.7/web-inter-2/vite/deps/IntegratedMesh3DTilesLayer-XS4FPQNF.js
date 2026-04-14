import {
  d,
  x,
  y as y2
} from "./chunk-AYJBN5EP.js";
import {
  p as p2
} from "./chunk-6I3NTS2F.js";
import {
  R,
  j,
  w
} from "./chunk-LNYVQOBZ.js";
import "./chunk-DPFYRE7L.js";
import {
  f as f3,
  u
} from "./chunk-6RW4R63U.js";
import "./chunk-4ZAH5GQG.js";
import {
  l as l2,
  r as r2
} from "./chunk-OJB6QZI2.js";
import "./chunk-VYBZD663.js";
import "./chunk-TZSKNWRI.js";
import "./chunk-ZFWTLX5G.js";
import {
  j as j2
} from "./chunk-FYKTE53Z.js";
import "./chunk-C32FOKRN.js";
import "./chunk-UGNCDVPZ.js";
import "./chunk-SGNC5H35.js";
import {
  s as s2
} from "./chunk-2S76RTYP.js";
import "./chunk-SQCKII37.js";
import {
  s
} from "./chunk-QTLQALEJ.js";
import "./chunk-GW2SZHYT.js";
import {
  l as l3
} from "./chunk-QOV2TZ2J.js";
import {
  _
} from "./chunk-CEZV45C4.js";
import "./chunk-CNFMBRMA.js";
import "./chunk-IMJBZ4A5.js";
import "./chunk-QGNQJYZT.js";
import "./chunk-NMDBB7YG.js";
import "./chunk-HHAFAO43.js";
import "./chunk-6MXJH5GI.js";
import "./chunk-DVZUPJLC.js";
import "./chunk-OCH3WOG3.js";
import {
  l
} from "./chunk-OVAE44XM.js";
import {
  g
} from "./chunk-W7IBGF5G.js";
import {
  e
} from "./chunk-ATR3ATPI.js";
import {
  m,
  y
} from "./chunk-IQYWMUVX.js";
import "./chunk-IJHRPSGC.js";
import "./chunk-DTAUH247.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import {
  t
} from "./chunk-B2F3RTYB.js";
import {
  b
} from "./chunk-4N35QWIB.js";
import "./chunk-VITXUMTH.js";
import "./chunk-DHYKXKX3.js";
import "./chunk-OCN6JBSQ.js";
import "./chunk-IANKUBS7.js";
import "./chunk-IRGX4DBZ.js";
import "./chunk-3PLUKWC5.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-AHEHRQEH.js";
import "./chunk-DVV55TEN.js";
import {
  M
} from "./chunk-KYLXXMSB.js";
import "./chunk-6KBSN3RJ.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLL3NYBQ.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FMYEMU2E.js";
import {
  U,
  a as a2
} from "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-OEXL7OFS.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-GF53CKBB.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import {
  f2,
  p
} from "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c,
  o4 as o
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  f2 as f
} from "./chunk-PQFEWUZC.js";
import {
  has,
  n2 as n,
  r3 as r
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var A = class extends l3(g(_(l(e(s(s2(b))))))) {
  readModifications(e2, t2, o2) {
    this._modificationsSource = { url: p(e2, o2), context: o2 };
  }
  initialize() {
    this.addHandles(a2(() => this.modifications, "after-changes", () => this.modifications = this.modifications, U));
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
        await l2();
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
      return void (e2 && e2.length > 0 && await l2());
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
__decorate([a({ type: ["IntegratedMesh3DTilesLayer"] })], A.prototype, "operationalLayerType", void 0), __decorate([a({ type: p2, clonable: (e2) => e2.clone() }), j2({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), __decorate([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), __decorate([a({ type: S })], A.prototype, "spatialReference", void 0), __decorate([a({ type: z })], A.prototype, "fullExtent", void 0), __decorate([a(m)], A.prototype, "elevationInfo", null), __decorate([a({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), __decorate([a(y)], A.prototype, "url", void 0), __decorate([a({ readOnly: true })], A.prototype, "type", void 0), __decorate([a({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), __decorate([a({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], A.prototype, "minScale", void 0), __decorate([a({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], A.prototype, "maxScale", void 0), __decorate([a({ readOnly: true })], A.prototype, "hasAttributionData", null), __decorate([a()], A.prototype, "replacesTerrain", null), __decorate([a()], A.prototype, "isUsedAsGroundLayer", null), __decorate([a()], A.prototype, "hasGoogleUrl", null), A = __decorate([c("esri.layers.IntegratedMesh3DTilesLayer")], A);
var G = A;
export {
  G as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-XS4FPQNF.js.map
