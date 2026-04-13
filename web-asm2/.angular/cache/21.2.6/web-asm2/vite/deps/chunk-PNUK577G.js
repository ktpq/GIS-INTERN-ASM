import {
  R
} from "./chunk-CMTDRUWK.js";
import {
  e as e2
} from "./chunk-4LHOFC4O.js";
import {
  i,
  ne
} from "./chunk-HMVPCBOE.js";
import {
  n as n3
} from "./chunk-D4W2QISB.js";
import {
  H,
  Q,
  sn
} from "./chunk-DOW7IE32.js";
import {
  j as j2
} from "./chunk-TV7JW3IK.js";
import {
  a as a2,
  p2 as p,
  r as r2
} from "./chunk-SPTOZROU.js";
import {
  U,
  f,
  l as l2
} from "./chunk-CD6IOUFB.js";
import {
  o
} from "./chunk-4L5TCIUQ.js";
import {
  q
} from "./chunk-4UWOVR5Y.js";
import {
  l
} from "./chunk-LHMCLOXR.js";
import {
  e
} from "./chunk-OLWKRV2W.js";
import {
  m as m2
} from "./chunk-XKHV7U7B.js";
import {
  _,
  j
} from "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  L,
  d,
  m2 as m,
  n as n2
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Popup/actions.js
var i2 = q.ofType({ key: "type", defaultKeyValue: "button", base: p, typeMap: { button: a2, toggle: r2 } });
var n4 = new a2({ icon: "magnifying-glass-plus", id: "zoom-to-feature", title: "{messages.zoom}", className: i.zoomInMagnifyingGlass });
var r3 = new a2({ icon: "trash", id: "remove-selected-feature", title: "{messages.remove}", className: i.trash });
var l3 = new a2({ icon: "magnifying-glass-plus", id: "zoom-to-clustered-features", title: "{messages.zoom}", className: i.zoomInMagnifyingGlass });
var m3 = new r2({ icon: "table", id: "browse-clustered-features", title: "{messages.browseClusteredFeatures}", className: i.table, value: false });

// node_modules/@arcgis/core/geometry/support/geometryUtils.js
function o2(e3) {
  switch (e3?.type) {
    case "point":
      return e3;
    case "extent":
      return e3.center;
    case "polygon": {
      const r4 = o(e3);
      return r4 ? _.fromJSON(r4) : null;
    }
    case "multipoint":
    case "polyline":
      return e3.extent?.center;
    default:
      return null;
  }
}

// node_modules/@arcgis/core/layers/LayerConstants.js
var o3 = "OBJECTID";

