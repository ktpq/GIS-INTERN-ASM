import {
  e
} from "./chunk-GAFIIT3P.js";
import {
  I
} from "./chunk-6RMIGCJW.js";
import {
  m,
  u
} from "./chunk-S22GYE6C.js";
import {
  AccessorController,
  c as c2,
  getAccessorControllerBoundProperties,
  makeBinderProxy
} from "./chunk-N4A2F7D5.js";
import {
  proxyExports
} from "./chunk-PQURDETH.js";
import {
  getControllersCount,
  isEsriInternalEnv,
  trackPropKey
} from "./chunk-SIEFVWAL.js";
import {
  h,
  l
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  l as l2
} from "./chunk-LD7VLL5E.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/map-components/dist/chunks/useWidget.js
var I2 = (d, e2) => (t) => C(t, d);
var p = class extends AccessorController {
  #o = /* @__PURE__ */ new Map();
  #e;
  #t;
  constructor(e2, t) {
    super(e2, t), new c2(e2);
    const i = this, o = i.instance;
    let n = o.viewModel, l3 = o.visibleElements;
    const r = new Proxy(this.exports, {
      get(s, c4, h2) {
        return c4 === "viewModel" ? n : c4 === "visibleElements" ? l3 : Reflect.get(s, c4, h2);
      }
    });
    if (i.#t = o, i.instance = r, i.exports = r, n) {
      const s = {
        component: e2,
        get exports() {
          return i.instance.viewModel;
        }
      };
      getAccessorControllerBoundProperties(i).set("viewModel", "viewModel"), e2.addController(s), n = makeBinderProxy(e2, new WeakRef(s), getControllersCount(e2) - 1, n, i.#o);
    }
    i.instance.visibleElements && (l3 = i.#i(o));
  }
  hostConnected() {
    this.instance = this.#t, super.hostConnected();
  }
  hostLoad() {
    this.#e = l(() => this.component.el.view, (e2) => {
      const t = this.instance;
      !("view" in t) && typeof t.viewModel == "object" ? t.viewModel.view = e2 : t.view = e2, !("map" in t) && typeof t.viewModel == "object" ? t.viewModel.map = e2?.map : t.map = e2?.map;
    }, { sync: true, initial: true });
  }
  hostUpdate(e2) {
    e2.has("closed") && (this.instance.visible = !this.component.closed);
  }
  hostLoaded() {
    const { el: e2 } = this.component;
    e2.childElem ??= document.createElement("div"), e2.childElem.setAttribute("arcgis-widget-wrapped", ""), this.instance.container = e2.childElem, (this.component.el.shadowRoot ?? this.component.el).appendChild(this.instance.container), this.component.closed !== void 0 && this.onLifecycle(() => l(() => this.instance.visible, (i) => this.component.closed = !i, { initial: true }));
  }
  #i(e2) {
    return new Proxy(e2.visibleElements, {
      get: (t, i) => {
        if (typeof i == "symbol" || i in Promise.prototype)
          return t[i];
        const o = [i], n = this.#s(o);
        return trackPropKey(this.component, (l3) => {
          const r = l3;
          this.component[r] = false;
          let s = e2.visibleElements ?? {}, c4;
          for (const a2 of o.slice(0, -1))
            if (typeof s[a2] == "object" && s[a2] !== null)
              s = s[a2];
            else {
              c4 = !!s[a2];
              break;
            }
          c4 === void 0 && (c4 = !!(s[o.slice(-1)[0]] ?? true));
          const f = r.startsWith("hide") || r.startsWith("show") ? r.startsWith("hide") : c4;
          this.onUpdate((a2) => {
            if (a2.has(r)) {
              const u2 = this.component[r];
              this.#n(o, u2, f);
            }
          });
        }, n);
      }
    });
  }
  #s(e2) {
    const t = new Proxy({}, {
      get: (i, o) => {
        const n = Reflect.get(i, o);
        return typeof o == "symbol" || o in Promise.prototype ? n : (e2.push(o), t);
      }
    });
    return t;
  }
  #n(e2, t, i) {
    let o = this.instance.visibleElements ?? {};
    for (const l3 of e2.slice(0, -1))
      (typeof o[l3] != "object" || o[l3] === null) && (o[l3] = {}), o = o[l3];
    const n = !!(i ? !t : t);
    o[e2.at(-1)] = n;
  }
  hostDestroy() {
    this.#e?.remove(), super.hostDestroy();
  }
};
isEsriInternalEnv() && (p.devOnly$allowedPropNameMismatches = /* @__PURE__ */ new Set([
  "manager",
  "el",
  "multipleSortEnabled",
  // Deprecated
  "focusTrapEnabled",
  "focusTrapDisabled",
  // Deprecated
  "hideLastEditInfo"
]));
var C = proxyExports(p);

