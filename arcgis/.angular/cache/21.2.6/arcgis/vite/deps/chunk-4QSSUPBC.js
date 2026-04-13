import {
  c as c2,
  o as o2
} from "./chunk-FHDG7GP6.js";
import {
  e
} from "./chunk-OLWKRV2W.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import {
  a3 as a,
  c,
  o3 as o,
  r4 as r
} from "./chunk-LV7AMIAU.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/time/TimeExtent.js
var u;
var m = class extends n {
  static {
    u = this;
  }
  static get allTime() {
    return d;
  }
  static get empty() {
    return p;
  }
  static fromArray(t) {
    return new u({ start: null != t[0] ? new Date(t[0]) : t[0], end: null != t[1] ? new Date(t[1]) : t[1] });
  }
  constructor(t) {
    super(t), this.end = null, this.start = null;
  }
  readEnd(t, e2) {
    return null != e2.end ? new Date(e2.end) : null;
  }
  writeEnd(t, e2) {
    e2.end = t?.getTime() ?? null;
  }
  get isAllTime() {
    return this.equals(u.allTime);
  }
  get isEmpty() {
    return this.equals(u.empty);
  }
  readStart(t, e2) {
    return null != e2.start ? new Date(e2.start) : null;
  }
  writeStart(t, e2) {
    e2.start = t?.getTime() ?? null;
  }
  clone() {
    return new u({ end: this.end, start: this.start });
  }
  equals(t) {
    if (!t) return false;
    const e2 = this.start?.getTime() ?? this.start, r2 = this.end?.getTime() ?? this.end, n2 = t.start?.getTime() ?? t.start, i = t.end?.getTime() ?? t.end;
    return e2 === n2 && r2 === i;
  }
  expandTo(t, e2 = e) {
    if (this.isEmpty || this.isAllTime || "unknown" === t) return this.clone();
    let i = this.start;
    i && (i = c2(i, t, e2));
    let s = this.end;
    if (s) {
      const i2 = c2(s, t, e2);
      s = s.getTime() === i2.getTime() ? i2 : o2(i2, 1, t, e2);
    }
    return new u({ start: i, end: s });
  }
  intersection(t) {
    if (!t) return this.clone();
    if (this.isEmpty || t.isEmpty) return u.empty;
    if (this.isAllTime) return t.clone();
    if (t.isAllTime) return this.clone();
    const e2 = this.start?.getTime() ?? -1 / 0, r2 = this.end?.getTime() ?? 1 / 0, n2 = t.start?.getTime() ?? -1 / 0, i = t.end?.getTime() ?? 1 / 0;
    let s, l;
    return n2 >= e2 && n2 <= r2 ? s = n2 : e2 >= n2 && e2 <= i && (s = e2), r2 >= n2 && r2 <= i ? l = r2 : i >= e2 && i <= r2 && (l = i), null == s || null == l || isNaN(s) || isNaN(l) ? u.empty : new u({ start: s === -1 / 0 ? null : new Date(s), end: l === 1 / 0 ? null : new Date(l) });
  }
  offset(t, e2, r2 = e) {
    if (this.isEmpty || this.isAllTime || "unknown" === e2) return this.clone();
    const i = new u(), { start: s, end: o3 } = this;
    return null != s && (i.start = o2(s, t, e2, r2)), null != o3 && (i.end = o2(o3, t, e2, r2)), i;
  }
  toArray() {
    return this.isEmpty ? [void 0, void 0] : [this.start?.getTime() ?? null, this.end?.getTime() ?? null];
  }
  union(t) {
    if (!t || t.isEmpty) return this.clone();
    if (this.isEmpty) return t.clone();
    if (this.isAllTime || t.isAllTime) return d.clone();
    const e2 = null != this.start && null != t.start ? new Date(Math.min(this.start.getTime(), t.start.getTime())) : null, r2 = null != this.end && null != t.end ? new Date(Math.max(this.end.getTime(), t.end.getTime())) : null;
    return new u({ start: e2, end: r2 });
  }
};
__decorate([a({ type: Date, json: { write: { allowNull: true } } })], m.prototype, "end", void 0), __decorate([o("end")], m.prototype, "readEnd", null), __decorate([r("end")], m.prototype, "writeEnd", null), __decorate([a({ readOnly: true, json: { read: false } })], m.prototype, "isAllTime", null), __decorate([a({ readOnly: true, json: { read: false } })], m.prototype, "isEmpty", null), __decorate([a({ type: Date, json: { write: { allowNull: true } } })], m.prototype, "start", void 0), __decorate([o("start")], m.prototype, "readStart", null), __decorate([r("start")], m.prototype, "writeStart", null), m = u = __decorate([c("esri.time.TimeExtent")], m);
var d = new m();
var p = new m({ start: void 0, end: void 0 });

export {
  m
};
//# sourceMappingURL=chunk-4QSSUPBC.js.map