// node_modules/@arcgis/core/widgets/Popup/actionUtils.js
var c2 = "esri.widgets.Popup.PopupViewModel";
var u = () => n.getLogger(c2);
var l4 = (t) => {
  const { event: r4, view: c4, viewModel: u2 } = t, { action: l6 } = r4;
  if (!l6) return Promise.reject(new r("trigger-action:missing-arguments", "Event has no action"));
  const { disabled: d3, id: g2 } = l6;
  if (!g2) return Promise.reject(new r("trigger-action:invalid-action", "action.id is missing"));
  if (d3) return Promise.reject(new r("trigger-action:invalid-action", "Action is disabled"));
  if (g2 === n4.id) return f3(u2).catch(m);
  if (g2 === l3.id) return m4(u2);
  if (g2 === m3.id) return u2.browseClusterEnabled = !u2.browseClusterEnabled, u2.featureMenuOpen = u2.browseClusterEnabled, Promise.resolve();
  if (g2 === r3.id) {
    u2.visible = false;
    const { selectedFeature: t2 } = u2;
    if (!t2) return Promise.reject(new r(`trigger-action:${r3.id}`, "selectedFeature is required", { selectedFeature: t2 }));
    const { sourceLayer: r5 } = t2;
    return r5 ? r5.remove(t2) : c4?.graphics.remove(t2), Promise.resolve();
  }
  return Promise.resolve();
};
function d2(e3) {
  const { selectedFeature: t, location: r4, view: o5 } = e3;
  return o5 ? t ?? r4 ?? null : null;
}
function g(e3) {
  return !!e3 && e3.isAggregate && "cluster" === e3.sourceLayer?.featureReduction?.type;
}
async function w(e3, t) {
  if ("3d" !== t?.type || !e3 || "esri.Graphic" !== e3.declaredClass) return true;
  const r4 = t.getViewForGraphic(e3);
  if (r4 && "whenGraphicBounds" in r4) {
    let t2 = null;
    try {
      t2 = await r4.whenGraphicBounds(e3, { useViewElevation: true });
    } catch (o5) {
    }
    return !t2 || !t2.boundingBox || t2.boundingBox[0] === t2.boundingBox[3] && t2.boundingBox[1] === t2.boundingBox[4] && t2.boundingBox[2] === t2.boundingBox[5];
  }
  return true;
}
async function f3(t, o5) {
  const { location: n5, selectedFeature: a3, view: s, zoomFactor: c4 } = t;
  await o5?.viewModel?.updateGeometry();
  const l6 = o5?.graphic, g2 = l6?.geometry ? l6 : d2(t);
  if (!s || !g2) {
    const t2 = new r("zoom-to:invalid-target-or-view", "Cannot zoom to location without a target and view.", { target: g2, view: s });
    throw u().error(t2), t2;
  }
  const f4 = s.scale / c4, m5 = l6?.geometry ?? t.selectedFeature?.geometry ?? n5, v2 = null != m5 && "point" === m5.type && await w(l6 ?? a3, s);
  n4.active = true, n4.disabled = true;
  try {
    await t.zoomTo({ target: { target: g2, scale: v2 ? f4 : void 0 } });
  } catch (p3) {
    if (d(p3)) return;
    const t2 = new r("zoom-to:invalid-graphic", "Could not zoom to the location of the graphic.", { graphic: l6 ?? a3 });
    u().error(t2);
  } finally {
    n4.active = false, n4.disabled = false, t.zoomToLocation = null, v2 && (t.location = m5);
  }
}
async function m4(t) {
  const { selectedFeature: r4, view: o5 } = t;
  if ("2d" !== o5?.type) {
    const t2 = new r("zoomToCluster:invalid-view", "View must be 2d MapView.", { view: o5 });
    throw u().error(t2), t2;
  }
  if (!r4 || !g(r4)) {
    const t2 = new r("zoomToCluster:invalid-selectedFeature", "Selected feature must represent an aggregate/cluster graphic.", { selectedFeature: r4 });
    throw u().error(t2), t2;
  }
  const [i4, a3] = await y(o5, r4);
  l3.active = true, l3.disabled = true;
  const { extent: s } = await i4.queryExtent(a3);
  s && await t.zoomTo({ target: s }), l3.active = false, l3.disabled = false;
}
async function v(e3) {
  const { view: t, selectedFeature: r4 } = e3;
  if (!t || !r4) return;
  const [o5, i4] = await y(t, r4), { extent: n5 } = await o5.queryExtent(i4);
  e3.selectedClusterBoundaryFeature.geometry = n5, t.graphics.add(e3.selectedClusterBoundaryFeature);
}
async function p2(e3) {
  const { selectedFeature: t, view: r4 } = e3;
  if (!r4 || !t) return;
  const [o5, i4] = await y(r4, t);
  m3.active = true, m3.disabled = true;
  const { features: n5 } = await o5.queryFeatures(i4);
  m3.active = false, m3.disabled = false, m3.value = true;
  const s = { features: [t].concat(n5) };
  "feature" === e3?.initialDisplayMode && (s.featureMenuOpen = true), e3?.open(s);
}
async function y(e3, t) {
  const r4 = await e3.whenLayerView(t.sourceLayer), o5 = r4.createQuery(), i4 = t.getObjectId();
  return o5.aggregateIds = null != i4 ? [i4] : [], [r4, o5];
}
function h(e3) {
  m3.value = false;
  const t = e3.features.filter((e4) => g(e4));
  t.length && (e3.features = t);
}

