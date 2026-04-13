import {
  p
} from "./chunk-GRTVQTEC.js";
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
} from "./chunk-R4SZFRNU.js";
import "./chunk-5BCI2JU3.js";
import "./chunk-RTGDSDFV.js";
import {
  P
} from "./chunk-2WLR3ZCM.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-KUQTK7UY.js";
import {
  n
} from "./chunk-N7U7MERC.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=featuresetstring-YJKPQQB7.js.map
