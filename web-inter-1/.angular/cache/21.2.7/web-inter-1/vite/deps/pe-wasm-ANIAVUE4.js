import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/pe-wasm.js
async function t(t2 = {}) {
  var e, o = t2, r = "./this.program", _ = "", p = "";
  function n(t3) {
    return o.locateFile ? o.locateFile(t3, p) : p + t3;
  }
  try {
    p = new URL(".", _).href;
  } catch {
  }
  e = async (t3) => {
    var e2 = await fetch(t3, { credentials: "same-origin" });
    if (e2.ok) return e2.arrayBuffer();
    throw new Error(e2.status + " : " + e2.url);
  };
  var i, c, a, y, s, P, g, u, f, b, E, d = console.log.bind(console), T = console.error.bind(console), O = false;
  function m(t3, e2) {
    t3 || v(e2);
  }
  var h, S = false;
  function N() {
    var t3 = dr.buffer;
    y = new Int8Array(t3), P = new Int16Array(t3), s = new Uint8Array(t3), g = new Int32Array(t3), u = new Uint32Array(t3), f = new Float32Array(t3), b = new Float64Array(t3), E = new BigInt64Array(t3), new BigUint64Array(t3);
  }
  function l() {
    S = true, I(Sr), lr.t();
  }
  function v(t3) {
    T(t3 = "Aborted(" + t3 + ")"), O = true, t3 += ". Build with -sASSERTIONS for more info.";
    var e2 = new WebAssembly.RuntimeError(t3);
    throw a?.(e2), e2;
  }
  function M() {
    return o.locateFile ? n("pe-wasm.wasm") : new URL("pe-wasm.wasm", "").href;
  }
  function j(t3) {
    throw "both async and sync fetching of the wasm failed";
  }
  async function D(t3) {
    try {
      var o2 = await e(t3);
      return new Uint8Array(o2);
    } catch {
    }
    return j();
  }
  async function A(t3, e2) {
    try {
      var o2 = await D(t3);
      return await WebAssembly.instantiate(o2, e2);
    } catch (r2) {
      T(`failed to asynchronously prepare wasm: ${r2}`), v(r2);
    }
  }
  async function R(t3, e2, o2) {
    try {
      var r2 = fetch(e2, { credentials: "same-origin" });
      return await WebAssembly.instantiateStreaming(r2, o2);
    } catch (_2) {
      T(`wasm streaming compile failed: ${_2}`), T("falling back to ArrayBuffer instantiation");
    }
    return A(e2, o2);
  }
  function G() {
    return { a: vr };
  }
  async function C() {
    function t3(t4, e3) {
      return Nr(lr = t4.exports), N(), lr;
    }
    function e2(e3) {
      return t3(e3.instance);
    }
    var o2 = G();
    return h ??= M(), e2(await R(i, h, o2));
  }
  var I = (t3) => {
    for (; t3.length > 0; ) t3.shift()(o);
  };
  function L(t3, e2 = "i8") {
    switch (e2.endsWith("*") && (e2 = "*"), e2) {
      case "i1":
      case "i8":
        return y[t3];
      case "i16":
        return P[t3 >> 1];
      case "i32":
        return g[t3 >> 2];
      case "i64":
        return E[t3 >> 3];
      case "float":
        return f[t3 >> 2];
      case "double":
        return b[t3 >> 3];
      case "*":
        return u[t3 >> 2];
      default:
        v(`invalid type for getValue: ${e2}`);
    }
  }
  var U = globalThis.TextDecoder && new TextDecoder(), w = (t3, e2, o2, r2) => {
    var _2 = e2 + o2;
    if (r2) return _2;
    for (; t3[e2] && !(e2 >= _2); ) ++e2;
    return e2;
  }, F = (t3, e2 = 0, o2, r2) => {
    var _2 = w(t3, e2, o2, r2);
    if (_2 - e2 > 16 && t3.buffer && U) return U.decode(t3.subarray(e2, _2));
    for (var p2 = ""; e2 < _2; ) {
      var n2 = t3[e2++];
      if (128 & n2) {
        var i2 = 63 & t3[e2++];
        if (192 != (224 & n2)) {
          var c2 = 63 & t3[e2++];
          if ((n2 = 224 == (240 & n2) ? (15 & n2) << 12 | i2 << 6 | c2 : (7 & n2) << 18 | i2 << 12 | c2 << 6 | 63 & t3[e2++]) < 65536) p2 += String.fromCharCode(n2);
          else {
            var a2 = n2 - 65536;
            p2 += String.fromCharCode(55296 | a2 >> 10, 56320 | 1023 & a2);
          }
        } else p2 += String.fromCharCode((31 & n2) << 6 | i2);
      } else p2 += String.fromCharCode(n2);
    }
    return p2;
  }, Y = (t3, e2, o2) => t3 ? F(s, t3, e2, o2) : "";
  function X(t3, e2, o2) {
    return 0;
  }
  var x = (t3, e2, o2) => {
  };
  function H(t3, e2, o2) {
    return 0;
  }
  function z(t3, e2, o2, r2) {
  }
  var Z = (t3) => {
  }, W = (t3, e2) => {
  }, B = (t3, e2, o2) => {
  }, q = () => v(""), K = (t3) => t3 % 4 == 0 && (t3 % 100 != 0 || t3 % 400 == 0), V = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], k = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], $ = (t3) => (K(t3.getFullYear()) ? V : k)[t3.getMonth()] + t3.getDate() - 1, J = 9007199254740992, Q = -9007199254740992, tt = (t3) => t3 < Q || t3 > J ? NaN : Number(t3);
  function et(t3, e2) {
    t3 = tt(t3);
    var o2 = new Date(1e3 * t3);
    g[e2 >> 2] = o2.getSeconds(), g[e2 + 4 >> 2] = o2.getMinutes(), g[e2 + 8 >> 2] = o2.getHours(), g[e2 + 12 >> 2] = o2.getDate(), g[e2 + 16 >> 2] = o2.getMonth(), g[e2 + 20 >> 2] = o2.getFullYear() - 1900, g[e2 + 24 >> 2] = o2.getDay();
    var r2 = 0 | $(o2);
    g[e2 + 28 >> 2] = r2, g[e2 + 36 >> 2] = -60 * o2.getTimezoneOffset();
    var _2 = new Date(o2.getFullYear(), 0, 1), p2 = new Date(o2.getFullYear(), 6, 1).getTimezoneOffset(), n2 = _2.getTimezoneOffset(), i2 = 0 | (p2 != n2 && o2.getTimezoneOffset() == Math.min(n2, p2));
    g[e2 + 32 >> 2] = i2;
  }
  var ot = (t3, e2, o2, r2) => {
    if (!(r2 > 0)) return 0;
    for (var _2 = o2, p2 = o2 + r2 - 1, n2 = 0; n2 < t3.length; ++n2) {
      var i2 = t3.codePointAt(n2);
      if (i2 <= 127) {
        if (o2 >= p2) break;
        e2[o2++] = i2;
      } else if (i2 <= 2047) {
        if (o2 + 1 >= p2) break;
        e2[o2++] = 192 | i2 >> 6, e2[o2++] = 128 | 63 & i2;
      } else if (i2 <= 65535) {
        if (o2 + 2 >= p2) break;
        e2[o2++] = 224 | i2 >> 12, e2[o2++] = 128 | i2 >> 6 & 63, e2[o2++] = 128 | 63 & i2;
      } else {
        if (o2 + 3 >= p2) break;
        e2[o2++] = 240 | i2 >> 18, e2[o2++] = 128 | i2 >> 12 & 63, e2[o2++] = 128 | i2 >> 6 & 63, e2[o2++] = 128 | 63 & i2, n2++;
      }
    }
    return e2[o2] = 0, o2 - _2;
  }, rt = (t3, e2, o2) => ot(t3, s, e2, o2), _t = (t3, e2, o2, r2) => {
    var _2 = (/* @__PURE__ */ new Date()).getFullYear(), p2 = new Date(_2, 0, 1), n2 = new Date(_2, 6, 1), i2 = p2.getTimezoneOffset(), c2 = n2.getTimezoneOffset(), a2 = Math.max(i2, c2);
    u[t3 >> 2] = 60 * a2, g[e2 >> 2] = Number(i2 != c2);
    var y2 = (t4) => {
      var e3 = t4 >= 0 ? "-" : "+", o3 = Math.abs(t4);
      return `UTC${e3}${String(Math.floor(o3 / 60)).padStart(2, "0")}${String(o3 % 60).padStart(2, "0")}`;
    }, s2 = y2(i2), P2 = y2(c2);
    c2 < i2 ? (rt(s2, o2, 17), rt(P2, r2, 17)) : (rt(s2, r2, 17), rt(P2, o2, 17));
  }, pt = () => Date.now(), nt = () => 2147483648, it = (t3, e2) => Math.ceil(t3 / e2) * e2, ct = (t3) => {
    var e2 = (t3 - dr.buffer.byteLength + 65535) / 65536 | 0;
    try {
      return dr.grow(e2), N(), 1;
    } catch (o2) {
    }
  }, at = (t3) => {
    var e2 = s.length;
    t3 >>>= 0;
    var o2 = nt();
    if (t3 > o2) return false;
    for (var r2 = 1; r2 <= 4; r2 *= 2) {
      var _2 = e2 * (1 + 0.2 / r2);
      _2 = Math.min(_2, t3 + 100663296);
      var p2 = Math.min(o2, it(Math.max(t3, _2), 65536));
      if (ct(p2)) return true;
    }
    return false;
  }, yt = {}, st = () => r, Pt = () => {
    if (!Pt.strings) {
      var t3 = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8", _: st() };
      for (var e2 in yt) void 0 === yt[e2] ? delete t3[e2] : t3[e2] = yt[e2];
      var o2 = [];
      for (var e2 in t3) o2.push(`${e2}=${t3[e2]}`);
      Pt.strings = o2;
    }
    return Pt.strings;
  }, gt = (t3, e2) => {
    var o2 = 0, r2 = 0;
    for (var _2 of Pt()) {
      var p2 = e2 + o2;
      u[t3 + r2 >> 2] = p2, o2 += rt(_2, p2, 1 / 0) + 1, r2 += 4;
    }
    return 0;
  }, ut = (t3) => {
    for (var e2 = 0, o2 = 0; o2 < t3.length; ++o2) {
      var r2 = t3.charCodeAt(o2);
      r2 <= 127 ? e2++ : r2 <= 2047 ? e2 += 2 : r2 >= 55296 && r2 <= 57343 ? (e2 += 4, ++o2) : e2 += 3;
    }
    return e2;
  }, ft = (t3, e2) => {
    var o2 = Pt();
    u[t3 >> 2] = o2.length;
    var r2 = 0;
    for (var _2 of o2) r2 += ut(_2) + 1;
    return u[e2 >> 2] = r2, 0;
  }, bt = (t3) => 52, Et = (t3, e2, o2, r2) => 52;
  function dt(t3, e2, o2, r2) {
    return 70;
  }
  var Tt, Ot, mt, ht, St, Nt, lt, vt, Mt, jt, Dt, At, Rt, Gt, Ct, It, Lt, Ut, wt, Ft, Yt, Xt, xt, Ht, zt, Zt, Wt, Bt, qt, Kt, Vt, kt, $t, Jt, Qt, te, ee, oe, re, _e, pe, ne, ie, ce, ae, ye, se, Pe, ge, ue, fe, be, Ee, de, Te, Oe, me, he, Se, Ne, le, ve, Me, je, De, Ae, Re, Ge, Ce, Ie, Le, Ue, we, Fe, Ye, Xe, xe, He, ze, Ze, We, Be, qe, Ke, Ve, ke, $e, Je, Qe, to, eo, oo, ro, _o, po, no, io, co, ao, yo, so, Po, go, uo, fo, bo, Eo, To, Oo, mo, ho, So, No, lo, vo, Mo, jo, Do, Ao, Ro, Go, Co, Io, Lo, Uo, wo, Fo, Yo, Xo, xo, Ho, zo, Zo, Wo, Bo, qo, Ko, Vo, ko, $o, Jo, Qo, tr, er, or, rr, _r, pr, nr, ir, cr, ar, yr, sr, Pr, gr, ur, fr, br, Er, dr, Tr = [null, [], []], Or = (t3, e2) => {
    var o2 = Tr[t3];
    0 === e2 || 10 === e2 ? ((1 === t3 ? d : T)(F(o2)), o2.length = 0) : o2.push(e2);
  }, mr = (t3, e2, o2, r2) => {
    for (var _2 = 0, p2 = 0; p2 < o2; p2++) {
      var n2 = u[e2 >> 2], i2 = u[e2 + 4 >> 2];
      e2 += 8;
      for (var c2 = 0; c2 < i2; c2++) Or(t3, s[n2 + c2]);
      _2 += i2;
    }
    return u[r2 >> 2] = _2, 0;
  }, hr = (t3, e2, o2) => {
    var r2 = ut(t3) + 1, _2 = new Array(r2);
    return ot(t3, _2, 0, _2.length), _2;
  }, Sr = [];
  function Nr(t3) {
    o._webidl_free = t3.u, o._webidl_malloc = t3.v, Tt = o._emscripten_bind_PeObject_getCode_0 = t3.w, Ot = o._emscripten_bind_PeObject_getName_1 = t3.x, mt = o._emscripten_bind_PeObject_getType_0 = t3.y, ht = o._emscripten_bind_PeCoordsys_isEqual_1 = t3.z, St = o._emscripten_bind_PeCoordsys_getCode_0 = t3.A, Nt = o._emscripten_bind_PeCoordsys_getName_1 = t3.B, lt = o._emscripten_bind_PeCoordsys_getType_0 = t3.C, vt = o._emscripten_bind_PeUnit_getUnitFactor_0 = t3.D, Mt = o._emscripten_bind_PeUnit_getCode_0 = t3.E, jt = o._emscripten_bind_PeUnit_getName_1 = t3.F, Dt = o._emscripten_bind_PeUnit_getType_0 = t3.G, At = o._emscripten_bind_VoidPtr___destroy___0 = t3.H, Rt = o._emscripten_bind_PeAngunit_getCode_0 = t3.I, Gt = o._emscripten_bind_PeAngunit_getName_1 = t3.J, Ct = o._emscripten_bind_PeAngunit_getType_0 = t3.K, It = o._emscripten_bind_PeAngunit_getUnitFactor_0 = t3.L, Lt = o._emscripten_bind_PeDatum_getSpheroid_0 = t3.M, Ut = o._emscripten_bind_PeDatum_getCode_0 = t3.N, wt = o._emscripten_bind_PeDatum_getName_1 = t3.O, Ft = o._emscripten_bind_PeDatum_getType_0 = t3.P, Yt = o._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = t3.Q, Xt = o._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = t3.R, xt = o._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = t3.S, Ht = o._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = t3.T, zt = o._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = t3.U, Zt = o._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = t3.V, Wt = o._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = t3.W, Bt = o._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = t3.X, qt = o._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = t3.Y, Kt = o._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = t3.Z, Vt = o._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = t3._, kt = o._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = t3.$, $t = o._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = t3.aa, Jt = o._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = t3.ba, Qt = o._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = t3.ca, te = o._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = t3.da, ee = o._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = t3.ea, oe = o._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = t3.fa, re = o._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = t3.ga, _e = o._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = t3.ha, pe = o._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = t3.ia, ne = o._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = t3.ja, ie = o._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = t3.ka, ce = o._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = t3.la, ae = o._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = t3.ma, ye = o._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = t3.na, se = o._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = t3.oa, Pe = o._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = t3.pa, ge = o._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = t3.qa, ue = o._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = t3.ra, fe = o._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = t3.sa, be = o._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = t3.ta, Ee = o._emscripten_bind_PeDouble_PeDouble_1 = t3.ua, de = o._emscripten_bind_PeDouble_get_val_0 = t3.va, Te = o._emscripten_bind_PeDouble_set_val_1 = t3.wa, Oe = o._emscripten_bind_PeDouble___destroy___0 = t3.xa, me = o._emscripten_bind_PeFactory_initialize_1 = t3.ya, he = o._emscripten_bind_PeFactory_factoryByType_2 = t3.za, Se = o._emscripten_bind_PeFactory_fromString_2 = t3.Aa, Ne = o._emscripten_bind_PeFactory_getCode_1 = t3.Ba, le = o._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = t3.Ca, ve = o._emscripten_bind_PeGCSExtent_getLLon_0 = t3.Da, Me = o._emscripten_bind_PeGCSExtent_getSLat_0 = t3.Ea, je = o._emscripten_bind_PeGCSExtent_getRLon_0 = t3.Fa, De = o._emscripten_bind_PeGCSExtent_getNLat_0 = t3.Ga, Ae = o._emscripten_bind_PeGCSExtent___destroy___0 = t3.Ha, Re = o._emscripten_bind_PeGeogcs_Delete_0 = t3.Ia, Ge = o._emscripten_bind_PeGeogcs_cloneAlterUnits_1 = t3.Ja, Ce = o._emscripten_bind_PeGeogcs_getDatum_0 = t3.Ka, Ie = o._emscripten_bind_PeGeogcs_getPrimem_0 = t3.La, Le = o._emscripten_bind_PeGeogcs_getUnit_0 = t3.Ma, Ue = o._emscripten_bind_PeGeogcs_isEqual_1 = t3.Na, we = o._emscripten_bind_PeGeogcs_getCode_0 = t3.Oa, Fe = o._emscripten_bind_PeGeogcs_getName_1 = t3.Pa, Ye = o._emscripten_bind_PeGeogcs_getType_0 = t3.Qa, Xe = o._emscripten_bind_PeGeogtran_isEqual_1 = t3.Ra, xe = o._emscripten_bind_PeGeogtran_getGeogcs1_0 = t3.Sa, He = o._emscripten_bind_PeGeogtran_getGeogcs2_0 = t3.Ta, ze = o._emscripten_bind_PeGeogtran_getParameters_0 = t3.Ua, Ze = o._emscripten_bind_PeGeogtran_loadConstants_0 = t3.Va, We = o._emscripten_bind_PeGeogtran_getCode_0 = t3.Wa, Be = o._emscripten_bind_PeGeogtran_getName_1 = t3.Xa, qe = o._emscripten_bind_PeGeogtran_getType_0 = t3.Ya, Ke = o._emscripten_bind_PeGTlistExtended_getGTlist_6 = t3.Za, Ve = o._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = t3._a, ke = o._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = t3.$a, $e = o._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = t3.ab, Je = o._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = t3.bb, Qe = o._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = t3.cb, to = o._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = t3.db, eo = o._emscripten_bind_PeHorizon_getNump_0 = t3.eb, oo = o._emscripten_bind_PeHorizon_getKind_0 = t3.fb, ro = o._emscripten_bind_PeHorizon_getInclusive_0 = t3.gb, _o = o._emscripten_bind_PeHorizon_getSize_0 = t3.hb, po = o._emscripten_bind_PeHorizon_getCoord_0 = t3.ib, no = o._emscripten_bind_PeInteger_PeInteger_1 = t3.jb, io = o._emscripten_bind_PeInteger_get_val_0 = t3.kb, co = o._emscripten_bind_PeInteger_set_val_1 = t3.lb, ao = o._emscripten_bind_PeInteger___destroy___0 = t3.mb, yo = o._emscripten_bind_PeLineType_geodetic_distance_10 = t3.nb, so = o._emscripten_bind_PeLineType_geodetic_coordinate_9 = t3.ob, Po = o._emscripten_bind_PeLineType_geodesic_coordinate_8 = t3.pb, go = o._emscripten_bind_PeLineType_great_elliptic_distance_9 = t3.qb, uo = o._emscripten_bind_PeMath_phi_to_eta_2 = t3.rb, fo = o._emscripten_bind_PeMath_eta_to_phi_2 = t3.sb, bo = o._emscripten_bind_PeMath_phi_to_phig_2 = t3.tb, Eo = o._emscripten_bind_PeMath_q_3 = t3.ub, To = o._emscripten_bind_PeMath_q90_2 = t3.vb, Oo = o._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = t3.wb, mo = o._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = t3.xb, ho = o._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = t3.yb, So = o._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = t3.zb, No = o._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = t3.Ab, lo = o._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = t3.Bb, vo = o._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = t3.Cb, Mo = o._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = t3.Db, jo = o._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = t3.Eb, Do = o._emscripten_bind_PeParameter_getValue_0 = t3.Fb, Ao = o._emscripten_bind_PeParameter_getCode_0 = t3.Gb, Ro = o._emscripten_bind_PeParameter_getName_1 = t3.Hb, Go = o._emscripten_bind_PeParameter_getType_0 = t3.Ib, Co = o._emscripten_bind_PePCSInfo_getCentralMeridian_0 = t3.Jb, Io = o._emscripten_bind_PePCSInfo_getDomainMinx_0 = t3.Kb, Lo = o._emscripten_bind_PePCSInfo_getDomainMiny_0 = t3.Lb, Uo = o._emscripten_bind_PePCSInfo_getDomainMaxx_0 = t3.Mb, wo = o._emscripten_bind_PePCSInfo_getDomainMaxy_0 = t3.Nb, Fo = o._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = t3.Ob, Yo = o._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = t3.Pb, Xo = o._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = t3.Qb, xo = o._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = t3.Rb, Ho = o._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = t3.Sb, zo = o._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = t3.Tb, Zo = o._emscripten_bind_PePCSInfo_isPannableRectangle_0 = t3.Ub, Wo = o._emscripten_bind_PePCSInfo_generate_2 = t3.Vb, Bo = o._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = t3.Wb, qo = o._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = t3.Xb, Ko = o._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = t3.Yb, Vo = o._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = t3.Zb, ko = o._emscripten_bind_PePrimem_getLongitude_0 = t3._b, $o = o._emscripten_bind_PePrimem_getCode_0 = t3.$b, Jo = o._emscripten_bind_PePrimem_getName_1 = t3.ac, Qo = o._emscripten_bind_PePrimem_getType_0 = t3.bc, tr = o._emscripten_bind_PeProjcs_Delete_0 = t3.cc, er = o._emscripten_bind_PeProjcs_getGeogcs_0 = t3.dc, or = o._emscripten_bind_PeProjcs_getProjection_0 = t3.ec, rr = o._emscripten_bind_PeProjcs_getParameters_0 = t3.fc, _r = o._emscripten_bind_PeProjcs_getUnit_0 = t3.gc, pr = o._emscripten_bind_PeProjcs_loadConstants_0 = t3.hc, nr = o._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = t3.ic, ir = o._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = t3.jc, cr = o._emscripten_bind_PeProjcs_isEqual_1 = t3.kc, ar = o._emscripten_bind_PeProjcs_getCode_0 = t3.lc, yr = o._emscripten_bind_PeProjcs_getName_1 = t3.mc, sr = o._emscripten_bind_PeProjcs_getType_0 = t3.nc, Pr = o._emscripten_bind_PeSpheroid_getAxis_0 = t3.oc, gr = o._emscripten_bind_PeSpheroid_getFlattening_0 = t3.pc, ur = o._emscripten_bind_PeSpheroid_getCode_0 = t3.qc, fr = o._emscripten_bind_PeSpheroid_getName_1 = t3.rc, br = o._emscripten_bind_PeSpheroid_getType_0 = t3.sc, Er = o._emscripten_bind_PeVersion_version_string_0 = t3.tc, o._pe_getPeGTlistExtendedEntrySize = t3.uc, o._pe_getPeGTlistExtendedGTsSize = t3.vc, o._pe_getPeHorizonSize = t3.wc, o._pe_geog_to_geog = t3.xc, o._pe_geog_to_proj = t3.yc, o._pe_geog_to_dd = t3.zc, o._pe_dd_to_geog = t3.Ac, o._pe_geog_to_ddm = t3.Bc, o._pe_ddm_to_geog = t3.Cc, o._pe_geog_to_dms = t3.Dc, o._pe_dms_to_geog = t3.Ec, o._pe_geog_to_mgrs_extended = t3.Fc, o._pe_mgrs_to_geog_extended = t3.Gc, o._pe_geog_to_usng = t3.Hc, o._pe_usng_to_geog = t3.Ic, o._pe_geog_to_utm = t3.Jc, o._pe_utm_to_geog = t3.Kc, o._pe_object_to_string_ext = t3.Lc, o._pe_object_is_wkt2_needed = t3.Mc, o._pe_proj_to_geog_center = t3.Nc, dr = t3.s, t3.__indirect_function_table;
  }
  o.getValue = L, o.UTF8ToString = Y;
  var lr, vr = { c: X, o: x, i: H, d: z, m: Z, l: W, n: B, j: q, p: et, q: _t, r: pt, k: at, f: gt, g: ft, a: bt, h: Et, e: dt, b: mr };
  function Mr() {
    function t3() {
      o.calledRun = true, O || (l(), c?.(o));
    }
    t3();
  }
  function jr() {
  }
  function Dr(t3) {
    return (t3 || jr).__cache__;
  }
  function Ar(t3, e2) {
    var o2 = Dr(e2), r2 = o2[t3];
    return r2 || ((r2 = Object.create((e2 || jr).prototype)).ptr = t3, o2[t3] = r2);
  }
  function Rr(t3, e2) {
    return Ar(t3.ptr, e2);
  }
  function Gr(t3) {
    if (!t3.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
    t3.__destroy__(), delete Dr(t3.__class__)[t3.ptr];
  }
  function Cr(t3, e2) {
    return t3.ptr === e2.ptr;
  }
  function Ir(t3) {
    return t3.ptr;
  }
  function Lr(t3) {
    return t3.__class__;
  }
  lr = await C(), Mr(), jr.prototype = Object.create(jr.prototype), jr.prototype.constructor = jr, jr.prototype.__class__ = jr, jr.__cache__ = {}, o.WrapperObject = jr, o.getCache = Dr, o.wrapPointer = Ar, o.castObject = Rr, o.NULL = Ar(0), o.destroy = Gr, o.compare = Cr, o.getPointer = Ir, o.getClass = Lr;
  var Ur = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare() {
    if (Ur.needed) {
      for (var t3 = 0; t3 < Ur.temps.length; t3++) o._webidl_free(Ur.temps[t3]);
      Ur.temps.length = 0, o._webidl_free(Ur.buffer), Ur.buffer = 0, Ur.size += Ur.needed, Ur.needed = 0;
    }
    Ur.buffer || (Ur.size += 128, Ur.buffer = o._webidl_malloc(Ur.size), m(Ur.buffer)), Ur.pos = 0;
  }, alloc(t3, e2) {
    m(Ur.buffer);
    var r2, _2 = e2.BYTES_PER_ELEMENT, p2 = t3.length * _2;
    return p2 = it(p2, 8), Ur.pos + p2 >= Ur.size ? (m(p2 > 0), Ur.needed += p2, r2 = o._webidl_malloc(p2), Ur.temps.push(r2)) : (r2 = Ur.buffer + Ur.pos, Ur.pos += p2), r2;
  } };
  function wr(t3) {
    if ("string" == typeof t3) {
      for (var e2 = hr(t3), o2 = Ur.alloc(e2, y), r2 = 0; r2 < e2.length; r2++) y[o2 + r2] = e2[r2];
      return o2;
    }
    return t3;
  }
  function Fr(t3) {
    if ("object" == typeof t3) {
      for (var e2 = Ur.alloc(t3, y), o2 = 0; o2 < t3.length; o2++) y[e2 + o2] = t3[o2];
      return e2;
    }
    return t3;
  }
  function Yr(t3) {
    if ("object" == typeof t3) {
      for (var e2 = Ur.alloc(t3, P), o2 = e2 / 2, r2 = 0; r2 < t3.length; r2++) P[o2 + r2] = t3[r2];
      return e2;
    }
    return t3;
  }
  function Xr(t3) {
    if ("object" == typeof t3) {
      for (var e2 = Ur.alloc(t3, g), o2 = e2 / 4, r2 = 0; r2 < t3.length; r2++) g[o2 + r2] = t3[r2];
      return e2;
    }
    return t3;
  }
  function xr(t3) {
    if ("object" == typeof t3) {
      for (var e2 = Ur.alloc(t3, f), o2 = e2 / 4, r2 = 0; r2 < t3.length; r2++) f[o2 + r2] = t3[r2];
      return e2;
    }
    return t3;
  }
  function Hr(t3) {
    if ("object" == typeof t3) {
      for (var e2 = Ur.alloc(t3, b), o2 = e2 / 8, r2 = 0; r2 < t3.length; r2++) b[o2 + r2] = t3[r2];
      return e2;
    }
    return t3;
  }
  function zr() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function Zr() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function Wr() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function Br() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function qr() {
    throw "cannot construct a PeAngunit, no constructor in IDL";
  }
  function Kr() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function Vr() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function kr(t3) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), this.ptr = Ee(t3), Dr(kr)[this.ptr] = this;
  }
  function $r() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function Jr(t3, e2, o2, r2, _2, p2) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), this.ptr = le(t3, e2, o2, r2, _2, p2), Dr(Jr)[this.ptr] = this;
  }
  function Qr() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function t_() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function e_() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function o_() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function r_() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function __() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function p_(t3) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), this.ptr = no(t3), Dr(p_)[this.ptr] = this;
  }
  function n_() {
    throw "cannot construct a PeLineType, no constructor in IDL";
  }
  function i_() {
    throw "cannot construct a PeMath, no constructor in IDL";
  }
  function c_() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function a_() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function y_() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function s_() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function P_() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function g_() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function u_() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function f_() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return zr.prototype = Object.create(jr.prototype), zr.prototype.constructor = zr, zr.prototype.__class__ = zr, zr.__cache__ = {}, o.PeObject = zr, zr.prototype.getCode = zr.prototype.getCode = function() {
    var t3 = this.ptr;
    return Tt(t3);
  }, zr.prototype.getName = zr.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Ot(e2, t3));
  }, zr.prototype.getType = zr.prototype.getType = function() {
    var t3 = this.ptr;
    return mt(t3);
  }, Zr.prototype = Object.create(zr.prototype), Zr.prototype.constructor = Zr, Zr.prototype.__class__ = Zr, Zr.__cache__ = {}, o.PeCoordsys = Zr, Zr.prototype.isEqual = Zr.prototype.isEqual = function(t3) {
    var e2 = this.ptr;
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!ht(e2, t3);
  }, Zr.prototype.getCode = Zr.prototype.getCode = function() {
    var t3 = this.ptr;
    return St(t3);
  }, Zr.prototype.getName = Zr.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Nt(e2, t3));
  }, Zr.prototype.getType = Zr.prototype.getType = function() {
    var t3 = this.ptr;
    return lt(t3);
  }, Wr.prototype = Object.create(zr.prototype), Wr.prototype.constructor = Wr, Wr.prototype.__class__ = Wr, Wr.__cache__ = {}, o.PeUnit = Wr, Wr.prototype.getUnitFactor = Wr.prototype.getUnitFactor = function() {
    var t3 = this.ptr;
    return vt(t3);
  }, Wr.prototype.getCode = Wr.prototype.getCode = function() {
    var t3 = this.ptr;
    return Mt(t3);
  }, Wr.prototype.getName = Wr.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(jt(e2, t3));
  }, Wr.prototype.getType = Wr.prototype.getType = function() {
    var t3 = this.ptr;
    return Dt(t3);
  }, Br.prototype = Object.create(jr.prototype), Br.prototype.constructor = Br, Br.prototype.__class__ = Br, Br.__cache__ = {}, o.VoidPtr = Br, Br.prototype.__destroy__ = Br.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    At(t3);
  }, qr.prototype = Object.create(Wr.prototype), qr.prototype.constructor = qr, qr.prototype.__class__ = qr, qr.__cache__ = {}, o.PeAngunit = qr, qr.prototype.getCode = qr.prototype.getCode = function() {
    var t3 = this.ptr;
    return Rt(t3);
  }, qr.prototype.getName = qr.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Gt(e2, t3));
  }, qr.prototype.getType = qr.prototype.getType = function() {
    var t3 = this.ptr;
    return Ct(t3);
  }, qr.prototype.getUnitFactor = qr.prototype.getUnitFactor = function() {
    var t3 = this.ptr;
    return It(t3);
  }, Kr.prototype = Object.create(zr.prototype), Kr.prototype.constructor = Kr, Kr.prototype.__class__ = Kr, Kr.__cache__ = {}, o.PeDatum = Kr, Kr.prototype.getSpheroid = Kr.prototype.getSpheroid = function() {
    var t3 = this.ptr;
    return Ar(Lt(t3), u_);
  }, Kr.prototype.getCode = Kr.prototype.getCode = function() {
    var t3 = this.ptr;
    return Ut(t3);
  }, Kr.prototype.getName = Kr.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(wt(e2, t3));
  }, Kr.prototype.getType = Kr.prototype.getType = function() {
    var t3 = this.ptr;
    return Ft(t3);
  }, Vr.prototype = Object.create(jr.prototype), Vr.prototype.constructor = Vr, Vr.prototype.__class__ = Vr, Vr.__cache__ = {}, o.PeDefs = Vr, Vr.prototype.get_PE_BUFFER_MAX = Vr.prototype.get_PE_BUFFER_MAX = function() {
    var t3 = this.ptr;
    return Yt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_BUFFER_MAX", { get: Vr.prototype.get_PE_BUFFER_MAX }), Vr.prototype.get_PE_NAME_MAX = Vr.prototype.get_PE_NAME_MAX = function() {
    var t3 = this.ptr;
    return Xt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_NAME_MAX", { get: Vr.prototype.get_PE_NAME_MAX }), Vr.prototype.get_PE_MGRS_MAX = Vr.prototype.get_PE_MGRS_MAX = function() {
    var t3 = this.ptr;
    return xt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_MGRS_MAX", { get: Vr.prototype.get_PE_MGRS_MAX }), Vr.prototype.get_PE_USNG_MAX = Vr.prototype.get_PE_USNG_MAX = function() {
    var t3 = this.ptr;
    return Ht(t3);
  }, Object.defineProperty(Vr.prototype, "PE_USNG_MAX", { get: Vr.prototype.get_PE_USNG_MAX }), Vr.prototype.get_PE_DD_MAX = Vr.prototype.get_PE_DD_MAX = function() {
    var t3 = this.ptr;
    return zt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_DD_MAX", { get: Vr.prototype.get_PE_DD_MAX }), Vr.prototype.get_PE_DMS_MAX = Vr.prototype.get_PE_DMS_MAX = function() {
    var t3 = this.ptr;
    return Zt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_DMS_MAX", { get: Vr.prototype.get_PE_DMS_MAX }), Vr.prototype.get_PE_DDM_MAX = Vr.prototype.get_PE_DDM_MAX = function() {
    var t3 = this.ptr;
    return Wt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_DDM_MAX", { get: Vr.prototype.get_PE_DDM_MAX }), Vr.prototype.get_PE_UTM_MAX = Vr.prototype.get_PE_UTM_MAX = function() {
    var t3 = this.ptr;
    return Bt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_UTM_MAX", { get: Vr.prototype.get_PE_UTM_MAX }), Vr.prototype.get_PE_PARM_MAX = Vr.prototype.get_PE_PARM_MAX = function() {
    var t3 = this.ptr;
    return qt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_PARM_MAX", { get: Vr.prototype.get_PE_PARM_MAX }), Vr.prototype.get_PE_TYPE_NONE = Vr.prototype.get_PE_TYPE_NONE = function() {
    var t3 = this.ptr;
    return Kt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_NONE", { get: Vr.prototype.get_PE_TYPE_NONE }), Vr.prototype.get_PE_TYPE_GEOGCS = Vr.prototype.get_PE_TYPE_GEOGCS = function() {
    var t3 = this.ptr;
    return Vt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_GEOGCS", { get: Vr.prototype.get_PE_TYPE_GEOGCS }), Vr.prototype.get_PE_TYPE_PROJCS = Vr.prototype.get_PE_TYPE_PROJCS = function() {
    var t3 = this.ptr;
    return kt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_PROJCS", { get: Vr.prototype.get_PE_TYPE_PROJCS }), Vr.prototype.get_PE_TYPE_GEOGTRAN = Vr.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var t3 = this.ptr;
    return $t(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_GEOGTRAN", { get: Vr.prototype.get_PE_TYPE_GEOGTRAN }), Vr.prototype.get_PE_TYPE_COORDSYS = Vr.prototype.get_PE_TYPE_COORDSYS = function() {
    var t3 = this.ptr;
    return Jt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_COORDSYS", { get: Vr.prototype.get_PE_TYPE_COORDSYS }), Vr.prototype.get_PE_TYPE_UNIT = Vr.prototype.get_PE_TYPE_UNIT = function() {
    var t3 = this.ptr;
    return Qt(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_UNIT", { get: Vr.prototype.get_PE_TYPE_UNIT }), Vr.prototype.get_PE_TYPE_LINUNIT = Vr.prototype.get_PE_TYPE_LINUNIT = function() {
    var t3 = this.ptr;
    return te(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TYPE_LINUNIT", { get: Vr.prototype.get_PE_TYPE_LINUNIT }), Vr.prototype.get_PE_STR_OPTS_NONE = Vr.prototype.get_PE_STR_OPTS_NONE = function() {
    var t3 = this.ptr;
    return ee(t3);
  }, Object.defineProperty(Vr.prototype, "PE_STR_OPTS_NONE", { get: Vr.prototype.get_PE_STR_OPTS_NONE }), Vr.prototype.get_PE_STR_AUTH_NONE = Vr.prototype.get_PE_STR_AUTH_NONE = function() {
    var t3 = this.ptr;
    return oe(t3);
  }, Object.defineProperty(Vr.prototype, "PE_STR_AUTH_NONE", { get: Vr.prototype.get_PE_STR_AUTH_NONE }), Vr.prototype.get_PE_STR_AUTH_TOP = Vr.prototype.get_PE_STR_AUTH_TOP = function() {
    var t3 = this.ptr;
    return re(t3);
  }, Object.defineProperty(Vr.prototype, "PE_STR_AUTH_TOP", { get: Vr.prototype.get_PE_STR_AUTH_TOP }), Vr.prototype.get_PE_STR_NAME_CANON = Vr.prototype.get_PE_STR_NAME_CANON = function() {
    var t3 = this.ptr;
    return _e(t3);
  }, Object.defineProperty(Vr.prototype, "PE_STR_NAME_CANON", { get: Vr.prototype.get_PE_STR_NAME_CANON }), Vr.prototype.get_PE_STR_FMT_WKT = Vr.prototype.get_PE_STR_FMT_WKT = function() {
    var t3 = this.ptr;
    return pe(t3);
  }, Object.defineProperty(Vr.prototype, "PE_STR_FMT_WKT", { get: Vr.prototype.get_PE_STR_FMT_WKT }), Vr.prototype.get_PE_STR_FMT_WKT2 = Vr.prototype.get_PE_STR_FMT_WKT2 = function() {
    var t3 = this.ptr;
    return ne(t3);
  }, Object.defineProperty(Vr.prototype, "PE_STR_FMT_WKT2", { get: Vr.prototype.get_PE_STR_FMT_WKT2 }), Vr.prototype.get_PE_PARM_X0 = Vr.prototype.get_PE_PARM_X0 = function() {
    var t3 = this.ptr;
    return ie(t3);
  }, Object.defineProperty(Vr.prototype, "PE_PARM_X0", { get: Vr.prototype.get_PE_PARM_X0 }), Vr.prototype.get_PE_PARM_ND = Vr.prototype.get_PE_PARM_ND = function() {
    var t3 = this.ptr;
    return ce(t3);
  }, Object.defineProperty(Vr.prototype, "PE_PARM_ND", { get: Vr.prototype.get_PE_PARM_ND }), Vr.prototype.get_PE_TRANSFORM_1_TO_2 = Vr.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var t3 = this.ptr;
    return ae(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TRANSFORM_1_TO_2", { get: Vr.prototype.get_PE_TRANSFORM_1_TO_2 }), Vr.prototype.get_PE_TRANSFORM_2_TO_1 = Vr.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var t3 = this.ptr;
    return ye(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TRANSFORM_2_TO_1", { get: Vr.prototype.get_PE_TRANSFORM_2_TO_1 }), Vr.prototype.get_PE_TRANSFORM_P_TO_G = Vr.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var t3 = this.ptr;
    return se(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TRANSFORM_P_TO_G", { get: Vr.prototype.get_PE_TRANSFORM_P_TO_G }), Vr.prototype.get_PE_TRANSFORM_G_TO_P = Vr.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var t3 = this.ptr;
    return Pe(t3);
  }, Object.defineProperty(Vr.prototype, "PE_TRANSFORM_G_TO_P", { get: Vr.prototype.get_PE_TRANSFORM_G_TO_P }), Vr.prototype.get_PE_HORIZON_RECT = Vr.prototype.get_PE_HORIZON_RECT = function() {
    var t3 = this.ptr;
    return ge(t3);
  }, Object.defineProperty(Vr.prototype, "PE_HORIZON_RECT", { get: Vr.prototype.get_PE_HORIZON_RECT }), Vr.prototype.get_PE_HORIZON_POLY = Vr.prototype.get_PE_HORIZON_POLY = function() {
    var t3 = this.ptr;
    return ue(t3);
  }, Object.defineProperty(Vr.prototype, "PE_HORIZON_POLY", { get: Vr.prototype.get_PE_HORIZON_POLY }), Vr.prototype.get_PE_HORIZON_LINE = Vr.prototype.get_PE_HORIZON_LINE = function() {
    var t3 = this.ptr;
    return fe(t3);
  }, Object.defineProperty(Vr.prototype, "PE_HORIZON_LINE", { get: Vr.prototype.get_PE_HORIZON_LINE }), Vr.prototype.get_PE_HORIZON_DELTA = Vr.prototype.get_PE_HORIZON_DELTA = function() {
    var t3 = this.ptr;
    return be(t3);
  }, Object.defineProperty(Vr.prototype, "PE_HORIZON_DELTA", { get: Vr.prototype.get_PE_HORIZON_DELTA }), kr.prototype = Object.create(jr.prototype), kr.prototype.constructor = kr, kr.prototype.__class__ = kr, kr.__cache__ = {}, o.PeDouble = kr, kr.prototype.get_val = kr.prototype.get_val = function() {
    var t3 = this.ptr;
    return de(t3);
  }, kr.prototype.set_val = kr.prototype.set_val = function(t3) {
    var e2 = this.ptr;
    t3 && "object" == typeof t3 && (t3 = t3.ptr), Te(e2, t3);
  }, Object.defineProperty(kr.prototype, "val", { get: kr.prototype.get_val, set: kr.prototype.set_val }), kr.prototype.__destroy__ = kr.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    Oe(t3);
  }, $r.prototype = Object.create(jr.prototype), $r.prototype.constructor = $r, $r.prototype.__class__ = $r, $r.__cache__ = {}, o.PeFactory = $r, $r.prototype.initialize = $r.prototype.initialize = function(t3) {
    Ur.prepare(), t3 = t3 && "object" == typeof t3 ? t3.ptr : wr(t3), me(t3);
  }, $r.prototype.factoryByType = $r.prototype.factoryByType = function(t3, e2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), Ar(he(t3, e2), zr);
  }, $r.prototype.fromString = $r.prototype.fromString = function(t3, e2) {
    return Ur.prepare(), t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 = e2 && "object" == typeof e2 ? e2.ptr : wr(e2), Ar(Se(t3, e2), zr);
  }, $r.prototype.getCode = $r.prototype.getCode = function(t3) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), Ne(t3);
  }, Jr.prototype = Object.create(jr.prototype), Jr.prototype.constructor = Jr, Jr.prototype.__class__ = Jr, Jr.__cache__ = {}, o.PeGCSExtent = Jr, Jr.prototype.getLLon = Jr.prototype.getLLon = function() {
    var t3 = this.ptr;
    return ve(t3);
  }, Jr.prototype.getSLat = Jr.prototype.getSLat = function() {
    var t3 = this.ptr;
    return Me(t3);
  }, Jr.prototype.getRLon = Jr.prototype.getRLon = function() {
    var t3 = this.ptr;
    return je(t3);
  }, Jr.prototype.getNLat = Jr.prototype.getNLat = function() {
    var t3 = this.ptr;
    return De(t3);
  }, Jr.prototype.__destroy__ = Jr.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    Ae(t3);
  }, Qr.prototype = Object.create(Zr.prototype), Qr.prototype.constructor = Qr, Qr.prototype.__class__ = Qr, Qr.__cache__ = {}, o.PeGeogcs = Qr, Qr.prototype.Delete = Qr.prototype.Delete = function() {
    var t3 = this.ptr;
    Re(t3);
  }, Qr.prototype.cloneAlterUnits = Qr.prototype.cloneAlterUnits = function(t3) {
    var e2 = this.ptr;
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), Ar(Ge(e2, t3), Qr);
  }, Qr.prototype.getDatum = Qr.prototype.getDatum = function() {
    var t3 = this.ptr;
    return Ar(Ce(t3), Kr);
  }, Qr.prototype.getPrimem = Qr.prototype.getPrimem = function() {
    var t3 = this.ptr;
    return Ar(Ie(t3), P_);
  }, Qr.prototype.getUnit = Qr.prototype.getUnit = function() {
    var t3 = this.ptr;
    return Ar(Le(t3), qr);
  }, Qr.prototype.isEqual = Qr.prototype.isEqual = function(t3) {
    var e2 = this.ptr;
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!Ue(e2, t3);
  }, Qr.prototype.getCode = Qr.prototype.getCode = function() {
    var t3 = this.ptr;
    return we(t3);
  }, Qr.prototype.getName = Qr.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Fe(e2, t3));
  }, Qr.prototype.getType = Qr.prototype.getType = function() {
    var t3 = this.ptr;
    return Ye(t3);
  }, t_.prototype = Object.create(zr.prototype), t_.prototype.constructor = t_, t_.prototype.__class__ = t_, t_.__cache__ = {}, o.PeGeogtran = t_, t_.prototype.isEqual = t_.prototype.isEqual = function(t3) {
    var e2 = this.ptr;
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!Xe(e2, t3);
  }, t_.prototype.getGeogcs1 = t_.prototype.getGeogcs1 = function() {
    var t3 = this.ptr;
    return Ar(xe(t3), Qr);
  }, t_.prototype.getGeogcs2 = t_.prototype.getGeogcs2 = function() {
    var t3 = this.ptr;
    return Ar(He(t3), Qr);
  }, t_.prototype.getParameters = t_.prototype.getParameters = function() {
    var t3 = this.ptr;
    return ze(t3);
  }, t_.prototype.loadConstants = t_.prototype.loadConstants = function() {
    var t3 = this.ptr;
    return !!Ze(t3);
  }, t_.prototype.getCode = t_.prototype.getCode = function() {
    var t3 = this.ptr;
    return We(t3);
  }, t_.prototype.getName = t_.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Be(e2, t3));
  }, t_.prototype.getType = t_.prototype.getType = function() {
    var t3 = this.ptr;
    return qe(t3);
  }, e_.prototype = Object.create(jr.prototype), e_.prototype.constructor = e_, e_.prototype.__class__ = e_, e_.__cache__ = {}, o.PeGTlistExtended = e_, e_.prototype.getGTlist = e_.prototype.getGTlist = function(t3, e2, o2, r2, _2, p2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), Ar(Ke(t3, e2, o2, r2, _2, p2), o_);
  }, e_.prototype.get_PE_GTLIST_OPTS_COMMON = e_.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var t3 = this.ptr;
    return Ve(t3);
  }, Object.defineProperty(e_.prototype, "PE_GTLIST_OPTS_COMMON", { get: e_.prototype.get_PE_GTLIST_OPTS_COMMON }), o_.prototype = Object.create(jr.prototype), o_.prototype.constructor = o_, o_.prototype.__class__ = o_, o_.__cache__ = {}, o.PeGTlistExtendedEntry = o_, o_.prototype.getEntries = o_.prototype.getEntries = function() {
    var t3 = this.ptr;
    return Ar(ke(t3), r_);
  }, o_.prototype.getSteps = o_.prototype.getSteps = function() {
    var t3 = this.ptr;
    return $e(t3);
  }, o_.prototype.Delete = o_.prototype.Delete = function(t3) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), Je(t3);
  }, r_.prototype = Object.create(jr.prototype), r_.prototype.constructor = r_, r_.prototype.__class__ = r_, r_.__cache__ = {}, o.PeGTlistExtendedGTs = r_, r_.prototype.getDirection = r_.prototype.getDirection = function() {
    var t3 = this.ptr;
    return Qe(t3);
  }, r_.prototype.getGeogtran = r_.prototype.getGeogtran = function() {
    var t3 = this.ptr;
    return Ar(to(t3), t_);
  }, __.prototype = Object.create(jr.prototype), __.prototype.constructor = __, __.prototype.__class__ = __, __.__cache__ = {}, o.PeHorizon = __, __.prototype.getNump = __.prototype.getNump = function() {
    var t3 = this.ptr;
    return eo(t3);
  }, __.prototype.getKind = __.prototype.getKind = function() {
    var t3 = this.ptr;
    return oo(t3);
  }, __.prototype.getInclusive = __.prototype.getInclusive = function() {
    var t3 = this.ptr;
    return ro(t3);
  }, __.prototype.getSize = __.prototype.getSize = function() {
    var t3 = this.ptr;
    return _o(t3);
  }, __.prototype.getCoord = __.prototype.getCoord = function() {
    var t3 = this.ptr;
    return po(t3);
  }, p_.prototype = Object.create(jr.prototype), p_.prototype.constructor = p_, p_.prototype.__class__ = p_, p_.__cache__ = {}, o.PeInteger = p_, p_.prototype.get_val = p_.prototype.get_val = function() {
    var t3 = this.ptr;
    return io(t3);
  }, p_.prototype.set_val = p_.prototype.set_val = function(t3) {
    var e2 = this.ptr;
    t3 && "object" == typeof t3 && (t3 = t3.ptr), co(e2, t3);
  }, Object.defineProperty(p_.prototype, "val", { get: p_.prototype.get_val, set: p_.prototype.set_val }), p_.prototype.__destroy__ = p_.prototype.__destroy__ = function() {
    var t3 = this.ptr;
    ao(t3);
  }, n_.prototype = Object.create(jr.prototype), n_.prototype.constructor = n_, n_.prototype.__class__ = n_, n_.__cache__ = {}, o.PeLineType = n_, n_.prototype.geodetic_distance = n_.prototype.geodetic_distance = function(t3, e2, o2, r2, _2, p2, n2, i2, c2, a2) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), n2 && "object" == typeof n2 && (n2 = n2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), c2 && "object" == typeof c2 && (c2 = c2.ptr), a2 && "object" == typeof a2 && (a2 = a2.ptr), yo(t3, e2, o2, r2, _2, p2, n2, i2, c2, a2);
  }, n_.prototype.geodetic_coordinate = n_.prototype.geodetic_coordinate = function(t3, e2, o2, r2, _2, p2, n2, i2, c2) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), n2 && "object" == typeof n2 && (n2 = n2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), c2 && "object" == typeof c2 && (c2 = c2.ptr), so(t3, e2, o2, r2, _2, p2, n2, i2, c2);
  }, n_.prototype.geodesic_coordinate = n_.prototype.geodesic_coordinate = function(t3, e2, o2, r2, _2, p2, n2, i2) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), n2 && "object" == typeof n2 && (n2 = n2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), Po(t3, e2, o2, r2, _2, p2, n2, i2);
  }, n_.prototype.great_elliptic_distance = n_.prototype.great_elliptic_distance = function(t3, e2, o2, r2, _2, p2, n2, i2, c2) {
    t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), r2 && "object" == typeof r2 && (r2 = r2.ptr), _2 && "object" == typeof _2 && (_2 = _2.ptr), p2 && "object" == typeof p2 && (p2 = p2.ptr), n2 && "object" == typeof n2 && (n2 = n2.ptr), i2 && "object" == typeof i2 && (i2 = i2.ptr), c2 && "object" == typeof c2 && (c2 = c2.ptr), go(t3, e2, o2, r2, _2, p2, n2, i2, c2);
  }, i_.prototype = Object.create(jr.prototype), i_.prototype.constructor = i_, i_.prototype.__class__ = i_, i_.__cache__ = {}, o.PeMath = i_, i_.prototype.phi_to_eta = i_.prototype.phi_to_eta = function(t3, e2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), uo(t3, e2);
  }, i_.prototype.eta_to_phi = i_.prototype.eta_to_phi = function(t3, e2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), fo(t3, e2);
  }, i_.prototype.phi_to_phig = i_.prototype.phi_to_phig = function(t3, e2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), bo(t3, e2);
  }, i_.prototype.q = i_.prototype.q = function(t3, e2, o2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), o2 && "object" == typeof o2 && (o2 = o2.ptr), Eo(t3, e2, o2);
  }, i_.prototype.q90 = i_.prototype.q90 = function(t3, e2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), To(t3, e2);
  }, c_.prototype = Object.create(jr.prototype), c_.prototype.constructor = c_, c_.prototype.__class__ = c_, c_.__cache__ = {}, o.PeNotationMgrs = c_, c_.prototype.get_PE_MGRS_STYLE_NEW = c_.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var t3 = this.ptr;
    return Oo(t3);
  }, Object.defineProperty(c_.prototype, "PE_MGRS_STYLE_NEW", { get: c_.prototype.get_PE_MGRS_STYLE_NEW }), c_.prototype.get_PE_MGRS_STYLE_OLD = c_.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var t3 = this.ptr;
    return mo(t3);
  }, Object.defineProperty(c_.prototype, "PE_MGRS_STYLE_OLD", { get: c_.prototype.get_PE_MGRS_STYLE_OLD }), c_.prototype.get_PE_MGRS_STYLE_AUTO = c_.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var t3 = this.ptr;
    return ho(t3);
  }, Object.defineProperty(c_.prototype, "PE_MGRS_STYLE_AUTO", { get: c_.prototype.get_PE_MGRS_STYLE_AUTO }), c_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = c_.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var t3 = this.ptr;
    return So(t3);
  }, Object.defineProperty(c_.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: c_.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), c_.prototype.get_PE_MGRS_ADD_SPACES = c_.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var t3 = this.ptr;
    return No(t3);
  }, Object.defineProperty(c_.prototype, "PE_MGRS_ADD_SPACES", { get: c_.prototype.get_PE_MGRS_ADD_SPACES }), a_.prototype = Object.create(jr.prototype), a_.prototype.constructor = a_, a_.prototype.__class__ = a_, a_.__cache__ = {}, o.PeNotationUtm = a_, a_.prototype.get_PE_UTM_OPTS_NONE = a_.prototype.get_PE_UTM_OPTS_NONE = function() {
    var t3 = this.ptr;
    return lo(t3);
  }, Object.defineProperty(a_.prototype, "PE_UTM_OPTS_NONE", { get: a_.prototype.get_PE_UTM_OPTS_NONE }), a_.prototype.get_PE_UTM_OPTS_NS = a_.prototype.get_PE_UTM_OPTS_NS = function() {
    var t3 = this.ptr;
    return vo(t3);
  }, Object.defineProperty(a_.prototype, "PE_UTM_OPTS_NS", { get: a_.prototype.get_PE_UTM_OPTS_NS }), a_.prototype.get_PE_UTM_OPTS_NS_STRICT = a_.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var t3 = this.ptr;
    return Mo(t3);
  }, Object.defineProperty(a_.prototype, "PE_UTM_OPTS_NS_STRICT", { get: a_.prototype.get_PE_UTM_OPTS_NS_STRICT }), a_.prototype.get_PE_UTM_OPTS_ADD_SPACES = a_.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var t3 = this.ptr;
    return jo(t3);
  }, Object.defineProperty(a_.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: a_.prototype.get_PE_UTM_OPTS_ADD_SPACES }), y_.prototype = Object.create(zr.prototype), y_.prototype.constructor = y_, y_.prototype.__class__ = y_, y_.__cache__ = {}, o.PeParameter = y_, y_.prototype.getValue = y_.prototype.getValue = function() {
    var t3 = this.ptr;
    return Do(t3);
  }, y_.prototype.getCode = y_.prototype.getCode = function() {
    var t3 = this.ptr;
    return Ao(t3);
  }, y_.prototype.getName = y_.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Ro(e2, t3));
  }, y_.prototype.getType = y_.prototype.getType = function() {
    var t3 = this.ptr;
    return Go(t3);
  }, s_.prototype = Object.create(jr.prototype), s_.prototype.constructor = s_, s_.prototype.__class__ = s_, s_.__cache__ = {}, o.PePCSInfo = s_, s_.prototype.getCentralMeridian = s_.prototype.getCentralMeridian = function() {
    var t3 = this.ptr;
    return Co(t3);
  }, s_.prototype.getDomainMinx = s_.prototype.getDomainMinx = function() {
    var t3 = this.ptr;
    return Io(t3);
  }, s_.prototype.getDomainMiny = s_.prototype.getDomainMiny = function() {
    var t3 = this.ptr;
    return Lo(t3);
  }, s_.prototype.getDomainMaxx = s_.prototype.getDomainMaxx = function() {
    var t3 = this.ptr;
    return Uo(t3);
  }, s_.prototype.getDomainMaxy = s_.prototype.getDomainMaxy = function() {
    var t3 = this.ptr;
    return wo(t3);
  }, s_.prototype.getNorthPoleLocation = s_.prototype.getNorthPoleLocation = function() {
    var t3 = this.ptr;
    return Fo(t3);
  }, s_.prototype.getNorthPoleGeometry = s_.prototype.getNorthPoleGeometry = function() {
    var t3 = this.ptr;
    return Yo(t3);
  }, s_.prototype.getSouthPoleLocation = s_.prototype.getSouthPoleLocation = function() {
    var t3 = this.ptr;
    return Xo(t3);
  }, s_.prototype.getSouthPoleGeometry = s_.prototype.getSouthPoleGeometry = function() {
    var t3 = this.ptr;
    return xo(t3);
  }, s_.prototype.isDensificationNeeded = s_.prototype.isDensificationNeeded = function() {
    var t3 = this.ptr;
    return !!Ho(t3);
  }, s_.prototype.isGcsHorizonMultiOverlap = s_.prototype.isGcsHorizonMultiOverlap = function() {
    var t3 = this.ptr;
    return !!zo(t3);
  }, s_.prototype.isPannableRectangle = s_.prototype.isPannableRectangle = function() {
    var t3 = this.ptr;
    return !!Zo(t3);
  }, s_.prototype.generate = s_.prototype.generate = function(t3, e2) {
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), e2 && "object" == typeof e2 && (e2 = e2.ptr), Ar(Wo(t3, e2), s_);
  }, s_.prototype.get_PE_PCSINFO_OPTION_NONE = s_.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var t3 = this.ptr;
    return Bo(t3);
  }, Object.defineProperty(s_.prototype, "PE_PCSINFO_OPTION_NONE", { get: s_.prototype.get_PE_PCSINFO_OPTION_NONE }), s_.prototype.get_PE_PCSINFO_OPTION_DOMAIN = s_.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var t3 = this.ptr;
    return qo(t3);
  }, Object.defineProperty(s_.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: s_.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), s_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = s_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var t3 = this.ptr;
    return Ko(t3);
  }, Object.defineProperty(s_.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: s_.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), s_.prototype.get_PE_POLE_POINT = s_.prototype.get_PE_POLE_POINT = function() {
    var t3 = this.ptr;
    return Vo(t3);
  }, Object.defineProperty(s_.prototype, "PE_POLE_POINT", { get: s_.prototype.get_PE_POLE_POINT }), P_.prototype = Object.create(zr.prototype), P_.prototype.constructor = P_, P_.prototype.__class__ = P_, P_.__cache__ = {}, o.PePrimem = P_, P_.prototype.getLongitude = P_.prototype.getLongitude = function() {
    var t3 = this.ptr;
    return ko(t3);
  }, P_.prototype.getCode = P_.prototype.getCode = function() {
    var t3 = this.ptr;
    return $o(t3);
  }, P_.prototype.getName = P_.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(Jo(e2, t3));
  }, P_.prototype.getType = P_.prototype.getType = function() {
    var t3 = this.ptr;
    return Qo(t3);
  }, g_.prototype = Object.create(Zr.prototype), g_.prototype.constructor = g_, g_.prototype.__class__ = g_, g_.__cache__ = {}, o.PeProjcs = g_, g_.prototype.Delete = g_.prototype.Delete = function() {
    var t3 = this.ptr;
    tr(t3);
  }, g_.prototype.getGeogcs = g_.prototype.getGeogcs = function() {
    var t3 = this.ptr;
    return Ar(er(t3), Qr);
  }, g_.prototype.getProjection = g_.prototype.getProjection = function() {
    var t3 = this.ptr;
    return Ar(or(t3), zr);
  }, g_.prototype.getParameters = g_.prototype.getParameters = function() {
    var t3 = this.ptr;
    return rr(t3);
  }, g_.prototype.getUnit = g_.prototype.getUnit = function() {
    var t3 = this.ptr;
    return Ar(_r(t3), Wr);
  }, g_.prototype.loadConstants = g_.prototype.loadConstants = function() {
    var t3 = this.ptr;
    return !!pr(t3);
  }, g_.prototype.horizonGcsGenerate = g_.prototype.horizonGcsGenerate = function() {
    var t3 = this.ptr;
    return Ar(nr(t3), __);
  }, g_.prototype.horizonPcsGenerate = g_.prototype.horizonPcsGenerate = function() {
    var t3 = this.ptr;
    return Ar(ir(t3), __);
  }, g_.prototype.isEqual = g_.prototype.isEqual = function(t3) {
    var e2 = this.ptr;
    return t3 && "object" == typeof t3 && (t3 = t3.ptr), !!cr(e2, t3);
  }, g_.prototype.getCode = g_.prototype.getCode = function() {
    var t3 = this.ptr;
    return ar(t3);
  }, g_.prototype.getName = g_.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(yr(e2, t3));
  }, g_.prototype.getType = g_.prototype.getType = function() {
    var t3 = this.ptr;
    return sr(t3);
  }, u_.prototype = Object.create(zr.prototype), u_.prototype.constructor = u_, u_.prototype.__class__ = u_, u_.__cache__ = {}, o.PeSpheroid = u_, u_.prototype.getAxis = u_.prototype.getAxis = function() {
    var t3 = this.ptr;
    return Pr(t3);
  }, u_.prototype.getFlattening = u_.prototype.getFlattening = function() {
    var t3 = this.ptr;
    return gr(t3);
  }, u_.prototype.getCode = u_.prototype.getCode = function() {
    var t3 = this.ptr;
    return ur(t3);
  }, u_.prototype.getName = u_.prototype.getName = function(t3) {
    var e2 = this.ptr;
    return Ur.prepare(), "object" == typeof t3 && (t3 = Fr(t3)), Y(fr(e2, t3));
  }, u_.prototype.getType = u_.prototype.getType = function() {
    var t3 = this.ptr;
    return br(t3);
  }, f_.prototype = Object.create(jr.prototype), f_.prototype.constructor = f_, f_.prototype.__class__ = f_, f_.__cache__ = {}, o.PeVersion = f_, f_.prototype.version_string = f_.prototype.version_string = function() {
    var t3 = this.ptr;
    return Y(Er(t3));
  }, o.ensureCache = Ur, o.ensureString = wr, o.ensureInt8 = Fr, o.ensureInt16 = Yr, o.ensureInt32 = Xr, o.ensureFloat32 = xr, o.ensureFloat64 = Hr, S ? o : new Promise((t3, e2) => {
    c = t3, a = e2;
  });
}
export {
  t as default
};
//# sourceMappingURL=pe-wasm-ANIAVUE4.js.map
