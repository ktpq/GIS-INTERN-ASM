import {
  n as n5,
  s as s3
} from "./chunk-6MANOION.js";
import {
  a as a2,
  g
} from "./chunk-FRAOLENO.js";
import {
  f
} from "./chunk-CAH3J23O.js";
import {
  A,
  S,
  nt
} from "./chunk-WLPGGM5I.js";
import {
  n as n6
} from "./chunk-SRVOEZ6S.js";
import {
  h2 as h,
  u as u2
} from "./chunk-AJJ6USJB.js";
import {
  c as c2
} from "./chunk-LJCFV5JW.js";
import {
  r as r2
} from "./chunk-AQC7ZMZB.js";
import {
  R,
  _
} from "./chunk-IODIHRP7.js";
import {
  n as n4
} from "./chunk-47CFN4JI.js";
import {
  e as e2
} from "./chunk-XCLLMA7R.js";
import {
  H
} from "./chunk-HHAFAO43.js";
import {
  u
} from "./chunk-UIKAL3FG.js";
import {
  n as n3
} from "./chunk-WEURYJAU.js";
import {
  l,
  w
} from "./chunk-L5CCICKP.js";
import {
  q
} from "./chunk-OEXL7OFS.js";
import {
  j
} from "./chunk-76B4KLE5.js";
import {
  z2 as z
} from "./chunk-T5K7SRI5.js";
import {
  s as s2
} from "./chunk-X2SNEXCL.js";
import {
  re
} from "./chunk-JC2AZ2NN.js";
import {
  n as n2
} from "./chunk-FDQUQGWK.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c
} from "./chunk-XCGM4D6U.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  n2 as n,
  r3 as r,
  s2 as s
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/linkChart/utils.js
function e3(e4) {
  return null != e4 && "object" == typeof e4 && "2d" === e4.type && "linkchart" === e4.view2dType;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/ClipMesh.js
var f2 = class _f {
  static async create(t2, e4) {
    const r3 = await g2(t2, e4);
    return r3 ? new _f(r3) : null;
  }
  constructor(t2) {
    this._target = t2;
  }
  destroy() {
    this._mesh?.destroy();
  }
  getMesh(t2, e4) {
    const r3 = this._target;
    if (!r3) return null;
    if (null !== this._mesh && this._lastStateVersion === e4.id) return this._mesh;
    const { vertices: s6, indices: i3 } = r3.getTriangulation(e4), n9 = i3 ? new Uint32Array(i3) : void 0, o = new Int32Array(s6);
    return this._lastStateVersion = e4.id, this._mesh?.destroy(), this._mesh = s3.createForShader(t2, { primitive: _.TRIANGLES, index: n9, vertex: o, layout: { pos: { type: R.INT, count: 2 } } }), this._mesh;
  }
};
async function g2(r3, s6) {
  switch (r3.type) {
    case "rect":
      return new w2(r3);
    case "path":
      return d.fromPath(r3);
    case "geometry":
      return _2.fromGeometry(r3, s6);
    default:
      return n.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new r("mapview-bad-type", "Unable to create ClippingInfo mesh from clip of type: ${clip.type}")), null;
  }
}
var _2 = class __ {
  static async fromGeometry({ geometry: t2 }, e4) {
    if (!t2) return null;
    switch (t2.type) {
      case "polygon":
        return this._fromPolygon(t2, e4);
      case "extent":
        return this._fromMapExtent(t2);
    }
  }
  static async _fromPolygon(t2, e4) {
    const s6 = t2.spatialReference ?? e4;
    await f(s6, e4);
    const c3 = H(t2, e4), l3 = re(e4), p = A(c3, false, false), h2 = nt(p, "esriGeometryPolygon", 100 * l3, false, false);
    if (!h2) return null;
    const u3 = await a2(h2);
    return u3 ? new __(u3.vertices, u3.indices) : null;
  }
  static _fromMapExtent(t2) {
    const { xmin: e4, ymin: r3, xmax: s6, ymax: i3 } = t2, n9 = new Float32Array([e4, r3, s6, r3, e4, i3, e4, i3, s6, r3, s6, i3]), o = new Uint32Array([0, 1, 2, 3, 4, 5]);
    return new __(n9, o);
  }
  constructor(t2, e4) {
    this._vertices = t2, this._indices = e4;
  }
  getTriangulation(t2) {
    const e4 = [], r3 = n4();
    for (let s6 = 0; s6 < this._vertices.length / 2; s6++) {
      const [i3, n9] = t2.toScreen(r3, [this._vertices[2 * s6], this._vertices[2 * s6 + 1]]);
      e4.push(i3, n9);
    }
    return { vertices: e4, indices: this._indices };
  }
};
var d = class _d {
  static fromPath({ path: t2 }) {
    const e4 = S({ paths: t2 }, false, false), r3 = g(e4);
    return r3 ? new _d(r3.vertices, r3.indices) : null;
  }
  constructor(t2, e4) {
    this._vertices = t2, this._indices = e4;
  }
  getTriangulation(t2) {
    return { vertices: this._vertices, indices: this._indices };
  }
};
var w2 = class {
  constructor(t2) {
    this._rect = t2;
  }
  getTriangulation(t2) {
    const { xmin: e4, xmax: r3, ymin: s6, ymax: i3 } = n6(this._rect, t2.size[0], t2.size[1]);
    return { vertices: [e4, s6, r3, s6, e4, i3, e4, i3, r3, s6, r3, i3], indices: new Uint32Array([0, 1, 2, 3, 4, 5]) };
  }
};

