import {
  e as e2
} from "./chunk-URJHWG37.js";
import {
  U as U3,
  V
} from "./chunk-M4TJISG2.js";
import {
  B,
  E,
  F as F2,
  G,
  U as U2,
  z
} from "./chunk-46RYNYCK.js";
import {
  g as g2
} from "./chunk-VWW4CN57.js";
import {
  A
} from "./chunk-ODBHVRWF.js";
import {
  t as t4
} from "./chunk-DPFYRE7L.js";
import {
  c as c6,
  g,
  m as m3,
  p as p2
} from "./chunk-OU7IBCXM.js";
import {
  t as t3
} from "./chunk-GSWONWCV.js";
import {
  d as d3
} from "./chunk-ORTBHKNC.js";
import {
  o as o2
} from "./chunk-QJZKY3VO.js";
import {
  h as h2
} from "./chunk-KI7SNQFW.js";
import {
  n as n2
} from "./chunk-MXBCSABZ.js";
import {
  F,
  x as x2,
  y
} from "./chunk-SGNC5H35.js";
import {
  O,
  c as c3
} from "./chunk-L5WYMRA5.js";
import {
  a as a2
} from "./chunk-YXWQV2QL.js";
import {
  L,
  S,
  p,
  v,
  x
} from "./chunk-YJ3MZFAR.js";
import {
  w as w2
} from "./chunk-LBXDB7YQ.js";
import {
  c as c2,
  m as m2
} from "./chunk-VBPD3MAX.js";
import {
  N,
  _ as _2,
  n,
  t as t2
} from "./chunk-KEY3YQEB.js";
import {
  U,
  f,
  h,
  l as l2,
  w
} from "./chunk-M44GXGOJ.js";
import {
  l
} from "./chunk-LQMHYEKG.js";
import {
  _,
  d as d2
} from "./chunk-ONXOVX4W.js";
import {
  S as S2
} from "./chunk-TOB5EAWJ.js";
import {
  J,
  K as K2,
  T2,
  fe
} from "./chunk-NR66QFNF.js";
import {
  O as O2
} from "./chunk-LANOLZOB.js";
import {
  P as P2,
  c as c4,
  d,
  r as r2,
  s as s2
} from "./chunk-DTNG3PQB.js";
import {
  c as c5,
  i
} from "./chunk-UXWT3ISO.js";
import {
  P as P3
} from "./chunk-253Z6EVN.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  K,
  P
} from "./chunk-HDFIZIZL.js";
import {
  T,
  e2 as e,
  m2 as m,
  o4 as o,
  s,
  t2 as t,
  u
} from "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/geometry/coordinateFormatter.js
function _4() {
  return r2();
}
function E2() {
  return P2();
}
function w3(n13, e5) {
  const r4 = k(e5), o5 = n13.replaceAll(/[\u00B0\u00BA]/g, "^").replaceAll("′", "'").replaceAll("″", '"'), i4 = [];
  return d.dmsToGeog(r4, 1, [o5], i4) ? new _(i4[0][0], i4[0][1], e5 || S2.WGS84) : null;
}
function g3(n13) {
  return n13 && _4() ? m2(n13) ?? w3(`0° 0' 0" N | ${n13}`)?.longitude ?? w3(`0 N | ${n13}`)?.longitude ?? null : null;
}
function m4(n13) {
  return n13 && _4() ? m2(n13) ?? w3(`${n13} | 0° 0' 0" E`)?.latitude ?? w3(`${n13} | 0 E`)?.latitude ?? null : null;
}
function k(e5) {
  if (e5 ??= S2.WGS84, e5.wkid) {
    const t7 = c4.geogcs(e5.wkid);
    if (!t7) throw new r("coordinate-formatter:invalid-spatial-reference", "wkid is not valid");
    return t7;
  }
  const t6 = e5.wkt2 ?? e5.wkt;
  if (t6) {
    const e6 = c4.fromString(s2.PE_TYPE_GEOGCS, t6);
    if (!e6) throw new r("coordinate-formatter:invalid-spatial-reference", "wkt is not valid");
    return e6;
  }
  throw new r("coordinate-formatter:invalid-spatial-reference", "wkid and wkt are missing");
}

// node_modules/@arcgis/core/views/interactive/tooltip/css.js
var e3 = "esri-tooltip";
var t5 = `${e3}-content`;
var n3 = `${e3}-content--input`;
var _5 = `${e3}-content__header`;
var a3 = `${e3}-content__header__spacer`;
var o3 = `${e3}-content__header__actions`;
var s3 = `${e3}-draw-header-actions`;
var c7 = `${e3}-table`;
var $ = `${e3}-help-message`;
var r3 = `${e3}-help-message__text`;
var h3 = `${e3}-help-message__icon`;

// node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipField.js
var d4 = `${e3}-field`;
var p3 = { base: d4, inputMode: `${d4}--input`, title: `${d4}__title`, value: `${d4}__value` };
var l3 = class extends O {
  constructor() {
    super(...arguments), this.hidden = false, this.mode = "feedback";
  }
  render() {
    return x("div", { class: this.classes({ [p3.base]: true, [p3.inputMode]: "input" === this.mode }) }, x("div", { class: p3.title, key: "title" }, this.title), x("div", { class: p3.value, key: "value" }, this.value));
  }
};
__decorate([a()], l3.prototype, "hidden", void 0), __decorate([a()], l3.prototype, "mode", void 0), __decorate([a()], l3.prototype, "title", void 0), __decorate([a()], l3.prototype, "value", void 0), l3 = __decorate([c("esri.views.interactive.tooltip.components.TooltipField")], l3);

