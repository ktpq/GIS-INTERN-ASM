import {
  D as D2,
  E,
  M,
  O,
  Q,
  R,
  U,
  de,
  oe,
  pe as pe2,
  te as te2,
  ue,
  z as z2
} from "./chunk-S4XF2EDO.js";
import "./chunk-IFJNDNEE.js";
import "./chunk-7VPGM7XN.js";
import "./chunk-4JLAUTVL.js";
import "./chunk-6PP7DNS4.js";
import "./chunk-A5OJG5V4.js";
import "./chunk-2NVASZN4.js";
import "./chunk-CG5XSOLV.js";
import "./chunk-GR4UOAVT.js";
import "./chunk-J6XPKJNF.js";
import "./chunk-JHOSVATJ.js";
import {
  r as r2
} from "./chunk-PK262WYA.js";
import {
  a as a2
} from "./chunk-2XFDJTEH.js";
import "./chunk-A4P3ERHS.js";
import {
  D,
  I,
  w
} from "./chunk-UFM6MIJC.js";
import {
  p
} from "./chunk-GRTVQTEC.js";
import {
  B,
  H,
  V,
  X,
  ne,
  pe,
  te
} from "./chunk-R4SZFRNU.js";
import {
  t as t2
} from "./chunk-5BCI2JU3.js";
import "./chunk-RTGDSDFV.js";
import "./chunk-CN3LKCJ5.js";
import "./chunk-ZCK3VSUL.js";
import "./chunk-7IF43WAJ.js";
import "./chunk-SEVWV2FY.js";
import {
  n as n4
} from "./chunk-UA7LCEXF.js";
import {
  n as n5
} from "./chunk-X2QJFLST.js";
import "./chunk-IMX373GW.js";
import "./chunk-2WLR3ZCM.js";
import "./chunk-7DXPO6B2.js";
import "./chunk-JJJRQB6X.js";
import "./chunk-3QK2DR4J.js";
import "./chunk-J5XU3PTN.js";
import "./chunk-C753LAEV.js";
import "./chunk-JNCFJPS4.js";
import {
  i,
  m,
  r
} from "./chunk-KUQTK7UY.js";
import {
  n as n3
} from "./chunk-N7U7MERC.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import {
  Xe
} from "./chunk-DNCZTJNI.js";
import "./chunk-BQWO5RXV.js";
import "./chunk-IBGMUXG6.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import {
  e as e2,
  f,
  n as n2,
  o,
  t
} from "./chunk-TPJLJ32L.js";
import "./chunk-TUNGPGHU.js";
import "./chunk-4YKWF6M6.js";
import {
  m as m2
} from "./chunk-BMYA7NZP.js";
import {
  j
} from "./chunk-V7SQTPST.js";
import {
  y3 as y
} from "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
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
import {
  e
} from "./chunk-O3PP4I47.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import {
  a,
  n2 as n
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/Pixel.js
var g = () => n.getLogger("esri.arcade.Pixel");
function h(r3) {
  return r3.rasterFields.filter((r4) => r4.name.startsWith(a2));
}
var d = class _d {
  constructor(e3, t3, s2) {
    this._graphic = t3, this._timeZone = s2, this.arcadeDeclaredClass = "esri.arcade.Pixel", this._values = /* @__PURE__ */ new Map(), this._fields = new Map(e3.map((e4) => [r2(e4.name), e4]));
  }
  static fromImageryGraphic(r3, t3) {
    if (!n4(r3.origin) && !n5(r3.origin)) throw new n3(null, "InvalidParameter", null);
    return new _d(h(r3.origin.layer), r3, t3);
  }
  static getDeclaredMembers(r3) {
    return h(r3).map((r4) => Xe(r4.name) && "string" === r4.type ? { name: r4.name, type: "array", elementType: { type: "text" } } : D(r4)).filter((r4) => null != r4);
  }
  keys() {
    return Array.from(this._fields.values()).map((r3) => r3.name).sort();
  }
  hasField(e3) {
    return this._fields.has(r2(e3));
  }
  field(t3) {
    const n6 = this._fields.get(r2(t3));
    if (null == n6) throw new n3(null, "FieldNotFound", null, { key: t3 });
    return e(this._values, n6.name, () => {
      const r3 = this._graphic.getAttribute(n6.name);
      return null == r3 ? null : Xe(n6.name) && "string" == typeof r3 ? new t2(r3.split(/,\s*|\s+/)) : f(r3) || V(r3) ? w(r3, n6.type, this._timeZone ?? "system") : (g().warn(`Unsupported type for attribute: ${n6.name}. Ignoring value.`), null);
    });
  }
  isEmpty() {
    return this._fields.size <= 0;
  }
  castToText(r3 = false) {
    const e3 = {};
    for (const t3 of this._fields.values()) e3[t3.name] = this.field(t3.name);
    return pe(e3, { useNumbersForDates: r3 });
  }
};

