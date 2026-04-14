import {
  f as f3
} from "./chunk-OTOTHRZE.js";
import {
  F
} from "./chunk-YK5DPRSK.js";
import {
  b
} from "./chunk-LBXDB7YQ.js";
import {
  k
} from "./chunk-TDVHS7EW.js";
import {
  M,
  u as u2
} from "./chunk-OOTSAG75.js";
import {
  D,
  K,
  T,
  f2,
  s2 as s3
} from "./chunk-RVKOLALF.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r2
} from "./chunk-JM4CKTH2.js";
import {
  d,
  f2 as f,
  s as s2,
  u
} from "./chunk-WARIPJQI.js";
import {
  n2 as n,
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

// node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var _ = (_2) => {
  const E = _2;
  let b2 = class extends E {
    constructor() {
      super(...arguments), this.resourceReferences = { portalItem: null, paths: [] }, this.userHasEditingPrivileges = true, this.userHasFullEditingPrivileges = false, this.userHasUpdateItemPrivileges = false;
    }
    destroy() {
      this.portalItem = u(this.portalItem), this.resourceReferences.portalItem = null, this.resourceReferences.paths.length = 0;
    }
    get portalItem() {
      return this._get("portalItem");
    }
    set portalItem(e) {
      e !== this._get("portalItem") && (this.removeOrigin("portal-item"), this._set("portalItem", e));
    }
    readPortalItem(e, t, r3) {
      if (t.itemId) return new k({ id: t.itemId, portal: r3?.portal });
    }
    writePortalItem(e, t) {
      e?.id && (t.itemId = e.id);
    }
    async loadFromPortal(e, t) {
      if (this.portalItem?.id) try {
        const { load: r3 } = await import("./layersLoader-4X2P4PFP.js");
        return s2(t), await r3({ instance: this, supportedTypes: e.supportedTypes, validateItem: e.validateItem, supportsData: e.supportsData, layerModuleTypeMap: e.layerModuleTypeMap, populateGroupLayer: e.populateGroupLayer }, t);
      } catch (r3) {
        throw d(r3) || n.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${r3}`), r3;
      }
    }
    async finishLoadEditablePortalLayer(e) {
      this._set("userHasEditingPrivileges", await this._fetchUserHasEditingPrivileges(e).catch((e2) => (f(e2), true)));
    }
    async setUserPrivileges(e, r3) {
      if (!s.userPrivilegesApplied) return this.finishLoadEditablePortalLayer(r3);
      if (this.url) try {
        const { features: { edit: t, fullEdit: s4 }, content: { updateItem: i } } = await this._fetchUserPrivileges(e, r3);
        this._set("userHasEditingPrivileges", t), this._set("userHasFullEditingPrivileges", s4), this._set("userHasUpdateItemPrivileges", i);
      } catch (s4) {
        f(s4);
      }
    }
    async _fetchUserPrivileges(e, t) {
      let s4 = this.portalItem;
      if (!e || !s4 || !s4.loaded || s4.sourceUrl) return this._fetchFallbackUserPrivileges(t);
      const i = !s3?.findCredential(this.url), a2 = e === s4.id;
      if (a2 && s4.portal.user) return this._getUserPrivileges(s4, i);
      let o2, l;
      if (a2) o2 = s4.portal.url;
      else try {
        o2 = await F(this.url, t);
      } catch (m) {
        f(m);
      }
      if (!o2 || !T(o2, s4.portal.url)) return this._fetchFallbackUserPrivileges(t);
      try {
        const e2 = null != t ? t.signal : null;
        l = await s3?.getCredential(`${o2}/sharing`, { prompt: false, signal: e2 });
      } catch (m) {
        f(m);
      }
      const n2 = true, p = false, c2 = false;
      if (!l) return { features: { edit: n2, fullEdit: p }, content: { updateItem: c2 } };
      try {
        if (a2 ? await s4.reload() : (s4 = new k({ id: e, portal: { url: o2 } }), await s4.load(t)), s4.portal.user) return this._getUserPrivileges(s4, i);
      } catch (m) {
        f(m);
      }
      return { features: { edit: n2, fullEdit: p }, content: { updateItem: c2 } };
    }
    _getUserPrivileges(e, t) {
      const r3 = f3(e);
      return t && (r3.features.edit = true), r3;
    }
    async _fetchFallbackUserPrivileges(e) {
      let t = true;
      try {
        t = await this._fetchUserHasEditingPrivileges(e);
      } catch (r3) {
        f(r3);
      }
      return { features: { edit: t, fullEdit: false }, content: { updateItem: false } };
    }
    async _fetchUserHasEditingPrivileges(e) {
      const t = this.url ? s3?.findCredential(this.url) : null;
      if (!t) return true;
      const s4 = j.credential === t ? j.user : await this._fetchEditingUser(e);
      return j.credential = t, j.user = s4, null == s4?.privileges || s4.privileges.includes("features:user:edit");
    }
    async _fetchEditingUser(e) {
      const t = this.portalItem?.portal?.user;
      if (t) return t;
      const a2 = s3?.findServerInfo(this.url ?? "");
      if (!a2?.owningSystemUrl) return null;
      const o2 = `${a2.owningSystemUrl}/sharing/rest`, l = M.getDefault();
      if (l && l.loaded && K(l.restUrl) === K(o2)) return l.user;
      const n2 = `${o2}/community/self`, p = null != e ? e.signal : null, u3 = await b(f2(n2, { authMode: "no-prompt", query: { f: "json" }, signal: p }));
      return u3.ok ? u2.fromJSON(u3.value.data) : null;
    }
    read(e, t) {
      t && (t.layer = this), super.read(e, t);
    }
    write(e, t) {
      const r3 = t?.portal, s4 = this.portalItem?.id && (this.portalItem.portal || M.getDefault());
      return r3 && s4 && !D(s4.restUrl, r3.restUrl) ? (t.messages && t.messages.push(new r("layer:cross-portal", `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`, { layer: this })), null) : super.write(e, __spreadProps(__spreadValues({}, t), { layer: this }));
    }
  };
  return __decorate([a({ type: k })], b2.prototype, "portalItem", null), __decorate([o("web-document", "portalItem", ["itemId"])], b2.prototype, "readPortalItem", null), __decorate([r2("web-document", "portalItem", { itemId: { type: String } })], b2.prototype, "writePortalItem", null), __decorate([a({ clonable: false })], b2.prototype, "resourceReferences", void 0), __decorate([a({ type: Boolean, readOnly: true })], b2.prototype, "userHasEditingPrivileges", void 0), __decorate([a({ type: Boolean, readOnly: true })], b2.prototype, "userHasFullEditingPrivileges", void 0), __decorate([a({ type: Boolean, readOnly: true })], b2.prototype, "userHasUpdateItemPrivileges", void 0), b2 = __decorate([c("esri.layers.mixins.PortalLayer")], b2), b2;
};
var j = { credential: null, user: null };

export {
  _
};
//# sourceMappingURL=chunk-BZNIQO2Y.js.map
