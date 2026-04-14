import {
  I
} from "./chunk-O5OA3ODZ.js";
import {
  l
} from "./chunk-6SO43BSO.js";
import {
  M,
  r
} from "./chunk-YVZGGELN.js";
import "./chunk-JWKKLHJV.js";
import {
  B,
  K,
  Ke,
  oe,
  te,
  ue,
  z
} from "./chunk-PNSNEWSP.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-J6FIECQJ.js";
import "./chunk-4L74KNVT.js";
import "./chunk-K6KUHFK2.js";
import {
  m
} from "./chunk-G6RPDJXV.js";
import {
  n
} from "./chunk-B22UQGUL.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-UIKAL3FG.js";
import {
  e,
  f,
  o,
  t
} from "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import {
  DateTime
} from "./chunk-HTVDNBEG.js";
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
//# sourceMappingURL=featuresetstats-NSADBBKD.js.map
