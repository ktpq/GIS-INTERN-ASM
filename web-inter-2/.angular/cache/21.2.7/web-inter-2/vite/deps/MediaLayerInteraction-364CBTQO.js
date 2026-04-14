import {
  f
} from "./chunk-OK32G4KK.js";
import "./chunk-H6BWPWXH.js";
import {
  h as h2
} from "./chunk-KI7SNQFW.js";
import "./chunk-HY6H36LC.js";
import "./chunk-PXICZPXV.js";
import {
  h
} from "./chunk-M44GXGOJ.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UXWT3ISO.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c as c2
} from "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import {
  L,
  c,
  e2 as e,
  i
} from "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/support/MediaLayerInteraction.js
var c3 = { redo: "r", undo: "z" };
var p = /* @__PURE__ */ Symbol();
var m = /* @__PURE__ */ Symbol();
var _ = /* @__PURE__ */ Symbol();
var u = class extends b {
  constructor(e2) {
    super(e2), this._tool = null, this._updatingHandles = new h2(), this.enabled = false, this._onPointerMove = L(async (e3) => {
      const t = await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e3));
      this.destroyed || (this.removeHandles(m), t && t !== this.selectedElement && this.addHandles(this.view.acquireCursor("pointer", "high"), m));
    });
  }
  initialize() {
    this.addHandles(c(this._updatingHandles)), this._updatingHandles.add(() => this.enabled, (e2) => this._setEnabled(e2), h), this._updatingHandles.add(() => this._preferredInteractionTool, () => this._preferredInteractionToolChanged());
  }
  get _validatedSelectedElement() {
    const e2 = this.selectedElement;
    if (!e2) return null;
    const { layer: { source: t } } = this;
    return t ? "hasElement" in t ? t.hasElement(e2) ? e2 : null : t === e2 ? e2 : null : null;
  }
  get _preferredInteractionTool() {
    return this.options?.tool ?? "transform";
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  _setEnabled(e2) {
    if (this.removeHandles(p), !e2) return;
    const { view: t } = this;
    this.addHandles([t.on("immediate-click", (e3) => this._onClick(e3), f.TOOL), t.on("pointer-move", (e3) => this._onPointerMove(e3).catch(() => {
    }), f.TOOL), t.on("key-down", (e3) => {
      e3.key === c3.undo && this._tool?.canUndo() && (this._tool.undo(), e3.stopPropagation()), e3.key === c3.redo && this._tool?.canRedo() && (this._tool.redo(), e3.stopPropagation());
    }), this._updatingHandles.add(() => this._validatedSelectedElement, (e3) => this._selectedElementChanged(e3), h), e(() => {
      this.removeHandles(m), this._removeTool();
    })], p);
  }
  async _findElementAtScreenPoint(e2) {
    const t = (await this.view.hitTest(e2, { include: [this.layer] })).results[0];
    return "media" === t?.type ? t.element : null;
  }
  async _onClick(e2) {
    await this._updatingHandles.addPromise(e2.defer(async () => {
      const t = await this._findElementAtScreenPoint(e2);
      this.destroyed || (t && e2.stopPropagation(), this.selectedElement = t, this.selectedElement && this.removeHandles(m));
    }));
  }
  _preferredInteractionToolChanged() {
    const { _tool: e2 } = this;
    e2 && (this._preferredInteractionTool === e2.type || this._updatingHandles.addPromise(this._recreateTool()));
  }
  async _recreateTool() {
    this.removeHandles(_), this._removeTool();
    const e2 = this._validatedSelectedElement;
    if (!e2) return;
    const t = new AbortController();
    this.addHandles(i(t), _);
    const { TransformTool: o, ControlPointsTransformTool: n } = await import("./editingTools-HSPYV7AO.js");
    if (t.signal.aborted) return;
    const { view: r } = this;
    switch (this._preferredInteractionTool) {
      case "transform":
        this._tool = new o({ target: e2, view: r });
        break;
      case "reshape":
        this._tool = new n({ mediaElement: e2, view: r });
    }
    this.addHandles(e(() => {
      this._tool && (r.tools.remove(this._tool), this._tool = null);
    }), this._tool), r.addAndActivateTool(this._tool);
  }
  _removeTool() {
    this._tool && this.removeHandles(this._tool);
  }
  async _selectedElementChanged(e2) {
    e2?.georeference ? await this._updatingHandles.addPromise(this._recreateTool()) : this._removeTool();
  }
};
__decorate([a()], u.prototype, "_validatedSelectedElement", null), __decorate([a()], u.prototype, "_preferredInteractionTool", null), __decorate([a({ constructOnly: true })], u.prototype, "view", void 0), __decorate([a({ constructOnly: true })], u.prototype, "layer", void 0), __decorate([a()], u.prototype, "selectedElement", void 0), __decorate([a()], u.prototype, "enabled", void 0), __decorate([a()], u.prototype, "options", void 0), __decorate([a()], u.prototype, "updating", null), u = __decorate([c2("esri.views.2d.layers.support.MediaLayerInteraction")], u);
export {
  u as MediaLayerInteraction
};
//# sourceMappingURL=MediaLayerInteraction-364CBTQO.js.map
