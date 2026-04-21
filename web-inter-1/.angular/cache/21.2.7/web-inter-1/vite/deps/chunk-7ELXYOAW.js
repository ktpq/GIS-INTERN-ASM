import {
  o as o3
} from "./chunk-BVHAZAH7.js";
import {
  a as a2,
  e as e2,
  n as n2,
  o as o2,
  u
} from "./chunk-43YEPY4V.js";
import {
  e as e3
} from "./chunk-RTVKY37F.js";
import {
  a,
  e,
  has,
  n2 as n,
  o3 as o,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/ObjectPool.js
function t(t7) {
  return t7?.release && "function" == typeof t7.release;
}
function i(t7) {
  return t7?.acquire && "function" == typeof t7.acquire;
}
var e4 = class _e {
  constructor(t7, i8, e11, s9 = 1, o15 = 0) {
    this._creator = t7, this._acquireFunction = i8, this._releaseFunction = e11, this.allocationSize = s9, this._pool = new Array(o15), this._initialSize = o15;
    for (let r9 = 0; r9 < o15; r9++) this._pool[r9] = this._creator();
    this.allocationSize = Math.max(s9, 1);
  }
  destroy() {
    this.prune(0);
  }
  acquire(...t7) {
    let s9;
    if (_e.test.disabled) s9 = this._creator();
    else {
      if (0 === this._pool.length) {
        const t8 = this.allocationSize;
        for (let i8 = 0; i8 < t8; i8++) this._pool[i8] = this._creator();
      }
      s9 = this._pool.pop();
    }
    return this._acquireFunction ? this._acquireFunction(s9, ...t7) : i(s9) && s9.acquire(...t7), s9;
  }
  release(i8) {
    i8 && !_e.test.disabled && (this._releaseFunction ? this._releaseFunction(i8) : t(i8) && i8.release(), this._pool.push(i8));
  }
  prune(t7 = this._initialSize) {
    if (!(t7 >= this._pool.length)) {
      for (let i8 = t7; i8 < this._pool.length; ++i8) {
        const t8 = this._pool[i8];
        this._dispose(t8);
      }
      this._pool.length = t7;
    }
  }
  _dispose(t7) {
    t7.dispose && "function" == typeof t7.dispose && t7.dispose();
  }
  static {
    this.test = { disabled: !!has("esri-tests-disable-memory-pools") };
  }
};

// node_modules/@arcgis/core/core/uid.js
var t2 = 0;
function e5() {
  return ++t2;
}

// node_modules/@arcgis/core/core/accessorSupport/get.js
function i2(t7, i8) {
  const e11 = t7.endsWith("?") ? t7.slice(0, -1) : t7;
  if (null != i8.getItemAt || Array.isArray(i8)) {
    const t8 = parseInt(e11, 10);
    if (!isNaN(t8)) return Array.isArray(i8) ? i8[t8] : i8.at(t8);
  }
  const u7 = n2(i8);
  return e2(u7, e11) ? u7.get(e11) : i8[e11];
}
function e6(t7, n12, r9) {
  if (null == t7) return t7;
  const u7 = i2(n12[r9], t7);
  return !u7 && r9 < n12.length - 1 ? void 0 : r9 === n12.length - 1 ? u7 : e6(u7, n12, r9 + 1);
}
function u2(n12, r9, u7 = 0) {
  return "string" != typeof r9 || r9.includes(".") ? e6(n12, o2(r9), u7) : i2(r9, n12);
}
function o4(t7, n12) {
  return u2(t7, n12);
}
function s(t7, n12) {
  return void 0 !== u2(n12, t7);
}

// node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var t3 = () => n.getLogger("esri.core.accessorSupport.ensureTypes");
function r2(e11) {
  if (null == e11) return e11;
  const n12 = new Date(e11);
  return isNaN(n12.getTime()) ? (t3().error("Accessor#set", `Invalid date value: '${e11}', falling back to current date`), /* @__PURE__ */ new Date()) : n12;
}
function o5(e11) {
  return null == e11 ? e11 : !!e11;
}
function u3(e11) {
  return null == e11 ? e11 : e11.toString();
}
function a3(e11, n12 = 0) {
  return null == e11 ? e11 : (e11 = parseFloat(e11), isNaN(e11) ? n12 : e11);
}
function s2(e11) {
  return null == e11 ? e11 : Math.round(parseFloat(e11));
}
function c(e11) {
  return null;
}
function l(e11, n12) {
  return (t7) => {
    let r9 = e11(t7);
    return null != n12.step && (r9 = Math.round(r9 / n12.step) * n12.step), null != n12.min && (r9 = Math.max(n12.min, r9)), null != n12.max && (r9 = Math.min(n12.max, r9)), r9;
  };
}
function i3(e11) {
  return e11?.constructor && void 0 !== e11.constructor.__accessorMetadata__;
}
function f(e11, n12) {
  return null != n12 && e11 && !(n12 instanceof e11);
}
function p(e11) {
  return e11 && "isCollection" in e11;
}
function y(e11) {
  return e11?.Type ? "function" == typeof e11.Type ? e11.Type : e11.Type.base : null;
}
function v(e11, n12) {
  if (!n12?.constructor || !p(n12.constructor)) return g(e11, n12) ? n12 : new e11(n12);
  const t7 = y(e11.prototype.itemType), r9 = y(n12.constructor.prototype.itemType);
  return t7 ? r9 ? t7 === r9 ? n12 : t7.prototype.isPrototypeOf(r9.prototype) ? new e11(n12) : (g(e11, n12), n12) : new e11(n12) : n12;
}
function g(e11, n12) {
  return !!i3(n12) && (t3().error("Accessor#set", "Assigning an instance of '" + (n12.declaredClass || "unknown") + "' which is not a subclass of '" + h(e11) + "'"), true);
}
function m(e11, n12) {
  return null == n12 ? n12 : p(e11) ? v(e11, n12) : f(e11, n12) ? g(e11, n12) ? n12 : new e11(n12) : n12;
}
function h(e11) {
  return e11?.prototype?.declaredClass || "unknown";
}
var d = /* @__PURE__ */ new WeakMap();
function b(e11) {
  switch (e11) {
    case Number:
      return (e12) => a3(e12);
    case D:
      return s2;
    case Boolean:
      return o5;
    case String:
      return u3;
    case Date:
      return r2;
    case _:
      return c;
    default:
      return e3(d, e11, () => m.bind(null, e11));
  }
}
function w(e11, n12) {
  const t7 = b(e11);
  return 1 === arguments.length ? t7 : t7(n12);
}
function A(e11) {
  const n12 = b(e11);
  return (e12) => n12(e12);
}
function $(e11, n12, t7) {
  return 1 === arguments.length ? $.bind(null, e11) : n12 ? Array.isArray(n12) ? n12.map((n13) => e11(n13, t7)) : [e11(n12, t7)] : n12;
}
function j(e11, n12) {
  return 1 === arguments.length ? $((n13) => w(e11, n13)) : $((n13) => w(e11, n13), n12);
}
function k(e11, n12, t7) {
  return 0 !== n12 && Array.isArray(t7) ? t7.map((t8) => k(e11, n12 - 1, t8)) : e11(t7);
}
function M(e11, n12, t7) {
  if (2 === arguments.length) return (t8) => M(e11, n12, t8);
  if (!t7) return t7;
  t7 = k(e11, n12, t7);
  let r9 = n12, o15 = t7;
  for (; r9 > 0 && Array.isArray(o15); ) r9--, o15 = o15[0];
  if (void 0 !== o15) for (let u7 = 0; u7 < r9; u7++) t7 = [t7];
  return t7;
}
function N(e11, n12, t7) {
  return 2 === arguments.length ? M((n13) => w(e11, n13), n12) : M((n13) => w(e11, n13), n12, t7);
}
function T(e11) {
  return !!Array.isArray(e11) && !e11.some((n12) => {
    const t7 = typeof n12;
    return !("string" === t7 || "number" === t7 || "function" === t7 && e11.length > 1);
  });
}
function S(e11, n12) {
  if (2 === arguments.length) return S(e11).call(null, n12);
  const r9 = /* @__PURE__ */ new Set(), o15 = e11.filter((e12) => "function" != typeof e12), u7 = e11.filter((e12) => "function" == typeof e12);
  for (const t7 of e11) "string" != typeof t7 && "number" != typeof t7 || r9.add(t7);
  let a11 = null, s9 = null;
  return (e12, n13) => {
    if (null == e12) return e12;
    const c7 = typeof e12, l6 = "string" === c7 || "number" === c7;
    return l6 && (r9.has(e12) || u7.some((e13) => "string" === c7 && e13 === String || "number" === c7 && e13 === Number)) || "object" === c7 && u7.some((n14) => !f(n14, e12)) ? e12 : (l6 && o15.length ? (a11 || (a11 = o15.map((e13) => "string" == typeof e13 ? `'${e13}'` : `${e13}`).join(", ")), t3().error("Accessor#set", `'${e12}' is not a valid value for this property, only the following values are valid: ${a11}`)) : "object" == typeof e12 && u7.length ? (s9 || (s9 = u7.map((e13) => h(e13)).join(", ")), t3().error("Accessor#set", `'${e12}' is not a valid value for this property, value must be one of ${s9}`)) : t3().error("Accessor#set", `'${e12}' is not a valid value for this property`), n13 && (n13.valid = false), null);
  };
}
function x(e11, n12) {
  if (2 === arguments.length) return x(e11).call(null, n12);
  const r9 = {}, o15 = [], u7 = [];
  for (const t7 in e11.typeMap) {
    const n13 = e11.typeMap[t7];
    r9[t7] = w(n13), o15.push(h(n13)), u7.push(t7);
  }
  const a11 = () => `'${o15.join("', '")}'`, s9 = () => `'${u7.join("', '")}'`, c7 = "string" == typeof e11.key ? (n13) => n13[e11.key] : e11.key;
  return (n13) => {
    if (e11.base && !f(e11.base, n13)) return n13;
    if (null == n13) return n13;
    const o16 = c7(n13) || e11.defaultKeyValue, u8 = r9[o16];
    if (!u8) return t3().error("Accessor#set", `Invalid property value, value needs to be one of ${a11()}, or a plain object that can autocast (having .type = ${s9()})`), null;
    if (!f(e11.typeMap[o16], n13)) return n13;
    if ("string" == typeof e11.key && !i3(n13)) {
      const t7 = {};
      for (const r10 in n13) r10 !== e11.key && (t7[r10] = n13[r10]);
      return u8(t7);
    }
    return u8(n13);
  };
}
var D = class {
};
var _ = class {
};
var B = { native: (e11) => ({ type: "native", value: e11 }), array: (e11) => ({ type: "array", value: e11 }), oneOf: (e11) => ({ type: "one-of", values: e11 }) };
function C(e11) {
  if (!e11 || "object" != typeof e11 && "function" != typeof e11 || !("type" in e11)) return false;
  switch (e11.type) {
    case "native":
    case "array":
    case "one-of":
      return true;
  }
  return false;
}
function I(e11) {
  switch (e11.type) {
    case "native":
      return w(e11.value);
    case "array":
      return $(I(e11.value));
    case "one-of":
      return F(e11);
    default:
      return null;
  }
}
function F(e11) {
  let n12 = null;
  return (r9, o15) => O(r9, e11) ? r9 : (null == n12 && (n12 = L(e11)), t3().error("Accessor#set", `Invalid property value, value needs to be of type ${n12}`), o15 && (o15.valid = false), null);
}
function L(e11) {
  switch (e11.type) {
    case "native":
      switch (e11.value) {
        case Number:
          return "number";
        case String:
          return "string";
        case Boolean:
          return "boolean";
        case D:
          return "integer";
        case Date:
          return "date";
        case _:
          return "null";
        default:
          return h(e11.value);
      }
    case "array":
      return `array of ${L(e11.value)}`;
    case "one-of": {
      const n12 = e11.values.map((e12) => L(e12));
      return `one of ${n12.slice(0, -1)} or ${n12[n12.length - 1]}`;
    }
  }
  return "unknown";
}
function O(e11, n12) {
  if (null == e11) return true;
  switch (n12.type) {
    case "native":
      switch (n12.value) {
        case Number:
        case D:
          return "number" == typeof e11;
        case Boolean:
          return "boolean" == typeof e11;
        case String:
          return "string" == typeof e11;
        case _:
          return null === e11;
      }
      return e11 instanceof n12.value;
    case "array":
      return !!Array.isArray(e11) && !e11.some((e12) => !O(e12, n12.value));
    case "one-of":
      return n12.values.some((n13) => O(e11, n13));
  }
}

// node_modules/@arcgis/core/core/accessorSupport/metadata.js
function r3(e11) {
  let r9 = e11.constructor.__accessorMetadata__;
  const o15 = Object.prototype.hasOwnProperty.call(e11.constructor, "__accessorMetadata__");
  if (r9) {
    if (!o15) {
      r9 = Object.create(r9);
      for (const e12 in r9) r9[e12] = a(r9[e12]);
      Object.defineProperty(e11.constructor, "__accessorMetadata__", { value: r9, enumerable: false, configurable: true, writable: true });
    }
  } else r9 = {}, Object.defineProperty(e11.constructor, "__accessorMetadata__", { value: r9, enumerable: false, configurable: true, writable: true });
  return e11.constructor.__accessorMetadata__;
}
function o6(t7, e11) {
  const o15 = r3(t7);
  let c7 = o15[e11];
  return c7 || (c7 = o15[e11] = {}), c7;
}
function c2(t7, r9) {
  return u(t7, r9, n3);
}
var a4 = /^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;
function n3(t7) {
  return a4.test(t7) ? "replace" : "merge";
}

// node_modules/@arcgis/core/core/accessorSupport/set.js
function t4(o15, e11, s9) {
  if (o15 && e11) if ("object" == typeof e11) for (const r9 of Object.getOwnPropertyNames(e11)) t4(o15, r9, e11[r9]);
  else {
    if (e11.includes(".")) {
      const n12 = e11.split("."), i9 = n12.splice(-1, 1)[0];
      return void t4(o4(o15, n12), i9, s9);
    }
    const i8 = o15.__accessor__;
    null != i8 && n4(e11, i8), o15[e11] = s9;
  }
}
function n4(r9, t7) {
  if (has("esri-unknown-property-errors") && !e7(r9, t7)) throw new r("set:unknown-property", s3(r9, t7));
}
function e7(o15, r9) {
  return null != r9.metadata[o15];
}
function s3(o15, r9) {
  return "setting unknown property '" + o15 + "' on instance of " + r9.host.declaredClass;
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
function m2(n12 = {}) {
  return (s9, i8) => {
    if (s9 === Function.prototype) throw new Error(`Inappropriate use of @property() on a static field: ${s9.name}.${i8}. Accessor does not support static properties.`);
    const a11 = Object.getOwnPropertyDescriptor(s9, i8), c7 = o6(s9, i8);
    a11 && (a11.get || a11.set ? (c7.get = a11.get || c7.get, c7.set = a11.set || c7.set) : "value" in a11 && ("value" in n12 && n.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${i8}" on "${s9.constructor.name}" already defined in the metadata`, n12), c7.value = n12.value = a11.value)), null != n12.readOnly && (c7.readOnly = n12.readOnly);
    const f6 = n12.aliasOf;
    if (f6) {
      const t7 = "string" == typeof f6 ? f6 : f6.source, e11 = "string" == typeof f6 ? null : true === f6.overridable;
      let r9;
      c7.dependsOn = [t7], c7.get = function() {
        let e12 = o4(this, t7);
        if ("function" == typeof e12) {
          r9 || (r9 = t7.split(".").slice(0, -1).join("."));
          const o15 = o4(this, r9);
          o15 && (e12 = e12.bind(o15));
        }
        return e12;
      }, c7.readOnly || (c7.set = e11 ? function(t8) {
        this._override(i8, t8);
      } : function(e12) {
        t4(this, t7, e12);
      });
    }
    const p7 = n12.type, u7 = n12.types;
    if (!c7.cast) {
      let t7;
      p7 && false !== n12.useTypeForAutocast ? t7 = v2(p7) : u7 && (t7 = Array.isArray(u7) ? $(x(u7[0])) : x(u7)), n12.cast = h2(n12.cast, t7);
    }
    c2(c7, n12), n12.range && (c7.cast = l(c7.cast, n12.range));
  };
}
function j2(t7, e11, r9) {
  const o15 = o6(t7, r9);
  o15.json || (o15.json = {});
  let n12 = o15.json;
  return void 0 !== e11 && (n12.origins || (n12.origins = {}), n12.origins[e11] || (n12.origins[e11] = {}), n12 = n12.origins[e11]), n12;
}
function v2(t7) {
  let e11 = 0, r9 = t7;
  if (C(t7)) return I(t7);
  for (; Array.isArray(r9) && 1 === r9.length && "string" != typeof r9[0] && "number" != typeof r9[0]; ) r9 = r9[0], e11++;
  const o15 = r9;
  if (T(o15)) return 0 === e11 ? S(o15) : M(S(o15), e11);
  if (1 === e11) return j(o15);
  if (e11 > 1) return N(o15, e11);
  const l6 = t7;
  return l6.from ? l6.from : w(l6);
}
function h2(t7, e11) {
  if (t7 || e11) return t7 ? e11 ? (r9, o15) => e11(t7(r9, o15), o15) : t7 : e11;
}

// node_modules/@arcgis/core/core/Warning.js
var t5 = class {
  constructor(t7, e11, i8) {
    this.name = t7, this.details = i8, this.type = "warning", this.message = e11 ? o(e11, i8) : "";
  }
  toString() {
    const { name: s9, message: t7 } = this;
    return `[${s9}]: ${t7}`;
  }
};

// node_modules/@arcgis/core/webdoc/support/unsupportedErrors.js
var o7 = ["layer", "property", "renderer", "symbol", "symbol-layer", "url", "visual-variable", "type", "elevation-profile-line", "field-configuration-field-format"].map((e11) => `${e11}:unsupported`);
var n5 = new Set(o7);
function t6(e11, r9, o15) {
  if (!e11) return;
  const n12 = `${e11.origin}/${e11.layerContainerType || "operational-layers"}`;
  e11?.messages?.push(p2("layer", `Layer (${r9.title}, ${r9.id}) of type '${r9.declaredClass}' is not supported in the context of '${n12}'${o15 ? `: ${o15}` : ""}`, { layer: r9 }));
}
function i4(e11, r9, o15) {
  if (!e11) return;
  const n12 = `${e11.origin}/${e11.layerContainerType || "operational-layers"}`;
  e11?.messages?.push(p2("property", `Property '${r9}' is not supported in the context of '${n12}'${o15 ? `: ${o15}` : ""}`));
}
function s4(e11, r9, o15, n12) {
  if (!e11) return;
  const t7 = `${e11.origin}/${e11.layerContainerType || "operational-layers"}`;
  e11?.messages?.push(p2("symbol", `Symbol '${r9.declaredClass}' is not supported in the context of '${t7}'${o15 ? `: ${o15}` : ""}`, n12));
}
function a5(o15, n12, t7, i8, s9) {
  o15 && o15?.messages?.push(l2("warning" === n12 ? t5 : r, t7, i8, s9));
}
function p2(r9, o15, n12) {
  return l2(r, r9, o15, n12);
}
function l2(e11, r9, o15, n12) {
  return new e11(`${r9}:unsupported`, o15, n12);
}

// node_modules/@arcgis/core/core/accessorSupport/beforeDestroy.js
var o8 = /* @__PURE__ */ Symbol("Accessor-beforeDestroy");

// node_modules/@arcgis/core/core/accessorSupport/Lifecycle.js
var I2 = { INITIALIZING: 0, CONSTRUCTING: 1, CONSTRUCTED: 2, DESTROYING: 3, DESTROYED: 4 };

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/originAliases.js
function n6(n12) {
  if (n12.json && n12.json.origins) {
    const o15 = n12.json.origins, e11 = { "web-document": ["web-scene", "web-map"] };
    for (const n13 in e11) if (o15[n13]) {
      const s9 = o15[n13];
      e11[n13].forEach((n14) => {
        o15[n14] = s9;
      }), delete o15[n13];
    }
  }
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/type.js
function e8(e11) {
  return !!e11 && e11.prototype?.declaredClass && 0 === e11.prototype.declaredClass.indexOf("esri.core.Collection");
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/utils.js
function n7(n12, i8) {
  return o9(n12, "any", i8?.origin);
}
function i5(n12, i8) {
  return o9(n12, "read", i8?.origin);
}
function r4(n12, i8) {
  return o9(n12, "write", i8?.origin);
}
function o9(n12, i8, r9) {
  let o15 = n12?.json;
  if (o15?.origins && r9) {
    let n13;
    n13 = "link-chart" === r9 ? o15.origins[r9] && ("any" === i8 || i8 in o15.origins[r9]) ? o15.origins[r9] : o15.origins["web-map"] : o15.origins[r9], n13 && ("any" === i8 || i8 in n13) && (o15 = n13);
  }
  return o15;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var p3 = () => n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");
function u4(t7, r9, o15) {
  t7 && (!o15 && !r9.read || r9.read?.reader || false === r9.read?.enabled || m3(t7) && e("read.reader", s5(t7), r9));
}
function s5(t7) {
  const e11 = t7.ndimArray ?? 0;
  if (e11 > 1) return a6(t7);
  if (1 === e11) return d2(t7);
  if ("type" in t7 && l3(t7.type)) {
    const e12 = t7.type.prototype?.itemType?.Type, r9 = d2("function" == typeof e12 ? { type: e12 } : { types: e12 });
    return (e13, o15, n12) => {
      const i8 = r9(e13, o15, n12);
      return i8 ? new t7.type(i8) : i8;
    };
  }
  return y2(t7);
}
function y2(t7) {
  return "type" in t7 ? f2(t7.type) : v3(t7.types);
}
function f2(t7) {
  return t7.prototype.read ? (e11, r9, o15) => {
    if (null == e11) return e11;
    const n12 = typeof e11;
    if ("object" !== n12) return void p3().error(`Expected JSON value of type 'object' to deserialize type '${t7.prototype.declaredClass}', but got '${n12}'`);
    const i8 = new t7();
    return i8.read(e11, o15), i8;
  } : t7.fromJSON;
}
function c3(t7, e11, r9, o15) {
  return 0 !== o15 && Array.isArray(e11) ? e11.map((e12) => c3(t7, e12, r9, o15 - 1)) : t7(e11, void 0, r9);
}
function a6(t7) {
  const e11 = y2(t7), r9 = c3.bind(null, e11), o15 = t7.ndimArray ?? 0;
  return (t8, e12, n12) => {
    if (null == t8) return t8;
    t8 = r9(t8, n12, o15);
    let i8 = o15, p7 = t8;
    for (; i8 > 0 && Array.isArray(p7); ) i8--, p7 = p7[0];
    if (void 0 !== p7) for (let r10 = 0; r10 < i8; r10++) t8 = [t8];
    return t8;
  };
}
function d2(t7) {
  const e11 = y2(t7);
  return (t8, r9, o15) => {
    if (null == t8) return t8;
    if (Array.isArray(t8)) {
      const r10 = [];
      for (const n13 of t8) {
        const t9 = e11(n13, void 0, o15);
        void 0 !== t9 && r10.push(t9);
      }
      return r10;
    }
    const n12 = e11(t8, void 0, o15);
    return void 0 !== n12 ? [n12] : void 0;
  };
}
function l3(t7) {
  if (!e8(t7)) return false;
  const e11 = t7.prototype.itemType;
  return !(!e11 || !e11.Type) && ("function" == typeof e11.Type ? j3(e11.Type) : g2(e11.Type));
}
function m3(t7) {
  return "types" in t7 ? g2(t7.types) : j3(t7.type);
}
function j3(t7) {
  return !Array.isArray(t7) && (!!t7 && ("object" == typeof t7 || "function" == typeof t7) && t7.prototype && ("read" in t7.prototype || "fromJSON" in t7 || l3(t7)));
}
function g2(t7) {
  for (const e11 in t7.typeMap) {
    if (!j3(t7.typeMap[e11])) return false;
  }
  return true;
}
function v3(t7) {
  let e11 = null;
  const r9 = t7.errorContext ?? "type", o15 = t7.validate;
  return (n12, u7, s9) => {
    if (null == n12) return n12;
    const y6 = typeof n12;
    if ("object" !== y6) return void p3().error(`Expected JSON value of type 'object' to deserialize, but got '${y6}'`);
    e11 || (e11 = A2(t7));
    const f6 = t7.key;
    if ("string" != typeof f6) return;
    const c7 = n12[b2(f6, e11, s9)], a11 = c7 ? e11[c7] : t7.defaultKeyValue ? t7.typeMap[t7.defaultKeyValue] : void 0;
    if (!a11) {
      const t8 = `Type '${c7 || "unknown"}' is not supported`;
      return s9?.messages && n12 && a5(s9, "warning", r9, t8, { definition: n12, context: s9 }), void p3().error(t8);
    }
    const d3 = new a11();
    return d3.read(n12, s9), o15 ? o15(d3) : d3;
  };
}
function b2(t7, e11, o15) {
  const i8 = Object.values(e11)[0], p7 = r3(i8.prototype)[t7], u7 = i5(p7, o15), s9 = u7?.read?.source;
  return s9 && "string" == typeof s9 ? s9 : t7;
}
function A2(t7) {
  const e11 = {};
  for (const o15 in t7.typeMap) {
    const n12 = t7.typeMap[o15], i8 = r3(n12.prototype);
    if ("function" == typeof t7.key) continue;
    const p7 = i8[t7.key];
    if (!p7) continue;
    if (p7.json?.type && Array.isArray(p7.json.type) && 1 === p7.json.type.length && "string" == typeof p7.json.type[0]) {
      e11[p7.json.type[0]] = n12;
      continue;
    }
    const u7 = p7.json?.write;
    if (!u7?.writer) {
      e11[o15] = n12;
      continue;
    }
    const s9 = u7.target, y6 = "string" == typeof s9 ? s9 : t7.key, f6 = {};
    u7.writer(o15, f6, y6), f6[y6] && (e11[f6[y6]] = n12);
  }
  return e11;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/shorthands.js
function e9(e11) {
  if (e11.json || (e11.json = {}), o10(e11.json), n8(e11.json), r5(e11.json), e11.json.origins) for (const t7 in e11.json.origins) o10(e11.json.origins[t7]), n8(e11.json.origins[t7]), r5(e11.json.origins[t7]);
  return true;
}
function r5(e11) {
  e11.name && (e11.read && "object" == typeof e11.read ? void 0 === e11.read.source && (e11.read.source = e11.name) : e11.read = { source: e11.name }, e11.write && "object" == typeof e11.write ? void 0 === e11.write.target && (e11.write.target = e11.name) : e11.write = { target: e11.name });
}
function o10(e11) {
  "boolean" == typeof e11.read ? e11.read = { enabled: e11.read } : "function" == typeof e11.read ? e11.read = { enabled: true, reader: e11.read } : e11.read && "object" == typeof e11.read && void 0 === e11.read.enabled && (e11.read.enabled = true);
}
function n8(e11) {
  "boolean" == typeof e11.write ? e11.write = { enabled: e11.write } : "function" == typeof e11.write ? e11.write = { enabled: true, writer: e11.write } : e11.write && "object" == typeof e11.write && void 0 === e11.write.enabled && (e11.write.enabled = true);
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js
function o11(r9, t7) {
  if (!t7.write || t7.write.writer || false === t7.write.enabled && !t7.write.overridePolicy) return;
  const n12 = r9?.ndimArray ?? 0;
  r9 && (1 === n12 || "type" in r9 && e8(r9.type)) ? t7.write.writer = a7 : n12 > 1 ? t7.write.writer = l4(n12) : t7.types ? Array.isArray(t7.types) ? t7.write.writer = f3(t7.types[0]) : t7.write.writer = i6(t7.types) : t7.write.writer = s6;
}
function i6(r9) {
  return (t7, e11, n12, o15) => t7 ? u5(t7, r9, o15) ? s6(t7, e11, n12, o15) : void 0 : s6(t7, e11, n12, o15);
}
function u5(t7, e11, o15) {
  for (const r9 in e11.typeMap) if (t7 instanceof e11.typeMap[r9]) return true;
  if (o15?.messages) {
    const i8 = e11.errorContext ?? "type", u7 = `Values of type '${("function" != typeof e11.key ? t7[e11.key] : t7.declaredClass) ?? "Unknown"}' cannot be written`;
    o15 && o15.messages && t7 && a5(o15, "error", i8, u7, { definition: t7, context: o15 }), n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(u7);
  }
  return false;
}
function f3(r9) {
  return (t7, e11, n12, o15) => {
    if (!t7 || !Array.isArray(t7)) return s6(t7, e11, n12, o15);
    return s6(t7.filter((t8) => u5(t8, r9, o15)), e11, n12, o15);
  };
}
function s6(r9, e11, n12, o15) {
  e(n12, p4(r9, o15), e11);
}
function p4(r9, t7) {
  return r9 && "function" == typeof r9.write ? r9.write({}, t7) : r9 && "function" == typeof r9.toJSON ? r9.toJSON() : "number" == typeof r9 ? y3(r9) : r9;
}
function y3(r9) {
  return r9 === -1 / 0 ? -Number.MAX_VALUE : r9 === 1 / 0 ? Number.MAX_VALUE : isNaN(r9) ? null : r9;
}
function a7(r9, e11, n12, o15) {
  let i8;
  null === r9 ? i8 = null : r9 && "function" == typeof r9.map ? (i8 = r9.map((r10) => p4(r10, o15)), "function" == typeof i8.toArray && (i8 = i8.toArray())) : i8 = [p4(r9, o15)], e(n12, i8, e11);
}
function c4(r9, t7, e11) {
  return 0 !== e11 && Array.isArray(r9) ? r9.map((r10) => c4(r10, t7, e11 - 1)) : p4(r9, t7);
}
function l4(r9) {
  return (e11, n12, o15, i8) => {
    let u7;
    if (null === e11) u7 = null;
    else {
      u7 = c4(e11, i8, r9);
      let t7 = r9, n13 = u7;
      for (; t7 > 0 && Array.isArray(n13); ) t7--, n13 = n13[0];
      if (void 0 !== n13) for (let r10 = 0; r10 < t7; r10++) u7 = [u7];
    }
    e(o15, u7, n12);
  };
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js
function s7(r9) {
  const e11 = n9(r9);
  if (r9.json.origins) for (const o15 in r9.json.origins) {
    const s9 = r9.json.origins[o15], n12 = s9.types ? p5(s9) : e11;
    u4(n12, s9, false), s9.types && !s9.write && r9.json.write?.enabled && (s9.write = __spreadValues({}, r9.json.write)), o11(n12, s9);
  }
  u4(e11, r9.json, true), o11(e11, r9.json);
}
function n9(r9) {
  return r9.json.types ? a8(r9.json) : r9.type ? y4(r9) : a8(r9);
}
function p5(r9) {
  return r9.type ? y4(r9) : a8(r9);
}
function y4(e11) {
  if (!e11.type) return;
  let t7 = 0, o15 = e11.type;
  for (; Array.isArray(o15) && !T(o15); ) o15 = o15[0], t7++;
  return { type: o15, ndimArray: t7 };
}
function a8(r9) {
  if (!r9.types) return;
  let e11 = 0, t7 = r9.types;
  for (; Array.isArray(t7); ) t7 = t7[0], e11++;
  return { types: t7, ndimArray: e11 };
}
function f4(r9) {
  e9(r9) && (n6(r9), s7(r9));
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var n10 = /* @__PURE__ */ new Set();
var c5 = /* @__PURE__ */ new Set();
function l5(e11) {
  return (s9) => {
    e11 ??= "esri.core.Accessor", s9.prototype.declaredClass = e11, p6(s9);
    const i8 = [], l6 = [];
    let a11 = s9.prototype;
    for (; a11; ) a11.hasOwnProperty("initialize") && !n10.has(a11.initialize) && (n10.add(a11.initialize), i8.push(a11.initialize)), a11.hasOwnProperty("destroy") && !c5.has(a11.destroy) && (c5.add(a11.destroy), l6.push(a11.destroy)), a11 = Object.getPrototypeOf(a11);
    n10.clear(), c5.clear();
    const u7 = class extends s9 {
      constructor(...e12) {
        if (super(...e12), this.constructor === u7 && "function" == typeof this.postscript) {
          if (i8.length && Object.defineProperty(this, "initialize", { enumerable: false, configurable: true, value() {
            for (let e13 = i8.length - 1; e13 >= 0; e13--) i8[e13].call(this);
          } }), l6.length) {
            let e13 = false;
            const o15 = this[o8];
            Object.defineProperty(this, "destroy", { enumerable: false, configurable: true, value() {
              if (!e13) {
                this.__accessor__.lifecycle = I2.DESTROYING, e13 = true, o15.call(this);
                for (let e14 = 0; e14 < l6.length; e14++) l6[e14].call(this);
              }
            } });
          }
          Object.defineProperty(this, Symbol.dispose, { enumerable: false, configurable: true, value() {
            this.destroy();
          } }), this.postscript();
        }
      }
    };
    u7.__accessorMetadata__ = r3(s9.prototype), u7.prototype.declaredClass = e11;
    const f6 = (e11 || "AccessorSubclass").split(".").slice(-1)[0];
    return Object.defineProperty(u7.prototype, Symbol.toStringTag, { value: f6, configurable: true, writable: true, enumerable: false }), u7;
  };
}
function a9(e11, { get: t7, value: r9 }) {
  return null == t7 ? function() {
    const t8 = this.__accessor__, o15 = t8.propertiesByName.get(e11);
    if (void 0 === o15) return;
    t8.mutable && a2(o15);
    const i8 = t8.store;
    return i8.has(e11) ? i8.get(e11) : r9;
  } : function() {
    const r10 = this.__accessor__;
    return r10.propertiesByName.get(e11)?.getComputed(r10, t7);
  };
}
function u6(e11, t7, r9) {
  Object.defineProperty(e11, t7, { enumerable: true, configurable: true, writable: true, value: r9 });
}
function f5(e11, t7) {
  return t7.readOnly && t7.constructOnly ? function(o15) {
    const s9 = this.__accessor__;
    if (s9) {
      if (s9.mutable) return s9.initialized && t7.readOnly ? y5("read-only", e11) : s9.lifecycle === I2.CONSTRUCTED && t7.constructOnly ? y5("construct-only", e11) : void s9.set(e11, o15);
    } else u6(this, e11, o15);
  } : t7.readOnly ? function(r9) {
    const o15 = this.__accessor__;
    if (o15) {
      if (o15.mutable) return o15.initialized && t7.readOnly ? y5("read-only", e11) : void o15.set(e11, r9);
    } else u6(this, e11, r9);
  } : t7.constructOnly ? function(o15) {
    const s9 = this.__accessor__;
    if (s9) {
      if (s9.mutable) return s9.lifecycle === I2.CONSTRUCTED && t7.constructOnly ? y5("construct-only", e11) : void s9.set(e11, o15);
    } else u6(this, e11, o15);
  } : function(t8) {
    const r9 = this.__accessor__;
    r9 ? r9.mutable && r9.set(e11, t8) : u6(this, e11, t8);
  };
}
function p6(e11) {
  const t7 = e11.prototype, r9 = r3(t7), s9 = {};
  for (const o15 of Object.getOwnPropertyNames(r9)) {
    const e12 = r9[o15];
    f4(e12), s9[o15] = { enumerable: true, configurable: true, get: a9(o15, e12), set: f5(o15, e12) };
  }
  Object.defineProperties(e11.prototype, s9);
}
var y5 = (t7, r9) => {
  n.getLogger("esri.core.Accessor").error(`cannot assign to ${t7} property '${r9}'`);
};

// node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
function r6(r9, a11 = {}) {
  const t7 = r9 instanceof o3 ? r9 : new o3(r9, a11), { alwaysWriteDefaults: l6, default: o15, ignoreUnknown: s9 = true, name: i8, nonNullable: u7, readOnly: p7 = false } = a11;
  return m2({ type: s9 ? t7.apiValues : String, json: { type: t7.jsonValues, default: o15, name: i8, read: !p7 && { reader: t7.read }, write: { writer: t7.write, alwaysWriteDefaults: l6 } }, nonNullable: u7, readOnly: p7 });
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
function o12(o15, e11, t7) {
  let a11, c7;
  return void 0 === e11 || Array.isArray(e11) ? (c7 = o15, t7 = e11, a11 = [void 0]) : (c7 = e11, a11 = Array.isArray(o15) ? o15 : [o15]), (o16, e12) => {
    const d3 = o16.constructor.prototype;
    a11.forEach((a12) => {
      const s9 = j2(o16, a12, c7);
      s9.read && "object" == typeof s9.read || (s9.read = {}), s9.read.reader = d3[e12], t7 && (s9.read.source = (s9.read.source || []).concat(t7));
    });
  };
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
function r7(r9, o15, e11) {
  let i8, n12;
  return void 0 === o15 ? (n12 = r9, i8 = [void 0]) : "string" != typeof o15 ? (n12 = r9, i8 = [void 0], e11 = o15) : (n12 = o15, i8 = Array.isArray(r9) ? r9 : [r9]), (r10, o16) => {
    const p7 = r10.constructor.prototype;
    for (const c7 of i8) {
      const i9 = j2(r10, c7, n12);
      i9.write && "object" == typeof i9.write || (i9.write = {}), e11 && (i9.write.target = e11), i9.write.writer = p7[o16];
    }
  };
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var r8 = Object.prototype.toString;
function o13(n12) {
  const r9 = "__accessorMetadata__" in n12 ? w(n12) : n12;
  return function(...t7) {
    if (t7.push(r9), "number" == typeof t7[2]) throw new Error("Using @cast has parameter decorator is not supported since 4.16");
    return e10.apply(this, t7);
  };
}
function e10(t7, r9, o15, e11) {
  o6(t7, r9).cast = e11;
}
function i7(t7) {
  return (r9, o15) => {
    o6(r9, t7).cast = r9[o15];
  };
}
function s8(...t7) {
  if (3 !== t7.length || "string" != typeof t7[1]) return 1 === t7.length && "[object Function]" === r8.call(t7[0]) ? o13(t7[0]) : 1 === t7.length && "string" == typeof t7[0] ? i7(t7[0]) : void 0;
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
function n11(n12) {
  return (r9, t7) => {
    r9[t7] = n12;
  };
}

// node_modules/@arcgis/core/core/accessorSupport/decorators.js
var a10 = m2;
var c6 = l5;
function m4(...r9) {
  return s8(...r9);
}

export {
  e4 as e,
  e5 as e2,
  u2 as u,
  o4 as o,
  s,
  I2 as I,
  u3 as u2,
  a3 as a,
  s2,
  l,
  m,
  w,
  A,
  x,
  D,
  _,
  B,
  r3 as r,
  o6 as o2,
  t4 as t,
  m2,
  j2 as j,
  s8 as s3,
  o8 as o3,
  n7 as n,
  i5 as i,
  r4 as r2,
  t5 as t2,
  n5 as n2,
  t6 as t3,
  i4 as i2,
  s4,
  a5 as a2,
  p2 as p,
  s5,
  y3 as y,
  l5 as l2,
  r6 as r3,
  o12 as o4,
  n11 as n3,
  r7 as r4,
  a10 as a3,
  c6 as c,
  m4 as m3
};
//# sourceMappingURL=chunk-7ELXYOAW.js.map
