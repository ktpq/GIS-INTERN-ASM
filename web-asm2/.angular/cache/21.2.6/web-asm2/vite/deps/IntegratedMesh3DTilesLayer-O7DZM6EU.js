import {
  p as p2
} from "./chunk-S7SO2ZVX.js";
import {
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
import {
  f as f3,
  u
} from "./chunk-3IQNTANL.js";
import "./chunk-SPY6G63G.js";
import "./chunk-CEI53J3M.js";
import "./chunk-2TISYHLG.js";
import {
  l as l2,
  r as r2
} from "./chunk-TG77JUJU.js";
import "./chunk-3EN5CV4O.js";
import {
  j as j2
} from "./chunk-MV6OFZWZ.js";
import "./chunk-G5AFP77U.js";
import "./chunk-5XSBG4BK.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-ZKQBZGUV.js";
import "./chunk-OANXGOUH.js";
import "./chunk-2V4Q54HN.js";
import "./chunk-YM62CGUL.js";
import "./chunk-JSUZNUEF.js";
import "./chunk-N7DF7CMI.js";
import "./chunk-2UK7CYH6.js";
import "./chunk-OR4JKEPP.js";
import {
  s as s2
} from "./chunk-KXNKZ5SG.js";
import {
  s
} from "./chunk-YGVCVRWD.js";
import {
  l as l3
} from "./chunk-IL4FQAB7.js";
import {
  _
} from "./chunk-XQWWS2MW.js";
import "./chunk-N2GOMHYA.js";
import {
  t
} from "./chunk-6Q36DUGX.js";
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
  b
} from "./chunk-JWSXOJ4W.js";
import "./chunk-SKQFZRJZ.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-J5XU3PTN.js";
import "./chunk-7YXBCFCF.js";
import "./chunk-Q7RJVOIK.js";
import {
  M
} from "./chunk-IQ4J5AR2.js";
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
  a as a2
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
  f2,
  p
} from "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  o4 as o
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
  has,
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=IntegratedMesh3DTilesLayer-O7DZM6EU.js.map
