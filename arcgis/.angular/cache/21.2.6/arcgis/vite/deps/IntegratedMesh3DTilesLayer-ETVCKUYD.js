import {
  d,
  x,
  y as y2
} from "./chunk-WMAHM6IF.js";
import {
  p as p2
} from "./chunk-I3PHAJCP.js";
import {
  R,
  j,
  w
} from "./chunk-6ZXIHJYY.js";
import {
  f as f3,
  u
} from "./chunk-CERTVCW6.js";
import "./chunk-AVRDYMQL.js";
import "./chunk-RCFUJF2D.js";
import "./chunk-2TISYHLG.js";
import {
  l as l3,
  r as r2
} from "./chunk-RVUPXXS3.js";
import "./chunk-DZSF27H2.js";
import "./chunk-MXAZZ5UX.js";
import {
  j as j2
} from "./chunk-PUUPDMMU.js";
import "./chunk-Y7YI3OZI.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-5XSBG4BK.js";
import "./chunk-YHHRJ56I.js";
import "./chunk-PFITPXF4.js";
import "./chunk-OQNSFBL3.js";
import "./chunk-YM62CGUL.js";
import "./chunk-RCUTEESF.js";
import {
  s
} from "./chunk-XUGBCQ3P.js";
import {
  s as s2
} from "./chunk-HJAVG2ER.js";
import {
  l
} from "./chunk-6A5V3JU3.js";
import {
  l as l2
} from "./chunk-JDZD4EQ7.js";
import {
  g
} from "./chunk-SXJ6VOTR.js";
import {
  m,
  y
} from "./chunk-TFKEOGZ6.js";
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
import "./chunk-JAXZMTZX.js";
import "./chunk-J5XU3PTN.js";
import {
  t
} from "./chunk-FCVEMPGG.js";
import "./chunk-QEE2QYIE.js";
import "./chunk-2RVDN6RH.js";
import "./chunk-AIECNX6R.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-TPJLJ32L.js";
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
import {
  M
} from "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-DESITEXU.js";
import "./chunk-D7RUZBWM.js";
import "./chunk-OFY6GFSK.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import {
  f2,
  p
} from "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c,
  o3 as o
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import {
  U,
  a
} from "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import {
  f2 as f
} from "./chunk-POW25PFR.js";
import {
  has,
  n2 as n,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=IntegratedMesh3DTilesLayer-ETVCKUYD.js.map