// node_modules/@arcgis/core/widgets/LayerList/LayerListViewModel.js
var m2 = { view: "view", viewLayers: "view-layers", mapLayers: "map-layers", layerViews: "layer-views", layerListMode: "layer-list-mode" };
var c3 = "hide";
var p2 = q.ofType(I);
var y = class extends l2 {
  constructor(e2) {
    super(e2), this.checkPublishStatusEnabled = false, this.listItemCreatedFunction = null, this.listModeDisabled = false, this.operationalItems = new p2(), this.view = null;
  }
  initialize() {
    this.addHandles([l(() => true === this.view?.ready, () => this._viewHandles(), h), l(() => [this.listItemCreatedFunction, this.checkPublishStatusEnabled, this.listModeDisabled], () => this._recompileList()), l(() => e(this.view) ? this.view.inGeographicLayout : null, () => this._compileList())], m2.view);
  }
  destroy() {
    this._removeAllItems(), this.view = null;
  }
  get state() {
    const { view: e2 } = this;
    return e2?.ready ? "ready" : e2 ? "loading" : "disabled";
  }
  get totalItems() {
    return this.operationalItems.flatten((e2) => e2.children).length;
  }
  triggerAction(e2, t) {
    e2 && !e2.disabled && this.emit("trigger-action", { action: e2, item: t });
  }
  moveListItem(e2, t, s, i) {
    const a2 = e2?.layer;
    if (!a2 || "subtype-sublayer" === a2.type || "sublayer" === a2.type) return;
    const r = this.view?.map?.layers, l3 = t ? m(t) : r, o = s ? m(s) : r;
    if (!l3 || !o) return;
    const { operationalItems: n } = this, h2 = t?.children || n, m3 = s?.children || n, c4 = o.length - i;
    e2.parent = s || null, h2.remove(e2), l3.remove(a2), m3.includes(e2) || m3.add(e2, c4), o.includes(a2) || o.add(a2, c4), this._compileList();
  }
  _createLayerViewHandles(e2) {
    this.removeHandles(m2.layerViews), this._compileList(), e2 && this.addHandles(e2.on("change", () => this._compileList()), m2.layerViews);
  }
  _createMapLayerHandles(e2) {
    this.removeHandles(m2.mapLayers), this._compileList(), e2 && this.addHandles(e2.on("change", () => this._compileList()), m2.mapLayers);
  }
  _createListItem(e2) {
    const { view: t, listItemCreatedFunction: s, checkPublishStatusEnabled: i, listModeDisabled: a2 } = this;
    return new I({ checkPublishStatusEnabled: i, listModeDisabled: a2, layer: e2, listItemCreatedFunction: s, view: t });
  }
  _removeAllItems() {
    this.operationalItems.destroyAll();
  }
  _getViewableLayers(e2) {
    return e2 ? this.listModeDisabled ? e2 : e2.filter((e3) => u(e3) !== c3) : void 0;
  }
  _watchLayersListMode(e2) {
    this.removeHandles(m2.layerListMode), e2 && !this.listModeDisabled && this.addHandles(l(() => e2.filter((e3) => "listMode" in e3).map((e3) => e3.listMode).toArray(), () => this._compileList()), m2.layerListMode);
  }
  _compileList() {
    const e2 = this.view?.map?.layers, t = e(this.view) && !this.view.inGeographicLayout ? e2?.filter(({ type: e3 }) => "link-chart" === e3) : e2;
    this._watchLayersListMode(t);
    const s = this._getViewableLayers(t);
    s?.length ? (this._createNewItems(s), this._removeItems(s), this._sortItems(s)) : this._removeAllItems();
  }
  _createNewItems(e2) {
    const { operationalItems: t } = this;
    e2.forEach((e3) => {
      t.some((t2) => t2.layer === e3) || t.add(this._createListItem(e3));
    });
  }
  _removeItems(e2) {
    const { operationalItems: t } = this, s = [];
    t.forEach((t2) => {
      t2 && e2 && e2.includes(t2.layer) || s.push(t2);
    }), t.destroyMany(s);
  }
  _sortItems(e2) {
    const { operationalItems: t } = this;
    t.sort((t2, s) => {
      const i = e2.indexOf(t2.layer), a2 = e2.indexOf(s.layer);
      return i > a2 ? -1 : i < a2 ? 1 : 0;
    });
  }
  _recompileList() {
    this._removeAllItems(), this._compileList();
  }
  _viewHandles() {
    const { view: e2 } = this;
    this.removeHandles([m2.mapLayers, m2.layerViews, m2.viewLayers]), e2?.ready ? this.addHandles([l(() => this.view?.map?.allLayers, (e3) => this._createMapLayerHandles(e3), h), l(() => this.view?.allLayerViews, (e3) => this._createLayerViewHandles(e3), h)], m2.viewLayers) : this._removeAllItems();
  }
};
__decorate([a()], y.prototype, "checkPublishStatusEnabled", void 0), __decorate([a()], y.prototype, "listItemCreatedFunction", void 0), __decorate([a({ nonNullable: true })], y.prototype, "listModeDisabled", void 0), __decorate([a({ type: p2 })], y.prototype, "operationalItems", void 0), __decorate([a({ readOnly: true })], y.prototype, "state", null), __decorate([a()], y.prototype, "totalItems", null), __decorate([a()], y.prototype, "view", void 0), y = __decorate([c("esri.widgets.LayerList.LayerListViewModel")], y);
var v = y;

export {
  v,
  I2 as I
};
//# sourceMappingURL=chunk-JXYP5TTH.js.map