// node_modules/@arcgis/core/widgets/support/AnchorElementViewModel.js
var c3 = (t) => {
  const c4 = t;
  let l6 = class extends c4 {
    constructor(e3) {
      super(e3), this.location = null, this.screenLocationEnabled = false, this.view = null;
    }
    initialize() {
      this.addHandles([f(() => {
        const e3 = this.screenLocationEnabled ? this.view : null;
        return e3 ? [e3.size, "3d" === e3.type ? e3.camera : e3.viewpoint] : null;
      }, () => this.notifyChange("screenLocation")), l2(() => this.screenLocation, (e3, t2) => {
        null != e3 && null != t2 && this.emit("view-change");
      })]);
    }
    destroy() {
      this.view = null;
    }
    get screenLocation() {
      const { location: e3, view: t2, screenLocationEnabled: o5 } = this, i4 = t2?.spatialReference, n5 = i4 ? Q(e3, i4).geometry : null;
      return o5 && n5 && t2?.ready ? t2.toScreen(n5) : null;
    }
  };
  return __decorate([a()], l6.prototype, "location", void 0), __decorate([a()], l6.prototype, "screenLocation", null), __decorate([a()], l6.prototype, "screenLocationEnabled", void 0), __decorate([a()], l6.prototype, "view", void 0), l6 = __decorate([c("esri.widgets.support.AnchorElementViewModel")], l6), l6;
};
var l5 = c3(l);

// node_modules/@arcgis/core/widgets/support/goToUtils.js
function o4(o5, t, n5) {
  return o5.goTo(t, n5);
}

// node_modules/@arcgis/core/widgets/support/GoTo.js
var i3 = (i4) => {
  const p3 = i4;
  let c4 = class extends p3 {
    constructor(...o5) {
      super(...o5), this.goToOverride = null, this.view = null;
    }
    callGoTo(o5) {
      const { view: t } = this;
      return n2(t), this.goToOverride ? this.goToOverride(t, o5) : o4(t, o5.target, o5.options);
    }
  };
  return __decorate([a()], c4.prototype, "goToOverride", void 0), __decorate([a()], c4.prototype, "view", void 0), c4 = __decorate([c("esri.widgets.support.GoTo")], c4), c4;
};

