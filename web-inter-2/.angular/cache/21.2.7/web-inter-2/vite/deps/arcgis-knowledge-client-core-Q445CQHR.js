import {
  o
} from "./chunk-4M7IL7A2.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/arcgis-knowledge-client-core.js
function r(a, r2) {
  for (var t2 = 0; t2 < r2.length; t2++) {
    const e2 = r2[t2];
    if ("string" != typeof e2 && !Array.isArray(e2)) {
      for (const r3 in e2) if ("default" !== r3 && !(r3 in a)) {
        const t3 = Object.getOwnPropertyDescriptor(e2, r3);
        t3 && Object.defineProperty(a, r3, t3.get ? t3 : { enumerable: true, get: () => e2[r3] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
var t;
var e = { exports: {} };
function n() {
  return t || (t = 1, a = e, r2 = globalThis.document?.currentScript?.src, n2 = async function(a2 = {}) {
    var t2, e2 = a2, n3 = "./this.program", o3 = "";
    try {
      o3 = new URL(".", r2).href;
    } catch {
    }
    t2 = async (a3) => {
      if ((a3 = await fetch(a3, { credentials: "same-origin" })).ok) return a3.arrayBuffer();
      throw Error(a3.status + " : " + a3.url);
    };
    var i2, s, u, f, l, h, c, w, d, v, p, m, b, y, g, $ = console.log.bind(console), A = console.error.bind(console), C = false, E = false;
    function k() {
      var a3 = ht.buffer;
      l = new Int8Array(a3), c = new Int16Array(a3), h = new Uint8Array(a3), w = new Uint16Array(a3), d = new Int32Array(a3), v = new Uint32Array(a3), p = new Float32Array(a3), m = new Float64Array(a3), b = new BigInt64Array(a3), y = new BigUint64Array(a3);
    }
    function x(a3) {
      throw e2.onAbort?.(a3), A(a3 = "Aborted(" + a3 + ")"), C = true, a3 = new WebAssembly.RuntimeError(a3 + ". Build with -sASSERTIONS for more info."), f?.(a3), a3;
    }
    async function O(a3) {
      if (!i2) try {
        var r3 = await t2(a3);
        return new Uint8Array(r3);
      } catch {
      }
      if (a3 != g || !i2) throw "both async and sync fetching of the wasm failed";
      return a3 = new Uint8Array(i2);
    }
    async function T(a3, r3) {
      try {
        var t3 = await O(a3);
        return await WebAssembly.instantiate(t3, r3);
      } catch (e3) {
        A(`failed to asynchronously prepare wasm: ${e3}`), x(e3);
      }
    }
    async function j(a3) {
      var r3 = g;
      if (!i2) try {
        var t3 = fetch(r3, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(t3, a3);
      } catch (e3) {
        A(`wasm streaming compile failed: ${e3}`), A("falling back to ArrayBuffer instantiation");
      }
      return T(r3, a3);
    }
    class S {
      name = "ExitStatus";
      constructor(a3) {
        this.message = `Program terminated with exit(${a3})`, this.status = a3;
      }
    }
    var P = (a3) => {
      for (; 0 < a3.length; ) a3.shift()(e2);
    }, D = [], R = [], q = () => {
      var a3 = e2.preRun.shift();
      R.push(a3);
    }, I = true;
    class B {
      constructor(a3) {
        this.ra = a3 - 24;
      }
    }
    var z = {}, M = (a3) => {
      for (; a3.length; ) {
        var r3 = a3.pop();
        a3.pop()(r3);
      }
    };
    function U(a3) {
      return this.sa(v[a3 >> 2]);
    }
    var N = {}, F = {}, L = {}, H = class extends Error {
      constructor(a3) {
        super(a3), this.name = "InternalError";
      }
    }, W = (a3, r3, t3) => {
      function e3(r4) {
        if ((r4 = t3(r4)).length !== a3.length) throw new H("Mismatched type converter count");
        for (var e4 = 0; e4 < a3.length; ++e4) K(a3[e4], r4[e4]);
      }
      a3.forEach((a4) => L[a4] = r3);
      var n4 = Array(r3.length), o4 = [], i3 = 0;
      r3.forEach((a4, r4) => {
        F.hasOwnProperty(a4) ? n4[r4] = F[a4] : (o4.push(a4), N.hasOwnProperty(a4) || (N[a4] = []), N[a4].push(() => {
          n4[r4] = F[a4], ++i3 === o4.length && e3(n4);
        }));
      }), 0 === o4.length && e3(n4);
    }, _ = (a3) => {
      for (var r3 = ""; ; ) {
        var t3 = h[a3++];
        if (!t3) return r3;
        r3 += String.fromCharCode(t3);
      }
    }, G = class extends Error {
      constructor(a3) {
        super(a3), this.name = "BindingError";
      }
    };
    function J(a3, r3, t3 = {}) {
      var e3 = r3.name;
      if (!a3) throw new G(`type "${e3}" must have a positive integer typeid pointer`);
      if (F.hasOwnProperty(a3)) {
        if (t3.Mb) return;
        throw new G(`Cannot register type '${e3}' twice`);
      }
      F[a3] = r3, delete L[a3], N.hasOwnProperty(a3) && (r3 = N[a3], delete N[a3], r3.forEach((a4) => a4()));
    }
    function K(a3, r3, t3 = {}) {
      return J(a3, r3, t3);
    }
    var V = (a3, r3, t3) => {
      switch (r3) {
        case 1:
          return t3 ? (a4) => l[a4] : (a4) => h[a4];
        case 2:
          return t3 ? (a4) => c[a4 >> 1] : (a4) => w[a4 >> 1];
        case 4:
          return t3 ? (a4) => d[a4 >> 2] : (a4) => v[a4 >> 2];
        case 8:
          return t3 ? (a4) => b[a4 >> 3] : (a4) => y[a4 >> 3];
        default:
          throw new TypeError(`invalid integer width (${r3}): ${a3}`);
      }
    }, Q = (a3) => {
      throw new G(a3.ma.ta.na.name + " instance already deleted");
    }, Y = false, X = () => {
    }, Z = (a3) => globalThis.FinalizationRegistry ? (Y = new FinalizationRegistry((a4) => {
      --(a4 = a4.ma).count.value, 0 === a4.count.value && (a4.xa ? a4.Ba.Ha(a4.xa) : a4.ta.na.Ha(a4.ra));
    }), X = (a4) => {
      Y.unregister(a4);
    }, (Z = (a4) => {
      var r3 = a4.ma;
      return r3.xa && Y.register(a4, { ma: r3 }, a4), a4;
    })(a3)) : (Z = (a4) => a4, a3);
    function aa() {
    }
    var ra = (a3, r3) => Object.defineProperty(r3, "name", { value: a3 }), ta = {}, ea = (a3, r3, t3) => {
      if (void 0 === a3[r3].ua) {
        var e3 = a3[r3];
        a3[r3] = function(...e4) {
          if (!a3[r3].ua.hasOwnProperty(e4.length)) throw new G(`Function '${t3}' called with an invalid number of arguments (${e4.length}) - expects one of (${a3[r3].ua})!`);
          return a3[r3].ua[e4.length].apply(this, e4);
        }, a3[r3].ua = [], a3[r3].ua[e3.Ma] = e3;
      }
    }, na = (a3, r3, t3) => {
      if (e2.hasOwnProperty(a3)) {
        if (void 0 === t3 || void 0 !== e2[a3].ua && void 0 !== e2[a3].ua[t3]) throw new G(`Cannot register public name '${a3}' twice`);
        if (ea(e2, a3, a3), e2[a3].ua.hasOwnProperty(t3)) throw new G(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`);
        e2[a3].ua[t3] = r3;
      } else e2[a3] = r3, e2[a3].Ma = t3;
    }, oa = (a3) => {
      var r3 = (a3 = a3.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return 48 <= r3 && 57 >= r3 ? `_${a3}` : a3;
    };
    function ia(a3, r3, t3, e3, n4, o4, i3, s2) {
      this.name = a3, this.constructor = r3, this.La = t3, this.Ha = e3, this.ya = n4, this.Hb = o4, this.Xa = i3, this.Fb = s2, this.Sb = [];
    }
    var sa = (a3, r3, t3) => {
      for (; r3 !== t3; ) {
        if (!r3.Xa) throw new G(`Expected null or instance of ${t3.name}, got an instance of ${r3.name}`);
        a3 = r3.Xa(a3), r3 = r3.ya;
      }
      return a3;
    }, ua = (a3) => {
      if (null === a3) return "null";
      var r3 = typeof a3;
      return "object" === r3 || "array" === r3 || "function" === r3 ? a3.toString() : "" + a3;
    };
    function fa(a3, r3) {
      if (null === r3) {
        if (this.lb) throw new G(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!r3.ma) throw new G(`Cannot pass "${ua(r3)}" as a ${this.name}`);
      if (!r3.ma.ra) throw new G(`Cannot pass deleted object as a pointer of type ${this.name}`);
      return sa(r3.ma.ra, r3.ma.ta.na, this.na);
    }
    function la(a3, r3) {
      if (null === r3) {
        if (this.lb) throw new G(`null is not a valid ${this.name}`);
        if (this.ab) {
          var t3 = this.nb();
          return null !== a3 && a3.push(this.Ha, t3), t3;
        }
        return 0;
      }
      if (!r3 || !r3.ma) throw new G(`Cannot pass "${ua(r3)}" as a ${this.name}`);
      if (!r3.ma.ra) throw new G(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (!this.$a && r3.ma.ta.$a) throw new G(`Cannot convert argument of type ${r3.ma.Ba ? r3.ma.Ba.name : r3.ma.ta.name} to parameter type ${this.name}`);
      if (t3 = sa(r3.ma.ra, r3.ma.ta.na, this.na), this.ab) {
        if (void 0 === r3.ma.xa) throw new G("Passing raw pointer to smart pointer is illegal");
        switch (this.Xb) {
          case 0:
            if (r3.ma.Ba !== this) throw new G(`Cannot convert argument of type ${r3.ma.Ba ? r3.ma.Ba.name : r3.ma.ta.name} to parameter type ${this.name}`);
            t3 = r3.ma.xa;
            break;
          case 1:
            t3 = r3.ma.xa;
            break;
          case 2:
            if (r3.ma.Ba === this) t3 = r3.ma.xa;
            else {
              var e3 = r3.clone();
              t3 = this.Tb(t3, Da(() => e3.delete())), null !== a3 && a3.push(this.Ha, t3);
            }
            break;
          default:
            throw new G("Unsupporting sharing policy");
        }
      }
      return t3;
    }
    function ha(a3, r3) {
      if (null === r3) {
        if (this.lb) throw new G(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!r3.ma) throw new G(`Cannot pass "${ua(r3)}" as a ${this.name}`);
      if (!r3.ma.ra) throw new G(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (r3.ma.ta.$a) throw new G(`Cannot convert argument of type ${r3.ma.ta.name} to parameter type ${this.name}`);
      return sa(r3.ma.ra, r3.ma.ta.na, this.na);
    }
    var ca = (a3, r3, t3) => r3 === t3 ? a3 : void 0 === t3.ya || null === (a3 = ca(a3, r3, t3.ya)) ? null : t3.Fb(a3), wa = {}, da = (a3, r3) => {
      if (void 0 === r3) throw new G("ptr should not be undefined");
      for (; a3.ya; ) r3 = a3.Xa(r3), a3 = a3.ya;
      return wa[r3];
    }, va = (a3, r3) => {
      if (!r3.ta || !r3.ra) throw new H("makeClassHandle requires ptr and ptrType");
      if (!!r3.Ba != !!r3.xa) throw new H("Both smartPtrType and smartPtr must be specified");
      return r3.count = { value: 1 }, Z(Object.create(a3, { ma: { value: r3, writable: true } }));
    };
    function pa(a3, r3, t3, e3, n4, o4, i3, s2, u2, f2, l2) {
      this.name = a3, this.na = r3, this.lb = t3, this.$a = e3, this.ab = n4, this.Rb = o4, this.Xb = i3, this.yb = s2, this.nb = u2, this.Tb = f2, this.Ha = l2, n4 || void 0 !== r3.ya ? this.wa = la : (this.wa = e3 ? fa : ha, this.Aa = null);
    }
    var ma = (a3, r3, t3) => {
      if (!e2.hasOwnProperty(a3)) throw new H("Replacing nonexistent public symbol");
      void 0 !== e2[a3].ua && void 0 !== t3 ? e2[a3].ua[t3] = r3 : (e2[a3] = r3, e2[a3].Ma = t3);
    }, ba = [], ya = (a3, r3) => {
      var t3;
      if (a3 = _(a3), (t3 = ba[r3]) || (ba[r3] = t3 = ct.get(r3)), "function" != typeof t3) throw new G(`unknown function pointer with signature ${a3}: ${r3}`);
      return t3;
    };
    class ga extends Error {
    }
    var $a = (a3) => {
      a3 = it(a3);
      var r3 = _(a3);
      return ut(a3), r3;
    }, Aa = (a3, r3) => {
      function t3(a4) {
        n4[a4] || F[a4] || (L[a4] ? L[a4].forEach(t3) : (e3.push(a4), n4[a4] = true));
      }
      var e3 = [], n4 = {};
      throw r3.forEach(t3), new ga(`${a3}: ` + e3.map($a).join([", "]));
    };
    function Ca(a3) {
      for (var r3 = 1; r3 < a3.length; ++r3) if (null !== a3[r3] && void 0 === a3[r3].Aa) return true;
      return false;
    }
    function Ea(a3, r3, t3, e3, n4) {
      var o4 = r3.length;
      if (2 > o4) throw new G("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var i3 = null !== r3[1] && null !== t3, s2 = Ca(r3), u2 = !r3[0].Nb, f2 = o4 - 2, l2 = Array(f2), h2 = [], c2 = [];
      return ra(a3, function(...a4) {
        if (c2.length = 0, h2.length = i3 ? 2 : 1, h2[0] = n4, i3) {
          var t4 = r3[1].wa(c2, this);
          h2[1] = t4;
        }
        for (var o5 = 0; o5 < f2; ++o5) l2[o5] = r3[o5 + 2].wa(c2, a4[o5]), h2.push(l2[o5]);
        if (a4 = e3(...h2), s2) M(c2);
        else for (o5 = i3 ? 1 : 2; o5 < r3.length; o5++) {
          var w2 = 1 === o5 ? t4 : l2[o5 - 2];
          null !== r3[o5].Aa && r3[o5].Aa(w2);
        }
        return t4 = u2 ? r3[0].sa(a4) : void 0;
      });
    }
    var ka = (a3, r3) => {
      for (var t3 = [], e3 = 0; e3 < a3; e3++) t3.push(v[r3 + 4 * e3 >> 2]);
      return t3;
    }, xa = (a3) => {
      const r3 = (a3 = a3.trim()).indexOf("(");
      return -1 === r3 ? a3 : a3.slice(0, r3);
    }, Oa = (a3, r3, t3) => {
      if (!(a3 instanceof Object)) throw new G(`${t3} with invalid "this": ${a3}`);
      if (!(a3 instanceof r3.na.constructor)) throw new G(`${t3} incompatible with "this" of type ${a3.constructor.name}`);
      if (!a3.ma.ra) throw new G(`cannot call emscripten binding method ${t3} on deleted object`);
      return sa(a3.ma.ra, a3.ma.ta.na, r3.na);
    }, Ta = [], ja = [0, 1, , 1, null, 1, true, 1, false, 1], Sa = (a3) => {
      9 < a3 && 0 === --ja[a3 + 1] && (ja[a3] = void 0, Ta.push(a3));
    }, Pa = (a3) => {
      if (!a3) throw new G(`Cannot use deleted val. handle = ${a3}`);
      return ja[a3];
    }, Da = (a3) => {
      switch (a3) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default:
          const r3 = Ta.pop() || ja.length;
          return ja[r3] = a3, ja[r3 + 1] = 1, r3;
      }
    }, Ra = { name: "emscripten::val", sa: (a3) => {
      var r3 = Pa(a3);
      return Sa(a3), r3;
    }, wa: (a3, r3) => Da(r3), Ea: U, Aa: null }, qa = (a3, r3, t3) => {
      switch (r3) {
        case 1:
          return t3 ? function(a4) {
            return this.sa(l[a4]);
          } : function(a4) {
            return this.sa(h[a4]);
          };
        case 2:
          return t3 ? function(a4) {
            return this.sa(c[a4 >> 1]);
          } : function(a4) {
            return this.sa(w[a4 >> 1]);
          };
        case 4:
          return t3 ? function(a4) {
            return this.sa(d[a4 >> 2]);
          } : function(a4) {
            return this.sa(v[a4 >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${r3}): ${a3}`);
      }
    }, Ia = (a3, r3) => {
      var t3 = F[a3];
      if (void 0 === t3) throw a3 = `${r3} has unknown type ${$a(a3)}`, new G(a3);
      return t3;
    }, Ba = (a3, r3) => {
      switch (r3) {
        case 4:
          return function(a4) {
            return this.sa(p[a4 >> 2]);
          };
        case 8:
          return function(a4) {
            return this.sa(m[a4 >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${r3}): ${a3}`);
      }
    }, za = Object.assign({ optional: true }, Ra), Ma = (a3, r3, t3, e3) => {
      if (!(0 < e3)) return 0;
      var n4 = t3;
      e3 = t3 + e3 - 1;
      for (var o4 = 0; o4 < a3.length; ++o4) {
        var i3 = a3.codePointAt(o4);
        if (127 >= i3) {
          if (t3 >= e3) break;
          r3[t3++] = i3;
        } else if (2047 >= i3) {
          if (t3 + 1 >= e3) break;
          r3[t3++] = 192 | i3 >> 6, r3[t3++] = 128 | 63 & i3;
        } else if (65535 >= i3) {
          if (t3 + 2 >= e3) break;
          r3[t3++] = 224 | i3 >> 12, r3[t3++] = 128 | i3 >> 6 & 63, r3[t3++] = 128 | 63 & i3;
        } else {
          if (t3 + 3 >= e3) break;
          r3[t3++] = 240 | i3 >> 18, r3[t3++] = 128 | i3 >> 12 & 63, r3[t3++] = 128 | i3 >> 6 & 63, r3[t3++] = 128 | 63 & i3, o4++;
        }
      }
      return r3[t3] = 0, t3 - n4;
    }, Ua = (a3) => {
      for (var r3 = 0, t3 = 0; t3 < a3.length; ++t3) {
        var e3 = a3.charCodeAt(t3);
        127 >= e3 ? r3++ : 2047 >= e3 ? r3 += 2 : 55296 <= e3 && 57343 >= e3 ? (r3 += 4, ++t3) : r3 += 3;
      }
      return r3;
    }, Na = globalThis.TextDecoder && new TextDecoder(), Fa = (a3, r3, t3, e3) => {
      if (t3 = r3 + t3, e3) return t3;
      for (; a3[r3] && !(r3 >= t3); ) ++r3;
      return r3;
    }, La = (a3, r3 = 0, t3, e3) => {
      if (16 < (t3 = Fa(a3, r3, t3, e3)) - r3 && a3.buffer && Na) return Na.decode(a3.subarray(r3, t3));
      for (e3 = ""; r3 < t3; ) {
        var n4 = a3[r3++];
        if (128 & n4) {
          var o4 = 63 & a3[r3++];
          if (192 == (224 & n4)) e3 += String.fromCharCode((31 & n4) << 6 | o4);
          else {
            var i3 = 63 & a3[r3++];
            65536 > (n4 = 224 == (240 & n4) ? (15 & n4) << 12 | o4 << 6 | i3 : (7 & n4) << 18 | o4 << 12 | i3 << 6 | 63 & a3[r3++]) ? e3 += String.fromCharCode(n4) : (n4 -= 65536, e3 += String.fromCharCode(55296 | n4 >> 10, 56320 | 1023 & n4));
          }
        } else e3 += String.fromCharCode(n4);
      }
      return e3;
    }, Ha = globalThis.TextDecoder ? new TextDecoder("utf-16le") : void 0, Wa = (a3, r3, t3) => {
      if (16 < (r3 = Fa(w, a3 >>= 1, r3 / 2, t3)) - a3 && Ha) return Ha.decode(w.subarray(a3, r3));
      for (t3 = ""; a3 < r3; ++a3) t3 += String.fromCharCode(w[a3]);
      return t3;
    }, _a = (a3, r3, t3) => {
      if (t3 ??= 2147483647, 2 > t3) return 0;
      var e3 = r3;
      t3 = (t3 -= 2) < 2 * a3.length ? t3 / 2 : a3.length;
      for (var n4 = 0; n4 < t3; ++n4) c[r3 >> 1] = a3.charCodeAt(n4), r3 += 2;
      return c[r3 >> 1] = 0, r3 - e3;
    }, Ga = (a3) => 2 * a3.length, Ja = (a3, r3, t3) => {
      var e3 = "";
      a3 >>= 2;
      for (var n4 = 0; !(n4 >= r3 / 4); n4++) {
        var o4 = v[a3 + n4];
        if (!o4 && !t3) break;
        e3 += String.fromCodePoint(o4);
      }
      return e3;
    }, Ka = (a3, r3, t3) => {
      if (t3 ??= 2147483647, 4 > t3) return 0;
      var e3 = r3;
      t3 = e3 + t3 - 4;
      for (var n4 = 0; n4 < a3.length; ++n4) {
        var o4 = a3.codePointAt(n4);
        if (65535 < o4 && n4++, d[r3 >> 2] = o4, (r3 += 4) + 4 > t3) break;
      }
      return d[r3 >> 2] = 0, r3 - e3;
    }, Va = (a3) => {
      for (var r3 = 0, t3 = 0; t3 < a3.length; ++t3) 65535 < a3.codePointAt(t3) && t3++, r3 += 4;
      return r3;
    }, Qa = 0, Ya = [], Xa = (a3) => {
      var r3 = Ya.length;
      return Ya.push(a3), r3;
    }, Za = (a3, r3) => {
      for (var t3 = Array(a3), e3 = 0; e3 < a3; ++e3) t3[e3] = Ia(v[r3 + 4 * e3 >> 2], `parameter ${e3}`);
      return t3;
    }, ar = {}, rr = (a3) => {
      var r3 = ar[a3];
      return void 0 === r3 ? _(a3) : r3;
    }, tr = (a3, r3, t3, e3, n4) => Ya[a3](r3, t3, e3, n4), er = (a3, r3) => {
      for (var t3 = 0, e3 = a3.length - 1; 0 <= e3; e3--) {
        var n4 = a3[e3];
        "." === n4 ? a3.splice(e3, 1) : ".." === n4 ? (a3.splice(e3, 1), t3++) : t3 && (a3.splice(e3, 1), t3--);
      }
      if (r3) for (; t3; t3--) a3.unshift("..");
      return a3;
    }, nr = (a3) => {
      var r3 = "/" === a3.charAt(0), t3 = "/" === a3.slice(-1);
      return (a3 = er(a3.split("/").filter((a4) => !!a4), !r3).join("/")) || r3 || (a3 = "."), a3 && t3 && (a3 += "/"), (r3 ? "/" : "") + a3;
    }, or = (a3) => {
      var r3 = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a3).slice(1);
      return a3 = r3[0], r3 = r3[1], a3 || r3 ? (r3 &&= r3.slice(0, -1), a3 + r3) : ".";
    }, ir = () => (a3) => crypto.getRandomValues(a3), sr = (a3) => {
      (sr = ir())(a3);
    }, ur = (...a3) => {
      for (var r3 = "", t3 = false, e3 = a3.length - 1; -1 <= e3 && !t3; e3--) {
        if ("string" != typeof (t3 = 0 <= e3 ? a3[e3] : "/")) throw new TypeError("Arguments to path.resolve must be strings");
        if (!t3) return "";
        r3 = t3 + "/" + r3, t3 = "/" === t3.charAt(0);
      }
      return (t3 ? "/" : "") + (r3 = er(r3.split("/").filter((a4) => !!a4), !t3).join("/")) || ".";
    }, fr = [], lr = [];
    function hr(a3, r3) {
      lr[a3] = { input: [], output: [], Ra: r3 }, Mr(a3, cr);
    }
    var cr = { open(a3) {
      var r3 = lr[a3.node.fb];
      if (!r3) throw new kr(43);
      a3.Ca = r3, a3.seekable = false;
    }, close(a3) {
      a3.Ca.Ra.Za(a3.Ca);
    }, Za(a3) {
      a3.Ca.Ra.Za(a3.Ca);
    }, read(a3, r3, t3, e3) {
      if (!a3.Ca || !a3.Ca.Ra.sb) throw new kr(60);
      for (var n4 = 0, o4 = 0; o4 < e3; o4++) {
        try {
          var i3 = a3.Ca.Ra.sb(a3.Ca);
        } catch (s2) {
          throw new kr(29);
        }
        if (void 0 === i3 && 0 === n4) throw new kr(6);
        if (null == i3) break;
        n4++, r3[t3 + o4] = i3;
      }
      return n4 && (a3.node.Na = Date.now()), n4;
    }, write(a3, r3, t3, e3) {
      if (!a3.Ca || !a3.Ca.Ra.mb) throw new kr(60);
      try {
        for (var n4 = 0; n4 < e3; n4++) a3.Ca.Ra.mb(a3.Ca, r3[t3 + n4]);
      } catch (o4) {
        throw new kr(29);
      }
      return e3 && (a3.node.Da = a3.node.za = Date.now()), n4;
    } }, wr = { sb() {
      a: {
        if (!fr.length) {
          var a3 = null;
          if (globalThis.window?.prompt && null !== (a3 = window.prompt("Input: ")) && (a3 += "\n"), !a3) {
            var r3 = null;
            break a;
          }
          r3 = Array(Ua(a3) + 1), a3 = Ma(a3, r3, 0, r3.length), r3.length = a3, fr = r3;
        }
        r3 = fr.shift();
      }
      return r3;
    }, mb(a3, r3) {
      null === r3 || 10 === r3 ? ($(La(a3.output)), a3.output = []) : 0 != r3 && a3.output.push(r3);
    }, Za(a3) {
      0 < a3.output?.length && ($(La(a3.output)), a3.output = []);
    }, lc: () => ({ cc: 25856, ec: 5, bc: 191, dc: 35387, ac: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), mc: () => 0, nc: () => [24, 80] }, dr = { mb(a3, r3) {
      null === r3 || 10 === r3 ? (A(La(a3.output)), a3.output = []) : 0 != r3 && a3.output.push(r3);
    }, Za(a3) {
      0 < a3.output?.length && (A(La(a3.output)), a3.output = []);
    } }, vr = { Ga: null, Ja: () => vr.createNode(null, "/", 16895, 0), createNode(a3, r3, t3, e3) {
      if (24576 == (61440 & t3) || 4096 == (61440 & t3)) throw new kr(63);
      return vr.Ga || (vr.Ga = { dir: { node: { Ka: vr.pa.Ka, Ia: vr.pa.Ia, Ua: vr.pa.Ua, cb: vr.pa.cb, zb: vr.pa.zb, Cb: vr.pa.Cb, Bb: vr.pa.Bb, ob: vr.pa.ob, gb: vr.pa.gb }, stream: { Fa: vr.qa.Fa } }, file: { node: { Ka: vr.pa.Ka, Ia: vr.pa.Ia }, stream: { Fa: vr.qa.Fa, read: vr.qa.read, write: vr.qa.write, vb: vr.qa.vb, xb: vr.qa.xb } }, link: { node: { Ka: vr.pa.Ka, Ia: vr.pa.Ia, Wa: vr.pa.Wa }, stream: {} }, pb: { node: { Ka: vr.pa.Ka, Ia: vr.pa.Ia }, stream: zr } }), 16384 == (61440 & (t3 = Pr(a3, r3, t3, e3)).mode) ? (t3.pa = vr.Ga.dir.node, t3.qa = vr.Ga.dir.stream, t3.oa = {}) : 32768 == (61440 & t3.mode) ? (t3.pa = vr.Ga.file.node, t3.qa = vr.Ga.file.stream, t3.va = 0, t3.oa = null) : 40960 == (61440 & t3.mode) ? (t3.pa = vr.Ga.link.node, t3.qa = vr.Ga.link.stream) : 8192 == (61440 & t3.mode) && (t3.pa = vr.Ga.pb.node, t3.qa = vr.Ga.pb.stream), t3.Na = t3.Da = t3.za = Date.now(), a3 && (a3.oa[r3] = t3, a3.Na = a3.Da = a3.za = t3.Na), t3;
    }, ic: (a3) => a3.oa ? a3.oa.subarray ? a3.oa.subarray(0, a3.va) : new Uint8Array(a3.oa) : new Uint8Array(0), pa: { Ka(a3) {
      var r3 = {};
      return r3.fc = 8192 == (61440 & a3.mode) ? a3.id : 1, r3.kc = a3.id, r3.mode = a3.mode, r3.oc = 1, r3.uid = 0, r3.jc = 0, r3.fb = a3.fb, 16384 == (61440 & a3.mode) ? r3.size = 4096 : 32768 == (61440 & a3.mode) ? r3.size = a3.va : 40960 == (61440 & a3.mode) ? r3.size = a3.link.length : r3.size = 0, r3.Na = new Date(a3.Na), r3.Da = new Date(a3.Da), r3.za = new Date(a3.za), r3.Db = 4096, r3.$b = Math.ceil(r3.size / r3.Db), r3;
    }, Ia(a3, r3) {
      for (var t3 of ["mode", "atime", "mtime", "ctime"]) null != r3[t3] && (a3[t3] = r3[t3]);
      void 0 !== r3.size && (r3 = r3.size, a3.va != r3 && (0 == r3 ? (a3.oa = null, a3.va = 0) : (t3 = a3.oa, a3.oa = new Uint8Array(r3), t3 && a3.oa.set(t3.subarray(0, Math.min(r3, a3.va))), a3.va = r3)));
    }, Ua() {
      throw vr.hb || (vr.hb = new kr(44), vr.hb.stack = "<generic error, no stack>"), vr.hb;
    }, cb: (a3, r3, t3, e3) => vr.createNode(a3, r3, t3, e3), zb(a3, r3, t3) {
      try {
        var e3 = Sr(r3, t3);
      } catch (o4) {
      }
      if (e3) {
        if (16384 == (61440 & a3.mode)) for (var n4 in e3.oa) throw new kr(55);
        if (n4 = jr(e3.parent.id, e3.name), $r[n4] === e3) $r[n4] = e3.Qa;
        else for (n4 = $r[n4]; n4; ) {
          if (n4.Qa === e3) {
            n4.Qa = e3.Qa;
            break;
          }
          n4 = n4.Qa;
        }
      }
      delete a3.parent.oa[a3.name], r3.oa[t3] = a3, a3.name = t3, r3.za = r3.Da = a3.parent.za = a3.parent.Da = Date.now();
    }, Cb(a3, r3) {
      delete a3.oa[r3], a3.za = a3.Da = Date.now();
    }, Bb(a3, r3) {
      var t3, e3 = Sr(a3, r3);
      for (t3 in e3.oa) throw new kr(55);
      delete a3.oa[r3], a3.za = a3.Da = Date.now();
    }, ob: (a3) => [".", "..", ...Object.keys(a3.oa)], gb: (a3, r3, t3) => ((a3 = vr.createNode(a3, r3, 41471, 0)).link = t3, a3), Wa(a3) {
      if (40960 != (61440 & a3.mode)) throw new kr(28);
      return a3.link;
    } }, qa: { read(a3, r3, t3, e3, n4) {
      var o4 = a3.node.oa;
      if (n4 >= a3.node.va) return 0;
      if (8 < (a3 = Math.min(a3.node.va - n4, e3)) && o4.subarray) r3.set(o4.subarray(n4, n4 + a3), t3);
      else for (e3 = 0; e3 < a3; e3++) r3[t3 + e3] = o4[n4 + e3];
      return a3;
    }, write(a3, r3, t3, e3, n4, o4) {
      if (r3.buffer === l.buffer && (o4 = false), !e3) return 0;
      if ((a3 = a3.node).Da = a3.za = Date.now(), r3.subarray && (!a3.oa || a3.oa.subarray)) {
        if (o4) return a3.oa = r3.subarray(t3, t3 + e3), a3.va = e3;
        if (0 === a3.va && 0 === n4) return a3.oa = r3.slice(t3, t3 + e3), a3.va = e3;
        if (n4 + e3 <= a3.va) return a3.oa.set(r3.subarray(t3, t3 + e3), n4), e3;
      }
      o4 = n4 + e3;
      var i3 = a3.oa ? a3.oa.length : 0;
      if (i3 >= o4 || (o4 = Math.max(o4, i3 * (1048576 > i3 ? 2 : 1.125) >>> 0), 0 != i3 && (o4 = Math.max(o4, 256)), i3 = a3.oa, a3.oa = new Uint8Array(o4), 0 < a3.va && a3.oa.set(i3.subarray(0, a3.va), 0)), a3.oa.subarray && r3.subarray) a3.oa.set(r3.subarray(t3, t3 + e3), n4);
      else for (o4 = 0; o4 < e3; o4++) a3.oa[n4 + o4] = r3[t3 + o4];
      return a3.va = Math.max(a3.va, n4 + e3), e3;
    }, Fa(a3, r3, t3) {
      if (1 === t3 ? r3 += a3.position : 2 === t3 && 32768 == (61440 & a3.node.mode) && (r3 += a3.node.va), 0 > r3) throw new kr(28);
      return r3;
    }, vb(a3, r3, t3, e3, n4) {
      if (32768 != (61440 & a3.node.mode)) throw new kr(43);
      if (a3 = a3.node.oa, 2 & n4 || !a3 || a3.buffer !== l.buffer) {
        n4 = true, e3 = 65536 * Math.ceil(r3 / 65536);
        var o4 = ft(65536, e3);
        if (o4 && h.fill(0, o4, o4 + e3), !(e3 = o4)) throw new kr(48);
        a3 && ((0 < t3 || t3 + r3 < a3.length) && (a3 = a3.subarray ? a3.subarray(t3, t3 + r3) : Array.prototype.slice.call(a3, t3, t3 + r3)), l.set(a3, e3));
      } else n4 = false, e3 = a3.byteOffset;
      return { ra: e3, Zb: n4 };
    }, xb: (a3, r3, t3, e3) => (vr.qa.write(a3, r3, 0, e3, t3, false), 0) } }, pr = (a3, r3) => {
      var t3 = 0;
      return a3 && (t3 |= 365), r3 && (t3 |= 146), t3;
    }, mr = null, br = {}, yr = [], gr = 1, $r = null, Ar = false, Cr = true, Er = {}, kr = class {
      name = "ErrnoError";
      constructor(a3) {
        this.Ta = a3;
      }
    }, xr = class {
      bb = {};
      node = null;
      get flags() {
        return this.bb.flags;
      }
      set flags(a3) {
        this.bb.flags = a3;
      }
      get position() {
        return this.bb.position;
      }
      set position(a3) {
        this.bb.position = a3;
      }
    }, Or = class {
      pa = {};
      qa = {};
      eb = null;
      constructor(a3, r3, t3, e3) {
        a3 ||= this, this.parent = a3, this.Ja = a3.Ja, this.id = gr++, this.name = r3, this.mode = t3, this.fb = e3, this.Na = this.Da = this.za = Date.now();
      }
      get read() {
        return !(365 & ~this.mode);
      }
      set read(a3) {
        a3 ? this.mode |= 365 : this.mode &= -366;
      }
      get write() {
        return !(146 & ~this.mode);
      }
      set write(a3) {
        a3 ? this.mode |= 146 : this.mode &= -147;
      }
    };
    function Tr(a3, r3 = {}) {
      if (!a3) throw new kr(44);
      r3.jb ?? (r3.jb = true), "/" === a3.charAt(0) || (a3 = "//" + a3);
      var t3 = 0;
      a: for (; 40 > t3; t3++) {
        a3 = a3.split("/").filter((a4) => !!a4);
        for (var e3 = mr, n4 = "/", o4 = 0; o4 < a3.length; o4++) {
          var i3 = o4 === a3.length - 1;
          if (i3 && r3.parent) break;
          if ("." !== a3[o4]) if (".." === a3[o4]) {
            if (n4 = or(n4), e3 === e3.parent) {
              a3 = n4 + "/" + a3.slice(o4 + 1).join("/"), t3--;
              continue a;
            }
            e3 = e3.parent;
          } else {
            n4 = nr(n4 + "/" + a3[o4]);
            try {
              e3 = Sr(e3, a3[o4]);
            } catch (s2) {
              if (44 === s2?.Ta && i3 && r3.Qb) return { path: n4 };
              throw s2;
            }
            if (!e3.eb || i3 && !r3.jb || (e3 = e3.eb.root), 40960 == (61440 & e3.mode) && (!i3 || r3.ib)) {
              if (!e3.pa.Wa) throw new kr(52);
              "/" === (e3 = e3.pa.Wa(e3)).charAt(0) || (e3 = or(n4) + "/" + e3), a3 = e3 + "/" + a3.slice(o4 + 1).join("/");
              continue a;
            }
          }
        }
        return { path: n4, node: e3 };
      }
      throw new kr(32);
    }
    function jr(a3, r3) {
      for (var t3 = 0, e3 = 0; e3 < r3.length; e3++) t3 = (t3 << 5) - t3 + r3.charCodeAt(e3) | 0;
      return (a3 + t3 >>> 0) % $r.length;
    }
    function Sr(a3, r3) {
      var t3 = 16384 == (61440 & a3.mode) ? (t3 = Rr(a3, "x")) ? t3 : a3.pa.Ua ? 0 : 2 : 54;
      if (t3) throw new kr(t3);
      for (t3 = $r[jr(a3.id, r3)]; t3; t3 = t3.Qa) {
        var e3 = t3.name;
        if (t3.parent.id === a3.id && e3 === r3) return t3;
      }
      return a3.pa.Ua(a3, r3);
    }
    function Pr(a3, r3, t3, e3) {
      return r3 = jr((a3 = new Or(a3, r3, t3, e3)).parent.id, a3.name), a3.Qa = $r[r3], $r[r3] = a3;
    }
    function Dr(a3) {
      var r3 = ["r", "w", "rw"][3 & a3];
      return 512 & a3 && (r3 += "w"), r3;
    }
    function Rr(a3, r3) {
      return Cr ? 0 : !r3.includes("r") || 292 & a3.mode ? r3.includes("w") && !(146 & a3.mode) || r3.includes("x") && !(73 & a3.mode) ? 2 : 0 : 2;
    }
    function qr(a3, r3) {
      if (16384 != (61440 & a3.mode)) return 54;
      try {
        return Sr(a3, r3), 20;
      } catch (t3) {
      }
      return Rr(a3, "wx");
    }
    function Ir(a3) {
      if (!(a3 = yr[a3])) throw new kr(8);
      return a3;
    }
    function Br(a3, r3) {
      var t3 = void 0, e3 = t3 ? null : a3;
      if (t3 ??= a3.pa.Ia, !t3) throw new kr(63);
      t3(e3, r3);
    }
    var zr = { open(a3) {
      a3.qa = br[a3.node.fb].qa, a3.qa.open?.(a3);
    }, Fa() {
      throw new kr(70);
    } };
    function Mr(a3, r3) {
      br[a3] = { qa: r3 };
    }
    function Ur(a3, r3) {
      var t3 = "/" === r3;
      if (t3 && mr) throw new kr(10);
      if (!t3 && r3) {
        var e3 = Tr(r3, { jb: false });
        if (r3 = e3.path, (e3 = e3.node).eb) throw new kr(10);
        if (16384 != (61440 & e3.mode)) throw new kr(54);
      }
      r3 = { type: a3, pc: {}, wb: r3, Pb: [] }, (a3 = a3.Ja(r3)).Ja = r3, r3.root = a3, t3 ? mr = a3 : e3 && (e3.eb = r3, e3.Ja && e3.Ja.Pb.push(r3));
    }
    function Nr(a3, r3, t3) {
      var e3 = Tr(a3, { parent: true }).node;
      if (!(a3 = a3 && a3.match(/([^\/]+|\/)\/*$/)[1])) throw new kr(28);
      if ("." === a3 || ".." === a3) throw new kr(20);
      var n4 = qr(e3, a3);
      if (n4) throw new kr(n4);
      if (!e3.pa.cb) throw new kr(63);
      return e3.pa.cb(e3, a3, r3, t3);
    }
    function Fr(a3) {
      return Nr(a3, 16895, 0);
    }
    function Lr(a3, r3, t3) {
      void 0 === t3 && (t3 = r3, r3 = 438), Nr(a3, 8192 | r3, t3);
    }
    function Hr(a3, r3) {
      if (!ur(a3)) throw new kr(44);
      var t3 = Tr(r3, { parent: true }).node;
      if (!t3) throw new kr(44);
      var e3 = qr(t3, r3 = r3 && r3.match(/([^\/]+|\/)\/*$/)[1]);
      if (e3) throw new kr(e3);
      if (!t3.pa.gb) throw new kr(63);
      t3.pa.gb(t3, r3, a3);
    }
    function Wr(a3, r3) {
      if ("" === a3) throw new kr(44);
      if ("string" == typeof r3) {
        var t3 = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r3];
        if (void 0 === t3) throw Error(`Unknown file open mode: ${r3}`);
        r3 = t3;
      }
      if (t3 = 64 & r3 ? 33206 : 0, "object" == typeof a3) var n4 = a3;
      else {
        var o4 = a3.endsWith("/");
        n4 = (a3 = Tr(a3, { ib: !(131072 & r3), Qb: true })).node, a3 = a3.path;
      }
      var i3 = false;
      if (64 & r3) if (n4) {
        if (128 & r3) throw new kr(20);
      } else {
        if (o4) throw new kr(31);
        n4 = Nr(a3, 511 | t3, 0), i3 = true;
      }
      if (!n4) throw new kr(44);
      if (8192 == (61440 & n4.mode) && (r3 &= -513), 65536 & r3 && 16384 != (61440 & n4.mode)) throw new kr(54);
      if (!i3 && (o4 = n4 ? 40960 == (61440 & n4.mode) ? 32 : 16384 == (61440 & n4.mode) && ("r" !== Dr(r3) || 576 & r3) ? 31 : Rr(n4, Dr(r3)) : 44)) throw new kr(o4);
      if (512 & r3 && !i3) {
        if (16384 == (61440 & (o4 = "string" == typeof (o4 = n4) ? Tr(o4, { ib: true }).node : o4).mode)) throw new kr(31);
        if (32768 != (61440 & o4.mode)) throw new kr(28);
        var s2 = Rr(o4, "w");
        if (s2) throw new kr(s2);
        Br(o4, { size: 0, timestamp: Date.now() });
      }
      r3 &= -131713;
      a: for (o4 = n4; ; ) {
        if (o4 === o4.parent) {
          o4 = o4.Ja.wb;
          var u2 = u2 ? "/" !== o4[o4.length - 1] ? `${o4}/${u2}` : o4 + u2 : o4;
          break a;
        }
        u2 = u2 ? `${o4.name}/${u2}` : o4.name, o4 = o4.parent;
      }
      if (u2 = { node: n4, path: u2, flags: r3, seekable: true, position: 0, qa: n4.qa, Yb: [], error: false }, o4 = -1, u2 = Object.assign(new xr(), u2), -1 == o4) a: {
        for (o4 = 0; 4096 >= o4; o4++) if (!yr[o4]) break a;
        throw new kr(33);
      }
      u2.Pa = o4, yr[o4] = u2, u2.qa.open && u2.qa.open(u2), i3 && (t3 &= 511, Br(n4 = "string" == typeof n4 ? Tr(n4, { ib: true }).node : n4, { mode: 4095 & t3 | -4096 & n4.mode, za: Date.now(), hc: void 0 })), !e2.logReadFiles || 1 & r3 || a3 in Er || (Er[a3] = 1);
    }
    function _r(a3, r3, t3) {
      if (null === a3.Pa) throw new kr(8);
      if (!a3.seekable || !a3.qa.Fa) throw new kr(70);
      if (0 != t3 && 1 != t3 && 2 != t3) throw new kr(28);
      a3.position = a3.qa.Fa(a3, r3, t3), a3.Yb = [];
    }
    function Gr(a3, r3, t3) {
      a3 = nr("/dev/" + a3);
      var e3 = pr(!!r3, !!t3);
      Gr.ub ?? (Gr.ub = 64);
      var n4 = Gr.ub++ << 8;
      Mr(n4, { open(a4) {
        a4.seekable = false;
      }, close() {
        t3?.buffer?.length && t3(10);
      }, read(a4, t4, e4, n5) {
        for (var o4 = 0, i3 = 0; i3 < n5; i3++) {
          try {
            var s2 = r3();
          } catch (u2) {
            throw new kr(29);
          }
          if (void 0 === s2 && 0 === o4) throw new kr(6);
          if (null == s2) break;
          o4++, t4[e4 + i3] = s2;
        }
        return o4 && (a4.node.Na = Date.now()), o4;
      }, write(a4, r4, e4, n5) {
        for (var o4 = 0; o4 < n5; o4++) try {
          t3(r4[e4 + o4]);
        } catch (i3) {
          throw new kr(29);
        }
        return n5 && (a4.node.Da = a4.node.za = Date.now()), o4;
      } }), Lr(a3, e3, n4);
    }
    var Jr, Kr = {}, Vr = {}, Qr = (a3) => {
      if (!(a3 instanceof S || "unwind" == a3)) throw a3;
    }, Yr = (a3) => {
      throw s = a3, I || 0 < Qa || (e2.onExit?.(a3), C = true), new S(a3);
    }, Xr = (a3) => {
      if (!C) try {
        if (a3(), !(I || 0 < Qa)) try {
          s = a3 = s, Yr(a3);
        } catch (r3) {
          Qr(r3);
        }
      } catch (r3) {
        Qr(r3);
      }
    }, Zr = [], at = {}, rt = (a3) => {
      var r3;
      return (r3 = /\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(a3)) ? +r3[1] : (r3 = /:(\d+):\d+(?:\)|$)/.exec(a3)) ? 2147483648 | +r3[1] : 0;
    }, tt = (a3) => {
      for (var r3 of a3) (a3 = rt(r3)) && (at[a3] = r3);
    }, et = (a3) => {
      if (!(a3 = at[a3])) return 0;
      var r3;
      if (r3 = /^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(a3)) r3 = r3[1];
      else if (r3 = /^\s+at (.*) \(.*\)$/.exec(a3)) r3 = r3[1];
      else {
        if (!(r3 = /^(.+?)@/.exec(a3))) return 0;
        r3 = r3[1];
      }
      ut(et.Ab ?? 0), a3 = et;
      var t3 = Ua(r3) + 1, e3 = st(t3);
      return e3 && Ma(r3, h, e3, t3), a3.Ab = e3, et.Ab;
    }, nt = {}, ot = () => {
      if (!Jr) {
        var a3, r3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.language || "C").replace("-", "_") + ".UTF-8", _: n3 || "./this.program" };
        for (a3 in nt) void 0 === nt[a3] ? delete r3[a3] : r3[a3] = nt[a3];
        var t3 = [];
        for (a3 in r3) t3.push(`${a3}=${r3[a3]}`);
        Jr = t3;
      }
      return Jr;
    };
    if ((() => {
      let a3 = aa.prototype;
      Object.assign(a3, { isAliasOf: function(a4) {
        if (!(this instanceof aa && a4 instanceof aa)) return false;
        var r4 = this.ma.ta.na, t3 = this.ma.ra;
        a4.ma = a4.ma;
        var e3 = a4.ma.ta.na;
        for (a4 = a4.ma.ra; r4.ya; ) t3 = r4.Xa(t3), r4 = r4.ya;
        for (; e3.ya; ) a4 = e3.Xa(a4), e3 = e3.ya;
        return r4 === e3 && t3 === a4;
      }, clone: function() {
        if (this.ma.ra || Q(this), this.ma.Va) return this.ma.count.value += 1, this;
        var a4 = Z, r4 = Object, t3 = r4.create, e3 = Object.getPrototypeOf(this), n4 = this.ma;
        return (a4 = a4(t3.call(r4, e3, { ma: { value: { count: n4.count, Sa: n4.Sa, Va: n4.Va, ra: n4.ra, ta: n4.ta, xa: n4.xa, Ba: n4.Ba } } }))).ma.count.value += 1, a4.ma.Sa = false, a4;
      }, delete() {
        if (this.ma.ra || Q(this), this.ma.Sa && !this.ma.Va) throw new G("Object already scheduled for deletion");
        X(this);
        var a4 = this.ma;
        --a4.count.value, 0 === a4.count.value && (a4.xa ? a4.Ba.Ha(a4.xa) : a4.ta.na.Ha(a4.ra)), this.ma.Va || (this.ma.xa = void 0, this.ma.ra = void 0);
      }, isDeleted: function() {
        return !this.ma.ra;
      }, deleteLater: function() {
        if (this.ma.ra || Q(this), this.ma.Sa && !this.ma.Va) throw new G("Object already scheduled for deletion");
        return this.ma.Sa = true, this;
      } });
      const r3 = Symbol.dispose;
      r3 && (a3[r3] = a3.delete);
    })(), Object.assign(pa.prototype, { Ib(a3) {
      return this.yb && (a3 = this.yb(a3)), a3;
    }, qb(a3) {
      this.Ha?.(a3);
    }, Ea: U, sa: function(a3) {
      function r3() {
        return this.ab ? va(this.na.La, { ta: this.Rb, ra: t3, Ba: this, xa: a3 }) : va(this.na.La, { ta: this, ra: a3 });
      }
      var t3 = this.Ib(a3);
      if (!t3) return this.qb(a3), null;
      var e3 = da(this.na, t3);
      if (void 0 !== e3) return 0 === e3.ma.count.value ? (e3.ma.ra = t3, e3.ma.xa = a3, e3.clone()) : (e3 = e3.clone(), this.qb(a3), e3);
      if (e3 = this.na.Hb(t3), !(e3 = ta[e3])) return r3.call(this);
      e3 = this.$a ? e3.Eb : e3.pointerType;
      var n4 = ca(t3, this.na, e3.na);
      return null === n4 ? r3.call(this) : this.ab ? va(e3.na.La, { ta: e3, ra: n4, Ba: this, xa: a3 }) : va(e3.na.La, { ta: e3, ra: n4 });
    } }), $r = Array(4096), Ur(vr, "/"), Fr("/tmp"), Fr("/home"), Fr("/home/web_user"), (function() {
      Fr("/dev"), Mr(259, { read: () => 0, write: (a4, r4, t4, e3) => e3, Fa: () => 0 }), Lr("/dev/null", 259), hr(1280, wr), hr(1536, dr), Lr("/dev/tty", 1280), Lr("/dev/tty1", 1536);
      var a3 = new Uint8Array(1024), r3 = 0, t3 = () => (0 === r3 && (sr(a3), r3 = a3.byteLength), a3[--r3]);
      Gr("random", t3), Gr("urandom", t3), Fr("/dev/shm"), Fr("/dev/shm/tmp");
    })(), (function() {
      Fr("/proc");
      var a3 = Fr("/proc/self");
      Fr("/proc/self/fd"), Ur({ Ja() {
        var r3 = Pr(a3, "fd", 16895, 73);
        return r3.qa = { Fa: vr.qa.Fa }, r3.pa = { Ua(a4, r4) {
          var t3 = Ir(a4 = +r4);
          return (a4 = { parent: null, Ja: { wb: "fake" }, pa: { Wa: () => t3.path }, id: a4 + 1 }).parent = a4;
        }, ob: () => Array.from(yr.entries()).filter(([, a4]) => a4).map(([a4]) => a4.toString()) }, r3;
      } }, "/proc/self/fd");
    })(), e2.noExitRuntime && (I = e2.noExitRuntime), e2.print && ($ = e2.print), e2.printErr && (A = e2.printErr), e2.wasmBinary && (i2 = e2.wasmBinary), e2.thisProgram && (n3 = e2.thisProgram), e2.preInit) for ("function" == typeof e2.preInit && (e2.preInit = [e2.preInit]); 0 < e2.preInit.length; ) e2.preInit.shift()();
    var it, st, ut, ft, lt, ht, ct, wt, dt = { 212700: () => "undefined" != typeof wasmOffsetConverter }, vt = { U: function() {
      return "undefined" != typeof wasmOffsetConverter;
    }, n: (a3, r3, t3) => {
      var e3 = new B(a3);
      throw v[e3.ra + 16 >> 2] = 0, v[e3.ra + 4 >> 2] = r3, v[e3.ra + 8 >> 2] = t3, a3;
    }, Q: () => x(""), r: (a3) => {
      var r3 = z[a3];
      delete z[a3];
      var t3 = r3.nb, e3 = r3.Ha, n4 = r3.rb, o4 = n4.map((a4) => a4.Lb).concat(n4.map((a4) => a4.Vb));
      W([a3], o4, (a4) => {
        var o5 = {};
        return n4.forEach((r4, t4) => {
          var e4 = a4[t4], i3 = r4.Jb, s2 = r4.Kb, u2 = a4[t4 + n4.length], f2 = r4.Ub, l2 = r4.Wb;
          o5[r4.Gb] = { read: (a5) => e4.sa(i3(s2, a5)), write: (a5, r5) => {
            var t5 = [];
            f2(l2, a5, u2.wa(t5, r5)), M(t5);
          }, optional: a4[t4].optional };
        }), [{ name: r3.name, sa: (a5) => {
          var r4, t4 = {};
          for (r4 in o5) t4[r4] = o5[r4].read(a5);
          return e3(a5), t4;
        }, wa: (a5, r4) => {
          for (var n5 in o5) if (!(n5 in r4) && !o5[n5].optional) throw new TypeError(`Missing field: "${n5}"`);
          var i3 = t3();
          for (n5 in o5) o5[n5].write(i3, r4[n5]);
          return null !== a5 && a5.push(e3, i3), i3;
        }, Ea: U, Aa: e3 }];
      });
    }, E: (a3, r3, t3, e3, n4) => {
      r3 = _(r3);
      let o4 = (a4) => a4;
      if (e3 = 0n === e3) {
        const a4 = 8 * t3;
        o4 = (r4) => BigInt.asUintN(a4, r4), n4 = o4(n4);
      }
      K(a3, { name: r3, sa: o4, wa: (a4, r4) => ("number" == typeof r4 && (r4 = BigInt(r4)), r4), Ea: V(r3, t3, !e3), Aa: null });
    }, ba: (a3, r3, t3, e3) => {
      K(a3, { name: r3 = _(r3), sa: function(a4) {
        return !!a4;
      }, wa: function(a4, r4) {
        return r4 ? t3 : e3;
      }, Ea: function(a4) {
        return this.sa(h[a4]);
      }, Aa: null });
    }, e: (a3, r3, t3, e3, n4, o4, i3, s2, u2, f2, l2, h2, c2) => {
      l2 = _(l2), o4 = ya(n4, o4), s2 &&= ya(i3, s2), f2 &&= ya(u2, f2), c2 = ya(h2, c2);
      var w2 = oa(l2);
      na(w2, function() {
        Aa(`Cannot construct ${l2} due to unbound types`, [e3]);
      }), W([a3, r3, t3], e3 ? [e3] : [], (r4) => {
        if (r4 = r4[0], e3) var t4 = r4.na, n5 = t4.La;
        else n5 = aa.prototype;
        r4 = ra(l2, function(...a4) {
          if (Object.getPrototypeOf(this) !== i4) throw new G(`Use 'new' to construct ${l2}`);
          if (void 0 === h3.Oa) throw new G(`${l2} has no accessible constructor`);
          var r5 = h3.Oa[a4.length];
          if (void 0 === r5) throw new G(`Tried to invoke ctor of ${l2} with invalid number of parameters (${a4.length}) - expected (${Object.keys(h3.Oa).toString()}) parameters instead!`);
          return r5.apply(this, a4);
        });
        var i4 = Object.create(n5, { constructor: { value: r4 } });
        r4.prototype = i4;
        var u3, h3 = new ia(l2, r4, i4, c2, t4, o4, s2, f2);
        return h3.ya && ((u3 = h3.ya).Ya ?? (u3.Ya = []), h3.ya.Ya.push(h3)), t4 = new pa(l2, h3, true, false, false), u3 = new pa(l2 + "*", h3, false, false, false), n5 = new pa(l2 + " const*", h3, false, true, false), ta[a3] = { pointerType: u3, Eb: n5 }, ma(w2, r4), [t4, u3, n5];
      });
    }, v: (a3, r3, t3, e3, n4, o4, i3) => {
      var s2 = ka(t3, e3);
      r3 = _(r3), r3 = xa(r3), o4 = ya(n4, o4), W([], [a3], (a4) => {
        function e4() {
          Aa(`Cannot call ${n5} due to unbound types`, s2);
        }
        var n5 = `${(a4 = a4[0]).name}.${r3}`;
        r3.startsWith("@@") && (r3 = Symbol[r3.substring(2)]);
        var u2 = a4.na.constructor;
        return void 0 === u2[r3] ? (e4.Ma = t3 - 1, u2[r3] = e4) : (ea(u2, r3, n5), u2[r3].ua[t3 - 1] = e4), W([], s2, (e5) => {
          if (e5 = Ea(n5, [e5[0], null].concat(e5.slice(1)), null, o4, i3), void 0 === u2[r3].ua ? (e5.Ma = t3 - 1, u2[r3] = e5) : u2[r3].ua[t3 - 1] = e5, a4.na.Ya) for (const t4 of a4.na.Ya) t4.constructor.hasOwnProperty(r3) || (t4.constructor[r3] = e5);
          return [];
        }), [];
      });
    }, g: (a3, r3, t3, e3, n4, o4) => {
      var i3 = ka(r3, t3);
      n4 = ya(e3, n4), W([], [a3], (a4) => {
        var t4 = `constructor ${(a4 = a4[0]).name}`;
        if (void 0 === a4.na.Oa && (a4.na.Oa = []), void 0 !== a4.na.Oa[r3 - 1]) throw new G(`Cannot register multiple constructors with identical number of parameters (${r3 - 1}) for class '${a4.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return a4.na.Oa[r3 - 1] = () => {
          Aa(`Cannot construct ${a4.name} due to unbound types`, i3);
        }, W([], i3, (e4) => (e4.splice(1, 0, null), a4.na.Oa[r3 - 1] = Ea(t4, e4, null, n4, o4), [])), [];
      });
    }, b: (a3, r3, t3, e3, n4, o4, i3, s2) => {
      var u2 = ka(t3, e3);
      r3 = _(r3), r3 = xa(r3), o4 = ya(n4, o4), W([], [a3], (a4) => {
        function e4() {
          Aa(`Cannot call ${n5} due to unbound types`, u2);
        }
        var n5 = `${(a4 = a4[0]).name}.${r3}`;
        r3.startsWith("@@") && (r3 = Symbol[r3.substring(2)]), s2 && a4.na.Sb.push(r3);
        var f2 = a4.na.La, l2 = f2[r3];
        return void 0 === l2 || void 0 === l2.ua && l2.className !== a4.name && l2.Ma === t3 - 2 ? (e4.Ma = t3 - 2, e4.className = a4.name, f2[r3] = e4) : (ea(f2, r3, n5), f2[r3].ua[t3 - 2] = e4), W([], u2, (e5) => (e5 = Ea(n5, e5, a4, o4, i3), void 0 === f2[r3].ua ? (e5.Ma = t3 - 2, f2[r3] = e5) : f2[r3].ua[t3 - 2] = e5, [])), [];
      });
    }, c: (a3, r3, t3, e3, n4, o4, i3, s2, u2, f2) => {
      r3 = _(r3), n4 = ya(e3, n4), W([], [a3], (a4) => {
        var e4 = `${(a4 = a4[0]).name}.${r3}`, l2 = { get() {
          Aa(`Cannot access ${e4} due to unbound types`, [t3, i3]);
        }, enumerable: true, configurable: true };
        return l2.set = u2 ? () => Aa(`Cannot access ${e4} due to unbound types`, [t3, i3]) : () => {
          throw new G(e4 + " is a read-only property");
        }, Object.defineProperty(a4.na.La, r3, l2), W([], u2 ? [t3, i3] : [t3], (t4) => {
          var i4 = t4[0], l3 = { get() {
            var r4 = Oa(this, a4, e4 + " getter");
            return i4.sa(n4(o4, r4));
          }, enumerable: true };
          if (u2) {
            u2 = ya(s2, u2);
            var h2 = t4[1];
            l3.set = function(r4) {
              var t5 = Oa(this, a4, e4 + " setter"), n5 = [];
              u2(f2, t5, h2.wa(n5, r4)), M(n5);
            };
          }
          return Object.defineProperty(a4.na.La, r3, l3), [];
        }), [];
      });
    }, _: (a3) => K(a3, Ra), m: (a3, r3, t3, e3) => {
      function n4() {
      }
      r3 = _(r3), n4.values = {}, K(a3, { name: r3, constructor: n4, sa: function(a4) {
        return this.constructor.values[a4];
      }, wa: (a4, r4) => r4.value, Ea: qa(r3, t3, e3), Aa: null }), na(r3, n4);
    }, d: (a3, r3, t3) => {
      var e3 = Ia(a3, "enum");
      r3 = _(r3), a3 = e3.constructor, e3 = Object.create(e3.constructor.prototype, { value: { value: t3 }, constructor: { value: ra(`${e3.name}_${r3}`, function() {
      }) } }), a3.values[t3] = e3, a3[r3] = e3;
    }, D: (a3, r3, t3) => {
      K(a3, { name: r3 = _(r3), sa: (a4) => a4, wa: (a4, r4) => r4, Ea: Ba(r3, t3), Aa: null });
    }, da: (a3, r3, t3, e3, n4, o4) => {
      var i3 = ka(r3, t3);
      a3 = _(a3), a3 = xa(a3), n4 = ya(e3, n4), na(a3, function() {
        Aa(`Cannot call ${a3} due to unbound types`, i3);
      }, r3 - 1), W([], i3, (t4) => (ma(a3, Ea(a3, [t4[0], null].concat(t4.slice(1)), null, n4, o4), r3 - 1), []));
    }, w: (a3, r3, t3, e3, n4) => {
      r3 = _(r3);
      let o4 = (a4) => a4;
      if (0 === e3) {
        var i3 = 32 - 8 * t3;
        o4 = (a4) => a4 << i3 >>> i3, n4 = o4(n4);
      }
      K(a3, { name: r3, sa: o4, wa: (a4, r4) => r4, Ea: V(r3, t3, 0 !== e3), Aa: null });
    }, o: (a3, r3, t3) => {
      function e3(a4) {
        return new n4(l.buffer, v[a4 + 4 >> 2], v[a4 >> 2]);
      }
      var n4 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][r3];
      K(a3, { name: t3 = _(t3), sa: e3, Ea: e3 }, { Mb: true });
    }, t: (a3) => {
      K(a3, za);
    }, k: (a3, r3, t3, e3, n4, o4, i3, s2, u2, f2, l2, h2) => {
      t3 = _(t3), o4 = ya(n4, o4), s2 = ya(i3, s2), f2 = ya(u2, f2), h2 = ya(l2, h2), W([a3], [r3], (a4) => (a4 = a4[0], [new pa(t3, a4.na, false, false, true, a4, e3, o4, s2, f2, h2)]));
    }, aa: (a3, r3) => {
      K(a3, { name: r3 = _(r3), sa(a4) {
        var r4 = (r4 = a4 + 4) ? La(h, r4, v[a4 >> 2], true) : "";
        return ut(a4), r4;
      }, wa(a4, r4) {
        r4 instanceof ArrayBuffer && (r4 = new Uint8Array(r4));
        var t3 = "string" == typeof r4;
        if (!(t3 || ArrayBuffer.isView(r4) && 1 == r4.BYTES_PER_ELEMENT)) throw new G("Cannot pass non-string to std::string");
        var e3 = t3 ? Ua(r4) : r4.length, n4 = st(4 + e3 + 1), o4 = n4 + 4;
        return v[n4 >> 2] = e3, t3 ? Ma(r4, h, o4, e3 + 1) : h.set(r4, o4), null !== a4 && a4.push(ut, n4), n4;
      }, Ea: U, Aa(a4) {
        ut(a4);
      } });
    }, A: (a3, r3, t3) => {
      if (t3 = _(t3), 2 === r3) var e3 = Wa, n4 = _a, o4 = Ga;
      else e3 = Ja, n4 = Ka, o4 = Va;
      K(a3, { name: t3, sa: (a4) => {
        var t4 = e3(a4 + 4, v[a4 >> 2] * r3, true);
        return ut(a4), t4;
      }, wa: (a4, e4) => {
        if ("string" != typeof e4) throw new G(`Cannot pass non-string to C++ string type ${t3}`);
        var i3 = o4(e4), s2 = st(4 + i3 + r3);
        return v[s2 >> 2] = i3 / r3, n4(e4, s2 + 4, i3 + r3), null !== a4 && a4.push(ut, s2), s2;
      }, Ea: U, Aa(a4) {
        ut(a4);
      } });
    }, s: (a3, r3, t3, e3, n4, o4) => {
      z[a3] = { name: _(r3), nb: ya(t3, e3), Ha: ya(n4, o4), rb: [] };
    }, l: (a3, r3, t3, e3, n4, o4, i3, s2, u2, f2) => {
      z[a3].rb.push({ Gb: _(r3), Lb: t3, Jb: ya(e3, n4), Kb: o4, Vb: i3, Ub: ya(s2, u2), Wb: f2 });
    }, ca: (a3, r3) => {
      K(a3, { Nb: true, name: r3 = _(r3), sa: () => {
      }, wa: () => {
      } });
    }, I: () => {
      I = false, Qa = 0;
    }, i: (a3, r3, t3) => {
      var [e3, ...n4] = Za(a3, r3), o4 = e3.wa.bind(e3), i3 = n4.map((a4) => a4.Ea.bind(a4));
      a3--;
      var s2 = Array(a3);
      return r3 = `methodCaller<(${n4.map((a4) => a4.name)}) => ${e3.name}>`, Xa(ra(r3, (r4, e4, n5, u2) => {
        for (var f2 = 0, l2 = 0; l2 < a3; ++l2) s2[l2] = i3[l2](u2 + f2), f2 += 8;
        switch (t3) {
          case 0:
            var h2 = Pa(r4).apply(null, s2);
            break;
          case 2:
            h2 = Reflect.construct(Pa(r4), s2);
            break;
          case 3:
            h2 = s2[0];
            break;
          case 1:
            h2 = Pa(r4)[rr(e4)](...s2);
        }
        return h2 = o4(r4 = [], h2), r4.length && (v[n5 >> 2] = Da(r4)), h2;
      }));
    }, a: Sa, W: (a3) => a3 ? (a3 = rr(a3), Da(globalThis[a3])) : Da(globalThis), q: (a3, r3) => (a3 = Pa(a3), r3 = Pa(r3), Da(a3[r3])), f: (a3) => {
      9 < a3 && (ja[a3 + 1] += 1);
    }, $: (a3, r3) => (a3 = Pa(a3)) instanceof (r3 = Pa(r3)), j: tr, Z: tr, u: (a3) => "number" == typeof (a3 = Pa(a3)), x: (a3) => "string" == typeof (a3 = Pa(a3)), F: () => Da([]), p: (a3) => Da(rr(a3)), h: (a3) => {
      var r3 = Pa(a3);
      M(r3), Sa(a3);
    }, z: (a3) => (a3 = Pa(a3), Da(typeof a3)), G: (a3, r3) => {
      if (Vr[a3] && (clearTimeout(Vr[a3].id), delete Vr[a3]), !r3) return 0;
      var t3 = setTimeout(() => {
        delete Vr[a3], Xr(() => lt(a3, performance.now()));
      }, r3);
      return Vr[a3] = { id: t3, qc: r3 }, 0;
    }, S: (a3, r3, t3, e3) => {
      var n4 = (/* @__PURE__ */ new Date()).getFullYear(), o4 = new Date(n4, 0, 1).getTimezoneOffset();
      n4 = new Date(n4, 6, 1).getTimezoneOffset(), v[a3 >> 2] = 60 * Math.max(o4, n4), d[r3 >> 2] = Number(o4 != n4), a3 = (r3 = (a4) => {
        var r4 = Math.abs(a4);
        return `UTC${0 <= a4 ? "-" : "+"}${String(Math.floor(r4 / 60)).padStart(2, "0")}${String(r4 % 60).padStart(2, "0")}`;
      })(o4), r3 = r3(n4), n4 < o4 ? (Ma(a3, h, t3, 17), Ma(r3, h, e3, 17)) : (Ma(a3, h, e3, 17), Ma(r3, h, t3, 17));
    }, P: function(a3, r3, t3) {
      return 0 <= a3 && 3 >= a3 ? (b[t3 >> 3] = BigInt(Math.round(1e6 * (0 === a3 ? Date.now() : performance.now()))), 0) : 28;
    }, Y: (a3, r3, t3) => {
      Zr.length = 0;
      for (var e3; e3 = h[r3++]; ) {
        var n4 = 105 != e3;
        t3 += (n4 &= 112 != e3) && t3 % 8 ? 4 : 0, Zr.push(112 == e3 ? v[t3 >> 2] : 106 == e3 ? b[t3 >> 3] : 105 == e3 ? d[t3 >> 2] : m[t3 >> 3]), t3 += n4 ? 8 : 4;
      }
      return dt[a3](...Zr);
    }, C: (a3, r3) => A(a3 ? La(h, a3, r3) : ""), y: () => performance.now(), T: et, H: (a3) => {
      var r3 = h.length;
      if (2147483648 < (a3 >>>= 0)) return false;
      for (var t3 = 1; 4 >= t3; t3 *= 2) {
        var e3 = r3 * (1 + 0.2 / t3);
        e3 = Math.min(e3, a3 + 100663296);
        a: {
          e3 = (Math.min(2147483648, 65536 * Math.ceil(Math.max(a3, e3) / 65536)) - ht.buffer.byteLength + 65535) / 65536 | 0;
          try {
            ht.grow(e3), k();
            var n4 = 1;
            break a;
          } catch (o4) {
          }
          n4 = void 0;
        }
        if (n4) return true;
      }
      return false;
    }, X: () => {
      var a3 = Error().stack.toString().split("\n");
      return "Error" == a3[0] && a3.shift(), tt(a3), at.tb = rt(a3[3]), at.Ob = a3, at.tb;
    }, V: (a3, r3, t3) => {
      if (at.tb == a3) var e3 = at.Ob;
      else "Error" == (e3 = Error().stack.toString().split("\n"))[0] && e3.shift(), tt(e3);
      for (var n4 = 3; e3[n4] && rt(e3[n4]) != a3; ) ++n4;
      for (a3 = 0; a3 < t3 && e3[a3 + n4]; ++a3) d[r3 + 4 * a3 >> 2] = rt(e3[a3 + n4]);
      return a3;
    }, K: (a3, r3) => {
      var t3, e3 = 0, n4 = 0;
      for (t3 of ot()) {
        var o4 = r3 + e3;
        v[a3 + n4 >> 2] = o4, e3 += Ma(t3, h, o4, 1 / 0) + 1, n4 += 4;
      }
      return 0;
    }, L: (a3, r3) => {
      var t3 = ot();
      for (var e3 of (v[a3 >> 2] = t3.length, a3 = 0, t3)) a3 += Ua(e3) + 1;
      return v[r3 >> 2] = a3, 0;
    }, B: (a3) => {
      s = a3, Yr(a3);
    }, O: function(a3) {
      try {
        var r3 = Ir(a3);
        if (null === r3.Pa) throw new kr(8);
        r3.kb && (r3.kb = null);
        try {
          r3.qa.close && r3.qa.close(r3);
        } catch (t3) {
          throw t3;
        } finally {
          yr[r3.Pa] = null;
        }
        return r3.Pa = null, 0;
      } catch (t3) {
        if (void 0 === Kr || "ErrnoError" !== t3.name) throw t3;
        return t3.Ta;
      }
    }, N: function(a3, r3, t3, e3) {
      try {
        a: {
          var n4 = Ir(a3);
          a3 = r3;
          for (var o4, i3 = r3 = 0; i3 < t3; i3++) {
            var s2 = v[a3 >> 2], u2 = v[a3 + 4 >> 2];
            a3 += 8;
            var f2 = n4, h2 = s2, c2 = u2, w2 = o4, d2 = l;
            if (0 > c2 || 0 > w2) throw new kr(28);
            if (null === f2.Pa) throw new kr(8);
            if (1 == (2097155 & f2.flags)) throw new kr(8);
            if (16384 == (61440 & f2.node.mode)) throw new kr(31);
            if (!f2.qa.read) throw new kr(28);
            var p2 = void 0 !== w2;
            if (p2) {
              if (!f2.seekable) throw new kr(70);
            } else w2 = f2.position;
            var m2 = f2.qa.read(f2, d2, h2, c2, w2);
            p2 || (f2.position += m2);
            var b2 = m2;
            if (0 > b2) {
              var y2 = -1;
              break a;
            }
            if (r3 += b2, b2 < u2) break;
            void 0 !== o4 && (o4 += b2);
          }
          y2 = r3;
        }
        return v[e3 >> 2] = y2, 0;
      } catch (g2) {
        if (void 0 === Kr || "ErrnoError" !== g2.name) throw g2;
        return g2.Ta;
      }
    }, J: function(a3, r3, t3, e3) {
      r3 = -9007199254740992 > r3 || 9007199254740992 < r3 ? NaN : Number(r3);
      try {
        if (isNaN(r3)) return 61;
        var n4 = Ir(a3);
        return _r(n4, r3, t3), b[e3 >> 3] = BigInt(n4.position), n4.kb && 0 === r3 && 0 === t3 && (n4.kb = null), 0;
      } catch (o4) {
        if (void 0 === Kr || "ErrnoError" !== o4.name) throw o4;
        return o4.Ta;
      }
    }, M: function(a3, r3, t3, e3) {
      try {
        a: {
          var n4 = Ir(a3);
          a3 = r3;
          for (var o4, i3 = r3 = 0; i3 < t3; i3++) {
            var s2 = v[a3 >> 2], u2 = v[a3 + 4 >> 2];
            a3 += 8;
            var f2 = n4, h2 = s2, c2 = u2, w2 = o4, d2 = l;
            if (0 > c2 || 0 > w2) throw new kr(28);
            if (null === f2.Pa) throw new kr(8);
            if (!(2097155 & f2.flags)) throw new kr(8);
            if (16384 == (61440 & f2.node.mode)) throw new kr(31);
            if (!f2.qa.write) throw new kr(28);
            f2.seekable && 1024 & f2.flags && _r(f2, 0, 2);
            var p2 = void 0 !== w2;
            if (p2) {
              if (!f2.seekable) throw new kr(70);
            } else w2 = f2.position;
            var m2 = f2.qa.write(f2, d2, h2, c2, w2, void 0);
            p2 || (f2.position += m2);
            var b2 = m2;
            if (0 > b2) {
              var y2 = -1;
              break a;
            }
            if (r3 += b2, b2 < u2) break;
            void 0 !== o4 && (o4 += b2);
          }
          y2 = r3;
        }
        return v[e3 >> 2] = y2, 0;
      } catch (g2) {
        if (void 0 === Kr || "ErrnoError" !== g2.name) throw g2;
        return g2.Ta;
      }
    }, R: Yr };
    return wt = await (async function() {
      function a3(a4) {
        return a4 = wt = a4.exports, it = a4.ga, st = a4.ha, ut = a4.ia, ft = a4.ka, lt = a4.la, ht = a4.ea, ct = a4.ja, k(), wt;
      }
      var r3 = { a: vt };
      return e2.instantiateWasm ? new Promise((t3) => {
        e2.instantiateWasm(r3, (r4, e3) => {
          t3(a3(r4));
        });
      }) : (g ??= e2.locateFile ? e2.locateFile("arcgis-knowledge-client-core.wasm", o3) : o3 + "arcgis-knowledge-client-core.wasm", a3((await j(r3)).instance));
    })(), (function() {
      function a3() {
        if (e2.calledRun = true, !C) {
          var a4, r3;
          if (E = true, e2.noFSInit || Ar || (Ar = true, a4 ??= e2.stdin, r3 ??= e2.stdout, t3 ??= e2.stderr, a4 ? Gr("stdin", a4) : Hr("/dev/tty", "/dev/stdin"), r3 ? Gr("stdout", null, r3) : Hr("/dev/tty", "/dev/stdout"), t3 ? Gr("stderr", null, t3) : Hr("/dev/tty1", "/dev/stderr"), Wr("/dev/stdin", 0), Wr("/dev/stdout", 1), Wr("/dev/stderr", 1)), wt.fa(), Cr = false, u?.(e2), e2.onRuntimeInitialized?.(), e2.postRun) for ("function" == typeof e2.postRun && (e2.postRun = [e2.postRun]); e2.postRun.length; ) {
            var t3 = e2.postRun.shift();
            D.push(t3);
          }
          P(D);
        }
      }
      if (e2.preRun) for ("function" == typeof e2.preRun && (e2.preRun = [e2.preRun]); e2.preRun.length; ) q();
      P(R), e2.setStatus ? (e2.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => e2.setStatus(""), 1), a3();
      }, 1)) : a3();
    })(), E ? e2 : new Promise((a3, r3) => {
      u = a3, f = r3;
    });
  }, a.exports = n2, a.exports.default = n2), e.exports;
  var a, r2, n2;
}
var o2 = n();
var i = r({ __proto__: null, default: o(o2) }, [o2]);
export {
  i as a
};
//# sourceMappingURL=arcgis-knowledge-client-core-Q445CQHR.js.map
