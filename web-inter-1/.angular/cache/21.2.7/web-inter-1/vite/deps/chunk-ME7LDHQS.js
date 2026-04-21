import {
  c as c2
} from "./chunk-YHDV72OA.js";
import {
  x
} from "./chunk-XJEMOC6M.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c
} from "./chunk-7ELXYOAW.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/widgets/support/GridControls/VisibleElements.js
var n = class extends b {
  constructor(o2) {
    super(o2), this.colorSelection = true, this.dynamicScaleToggle = true, this.gridEnabledToggle = true, this.numericInputs = true, this.gridSnapEnabledToggle = true, this.lineIntervalInput = true, this.outOfScaleWarning = true, this.placementButtons = true, this.rotateWithMapToggle = true;
  }
};
__decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "colorSelection", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "dynamicScaleToggle", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "gridEnabledToggle", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "numericInputs", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "gridSnapEnabledToggle", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "lineIntervalInput", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "outOfScaleWarning", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "placementButtons", void 0), __decorate([a({ type: Boolean, nonNullable: true })], n.prototype, "rotateWithMapToggle", void 0), n = __decorate([c("esri.widgets.support.GridControls.VisibleElements")], n);
var p = n;

// node_modules/@arcgis/core/widgets/support/LabeledSwitch.js
var n2 = () => c2({ icon: () => import("./calcite-icon-6UYXZHFB.js"), label: () => import("./calcite-label-TNFN3YZF.js"), switch: () => import("./calcite-switch-Y2OEG2CK.js"), tooltip: () => import("./calcite-tooltip-W24XE3CX.js") });
var i = "esri-labeled-switch";
var o = { label: `${i}__label`, labelContent: `${i}__label-content`, iconInfo: `${i}__icon_info`, iconWarning: `${i}__icon_warning`, tooltip: `${i}__tooltip` };
function c3({ checked: e, disabled: n3, hint: i2, key: c4, label: l, topLayerDisabled: a2, onChange: s, hintIcon: r, hintKind: p2 }) {
  return x("calcite-label", { class: o.label, disabled: n3, key: c4, layout: "inline-space-between", scale: "s" }, i2 ? x("div", { class: o.labelContent, key: "label-content" }, x("div", null, l), x("calcite-icon", { class: "warning" !== p2 ? o.iconInfo : o.iconWarning, icon: r ?? "information", id: c4, onclick: (e2) => e2.stopPropagation(), onpointerdown: (e2) => {
    e2.preventDefault(), e2.stopPropagation();
    const t = e2.target.nextElementSibling;
    t.open = !t.open;
  }, scale: "s", tabIndex: 0 }), x("calcite-tooltip", { class: o.tooltip, overlayPositioning: "fixed", referenceElement: c4, topLayerDisabled: a2 }, i2)) : l, x("calcite-switch", { checked: e, disabled: n3, scale: "s", onCalciteSwitchChange: (e2) => s(e2.currentTarget.checked) }));
}

export {
  p,
  n2 as n,
  c3 as c
};
//# sourceMappingURL=chunk-ME7LDHQS.js.map
