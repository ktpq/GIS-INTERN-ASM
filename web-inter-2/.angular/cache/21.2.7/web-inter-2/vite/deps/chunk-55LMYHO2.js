import {
  b,
  f,
  g,
  l as l3,
  m as m2,
  u as u2
} from "./chunk-QAQFE6RT.js";
import {
  c as c2
} from "./chunk-AVF3K4T4.js";
import {
  h as h2
} from "./chunk-KI7SNQFW.js";
import {
  w
} from "./chunk-LBXDB7YQ.js";
import {
  o
} from "./chunk-WWKLZ2P6.js";
import {
  l as l2
} from "./chunk-LQMHYEKG.js";
import {
  m
} from "./chunk-GALDA7CN.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  l,
  s,
  u
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";
import {
  h
} from "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/layers/LayerView.js
var I = class extends o(m(l2)) {
  get spatialReferenceSupported() {
    return true;
  }
  constructor(t) {
    super(t), this._updatingHandles = new h2(), this._attributionIndexTask = null, this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((t) => {
      if ("layerview:create-error" !== t.name) {
        const e = this.layer && this.layer.id || "no id", i = this.layer?.title || "no title";
        n.getLogger(this).error("#resolve()", `Failed to resolve layer view (layer title: '${i}', id: '${e}')`, t);
      }
    });
  }
  destroy() {
    this._updatingHandles = u(this._updatingHandles), this._attributionIndexTask = l(this._attributionIndexTask), this._set("parent", null);
  }
  get attributionItems() {
    const t = this._get("attributionItems") ?? [];
    if (this.suspended || !this.layer?.attributionVisible) return 0 === t.length ? t : [];
    if (!this.view.stationary) return t;
    const i = this.getAttributionItems();
    return h(t, i, (t2, e) => t2.text === e.text) ? t : i;
  }
  get attributionUpdating() {
    return !!this._attributionIndexTask && !this._attributionIndexTask.finished;
  }
  get fullOpacity() {
    return (this.layer?.opacity ?? 1) * (this.parent?.fullOpacity ?? 1);
  }
  get suspended() {
    return this.destroyed || !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    return !this.suspended && true === this.layer?.legendEnabled;
  }
  get updating() {
    return !(!this._updatingHandles?.updating && !this.isUpdating());
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get updateSuspended() {
    return this.suspended;
  }
  get visible() {
    return true === this.layer?.visible;
  }
  set visible(t) {
    this._overrideIfSome("visible", t);
  }
  get visibleAtCurrentScale() {
    return true;
  }
  get visibleAtCurrentTimeExtent() {
    const t = this.view.timeExtent, e = this.layer?.visibilityTimeExtent;
    return !t || !e || !t.intersection(e).isEmpty;
  }
  canResume() {
    const t = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return this.visible && this.layer?.loaded && this.parent && !this.parent.suspended && this.view?.ready && c2(t) && this.visibleAtCurrentScale && this.visibleAtCurrentTimeExtent || false;
  }
  getSuspendInfo() {
    const t = this.parent?.suspended ? this.parent.suspendInfo : {}, e = this;
    e.view?.ready || (t.viewNotReady = true), this.layer && this.layer.loaded || (t.layerNotLoaded = true);
    const i = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return c2(i) && this.visibleAtCurrentScale || (t.outsideScaleRange = true), this.visibleAtCurrentTimeExtent || (t.outsideVisibilityTimeExtent = true), this.visible || (t.layerInvisible = true), t;
  }
  isUpdating() {
    return false;
  }
  getAttributionItems() {
    const t = f(this.layer);
    if (t) return [t];
    if (b(this.layer) && (this._attributionIndexTask || (this._attributionIndexTask = w(async (t2) => {
      const e2 = await this.layer.fetchAttributionData();
      return s(t2), u2(e2);
    }), this._updatingHandles.addPromise(this._attributionIndexTask.promise)), this._attributionIndexTask?.finished && this._attributionIndexTask.value)) return l3(this._attributionIndexTask.value, this.layer.tileInfo, this.view.scale, this.view.extent);
    const e = g(this.layer);
    if (e) return [e];
    const r = m2(this.layer);
    return r ? [r] : [];
  }
};
__decorate([a({ readOnly: true })], I.prototype, "spatialReferenceSupported", null), __decorate([a()], I.prototype, "view", void 0), __decorate([a({ readOnly: true })], I.prototype, "attributionItems", null), __decorate([a({ readOnly: true })], I.prototype, "attributionUpdating", null), __decorate([a()], I.prototype, "fullOpacity", null), __decorate([a()], I.prototype, "layer", void 0), __decorate([a()], I.prototype, "parent", void 0), __decorate([a({ readOnly: true })], I.prototype, "suspended", null), __decorate([a({ readOnly: true })], I.prototype, "suspendInfo", null), __decorate([a({ readOnly: true })], I.prototype, "legendEnabled", null), __decorate([a({ type: Boolean, readOnly: true })], I.prototype, "updating", null), __decorate([a({ readOnly: true })], I.prototype, "updatingProgress", null), __decorate([a()], I.prototype, "updateSuspended", null), __decorate([a()], I.prototype, "visible", null), __decorate([a({ readOnly: true })], I.prototype, "visibleAtCurrentScale", null), __decorate([a({ readOnly: true })], I.prototype, "visibleAtCurrentTimeExtent", null), I = __decorate([c("esri.views.layers.LayerView")], I);

export {
  I
};
//# sourceMappingURL=chunk-55LMYHO2.js.map
