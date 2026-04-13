import {
  f,
  t as t2
} from "./chunk-J7JBGJAS.js";
import {
  e as e2
} from "./chunk-O3PP4I47.js";
import {
  e,
  t
} from "./chunk-POW25PFR.js";
import {
  L
} from "./chunk-KWV5EQET.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/interactive/keybindings.js
var s = "z";
var a = "r";
var p = { cancel: "Escape", complete: "Enter" };
var c = __spreadProps(__spreadValues({}, p), { redo: a, undo: s, center: "Alt", constraint: "Shift", delete: ["Backspace", "Delete"], vertexAdd: "f", pan: " " });
var f2 = { toggle: "Control" };
var d = { enterInputMode: "Tab", commit: "Enter", discard: "Escape", next: "Tab" };
var h = { moveUp: { key: "ArrowUp", modifier: "Shift", repeats: true }, moveDown: { key: "ArrowDown", modifier: "Shift", repeats: true }, moveLeft: { key: "ArrowLeft", modifier: "Shift", repeats: true }, moveRight: { key: "ArrowRight", modifier: "Shift", repeats: true }, scaleUp: { key: "+", modifier: "Shift" }, scaleDown: { key: "-", modifier: "Shift" }, factorModifier: { key: t2, continuePropagation: true }, toggleOpacity: "t", preserveAspectRatio: { key: "Shift", continuePropagation: true }, rotateIncrements: { key: "Shift", continuePropagation: true }, editSourcePoints: { key: "Alt", continuePropagation: true }, undo: s, redo: a };
var g = { toggleFollowManipulator: { key: "v", repeats: false, continuePropagation: true } };
var y = class {
  constructor() {
    this._bindings = /* @__PURE__ */ new Map();
  }
  add(e3, t3) {
    return this.addToggle(e3, (e4) => {
      "key-down" === e4.type && t3(e4);
    });
  }
  addToggle(o, r) {
    const n = l.fromDefinition(o, r), s2 = e2(this._bindings, n.key, () => []);
    return s2.push(n), e(() => L(s2, n));
  }
  register(e3, t3 = f.WIDGET) {
    return t([e3.on("key-down", (t4) => this.dispatch(e3.inputManager, t4), t3), e3.on("key-up", (t4) => this.dispatch(e3.inputManager, t4), t3)]);
  }
  dispatch(e3, t3) {
    const o = t3.key, i = this._bindings.get(o);
    if (i) for (const r of i) r.process(e3, t3);
  }
};
var l = class _l {
  constructor(e3, t3, o, i, r) {
    this.key = e3, this.modifiers = t3, this.repeats = o, this.continuePropagation = i, this.callback = r;
  }
  process(e3, t3) {
    if (!(t3.key !== this.key || "repeat" in t3 && t3.repeat && !this.repeats)) {
      for (const t4 of this.modifiers) if (!e3.isModifierKeyDown(t4)) return;
      this.continuePropagation || t3.stopPropagation(), this.callback(t3);
    }
  }
  static fromDefinition(e3, t3) {
    if ("string" == typeof e3) return new _l(e3, [], false, false, t3);
    const { key: o, modifier: i, repeats: r, continuePropagation: n } = e3;
    return new _l(o, i ? Array.isArray(i) ? i : [i] : [], !!r, !!n, t3);
  }
};

export {
  p,
  c,
  f2 as f,
  d,
  h,
  g,
  y
};
//# sourceMappingURL=chunk-A3TI5LYY.js.map
