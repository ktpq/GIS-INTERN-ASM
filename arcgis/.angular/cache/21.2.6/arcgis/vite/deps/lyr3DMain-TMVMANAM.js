import {
  o
} from "./chunk-CW3EW7KK.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/lyr3DMain.js
function e(r, e2) {
  for (var t2 = 0; t2 < e2.length; t2++) {
    const n2 = e2[t2];
    if ("string" != typeof n2 && !Array.isArray(n2)) {
      for (const e3 in n2) if ("default" !== e3 && !(e3 in r)) {
        const t3 = Object.getOwnPropertyDescriptor(n2, e3);
        t3 && Object.defineProperty(r, e3, t3.get ? t3 : { enumerable: true, get: () => n2[e3] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var t;
var n = { exports: {} };
function a() {
  return t || (t = 1, r = n, e2 = "undefined" != typeof document ? document.currentScript?.src : void 0, a2 = async function(r2 = {}) {
    var t2, n2 = r2, a3 = "./this.program", o3 = "";
    function i2(r3) {
      return n2.locateFile ? n2.locateFile(r3, o3) : o3 + r3;
    }
    try {
      o3 = new URL(".", e2).href;
    } catch {
    }
    t2 = async (r3) => {
      var e3 = await fetch(r3, { credentials: "same-origin" });
      if (e3.ok) return e3.arrayBuffer();
      throw new Error(e3.status + " : " + e3.url);
    };
    var u, s, f, c, l, p, v, h, d, g, m, y, w, T, b = console.log.bind(console), A = console.error.bind(console), P = false, C = false;
    function W() {
      var r3 = c.buffer;
      l = new Int8Array(r3), v = new Int16Array(r3), n2.HEAPU8 = p = new Uint8Array(r3), h = new Uint16Array(r3), d = new Int32Array(r3), n2.HEAPU32 = g = new Uint32Array(r3), m = new Float32Array(r3), n2.HEAPF64 = y = new Float64Array(r3), w = new BigInt64Array(r3), T = new BigUint64Array(r3);
    }
    function E() {
      if (n2.preRun) for ("function" == typeof n2.preRun && (n2.preRun = [n2.preRun]); n2.preRun.length; ) G(n2.preRun.shift());
      H(z);
    }
    function F() {
      C = true, Ye.F();
    }
    function _() {
      if (n2.postRun) for ("function" == typeof n2.postRun && (n2.postRun = [n2.postRun]); n2.postRun.length; ) L(n2.postRun.shift());
      H(N);
    }
    var x, R = 0, $ = null;
    function S(r3) {
      R++, n2.monitorRunDependencies?.(R);
    }
    function k(r3) {
      if (R--, n2.monitorRunDependencies?.(R), 0 == R && $) {
        var e3 = $;
        $ = null, e3();
      }
    }
    function I(r3) {
      n2.onAbort?.(r3), A(r3 = "Aborted(" + r3 + ")"), P = true, r3 += ". Build with -sASSERTIONS for more info.";
      var e3 = new WebAssembly.RuntimeError(r3);
      throw f?.(e3), e3;
    }
    function O() {
      return i2("lyr3DMain.wasm");
    }
    function U(r3) {
      if (r3 == x && u) return new Uint8Array(u);
      throw "both async and sync fetching of the wasm failed";
    }
    async function D(r3) {
      if (!u) try {
        var e3 = await t2(r3);
        return new Uint8Array(e3);
      } catch {
      }
      return U(r3);
    }
    async function V(r3, e3) {
      try {
        var t3 = await D(r3);
        return await WebAssembly.instantiate(t3, e3);
      } catch (n3) {
        A(`failed to asynchronously prepare wasm: ${n3}`), I(n3);
      }
    }
    async function B(r3, e3, t3) {
      if (!r3 && "function" == typeof WebAssembly.instantiateStreaming) try {
        var n3 = fetch(e3, { credentials: "same-origin" });
        return await WebAssembly.instantiateStreaming(n3, t3);
      } catch (a4) {
        A(`wasm streaming compile failed: ${a4}`), A("falling back to ArrayBuffer instantiation");
      }
      return V(e3, t3);
    }
    function M() {
      return { a: Ge };
    }
    async function j() {
      function r3(r4, e4) {
        return Ye = r4.exports, c = Ye.E, W(), _r = Ye.H, ze(Ye), k(), Ye;
      }
      function e3(e4) {
        return r3(e4.instance);
      }
      S();
      var t3 = M();
      return n2.instantiateWasm ? new Promise((e4, a4) => {
        n2.instantiateWasm(t3, (t4, n3) => {
          e4(r3(t4));
        });
      }) : (x ??= O(), e3(await B(u, x, t3)));
    }
    var H = (r3) => {
      for (; r3.length > 0; ) r3.shift()(n2);
    }, N = [], L = (r3) => N.push(r3), z = [], G = (r3) => z.push(r3);
    class Y {
      constructor(r3) {
        this.excPtr = r3, this.ptr = r3 - 24;
      }
      set_type(r3) {
        g[this.ptr + 4 >> 2] = r3;
      }
      get_type() {
        return g[this.ptr + 4 >> 2];
      }
      set_destructor(r3) {
        g[this.ptr + 8 >> 2] = r3;
      }
      get_destructor() {
        return g[this.ptr + 8 >> 2];
      }
      set_caught(r3) {
        r3 = r3 ? 1 : 0, l[this.ptr + 12] = r3;
      }
      get_caught() {
        return 0 != l[this.ptr + 12];
      }
      set_rethrown(r3) {
        r3 = r3 ? 1 : 0, l[this.ptr + 13] = r3;
      }
      get_rethrown() {
        return 0 != l[this.ptr + 13];
      }
      init(r3, e3) {
        this.set_adjusted_ptr(0), this.set_type(r3), this.set_destructor(e3);
      }
      set_adjusted_ptr(r3) {
        g[this.ptr + 16 >> 2] = r3;
      }
      get_adjusted_ptr() {
        return g[this.ptr + 16 >> 2];
      }
    }
    var q = (r3, e3, t3) => {
      throw new Y(r3).init(e3, t3), r3;
    }, J = () => I(""), K = {}, Q = (r3) => {
      for (; r3.length; ) {
        var e3 = r3.pop();
        r3.pop()(e3);
      }
    };
    function X(r3) {
      return this.fromWireType(g[r3 >> 2]);
    }
    var Z = {}, rr = {}, er = {}, tr = class extends Error {
      constructor(r3) {
        super(r3), this.name = "InternalError";
      }
    }, nr = (r3) => {
      throw new tr(r3);
    }, ar = (r3, e3, t3) => {
      function n3(e4) {
        var n4 = t3(e4);
        n4.length !== r3.length && nr("Mismatched type converter count");
        for (var a5 = 0; a5 < r3.length; ++a5) pr(r3[a5], n4[a5]);
      }
      r3.forEach((r4) => er[r4] = e3);
      var a4 = new Array(e3.length), o4 = [], i3 = 0;
      e3.forEach((r4, e4) => {
        rr.hasOwnProperty(r4) ? a4[e4] = rr[r4] : (o4.push(r4), Z.hasOwnProperty(r4) || (Z[r4] = []), Z[r4].push(() => {
          a4[e4] = rr[r4], ++i3 === o4.length && n3(a4);
        }));
      }), 0 === o4.length && n3(a4);
    }, or = (r3) => {
      var e3 = K[r3];
      delete K[r3];
      var t3 = e3.elements, n3 = t3.length, a4 = t3.map((r4) => r4.getterReturnType).concat(t3.map((r4) => r4.setterArgumentType)), o4 = e3.rawConstructor, i3 = e3.rawDestructor;
      ar([r3], a4, (r4) => (t3.forEach((e4, t4) => {
        var a5 = r4[t4], o5 = e4.getter, i4 = e4.getterContext, u2 = r4[t4 + n3], s2 = e4.setter, f2 = e4.setterContext;
        e4.read = (r5) => a5.fromWireType(o5(i4, r5)), e4.write = (r5, e5) => {
          var t5 = [];
          s2(f2, r5, u2.toWireType(t5, e5)), Q(t5);
        };
      }), [{ name: e3.name, fromWireType: (r5) => {
        for (var e4 = new Array(n3), a5 = 0; a5 < n3; ++a5) e4[a5] = t3[a5].read(r5);
        return i3(r5), e4;
      }, toWireType: (r5, a5) => {
        if (n3 !== a5.length) throw new TypeError(`Incorrect number of tuple elements for ${e3.name}: expected=${n3}, actual=${a5.length}`);
        for (var u2 = o4(), s2 = 0; s2 < n3; ++s2) t3[s2].write(u2, a5[s2]);
        return null !== r5 && r5.push(i3, u2), u2;
      }, argPackAdvance: dr, readValueFromPointer: X, destructorFunction: i3 }]));
    }, ir = {}, ur = (r3) => {
      var e3 = ir[r3];
      delete ir[r3];
      var t3 = e3.rawConstructor, n3 = e3.rawDestructor, a4 = e3.fields, o4 = a4.map((r4) => r4.getterReturnType).concat(a4.map((r4) => r4.setterArgumentType));
      ar([r3], o4, (r4) => {
        var o5 = {};
        return a4.forEach((e4, t4) => {
          var n4 = e4.fieldName, i3 = r4[t4], u2 = r4[t4].optional, s2 = e4.getter, f2 = e4.getterContext, c2 = r4[t4 + a4.length], l2 = e4.setter, p2 = e4.setterContext;
          o5[n4] = { read: (r5) => i3.fromWireType(s2(f2, r5)), write: (r5, e5) => {
            var t5 = [];
            l2(p2, r5, c2.toWireType(t5, e5)), Q(t5);
          }, optional: u2 };
        }), [{ name: e3.name, fromWireType: (r5) => {
          var e4 = {};
          for (var t4 in o5) e4[t4] = o5[t4].read(r5);
          return n3(r5), e4;
        }, toWireType: (r5, e4) => {
          for (var a5 in o5) if (!(a5 in e4) && !o5[a5].optional) throw new TypeError(`Missing field: "${a5}"`);
          var i3 = t3();
          for (a5 in o5) o5[a5].write(i3, e4[a5]);
          return null !== r5 && r5.push(n3, i3), i3;
        }, argPackAdvance: dr, readValueFromPointer: X, destructorFunction: n3 }];
      });
    }, sr = (r3) => {
      for (var e3 = ""; ; ) {
        var t3 = p[r3++];
        if (!t3) return e3;
        e3 += String.fromCharCode(t3);
      }
    }, fr = class extends Error {
      constructor(r3) {
        super(r3), this.name = "BindingError";
      }
    }, cr = (r3) => {
      throw new fr(r3);
    };
    function lr(r3, e3, t3 = {}) {
      var n3 = e3.name;
      if (r3 || cr(`type "${n3}" must have a positive integer typeid pointer`), rr.hasOwnProperty(r3)) {
        if (t3.ignoreDuplicateRegistrations) return;
        cr(`Cannot register type '${n3}' twice`);
      }
      if (rr[r3] = e3, delete er[r3], Z.hasOwnProperty(r3)) {
        var a4 = Z[r3];
        delete Z[r3], a4.forEach((r4) => r4());
      }
    }
    function pr(r3, e3, t3 = {}) {
      return lr(r3, e3, t3);
    }
    var vr = (r3, e3, t3) => {
      switch (e3) {
        case 1:
          return t3 ? (r4) => l[r4] : (r4) => p[r4];
        case 2:
          return t3 ? (r4) => v[r4 >> 1] : (r4) => h[r4 >> 1];
        case 4:
          return t3 ? (r4) => d[r4 >> 2] : (r4) => g[r4 >> 2];
        case 8:
          return t3 ? (r4) => w[r4 >> 3] : (r4) => T[r4 >> 3];
        default:
          throw new TypeError(`invalid integer width (${e3}): ${r3}`);
      }
    }, hr = (r3, e3, t3, n3, a4) => {
      e3 = sr(e3);
      const o4 = 0n === n3;
      let i3 = (r4) => r4;
      if (o4) {
        const r4 = 8 * t3;
        i3 = (e4) => BigInt.asUintN(r4, e4), a4 = i3(a4);
      }
      pr(r3, { name: e3, fromWireType: i3, toWireType: (r4, e4) => ("number" == typeof e4 && (e4 = BigInt(e4)), e4), argPackAdvance: dr, readValueFromPointer: vr(e3, t3, !o4), destructorFunction: null });
    }, dr = 8, gr = (r3, e3, t3, n3) => {
      pr(r3, { name: e3 = sr(e3), fromWireType: function(r4) {
        return !!r4;
      }, toWireType: function(r4, e4) {
        return e4 ? t3 : n3;
      }, argPackAdvance: dr, readValueFromPointer: function(r4) {
        return this.fromWireType(p[r4]);
      }, destructorFunction: null });
    }, mr = [], yr = [0, 1, , 1, null, 1, true, 1, false, 1], wr = (r3) => {
      r3 > 9 && 0 === --yr[r3 + 1] && (yr[r3] = void 0, mr.push(r3));
    }, Tr = { toValue: (r3) => (r3 || cr(`Cannot use deleted val. handle = ${r3}`), yr[r3]), toHandle: (r3) => {
      switch (r3) {
        case void 0:
          return 2;
        case null:
          return 4;
        case true:
          return 6;
        case false:
          return 8;
        default: {
          const e3 = mr.pop() || yr.length;
          return yr[e3] = r3, yr[e3 + 1] = 1, e3;
        }
      }
    } }, br = { name: "emscripten::val", fromWireType: (r3) => {
      var e3 = Tr.toValue(r3);
      return wr(r3), e3;
    }, toWireType: (r3, e3) => Tr.toHandle(e3), argPackAdvance: dr, readValueFromPointer: X, destructorFunction: null }, Ar = (r3) => pr(r3, br), Pr = (r3, e3) => {
      switch (e3) {
        case 4:
          return function(r4) {
            return this.fromWireType(m[r4 >> 2]);
          };
        case 8:
          return function(r4) {
            return this.fromWireType(y[r4 >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${e3}): ${r3}`);
      }
    }, Cr = (r3, e3, t3) => {
      pr(r3, { name: e3 = sr(e3), fromWireType: (r4) => r4, toWireType: (r4, e4) => e4, argPackAdvance: dr, readValueFromPointer: Pr(e3, t3), destructorFunction: null });
    }, Wr = (r3, e3) => Object.defineProperty(e3, "name", { value: r3 });
    function Er(r3) {
      for (var e3 = 1; e3 < r3.length; ++e3) if (null !== r3[e3] && void 0 === r3[e3].destructorFunction) return true;
      return false;
    }
    function Fr(r3, e3, t3, n3, a4, o4) {
      var i3 = e3.length;
      i3 < 2 && cr("argTypes array size mismatch! Must at least get return value and 'this' types!"), e3[1];
      var u2 = Er(e3), s2 = "void" !== e3[0].name, f2 = i3 - 2, c2 = new Array(f2), l2 = [], p2 = [];
      return Wr(r3, function(...r4) {
        var t4;
        p2.length = 0, l2.length = 1, l2[0] = a4;
        for (var o5 = 0; o5 < f2; ++o5) c2[o5] = e3[o5 + 2].toWireType(p2, r4[o5]), l2.push(c2[o5]);
        function i4(r5) {
          if (u2) Q(p2);
          else for (var n4 = 2; n4 < e3.length; n4++) {
            var a5 = 1 === n4 ? t4 : c2[n4 - 2];
            null !== e3[n4].destructorFunction && e3[n4].destructorFunction(a5);
          }
          if (s2) return e3[0].fromWireType(r5);
        }
        return i4(n3(...l2));
      });
    }
    var _r, xr = (r3, e3, t3) => {
      if (void 0 === r3[e3].overloadTable) {
        var n3 = r3[e3];
        r3[e3] = function(...n4) {
          return r3[e3].overloadTable.hasOwnProperty(n4.length) || cr(`Function '${t3}' called with an invalid number of arguments (${n4.length}) - expects one of (${r3[e3].overloadTable})!`), r3[e3].overloadTable[n4.length].apply(this, n4);
        }, r3[e3].overloadTable = [], r3[e3].overloadTable[n3.argCount] = n3;
      }
    }, Rr = (r3, e3, t3) => {
      n2.hasOwnProperty(r3) ? ((void 0 === t3 || void 0 !== n2[r3].overloadTable && void 0 !== n2[r3].overloadTable[t3]) && cr(`Cannot register public name '${r3}' twice`), xr(n2, r3, r3), n2[r3].overloadTable.hasOwnProperty(t3) && cr(`Cannot register multiple overloads of a function with the same number of arguments (${t3})!`), n2[r3].overloadTable[t3] = e3) : (n2[r3] = e3, n2[r3].argCount = t3);
    }, $r = (r3, e3) => {
      for (var t3 = [], n3 = 0; n3 < r3; n3++) t3.push(g[e3 + 4 * n3 >> 2]);
      return t3;
    }, Sr = (r3, e3, t3) => {
      n2.hasOwnProperty(r3) || nr("Replacing nonexistent public symbol"), void 0 !== n2[r3].overloadTable && void 0 !== t3 ? n2[r3].overloadTable[t3] = e3 : (n2[r3] = e3, n2[r3].argCount = t3);
    }, kr = [], Ir = (r3) => {
      var e3 = kr[r3];
      return e3 || (kr[r3] = e3 = _r.get(r3)), e3;
    }, Or = (r3, e3, t3 = false) => {
      function n3() {
        return Ir(e3);
      }
      r3 = sr(r3);
      var a4 = n3();
      return "function" != typeof a4 && cr(`unknown function pointer with signature ${r3}: ${e3}`), a4;
    };
    class Ur extends Error {
    }
    var Dr, Vr, Br, Mr, jr = (r3) => {
      var e3 = Vr(r3), t3 = sr(e3);
      return Mr(e3), t3;
    }, Hr = (r3, e3) => {
      var t3 = [], n3 = {};
      function a4(r4) {
        n3[r4] || rr[r4] || (er[r4] ? er[r4].forEach(a4) : (t3.push(r4), n3[r4] = true));
      }
      throw e3.forEach(a4), new Ur(`${r3}: ` + t3.map(jr).join([", "]));
    }, Nr = (r3) => {
      const e3 = (r3 = r3.trim()).indexOf("(");
      return -1 === e3 ? r3 : r3.slice(0, e3);
    }, Lr = (r3, e3, t3, n3, a4, o4, i3, u2) => {
      var s2 = $r(e3, t3);
      r3 = sr(r3), r3 = Nr(r3), a4 = Or(n3, a4, i3), Rr(r3, function() {
        Hr(`Cannot call ${r3} due to unbound types`, s2);
      }, e3 - 1), ar([], s2, (t4) => {
        var n4 = [t4[0], null].concat(t4.slice(1));
        return Sr(r3, Fr(r3, n4, null, a4, o4), e3 - 1), [];
      });
    }, zr = (r3, e3, t3, n3, a4) => {
      e3 = sr(e3);
      let o4 = (r4) => r4;
      if (0 === n3) {
        var i3 = 32 - 8 * t3;
        o4 = (r4) => r4 << i3 >>> i3, a4 = o4(a4);
      }
      pr(r3, { name: e3, fromWireType: o4, toWireType: (r4, e4) => e4, argPackAdvance: dr, readValueFromPointer: vr(e3, t3, 0 !== n3), destructorFunction: null });
    }, Gr = (r3, e3, t3) => {
      var n3 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][e3];
      function a4(r4) {
        var e4 = g[r4 >> 2], t4 = g[r4 + 4 >> 2];
        return new n3(l.buffer, t4, e4);
      }
      pr(r3, { name: t3 = sr(t3), fromWireType: a4, argPackAdvance: dr, readValueFromPointer: a4 }, { ignoreDuplicateRegistrations: true });
    }, Yr = (r3, e3, t3, n3) => {
      if (!(n3 > 0)) return 0;
      for (var a4 = t3, o4 = t3 + n3 - 1, i3 = 0; i3 < r3.length; ++i3) {
        var u2 = r3.codePointAt(i3);
        if (u2 <= 127) {
          if (t3 >= o4) break;
          e3[t3++] = u2;
        } else if (u2 <= 2047) {
          if (t3 + 1 >= o4) break;
          e3[t3++] = 192 | u2 >> 6, e3[t3++] = 128 | 63 & u2;
        } else if (u2 <= 65535) {
          if (t3 + 2 >= o4) break;
          e3[t3++] = 224 | u2 >> 12, e3[t3++] = 128 | u2 >> 6 & 63, e3[t3++] = 128 | 63 & u2;
        } else {
          if (t3 + 3 >= o4) break;
          e3[t3++] = 240 | u2 >> 18, e3[t3++] = 128 | u2 >> 12 & 63, e3[t3++] = 128 | u2 >> 6 & 63, e3[t3++] = 128 | 63 & u2, i3++;
        }
      }
      return e3[t3] = 0, t3 - a4;
    }, qr = (r3, e3, t3) => Yr(r3, p, e3, t3), Jr = (r3) => {
      for (var e3 = 0, t3 = 0; t3 < r3.length; ++t3) {
        var n3 = r3.charCodeAt(t3);
        n3 <= 127 ? e3++ : n3 <= 2047 ? e3 += 2 : n3 >= 55296 && n3 <= 57343 ? (e3 += 4, ++t3) : e3 += 3;
      }
      return e3;
    }, Kr = "undefined" != typeof TextDecoder ? new TextDecoder() : void 0, Qr = (r3, e3 = 0, t3 = NaN) => {
      for (var n3 = e3 + t3, a4 = e3; r3[a4] && !(a4 >= n3); ) ++a4;
      if (a4 - e3 > 16 && r3.buffer && Kr) return Kr.decode(r3.subarray(e3, a4));
      for (var o4 = ""; e3 < a4; ) {
        var i3 = r3[e3++];
        if (128 & i3) {
          var u2 = 63 & r3[e3++];
          if (192 != (224 & i3)) {
            var s2 = 63 & r3[e3++];
            if ((i3 = 224 == (240 & i3) ? (15 & i3) << 12 | u2 << 6 | s2 : (7 & i3) << 18 | u2 << 12 | s2 << 6 | 63 & r3[e3++]) < 65536) o4 += String.fromCharCode(i3);
            else {
              var f2 = i3 - 65536;
              o4 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
            }
          } else o4 += String.fromCharCode((31 & i3) << 6 | u2);
        } else o4 += String.fromCharCode(i3);
      }
      return o4;
    }, Xr = (r3, e3) => r3 ? Qr(p, r3, e3) : "", Zr = (r3, e3) => {
      pr(r3, { name: e3 = sr(e3), fromWireType(r4) {
        for (var e4, t3 = g[r4 >> 2], n3 = r4 + 4, a4 = n3, o4 = 0; o4 <= t3; ++o4) {
          var i3 = n3 + o4;
          if (o4 == t3 || 0 == p[i3]) {
            var u2 = Xr(a4, i3 - a4);
            void 0 === e4 ? e4 = u2 : (e4 += String.fromCharCode(0), e4 += u2), a4 = i3 + 1;
          }
        }
        return Mr(r4), e4;
      }, toWireType(r4, e4) {
        var t3;
        e4 instanceof ArrayBuffer && (e4 = new Uint8Array(e4));
        var n3 = "string" == typeof e4;
        n3 || ArrayBuffer.isView(e4) && 1 == e4.BYTES_PER_ELEMENT || cr("Cannot pass non-string to std::string"), t3 = n3 ? Jr(e4) : e4.length;
        var a4 = Br(4 + t3 + 1), o4 = a4 + 4;
        return g[a4 >> 2] = t3, n3 ? qr(e4, o4, t3 + 1) : p.set(e4, o4), null !== r4 && r4.push(Mr, a4), a4;
      }, argPackAdvance: dr, readValueFromPointer: X, destructorFunction(r4) {
        Mr(r4);
      } });
    }, re = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0, ee = (r3, e3) => {
      for (var t3 = r3 >> 1, n3 = t3 + e3 / 2, a4 = t3; !(a4 >= n3) && h[a4]; ) ++a4;
      if (a4 - t3 > 16 && re) return re.decode(h.subarray(t3, a4));
      for (var o4 = "", i3 = t3; !(i3 >= n3); ++i3) {
        var u2 = h[i3];
        if (0 == u2) break;
        o4 += String.fromCharCode(u2);
      }
      return o4;
    }, te = (r3, e3, t3) => {
      if (t3 ??= 2147483647, t3 < 2) return 0;
      for (var n3 = e3, a4 = (t3 -= 2) < 2 * r3.length ? t3 / 2 : r3.length, o4 = 0; o4 < a4; ++o4) {
        var i3 = r3.charCodeAt(o4);
        v[e3 >> 1] = i3, e3 += 2;
      }
      return v[e3 >> 1] = 0, e3 - n3;
    }, ne = (r3) => 2 * r3.length, ae = (r3, e3) => {
      for (var t3 = "", n3 = 0; !(n3 >= e3 / 4); n3++) {
        var a4 = d[r3 + 4 * n3 >> 2];
        if (!a4) break;
        t3 += String.fromCodePoint(a4);
      }
      return t3;
    }, oe = (r3, e3, t3) => {
      if (t3 ??= 2147483647, t3 < 4) return 0;
      for (var n3 = e3, a4 = n3 + t3 - 4, o4 = 0; o4 < r3.length; ++o4) {
        var i3 = r3.codePointAt(o4);
        if (i3 > 65535 && o4++, d[e3 >> 2] = i3, (e3 += 4) + 4 > a4) break;
      }
      return d[e3 >> 2] = 0, e3 - n3;
    }, ie = (r3) => {
      for (var e3 = 0, t3 = 0; t3 < r3.length; ++t3) r3.codePointAt(t3) > 65535 && t3++, e3 += 4;
      return e3;
    }, ue = (r3, e3, t3) => {
      var n3, a4, o4, i3;
      t3 = sr(t3), 2 === e3 ? (n3 = ee, a4 = te, i3 = ne, o4 = (r4) => h[r4 >> 1]) : 4 === e3 && (n3 = ae, a4 = oe, i3 = ie, o4 = (r4) => g[r4 >> 2]), pr(r3, { name: t3, fromWireType: (r4) => {
        for (var t4, a5 = g[r4 >> 2], i4 = r4 + 4, u2 = 0; u2 <= a5; ++u2) {
          var s2 = r4 + 4 + u2 * e3;
          if (u2 == a5 || 0 == o4(s2)) {
            var f2 = n3(i4, s2 - i4);
            void 0 === t4 ? t4 = f2 : (t4 += String.fromCharCode(0), t4 += f2), i4 = s2 + e3;
          }
        }
        return Mr(r4), t4;
      }, toWireType: (r4, n4) => {
        "string" != typeof n4 && cr(`Cannot pass non-string to C++ string type ${t3}`);
        var o5 = i3(n4), u2 = Br(4 + o5 + e3);
        return g[u2 >> 2] = o5 / e3, a4(n4, u2 + 4, o5 + e3), null !== r4 && r4.push(Mr, u2), u2;
      }, argPackAdvance: dr, readValueFromPointer: X, destructorFunction(r4) {
        Mr(r4);
      } });
    }, se = (r3, e3, t3, n3, a4, o4) => {
      K[r3] = { name: sr(e3), rawConstructor: Or(t3, n3), rawDestructor: Or(a4, o4), elements: [] };
    }, fe = (r3, e3, t3, n3, a4, o4, i3, u2, s2) => {
      K[r3].elements.push({ getterReturnType: e3, getter: Or(t3, n3), getterContext: a4, setterArgumentType: o4, setter: Or(i3, u2), setterContext: s2 });
    }, ce = (r3, e3, t3, n3, a4, o4) => {
      ir[r3] = { name: sr(e3), rawConstructor: Or(t3, n3), rawDestructor: Or(a4, o4), fields: [] };
    }, le = (r3, e3, t3, n3, a4, o4, i3, u2, s2, f2) => {
      ir[r3].fields.push({ fieldName: sr(e3), getterReturnType: t3, getter: Or(n3, a4), getterContext: o4, setterArgumentType: i3, setter: Or(u2, s2), setterContext: f2 });
    }, pe = (r3, e3) => {
      pr(r3, { isVoid: true, name: e3 = sr(e3), argPackAdvance: 0, fromWireType: () => {
      }, toWireType: (r4, e4) => {
      } });
    }, ve = (r3) => {
      r3 > 9 && (yr[r3 + 1] += 1);
    }, he = () => Tr.toHandle([]), de = {}, ge = (r3) => {
      var e3 = de[r3];
      return void 0 === e3 ? sr(r3) : e3;
    }, me = (r3) => Tr.toHandle(ge(r3)), ye = () => Tr.toHandle({}), we = (r3, e3, t3) => {
      r3 = Tr.toValue(r3), e3 = Tr.toValue(e3), t3 = Tr.toValue(t3), r3[e3] = t3;
    }, Te = (r3, e3) => {
      var t3 = rr[r3];
      return void 0 === t3 && cr(`${e3} has unknown type ${jr(r3)}`), t3;
    }, be = (r3, e3) => {
      var t3 = (r3 = Te(r3, "_emval_take_value")).readValueFromPointer(e3);
      return Tr.toHandle(t3);
    }, Ae = (r3, e3, t3, n3) => {
      var a4 = (/* @__PURE__ */ new Date()).getFullYear(), o4 = new Date(a4, 0, 1), i3 = new Date(a4, 6, 1), u2 = o4.getTimezoneOffset(), s2 = i3.getTimezoneOffset(), f2 = Math.max(u2, s2);
      g[r3 >> 2] = 60 * f2, d[e3 >> 2] = Number(u2 != s2);
      var c2 = (r4) => {
        var e4 = r4 >= 0 ? "-" : "+", t4 = Math.abs(r4);
        return `UTC${e4}${String(Math.floor(t4 / 60)).padStart(2, "0")}${String(t4 % 60).padStart(2, "0")}`;
      }, l2 = c2(u2), p2 = c2(s2);
      s2 < u2 ? (qr(l2, t3, 17), qr(p2, n3, 17)) : (qr(l2, n3, 17), qr(p2, t3, 17));
    }, Pe = () => 2147483648, Ce = (r3, e3) => Math.ceil(r3 / e3) * e3, We = (r3) => {
      var e3 = (r3 - c.buffer.byteLength + 65535) / 65536 | 0;
      try {
        return c.grow(e3), W(), 1;
      } catch (t3) {
      }
    }, Ee = (r3) => {
      var e3 = p.length;
      r3 >>>= 0;
      var t3 = Pe();
      if (r3 > t3) return false;
      for (var n3 = 1; n3 <= 4; n3 *= 2) {
        var a4 = e3 * (1 + 0.2 / n3);
        a4 = Math.min(a4, r3 + 100663296);
        var o4 = Math.min(t3, Ce(Math.max(r3, a4), 65536));
        if (We(o4)) return true;
      }
      return false;
    }, Fe = {}, _e = () => a3 || "./this.program", xe = () => {
      if (!xe.strings) {
        var r3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: ("object" == typeof navigator && navigator.language || "C").replace("-", "_") + ".UTF-8", _: _e() };
        for (var e3 in Fe) void 0 === Fe[e3] ? delete r3[e3] : r3[e3] = Fe[e3];
        var t3 = [];
        for (var e3 in r3) t3.push(`${e3}=${r3[e3]}`);
        xe.strings = t3;
      }
      return xe.strings;
    }, Re = (r3, e3) => {
      var t3 = 0, n3 = 0;
      for (var a4 of xe()) {
        var o4 = e3 + t3;
        g[r3 + n3 >> 2] = o4, t3 += qr(a4, o4, 1 / 0) + 1, n3 += 4;
      }
      return 0;
    }, $e = (r3, e3) => {
      var t3 = xe();
      g[r3 >> 2] = t3.length;
      var n3 = 0;
      for (var a4 of t3) n3 += Jr(a4) + 1;
      return g[e3 >> 2] = n3, 0;
    }, Se = [null, [], []], ke = (r3, e3) => {
      var t3 = Se[r3];
      0 === e3 || 10 === e3 ? ((1 === r3 ? b : A)(Qr(t3)), t3.length = 0) : t3.push(e3);
    }, Ie = (r3, e3, t3, n3) => {
      for (var a4 = 0, o4 = 0; o4 < t3; o4++) {
        var i3 = g[e3 >> 2], u2 = g[e3 + 4 >> 2];
        e3 += 8;
        for (var s2 = 0; s2 < u2; s2++) ke(r3, p[i3 + s2]);
        a4 += u2;
      }
      return g[n3 >> 2] = a4, 0;
    }, Oe = (r3, e3) => {
      r3 < 128 ? e3.push(r3) : e3.push(r3 % 128 | 128, r3 >> 7);
    }, Ue = (r3) => {
      for (var e3 = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t3 = { parameters: [], results: "v" == r3[0] ? [] : [e3[r3[0]]] }, n3 = 1; n3 < r3.length; ++n3) t3.parameters.push(e3[r3[n3]]);
      return t3;
    }, De = (r3, e3) => {
      var t3 = r3.slice(0, 1), n3 = r3.slice(1), a4 = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      for (var o4 of (e3.push(96), Oe(n3.length, e3), n3)) e3.push(a4[o4]);
      "v" == t3 ? e3.push(0) : e3.push(1, a4[t3]);
    }, Ve = (r3, e3) => {
      if ("function" == typeof WebAssembly.Function) return new WebAssembly.Function(Ue(e3), r3);
      var t3 = [1];
      De(e3, t3);
      var n3 = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      Oe(t3.length, n3), n3.push(...t3), n3.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var a4 = new WebAssembly.Module(new Uint8Array(n3));
      return new WebAssembly.Instance(a4, { e: { f: r3 } }).exports.f;
    }, Be = (r3, e3) => {
      if (Dr) for (var t3 = r3; t3 < r3 + e3; t3++) {
        var n3 = Ir(t3);
        n3 && Dr.set(n3, t3);
      }
    }, Me = (r3) => (Dr || (Dr = /* @__PURE__ */ new WeakMap(), Be(0, _r.length)), Dr.get(r3) || 0), je = [], He = () => {
      if (je.length) return je.pop();
      try {
        _r.grow(1);
      } catch (A2) {
        if (!(A2 instanceof RangeError)) throw A2;
        throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.";
      }
      return _r.length - 1;
    }, Ne = (r3, e3) => {
      _r.set(r3, e3), kr[r3] = _r.get(r3);
    }, Le = (r3, e3) => {
      var t3 = Me(r3);
      if (t3) return t3;
      var n3 = He();
      try {
        Ne(n3, r3);
      } catch (A2) {
        if (!(A2 instanceof TypeError)) throw A2;
        var a4 = Ve(r3, e3);
        Ne(n3, a4);
      }
      return Dr.set(r3, n3), n3;
    };
    function ze(r3) {
      Vr = r3.G, n2._malloc = Br = r3.I, n2._free = Mr = r3.J;
    }
    n2.noExitRuntime && n2.noExitRuntime, n2.print && (b = n2.print), n2.printErr && (A = n2.printErr), n2.wasmBinary && (u = n2.wasmBinary), n2.arguments && n2.arguments, n2.thisProgram && (a3 = n2.thisProgram), n2.addFunction = Le, n2.UTF8ToString = Xr;
    var Ge = { d: q, y: J, l: or, p: ur, t: hr, D: gr, B: Ar, s: Cr, b: Lr, j: zr, f: Gr, C: Zr, o: ue, m: se, i: fe, q: ce, h: le, u: pe, a: wr, n: ve, A: he, c: me, k: ye, e: we, g: be, v: Ae, z: Ee, w: Re, x: $e, r: Ie }, Ye = await j();
    function qe() {
      function r3() {
        n2.calledRun = true, P || (F(), s?.(n2), n2.onRuntimeInitialized?.(), _());
      }
      R > 0 ? $ = qe : (E(), R > 0 ? $ = qe : n2.setStatus ? (n2.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => n2.setStatus(""), 1), r3();
      }, 1)) : r3());
    }
    function Je() {
      if (n2.preInit) for ("function" == typeof n2.preInit && (n2.preInit = [n2.preInit]); n2.preInit.length > 0; ) n2.preInit.shift()();
    }
    return Je(), qe(), C ? n2 : new Promise((r3, e3) => {
      s = r3, f = e3;
    });
  }, r.exports = a2, r.exports.default = a2), n.exports;
  var r, e2, a2;
}
var o2 = a();
var i = e({ __proto__: null, default: o(o2) }, [o2]);
export {
  i as l
};
//# sourceMappingURL=lyr3DMain-TMVMANAM.js.map
