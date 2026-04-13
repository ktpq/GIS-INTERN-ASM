import {
  I
} from "./chunk-6T46MZ5F.js";
import {
  l
} from "./chunk-ONFKCEBD.js";
import {
  M,
  r
} from "./chunk-NOYK25RO.js";
import "./chunk-D2UKWTS5.js";
import {
  B,
  K,
  Ke,
  oe,
  te,
  ue,
  z
} from "./chunk-2KPSUWRN.js";
import "./chunk-5BCI2JU3.js";
import "./chunk-6FHQMPHK.js";
import "./chunk-7RXTTEFJ.js";
import "./chunk-3QK2DR4J.js";
import "./chunk-2IAEDPBU.js";
import "./chunk-L244Y4DX.js";
import {
  m
} from "./chunk-O6ZJLPWL.js";
import {
  n
} from "./chunk-6YL5AAWZ.js";
import "./chunk-LKWKFYCL.js";
import {
  e,
  f,
  o,
  t
} from "./chunk-TPJLJ32L.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-OLWKRV2W.js";
import {
  DateTime
} from "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
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
//# sourceMappingURL=featuresetstats-SDUZQXTQ.js.map
