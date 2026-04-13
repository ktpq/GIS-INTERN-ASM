import {
  o as o3
} from "./chunk-O4A47ZEM.js";
import {
  e as e2
} from "./chunk-O3PP4I47.js";
import {
  I,
  o as o2
} from "./chunk-XUZBRFKA.js";
import {
  a as a2,
  u
} from "./chunk-E73BLMZG.js";
import {
  a,
  e,
  has,
  n2 as n,
  o3 as o,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var t = () => n.getLogger("esri.core.accessorSupport.ensureTypes");
function r2(e7) {
  if (null == e7) return e7;
  const n11 = new Date(e7);
  return isNaN(n11.getTime()) ? (t().error("Accessor#set", `Invalid date value: '${e7}', falling back to current date`), /* @__PURE__ */ new Date()) : n11;
}
function o4(e7) {
  return null == e7 ? e7 : !!e7;
}
function u2(e7) {
  return null == e7 ? e7 : e7.toString();
}
function a3(e7, n11 = 0) {
  return null == e7 ? e7 : (e7 = parseFloat(e7), isNaN(e7) ? n11 : e7);
}
function s(e7) {
  return null == e7 ? e7 : Math.round(parseFloat(e7));
}
function c(e7) {
  return null;
}
function l(e7, n11) {
  return (t5) => {
    let r9 = e7(t5);
    return null != n11.step && (r9 = Math.round(r9 / n11.step) * n11.step), null != n11.min && (r9 = Math.max(n11.min, r9)), null != n11.max && (r9 = Math.min(n11.max, r9)), r9;
  };
}
function i(e7) {
  return e7?.constructor && void 0 !== e7.constructor.__accessorMetadata__;
}
function f(e7, n11) {
  return null != n11 && e7 && !(n11 instanceof e7);
}
function p(e7) {
  return e7 && "isCollection" in e7;
}
function y(e7) {
  return e7?.Type ? "function" == typeof e7.Type ? e7.Type : e7.Type.base : null;
}
function v(e7, n11) {
  if (!n11?.constructor || !p(n11.constructor)) return g(e7, n11) ? n11 : new e7(n11);
  const t5 = y(e7.prototype.itemType), r9 = y(n11.constructor.prototype.itemType);
  return t5 ? r9 ? t5 === r9 ? n11 : t5.prototype.isPrototypeOf(r9.prototype) ? new e7(n11) : (g(e7, n11), n11) : new e7(n11) : n11;
}
function g(e7, n11) {
  return !!i(n11) && (t().error("Accessor#set", "Assigning an instance of '" + (n11.declaredClass || "unknown") + "' which is not a subclass of '" + h(e7) + "'"), true);
}
function m(e7, n11) {
  return null == n11 ? n11 : p(e7) ? v(e7, n11) : f(e7, n11) ? g(e7, n11) ? n11 : new e7(n11) : n11;
}
function h(e7) {
  return e7?.prototype?.declaredClass || "unknown";
}
var d = /* @__PURE__ */ new WeakMap();
function b(e7) {
  switch (e7) {
    case Number:
      return (e8) => a3(e8);
    case D:
      return s;
    case Boolean:
      return o4;
    case String:
      return u2;
    case Date:
      return r2;
    case _:
      return c;
    default:
      return e2(d, e7, () => m.bind(null, e7));
  }
}
function w(e7, n11) {
  const t5 = b(e7);
  return 1 === arguments.length ? t5 : t5(n11);
}
function A(e7) {
  const n11 = b(e7);
  return (e8) => n11(e8);
}
function $(e7, n11, t5) {
  return 1 === arguments.length ? $.bind(null, e7) : n11 ? Array.isArray(n11) ? n11.map((n12) => e7(n12, t5)) : [e7(n11, t5)] : n11;
}
function j(e7, n11) {
  return 1 === arguments.length ? $((n12) => w(e7, n12)) : $((n12) => w(e7, n12), n11);
}
function k(e7, n11, t5) {
  return 0 !== n11 && Array.isArray(t5) ? t5.map((t6) => k(e7, n11 - 1, t6)) : e7(t5);
}
function M(e7, n11, t5) {
  if (2 === arguments.length) return (t6) => M(e7, n11, t6);
  if (!t5) return t5;
  t5 = k(e7, n11, t5);
  let r9 = n11, o14 = t5;
  for (; r9 > 0 && Array.isArray(o14); ) r9--, o14 = o14[0];
  if (void 0 !== o14) for (let u6 = 0; u6 < r9; u6++) t5 = [t5];
  return t5;
}
function N(e7, n11, t5) {
  return 2 === arguments.length ? M((n12) => w(e7, n12), n11) : M((n12) => w(e7, n12), n11, t5);
}
function T(e7) {
  return !!Array.isArray(e7) && !e7.some((n11) => {
    const t5 = typeof n11;
    return !("string" === t5 || "number" === t5 || "function" === t5 && e7.length > 1);
  });
}
function S(e7, n11) {
  if (2 === arguments.length) return S(e7).call(null, n11);
  const r9 = /* @__PURE__ */ new Set(), o14 = e7.filter((e8) => "function" != typeof e8), u6 = e7.filter((e8) => "function" == typeof e8);
  for (const t5 of e7) "string" != typeof t5 && "number" != typeof t5 || r9.add(t5);
  let a11 = null, s8 = null;
  return (e8, n12) => {
    if (null == e8) return e8;
    const c7 = typeof e8, l6 = "string" === c7 || "number" === c7;
    return l6 && (r9.has(e8) || u6.some((e9) => "string" === c7 && e9 === String || "number" === c7 && e9 === Number)) || "object" === c7 && u6.some((n13) => !f(n13, e8)) ? e8 : (l6 && o14.length ? (a11 || (a11 = o14.map((e9) => "string" == typeof e9 ? `'${e9}'` : `${e9}`).join(", ")), t().error("Accessor#set", `'${e8}' is not a valid value for this property, only the following values are valid: ${a11}`)) : "object" == typeof e8 && u6.length ? (s8 || (s8 = u6.map((e9) => h(e9)).join(", ")), t().error("Accessor#set", `'${e8}' is not a valid value for this property, value must be one of ${s8}`)) : t().error("Accessor#set", `'${e8}' is not a valid value for this property`), n12 && (n12.valid = false), null);
  };
}
function x(e7, n11) {
  if (2 === arguments.length) return x(e7).call(null, n11);
  const r9 = {}, o14 = [], u6 = [];
  for (const t5 in e7.typeMap) {
    const n12 = e7.typeMap[t5];
    r9[t5] = w(n12), o14.push(h(n12)), u6.push(t5);
  }
  const a11 = () => `'${o14.join("', '")}'`, s8 = () => `'${u6.join("', '")}'`, c7 = "string" == typeof e7.key ? (n12) => n12[e7.key] : e7.key;
  return (n12) => {
    if (e7.base && !f(e7.base, n12)) return n12;
    if (null == n12) return n12;
    const o15 = c7(n12) || e7.defaultKeyValue, u7 = r9[o15];
    if (!u7) return t().error("Accessor#set", `Invalid property value, value needs to be one of ${a11()}, or a plain object that can autocast (having .type = ${s8()})`), null;
    if (!f(e7.typeMap[o15], n12)) return n12;
    if ("string" == typeof e7.key && !i(n12)) {
      const t5 = {};
      for (const r10 in n12) r10 !== e7.key && (t5[r10] = n12[r10]);
      return u7(t5);
    }
    return u7(n12);
  };
}
var D = class {
};
var _ = class {
};
var B = { native: (e7) => ({ type: "native", value: e7 }), array: (e7) => ({ type: "array", value: e7 }), oneOf: (e7) => ({ type: "one-of", values: e7 }) };
function C(e7) {
  if (!e7 || "object" != typeof e7 && "function" != typeof e7 || !("type" in e7)) return false;
  switch (e7.type) {
    case "native":
    case "array":
    case "one-of":
      return true;
  }
  return false;
}
function I2(e7) {
  switch (e7.type) {
    case "native":
      return w(e7.value);
    case "array":
      return $(I2(e7.value));
    case "one-of":
      return F(e7);
    default:
      return null;
  }
}
function F(e7) {
  let n11 = null;
  return (r9, o14) => O(r9, e7) ? r9 : (null == n11 && (n11 = L(e7)), t().error("Accessor#set", `Invalid property value, value needs to be of type ${n11}`), o14 && (o14.valid = false), null);
}
function L(e7) {
  switch (e7.type) {
    case "native":
      switch (e7.value) {
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
          return h(e7.value);
      }
    case "array":
      return `array of ${L(e7.value)}`;
    case "one-of": {
      const n11 = e7.values.map((e8) => L(e8));
      return `one of ${n11.slice(0, -1)} or ${n11[n11.length - 1]}`;
    }
  }
  return "unknown";
}
function O(e7, n11) {
  if (null == e7) return true;
  switch (n11.type) {
    case "native":
      switch (n11.value) {
        case Number:
        case D:
          return "number" == typeof e7;
        case Boolean:
          return "boolean" == typeof e7;
        case String:
          return "string" == typeof e7;
        case _:
          return null === e7;
      }
      return e7 instanceof n11.value;
    case "array":
      return !!Array.isArray(e7) && !e7.some((e8) => !O(e8, n11.value));
    case "one-of":
      return n11.values.some((n12) => O(e7, n12));
  }
}

// node_modules/@arcgis/core/core/accessorSupport/metadata.js
function r3(e7) {
  let r9 = e7.constructor.__accessorMetadata__;
  const o14 = Object.prototype.hasOwnProperty.call(e7.constructor, "__accessorMetadata__");
  if (r9) {
    if (!o14) {
      r9 = Object.create(r9);
      for (const e8 in r9) r9[e8] = a(r9[e8]);
      Object.defineProperty(e7.constructor, "__accessorMetadata__", { value: r9, enumerable: false, configurable: true, writable: true });
    }
  } else r9 = {}, Object.defineProperty(e7.constructor, "__accessorMetadata__", { value: r9, enumerable: false, configurable: true, writable: true });
  return e7.constructor.__accessorMetadata__;
}
function o5(t5, e7) {
  const o14 = r3(t5);
  let c7 = o14[e7];
  return c7 || (c7 = o14[e7] = {}), c7;
}
function c2(t5, r9) {
  return u(t5, r9, n2);
}
var a4 = /^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;
function n2(t5) {
  return a4.test(t5) ? "replace" : "merge";
}

// node_modules/@arcgis/core/core/accessorSupport/set.js
function t2(o14, e7, s8) {
  if (o14 && e7) if ("object" == typeof e7) for (const r9 of Object.getOwnPropertyNames(e7)) t2(o14, r9, e7[r9]);
  else {
    if (e7.includes(".")) {
      const n11 = e7.split("."), i7 = n11.splice(-1, 1)[0];
      return void t2(o2(o14, n11), i7, s8);
    }
    const i6 = o14.__accessor__;
    null != i6 && n3(e7, i6), o14[e7] = s8;
  }
}
function n3(r9, t5) {
  if (has("esri-unknown-property-errors") && !e3(r9, t5)) throw new r("set:unknown-property", s2(r9, t5));
}
function e3(o14, r9) {
  return null != r9.metadata[o14];
}
function s2(o14, r9) {
  return "setting unknown property '" + o14 + "' on instance of " + r9.host.declaredClass;
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
function m2(n11 = {}) {
  return (s8, i6) => {
    if (s8 === Function.prototype) throw new Error(`Inappropriate use of @property() on a static field: ${s8.name}.${i6}. Accessor does not support static properties.`);
    const a11 = Object.getOwnPropertyDescriptor(s8, i6), c7 = o5(s8, i6);
    a11 && (a11.get || a11.set ? (c7.get = a11.get || c7.get, c7.set = a11.set || c7.set) : "value" in a11 && ("value" in n11 && n.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${i6}" on "${s8.constructor.name}" already defined in the metadata`, n11), c7.value = n11.value = a11.value)), null != n11.readOnly && (c7.readOnly = n11.readOnly);
    const f6 = n11.aliasOf;
    if (f6) {
      const t5 = "string" == typeof f6 ? f6 : f6.source, e7 = "string" == typeof f6 ? null : true === f6.overridable;
      let r9;
      c7.dependsOn = [t5], c7.get = function() {
        let e8 = o2(this, t5);
        if ("function" == typeof e8) {
          r9 || (r9 = t5.split(".").slice(0, -1).join("."));
          const o14 = o2(this, r9);
          o14 && (e8 = e8.bind(o14));
        }
        return e8;
      }, c7.readOnly || (c7.set = e7 ? function(t6) {
        this._override(i6, t6);
      } : function(e8) {
        t2(this, t5, e8);
      });
    }
    const p7 = n11.type, u6 = n11.types;
    if (!c7.cast) {
      let t5;
      p7 && false !== n11.useTypeForAutocast ? t5 = v2(p7) : u6 && (t5 = Array.isArray(u6) ? $(x(u6[0])) : x(u6)), n11.cast = h2(n11.cast, t5);
    }
    c2(c7, n11), n11.range && (c7.cast = l(c7.cast, n11.range));
  };
}
function j2(t5, e7, r9) {
  const o14 = o5(t5, r9);
  o14.json || (o14.json = {});
  let n11 = o14.json;
  return void 0 !== e7 && (n11.origins || (n11.origins = {}), n11.origins[e7] || (n11.origins[e7] = {}), n11 = n11.origins[e7]), n11;
}
function v2(t5) {
  let e7 = 0, r9 = t5;
  if (C(t5)) return I2(t5);
  for (; Array.isArray(r9) && 1 === r9.length && "string" != typeof r9[0] && "number" != typeof r9[0]; ) r9 = r9[0], e7++;
  const o14 = r9;
  if (T(o14)) return 0 === e7 ? S(o14) : M(S(o14), e7);
  if (1 === e7) return j(o14);
  if (e7 > 1) return N(o14, e7);
  const l6 = t5;
  return l6.from ? l6.from : w(l6);
}
function h2(t5, e7) {
  if (t5 || e7) return t5 ? e7 ? (r9, o14) => e7(t5(r9, o14), o14) : t5 : e7;
}

// node_modules/@arcgis/core/core/Warning.js
var t3 = class {
  constructor(t5, e7, i6) {
    this.name = t5, this.details = i6, this.type = "warning", this.message = e7 ? o(e7, i6) : "";
  }
  toString() {
    const { name: s8, message: t5 } = this;
    return `[${s8}]: ${t5}`;
  }
};

// node_modules/@arcgis/core/webdoc/support/unsupportedErrors.js
var o6 = ["layer", "property", "renderer", "symbol", "symbol-layer", "url", "visual-variable", "type", "elevation-profile-line", "field-configuration-field-format"].map((e7) => `${e7}:unsupported`);
var n4 = new Set(o6);
function t4(e7, r9, o14) {
  if (!e7) return;
  const n11 = `${e7.origin}/${e7.layerContainerType || "operational-layers"}`;
  e7?.messages?.push(p2("layer", `Layer (${r9.title}, ${r9.id}) of type '${r9.declaredClass}' is not supported in the context of '${n11}'${o14 ? `: ${o14}` : ""}`, { layer: r9 }));
}
function i2(e7, r9, o14) {
  if (!e7) return;
  const n11 = `${e7.origin}/${e7.layerContainerType || "operational-layers"}`;
  e7?.messages?.push(p2("property", `Property '${r9}' is not supported in the context of '${n11}'${o14 ? `: ${o14}` : ""}`));
}
function s3(e7, r9, o14, n11) {
  if (!e7) return;
  const t5 = `${e7.origin}/${e7.layerContainerType || "operational-layers"}`;
  e7?.messages?.push(p2("symbol", `Symbol '${r9.declaredClass}' is not supported in the context of '${t5}'${o14 ? `: ${o14}` : ""}`, n11));
}
function a5(o14, n11, t5, i6, s8) {
  o14 && o14?.messages?.push(l2("warning" === n11 ? t3 : r, t5, i6, s8));
}
function p2(r9, o14, n11) {
  return l2(r, r9, o14, n11);
}
function l2(e7, r9, o14, n11) {
  return new e7(`${r9}:unsupported`, o14, n11);
}

// node_modules/@arcgis/core/core/accessorSupport/beforeDestroy.js
var o7 = /* @__PURE__ */ Symbol("Accessor-beforeDestroy");

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/originAliases.js
function n5(n11) {
  if (n11.json && n11.json.origins) {
    const o14 = n11.json.origins, e7 = { "web-document": ["web-scene", "web-map"] };
    for (const n12 in e7) if (o14[n12]) {
      const s8 = o14[n12];
      e7[n12].forEach((n13) => {
        o14[n13] = s8;
      }), delete o14[n12];
    }
  }
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/type.js
function e4(e7) {
  return !!e7 && e7.prototype?.declaredClass && 0 === e7.prototype.declaredClass.indexOf("esri.core.Collection");
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/utils.js
function n6(n11, i6) {
  return o8(n11, "any", i6?.origin);
}
function i3(n11, i6) {
  return o8(n11, "read", i6?.origin);
}
function r4(n11, i6) {
  return o8(n11, "write", i6?.origin);
}
function o8(n11, i6, r9) {
  let o14 = n11?.json;
  if (o14?.origins && r9) {
    let n12;
    n12 = "link-chart" === r9 ? o14.origins[r9] && ("any" === i6 || i6 in o14.origins[r9]) ? o14.origins[r9] : o14.origins["web-map"] : o14.origins[r9], n12 && ("any" === i6 || i6 in n12) && (o14 = n12);
  }
  return o14;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var p3 = () => n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");
function u3(t5, r9, o14) {
  t5 && (!o14 && !r9.read || r9.read?.reader || false === r9.read?.enabled || m3(t5) && e("read.reader", s4(t5), r9));
}
function s4(t5) {
  const e7 = t5.ndimArray ?? 0;
  if (e7 > 1) return a6(t5);
  if (1 === e7) return d2(t5);
  if ("type" in t5 && l3(t5.type)) {
    const e8 = t5.type.prototype?.itemType?.Type, r9 = d2("function" == typeof e8 ? { type: e8 } : { types: e8 });
    return (e9, o14, n11) => {
      const i6 = r9(e9, o14, n11);
      return i6 ? new t5.type(i6) : i6;
    };
  }
  return y2(t5);
}
function y2(t5) {
  return "type" in t5 ? f2(t5.type) : v3(t5.types);
}
function f2(t5) {
  return t5.prototype.read ? (e7, r9, o14) => {
    if (null == e7) return e7;
    const n11 = typeof e7;
    if ("object" !== n11) return void p3().error(`Expected JSON value of type 'object' to deserialize type '${t5.prototype.declaredClass}', but got '${n11}'`);
    const i6 = new t5();
    return i6.read(e7, o14), i6;
  } : t5.fromJSON;
}
function c3(t5, e7, r9, o14) {
  return 0 !== o14 && Array.isArray(e7) ? e7.map((e8) => c3(t5, e8, r9, o14 - 1)) : t5(e7, void 0, r9);
}
function a6(t5) {
  const e7 = y2(t5), r9 = c3.bind(null, e7), o14 = t5.ndimArray ?? 0;
  return (t6, e8, n11) => {
    if (null == t6) return t6;
    t6 = r9(t6, n11, o14);
    let i6 = o14, p7 = t6;
    for (; i6 > 0 && Array.isArray(p7); ) i6--, p7 = p7[0];
    if (void 0 !== p7) for (let r10 = 0; r10 < i6; r10++) t6 = [t6];
    return t6;
  };
}
function d2(t5) {
  const e7 = y2(t5);
  return (t6, r9, o14) => {
    if (null == t6) return t6;
    if (Array.isArray(t6)) {
      const r10 = [];
      for (const n12 of t6) {
        const t7 = e7(n12, void 0, o14);
        void 0 !== t7 && r10.push(t7);
      }
      return r10;
    }
    const n11 = e7(t6, void 0, o14);
    return void 0 !== n11 ? [n11] : void 0;
  };
}
function l3(t5) {
  if (!e4(t5)) return false;
  const e7 = t5.prototype.itemType;
  return !(!e7 || !e7.Type) && ("function" == typeof e7.Type ? j3(e7.Type) : g2(e7.Type));
}
function m3(t5) {
  return "types" in t5 ? g2(t5.types) : j3(t5.type);
}
function j3(t5) {
  return !Array.isArray(t5) && (!!t5 && ("object" == typeof t5 || "function" == typeof t5) && t5.prototype && ("read" in t5.prototype || "fromJSON" in t5 || l3(t5)));
}
function g2(t5) {
  for (const e7 in t5.typeMap) {
    if (!j3(t5.typeMap[e7])) return false;
  }
  return true;
}
function v3(t5) {
  let e7 = null;
  const r9 = t5.errorContext ?? "type", o14 = t5.validate;
  return (n11, u6, s8) => {
    if (null == n11) return n11;
    const y6 = typeof n11;
    if ("object" !== y6) return void p3().error(`Expected JSON value of type 'object' to deserialize, but got '${y6}'`);
    e7 || (e7 = A2(t5));
    const f6 = t5.key;
    if ("string" != typeof f6) return;
    const c7 = n11[b2(f6, e7, s8)], a11 = c7 ? e7[c7] : t5.defaultKeyValue ? t5.typeMap[t5.defaultKeyValue] : void 0;
    if (!a11) {
      const t6 = `Type '${c7 || "unknown"}' is not supported`;
      return s8?.messages && n11 && a5(s8, "warning", r9, t6, { definition: n11, context: s8 }), void p3().error(t6);
    }
    const d3 = new a11();
    return d3.read(n11, s8), o14 ? o14(d3) : d3;
  };
}
function b2(t5, e7, o14) {
  const i6 = Object.values(e7)[0], p7 = r3(i6.prototype)[t5], u6 = i3(p7, o14), s8 = u6?.read?.source;
  return s8 && "string" == typeof s8 ? s8 : t5;
}
function A2(t5) {
  const e7 = {};
  for (const o14 in t5.typeMap) {
    const n11 = t5.typeMap[o14], i6 = r3(n11.prototype);
    if ("function" == typeof t5.key) continue;
    const p7 = i6[t5.key];
    if (!p7) continue;
    if (p7.json?.type && Array.isArray(p7.json.type) && 1 === p7.json.type.length && "string" == typeof p7.json.type[0]) {
      e7[p7.json.type[0]] = n11;
      continue;
    }
    const u6 = p7.json?.write;
    if (!u6?.writer) {
      e7[o14] = n11;
      continue;
    }
    const s8 = u6.target, y6 = "string" == typeof s8 ? s8 : t5.key, f6 = {};
    u6.writer(o14, f6, y6), f6[y6] && (e7[f6[y6]] = n11);
  }
  return e7;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/shorthands.js
function e5(e7) {
  if (e7.json || (e7.json = {}), o9(e7.json), n7(e7.json), r5(e7.json), e7.json.origins) for (const t5 in e7.json.origins) o9(e7.json.origins[t5]), n7(e7.json.origins[t5]), r5(e7.json.origins[t5]);
  return true;
}
function r5(e7) {
  e7.name && (e7.read && "object" == typeof e7.read ? void 0 === e7.read.source && (e7.read.source = e7.name) : e7.read = { source: e7.name }, e7.write && "object" == typeof e7.write ? void 0 === e7.write.target && (e7.write.target = e7.name) : e7.write = { target: e7.name });
}
function o9(e7) {
  "boolean" == typeof e7.read ? e7.read = { enabled: e7.read } : "function" == typeof e7.read ? e7.read = { enabled: true, reader: e7.read } : e7.read && "object" == typeof e7.read && void 0 === e7.read.enabled && (e7.read.enabled = true);
}
function n7(e7) {
  "boolean" == typeof e7.write ? e7.write = { enabled: e7.write } : "function" == typeof e7.write ? e7.write = { enabled: true, writer: e7.write } : e7.write && "object" == typeof e7.write && void 0 === e7.write.enabled && (e7.write.enabled = true);
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js
function o10(r9, t5) {
  if (!t5.write || t5.write.writer || false === t5.write.enabled && !t5.write.overridePolicy) return;
  const n11 = r9?.ndimArray ?? 0;
  r9 && (1 === n11 || "type" in r9 && e4(r9.type)) ? t5.write.writer = a7 : n11 > 1 ? t5.write.writer = l4(n11) : t5.types ? Array.isArray(t5.types) ? t5.write.writer = f3(t5.types[0]) : t5.write.writer = i4(t5.types) : t5.write.writer = s5;
}
function i4(r9) {
  return (t5, e7, n11, o14) => t5 ? u4(t5, r9, o14) ? s5(t5, e7, n11, o14) : void 0 : s5(t5, e7, n11, o14);
}
function u4(t5, e7, o14) {
  for (const r9 in e7.typeMap) if (t5 instanceof e7.typeMap[r9]) return true;
  if (o14?.messages) {
    const i6 = e7.errorContext ?? "type", u6 = `Values of type '${("function" != typeof e7.key ? t5[e7.key] : t5.declaredClass) ?? "Unknown"}' cannot be written`;
    o14 && o14.messages && t5 && a5(o14, "error", i6, u6, { definition: t5, context: o14 }), n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(u6);
  }
  return false;
}
function f3(r9) {
  return (t5, e7, n11, o14) => {
    if (!t5 || !Array.isArray(t5)) return s5(t5, e7, n11, o14);
    return s5(t5.filter((t6) => u4(t6, r9, o14)), e7, n11, o14);
  };
}
function s5(r9, e7, n11, o14) {
  e(n11, p4(r9, o14), e7);
}
function p4(r9, t5) {
  return r9 && "function" == typeof r9.write ? r9.write({}, t5) : r9 && "function" == typeof r9.toJSON ? r9.toJSON() : "number" == typeof r9 ? y3(r9) : r9;
}
function y3(r9) {
  return r9 === -1 / 0 ? -Number.MAX_VALUE : r9 === 1 / 0 ? Number.MAX_VALUE : isNaN(r9) ? null : r9;
}
function a7(r9, e7, n11, o14) {
  let i6;
  null === r9 ? i6 = null : r9 && "function" == typeof r9.map ? (i6 = r9.map((r10) => p4(r10, o14)), "function" == typeof i6.toArray && (i6 = i6.toArray())) : i6 = [p4(r9, o14)], e(n11, i6, e7);
}
function c4(r9, t5, e7) {
  return 0 !== e7 && Array.isArray(r9) ? r9.map((r10) => c4(r10, t5, e7 - 1)) : p4(r9, t5);
}
function l4(r9) {
  return (e7, n11, o14, i6) => {
    let u6;
    if (null === e7) u6 = null;
    else {
      u6 = c4(e7, i6, r9);
      let t5 = r9, n12 = u6;
      for (; t5 > 0 && Array.isArray(n12); ) t5--, n12 = n12[0];
      if (void 0 !== n12) for (let r10 = 0; r10 < t5; r10++) u6 = [u6];
    }
    e(o14, u6, n11);
  };
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js
function s6(r9) {
  const e7 = n8(r9);
  if (r9.json.origins) for (const o14 in r9.json.origins) {
    const s8 = r9.json.origins[o14], n11 = s8.types ? p5(s8) : e7;
    u3(n11, s8, false), s8.types && !s8.write && r9.json.write?.enabled && (s8.write = __spreadValues({}, r9.json.write)), o10(n11, s8);
  }
  u3(e7, r9.json, true), o10(e7, r9.json);
}
function n8(r9) {
  return r9.json.types ? a8(r9.json) : r9.type ? y4(r9) : a8(r9);
}
function p5(r9) {
  return r9.type ? y4(r9) : a8(r9);
}
function y4(e7) {
  if (!e7.type) return;
  let t5 = 0, o14 = e7.type;
  for (; Array.isArray(o14) && !T(o14); ) o14 = o14[0], t5++;
  return { type: o14, ndimArray: t5 };
}
function a8(r9) {
  if (!r9.types) return;
  let e7 = 0, t5 = r9.types;
  for (; Array.isArray(t5); ) t5 = t5[0], e7++;
  return { types: t5, ndimArray: e7 };
}
function f4(r9) {
  e5(r9) && (n5(r9), s6(r9));
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var n9 = /* @__PURE__ */ new Set();
var c5 = /* @__PURE__ */ new Set();
function l5(e7) {
  return (s8) => {
    e7 ??= "esri.core.Accessor", s8.prototype.declaredClass = e7, p6(s8);
    const i6 = [], l6 = [];
    let a11 = s8.prototype;
    for (; a11; ) a11.hasOwnProperty("initialize") && !n9.has(a11.initialize) && (n9.add(a11.initialize), i6.push(a11.initialize)), a11.hasOwnProperty("destroy") && !c5.has(a11.destroy) && (c5.add(a11.destroy), l6.push(a11.destroy)), a11 = Object.getPrototypeOf(a11);
    n9.clear(), c5.clear();
    const u6 = class extends s8 {
      constructor(...e8) {
        if (super(...e8), this.constructor === u6 && "function" == typeof this.postscript) {
          if (i6.length && Object.defineProperty(this, "initialize", { enumerable: false, configurable: true, value() {
            for (let e9 = i6.length - 1; e9 >= 0; e9--) i6[e9].call(this);
          } }), l6.length) {
            let e9 = false;
            const o14 = this[o7];
            Object.defineProperty(this, "destroy", { enumerable: false, configurable: true, value() {
              if (!e9) {
                this.__accessor__.lifecycle = I.DESTROYING, e9 = true, o14.call(this);
                for (let e10 = 0; e10 < l6.length; e10++) l6[e10].call(this);
              }
            } });
          }
          Object.defineProperty(this, Symbol.dispose, { enumerable: false, configurable: true, value() {
            this.destroy();
          } }), this.postscript();
        }
      }
    };
    u6.__accessorMetadata__ = r3(s8.prototype), u6.prototype.declaredClass = e7;
    const f6 = (e7 || "AccessorSubclass").split(".").slice(-1)[0];
    return Object.defineProperty(u6.prototype, Symbol.toStringTag, { value: f6, configurable: true, writable: true, enumerable: false }), u6;
  };
}
function a9(e7, { get: t5, value: r9 }) {
  return null == t5 ? function() {
    const t6 = this.__accessor__, o14 = t6.propertiesByName.get(e7);
    if (void 0 === o14) return;
    t6.mutable && a2(o14);
    const i6 = t6.store;
    return i6.has(e7) ? i6.get(e7) : r9;
  } : function() {
    const r10 = this.__accessor__;
    return r10.propertiesByName.get(e7)?.getComputed(r10, t5);
  };
}
function u5(e7, t5, r9) {
  Object.defineProperty(e7, t5, { enumerable: true, configurable: true, writable: true, value: r9 });
}
function f5(e7, t5) {
  return t5.readOnly && t5.constructOnly ? function(o14) {
    const s8 = this.__accessor__;
    if (s8) {
      if (s8.mutable) return s8.initialized && t5.readOnly ? y5("read-only", e7) : s8.lifecycle === I.CONSTRUCTED && t5.constructOnly ? y5("construct-only", e7) : void s8.set(e7, o14);
    } else u5(this, e7, o14);
  } : t5.readOnly ? function(r9) {
    const o14 = this.__accessor__;
    if (o14) {
      if (o14.mutable) return o14.initialized && t5.readOnly ? y5("read-only", e7) : void o14.set(e7, r9);
    } else u5(this, e7, r9);
  } : t5.constructOnly ? function(o14) {
    const s8 = this.__accessor__;
    if (s8) {
      if (s8.mutable) return s8.lifecycle === I.CONSTRUCTED && t5.constructOnly ? y5("construct-only", e7) : void s8.set(e7, o14);
    } else u5(this, e7, o14);
  } : function(t6) {
    const r9 = this.__accessor__;
    r9 ? r9.mutable && r9.set(e7, t6) : u5(this, e7, t6);
  };
}
function p6(e7) {
  const t5 = e7.prototype, r9 = r3(t5), s8 = {};
  for (const o14 of Object.getOwnPropertyNames(r9)) {
    const e8 = r9[o14];
    f4(e8), s8[o14] = { enumerable: true, configurable: true, get: a9(o14, e8), set: f5(o14, e8) };
  }
  Object.defineProperties(e7.prototype, s8);
}
var y5 = (t5, r9) => {
  n.getLogger("esri.core.Accessor").error(`cannot assign to ${t5} property '${r9}'`);
};

// node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
function r6(r9, a11 = {}) {
  const t5 = r9 instanceof o3 ? r9 : new o3(r9, a11), { alwaysWriteDefaults: l6, default: o14, ignoreUnknown: s8 = true, name: i6, nonNullable: u6, readOnly: p7 = false } = a11;
  return m2({ type: s8 ? t5.apiValues : String, json: { type: t5.jsonValues, default: o14, name: i6, read: !p7 && { reader: t5.read }, write: { writer: t5.write, alwaysWriteDefaults: l6 } }, nonNullable: u6, readOnly: p7 });
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
function o11(o14, e7, t5) {
  let a11, c7;
  return void 0 === e7 || Array.isArray(e7) ? (c7 = o14, t5 = e7, a11 = [void 0]) : (c7 = e7, a11 = Array.isArray(o14) ? o14 : [o14]), (o15, e8) => {
    const d3 = o15.constructor.prototype;
    a11.forEach((a12) => {
      const s8 = j2(o15, a12, c7);
      s8.read && "object" == typeof s8.read || (s8.read = {}), s8.read.reader = d3[e8], t5 && (s8.read.source = (s8.read.source || []).concat(t5));
    });
  };
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
function r7(r9, o14, e7) {
  let i6, n11;
  return void 0 === o14 ? (n11 = r9, i6 = [void 0]) : "string" != typeof o14 ? (n11 = r9, i6 = [void 0], e7 = o14) : (n11 = o14, i6 = Array.isArray(r9) ? r9 : [r9]), (r10, o15) => {
    const p7 = r10.constructor.prototype;
    for (const c7 of i6) {
      const i7 = j2(r10, c7, n11);
      i7.write && "object" == typeof i7.write || (i7.write = {}), e7 && (i7.write.target = e7), i7.write.writer = p7[o15];
    }
  };
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var r8 = Object.prototype.toString;
function o12(n11) {
  const r9 = "__accessorMetadata__" in n11 ? w(n11) : n11;
  return function(...t5) {
    if (t5.push(r9), "number" == typeof t5[2]) throw new Error("Using @cast has parameter decorator is not supported since 4.16");
    return e6.apply(this, t5);
  };
}
function e6(t5, r9, o14, e7) {
  o5(t5, r9).cast = e7;
}
function i5(t5) {
  return (r9, o14) => {
    o5(r9, t5).cast = r9[o14];
  };
}
function s7(...t5) {
  if (3 !== t5.length || "string" != typeof t5[1]) return 1 === t5.length && "[object Function]" === r8.call(t5[0]) ? o12(t5[0]) : 1 === t5.length && "string" == typeof t5[0] ? i5(t5[0]) : void 0;
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
function n10(n11) {
  return (r9, t5) => {
    r9[t5] = n11;
  };
}

// node_modules/@arcgis/core/core/accessorSupport/decorators.js
var a10 = m2;
var c6 = l5;
function m4(...r9) {
  return s7(...r9);
}

export {
  u2 as u,
  a3 as a,
  s,
  l,
  m,
  w,
  A,
  x,
  D,
  _,
  B,
  r3 as r,
  o5 as o,
  t2 as t,
  m2,
  j2 as j,
  s7 as s2,
  o7 as o2,
  n6 as n,
  i3 as i,
  r4 as r2,
  t3 as t2,
  n4 as n2,
  t4 as t3,
  i2,
  s3,
  a5 as a2,
  p2 as p,
  s4,
  y3 as y,
  l5 as l2,
  r6 as r3,
  o11 as o3,
  n10 as n3,
  r7 as r4,
  a10 as a3,
  c6 as c,
  m4 as m3
};
//# sourceMappingURL=chunk-LV7AMIAU.js.map