// node_modules/@arcgis/core/arcade/Voxel.js
var s = "Voxel.Position";
var a3 = "Voxel.LocalTime";
function l(e3) {
  const i2 = e3.getAttribute(s);
  if ("string" != typeof i2) throw new n3(null, "InvalidParameter", null);
  const n6 = JSON.parse(i2);
  if (!Array.isArray(n6) || "number" != typeof n6[0] || "number" != typeof n6[1] || "number" != typeof n6[2]) throw new n3(null, "InvalidParameter", null);
  return new t2(n6);
}
function o2(r3, i2) {
  const s2 = r3.getAttribute(a3);
  if (null == s2) return null;
  if (!f(s2)) throw new n3(null, "InvalidParameter", null);
  return m.dateJSAndZoneToArcadeDate(s2, i2);
}
var u = class {
  constructor(e3, t3) {
    this._graphic = e3, this._timeZone = t3, this.arcadeDeclaredClass = "esri.arcade.Voxel", this._layer = e3.sourceLayer;
  }
  static getDeclaredMembers(e3) {
    return e3.fields.map((e4) => {
      switch (e4.name) {
        case s:
          return { name: e4.name, type: "array", elementType: { type: "number" } };
        case a3:
          return { name: e4.name, type: "date" };
        default:
          switch (e4.type) {
            case "string":
              return { name: e4.name, type: "text" };
            case "double":
              return { name: e4.name, type: "number" };
          }
          return null;
      }
    }).filter((e4) => null != e4);
  }
  getPosition() {
    return void 0 !== this._position ? this._position : this._position = l(this._graphic);
  }
  getLocalTime() {
    return void 0 !== this._localTime ? this._localTime : this._localTime = o2(this._graphic, this._timeZone ?? "system");
  }
  keys() {
    return this._layer.fields.map((e3) => e3.name).sort();
  }
  hasField(e3) {
    return this._layer.fieldsIndex.has(e3);
  }
  field(e3) {
    const r3 = this._layer.fieldsIndex?.get(e3)?.name;
    if (null == r3) throw new n3(null, "FieldNotFound", null, { key: e3 });
    switch (r3) {
      case s:
        return this.getPosition();
      case a3:
        return this.getLocalTime();
    }
    return this._graphic.attributes[r3] ?? null;
  }
  isEmpty() {
    return this._layer.fields.length <= 0;
  }
  castToText(e3 = false) {
    const t3 = __spreadValues({}, this._graphic.attributes);
    t3[s] = this.getPosition(), a3 in t3 && (t3[a3] = this.getLocalTime());
    for (const r3 of Object.keys(t3)) this._layer.fieldsIndex?.has(r3) || delete t3[r3];
    return pe(t3, { useNumbersForDates: e3 });
  }
};

