import {
  B,
  m as m2
} from "./chunk-SQU7RT7G.js";
import {
  C,
  U
} from "./chunk-5NZ3FCSW.js";
import {
  j
} from "./chunk-WOCPFOF3.js";
import {
  l,
  m
} from "./chunk-SVXUETLX.js";
import {
  _ as _2
} from "./chunk-WSFVXABO.js";
import {
  r as r2
} from "./chunk-NNUIV2NH.js";
import {
  Te,
  e2 as e
} from "./chunk-TNGHAIJZ.js";
import {
  _
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  D,
  G
} from "./chunk-LANOLZOB.js";
import {
  u
} from "./chunk-UXWT3ISO.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/smartMapping/statistics/support/utils.js
var j2 = null;
var w = /^(?<hh>([01][0-9])|(2[0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?(\.(?<ms>\d+))?$/;
function x(e2, t, n) {
  return e2.x < 0 ? e2.x += t : e2.x > n && (e2.x -= t), e2;
}
function b(e2, t, n, r3) {
  const a = D(n) ? G(n) : null, u2 = a ? Math.round((a.valid[1] - a.valid[0]) / t.scale[0]) : null;
  return e2.map((e3) => {
    const n2 = new _(e3.geometry);
    return j(t, n2, n2), e3.geometry = a ? x(n2, u2 ?? 0, r3[0]) : n2, e3;
  });
}
function I(e2, n = 18, o, r3, i) {
  const s = new Float64Array(r3 * i);
  n = Math.round(u(n));
  let l2 = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
  const u2 = m(o);
  for (const { geometry: t, attributes: f } of e2) {
    const { x: e3, y: o2 } = t, c = Math.max(0, e3 - n), m3 = Math.max(0, o2 - n), d = Math.min(i, o2 + n), h = Math.min(r3, e3 + n), y = +u2(f);
    for (let t2 = m3; t2 < d; t2++) for (let i2 = c; i2 < h; i2++) {
      const u3 = t2 * r3 + i2, f2 = l(i2 - e3, t2 - o2, n) * y, c2 = s[u3] += f2;
      l2 = Math.min(l2, c2), a = Math.max(a, c2);
    }
  }
  return { min: l2, max: a };
}
function F(e2) {
  const t = w.exec(e2);
  if (!t) return null;
  const { hh: o, mm: r3, ss: i, ms: s } = t.groups;
  return Number(o) * r2.hours + Number(r3) * r2.minutes + Number(i) * r2.seconds + Number(s || 0);
}
async function N(e2, t, n = true) {
  if (!t) return [];
  const { field: o, field2: i, field3: s, fieldDelimiter: l2, sqlExpression: f, fieldInfos: c, timeZone: m3 } = e2, p = o && c?.find((e3) => e3.name.toLowerCase() === o.toLowerCase()), w2 = !!p && Te(p), x2 = !!p && C(p), b2 = e2.valueExpression, I2 = e2.normalizationType, N2 = e2.normalizationField, E2 = e2.normalizationTotal, v2 = [], U2 = e2.viewInfoParams;
  let M = null, T2 = null;
  if (b2) {
    if (!j2) {
      const { arcadeUtils: e3 } = await e();
      j2 = e3;
    }
    j2.hasGeometryOperations(b2) && await j2.enableGeometryOperations(), M = j2.createFunction(b2), T2 = U2 ? j2.getViewInfo({ viewingMode: U2.viewingMode, scale: U2.scale, spatialReference: new S(U2.spatialReference) }) : null;
  }
  const z2 = e2.fieldInfos, O2 = !(t[0] && "declaredClass" in t[0] && "esri.Graphic" === t[0].declaredClass) && z2 ? { fields: z2 } : null;
  for await (const r3 of t) {
    const e3 = r3.attributes;
    let t2;
    if (f) {
      const e4 = await U(f, new _2(z2));
      e4 && (t2 = e4.calculateValue(r3.attributes));
    } else if (b2) {
      const e4 = O2 ? Object.assign({}, r3, { layer: O2 }) : r3, n2 = j2.createExecContext(e4, T2, m3);
      t2 = j2.executeFunction(M, n2);
    } else e3 && (t2 = e3[o], i ? (t2 = `${m2(t2)}${l2}${m2(e3[i])}`, s && (t2 = `${t2}${l2}${m2(e3[s])}`)) : "string" == typeof t2 && n && (x2 ? t2 = t2 ? new Date(t2).getTime() : null : w2 && (t2 = t2 ? F(t2) : null)));
    if (I2 && "number" == typeof t2 && isFinite(t2)) {
      const n2 = e3 && parseFloat(e3[N2]);
      t2 = B(t2, I2, n2, E2);
    }
    v2.push(t2);
  }
  return v2;
}
function E(e2) {
  const t = e2.field, n = e2.normalizationType, o = e2.normalizationField;
  let r3;
  return "field" === n ? r3 = "(NOT " + o + " = 0)" : "log" !== n && "natural-log" !== n && "square-root" !== n || (r3 = `(${t} > 0)`), r3;
}
function v(e2, t, n) {
  const o = null != t ? e2 + " >= " + t : "", r3 = null != n ? e2 + " <= " + n : "";
  let i = "";
  return i = o && r3 ? T(o, r3) : o || r3, i ? "(" + i + ")" : "";
}
function T(e2, t) {
  let n = null != e2 ? e2 : "";
  return null != t && t && (n = n ? "(" + n + ") AND (" + t + ")" : t), n;
}
function z(t, n) {
  if (t && "intersects" !== t.spatialRelationship) return new r(n, "Only 'intersects' spatialRelationship is supported for featureFilter");
}
function O(t, n, o) {
  const r3 = R({ layer: t, fields: n });
  if (r3.length) return new r(o, "Unknown fields: " + r3.join(", ") + ". You can only use fields defined in the layer schema");
  const i = V({ layer: t, fields: n });
  return i.length ? new r(o, "Unsupported fields: " + i.join(", ") + ". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true") : void 0;
}
function R(e2) {
  const t = e2.layer;
  return e2.fields.filter((e3) => !t.getField(e3));
}
function V(e2) {
  const t = e2.layer;
  return e2.fields.filter((e3) => {
    const n = t.getFieldUsageInfo(e3);
    return !n || !n.supportsStatistics;
  });
}

export {
  b,
  I,
  F,
  N,
  E,
  v,
  T,
  z,
  O
};
//# sourceMappingURL=chunk-J2FJXQQ5.js.map