// node_modules/@arcgis/core/views/interactive/tooltip/components/ValueByValue.js
var p4 = { base: `${e3}-value-by-value` };
var d5 = class extends O {
  constructor() {
    super(...arguments), this.divider = "×";
  }
  render() {
    return x("div", { class: p4.base }, x("span", null, this.left), x("span", null, this.divider), x("span", null, this.right));
  }
};
__decorate([a()], d5.prototype, "left", void 0), __decorate([a()], d5.prototype, "divider", void 0), __decorate([a()], d5.prototype, "right", void 0), d5 = __decorate([c("esri.views.interactive.tooltip.components.ValueByValue")], d5);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/parsingAndFormattingUtils.js
var v2 = 1;
var y2 = 6;
function D2(t6, n13) {
  return { angleRelative: x3, direction: j, directionRelative: R, directionRelativeBilateral: $2, latitudeDecimalDegrees: L2, longitudeDecimalDegrees: F3, area: (e5, r4) => G(t6, e5, r4 ?? n13.area), length: (e5, r4, i4) => U2(t6, e5, r4 ?? n13.length, i4), lengthRelative: (e5, r4) => z(t6, e5, r4 ?? n13.length), totalLength: (e5, r4) => U2(t6, e5, r4 ?? n13.length), verticalLength: (e5, r4) => B(t6, e5, r4 ?? n13.verticalLength), verticalLengthRelative: (e5, r4) => E(t6, e5, r4 ?? n13.verticalLength), percentage: T3, scalar: Z, scale: U4 };
}
function x3(t6) {
  return c2(t6, __spreadValues({ signDisplay: "exceptZero" }, b2(v2)));
}
function j(t6) {
  return F2(t6, t6.rotationType, v2);
}
function R(t6) {
  const n13 = U3(t6);
  return c2(n13, __spreadValues({ style: "unit", unitDisplay: "narrow", unit: "degree", signDisplay: n13 > 0 ? "never" : "exceptZero" }, b2(v2)));
}
function $2(t6) {
  return F2(t6, t6.rotationType, v2);
}
function F3(t6) {
  return q(t6, N2);
}
function L2(t6) {
  return q(t6, O3);
}
function w4(t6) {
  return z2(t6, N2);
}
function A3(t6) {
  return z2(t6, O3);
}
function q(t6, e5) {
  const r4 = false, i4 = "geographic";
  return F2(g(t6, "degrees"), i4, y2, e5, r4);
}
function z2(t6, e5) {
  const i4 = false, o5 = e5.normalize(g(t6, "degrees").value, void 0, i4);
  return Z(c6(o5), y2);
}
function T3(t6) {
  return c2(t6.value, { style: "percent" });
}
function U4(t6) {
  return c2(t6, { style: "percent", maximumFractionDigits: 0 });
}
function Z(t6, n13) {
  return c2(t6.value, b2(n13));
}
function b2(t6) {
  return { minimumFractionDigits: t6, maximumFractionDigits: t6 };
}
function B2({ createQuantity: t6, sanitize: n13 }) {
  return (e5, r4) => {
    if (null == e5) return null;
    n13 && (e5 = n13(e5));
    const i4 = m2(e5);
    return null == i4 ? null : t6(i4, r4);
  };
}
function C(t6) {
  return t6.replaceAll(/[*^~°º]/g, "");
}
var E3 = (t6) => {
  let n13 = `[-+]?[0-9${t6.thousands}]+`;
  return "" !== t6.decimal && (n13 += `${t6.decimal}[0-9]+`), new RegExp(`^(${n13}\\s*)${t6.separator}(\\s*${n13})$`, "i");
};
var I = " ";
var M2 = [];
for (const P7 of [",", "\\|", "\\s+"]) for (const t6 of ["\\.", ",", ""]) for (const n13 of ["", ",", "\\.", I, "\\s+"]) P7 !== t6 && P7 !== n13 && t6 !== n13 && M2.push({ separator: P7, decimal: t6, thousands: n13, pattern: E3({ decimal: t6, thousands: n13, separator: P7 }) });
function Q(t6) {
  for (const { decimal: n13, thousands: e5, pattern: i4 } of M2) {
    i4.lastIndex = 0;
    const o5 = t6.match(i4);
    if (!o5) continue;
    const u2 = m2(k2(o5[1], n13, e5)), l5 = m2(k2(o5[2], n13, e5));
    if (null != u2 && null != l5) return { x: c6(u2), y: c6(l5) };
  }
  return null;
}
function k2(t6, n13, e5) {
  let r4 = t6.replaceAll(/[\s+]/g, "");
  return "" !== e5 && (r4 = r4.replaceAll(e5, "")), "" !== n13 && (r4 = r4.replaceAll(n13, ".")), r4;
}
function G2(t6) {
  if (!t6 || null != m2(t6) || !_4()) return null;
  const n13 = w3(t6), e5 = K3(n13?.latitude), r4 = K3(n13?.longitude);
  return null != r4 && null != e5 ? { latitude: e5, longitude: r4 } : null;
}
function H(t6) {
  return K3(g3(t6));
}
function J2(t6) {
  return K3(m4(t6));
}
function K3(t6) {
  return null != t6 ? p2(t6, "degrees", "geographic") : null;
}
var N2 = new n2(-180, 180);
var O3 = new n2(-90, 90);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContent.js
var H2 = /* @__PURE__ */ Symbol("dragHandles");
var N3 = class extends O {
  constructor() {
    super(...arguments), this._focusAbortController = new AbortController(), this._transitionInfo = null, this._mode = "feedback", this._getFormatters = t4(D2), this._onHeaderPointerDown = (t6) => {
      const e5 = t6.target;
      if (!(e5 instanceof HTMLElement) || "calcite-button" === e5?.tagName?.toLowerCase()) return;
      this.removeHandles(H2), t6.preventDefault(), t6.stopPropagation();
      const i4 = true;
      i4 && e5.setPointerCapture(t6.pointerId), this.tooltip.onDragStart(t6.clientX, t6.clientY), this.addHandles([o(e5, "pointermove", ({ clientX: t7, clientY: e6 }) => {
        this.tooltip.onDrag(t7, e6);
      }), o(e5, ["pointerup", "pointercancel"], (o5) => {
        this.removeHandles(H2), i4 && e5.releasePointerCapture(t6.pointerId), this.tooltip.onDragEnd();
      }), o(e5, "touchstart", (t7) => t7.preventDefault())], H2);
    }, this._onDiscard = () => {
      this.destroyed || (this.tooltip.emit("discard"), this.info.clearInputValues(), this.exitInputMode());
    }, this._onCommit = (t6, e5) => {
      if (this.destroyed) return;
      if (this.tooltip.emit("commit", { type: e5 }), "commit-and-exit" === e5) return void this.exitInputMode();
      if ("commit-on-blur" === e5) return;
      const o5 = this._getFocusableElements(), i4 = o5.length, s12 = o5.indexOf(t6);
      if (-1 === s12) return void this.exitInputMode();
      const n13 = ((s12 + ("commit-and-next" === e5 ? 1 : -1)) % i4 + i4) % i4;
      O4(o5.at(n13));
    }, this._onKeyDown = (t6) => {
      switch (t6.code) {
        case d3.next:
          return this._onNextKey(t6);
        case d3.discard:
          return t6.stopPropagation(), this._onDiscard();
      }
    };
  }
  get mode() {
    return this._mode;
  }
  get _displayUnits() {
    const { displayUnits: t6 } = this.info.sketchOptions.values, e5 = e2(this.tooltip.view);
    return { length: t6.length ?? e5, verticalLength: t6.verticalLength ?? e5, area: t6.area ?? e5 };
  }
  get _inputUnitInfos() {
    const t6 = this._messagesUnits, e5 = (e6) => ({ unit: e6, abbreviation: g2(t6, e6, "abbr") }), { inputUnits: o5 } = this.info.sketchOptions.values, i4 = e2(this.tooltip.view), s12 = o5.length ?? i4, n13 = o5.verticalLength ?? i4, r4 = o5.area ?? i4;
    return { length: e5(J(s12)), verticalLength: e5(T2(n13)), area: e5(K2(r4)), angle: e5("degrees") };
  }
  get _formatters() {
    return this._getFormatters(this._messagesUnits, this._displayUnits);
  }
  get fieldContext() {
    return { formatters: this._formatters, inputUnitInfos: this._inputUnitInfos, messages: this._messagesTooltip, sketchOptions: this.info.sketchOptions, onCommit: this._onCommit, onDiscard: this._onDiscard };
  }
  render() {
    const { visibleElements: t6 } = this.info.sketchOptions.tooltips, e5 = this._renderedContent, o5 = this._renderedActions, i4 = this._renderedHelpMessage, s12 = e5.length > 0, n13 = s12 || !!i4, r4 = "input" === this.mode;
    return x("div", { class: p(t5, r4 && n3), onkeydown: this._onKeyDown, tabIndex: -1 }, r4 && n13 && t6.header ? x("div", { class: _5, "data-testid": "tooltip-header", key: "header", onpointerdown: this._onHeaderPointerDown }, x("calcite-button", { appearance: "transparent", "data-testid": "tooltip-back-button", iconFlipRtl: "both", iconStart: "chevron-left", key: "discard-button", kind: "neutral", onclick: this._onDiscard, scale: "s", tabIndex: -1 }), o5.length > 0 ? x(S, null, x("div", { class: a3, key: "spacer" }), x("div", { class: o3, key: "actions" }, o5)) : null) : null, s12 ? x("div", { class: c7, key: "content" }, ...e5) : null, i4);
  }
  destroy() {
    this._focusAbortController.abort(), this._transitionInfo?.transition.skipTransition();
  }
  _renderActions() {
    return null;
  }
  loadDependencies() {
    return c3({ button: () => import("./calcite-button-RAHKEBWD.js"), icon: () => import("./calcite-icon-U2373TSY.js"), input: () => import("./calcite-input-GQOA4DUH.js") });
  }
  async enterInputMode(t6, e5) {
    try {
      await this._transitionTo("input", e5), await this._focusField(t6);
    } catch (o5) {
      m(o5);
    }
  }
  async exitInputMode({ focusOnView: t6 = true } = {}) {
    try {
      const { container: e5, info: o5 } = this;
      o5.clearInputValues();
      const i4 = t6 ? e5?.closest(".esri-view")?.querySelector(".esri-view-surface") : null;
      await this._transitionTo("feedback"), i4 instanceof HTMLElement && i4.focus();
    } catch (e5) {
      m(e5);
    }
  }
  _onNextKey(t6) {
    const e5 = this._getFocusableElements(), o5 = e5.at(0), i4 = e5.at(-1);
    o5 && i4 && (t6.shiftKey ? document.activeElement === o5 && (t6.preventDefault(), t6.stopPropagation(), O4(i4)) : document.activeElement === i4 && (t6.preventDefault(), t6.stopPropagation(), O4(o5)));
  }
  get _renderedContent() {
    return S3(this._renderContent());
  }
  get _renderedActions() {
    return S3(this._renderActions());
  }
  get _renderedHelpMessage() {
    const { sketchOptions: t6, visibleElements: e5 } = this.info;
    if (!e5.helpMessage) return null;
    const o5 = t6.tooltips.helpMessage ?? this._defaultHelpMessage;
    if (!o5) return null;
    const i4 = t6.tooltips.helpMessageIcon ?? "information";
    return x("div", { class: $, key: "help-message" }, i4 ? x("calcite-icon", { class: h3, icon: i4, scale: "s" }) : null, x("div", { class: r3 }, o5));
  }
  get _defaultHelpMessage() {
    const { helpMessage: t6, viewType: e5 } = this.info;
    if (null == t6) return null;
    const o5 = "3d" === e5 ? "helpMessages3d" : "helpMessages2d";
    return this._messagesTooltip?.sketch?.[o5]?.[t6];
  }
  async _focusField(t6) {
    this._focusAbortController?.abort(), this._focusAbortController = new AbortController();
    const { signal: e5 } = this._focusAbortController;
    await this._waitForInputs(), s(e5);
    const o5 = this._getFocusableInputs(), i4 = t6 ? o5.find((e6) => e6.getAttribute("data-field-name") === t6) : o5.at(0);
    await O4(i4);
  }
  async _transitionTo(t6, o5) {
    if (this._mode === t6 && !this._transitionInfo) return;
    if (this._transitionInfo?.mode === t6) return this._transitionInfo.transition.finished;
    this._transitionInfo?.transition.skipTransition();
    const i4 = async () => {
      this.destroyed || (this._mode = t6, await P(), this.destroyed || (this.renderNow(), await P(), this.destroyed || o5?.()));
    };
    if (!this.domNode?.firstChild || !document.startViewTransition || o2()) return void await i4();
    this.autoRenderingEnabled = false;
    const s12 = this._transitionInfo = { transition: document.startViewTransition(async () => {
      this.destroyed || s12 !== this._transitionInfo || (this.autoRenderingEnabled = true, await i4());
    }), mode: t6 };
    try {
      await s12.transition.finished;
    } finally {
      s12 === this._transitionInfo && (this._transitionInfo = null);
    }
  }
  async _waitForInputs() {
    const t6 = () => Array.from(this.domNode?.querySelectorAll("calcite-input") ?? []);
    for (; 0 === t6().length; ) await T(P4);
    await K();
  }
  _getFocusableInputs() {
    return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])") ?? []);
  }
  _getFocusableElements() {
    const t6 = this.domNode?.querySelector(`.${s3}`);
    return [...Array.from(t6?.querySelectorAll(`.${o3} calcite-button:not([disabled])`) ?? []), ...this._getFocusableInputs()];
  }
};
async function O4(t6) {
  await t6?.setFocus();
}
function S3(t6) {
  return (Array.isArray(t6) ? t6 : [t6]).flat(10).filter((t7) => !!t7);
}
__decorate([v("esri/core/t9n/Units"), a()], N3.prototype, "_messagesUnits", void 0), __decorate([v("esri/views/interactive/tooltip/t9n/Tooltip"), a()], N3.prototype, "_messagesTooltip", void 0), __decorate([a()], N3.prototype, "info", void 0), __decorate([a()], N3.prototype, "tooltip", void 0), __decorate([a()], N3.prototype, "_mode", void 0), __decorate([a()], N3.prototype, "mode", null), __decorate([a()], N3.prototype, "_displayUnits", null), __decorate([a()], N3.prototype, "_inputUnitInfos", null), __decorate([a()], N3.prototype, "_formatters", null), __decorate([a()], N3.prototype, "fieldContext", null), __decorate([a()], N3.prototype, "_renderedContent", null), __decorate([a()], N3.prototype, "_renderedActions", null), __decorate([a()], N3.prototype, "_renderedHelpMessage", null), __decorate([a()], N3.prototype, "_defaultHelpMessage", null), N3 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContent")], N3);
var P4 = 20;

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawCircle.js
var n4 = class extends N3 {
  _renderContent() {
    const { area: t6, radius: e5, xSize: i4, ySize: n13, visibleElements: a6 } = this.info, p6 = this._messagesTooltip.sketch, u2 = this._formatters;
    return x(S, null, a6.radius && null != e5 ? x(l3, { title: p6.radius, value: u2.length(e5) }) : null, a6.size && null != i4 && null != n13 ? x(l3, { title: p6.size, value: x(d5, { left: u2.length(i4), right: u2.length(n13) }) }) : null, a6.area ? x(l3, { title: p6.area, value: u2.area(t6) }) : null);
  }
};
n4 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")], n4);