// node_modules/@arcgis/core/support/arcadeUtils.js
var k = { vars: { $feature: "any", $view: "any" } };
function z3(e3) {
  return e3.replaceAll(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function J(e3) {
  return null == e3 ? null : o(e3) || te(e3) ? "array" : ne(e3) ? "date" : e2(e3) ? "text" : t(e3) ? "boolean" : n2(e3) ? "number" : e3 instanceof p ? "dictionary" : H(e3) ? "feature" : e3 instanceof _ ? "point" : e3 instanceof j ? "polygon" : e3 instanceof y ? "polyline" : e3 instanceof m2 ? "multipoint" : e3 instanceof z ? "extent" : e3 instanceof i ? "dateOnly" : e3 instanceof r ? "time" : B(e3) ? "featureSet" : X(e3) ? "featureSetCollection" : null;
}
function O2(e3) {
  if (!e3) return null;
  try {
    return E(e3);
  } catch (n6) {
  }
  return null;
}
function V2(r3, n6) {
  const t3 = "string" == typeof r3 ? O2(r3) : r3;
  if (!t3) return null;
  try {
    return n6 = n6 || a(k), M(t3, n6);
  } catch (o3) {
  }
  return null;
}
function Z(e3, r3, n6) {
  return { vars: { $feature: null == e3 ? new I() : I.createFromGraphic(e3, n6), $view: r3?.view }, spatialReference: r3?.sr, timeZone: n6 ?? null };
}
function q(e3, r3, n6) {
  return I.createFromGraphicLikeObject(r3, e3, n6, null);
}
function G(e3, r3) {
  null != e3.vars && (e3.vars.$feature = r3);
}
function L(e3, r3) {
  let n6;
  try {
    n6 = D2(e3, r3);
  } catch (t3) {
    n6 = null;
  }
  return n6;
}
function N(e3, r3) {
  let n6;
  try {
    n6 = e3 ? e3(r3) : null;
  } catch (t3) {
    n6 = null;
  }
  return n6;
}
function U2(e3, r3) {
  try {
    return e3 ? e3(r3) : Promise.resolve(null);
  } catch (n6) {
    return Promise.resolve(null);
  }
}
var B2 = ["$feature", "$aggregatedFeatures", "$voxel"].map((e3) => r2(e3));
function H2(e3, r3) {
  if (!e3) return [];
  const n6 = "string" == typeof e3 ? O2(e3) : e3;
  if (!n6) return [];
  const t3 = /* @__PURE__ */ new Map();
  if (Array.isArray(r3) || null == r3) for (const a4 of B2) t3.set(a4, r3);
  else for (const [a4, i2] of r3) t3.set(r2(a4), i2);
  const o3 = R(n6).flatMap(({ varId: e4, memberNamePattern: r4 }) => {
    if (!t3.has(e4)) return [];
    if (r4.includes("*")) {
      const n7 = t3.get(e4);
      if (null == n7) return [];
      const o4 = new RegExp(`^${r4.split(/\*+/).map(z3).join(".*")}$`, "i");
      return n7.filter((e5) => o4.test(e5));
    }
    return r4.toLowerCase();
  });
  return [...new Set(o3.sort())];
}
function K(e3) {
  return U(e3, "$view");
}
function Q2(e3, r3) {
  return !!e3 && U(e3, r3);
}
function W(e3) {
  if (!e3 || null == e3.spatialReference && (null == e3.scale || null == e3.viewingMode)) return;
  let r3, n6;
  const { timeProperties: t3, timeZone: o3 } = e3;
  if (null != t3) {
    const { currentStart: e4, currentEnd: a4 } = t3;
    null != o3 ? (r3 = null != e4 ? m.dateJSAndZoneToArcadeDate(e4, o3) : null, n6 = null != a4 ? m.dateJSAndZoneToArcadeDate(a4, o3) : null) : (r3 = null != e4 ? m.dateJSToArcadeDate(e4) : null, n6 = null != a4 ? m.dateJSToArcadeDate(a4) : null);
  }
  return { view: e3.viewingMode && null != e3.scale ? new p({ __proto__: null, viewingMode: e3.viewingMode, scale: e3.scale, timeProperties: null != r3 || null != n6 ? new p({ __proto__: null, currentStart: r3, currentEnd: n6, startIncluded: true, endIncluded: true }) : null }) : null, sr: e3.spatialReference };
}
function X2({ url: e3, spatialReference: r3, lrucache: n6, interceptor: t3 }) {
  const o3 = ue();
  return o3 ? o3.createFeatureSetCollectionFromService(e3, r3, n6, t3) : null;
}
function Y({ layer: e3, spatialReference: r3, outFields: n6, returnGeometry: t3, lrucache: o3, interceptor: a4 }) {
  if (null === e3) return null;
  const i2 = ue();
  return i2 ? i2.constructFeatureSet(e3, r3, n6, t3 ?? true, o3, a4) : null;
}
function ee(e3) {
  if (null === e3?.map) return null;
  const r3 = ue();
  return r3 ? r3.createFeatureSetCollectionFromMap(e3.map, e3.spatialReference, e3.lrucache, e3.interceptor) : null;
}
function re(e3, r3) {
  return p.convertJsonToArcade(e3, r3);
}
function ne2(e3, r3, n6 = []) {
  return te2(e3, r3, n6);
}
function te3() {
  return z2();
}
function oe2() {
  return Q();
}
function ae(e3) {
  return "type" in e3 && ("class-breaks" === e3.type || "dictionary" === e3.type || "dot-density" === e3.type || "pie-chart" === e3.type || "simple" === e3.type || "unique-value" === e3.type);
}
function ie(e3) {
  return "esri.layers.support.LabelClass" === e3.declaredClass;
}
function le(e3) {
  return "esri.PopupTemplate" === e3.declaredClass;
}
function se(e3, r3) {
  if (!e3) return false;
  if ("string" == typeof e3) return r3(e3);
  const n6 = e3;
  if (ae(n6)) {
    if ("dot-density" === n6.type) {
      const e5 = n6.attributes?.some((e6) => r3(e6.valueExpression));
      if (e5) return e5;
    }
    const e4 = n6.visualVariables, t3 = !!e4 && e4.some((e5) => {
      let n7 = r3(e5.valueExpression);
      return "size" === e5.type && (de2(e5.minSize) && (n7 = n7 || r3(e5.minSize.valueExpression)), de2(e5.maxSize) && (n7 = n7 || r3(e5.maxSize.valueExpression))), n7;
    });
    return !(!("valueExpression" in n6) || !r3(n6.valueExpression)) || t3;
  }
  if (ie(n6)) {
    const e4 = n6.labelExpressionInfo?.expression;
    return !(!e4 || !r3(e4)) || false;
  }
  return !!le(n6) && (!!n6.expressionInfos && n6.expressionInfos.some((e4) => r3(e4.expression)) || Array.isArray(n6.content) && n6.content.some((e4) => "expression" === e4.type && r3(e4.expressionInfo?.expression)));
}
function ue2(e3) {
  const r3 = O2(e3);
  return !!r3 && oe(r3);
}
function ce(e3) {
  return se(e3, ue2);
}
function fe(e3) {
  const r3 = O2(e3);
  return !!r3 && O(r3);
}
function pe3(e3) {
  return se(e3, fe);
}
function me(e3) {
  return se(e3, (e4) => {
    const r3 = O2(e4);
    return !!r3 && pe2(r3);
  });
}
function de2(e3) {
  return e3 && "esri.renderers.visualVariables.SizeVariable" === e3.declaredClass;
}
export {
  p as Dictionary,
  d as Pixel,
  u as Voxel,
  de as arcade,
  I as arcadeFeature,
  Y as convertFeatureLayerToFeatureSet,
  re as convertJsonToArcade,
  ee as convertMapToFeatureSetCollection,
  X2 as convertServiceUrlToWorkspace,
  Z as createExecContext,
  q as createFeature,
  V2 as createFunction,
  O2 as createSyntaxTree,
  K as dependsOnView,
  oe2 as enableFeatureSetOperations,
  te3 as enableGeometryOperations,
  L as evalSyntaxTree,
  U2 as executeAsyncFunction,
  N as executeFunction,
  H2 as extractFieldNames,
  J as getArcadeType,
  W as getViewInfo,
  ce as hasGeometryFunctions,
  pe3 as hasGeometryOperations,
  Q2 as hasVariable,
  ne2 as loadScriptDependencies,
  me as requiresTrack,
  G as updateExecContext
};
//# sourceMappingURL=arcadeUtils-SJDWZVVS.js.map
