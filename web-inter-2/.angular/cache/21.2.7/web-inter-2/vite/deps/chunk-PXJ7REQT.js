import {
  l as l3,
  t
} from "./chunk-DHDZ3DK4.js";
import {
  x
} from "./chunk-LQFI5WNG.js";
import {
  h
} from "./chunk-6CBWVXS5.js";
import {
  n as n2
} from "./chunk-YTAOLVM3.js";
import {
  f as f2
} from "./chunk-FX3Y4WSL.js";
import {
  c as c2
} from "./chunk-LJCFV5JW.js";
import {
  n
} from "./chunk-AQC7ZMZB.js";
import {
  f,
  l as l2
} from "./chunk-L5CCICKP.js";
import {
  m
} from "./chunk-GW4HD2NW.js";
import {
  l
} from "./chunk-PM52Q5K4.js";
import {
  u
} from "./chunk-Y2SQYXOZ.js";
import {
  d
} from "./chunk-CJBFJRGB.js";
import {
  b
} from "./chunk-5OGMOTJP.js";
import {
  a3 as a2,
  c
} from "./chunk-XCGM4D6U.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/draw/support/HighlightHelper.js
var a3 = class extends b {
  constructor(e2) {
    super(e2), this._layerViewCache = /* @__PURE__ */ new Map(), this.highlightName = c2, this.view = null;
  }
  add(e2, t3) {
    const r2 = !e2 || Array.isArray(e2) ? e2 : [e2];
    if (!r2?.length) return;
    const i2 = t3 ?? this.highlightName;
    r2.forEach((e3) => this._highlight(e3, i2));
  }
  getKeyForFeature(e2) {
    const t3 = e2.getObjectId();
    return null != t3 ? `oid:${t3}` : `uid:${e2.uid}`;
  }
  remove(e2) {
    const t3 = !e2 || Array.isArray(e2) ? e2 : [e2];
    t3?.length && t3.forEach((e3) => e3 && this._removeHighlight(this.getKeyForFeature(e3)));
  }
  removeByKey(e2) {
    e2?.forEach((e3) => e3 && this._removeHighlight(e3));
  }
  removeAll() {
    this.removeAllHandles();
  }
  update(e2, t3) {
    this.remove(e2), this.add(e2, t3);
  }
  _highlight(e2, t3) {
    const r2 = e2.layer ?? e2.sourceLayer;
    if (!r2) return;
    const i2 = this._layerViewCache.get(r2);
    if (i2) return void this.addHandles(i2.highlight(e2, { name: t3 }), this.getKeyForFeature(e2));
    const s2 = l3(this.view, r2);
    n(s2) && (this._layerViewCache.set(r2, s2), this.addHandles(s2.highlight(e2, { name: t3 }), this.getKeyForFeature(e2)));
  }
  _removeHighlight(e2) {
    this.removeHandles(e2);
  }
};
__decorate([a2()], a3.prototype, "_layerViewCache", void 0), __decorate([a2()], a3.prototype, "highlightName", void 0), __decorate([a2()], a3.prototype, "view", void 0), a3 = __decorate([c("esri.views.draw.support.HighlightHelper")], a3);
var l4 = a3;

