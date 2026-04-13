import {
  g
} from "./chunk-TO4LSEU2.js";
import {
  e,
  t
} from "./chunk-S4XOMMCM.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c
} from "./chunk-LV7AMIAU.js";
import {
  a,
  has,
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/effects/EffectView.js
var l = -1;
var h = class extends b {
  constructor(t2) {
    super(t2), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = has("mapview-transitions-duration"), this.effects = [];
  }
  set effect(t2) {
    if (this._get("effect") !== (t2 = t2 || "")) {
      this._set("effect", t2);
      try {
        this._transitionTo(a3(t2));
      } catch (e2) {
        this._transitionTo([]), n.getLogger(this).warn("Invalid Effect", { effect: t2, error: e2 });
      }
    }
  }
  get final() {
    return this._final;
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(t2) {
    this._updateForScale(t2);
  }
  get transitioning() {
    return null !== this._to;
  }
  canTransitionTo(t2) {
    try {
      return this.scale > 0 && u(this._current, a3(t2), this.scale);
    } catch {
      return false;
    }
  }
  transitionStep(t2, e2) {
    this._applyTimeTransition(t2), this._updateForScale(e2);
  }
  endTransition() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(t2) {
    this.scale > 0 && u(this._current, t2, this.scale) ? (this._final = t2, this._to = a(t2), _(this._current, this._to, this.scale), this._from = a(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t2), this._set("effects", this._current[0] ? a(this._current[0].effects) : []);
  }
  _applyTimeTransition(t2) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += t2;
    const e2 = Math.min(1, this._time / this.duration);
    for (let s = 0; s < this._current.length; s++) {
      const t3 = this._current[s], i = this._from[s], r = this._to[s];
      t3.scale = p(i.scale, r.scale, e2);
      for (let s2 = 0; s2 < t3.effects.length; s2++) {
        const n2 = t3.effects[s2], c2 = i.effects[s2], f = r.effects[s2];
        n2.interpolate(c2, f, e2);
      }
    }
    1 === e2 && (this._current = this._final, this._set("effects", this._current[0] ? a(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(t2) {
    if (this._set("scale", t2), 0 === this._current.length) return;
    const e2 = this._current, s = this._current.length - 1;
    let i, r, n2 = 1;
    if (1 === e2.length || t2 >= e2[0].scale) r = i = e2[0].effects;
    else if (t2 <= e2[s].scale) r = i = e2[s].effects;
    else for (let c2 = 0; c2 < s; c2++) {
      const s2 = e2[c2], f = e2[c2 + 1];
      if (s2.scale >= t2 && f.scale <= t2) {
        n2 = (t2 - s2.scale) / (f.scale - s2.scale), i = s2.effects, r = f.effects;
        break;
      }
    }
    for (let c2 = 0; c2 < this.effects.length; c2++) {
      this.effects[c2].interpolate(i[c2], r[c2], n2);
    }
  }
};
function a3(t2) {
  const e2 = g(t2) || [];
  return m(e2) ? [{ scale: l, effects: e2 }] : e2;
}
function u(t2, e2, s) {
  if (!t2[0]?.effects || !e2[0]?.effects) return true;
  return !((t2[0]?.scale === l || e2[0]?.scale === l) && (t2.length > 1 || e2.length > 1) && s <= 0) && t(t2[0].effects, e2[0].effects);
}
function _(t2, e2, s) {
  const i = t2.length > e2.length ? t2 : e2, r = t2.length > e2.length ? e2 : t2, n2 = r[r.length - 1], c2 = n2?.scale ?? s, f = n2?.effects ?? [];
  for (let o = r.length; o < i.length; o++) r.push({ scale: c2, effects: [...f] });
  for (let h2 = 0; h2 < i.length; h2++) r[h2].scale = r[h2].scale === l ? s : r[h2].scale, i[h2].scale = i[h2].scale === l ? s : i[h2].scale, e(r[h2].effects, i[h2].effects);
}
function p(t2, e2, s) {
  return t2 + (e2 - t2) * s;
}
function m(t2) {
  const e2 = t2[0];
  return !!e2 && "type" in e2;
}
__decorate([a2()], h.prototype, "_to", void 0), __decorate([a2()], h.prototype, "duration", void 0), __decorate([a2({ value: "" })], h.prototype, "effect", null), __decorate([a2({ readOnly: true })], h.prototype, "effects", void 0), __decorate([a2({ readOnly: true })], h.prototype, "final", null), __decorate([a2({ readOnly: true })], h.prototype, "hasEffects", null), __decorate([a2({ value: 0 })], h.prototype, "scale", null), __decorate([a2({ readOnly: true })], h.prototype, "transitioning", null), h = __decorate([c("esri.layers.effects.EffectView")], h);

export {
  h
};
//# sourceMappingURL=chunk-J5D74YXM.js.map