// node_modules/@arcgis/core/views/2d/layers/support/HighlightCounter.js
var i = class extends b {
  constructor() {
    super(...arguments), this._idToCounters = new e2();
  }
  get size() {
    return this._idToCounters.size;
  }
  get objectIds() {
    return this._idToCounters.keys();
  }
  get highlightNamesByObjectId() {
    return n7(this._idToCounters);
  }
  add(e4, t2) {
    let s6 = false;
    for (const r3 of e4) {
      const e5 = e(this._idToCounters, r3, () => (s6 = true, /* @__PURE__ */ new Map())), i3 = e5.get(t2) ?? 0;
      i3 || (s6 = true), e5.set(t2, i3 + 1);
    }
    return s6;
  }
  delete(e4, t2) {
    let o = false;
    for (const s6 of e4) {
      const e5 = this._idToCounters.get(s6);
      if (!e5) continue;
      let r3 = e5.get(t2);
      null != r3 && (r3--, r3 > 0 ? e5.set(t2, r3) : (e5.delete(t2), o = true), 0 === e5.size && (this._idToCounters.delete(s6), o = true));
    }
    return o;
  }
};
function* n7(e4) {
  for (const [t2, o] of e4) yield [t2, o.keys()];
}
i = __decorate([c("esri.views.2d.layers.support.HighlightCounter")], i);

