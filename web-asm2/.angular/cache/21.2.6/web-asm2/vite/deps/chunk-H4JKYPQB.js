import {
  I,
  N,
  b
} from "./chunk-TA6754NA.js";
import {
  $,
  C,
  E,
  P,
  U,
  d,
  f,
  k,
  p
} from "./chunk-NOD2UYWH.js";

// node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js
async function d2(e) {
  const { attribute: a, features: n } = e, { normalizationType: t, normalizationField: o, minValue: m, maxValue: u, fieldType: d3, outStatisticTypes: p3 } = a, c2 = await N({ field: a.field, valueExpression: a.valueExpression, normalizationType: t, normalizationField: o, normalizationTotal: a.normalizationTotal, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, n), v2 = d({ normalizationType: t, normalizationField: o, minValue: m, maxValue: u }), z2 = { value: 0.5, fieldType: d3 }, T = "esriFieldTypeString" === d3 ? f({ values: c2, supportsNullCount: v2, percentileParams: z2, outStatisticTypes: p3 }) : p({ values: c2, minValue: m, maxValue: u, useSampleStdDev: !t, supportsNullCount: v2, percentileParams: z2, outStatisticTypes: p3 });
  return C(T, p3, "esriFieldTypeDate" === d3);
}
async function p2(e) {
  const { attribute: a, features: n } = e, t = await N({ field: a.field, field2: a.field2, field3: a.field3, fieldDelimiter: a.fieldDelimiter, valueExpression: a.valueExpression, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, n, false), o = k(t);
  return $(o, a.domains, a.returnAllCodedValues, a.fieldDelimiter);
}
async function c(e) {
  const { attribute: a, features: o } = e, { field: l, normalizationType: s, normalizationField: r, normalizationTotal: m, classificationMethod: u } = a, f2 = await N({ field: l, valueExpression: a.valueExpression, normalizationType: s, normalizationField: r, normalizationTotal: m, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, o), d3 = E(f2, { field: l, normalizationType: s, normalizationField: r, normalizationTotal: m, classificationMethod: u, standardDeviationInterval: a.standardDeviationInterval, numClasses: a.numClasses, minValue: a.minValue, maxValue: a.maxValue });
  return P(d3, u);
}
async function v(e) {
  const { attribute: a, features: n } = e, { field: t, normalizationType: l, normalizationField: s, normalizationTotal: r, classificationMethod: m } = a, u = await N({ field: t, valueExpression: a.valueExpression, sqlExpression: a.sqlExpression, normalizationType: l, normalizationField: s, normalizationTotal: r, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, n);
  return U(u, { field: t, normalizationType: l, normalizationField: s, normalizationTotal: r, classificationMethod: m, standardDeviationInterval: a.standardDeviationInterval, numBins: a.numBins, minValue: a.minValue, maxValue: a.maxValue });
}
async function z(i) {
  const { attribute: n, features: t } = i, { field: o, radius: l, transform: s, spatialReference: r } = n, m = n.size ?? [0, 0], u = b(t ?? [], s, r, m);
  return I(u, l ?? void 0, o, m[0], m[1]);
}

export {
  d2 as d,
  p2 as p,
  c,
  v,
  z
};
//# sourceMappingURL=chunk-H4JKYPQB.js.map
