import {
  c as c8,
  n as n4,
  p as p5
} from "./chunk-ME7LDHQS.js";
import {
  _e
} from "./chunk-WIJBHQRU.js";
import {
  c as c7,
  s,
  u as u3
} from "./chunk-XNQ46IBO.js";
import {
  l as l7
} from "./chunk-SHJQJRXT.js";
import {
  e as e5
} from "./chunk-W6MGKIR7.js";
import {
  c as c6,
  n as n2,
  n2 as n3
} from "./chunk-DP2PTG4E.js";
import {
  c as c5
} from "./chunk-5AR533LE.js";
import {
  o as o2,
  r as r3
} from "./chunk-VLHLV4G6.js";
import {
  h as h3
} from "./chunk-K7QCGVDB.js";
import {
  f as f2,
  i as i2,
  l as l6,
  t as t2
} from "./chunk-U7EJFDT6.js";
import {
  c as c4,
  m as m2
} from "./chunk-IXCAA3KK.js";
import {
  o
} from "./chunk-KY6VK7AR.js";
import {
  I as I2,
  v as v2
} from "./chunk-JXYP5TTH.js";
import {
  I
} from "./chunk-6RMIGCJW.js";
import {
  d,
  p as p4
} from "./chunk-S22GYE6C.js";
import {
  e as e4
} from "./chunk-UM6VM6JA.js";
import {
  O,
  c as c3
} from "./chunk-YHDV72OA.js";
import {
  S,
  m,
  p as p2,
  v,
  w as w3,
  x
} from "./chunk-XJEMOC6M.js";
import {
  h as h2,
  w as w4
} from "./chunk-DA25W2D5.js";
import {
  a as a3,
  l as l5,
  p as p3
} from "./chunk-5MDFQFDX.js";
import {
  w as w5
} from "./chunk-AP2NAWWU.js";
import {
  l,
  reEmitEvent
} from "./chunk-N4A2F7D5.js";
import {
  usePropertyChange
} from "./chunk-PQURDETH.js";
import {
  LitElement,
  createEvent,
  css
} from "./chunk-SIEFVWAL.js";
import {
  x as x2
} from "./chunk-FAG2TZ7O.js";
import {
  E
} from "./chunk-DWF2MCID.js";
import {
  j
} from "./chunk-2YANO3UR.js";
import {
  g
} from "./chunk-XYIHFHUH.js";
import {
  i
} from "./chunk-UXWT3ISO.js";
import {
  _
} from "./chunk-YVKQ6DO2.js";
import {
  a,
  f,
  h,
  l as l3,
  w as w2
} from "./chunk-6CYBR6FP.js";
import {
  q
} from "./chunk-AE7PFPPS.js";
import {
  l as l4
} from "./chunk-LD7VLL5E.js";
import {
  b
} from "./chunk-2HP4RAZC.js";
import {
  a3 as a2,
  c as c2,
  e2 as e3
} from "./chunk-7ELXYOAW.js";
import {
  L,
  e,
  e2,
  l2,
  p,
  t,
  u2,
  w,
  y
} from "./chunk-2KP24SU5.js";
import {
  c,
  n2 as n,
  r,
  r3 as r2
} from "./chunk-XE7VYYSA.js";
import {
  N,
  u
} from "./chunk-XCN5EJK7.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Sketch/CreateToolVisibilityMap.js
var n5 = class extends b {
  constructor(o5) {
    super(o5), this.point = true, this.polyline = true, this.polygon = true, this.rectangle = true, this.circle = true, this.multipoint = true, this.mesh = true, this.freehandPolyline = false, this.freehandPolygon = false, this.text = false;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "point", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "polyline", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "polygon", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "rectangle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "circle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "multipoint", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "mesh", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "freehandPolyline", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "freehandPolygon", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], n5.prototype, "text", void 0), n5 = __decorate([c2("esri.widgets.Sketch.CreateToolVisibilityMap")], n5);
var p6 = n5;

// node_modules/@arcgis/core/widgets/Sketch/SelectionToolVisibilityMap.js
var l8 = class extends b {
  constructor(o5) {
    super(o5), this["rectangle-selection"] = true, this["lasso-selection"] = true, this["custom-selection"] = true;
  }
};
__decorate([a2({ nonNullable: true })], l8.prototype, "rectangle-selection", void 0), __decorate([a2({ nonNullable: true })], l8.prototype, "lasso-selection", void 0), __decorate([a2({ nonNullable: true })], l8.prototype, "custom-selection", void 0), l8 = __decorate([c2("esri.widgets.Sketch.SelectionToolVisibilityMap")], l8);
var c9 = l8;

