import {
  p
} from "./chunk-JWKKLHJV.js";
import {
  $e,
  B,
  Be,
  Ce,
  H,
  He,
  Ke,
  Oe,
  Qe,
  We,
  be,
  ge,
  oe,
  xe,
  z
} from "./chunk-PNSNEWSP.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-J6FIECQJ.js";
import {
  P
} from "./chunk-4L74KNVT.js";
import "./chunk-G6RPDJXV.js";
import {
  n
} from "./chunk-B22UQGUL.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/functions/featuresetstring.js
function h(a, e) {
  return a && a.domain ? "coded-value" === a.domain.type || "codedValue" === a.domain.type ? p.convertObjectToArcadeDictionary({ type: "codedValue", name: a.domain.name, dataType: P[a.field.type], codedValues: a.domain.codedValues.map((n2) => ({ name: n2.name, code: n2.code })) }, Ke(e)) : p.convertObjectToArcadeDictionary({ type: "range", name: a.domain.name, dataType: P[a.field.type], min: a.domain.minValue, max: a.domain.maxValue }, Ke(e)) : null;
}
function T(p2) {
  "async" === p2.mode && (p2.functions.domain = function(n2, s) {
    return p2.standardFunctionAsync(n2, s, async (d, u, m) => {
      if (oe(m, 2, 3, n2, s), H(m[0])) {
        return h(He(m[0], ge(m[1]), void 0 === m[2] ? void 0 : m[2]), n2);
      }
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        return h(Ce(ge(m[1]), m[0], null, void 0 === m[2] ? void 0 : m[2]), n2);
      }
      throw new n(n2, "InvalidParameter", s);
    });
  }, p2.functions.subtypes = function(r, o) {
    return p2.standardFunctionAsync(r, o, async (c, u, m) => {
      if (oe(m, 1, 1, r, o), H(m[0])) {
        const a = We(m[0]);
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        const a = m[0].subtypeMetadata();
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      throw new n(r, "InvalidParameter", o);
    });
  }, p2.functions.domainname = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (s, d, f) => {
      if (oe(f, 2, 4, n2, r), H(f[0])) return $e(f[0], ge(f[1]), f[2], void 0 === f[3] ? void 0 : f[3]);
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        const n3 = Ce(ge(f[1]), f[0], null, void 0 === f[3] ? void 0 : f[3]);
        return xe(n3, f[2]);
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.signatures.push({ name: "domainname", min: 2, max: 4 }), p2.functions.domaincode = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (s, d, u) => {
      if (oe(u, 2, 4, n2, r), H(u[0])) return Be(u[0], ge(u[1]), u[2], void 0 === u[3] ? void 0 : u[3]);
      if (B(u[0])) {
        await u[0]._ensureLoaded();
        const n3 = Ce(ge(u[1]), u[0], null, void 0 === u[3] ? void 0 : u[3]);
        return Oe(n3, u[2]);
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.signatures.push({ name: "domaincode", min: 2, max: 4 }), p2.functions.text = function(n2, t) {
    return p2.standardFunctionAsync(n2, t, async (r, o, c) => {
      if (oe(c, 1, 2, n2, t), B(c[0])) {
        const e = z(c[1], "");
        if ("" === e) return c[0].castToText();
        if ("schema" === e.toLowerCase()) return c[0].convertToText("schema", r.abortSignal);
        if ("featureset" === e.toLowerCase()) return c[0].convertToText("featureset", r.abortSignal);
        throw new n(n2, "InvalidParameter", t);
      }
      return be(c[0], c[1]);
    });
  }, p2.functions.gdbversion = function(n2, r) {
    return p2.standardFunctionAsync(n2, r, async (o, c, s) => {
      if (oe(s, 1, 1, n2, r), H(s[0])) return s[0].gdbVersion();
      if (B(s[0])) {
        return (await s[0].load()).gdbVersion;
      }
      throw new n(n2, "InvalidParameter", r);
    });
  }, p2.functions.schema = function(r, o) {
    return p2.standardFunctionAsync(r, o, async (c, s, u) => {
      if (oe(u, 1, 1, r, o), B(u[0])) return await u[0].load(), p.convertObjectToArcadeDictionary(u[0].schema(), Ke(r));
      if (H(u[0])) {
        const a = Qe(u[0]);
        return a ? p.convertObjectToArcadeDictionary(a, Ke(r)) : null;
      }
      throw new n(r, "InvalidParameter", o);
    });
  });
}
export {
  T as registerFunctions
};
//# sourceMappingURL=featuresetstring-PBBTDTUO.js.map