// node_modules/@arcgis/core/views/draw/support/input/GraphicMoverEvents.js
var t2 = class {
  constructor(t3, i2, s2, h3, e2) {
    this.graphic = t3, this.index = i2, this.x = s2, this.y = h3, this.viewEvent = e2, this.type = "graphic-click";
  }
};
var i = class {
  constructor(t3, i2, s2, h3, e2) {
    this.graphic = t3, this.index = i2, this.x = s2, this.y = h3, this.viewEvent = e2, this.type = "graphic-double-click";
  }
};
var s = class {
  constructor(t3, i2, s2, h3, e2, r2, c4, a5, n4, p) {
    this.graphic = t3, this.allGraphics = i2, this.index = s2, this.x = h3, this.y = e2, this.dx = r2, this.dy = c4, this.totalDx = a5, this.totalDy = n4, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move-start";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var h2 = class {
  constructor(t3, i2, s2, h3, e2, r2, c4, a5, n4, p) {
    this.graphic = t3, this.allGraphics = i2, this.index = s2, this.x = h3, this.y = e2, this.dx = r2, this.dy = c4, this.totalDx = a5, this.totalDy = n4, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var e = class {
  constructor(t3, i2, s2, h3, e2, r2, c4, a5, n4, p) {
    this.graphic = t3, this.allGraphics = i2, this.index = s2, this.x = h3, this.y = e2, this.dx = r2, this.dy = c4, this.totalDx = a5, this.totalDy = n4, this.viewEvent = p, this.defaultPrevented = false, this.type = "graphic-move-stop";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var r = class {
  constructor(t3, i2, s2, h3, e2) {
    this.graphic = t3, this.index = i2, this.x = s2, this.y = h3, this.viewEvent = e2, this.type = "graphic-pointer-over";
  }
};
var c3 = class {
  constructor(t3, i2, s2, h3, e2) {
    this.graphic = t3, this.index = i2, this.x = s2, this.y = h3, this.viewEvent = e2, this.type = "graphic-pointer-out";
  }
};
var a4 = class {
  constructor(t3, i2, s2, h3, e2) {
    this.graphic = t3, this.index = i2, this.x = s2, this.y = h3, this.viewEvent = e2, this.type = "graphic-pointer-down";
  }
};
var n3 = class {
  constructor(t3, i2, s2, h3, e2) {
    this.graphic = t3, this.index = i2, this.x = s2, this.y = h3, this.viewEvent = e2, this.type = "graphic-pointer-up";
  }
};

// node_modules/@arcgis/core/views/draw/support/GraphicMover.js
var H = "indicator-symbols";
var M = class extends l {
  constructor(i2) {
    super(i2), this._activeGraphic = null, this._dragEvent = null, this._hoverGraphic = null, this._indicators = [], this._initialDragGeometry = null, this._layerViews = null, this.type = "graphic-mover", this.callbacks = { onGraphicClick() {
    }, onGraphicDoubleClick() {
    }, onGraphicMoveStart() {
    }, onGraphicMove() {
    }, onGraphicMoveStop() {
    }, onGraphicPointerOver() {
    }, onGraphicPointerOut() {
    }, onGraphicPointerDown() {
    }, onGraphicPointerUp() {
    } }, this.enableMoveAllGraphics = false, this.graphics = [], this.highlightName = null, this.highlightsEnabled = false, this.indicatorsEnabled = false, this._defaultLayer = new h({ listMode: "hide", internal: true, title: "GraphicMover highlight layer" }), this.layer = this._defaultLayer, this.view = null;
  }
  initialize() {
    t(this.view, this.layer), this._highlightHelper = new l4({ view: this.view }), this.refresh(), this.addHandles([l2(() => this.graphics.length, () => this.refresh()), f(() => this.view?.ready, () => {
      this.addHandles([this.view.on("immediate-click", (i2) => this._clickHandler(i2), f2.TOOL), this.view.on("double-click", (i2) => this._doubleClickHandler(i2), f2.TOOL), this.view.on("pointer-down", (i2) => this._pointerDownHandler(i2), f2.TOOL), this.view.on("pointer-move", (i2) => this._pointerMoveHandler(i2), f2.TOOL), this.view.on("pointer-up", (i2) => this._pointerUpHandler(i2), f2.TOOL), this.view.on("drag", (i2) => this._dragHandler(i2), f2.TOOL), this.view.on("key-down", (i2) => this._keyDownHandler(i2), f2.TOOL)]);
    }, { once: true, initial: true }), l2(() => this.view, (i2) => {
      this._highlightHelper.removeAll(), this._highlightHelper.view = i2;
    }), l2(() => [this.highlightsEnabled, this.highlightName], () => {
      this._highlightHelper?.removeAll(), this._setUpHighlights();
    })]);
  }
  destroy() {
    this._removeIndicators(), this.view.map?.remove(this.layer), this._defaultLayer.destroy(), this.reset();
  }
  get state() {
    const i2 = this.view.ready, t3 = this.graphics.length > 0, e2 = this._activeGraphic;
    return i2 && t3 ? e2 ? "moving" : "active" : i2 ? "ready" : "disabled";
  }
  refresh() {
    this.reset(), this._setup();
  }
  reset() {
    this._activeGraphic = null, this._hoverGraphic = null, this._dragEvent = null, this._highlightHelper.removeAll();
  }
  updateGeometry(i2, t3) {
    const e2 = this.graphics[i2];
    e2 && (e2.set("geometry", t3), this._setUpIndicators());
  }
  _setup() {
    this._setUpHighlights(), this._setUpIndicators(), this._syncLayerViews();
  }
  _clickHandler(i2) {
    const t3 = this._findTargetGraphic(n2(i2));
    if (t3) {
      const e2 = new t2(t3, this.graphics.indexOf(t3), i2.x, i2.y, i2);
      this.emit("graphic-click", e2), this.callbacks.onGraphicClick?.(e2);
    }
  }
  _doubleClickHandler(i2) {
    const t3 = this._findTargetGraphic(n2(i2));
    if (t3) {
      const e2 = new i(t3, this.graphics.indexOf(t3), i2.x, i2.y, i2);
      this.emit("graphic-double-click", e2), this.callbacks.onGraphicDoubleClick?.(e2);
    }
  }
  _pointerDownHandler(i2) {
    const t3 = this._findTargetGraphic(n2(i2));
    if (t3) {
      this._activeGraphic = t3;
      const { x: e2, y: s2 } = i2, r2 = new a4(t3, this.graphics.indexOf(t3), e2, s2, i2);
      this.emit("graphic-pointer-down", r2), this.callbacks.onGraphicPointerDown?.(r2);
    } else this._activeGraphic = null;
  }
  _pointerUpHandler(i2) {
    if (this._activeGraphic) {
      const { x: t3, y: e2 } = i2, s2 = this.graphics.indexOf(this._activeGraphic), r2 = new n3(this._activeGraphic, s2, t3, e2, i2);
      this.emit("graphic-pointer-up", r2), this.callbacks.onGraphicPointerUp?.(r2), this._hoverGraphic = this._activeGraphic;
    }
  }
  _pointerMoveHandler(i2) {
    if (this._dragEvent) return;
    const t3 = this._findTargetGraphic(n2(i2));
    if (t3) {
      const { x: e2, y: s2 } = i2;
      if (this._hoverGraphic) {
        if (this._hoverGraphic === t3) return;
        const r3 = this.graphics.indexOf(this._hoverGraphic), h4 = new c3(this.graphics[r3], r3, e2, s2, i2);
        this._hoverGraphic = null, this.emit("graphic-pointer-out", h4), this.callbacks.onGraphicPointerOut?.(h4);
      }
      const r2 = this.graphics.indexOf(t3), h3 = new r(t3, r2, e2, s2, i2);
      return this._hoverGraphic = t3, this.emit("graphic-pointer-over", h3), void this.callbacks.onGraphicPointerOver?.(h3);
    }
    if (this._hoverGraphic) {
      const { x: t4, y: e2 } = i2, s2 = this.graphics.indexOf(this._hoverGraphic), r2 = new c3(this.graphics[s2], s2, t4, e2, i2);
      this._hoverGraphic = null, this.emit("graphic-pointer-out", r2), this.callbacks.onGraphicPointerOut?.(r2);
    }
  }
  _dragHandler(i2) {
    if ("start" !== i2.action && !this._dragEvent || !this._activeGraphic?.geometry) return;
    "start" === i2.action && this._removeIndicators(), i2.stopPropagation();
    const { action: t3, x: s2, y: r2 } = i2, h3 = this.graphics.indexOf(this._activeGraphic), o = this._dragEvent ? s2 - this._dragEvent.x : 0, a5 = this._dragEvent ? r2 - this._dragEvent.y : 0, n4 = s2 - i2.origin.x, c4 = r2 - i2.origin.y, l5 = "start" === t3 ? this._activeGraphic.geometry : this._initialDragGeometry, d2 = x(l5, n4, c4, this.view);
    if (this._activeGraphic.geometry = d2, this.enableMoveAllGraphics && this.graphics.forEach((i3) => {
      i3 !== this._activeGraphic && (i3.geometry = x(i3.geometry, o, a5, this.view));
    }), this._dragEvent = i2, "start" === t3) {
      this._initialDragGeometry = a(l5);
      const t4 = new s(this._activeGraphic, this.graphics, h3, s2, r2, o, a5, n4, c4, i2);
      this.emit("graphic-move-start", t4), this.callbacks.onGraphicMoveStart?.(t4), t4.defaultPrevented && this._activeGraphic.set("geometry", l5);
    } else if ("update" === t3) {
      const t4 = new h2(this._activeGraphic, this.graphics, h3, s2, r2, o, a5, n4, c4, i2);
      this.emit("graphic-move", t4), this.callbacks.onGraphicMove?.(t4), t4.defaultPrevented && (this._activeGraphic.geometry = l5);
    } else {
      const t4 = new e(this._activeGraphic, this.graphics, h3, s2, r2, o, a5, n4, c4, i2);
      this._dragEvent = null, this._activeGraphic = null, this._setUpIndicators(), this.emit("graphic-move-stop", t4), this.callbacks.onGraphicMoveStop?.(t4), t4.defaultPrevented && (this.graphics[h3].set("geometry", this._initialDragGeometry), this._setUpIndicators()), this._initialDragGeometry = null;
    }
  }
  _keyDownHandler(i2) {
    "a" !== i2.key && "d" !== i2.key && "n" !== i2.key || "moving" !== this.state || i2.stopPropagation();
  }
  _findTargetGraphic(i2) {
    const t3 = this.view.toMap(i2), e2 = this.graphics;
    this._syncLayerViews();
    const s2 = this._layerViews.flatMap((i3) => "graphicsViews" in i3 ? Array.from(i3.graphicsViews(), (i4) => i4.hitTest(t3)).flat() : i3.graphicsView.hitTest(t3)).filter((i3) => e2.includes(i3)).sort((i3, t4) => e2.indexOf(i3) - e2.indexOf(t4));
    return s2.length ? s2[0] : null;
  }
  _syncLayerViews() {
    this._layerViews = [];
    const i2 = /* @__PURE__ */ new Set();
    for (const t3 of this.graphics) {
      const e2 = l3(this.view, t3.layer);
      e2 && i2.add(e2);
    }
    this._layerViews = [...i2];
  }
  _setUpHighlights() {
    this.highlightsEnabled && this.graphics.length && this._highlightHelper.add(this.graphics, this.highlightName);
  }
  _setUpIndicators() {
    if (this._removeIndicators(), this.indicatorsEnabled) {
      for (const i2 of this.graphics) {
        const t3 = i2.clone();
        t3.symbol = E(i2), this._indicators.push(t3), this.addHandles(l2(() => i2.symbol, () => this._setUpIndicators()), H);
      }
      this.layer.addMany(this._indicators);
    }
  }
  _removeIndicators() {
    this.removeHandles(H), this._indicators.length && (this.layer.removeMany(this._indicators), this._indicators.forEach((i2) => i2.destroy()), this._indicators = []);
  }
};
function E(i2) {
  const t3 = 12;
  if (null == i2.symbol) return null;
  switch (i2.symbol.type) {
    case "cim":
      return new u({ style: "circle", size: t3, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    case "picture-marker": {
      const { xoffset: t4, yoffset: e2, height: s2, width: r2 } = i2.symbol, h3 = s2 === r2 ? r2 : Math.max(s2, r2);
      return new u({ xoffset: t4, yoffset: e2, size: h3, style: "square", color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    }
    case "simple-marker": {
      const { xoffset: t4, yoffset: e2, size: s2, style: r2 } = i2.symbol;
      return new u({ xoffset: t4, yoffset: e2, style: "circle" === r2 ? "circle" : "square", size: s2 + 2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    }
    case "simple-fill":
      return new m({ color: [0, 0, 0, 0], outline: { style: "dash", color: [255, 127, 0, 1], width: 1 } });
    case "simple-line":
      return new d({ color: [255, 127, 0, 1], style: "dash", width: 1 });
    case "text": {
      const { xoffset: e2, yoffset: s2 } = i2.symbol;
      return new u({ xoffset: e2, yoffset: s2, size: t3, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    }
    default:
      return null;
  }
}
__decorate([a2()], M.prototype, "_activeGraphic", void 0), __decorate([a2({ readOnly: true })], M.prototype, "type", void 0), __decorate([a2()], M.prototype, "callbacks", void 0), __decorate([a2()], M.prototype, "enableMoveAllGraphics", void 0), __decorate([a2()], M.prototype, "graphics", void 0), __decorate([a2()], M.prototype, "highlightName", void 0), __decorate([a2()], M.prototype, "highlightsEnabled", void 0), __decorate([a2()], M.prototype, "indicatorsEnabled", void 0), __decorate([a2()], M.prototype, "_defaultLayer", void 0), __decorate([a2()], M.prototype, "layer", void 0), __decorate([a2({ readOnly: true })], M.prototype, "state", null), __decorate([a2()], M.prototype, "view", void 0), M = __decorate([c("esri.views.draw.support.GraphicMover")], M);
var U = M;

export {
  l4 as l,
  U
};
//# sourceMappingURL=chunk-PXJ7REQT.js.map