// node_modules/@arcgis/core/views/interactive/tooltip/constants.js
var o4 = "—";

// node_modules/@arcgis/core/views/interactive/tooltip/components/TooltipEditableField.js
var p5 = `${e3}-editable-field`;
var h4 = { base: p5, inputMode: `${p5}--input`, feedbackMode: `${p5}--feedback`, readOnly: `${p5}--read-only`, locked: `${p5}--locked`, title: `${p5}__title`, value: `${p5}__value`, valueContent: `${p5}__value__content`, valueContentReadOnly: `${p5}__value__content--read-only`, lockIcon: `${p5}__lock-icon`, input: `${p5}__input`, inputWrapper: `${p5}__input-wrapper`, inputMessage: `${p5}__input-message`, inputSuffix: `${p5}__input-suffix`, button: `${p5}__button` };
var _6 = { lock: "lock", unlock: "unlock" };
var m5 = class extends O {
  constructor() {
    super(...arguments), this._input = null, this._lock = null, this._onLockClick = () => {
      this.field.toggleLock(this.context);
    }, this._onLockAfterCreate = (t6) => {
      this._lock = t6;
    }, this._onLockAfterRemoved = () => {
      this._lock = null;
    }, this._onKeyDown = (t6) => {
      t6.key === d3.discard && "input" === this.mode && this._input && this.context.onDiscard(this._input);
    }, this._onInputKeyDown = (t6) => {
      const e5 = this._input;
      if (e5) switch (t6.key) {
        case d3.commit:
          return this.field.onCommit("commit-and-exit", e5, this.context);
        case d3.next: {
          t6.preventDefault(), t6.stopPropagation();
          const i4 = t6.shiftKey ? "commit-and-previous" : "commit-and-next";
          return this.field.onCommit(i4, e5, this.context);
        }
      }
    }, this._onInput = (t6) => {
      this.field.onInput(t6.currentTarget.value);
    }, this._onInputBlur = (t6) => {
      const e5 = this._input;
      e5 && t6.relatedTarget !== this._lock && this.field.onCommit("commit-on-blur", e5, this.context);
    }, this._selectText = () => {
      const t6 = () => {
        this._input !== document.activeElement && this._input !== document.activeElement?.shadowRoot?.activeElement || this._input?.selectText();
      };
      t6(), K().then(t6);
    }, this._onAfterCreate = (t6) => {
      this._input = t6, t6.addEventListener("paste", this._onPaste), t6.addEventListener("beforeinput", this._onBeforeInput);
    }, this._onAfterRemoved = (t6) => {
      t6.removeEventListener("paste", this._onPaste), t6.removeEventListener("beforeinput", this._onBeforeInput);
    }, this._onPaste = (t6) => {
      const e5 = t6.clipboardData?.getData("text");
      if (!e5) return;
      null != this.field.parse(e5, this.context) && (t6.stopPropagation(), this.field.onInput(e5));
    }, this._onBeforeInput = (t6) => {
      ("historyUndo" === t6.inputType || "historyRedo" === t6.inputType) && !this.field.dirty && t6.preventDefault();
    };
  }
  initialize() {
    this.addHandles(l2(() => this._rawDisplayValue, () => {
      const { committed: t6, inputValue: e5 } = this.field;
      t6 || e5 || this._input !== document.activeElement || this._selectText();
    }));
  }
  loadDependencies() {
    return c3({ button: () => import("./calcite-button-RAHKEBWD.js"), icon: () => import("./calcite-icon-U2373TSY.js"), input: () => import("./calcite-input-GQOA4DUH.js"), "input-message": () => import("./calcite-input-message-Y636JZHE.js") });
  }
  render() {
    const { field: t6, mode: e5 } = this, i4 = "input" === e5, { locked: n13, readOnly: o5 } = t6;
    return x("div", { class: this.classes({ [h4.base]: true, [h4.feedbackMode]: "feedback" === e5, [h4.inputMode]: "input" === e5, [h4.locked]: n13, [h4.readOnly]: o5 }) }, x("div", { class: h4.title, key: "title" }, this._title), x("div", { class: h4.value, key: "value", onkeydown: this._onKeyDown }, i4 ? this._renderValueInputMode() : this._renderValueFeedbackMode()));
  }
  get _formattedValue() {
    return this.field.getFormattedValue(this.context) || o4;
  }
  get _rawDisplayValue() {
    return this.field.getRawDisplayValue(this.context);
  }
  get _suffix() {
    return this.field.getSuffix(this.context);
  }
  get _title() {
    const { title: t6 } = this.field;
    return "string" == typeof t6 ? t6 : t6(this.context);
  }
  get _messages() {
    return this.context?.messages.sketch ?? {};
  }
  _renderValueFeedbackMode() {
    return x(S, null, x("div", { class: h4.valueContent, key: "value-feedback" }, this._formattedValue), this.field.locked && "input" !== this.mode ? x("calcite-icon", { class: h4.lockIcon, icon: _6.lock, key: "icon", scale: "s" }) : null);
  }
  _renderValueInputMode() {
    return this.field.readOnly ? this._renderValueReadOnly() : this._renderValueWritable();
  }
  _renderValueReadOnly() {
    return x("div", { class: this.classes(h4.valueContent, h4.valueContentReadOnly), key: "value-read-only" }, this._formattedValue);
  }
  _renderValueWritable() {
    const { field: t6 } = this, e5 = this._messages, { name: i4, invalid: n13 } = t6;
    return x(S, null, x("div", { class: h4.inputWrapper, key: "value-input" }, x("calcite-input", { afterCreate: this._onAfterCreate, afterRemoved: this._onAfterRemoved, class: h4.input, "data-field-name": i4, "data-testid": `tooltip-field-${i4}`, key: "input", onblur: this._onInputBlur, onfocus: this._selectText, onkeydown: this._onInputKeyDown, scale: "s", status: n13 ? "invalid" : "idle", type: "text", value: this._rawDisplayValue ?? o4, onCalciteInputInput: this._onInput }), n13 ? x("calcite-input-message", { class: h4.inputMessage, scale: "s", status: "invalid" }, e5.invalidValue) : null), x("div", { class: h4.inputSuffix, key: "suffix" }, this._suffix), this._renderedLockButton);
  }
  get _renderedLockButton() {
    const { lockDisabled: t6, locked: e5, lockable: i4, name: n13 } = this.field;
    if (!i4) return x("div", { key: "no-lock-button" });
    const o5 = this._messages, s12 = e5 ? o5.unlockConstraint : o5.lockConstraint;
    return x("calcite-button", { afterCreate: this._onLockAfterCreate, afterRemoved: this._onLockAfterRemoved, alignment: "center", appearance: "transparent", class: h4.button, "data-testid": `tooltip-field-${n13}-lock`, disabled: t6, iconStart: e5 ? _6.lock : _6.unlock, key: "lock-button", kind: "neutral", label: s12, onclick: this._onLockClick, scale: "s", tabIndex: -1, title: s12 });
  }
};
__decorate([a()], m5.prototype, "field", void 0), __decorate([a()], m5.prototype, "context", void 0), __decorate([a()], m5.prototype, "mode", void 0), __decorate([a()], m5.prototype, "_input", void 0), __decorate([a()], m5.prototype, "_lock", void 0), __decorate([a()], m5.prototype, "_formattedValue", null), __decorate([a()], m5.prototype, "_rawDisplayValue", null), __decorate([a()], m5.prototype, "_suffix", null), __decorate([a()], m5.prototype, "_title", null), __decorate([a()], m5.prototype, "_messages", null), __decorate([a()], m5.prototype, "_renderedLockButton", null), m5 = __decorate([c("esri.views.interactive.tooltip.components.TooltipEditableField")], m5);

