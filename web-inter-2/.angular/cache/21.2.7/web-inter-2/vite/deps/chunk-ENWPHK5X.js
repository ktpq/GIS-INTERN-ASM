import {
  e as e2,
  s as s4
} from "./chunk-IRC6QLTY.js";
import {
  I,
  h as h2,
  i as i3,
  l as l6,
  n as n3,
  o as o3,
  s as s2,
  w as w2
} from "./chunk-7YY4K5US.js";
import {
  u as u4
} from "./chunk-A7BPJYHN.js";
import {
  t as t2
} from "./chunk-HH7PACOK.js";
import {
  m as m2,
  m2 as m3,
  m3 as m4,
  m4 as m5,
  s as s5
} from "./chunk-NZG3PRTT.js";
import {
  S,
  h,
  j,
  w,
  x
} from "./chunk-ZAUYL4EV.js";
import {
  M as M2,
  f as f2,
  g
} from "./chunk-RNSOC4NC.js";
import {
  F
} from "./chunk-G5HLNQDR.js";
import {
  $,
  B,
  C,
  E,
  G,
  L,
  P as P2,
  U as U2,
  d as d2,
  f as f3,
  g as g2,
  k,
  m,
  p,
  v as v2
} from "./chunk-SQU7RT7G.js";
import {
  H
} from "./chunk-D2Z2HLWL.js";
import {
  r as r3
} from "./chunk-CZPCV5DW.js";
import {
  D
} from "./chunk-XA3Z7BRX.js";
import {
  s as s3
} from "./chunk-WOCPFOF3.js";
import {
  P
} from "./chunk-NGAI3WTZ.js";
import {
  V
} from "./chunk-MYLK6AZ6.js";
import {
  _
} from "./chunk-GXLPH2D4.js";
import {
  i
} from "./chunk-Q3C4JQ3I.js";
import {
  u as u3
} from "./chunk-XJP3RSS7.js";
import {
  Ie,
  Te,
  be,
  e2 as e3,
  we,
  xe
} from "./chunk-WDPGHXN4.js";
import {
  n
} from "./chunk-473S3KQM.js";
import {
  DateTime
} from "./chunk-HTVDNBEG.js";
import {
  l as l5,
  r as r4
} from "./chunk-R3PBZCGD.js";
import {
  d,
  f,
  l as l4
} from "./chunk-Z5I3WFZJ.js";
import {
  M,
  Q,
  i as i2,
  q
} from "./chunk-PWZ6VVYN.js";
import {
  n as n2,
  o as o2
} from "./chunk-GM5PCDS3.js";
import {
  e,
  l as l3,
  v
} from "./chunk-URLT4X25.js";
import {
  o,
  u as u2
} from "./chunk-SH72BZH2.js";
import {
  re
} from "./chunk-NR66QFNF.js";
import {
  T,
  U
} from "./chunk-LANOLZOB.js";
import {
  t
} from "./chunk-2F6BRQJJ.js";
import {
  l,
  l3 as l2,
  s,
  u
} from "./chunk-WARIPJQI.js";
import {
  a,
  r3 as r2
} from "./chunk-6I475YAP.js";
import {
  b,
  r,
  y
} from "./chunk-GLWFJLHD.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/graphics/data/attributeSupport.js
var s6 = new r3(50, 500);
var t3 = "unsupported-query";
var n4 = " as ";
var o4 = /* @__PURE__ */ new Set(["esriFieldTypeOID", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger", "esriFieldTypeInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong"]);
var a2 = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"]);
var l7 = /* @__PURE__ */ new Set(["esriFieldTypeString", "esriFieldTypeGUID", "esriFieldTypeGlobalID", ...o4, ...a2]);
function d3(i4, r6, n5 = {}) {
  const o5 = c(r6, i4);
  if (!o5) {
    const n6 = s6.getError(r6, i4);
    throw new r2(t3, "invalid SQL expression", { expression: r6, error: n6 });
  }
  const a3 = n5.expressionName || "expression";
  if (n5.validateStandardized && !o5.isStandardized) throw new r2(t3, `${a3} is not standard`, { expression: r6 });
  if (n5.validateAggregate && !o5.isAggregate) throw new r2(t3, `${a3} does not contain a valid aggregate function`, { expression: r6 });
  return o5.fieldNames;
}
function p2(e5, i4, r6, s8) {
  if (!r6) return true;
  const t5 = "where clause";
  return g3(e5, i4, d3(e5, r6, { validateStandardized: true, expressionName: t5 }), { expressionName: t5, query: s8 }), true;
}
function f4(i4, r6, s8, n5, o5) {
  if (!s8) return true;
  const a3 = "having clause", l8 = d3(i4, s8, { validateAggregate: true, expressionName: a3 });
  g3(i4, r6, l8, { expressionName: a3, query: o5 });
  const p4 = c(s8, i4), f6 = p4?.getExpressions().every((e5) => {
    const { aggregateType: r7, field: s9 } = e5, t5 = i4.get(s9)?.name;
    return n5.some((e6) => {
      const { onStatisticField: s10, statisticType: n6 } = e6, o6 = i4.get(s10)?.name;
      return o6 === t5 && n6.toLowerCase().trim() === r7;
    });
  });
  if (!f6) throw new r2(t3, "expressions in having clause should also exist in outStatistics", { having: s8 });
  return true;
}
function c(e5, i4) {
  return e5 ? s6.get(e5, i4) : null;
}
function u5(e5) {
  return /\((.*?)\)/.test(e5) ? e5 : e5.split(n4)[0];
}
function y2(e5) {
  return e5.split(n4)[1];
}
function g3(i4, r6, s8, n5 = {}) {
  const o5 = /* @__PURE__ */ new Map();
  if (m6(o5, i4, r6, n5.allowedFieldTypes ?? l7, s8), o5.size) {
    const i5 = n5.expressionName ?? "expression";
    throw new r2(t3, `${i5} contains invalid or missing fields`, { errors: Array.from(o5.values()), query: n5.query });
  }
}
function m6(e5, i4, r6, s8, t5) {
  const n5 = t5.includes("*") ? [...r6, ...t5.filter((e6) => "*" !== e6)] : t5;
  for (const a3 of n5) {
    if (i4.get(a3)) T2(e5, i4, r6, s8, a3);
    else try {
      const t6 = d3(i4, u5(a3), { validateStandardized: true });
      for (const n6 of t6) T2(e5, i4, r6, s8, n6);
    } catch (o5) {
      e5.set(a3, { type: "expression-error", expression: a3, error: o5 });
    }
  }
}
function T2(e5, i4, s8, t5, n5) {
  const o5 = i4.get(n5);
  o5 ? s8.has(o5.name) ? "all" !== t5 && false === t5?.has(o5.type) && e5.set(n5, { type: "invalid-type", fieldName: o5.name, fieldType: i.fromJSON(o5.type), allowedFieldTypes: Array.from(t5, (e6) => i.fromJSON(e6)) }) : e5.set(n5, { type: "missing-field", fieldName: o5.name }) : e5.set(n5, { type: "invalid-field", fieldName: n5 });
}

// node_modules/@arcgis/core/layers/graphics/data/AttributesBuilder.js
var c2 = class {
  constructor(s8, a3, r6) {
    this._fieldDataCache = /* @__PURE__ */ new Map(), this._returnDistinctMap = /* @__PURE__ */ new Map(), this.returnDistinctValues = s8.returnDistinctValues ?? false, this.fieldsIndex = r6, this.featureAdapter = a3;
    const l8 = s8.outFields;
    if (l8 && !l8.includes("*")) {
      this.outFields = l8;
      let s9 = 0;
      for (const a4 of l8) {
        const l9 = u5(a4), n5 = this.fieldsIndex.get(l9), u7 = n5 ? null : c(l9, r6), o5 = n5 ? n5.name : y2(a4) || "FIELD_EXP_" + s9++;
        this._fieldDataCache.set(a4, { alias: o5, clause: u7 });
      }
    }
  }
  countDistinctValues(t5) {
    return this.returnDistinctValues ? (t5.forEach((t6) => this.getAttributes(t6)), this._returnDistinctMap.size) : t5.length;
  }
  getAttributes(t5) {
    const e5 = this._processAttributesForOutFields(t5);
    return this._processAttributesForDistinctValues(e5);
  }
  getFieldValue(t5, i4, s8) {
    if (s8) return this.featureAdapter.getAttribute(t5, s8.name);
    const a3 = i4;
    let r6 = null;
    return this._fieldDataCache.has(a3) ? r6 = this._fieldDataCache.get(a3)?.clause : s8 || (r6 = c(i4, this.fieldsIndex), this._fieldDataCache.set(a3, { alias: a3, clause: r6 })), r6?.calculateValue(t5, this.featureAdapter);
  }
  getDataValues(t5, e5, i4 = true) {
    const s8 = e5.normalizationType, d5 = e5.normalizationTotal, c4 = this.fieldsIndex.get(e5.field), f6 = we(c4) || xe(c4), h4 = Te(c4);
    return t5.map((t6) => {
      let a3 = e5.field && this.getFieldValue(t6, e5.field, this.fieldsIndex.get(e5.field));
      if (e5.field2 ? (a3 = `${m(a3)}${e5.fieldDelimiter}${m(this.getFieldValue(t6, e5.field2, this.fieldsIndex.get(e5.field2)))}`, e5.field3 && (a3 = `${a3}${e5.fieldDelimiter}${m(this.getFieldValue(t6, e5.field3, this.fieldsIndex.get(e5.field3)))}`)) : "string" == typeof a3 && i4 && (f6 ? a3 = a3 ? new Date(a3).getTime() : null : h4 && (a3 = a3 ? F(a3) : null)), s8 && Number.isFinite(a3)) {
        const i5 = "field" === s8 && e5.normalizationField ? this.getFieldValue(t6, e5.normalizationField, this.fieldsIndex.get(e5.normalizationField)) : null;
        a3 = B(a3, s8, i5, d5);
      }
      return a3;
    });
  }
  async getExpressionValues(t5, e5, i4, a3, r6) {
    const { arcadeUtils: l8 } = await e3(), n5 = l8.hasGeometryOperations(e5);
    n5 && await l8.enableGeometryOperations();
    const u7 = l8.createFunction(e5), o5 = l8.getViewInfo(i4), c4 = { fields: this.fieldsIndex.fields };
    return t5.map((t6) => {
      const e6 = { attributes: this.featureAdapter.getAttributes(t6), layer: c4, geometry: n5 ? __spreadProps(__spreadValues({}, i3(a3.geometryType, this.featureAdapter.getGeometry(t6))), { spatialReference: i4?.spatialReference }) : null }, d5 = l8.createExecContext(e6, o5, r6);
      return l8.executeFunction(u7, d5);
    });
  }
  validateItem(t5, i4) {
    return this._fieldDataCache.has(i4) || this._fieldDataCache.set(i4, { alias: i4, clause: c(i4, this.fieldsIndex) }), this._fieldDataCache.get(i4)?.clause?.testFeature(t5, this.featureAdapter) ?? false;
  }
  validateItems(t5, i4) {
    return this._fieldDataCache.has(i4) || this._fieldDataCache.set(i4, { alias: i4, clause: c(i4, this.fieldsIndex) }), this._fieldDataCache.get(i4)?.clause?.testSet(t5, this.featureAdapter) ?? false;
  }
  _processAttributesForOutFields(t5) {
    const e5 = this.outFields;
    if (!e5?.length) return this.featureAdapter.getAttributes(t5);
    const i4 = {};
    for (const s8 of e5) {
      const { alias: e6, clause: a3 } = this._fieldDataCache.get(s8);
      i4[e6] = a3 ? a3.calculateValue(t5, this.featureAdapter) : this.featureAdapter.getAttribute(t5, e6);
    }
    return i4;
  }
  _processAttributesForDistinctValues(t5) {
    if (null == t5 || !this.returnDistinctValues) return t5;
    const e5 = this.outFields, i4 = [];
    if (e5) for (const r6 of e5) {
      const { alias: e6 } = this._fieldDataCache.get(r6);
      i4.push(t5[e6]);
    }
    else for (const r6 in t5) i4.push(t5[r6]);
    const s8 = `${(e5 || ["*"]).join(",")}=${i4.join(",")}`;
    let a3 = this._returnDistinctMap.get(s8) || 0;
    return this._returnDistinctMap.set(s8, ++a3), a3 > 1 ? null : t5;
  }
};

// node_modules/@arcgis/core/layers/graphics/data/QueryEngineResult.js
var k2 = "bin";
var J = class {
  constructor(e5, t5, s8) {
    this.items = e5, this.query = t5, this.geometryType = s8.geometryType, this.hasM = s8.hasM, this.hasZ = s8.hasZ, this.fieldsIndex = s8.fieldsIndex, this.objectIdField = s8.objectIdField, this.spatialReference = s8.spatialReference, this.featureAdapter = s8.featureAdapter;
  }
  get size() {
    return this.items.length;
  }
  createQueryResponseForCount() {
    const e5 = new c2(this.query, this.featureAdapter, this.fieldsIndex);
    if (!this.query.outStatistics) return e5.countDistinctValues(this.items);
    const { groupByFieldsForStatistics: t5, having: s8, outStatistics: i4 } = this.query, a3 = t5?.length;
    if (!!!a3) return 1;
    const n5 = /* @__PURE__ */ new Map(), r6 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Set();
    for (const l8 of i4) {
      const { statisticType: i5 } = l8, a4 = "exceedslimit" !== i5 ? l8.onStatisticField : void 0;
      if (!r6.has(a4)) {
        const s9 = [];
        for (const i6 of t5) {
          const t6 = this._getAttributeValues(e5, i6, this.items, n5);
          s9.push(t6);
        }
        r6.set(a4, this._calculateUniqueValues(s9, this.items, e5.returnDistinctValues));
      }
      const u7 = r6.get(a4);
      for (const t6 in u7) {
        const { data: i6, items: a5 } = u7[t6], n6 = i6.join(",");
        s8 && !e5.validateItems(a5, s8) || o5.add(n6);
      }
    }
    return o5.size;
  }
  async createQueryResponse() {
    let e5;
    if (this.query.outStatistics) {
      e5 = this.query.outStatistics.some((e6) => "exceedslimit" === e6.statisticType) ? this._createExceedsLimitQueryResponse() : await this._createStatisticsQueryResponse(this.query, this.items);
    } else e5 = this._createFeatureQueryResponse(this.query);
    if (this.query.returnQueryGeometry) {
      const t5 = this.query.geometry;
      U(this.query.outSR) && !T(t5.spatialReference, this.query.outSR) ? e5.queryGeometry = s2(__spreadValues({ spatialReference: this.query.outSR }, g(t5, t5.spatialReference, this.query.outSR))) : e5.queryGeometry = s2(__spreadValues({ spatialReference: this.query.outSR }, t5));
    }
    return e5;
  }
  createSnappingResponse(e5, t5, s8) {
    const i4 = this.featureAdapter, a3 = Y(this.hasZ, this.hasM), { point: n5 } = e5, r6 = "number" == typeof e5.distance ? e5.distance : e5.distance.x, o5 = "number" == typeof e5.distance ? e5.distance : e5.distance.y;
    function d5(e6, t6) {
      const s9 = (e6 - n5.x) / r6, i5 = (t6 - n5.y) / o5;
      return s9 * s9 + i5 * i5;
    }
    const p4 = { candidates: [] }, f6 = "esriGeometryPolygon" === this.geometryType, h4 = "esriGeometryPolyline" === this.geometryType || "esriGeometryPoint" === this.geometryType, y4 = this._getPointCreator(t5, this.spatialReference, s8), g4 = new X(null, 0), F3 = new X(null, 0), I2 = { x: 0, y: 0, z: 0 };
    for (const l8 of this.items) {
      const e6 = i4.getObjectId(l8), t6 = i4.getGeometryWithCurves?.(l8);
      if (null != t6) {
        v3(t6, e6);
        continue;
      }
      const s9 = i4.getGeometry(l8);
      null == s9 || _2(s9, e6);
    }
    return p4.candidates.sort((e6, t6) => e6.distance - t6.distance), p4;
    function _2(t6, s9) {
      const { coords: i5 } = t6, r7 = t6.isPoint ? L2 : t6.lengths;
      if (g4.coords = i5, F3.coords = i5, e5.returnEdge) {
        let e6 = 0;
        for (let t7 = 0; t7 < r7.length; t7++) {
          const i6 = r7[t7], o6 = e6;
          for (let t8 = 0; t8 < i6; t8++, e6 += a3) {
            if (!f6 && t8 === i6 - 1) continue;
            if (g4.coordsIndex = e6, F3.coordsIndex = t8 === i6 - 1 ? o6 : e6 + a3, !Q2(I2, n5, g4, F3)) continue;
            const r8 = d5(I2.x, I2.y);
            r8 <= 1 && p4.candidates.push(new e2(s9, y4(I2), Math.sqrt(r8), y4(g4), y4(F3)));
          }
        }
      }
      if ("all" === e5.vertexMode) {
        let e6 = 0;
        for (let t7 = 0; t7 < r7.length; t7++) {
          const i6 = r7[t7], n6 = e6, o6 = F3;
          o6.coordsIndex = n6;
          for (let t8 = 0; t8 < i6; t8++, e6 += a3) {
            if (g4.coordsIndex = e6, f6 && t8 === i6 - 1 && g4.x === o6.x && g4.y === o6.y) continue;
            const a4 = d5(g4.x, g4.y);
            a4 <= 1 && p4.candidates.push(new s4(s9, y4(g4), Math.sqrt(a4)));
          }
        }
      } else if (h4 && "ends" === e5.vertexMode) {
        let e6 = 0;
        const t7 = [];
        for (let s10 = 0; s10 < r7.length; s10++) {
          t7.push(e6);
          const i6 = r7[s10];
          e6 += i6 * a3, i6 > 1 && t7.push(e6 - a3);
        }
        for (const i6 of t7) {
          g4.coordsIndex = i6;
          const e7 = d5(g4.x, g4.y);
          e7 <= 1 && p4.candidates.push(new s4(s9, y4(g4), Math.sqrt(e7)));
        }
      }
    }
    function v3(t6, s9) {
      const { candidates: i5 } = p4, a4 = { x: 0, y: 0, z: 0 };
      if (e5.returnEdge) {
        const e6 = [n5.x, n5.y], r8 = new X(e6, 0), o6 = new X(e6, 0);
        for (const { segments: n6 } of t6.parts) for (const { start: t7, curve: p5 } of n6) {
          const { curvePoint: n7 } = u4(t7, p5, e6), f7 = d5(...n7);
          if (f7 > 1) continue;
          [a4.x, a4.y] = n7, r8.coords = t7, o6.coords = v(p5);
          const h5 = e(p5) ? null : l3(p5);
          i5.push(new e2(s9, y4(a4), Math.sqrt(f7), y4(r8), y4(o6), false, h5));
        }
      }
      function r7(e6) {
        a4.x = t6.vertexXY[2 * e6], a4.y = t6.vertexXY[2 * e6 + 1];
        const n6 = d5(a4.x, a4.y);
        n6 > 1 || (a4.z = t6.vertexZ?.[e6] ?? 0, i5.push(new s4(s9, y4(a4), Math.sqrt(n6))));
      }
      if ("all" === e5.vertexMode) {
        const { vertexCount: e6 } = t6;
        for (let t7 = 0; t7 < e6; ++t7) r7(t7);
        return;
      }
      if ("ends" === e5.vertexMode) switch (t6.type) {
        case "point":
          r7(0);
          break;
        case "polyline":
          for (let e6 = 0; e6 < t6.partCount; ++e6) {
            const s10 = t6.partOffsets[e6], i6 = t6.partOffsets[e6 + 1] - 1;
            r7(s10), i6 !== s10 && r7(i6);
          }
      }
    }
  }
  _getPointCreator(e5, t5, s8) {
    const i4 = null == s8 || T(t5, s8) ? (e6) => e6 : (e6) => g(e6, t5, s8), { hasZ: a3 } = this, n5 = 0;
    return a3 && e5 ? ({ x: e6, y: t6, z: s9 }) => i4({ x: e6, y: t6, z: s9 }) : ({ x: e6, y: t6 }) => i4({ x: e6, y: t6, z: n5 });
  }
  async createSummaryStatisticsResponse(e5) {
    const { field: t5, valueExpression: s8, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, minValue: r6, maxValue: o5, scale: l8, timeZone: u7, outStatisticTypes: c4 } = e5, m8 = this.fieldsIndex.get(t5), d5 = Ie(m8) || we(m8) || xe(m8), p4 = await this._getDataValues({ field: t5, valueExpression: s8, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, scale: l8, timeZone: u7 }, this.items), f6 = d2({ normalizationType: a3, normalizationField: i4, minValue: r6, maxValue: o5 }), h4 = { value: 0.5, fieldType: m8?.type }, y4 = be(m8) ? f3({ values: p4, supportsNullCount: f6, percentileParams: h4, outStatisticTypes: c4 }) : p({ values: p4, minValue: r6, maxValue: o5, useSampleStdDev: !a3, supportsNullCount: f6, percentileParams: h4, outStatisticTypes: c4 });
    return C(y4, c4, d5);
  }
  async createUniqueValuesResponse(e5) {
    const { field: t5, valueExpression: s8, domains: i4, returnAllCodedValues: a3, scale: n5, timeZone: r6 } = e5, o5 = await this._getDataValues({ field: t5, field2: e5.field2, field3: e5.field3, fieldDelimiter: e5.fieldDelimiter, valueExpression: s8, scale: n5, timeZone: r6 }, this.items, false), l8 = k(o5);
    return $(l8, i4, a3, e5.fieldDelimiter);
  }
  async createClassBreaksResponse(e5) {
    const { field: t5, valueExpression: s8, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, classificationMethod: r6, standardDeviationInterval: o5, minValue: l8, maxValue: u7, numClasses: c4, scale: m8, timeZone: d5 } = e5, p4 = await this._getDataValues({ field: t5, valueExpression: s8, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, scale: m8, timeZone: d5 }, this.items), f6 = E(p4, { field: t5, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, classificationMethod: r6, standardDeviationInterval: o5, minValue: l8, maxValue: u7, numClasses: c4 });
    return P2(f6, r6);
  }
  async createHistogramResponse(e5) {
    const { field: t5, valueExpression: s8, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, classificationMethod: r6, standardDeviationInterval: o5, minValue: l8, maxValue: u7, numBins: c4, scale: m8, timeZone: d5 } = e5, p4 = await this._getDataValues({ field: t5, valueExpression: s8, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, scale: m8, timeZone: d5 }, this.items);
    return U2(p4, { field: t5, normalizationField: i4, normalizationType: a3, normalizationTotal: n5, classificationMethod: r6, standardDeviationInterval: o5, minValue: l8, maxValue: u7, numBins: c4 });
  }
  _sortFeatures(e5, t5, s8) {
    if (e5.length > 1 && t5?.length) for (const i4 of t5.slice().reverse()) {
      const t6 = i4.split(" "), a3 = t6[0], n5 = this.fieldsIndex.get(a3), r6 = !!t6[1] && "desc" === t6[1].toLowerCase(), o5 = g2(n5?.type, r6, "case-insensitive");
      e5.sort((e6, t7) => {
        const i5 = s8(e6, a3, n5), r7 = s8(t7, a3, n5);
        return o5(i5, r7);
      });
    }
  }
  _createFeatureQueryResponse(e5) {
    const { items: t5, geometryType: s8, hasM: i4, hasZ: a3, objectIdField: r6, spatialReference: o5 } = this, { outFields: l8, outSR: u7, quantizationParameters: c4, resultRecordCount: m8, resultOffset: d5, returnZ: f6, returnM: h4 } = e5, y4 = null != m8 && t5.length > (d5 || 0) + m8, g4 = l8 && (l8.includes("*") ? [...this.fieldsIndex.fields] : l8.map((e6) => this.fieldsIndex.get(e6)));
    return { exceededTransferLimit: y4, features: this._createFeatures(e5, t5), fields: g4, geometryType: s8, hasM: i4 && h4, hasZ: a3 && f6, objectIdFieldName: r6, spatialReference: s2(u7 || o5), transform: c4 && s3(c4) || null };
  }
  _createFeatures(e5, t5) {
    const s8 = new c2(e5, this.featureAdapter, this.fieldsIndex), { hasM: i4, hasZ: a3 } = this, { orderByFields: r6, quantizationParameters: o5, returnGeometry: l8, returnCentroid: u7, maxAllowableOffset: c4, resultOffset: m8, resultRecordCount: p4, returnZ: y4 = false, returnM: g4 = false } = e5, x2 = a3 && y4, T3 = i4 && g4;
    let F3 = [], I2 = 0;
    const _2 = [...t5];
    if (this._sortFeatures(_2, r6, (e6, t6, i5) => s8.getFieldValue(e6, t6, i5)), this.geometryType && (l8 || u7)) {
      const e6 = s3(o5) ?? void 0, t6 = "esriGeometryPolygon" === this.geometryType || "esriGeometryPolyline" === this.geometryType;
      if (l8 && !u7) for (const i5 of _2) {
        const a4 = this.featureAdapter.getGeometry(i5), n5 = this._addFeatureJSONMetadata(i5, { attributes: s8.getAttributes(i5), geometry: i3(this.geometryType, a4, c4, e6, x2, T3) });
        t6 && a4 && !n5.geometry && (n5.centroid = o3(this, this.featureAdapter.getCentroid(i5, this), e6)), F3[I2++] = n5;
      }
      else if (!l8 && u7) for (const i5 of _2) F3[I2++] = this._addFeatureJSONMetadata(i5, { attributes: s8.getAttributes(i5), centroid: o3(this, this.featureAdapter.getCentroid(i5, this), e6) });
      else for (const i5 of _2) F3[I2++] = this._addFeatureJSONMetadata(i5, { attributes: s8.getAttributes(i5), centroid: o3(this, this.featureAdapter.getCentroid(i5, this), e6), geometry: i3(this.geometryType, this.featureAdapter.getGeometry(i5), c4, e6, x2, T3) });
    } else for (const n5 of _2) {
      const e6 = s8.getAttributes(n5);
      e6 && (F3[I2++] = this._addFeatureJSONMetadata(n5, { attributes: e6 }));
    }
    const v3 = m8 || 0;
    if (null != p4) {
      const e6 = v3 + p4;
      F3 = F3.slice(v3, Math.min(F3.length, e6));
    }
    return F3;
  }
  _addFeatureJSONMetadata(e5, t5) {
    const s8 = this.featureAdapter.getMetadata?.(e5);
    return void 0 !== s8 && (t5.metadata = s8), t5;
  }
  _createExceedsLimitQueryResponse() {
    let e5 = false, t5 = Number.POSITIVE_INFINITY, s8 = Number.POSITIVE_INFINITY, i4 = Number.POSITIVE_INFINITY;
    for (const a3 of this.query.outStatistics ?? []) if ("exceedslimit" === a3.statisticType) {
      t5 = null != a3.maxPointCount ? a3.maxPointCount : Number.POSITIVE_INFINITY, s8 = null != a3.maxRecordCount ? a3.maxRecordCount : Number.POSITIVE_INFINITY, i4 = null != a3.maxVertexCount ? a3.maxVertexCount : Number.POSITIVE_INFINITY;
      break;
    }
    if ("esriGeometryPoint" === this.geometryType) e5 = this.items.length > t5;
    else if (this.items.length > s8) e5 = true;
    else {
      const t6 = Y(this.hasZ, this.hasM), s9 = this.featureAdapter;
      e5 = this.items.reduce((e6, t7) => {
        const i5 = s9.getGeometry(t7);
        return e6 + (null != i5 && i5.coords.length || 0);
      }, 0) / t6 > i4;
    }
    return { fields: [{ name: "exceedslimit", type: "esriFieldTypeInteger", alias: "exceedslimit", sqlType: "sqlTypeInteger", domain: null, defaultValue: null }], features: [{ attributes: { exceedslimit: Number(e5) } }] };
  }
  async _createStatisticsQueryResponse(e5, t5, s8 = { attributes: {} }) {
    const i4 = [], a3 = /* @__PURE__ */ new Map(), n5 = /* @__PURE__ */ new Map(), r6 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map(), l8 = new c2(e5, this.featureAdapter, this.fieldsIndex), u7 = e5.outStatistics, { groupByFieldsForStatistics: c4, having: m8, orderByFields: p4, resultRecordCount: f6 } = e5, h4 = c4?.length, y4 = !!h4, g4 = y4 ? c4[0] : null, x2 = y4 && !this.fieldsIndex.get(g4);
    for (const d5 of u7 ?? []) {
      const { outStatisticFieldName: e6, statisticType: u8 } = d5, p5 = d5, f7 = "exceedslimit" !== u8 ? d5.onStatisticField : void 0, T4 = "percentile_disc" === u8 || "percentile_cont" === u8, F3 = "EnvelopeAggregate" === u8 || "CentroidAggregate" === u8 || "ConvexHullAggregate" === u8, I2 = y4 && 1 === h4 && (f7 === g4 || x2) && "count" === u8;
      if (y4) {
        if (!r6.has(f7)) {
          const e7 = [];
          for (const s10 of c4) {
            const i6 = this._getAttributeValues(l8, s10, t5, a3);
            e7.push(i6);
          }
          r6.set(f7, this._calculateUniqueValues(e7, t5, !F3 && l8.returnDistinctValues));
        }
        const s9 = r6.get(f7);
        if (!s9) continue;
        const i5 = Object.keys(s9);
        for (const n6 of i5) {
          const { count: i6, data: r7, items: u9, itemPositions: d6 } = s9[n6], h5 = r7.join(",");
          if (!m8 || l8.validateItems(u9, m8)) {
            const s10 = o5.get(h5) || { attributes: {} };
            if (F3) {
              s10.aggregateGeometries || (s10.aggregateGeometries = {});
              const { aggregateGeometries: e7, outStatisticFieldName: t6 } = await this._getAggregateGeometry(p5, u9);
              s10.aggregateGeometries[t6] = e7;
            } else {
              let n8 = null;
              if (I2) n8 = i6;
              else {
                const e7 = this._getAttributeValues(l8, f7, t5, a3), s11 = d6.map((t6) => e7[t6]);
                n8 = T4 && "statisticParameters" in p5 ? this._getPercentileValue(p5, s11) : this._getStatisticValue(p5, s11, null, l8.returnDistinctValues);
              }
              s10.attributes[e6] = n8;
            }
            let n7 = 0;
            c4.forEach((e7, t6) => s10.attributes[this.fieldsIndex.get(e7) ? e7 : "EXPR_" + ++n7] = r7[t6]), o5.set(h5, s10);
          }
        }
      } else if (F3) {
        s8.aggregateGeometries || (s8.aggregateGeometries = {});
        const { aggregateGeometries: e7, outStatisticFieldName: i5 } = await this._getAggregateGeometry(p5, t5);
        s8.aggregateGeometries[i5] = e7;
      } else {
        const i5 = this._getAttributeValues(l8, f7, t5, a3);
        s8.attributes[e6] = T4 && "statisticParameters" in p5 ? this._getPercentileValue(p5, i5) : this._getStatisticValue(p5, i5, n5, l8.returnDistinctValues);
      }
      const _2 = "min" !== u8 && "max" !== u8 || !be(this.fieldsIndex.get(f7)) && !this._isAnyDateField(f7) ? null : this.fieldsIndex.get(f7)?.type;
      i4.push({ name: e6, alias: e6, type: _2 || "esriFieldTypeDouble" });
    }
    const T3 = y4 ? Array.from(o5.values()) : [s8];
    return this._sortFeatures(T3, p4, (e6, t6) => e6.attributes[t6]), f6 && (T3.length = Math.min(f6, T3.length)), { fields: i4, features: T3 };
  }
  _isAnyDateField(e5) {
    const t5 = this.fieldsIndex.get(e5);
    return Ie(t5) || we(t5) || xe(t5) || Te(t5);
  }
  async _getAggregateGeometry(e5, n5) {
    const { convexHull: r6, union: o5 } = await import("./geometryEngineJSON-TNQZ566G.js"), { statisticType: l8, outStatisticFieldName: u7 } = e5, { featureAdapter: c4, spatialReference: m8, geometryType: d5 } = this, p4 = n5.map((e6) => i3(d5, c4.getGeometry(e6))), h4 = r6(m8, p4, true)[0], y4 = { aggregateGeometries: null, outStatisticFieldName: null };
    if ("EnvelopeAggregate" === l8) {
      const e6 = h4 ? d(h4) : l4(o5(m8, p4));
      y4.aggregateGeometries = __spreadProps(__spreadValues({}, e6), { spatialReference: m8 }), y4.outStatisticFieldName = u7 || "extent";
    } else if ("CentroidAggregate" === l8) {
      const e6 = h4 ? l5(h4) : r4(l4(o5(m8, p4)));
      y4.aggregateGeometries = { x: e6[0], y: e6[1], spatialReference: m8 }, y4.outStatisticFieldName = u7 || "centroid";
    } else "ConvexHullAggregate" === l8 && (y4.aggregateGeometries = h4, y4.outStatisticFieldName = u7 || "convexHull");
    return y4;
  }
  _getStatisticValue(e5, t5, s8, i4) {
    const { onStatisticField: a3, statisticType: n5 } = e5;
    let r6 = null;
    r6 = s8?.has(a3) ? s8.get(a3) : be(this.fieldsIndex.get(a3)) || this._isAnyDateField(a3) ? f3({ values: t5, returnDistinct: i4 }) : p({ values: i4 ? [...new Set(t5)] : t5, minValue: null, maxValue: null, useSampleStdDev: true }), s8 && s8.set(a3, r6);
    return r6["var" === n5 ? "variance" : n5];
  }
  _getPercentileValue(e5, t5) {
    const { onStatisticField: s8, statisticParameters: i4, statisticType: a3 } = e5, { value: n5, orderBy: r6 } = i4, o5 = this.fieldsIndex.get(s8);
    return v2(t5, { value: n5, orderBy: r6, fieldType: o5?.type, isDiscrete: "percentile_disc" === a3 });
  }
  _getAttributeValues(e5, t5, s8, i4) {
    if (i4.has(t5)) return i4.get(t5);
    const a3 = this.fieldsIndex.get(t5), n5 = s8.map((s9) => e5.getFieldValue(s9, t5, a3));
    return i4.set(t5, n5), n5;
  }
  _calculateUniqueValues(e5, t5, s8) {
    const i4 = {}, a3 = t5.length;
    for (let n5 = 0; n5 < a3; n5++) {
      const a4 = t5[n5], r6 = [];
      for (const t6 of e5) r6.push(t6[n5]);
      const o5 = r6.join(",");
      null == i4[o5] ? i4[o5] = { count: 1, data: r6, items: [a4], itemPositions: [n5] } : (s8 || i4[o5].count++, i4[o5].items.push(a4), i4[o5].itemPositions.push(n5));
    }
    return i4;
  }
  async _getDataValues(t5, s8, i4 = true) {
    const a3 = new c2(this.query, this.featureAdapter, this.fieldsIndex), { valueExpression: n5, scale: r6, timeZone: o5 } = t5;
    return n5 ? a3.getExpressionValues(s8, n5, { viewingMode: "map", scale: r6, spatialReference: this.query.outSR || this.spatialReference }, { geometryType: this.geometryType, hasZ: this.hasZ, hasM: this.hasM }, o5) : a3.getDataValues(s8, a(t5), i4);
  }
  _calculateHistogramBins(e5, t5, s8) {
    if (null == t5.min && null == t5.max) return [];
    const i4 = t5.intervals, a3 = t5.min ?? 0, n5 = t5.max ?? 0, r6 = i4.map(([e6, t6]) => ({ minValue: e6, maxValue: t6, count: 0, items: [] }));
    for (let o5 = 0; o5 < e5.length; o5++) {
      const t6 = e5[o5], l8 = s8[o5];
      if (null != t6 && t6 >= a3 && t6 <= n5) {
        const e6 = L(i4, t6);
        e6 > -1 && (r6[e6].count++, r6[e6].items.push(l8));
      }
    }
    return r6;
  }
  async createQueryBinsResponse(e5) {
    const t5 = e5.bin?.splitBy;
    if (!t5) return this._createBinsResponse(e5);
    const { value: s8, outAlias: i4, valueType: a3 } = t5, n5 = [], r6 = [{ name: i4 ?? s8, alias: i4 ?? s8, type: a3 ?? "esriFieldTypeString" }, { name: k2, alias: k2, type: "esriFieldTypeInteger" }], o5 = new c2(e5, this.featureAdapter, this.fieldsIndex), l8 = /* @__PURE__ */ new Map(), u7 = [...this.items];
    this._sortFeatures(u7, [s8], (e6, t6, s9) => o5.getFieldValue(e6, t6, s9));
    const c4 = this._getAttributeValues(o5, s8, u7, l8), m8 = this._calculateUniqueValues([c4], u7, o5.returnDistinctValues);
    for (const d5 in m8) {
      const { items: t6 } = m8[d5], a4 = await this._createBinsResponse(e5, t6);
      if (n5.push(...a4.features.map((e6) => __spreadProps(__spreadValues({}, e6), { attributes: __spreadProps(__spreadValues({}, e6.attributes), { [i4 ?? s8]: d5 }) }))), a4.fields) for (const e6 of a4.fields) r6.some((t7) => t7.name === e6.name) || r6.push(e6);
    }
    return { fields: r6, features: n5 };
  }
  async _createBinsResponse(e5, t5) {
    const s8 = e5.bin;
    switch (t5 = t5 ?? this.items, s8.type) {
      case "autoIntervalBin":
        return this._createAutoIntervalBinsResponse(m2.fromJSON(s8), e5, t5);
      case "dateBin":
        return this._createDateBinsResponse(m3.fromJSON(s8), e5, t5);
      case "fixedBoundariesBin":
        return this._createFixedBoundariesBinsResponse(m4.fromJSON(s8), e5, t5);
      case "fixedIntervalBin":
        return this._createFixedIntervalBinsResponse(m5.fromJSON(s8), e5, t5);
    }
  }
  async _createAutoIntervalBinsResponse(e5, t5, s8) {
    const { field: i4, normalizationField: a3, numBins: n5, normalizationType: r6, normalizationTotal: o5, start: l8, end: u7 } = e5, c4 = await this._getDataValues({ field: e5.field || e5.expression, normalizationField: e5.normalizationField, normalizationType: e5.normalizationType, normalizationTotal: e5.normalizationTotal, timeZone: t5.outTimeReference?.ianaTimeZone }, s8), m8 = G(c4, { field: i4, normalizationField: a3, normalizationType: r6, normalizationTotal: o5, numBins: n5, minValue: h(r6 ? e5.normalizationMinValue : l8, false), maxValue: h(r6 ? e5.normalizationMaxValue : u7, false) }), d5 = this._calculateHistogramBins(c4, m8, s8);
    return this._createFeaturesFromHistogramBins(d5, t5);
  }
  async _createDateBinsResponse(e5, t5, s8) {
    const { field: i4, interval: a3, start: n5, end: r6, snapToData: o5, returnFullIntervalBin: l8, offset: u7, firstDayOfWeek: c4 } = e5, m8 = a3.unit, d5 = await this._getDataValues({ field: i4 || e5.expression, timeZone: t5.outTimeReference?.ianaTimeZone }, s8), p4 = Te(this.fieldsIndex.get(i4)), f6 = s5.toJSON(m8), h4 = d5.filter(Boolean).sort((e6, t6) => e6 - t6), y4 = null != n5 ? h(n5, p4) : h4[0], x2 = null != r6 ? h(r6, p4) : h4[h4.length - 1], T3 = [];
    if (null != y4 && null != x2) {
      const e6 = { zone: t5.outTimeReference?.ianaTimeZone ?? n }, s9 = u7?.unit ? s5.toJSON(u7.unit) : "milliseconds", i5 = { [s9]: u7?.value || 0 }, n6 = DateTime.fromMillis(y4, e6).minus(i5), r7 = DateTime.fromMillis(x2, e6).minus(i5), m9 = "number" == typeof c4 && c4 >= 1 && c4 <= 7 ? c4 : 7, d6 = (e7, t6) => {
        const s10 = (e7.weekday - t6 + 7) % 7;
        return e7.minus({ days: s10 }).startOf("day");
      };
      if ("last" === o5) {
        let e7 = "week" === f6 ? ((e8, t6) => d6(e8, t6).plus({ days: 7 }))(r7, m9) : r7;
        for (; e7 > n6; ) {
          const t6 = e7.minus({ [f6]: a3.value });
          if (t6 < n6) {
            T3.unshift([l8 ? t6.plus(i5).toMillis() : n6.plus(i5).toMillis(), e7.plus(i5).toMillis()]);
            break;
          }
          T3.unshift([t6.plus(i5).toMillis(), e7.plus(i5).toMillis()]), e7 = t6;
        }
      } else {
        let e7 = "first" === o5 ? n6 : "week" === f6 ? d6(n6, m9) : n6.startOf(f6);
        for (; e7 <= r7; ) {
          const t6 = e7.plus({ [f6]: a3.value });
          if (t6 > r7) {
            T3.push([e7.plus(i5).toMillis(), l8 ? t6.plus(i5).toMillis() : r7.plus(i5).toMillis()]);
            break;
          }
          T3.push([e7.plus(i5).toMillis(), t6.plus(i5).toMillis()]), e7 = t6;
        }
      }
    }
    const F3 = this._calculateHistogramBins(d5, { intervals: T3, min: y4, max: x2 }, s8);
    return this._createFeaturesFromHistogramBins(F3, t5);
  }
  async _createFixedBoundariesBinsResponse(e5, t5, s8) {
    const { field: i4 } = e5, a3 = await this._getDataValues({ field: i4 || e5.expression, timeZone: t5.outTimeReference?.ianaTimeZone }, s8), n5 = Te(this.fieldsIndex.get(i4)), r6 = e5.boundaries.map((e6) => h(e6, n5)).sort((e6, t6) => e6 - t6), o5 = [];
    for (let c4 = 0; c4 < r6.length - 1; c4++) o5.push([r6[c4], r6[c4 + 1]]);
    const l8 = { intervals: o5, min: r6.at(0), max: r6.at(-1) }, u7 = this._calculateHistogramBins(a3, l8, s8);
    return this._createFeaturesFromHistogramBins(u7, t5);
  }
  async _createFixedIntervalBinsResponse(e5, t5, s8) {
    const { field: i4, interval: a3, normalizationType: n5, start: r6, end: o5 } = e5, l8 = await this._getDataValues({ field: i4 || e5.expression, normalizationField: e5.normalizationField, normalizationType: n5, normalizationTotal: e5.normalizationTotal, timeZone: t5.outTimeReference?.ianaTimeZone }, s8), u7 = Te(this.fieldsIndex.get(i4)), c4 = G(l8, { field: i4, classificationMethod: "defined-interval", definedInterval: a3, minValue: h(n5 ? e5.normalizationMinValue : r6, u7), maxValue: h(n5 ? e5.normalizationMaxValue : o5, u7) }, true), m8 = this._calculateHistogramBins(l8, c4, s8);
    return this._createFeaturesFromHistogramBins(m8, t5);
  }
  async _createFeaturesFromHistogramBins(e5, t5) {
    const { upperBoundaryAlias: s8, lowerBoundaryAlias: i4 } = t5, a3 = i4 || "lowerBoundary", n5 = s8 || "upperBoundary", r6 = [], o5 = [{ name: a3, alias: a3, type: "esriFieldTypeDouble" }, { name: n5, alias: n5, type: "esriFieldTypeDouble" }], l8 = t5.bin?.stackBy?.value, u7 = t5.bin?.stackBy?.outAlias;
    l8 && o5.push({ name: k2, alias: k2, type: "esriFieldTypeInteger" }, { name: u7 ?? l8, alias: u7 ?? l8, type: "esriFieldTypeString" });
    let c4 = 0;
    const m8 = "dateBin" === t5.bin.type, d5 = t5.outTimeReference?.ianaTimeZone;
    for (const p4 of e5) {
      const { minValue: e6, maxValue: s9, items: i5 } = p4, f6 = { attributes: {} };
      let h4;
      if (f6.attributes[a3] = m8 && d5 && null != e6 ? DateTime.fromMillis(e6, { zone: d5 }).toISO() : e6, t5.bin.hideUpperBound || (f6.attributes[n5] = m8 && d5 && null != s9 ? DateTime.fromMillis(s9, { zone: d5 }).toISO() : s9), l8 ? (h4 = await this._createStatisticsQueryResponse(__spreadProps(__spreadValues({}, t5), { groupByFieldsForStatistics: [l8], orderByFields: [l8] }), i5), f6.attributes[k2] = ++c4, "flat" === t5.bin.jsonStyle ? r6.push(...h4.features.map((_a) => {
        var _b = _a, { attributes: _c } = _b, _d = _c, { EXPR_1: e7 } = _d, t6 = __objRest(_d, ["EXPR_1"]), s10 = __objRest(_b, ["attributes"]);
        return __spreadProps(__spreadValues({}, s10), { attributes: u7 ?? e7 ? __spreadValues(__spreadProps(__spreadValues({}, t6), { [u7 ?? e7]: e7 }), f6.attributes) : __spreadValues(__spreadValues({}, t6), f6.attributes) });
      })) : (f6.stackedAttributes = h4.features.map((_e) => {
        var { attributes: _f } = _e, _g = _f, { EXPR_1: e7 } = _g, t6 = __objRest(_g, ["EXPR_1"]);
        return u7 ?? e7 ? __spreadProps(__spreadValues({}, t6), { [u7 ?? e7]: e7 }) : t6;
      }), r6.push(f6))) : (t5.bin?.splitBy && (f6.attributes[k2] = ++c4), h4 = await this._createStatisticsQueryResponse(t5, i5, f6), r6.push(f6)), h4.fields) for (const t6 of h4.fields) o5.some((e7) => e7.name === t6.name) || o5.push(t6);
    }
    return "desc" === t5.binOrder && r6.reverse(), { fields: o5, features: r6 };
  }
};
function Q2(e5, t5, s8, i4) {
  const a3 = i4.x - s8.x, n5 = i4.y - s8.y, r6 = t5.x - s8.x, o5 = t5.y - s8.y, l8 = a3 * a3 + n5 * n5;
  if (0 === l8) return false;
  const u7 = r6 * a3 + o5 * n5, c4 = Math.min(1, Math.max(0, u7 / l8));
  return e5.x = s8.x + a3 * c4, e5.y = s8.y + n5 * c4, true;
}
function Y(e5, t5) {
  return e5 ? t5 ? 4 : 3 : t5 ? 3 : 2;
}
var X = class {
  constructor(e5, t5) {
    this.coords = e5, this.coordsIndex = t5;
  }
  get x() {
    return this.coords[this.coordsIndex];
  }
  get y() {
    return this.coords[this.coordsIndex + 1];
  }
  get z() {
    return this.coords[this.coordsIndex + 2];
  }
};
var L2 = [1];

// node_modules/@arcgis/core/layers/graphics/data/QueryEngineCache.js
var t4 = 5;
var e4 = class {
  constructor() {
    this._storage = /* @__PURE__ */ new Map(), this._purgeInterval = t4, this._sweep = () => {
      if (this._timer = void 0, !this._storage) return;
      const t5 = 1e3 * this._purgeInterval, e5 = performance.now() - t5;
      for (const [s8, r6] of this._storage) {
        if (!(r6.time < e5)) return void (this._storage.size > 0 && (this._timer = setTimeout(this._sweep, t5)));
        this._storage.delete(s8);
      }
    };
  }
  destroy() {
    this._storage?.clear(), this._storage = null, clearTimeout(this._timer);
  }
  put(t5, e5) {
    this._storage?.set(t5, new r5(e5)), this._scheduleSweep();
  }
  get(t5) {
    const e5 = this._storage?.get(t5);
    if (e5) return this._storage?.delete(t5), e5.time = performance.now(), this._storage?.set(t5, e5), e5.items;
  }
  clear() {
    this._storage?.clear();
  }
  _scheduleSweep() {
    this._storage && (this._timer ??= setTimeout(this._sweep, 1e3 * this._purgeInterval));
  }
  get test() {
  }
};
var s7 = 0;
var r5 = class {
  constructor(t5) {
    this.items = t5, this.time = performance.now(), this.id = s7++;
  }
};

// node_modules/@arcgis/core/layers/graphics/data/queryValidationUtils.js
var u6 = "unsupported-query";
async function p3(t5, i4) {
  const s8 = t5.bin;
  if (!s8.onField && !s8.onExpression?.value || "autoIntervalBin" === s8.type && null == s8.parameters.numberOfBins || "dateBin" === s8.type && (null == s8.parameters.number || null == s8.parameters.unit) || "fixedBoundariesBin" === s8.type && null == s8.parameters.boundaries || "fixedIntervalBin" === s8.type && null == s8.parameters.interval) throw new r2(u6, "Unsupported query options", { query: t5 });
  return d4(t5, i4);
}
async function d4(t5, { fieldsIndex: i4, geometryType: s8, spatialReference: r6, availableFields: o5 }) {
  if (null != t5.geometryPrecision || t5.multipatchOption && "xyFootprint" !== t5.multipatchOption || t5.pixelSize || t5.relationParam || t5.text) throw new r2(u6, "Unsupported query options", { query: t5 });
  return c3(i4, o5, t5), m7(i4, o5, t5), Promise.all([I(t5, s8, r6), f2(r6, t5.outSR)]).then(() => t5);
}
function c3(s8, r6, o5) {
  const { returnDistinctValues: n5, outStatistics: a3 } = o5, l8 = a3 ? a3.map((e5) => e5.outStatisticFieldName && e5.outStatisticFieldName.toLowerCase()).filter(Boolean) : [];
  if ("orderByFields" in o5 && o5.orderByFields && o5.orderByFields.length > 0) {
    const e5 = " asc", i4 = " desc", n6 = o5.orderByFields.map((t5) => {
      const s9 = t5.toLowerCase();
      return s9.includes(e5) ? s9.split(e5)[0] : s9.includes(i4) ? s9.split(i4)[0] : t5;
    }).filter((e6) => !l8.includes(e6));
    g3(s8, r6, n6, { expressionName: "orderByFields", query: o5 });
  }
  if ("outFields" in o5) {
    if (o5.outFields?.length) g3(s8, r6, o5.outFields, { expressionName: "outFields", query: o5, allowedFieldTypes: "all" });
    else if (n5) throw new r2(u6, "outFields should be specified for returnDistinctValues", { query: o5 });
  }
  p2(s8, r6, o5.where, o5);
}
var f5 = /* @__PURE__ */ new Set([...o4, ...a2]);
function m7(i4, r6, o5) {
  const { outStatistics: n5, groupByFieldsForStatistics: a3, having: l8 } = o5, p4 = a3?.length, d5 = n5?.length;
  if (l8) {
    if (!p4 || !d5) throw new r2(u6, "outStatistics and groupByFieldsForStatistics should be specified with having", { query: o5 });
    f4(i4, r6, l8, n5, o5);
  }
  if (d5) {
    if (!h3(n5)) return;
    const s8 = n5.map((e5) => e5.onStatisticField).filter(Boolean);
    g3(i4, r6, s8, { expressionName: "onStatisticFields", query: o5 }), p4 && g3(i4, r6, a3, { expressionName: "groupByFieldsForStatistics", query: o5 });
    for (const a4 of n5) {
      const { onStatisticField: s9, statisticType: n6 } = a4;
      if (("percentile_disc" === n6 || "percentile_cont" === n6) && "statisticParameters" in a4) {
        const { statisticParameters: t5 } = a4;
        if (!t5) throw new r2(u6, "statisticParameters should be set for percentile type", { definition: a4, query: o5 });
      } else i4.get(s9) && "count" !== n6 && "min" !== n6 && "max" !== n6 && g3(i4, r6, [s9], { expressionName: `outStatistics with '${n6}' statistic type`, allowedFieldTypes: f5, query: o5 });
    }
  }
}
async function y3(t5, i4, { fieldsIndex: s8, geometryType: r6, spatialReference: o5, availableFields: l8 }) {
  if (null != t5.geometryPrecision || t5.multipatchOption || t5.pixelSize || t5.relationParam || t5.text || t5.outStatistics || t5.groupByFieldsForStatistics || t5.having || t5.orderByFields) throw new r2(u6, "Unsupported query options", { query: t5 });
  return c3(s8, l8, t5), Promise.all([F2(s8, l8, i4, t5), I(t5, r6, o5), f2(o5, t5.outSR)]).then(() => t5);
}
async function F2(i4, s8, r6, o5) {
  let n5 = [];
  if (r6.valueExpression) {
    const { arcadeUtils: e5 } = await e3();
    n5 = e5.extractFieldNames(r6.valueExpression);
  }
  if (r6.field && n5.push(r6.field), r6.field2 && n5.push(r6.field2), r6.field3 && n5.push(r6.field3), r6.normalizationField && n5.push(r6.normalizationField), !n5.length && !r6.valueExpression) throw new r2(u6, "field or valueExpression is required", { params: r6 });
  g3(i4, s8, n5, { expressionName: "statistics", query: o5 });
}
function h3(e5) {
  return null != e5 && e5.every((e6) => "exceedslimit" !== e6.statisticType);
}

// node_modules/@arcgis/core/layers/graphics/data/QueryEngine.js
var D2 = "unsupported-query";
var W = class {
  constructor(e5) {
    this._changeHandle = null, this.capabilities = { query: t2 }, this.geometryType = e5.geometryType, this.hasM = !!e5.hasM, this.hasZ = !!e5.hasZ, this.spatialReference = e5.spatialReference, this.definitionExpression = e5.definitionExpression, this.featureStore = e5.featureStore, this.aggregateAdapter = e5.aggregateAdapter, this._cache = e5.cache ?? new e4(), this.timeInfo = e5.timeInfo, this.featureIdInfo = e5.featureIdInfo, "object-id" === e5.featureIdInfo.type && (this.objectIdField = e5.featureIdInfo.fieldName), this._changeHandle = this.featureStore.events.on("changed", () => this._clearCache()), this.fieldsIndex = t(e5.fieldsIndex) ? e5.fieldsIndex : _.fromJSON(e5.fieldsIndex), !e5.availableFields || 1 === e5.availableFields.length && "*" === e5.availableFields[0] ? this.availableFields = new Set(this.fieldsIndex.fields.map((e6) => e6.name)) : this.availableFields = new Set(e5.availableFields.map((e6) => this.fieldsIndex.get(e6)?.name).filter((e6) => null != e6)), e5.scheduler && e5.priority ? this._frameTask = e5.scheduler.registerTask(e5.priority) : this._frameTask = D;
  }
  destroy() {
    this._changeHandle = l(this._changeHandle), this._frameTask = l(this._frameTask), this._clearCache(), u(this._cache);
  }
  get featureAdapter() {
    return this.featureStore.featureAdapter;
  }
  async executeQuery(e5, t5) {
    const i4 = l2(t5);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryFeatureSet(e5), i4);
  }
  async executeQueryForCount(e5 = {}, t5) {
    const i4 = l2(t5);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForCount(e5), i4);
  }
  async executeQueryForExtent(e5, t5) {
    const i4 = l2(t5);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForExtent(e5), i4);
  }
  async executeQueryForIds(e5, t5) {
    return Array.from(await this.executeQueryForIdSet(e5, t5));
  }
  async executeQueryForIdSet(e5, t5) {
    const i4 = l2(t5);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForIdSet(e5), i4);
  }
  async executeQueryForLatestObservations(e5, t5) {
    const i4 = l2(t5);
    if (!this.timeInfo?.trackIdField) throw new r2(D2, "Missing timeInfo or timeInfo.trackIdField", { query: e5, timeInfo: this.timeInfo });
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForLatestObservations(e5), i4);
  }
  async executeQueryForOpaqueFeatures(e5, t5) {
    const i4 = l2(t5);
    return (await this._frameTask.scheduleGenerator(() => this._executeQuery(e5, {}), i4)).items;
  }
  async executeAttributeBinsQuery(e5, t5) {
    const i4 = l2(t5);
    return e5 = a(e5), await this._frameTask.scheduleGenerator(() => this._executeAttributeBinsQuery(e5), i4);
  }
  async executeQueryForSummaryStatistics(e5 = {}, t5, i4) {
    const r6 = l2(i4);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForSummaryStatistics(e5, t5), r6);
  }
  async executeQueryForUniqueValues(e5 = {}, t5, i4) {
    const r6 = l2(i4);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForUniqueValues(e5, t5), r6);
  }
  async executeQueryForClassBreaks(e5 = {}, t5, i4) {
    const r6 = l2(i4);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForClassBreaks(e5, t5), r6);
  }
  async executeQueryForHistogram(e5 = {}, t5, i4) {
    const r6 = l2(i4);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForHistogram(e5, t5), r6);
  }
  async executeQueryForSnapping(e5, t5) {
    const i4 = l2(t5);
    return await this._frameTask.scheduleGenerator(() => this._executeQueryForSnapping(e5, i4), i4);
  }
  async fetchRecomputedExtents(e5) {
    const t5 = l2(e5);
    this._timeExtentPromise ||= n3(this.timeInfo, this.featureStore);
    const [i4, r6] = await Promise.all([this._getFullExtent(), this._timeExtentPromise]);
    return s(t5), { fullExtent: i4, timeExtent: r6 };
  }
  _clearCache() {
    this._cache.clear(), this._allFeaturesPromise = null, this._timeExtentPromise = null, this._fullExtentPromise = null;
  }
  async *_executeQueryFeatureSet(e5) {
    try {
      const t5 = yield* this._executeQuery(e5, {});
      return yield, await t5.createQueryResponse();
    } catch (t5) {
      if (t5 !== S) throw t5;
      return await new J([], e5, this).createQueryResponse();
    }
  }
  async *_executeQueryForCount(e5) {
    try {
      const t5 = yield* this._executeQuery(e5, { returnGeometry: false, returnCentroid: false, outSR: null });
      return yield, t5.createQueryResponseForCount();
    } catch (t5) {
      if (t5 !== S) throw t5;
      return 0;
    }
  }
  async *_executeQueryForExtent(e5) {
    const t5 = e5.outSR;
    try {
      const i4 = yield* this._executeQuery(e5, { returnGeometry: true, returnCentroid: false, outSR: null });
      yield;
      const r6 = i4.size;
      if (!r6) return { count: 0, extent: null };
      const s8 = await this._getBounds(i4.items, i4.spatialReference, t5 ?? this.spatialReference);
      return yield, { count: r6, extent: s8 };
    } catch (i4) {
      if (i4 === S) return { count: 0, extent: null };
      throw i4;
    }
  }
  async *_executeQueryForIdSet(e5) {
    try {
      const t5 = yield* this._executeQuery(e5, { returnGeometry: true, returnCentroid: false, outSR: null });
      yield;
      const i4 = t5.items, r6 = /* @__PURE__ */ new Set();
      for (const e6 of i4) r6.add(t5.featureAdapter.getObjectId(e6));
      return r6;
    } catch (t5) {
      if (t5 === S) return /* @__PURE__ */ new Set();
      throw t5;
    }
  }
  async *_executeQueryForLatestObservations(e5) {
    try {
      const t5 = yield* this._executeQuery(e5, {});
      return yield, this._filterLatest(t5), yield, await t5.createQueryResponse();
    } catch (t5) {
      if (t5 !== S) throw t5;
      return await new J([], e5, this).createQueryResponse();
    }
  }
  async *_executeAttributeBinsQuery(e5) {
    let t5;
    try {
      e5 = await x(e5, this.definitionExpression, this.spatialReference), yield, e5 = await p3(e5, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), yield;
      const i4 = yield* this._executeSceneFilterQuery(e5);
      yield, t5 = yield* this._executeGeometryQuery(e5, i4), yield, this._executeAggregateIdsQuery(t5), yield, this._executeObjectIdsQuery(t5), yield, this._executeTimeQuery(t5), yield, this._executeAttributesQuery(t5), yield;
    } catch (i4) {
      if (i4 !== S) throw i4;
      t5 = new J([], e5, this);
    }
    return await t5.createQueryBinsResponse(e5);
  }
  async *_executeQueryForSummaryStatistics(e5 = {}, t5) {
    const { field: i4, normalizationField: r6, valueExpression: s8 } = t5, a3 = yield* this._executeQueryForStatistics(e5, { field: i4, normalizationField: r6, valueExpression: s8 });
    return yield, await a3.createSummaryStatisticsResponse(t5);
  }
  async *_executeQueryForUniqueValues(e5 = {}, t5) {
    const { field: i4, field2: r6, field3: s8, valueExpression: a3 } = t5, n5 = yield* this._executeQueryForStatistics(e5, { field: i4, field2: r6, field3: s8, valueExpression: a3 });
    return yield, await n5.createUniqueValuesResponse(t5);
  }
  async *_executeQueryForClassBreaks(e5, t5) {
    const { field: i4, normalizationField: r6, valueExpression: s8 } = t5, a3 = yield* this._executeQueryForStatistics(e5, { field: i4, normalizationField: r6, valueExpression: s8 });
    return yield, await a3.createClassBreaksResponse(t5);
  }
  async *_executeQueryForHistogram(e5, t5) {
    const { field: i4, normalizationField: r6, valueExpression: s8 } = t5, a3 = yield* this._executeQueryForStatistics(e5, { field: i4, normalizationField: r6, valueExpression: s8 });
    return yield, await a3.createHistogramResponse(t5);
  }
  async *_executeQueryForSnapping(e5, t5) {
    const { point: i4, distance: r6, returnEdge: a3, vertexMode: n5 } = e5;
    if (!a3 && "none" === n5) return { candidates: [] };
    let l8 = a(e5.query);
    l8 = await w(l8, this.definitionExpression, this.spatialReference), yield, l8 = await d4(l8, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), yield;
    const o5 = !T(i4.spatialReference, this.spatialReference);
    o5 && (await f2(i4.spatialReference, this.spatialReference), yield);
    const u7 = "number" == typeof r6 ? r6 : r6.x, c4 = "number" == typeof r6 ? r6 : r6.y, y4 = { xmin: i4.x - u7, xmax: i4.x + u7, ymin: i4.y - c4, ymax: i4.y + c4, spatialReference: i4.spatialReference }, h4 = o5 ? g(y4, this.spatialReference) : y4;
    if (!h4) return { candidates: [] };
    const d5 = (await P(u3(i4), null, { signal: t5 }))[0];
    yield;
    const m8 = (await P(u3(h4), null, { signal: t5 }))[0];
    if (yield, null == d5 || null == m8) return { candidates: [] };
    const f6 = await this._searchFeatures(X2(m8.toJSON()));
    yield;
    const p4 = new J(f6, l8, this);
    this._executeObjectIdsQuery(p4), yield, this._executeTimeQuery(p4), yield, this._executeAttributesQuery(p4), yield, yield* this._executeGeometryQueryForSnapping(p4), yield;
    const x2 = d5.toJSON(), g4 = o5 ? g(x2, this.spatialReference) : x2, _2 = o5 ? Math.max(h4.xmax - h4.xmin, h4.ymax - h4.ymin) / 2 : r6;
    return p4.createSnappingResponse(__spreadProps(__spreadValues({}, e5), { point: g4, distance: _2 }), l8.returnZ, i4.spatialReference);
  }
  async _getBounds(e5, t5, i4) {
    const r6 = q(i2(), Q);
    return await this.featureStore.forEachBounds(e5, (e6) => M(r6, e6)), Y2(r6, t5, i4, this.spatialReference, this.hasZ);
  }
  _getFullExtent() {
    return this._fullExtentPromise ||= "getFullExtent" in this.featureStore && this.featureStore.getFullExtent ? Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)) : this._getAllFeatures().then((e5) => this._getBounds(e5, this.spatialReference, this.spatialReference)), this._fullExtentPromise;
  }
  async _getAllFeaturesQueryEngineResult(e5) {
    return new J(await this._getAllFeatures(), e5, this);
  }
  async _getAllFeatures() {
    if (null == this._allFeaturesPromise) {
      const e6 = [];
      this._allFeaturesPromise = (async () => await this.featureStore.forEach((t6) => e6.push(t6)))().then(() => r(e6));
    }
    const e5 = this._allFeaturesPromise, t5 = await e5;
    return e5 === this._allFeaturesPromise ? t5.slice() : this._getAllFeatures();
  }
  async *_executeQuery(e5, t5) {
    e5 = a(e5), e5 = await j(e5, this.definitionExpression, this.spatialReference), yield, e5 = await d4(e5, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), yield, e5 = __spreadValues(__spreadValues({}, e5), t5);
    const i4 = yield* this._executeSceneFilterQuery(e5);
    yield;
    const r6 = yield* this._executeGeometryQuery(e5, i4);
    return yield, this._executeAggregateIdsQuery(r6), yield, this._executeObjectIdsQuery(r6), yield, this._executeTimeQuery(r6), yield, this._executeAttributesQuery(r6), r6;
  }
  async *_executeSceneFilterQuery(e5) {
    if (null == e5.sceneFilter) return null;
    const { outSR: t5, returnGeometry: i4, returnCentroid: r6 } = e5, s8 = this.featureStore.featureSpatialReference, a3 = e5.sceneFilter.geometry, n5 = null == s8 || T(s8, a3.spatialReference) ? a3 : g(a3, s8);
    if (!n5) return null;
    const l8 = i4 || r6, o5 = U(t5) && !T(this.spatialReference, t5) && l8 ? async (e6) => this._project(e6, t5) : (e6) => e6;
    yield;
    const u7 = this.featureAdapter, c4 = await this._searchFeatures(X2(n5));
    yield;
    if ("disjoint" === e5.sceneFilter.spatialRelationship) {
      if (!c4.length) return null;
      const t6 = /* @__PURE__ */ new Set();
      for (const e6 of c4) t6.add(u7.getObjectId(e6));
      const i5 = await this._getAllFeatures();
      yield;
      const r7 = await h2("esriSpatialRelDisjoint", n5, this.geometryType);
      yield;
      const s9 = (e6) => !t6.has(u7.getObjectId(e6)) || r7(u7.getGeometry(e6)), a4 = yield* this._runSpatialFilter(i5, s9);
      yield;
      const l9 = new J(a4, e5, this);
      return await o5(l9);
    }
    if (!c4.length) return new J([], e5, this);
    if (this._canExecuteSinglePass(n5, e5)) return await o5(new J(c4, e5, this));
    const y4 = await h2("esriSpatialRelContains", n5, this.geometryType);
    yield;
    const h4 = yield* this._runSpatialFilter(c4, (e6) => y4(u7.getGeometry(e6)));
    return yield, await o5(new J(h4, e5, this));
  }
  async *_executeGeometryQuery(i4, r6) {
    if (null != r6 && 0 === r6.items.length) return r6;
    const { geometry: s8, outSR: a3, returnGeometry: n5, returnCentroid: l8 } = i4, o5 = r6 ? null : this._getCacheKey(i4), u7 = o5 ? this._cache.get(o5) : null;
    if (u7) return new J(u7, i4, this);
    const c4 = U(a3) && !T(this.spatialReference, a3), y4 = n5 || l8, h4 = async (e5) => (c4 && y4 && await this._project(e5, a3), o5 && this._cache.put(o5, e5.items), e5), d5 = this.featureStore.featureSpatialReference, m8 = !s8 || null == d5 || T(d5, s8.spatialReference) ? s8 : g(s8, d5);
    if (!m8) return await h4(null != r6 ? r6 : await this._getAllFeaturesQueryEngineResult(i4));
    yield;
    const f6 = this.featureAdapter;
    let p4 = await this._searchFeatures(X2(s8));
    yield;
    const x2 = i4.spatialRel ?? "esriSpatialRelIntersects";
    if ("esriSpatialRelDisjoint" === x2) {
      if (!p4.length) return await h4(null != r6 ? r6 : await this._getAllFeaturesQueryEngineResult(i4));
      const e5 = /* @__PURE__ */ new Set();
      for (const i5 of p4) e5.add(f6.getObjectId(i5));
      let t5;
      null != r6 ? t5 = r6.items : (yield, t5 = await this._getAllFeatures(), yield);
      const s9 = await h2(x2, m8, this.geometryType);
      yield;
      const a4 = (t6) => !e5.has(f6.getObjectId(t6)) || s9(f6.getGeometry(t6)), n6 = yield* this._runSpatialFilter(t5, a4);
      yield;
      const l9 = new J(n6, i4, this);
      return await h4(l9);
    }
    if (null != r6) {
      const i5 = new y();
      p4 = p4.filter((t5) => b(r6.items, t5, r6.items.length, i5) >= 0);
    }
    if (!p4.length) {
      const e5 = new J([], i4, this);
      return o5 && this._cache.put(o5, e5.items), e5;
    }
    if (this._canExecuteSinglePass(m8, i4)) return await h4(new J(p4, i4, this));
    const g4 = await h2(x2, m8, this.geometryType);
    yield;
    const _2 = yield* this._runSpatialFilter(p4, (e5) => g4(f6.getGeometry(e5)));
    return yield, await h4(new J(_2, i4, this));
  }
  _executeAggregateIdsQuery(e5) {
    if (0 === e5.items.length || !e5.query.aggregateIds?.length || null == this.aggregateAdapter) return;
    const t5 = /* @__PURE__ */ new Set();
    for (const r6 of e5.query.aggregateIds) {
      this.aggregateAdapter.getFeatureObjectIds(r6).forEach((e6) => t5.add(e6));
    }
    const i4 = this.featureAdapter.getObjectId;
    e5.items = e5.items.filter((e6) => t5.has(i4(e6)));
  }
  _executeObjectIdsQuery(e5) {
    if (0 === e5.items.length || !e5.query.objectIds?.length) return;
    const t5 = new Set(e5.query.objectIds), i4 = this.featureAdapter.getObjectId;
    e5.items = e5.items.filter((e6) => t5.has(i4(e6)));
  }
  _executeTimeQuery(e5) {
    if (0 === e5.items.length) return;
    const t5 = l6(this.timeInfo, e5.query.timeExtent, this.featureAdapter);
    null != t5 && (e5.items = e5.items.filter(t5));
  }
  _executeAttributesQuery(e5) {
    if (0 === e5.items.length) return;
    const t5 = c(e5.query.where, this.fieldsIndex);
    if (t5) {
      if (!t5.isStandardized) throw new TypeError("Where clause is not standardized");
      e5.items = e5.items.filter((e6) => t5.testFeature(e6, this.featureAdapter));
    }
  }
  async *_executeGeometryQueryForSnapping(e5) {
    const { query: t5 } = e5, { spatialRel: i4 } = t5;
    if (!e5?.items?.length || !t5.geometry || !i4) return;
    const r6 = await h2(i4, t5.geometry, this.geometryType);
    yield;
    const s8 = this.featureAdapter, a3 = (e6) => r6(s8.getGeometry(e6)), n5 = yield* this._runSpatialFilter(e5.items, a3);
    e5.items = n5;
  }
  *_runSpatialFilter(e5, t5) {
    if (!t5) return e5;
    if (null == this._frameTask) return e5.filter((e6) => t5(e6));
    let i4 = yield;
    const r6 = new Array();
    for (const s8 of e5) t5(s8) && r6.push(s8), i4.madeProgress(), i4.done && (i4 = yield);
    return r6;
  }
  _filterLatest(e5) {
    const { trackIdField: t5, startTimeField: i4, endTimeField: r6 } = this.timeInfo, s8 = r6 || i4, a3 = /* @__PURE__ */ new Map(), n5 = this.featureAdapter.getAttribute;
    for (const l8 of e5.items) {
      const e6 = n5(l8, t5), i5 = n5(l8, s8), r7 = a3.get(e6);
      (!r7 || i5 > n5(r7, s8)) && a3.set(e6, l8);
    }
    e5.items = Array.from(a3.values());
  }
  _getCacheKey(e5) {
    const { geometry: t5, spatialRel: i4, returnGeometry: r6, returnCentroid: s8, outSR: a3, resultType: n5, cacheHint: l8 } = e5;
    if ("tile" !== n5 && !l8) return null;
    const o5 = r6 || s8;
    return U(a3) && !T(this.spatialReference, a3) && o5 ? JSON.stringify([t5, i4, a3]) : JSON.stringify([t5, i4]);
  }
  _canExecuteSinglePass(e5, t5) {
    const { spatialRel: i4 } = t5;
    return w2(e5) && ("esriSpatialRelEnvelopeIntersects" === i4 || "esriGeometryPoint" === this.geometryType && ("esriSpatialRelIntersects" === i4 || "esriSpatialRelContains" === i4));
  }
  async _project(e5, t5) {
    if (!t5 || T(this.spatialReference, t5)) return e5;
    const r6 = this.featureAdapter, s8 = V() ? await this._getFullExtent() : void 0, a3 = await M2(e5.items.map((e6) => i3(this.geometryType, r6.getGeometry(e6))), this.spatialReference, t5, { areaOfInterestExtent: s8 });
    return e5.items = r(a3.map((t6, i4) => r6.cloneWithGeometry(e5.items[i4], H(t6, this.hasZ, this.hasM), this.geometryType))), e5;
  }
  async _searchFeatures(e5) {
    const t5 = /* @__PURE__ */ new Set();
    await Promise.all(e5.map((e6) => this.featureStore.forEachInBounds(e6, (e7) => t5.add(e7))));
    const i4 = Array.from(t5.values());
    return t5.clear(), i4;
  }
  async *_executeQueryForStatistics(e5, t5) {
    e5 = a(e5);
    try {
      e5 = await j(e5, this.definitionExpression, this.spatialReference), yield, e5 = await y3(e5, t5, { availableFields: this.availableFields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, spatialReference: this.spatialReference }), yield;
      const i4 = yield* this._executeSceneFilterQuery(e5);
      yield;
      const r6 = yield* this._executeGeometryQuery(e5, i4);
      return yield, this._executeAggregateIdsQuery(r6), yield, this._executeObjectIdsQuery(r6), yield, this._executeTimeQuery(r6), yield, this._executeAttributesQuery(r6), yield, r6;
    } catch (i4) {
      if (i4 !== S) throw i4;
      return new J([], e5, this);
    }
  }
  get test() {
  }
};
function X2(e5) {
  if (w2(e5)) {
    if (n2(e5)) return [o(Math.min(e5.xmin, e5.xmax), Math.min(e5.ymin, e5.ymax), Math.max(e5.xmin, e5.xmax), Math.max(e5.ymin, e5.ymax))];
    if (o2(e5)) return e5.rings.map((e6) => o(Math.min(e6[0][0], e6[2][0]), Math.min(e6[0][1], e6[2][1]), Math.max(e6[0][0], e6[2][0]), Math.max(e6[0][1], e6[2][1])));
  }
  return [f(u2(), e5)];
}
function Y2(e5, t5, i4, r6, s8) {
  const a3 = { xmin: e5[0], ymin: e5[1], xmax: e5[3], ymax: e5[4], spatialReference: s2(r6) };
  s8 && isFinite(e5[2]) && isFinite(e5[5]) && (a3.zmin = e5[2], a3.zmax = e5[5], a3.hasZ = true);
  const n5 = g(a3, t5, i4);
  if (n5.spatialReference = s2(i4), n5.xmax - n5.xmin === 0) {
    const e6 = re(n5.spatialReference);
    n5.xmin -= e6, n5.xmax += e6;
  }
  if (n5.ymax - n5.ymin === 0) {
    const e6 = re(n5.spatialReference);
    n5.ymin -= e6, n5.ymax += e6;
  }
  if (s8 && null != n5.zmin && null != n5.zmax && n5.zmax - n5.zmin === 0) {
    const e6 = re(n5.spatialReference);
    n5.zmin -= e6, n5.zmax += e6;
  }
  return n5;
}

export {
  J,
  W,
  Y2 as Y
};
//# sourceMappingURL=chunk-ENWPHK5X.js.map
