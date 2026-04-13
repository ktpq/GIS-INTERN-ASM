import {
  u as u4
} from "./chunk-HJMMRQXJ.js";
import {
  i
} from "./chunk-6TF3NI7G.js";
import {
  m,
  u as u3
} from "./chunk-LOVQ4LFC.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  y
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  f2,
  s2 as s3
} from "./chunk-2F6BRQJJ.js";
import {
  a as a3,
  n
} from "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a4,
  c,
  o4 as o2,
  w
} from "./chunk-JM4CKTH2.js";
import {
  o
} from "./chunk-SZXJF3IE.js";
import {
  a as a2,
  f2 as f,
  l,
  s as s2,
  u,
  u3 as u2
} from "./chunk-WARIPJQI.js";
import {
  a,
  has,
  r3 as r,
  s2 as s
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/portal/portalDefault.js
var t;
function n2(e2) {
  return t && !t.destroyed || (t = e2()), t;
}

// node_modules/@arcgis/core/portal/PortalQueryParams.js
var u5;
var m2 = new o({ avgRating: "avg-rating", numRatings: "num-ratings", numComments: "num-comments", numViews: "num-views" });
var p = u5 = class extends b {
  constructor(t2) {
    super(t2), this.categories = null, this.disableExtraQuery = false, this.extent = null, this.filter = null, this.num = 10, this.query = null, this.sortField = null, this.start = 1;
  }
  get sortOrder() {
    return this._get("sortOrder") || "asc";
  }
  set sortOrder(t2) {
    "asc" !== t2 && "desc" !== t2 || this._set("sortOrder", t2);
  }
  clone() {
    return new u5({ categories: this.categories ? a(this.categories) : null, disableExtraQuery: this.disableExtraQuery, extent: this.extent ? this.extent.clone() : null, filter: this.filter, num: this.num, query: this.query, sortField: this.sortField, sortOrder: this.sortOrder, start: this.start });
  }
  toRequestOptions(t2, r2) {
    let e2 = [];
    this.categories && (e2 = this.categories.map((t3) => Array.isArray(t3) ? JSON.stringify(t3) : t3));
    let s5 = "";
    if (this.extent) {
      const t3 = y(this.extent, S.WGS84);
      null != t3 && (s5 = `${t3.xmin},${t3.ymin},${t3.xmax},${t3.ymax}`);
    }
    let o3 = this.query;
    !this.disableExtraQuery && t2.extraQuery && (o3 = "(" + o3 + ")" + t2.extraQuery);
    const i2 = { categories: e2, bbox: s5, q: o3, filter: this.filter, num: this.num, sortField: null, sortOrder: null, start: this.start };
    return this.sortField && (i2.sortField = this.sortField.split(",").map((t3) => m2.toJSON(t3.trim())).join(","), i2.sortOrder = this.sortOrder), { query: __spreadValues(__spreadValues({}, r2), i2) };
  }
};
__decorate([a4()], p.prototype, "categories", void 0), __decorate([a4()], p.prototype, "disableExtraQuery", void 0), __decorate([a4({ type: z })], p.prototype, "extent", void 0), __decorate([a4()], p.prototype, "filter", void 0), __decorate([a4()], p.prototype, "num", void 0), __decorate([a4()], p.prototype, "query", void 0), __decorate([a4()], p.prototype, "sortField", void 0), __decorate([a4()], p.prototype, "sortOrder", null), __decorate([a4()], p.prototype, "start", void 0), p = u5 = __decorate([c("esri.portal.PortalQueryParams")], p);

// node_modules/@arcgis/core/portal/PortalGroup.js
var l2;
var u6 = l2 = class extends n {
  constructor(t2) {
    super(t2), this.access = null, this.created = null, this.description = null, this.id = null, this.isInvitationOnly = false, this.modified = null, this.owner = null, this.portal = null, this.snippet = null, this.sortField = null, this.sortOrder = null, this.sourceJSON = null, this.tags = null, this.title = null;
  }
  get thumbnailUrl() {
    const t2 = this.url, r2 = this.thumbnail;
    return t2 && r2 && this.portal ? this.portal?.normalizeUrl(`${t2}/info/${r2}?f=json`) : null;
  }
  get url() {
    const t2 = this.portal?.restUrl;
    return t2 ? t2 + "/community/groups/" + this.id : null;
  }
  fetchCategorySchema(t2) {
    return this.portal.request(this.url + "/categorySchema", t2).then((r2) => {
      const e2 = r2.categorySchema || [];
      return e2.some((t3) => "contentCategorySetsGroupQuery.LivingAtlas" === t3.source) ? this._fetchCategorySchemaSet("LivingAtlas", t2) : e2;
    });
  }
  fetchMembers(t2) {
    return this.portal.request(this.url + "/users", t2);
  }
  getThumbnailUrl(t2) {
    let r2 = this.thumbnailUrl;
    return r2 && t2 && (r2 += `&w=${t2}`), r2;
  }
  toJSON() {
    throw new r("internal:not-yet-implemented", "PortalGroup.toJSON is not yet implemented");
  }
  static fromJSON(t2) {
    if (!t2) return null;
    if (t2.declaredClass) throw new Error("JSON object is already hydrated");
    const r2 = new l2({ sourceJSON: t2 });
    return r2.read(t2), r2;
  }
  queryItems(t2, r2) {
    let e2 = w(p, t2);
    const o3 = this.portal;
    return parseFloat(o3.currentVersion) > 5 ? (e2 = e2 || new p(), o3.queryPortal(`/content/groups/${this.id}/search`, e2, "PortalItem", r2)) : (e2 = e2 ? e2.clone() : new p(), e2.query = "group:" + this.id + (e2.query ? " " + e2.query : ""), o3.queryItems(e2, r2));
  }
  _fetchCategorySchemaSet(t2, e2) {
    const o3 = this.portal;
    return o3.fetchSelf(o3.authMode, true, e2).then((t3) => {
      const s5 = t3.contentCategorySetsGroupQuery;
      if (s5) {
        const t4 = new p({ disableExtraQuery: true, num: 1, query: s5 });
        return o3.queryGroups(t4, e2);
      }
      throw new r("portal-group:fetchCategorySchema", "contentCategorySetsGroupQuery value not found");
    }).then((o4) => {
      if (o4.total) {
        const r2 = o4.results[0], s5 = new p({ num: 1, query: `typekeywords:"${t2}"` });
        return r2.queryItems(s5, e2);
      }
      throw new r("portal-group:fetchCategorySchema", "contentCategorySetsGroupQuery group not found");
    }).then((t3) => {
      if (t3.total) {
        return t3.results[0].fetchData("json", e2).then((t4) => {
          const r2 = t4?.categorySchema;
          return r2?.length ? r2 : [];
        });
      }
      return [];
    });
  }
};
__decorate([a4()], u6.prototype, "access", void 0), __decorate([a4({ type: Date })], u6.prototype, "created", void 0), __decorate([a4()], u6.prototype, "description", void 0), __decorate([a4()], u6.prototype, "id", void 0), __decorate([a4()], u6.prototype, "isInvitationOnly", void 0), __decorate([a4({ type: Date })], u6.prototype, "modified", void 0), __decorate([a4()], u6.prototype, "owner", void 0), __decorate([a4()], u6.prototype, "portal", void 0), __decorate([a4()], u6.prototype, "snippet", void 0), __decorate([a4()], u6.prototype, "sortField", void 0), __decorate([a4()], u6.prototype, "sortOrder", void 0), __decorate([a4()], u6.prototype, "sourceJSON", void 0), __decorate([a4()], u6.prototype, "tags", void 0), __decorate([a4()], u6.prototype, "thumbnail", void 0), __decorate([a4({ readOnly: true })], u6.prototype, "thumbnailUrl", null), __decorate([a4()], u6.prototype, "title", void 0), __decorate([a4({ readOnly: true })], u6.prototype, "url", null), u6 = l2 = __decorate([c("esri.portal.PortalGroup")], u6);

// node_modules/@arcgis/core/portal/PortalQueryResult.js
var e = class extends b {
  constructor(r2) {
    super(r2), this.nextQueryParams = null, this.queryParams = null, this.results = null, this.total = null;
  }
};
__decorate([a4()], e.prototype, "nextQueryParams", void 0), __decorate([a4()], e.prototype, "queryParams", void 0), __decorate([a4()], e.prototype, "results", void 0), __decorate([a4()], e.prototype, "total", void 0), e = __decorate([c("esri.portal.PortalQueryResult")], e);

// node_modules/@arcgis/core/portal/PortalFolder.js
var s4 = class extends n {
  constructor(t2) {
    super(t2), this.created = null, this.id = null, this.portal = null, this.title = null, this.username = null;
  }
  get url() {
    const t2 = this.portal?.restUrl;
    return t2 ? `${t2}/content/users/${this.username}/${this.id}` : null;
  }
  toJSON() {
    throw new r("internal:not-yet-implemented", "PortalFolder.toJSON is not yet implemented");
  }
};
__decorate([a4({ type: Date })], s4.prototype, "created", void 0), __decorate([a4()], s4.prototype, "id", void 0), __decorate([a4()], s4.prototype, "portal", void 0), __decorate([a4()], s4.prototype, "title", void 0), __decorate([a4({ readOnly: true })], s4.prototype, "url", null), __decorate([a4()], s4.prototype, "username", void 0), s4 = __decorate([c("esri.portal.PortalFolder")], s4);

// node_modules/@arcgis/core/portal/PortalUser.js
var n3;
var u7 = n3 = class extends n {
  constructor(t2) {
    super(t2), this.access = null, this.created = null, this.culture = null, this.description = null, this.email = null, this.fullName = null, this.id = null, this.modified = null, this.orgId = null, this.portal = null, this.preferredView = null, this.privileges = null, this.region = null, this.role = null, this.roleId = null, this.sourceJSON = null, this.units = null, this.username = null, this.userLicenseTypeId = null, this.userType = null;
  }
  get thumbnailUrl() {
    const t2 = this.url, e2 = this.thumbnail;
    return t2 && e2 ? this.portal.normalizeUrl(`${t2}/info/${e2}?f=json`) : null;
  }
  get userContentUrl() {
    const t2 = this.portal?.restUrl;
    return t2 ? `${t2}/content/users/${this.id}` : null;
  }
  get url() {
    const t2 = this.portal?.restUrl;
    return t2 ? `${t2}/community/users/${this.id}` : null;
  }
  addItem(t2) {
    const e2 = t2 && t2.item, r2 = t2?.data, o3 = t2?.folder, l3 = { method: "post" };
    e2 && (l3.query = e2.createPostQuery(), null != r2 && ("string" == typeof r2 ? l3.query.text = r2 : "object" == typeof r2 && (l3.query.text = JSON.stringify(r2))));
    let s5 = this.userContentUrl;
    return o3 && (s5 += "/" + ("string" == typeof o3 ? o3 : o3.id)), this.portal.request(s5 + "/addItem", l3).then((t3) => (e2.id = t3.id, e2.portal = this.portal, e2.loaded ? e2.reload() : e2.load()));
  }
  async deleteItem(t2, e2 = false) {
    let r2 = this.userContentUrl;
    t2.ownerFolder && (r2 += "/" + t2.ownerFolder);
    const o3 = e2 ? { permanentDelete: true } : {};
    await this.portal.request(r2 + `/items/${t2.id}/delete`, { method: "post", query: o3 }), t2.id = null, t2.portal = null;
  }
  async deleteItems(t2, r2 = false) {
    t2 = t2.slice();
    const o3 = this.userContentUrl + "/deleteItems", l3 = [], s5 = t2.map((t3) => t3.id);
    if (s5.length) {
      const i2 = { method: "post", query: { items: s5.join(","), permanentDelete: r2 } }, n4 = await this.portal.request(o3, i2);
      for (const r3 of n4.results) {
        const o4 = t2.find((t3) => r3.itemId === t3.id), s6 = r3.success;
        let i3 = null;
        s6 ? (o4.id = null, o4.portal = null) : r3.error && (i3 = new r("portal:delete-item-failed", r3.error.message, r3.error)), l3.push({ item: o4, success: s6, error: i3 });
      }
    }
    return l3;
  }
  fetchFolders() {
    const t2 = { query: { num: 1 } };
    return this.portal.request(this.userContentUrl ?? "", t2).then((t3) => {
      let e2;
      return e2 = t3 && t3.folders ? t3.folders.map((t4) => {
        const e3 = s4.fromJSON(t4);
        return e3.portal = this.portal, e3;
      }) : [], e2;
    });
  }
  fetchGroups() {
    return this.portal.request(this.url ?? "").then((t2) => {
      let e2;
      return e2 = t2 && t2.groups ? t2.groups.map((t3) => {
        const e3 = u6.fromJSON(t3);
        return e3.portal = this.portal, e3;
      }) : [], e2;
    });
  }
  async fetchItems(t2) {
    t2 ??= {};
    let e2 = this.userContentUrl ?? "";
    t2.folder && (e2 += "/" + t2.folder.id);
    const { default: r2 } = await import("./PortalItem-JLZ52UWD.js"), o3 = { folders: false, inRecycleBin: !!t2.inRecycleBin || null, foldersContent: !(t2.folder || !t2.includeSubfolderItems) || null, num: t2.num || 10, start: t2.start || 1, sortField: t2.sortField || "created", sortOrder: t2.sortOrder || "asc" }, l3 = await this.portal.request(e2, { query: o3 });
    let s5;
    return l3?.items ? (s5 = l3.items.map((t3) => {
      const e3 = r2.fromJSON(t3);
      return e3.portal = this.portal, e3;
    }), await Promise.all(s5.map((t3) => t3.load())), { items: s5, nextStart: l3.nextStart, total: l3.total }) : { items: [], nextStart: -1, total: 0 };
  }
  fetchTags() {
    return this.portal.request(this.url + "/tags").then((t2) => t2.tags);
  }
  getThumbnailUrl(t2) {
    let e2 = this.thumbnailUrl;
    return e2 && t2 && (e2 += `&w=${t2}`), e2;
  }
  queryFavorites(t2) {
    return this.favGroupId ? (this._favGroup || (this._favGroup = new u6({ id: this.favGroupId, portal: this.portal })), this._favGroup.queryItems(t2)) : Promise.reject(new r("internal:unknown", "Unknown internal error", { internalError: "Unknown favGroupId" }));
  }
  async restoreItem(t2, e2) {
    const r2 = this.userContentUrl, o3 = e2 ? { folderID: "string" == typeof e2 ? e2 : e2.id } : null;
    await this.portal.request(r2 + `/items/${t2.id}/restore`, { method: "post", query: o3 });
  }
  toJSON() {
    throw new r("internal:not-yet-implemented", "PortalUser.toJSON is not yet implemented");
  }
  static fromJSON(t2) {
    if (!t2) return null;
    if (t2.declaredClass) throw new Error("JSON object is already hydrated");
    const e2 = new n3({ sourceJSON: t2 });
    return e2.read(t2), e2;
  }
};
__decorate([a4()], u7.prototype, "access", void 0), __decorate([a4({ type: Date })], u7.prototype, "created", void 0), __decorate([a4()], u7.prototype, "culture", void 0), __decorate([a4()], u7.prototype, "description", void 0), __decorate([a4()], u7.prototype, "email", void 0), __decorate([a4()], u7.prototype, "favGroupId", void 0), __decorate([a4()], u7.prototype, "fullName", void 0), __decorate([a4()], u7.prototype, "id", void 0), __decorate([a4({ type: Date })], u7.prototype, "modified", void 0), __decorate([a4()], u7.prototype, "orgId", void 0), __decorate([a4()], u7.prototype, "portal", void 0), __decorate([a4()], u7.prototype, "preferredView", void 0), __decorate([a4()], u7.prototype, "privileges", void 0), __decorate([a4()], u7.prototype, "region", void 0), __decorate([a4()], u7.prototype, "role", void 0), __decorate([a4()], u7.prototype, "roleId", void 0), __decorate([a4()], u7.prototype, "sourceJSON", void 0), __decorate([a4()], u7.prototype, "thumbnail", void 0), __decorate([a4({ readOnly: true })], u7.prototype, "thumbnailUrl", null), __decorate([a4()], u7.prototype, "units", void 0), __decorate([a4({ readOnly: true })], u7.prototype, "userContentUrl", null), __decorate([a4({ readOnly: true })], u7.prototype, "url", null), __decorate([a4()], u7.prototype, "username", void 0), __decorate([a4()], u7.prototype, "userLicenseTypeId", void 0), __decorate([a4()], u7.prototype, "userType", void 0), u7 = n3 = __decorate([c("esri.portal.PortalUser")], u7);

// node_modules/@arcgis/core/portal/Portal.js
var _;
var b2;
var U = { PortalGroup: () => Promise.resolve({ default: u6 }), PortalItem: () => import("./PortalItem-JLZ52UWD.js"), PortalUser: () => Promise.resolve({ default: u7 }) };
var M = class extends a3(u4) {
  static {
    _ = this;
  }
  static {
    this.AUTH_MODE_ANONYMOUS = "anonymous";
  }
  static {
    this.AUTH_MODE_AUTO = "auto";
  }
  static {
    this.AUTH_MODE_IMMEDIATE = "immediate";
  }
  static {
    this.AUTH_MODE_NO_PROMPT = "no-prompt";
  }
  constructor(e2) {
    super(e2), this._esriIdCredentialCreateHandle = null, this.access = null, this.allSSL = false, this.authMode = "auto", this.authorizedCrossOriginDomains = null, this.basemapGalleryGroupQuery = null, this.basemapGalleryGroupQuery3D = null, this.g3DTilesGalleryGroupQuery = null, this.g3dTilesEnabled = null, this.bingKey = null, this.canListApps = false, this.canListData = false, this.canListPreProvisionedItems = false, this.canProvisionDirectPurchase = false, this.canSearchPublic = true, this.canShareBingPublic = false, this.canSharePublic = false, this.canSignInArcGIS = false, this.canSignInIDP = false, this.colorSetsGroupQuery = null, this.commentsEnabled = false, this.created = null, this.culture = null, this.customBaseUrl = null, this.default3DBasemapQuery = null, this.defaultBasemap = null, this.defaultDevBasemap = null, this.defaultExtent = null, this.defaultVectorBasemap = null, this.description = null, this.devBasemapGalleryGroupQuery = null, this.eueiEnabled = null, this.featuredGroups = null, this.featuredItemsGroupQuery = null, this.galleryTemplatesGroupQuery = null, this.layoutGroupQuery = null, this.livingAtlasGroupQuery = null, this.hasCategorySchema = false, this.hasClassificationSchema = false, this.helperServices = null, this.homePageFeaturedContent = null, this.homePageFeaturedContentCount = null, this.httpPort = null, this.httpsPort = null, this.id = null, this.ipCntryCode = null, this.isPortal = false, this.isReadOnly = false, this.layerTemplatesGroupQuery = null, this.maxTokenExpirationMinutes = null, this.modified = null, this.name = null, this.portalHostname = null, this.portalMode = null, this.portalProperties = null, this.region = null, this.recycleBinEnabled = false, this.rotatorPanels = null, this.showHomePageDescription = false, this.sourceJSON = null, this.supportsHostedServices = false, this.symbolSetsGroupQuery = null, this.templatesGroupQuery = null, this.units = null, this.url = s.portalUrl, this.urlKey = null, this.user = null, this.use3dBasemaps = true, this.useDefault3dBasemap = false, this.useStandardizedQuery = false, this.useVectorBasemaps = false, this.vectorBasemapGalleryGroupQuery = null;
  }
  normalizeCtorArgs(e2) {
    return "string" == typeof e2 ? { url: e2 } : e2;
  }
  destroy() {
    C.unregister(this), this.defaultBasemap = u(this.defaultBasemap), this.defaultDevBasemap = u(this.defaultDevBasemap), this.defaultVectorBasemap = u(this.defaultVectorBasemap), this._esriIdCredentialCreateHandle = l(this._esriIdCredentialCreateHandle);
  }
  readAuthorizedCrossOriginDomains(e2) {
    if (e2) for (const r2 of e2) s.request.trustedServers.includes(r2) || s.request.trustedServers.push(r2);
    return e2;
  }
  readDefaultBasemap(e2) {
    return this._readBasemap(e2);
  }
  readDefaultDevBasemap(e2) {
    return this._readBasemap(e2);
  }
  readDefaultVectorBasemap(e2) {
    return this._readBasemap(e2);
  }
  get extraQuery() {
    const e2 = this.user?.orgId, t2 = !e2 || this.canSearchPublic;
    return this.id && !t2 ? ` AND orgid:${this.id}` : null;
  }
  get hasAPIKey() {
    return m(this.restUrl);
  }
  get isOrganization() {
    return !!this.access;
  }
  get itemPageUrl() {
    return this.url ? `${this.url}/home/item.html` : null;
  }
  get loaded() {
    return super.loaded;
  }
  get restUrl() {
    let e2 = this.url;
    if (e2) {
      const t2 = e2.indexOf("/sharing");
      e2 = t2 > 0 ? e2.slice(0, t2) : this.url.replace(/\/+$/, ""), e2 += "/sharing/rest";
    }
    return e2;
  }
  get thumbnailUrl() {
    const e2 = this.restUrl, t2 = this.thumbnail;
    return e2 && t2 ? this._normalizeSSL(e2 + "/portals/self/resources/" + t2) : null;
  }
  readUrlKey(e2) {
    return e2 ? e2.toLowerCase() : e2;
  }
  readUser(e2) {
    let t2 = null;
    return e2 && (t2 = u7.fromJSON(e2), t2.portal = this), t2;
  }
  load(e2) {
    const t2 = import("./Basemap-QUVZVQYQ.js").then(({ default: t3 }) => {
      s2(e2), b2 = t3;
    }).then(() => this.sourceJSON ? this.sourceJSON : this.fetchSelf(this.authMode, false, e2)).then((e3) => {
      if (!this.hasAPIKey && s3) {
        const e4 = s3;
        this.credential = e4.findCredential(this.restUrl), this.credential || this.authMode !== _.AUTH_MODE_AUTO && this.authMode !== _.AUTH_MODE_NO_PROMPT || (this._esriIdCredentialCreateHandle?.remove(), this._esriIdCredentialCreateHandle = e4.on("credential-create", T(new WeakRef(this))), C.register(this, this._esriIdCredentialCreateHandle, this));
      }
      this.sourceJSON = e3, this.read(e3);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  async createElevationLayers() {
    await this.load();
    const e2 = this._getHelperService("defaultElevationLayers"), t2 = (await import("./ElevationLayer-3KRP4DOT.js")).default;
    return e2 ? e2.map((e3) => new t2({ id: e3.id, url: e3.url })) : [];
  }
  async fetchBasemaps(e2, t2) {
    const r2 = await this._fetchBasemaps(e2, t2);
    if (true === t2?.include3d && false !== this.use3dBasemaps) {
      if (this.g3dTilesEnabled && this.g3DTilesGalleryGroupQuery && has("enable-feature:basemap-groundlayers")) {
        const e3 = await this._fetchBasemaps3D(this.g3DTilesGalleryGroupQuery, t2);
        r2.unshift(...e3);
      }
      const o3 = await this._fetchBasemaps3D(e2, t2);
      r2.unshift(...o3);
    }
    return r2;
  }
  async fetchDefault3DBasemap(e2) {
    if (!this.useDefault3dBasemap || !this.default3DBasemapQuery || "none" === this.default3DBasemapQuery) return null;
    const t2 = new p();
    t2.query = this.default3DBasemapQuery, t2.disableExtraQuery = true;
    const r2 = (await this.queryItems(t2, e2)).results.find((e3) => "Web Scene" === e3.type);
    return r2 ? new b2({ portalItem: r2 }) : null;
  }
  fetchCategorySchema(e2) {
    return this.hasCategorySchema ? this.request(this.restUrl + "/portals/self/categorySchema", e2).then((e3) => e3.categorySchema) : a2(e2) ? Promise.reject(u2()) : Promise.resolve([]);
  }
  async fetchClassificationSchema(e2) {
    return this.hasClassificationSchema ? this.request(this.restUrl + "/portals/self/classification/classificationSchema", e2).then((e3) => e3.classificationSchema) : null;
  }
  fetchFeaturedGroups(e2) {
    const t2 = this.featuredGroups, r2 = new p({ num: 100, sortField: "title" });
    if (t2?.length) {
      const o3 = [];
      for (const e3 of t2) o3.push(`(title:"${e3.title}" AND owner:${e3.owner})`);
      return r2.query = o3.join(" OR "), this.queryGroups(r2, e2).then((e3) => e3.results);
    }
    return a2(e2) ? Promise.reject(u2()) : Promise.resolve([]);
  }
  fetchRegions(e2) {
    const t2 = this.user?.culture || this.culture || i();
    return this.request(this.restUrl + "/portals/regions", __spreadProps(__spreadValues({}, e2), { query: { culture: t2 } }));
  }
  fetchSettings(e2) {
    const t2 = this.user?.culture || this.culture || i();
    return this.request(this.restUrl + "/portals/self/settings", __spreadProps(__spreadValues({}, e2), { query: { culture: t2 } }));
  }
  static getDefault() {
    return n2(() => new _());
  }
  queryGroups(e2, t2) {
    return this.queryPortal("/community/groups", e2, "PortalGroup", t2);
  }
  queryItems(e2, t2) {
    return this.queryPortal("/search", e2, "PortalItem", t2);
  }
  queryUsers(e2, t2) {
    return e2.sortField || (e2.sortField = "username"), this.queryPortal("/community/users", e2, "PortalUser", t2);
  }
  fetchSelf(e2 = this.authMode, t2 = false, r2) {
    const o3 = this.restUrl + "/portals/self", s5 = __spreadValues({ authMode: e2, query: { culture: i().toLowerCase() }, withCredentials: true }, r2);
    return "auto" === s5.authMode && (s5.authMode = "no-prompt"), t2 && (s5.query.default = true), this.request(o3, s5);
  }
  queryPortal(e2, t2, r2, o3) {
    const s5 = w(p, t2), a5 = (t3) => this.request(this.restUrl + e2, __spreadValues(__spreadValues({}, s5.toRequestOptions(this)), o3)).then((e3) => {
      const r3 = s5.clone();
      return r3.start = e3.nextStart, new e({ nextQueryParams: r3, queryParams: s5, total: e3.total, results: _._resultsToTypedArray(t3, { portal: this }, e3, o3) });
    }).then((e3) => Promise.all(e3.results.map((t4) => "function" == typeof t4.when ? t4.when() : e3)).then(() => e3, (t4) => (f(t4), e3)));
    return r2 && U[r2] ? U[r2]().then(({ default: e3 }) => (s2(o3), a5(e3))) : a5();
  }
  signIn() {
    if (this.hasAPIKey) return this.load().then(() => {
      if (!this.user) throw new r("portal:not-authenticated", "Unable to authenticate user. Portal.user is missing");
    });
    if (this.authMode === _.AUTH_MODE_ANONYMOUS || this.authMode === _.AUTH_MODE_NO_PROMPT && !s3) return Promise.reject(new r("portal:invalid-auth-mode", `Current "authMode"' is "${this.authMode}"`));
    if ("failed" === this.loadStatus) return Promise.reject(this.loadError);
    const e2 = (e3) => Promise.resolve().then(() => "not-loaded" === this.loadStatus ? (e3 || (this.authMode = "immediate"), this.load().then(() => null)) : "loading" === this.loadStatus ? this.load().then(() => this.credential ? null : (this.credential = e3, this.fetchSelf("immediate"))) : this.user && this.credential === e3 ? null : (this.credential = e3, this.fetchSelf("immediate"))).then((e4) => {
      e4 && (this.sourceJSON = e4, this.read(e4));
    });
    return s3 ? s3.getCredential(this.restUrl, { prompt: this.authMode !== _.AUTH_MODE_NO_PROMPT }).then((t2) => e2(t2)) : e2(this.credential);
  }
  normalizeUrl(e2) {
    const t2 = this.credential?.token;
    return this._normalizeSSL(t2 ? e2 + (e2.includes("?") ? "&" : "?") + "token=" + t2 : e2);
  }
  requestToTypedArray(e2, t2, r2) {
    return this.request(e2, t2).then((e3) => {
      const t3 = _._resultsToTypedArray(r2, { portal: this }, e3);
      return Promise.all(t3.map((t4) => "function" == typeof t4.when ? t4.when() : e3)).then(() => t3, () => t3);
    });
  }
  request(e2, t2 = {}) {
    const r2 = __spreadValues({ f: "json" }, t2.query), { authMode: s5 = this.authMode === _.AUTH_MODE_ANONYMOUS || this.authMode === _.AUTH_MODE_NO_PROMPT ? this.authMode : "auto", body: a5 = null, cacheBust: i2 = false, method: l3 = "auto", responseType: u8 = "json", signal: n4 } = t2, p2 = { authMode: s5, body: a5, cacheBust: i2, method: l3, query: r2, responseType: u8, timeout: 0, signal: n4 };
    return t2.withCredentials && (p2.withCredentials = true), f2(this._normalizeSSL(e2), p2).then((e3) => e3.data);
  }
  toJSON() {
    throw new r("internal:not-yet-implemented", "Portal.toJSON is not yet implemented");
  }
  static fromJSON(e2) {
    if (!e2) return null;
    if (e2.declaredClass) throw new Error("JSON object is already hydrated");
    return new _({ sourceJSON: e2 });
  }
  _getHelperService(e2) {
    const t2 = this.helperServices?.[e2];
    if (!t2) throw new r("portal:service-not-found", `The \`helperServices\` do not include an entry named "${e2}"`);
    return t2;
  }
  async _fetchBasemaps(e2, t2) {
    const r2 = new p();
    r2.query = e2 || (u3() ? this.devBasemapGalleryGroupQuery : this.useVectorBasemaps ? this.vectorBasemapGalleryGroupQuery : this.basemapGalleryGroupQuery), r2.disableExtraQuery = true;
    const o3 = await this.queryGroups(r2, t2);
    if (!o3.total) return [];
    const s5 = o3.results[0];
    r2.num = 100, r2.query = 'type:"Web Map" -type:"Web Application"', r2.sortField = s5.sortField || "name", r2.sortOrder = s5.sortOrder || "desc";
    const a5 = await s5.queryItems(r2, t2);
    if (!a5.total) return [];
    return a5.results.filter((e3) => "Web Map" === e3.type).map((e3) => new b2({ portalItem: e3 }));
  }
  async _fetchBasemaps3D(e2, t2) {
    const r2 = e2 || this.basemapGalleryGroupQuery3D;
    if (!r2) return [];
    if (u3()) return [];
    const o3 = new p({ query: r2, disableExtraQuery: true }), s5 = await this.queryGroups(o3, t2);
    if (!s5.total) return [];
    const a5 = s5.results[0];
    o3.num = 100, o3.query = 'type:"Web Scene"', o3.sortField = a5.sortField || "name", o3.sortOrder = a5.sortOrder || "desc";
    const i2 = await a5.queryItems(o3, t2);
    if (!i2.total) return [];
    return i2.results.filter((e3) => "Web Scene" === e3.type).map((e3) => new b2({ portalItem: e3 }));
  }
  _normalizeSSL(e2) {
    return e2.replace(/^http:/i, "https:").replace(":7080", ":7443");
  }
  _readBasemap(e2) {
    if (e2) {
      const t2 = b2.fromJSON(e2);
      return t2.portalItem = { portal: this }, t2;
    }
    return null;
  }
  static _resultsToTypedArray(e2, t2, r2, o3) {
    let s5;
    if (r2) {
      const a5 = null != o3 ? o3.signal : null;
      s5 = r2.listings || r2.notifications || r2.userInvitations || r2.tags || r2.items || r2.groups || r2.comments || r2.provisions || r2.results || r2.relatedItems || r2, (e2 || t2) && (s5 = s5.map((r3) => {
        const o4 = Object.assign(e2 ? e2.fromJSON(r3) : r3, t2);
        return "function" == typeof o4.load && o4.load(a5), o4;
      }));
    } else s5 = [];
    return s5;
  }
};
__decorate([a4()], M.prototype, "access", void 0), __decorate([a4()], M.prototype, "allSSL", void 0), __decorate([a4()], M.prototype, "authMode", void 0), __decorate([a4()], M.prototype, "authorizedCrossOriginDomains", void 0), __decorate([o2("authorizedCrossOriginDomains")], M.prototype, "readAuthorizedCrossOriginDomains", null), __decorate([a4()], M.prototype, "basemapGalleryGroupQuery", void 0), __decorate([a4({ json: { name: "3DBasemapGalleryGroupQuery" } })], M.prototype, "basemapGalleryGroupQuery3D", void 0), __decorate([a4({ json: { name: "g3DTilesGalleryGroupQuery" } })], M.prototype, "g3DTilesGalleryGroupQuery", void 0), __decorate([a4({ json: { name: "g3dTilesEnabled" } })], M.prototype, "g3dTilesEnabled", void 0), __decorate([a4()], M.prototype, "bingKey", void 0), __decorate([a4()], M.prototype, "canListApps", void 0), __decorate([a4()], M.prototype, "canListData", void 0), __decorate([a4()], M.prototype, "canListPreProvisionedItems", void 0), __decorate([a4()], M.prototype, "canProvisionDirectPurchase", void 0), __decorate([a4()], M.prototype, "canSearchPublic", void 0), __decorate([a4()], M.prototype, "canShareBingPublic", void 0), __decorate([a4()], M.prototype, "canSharePublic", void 0), __decorate([a4()], M.prototype, "canSignInArcGIS", void 0), __decorate([a4()], M.prototype, "canSignInIDP", void 0), __decorate([a4()], M.prototype, "colorSetsGroupQuery", void 0), __decorate([a4()], M.prototype, "commentsEnabled", void 0), __decorate([a4({ type: Date })], M.prototype, "created", void 0), __decorate([a4()], M.prototype, "credential", void 0), __decorate([a4()], M.prototype, "culture", void 0), __decorate([a4()], M.prototype, "currentVersion", void 0), __decorate([a4()], M.prototype, "customBaseUrl", void 0), __decorate([a4()], M.prototype, "default3DBasemapQuery", void 0), __decorate([a4()], M.prototype, "defaultBasemap", void 0), __decorate([o2("defaultBasemap")], M.prototype, "readDefaultBasemap", null), __decorate([a4()], M.prototype, "defaultDevBasemap", void 0), __decorate([o2("defaultDevBasemap")], M.prototype, "readDefaultDevBasemap", null), __decorate([a4({ type: z })], M.prototype, "defaultExtent", void 0), __decorate([a4()], M.prototype, "defaultVectorBasemap", void 0), __decorate([o2("defaultVectorBasemap")], M.prototype, "readDefaultVectorBasemap", null), __decorate([a4()], M.prototype, "description", void 0), __decorate([a4()], M.prototype, "devBasemapGalleryGroupQuery", void 0), __decorate([a4()], M.prototype, "eueiEnabled", void 0), __decorate([a4({ readOnly: true })], M.prototype, "extraQuery", null), __decorate([a4()], M.prototype, "featuredGroups", void 0), __decorate([a4()], M.prototype, "featuredItemsGroupQuery", void 0), __decorate([a4()], M.prototype, "galleryTemplatesGroupQuery", void 0), __decorate([a4()], M.prototype, "layoutGroupQuery", void 0), __decorate([a4()], M.prototype, "livingAtlasGroupQuery", void 0), __decorate([a4({ readOnly: true })], M.prototype, "hasAPIKey", null), __decorate([a4()], M.prototype, "hasCategorySchema", void 0), __decorate([a4()], M.prototype, "hasClassificationSchema", void 0), __decorate([a4()], M.prototype, "helpBase", void 0), __decorate([a4()], M.prototype, "helperServices", void 0), __decorate([a4()], M.prototype, "helpMap", void 0), __decorate([a4()], M.prototype, "homePageFeaturedContent", void 0), __decorate([a4()], M.prototype, "homePageFeaturedContentCount", void 0), __decorate([a4()], M.prototype, "httpPort", void 0), __decorate([a4()], M.prototype, "httpsPort", void 0), __decorate([a4()], M.prototype, "id", void 0), __decorate([a4()], M.prototype, "ipCntryCode", void 0), __decorate([a4({ readOnly: true })], M.prototype, "isOrganization", null), __decorate([a4()], M.prototype, "isPortal", void 0), __decorate([a4()], M.prototype, "isReadOnly", void 0), __decorate([a4({ readOnly: true })], M.prototype, "itemPageUrl", null), __decorate([a4()], M.prototype, "layerTemplatesGroupQuery", void 0), __decorate([a4()], M.prototype, "maxTokenExpirationMinutes", void 0), __decorate([a4({ type: Date })], M.prototype, "modified", void 0), __decorate([a4()], M.prototype, "name", void 0), __decorate([a4()], M.prototype, "portalHostname", void 0), __decorate([a4()], M.prototype, "portalMode", void 0), __decorate([a4()], M.prototype, "portalProperties", void 0), __decorate([a4()], M.prototype, "region", void 0), __decorate([a4()], M.prototype, "recycleBinEnabled", void 0), __decorate([a4({ readOnly: true })], M.prototype, "restUrl", null), __decorate([a4()], M.prototype, "rotatorPanels", void 0), __decorate([a4()], M.prototype, "showHomePageDescription", void 0), __decorate([a4()], M.prototype, "sourceJSON", void 0), __decorate([a4()], M.prototype, "staticImagesUrl", void 0), __decorate([a4({ json: { name: "2DStylesGroupQuery" } })], M.prototype, "stylesGroupQuery2d", void 0), __decorate([a4({ json: { name: "stylesGroupQuery" } })], M.prototype, "stylesGroupQuery3d", void 0), __decorate([a4()], M.prototype, "supportsHostedServices", void 0), __decorate([a4()], M.prototype, "symbolSetsGroupQuery", void 0), __decorate([a4()], M.prototype, "templatesGroupQuery", void 0), __decorate([a4()], M.prototype, "thumbnail", void 0), __decorate([a4({ readOnly: true })], M.prototype, "thumbnailUrl", null), __decorate([a4()], M.prototype, "units", void 0), __decorate([a4()], M.prototype, "url", void 0), __decorate([a4()], M.prototype, "urlKey", void 0), __decorate([o2("urlKey")], M.prototype, "readUrlKey", null), __decorate([a4()], M.prototype, "user", void 0), __decorate([o2("user")], M.prototype, "readUser", null), __decorate([a4()], M.prototype, "use3dBasemaps", void 0), __decorate([a4()], M.prototype, "useDefault3dBasemap", void 0), __decorate([a4()], M.prototype, "useStandardizedQuery", void 0), __decorate([a4()], M.prototype, "useVectorBasemaps", void 0), __decorate([a4()], M.prototype, "vectorBasemapGalleryGroupQuery", void 0), M = _ = __decorate([c("esri.portal.Portal")], M);
var C = new FinalizationRegistry((e2) => {
  e2.remove();
});
function T(e2) {
  const t2 = s3;
  return () => {
    const r2 = e2.deref();
    r2 && t2.findCredential(r2.restUrl) && r2.signIn().catch(() => {
    });
  };
}

export {
  p,
  u7 as u,
  M
};
//# sourceMappingURL=chunk-LF4XI7IU.js.map