// node_modules/@arcgis/core/views/interactive/tooltip/content/Fields.js
function i2(i4) {
  const l5 = i4.fields.filter((t6) => true === t6?.visible);
  return 0 === l5.length ? null : x(S, null, l5.map((o5) => x(m5, { context: i4.context, field: o5, key: o5.id, mode: i4.mode })));
}

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawMesh.js
var s4 = class extends N3 {
  _renderContent() {
    const { fieldContext: o5, info: e5, mode: i4 } = this, { visibleElements: s12 } = e5;
    return x(i2, { context: o5, fields: [s12.coordinates ? e5.effectiveX : void 0, s12.coordinates ? e5.effectiveY : void 0, s12.elevation ? e5.elevation : void 0, s12.orientation ? e5.orientation : void 0, s12.scale ? e5.scale : void 0], mode: i4 });
  }
};
s4 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")], s4);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPoint.js
var s5 = class extends N3 {
  _renderContent() {
    const { fieldContext: o5, info: t6, mode: i4 } = this, { elevation: s12, visibleElements: n13 } = t6;
    return x(i2, { context: o5, fields: [n13.coordinates ? t6.effectiveX : void 0, n13.coordinates ? t6.effectiveY : void 0, n13.elevation ? s12 : void 0], mode: i4 });
  }
};
s5 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")], s5);

