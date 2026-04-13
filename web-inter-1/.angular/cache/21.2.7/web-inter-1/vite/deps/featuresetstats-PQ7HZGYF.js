import {
  I
} from "./chunk-MF7EWZCS.js";
import {
  l
} from "./chunk-THEPOG3F.js";
import "./chunk-Z4WLQRKR.js";
import {
  B,
  K,
  Ke,
  oe,
  te,
  ue,
  z
} from "./chunk-HBIWUHXR.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-BI5WXBSP.js";
import {
  M,
  r
} from "./chunk-36K3TUGQ.js";
import "./chunk-33JEBRCY.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-K6KUHFK2.js";
import {
  m
} from "./chunk-HUY5VELL.js";
import {
  n
} from "./chunk-K3KADXMX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import {
  e,
  f,
  o,
  t
} from "./chunk-UDRKO2UK.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-473S3KQM.js";
import {
  DateTime
} from "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-LAAWMBRE.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
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
//# sourceMappingURL=featuresetstats-PQ7HZGYF.js.map