// node_modules/@arcgis/core/widgets/support/SnappingControls/VisibleElements.js
var r4 = class extends b {
  constructor(e6) {
    super(e6), this.enabledToggle = true, this.featureEnabledToggle = true, this.gridEnabledToggle = true, this.header = false, this.layerList = true, this.gridControls = true, this.gridControlsElements = new p5({ gridSnapEnabledToggle: false, gridEnabledToggle: false }), this.layerListToggleLayersButton = true, this.selfEnabledToggle = true;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "enabledToggle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "featureEnabledToggle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "gridEnabledToggle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "header", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "layerList", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "gridControls", void 0), __decorate([a2({ type: p5, nonNullable: true })], r4.prototype, "gridControlsElements", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "layerListToggleLayersButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r4.prototype, "selfEnabledToggle", void 0), r4 = __decorate([c2("esri.widgets.support.SnappingControls.VisibleElements")], r4);
var s2 = r4;

// node_modules/@arcgis/core/widgets/Sketch/VisibleElements.js
var p7 = class extends b {
  constructor(o5) {
    super(o5), this.createTools = new p6(), this.directionModePicker = false, this.duplicateButton = true, this.deleteButton = true, this.selectionCountLabel = true, this.labelsToggle = true, this.selectionTools = new c9(), this.settingsMenu = true, this.snappingControls = true, this.snappingControlsElements = new s2(), this.tooltipsToggle = true, this.undoRedoMenu = true;
  }
};
__decorate([a2({ type: p6, nonNullable: true })], p7.prototype, "createTools", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "directionModePicker", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "duplicateButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "deleteButton", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "selectionCountLabel", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "labelsToggle", void 0), __decorate([a2({ type: c9, nonNullable: true })], p7.prototype, "selectionTools", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "settingsMenu", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "snappingControls", void 0), __decorate([a2({ type: s2, nonNullable: true })], p7.prototype, "snappingControlsElements", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "tooltipsToggle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p7.prototype, "undoRedoMenu", void 0), p7 = __decorate([c2("esri.widgets.Sketch.VisibleElements")], p7);
var r5 = p7;

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/responsiveToolbarUtils.js
var o3 = { groupSeparator: 1, groupPadding: { s: 4, m: 8, l: 10 }, actionPadding: { s: 4, m: 8, l: 10 }, action: { s: 24, m: 32, l: 44 }, splitButtonPart: { horizontal: { s: 16, m: 16, l: 24 }, vertical: { s: 16, m: 24, l: 40 } } };
var t3 = { splitButton: { horizontal: "chevron-down", vertical: "ellipsis" }, overflow: "ellipsis" };
function l9(o5, t5) {
  return o5.vnodeSelector === t5 ? [o5] : o5.children?.flatMap((o6) => l9(o6, t5)) ?? [];
}

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/ToolbarGroupBase.js
var o4 = (o5) => {
  const r8 = o5;
  let a5 = class extends r8 {
    constructor() {
      super(...arguments), this.priority = 0, this.scale = "m", this.slot = void 0, this.lastActiveKey = null, this.layout = "horizontal";
    }
    destroy() {
      this.measurementManager?.managedElements.remove(this), this.measurementManager = null;
    }
    set measurementManager(e6) {
      const t5 = this._get("measurementManager");
      e6 !== t5 && (t5 && t5.managedElements.remove(this), this._set("measurementManager", e6), e6?.managedElements.add(this));
    }
    set budgetedLength(e6) {
      this.budgetedLength !== e6 && (this._set("budgetedLength", e6), this.scheduleRender());
    }
    get actionChildren() {
      return this.children?.flatMap((e6) => l9(e6, "calcite-action")) ?? [];
    }
    get activeChildElement() {
      const e6 = this.actionChildren.find((e7) => true === e7.properties?.active);
      return e6 ? (this._set("lastActiveKey", e6.properties?.key), e6) : this.lastActiveKey ? this.actionChildren.find((e7) => e7.properties?.key === this.lastActiveKey) : void 0;
    }
    _handleClick(e6) {
      e6?.dataset && "dataset" in e6 && e6.dataset.actionKey && (this.lastActiveKey = e6.dataset.actionKey);
    }
  };
  return __decorate([a2()], a5.prototype, "priority", void 0), __decorate([a2()], a5.prototype, "measurementManager", null), __decorate([a2()], a5.prototype, "budgetedLength", null), __decorate([a2()], a5.prototype, "actionChildren", null), __decorate([a2()], a5.prototype, "activeChildElement", null), __decorate([a2()], a5.prototype, "scale", void 0), __decorate([a2()], a5.prototype, "slot", void 0), __decorate([a2()], a5.prototype, "lastActiveKey", void 0), __decorate([a2()], a5.prototype, "layout", void 0), a5 = __decorate([c2("esri.widgets.Sketch.support.ResponsiveToolbar.ToolbarGroupBase")], a5), a5;
};

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/MeasuredContentGroup.js
var m3 = /* @__PURE__ */ Symbol("on-resize-handle-key");
var a4 = class extends o4(O) {
  constructor(e6) {
    super(e6), this._measuredWidth = 0, this._measuredHeight = 0, this._measuredElement = null;
  }
  destroy() {
    this._measuredElement = null;
  }
  get lengthOptions() {
    return ["horizontal" === this.layout ? this._measuredWidth : this._measuredHeight];
  }
  render() {
    return x("div", { afterCreate: (e6) => {
      this._measuredElement = e6.firstElementChild, this.addHandles(p2(this._measuredElement, () => {
        this._measuredWidth = this._measuredElement?.clientWidth ?? 0, this._measuredHeight = this._measuredElement?.clientHeight ?? 0;
      }), m3);
    }, afterRemoved: () => this.removeHandles(m3) }, this.children);
  }
};
__decorate([a2()], a4.prototype, "_measuredWidth", void 0), __decorate([a2()], a4.prototype, "_measuredHeight", void 0), __decorate([a2()], a4.prototype, "lengthOptions", null), __decorate([a2()], a4.prototype, "_measuredElement", void 0), a4 = __decorate([c2("esri.widgets.Sketch.support.ResponsiveToolbar.MeasuredContentGroup")], a4);

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/OverflowGroup.js
var m4 = class extends o4(O) {
  constructor(t5) {
    super(t5), this.allowCollapse = true, this.messagesCommon = null;
  }
  loadDependencies() {
    return c3({ action: () => import("./calcite-action-EB7V3T34.js"), "action-group": () => import("./calcite-action-group-JWLCLMBV.js"), "action-menu": () => import("./calcite-action-menu-AHBDEK66.js") });
  }
  static {
    this.vnodeSelector = "calcite-action-group";
  }
  get minimumLength() {
    const { actionChildren: t5, scale: o5 } = this;
    return t5.length ? this.allowCollapse ? o3.groupSeparator + o3.groupPadding[o5] + (o3.action[o5] + o3.actionPadding[o5]) * Math.min(t5.length, 2) : o3.groupSeparator + o3.groupPadding[o5] + (o3.action[o5] + o3.actionPadding[o5]) * t5.length : 0;
  }
  get lengthOptions() {
    const { actionChildren: t5, scale: o5, minimumLength: e6, allowCollapse: i4, priority: r8 } = this, s5 = [e6];
    if (t5.length <= 2 || !i4 || r8 < 1) return s5;
    for (let a5 = 1; a5 < t5.length - 1; a5++) s5.push(e6 + (o3.action[o5] + o3.actionPadding[o5]) * a5);
    return s5;
  }
  render() {
    if (!this.actionChildren.length) return x(S, null, void 0);
    const { budgetedLength: t5, actionChildren: o5, activeChildElement: e6, layout: i4, slot: s5, scale: a5 } = this, p12 = Math.floor((t5 - o3.groupPadding[a5] - o3.groupSeparator) / (o3.action[a5] + o3.actionPadding[a5])), m10 = [], d3 = [];
    if (p12 >= o5.length) m10.push(...o5);
    else {
      const t6 = e6 ?? m10.at(0);
      if (m10.push(...o5.slice(0, p12 - 1)), d3.push(...o5.slice(p12 - 1)), t6 && d3.includes(t6)) {
        const [o6] = d3.splice(d3.indexOf(t6), 1), e7 = m10.pop();
        m10.push(o6), e7 && d3.unshift(e7);
      }
    }
    return x("calcite-action-group", { key: "overflow-button-group", layout: i4, onclick: (t6) => this._handleClick(t6.target), slot: s5 }, m10.map((t6) => this._renderManagedAction(t6)), d3.length > 0 ? x("calcite-action-menu", { key: "split-button-dropdown", label: this.messagesCommon.more, overlayPositioning: "fixed" }, x("calcite-action", { icon: t3.overflow, key: "split-button-dropdown-trigger", scale: a5, slot: "trigger", text: this.messagesCommon.more }), d3.map((t6) => this._renderManagedAction(t6))) : void 0);
  }
  _renderManagedAction(t5) {
    return x("calcite-action", __spreadProps(__spreadValues({}, t5?.properties), { "data-action-key": t5?.properties?.key, text: t5?.properties?.text ?? "" }));
  }
};
__decorate([a2()], m4.prototype, "allowCollapse", void 0), __decorate([a2()], m4.prototype, "minimumLength", null), __decorate([a2(), v("esri/t9n/common")], m4.prototype, "messagesCommon", void 0), __decorate([a2()], m4.prototype, "lengthOptions", null), m4 = __decorate([c2("esri.widgets.Sketch.support.ResponsiveToolbar.OverflowGroup")], m4);

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/ResponsiveToolbarManager.js
var i3 = class extends b {
  constructor() {
    super(...arguments), this.measuredElement = null, this.managedElements = new q(), this.availableLength = 0, this.layout = "horizontal", this._resizeObserver = new ResizeObserver(() => {
      this._measure();
    });
  }
  get _sortedElements() {
    return [...this.managedElements].sort((e6, t5) => t5.priority - e6.priority);
  }
  connect(e6) {
    this._resizeObserver.disconnect(), this.measuredElement = e6, this._resizeObserver.observe(e6), this._measure();
  }
  allocate() {
    const e6 = /* @__PURE__ */ new Map(), { availableLength: t5, _sortedElements: s5 } = this;
    let o5 = 0;
    for (const r8 of s5) {
      const t6 = r8.lengthOptions[0];
      e6.set(r8, t6), o5 += t6;
    }
    for (const r8 of s5) for (; o5 < t5; ) {
      const s6 = e6.get(r8);
      if (!s6) break;
      const i4 = r8.lengthOptions.find((e7) => e7 > s6);
      if (!i4) break;
      const n8 = o5 - s6 + i4;
      if (n8 > t5) break;
      e6.set(r8, i4), o5 = n8;
    }
    for (const [r8, i4] of e6) r8.budgetedLength = i4;
  }
  _measure() {
    const e6 = this.measuredElement;
    this.availableLength = e6 ? "horizontal" === this.layout ? e6.clientWidth ?? 0 : e6.clientHeight ?? 0 : 0, this.allocate();
  }
  destroy() {
    this._resizeObserver.disconnect();
  }
};
__decorate([a2()], i3.prototype, "measuredElement", void 0), __decorate([a2()], i3.prototype, "managedElements", void 0), __decorate([a2()], i3.prototype, "_sortedElements", null), __decorate([a2()], i3.prototype, "availableLength", void 0), __decorate([a2()], i3.prototype, "layout", void 0), i3 = __decorate([c2("esri.widgets.Sketch.support.ResponsiveToolbar.ResponsiveToolbarManager")], i3);

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/SplitButton.js
var d2 = { splitButtonBase: `${"esri-split-button"}--split-part` };
var m5 = class extends o4(O) {
  constructor(t5) {
    super(t5), this.allowCollapse = true, this.messagesCommon = null;
  }
  loadDependencies() {
    return c3({ action: () => import("./calcite-action-EB7V3T34.js"), "action-group": () => import("./calcite-action-group-JWLCLMBV.js"), "action-menu": () => import("./calcite-action-menu-AHBDEK66.js") });
  }
  static {
    this.vnodeSelector = "calcite-action-group";
  }
  get minimumLength() {
    const t5 = this.actionChildren;
    if (!t5.length) return 0;
    const { scale: o5 } = this;
    return 1 === t5.length ? o3.action[o5] + o3.groupSeparator + o3.groupPadding[o5] : this.allowCollapse ? o3.action[o5] + 2 * o3.actionPadding[o5] + o3.groupPadding[o5] + o3.splitButtonPart[this.layout][o5] + o3.groupSeparator : (o3.action[o5] + o3.actionPadding[o5]) * t5.length + o3.groupSeparator + o3.groupPadding[o5];
  }
  get lengthOptions() {
    const { actionChildren: t5, minimumLength: o5, scale: e6, priority: i4, allowCollapse: r8 } = this;
    if (t5.length < 2 || i4 < 0 || !r8) return [o5];
    return [o5, o3.groupSeparator + o3.groupPadding[e6] + (o3.action[e6] + o3.actionPadding[e6]) * t5.length];
  }
  render() {
    if (!this.actionChildren.length) return x(S, null, void 0);
    const { actionChildren: t5, minimumLength: o5, budgetedLength: e6, layout: i4, slot: n8, allowCollapse: r8 } = this, s5 = !r8 || t5.length < 2 || e6 > o5;
    return x("calcite-action-group", { key: "split-button-group", layout: i4, onclick: (t6) => this._handleClick(t6.target), slot: n8 }, s5 ? this._renderUnSplit() : this._renderSplit());
  }
  _renderSplit() {
    const { activeChildElement: t5, layout: o5, actionChildren: e6, scale: i4, messagesCommon: n8 } = this, s5 = t5 ?? e6.at(0);
    if (!s5) return;
    const a5 = e6.filter((t6) => t6 !== s5);
    return [this._renderManagedAction(s5), x("calcite-action-menu", { key: "split-button-dropdown", label: n8.more, overlayPositioning: "fixed", placement: "horizontal" === o5 ? "bottom-end" : "right-end" }, x("calcite-action", { class: `${d2.splitButtonBase}--${o5}--${this.scale}`, compact: "horizontal" === o5, icon: t3.splitButton[o5], key: "split-button-dropdown-trigger", scale: i4, slot: "trigger", text: n8.more }), a5?.map((t6) => this._renderManagedAction(t6)))];
  }
  _renderUnSplit() {
    return this.actionChildren.map((t5) => this._renderManagedAction(t5));
  }
  _renderManagedAction(t5) {
    return x("calcite-action", __spreadProps(__spreadValues({}, t5?.properties), { "data-action-key": t5?.properties?.key, text: t5?.properties?.text ?? "" }));
  }
};
__decorate([a2()], m5.prototype, "minimumLength", null), __decorate([a2()], m5.prototype, "allowCollapse", void 0), __decorate([a2()], m5.prototype, "lengthOptions", null), __decorate([a2(), v("esri/t9n/common")], m5.prototype, "messagesCommon", void 0), m5 = __decorate([c2("esri.widgets.Sketch.support.ResponsiveToolbar.SplitButton")], m5);

// node_modules/@arcgis/core/widgets/Sketch/support/ResponsiveToolbar/ResponsiveToolbar.js
var u4 = "esri-responsive-toolbar";
var m6 = { rulerBase: `${u4}__ruler`, rulerBarHorizontal: `${u4}__ruler--bar`, rulerBarVertical: `${u4}__ruler--bar--vertical`, rulerPadVertical: `${u4}__ruler--pad--vertical`, rulerPadHorizontal: `${u4}__ruler--pad--horizontal`, bar: `${u4}__bar`, barHorizontal: `${u4}__bar--horizontal`, barVertical: `${u4}__bar--vertical`, pad: `${u4}__pad`, padVertical: `${u4}__pad--vertical`, padHorizontal: `${u4}__pad--horizontal` };
var h4 = class extends O {
  constructor(e6) {
    super(e6), this.scale = "m", this.barStyle = "floating", this._measurementManager = new i3(), this._managedWidgets = /* @__PURE__ */ new Map();
  }
  loadDependencies() {
    return c3({ "action-bar": () => import("./calcite-action-bar-KGYIEAHU.js") });
  }
  destroy() {
    this._measurementManager = u2(this._measurementManager), this._managedWidgets.forEach((e6) => e6.destroy()), this._managedWidgets.clear();
  }
  set layout(e6) {
    const r8 = this._get("layout");
    this._set("layout", e6), this._measurementManager && (this._measurementManager.layout = e6), r8 !== e6 && this.scheduleRender();
  }
  get _barClasses() {
    const e6 = "docked" === this.barStyle, r8 = "vertical" === this.layout;
    return { [m6.barHorizontal]: e6 && !r8, [m6.barVertical]: e6 && r8, [m6.bar]: e6, [m6.padHorizontal]: !e6 && !r8, [m6.padVertical]: !e6 && r8, [m6.pad]: !e6 };
  }
  render() {
    const { layout: e6, scale: r8, barStyle: t5 } = this, a5 = { layout: e6, scale: r8, expandDisabled: true, key: "measured-toolbar" }, o5 = "docked" === t5 ? "vertical" === e6 ? m6.rulerBarVertical : m6.rulerBarHorizontal : "horizontal" === e6 ? m6.rulerPadHorizontal : m6.rulerPadVertical, s5 = this._renderChildren();
    return s5.length ? x("div", { key: "toolbar-wrapper" }, x("div", { afterCreate: (e7) => {
      this._measurementManager?.connect(e7);
    }, class: this.classes(m6.rulerBase, o5), key: "ruler-element" }), x("calcite-action-bar", __spreadProps(__spreadValues({}, a5), { classes: this._barClasses, floating: "docked" !== t5, overflowActionsDisabled: true }), s5)) : null;
  }
  _renderChildren() {
    if (!this.children) return [];
    const e6 = /* @__PURE__ */ new Set(), t5 = [];
    for (const r8 of this.children) {
      if (!r8.properties?.key || !("group-kind" in r8.properties) || !r8.children?.length) continue;
      const a5 = r8.properties, o5 = a5.key;
      e6.add(o5);
      const s5 = "docked" === this.barStyle ? a5.slot ?? void 0 : void 0, n8 = a5.priority ?? 0, c10 = a5["group-kind"] ?? "overflow-group", p12 = a5["allow-collapse"] ?? true, u7 = this._managedWidgets.get(o5);
      if (u7) u7.children = r8.children, u7.priority = n8, "allowCollapse" in u7 && (u7.allowCollapse = p12), u7.slot = s5, u7.layout = this.layout, u7.scale = this.scale, u7.measurementManager = this._measurementManager, t5.push(u7);
      else {
        const e7 = { scale: this.scale, priority: n8, measurementManager: this._measurementManager, children: r8.children, slot: s5, layout: this.layout };
        switch (c10) {
          case "split-button": {
            const r9 = new m5(__spreadProps(__spreadValues({}, e7), { allowCollapse: p12 }));
            this._managedWidgets.set(o5, r9), t5.push(r9);
            break;
          }
          case "overflow-group": {
            const r9 = new m4(__spreadProps(__spreadValues({}, e7), { allowCollapse: p12 }));
            this._managedWidgets.set(o5, r9), t5.push(r9);
            break;
          }
          case "measured-content": {
            const r9 = new a4(__spreadValues({}, e7));
            this._managedWidgets.set(o5, r9), t5.push(r9);
            break;
          }
        }
      }
    }
    for (const [r8] of this._managedWidgets.entries()) e6.has(r8) || (this._managedWidgets.get(r8)?.destroy(), this._managedWidgets.delete(r8));
    return this._measurementManager?.allocate(), t5.map((e7) => e7.render()).filter(N);
  }
};
__decorate([a2()], h4.prototype, "scale", void 0), __decorate([a2({ value: "horizontal" })], h4.prototype, "layout", null), __decorate([a2()], h4.prototype, "barStyle", void 0), __decorate([a2()], h4.prototype, "_measurementManager", void 0), __decorate([a2()], h4.prototype, "_managedWidgets", void 0), __decorate([a2()], h4.prototype, "_barClasses", null), h4 = __decorate([c2("esri.widgets.Sketch.support.ResponsiveToolbar.ResponsiveToolbar")], h4);

// node_modules/@arcgis/core/widgets/support/Selector2D/selectorUtils.js
async function p8(e6) {
  const { returnFeatureTitleFields: s5, returnGeometry: a5, selector: i4, signal: l11, sources: n8, view: o5 } = e6;
  if (!n8?.length) return [];
  const { layers: c10, layerViews: u7, graphicsLayers: d3 } = m7(n8), y4 = [];
  return await y(p(Promise.all([h5({ candidates: y4, layers: c10, returnFeatureTitleFields: s5, returnGeometry: a5, selector: i4, signal: l11, view: o5 }), f3({ candidates: y4, layerViews: u7, returnGeometry: a5, selector: i4, signal: l11, view: o5 }), v3({ candidates: y4, graphicsLayers: d3, selector: i4 })]), l11)), y4;
}
function m7(e6) {
  const r8 = [], t5 = [], s5 = [];
  return e6.forEach((e7) => {
    (l5(e7) || p3(e7)) && e7.layers?.length ? r8.push(...e7.layers.toArray()) : a3(e7) && e7.sublayers?.length ? s5.push(...e7.sublayers.toArray()) : i2(e7) ? r8.push(e7) : l6(e7) ? t5.push(e7) : t2(e7) && s5.push(e7);
  }), { layers: r8, layerViews: t5, graphicsLayers: s5 };
}
async function f3(r8) {
  const { candidates: s5, layerViews: a5, returnGeometry: i4, selector: l11, signal: n8, view: o5 } = r8;
  "point" !== l11.type ? await p(Promise.allSettled(a5.map(async (r9) => {
    if (f2(r9)) {
      const t5 = b2(r9, l11, o5, i4), a6 = await r9.queryFeatures(t5, { signal: n8 });
      u(s5, a6.features);
    } else t2(r9.layer) && await v3({ candidates: s5, graphicsLayers: [r9.layer], selector: l11 });
  })), n8) : await g2({ candidates: s5, layerViews: a5, selector: l11, view: o5 });
}
async function g2({ candidates: e6, layerViews: r8, selector: t5, view: s5 }) {
  const a5 = s5.toScreen(t5);
  if (!a5) return;
  const i4 = r8.map((e7) => e7.layer), { results: l11 } = await s5.hitTest(a5, { include: i4 });
  l11.forEach((r9) => {
    "graphic" in r9 && r9.graphic && e6.push(r9.graphic);
  });
}
async function h5(r8) {
  const { candidates: s5, layers: a5, returnFeatureTitleFields: i4, returnGeometry: l11, selector: n8, signal: o5, view: c10 } = r8;
  await p(Promise.allSettled(a5.map(async (r9) => {
    if ("isTable" in r9 && r9.isTable) return;
    const t5 = T(r9, n8, c10, i4, l11), a6 = await r9.queryFeatures(t5, { signal: o5 });
    u(s5, a6.features);
  })), o5);
}
function w6(e6, r8, t5) {
  return "point" === e6.type ? r3(e6, "renderer" in r8 ? o2({ renderer: r8.renderer }) : 0, t5) : e6;
}
function F(e6, r8, t5) {
  const { fields: a5, fieldsIndex: i4 } = e6, l11 = /* @__PURE__ */ new Set([e6.objectIdField]);
  "globalIdField" in e6 && null != e6.globalIdField && i4.has(e6.globalIdField) && l11.add(i4.get(e6.globalIdField).name);
  const n8 = "displayField" in e6 ? e6.displayField : null, o5 = E({ displayField: n8, fields: a5 });
  if (null != o5 && i4.has(o5) && l11.add(o5), "subtypeField" in e6 && null != e6.subtypeField) {
    const t6 = i4.get(e6.subtypeField)?.name;
    if (null != t6 && l11.add(t6), "utilityNetworks" in r8.map && r8.map.utilityNetworks?.length) {
      const e7 = i4.get("assetgroup");
      e7?.name && l11.add(e7.name);
      const r9 = i4.get("assettype");
      r9?.name && l11.add(r9.name);
    }
  }
  return (t5 || r8.requiredFieldsOptions.featureTitleFields) && "featureTitleFields" in e6 && e6.featureTitleFields && e6.featureTitleFields.forEach((e7) => l11.add(e7)), Array.from(l11.values());
}
function b2(e6, r8, t5, s5 = true) {
  const a5 = e6.createQuery();
  return a5.outFields = ["*"], a5.geometry = w6(r8, e6.layer, t5), a5.returnGeometry = s5, a5.outSpatialReference = t5.spatialReference, a5;
}
function T(e6, r8, t5, s5 = false, a5 = true) {
  const i4 = e6.createQuery();
  return i4.outFields = F(e6, t5, s5), i4.geometry = w6(r8, e6, t5), i4.returnGeometry = a5, i4.outSpatialReference = t5.spatialReference, i4;
}
async function v3(e6) {
  const { candidates: r8, graphicsLayers: t5, selector: s5 } = e6, a5 = t5.flatMap((e7) => e7.graphics.toArray()) ?? [];
  if (!a5?.length || !s5) return;
  const i4 = await import("./intersectsOperator-LR4CODYN.js");
  i4.accelerateGeometry(s5), a5.forEach((e7) => {
    e7.geometry && "mesh" !== e7.geometry.type && i4.execute(s5, e7.geometry) && r8.push(e7);
  });
}

// node_modules/@arcgis/core/widgets/support/Selector2D/SelectionOperation.js
var w7 = 100;
var T2 = class extends l4 {
  constructor(e6) {
    super(e6), this._completed = false, this._isConstraintKeyDown = false, this._processTask = null, this.createTool = "rectangle", this.mode = null, this.persistSelection = true, this.returnFeatureTitleFields = false, this.returnGeometry = true, this.selection = new q(), this.selectionManager = null, this.selectOnComplete = true, this.sources = null, this.toolName = "", this.type = "add", this._process = L(async (e7, o5) => {
      const { callback: r8, selector: s5, completed: i4 } = e7, n8 = w5(async (e8) => {
        const { effectiveSelectionManager: t5, returnFeatureTitleFields: o6, returnGeometry: n9, selection: l11, sources: a5, view: c10 } = this;
        if (!(!a5?.length && !t5.sources.length) && c10) {
          if (s5 && null != a5) {
            const r9 = await p8({ returnFeatureTitleFields: o6, returnGeometry: n9, selector: s5, signal: e8, sources: a5, view: c10 });
            if (l11.removeAll(), l11.addMany(r9), i4 && this.persistSelection) switch (this.effectiveType) {
              case "remove":
                t5.updateSelection({ current: [], added: [], removed: r9 });
                break;
              case "replace":
                t5.clear(), t5.updateSelection({ current: r9, added: [], removed: [] });
                break;
              default:
                t5.updateSelection({ current: r9, added: [], removed: [] });
            }
          }
          r8 && r8();
        } else l11.removeAll();
      });
      return w(o5, () => n8.abort()), this._processTask = n8, n8.promise;
    }, w7), this._onOperationFinish = this._onOperationFinish.bind(this);
  }
  initialize() {
    this._setup();
  }
  get _defaultMode() {
    return "polygon" === this.createTool ? "click" : "hybrid";
  }
  get _selectionArea() {
    const e6 = this._tool.coordinates;
    if (0 === e6.length) return;
    const t5 = i(), o5 = this.view.spatialReference, r8 = (e7) => {
      t5.x = e7[0], t5.y = e7[1];
      const o6 = this.view.toMap(t5);
      return [o6?.x ?? 0, o6?.y ?? 0];
    };
    if (1 === e6.length || e6.every(([t6, o6]) => t6 === e6[0][0] && o6 === e6[0][1])) {
      const [t6, s6] = r8(e6[0]);
      return new _({ x: t6, y: s6, spatialReference: o5 });
    }
    const s5 = e6.map(r8);
    if (0 === s5.length) return;
    g(s5) || s5.reverse();
    return new j({ spatialReference: o5, rings: [s5] });
  }
  get completed() {
    return this._completed;
  }
  get effectiveSelectionManager() {
    return this.selectionManager ?? this.view.selectionManager;
  }
  get effectiveType() {
    const e6 = this.type ?? "add";
    if (this._isConstraintKeyDown) switch (e6) {
      case "add":
        return "remove";
      case "remove":
      case "replace":
        return "add";
      default:
        return e6;
    }
    return e6;
  }
  get processingFinalSelection() {
    return !(!this._processTask || !this._tool?.drawOperation?.isCompleted);
  }
  cancel() {
    this.selection.removeAll(), this._onOperationFinish(true);
  }
  destroy() {
    this._toolImportController = e2(this._toolImportController);
  }
  async _setup() {
    const { createTool: e6, view: t5 } = this;
    if (await t5.whenReady(), this.destroyed || this._toolImportController) return;
    const o5 = new AbortController();
    this._toolImportController = o5;
    const [r8, n8] = await Promise.all([import("./DrawScreenTool-V46RPUCN.js"), c7()]);
    if (o5.signal.aborted) return;
    const l11 = /* @__PURE__ */ Symbol();
    try {
      this._tool = new r8.DrawScreenTool({ view: t5, mode: this.mode ?? this._defaultMode, geometryType: e6, cursor: "point" === e6 ? "default" : "crosshair", automaticLengthMeasurementUtils: n8 });
    } finally {
      this._toolImportController = null;
    }
    this._tool ? (this.selectOnComplete || this.addHandles(this._tool.on(["cursor-update", "vertex-add", "vertex-remove"], () => {
      this._syncConstraintKeyDown(), y(this._process({ selector: this._selectionArea }));
    }), l11), this._syncConstraintKeyDown(), this.addHandles([t5.on("key-down", (e7) => {
      if (!e7.repeat) switch (this._syncConstraintKeyDown(), e7.key) {
        case c4.constraint:
          this._tool.uniformSizeToggled = true, e7.stopPropagation();
          break;
        case c4.center:
          this._tool.centeredToggled = true, e7.stopPropagation();
      }
    }), t5.on("key-up", (e7) => {
      switch (this._syncConstraintKeyDown(), e7.key) {
        case c4.constraint:
          this._tool.uniformSizeToggled = false, e7.stopPropagation();
          break;
        case c4.center:
          this._tool.centeredToggled = false, e7.stopPropagation();
      }
    }), this.selection.on("change", ({ added: e7, removed: t6 }) => this.emit("selection-change", { operationType: this.effectiveType, added: e7, removed: t6 })), this._tool.on("complete", async (e7) => {
      this._syncConstraintKeyDown(), this.removeHandles(l11), e7.aborted ? this.cancel() : (this._tool.cursor = "progress", await this._process({ selector: this._selectionArea, callback: this._onOperationFinish, completed: true }));
    })], l11), this.addHandles(e(() => t5.tools.remove(this._tool))), t5.addAndActivateTool(this._tool)) : n.getLogger(this).warn("Unable to import Draw module. SelectionOperation failed to load.");
  }
  _syncConstraintKeyDown() {
    const { inputManager: e6 } = this.view;
    this._isConstraintKeyDown = m2.invertType.some((t5) => e6.isModifierKeyDown(t5));
  }
  _onOperationFinish(e6 = false) {
    this.removeAllHandles(), this._processTask?.abort(), this._completed = true, this.emit("complete", { aborted: e6, operationType: this.effectiveType, selection: this.selection.toArray(), toolName: this.toolName });
  }
};
__decorate([a2()], T2.prototype, "_completed", void 0), __decorate([a2()], T2.prototype, "_defaultMode", null), __decorate([a2()], T2.prototype, "_isConstraintKeyDown", void 0), __decorate([a2()], T2.prototype, "_processTask", void 0), __decorate([a2()], T2.prototype, "_selectionArea", null), __decorate([a2()], T2.prototype, "completed", null), __decorate([a2({ constructOnly: true })], T2.prototype, "createTool", void 0), __decorate([a2()], T2.prototype, "effectiveSelectionManager", null), __decorate([a2()], T2.prototype, "effectiveType", null), __decorate([a2({ constructOnly: true })], T2.prototype, "mode", void 0), __decorate([a2()], T2.prototype, "persistSelection", void 0), __decorate([a2()], T2.prototype, "processingFinalSelection", null), __decorate([a2()], T2.prototype, "returnFeatureTitleFields", void 0), __decorate([a2()], T2.prototype, "returnGeometry", void 0), __decorate([a2({ readOnly: true })], T2.prototype, "selection", void 0), __decorate([a2({ constructOnly: true })], T2.prototype, "selectionManager", void 0), __decorate([a2({ constructOnly: true })], T2.prototype, "selectOnComplete", void 0), __decorate([a2()], T2.prototype, "sources", void 0), __decorate([a2({ constructOnly: true })], T2.prototype, "toolName", void 0), __decorate([a2()], T2.prototype, "type", void 0), __decorate([a2({ constructOnly: true })], T2.prototype, "view", void 0), T2 = __decorate([c2("esri.widgets.support.Selector2D.SelectionOperation")], T2);
var C = T2;

// node_modules/@arcgis/core/widgets/support/SelectionToolbar/SelectionToolbarViewModel.js
var v4 = class extends l4 {
  constructor(e6) {
    super(e6), this._operationHandlesGroup = null, this.activeOperation = null, this.continuousSelectionEnabled = false, this.defaultLassoToolOptions = { createTool: "polygon", mode: "hybrid", toolName: "lasso" }, this.defaultOperationType = "add", this.defaultPointToolOptions = { createTool: "point", toolName: "point" }, this.defaultRectangleToolOptions = { createTool: "rectangle", toolName: "rectangle" }, this.layerViewPreferenceEnabled = true, this.persistSelection = true, this.selectionManager = null, this.returnFeatureTitleFields = false, this.returnGeometry = true, this.selectOnComplete = true, this.sources = null, this.toolConfigs = [];
  }
  initialize() {
    this.addHandles([l3(() => this.effectiveSources, (e6) => {
      this.activeOperation && (this.activeOperation.sources = e6);
    }), l3(() => this.defaultOperationType, (e6) => {
      this.activeOperation && (this.activeOperation.type = e6);
    })]);
  }
  destroy() {
    this.activeOperation?.cancel(), this.activeOperation?.destroy(), this._operationHandlesGroup = l2(this._operationHandlesGroup);
  }
  get effectiveSelectionManager() {
    return this.selectionManager ?? this.view?.selectionManager;
  }
  get effectiveSources() {
    const { layerViewPreferenceEnabled: e6, sources: t5, view: o5 } = this, i4 = t5 ?? this.effectiveSelectionManager?.sources;
    if (!i4?.length) return [];
    const s5 = [];
    return i4.forEach((t6) => {
      if (o(t6)) s5.push(t6);
      else if (l5(t6) || p3(t6)) {
        (t6.layers || []).forEach((t7) => {
          const i5 = o5 ? l7(o5, t7) : void 0, r8 = e6 && o(i5) ? i5 : t7;
          s5.push(r8);
        });
      } else if (e6) {
        const e7 = o5 ? l7(o5, t6) : void 0, i5 = o(e7) ? e7 : t6;
        s5.push(i5);
      } else s5.push(t6);
    }), s5;
  }
  get layers() {
    return c(n.getLogger(this), "layers", { replacement: "Use SelectionToolbar.sources instead." }), this.sources;
  }
  set layers(e6) {
    c(n.getLogger(this), "layers", { replacement: "Use SelectionToolbar.sources instead." }), this.sources = e6;
  }
  get state() {
    return this.activeOperation ? "active" : this.view?.ready && this.effectiveSources.length ? "ready" : "disabled";
  }
  activate(e6) {
    const { state: t5 } = this, o5 = e6?.view || this.view, r8 = e6?.sources || this.effectiveSources;
    if ("disabled" === t5 || !o5) return void n.getLogger(this).warn("Unable to start selection operation.");
    "active" === t5 && this.cancel();
    const n8 = new CustomEvent("before-activate", { cancelable: true, detail: { toolName: e6?.toolName ?? null } });
    if (this.emit("before-activate", n8), n8.defaultPrevented) return;
    const a5 = __spreadProps(__spreadValues({ type: this.defaultOperationType, persistSelection: this.persistSelection, returnFeatureTitleFields: this.returnFeatureTitleFields, returnGeometry: this.returnGeometry, selectOnComplete: this.selectOnComplete, selectionManager: this.effectiveSelectionManager }, e6), { sources: r8, view: o5 }), l11 = new C(__spreadValues({}, a5));
    return this._operationHandlesGroup = t([l11.on("selection-change", (e7) => this.emit("selection-change", e7)), l11.once("complete", (e7) => this._onOperationComplete(e7, a5))]), this._set("activeOperation", l11), l11;
  }
  activateTool(e6) {
    this.cancel();
    const t5 = this._getToolOptions(e6);
    if (t5) return this.activate(t5);
    n.getLogger(this).warn("Unable to activate tool: unable to determine options.");
  }
  cancel() {
    this.activeOperation?.cancel(), this._set("activeOperation", null);
  }
  toggleTool(e6) {
    const { activeOperation: t5 } = this;
    if (t5) {
      const o5 = t5.toolName;
      if (this.cancel(), o5 === e6) return;
    }
    return this.activateTool(e6);
  }
  _onOperationComplete(e6, t5) {
    const o5 = this.activeOperation?.type ?? e6.operationType;
    this._operationHandlesGroup = l2(this._operationHandlesGroup), this.activeOperation?.destroy(), this._set("activeOperation", null), this.emit("complete", e6), this.continuousSelectionEnabled && !e6.aborted && this.activate(__spreadProps(__spreadValues({}, t5), { type: o5 }));
  }
  _getToolOptions(e6) {
    const t5 = this.toolConfigs.find((t6) => t6.toolName === e6);
    return t5 || ("lasso" === e6 ? this.defaultLassoToolOptions : "point" === e6 ? this.defaultPointToolOptions : "rectangle" === e6 ? this.defaultRectangleToolOptions : void 0);
  }
};
__decorate([a2({ readOnly: true })], v4.prototype, "activeOperation", void 0), __decorate([a2()], v4.prototype, "continuousSelectionEnabled", void 0), __decorate([a2()], v4.prototype, "defaultLassoToolOptions", void 0), __decorate([a2()], v4.prototype, "defaultOperationType", void 0), __decorate([a2()], v4.prototype, "defaultPointToolOptions", void 0), __decorate([a2()], v4.prototype, "defaultRectangleToolOptions", void 0), __decorate([a2()], v4.prototype, "effectiveSelectionManager", null), __decorate([a2()], v4.prototype, "effectiveSources", null), __decorate([a2()], v4.prototype, "layers", null), __decorate([a2()], v4.prototype, "layerViewPreferenceEnabled", void 0), __decorate([a2()], v4.prototype, "persistSelection", void 0), __decorate([a2()], v4.prototype, "selectionManager", void 0), __decorate([a2()], v4.prototype, "returnFeatureTitleFields", void 0), __decorate([a2()], v4.prototype, "returnGeometry", void 0), __decorate([a2()], v4.prototype, "selectOnComplete", void 0), __decorate([a2()], v4.prototype, "sources", void 0), __decorate([a2({ readOnly: true })], v4.prototype, "state", null), __decorate([a2()], v4.prototype, "toolConfigs", void 0), __decorate([a2()], v4.prototype, "view", void 0), v4 = __decorate([c2("esri.widgets.support.SelectionToolbar.SelectionToolbarViewModel")], v4);
var f4 = v4;

// node_modules/@arcgis/core/widgets/support/SelectionToolbar/VisibleElements.js
var p9 = class extends b {
  constructor(o5) {
    super(o5), this.chip = true, this.lassoTool = true, this.operationTypeControls = true, this.pan = true, this.pointTool = true, this.rectangleTool = true;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], p9.prototype, "chip", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p9.prototype, "lassoTool", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p9.prototype, "operationTypeControls", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p9.prototype, "pan", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p9.prototype, "pointTool", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], p9.prototype, "rectangleTool", void 0), p9 = __decorate([c2("esri.widgets.support.SelectionToolbar.VisibleElements")], p9);