// node_modules/@arcgis/core/views/interactive/tooltip/components/directionModeIcons.js
var e4 = { absolute: "absolute-direction", relative: "relative-direction" };

// node_modules/@arcgis/core/views/interactive/tooltip/components/DrawHeaderActions.js
var l4 = class extends O {
  constructor(e5) {
    super(e5), this.visibleElements = {};
  }
  render() {
    return x("div", { class: s3 }, this._isElementVisible("direction") ? x(a4, { messages: this.messages, sketchOptions: this.sketchOptions, topLayerDisabled: this.topLayerDisabled }) : null);
  }
  loadDependencies() {
    return c3({ button: () => import("./calcite-button-RAHKEBWD.js"), dropdown: () => import("./calcite-dropdown-QZNOFLO5.js"), "dropdown-item": () => import("./calcite-dropdown-item-3JAMLH6F.js"), "dropdown-group": () => import("./calcite-dropdown-group-7IQ7IRAV.js") });
  }
  _isElementVisible(e5) {
    return this.visibleElements?.[e5] ?? this.sketchOptions.tooltips.visibleElements[e5];
  }
};
function a4(e5) {
  const { directionMode: t6 } = e5.sketchOptions.values, o5 = e5.messages?.sketch, i4 = o5?.directionModeSelect?.title, r4 = "absolute", n13 = "relative";
  return x("calcite-dropdown", { key: "direction-mode", placement: "bottom-end", scale: "s", topLayerDisabled: e5.topLayerDisabled, onCalciteDropdownSelect: (t7) => {
    const o6 = t7.currentTarget.selectedItems?.[0]?.getAttribute("data-mode");
    e5.sketchOptions.values.directionMode = o6 ?? "absolute";
  } }, x("calcite-button", { alignment: "end", appearance: "transparent", iconStart: e4[t6], kind: "neutral", label: i4, scale: "s", slot: "trigger", title: i4 }), x("calcite-dropdown-group", { selectionMode: "single" }, x("calcite-dropdown-item", { "data-mode": n13, "data-testid": "tooltip-direction-mode-relative", iconStart: e4.relative, key: "relative", selected: t6 === n13 }, o5?.directionModeSelect?.relative), x("calcite-dropdown-item", { "data-mode": r4, "data-testid": "tooltip-direction-mode-absolute", iconStart: e4.absolute, key: "absolute", selected: t6 === r4 }, o5?.directionModeSelect?.absolute)));
}
__decorate([v("esri/views/interactive/tooltip/t9n/Tooltip"), a()], l4.prototype, "messages", void 0), __decorate([a()], l4.prototype, "sketchOptions", void 0), __decorate([a()], l4.prototype, "visibleElements", void 0), l4 = __decorate([c("esri.views.interactive.tooltip.components.DrawHeaderActions")], l4);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolygon.js
var s6 = class extends N3 {
  _renderContent() {
    const { fieldContext: e5, info: o5, mode: t6 } = this, { xyMode: n13, visibleElements: s12 } = o5;
    return x(i2, { context: e5, fields: [..."direction-distance" === n13 ? [s12.direction ? o5.direction : void 0, s12.distance ? o5.distance : void 0] : [s12.coordinates ? o5.effectiveX : void 0, s12.coordinates ? o5.effectiveY : void 0], s12.elevation ? o5.elevation : void 0, s12.area ? o5.area : void 0], mode: t6 });
  }
  _renderActions() {
    const { xyMode: e5, sketchOptions: o5 } = this.info;
    return x(l4, { sketchOptions: o5, visibleElements: { direction: "direction-distance" === e5 } });
  }
};
s6 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")], s6);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawPolyline.js
var s7 = class extends N3 {
  _renderContent() {
    const { fieldContext: t6, info: e5, mode: o5 } = this, { xyMode: n13, visibleElements: s12 } = e5;
    return x(i2, { context: t6, fields: [..."direction-distance" === n13 ? [s12.direction ? e5.direction : void 0, s12.distance ? e5.distance : void 0] : [s12.coordinates ? e5.effectiveX : void 0, s12.coordinates ? e5.effectiveY : void 0], s12.elevation ? e5.elevation : void 0, s12.totalLength ? e5.totalLength : void 0], mode: o5 });
  }
  _renderActions() {
    const { xyMode: t6, sketchOptions: e5 } = this.info;
    return x(l4, { sketchOptions: e5, visibleElements: { direction: "direction-distance" === t6 } });
  }
};
s7 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")], s7);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDrawRectangle.js
var n5 = class extends N3 {
  _renderContent() {
    const { area: t6, xSize: e5, ySize: i4, visibleElements: n13 } = this.info, a6 = this._messagesTooltip.sketch, p6 = this._formatters;
    return x(S, null, n13.size && null != e5 && null != i4 ? x(l3, { title: a6.size, value: x(d5, { left: p6.length(e5), right: p6.length(i4) }) }) : null, n13.area ? x(l3, { title: a6.area, value: p6.area(t6) }) : null);
  }
};
n5 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")], n5);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentDynamic.js
var c8 = class extends N3 {
  initialize() {
    this.addHandles(f(() => this.info && this._messagesUnits && this._messagesTooltip && this.fieldContext, () => this.info.renderContext = this.fieldContext), { once: true });
  }
  destroy() {
    this.info && (this.info.renderContext = null);
  }
  _renderContent() {
    const { fieldContext: e5, info: t6, mode: i4 } = this, o5 = t6.fieldsGroupedForDisplay;
    return o5.length ? x(S, null, o5.map((t7) => {
      if ("left" in t7 && (t7.left.readOnly && t7.right.readOnly || "feedback" === i4)) {
        const i5 = "string" == typeof t7.left.title ? t7.left.title : t7.left.title(e5);
        return x(l3, { title: i5, value: x(d5, { left: t7.left.getFormattedValue(e5) ?? o4, right: t7.right.getFormattedValue(e5) ?? o4 }) });
      }
      return "left" in t7 ? x(S, null, x(m5, { context: e5, field: t7.left, key: t7.left.id, mode: i4 }), x(m5, { context: e5, field: t7.right, key: t7.right.id, mode: i4 })) : x(m5, { context: e5, field: t7, key: t7.id, mode: i4 });
    })) : null;
  }
  get _defaultHelpMessage() {
    const { helpMessageExtended: e5, viewType: t6 } = this.info;
    if (null == e5) return null;
    const i4 = "3d" === t6 ? "helpMessages3d" : "helpMessages2d";
    return this._messagesEditor?.[i4]?.[e5];
  }
  _renderActions() {
    const { xyMode: e5, sketchOptions: t6 } = this.info, i4 = this.info.allFields.some((e6) => "direction" === e6.name);
    return x(l4, { sketchOptions: t6, visibleElements: { direction: "direction-distance" === e5 && i4 } });
  }
};
__decorate([v("esri/widgets/Editor/t9n/Editor"), a()], c8.prototype, "_messagesEditor", void 0), __decorate([a()], c8.prototype, "_defaultHelpMessage", null), c8 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentDynamic")], c8);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentElevation.js
var s8 = class extends N3 {
  _renderContent() {
    const { fieldContext: t6, info: o5, mode: i4 } = this, { visibleElements: s12 } = o5;
    return x(i2, { context: t6, fields: [s12.elevation ? o5.elevation : void 0], mode: i4 });
  }
};
s8 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentElevation")], s8);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentRotate.js
var n6 = class extends N3 {
  _renderContent() {
    const { angle: t6, visibleElements: o5 } = this.info, i4 = this._messagesTooltip.sketch;
    return x(S, null, o5.rotation ? x(l3, { title: i4.rotation, value: this._formatters.angleRelative(t6) }) : null);
  }
};
n6 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")], n6);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentExtentScale.js
var n7 = class extends N3 {
  _renderContent() {
    const t6 = this.info, { visibleElements: e5 } = t6, l5 = this._messagesTooltip.sketch, n13 = this._formatters;
    return x(S, null, e5.size ? x(l3, { title: l5.size, value: x(d5, { left: n13.length(t6.xSize), right: n13.length(t6.ySize) }) }) : null, e5.scale ? x(l3, { title: l5.scale, value: x(d5, { left: n13.scale(t6.xScale), right: n13.scale(t6.yScale) }) }) : null);
  }
};
n7 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentExtentScale")], n7);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentMovePoint.js
var s9 = class extends N3 {
  _renderContent() {
    const { fieldContext: o5, info: e5, mode: i4 } = this, { visibleElements: s12 } = e5;
    return x(i2, { context: o5, fields: [s12.coordinates ? e5.effectiveX : void 0, s12.coordinates ? e5.effectiveY : void 0, s12.elevation ? e5.elevation : void 0], mode: i4 });
  }
};
s9 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentMovePoint")], s9);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentReshapeEdgeOffset.js
var s10 = class extends N3 {
  _renderContent() {
    const { fieldContext: t6, info: e5, mode: i4 } = this, { visibleElements: s12 } = e5;
    return x(i2, { context: t6, fields: [s12.distance ? e5.distance : void 0, s12.area ? e5.area : void 0, s12.totalLength ? e5.totalLength : void 0], mode: i4 });
  }
};
s10 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")], s10);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentSelectedVertex.js
var n8 = class extends N3 {
  _renderContent() {
    const { fieldContext: e5, info: t6, mode: i4 } = this, { visibleElements: n13 } = t6;
    return x(i2, { context: e5, fields: [n13.coordinates ? t6.effectiveX : void 0, n13.coordinates ? t6.effectiveY : void 0, n13.elevation ? t6.elevation : void 0, n13.area && "polygon" === t6.geometryType ? t6.area : null, n13.totalLength && "polyline" === t6.geometryType ? t6.totalLength : null], mode: i4 });
  }
};
n8 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentSelectedVertex")], n8);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformMesh.js
var s11 = class extends N3 {
  _renderContent() {
    const { fieldContext: o5, info: e5, mode: i4 } = this, { visibleElements: s12 } = e5;
    return x(i2, { context: o5, fields: [s12.coordinates ? e5.effectiveX : void 0, s12.coordinates ? e5.effectiveY : void 0, s12.elevation ? e5.elevation : void 0, s12.orientation ? e5.orientation : void 0, s12.scale ? e5.scale : void 0], mode: i4 });
  }
};
s11 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentTransformMesh")], s11);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTransformPoint.js
var n9 = class extends N3 {
  _renderContent() {
    const { fieldContext: o5, info: t6, mode: i4 } = this, { visibleElements: n13 } = t6;
    return x(i2, { context: o5, fields: [n13.coordinates ? t6.effectiveX : void 0, n13.coordinates ? t6.effectiveY : void 0, n13.elevation ? t6.elevation : void 0, n13.orientation ? t6.orientation : void 0, n13.size ? t6.size : void 0], mode: i4 });
  }
};
n9 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentTransformPoint")], n9);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslate.js
var n10 = class extends N3 {
  _renderContent() {
    const { info: t6 } = this, { visibleElements: e5 } = t6, s12 = this._messagesTooltip.sketch, n13 = this._formatters;
    return x(S, null, e5.distance ? x(l3, { title: s12.distance, value: n13.length(t6.distance) }) : null);
  }
};
n10 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentTranslate")], n10);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateVertex.js
var a5 = class extends N3 {
  _renderContent() {
    const { distance: t6, elevation: e5, area: o5, totalLength: a6, visibleElements: r4 } = this.info, s12 = this._messagesTooltip.sketch, u2 = this._formatters;
    return x(S, null, r4.distance ? x(l3, { title: s12.distance, value: u2.length(t6) }) : null, r4.elevation && null != e5?.actual ? x(l3, { title: s12.elevation, value: u2.verticalLength(e5.actual) }) : null, r4.area && null != o5 ? x(l3, { title: s12.area, value: u2.area(o5) }) : null, r4.totalLength && null != a6 ? x(l3, { title: s12.totalLength, value: u2.length(a6) }) : null);
  }
};
a5 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")], a5);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateXY.js
var n11 = class extends N3 {
  _renderContent() {
    const { info: t6 } = this, { visibleElements: e5 } = t6, s12 = this._messagesTooltip.sketch, n13 = this._formatters;
    return x(S, null, e5.distance ? x(l3, { title: s12.distance, value: n13.length(t6.distance) }) : null);
  }
};
n11 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentTranslateXY")], n11);