// node_modules/@arcgis/core/widgets/Features/FeaturesViewModel.js
var B = "location-scale-handle";
var H2 = () => [n4.clone()];
var G = () => [l3.clone(), m3.clone()];
var Z = null;
function z2(e3, t) {
  return "building-scene" === e3 || "map-image" === e3 || "tile" === e3 || "imagery" === e3 || "2d" === t && "imagery-tile" === e3;
}
var D = class extends i3(c3(l)) {
  constructor(e3) {
    super(e3), this._pendingPromises = new e2(), this._fetchFeaturesController = null, this._centerAtLocationController = null, this._locationUpdateController = null, this._highlightPromises = { "highlight-active-feature": null, "highlight-selected-feature": null }, this._selectedClusterFeature = null, this.actions = new i2(), this.activeFeature = null, this.autoCloseEnabled = false, this.browseClusterEnabled = false, this.content = null, this.defaultPopupTemplateEnabled = false, this.featurePage = null, this.featuresPerPage = 20, this.featureMenuOpen = false, this.featureMenuTitle = null, this.featureViewModelAbilities = null, this.featureViewModels = [], this.highlightEnabled = true, this.includeDefaultActions = true, this.initialDisplayMode = "feature", this.selectedClusterBoundaryFeature = new j2({ symbol: new m2({ outline: { width: 1.5, color: "cyan" }, style: "none" }) }), this.title = null, this.updateLocationEnabled = false, this.view = null, this.visible = false, this.zoomFactor = 4, this.zoomToLocation = null, this._debouncedLocationUpdate = L(async (e4) => {
      this._cancelLocationUpdate();
      const t = new AbortController(), { signal: i4 } = t;
      this._locationUpdateController = t, await this._locationUpdate(e4, { signal: i4 }).catch(() => {
      }).finally(() => {
        this._locationUpdateController === t && (this._locationUpdateController = null);
      });
    });
  }
  initialize() {
    this.addHandles([this.on("view-change", () => this._autoClose()), l2(() => [this.highlightEnabled, this.selectedFeature, this.visible, this.view], () => this._highlightSelectedFeature()), l2(() => [this.highlightEnabled, this.activeFeature, this.visible, this.view], () => this._highlightActiveFeature()), l2(() => this.view?.animation?.state, (e3) => this._animationStateChange(e3)), l2(() => this.location, (e3) => this._locationChange(e3)), l2(() => this.selectedFeature, (e3) => this._selectedFeatureChange(e3)), l2(() => [this.selectedFeatureIndex, this.featureCount, this.featuresPerPage], () => this._selectedFeatureIndexChange()), l2(() => [this.featurePage, this.selectedFeatureIndex, this.featureCount, this.featuresPerPage, this.featureViewModels], () => this._setGraphicOnFeatureViewModels()), l2(() => this.featureViewModels, () => this._featureViewModelsChange()), this.on("trigger-action", (e3) => l4({ event: e3, viewModel: this, view: this.view })), f(() => !this.waitingForResult, () => this._waitingForResultChange(), U), l2(() => [this.features, this.map, this.spatialReference, this.timeZone], () => this._updateFeatureVMs()), l2(() => this.view?.scale, () => this._viewScaleChange()), f(() => !this.visible, () => this.browseClusterEnabled = false), l2(() => this.browseClusterEnabled, (e3) => e3 ? this.enableClusterBrowsing() : this.disableClusterBrowsing())]);
  }
  destroy() {
    this._cancelLocationUpdate(), this._cancelFetchingFeatures(), this._cancelCenterAtLocation(), this._pendingPromises.clear(), this.browseClusterEnabled = false, this.view = null, this.map = null, this.spatialReference = null, this.timeZone = null;
  }
  get active() {
    return !(!this.visible || this.waitingForResult);
  }
  get allActions() {
    const e3 = this._get("allActions") || new i2();
    e3.removeAll();
    const { actions: t, defaultActions: i4, defaultPopupTemplateEnabled: s, includeDefaultActions: r4, selectedFeature: o5 } = this, a3 = r4 ? i4.concat(t) : t, n5 = o5 && ("function" == typeof o5.getEffectivePopupTemplate && o5.getEffectivePopupTemplate(s) || o5.popupTemplate), l6 = n5?.actions, u2 = n5?.overwriteActions ? l6 : l6?.concat(a3) ?? a3;
    return u2?.filter(Boolean).forEach((t2) => e3.add(t2)), e3;
  }
  get defaultActions() {
    const e3 = this._get("defaultActions") || new i2();
    return e3.removeAll(), e3.addMany(g(this.selectedFeature) ? G() : H2()), e3;
  }
  get featureCount() {
    return this.features.length;
  }
  set features(e3) {
    if (this._get("features") === e3) return;
    const t = e3 || [];
    this._set("features", t);
    const { pendingPromisesCount: i4, promiseCount: s, selectedFeatureIndex: r4 } = this, o5 = s && t.length;
    "list" !== this.initialDisplayMode ? o5 && i4 && -1 === r4 ? this.selectedFeatureIndex = 0 : o5 && -1 !== r4 || (this.selectedFeatureIndex = t.length ? 0 : -1) : (!o5 || o5 && i4 === s) && (this.selectedFeatureIndex = -1);
  }
  set location(e3) {
    let t = e3;
    const i4 = this.spatialReference?.isWebMercator, s = e3?.spatialReference?.isWGS84;
    s && i4 && (t = j(e3)), this._set("location", t);
  }
  get map() {
    return this.view?.map ?? null;
  }
  set map(e3) {
    this._override("map", e3);
  }
  get pendingPromisesCount() {
    return this._pendingPromises.size;
  }
  get promiseCount() {
    return this.promises.length;
  }
  get promises() {
    return this._get("promises") || [];
  }
  set promises(e3) {
    this._get("promises") !== e3 && (this._pendingPromises.clear(), this.features = [], Array.isArray(e3) && e3.length ? (this._set("promises", e3), (e3 = e3.slice()).forEach((e4) => this._pendingPromises.add(e4)), e3.reduce((e4, t) => e4.finally(() => t.then((e5) => {
      this._pendingPromises.has(t) && this._updateFeatures(e5);
    }).finally(() => this._pendingPromises.delete(t)).catch(() => {
    })), Promise.resolve())) : this._set("promises", []));
  }
  get screenLocation() {
    return super.screenLocation;
  }
  get selectedFeature() {
    const { features: e3, selectedFeatureIndex: t } = this;
    if (-1 === t) return null;
    return e3[t] || null;
  }
  get selectedFeatureIndex() {
    const e3 = this._get("selectedFeatureIndex");
    return "number" == typeof e3 ? e3 : -1;
  }
  set selectedFeatureIndex(e3) {
    const { featureCount: t } = this;
    (isNaN(e3) || e3 < 0 || !t) && (e3 = -1), this.activeFeature = null, this._set("selectedFeatureIndex", e3);
  }
  get selectedFeatureViewModel() {
    return this.featureViewModels[this.selectedFeatureIndex] || null;
  }
  get spatialReference() {
    return this.view?.spatialReference ?? null;
  }
  set spatialReference(e3) {
    this._override("spatialReference", e3);
  }
  get state() {
    const { view: e3, map: t } = this;
    return e3 ? e3.ready ? "ready" : "disabled" : t ? "ready" : "disabled";
  }
  get timeZone() {
    return this.view?.timeZone ?? e;
  }
  set timeZone(e3) {
    this._overrideIfSome("timeZone", e3);
  }
  get waitingForContents() {
    return this.featureViewModels.some((e3) => e3.waitingForContent);
  }
  get waitingForResult() {
    return !(!(!!this._fetchFeaturesController || this.pendingPromisesCount > 0) || 0 !== this.featureCount);
  }
  centerAtLocation() {
    const { view: e3 } = this, t = d2(this);
    this._cancelCenterAtLocation();
    const i4 = new AbortController(), { signal: r4 } = i4;
    return this._centerAtLocationController = i4, t && e3 ? this.callGoTo({ target: { target: t, scale: e3.scale }, options: { signal: r4 } }).catch((e4) => {
      d(e4) || n.getLogger(this).error(e4);
    }) : Promise.reject(new r("center-at-location:invalid-target-or-view", "Cannot center at a location without a target and view.", { target: t, view: e3 }));
  }
  zoomTo(e3) {
    return this.callGoTo(e3);
  }
  clear() {
    this.set({ promises: [], features: [], content: null, title: null, location: null, activeFeature: null });
  }
  fetchFeatures(e3, t) {
    const { view: i4 } = this;
    if (!i4 || !e3) throw new r("fetch-features:invalid-screenpoint-or-view", "Cannot fetch features without a screenPoint and view.", { screenPoint: e3, view: i4 });
    return i4.fetchPopupFeatures(e3, { pointerType: t?.event?.pointerType, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, signal: t?.signal });
  }
  open(e3) {
    const t = __spreadProps(__spreadValues({ updateLocationEnabled: false, promises: [], fetchFeatures: false }, e3), { visible: true }), { fetchFeatures: i4 } = t;
    delete t.fetchFeatures, i4 && this._setFetchFeaturesPromises(t.location);
    const s = ["actionsMenuOpen", "collapsed"];
    for (const r4 of s) delete t[r4];
    this.set(t);
  }
  triggerAction(e3) {
    const t = this.allActions.at(e3);
    t && !t.disabled && this.emit("trigger-action", { action: t });
  }
  next() {
    return this.selectedFeatureIndex = this._getRoundRobinIndex(this.selectedFeatureIndex + 1, this.featureCount), this;
  }
  previous() {
    return this.selectedFeatureIndex = this._getRoundRobinIndex(this.selectedFeatureIndex - 1, this.featureCount), this;
  }
  disableClusterBrowsing() {
    h(this), this._clearBrowsedClusterGraphics();
  }
  async enableClusterBrowsing() {
    const { view: e3, selectedFeature: t } = this;
    "2d" === e3?.type ? g(t) ? (await v(this), await p2(this)) : n.getLogger(this).warn("enableClusterBrowsing:invalid-selectedFeature: Selected feature must represent an aggregate/cluster graphic.", t) : n.getLogger(this).warn("enableClusterBrowsing:invalid-view: View must be 2d MapView.", t);
  }
  async handleViewClick(e3) {
    return this._fetchFeaturesAndOpen(e3);
  }
  _getRoundRobinIndex(e3, t) {
    return (e3 + t) % t;
  }
  _animationStateChange(e3) {
    this.zoomToLocation || (n4.disabled = "waiting-for-target" === e3);
  }
  _clearBrowsedClusterGraphics() {
    const e3 = [this.selectedClusterBoundaryFeature, this._selectedClusterFeature].filter(N);
    this.view?.graphics?.removeMany(e3), this._selectedClusterFeature = null, this.selectedClusterBoundaryFeature.geometry = null;
  }
  _viewScaleChange() {
    if (g(this.selectedFeature)) return this.browseClusterEnabled = false, this.visible = false, void this.clear();
    this.browseClusterEnabled && (this.features = this.selectedFeature ? [this.selectedFeature] : []);
  }
  _locationChange(e3) {
    const { selectedFeature: t, updateLocationEnabled: i4, view: s } = this;
    s && !this._locationUpdateController && i4 && e3 && (!t || t.geometry) && this.centerAtLocation();
  }
  _selectedFeatureIndexChange() {
    this.featurePage = this.featureCount > 0 ? Math.floor(this.selectedFeatureIndex / this.featuresPerPage) + 1 : null;
  }
  _featureViewModelsChange() {
    this.featurePage = this.featureCount > 0 ? 1 : null;
  }
  _setGraphicOnFeatureViewModels() {
    const { features: e3, featureCount: t, featurePage: i4, featuresPerPage: s, featureViewModels: r4 } = this;
    if (null == i4) return;
    const o5 = ((i4 - 1) * s + t) % t, a3 = o5 + s;
    r4.slice(o5, a3).forEach((t2, i5) => {
      t2 && (t2.graphic ??= e3[o5 + i5]);
    });
  }
  async _selectedFeatureChange(e3) {
    const { location: t, updateLocationEnabled: i4, view: s } = this;
    if (!e3 || !s) return;
    if (this.browseClusterEnabled) {
      if (this._selectedClusterFeature && (s.graphics.remove(this._selectedClusterFeature), this._selectedClusterFeature = null), g(e3)) return;
      return e3.symbol = await R(e3), this._selectedClusterFeature = e3, void s.graphics.add(this._selectedClusterFeature);
    }
    const r4 = e3.sourceLayer?.type;
    if ("map-image" !== r4 && "imagery" !== r4 && "imagery-tile" !== r4 || (e3.symbol = await R(e3)), !i4 && t || !e3.geometry) {
      if (i4 && !e3.geometry) {
        await this.centerAtLocation();
        const e4 = s.center?.clone();
        e4 && (this.location = e4);
      }
    } else this.location = o2(e3.geometry);
  }
  _waitingForResultChange() {
    !this.featureCount && this.promises && (this.visible = false);
  }
  async _setFetchFeaturesPromises(e3) {
    const { pendingFeatures: t } = await this._fetchFeaturesWithController({ mapPoint: e3 });
    this.promises = t;
  }
  _destroyFeatureVMs() {
    this.featureViewModels.forEach((e3) => e3 && !e3.destroyed && e3.destroy()), this._set("featureViewModels", []);
  }
  _updateFeatureVMs() {
    const { selectedFeature: e3, features: t, featureViewModels: i4, view: s, spatialReference: r4, map: o5, timeZone: a3, location: n5 } = this;
    if (g(t[0]) || (this.browseClusterEnabled = false), this._destroyFeatureVMs(), !t?.length) return;
    const l6 = i4.slice(), u2 = [];
    t.forEach((t2, i5) => {
      if (!t2) return;
      let h2 = null;
      if (l6.some((e4, i6) => (e4 && e4.graphic === t2 && (h2 = e4, l6.splice(i6, 1)), !!h2)), h2) u2[i5] = h2;
      else {
        const l7 = new ne({ abilities: this.featureViewModelAbilities, defaultPopupTemplateEnabled: this.defaultPopupTemplateEnabled, spatialReference: r4, graphic: t2 === e3 ? t2 : null, location: n5, map: o5, view: s, timeZone: a3 });
        u2[i5] = l7;
      }
    }), l6.forEach((e4) => e4 && !e4.destroyed && e4.destroy()), this._set("featureViewModels", u2);
  }
  async _getScreenPoint(e3, t) {
    const { spatialReference: i4, view: s } = this;
    if (!s) return null;
    await s?.when();
    const r4 = e3?.spatialReference;
    return r4 && i4 ? (await sn(r4, i4, null, t), s.toScreen(e3)) : null;
  }
  _cancelCenterAtLocation() {
    this._centerAtLocationController?.abort(), this._centerAtLocationController = null;
  }
  _cancelFetchingFeatures() {
    this._fetchFeaturesController?.abort(), this._fetchFeaturesController = null;
  }
  async _projectScreenPointAndFetchFeatures({ mapPoint: e3, screenPoint: t, event: i4, signal: s }) {
    return this.fetchFeatures(t ?? await this._getScreenPoint(e3 ?? this.location, { signal: s }), { signal: s, event: i4 });
  }
  _fetchFeaturesWithController({ mapPoint: e3, screenPoint: t, event: i4 }) {
    this._cancelFetchingFeatures();
    const s = new AbortController(), { signal: r4 } = s;
    this._fetchFeaturesController = s;
    const o5 = this._projectScreenPointAndFetchFeatures({ mapPoint: e3, screenPoint: t, signal: r4, event: i4 });
    return o5.catch(() => {
    }).finally(() => {
      this._fetchFeaturesController === s && (this._fetchFeaturesController = null);
    }), o5;
  }
  async _fetchFeaturesAndOpen(e3) {
    const { mapPoint: t, screenPoint: i4 } = e3;
    this.removeHandles(B), this.addHandles([l2(() => this.view?.scale, () => this._debouncedLocationUpdate(t).catch((e4) => {
      d(e4) || n.getLogger(this).error(e4);
    })), f(() => !this.visible, () => {
      this.removeHandles(B);
    }, { once: true })], B);
    const { pendingFeatures: s } = await this._fetchFeaturesWithController({ mapPoint: t, screenPoint: i4, event: e3 });
    return { location: t ?? void 0, promises: s };
  }
  async _locationUpdate(e3, t) {
    const { spatialReference: i4 } = this, s = this.selectedFeature?.geometry?.type, r4 = this.location ?? e3;
    if (s && "mesh" !== s && i4 && r4 && this.selectedFeature) if ("point" !== s) try {
      const e4 = this.selectedFeature;
      let s2 = e4.geometry;
      const o5 = this._getHighlightLayer(e4), a3 = e4.getObjectId();
      if (!o5 || !this.view) return;
      if (a3) {
        const e5 = this.view?.allLayerViews.find((e6) => e6.layer.uid === o5.uid);
        if (!e5 || !("queryFeatures" in e5)) return;
        const r5 = e5.createQuery();
        r5.outSpatialReference = i4, r5.objectIds = [a3], r5.returnGeometry = true;
        const { features: n6 } = await e5.queryFeatures(r5, t);
        s2 = n6[0]?.geometry;
      }
      if (!s2 || "mesh" === s2.type) return;
      s2 = H(s2, i4), Z || (Z = await Promise.all([import("./intersectsOperator-SIVB2YW3.js"), import("./proximityOperator-YMIJD7VI.js")]));
      const [n5, l6] = Z;
      if (!n5.execute(s2, r4)) {
        const t2 = l6.getNearestCoordinate(s2, r4).coordinate ?? r4;
        this.selectedFeature === e4 && (this.location = t2);
      }
    } catch (a3) {
      d(a3) || n.getLogger(this).error(a3);
    }
    else this.location = o2(this.selectedFeature.geometry) ?? r4;
  }
  _cancelLocationUpdate() {
    this._locationUpdateController?.abort(), this._locationUpdateController = null;
  }
  _autoClose() {
    this.autoCloseEnabled && (this.visible = false);
  }
  async _getLayerView(e3, t) {
    return await e3.when(), e3.whenLayerView(t);
  }
  _getHighlightLayer(e3) {
    const { layer: t, sourceLayer: i4 } = e3;
    return i4 && "layer" in i4 && i4.layer ? i4.layer : "map-notes" === i4?.type || "subtype-group" === i4?.type ? i4 : t ?? i4;
  }
  _getHighlightLayerView(e3, t) {
    return "subtype-sublayer" === t.type && t.parent && this._mapIncludesLayer(t.parent) ? this._getLayerView(e3, t.parent) : t && this._mapIncludesLayer(t) ? this._getLayerView(e3, t) : null;
  }
  _getHighlightTarget(e3, t, i4) {
    if (z2(t.type, i4)) return e3;
    const s = e3.getObjectId();
    if (null != s) return s;
    const r4 = "imagery" === t.type ? void 0 : "objectIdField" in t ? t.objectIdField || o3 : null, o5 = e3.attributes;
    return o5 && r4 && o5[r4] || e3;
  }
  _mapIncludesLayer(e3) {
    return !!this.map?.allLayers?.includes(e3);
  }
  async _highlightFeature(e3, t) {
    this.removeHandles(e3);
    const i4 = this[t];
    if (!i4) return;
    const { highlightEnabled: s, view: r4, visible: o5 } = this;
    if (!r4 || !s || !o5) return;
    const a3 = this._getHighlightLayer(i4);
    if (!a3) return;
    const n5 = this._getHighlightLayerView(r4, a3);
    if (!n5) return;
    this._highlightPromises[e3] = n5;
    const l6 = await n5;
    if (!(l6 && n3(l6) && this._highlightPromises[e3] === n5 && this[t] && this.highlightEnabled)) return;
    const u2 = l6.highlight(this._getHighlightTarget(i4, a3, r4.type));
    this.addHandles(u2, e3);
  }
  async _highlightActiveFeature() {
    return this._highlightFeature("highlight-active-feature", "activeFeature");
  }
  async _highlightSelectedFeature() {
    return this._highlightFeature("highlight-selected-feature", "selectedFeature");
  }
  _updateFeatures(e3) {
    const { features: t } = this, i4 = e3.filter((e4) => !t.includes(e4));
    i4?.length && (this.features = t.concat(i4));
  }
};
__decorate([a()], D.prototype, "_fetchFeaturesController", void 0), __decorate([a({ type: i2 })], D.prototype, "actions", void 0), __decorate([a({ readOnly: true })], D.prototype, "active", null), __decorate([a()], D.prototype, "activeFeature", void 0), __decorate([a({ readOnly: true })], D.prototype, "allActions", null), __decorate([a()], D.prototype, "autoCloseEnabled", void 0), __decorate([a()], D.prototype, "browseClusterEnabled", void 0), __decorate([a()], D.prototype, "content", void 0), __decorate([a({ type: i2, readOnly: true })], D.prototype, "defaultActions", null), __decorate([a({ type: Boolean })], D.prototype, "defaultPopupTemplateEnabled", void 0), __decorate([a({ readOnly: true })], D.prototype, "featureCount", null), __decorate([a()], D.prototype, "featurePage", void 0), __decorate([a({ value: [] })], D.prototype, "features", null), __decorate([a()], D.prototype, "featuresPerPage", void 0), __decorate([a()], D.prototype, "featureMenuOpen", void 0), __decorate([a()], D.prototype, "featureMenuTitle", void 0), __decorate([a()], D.prototype, "featureViewModelAbilities", void 0), __decorate([a({ readOnly: true })], D.prototype, "featureViewModels", void 0), __decorate([a()], D.prototype, "highlightEnabled", void 0), __decorate([a()], D.prototype, "includeDefaultActions", void 0), __decorate([a()], D.prototype, "initialDisplayMode", void 0), __decorate([a({ type: _ })], D.prototype, "location", null), __decorate([a()], D.prototype, "map", null), __decorate([a({ readOnly: true })], D.prototype, "pendingPromisesCount", null), __decorate([a({ readOnly: true })], D.prototype, "promiseCount", null), __decorate([a()], D.prototype, "promises", null), __decorate([a({ readOnly: true })], D.prototype, "selectedClusterBoundaryFeature", void 0), __decorate([a({ value: null, readOnly: true })], D.prototype, "selectedFeature", null), __decorate([a({ value: -1 })], D.prototype, "selectedFeatureIndex", null), __decorate([a({ readOnly: true })], D.prototype, "selectedFeatureViewModel", null), __decorate([a({ type: S })], D.prototype, "spatialReference", null), __decorate([a({ readOnly: true })], D.prototype, "state", null), __decorate([a()], D.prototype, "timeZone", null), __decorate([a()], D.prototype, "title", void 0), __decorate([a()], D.prototype, "updateLocationEnabled", void 0), __decorate([a()], D.prototype, "view", void 0), __decorate([a()], D.prototype, "visible", void 0), __decorate([a({ readOnly: true })], D.prototype, "waitingForContents", null), __decorate([a({ readOnly: true })], D.prototype, "waitingForResult", null), __decorate([a()], D.prototype, "zoomFactor", void 0), __decorate([a()], D.prototype, "zoomToLocation", void 0), __decorate([a()], D.prototype, "centerAtLocation", null), D = __decorate([c("esri.widgets.Features.FeaturesViewModel")], D);

export {
  o2 as o,
  i2 as i,
  n4 as n,
  w,
  f3 as f,
  c3 as c,
  i3 as i2,
  D
};
//# sourceMappingURL=chunk-PNUK577G.js.map