var n6 = p9;

// node_modules/@arcgis/core/widgets/support/SelectionToolbar.js
var f5 = "esri-selection-toolbar";
var g3 = { base: f5, container: `${f5}__container`, toolButton: `${f5}__tool-button` };
var T3 = class extends O {
  constructor(e6, t5) {
    super(e6, t5), this._viewModelHandlesGroup = null, this.availableOperationTypes = ["replace", "add", "remove"], this.disabled = false, this.layout = "horizontal", this.messages = null, this.scale = "s", this.viewModel = new f4(), this.visibleElements = new n6();
  }
  initialize() {
    this._viewModelHandlesGroup = t([a(() => this.viewModel, "before-activate", (e6) => this.emit("before-activate", e6)), a(() => this.viewModel, "complete", (e6) => this.emit("complete", e6)), a(() => this.viewModel, "selection-change", (e6) => this.emit("selection-change", e6))]);
  }
  destroy() {
    this._viewModelHandlesGroup = l2(this._viewModelHandlesGroup);
  }
  loadDependencies() {
    return c3({ action: () => import("./calcite-action-EB7V3T34.js"), "action-bar": () => import("./calcite-action-bar-KGYIEAHU.js"), "action-group": () => import("./calcite-action-group-JWLCLMBV.js"), chip: () => import("./calcite-chip-XVBOSDXF.js"), dropdown: () => import("./calcite-dropdown-6WIFFDT2.js"), "dropdown-item": () => import("./calcite-dropdown-item-MHEPCHNG.js"), "dropdown-group": () => import("./calcite-dropdown-group-XQQ2E2A6.js"), icon: () => import("./calcite-icon-6UYXZHFB.js") });
  }
  get _effectiveDisabled() {
    return this.disabled || "disabled" === this.state;
  }
  get _effectiveOperationType() {
    return this.activeOperation?.effectiveType || this.defaultOperationType;
  }
  get activeOperation() {
    return this.viewModel.activeOperation;
  }
  get continuousSelectionEnabled() {
    return this.viewModel.continuousSelectionEnabled;
  }
  set continuousSelectionEnabled(e6) {
    this.viewModel.continuousSelectionEnabled = e6;
  }
  get defaultLassoToolOptions() {
    return this.viewModel.defaultLassoToolOptions;
  }
  set defaultLassoToolOptions(e6) {
    this.viewModel.defaultLassoToolOptions = e6;
  }
  get defaultOperationType() {
    return this.viewModel.defaultOperationType;
  }
  set defaultOperationType(e6) {
    this.viewModel.defaultOperationType = e6;
  }
  get defaultPointToolOptions() {
    return this.viewModel.defaultPointToolOptions;
  }
  set defaultPointToolOptions(e6) {
    this.viewModel.defaultPointToolOptions = e6;
  }
  get defaultRectangleToolOptions() {
    return this.viewModel.defaultRectangleToolOptions;
  }
  set defaultRectangleToolOptions(e6) {
    this.viewModel.defaultRectangleToolOptions = e6;
  }
  get effectiveSelectionManager() {
    return this.viewModel.effectiveSelectionManager;
  }
  get effectiveSources() {
    return this.viewModel.effectiveSources;
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get layers() {
    return c(n.getLogger(this), "layers", { replacement: "Use SelectionToolbar.sources instead." }), this.viewModel.sources;
  }
  set layers(e6) {
    c(n.getLogger(this), "layers", { replacement: "Use SelectionToolbar.sources instead." }), this.viewModel.sources = e6;
  }
  get layerViewPreferenceEnabled() {
    return this.viewModel.layerViewPreferenceEnabled;
  }
  set layerViewPreferenceEnabled(e6) {
    this.viewModel.layerViewPreferenceEnabled = e6;
  }
  get persistSelection() {
    return this.viewModel.persistSelection;
  }
  set persistSelection(e6) {
    this.viewModel.persistSelection = e6;
  }
  get returnFeatureTitleFields() {
    return this.viewModel.returnFeatureTitleFields;
  }
  set returnFeatureTitleFields(e6) {
    this.viewModel.returnFeatureTitleFields = e6;
  }
  get returnGeometry() {
    return this.viewModel.returnGeometry;
  }
  set returnGeometry(e6) {
    this.viewModel.returnGeometry = e6;
  }
  get selectOnComplete() {
    return this.viewModel.selectOnComplete;
  }
  set selectOnComplete(e6) {
    this.viewModel.selectOnComplete = e6;
  }
  get selectionManager() {
    return this.viewModel.selectionManager;
  }
  set selectionManager(e6) {
    this.viewModel.selectionManager = e6;
  }
  get state() {
    return this.viewModel.state;
  }
  get sources() {
    return this.viewModel.sources;
  }
  set sources(e6) {
    this.viewModel.sources = e6;
  }
  get toolConfigs() {
    return this.viewModel.toolConfigs;
  }
  set toolConfigs(e6) {
    this.viewModel.toolConfigs = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  get visibleToolCount() {
    const { visibleElements: e6 } = this;
    return this.toolConfigs.length + (e6.lassoTool ? 1 : 0) + (e6.rectangleTool ? 1 : 0);
  }
  activate(e6) {
    if (this.cancel(), !this._effectiveDisabled) return this.viewModel.activate(e6);
  }
  activateTool(e6) {
    if (!this._effectiveDisabled) return this.viewModel.activateTool(e6);
  }
  cancel() {
    this.viewModel.cancel();
  }
  toggleTool(e6) {
    if (!this._effectiveDisabled) return this.viewModel.toggleTool(e6);
  }
  render() {
    return x("div", { "aria-label": this.label, class: this.classes(g3.base, e4.widget) }, x("div", { class: g3.container }, x("calcite-action-bar", { expandDisabled: true, layout: "horizontal", overflowActionsDisabled: true, scale: this.scale }, this._renderOperationTypeControls(), this._renderToolsGroup(), this._renderChip())));
  }
  _renderToolsGroup() {
    return x("calcite-action-group", { key: "tools-group" }, this._renderDefaultTools(), this._renderCustomTools());
  }
  _renderDefaultTools() {
    return [this._renderPanAction(), this._renderPointTool(), this._renderRectangleTool(), this._renderLassoTool()];
  }
  _renderPanAction() {
    if (!this.visibleElements.pan) return;
    const e6 = this.messages.pan, t5 = `${this.id}-tool-pan`;
    return this._renderAction({ active: !this.activeOperation, disabled: this._effectiveDisabled, icon: "pan", id: t5, key: t5, onclick: () => this.cancel(), text: e6, title: e6 });
  }
  _renderChip() {
    if (!this.visibleElements.chip) return;
    const { effectiveSelectionManager: e6 } = this, o5 = e6?.count ?? 0, i4 = h2(o5);
    return x("calcite-chip", { appearance: "outline", closable: o5 > 0, closed: 0 === o5, disabled: this._effectiveDisabled || 0 === o5, label: i4, scale: this.scale, slot: "actions-end", title: this.messages.clearSelection, onCalciteChipClose: () => e6?.clear() }, i4);
  }
  _renderCustomTools() {
    return this.toolConfigs.map(({ toolName: e6, icon: t5 }) => this._renderToolWithTooltip(e6, t5));
  }
  _renderPointTool() {
    if (this.visibleElements.pointTool) return this._renderToolWithTooltip("point", "selection-set", this.messages.selectByPoint);
  }
  _renderLassoTool() {
    if (this.visibleElements.lassoTool) return this._renderToolWithTooltip("lasso", "lasso-select", this.messages.selectByLasso);
  }
  _renderRectangleTool() {
    if (this.visibleElements.rectangleTool) return this._renderToolWithTooltip("rectangle", "cursor-marquee", this.messages.selectByRectangle);
  }
  _renderOperationTypeControls() {
    const { availableOperationTypes: e6 } = this;
    if (!this.visibleElements.operationTypeControls || !e6.length) return;
    const { _effectiveOperationType: t5, scale: o5 } = this, i4 = this._getIconForSelectionOperationType(t5), l11 = this._getLabelForSelectionOperationType(t5);
    return x("calcite-action-group", { key: "toggle-group" }, x("calcite-dropdown", { overlayPositioning: "fixed", placement: "bottom-start", scale: o5, topLayerDisabled: this.topLayerDisabled }, x("calcite-action", { class: g3.toolButton, disabled: this._effectiveDisabled, icon: i4, scale: o5, slot: "trigger", text: l11, title: l11 }, x("calcite-icon", { icon: "chevron-down", scale: "s" })), x("calcite-dropdown-group", null, e6.map((e7) => this._renderOperationTypeDropdownItem(e7)))));
  }
  _renderOperationTypeDropdownItem(e6) {
    return x("calcite-dropdown-item", { iconStart: this._getIconForSelectionOperationType(e6), selected: this.defaultOperationType === e6, onCalciteDropdownItemSelect: () => this.defaultOperationType = e6 }, this._getLabelForSelectionOperationType(e6));
  }
  _renderToolWithTooltip(e6, t5, o5 = e6) {
    const i4 = `${this.id}-tool-${e6}`;
    return this._renderAction({ active: this.activeOperation?.toolName === e6, disabled: this._effectiveDisabled, icon: t5 || "selection", id: i4, key: i4, onclick: () => this.toggleTool(e6), text: o5, title: o5 });
  }
  _renderAction(e6) {
    return x("calcite-action", __spreadProps(__spreadValues({}, e6), { bind: this, class: g3.toolButton, scale: this.scale }));
  }
  _getIconForSelectionOperationType(e6) {
    switch (e6) {
      case "replace":
        return "overwrite-features";
      case "add":
        return "cursor-plus";
      case "remove":
        return "cursor-minus";
    }
  }
  _getLabelForSelectionOperationType(e6) {
    const { messages: t5 } = this;
    switch (e6) {
      case "replace":
        return t5.replaceSelection;
      case "add":
        return t5.addToSelection;
      case "remove":
        return t5.removeFromSelection;
    }
  }
};
__decorate([a2()], T3.prototype, "_effectiveDisabled", null), __decorate([a2()], T3.prototype, "_effectiveOperationType", null), __decorate([a2()], T3.prototype, "activeOperation", null), __decorate([a2()], T3.prototype, "availableOperationTypes", void 0), __decorate([a2()], T3.prototype, "continuousSelectionEnabled", null), __decorate([a2()], T3.prototype, "defaultLassoToolOptions", null), __decorate([a2()], T3.prototype, "defaultOperationType", null), __decorate([a2()], T3.prototype, "defaultPointToolOptions", null), __decorate([a2()], T3.prototype, "defaultRectangleToolOptions", null), __decorate([a2()], T3.prototype, "disabled", void 0), __decorate([a2()], T3.prototype, "effectiveSelectionManager", null), __decorate([a2()], T3.prototype, "effectiveSources", null), __decorate([a2()], T3.prototype, "label", null), __decorate([a2()], T3.prototype, "layers", null), __decorate([a2()], T3.prototype, "layerViewPreferenceEnabled", null), __decorate([a2()], T3.prototype, "layout", void 0), __decorate([a2(), v("esri/widgets/support/SelectionToolbar/t9n/SelectionToolbar")], T3.prototype, "messages", void 0), __decorate([a2()], T3.prototype, "persistSelection", null), __decorate([a2()], T3.prototype, "returnFeatureTitleFields", null), __decorate([a2()], T3.prototype, "returnGeometry", null), __decorate([a2()], T3.prototype, "selectOnComplete", null), __decorate([a2()], T3.prototype, "scale", void 0), __decorate([a2()], T3.prototype, "selectionManager", null), __decorate([a2()], T3.prototype, "state", null), __decorate([a2()], T3.prototype, "sources", null), __decorate([a2()], T3.prototype, "toolConfigs", null), __decorate([a2()], T3.prototype, "view", null), __decorate([a2()], T3.prototype, "viewModel", void 0), __decorate([a2({ type: n6, nonNullable: true })], T3.prototype, "visibleElements", void 0), __decorate([a2()], T3.prototype, "visibleToolCount", null), T3 = __decorate([c2("esri.widgets.support.SelectionToolbar")], T3);
var y2 = T3;

// node_modules/@arcgis/core/widgets/support/SketchTooltipControls/VisibleElements.js
var r6 = class extends b {
  constructor(o5) {
    super(o5), this.directionModePicker = false, this.header = false, this.labelsToggle = true, this.tooltipsToggle = true;
  }
};
__decorate([a2({ type: Boolean, nonNullable: true })], r6.prototype, "directionModePicker", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r6.prototype, "header", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r6.prototype, "labelsToggle", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], r6.prototype, "tooltipsToggle", void 0), r6 = __decorate([c2("esri.widgets.support.SketchTooltipControls.VisibleElements")], r6);
var s3 = r6;

// node_modules/@arcgis/core/widgets/support/SketchTooltipControls.js
var m8 = "esri-sketch-tooltip-controls";
var g4 = { base: m8, block: `${m8}__block`, blockContent: `${m8}__block-content`, radioButtonLabelWrapper: `${m8}__radio-button-label-wrapper` };
var u5 = class extends O {
  constructor(e6, t5) {
    super(e6, t5), this.viewModel = null, this.visibleElements = new s3(), this.sketchOptions = new c6(), this.viewType = void 0, this._onTooltipsEnabledChange = (e7) => {
      this.sketchOptions.tooltips.enabled = e7;
    }, this._onLabelsEnabledChange = (e7) => {
      this.sketchOptions.labels.enabled = e7;
    }, this._onDirectionModeChange = (e7) => {
      this.sketchOptions.values.directionMode = e7.currentTarget.selectedItem.value;
    };
  }
  loadDependencies() {
    return Promise.all([c3({ block: () => import("./calcite-block-X6PBCDMD.js"), label: () => import("./calcite-label-TNFN3YZF.js"), icon: () => import("./calcite-icon-6UYXZHFB.js"), "radio-button": () => import("./calcite-radio-button-RZJLTSW4.js"), "radio-button-group": () => import("./calcite-radio-button-group-OIPUVPXI.js") }), n4()]);
  }
  render() {
    const { label: e6, visibleElements: t5 } = this, o5 = this._renderContent();
    return x("div", { "aria-label": e6, class: this.classes(g4.base, e4.widget) }, o5 ? x("calcite-block", { class: g4.block, expanded: true, heading: t5.header ? this.label : "", key: "content-block", label: this.label }, x("div", { class: g4.blockContent, key: "content" }, o5)) : void 0);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  _renderContent() {
    const { visibleElements: e6, viewType: o5 } = this, i4 = [e6.tooltipsToggle ? this._renderTooltipsToggle() : null, e6.labelsToggle && "3d" === o5 ? this._renderLabelsToggle() : null, e6.directionModePicker ? this._renderDirectionModePicker() : null].filter(N);
    return 0 === i4.length ? null : i4;
  }
  _renderTooltipsToggle() {
    const { messages: e6, sketchOptions: t5 } = this;
    return x(c8, { checked: t5.tooltips.effectiveEnabled, hint: e6.tooltipsToggleHint, key: `${this.id}__tooltips`, label: e6.tooltipsToggle, topLayerDisabled: this.topLayerDisabled, onChange: this._onTooltipsEnabledChange });
  }
  _renderLabelsToggle() {
    const { messages: e6, sketchOptions: t5 } = this;
    return x(c8, { checked: t5.labels.enabled, hint: e6.labelsToggleHint, key: `${this.id}__labels`, label: e6.labelsToggle, topLayerDisabled: this.topLayerDisabled, onChange: this._onLabelsEnabledChange });
  }
  _renderDirectionModePicker() {
    const { messages: e6, sketchOptions: t5 } = this, { directionMode: o5 } = t5.values;
    return x("calcite-label", { key: "direction-mode", layout: "default", scale: "s" }, e6.directionModePicker, x("calcite-radio-button-group", { key: "radio-button-group", layout: "horizontal", name: this.id, scale: "s", value: o5, onCalciteRadioButtonGroupChange: this._onDirectionModeChange }, this._renderDirectionModeOption("relative", o5, e6.directionModeRelative), this._renderDirectionModeOption("absolute", o5, e6.directionModeAbsolute)));
  }
  _renderDirectionModeOption(e6, t5, o5) {
    return x("calcite-label", { key: e6, layout: "inline", scale: "s" }, x("calcite-radio-button", { checked: e6 === t5, scale: "s", value: e6 }), x("div", { class: g4.radioButtonLabelWrapper, key: "label-wrapper" }, x("calcite-icon", { icon: e5[e6], scale: "s" }), o5));
  }
};
__decorate([a2()], u5.prototype, "label", null), __decorate([a2({ type: s3, nonNullable: true })], u5.prototype, "visibleElements", void 0), __decorate([a2(), v("esri/widgets/support/SketchTooltipControls/t9n/SketchTooltipControls")], u5.prototype, "messages", void 0), __decorate([a2({ nonNullable: true, type: c6 })], u5.prototype, "sketchOptions", void 0), __decorate([a2({ type: String })], u5.prototype, "viewType", void 0), u5 = __decorate([c2("esri.widgets.support.SketchTooltipControls")], u5);
var k = u5;

// node_modules/@arcgis/core/widgets/support/SnappingControls/snappingLayerListUtils.js
var s4 = (e6) => t4(e6) || r7(e6);
var t4 = (e6) => {
  if (!("type" in e6)) return false;
  switch (e6.type) {
    case "feature":
    case "geojson":
    case "csv":
    case "graphics":
    case "wfs":
    case "map-notes":
    case "oriented-imagery":
    case "scene":
    case "building-scene":
    case "subtype-sublayer":
      return true;
    default:
      return false;
  }
};
var r7 = (t5) => {
  const r8 = d(t5);
  if (null != r8 && t5.hasOwnProperty(r8) && null != t5[r8]) {
    for (const e6 of t5[r8]) if (s4(e6)) return true;
  }
  return false;
};
var n7 = (e6, s5) => null != s5 && null != e6 && (s5.test(e6.title) ? "self" : !!e6.children.some((e7) => false !== n7(e7, s5)) && "children");

// node_modules/@arcgis/core/widgets/support/SnappingControls/SnappingListItem.js
var l10;
var p10 = l10 = class extends I {
  constructor(e6) {
    super(e6), this.children = new q(), this.parent = null;
  }
  get enabled() {
    const { children: e6 } = this;
    if (0 === e6.length) return null != this.featureSource && this.featureSource.enabled ? "enabled" : "disabled";
    let r8 = false, t5 = false;
    for (const i4 of e6) {
      if ("indeterminate" === i4.enabled) return i4.enabled;
      if ("enabled" === i4.enabled ? r8 = true : "disabled" === i4.enabled && (t5 = true), t5 && r8) return "indeterminate";
    }
    return t5 ? "disabled" : "enabled";
  }
  get childLayerIds() {
    return this.children.toArray().flatMap((e6) => [e6.layer?.id, ...e6.childLayerIds]);
  }
  get featureSource() {
    const { layer: e6, getFeatureSnappingSources: r8 } = this;
    return r8().find((r9) => r9.layer === e6);
  }
  _initializeChildLayers(e6) {
    if (!e6) return;
    const r8 = e6.filter(s4);
    super._initializeChildLayers(r8);
  }
  _createChildItems(e6) {
    return e6.map((e7) => p4(e7) ? new l10({ layer: e7, parent: this, view: this.view, getFeatureSnappingSources: this.getFeatureSnappingSources }) : null).filter(N).reverse();
  }
};
__decorate([a2()], p10.prototype, "enabled", null), __decorate([a2()], p10.prototype, "children", void 0), __decorate([a2()], p10.prototype, "childLayerIds", null), __decorate([a2()], p10.prototype, "featureSource", null), __decorate([a2({ constructOnly: true })], p10.prototype, "getFeatureSnappingSources", void 0), __decorate([a2()], p10.prototype, "parent", void 0), p10 = l10 = __decorate([c2("esri.widgets.support.SnappingControls.SnappingListItem")], p10);

// node_modules/@arcgis/core/widgets/support/SnappingControls/SnappingLayerListViewModel.js
var p11 = class extends v2 {
  constructor() {
    super(...arguments), this.featureSnappingSources = new q();
  }
  get operationalItemsFlat() {
    return this.operationalItems.flatten((e6) => e6.children);
  }
  get selectableItems() {
    return this.operationalItemsFlat.filter((e6) => !e6.children?.length);
  }
  _compileList() {
    const e6 = this.view?.map?.layers;
    if (!e6) return;
    const t5 = e6.filter(s4);
    this._watchLayersListMode(t5);
    const r8 = this._getViewableLayers(t5);
    r8?.length ? (this._createNewItems(r8), this._removeItems(r8), this._sortItems(r8)) : this._removeAllItems();
  }
  _createListItem(e6) {
    return new p10({ layer: e6, view: this.view, getFeatureSnappingSources: () => this.featureSnappingSources });
  }
};
__decorate([a2()], p11.prototype, "featureSnappingSources", void 0), __decorate([a2()], p11.prototype, "operationalItems", void 0), __decorate([a2()], p11.prototype, "operationalItemsFlat", null), __decorate([a2()], p11.prototype, "selectableItems", null), p11 = __decorate([c2("esri.widgets.support.SnappingControls.SnappingLayerListViewModel")], p11);

// node_modules/@arcgis/core/widgets/support/SnappingControls/SnappingControlsViewModel.js
var y3 = class extends b {
  constructor(e6) {
    super(e6), this.layerListViewModel = new p11(), this.snappingOptions = new u3(), this.view = null;
  }
  initialize() {
    this.addHandles([l3(() => ({ viewModel: this.layerListViewModel, view: this.view }), ({ viewModel: e6, view: r8 }) => {
      e6.view = r8;
    }, h), l3(() => ({ viewModel: this.layerListViewModel, sources: this.snappingOptions?.featureSources }), ({ viewModel: e6, sources: r8 }) => {
      e6.featureSnappingSources = r8;
    }, h)]);
  }
  get allLayersEnabled() {
    return (this.layerListViewModel?.selectableItems ?? []).every((e6) => "enabled" === e6.enabled);
  }
  get allLayersDisabled() {
    return (this.layerListViewModel?.selectableItems ?? []).every((e6) => !e6.enabled);
  }
  get layersEnabledCount() {
    return this.layerListViewModel?.selectableItems?.filter((e6) => "enabled" === e6.enabled).length ?? 0;
  }
  get state() {
    return this.snappingOptions ? "ready" : "disabled";
  }
  toggleSnappingForLayers(e6, r8) {
    e6?.forEach((e7) => r8 ? this.enableSnappingForLayer(e7) : this.disableSnappingForLayer(e7));
  }
  toggleSnappingForAllLayers(e6) {
    this.layerListViewModel.selectableItems.forEach(({ layer: r8 }) => {
      const i4 = r8?.id;
      e6 ? this.enableSnappingForLayer(i4) : this.disableSnappingForLayer(i4);
    });
  }
  enableSnappingForLayer(e6) {
    const r8 = this._findSnappingSourceForLayer(e6) ?? this._makeSnappingSourceForLayer(e6);
    r8 && (r8.enabled = true);
  }
  disableSnappingForLayer(e6) {
    const r8 = this._findSnappingSourceForLayer(e6);
    r8 && (r8.enabled = false);
  }
  updateEnabledFeatureSources(e6) {
    for (const r8 of this.snappingOptions.featureSources) p4(r8.layer) && (r8.enabled = e6.includes(r8.layer.id));
  }
  _findSnappingSourceForLayer(e6) {
    return this.snappingOptions.featureSources.find((r8) => r8.layer.id === e6);
  }
  _makeSnappingSourceForLayer(e6) {
    const r8 = this.layerListViewModel.operationalItemsFlat.find((r9) => r9.layer?.id === e6)?.layer;
    if (!r8) throw new r2("snapping-controls:layer-not-found", `cannot enable snapping for layer with id ${e6} because no such layer was found in the view`);
    if ("group" === r8.type) return;
    const t5 = new s({ layer: r8 });
    return this.snappingOptions.featureSources.add(t5), t5;
  }
};
__decorate([a2()], y3.prototype, "allLayersEnabled", null), __decorate([a2()], y3.prototype, "allLayersDisabled", null), __decorate([a2({ constructOnly: true })], y3.prototype, "layerListViewModel", void 0), __decorate([a2()], y3.prototype, "layersEnabledCount", null), __decorate([a2({ type: u3, nonNullable: true })], y3.prototype, "snappingOptions", void 0), __decorate([a2()], y3.prototype, "state", null), __decorate([a2()], y3.prototype, "view", void 0), y3 = __decorate([c2("esri.widgets.support.SnappingControls.SnappingControlsViewModel")], y3);
var u6 = y3;

// node_modules/@arcgis/core/widgets/support/SnappingControls.js
var w8 = "esri-snapping-controls";
var v5 = { base: w8, container: `${w8}__container`, toggleBlock: `${w8}__toggle-block`, layerListBlock: `${w8}__layer-list-block`, layerList: `${w8}__layer-list`, layerListFilter: `${w8}__layer-list__filter`, layerListButton: `${w8}__layer-list__button`, layerListItem: `${w8}__layer-list__item`, layerListGroup: `${w8}__layer-list__group`, nestedContainer: `${w8}__nested-container` };
var f6 = class extends O {
  constructor(e6, t5) {
    super(e6, t5), this._defaultViewModel = null, this._layerListFilter = null, this._gridLoadTask = null, this.layerListOpen = true, this.gridOptionsOpen = false, this.messages = null, this.messagesCommon = null, this.snappingManager = null, this.visibleElements = new s2(), this._enableSnappingSwitchChange = (e7) => {
      this.snappingOptions.enabled = e7;
    }, this._featureEnabledSwitchChange = (e7) => {
      this.snappingOptions.featureEnabled = e7;
    }, this._gridEnabledSwitchChange = (e7) => {
      this.snappingOptions.gridEnabled = e7, e7 && this._startLoadGrid();
    }, this._selfEnabledSwitchChange = (e7) => {
      this.snappingOptions.selfEnabled = e7;
    }, this._onToggleLayersButtonClick = (e7) => {
      this.viewModel.toggleSnappingForAllLayers(!this.viewModel.allLayersEnabled), w3(e7.target);
    }, this.viewModel = e6?.viewModel ?? (this._defaultViewModel = new u6({ snappingOptions: e6?.snappingOptions, view: e6?.view }));
  }
  destroy() {
    this.viewModel !== this._defaultViewModel && (this._defaultViewModel = u2(this._defaultViewModel));
  }
  loadDependencies() {
    return Promise.all([c3({ block: () => import("./calcite-block-X6PBCDMD.js"), button: () => import("./calcite-button-2T75ADLD.js"), input: () => import("./calcite-input-IVZ7D2IR.js"), list: () => import("./calcite-list-6DLENFMV.js"), "list-item": () => import("./calcite-list-item-HIYDKA7X.js"), checkbox: () => import("./calcite-checkbox-WADOTZUE.js"), loader: () => import("./calcite-loader-VVZPHK6B.js") }), n4()]);
  }
  initialize() {
    this.addHandles(l3(() => "2d" === this.view?.type && !!this.view.grid, (e6) => {
      this.visibleElements.gridControls && (this.snappingOptions.gridEnabled = e6);
    }));
  }
  get _openAndReady() {
    return this.gridOptionsOpen && this.snappingOptions.gridEnabled && this.snappingOptions.enabled;
  }
  get icon() {
    return "snap-to-point";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get snappingOptions() {
    return this.viewModel.snappingOptions;
  }
  set snappingOptions(e6) {
    this.viewModel.snappingOptions = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  set viewModel(e6) {
    e6 !== this._get("viewModel") && (null != this._defaultViewModel && this._defaultViewModel === e6 || (this._defaultViewModel = u2(this._defaultViewModel)), this._set("viewModel", e6));
  }
  render() {
    const { label: e6 } = this;
    return x("div", { "aria-label": e6, class: this.classes(v5.base, e4.widget) }, x("div", { class: v5.container }, this._renderContent()));
  }
  _renderContent() {
    return [this._renderToggles(), this._renderLayerList(), "2d" === this.view?.type && this.visibleElements.gridControls ? this._renderGridOptions() : null];
  }
  _renderToggles() {
    const { visibleElements: e6, view: i4 } = this, s5 = [e6.selfEnabledToggle ? this._renderSelfEnabledToggle() : null, e6.featureEnabledToggle ? this._renderFeatureEnabledToggle() : null, e6.gridEnabledToggle && "2d" === i4?.type ? this._renderGridEnabledToggle() : null].filter(N), l11 = [e6.enabledToggle ? this._renderEnabledToggle() : null, s5.length > 0 ? x("div", { class: v5.nestedContainer }, s5) : null].filter(N);
    return 0 === l11.length ? null : x("calcite-block", { class: v5.toggleBlock, expanded: true, heading: e6.header ? this.label : "", key: "toggle-block", label: this.label }, l11);
  }
  _renderEnabledToggle() {
    return x(c8, { checked: this.viewModel.snappingOptions.enabled, disabled: this._enabledToggleDisabled, key: `${this.id}__enabled-toggle`, label: this.messages.enableSnapping, topLayerDisabled: this.topLayerDisabled, onChange: this._enableSnappingSwitchChange });
  }
  _renderSelfEnabledToggle() {
    return x(c8, { checked: this.viewModel.snappingOptions.selfEnabled, disabled: this._secondaryElementsDisabled, key: `${this.id}__self-enabled-toggle`, label: this.messages.geometryGuides, topLayerDisabled: this.topLayerDisabled, onChange: this._selfEnabledSwitchChange });
  }
  _renderFeatureEnabledToggle() {
    return x(c8, { checked: this.viewModel.snappingOptions.featureEnabled, disabled: this._secondaryElementsDisabled, key: `${this.id}__feature-enabled-toggle`, label: this.messages.featureToFeature, topLayerDisabled: this.topLayerDisabled, onChange: this._featureEnabledSwitchChange });
  }
  _renderGridEnabledToggle() {
    return x(c8, { checked: this.viewModel.snappingOptions.gridEnabled, disabled: this._secondaryElementsDisabled, key: `${this.id}__grid-enabled-toggle`, label: this.messages.grid, topLayerDisabled: this.topLayerDisabled, onChange: this._gridEnabledSwitchChange });
  }
  _renderLayerList() {
    if (!this.visibleElements.layerList) return null;
    const { messages: e6, viewModel: t5 } = this, i4 = t5.layerListViewModel.operationalItems.length > 9 ? x("calcite-input", { class: v5.layerListFilter, clearable: true, placeholder: e6?.searchLayers, onCalciteInputInput: ({ currentTarget: { value: e7 } }) => {
      this._layerListFilter = "" === e7 ? null : new RegExp(e7, "i");
    } }) : null, s5 = this._secondaryElementsDisabled, l11 = this.layerListOpen && !s5, n8 = t5.layerListViewModel.operationalItems?.find((e7) => !!e7.children.length);
    return x("calcite-block", { class: v5.layerListBlock, collapsible: true, disabled: this._secondaryElementsDisabled, expanded: l11, heading: e6.snappingLayers, key: "list-block", onCalciteBlockToggle: (e7) => this.layerListOpen = e7.currentTarget.expanded }, i4, this._renderToggleLayersButton(), x("calcite-list", { class: v5.layerList, displayMode: n8 ? "nested" : "flat", label: e6?.snappingLayers, selectionMode: "none" }, this._renderLayerListItemCollection(t5.layerListViewModel.operationalItems)));
  }
  _renderGridOptions() {
    const { view: e6, visibleElements: t5, snappingManager: i4, snappingOptions: s5, _openAndReady: l11 } = this, { gridEnabled: n8, enabled: a5 } = s5;
    (l11 || "2d" === e6?.type && e6.grid) && this._startLoadGrid();
    const o5 = this._gridLoadTask?.value, r8 = o5 && "2d" === e6?.type && x(o5, { snappingManager: i4, snappingOptions: s5, suppressDeprecationWarning: true, view: e6, visibleElements: t5.gridControlsElements });
    return x("calcite-block", { class: v5.layerListBlock, collapsible: true, disabled: !n8 || !a5, expanded: l11, heading: this.messages.gridOptionsHeading, key: "grid-block", onCalciteBlockClose: () => this.gridOptionsOpen = false, onCalciteBlockOpen: () => this.gridOptionsOpen = true }, r8 ?? x("calcite-loader", { label: this.messagesCommon.loading, scale: "s", text: this.messagesCommon.loading }));
  }
  _startLoadGrid() {
    !this._gridLoadTask && this.visibleElements.gridControls && "2d" === this.view?.type && (this._gridLoadTask = w5(async () => (await import("./GridControls-MIH4SPQ2.js")).default));
  }
  _renderLayerListItemCollection(e6) {
    const i4 = this._layerListFilter;
    return e6.map((e7) => {
      switch (i4 ? n7(e7, i4) : null) {
        case "children": {
          const t5 = e7.children.filter((e8) => false !== n7(e8, i4));
          return this._renderLayerListItemGroup(e7, t5);
        }
        case "self":
        case null:
          return this._renderLayerListItemOrGroup(e7);
        case false:
          return "self" === n7(e7.parent, i4) ? this._renderLayerListItemOrGroup(e7) : null;
      }
    }).toArray().filter(N);
  }
  _renderToggleLayersButton() {
    if (!this.visibleElements.layerListToggleLayersButton) return null;
    const { viewModel: { allLayersEnabled: e6 }, messages: t5 } = this, i4 = e6 ? t5.disableAllLayers : t5.enableAllLayers;
    return x("calcite-button", { appearance: "transparent", class: v5.layerListButton, label: i4, name: "layer-toggle", onclick: this._onToggleLayersButtonClick }, i4);
  }
  _renderLayerListItemOrGroup(e6) {
    if (e6.children.length) return this._renderLayerListItemGroup(e6);
    const { messages: { untitledLayer: t5 } } = this, i4 = e6.title || t5, s5 = () => {
      this.viewModel.toggleSnappingForLayers([e6.layer?.id], "enabled" !== e6.enabled);
    };
    return x("calcite-list-item", { class: v5.layerListItem, key: `${this.id}-list-item-${e6.uid}`, label: i4, onCalciteListItemSelect: (e7) => {
      e7.stopPropagation(), s5();
    } }, x("calcite-checkbox", { checked: "enabled" === e6.enabled, slot: "actions-start", onCalciteCheckboxChange: s5 }));
  }
  _renderLayerListItemGroup(e6, t5) {
    const { messages: i4 } = this, { children: s5, title: l11 } = e6, a5 = l11 || i4.untitledLayer, o5 = l11 && "" !== l11 ? l11 : e3(), r8 = !!t5?.length, d3 = t5 ?? s5, p12 = () => {
      this.viewModel.toggleSnappingForLayers(e6.childLayerIds, "enabled" !== e6.enabled);
    }, g5 = d3?.find((e7) => !!e7.children.length);
    return x("calcite-list-item", { class: v5.layerListGroup, expanded: r8, key: o5, label: a5, onCalciteListItemSelect: (e7) => {
      e7.stopPropagation(), p12();
    } }, x("calcite-checkbox", { checked: "enabled" === e6.enabled, indeterminate: "indeterminate" === e6.enabled, slot: "actions-start", onCalciteCheckboxChange: p12 }), x("calcite-list", { displayMode: g5 ? "nested" : "flat", label: i4?.snappingLayers, selectionMode: "none" }, this._renderLayerListItemCollection(d3)));
  }
  get _enabledToggleDisabled() {
    const e6 = this.snappingOptions;
    return e6.enabledToggled || e6.forceDisabled;
  }
  get _secondaryElementsDisabled() {
    return this._enabledToggleDisabled || !this.snappingOptions.enabled;
  }
};
__decorate([a2()], f6.prototype, "_defaultViewModel", void 0), __decorate([a2()], f6.prototype, "_layerListFilter", void 0), __decorate([a2()], f6.prototype, "_gridLoadTask", void 0), __decorate([a2()], f6.prototype, "_openAndReady", null), __decorate([a2()], f6.prototype, "label", null), __decorate([a2({ type: Boolean, nonNullable: true })], f6.prototype, "layerListOpen", void 0), __decorate([a2({ type: Boolean, nonNullable: true })], f6.prototype, "gridOptionsOpen", void 0), __decorate([a2(), v("esri/widgets/support/SnappingControls/t9n/SnappingControls")], f6.prototype, "messages", void 0), __decorate([a2(), v("esri/t9n/common")], f6.prototype, "messagesCommon", void 0), __decorate([a2({ type: u3 })], f6.prototype, "snappingOptions", null), __decorate([a2()], f6.prototype, "snappingManager", void 0), __decorate([a2()], f6.prototype, "view", null), __decorate([a2({ type: u6 })], f6.prototype, "viewModel", null), __decorate([a2({ type: s2, nonNullable: true })], f6.prototype, "visibleElements", void 0), __decorate([a2()], f6.prototype, "_enabledToggleDisabled", null), __decorate([a2()], f6.prototype, "_secondaryElementsDisabled", null), f6 = __decorate([c2("esri.widgets.support.SnappingControls")], f6);
var C2 = f6;

// node_modules/@arcgis/core/widgets/Sketch.js
var x3 = "esri-sketch";
var E2 = { base: x3, vertical: `${x3}--vertical`, docked: `${x3}-bar`, floating: `${x3}-pad`, chipHorizontal: `${x3}__selection-count-chip--horizontal`, chipVertical: `${x3}__selection-count-chip--vertical`, chipVerticalSmall: `${x3}__selection-count-chip--vertical--s`, popoverWrapper: `${x3}__popover-wrapper` };
var R = { point: "pin", polyline: "line", polygon: "polygon", rectangle: "rectangle", circle: "circle", multipoint: "pins", mesh: "i3d-building", freehandPolygon: "freehand-area", freehandPolyline: "freehand", text: "add-text" };
var G = class extends O {
  constructor(e6, t5) {
    super(e6, t5), this._selectionToolbar = null, this._viewModelHandlesGroup = null, this._popoverElement = null, this.availableCreateTools = ["point", "polyline", "polygon", "rectangle", "circle"], this.customToolOptions = null, this.customActions = null, this.toolbarKind = "floating", this.contextualToolLocation = "separate", this.groupCollapsePriorities = null, this.groupAllowCollapseOptions = null, this.messages = null, this.messagesCommon = null, this.visibleElements = new r5(), this._defaultViewModel = null, this._activeCustomToolOptions = null, this._calcitePopoverReferenceElement = null, this._relativeLocation = "top", this._popoverOpen = false, true !== e6?.suppressDeprecationWarning && (this.announceDeprecation = () => {
      r(n.getLogger(this), "Sketch", "arcgis-sketch", { version: "5.0" });
    }), this._activateCreateTool = this._activateCreateTool.bind(this), this.viewModel = e6?.viewModel || (this._defaultViewModel = new _e({ creationMode: e6?.creationMode ?? "continuous", useLegacyCreateTools: e6?.useLegacyCreateTools ?? "3d" === e6?.view?.type })), this.viewModel.pluginManager.sketch = this;
  }
  normalizeCtorArgs(e6 = {}) {
    const _a = e6, { suppressDeprecationWarning: t5 } = _a, o5 = __objRest(_a, ["suppressDeprecationWarning"]);
    return o5;
  }
  initialize() {
    const { layer: e6, view: t5 } = this, o5 = "2d" === t5?.type, i4 = new y2({ persistSelection: false, visibleElements: new n6({ chip: false, lassoTool: o5, operationTypeControls: false, pan: false, pointTool: false, rectangleTool: o5 }), view: t5, sources: e6 ? [e6] : null, scale: this.scale });
    this.addHandles([l3(() => this.viewModel, (e7) => {
      this._viewModelHandlesGroup = l2(this._viewModelHandlesGroup), e7 && (this._viewModelHandlesGroup = t([e7.on("create", () => this.scheduleRender()), e7.on("update", () => this.scheduleRender()), e7.on("delete", (e8) => this.emit("delete", e8)), e7.on("undo", () => this.scheduleRender()), e7.on("redo", () => this.scheduleRender()), l3(() => e7.layer, (e8) => {
        this._selectionToolbar && (this._selectionToolbar.sources = e8 ? [e8] : null);
      }), l3(() => e7.view, (e8) => {
        this._selectionToolbar && (this._selectionToolbar.view = e8);
      }), l3(() => e7.state, () => this.notifyChange("state"))]));
    }, w2), f(() => i4.activeOperation, () => {
      this.viewModel.cancel(), this._activeCustomToolOptions = null;
    }), i4.on("complete", (e7) => this._onSelectionOperationComplete(e7)), l3(() => {
      const { view: e7, visibleElements: { selectionTools: t6 } } = this;
      return { lassoTool: "3d" !== e7?.type && !!t6?.["lasso-selection"], rectangleTool: "3d" !== e7?.type && !!t6?.["rectangle-selection"] };
    }, (e7) => {
      Object.assign(i4.visibleElements, e7);
    }, w2)]), this._selectionToolbar = i4;
  }
  loadDependencies() {
    return c3({ action: () => import("./calcite-action-EB7V3T34.js"), chip: () => import("./calcite-chip-XVBOSDXF.js"), popover: () => import("./calcite-popover-5N7WXJZW.js") });
  }
  destroy() {
    this._selectionToolbar?.destroy(), this._viewModelHandlesGroup = l2(this._viewModelHandlesGroup);
  }
  get activeTool() {
    const e6 = this._selectionToolbar?.activeOperation;
    if (e6) switch (e6.toolName) {
      case "lasso":
        return "lasso-selection";
      case "rectangle":
        return "rectangle-selection";
      case "default":
        return "custom-selection";
    }
    const { availableCreateTools: t5 } = this, { activeTool: o5, activeCreateToolDrawMode: i4 } = this.viewModel;
    return "polygon" === o5 && "freehand" === i4 && t5?.includes("freehandPolygon") ? "freehandPolygon" : "polyline" === o5 && "freehand" === i4 && t5?.includes("freehandPolyline") ? "freehandPolyline" : this.viewModel.activeTool;
  }
  get activeTooltip() {
    return this.viewModel.activeTooltip;
  }
  get createGraphic() {
    return this.viewModel.createGraphic;
  }
  get creationMode() {
    return this.viewModel.creationMode;
  }
  set creationMode(e6) {
    this.viewModel.creationMode = e6;
  }
  get defaultCreateOptions() {
    return this.viewModel.defaultCreateOptions;
  }
  set defaultCreateOptions(e6) {
    this.viewModel.defaultCreateOptions = e6;
  }
  get defaultUpdateOptions() {
    return this.viewModel.defaultUpdateOptions;
  }
  set defaultUpdateOptions(e6) {
    this.viewModel.defaultUpdateOptions = e6;
  }
  get icon() {
    return "pencil";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    return this.messages?.widgetLabel ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get labelOptions() {
    return this.viewModel.labelOptions;
  }
  set labelOptions(e6) {
    this.viewModel.labelOptions = e6;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e6) {
    this.viewModel.layer = e6;
  }
  set layout(e6) {
    this._set("layout", e6), this._selectionToolbar && (this._selectionToolbar.layout = e6);
  }
  get pointSymbol() {
    return this.viewModel.pointSymbol;
  }
  set pointSymbol(e6) {
    this.viewModel.pointSymbol = e6;
  }
  get polygonSymbol() {
    return this.viewModel.polygonSymbol;
  }
  set polygonSymbol(e6) {
    this.viewModel.polygonSymbol = e6;
  }
  get polylineSymbol() {
    return this.viewModel.polylineSymbol;
  }
  set polylineSymbol(e6) {
    this.viewModel.polylineSymbol = e6;
  }
  get textSymbol() {
    return this.viewModel.textSymbol;
  }
  set textSymbol(e6) {
    this.viewModel.textSymbol = e6;
  }
  set scale(e6) {
    this._set("scale", e6), this._selectionToolbar && (this._selectionToolbar.scale = e6);
  }
  get snappingOptions() {
    return this.viewModel.snappingOptions;
  }
  set snappingOptions(e6) {
    this.viewModel.snappingOptions = e6;
  }
  get state() {
    return this._selectionToolbar?.activeOperation ? "active" : this.viewModel.state;
  }
  get tooltipOptions() {
    return this.viewModel.tooltipOptions;
  }
  set tooltipOptions(e6) {
    this.viewModel.tooltipOptions = e6;
  }
  get updateGraphics() {
    return this.viewModel.updateGraphics;
  }
  get valueOptions() {
    return this.viewModel.valueOptions;
  }
  set valueOptions(e6) {
    this.viewModel.valueOptions = e6;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  set viewModel(e6) {
    const t5 = this._get("viewModel");
    e6 !== t5 && (t5 && t5 === this._defaultViewModel && u2(t5), t5?.pluginManager?.sketch === this && (t5.pluginManager.sketch = null), this._set("viewModel", e6), e6.pluginManager.sketch = this);
  }
  get useLegacyCreateTools() {
    return this.viewModel.useLegacyCreateTools;
  }
  set useLegacyCreateTools(e6) {
    this.viewModel.useLegacyCreateTools = e6;
  }
  get isUsingLegacyCreateTools() {
    return this.viewModel.isUsingLegacyCreateTools;
  }
  get _effectiveAvailableCreateTools() {
    if (this.viewModel.effectiveAvailablePlugins?.length) return this.viewModel.effectiveAvailablePlugins;
    const { availableCreateTools: e6, view: t5, visibleElements: o5 } = this, i4 = e6?.filter((e7) => !!o5.createTools?.[e7]);
    return "3d" === t5?.type ? i4?.filter((e7) => "multipoint" !== e7) : i4;
  }
  create(e6, t5, o5) {
    const i4 = o5?.createOptions ?? t5;
    return this._activeCustomToolOptions = o5, y(this.viewModel.create(e6, i4));
  }
  update(e6, t5) {
    return y(this.viewModel.update(e6, t5));
  }
  complete() {
    this.viewModel.complete();
  }
  cancel() {
    this._selectionToolbar?.cancel(), this.viewModel.cancel(), this._activeCustomToolOptions = null;
  }
  undo() {
    this.viewModel.undo(), this.view?.focus();
  }
  redo() {
    this.viewModel.redo(), this.view?.focus();
  }
  delete() {
    this.viewModel.delete();
  }
  duplicate() {
    return this.viewModel.duplicate();
  }
  dismissFloatingElements() {
    this._popoverOpen = false;
  }
  render() {
    const { toolbarKind: e6, layout: t5, scale: o5 } = this;
    return x("div", null, x("div", { classes: { [E2.base]: true, [E2.floating]: "floating" === e6, [E2.docked]: "docked" === e6, [E2.vertical]: "vertical" === t5 } }, x(h4, { barStyle: e6, layout: t5, scale: o5 }, this._renderSelectionSetItemGroupInline(), this._renderSelectionToolsOrBack(), this._renderCreateToolActionGroup(), this._renderUndoRedoMenuItemGroup(), this._renderSettingsMenuItemGroup()), this._renderSelectionSetToolbar(), this._renderSettingsMenuPopover()));
  }
  _renderSelectionToolsOrBack() {
    if (!this.viewModel.isUsingLegacyCreateTools && this.viewModel.firstPluginWithSwappableLeaf) return this._renderBackButton();
    const e6 = this.customActions?.filter((e7) => "selection-toolbar" === e7.position);
    return x("div", { "allow-collapse": this.groupAllowCollapseOptions?.get("selectionTools") ?? true, "group-kind": "split-button", key: "selection-split-button", priority: this.groupCollapsePriorities?.get("selectionTools") ?? 0 }, this._renderDefaultSelectionButton(), this._selectionToolbar?.render(), e6?.map((e7) => this._renderToolbarItem(e7)));
  }
  _renderSettingsMenuPopover() {
    const { messagesCommon: e6, snappingOptions: t5, view: o5, viewModel: i4, visibleElements: l11 } = this;
    if (!this._calcitePopoverReferenceElement) return;
    const s5 = { directionModePicker: l11.directionModePicker, labelsToggle: l11.labelsToggle, tooltipsToggle: l11.tooltipsToggle }, n8 = "horizontal" === this.layout ? "top" === this._relativeLocation ? "bottom-end" : "top-end" : "right-end";
    return x("calcite-popover", { afterCreate: (e7) => this._popoverElement = e7, closable: true, heading: e6.settings, label: e6.settings, open: this._popoverOpen, overlayPositioning: "fixed", placement: n8, referenceElement: this._calcitePopoverReferenceElement, scale: this.scale, topLayerDisabled: this.topLayerDisabled, onCalcitePopoverBeforeClose: (e7) => this._beforePopoverClose(e7.target), onCalcitePopoverBeforeOpen: (e7) => this._remeasurePopoverSizes(e7.currentTarget), onCalcitePopoverClose: (e7) => this._refocusOnView(e7.target) }, x("div", { class: E2.popoverWrapper }, Object.values(s5).includes(true) ? x(k, { sketchOptions: i4.sketchOptions, viewType: o5?.type, visibleElements: new s3(s5) }) : void 0, l11.snappingControls && o5 && t5 ? x(C2, { snappingManager: this.viewModel.snappingManager, snappingOptions: t5, view: o5, visibleElements: l11.snappingControlsElements }) : void 0));
  }
  _beforePopoverClose(e6) {
    e6 === this._popoverElement && (this._popoverOpen = false);
  }
  _renderSelectionSetToolbar() {
    if ("separate" !== this.contextualToolLocation) return;
    const e6 = this._renderSelectionSetItemGroup();
    return e6?.length ? x(h4, { barStyle: this.toolbarKind, layout: this.layout, scale: this.scale }, e6) : void 0;
  }
  _renderSelectionSetItemGroupInline() {
    return "separate" === this.contextualToolLocation ? [] : this._renderSelectionSetItemGroup();
  }
  _renderUndoRedoMenuItemGroup() {
    return x("div", { "allow-collapse": this.groupAllowCollapseOptions?.get("undoRedo") ?? true, "group-kind": "split-button", key: "undo-redo-menu", priority: this.groupCollapsePriorities?.get("undoRedo") ?? 10, slot: "actions-end" }, this._renderUndoButton(), this._renderRedoButton());
  }
  _renderSettingsMenuItemGroup() {
    const e6 = [], t5 = [];
    this.customActions?.forEach((o5) => {
      "settings-before" === o5.position ? t5.push(o5) : "settings-after" === o5.position && e6.push(o5);
    });
    const i4 = [...t5.map((e7) => this._renderToolbarItem(e7)), this._renderSettingsMenuButton(), ...e6.map((e7) => this._renderToolbarItem(e7))].filter(N);
    if (i4.length) return x("div", { "allow-collapse": this.groupAllowCollapseOptions?.get("settings") ?? false, "group-kind": "overflow-group", key: "settings-menu", priority: this.groupCollapsePriorities?.get("settings") ?? 1e3, slot: "actions-end" }, i4);
  }
  _renderSelectionSetItemGroup() {
    if (!this.updateGraphics.length) return [];
    const e6 = "inline-end" === this.contextualToolLocation ? "actions-end" : void 0, t5 = this.customActions?.filter((e7) => "before-selection-set" === e7.position), o5 = this.customActions?.filter((e7) => "after-selection-set" === e7.position), i4 = this.groupCollapsePriorities?.get("selectionSet") ?? 100;
    return [x("div", { "group-kind": "measured-content", key: "selection-count-chip-group", priority: i4, slot: e6 }, this._renderFeatureCountChip()), x("div", { "allow-collapse": this.groupAllowCollapseOptions?.get("selectionSet") ?? false, "group-kind": "overflow-group", key: "selection-set-tool-group", priority: i4, slot: e6 }, t5?.map((e7) => this._renderToolbarItem(e7)), this._renderDuplicateButton(), this._renderDeleteButton(), o5?.map((e7) => this._renderToolbarItem(e7)))];
  }
  _renderDefaultSelectionButton() {
    if (!this.viewModel.updateOnGraphicClick) return [];
    const { messages: e6, state: t5 } = this;
    return this._renderToolbarItem({ id: "pointer-select", text: e6.selectFeature, icon: "cursor", onclick: this._activateDefaultSelectTool, active: "ready" === t5 });
  }
  _renderBackButton() {
    const { viewModel: e6, isUsingLegacyCreateTools: t5 } = this;
    if (!t5 && e6.multiplePluginsActive && e6.firstPluginWithSwappableLeaf && e6.rootPlugins && !(e6.rootPlugins.length < 2 && e6.rootPlugins.includes(e6.firstPluginWithSwappableLeaf))) return x("div", { "allow-collapse": false, "group-kind": "overflow-group", key: "back-button-group" }, x("calcite-action", { icon: "chevron-left", onclick: () => {
      this.viewModel?.cancel();
    }, scale: this.scale, text: this.messagesCommon.back }));
  }
  _renderCreateToolActionGroup() {
    const e6 = this.viewModel.firstPluginWithSwappableLeaf ? [] : this.customToolOptions?.flatMap((e7) => this._renderCustomToolItem(e7)) ?? [], t5 = this._effectiveAvailableCreateTools, o5 = t5?.filter((e7) => "string" == typeof e7), i4 = o5?.map((e7) => this._renderCreateToolItem(e7)), l11 = t5?.filter((e7) => "string" != typeof e7).map((e7) => this._renderCreateToolItem(e7));
    return [i4?.length || e6?.length || l11?.length ? x("div", { "allow-collapse": this.groupAllowCollapseOptions?.get("createTools") ?? true, "group-kind": "overflow-group", key: "create-tools-group", priority: this.groupCollapsePriorities?.get("createTools") ?? 100 }, i4, e6, l11) : void 0];
  }
  _renderCreateToolItem(e6) {
    return "string" == typeof e6 ? this._renderBuiltInCreateToolItem(e6) : this._renderDrawToolPluginItem(e6);
  }
  _renderDrawToolPluginItem(e6) {
    const { icon: t5, localizationKey: o5, uniqueId: i4, hidden: l11 } = e6;
    if (l11) return [];
    const s5 = this.messages.digitizers, n8 = s5?.[o5] ?? o5, r8 = !this._activeCustomToolOptions && this.viewModel.drawTool?.pluginStack.some((e7) => !e7.configuration?.hidden && e7.configuration?.uniqueId === i4);
    return this._renderToolbarItem({ id: `${o5}-button`, text: n8, icon: t5, onclick: () => this._activatePlugin([e6]), active: r8 });
  }
  _renderBuiltInCreateToolItem(e6) {
    return this._renderToolbarItem({ id: `${e6}-button`, text: this.messages.draw[e6], icon: R[e6], onclick: () => this._activateCreateTool(e6), active: this.activeTool === e6 && !this._activeCustomToolOptions });
  }
  _renderCustomToolItem(e6) {
    const { toolKey: t5 } = e6;
    return this._renderToolbarItem({ id: `custom-${e6.toolKey}`, text: e6.label, icon: e6.icon, onclick: () => this._activateCreateTool(e6.toolName, null, e6), active: this._activeCustomToolOptions?.toolKey === t5 });
  }
  _renderUndoButton() {
    return this.visibleElements.undoRedoMenu ? this._renderToolbarItem({ id: "undo-button", text: this.messages.undo, icon: "undo", disabled: !this.viewModel.canUndo(), onclick: this.undo, flipRTL: true }) : [];
  }
  _renderRedoButton() {
    return this.visibleElements.undoRedoMenu ? this._renderToolbarItem({ id: "redo-button", text: this.messages.redo, icon: "redo", disabled: !this.viewModel.canRedo(), onclick: this.redo, flipRTL: true }) : [];
  }
  _renderSettingsMenuButton() {
    return this.visibleElements.settingsMenu ? this._renderToolbarItem({ id: "settings-menu-action", text: this.messagesCommon.settings, icon: "gear", active: this._popoverOpen, onclick: () => this._popoverOpen = !this._popoverOpen, afterCreate: (e6) => this._calcitePopoverReferenceElement = e6, afterUpdate: (e6) => this._calcitePopoverReferenceElement = e6, afterRemoved: () => this._calcitePopoverReferenceElement = null }) : [];
  }
  _renderFeatureCountChip() {
    if (!this.visibleElements.selectionCountLabel) return [];
    const { layout: e6, messages: o5, scale: i4, id: l11, updateGraphics: { length: s5 } } = this, n8 = w4(o5.selectedCount, { count: s5 }), r8 = "l" === i4 ? 999 : 99, a5 = s5 > r8 ? w4(o5.selectedCountTruncated, { truncated: r8 }) : s5, p12 = "l" !== i4 && "vertical" === e6, c10 = p12 ? `${l11}-selection-chip-small` : `${l11}-selection-chip`;
    return [p12 ? x("span", { classes: { [E2.chipVertical]: true, [E2.chipVerticalSmall]: "s" === this.scale }, id: c10, tabIndex: 0, title: n8 }, a5) : x("calcite-chip", { appearance: "outline", class: "horizontal" === e6 ? E2.chipHorizontal : E2.chipVertical, id: c10, kind: "brand", label: n8, scale: "l" === i4 ? "m" : "s", tabIndex: 0, title: "vertical" === e6 ? n8 : void 0 }, "vertical" === e6 ? a5 : n8)];
  }
  _renderDuplicateButton() {
    if (!this.visibleElements.duplicateButton) return [];
    const { messages: e6 } = this;
    return this._renderToolbarItem({ id: "duplicate", text: this.updateGraphics.length > 1 ? e6.duplicateFeatures : e6.duplicateFeature, icon: "copy", onclick: this._onDuplicateSelect });
  }
  _renderDeleteButton() {
    if (!this.visibleElements.deleteButton) return [];
    const { messages: e6 } = this, t5 = this.updateGraphics.length > 1 ? e6.deleteFeatures : e6.deleteFeature;
    return this._renderToolbarItem({ id: "delete", text: t5, icon: "trash", onclick: this.delete });
  }
  _renderToolbarItem({ id: e6, text: t5, icon: o5, disabled: i4, onclick: l11, active: s5, flipRTL: n8, afterCreate: r8, afterUpdate: a5, afterRemoved: p12 }) {
    const c10 = `${this.id}-${e6}`;
    return [x("calcite-action", { active: s5, afterCreate: r8, afterRemoved: p12, afterUpdate: a5, bind: this, "data-testid": e6, disabled: i4 || "disabled" === this.state, icon: o5, iconFlipRtl: n8 ?? false, id: c10, key: e6, onclick: l11, scale: this.scale, text: t5, title: t5 })];
  }
  _remeasurePopoverSizes(e6) {
    try {
      const t5 = e6.parentElement, o5 = this?.view?.container?.getBoundingClientRect(), i4 = t5?.style;
      if (!(t5 && o5 && i4 && this.view?.container?.contains(t5))) return;
      const l11 = this._calcitePopoverReferenceElement;
      if (!l11) return;
      const { bottom: s5, top: n8 } = l11.getBoundingClientRect();
      if ("horizontal" === this.layout) {
        const e7 = s5 < o5.height / 2;
        e7 !== ("top" === this._relativeLocation) && (this._relativeLocation = e7 ? "top" : "bottom"), e7 ? (i4?.setProperty("--sketch-view-height-offset", s5 - o5.top + "px"), i4?.setProperty("--sketch-view-margin-offset", "30px")) : (i4?.setProperty("--sketch-view-height-offset", o5.bottom - n8 + "px"), i4?.setProperty("--sketch-view-margin-offset", "15px"));
      } else "vertical" === this.layout && (i4.setProperty("--sketch-view-height-offset", "15px"), i4.setProperty("--sketch-view-margin-offset", "15px"));
      const r8 = e6.shadowRoot?.querySelector("div.header")?.getBoundingClientRect().height;
      i4.setProperty("--sketch-popover-header-offset", `${r8}px`);
    } catch (t5) {
      n.getLogger(this.declaredClass).warnOnce("Sketch failed to lay out settings menu.", t5);
    }
  }
  _activateCreateTool(e6, t5, o5) {
    const i4 = this._activeCustomToolOptions;
    if (o5 || i4) {
      if (o5?.toolKey === i4?.toolKey) return void this.cancel();
    } else if (this.activeTool === e6) return void this.cancel();
    this._selectionToolbar?.cancel(), this.create(e6, t5, o5);
  }
  _activatePlugin(e6) {
    this._selectionToolbar?.cancel(), this.viewModel.firstPluginWithSwappableLeaf ? (this.viewModel.drawTool?.replaceLeaf(e6), this.view?.ready && this.view.focus()) : this._activateCreateTool(e6);
  }
  _onDuplicateSelect() {
    const e6 = this.duplicate(), t5 = this.viewModel.activeTool;
    "transform" !== t5 && "reshape" !== t5 || this.update(e6, { tool: t5 });
  }
  _onSelectionOperationComplete(e6) {
    const { viewModel: { defaultUpdateOptions: t5 } } = this, { selection: o5 } = e6;
    if (!e6.aborted && o5.length) {
      const e7 = t5.tool, i4 = o5.length > 1 && "reshape" === e7 ? "transform" : e7;
      this.update(o5, __spreadProps(__spreadValues({}, t5), { tool: i4 }));
    }
    this.notifyChange("state");
  }
  _activateDefaultSelectTool() {
    this.cancel(), this.view?.focus();
  }
  _refocusOnView(e6) {
    this.activeTool && e6 === this._popoverElement && this.view?.focus();
  }
};
__decorate([a2()], G.prototype, "activeTool", null), __decorate([a2({ readOnly: true })], G.prototype, "activeTooltip", null), __decorate([a2({ cast: (e6) => {
  if (!e6?.length) return null;
  const t5 = /* @__PURE__ */ new Set(["point", "polyline", "polygon", "rectangle", "circle", "multipoint", "freehandPolyline", "freehandPolygon", "mesh", "text"]);
  return e6.filter((e7) => t5.has(e7));
} })], G.prototype, "availableCreateTools", void 0), __decorate([a2({ readOnly: true })], G.prototype, "createGraphic", null), __decorate([a2()], G.prototype, "creationMode", null), __decorate([a2()], G.prototype, "customToolOptions", void 0), __decorate([a2()], G.prototype, "customActions", void 0), __decorate([a2()], G.prototype, "defaultCreateOptions", null), __decorate([a2()], G.prototype, "defaultUpdateOptions", null), __decorate([a2()], G.prototype, "icon", null), __decorate([a2()], G.prototype, "label", null), __decorate([a2({ type: c5 })], G.prototype, "labelOptions", null), __decorate([a2()], G.prototype, "layer", null), __decorate([a2({ type: ["horizontal", "vertical"], value: "horizontal" })], G.prototype, "layout", null), __decorate([a2({ types: x2 })], G.prototype, "pointSymbol", null), __decorate([a2({ types: x2 })], G.prototype, "polygonSymbol", null), __decorate([a2({ types: x2 })], G.prototype, "polylineSymbol", null), __decorate([a2()], G.prototype, "textSymbol", null), __decorate([a2({ value: "m" })], G.prototype, "scale", null), __decorate([a2()], G.prototype, "toolbarKind", void 0), __decorate([a2()], G.prototype, "contextualToolLocation", void 0), __decorate([a2()], G.prototype, "groupCollapsePriorities", void 0), __decorate([a2()], G.prototype, "groupAllowCollapseOptions", void 0), __decorate([a2(), v("esri/widgets/Sketch/t9n/Sketch")], G.prototype, "messages", void 0), __decorate([a2(), v("esri/t9n/common")], G.prototype, "messagesCommon", void 0), __decorate([a2()], G.prototype, "snappingOptions", null), __decorate([a2()], G.prototype, "state", null), __decorate([a2({ type: n2 })], G.prototype, "tooltipOptions", null), __decorate([a2({ readOnly: true })], G.prototype, "updateGraphics", null), __decorate([a2({ type: n3, nonNullable: true })], G.prototype, "valueOptions", null), __decorate([a2()], G.prototype, "view", null), __decorate([a2({ type: _e }), m(["create", "update", "undo", "redo"])], G.prototype, "viewModel", null), __decorate([a2({ type: r5, nonNullable: true })], G.prototype, "visibleElements", void 0), __decorate([a2()], G.prototype, "useLegacyCreateTools", null), __decorate([a2()], G.prototype, "isUsingLegacyCreateTools", null), __decorate([a2()], G.prototype, "_effectiveAvailableCreateTools", null), __decorate([a2()], G.prototype, "_defaultViewModel", void 0), __decorate([a2()], G.prototype, "_activeCustomToolOptions", void 0), __decorate([a2()], G.prototype, "_calcitePopoverReferenceElement", void 0), __decorate([a2()], G.prototype, "_relativeLocation", void 0), __decorate([a2()], G.prototype, "_popoverOpen", void 0), G = __decorate([c2("esri.widgets.Sketch")], G);
var B = G;

// node_modules/@arcgis/map-components/dist/components/arcgis-sketch/customElement.js
var h6 = css`.esri-widget__heading{color:var(--calcite-color-text-2);margin:0 0 .5rem;font-weight:var(--calcite-font-weight-semibold)}h1.esri-widget__heading{font-size:var(--calcite-font-size-xl)}h2.esri-widget__heading{font-size:var(--calcite-font-size-md)}h3.esri-widget__heading,h4.esri-widget__heading,h5.esri-widget__heading,h6.esri-widget__heading{font-size:var(--calcite-font-size)}.esri-widget{box-sizing:border-box;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget *,.esri-widget :before,.esri-widget :after{box-sizing:inherit}.esri-widget.esri-widget--disabled>*{opacity:.4;pointer-events:none}.esri-widget.esri-widget--compact{--esri-widget-padding-y: 0;--esri-widget-padding-x: 0}.esri-widget__anchor{color:var(--calcite-color-text-2)}.esri-widget__anchor:hover{color:var(--calcite-color-text-3)}.esri-widget__anchor:hover,.esri-widget__anchor:focus{text-decoration:underline}.esri-widget__anchor--disabled{opacity:.4;pointer-events:none}.esri-widget__header{background-color:var(--calcite-color-foreground-1);flex:1 0 100%;justify-content:space-between;align-items:center;width:100%;min-height:48px;padding:12px 0 12px 15px;display:flex}.esri-widget__heading{word-break:break-word}.esri-widget__header .esri-widget__heading{width:calc(100% - 48px);text-align:initial;color:var(--calcite-color-text-1);align-items:center;margin:0;padding:0;display:flex}.esri-widget__header-button{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background-color:var(--calcite-color-foreground-1);border:none;flex:0 0 48px;justify-content:center;align-self:stretch;align-items:center;width:48px;padding:0;display:flex}.esri-widget__footer{background-color:var(--calcite-color-foreground-1);justify-content:center;align-items:center;width:100%;min-height:48px;display:flex}.esri-widget__footer-pagination{color:var(--calcite-color-text-2);justify-content:space-between;align-items:center;display:flex}.esri-widget__footer-pagination-previous-button,.esri-widget__footer-pagination-next-button{cursor:pointer;background-color:var(--calcite-color-foreground-1);border:0;margin:0 7px;padding:12px 15px;transition:background-color .125s ease-in-out}.esri-widget__footer-pagination-previous-button:hover,.esri-widget__footer-pagination-previous-button:focus,.esri-widget__footer-pagination-next-button:hover,.esri-widget__footer-pagination-next-button:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1)}.esri-menu{visibility:hidden;z-index:1;background-clip:padding;background-color:var(--calcite-color-foreground-1);background-clip:padding-box;width:100%;max-height:0;margin:2px 0 0;padding:0;font-size:var(--calcite-font-size);line-height:var(--calcite-spacing-xl);position:absolute;top:100%;left:0;overflow:hidden;box-shadow:0 1px 2px #0000004d}.esri-menu .esri-menu__header{color:var(--calcite-color-text-inverse);background-color:var(--calcite-color-inverse);padding:6px 12px}.esri-menu__list{margin:0;padding:0;list-style:none}.esri-menu__list-item{cursor:pointer;border-top:1px solid #adadad4d;border-left:3px solid #0000;padding:.8em 1em}.esri-menu__list-item [class^=esri-icon-],.esri-menu__list-item [class*=" esri-icon-"]{padding-right:2.8px}.esri-menu__list-item:first-child{border-top:none}.esri-menu__list-item--focus,.esri-menu__list-item:hover,.esri-menu__list-item:focus{background-color:var(--calcite-color-foreground-1)}.esri-menu__list-item:active{background-color:var(--calcite-color-foreground-current)}.esri-menu__list-item--active,.esri-menu__list-item--active:hover,.esri-menu__list-item--active:focus{background-color:var(--calcite-color-foreground-1);border-left-color:var(--calcite-color-brand)}.esri-widget__table{border-collapse:collapse;color:var(--calcite-color-text-1);border:none;width:100%;line-height:var(--calcite-font-line-height-relative-tight)}.esri-widget__table tr:nth-child(odd){background-color:var(--calcite-color-transparent)}.esri-widget__table tr:nth-child(2n){background-color:var(--calcite-color-transparent-press)}.esri-widget__table tr a{color:var(--calcite-color-text-2)}.esri-widget__table tr a:hover,.esri-widget__table tr a:focus{color:var(--calcite-color-text-1)}.esri-widget__table tr td,.esri-widget__table tr th{vertical-align:top;word-break:break-word;padding:.5em .7em;font-size:var(--calcite-font-size-sm);font-weight:var(--calcite-font-weight-regular)}.esri-widget__table tr th{text-align:left;border-right:3px solid #0000000d;width:50%}.esri-widget__table tr td{width:50%}.esri-input{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-1);border:1px solid #959595;font-size:var(--calcite-font-size)}.esri-input::-ms-clear{display:none}.esri-input::placeholder{opacity:1;color:var(--calcite-color-text-2)}.esri-input:placeholder-shown{text-overflow:ellipsis}.esri-input[type=text],.esri-input[type=password],.esri-input[type=number]{height:32px;padding:0 .5em}calcite-combobox.esri-input{border:none}.esri-widget__content--empty{text-align:center;color:var(--calcite-color-border-input);flex-flow:column wrap;align-items:center;padding:18px 22px;display:flex}.esri-widget__content--empty h1.esri-widget__heading,.esri-widget__content--empty h2.esri-widget__heading,.esri-widget__content--empty h3.esri-widget__heading,.esri-widget__content--empty h4.esri-widget__heading,.esri-widget__content--empty h5.esri-widget__heading{font-weight:var(--calcite-font-weight-regular)}.esri-widget__content-illustration--empty{width:128px;padding:1rem 0}.esri-widget__content-icon--empty{width:32px;padding:.5rem 0}.esri-select{appearance:none;cursor:pointer;color:var(--calcite-color-text-2);background:var(--calcite-color-foreground-1) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-8 -8 32 32' width='32' height='32'%3E%3Cpath d='M8 11.207l-4-4V5.793l4 4 4-4v1.414z' fill='%23adadad' fillrule='nonzero'/%3E%3C/svg%3E") 100% no-repeat;border:1px solid #959595;border-radius:0;width:100%;height:32px;margin:0;padding:0 .5em;font-family:inherit;font-size:.85em;display:block}.esri-select[disabled]{cursor:auto}.esri-select::-ms-expand{display:none}.esri-disabled a,.esri-disabled [role=menu],.esri-disabled [role=checkbox],.esri-disabled [class^=esri-icon-],.esri-disabled [class*=" esri-icon-"]{color:var(--calcite-color-text-3)}.keynav-mode .esri-widget:focus,.keynav-mode .esri-widget :focus{z-index:1;outline-offset:2px;outline:2px solid #adadad}.esri-widget__loader-animation{border:.15em solid #adadad4d;border-top-color:var(--calcite-color-border-input);border-radius:100%;width:1em;height:1em;font-size:var(--calcite-font-size-md);animation:1.25s linear infinite esri-rotate;display:block;transform:translateZ(0)}:dir(rtl) .esri-widget__table th{text-align:right;border-left:3px solid #0000000d;border-right:none}:dir(rtl) .esri-select{background-position:0}:dir(rtl) .esri-menu__list-item{border-left:none;border-right:3px solid #0000}:dir(rtl) .esri-menu__list-item [class^=esri-icon-],:dir(rtl) .esri-menu__list-item [class*=" esri-icon-"]{padding-left:2px;padding-right:0}:dir(rtl) .esri-menu__list-item--active{border-right-color:var(--calcite-color-brand)}.esri-icon-font-fallback-text{clip:rect(0 0 0 0);width:1px;height:1px;position:absolute;overflow:hidden}.esri-rotating{animation:1.25s linear infinite esri-rotate;transform:translateZ(0)}.esri-clearfix:before,.esri-clearfix:after{content:" ";display:table}.esri-clearfix:after{clear:both}.esri-interactive{cursor:pointer}.esri-hidden{display:none!important}.esri-invisible{visibility:hidden!important}.esri-offscreen{position:absolute;top:-999em;left:-999em}.esri-match-height{flex-direction:column;flex:auto;display:flex;overflow:hidden}:host{display:flex}.root{user-select:none;display:flex;flex-flow:column wrap;padding:var(--arcgis-internal-padding);overflow-y:auto;width:100%;.container{display:flex;flex:1 1 auto;flex-direction:column;gap:var(--calcite-spacing-sm)}.numeric-inputs-container{display:grid;grid-auto-columns:1fr;grid-auto-flow:column;gap:var(--calcite-spacing-sm)}arcgis-labeled-switch{margin-block-end:var(--calcite-spacing-sm)}.switch--bordered{border-width:0 0 var(--calcite-spacing-px) 0;border-style:solid;border-color:var(--calcite-color-border-1);padding-block-end:var(--calcite-spacing-sm)}.tile-group{display:flex;column-gap:var(--calcite-spacing-md);align-items:start;margin-bottom:calc(0px - var(--calcite-spacing-sm))}.tile{position:relative;.content{display:flex;flex-direction:column;row-gap:var(--calcite-spacing-md);align-items:center;padding:var(--calcite-spacing-md);color:var(--calcite-color-text-2)}&.disabled{opacity:var(--calcite-opacity-disabled)}&:focus-within{outline:var(--calcite-spacing-base) solid var(--calcite-color-brand);outline-offset:var(--calcite-spacing-base)}input[type=radio]{appearance:none;position:absolute;inset:0;opacity:.001;border:var(--calcite-spacing-px) solid transparent;cursor:pointer;&:checked+.content{border:var(--calcite-spacing-px) solid var(--calcite-color-brand)}+.content{border:var(--calcite-spacing-px) solid transparent;calcite-label{margin-bottom:calc(0px - var(--calcite-label-margin-bottom, .75rem));font-weight:var(--calcite-font-weight-medium)}}}}.inline-icon{margin-left:var(--calcite-spacing-xs);vertical-align:top;color:var(--calcite-color-status-warning)}}calcite-block>.esri-grid-controls{background:0 0;padding:0}.esri-grid-controls{-webkit-user-select:none;user-select:none;padding:var(--arcgis-internal-padding);flex-flow:column wrap;display:flex;calcite-label.esri-labeled-switch__label{margin-block-end:var(--calcite-spacing-sm, .5rem)}}.esri-grid-controls__switch--bordered{border-width:0 0 var(--calcite-spacing-px) 0;border-style:solid;border-color:var(--calcite-color-border-1)}.esri-grid-controls__container{gap:var(--calcite-spacing-sm);flex-direction:column;flex:auto;display:flex}.esri-grid-controls__tilegroup{column-gap:var(--calcite-spacing-md);align-items:start;display:flex}.esri-grid-controls__tile__content{row-gap:var(--calcite-spacing-md);padding:var(--calcite-spacing-md);color:var(--calcite-color-text-2);flex-direction:column;align-items:center;display:flex}.esri-grid-controls__tile__content calcite-label{margin-bottom:calc(0px - var(--calcite-label-margin-bottom, .75rem));font-weight:var(--calcite-font-weight-medium)}.esri-grid-controls__tile{position:relative}.esri-grid-controls__tile:focus-within{outline:2px solid var(--calcite-color-brand);outline-offset:2px}.esri-grid-controls__tile--disabled{opacity:var(--calcite-opacity-disabled)}.esri-grid-controls__tile input[type=radio]{appearance:none;opacity:.001;border:var(--calcite-spacing-px) solid transparent;cursor:pointer;position:absolute;inset:0}.esri-grid-controls__tile input[type=radio]:checked+.esri-grid-controls__tile__content{border:var(--calcite-spacing-px) solid var(--calcite-color-brand)}.esri-grid-controls__tile input[type=radio]+.esri-grid-controls__tile__content{border:var(--calcite-spacing-px) solid transparent}.esri-grid-controls__numeric-inputs__container{gap:var(--calcite-spacing-sm);grid-auto-columns:1fr;grid-auto-flow:column;display:grid}.esri-grid-controls__inline-icon{margin-left:var(--calcite-spacing-xs);vertical-align:top;color:var(--calcite-color-status-warning)}:host{--response-toolbar-vert-width: 0;--response-toolbar-vert-height: 100%;--response-toolbar-horiz-width: 100%;--response-toolbar-horiz-height: 0}.esri-responsive-toolbar__ruler{opacity:0;pointer-events:none;position:absolute}.esri-responsive-toolbar__ruler--bar{visibility:hidden;height:0;display:block;position:absolute;top:0;left:0;right:0}.esri-responsive-toolbar__ruler--bar--vertical,.esri-responsive-toolbar__ruler--pad--vertical{width:var(--response-toolbar-vert-width);height:var(--response-toolbar-vert-height)}.esri-responsive-toolbar__ruler--pad--horizontal{width:var(--response-toolbar-horiz-width);height:var(--response-toolbar-horiz-height)}.esri-responsive-toolbar__bar>div{display:contents}.esri-responsive-toolbar__bar--horizontal{min-width:100%}.esri-responsive-toolbar__bar--vertical{min-height:100%}.esri-responsive-toolbar__pad{width:min-content;display:contents}.esri-responsive-toolbar__pad>div{display:contents}.esri-responsive-toolbar__ruler--pad--vertical{width:0;height:min(100vh - 120px,100cqh - 120px)}.esri-responsive-toolbar__ruler--pad--horizontal{width:min(100vw - 60px,100cqw - 60px);height:0}.esri-split-button--split-part--vertical--s{--calcite-size-sm: 16px;max-height:16px}.esri-split-button--split-part--vertical--m{--calcite-size-md: 24px;max-height:24px}.esri-split-button--split-part--vertical--l{--calcite-size-l: 40px;max-height:40px}.esri-split-button--split-part--horizontal--s,.esri-split-button--split-part--horizontal--m{max-width:16px}.esri-split-button--split-part--horizontal--l{max-width:24px}.esri-snapping-controls__toggle-block{min-width:100%;margin:0}.esri-snapping-controls__layer-list-block{border-bottom:none;min-width:225px}.esri-snapping-controls__layer-list-block[open]{margin-block:0}.esri-snapping-controls__layer-list{overflow:auto}.esri-snapping-controls__layer-list__filter{margin-bottom:10px}.esri-snapping-controls__layer-list__button{margin-bottom:6px}.esri-snapping-controls__layer-list__item calcite-accordion-item calcite-icon,.esri-snapping-controls__layer-list__item calcite-action calcite-icon{margin-inline-start:0}.esri-snapping-controls__layer-list__item calcite-icon{color:var(--calcite-color-brand);margin-inline-start:var(--calcite-list-item-spacing-indent)}.esri-snapping-controls{flex-flow:column wrap;display:flex}.esri-snapping-controls__container{flex-direction:column;flex:auto;display:flex}.esri-snapping-controls__container :only-child{border-block-end:none}.esri-snapping-controls__panel{width:320px}.esri-snapping-controls__item{border:1px solid #adadad4d;cursor:pointer;background-color:var(--calcite-color-foreground-2);border-color:var(--calcite-color-border-1);border-radius:2px;justify-content:space-between;margin:3px 0;padding:3px;transition:border-color .125s ease-in-out;display:flex;box-shadow:0 1px #adadad4d}.esri-snapping-controls__item-action-icon{flex:0 0 16px;width:16px;height:16px;margin-top:.1em;font-size:var(--calcite-font-size-md);display:inline-block}.esri-snapping-controls__action-toggle{opacity:1;cursor:pointer;border:1px solid var(--calcite-color-border-1);flex-flow:row-reverse;justify-content:space-between;align-items:flex-start;width:100%;margin:0;padding:6px 15px;font-size:var(--calcite-font-size-sm);transition:opacity .25s ease-in-out .25s,background-color .25s ease-in-out;display:flex}.esri-snapping-controls__action-toggle .esri-snapping-controls__item-action-title{margin-left:0}.esri-snapping-controls__action-toggle .esri-snapping-controls__item-action-icon{background-color:var(--calcite-color-foreground-1);border-radius:16px;flex:0 0 28px;width:16px;height:16px;padding:0;transition:background-color .125s ease-in-out;position:relative;overflow:hidden;box-shadow:0 0 0 1px #adadad}.esri-snapping-controls__action-toggle .esri-snapping-controls__item-action-icon:before{content:"";background-color:var(--calcite-color-foreground-2);border-radius:100%;width:12px;height:12px;margin:2px;transition:background-color .125s ease-in-out,left .125s ease-in-out;display:block;position:absolute;top:0;left:0;box-shadow:0 0 0 1px #242424}.esri-snapping-controls__action-toggle--on .esri-snapping-controls__item-action-icon{background-color:var(--calcite-color-foreground-1);box-shadow:0 0 0 1px #adadad}.esri-snapping-controls__action-toggle--on .esri-snapping-controls__item-action-icon:before{background-color:var(--calcite-color-foreground-3);left:12px}.esri-snapping-controls__nested-container{flex-direction:column;gap:6px;display:flex}.esri-snapping-controls__nested-container:not(:empty){padding-top:6px;padding-inline-start:1em}.esri-labeled-switch__label{--calcite-label-margin-bottom: 0}.esri-labeled-switch__label-content{text-wrap:balance;flex:1;align-items:center;gap:7px;display:flex}.esri-labeled-switch__label-content>div{flex-grow:1}.esri-labeled-switch__icon{margin-top:-1px}.esri-labeled-switch__icon_info{color:var(--calcite-color-status-info)}.esri-labeled-switch__icon_warning{color:var(--calcite-color-status-warning)}.esri-labeled-switch__tooltip{text-wrap:wrap}:host{display:flex;max-width:100%;justify-content:flex-end;pointer-events:none;--sketch-pad-flex-flow: wrap;--sketch-view-height-offset: 63px ;--sketch-view-margin-offset: 30px;--sketch-popover-header-offset: 49px}:host([scale="s"]){--sketch-view-height-offset: 47px ;--sketch-view-margin-offset: 30px;--sketch-popover-header-offset: 33px}:host([scale="l"]){--sketch-view-height-offset: 79px ;--sketch-view-margin-offset: 30px;--sketch-popover-header-offset: 65px}div:has(>.esri-sketch){display:contents}.esri-sketch{-webkit-user-select:none;user-select:none;pointer-events:none;display:flex}.esri-sketch-pad{gap:var(--arcgis-internal-sketch-gap, var(--calcite-spacing-sm));flex-flow:var(--sketch-pad-flex-flow);justify-content:var(--arcgis-internal-sketch-justify-content, flex-start)}.esri-sketch-pad:dir(rtl){flex-flow:row-reverse wrap}.esri-sketch-pad.esri-sketch--vertical{flex-flow:var(--sketch-pad-flex-flow, column wrap);justify-content:flex-start;--sketch-view-height-offset: 30px;--sketch-view-margin-offset: 15px}.esri-sketch-pad.esri-sketch--vertical:dir(rtl){flex-flow:var(--sketch-pad-flex-flow, column wrap-reverse)}.esri-sketch-pad.esri-sketch--vertical .esri-selection-toolbar__container{flex-direction:column}.esri-sketch>*{pointer-events:initial;display:flex}.esri-sketch-bar{flex-direction:column;gap:0;margin:0;flex-basis:100%}.esri-sketch-bar.esri-sketch--vertical{flex-flow:row}.esri-sketch__popover-wrapper{inline-size:max-content;min-inline-size:300px;max-height:calc(100cqh - (var(--sketch-view-height-offset, 90px)) - var(--sketch-view-margin-offset, 15px) - var(--sketch-popover-header-offset, 1000px));-webkit-user-select:none;user-select:none;max-inline-size:400px;overflow-y:auto}.esri-sketch__popover-wrapper .esri-sketch-tooltip-controls:not(:only-child) calcite-block{border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}.esri-sketch__selection-count-chip--horizontal{margin-block:var(--calcite-spacing-xxs);margin-inline:var(--calcite-spacing-xs);align-self:center}.esri-sketch__selection-count-chip--vertical{margin-block:calc(var(--calcite-spacing-md) * var(--sketch-chip-margin-scale-factor, 1));scale:var(--sketch-chip-rescale, 1);align-self:center;margin-inline:0}.esri-sketch__selection-count-chip--vertical--s{--sketch-chip-rescale: .8;--sketch-chip-margin-scale-factor: .5}.esri-sketch--vertical{max-height:min(100vh - 120px,100cqh - 120px)}.esri-expand__popover-content .esri-sketch{gap:0}.esri-sketch-tooltip-controls{flex-flow:column wrap;min-width:100%;display:flex}.esri-sketch-tooltip-controls__block{border-block-end:none;margin:0}.esri-sketch-tooltip-controls__block-content{flex-direction:column;gap:6px;display:flex}.esri-sketch-tooltip-controls__radio-button-label-wrapper{align-items:center;gap:2px;display:flex}.esri-sketch-tooltip-controls calcite-label:last-child{--calcite-label-margin-bottom: 0}`;
var b3 = I2(B);
var m9 = class extends LitElement {
  constructor() {
    super(), this._visualScale = "m", this.widget = b3(this), this.viewModel = this.widget.viewModel, this._defaultGraphicsLayer = null, this.view = this.widget.view, this.activeTool = this.widget.activeTool, this.autoDestroyDisabled = false, this.availableCreateTools = this.widget.availableCreateTools, this.createGraphic = this.widget.createGraphic, this.creationMode = this.widget.creationMode, this.defaultCreateOptions = this.widget.defaultCreateOptions, this.defaultGraphicsLayerDisabled = false, this.defaultUpdateOptions = this.widget.defaultUpdateOptions, this.hideCreateToolsCircle = this.widget.visibleElements.createTools.circle, this.hideCreateToolsMultipoint = this.widget.visibleElements.createTools.multipoint, this.hideCreateToolsPoint = this.widget.visibleElements.createTools.point, this.hideCreateToolsPolygon = this.widget.visibleElements.createTools.polygon, this.hideCreateToolsPolyline = this.widget.visibleElements.createTools.polyline, this.hideCreateToolsRectangle = this.widget.visibleElements.createTools.rectangle, this.hideDuplicateButton = this.widget.visibleElements.duplicateButton, this.hideDeleteButton = this.widget.visibleElements.deleteButton, this.hideSelectionCountLabel = this.widget.visibleElements.selectionCountLabel, this.hideLabelsToggle = this.widget.visibleElements.labelsToggle, this.hideSelectionToolsLassoSelection = this.widget.visibleElements.selectionTools["lasso-selection"], this.hideSelectionToolsRectangleSelection = this.widget.visibleElements.selectionTools["rectangle-selection"], this.hideSettingsMenu = this.widget.visibleElements.settingsMenu, this.hideSnappingControls = this.widget.visibleElements.snappingControls, this.hideSnappingControlsElementsEnabledToggle = this.widget.visibleElements.snappingControlsElements.enabledToggle, this.hideSnappingControlsElementsFeatureEnabledToggle = this.widget.visibleElements.snappingControlsElements.featureEnabledToggle, this.hideSnappingControlsElementsLayerList = this.widget.visibleElements.snappingControlsElements.layerList, this.hideSnappingControlsElementsSelfEnabledToggle = this.widget.visibleElements.snappingControlsElements.selfEnabledToggle, this.hideTooltipsToggle = this.widget.visibleElements.tooltipsToggle, this.hideUndoRedoMenu = this.widget.visibleElements.undoRedoMenu, this.icon = this.widget.icon, this.label = this.widget.label, this.labelOptions = this.widget.labelOptions, this.layer = this.widget.layer, this.layout = this.widget.layout, this.pointSymbol = this.viewModel.pointSymbol, this.polygonSymbol = this.viewModel.polygonSymbol, this.polylineSymbol = this.viewModel.polylineSymbol, this.showSnappingControlsElementsHeader = this.widget.visibleElements.snappingControlsElements.header, this.showCreateToolsFreehandPolygon = this.widget.visibleElements.createTools.freehandPolygon, this.showCreateToolsFreehandPolyline = this.widget.visibleElements.createTools.freehandPolyline, this.showCreateToolsText = this.widget.visibleElements.createTools.text, this.snappingOptions = this.widget.snappingOptions, this.state = this.widget.state, this.textSymbol = this.viewModel.textSymbol, this.toolbarKind = this.widget.toolbarKind, this.tooltipOptions = this.widget.tooltipOptions, this.useLegacyCreateTools = this.viewModel.useLegacyCreateTools, this.updateGraphics = this.widget.updateGraphics, this.arcgisCreate = reEmitEvent(() => this.widget, "create"), this.arcgisDelete = reEmitEvent(() => this.widget, "delete"), this.arcgisPropertyChange = usePropertyChange()("state"), this.arcgisReady = createEvent(), this.arcgisRedo = reEmitEvent(() => this.widget, "redo"), this.arcgisUndo = reEmitEvent(() => this.widget, "undo"), this.arcgisUpdate = reEmitEvent(() => this.widget, "update"), this.listen("arcgisReady", this._arcgisReadyHandler);
  }
  static {
    this.properties = { view: 0, activeTool: 35, autoDestroyDisabled: 5, availableCreateTools: 0, createGraphic: 32, creationMode: 1, defaultCreateOptions: 0, defaultGraphicsLayerDisabled: 5, defaultUpdateOptions: 0, hideCreateToolsCircle: 5, hideCreateToolsMultipoint: 5, hideCreateToolsPoint: 5, hideCreateToolsPolygon: 5, hideCreateToolsPolyline: 5, hideCreateToolsRectangle: 5, hideDuplicateButton: 5, hideDeleteButton: 5, hideSelectionCountLabel: 5, hideLabelsToggle: 5, hideSelectionToolsLassoSelection: 5, hideSelectionToolsRectangleSelection: 5, hideSettingsMenu: 5, hideSnappingControls: 5, hideSnappingControlsElementsEnabledToggle: 5, hideSnappingControlsElementsFeatureEnabledToggle: 5, hideSnappingControlsElementsLayerList: 5, hideSnappingControlsElementsSelfEnabledToggle: 5, hideTooltipsToggle: 5, hideUndoRedoMenu: 5, icon: 1, label: 1, labelOptions: 0, layer: 0, layout: 1, pointSymbol: 0, polygonSymbol: 0, polylineSymbol: 0, referenceElement: 1, scale: 1, visualScale: 1, showSnappingControlsElementsHeader: 5, showCreateToolsFreehandPolygon: 5, showCreateToolsFreehandPolyline: 5, showCreateToolsText: 5, snappingOptions: 0, state: 32, textSymbol: 0, toolbarKind: 1, tooltipOptions: 0, useLegacyCreateTools: 5, updateGraphics: 32 };
  }
  static {
    this.styles = h6;
  }
  get scale() {
    return this._visualScale;
  }
  set scale(e6) {
    this._visualScale = e6, this.widget.scale = e6;
  }
  get visualScale() {
    return this._visualScale;
  }
  set visualScale(e6) {
    this._visualScale = e6, this.widget.scale = e6;
  }
  async cancel() {
    this.widget?.cancel();
  }
  async complete() {
    this.widget?.complete();
  }
  async create(e6, i4) {
    await this.widget?.create(e6, i4);
  }
  async delete() {
    this.widget?.delete();
  }
  async destroy() {
    await this.manager.destroy();
  }
  async duplicate() {
    this.widget?.duplicate();
  }
  async redo() {
    this.widget?.redo();
  }
  async triggerUpdate(e6, i4) {
    this.widget?.update(e6, i4);
  }
  async undo() {
    this.widget?.undo();
  }
  _arcgisReadyHandler() {
    this.defaultGraphicsLayerDisabled || (this._defaultGraphicsLayer = new h3({ title: "Sketch Layer" }), this.widget.availableCreateTools = [
      "point",
      "polyline",
      "freehandPolyline",
      "polygon",
      "freehandPolygon",
      "rectangle",
      "circle"
    ], this.widget.layer = this._defaultGraphicsLayer, this.el.view?.map?.add(this.widget.layer), this.manager.onLifecycle(() => l3(() => this.el.view?.map, (e6, i4) => {
      const t5 = this._defaultGraphicsLayer;
      !t5 || this.widget.layer !== t5 || (i4?.allLayers.includes(t5) && i4.remove(t5), e6?.add(t5));
    })), this.manager.onDestroy(() => {
      this._defaultGraphicsLayer && this.el.view?.map?.allLayers.includes(this._defaultGraphicsLayer) && this.el.view?.map?.remove(this._defaultGraphicsLayer), this._defaultGraphicsLayer?.destroy(), this._defaultGraphicsLayer = null;
    }));
  }
};
l("arcgis-sketch", m9);

export {
  m9 as m
};
//# sourceMappingURL=chunk-EQZ2Y6FF.js.map