// node_modules/@arcgis/core/views/interactive/tooltip/content/TooltipContentTranslateZ.js
var n12 = class extends N3 {
  _renderContent() {
    const { info: t6 } = this, { visibleElements: e5 } = t6, s12 = this._messagesTooltip.sketch;
    return x(S, null, e5.distance ? x(l3, { title: s12.distance, value: this._formatters.verticalLengthRelative(t6.distance) }) : null);
  }
};
n12 = __decorate([c("esri.views.interactive.tooltip.content.TooltipContentTranslateZ")], n12);

// node_modules/@arcgis/core/views/interactive/tooltip/content/tooltipContentFactory.js
function x4(x6, y3) {
  if (null == y3) return null;
  const h5 = document.createElement("div");
  switch (y3.type) {
    case "dynamic":
      return new c8({ tooltip: x6, info: y3, container: h5 });
    case "draw-point":
    case "draw-multipoint":
      return new s5({ tooltip: x6, info: y3, container: h5 });
    case "draw-polygon":
      return new s6({ tooltip: x6, info: y3, container: h5 });
    case "draw-polyline":
      return new s7({ tooltip: x6, info: y3, container: h5 });
    case "draw-mesh":
      return new s4({ tooltip: x6, info: y3, container: h5 });
    case "draw-rectangle":
      return new n5({ tooltip: x6, info: y3, container: h5 });
    case "draw-circle":
      return new n4({ tooltip: x6, info: y3, container: h5 });
    case "elevation":
      return new s8({ tooltip: x6, info: y3, container: h5 });
    case "extent-rotate":
      return new n6({ tooltip: x6, info: y3, container: h5 });
    case "extent-scale":
      return new n7({ tooltip: x6, info: y3, container: h5 });
    case "move-point":
      return new s9({ tooltip: x6, info: y3, container: h5 });
    case "selected-vertex":
      return new n8({ tooltip: x6, info: y3, container: h5 });
    case "transform-point":
      return new n9({ tooltip: x6, info: y3, container: h5 });
    case "transform-mesh":
      return new s11({ tooltip: x6, info: y3, container: h5 });
    case "translate":
      return new n10({ tooltip: x6, info: y3, container: h5 });
    case "translate-vertex":
      return new a5({ tooltip: x6, info: y3, container: h5 });
    case "translate-z":
      return new n12({ tooltip: x6, info: y3, container: h5 });
    case "translate-xy":
      return new n11({ tooltip: x6, info: y3, container: h5 });
    case "reshape-edge-offset":
      return new s10({ tooltip: x6, info: y3, container: h5 });
  }
}

