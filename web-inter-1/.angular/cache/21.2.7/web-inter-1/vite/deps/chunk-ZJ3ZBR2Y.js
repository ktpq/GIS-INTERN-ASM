import {
  A,
  B,
  C as C2,
  H,
  J,
  w2
} from "./chunk-4UFQ4VTC.js";
import {
  M,
  w
} from "./chunk-SHQIZYMW.js";
import {
  F
} from "./chunk-LFMU2JMK.js";
import {
  C,
  c as c2,
  f,
  g,
  k,
  p,
  s,
  z
} from "./chunk-EASH2KMP.js";
import {
  n
} from "./chunk-Z3PP4SLW.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipField.js
var s2 = class extends b {
  constructor(t) {
    super(t), this.actual = null, this.lockable = true, this.id = n(), this.inputValue = null, this.name = null, this.readOnly = false, this.suffix = null, this.visible = true, this.invalid = false, this.unlockOnVertexPlacement = true, this.displayOrder = 0;
  }
  get committed() {
    return this.lockable ? this._get("committed") : null;
  }
  set committed(t) {
    this.lockable && this._set("committed", t);
  }
  get dirty() {
    return null != this.inputValue;
  }
  get lockDisabled() {
    return null == this.actual && !this.dirty && !this.locked;
  }
  get locked() {
    return this.lockable && null != this.committed;
  }
  onInput(t) {
    this.inputValue = t, this.invalid = false;
  }
  onCommit(t, l2, i) {
    this.lockable ? this._onCommitLockable(t, i) : this._onCommitNonLockable(i), this.invalid && "commit-and-exit" === t || i.onCommit(l2, t);
  }
  _onCommitLockable(t, l2) {
    const { inputValue: i, locked: o } = this;
    o && n2(i) ? this.unlock() : ("commit-and-exit" === t && !o || null != i) && this._parseInputAndLock(l2);
  }
  _onCommitNonLockable(t) {
    const { inputValue: l2 } = this;
    n2(l2) ? this.lockable ? this.setActual(null) : this.clearInputValue() : null != l2 && this._parseInputAndSetActual(t);
  }
  applyValue(t) {
    this.lockable ? this.lock(t) : this.setActual(t);
  }
  clearInputValue() {
    this.inputValue = null, this.invalid = false;
  }
  setActual(t) {
    this.actual = t, this.clearInputValue();
  }
  lock(t) {
    this.lockable && (this.committed = t ?? this.actual, this.clearInputValue());
  }
  unlock() {
    this.lockable && (this.committed = null, this.clearInputValue());
  }
  toggleLock(t) {
    this.lockable && (this.locked ? this.unlock() : this._parseInputAndLock(t));
  }
  getSuffix(t) {
    const { suffix: l2 } = this;
    return "function" == typeof l2 ? l2(t) : l2;
  }
  getFormattedValue(t) {
    const { actual: l2, committed: i, format: o } = this;
    return null != i ? o(i, t) : null != l2 ? o(l2, t) : null;
  }
  getRawDisplayValue(t) {
    const { actual: l2, committed: i, inputValue: o } = this;
    return null != o ? o : this.lockable && null != i ? this.formatForInputMode(i, t) : null != l2 ? this.formatForInputMode(l2, t) : null;
  }
  _parseInputAndSetActual(t) {
    const { inputValue: l2 } = this;
    if (null == l2 || n2(l2)) return this.setActual(null);
    const i = this.parse(l2, t);
    null != i ? this.setActual(i) : this.invalid = true;
  }
  _parseInputAndLock(t) {
    const { inputValue: l2, actual: i } = this;
    if (n2(l2)) return this.unlock();
    if (null == l2) return this.lock(i);
    const o = this.parse(l2, t);
    null != o ? this.lock(o) : this.invalid = true;
  }
};
function n2(t) {
  return null != t && "" === t.trim();
}
__decorate([a()], s2.prototype, "actual", void 0), __decorate([a()], s2.prototype, "committed", null), __decorate([a()], s2.prototype, "dirty", null), __decorate([a()], s2.prototype, "lockDisabled", null), __decorate([a()], s2.prototype, "format", void 0), __decorate([a()], s2.prototype, "formatForInputMode", void 0), __decorate([a()], s2.prototype, "lockable", void 0), __decorate([a()], s2.prototype, "locked", null), __decorate([a()], s2.prototype, "id", void 0), __decorate([a()], s2.prototype, "inputValue", void 0), __decorate([a()], s2.prototype, "name", void 0), __decorate([a()], s2.prototype, "parse", void 0), __decorate([a()], s2.prototype, "readOnly", void 0), __decorate([a()], s2.prototype, "suffix", void 0), __decorate([a()], s2.prototype, "title", void 0), __decorate([a()], s2.prototype, "visible", void 0), __decorate([a()], s2.prototype, "invalid", void 0), __decorate([a()], s2.prototype, "unlockOnVertexPlacement", void 0), __decorate([a()], s2.prototype, "displayOrder", void 0), s2 = __decorate([c("esri.views.interactive.tooltip.fields.TooltipField")], s2);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldElevation.js
var l = class extends s2 {
  constructor(t) {
    super(t), this.showAsZ = false;
  }
  normalizeCtorArgs(t) {
    const i = (t2) => t2.inputUnitInfos.verticalLength.unit;
    return __spreadValues({ name: "elevation", actual: k, parse: B({ createQuantity: (t2, o) => f(t2, i(o)) }), format: (t2, o) => o.formatters.verticalLength(t2), formatForInputMode: (t2, o) => o.formatters.scalar(g(t2, i(o))), suffix: (t2) => t2.inputUnitInfos.verticalLength.abbreviation, title: (t2) => t2.messages.sketch[this.showAsZ ? "z" : "elevation"], unlockOnVertexPlacement: false }, t);
  }
};
__decorate([a()], l.prototype, "showAsZ", void 0), l = __decorate([c("esri.views.interactive.tooltip.fields.TooltipFieldElevation")], l);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldOrientation.js
var m = class extends s2 {
  constructor(t) {
    super(t), this.precision = 1;
  }
  normalizeCtorArgs(t) {
    const i = (t2) => t2.inputUnitInfos.angle.unit;
    return __spreadValues({ name: "orientation", actual: null, parse: B({ createQuantity: (t2, o) => p(t2, i(o), "geographic"), sanitize: C2 }), format: (t2) => {
      const r = M(t2);
      return F(r, "geographic", this.precision);
    }, formatForInputMode: (t2, r) => {
      const o = M(t2);
      return r.formatters.scalar(o);
    }, suffix: (t2) => t2.inputUnitInfos.angle.abbreviation, title: (t2) => t2.messages.sketch.orientation }, t);
  }
};
__decorate([a()], m.prototype, "precision", void 0), m = __decorate([c("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")], m);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldSize.js
var a2 = class extends s2 {
  constructor(t) {
    super(t), this.precision = null;
  }
  normalizeCtorArgs(t) {
    const i = (t2) => t2.inputUnitInfos.length.unit;
    return __spreadValues({ name: "size", actual: null, parse: B({ createQuantity: (t2, o) => f(t2, i(o)) }), format: (t2, o) => o.formatters.length(t2), formatForInputMode: (t2, r) => r.formatters.scalar(g(t2, i(r))), suffix: (t2) => t2.inputUnitInfos.length.abbreviation, title: (t2) => t2.messages.sketch.size }, t);
  }
};
__decorate([a()], a2.prototype, "precision", void 0), a2 = __decorate([c("esri.views.interactive.tooltip.fields.TooltipFieldSize")], a2);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/fields.js
function v(e) {
  const a3 = (t) => t.inputUnitInfos.angle.unit, r = (t) => t.sketchOptions.values.effectiveDirectionMode;
  return new s2(__spreadValues({ name: "direction", actual: C, parse: B({ createQuantity: (t, e2) => p(t, a3(e2), "geographic"), sanitize: C2 }), format: (t, e2) => {
    const a4 = r(e2), n3 = w(t, a4);
    switch (a4) {
      case "absolute":
        return e2.formatters.direction(n3);
      case "relative":
        return e2.formatters.directionRelative(n3);
      case "relative-bilateral":
        return e2.formatters.directionRelativeBilateral(n3);
    }
  }, formatForInputMode: (t, e2) => {
    const i = w(t, r(e2));
    return e2.formatters.scalar(g(i, a3(e2)));
  }, suffix: (t) => t.inputUnitInfos.angle.abbreviation, title: (t) => {
    const e2 = r(t), { absolute: a4, relative: n3 } = t.messages.sketch.direction;
    switch (e2) {
      case "absolute":
        return a4;
      case "relative":
      case "relative-bilateral":
        return n3;
    }
  } }, e));
}
function y(t) {
  const e = (t2) => t2.inputUnitInfos.length.unit;
  return new s2(__spreadValues({ name: t?.name ?? "distance", actual: k, parse: B({ createQuantity: (t2, a3) => f(Math.max(t2, 0), e(a3)) }), format: (t2, e2) => e2.formatters.length(t2), formatForInputMode: (t2, a3) => a3.formatters.scalar(g(t2, e(a3))), suffix: (t2) => t2.inputUnitInfos.length.abbreviation, title: (t2) => t2.messages.sketch.distance }, t));
}
function U(t) {
  const e = (t2) => t2.inputUnitInfos.length.unit;
  return new s2(__spreadValues({ name: t?.name ?? "radius", actual: k, parse: B({ createQuantity: (t2, a3) => f(Math.max(t2, 0), e(a3)) }), format: (t2, e2) => e2.formatters.length(t2), formatForInputMode: (t2, a3) => a3.formatters.scalar(g(t2, e(a3))), suffix: (t2) => t2.inputUnitInfos.length.abbreviation, title: (t2) => t2.messages.sketch.radius }, t));
}
function w3(t) {
  return y(__spreadValues({ format: (t2, e) => e.formatters.totalLength(t2), title: (t2) => t2.messages.sketch.totalLength, readOnly: true }, t));
}
function x(t) {
  return y(__spreadValues({}, t));
}
function F2(t) {
  const e = (t2) => t2.inputUnitInfos.length.unit;
  return y(__spreadProps(__spreadValues({}, t), { parse: B({ createQuantity: (t2, a3) => f(t2, e(a3)) }), format: (t2, e2) => e2.formatters.lengthRelative(t2) }));
}
function M2(t) {
  return new l(t);
}
function k2(t) {
  return new m(t);
}
function j(t) {
  return new a2(t);
}
function Q(t) {
  return q("scale", __spreadValues({ name: "scale", actual: null, parse: B({ createQuantity: (t2) => c2(Math.abs(t2)) }) }, t));
}
function D(t) {
  const e = (t2) => t2.inputUnitInfos.area.unit;
  return new s2(__spreadValues({ name: "area", actual: z, parse: B({ createQuantity: (t2, a3) => s(t2, e(a3)) }), format: (t2, e2) => e2.formatters.area(t2), formatForInputMode: (t2, a3) => a3.formatters.scalar(g(t2, e(a3))), suffix: (t2) => t2.inputUnitInfos.area.abbreviation, title: (t2) => t2.messages.sketch.area, readOnly: true }, t));
}
function O(e) {
  return new s2(__spreadValues({ name: "x", actual: C, parse: H, format: (t, e2) => e2.formatters.longitudeDecimalDegrees(t), formatForInputMode: (t) => w2(t), suffix: (t) => t.inputUnitInfos.angle.abbreviation, title: (t) => t.messages.sketch.longitude }, e));
}
function T(e) {
  return new s2(__spreadValues({ name: "y", actual: C, parse: J, format: (t, e2) => e2.formatters.latitudeDecimalDegrees(t), formatForInputMode: (t) => A(t), suffix: (t) => t.inputUnitInfos.angle.abbreviation, title: (t) => t.messages.sketch.latitude }, e));
}
function R(t) {
  return q("x", __spreadValues({ name: "x" }, t));
}
function z2(t) {
  return q("y", __spreadValues({ name: "y" }, t));
}
function L(t) {
  return new s2(__spreadValues({ actual: c2(0), parse: B({ createQuantity: (t2) => c2(t2) }), format: (t2, e) => e.formatters.scalar(t2), formatForInputMode: (t2, e) => e.formatters.scalar(t2), title: (t2) => t2.messages.sketch.scale }, t));
}
function q(t, e) {
  return L(__spreadValues({ title: (e2) => e2.messages.sketch[t] }, e));
}

export {
  s2 as s,
  v,
  y,
  U,
  w3 as w,
  x,
  F2 as F,
  M2 as M,
  k2 as k,
  j,
  Q,
  D,
  O,
  T,
  R,
  z2 as z,
  L
};
//# sourceMappingURL=chunk-ZJ3ZBR2Y.js.map