// node_modules/@arcgis/core/views/layers/support/ClipArea.js
var t = class extends n2 {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
__decorate([a({ readOnly: true })], t.prototype, "version", null), t = __decorate([c("esri.views.layers.support.ClipArea")], t);

// node_modules/@arcgis/core/views/layers/support/ClipRect.js
var i2;
var s4 = i2 = class extends t {
  constructor(t2) {
    super(t2), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new i2({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
__decorate([a({ type: [Number, String], json: { write: true } })], s4.prototype, "left", void 0), __decorate([a({ type: [Number, String], json: { write: true } })], s4.prototype, "right", void 0), __decorate([a({ type: [Number, String], json: { write: true } })], s4.prototype, "top", void 0), __decorate([a({ type: [Number, String], json: { write: true } })], s4.prototype, "bottom", void 0), s4 = i2 = __decorate([c("esri.views.layers.support.ClipRect")], s4);

// node_modules/@arcgis/core/views/layers/support/GeometryClipArea.js
var y;
var l2 = { base: s2, key: "type", typeMap: { extent: z, polygon: j } };
var n8 = y = class extends t {
  constructor(e4) {
    super(e4), this.type = "geometry", this.geometry = null;
  }
  clone() {
    return new y({ geometry: this.geometry?.clone() ?? null });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
};
__decorate([a({ types: l2, json: { read: u, write: true } })], n8.prototype, "geometry", void 0), n8 = y = __decorate([c("esri.views.layers.support.GeometryClipArea")], n8);

// node_modules/@arcgis/core/views/layers/support/Path.js
var s5 = class extends t {
  constructor(t2) {
    super(t2), this.type = "path", this.path = [];
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
__decorate([a({ type: [[[Number]]], json: { write: true } })], s5.prototype, "path", void 0), s5 = __decorate([c("esri.views.layers.support.Path")], s5);

// node_modules/@arcgis/core/views/2d/layers/LayerView2D.js
var _3 = q.ofType({ key: "type", base: null, typeMap: { rect: s4, path: s5, geometry: n8 } });
var H2 = new (q.ofType(u2))();
var S2 = (m) => {
  const f3 = m;
  let y2 = class extends f3 {
    constructor() {
      super(...arguments), this._highlightCounter = new i(), this.attached = false, this.clips = new _3(), this.highlights = null, this.lastUpdateId = -1, this.moving = false, this.updateRequested = false, this._visibleAtCurrentScale = true;
    }
    initialize() {
      const t2 = this.view?.spatialReferenceLocked ?? true, e4 = this.view?.spatialReference;
      e4 && t2 && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new r("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new n5()), this.container.fadeTransitionEnabled = true, this.container.visible = false, this.container.endTransitions(), this.addHandles([l(() => this.suspended, (t3) => {
        this.container && (this.container.visible = !t3);
      }, w), l(() => this.updateSuspended, (t3) => {
        this.view && !t3 && this.updateRequested && this.view.requestUpdate();
      }, w), l(() => this.layer?.opacity ?? 1, (t3) => {
        this.container && (this.container.opacity = t3);
      }, w), l(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (t3) => {
        this.container && (this.container.blendMode = t3);
      }, w), l(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (t3) => {
        this.container && (this.container.effect = t3);
      }, w), l(() => this._mergedHighlights.items.map((t3) => ({ name: t3.name, options: { fillColor: t3.color, haloColor: t3.haloColor, fillOpacity: t3.fillOpacity, haloOpacity: t3.haloOpacity, haloWidth: t3.haloWidth, haloBlur: t3.haloBlur } })), () => {
        this.container.highlightGradient = h(this.container.highlightGradient, this._mergedHighlights.items);
      }, w), l(() => this._mergedHighlights.items.map((t3) => t3.name), () => {
        this._processHighlight();
      }), l(() => this.clips.map((t3) => t3.version), async () => {
        if (this.container) {
          const t3 = this.view.spatialReference, e5 = await this._updatingHandles.addPromise(Promise.all(this.clips.items.map((e6) => f2.create(e6, t3))));
          for (const i3 of this.container.clips) i3.destroy();
          this.container.clips = e5.filter((t4) => !!t4);
        }
      }, w), l(() => ({ scale: this.view?.scale, scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null }), ({ scale: t3, scaleRange: e5 }) => {
        const i3 = r2(e5, t3);
        i3 !== this._visibleAtCurrentScale && (this._visibleAtCurrentScale = i3);
      }, w)], "constructor"), this.view?.whenLayerView ? this.view.whenLayerView(this.layer).then((t3) => {
        t3 === this && this.processAttach();
      }, () => {
      }) : this.when().then(() => {
        this.processAttach();
      }, () => {
      }));
    }
    destroy() {
      this.processDetach(), this.updateRequested = false;
      for (const t2 of this.container?.clips ?? []) t2.destroy();
    }
    get highlightOptions() {
      return this._logHighlightOptionsDeprecation(), this.highlights?.find(({ name: t2 }) => t2 === c2);
    }
    set highlightOptions(t2) {
      if (this._logHighlightOptionsDeprecation(), !this.highlights) {
        if (!t2) return;
        this.highlights = new q([new u2()]);
      }
      const i3 = this.highlights.find(({ name: t3 }) => t3 === c2);
      t2 ? i3?.assignFrom(t2) : (this.highlights.remove(i3), 0 === this.highlights.length && (this.highlights = null));
    }
    _logHighlightOptionsDeprecation() {
      s(n.getLogger(this), "`LayerView.highlightOptions` is deprecated in favor of View.highlights", { replacement: "View.highlights", version: "4.34", see: "https://arcg.is/inbTa1#highlights", warnOnce: true });
    }
    get hasHighlight() {
      return this._highlightCounter.size > 0;
    }
    get _mergedHighlights() {
      if (!this.view) return H2;
      if (!this.highlights) return this.view.highlights;
      const t2 = this.view.highlights.clone();
      for (const e4 of this.highlights) {
        const i3 = t2.find((t3) => t3.name === e4.name);
        i3 && i3.assignFrom(e4);
      }
      return t2;
    }
    get highlightIds() {
      return Array.from(this._highlightCounter.objectIds);
    }
    get scheduler() {
      return this.view.scheduler;
    }
    get spatialReferenceSupported() {
      const t2 = this.view?.spatialReference;
      return null == t2 || this.supportsSpatialReference(t2);
    }
    get updating() {
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !!this._updatingHandles?.updating || this.container.transitioning);
    }
    get visibleAtCurrentScale() {
      return this._visibleAtCurrentScale;
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = true, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = false, this.removeHandles("attach"), this.detach(), this.updateRequested = false);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = true, this.updateSuspended || this.view.requestUpdate());
    }
    processUpdate(t2) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", t2), this.updateRequested && !this.updateSuspended && (this.updateRequested = false, this.update(t2))) : this.updateRequested = false;
    }
    hitTest(t2, e4) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(t2) {
      return true;
    }
    canResume() {
      if (!this.spatialReferenceSupported) return false;
      switch (this.layer?.type) {
        case "link-chart":
        case "knowledge-graph-sublayer":
        case "graphics":
          break;
        default:
          if (e3(this.view) && !this.view.inGeographicLayout) return false;
      }
      return !!super.canResume() && this.visibleAtCurrentScale;
    }
    getSuspendInfo() {
      const t2 = super.getSuspendInfo(), e4 = !this.spatialReferenceSupported;
      return e4 && (t2.spatialReferenceNotSupported = e4), t2;
    }
    addAttachHandles(t2) {
      this.addHandles(t2, "attach");
    }
    _addHighlights(t2, e4) {
      this._highlightCounter.add(t2, e4) && this._processHighlight();
    }
    _removeHighlights(t2, e4) {
      this._highlightCounter.delete(t2, e4) && this._processHighlight();
    }
    _processHighlight() {
    }
    _getHighlights() {
      const t2 = [];
      for (const [e4, i3] of this._highlightCounter.highlightNamesByObjectId) {
        const s6 = this._getHighlightBits(i3);
        t2.push({ objectId: e4, highlightFlags: s6 });
      }
      return t2;
    }
    _getHighlightBits(t2) {
      const e4 = new Set(t2);
      let i3 = 1, s6 = 0;
      if (!this.view) return 0;
      const h2 = this._mergedHighlights;
      for (const { name: r3 } of h2) e4.delete(r3) && (s6 = i3), i3 <<= 1;
      return s6;
    }
  };
  return __decorate([a()], y2.prototype, "attached", void 0), __decorate([a({ type: _3, set(t2) {
    const e4 = n3(t2, this._get("clips"), _3);
    this._set("clips", e4);
  } })], y2.prototype, "clips", void 0), __decorate([a()], y2.prototype, "container", void 0), __decorate([a({ type: u2 })], y2.prototype, "highlightOptions", null), __decorate([a({ type: q.ofType(u2) })], y2.prototype, "highlights", void 0), __decorate([a()], y2.prototype, "_mergedHighlights", null), __decorate([a()], y2.prototype, "moving", void 0), __decorate([a({ readOnly: true })], y2.prototype, "spatialReferenceSupported", null), __decorate([a({ readOnly: true })], y2.prototype, "updateParameters", void 0), __decorate([a()], y2.prototype, "updateRequested", void 0), __decorate([a()], y2.prototype, "updating", null), __decorate([a()], y2.prototype, "view", void 0), __decorate([a()], y2.prototype, "_visibleAtCurrentScale", void 0), __decorate([a({ readOnly: true })], y2.prototype, "visibleAtCurrentScale", null), y2 = __decorate([c("esri.views.2d.layers.LayerView2D")], y2), y2;
};

export {
  n8 as n,
  S2 as S
};
//# sourceMappingURL=chunk-KBP4WTYN.js.map
