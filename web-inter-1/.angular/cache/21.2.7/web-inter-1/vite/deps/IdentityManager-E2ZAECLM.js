import {
  s as s3
} from "./chunk-YXWQV2QL.js";
import {
  O,
  c as c2
} from "./chunk-YHDV72OA.js";
import {
  v,
  w as w2,
  x as x2
} from "./chunk-XJEMOC6M.js";
import "./chunk-7H3HYUBR.js";
import "./chunk-O7ARSPVE.js";
import "./chunk-I7B74Y7B.js";
import {
  w as w3
} from "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-6YAOADHH.js";
import "./chunk-SIEFVWAL.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-YPBIWRR5.js";
import {
  A,
  Bt,
  F,
  H,
  I,
  K,
  W,
  _,
  a as a3,
  et,
  f2 as f,
  i,
  r as r3,
  s2,
  x
} from "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import {
  l as l3,
  r as r2
} from "./chunk-LD7VLL5E.js";
import "./chunk-MCBUVFBI.js";
import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c,
  l2
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
  $,
  a,
  o2 as o,
  w
} from "./chunk-2KP24SU5.js";
import {
  l,
  r3 as r,
  s,
  t
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/identity/Credential.js
var h = class extends l3 {
  constructor(e2) {
    super(e2), this._oAuthCred = null, this.tokenRefreshBuffer = 2, e2?._oAuthCred && (this._oAuthCred = e2._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], null == this.creationTime && (this.creationTime = Date.now());
  }
  refreshToken() {
    return s2.refreshToken(this);
  }
  refreshServerTokens() {
    return s2.refreshServerTokens(this);
  }
  emitTokenChange(e2) {
    clearTimeout(this._refreshTimer);
    const r4 = s2, s6 = this.server ? r4.findServerInfo(this.server) : null, i4 = s6?.owningSystemUrl, o2 = i4 ? r4.findServerInfo(i4) : null;
    false === e2 || i4 && "portal" !== this.scope && (!o2?.webTierAuth || r4.normalizeWebTierAuth) || null == this.expires && null == this.validity || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e2 = s2, r4 = e2.credentials.indexOf(this);
    r4 > -1 && e2.credentials.splice(r4, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e2 = l({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), t3 = this.resources;
    return t3 && t3.length > 0 && (e2.resources = t3.slice()), e2;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e2 = 6e4 * this.tokenRefreshBuffer, t3 = 2 ** 31 - 1;
    let r4 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    r4 < 0 ? r4 = 0 : r4 > t3 && (r4 = t3), this._refreshTimer = setTimeout(this.refreshToken.bind(this), r4 > e2 ? r4 - e2 : r4);
  }
};
__decorate([a2()], h.prototype, "creationTime", void 0), __decorate([a2()], h.prototype, "expires", void 0), __decorate([a2()], h.prototype, "isAdmin", void 0), __decorate([a2()], h.prototype, "oAuthState", void 0), __decorate([a2()], h.prototype, "resources", void 0), __decorate([a2()], h.prototype, "scope", void 0), __decorate([a2()], h.prototype, "server", void 0), __decorate([a2()], h.prototype, "ssl", void 0), __decorate([a2()], h.prototype, "token", void 0), __decorate([a2()], h.prototype, "tokenRefreshBuffer", void 0), __decorate([a2()], h.prototype, "userId", void 0), __decorate([a2()], h.prototype, "validity", void 0), h = __decorate([l2("esri.identity.Credential")], h);
var n2 = h;

// node_modules/@arcgis/core/identity/IdentityModal.js
var p = "esri-identity-modal";
var d = { base: p, info: `${p}__info`, notice: `${p}__notice` };
var u = "ArcGIS Online";
var m = class extends O {
  constructor(t3, e2) {
    super(t3, e2), this.container = document.createElement("div"), this.error = null, this.oAuthPrompt = false, this.open = false, this.signingIn = false, this.server = null, this.resource = null, this._usernameInputNode = null, this._passwordInputNode = null, document.body.appendChild(this.container);
  }
  loadDependencies() {
    return c2({ button: () => import("./calcite-button-2T75ADLD.js"), dialog: () => import("./calcite-dialog-RQGKTTJR.js"), input: () => import("./calcite-input-IVZ7D2IR.js"), label: () => import("./calcite-label-TNFN3YZF.js"), notice: () => import("./calcite-notice-NS6DRQIM.js") });
  }
  get title() {
    return this.commonMessages?.auth.signIn;
  }
  render() {
    const { open: t3, title: o2, messages: i4, signingIn: n4, oAuthPrompt: r4, server: l4, resource: c3, error: p3 } = this, { info: m2, oAuthInfo: h3, lblItem: g, invalidUser: b, noAuthService: v2, lblUser: f2, lblPwd: _2, lblCancel: I2, lblSigning: y, lblOk: w4 } = i4;
    return x2("div", { class: this.classes(d.base, s3(this.container)) }, x2("form", { bind: this, onsubmit: this._submit }, x2("calcite-dialog", { bind: this, heading: o2, modal: true, open: t3, outsideCloseDisabled: true, scale: "s", width: "s", onCalciteDialogClose: this._cancel, onCalciteDialogOpen: this._focusUsernameInput }, x2("div", { class: d.info }, w3(r4 ? h3 : m2, { server: l4 && /\.arcgis\.com/i.test(l4) ? u : l4, resource: `(${c3 || g})` })), p3 ? x2("calcite-notice", { class: d.notice, icon: "exclamation-mark-triangle", kind: "danger", open: true }, x2("div", { slot: "message" }, p3.details?.httpStatus ? b : v2)) : null, r4 ? null : [x2("calcite-label", null, f2, x2("calcite-input", { afterCreate: (t4) => this._usernameInputNode = t4, autocomplete: "off", bind: this, name: "username", required: true, spellcheck: false, type: "text", value: "" })), x2("calcite-label", null, _2, x2("calcite-input", { afterCreate: (t4) => this._passwordInputNode = t4, bind: this, name: "password", required: true, type: "password", value: "" }))], x2("calcite-button", { appearance: "outline", bind: this, onclick: this._cancel, slot: "footer-end", type: "button" }, I2), x2("calcite-button", { loading: !!n4, slot: "footer-end", type: "submit" }, n4 ? y : w4))));
  }
  _focusUsernameInput() {
    return w2(() => this._usernameInputNode);
  }
  _cancel() {
    this._set("signingIn", false), this.open = false, this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(t3) {
    t3.preventDefault(), this._set("signingIn", true);
    const e2 = this.oAuthPrompt ? {} : { username: this._usernameInputNode?.value, password: this._passwordInputNode?.value };
    this.emit("submit", e2);
  }
};
__decorate([a2({ readOnly: true })], m.prototype, "container", void 0), __decorate([a2(), v("esri/t9n/common")], m.prototype, "commonMessages", void 0), __decorate([a2()], m.prototype, "error", void 0), __decorate([a2(), v("esri/identity/t9n/identity")], m.prototype, "messages", void 0), __decorate([a2()], m.prototype, "oAuthPrompt", void 0), __decorate([a2()], m.prototype, "open", void 0), __decorate([a2()], m.prototype, "signingIn", void 0), __decorate([a2()], m.prototype, "server", void 0), __decorate([a2({ readOnly: true })], m.prototype, "title", null), __decorate([a2()], m.prototype, "resource", void 0), m = __decorate([c("esri.identity.IdentityModal")], m);
var h2 = m;

// node_modules/@arcgis/core/identity/OAuthCredential.js
var e = "esriJSAPIOAuth";
var s4 = class {
  constructor(t3, e2) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = t3, this.storage = e2, this._init();
  }
  isValid() {
    let t3 = false;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (null == this.expires && this.refreshToken) t3 = true;
      else if (this.expires) {
        const e2 = Date.now();
        if (this.expires > e2) {
          (this.expires - e2) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (t3 = true);
        }
      }
    }
    return t3;
  }
  save() {
    if (!this.storage) return false;
    const t3 = this._load(), s6 = this.oAuthInfo;
    if (s6?.authNamespace && s6.portalUrl) {
      let r4 = t3[s6.authNamespace];
      r4 || (r4 = t3[s6.authNamespace] = {}), this.appId || (this.appId = s6.appId), r4[s6.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(e, JSON.stringify(t3));
      } catch (i4) {
        return console.warn(i4), false;
      }
      return true;
    }
    return false;
  }
  destroy() {
    const s6 = this._load(), i4 = this.oAuthInfo;
    if (i4?.appId && i4?.portalUrl && (null == this.expires || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const e2 = i4.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken";
      f(e2, { authMode: "anonymous", keepAlive: true, method: "post", query: { f: "json", auth_token: this.refreshToken || this.token, client_id: i4.appId, token_type_hint: this.refreshToken ? "refresh_token" : "access_token" } });
    }
    if (i4?.authNamespace && i4.portalUrl && this.storage) {
      const t3 = s6[i4.authNamespace];
      if (t3) {
        delete t3[i4.portalUrl];
        try {
          this.storage.setItem(e, JSON.stringify(s6));
        } catch (r4) {
          console.log(r4);
        }
      }
    }
    i4 && (i4._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t3 = this._load(), e2 = this.oAuthInfo;
    if (e2?.authNamespace && e2.portalUrl) {
      let s6 = t3[e2.authNamespace];
      s6 && (s6 = s6[e2.portalUrl], s6 && (this.appId = s6.appId, this.codeVerifier = s6.codeVerifier, this.expires = s6.expires, this.refreshToken = s6.refreshToken, this.ssl = s6.ssl, this.stateUID = s6.stateUID, this.token = s6.token, this.userId = s6.userId));
    }
  }
  _load() {
    let t3 = {};
    if (this.storage) {
      const i4 = this.storage.getItem(e);
      if (i4) try {
        t3 = JSON.parse(i4);
      } catch (s6) {
        console.warn(s6);
      }
    }
    return t3;
  }
};
s4.prototype.declaredClass = "esri.identity.OAuthCredential";

// node_modules/@arcgis/core/identity/OAuthInfo.js
var i2;
var p2 = class extends n {
  static {
    i2 = this;
  }
  constructor(o2) {
    super(o2), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return i2.fromJSON(this.toJSON());
  }
};
__decorate([a2({ json: { write: true } })], p2.prototype, "appId", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "authNamespace", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "expiration", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "flowType", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "forceLogin", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "forceUserId", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "locale", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "minTimeUntilExpiration", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "popup", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "popupCallbackUrl", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "popupWindowFeatures", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "portalUrl", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "preserveUrlHash", void 0), __decorate([a2({ json: { write: true } })], p2.prototype, "userId", void 0), p2 = i2 = __decorate([c("esri.identity.OAuthInfo")], p2);
var s5 = p2;

// node_modules/@arcgis/core/identity/ServerInfo.js
var i3 = class extends n {
  constructor(o2) {
    super(o2), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
__decorate([a2({ json: { write: true } })], i3.prototype, "adminTokenServiceUrl", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "currentVersion", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "hasPortal", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "hasServer", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "owningSystemUrl", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "owningTenant", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "server", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "shortLivedTokenValidity", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "tokenServiceUrl", void 0), __decorate([a2({ json: { write: true } })], i3.prototype, "webTierAuth", void 0), i3 = __decorate([c("esri.identity.ServerInfo")], i3);
var n3 = i3;

// node_modules/@arcgis/core/identity/IdentityManagerBase.js
var x3 = {};
var O2 = (e2) => {
  const t3 = new x(e2.owningSystemUrl).host, r4 = new x(e2.server).host, s6 = /.+\.arcgis\.com$/i;
  return s6.test(t3) && s6.test(r4);
};
var T = (e2, t3) => !!(O2(e2) && t3 && t3.some((t4) => t4.test(e2.server)));
var R = null;
var C = null;
try {
  R = window.localStorage, C = window.sessionStorage;
} catch {
}
var D = class extends r2 {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appOrigin = "null" !== window.origin ? window.origin : window.location.origin, this._appUrlObj = I(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^/]+\/[^/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer|3DTilesServer)).*/gi, this._gwUser = /http.+\/users\/([^/]+).*/i, this._gwItem = /http.+\/items\/([^/]+).*/i, this._gwGroup = /http.+\/groups\/([^/]+).*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getPlatformSelfError = null, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e2) => {
      this._pageShowHandler(e2);
    });
  }
  registerServers(e2) {
    const t3 = this.serverInfos;
    t3 ? (e2 = e2.filter((e3) => !this.findServerInfo(e3.server)), this.serverInfos = t3.concat(e2)) : this.serverInfos = e2, e2.forEach((e3) => {
      e3.owningSystemUrl && this._portals.push(e3.owningSystemUrl), e3.hasPortal && this._portals.push(e3.server);
    });
  }
  registerOAuthInfos(e2) {
    const t3 = this.oAuthInfos;
    if (t3) {
      for (const r4 of e2) {
        const e3 = this.findOAuthInfo(r4.portalUrl);
        e3 && t3.splice(t3.indexOf(e3), 1);
      }
      this.oAuthInfos = t3.concat(e2);
    } else this.oAuthInfos = e2;
  }
  registerToken(e2) {
    e2 = __spreadValues({}, e2);
    const t3 = this._sanitizeUrl(e2.server), r4 = this._isServerRsrc(t3);
    let s6, i4 = this.findServerInfo(t3), n4 = true;
    i4 || (i4 = new n3(), i4.server = this._getServerInstanceRoot(t3), r4 ? i4.hasServer = true : (i4.tokenServiceUrl = this._getTokenSvcUrl(t3), i4.hasPortal = true), this.registerServers([i4])), s6 = this._findCredential(t3), s6 ? (delete e2.server, Object.assign(s6, e2), n4 = false) : (s6 = new n2({ userId: e2.userId, server: i4.server ?? void 0, token: e2.token, expires: e2.expires, ssl: e2.ssl, scope: r4 ? "server" : "portal" }), s6.resources = [t3], this.credentials.push(s6)), s6.emitTokenChange(false), n4 || s6.refreshServerTokens();
  }
  toJSON() {
    return l({ serverInfos: this.serverInfos.map((e2) => e2.toJSON()), oAuthInfos: this.oAuthInfos.map((e2) => e2.toJSON()), credentials: this.credentials.map((e2) => e2.toJSON()) });
  }
  initialize(e2) {
    if (!e2) return;
    "string" == typeof e2 && (e2 = JSON.parse(e2));
    const t3 = e2.serverInfos, r4 = e2.oAuthInfos, s6 = e2.credentials;
    if (t3) {
      const e3 = [];
      t3.forEach((t4) => {
        t4.server && t4.tokenServiceUrl && e3.push(t4.declaredClass ? t4 : new n3(t4));
      }), e3.length && this.registerServers(e3);
    }
    if (r4) {
      const e3 = [];
      r4.forEach((t4) => {
        t4.appId && e3.push(t4.declaredClass ? t4 : new s5(t4));
      }), e3.length && this.registerOAuthInfos(e3);
    }
    s6 && s6.forEach((e3) => {
      e3.server && e3.token && e3.expires && e3.expires > Date.now() && ((e3 = e3.declaredClass ? e3 : new n2(e3)).emitTokenChange(), this.credentials.push(e3));
    });
  }
  findServerInfo(e2) {
    let t3;
    e2 = this._sanitizeUrl(e2);
    for (const r4 of this.serverInfos) if (this._hasSameServerInstance(r4.server, e2)) {
      t3 = r4;
      break;
    }
    return t3;
  }
  findOAuthInfo(e2) {
    let t3;
    e2 = this._sanitizeUrl(e2);
    for (const r4 of this.oAuthInfos) if (this._hasSameServerInstance(r4.portalUrl, e2)) {
      t3 = r4;
      break;
    }
    return t3;
  }
  findCredential(e2, t3) {
    if (!e2) return;
    let r4;
    e2 = this._sanitizeUrl(e2);
    const s6 = this._isServerRsrc(e2) ? "server" : "portal";
    if (t3) {
      for (const i4 of this.credentials) if (this._hasSameServerInstance(i4.server, e2) && t3 === i4.userId && i4.scope === s6) {
        r4 = i4;
        break;
      }
    } else for (const i4 of this.credentials) if (this._hasSameServerInstance(i4.server, e2) && -1 !== this._getIdenticalSvcIdx(e2, i4) && i4.scope === s6) {
      r4 = i4;
      break;
    }
    return r4;
  }
  getCredential(e2, t3) {
    let s6, i4 = false, n4 = true;
    t3 && (i4 = !(!t3.token && !t3.credential), s6 = t3.error, n4 = false !== t3.prompt), t3 = __spreadValues({}, t3), e2 = this._sanitizeUrl(e2);
    const o2 = new AbortController(), c3 = $();
    if (t3.signal && w(t3.signal, () => {
      o2.abort();
    }), w(o2, () => {
      c3.reject(new r("identity-manager:user-aborted", "ABORTED"));
    }), a(o2)) return c3.promise;
    t3.signal = o2.signal;
    const u2 = this._isAdminResource(e2), p3 = i4 ? this.findCredential(e2) : null;
    let _2;
    if (p3 && 498 === s6?.details?.httpStatus) p3.destroy();
    else if (p3) return _2 = new r("identity-manager:not-authorized", "You are currently signed in as: '" + p3.userId + "'. You do not have access to this resource: " + e2, { error: s6 }), c3.reject(_2), c3.promise;
    const f2 = this._findCredential(e2, t3);
    if (f2) return c3.resolve(f2), c3.promise;
    let g = this.findServerInfo(e2);
    if (g) !g.hasPortal && g.server && g.owningSystemUrl && this._hasSameServerInstance(g.server, g.owningSystemUrl) && (g.hasPortal = true), !g.hasServer && this._isServerRsrc(e2) && (g._restInfoPms = this._getTokenSvcUrl(e2), g.hasServer = true);
    else {
      const t4 = this._getTokenSvcUrl(e2);
      if (!t4) return _2 = new r("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), c3.reject(_2), c3.promise;
      g = new n3(), g.server = this._getServerInstanceRoot(e2), "string" == typeof t4 ? (g.tokenServiceUrl = t4, g.hasPortal = true) : (g._restInfoPms = t4, g.hasServer = true), this.registerServers([g]);
    }
    return g.hasPortal && void 0 === g._selfReq && (n4 || F(g.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((e3) => e3.tokenServiceUrl === g.tokenServiceUrl)) && (g._selfReq = { owningTenant: t3?.owningTenant, selfDfd: this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e2) }), this._enqueue(e2, g, t3, c3, u2);
  }
  getResourceName(e2) {
    return this._isRESTService(e2) ? e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e2) && e2.replace(this._gwUser, "$1") || this._gwItem.test(e2) && e2.replace(this._gwItem, "$1") || this._gwGroup.test(e2) && e2.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e2, s6, i4) {
    const n4 = this._rePortalTokenSvc.test(e2.tokenServiceUrl), o2 = new x(this._appOrigin), a4 = e2.shortLivedTokenValidity;
    let h3, l4, c3, p3, _2, f2, g, m2;
    s6 && (m2 = this.tokenValidity || a4 || this._defaultTokenValidity, m2 > a4 && a4 > 0 && (m2 = a4)), i4 && (h3 = i4.isAdmin, l4 = i4.serverUrl, c3 = i4.token, f2 = i4.signal, g = i4.ssl, e2.customParameters = i4.customParameters), h3 ? p3 = e2.adminTokenServiceUrl : (p3 = e2.tokenServiceUrl, _2 = new x(p3.toLowerCase()), e2.webTierAuth && i4?.serverUrl && !g && "http" === o2.scheme && (F(o2.uri, p3, true) || "https" === _2.scheme && o2.host === _2.host && "7080" === o2.port && "7443" === _2.port) && (p3 = p3.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v2 = { query: __spreadValues({ request: "getToken", username: s6?.username, password: s6?.password, serverUrl: l4, token: c3, expiration: m2, referer: h3 || n4 ? this._appOrigin : null, client: h3 ? "referer" : null, f: "json" }, e2.customParameters), method: "post", authMode: "anonymous", useProxy: this._useProxy(e2, i4), signal: f2 };
    n4 || (v2.withCredentials = false);
    return f(p3, v2).then((t3) => {
      const i5 = t3.data;
      if (!i5?.token) return new r("identity-manager:authentication-failed", "Unable to generate token");
      const n5 = e2.server;
      return x3[n5] || (x3[n5] = {}), s6 && (x3[n5][s6.username] = s6.password), i5.validity = m2, i5;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  async checkSignInStatus(e2) {
    return (await this.checkAppAccess(e2, "")).credential;
  }
  checkAppAccess(e2, s6, i4) {
    let n4 = false;
    return this.getCredential(e2, { prompt: false }).then((o2) => {
      let a4;
      const h3 = { f: "json" };
      if ("portal" === o2.scope) if (s6 && (this._doPortalSignIn(e2) || i4?.force)) a4 = o2.server + "/sharing/rest/oauth2/validateAppAccess", h3.client_id = s6;
      else {
        if (!o2.token) return { credential: o2 };
        a4 = o2.server + "/sharing/rest";
      }
      else {
        if (!o2.token) return { credential: o2 };
        a4 = o2.server + "/rest/services";
      }
      return o2.token && (h3.token = o2.token), f(a4, { query: h3, authMode: "anonymous" }).then((e3) => {
        if (false === e3.data.valid) throw new r("identity-manager:not-authorized", `You are currently signed in as: '${o2.userId}'.`, e3.data);
        return n4 = !!e3.data.viewOnlyUserTypeApp, { credential: o2 };
      }).catch((e3) => {
        if ("identity-manager:not-authorized" === e3.name) throw e3;
        const t3 = e3.details?.httpStatus;
        if (498 === t3) throw o2.destroy(), new r("identity-manager:not-authenticated", "User is not signed in.");
        if (400 === t3) throw new r("identity-manager:invalid-request", "Bad request");
        return { credential: o2 };
      });
    }).then((e3) => ({ credential: e3.credential, viewOnly: n4 }));
  }
  setOAuthResponseHash(e2) {
    e2 && (e2.startsWith("#") && (e2 = e2.slice(1)), this._processOAuthPopupParams(W(e2)));
  }
  setOAuthRedirectionHandler(e2) {
    this._oAuthRedirectFunc = e2;
  }
  setProtocolErrorHandler(e2) {
    this._protocolFunc = e2;
  }
  signIn(e2, t3, s6 = {}) {
    const i4 = $(), n4 = () => {
      c3?.remove(), d2?.remove(), this.dialog?.destroy(), this.dialog = c3 = d2 = null;
    }, o2 = () => {
      n4(), this._oAuthDfd = null, i4.reject(new r("identity-manager:user-aborted", "ABORTED"));
    };
    s6.signal && w(s6.signal, () => {
      o2();
    });
    const l4 = new h2({ open: true, resource: this.getResourceName(e2), server: t3.server });
    this.dialog = l4, this.emit("dialog-create");
    let c3 = l4.on("cancel", o2), d2 = l4.on("submit", (e3) => {
      this.generateToken(t3, e3, { isAdmin: s6.isAdmin, signal: s6.signal }).then((r4) => {
        n4();
        const o3 = new n2({ userId: e3.username, server: t3.server ?? void 0, token: r4.token, expires: null != r4.expires ? Number(r4.expires) : null, ssl: !!r4.ssl, isAdmin: s6.isAdmin, validity: r4.validity });
        i4.resolve(o3);
      }).catch((e4) => {
        l4.error = e4, l4.signingIn = false;
      });
    });
    return i4.promise;
  }
  oAuthSignIn(e2, t3, s6, i4) {
    this._oAuthDfd = $();
    const n4 = this._oAuthDfd;
    let o2;
    i4?.signal && w(i4.signal, () => {
      const e3 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e3 && !e3.closed ? e3.close() : this.dialog && u2();
    }), n4.resUrl_ = e2, n4.sinfo_ = t3, n4.oinfo_ = s6;
    const l4 = s6._oAuthCred;
    if (l4.storage && ("authorization-code" === s6.flowType || "auto" === s6.flowType && t3.currentVersion >= 8.4)) {
      let e3 = crypto.getRandomValues(new Uint8Array(32));
      o2 = et(e3), l4.codeVerifier = o2, e3 = crypto.getRandomValues(new Uint8Array(32)), l4.stateUID = et(e3), l4.save() || (l4.codeVerifier = o2 = null);
    } else l4.codeVerifier = null;
    let c3, d2;
    this._getCodeChallenge(o2).then((r4) => {
      const n5 = !i4 || false !== i4.oAuthPopupConfirmation;
      if (!s6.popup || !n5) return void this._doOAuthSignIn(e2, t3, s6, r4);
      const o3 = new h2({ oAuthPrompt: true, server: t3.server, open: true });
      this.dialog = o3, this.emit("dialog-create"), c3 = o3.on("cancel", u2), d2 = o3.on("submit", () => {
        p3(), this._doOAuthSignIn(e2, t3, s6, r4);
      });
    });
    const u2 = () => {
      p3(), this._oAuthDfd = null, n4.reject(new r("identity-manager:user-aborted", "ABORTED"));
    }, p3 = () => {
      c3?.remove(), d2?.remove(), this.dialog?.destroy(), this.dialog = null;
    };
    return n4.promise;
  }
  async refreshToken(e2) {
    const t3 = this.findServerInfo(e2.server), r4 = t3?.owningSystemUrl, s6 = !!r4 && "server" === e2.scope, i4 = s6 && T(t3, this._legacyFed), n4 = t3.webTierAuth, o2 = n4 && this.normalizeWebTierAuth, a4 = x3[e2.server], h3 = a4?.[e2.userId];
    let l4, c3 = e2.resources && e2.resources[0], d2 = s6 ? this.findServerInfo(r4) : null, u2 = { username: e2.userId, password: h3 };
    if (n4 && !o2) return;
    s6 && !d2 && this.serverInfos.some((e3) => (this._isIdProvider(r4, e3.server) && (d2 = e3), !!d2));
    const p3 = d2 ? this.findCredential(d2.server, e2.userId) : null;
    if (!s6 || p3) {
      if (!i4) {
        if (s6) l4 = { serverUrl: c3, token: p3?.token, ssl: p3?.ssl };
        else if (o2) u2 = null, l4 = { ssl: e2.ssl };
        else {
          if (!h3) {
            let r5;
            return c3 && (c3 = this._sanitizeUrl(c3), e2._enqueued = 1, r5 = this._enqueue(c3, t3, null, null, e2.isAdmin, e2), r5.then(() => {
              e2._enqueued = 0, e2.refreshServerTokens();
            }).catch(() => {
              e2._enqueued = 0;
            })), r5;
          }
          e2.isAdmin && (l4 = { isAdmin: true });
        }
        return this.generateToken(s6 ? d2 : t3, s6 ? null : u2, l4).then((t4) => {
          e2.token = t4.token, e2.expires = null != t4.expires ? Number(t4.expires) : null, e2.creationTime = Date.now(), e2.validity = t4.validity, e2.emitTokenChange(), e2.refreshServerTokens();
        }).catch(() => {
        });
      }
      p3?.refreshToken();
    }
  }
  refreshServerTokens(e2) {
    "portal" === e2.scope && this.credentials.forEach((t3) => {
      const r4 = this.findServerInfo(t3.server), s6 = r4?.owningSystemUrl;
      t3 !== e2 && t3.userId === e2.userId && s6 && "server" === t3.scope && (this._hasSameServerInstance(e2.server, s6) || this._isIdProvider(s6, e2.server)) && (T(r4, this._legacyFed) ? (t3.token = e2.token, t3.expires = e2.expires, t3.creationTime = e2.creationTime, t3.validity = e2.validity, t3.emitTokenChange()) : t3.refreshToken());
    });
  }
  destroyCredentials() {
    if (this.credentials) {
      this.credentials.slice().forEach((e2) => {
        e2.destroy();
      });
    }
    this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e2 = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = o(window, "message", (t3) => {
      if ((t3.origin === this._appOrigin || t3.origin.endsWith(".arcgis.com")) && "arcgis:auth:requestCredential" === t3.data?.type) {
        const r4 = t3.source;
        this.getCredential(e2).then((e3) => {
          r4.postMessage({ type: "arcgis:auth:credential", credential: { expires: e3.expires, server: e3.server, ssl: e3.ssl, token: e3.token, userId: e3.userId } }, t3.origin);
        }).catch((e3) => {
          r4.postMessage({ type: "arcgis:auth:error", error: { name: e3.name, message: e3.message } }, t3.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    let e2 = window.location.hash;
    if (e2) {
      e2.startsWith("#") && (e2 = e2.slice(1));
      const t4 = W(e2);
      let r4 = false;
      if (t4.access_token && t4.expires_in && t4.state && t4.hasOwnProperty("username")) try {
        t4.state = JSON.parse(t4.state), t4.state.portalUrl && (this._oAuthLocationParams = t4, r4 = true);
      } catch {
      }
      else if (t4.error && t4.error_description && (console.log("IdentityManager OAuth Error: ", t4.error, " - ", t4.error_description), "access_denied" === t4.error && (r4 = true, t4.state))) try {
        t4.state = JSON.parse(t4.state);
      } catch {
      }
      r4 && (window.location.hash = t4.state?.hash || "");
    }
    let t3 = window.location.search;
    if (t3) {
      t3.startsWith("?") && (t3 = t3.slice(1));
      const e3 = W(t3);
      let r4 = false;
      if (e3.code && e3.state) try {
        e3.state = JSON.parse(e3.state), e3.state.portalUrl && e3.state.uid && (this._oAuthLocationParams = e3, r4 = true);
      } catch {
      }
      else if (e3.error && e3.error_description && (console.log("IdentityManager OAuth Error: ", e3.error, " - ", e3.error_description), "access_denied" === e3.error && (r4 = true, e3.state))) try {
        e3.state = JSON.parse(e3.state);
      } catch {
      }
      if (r4) {
        const t4 = __spreadValues({}, e3);
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((e4) => {
          delete t4[e4];
        });
        const r5 = A(t4), s6 = window.location.pathname + (r5 ? `?${r5}` : "") + (e3.state?.hash || "");
        window.history.replaceState(window.history.state, "", s6);
      }
    }
  }
  _getOAuthToken(e2, r4, s6, i4, n4) {
    return e2 = e2.replace(/^http:/i, "https:"), f(`${e2}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: i4 && n4 ? { grant_type: "authorization_code", code: r4, redirect_uri: i4, client_id: s6, code_verifier: n4 } : { grant_type: "refresh_token", refresh_token: r4, client_id: s6 } }).then((e3) => e3.data);
  }
  async _getCodeChallenge(e2) {
    if (e2 && globalThis.isSecureContext) {
      const t3 = new TextEncoder().encode(e2), r4 = await crypto.subtle.digest("SHA-256", t3);
      return et(new Uint8Array(r4));
    }
    return null;
  }
  _pageShowHandler(e2) {
    if (e2.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const e3 = new r("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(e3);
    }
  }
  _findCredential(e2, t3) {
    let r4, s6, i4, n4, o2 = -1;
    const a4 = t3?.token, h3 = t3?.resource, l4 = this._isServerRsrc(e2) ? "server" : "portal", c3 = this.credentials.filter((t4) => this._hasSameServerInstance(t4.server, e2) && t4.scope === l4);
    if (e2 = h3 || e2, c3.length) if (1 === c3.length) {
      if (r4 = c3[0], i4 = this.findServerInfo(r4.server), s6 = i4?.owningSystemUrl, n4 = s6 ? this.findCredential(s6, r4.userId) : void 0, o2 = this._getIdenticalSvcIdx(e2, r4), !a4) return -1 === o2 && r4.resources.push(e2), this._addResource(e2, n4), r4;
      -1 !== o2 && (r4.resources.splice(o2, 1), this._removeResource(e2, n4));
    } else {
      let t4, r5;
      if (c3.some((a5) => (r5 = this._getIdenticalSvcIdx(e2, a5), -1 !== r5 && (t4 = a5, i4 = this.findServerInfo(t4.server), s6 = i4?.owningSystemUrl, n4 = s6 ? this.findCredential(s6, t4.userId) : void 0, o2 = r5, true))), a4) t4 && (t4.resources.splice(o2, 1), this._removeResource(e2, n4));
      else if (t4) return this._addResource(e2, n4), t4;
    }
  }
  _findOAuthInfo(e2) {
    let t3 = this.findOAuthInfo(e2);
    if (!t3) {
      for (const r4 of this.oAuthInfos) if (this._isIdProvider(r4.portalUrl, e2)) {
        t3 = r4;
        break;
      }
    }
    return t3;
  }
  _addResource(e2, t3) {
    t3 && -1 === this._getIdenticalSvcIdx(e2, t3) && t3.resources.push(e2);
  }
  _removeResource(e2, t3) {
    let r4 = -1;
    t3 && (r4 = this._getIdenticalSvcIdx(e2, t3), r4 > -1 && t3.resources.splice(r4, 1));
  }
  _useProxy(e2, t3) {
    return t3?.isAdmin && !F(e2.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e2.tokenServiceUrl) && "10.1" === String(e2.currentVersion) && !F(e2.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e2) {
    const t3 = new x(e2);
    return t3.scheme + "://" + t3.host + (null != t3.port ? ":" + t3.port : "");
  }
  _getServerInstanceRoot(e2) {
    const t3 = e2.toLowerCase();
    let r4 = t3.indexOf(this._agsRest);
    return -1 === r4 && this._isAdminResource(e2) && (r4 = this._agsAdmin.test(e2) ? e2.replace(this._agsAdmin, "$1").length : e2.search(this._adminSvcs)), -1 !== r4 || a3(t3) || (r4 = t3.indexOf("/sharing")), -1 === r4 && t3.endsWith("/") && (r4 = t3.length - 1), r4 > -1 ? e2.slice(0, r4) : e2;
  }
  _hasSameServerInstance(e2, t3) {
    return e2.endsWith("/") && (e2 = e2.slice(0, -1)), e2 = e2.toLowerCase(), t3 = this._getServerInstanceRoot(t3).toLowerCase(), e2 = r3(e2), t3 = r3(t3), (e2 = e2.slice(Math.max(0, e2.indexOf(":")))) === (t3 = t3.slice(Math.max(0, t3.indexOf(":"))));
  }
  _sanitizeUrl(t3) {
    const r4 = (s.request.proxyUrl || "").toLowerCase(), s6 = r4 ? t3.toLowerCase().indexOf(r4 + "?") : -1;
    return -1 !== s6 && (t3 = t3.slice(s6 + r4.length + 1)), t3 = K(t3), I(t3).path;
  }
  _isRESTService(e2) {
    return e2.includes(this._agsRest);
  }
  _isAdminResource(e2) {
    return this._agsAdmin.test(e2) || this._adminSvcs.test(e2);
  }
  _isServerRsrc(e2) {
    return this._isRESTService(e2) || this._isAdminResource(e2);
  }
  _isIdenticalService(e2, t3) {
    let r4 = false;
    if (this._isRESTService(e2) && this._isRESTService(t3)) {
      const s6 = this._getSuffix(e2).toLowerCase(), i4 = this._getSuffix(t3).toLowerCase();
      if (r4 = s6 === i4, !r4) {
        const e3 = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r4 = s6.replaceAll(e3, "$1") === i4.replaceAll(e3, "$1");
      }
    } else this._isAdminResource(e2) && this._isAdminResource(t3) ? r4 = true : this._isServerRsrc(e2) || this._isServerRsrc(t3) || !this._isPortalDomain(e2) || (r4 = true);
    return r4;
  }
  _isPortalDomain(t3) {
    const r4 = new x(t3.toLowerCase()), s6 = this._portalConfig;
    let i4 = this._gwDomains.some((e2) => e2.regex.test(r4.uri));
    return !i4 && s6 && (i4 = this._hasSameServerInstance(this._getServerInstanceRoot(s6.restBaseUrl), r4.uri)), i4 || s.portalUrl && (i4 = F(r4, s.portalUrl, true)), i4 || (i4 = this._portals.some((e2) => this._hasSameServerInstance(e2, r4.uri))), i4 = i4 || this._agsPortal.test(r4.path), i4;
  }
  _isIdProvider(e2, t3) {
    let r4 = -1, s6 = -1;
    this._gwDomains.forEach((i5, n4) => {
      -1 === r4 && i5.regex.test(e2) && (r4 = n4), -1 === s6 && i5.regex.test(t3) && (s6 = n4);
    });
    let i4 = false;
    if (r4 > -1 && s6 > -1 && (0 === r4 || 4 === r4 ? 0 !== s6 && 4 !== s6 || (i4 = true) : 1 === r4 ? 1 !== s6 && 2 !== s6 || (i4 = true) : 2 === r4 ? 2 === s6 && (i4 = true) : 3 === r4 && 3 === s6 && (i4 = true)), !i4) {
      const r5 = this.findServerInfo(t3), s7 = r5?.owningSystemUrl;
      s7 && O2(r5) && this._isPortalDomain(s7) && this._isIdProvider(e2, s7) && (i4 = true);
    }
    return i4;
  }
  _getIdenticalSvcIdx(e2, t3) {
    let r4 = -1;
    for (let s6 = 0; s6 < t3.resources.length; s6++) {
      const i4 = t3.resources[s6];
      if (this._isIdenticalService(e2, i4)) {
        r4 = s6;
        break;
      }
    }
    return r4;
  }
  _getSuffix(e2) {
    return e2.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e2) {
    let r4, s6, i4;
    if (this._isRESTService(e2) || this._isAdminResource(e2)) {
      const i5 = this._getServerInstanceRoot(e2);
      return r4 = i5 + "/admin/generateToken", s6 = f(e2 = i5 + "/rest/info", { query: { f: "json" } }).then((e3) => e3.data), { adminUrl: r4, promise: s6 };
    }
    if (this._isPortalDomain(e2)) {
      let t3 = "";
      if (this._gwDomains.some((r5) => (r5.regex.test(e2) && (t3 = r5.tokenServiceUrl), !!t3)), t3 || this._portals.some((r5) => (this._hasSameServerInstance(r5, e2) && (t3 = r5 + this._gwTokenUrl), !!t3)), t3 || (i4 = e2.toLowerCase().indexOf("/sharing"), -1 !== i4 && (t3 = e2.slice(0, i4) + this._gwTokenUrl)), t3 || (t3 = this._getOrigin(e2) + this._gwTokenUrl), t3) {
        const r5 = new x(e2).port;
        /^http:\/\//i.test(e2) && "7080" === r5 && (t3 = t3.replace(/:7080/i, ":7443")), t3 = t3.replace(/http:/i, "https:");
      }
      return t3;
    }
  }
  _processOAuthResponseParams(e2, t3, r4) {
    const s6 = t3._oAuthCred;
    if (e2.code) {
      const i5 = s6.codeVerifier;
      return s6.codeVerifier = null, s6.stateUID = null, s6.save(), this._getOAuthToken(r4.server, e2.code, t3.appId, this._getRedirectURI(t3, true), i5).then((i6) => {
        const n4 = new n2({ userId: i6.username, server: r4.server ?? void 0, token: i6.access_token, expires: Date.now() + 1e3 * i6.expires_in, ssl: i6.ssl, oAuthState: e2.state, _oAuthCred: s6 });
        return t3.userId = n4.userId, s6.storage = i6.persist ? R : C, s6.refreshToken = i6.refresh_token, s6.token = null, s6.expires = i6.refresh_token_expires_in ? Date.now() + 1e3 * i6.refresh_token_expires_in : null, s6.userId = n4.userId, s6.ssl = n4.ssl, s6.save(), n4;
      });
    }
    const i4 = new n2({ userId: e2.username, server: r4.server ?? void 0, token: e2.access_token, expires: Date.now() + 1e3 * Number(e2.expires_in), ssl: "true" === e2.ssl, oAuthState: e2.state, _oAuthCred: s6 });
    return t3.userId = i4.userId, s6.storage = e2.persist ? R : C, s6.refreshToken = null, s6.token = i4.token, s6.expires = i4.expires, s6.userId = i4.userId, s6.ssl = i4.ssl, s6.save(), Promise.resolve(i4);
  }
  _processOAuthPopupParams(e2) {
    const t3 = this._oAuthDfd;
    if (this._oAuthDfd = null, t3) if (clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle?.remove(), e2.error) {
      const s6 = "access_denied" === e2.error, i4 = new r(s6 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", s6 ? "ABORTED" : "OAuth: " + e2.error + " - " + e2.error_description);
      t3.reject(i4);
    } else this._processOAuthResponseParams(e2, t3.oinfo_, t3.sinfo_).then((e3) => {
      t3.resolve(e3);
    }).catch((e3) => {
      t3.reject(e3);
    });
  }
  _setOAuthResponseQueryString(e2) {
    e2 && (e2.startsWith("?") && (e2 = e2.slice(1)), this._processOAuthPopupParams(W(e2)));
  }
  async _exchangeToken(e2, r4, s6) {
    return (await f(`${e2}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: r4, token: s6 } })).data.token;
  }
  async _getPlatformSelf(e2, r4) {
    if (this._getPlatformSelfError && Date.now() - this._getPlatformSelfError[1] < 1e3) throw this._getPlatformSelfError[0];
    e2 = e2.replace(/^http:/i, "https:");
    try {
      const s6 = await f(`${e2}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": r4, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: true });
      return this._getPlatformSelfError = null, s6.data;
    } catch (s6) {
      throw "OAUTH_0066" === s6.details?.messageCode && (this._getPlatformSelfError = [s6, Date.now()]), s6;
    }
  }
  _getPortalSelf(e2, r4) {
    let s6;
    if (this._gwDomains.some((t3) => (t3.regex.test(e2) && (s6 = t3.customBaseUrl), !!s6)), s6) return Promise.resolve({ allSSL: true, currentVersion: "8.4", customBaseUrl: s6, portalMode: "multitenant", supportsOAuth: true });
    this._appOrigin.startsWith("https:") ? e2 = e2.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(r4) && (e2 = e2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return f(e2, { query: { f: "json" }, authMode: "anonymous", withCredentials: true }).then((e3) => e3.data);
  }
  _doPortalSignIn(e2) {
    const t3 = this._portalConfig, r4 = window.location.href, s6 = this.findServerInfo(e2);
    return !(!t3 && !this._isPortalDomain(r4) || !(s6 ? s6.hasPortal || s6.owningSystemUrl && this._isPortalDomain(s6.owningSystemUrl) : this._isPortalDomain(e2)) || !(this._isIdProvider(r4, e2) || t3 && (this._hasSameServerInstance(this._getServerInstanceRoot(t3.restBaseUrl), e2) || this._isIdProvider(t3.restBaseUrl, e2)) || F(r4, e2, true)));
  }
  _checkProtocol(e2, t3, s6, i4) {
    let n4 = true;
    const o2 = i4 ? t3.adminTokenServiceUrl : t3.tokenServiceUrl;
    if (o2.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && H(o2) && (n4 = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e2, serverInfo: t3 }), !n4)) {
      s6(new r("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return n4;
  }
  _enqueue(e2, t3, r4, s6, i4, n4) {
    return s6 || (s6 = $()), s6.resUrl_ = e2, s6.sinfo_ = t3, s6.options_ = r4, s6.admin_ = i4, s6.refresh_ = n4, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e2), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s6)) : this._xoReqs.push(s6) : this._doSignIn(s6), s6.promise;
  }
  _doSignIn(e2) {
    this._busy = e2, this._rejectOnPersistedPageShow = false;
    const t3 = (t4) => {
      const r4 = e2.options_?.resource, s7 = e2.resUrl_, i4 = e2.refresh_;
      let n5 = false;
      this.credentials.includes(t4) || (i4 && this.credentials.includes(i4) ? (i4.userId = t4.userId, i4.token = t4.token, i4.expires = t4.expires, i4.validity = t4.validity, i4.ssl = t4.ssl, i4.creationTime = t4.creationTime, n5 = true, t4 = i4) : this.credentials.push(t4)), t4.resources || (t4.resources = []), t4.resources.includes(r4 || s7) || t4.resources.push(r4 || s7), t4.scope = this._isServerRsrc(s7) ? "server" : "portal", t4.emitTokenChange();
      const o2 = this._soReqs, a5 = {};
      this._soReqs = [], o2.forEach((e3) => {
        if (!this._isIdenticalService(s7, e3.resUrl_)) {
          const r5 = this._getSuffix(e3.resUrl_);
          a5[r5] || (a5[r5] = true, t4.resources.push(e3.resUrl_));
        }
      }), e2.resolve(t4), o2.forEach((e3) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(s7), e3.resUrl_) ? e3.resolve(t4) : this._soReqs.push(e3);
      }), this._busy = e2.resUrl_ = e2.sinfo_ = e2.refresh_ = null, n5 || this.emit("credential-create", { credential: t4 }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s6 = (t4) => {
      e2.reject(t4), this._busy = e2.resUrl_ = e2.sinfo_ = e2.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, n4 = (o2, a5, l5, c4) => {
      const u3 = e2.sinfo_, p3 = !e2.options_ || false !== e2.options_.prompt, _2 = u3.hasPortal && this._findOAuthInfo(e2.resUrl_);
      let f2, g;
      if (o2) t3(new n2({ userId: o2, server: u3.server ?? void 0, token: l5 ?? void 0, expires: null != c4 ? Number(c4) : null, ssl: !!a5 }));
      else if (window !== window.parent && this._appUrlObj.query?.["arcgis-auth-origin"] && this._appUrlObj.query?.["arcgis-auth-portal"] && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e2.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const n5 = o(window, "message", (e3) => {
          e3.source === window.parent && e3.data && ("arcgis:auth:credential" === e3.data.type ? (n5.remove(), e3.data.credential.expires < Date.now() ? s6(new r("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t3(new n2(e3.data.credential))) : "arcgis:auth:error" === e3.data.type && (n5.remove(), "tokenExpiredError" === e3.data.error.name ? s6(new r("identity-manager:credential-request-failed", "Parent application's token has expired.")) : s6(r.fromJSON(e3.data.error))));
        });
        w(e2.options_?.signal, () => {
          n5.remove();
        });
      } else if (_2) {
        let i4 = _2._oAuthCred;
        if (!i4) {
          const e3 = new s4(_2, R), t4 = new s4(_2, C);
          e3.isValid() && t4.isValid() ? e3.expires > t4.expires ? (i4 = e3, t4.destroy()) : (i4 = t4, e3.destroy()) : i4 = e3.isValid() ? e3 : t4, _2._oAuthCred = i4;
        }
        if (i4.isValid()) {
          f2 = new n2({ userId: i4.userId ?? void 0, server: u3.server ?? void 0, token: i4.token ?? void 0, expires: i4.expires, ssl: i4.ssl ?? void 0, _oAuthCred: i4 });
          const r4 = _2.appId !== i4.appId && this._doPortalSignIn(e2.resUrl_);
          r4 || i4.refreshToken ? (e2._pendingDfd = i4.refreshToken ? this._getOAuthToken(u3.server, i4.refreshToken, i4.appId).then((e3) => (f2.expires = Date.now() + 1e3 * e3.expires_in, f2.token = e3.access_token, f2)) : Promise.resolve(f2), e2._pendingDfd.then((e3) => r4 ? this._exchangeToken(e3.server, _2.appId, e3.token).then((t4) => (e3.token = t4, e3)).catch(() => e3) : e3).then((e3) => {
            t3(e3);
          }).catch((e3) => {
            const t4 = e3.details?.httpStatus;
            t4 > 0 && 404 !== t4 ? (i4.destroy(), n4()) : s6(e3);
          })) : t3(f2);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(_2.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === i4.stateUID && i4.codeVerifier)) {
          const r4 = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e2._pendingDfd = this._processOAuthResponseParams(r4, _2, u3).then((e3) => {
            t3(e3);
          }).catch(s6);
        } else {
          const i5 = () => {
            p3 ? e2._pendingDfd = this.oAuthSignIn(e2.resUrl_, u3, _2, e2.options_).then(t3, s6) : (g = new r("identity-manager:not-authenticated", "User is not signed in."), s6(g));
          };
          this._doPortalSignIn(e2.resUrl_) ? e2._pendingDfd = this._getPlatformSelf(u3.server, _2.appId).then((e3) => {
            F(e3.portalUrl, this._appOrigin, true) ? (f2 = new n2({ userId: e3.username, server: u3.server ?? void 0, expires: Date.now() + 1e3 * e3.expires_in, token: e3.token }), t3(f2)) : i5();
          }).catch(i5) : i5();
        }
      } else if (p3) {
        if (this._checkProtocol(e2.resUrl_, u3, s6, e2.admin_)) {
          let r4 = e2.options_;
          e2.admin_ && (r4 = r4 || {}, r4.isAdmin = true), e2._pendingDfd = this.signIn(e2.resUrl_, u3, r4).then(t3, s6);
        }
      } else g = new r("identity-manager:not-authenticated", "User is not signed in."), s6(g);
    }, a4 = () => {
      const r4 = e2.sinfo_, i4 = r4.owningSystemUrl, n5 = e2.options_;
      let o2, a5, h3, l5;
      if (n5 && (o2 = n5.token, a5 = n5.error, h3 = n5.prompt), l5 = this._findCredential(i4, { token: o2, resource: e2.resUrl_ }), !l5) {
        for (const e3 of this.credentials) if (this._isIdProvider(i4, e3.server)) {
          l5 = e3;
          break;
        }
      }
      if (l5) {
        const i5 = this.findCredential(e2.resUrl_, l5.userId);
        if (i5) t3(i5);
        else if (T(r4, this._legacyFed)) {
          const e3 = l5.toJSON();
          e3.server = r4.server, e3.resources = null, t3(new n2(e3));
        } else {
          (e2._pendingDfd = this.generateToken(this.findServerInfo(l5.server), null, { serverUrl: e2.resUrl_, token: l5.token, signal: e2.options_.signal, ssl: l5.ssl })).then((s7) => {
            t3(new n2({ userId: l5?.userId, server: r4.server ?? void 0, token: s7.token, expires: null != s7.expires ? Number(s7.expires) : null, ssl: !!s7.ssl, isAdmin: e2.admin_, validity: s7.validity }));
          }, s6);
        }
      } else {
        this._busy = null, o2 && (e2.options_.token = null);
        (e2._pendingDfd = this.getCredential(i4.replace(/\/?$/, "/sharing"), { resource: e2.resUrl_, owningTenant: r4.owningTenant, signal: e2.options_.signal, token: o2, error: a5, prompt: h3 })).then(() => {
          this._enqueue(e2.resUrl_, e2.sinfo_, e2.options_, e2, e2.admin_);
        }, (t4) => {
          e2.resUrl_ = e2.sinfo_ = e2.refresh_ = null, e2.reject(t4);
        });
      }
    };
    this._errbackFunc = s6;
    const l4 = e2.sinfo_.owningSystemUrl, c3 = this._isServerRsrc(e2.resUrl_), u2 = e2.sinfo_._restInfoPms;
    u2 ? u2.promise.then((t4) => {
      const r4 = e2.sinfo_;
      if (r4._restInfoPms) {
        r4.adminTokenServiceUrl = r4._restInfoPms.adminUrl, r4._restInfoPms = null, r4.tokenServiceUrl = (t("authInfo.tokenServicesUrl", t4) || t("authInfo.tokenServiceUrl", t4) || t("tokenServiceUrl", t4)) ?? null, r4.shortLivedTokenValidity = t("authInfo.shortLivedTokenValidity", t4) ?? null, r4.currentVersion = t4.currentVersion, r4.owningTenant = t4.owningTenant;
        const e3 = r4.owningSystemUrl = t4.owningSystemUrl;
        e3 && this._portals.push(e3);
      }
      c3 && r4.owningSystemUrl ? a4() : n4();
    }, () => {
      e2.sinfo_._restInfoPms = null;
      const t4 = new r("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      s6(t4);
    }) : c3 && l4 ? a4() : e2.sinfo_._selfReq ? e2.sinfo_._selfReq.selfDfd.then((t4) => {
      const r4 = {};
      let s7, i4, n5, o2;
      return t4 && (s7 = t4.user?.username, r4.username = s7, r4.allSSL = t4.allSSL, i4 = t4.supportsOAuth, o2 = parseFloat(t4.currentVersion), "multitenant" === t4.portalMode && (n5 = t4.customBaseUrl), e2.sinfo_.currentVersion = o2), e2.sinfo_.webTierAuth = !!s7, s7 && this.normalizeWebTierAuth ? this.generateToken(e2.sinfo_, null, { ssl: r4.allSSL }).catch(() => null).then((e3) => (r4.portalToken = e3?.token, r4.tokenExpiration = e3?.expires, r4)) : !s7 && i4 && o2 >= 4.4 && !this._findOAuthInfo(e2.resUrl_) ? this._generateOAuthInfo({ portalUrl: e2.sinfo_.server, customBaseUrl: n5, owningTenant: e2.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => r4) : r4;
    }).catch(() => null).then((t4) => {
      e2.sinfo_._selfReq = null, t4 ? n4(t4.username, t4.allSSL, t4.portalToken, t4.tokenExpiration) : n4();
    }) : n4();
  }
  _generateOAuthInfo(e2) {
    let r4, s6 = null, i4 = e2.portalUrl;
    const n4 = e2.customBaseUrl, o2 = e2.owningTenant, a4 = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (a4) {
      s6 = this._appUrlObj.path;
      const e3 = s6.search(/\/(apps|home)\//);
      s6 = e3 > -1 ? s6.slice(0, e3) : null;
    }
    return a4 && s6 ? (this._hasTestedIfAppIsOnPortal = true, r4 = f(s6 + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new s5({ appId: "arcgisonline", popupCallbackUrl: s6 + "/home/oauth-callback.html" });
    })) : r4 = Promise.resolve(), r4.then(() => {
      if (this._defaultOAuthInfo) return i4 = i4.replace(/^http:/i, "https:"), f(i4 + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: o2, client_id: this._defaultOAuthInfo.appId, redirect_uri: _(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((e3) => {
        if (e3.data.valid) {
          const t3 = this._defaultOAuthInfo.clone();
          e3.data.urlKey && n4 ? t3.portalUrl = "https://" + e3.data.urlKey.toLowerCase() + "." + n4 : t3.portalUrl = i4, t3.popup = window !== window.top || !(F(i4, this._appOrigin) || this._gwDomains.some((e4) => e4.regex.test(i4) && e4.regex.test(this._appOrigin))), this.oAuthInfos.push(t3);
        }
      });
    });
  }
  _doOAuthSignIn(e2, t3, s6, n4) {
    const o2 = s6._oAuthCred, a4 = { portalUrl: s6.portalUrl };
    !s6.popup && s6.preserveUrlHash && window.location.hash && (a4.hash = window.location.hash), o2.stateUID && (a4.uid = o2.stateUID);
    const h3 = { client_id: s6.appId, response_type: o2.codeVerifier ? "code" : "token", state: JSON.stringify(a4), expiration: s6.expiration, locale: s6.locale, redirect_uri: this._getRedirectURI(s6, !!o2.codeVerifier) };
    s6.forceLogin && (h3.force_login = true), s6.forceUserId && s6.userId && (h3.prepopulatedusername = s6.userId), !s6.popup && this._doPortalSignIn(e2) && (h3.redirectToUserOrgUrl = true), o2.codeVerifier && (h3.code_challenge = n4 || o2.codeVerifier, h3.code_challenge_method = n4 ? "S256" : "plain");
    const l4 = s6.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", c3 = l4 + "?" + A(h3);
    if (s6.popup) {
      const e3 = window.open(c3, "esriJSAPIOAuth", s6.popupWindowFeatures);
      if (e3) e3.focus(), this._oAuthDfd.oAuthWin_ = e3, this._oAuthIntervalId = setInterval(() => {
        if (e3.closed) {
          clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
          const e4 = this._oAuthDfd;
          if (e4) {
            const t4 = new r("identity-manager:user-aborted", "ABORTED");
            e4.reject(t4);
          }
        }
      }, 500), this._oAuthOnPopupHandle = o(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (e4) => {
        "arcgis:auth:hash" === e4.type ? this.setOAuthResponseHash(e4.detail) : this._setOAuthResponseQueryString(e4.detail);
      });
      else {
        const e4 = new r("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e4);
      }
    } else this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h3, authorizeUrl: l4, resourceUrl: e2, serverInfo: t3, oAuthInfo: s6 }) : window.location.href = c3;
  }
  _getRedirectURI(e2, t3) {
    const r4 = window.location.href.replace(/#.*$/, "");
    if (e2.popup) return _(e2.popupCallbackUrl);
    if (t3) {
      const e3 = I(r4);
      return e3.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((t4) => {
        delete e3.query[t4];
      }), Bt(e3.path, e3.query);
    }
    return r4;
  }
};
D.prototype.declaredClass = "esri.identity.IdentityManagerBase";

// node_modules/@arcgis/core/identity/IdentityManager.js
var t2 = new D();
i(t2);
export {
  t2 as default
};
//# sourceMappingURL=IdentityManager-E2ZAECLM.js.map
