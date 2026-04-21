import {
  I
} from "./chunk-MZLTTK7D.js";
import {
  l
} from "./chunk-BNUYVKJD.js";
import {
  M,
  r
} from "./chunk-OPBWY7J4.js";
import "./chunk-D73LDRDL.js";
import {
  B,
  K,
  Ke,
  oe,
  te,
  ue,
  z
} from "./chunk-5MXYX4KI.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-NAH26QEI.js";
import "./chunk-PT3QCIYI.js";
import "./chunk-K6KUHFK2.js";
import {
  m
} from "./chunk-B4FJHFAW.js";
import {
  n
} from "./chunk-G3XGV2JB.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-K5YEU7YE.js";
import {
  e,
  f,
  o,
  t
} from "./chunk-UDRKO2UK.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-473S3KQM.js";
import {
  DateTime
} from "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/functions/featuresetstats.js
async function F(n2, t2, e2, r2) {
  if (1 === e2.length) {
    if (o(e2[0])) return l(n2, e2[0], z(e2[1], -1));
    if (te(e2[0])) return l(n2, e2[0].toArray(), z(e2[1], -1));
  } else if (2 === e2.length) {
    if (o(e2[0])) return l(n2, e2[0], z(e2[1], -1));
    if (te(e2[0])) return l(n2, e2[0].toArray(), z(e2[1], -1));
    if (B(e2[0])) {
      const a = await e2[0].load(), i = await w(M.create(e2[1], { fieldsIndex: a.getFieldsIndex(), timeZone: a.dateFieldsTimeZoneDefaultUTC }), r2, t2);
      return h(t2, await e2[0].calculateStatistic(n2, i, z(e2[2], 1e3), t2.abortSignal));
    }
  } else if (3 === e2.length && B(e2[0])) {
    const a = await e2[0].load(), i = await w(M.create(e2[1], { fieldsIndex: a.getFieldsIndex(), timeZone: a.dateFieldsTimeZoneDefaultUTC }), r2, t2);
    return h(t2, await e2[0].calculateStatistic(n2, i, z(e2[2], 1e3), t2.abortSignal));
  }
  return l(n2, e2, -1);
}
function h(t2, e2) {
  return r.isTimestampOffset(e2) ? m.fromReaderAsTimeStampOffset(e2.toStorageFormat()) : f(e2) ? m.dateJSAndZoneToArcadeDate(e2, Ke(t2)) : DateTime.isDateTime(e2) ? m.dateTimeToArcadeDate(e2) : e2;
}
async function w(n2, t2, e2) {
  const r2 = n2.getVariables();
  if (r2.length > 0) {
    const a = {};
    for (const n3 of r2) a[n3] = t2.evaluateIdentifier(e2, { name: n3 });
    n2.parameters = a;
  }
  return n2;
}
function S(n2) {
  "async" === n2.mode && (n2.functions.stdev = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("stdev", t2, a, n2));
  }, n2.functions.variance = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("variance", t2, a, n2));
  }, n2.functions.average = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("mean", t2, a, n2));
  }, n2.functions.mean = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("mean", t2, a, n2));
  }, n2.functions.sum = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("sum", t2, a, n2));
  }, n2.functions.min = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("min", t2, a, n2));
  }, n2.functions.max = function(t2, e2) {
    return n2.standardFunctionAsync(t2, e2, (e3, r2, a) => F("max", t2, a, n2));
  }, n2.functions.count = function(t2, s) {
    return n2.standardFunctionAsync(t2, s, async (n3, u, c) => {
      if (oe(c, 1, 1, t2, s), null == c[0]) return 0;
      if (B(c[0])) return c[0].count(n3.abortSignal);
      if (o(c[0]) || e(c[0])) return c[0].length;
      if (te(c[0])) return c[0].length();
      if (K(c[0])) return c[0].entryCount();
      throw new n(t2, "InvalidParameter", s);
    });
  }, n2.functions.isempty = function(i, o2) {
    return n2.standardFunctionAsync(i, o2, async (n3, i2, o3) => {
      if (oe(o3, 1, 2, n3, i2), o3.length >= 2 && !t(o3[1])) throw new n(n3, "InvalidParameter", i2);
      return z(o3[1], false) ? B(o3[0]) ? await o3[0].isEmpty(n3.abortSignal) : I(o3[0]) : ue(o3[0]);
    });
  });
}
export {
  S as registerFunctions
};
//# sourceMappingURL=featuresetstats-GP2ZYCFJ.js.map
