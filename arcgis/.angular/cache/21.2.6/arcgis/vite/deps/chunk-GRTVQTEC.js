import {
  Ge,
  L,
  U,
  V,
  f,
  ie,
  ne,
  pe,
  re,
  ze
} from "./chunk-R4SZFRNU.js";
import {
  m
} from "./chunk-KUQTK7UY.js";
import {
  n as n2
} from "./chunk-N7U7MERC.js";
import {
  e,
  n,
  o,
  t
} from "./chunk-TPJLJ32L.js";
import {
  s
} from "./chunk-2ZL6ZCDF.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/Dictionary.js
function w(t2, e2, s2 = false, r = false) {
  if (null == t2) return null;
  if (n(t2) || t(t2) || e(t2) || ne(t2) || re(t2) || ie(t2)) return t2;
  if (o(t2)) {
    const i2 = [];
    for (const n3 of t2) i2.push(w(n3, e2, s2, r));
    return i2;
  }
  if (r && U(t2)) return t2;
  const i = new p();
  i.immutable = false;
  for (const [n3, o2] of Object.entries(t2)) void 0 !== o2 && i.setField(n3, w(o2, e2, s2, r));
  return i.immutable = s2, i;
}
var p = class _p {
  constructor(t2) {
    this.declaredClass = "esri.arcade.Dictionary", this.plain = false, this.immutable = true, t2 instanceof _p ? this.attributes = t2.attributes : null == t2 ? this.attributes = /* @__PURE__ */ Object.create(null) : null != Object.getPrototypeOf(t2) ? this.attributes = __spreadValues({ __proto__: null }, t2) : this.attributes = t2;
  }
  static containerEntry(t2, e2) {
    return new _p({ __proto__: null, key: t2, value: e2 });
  }
  static textFormatting() {
    const t2 = new _p({ __proto__: null, newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
    return t2.immutable = false, t2;
  }
  field(t2) {
    const e2 = t2.toLowerCase(), r = this.attributes[t2];
    if (void 0 !== r) return r;
    for (const s2 in this.attributes) if (s2.toLowerCase() === e2) return this.attributes[s2];
    throw new n2(null, "FieldNotFound", null, { key: t2 });
  }
  setField(e2, i) {
    if (this.immutable) throw new n2(null, "Immutable", null);
    if (L(i)) throw new n2(null, "NoFunctionInDictionary", null);
    const n3 = e2.toLowerCase();
    i instanceof Date && (i = m.dateJSToArcadeDate(i));
    if (void 0 === this.attributes[e2]) {
      for (const t2 in this.attributes) if (t2.toLowerCase() === n3) return void (this.attributes[t2] = i);
      this.attributes[e2] = i;
    } else this.attributes[e2] = i;
  }
  eraseField(t2) {
    if (this.immutable) throw new n2(null, "Immutable", null);
    if (t2 in this.attributes) return void delete this.attributes[t2];
    const e2 = t2.toLowerCase();
    for (const s2 in this.attributes) if (s2.toLowerCase() === e2) return void delete this.attributes[s2];
  }
  hasField(t2) {
    const e2 = t2.toLowerCase();
    if (void 0 !== this.attributes[t2]) return true;
    for (const s2 in this.attributes) if (s2.toLowerCase() === e2) return true;
    return false;
  }
  keys() {
    let t2 = [];
    for (const e2 in this.attributes) t2.push(e2);
    return t2 = t2.sort(), t2;
  }
  values() {
    return this.keys().map((t2) => this.attributes[t2]);
  }
  entryCount() {
    return Object.keys(this.attributes).length;
  }
  isEmpty() {
    return this.entryCount() <= 0;
  }
  castToText(t2 = false) {
    return pe(this.attributes, { useNumbersForDates: t2 });
  }
  static convertObjectToArcadeDictionary(t2, e2, s2 = true, r = false) {
    const i = new _p();
    i.immutable = false;
    for (const n3 in t2) {
      const o2 = t2[n3];
      void 0 !== o2 && i.setField(n3.toString(), w(o2, e2, s2, r));
    }
    return i.immutable = s2, i;
  }
  static convertJsonToArcade(t2, e2, s2 = false, r = false) {
    return w(t2, e2, s2, r);
  }
  castAsJson(t2 = null) {
    const e2 = /* @__PURE__ */ Object.create(null);
    for (let s2 in this.attributes) {
      const r = this.attributes[s2];
      void 0 !== r && (t2?.keyTranslate && (s2 = t2.keyTranslate(s2)), e2[s2] = Ge(r, t2));
    }
    return e2;
  }
  async castDictionaryValueAsJsonAsync(t2, e2, s2, r = null, i) {
    const n3 = await ze(s2, r, i);
    return t2[e2] = n3, n3;
  }
  async castAsJsonAsync(e2 = null, s2 = null) {
    const r = /* @__PURE__ */ Object.create(null), i = [];
    for (let o2 in this.attributes) {
      const u = this.attributes[o2];
      s2?.keyTranslate && (o2 = s2.keyTranslate(o2)), void 0 !== u && (V(u) || u instanceof s || u instanceof m ? r[o2] = Ge(u, s2) : i.push(this.castDictionaryValueAsJsonAsync(r, o2, u, e2, s2)));
    }
    return i.length > 0 && await Promise.all(i), r;
  }
  deepClone() {
    const t2 = new _p();
    t2.immutable = false;
    for (const s2 of this.keys()) t2.setField(s2, f(this.field(s2)));
    return t2;
  }
};

export {
  p
};
//# sourceMappingURL=chunk-GRTVQTEC.js.map
