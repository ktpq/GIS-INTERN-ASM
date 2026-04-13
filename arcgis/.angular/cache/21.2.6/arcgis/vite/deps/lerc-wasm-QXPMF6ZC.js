import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/lerc-wasm.js
async function t(t2 = {}) {
  var r = t2, e = !!globalThis.window, n = !!globalThis.WorkerGlobalScope;
  globalThis.process?.versions?.node && globalThis.process;
  var i, a, o = "", s = "";
  function u(t3) {
    return r.locateFile ? r.locateFile(t3, s) : s + t3;
  }
  if (e || n) {
    try {
      s = new URL(".", o).href;
    } catch {
    }
    n && (a = (t3) => {
      var r2 = new XMLHttpRequest();
      return r2.open("GET", t3, false), r2.responseType = "arraybuffer", r2.send(null), new Uint8Array(r2.response);
    }), i = async (t3) => {
      var r2 = await fetch(t3, { credentials: "same-origin" });
      if (r2.ok) return r2.arrayBuffer();
      throw new Error(r2.status + " : " + r2.url);
    };
  }
  console.log.bind(console);
  var f, c, h, l, p, w, m, g = console.error.bind(console), y = false, d = false;
  function _() {
    var t3 = q.buffer;
    l = new Int8Array(t3), p = new Uint8Array(t3), w = new Uint32Array(t3), new BigInt64Array(t3), new BigUint64Array(t3);
  }
  function v() {
    if (r.preRun) for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length; ) P(r.preRun.shift());
    U(M);
  }
  function b() {
    d = true, Q.f();
  }
  function R() {
    if (r.postRun) for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length; ) W(r.postRun.shift());
    U(k);
  }
  function A(t3) {
    r.onAbort?.(t3), g(t3 = "Aborted(" + t3 + ")"), y = true, t3 += ". Build with -sASSERTIONS for more info.";
    var e2 = new WebAssembly.RuntimeError(t3);
    throw h?.(e2), e2;
  }
  function S() {
    return r.locateFile ? u("lerc-wasm.wasm") : new URL("lerc-wasm.wasm", "").href;
  }
  function T(t3) {
    if (t3 == m && f) return new Uint8Array(f);
    if (a) return a(t3);
    throw "both async and sync fetching of the wasm failed";
  }
  async function I(t3) {
    if (!f) try {
      var r2 = await i(t3);
      return new Uint8Array(r2);
    } catch {
    }
    return T(t3);
  }
  async function x(t3, r2) {
    try {
      var e2 = await I(t3);
      return await WebAssembly.instantiate(e2, r2);
    } catch (n2) {
      g(`failed to asynchronously prepare wasm: ${n2}`), A(n2);
    }
  }
  async function B(t3, r2, e2) {
    if (!t3) try {
      var n2 = fetch(r2, { credentials: "same-origin" });
      return await WebAssembly.instantiateStreaming(n2, e2);
    } catch (i2) {
      g(`wasm streaming compile failed: ${i2}`), g("falling back to ArrayBuffer instantiation");
    }
    return x(r2, e2);
  }
  function C() {
    return { a: V };
  }
  async function E() {
    function t3(t4, r2) {
      return K(Q = t4.exports), _(), Q;
    }
    function e2(r2) {
      return t3(r2.instance);
    }
    var n2 = C();
    return r.instantiateWasm ? new Promise((e3, i2) => {
      r.instantiateWasm(n2, (r2, n3) => {
        e3(t3(r2));
      });
    }) : (m ??= S(), e2(await B(f, m, n2)));
  }
  var U = (t3) => {
    for (; t3.length > 0; ) t3.shift()(r);
  }, k = [], W = (t3) => k.push(t3), M = [], P = (t3) => M.push(t3), j = globalThis.TextDecoder && new TextDecoder(), D = (t3, r2, e2, n2) => {
    for (var i2 = r2 + e2; t3[r2] && !(r2 >= i2); ) ++r2;
    return r2;
  }, L = (t3, r2 = 0, e2, n2) => {
    var i2 = D(t3, r2, e2);
    if (i2 - r2 > 16 && t3.buffer && j) return j.decode(t3.subarray(r2, i2));
    for (var a2 = ""; r2 < i2; ) {
      var o2 = t3[r2++];
      if (128 & o2) {
        var s2 = 63 & t3[r2++];
        if (192 != (224 & o2)) {
          var u2 = 63 & t3[r2++];
          if ((o2 = 224 == (240 & o2) ? (15 & o2) << 12 | s2 << 6 | u2 : (7 & o2) << 18 | s2 << 12 | u2 << 6 | 63 & t3[r2++]) < 65536) a2 += String.fromCharCode(o2);
          else {
            var f2 = o2 - 65536;
            a2 += String.fromCharCode(55296 | f2 >> 10, 56320 | 1023 & f2);
          }
        } else a2 += String.fromCharCode((31 & o2) << 6 | s2);
      } else a2 += String.fromCharCode(o2);
    }
    return a2;
  }, F = (t3, r2, e2) => t3 ? L(p, t3, r2) : "", $ = (t3, r2, e2, n2) => A(`Assertion failed: ${F(t3)}, at: ` + [r2 ? F(r2) : "unknown filename", e2, n2 ? F(n2) : "unknown function"]);
  class G {
    constructor(t3) {
      this.excPtr = t3, this.ptr = t3 - 24;
    }
    set_type(t3) {
      w[this.ptr + 4 >> 2] = t3;
    }
    get_type() {
      return w[this.ptr + 4 >> 2];
    }
    set_destructor(t3) {
      w[this.ptr + 8 >> 2] = t3;
    }
    get_destructor() {
      return w[this.ptr + 8 >> 2];
    }
    set_caught(t3) {
      t3 = t3 ? 1 : 0, l[this.ptr + 12] = t3;
    }
    get_caught() {
      return 0 != l[this.ptr + 12];
    }
    set_rethrown(t3) {
      t3 = t3 ? 1 : 0, l[this.ptr + 13] = t3;
    }
    get_rethrown() {
      return 0 != l[this.ptr + 13];
    }
    init(t3, r2) {
      this.set_adjusted_ptr(0), this.set_type(t3), this.set_destructor(r2);
    }
    set_adjusted_ptr(t3) {
      w[this.ptr + 16 >> 2] = t3;
    }
    get_adjusted_ptr() {
      return w[this.ptr + 16 >> 2];
    }
  }
  var q, z = (t3, r2, e2) => {
    throw new G(t3).init(r2, e2), t3;
  }, H = () => A(""), N = () => 2147483648, O = (t3, r2) => Math.ceil(t3 / r2) * r2, X = (t3) => {
    var r2 = (t3 - q.buffer.byteLength + 65535) / 65536 | 0;
    try {
      return q.grow(r2), _(), 1;
    } catch (e2) {
    }
  }, J = (t3) => {
    var r2 = p.length;
    t3 >>>= 0;
    var e2 = N();
    if (t3 > e2) return false;
    for (var n2 = 1; n2 <= 4; n2 *= 2) {
      var i2 = r2 * (1 + 0.2 / n2);
      i2 = Math.min(i2, t3 + 100663296);
      var a2 = Math.min(e2, O(Math.max(t3, i2), 65536));
      if (X(a2)) return true;
    }
    return false;
  };
  if (r.noExitRuntime && r.noExitRuntime, r.print && r.print, r.printErr && (g = r.printErr), r.wasmBinary && (f = r.wasmBinary), r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.preInit) for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0; ) r.preInit.shift()();
  function K(t3) {
    r._lerc_getBlobInfo = t3.g, r._lerc_getDataRanges = t3.h, r._lerc_decode_4D = t3.i, r._free = t3.j, r._malloc = t3.k, r.memory = q = t3.e, t3.__indirect_function_table;
  }
  var Q, V = { a: $, b: z, c: H, d: J };
  function Y() {
    function t3() {
      r.calledRun = true, y || (b(), c?.(r), r.onRuntimeInitialized?.(), R());
    }
    v(), r.setStatus ? (r.setStatus("Running..."), setTimeout(() => {
      setTimeout(() => r.setStatus(""), 1), t3();
    }, 1)) : t3();
  }
  return Q = await E(), Y(), d ? r : new Promise((t3, r2) => {
    c = t3, h = r2;
  });
}
export {
  t as default
};
//# sourceMappingURL=lerc-wasm-QXPMF6ZC.js.map
