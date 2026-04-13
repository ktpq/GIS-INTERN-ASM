import {
  I
} from "./chunk-A5OJG5V4.js";
import {
  l
} from "./chunk-2NVASZN4.js";
import "./chunk-GRTVQTEC.js";
import {
  B,
  K,
  Ke,
  oe,
  te,
  ue,
  z
} from "./chunk-R4SZFRNU.js";
import "./chunk-5BCI2JU3.js";
import "./chunk-RTGDSDFV.js";
import {
  M,
  r
} from "./chunk-7IF43WAJ.js";
import "./chunk-2WLR3ZCM.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-3QK2DR4J.js";
import {
  m
} from "./chunk-KUQTK7UY.js";
import {
  n
} from "./chunk-N7U7MERC.js";
import "./chunk-LKWKFYCL.js";
import {
  e,
  f,
  o,
  t
} from "./chunk-TPJLJ32L.js";
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
import "./chunk-OLWKRV2W.js";
import {
  DateTime
} from "./chunk-LHNGH3Y4.js";
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
//# sourceMappingURL=featuresetstats-O2CAUVLN.js.map