// node_modules/@arcgis/core/views/interactive/Tooltip.js
var v3 = { base: `${e3}`, ltr: `${e3}--ltr`, rtl: `${e3}--rtl`, debug: `${e3}--debug` };
var _7 = 20;
var P5 = 16;
var C2 = "bottom-end";
var b3 = class extends l {
  constructor(t6) {
    super(t6), this.info = null, this.options = null, this.position = null, this.inputModePosition = null, this.content = null, this._focused = false, this.hidden = false, this.outerContainer = document.createElement("div"), this.debug = false, this._updatingHandles = new h2(), this._lastPosition = null, this._rtl = false, this._prevXY = [0, 0];
  }
  initialize() {
    const { outerContainer: t6 } = this;
    this.addHandles([l2(() => this.view.overlay?.surface, (e5) => {
      t6.remove(), e5?.appendChild(t6), this._rtl = L(e5);
    }, w), l2(() => this.info, (e5, o5) => {
      if (null != this.content && null != e5 && null != o5 && e5.type === o5.type) this.content.info = e5;
      else {
        u(this.content);
        const o6 = x4(this, e5);
        o6 ? (this.content = o6, o6.container && t6.appendChild(o6.container), this.exitInputMode()) : this.content = null;
      }
    }, w), l2(() => ({ container: this.outerContainer, style: this._outerContainerStyle }), ({ container: t7, style: e5 }) => {
      Object.assign(t7.style, e5);
    }, h), l2(() => ({ outerContainer: this.outerContainer, placement: this.effectivePlacement, effectiveOffset: this._effectiveOffset, rtl: this._rtl, debug: this.debug }), ({ outerContainer: t7, placement: e5, effectiveOffset: o5, rtl: n13, debug: i4 }) => {
      const { classList: s12 } = t7;
      s12.add(v3.base), s12.toggle(v3.rtl, n13), s12.toggle(v3.ltr, !n13), s12.toggle(v3.debug, i4), this.outerContainer.style.setProperty("--offset", `${o5}px`), a2(t7), w5(t7, e5);
    }, h), f(() => "feedback" === this.mode, () => {
      this.inputModePosition = null, this._clearOverride("effectivePlacement");
    }, U), o(this.outerContainer, "paste", (t7) => {
      this.emit("paste", t7);
    }), o(this.outerContainer, ["focusin", "focusout"], () => {
      this._focused = this.content?.container?.contains(document.activeElement) ?? false;
    })]);
  }
  destroy() {
    this.info = null, this.content = u(this.content), this.outerContainer.remove(), this._updatingHandles.destroy();
  }
  get isInInputMode() {
    return !!this.inputModePosition;
  }
  get mode() {
    return this.content?.mode ?? "feedback";
  }
  get focused() {
    return this._focused;
  }
  get visible() {
    return "none" !== this._outerContainerStyle.display;
  }
  get contentContainer() {
    return this.content?.container;
  }
  get effectivePlacement() {
    const t6 = this.options?.placement;
    return "auto" === t6 ? "bottom-end" : t6 ?? C2;
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  get _screenPoint() {
    const { inputManager: t6 } = this.view;
    return t6?.multiTouchActive ? null : t6?.latestPointerInfo?.location;
  }
  get _effectiveOffset() {
    return this.options?.offset ?? _7;
  }
  get _outerContainerStyle() {
    const t6 = this.inputModePosition ?? this.position ?? this._screenPoint;
    if (this._lastPosition = c5(t6), null != t6 && null != this.content && (!this.hidden || this.inputModePosition)) {
      return { display: "block", transform: `translate(${Math.round(t6.x)}px, ${Math.round(t6.y)}px)` };
    }
    return { display: "none", transform: "none" };
  }
  clear() {
    this.info = null;
  }
  async enterInputMode(t6) {
    const e5 = this.position ?? this._lastPosition ?? this._screenPoint, o5 = this.inputModePosition = c5(e5), { effectivePlacement: n13 } = this;
    this._override("effectivePlacement", n13);
    const i4 = () => {
      o5 && (this.inputModePosition = M3(this.contentContainer, o5, this._effectiveOffset, this.view), Object.assign(this.outerContainer.style, this._outerContainerStyle));
    };
    await this._updatingHandles.addPromise(this.content?.enterInputMode(t6, i4));
  }
  async exitInputMode(t6) {
    this.inputModePosition = null, await this._updatingHandles.addPromise(this.content?.exitInputMode(t6));
  }
  onDragStart(t6, e5) {
    this._prevXY = [t6, e5];
  }
  onDrag(t6, e5) {
    const o5 = t6 - this._prevXY[0], n13 = e5 - this._prevXY[1];
    this._prevXY = [t6, e5];
    const { inputModePosition: i4 } = this;
    if (i4) {
      const { view: s12 } = this, r4 = t6 - s12.position[0], l5 = e5 - s12.position[1];
      if (r4 < 0 || r4 > s12.width || l5 < 0 || l5 > s12.height - P5) return;
      this.inputModePosition = i(i4.x + o5, i4.y + n13);
    }
  }
  onDragEnd() {
    this._prevXY = [0, 0];
  }
};
function M3(t6, e5, o5, n13) {
  if (!t6 || !n13.container) return e5;
  const i4 = t6.getBoundingClientRect(), { left: s12, top: r4 } = n13.container.getBoundingClientRect();
  let { x: l5, y: p6 } = e5;
  const a6 = i4.left - s12 - o5;
  a6 < 0 && (l5 -= a6);
  const u2 = i4.right - s12 + o5 - n13.width;
  u2 > 0 && (l5 -= u2);
  const d6 = i4.top - r4 - o5;
  d6 < 0 && (p6 -= d6);
  const h5 = i4.bottom - r4 + o5 - n13.height;
  return h5 > 0 && (p6 -= h5), i(l5, p6);
}
__decorate([a({ nonNullable: true })], b3.prototype, "view", void 0), __decorate([a()], b3.prototype, "info", void 0), __decorate([a()], b3.prototype, "options", void 0), __decorate([a()], b3.prototype, "position", void 0), __decorate([a()], b3.prototype, "inputModePosition", void 0), __decorate([a()], b3.prototype, "isInInputMode", null), __decorate([a()], b3.prototype, "content", void 0), __decorate([a({ readOnly: true })], b3.prototype, "mode", null), __decorate([a()], b3.prototype, "_focused", void 0), __decorate([a({ readOnly: true })], b3.prototype, "focused", null), __decorate([a()], b3.prototype, "hidden", void 0), __decorate([a({ readOnly: true })], b3.prototype, "outerContainer", void 0), __decorate([a({ readOnly: true })], b3.prototype, "contentContainer", null), __decorate([a({ readOnly: true })], b3.prototype, "effectivePlacement", null), __decorate([a()], b3.prototype, "debug", void 0), __decorate([a()], b3.prototype, "updating", null), __decorate([a()], b3.prototype, "_lastPosition", void 0), __decorate([a()], b3.prototype, "_screenPoint", null), __decorate([a()], b3.prototype, "_rtl", void 0), __decorate([a()], b3.prototype, "_effectiveOffset", null), __decorate([a()], b3.prototype, "_outerContainerStyle", null), b3 = __decorate([c("esri.views.interactive.Tooltip")], b3);
var O5 = ["top", "bottom", "leading", "trailing"].flatMap((t6) => [j2(`${t6}-start`), j2(t6), j2(`${t6}-end`)]);
function j2(t6) {
  return `${v3.base}--${t6}`;
}
function w5({ classList: t6 }, e5) {
  O5.forEach((e6) => t6.remove(e6)), t6.add(j2(e5));
}
var x5 = b3;

// node_modules/@arcgis/core/views/interactive/tooltip/tooltipCommonUtils.js
function V2(t6) {
  const o5 = new x5(t6());
  return o5.addHandles(l2(() => t6(), ({ view: t7, options: e5, info: n13 }) => {
    o5.view = t7, void 0 !== e5 && (o5.options = e5), void 0 !== n13 && (o5.info = n13);
  })), o5;
}
function k3(t6, o5) {
  const e5 = t3(o5.vertexSpace), { scale: n13, orientation: l5 } = t6, { transform: a6 } = o5, s12 = T4(a6);
  e5 && null != s12 ? (l5.actual = p2(s12, "degrees", "arithmetic"), l5.visible = true) : (l5.actual = null, l5.visible = false), e5 ? (n13.actual = c6(H3(a6)), n13.visible = true) : (n13.actual = null, n13.visible = false);
}
function z3(t6, o5, e5) {
  if (!o5 || !t3(o5.vertexSpace)) return;
  const n13 = o5.transform ??= new A();
  D3(t6, n13, e5), P6(t6, n13, e5);
}
function D3(t6, o5, e5) {
  const r4 = V(t6.orientation.actual), i4 = q2(o5.rotationAxis);
  if (null == r4 || null == i4) return;
  const l5 = r4 - 90, a6 = o5.rotationAngle, s12 = l5 * i4, u2 = s12 - a6;
  P3(a6, s12) || (e5?.onRotateStart(0), o5.rotationAngle = s12, e5?.onRotate(u2), e5?.onRotateStop(u2));
}
function P6(t6, o5, e5) {
  const n13 = t6.scale.actual?.value, r4 = H3(o5);
  if (null == n13 || n13 === r4) return;
  const { scale: i4 } = o5;
  let l5;
  if (0 === r4) l5 = t2(_2);
  else {
    const t7 = n13 / r4;
    l5 = x2(n(), i4, t7);
  }
  e5?.onScaleStart(i4[0], i4[1], i4[2]), o5.scale = l5, e5?.onScale(l5[0], l5[1], l5[2]), e5?.onScaleStop(l5[0], l5[1], l5[2]);
}
function F4(t6, o5) {
  const { x: e5, y: r4, z: i4 } = o5, { x: l5, y: a6, z: s12 } = E4(t6, o5.spatialReference);
  return { dx: null == l5 || P3(l5, e5) ? 0 : l5 - e5, dy: null == a6 || P3(a6, r4) ? 0 : a6 - r4, dz: null == s12 || null == i4 || P3(s12, i4) ? 0 : s12 - i4 };
}
function E4(t6, o5) {
  let e5, n13;
  t6.geographic ? (e5 = U3(t6.longitude.actual), n13 = U3(t6.latitude.actual), O2(o5) && (null != e5 && null != n13 ? [e5, n13] = d2(e5, n13, I2) : null != e5 ? e5 = d2(e5, 0, I2)[0] : null != n13 && (n13 = d2(0, n13, I2)[1]))) : (e5 = t6.x.actual?.value, n13 = t6.y.actual?.value);
  const r4 = t6.elevation.actual, i4 = fe(o5);
  return { x: e5, y: n13, z: null != i4 && null != r4 ? m3(r4, i4) : void 0 };
}
var I2 = [0, 0];
function T4(t6) {
  const o5 = 90;
  if (!t6) return o5;
  const e5 = q2(t6.rotationAxis) ?? 1;
  return null != e5 ? o5 + e5 * t6.rotationAngle : null;
}
function q2(t6) {
  return F(t6, N) ? 1 : F(t6, B3) ? -1 : null;
}
var B3 = y(n(), N);
function H3(t6) {
  return t6 ? Math.max(...t6.scale) : 1;
}
function O6(t6, o5) {
  return !("key-down" !== t6.type || t6.key !== d3.enterInputMode || !o5 || !C3(o5.info)) && (o5.enterInputMode(), t6.preventDefault(), t6.stopPropagation(), true);
}
function C3(t6) {
  const o5 = t6?.sketchOptions;
  if (!o5) return false;
  const { inputEnabled: e5, visibleElements: n13 } = o5.tooltips;
  return e5 && true === t6.editableFields.some(({ name: t7 }) => "x" === t7 || "y" === t7 ? n13.coordinates : !t7 || n13[t7]);
}
function G3(n13, r4) {
  let i4 = null;
  return t([n13.on("paste", (o5) => {
    i4?.abort(), i4 = w2(async () => {
      _4() || await E2(), J3(o5, n13.info, r4);
    });
  }), w2(() => E2()), e(() => i4?.abort())]);
}
function J3(t6, o5, e5) {
  if (!o5 || !("geographic" in o5)) return;
  const n13 = t6.clipboardData?.getData("text");
  if (!n13) return;
  const r4 = (o6) => {
    t6.stopPropagation(), t6.preventDefault(), e5?.onBeforePaste(), o6(), e5?.onAfterPaste();
  };
  if (o5.geographic) {
    const t7 = G2(n13);
    t7 && r4(() => {
      o5.longitude.applyValue(t7.longitude), o5.latitude.applyValue(t7.latitude);
    });
  } else {
    const t7 = Q(n13);
    t7 && r4(() => {
      o5.x.applyValue(t7.x), o5.y.applyValue(t7.y);
    });
  }
}

// node_modules/@arcgis/core/views/interactive/tooltip/infos/SketchTooltipInfo.js
var i3 = class extends b {
  constructor(e5) {
    super(e5), this.helpMessage = void 0, this.viewType = void 0;
  }
  get visibleElements() {
    return this.sketchOptions.tooltips.visibleElements;
  }
  get allFields() {
    return [];
  }
  get editableFields() {
    return this.allFields.filter((e5) => e5.visible && !e5.readOnly);
  }
  clearInputValues() {
    this.allFields.forEach((e5) => e5.clearInputValue());
  }
};
__decorate([a()], i3.prototype, "sketchOptions", void 0), __decorate([a()], i3.prototype, "visibleElements", null), __decorate([a()], i3.prototype, "helpMessage", void 0), __decorate([a()], i3.prototype, "viewType", void 0), __decorate([a()], i3.prototype, "allFields", null), __decorate([a()], i3.prototype, "editableFields", null), i3 = __decorate([c("esri.views.interactive.tooltip.infos.SketchTooltipInfo")], i3);

export {
  _4 as _,
  E2 as E,
  w4 as w,
  A3 as A,
  B2 as B,
  C,
  H,
  J2 as J,
  K3 as K,
  V2 as V,
  k3 as k,
  z3 as z,
  F4 as F,
  O6 as O,
  C3 as C2,
  G3 as G,
  J3 as J2,
  i3 as i
};
//# sourceMappingURL=chunk-XI2UTA6T.js.map
