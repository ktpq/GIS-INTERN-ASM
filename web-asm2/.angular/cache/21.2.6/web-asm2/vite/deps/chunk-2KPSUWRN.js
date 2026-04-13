import {
  t as t2
} from "./chunk-5BCI2JU3.js";
import {
  l as l2,
  p
} from "./chunk-6FHQMPHK.js";
import {
  D,
  l
} from "./chunk-7RXTTEFJ.js";
import {
  h,
  i as i2,
  m,
  r as r2
} from "./chunk-O6ZJLPWL.js";
import {
  n as n2
} from "./chunk-6YL5AAWZ.js";
import {
  t as t3
} from "./chunk-LKWKFYCL.js";
import {
  e,
  f,
  n,
  o,
  r,
  t
} from "./chunk-TPJLJ32L.js";
import {
  u
} from "./chunk-DOVHXPQB.js";
import {
  m as m2
} from "./chunk-75I3MNCT.js";
import {
  j
} from "./chunk-4L5TCIUQ.js";
import {
  y3 as y
} from "./chunk-DHIQ5CF2.js";
import {
  g
} from "./chunk-EKUGKFFS.js";
import {
  z2 as z
} from "./chunk-L3WEJB7W.js";
import {
  DateTime
} from "./chunk-LHNGH3Y4.js";
import {
  i
} from "./chunk-2DT3G6U2.js";
import {
  _,
  s as s2
} from "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  e as e2
} from "./chunk-5AVTDH3Y.js";
import {
  C
} from "./chunk-2DNVIDFH.js";
import {
  s
} from "./chunk-6SPQI6I6.js";

// node_modules/@arcgis/core/arcade/ArcadeModule.js
var s3 = class {
};

// node_modules/@arcgis/core/arcade/FunctionWrapper.js
var r3 = class {
  constructor() {
  }
};
function n3(t4, n4, e4) {
  if (t4 instanceof r3 && !(t4 instanceof s4)) {
    const r4 = new s4();
    return r4.fn = t4, r4.parameterEvaluator = e4, r4.context = n4, r4;
  }
  return t4;
}
var e3 = class extends r3 {
  constructor(t4) {
    super(), this.fn = t4;
  }
  createFunction(t4) {
    return (...r4) => this.fn(t4, { preparsed: true, arguments: r4 });
  }
  call(t4, r4) {
    return this.fn(t4, r4);
  }
  marshalledCall(e4, a, l3, c) {
    return c(e4, a, (a2, o2, i5) => {
      i5 = i5.map((t4) => t4 instanceof r3 && !(t4 instanceof s4) ? n3(t4, e4, c) : t4);
      const u2 = this.call(l3, { args: i5 });
      return C(u2) ? u2.then((t4) => n3(t4, l3, c)) : u2;
    });
  }
};
var s4 = class extends r3 {
  constructor() {
    super(...arguments), this.fn = null, this.context = null;
  }
  createFunction(t4) {
    return this.fn.createFunction(this.context);
  }
  call(t4, r4) {
    return this.fn.marshalledCall(t4, r4, this.context, this.parameterEvaluator);
  }
  marshalledCall(t4, r4, n4) {
    return this.fn.marshalledCall(t4, r4, this.context, this.parameterEvaluator);
  }
};

// node_modules/@arcgis/core/arcade/ImmutablePointArray.js
var i3 = class _i extends t2 {
  constructor(t4, s5, i5, h3, e4, a) {
    super(t4), this._lazyPt = [], this._hasZ = false, this._hasM = false, this._spRef = s5, this._hasZ = i5, this._hasM = h3, this._cacheId = e4, this._partId = a;
  }
  get(t4) {
    if (void 0 === this._lazyPt[t4]) {
      const i5 = this._elements[t4];
      if (void 0 === i5) return;
      const h3 = new _(i5[0], i5[1], this._spRef);
      this._hasZ && (h3.z = i5[2]), this._hasM && (h3.m = this._hasZ ? i5[3] : i5[2]), h3.cache._arcadeCacheId = this._cacheId.toString() + "-" + this._partId.toString() + "-" + t4.toString(), this._lazyPt[t4] = h3;
    }
    return this._lazyPt[t4];
  }
  equalityTest(t4) {
    return t4 === this || null !== t4 && (t4 instanceof _i != false && t4.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString() + "-" + this._partId.toString();
  }
};

// node_modules/@arcgis/core/arcade/ImmutablePathArray.js
var h2 = class _h extends t2 {
  constructor(t4, s5, h3, i5, e4) {
    super(t4), this._lazyPath = [], this._hasZ = false, this._hasM = false, this._hasZ = h3, this._hasM = i5, this._spRef = s5, this._cacheId = e4;
  }
  get(t4) {
    if (void 0 === this._lazyPath[t4]) {
      const h3 = this._elements[t4];
      if (void 0 === h3) return;
      this._lazyPath[t4] = new i3(h3, this._spRef, this._hasZ, this._hasM, this._cacheId, t4);
    }
    return this._lazyPath[t4];
  }
  equalityTest(t4) {
    return t4 === this || null !== t4 && (t4 instanceof _h != false && t4.getUniqueHash() === this.getUniqueHash());
  }
  getUniqueHash() {
    return this._cacheId.toString();
  }
};

// node_modules/@arcgis/core/chunks/languageUtils.js
var R = class {
  constructor(e4) {
    this.value = e4;
  }
};
var v = class {
  constructor(e4) {
    this.value = e4;
  }
};
var P = { type: "VOID" };
var I = /* @__PURE__ */ Symbol("BREAK");
var _2 = /* @__PURE__ */ Symbol("CONTINUE");
function Y(e4, t4, n4) {
  return "" === t4 || null == t4 || t4 === n4 || t4 === n4 ? e4 : e4 = e4.split(t4).join(n4);
}
function L(e4) {
  return e4 instanceof r3;
}
function G(e4) {
  return e4 instanceof s3;
}
function V(e4) {
  return !!e(e4) || (!!n(e4) || (!!ne(e4) || (!!re(e4) || (!!ie(e4) || (!!t(e4) || (null === e4 || e4 === P))))));
}
function z2(e4, t4) {
  return void 0 === e4 ? t4 : e4;
}
function E(e4) {
  return null == e4 ? "" : o(e4) || te(e4) ? "Array" : ne(e4) ? "Date" : ie(e4) ? "Time" : re(e4) ? "DateOnly" : e(e4) ? "String" : t(e4) ? "Boolean" : n(e4) ? "Number" : "esri.arcade.Attachment" === e4?.declaredClass ? "Attachment" : "esri.arcade.Portal" === e4?.declaredClass ? "Portal" : "esri.arcade.Dictionary" === e4?.declaredClass ? "Dictionary" : ee(e4) ? "KnowledgeGraph" : e4 instanceof s3 ? "Module" : H(e4) ? "Feature" : e4 instanceof _ ? "Point" : e4 instanceof j ? "Polygon" : e4 instanceof y ? "Polyline" : e4 instanceof m2 ? "Multipoint" : e4 instanceof z ? "Extent" : L(e4) ? "Function" : B(e4) ? "FeatureSet" : X(e4) ? "FeatureSetCollection" : W(e4) ? "Voxel" : $(e4) ? "Pixel" : e4 === P ? "" : "number" == typeof e4 && isNaN(e4) ? "Number" : "Unrecognized Type";
}
function q(e4) {
  return e4 === P;
}
function U(e4) {
  return e4 instanceof s2;
}
function H(e4) {
  return "esri.arcade.Feature" === e4?.arcadeDeclaredClass;
}
function W(e4) {
  return "esri.arcade.Voxel" === e4?.arcadeDeclaredClass;
}
function $(e4) {
  return "esri.arcade.Pixel" === e4?.arcadeDeclaredClass;
}
function B(e4) {
  return "esri.arcade.featureset.support.FeatureSet" === e4?.declaredRootClass;
}
function K(e4) {
  return "esri.arcade.Dictionary" === e4?.declaredClass;
}
function Q(e4) {
  return K(e4) || H(e4) || W(e4) || $(e4);
}
function X(e4) {
  return "esri.arcade.featureSetCollection" === e4?.declaredRootClass;
}
function ee(e4) {
  return "esri.rest.knowledgeGraph.KnowledgeGraph" === e4?.declaredClass;
}
function te(e4) {
  return e4 instanceof t2;
}
function ne(e4) {
  return e4 instanceof m;
}
function re(e4) {
  return e4 instanceof i2;
}
function ie(e4) {
  return e4 instanceof r2;
}
function ae(e4) {
  return null != e4 && "object" == typeof e4;
}
function oe(e4, t4, n4, r4, i5) {
  if (e4.length < t4 || e4.length > n4) throw new n2(r4, "WrongNumberOfParameters", i5);
}
function ue(e4) {
  return null == e4 || q(e4) || "" === e4;
}
function se(e4) {
  return e4 < 0 ? -Math.round(-e4) : Math.round(e4);
}
function le(e4, t4) {
  return isNaN(e4) || null == t4 || "" === t4 ? e4.toString() : (t4 = Y(t4, "‰", ""), t4 = Y(t4, "¤", ""), l2(e4, { pattern: t4 }));
}
function fe(e4, t4) {
  return null == t4 || "" === t4 ? e4.toISOString(true) : e4.toFormat(ce(t4), { locale: i(), numberingSystem: "latn" });
}
function ce(e4, t4 = false) {
  e4 = e4.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g, "[$&]");
  let n4 = "";
  const r4 = /(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;
  for (const i5 of e4.match(r4) || []) switch (i5) {
    case "D":
      n4 += "d";
      break;
    case "DD":
      n4 += "dd";
      break;
    case "DDD":
      n4 += "o";
      break;
    case "d":
      n4 += "c";
      break;
    case "ddd":
      n4 += "ccc";
      break;
    case "dddd":
      n4 += "cccc";
      break;
    case "M":
      n4 += "L";
      break;
    case "MM":
      n4 += "LL";
      break;
    case "MMM":
      n4 += "LLL";
      break;
    case "MMMM":
      n4 += "LLLL";
      break;
    case "YY":
      n4 += "yy";
      break;
    case "Y":
    case "YYYY":
      n4 += "yyyy";
      break;
    case "Q":
      n4 += "q";
      break;
    case "Z":
      n4 += "Z";
      break;
    case "ZZ":
      n4 += "ZZ";
      break;
    case "ZZZ":
      n4 += "ZZZ";
      break;
    case "ZZZZ":
      n4 += t4 ? "[ZZZZ]" : "ZZZZ";
      break;
    case "ZZZZZ":
      n4 += t4 ? "[ZZZZZ]" : "ZZZZZ";
      break;
    case "S":
      n4 += "'S'";
      break;
    case "SS":
      n4 += "'SS'";
      break;
    case "SSS":
      n4 += "u";
      break;
    case "A":
    case "a":
      n4 += "a";
      break;
    case "m":
    case "mm":
    case "h":
    case "hh":
    case "H":
    case "HH":
    case "s":
    case "ss":
    case "X":
    case "x":
      n4 += i5;
      break;
    default:
      i5.length >= 2 && i5.startsWith("[") && i5.endsWith("]") ? n4 += `'${i5.slice(1, -1)}'` : n4 += `'${i5}'`;
  }
  return n4;
}
function me(e4, t4, n4) {
  switch (n4) {
    case ">":
      return e4 > t4;
    case "<":
      return e4 < t4;
    case ">=":
      return e4 >= t4;
    case "<=":
      return e4 <= t4;
  }
  return false;
}
function de(e4, t4, r4) {
  if (null === e4) {
    if (null === t4 || t4 === P) return me(null, null, r4);
    if (n(t4)) return me(0, t4, r4);
    if (e(t4)) return me(0, Se(t4), r4);
    if (t(t4)) return me(0, Se(t4), r4);
    if (ne(t4)) return me(0, t4.toNumber(), r4);
    if (ie(t4)) return me(e4, t4.toNumber(), r4);
    if (re(t4)) return me(e4, t4.toNumber(), r4);
  }
  if (e4 === P) {
    if (null === t4 || t4 === P) return me(null, null, r4);
    if (n(t4)) return me(0, t4, r4);
    if (e(t4)) return me(0, Se(t4), r4);
    if (t(t4)) return me(0, Se(t4), r4);
    if (ne(t4)) return me(0, t4.toNumber(), r4);
    if (ie(t4)) return me(e4, t4.toNumber(), r4);
    if (re(t4)) return me(e4, t4.toNumber(), r4);
  } else if (n(e4)) {
    if (n(t4)) return me(e4, t4, r4);
    if (t(t4)) return me(e4, Se(t4), r4);
    if (null === t4 || t4 === P) return me(e4, 0, r4);
    if (e(t4)) return me(e4, Se(t4), r4);
    if (ne(t4)) return me(e4, t4.toNumber(), r4);
    if (ie(t4)) return me(e4, t4.toNumber(), r4);
    if (re(t4)) return me(e4, t4.toNumber(), r4);
  } else if (e(e4)) {
    if (e(t4)) return me(ge(e4), ge(t4), r4);
    if (ne(t4)) return me(Se(e4), t4.toNumber(), r4);
    if (ie(t4)) return me(Se(e4), t4.toNumber(), r4);
    if (re(t4)) return me(Se(e4), t4.toNumber(), r4);
    if (n(t4)) return me(Se(e4), t4, r4);
    if (null === t4 || t4 === P) return me(Se(e4), 0, r4);
    if (t(t4)) return me(Se(e4), Se(t4), r4);
  } else if (ne(e4)) {
    if (ne(t4)) return e4.timeZone !== t4.timeZone && (e4.isUnknownTimeZone ? e4 = m.arcadeDateAndZoneToArcadeDate(e4, t4.timeZone) : t4.isUnknownTimeZone && (t4 = m.arcadeDateAndZoneToArcadeDate(t4, e4.timeZone))), me(e4.toNumber(), t4.toNumber(), r4);
    if (null === t4 || t4 === P) return me(e4.toNumber(), 0, r4);
    if (n(t4)) return me(e4.toNumber(), t4, r4);
    if (t(t4)) return me(e4.toNumber(), Se(t4), r4);
    if (e(t4)) return me(e4.toNumber(), Se(t4), r4);
    if (ie(t4)) throw new n2(null, "CannotCompareDateAndTime", null);
    if (re(t4)) return me(e4.toNumber(), t4.toNumber(), r4);
  } else if (t(e4)) {
    if (t(t4)) return me(e4, t4, r4);
    if (n(t4)) return me(Se(e4), Se(t4), r4);
    if (ne(t4)) return me(Se(e4), t4.toNumber(), r4);
    if (ie(t4)) return me(Se(e4), t4.toNumber(), r4);
    if (re(t4)) return me(Se(e4), t4.toNumber(), r4);
    if (null === t4 || t4 === P) return me(Se(e4), 0, r4);
    if (e(t4)) return me(Se(e4), Se(t4), r4);
  } else if (re(e4)) {
    if (ne(t4)) return me(e4.toNumber(), t4.toNumber(), r4);
    if (null === t4 || t4 === P) return me(e4.toNumber(), 0, r4);
    if (n(t4)) return me(e4.toNumber(), t4, r4);
    if (t(t4)) return me(e4.toNumber(), Se(t4), r4);
    if (e(t4)) return me(e4.toNumber(), Se(t4), r4);
    if (ie(t4)) throw new n2(null, "CannotCompareDateAndTime", null);
    if (re(t4)) return me(e4.toNumber(), t4.toNumber(), r4);
  } else if (ie(e4)) {
    if (ne(t4)) throw new n2(null, "CannotCompareDateAndTime", null);
    if (null === t4 || t4 === P) return me(e4.toNumber(), 0, r4);
    if (n(t4)) return me(e4.toNumber(), t4, r4);
    if (t(t4)) return me(e4.toNumber(), Se(t4), r4);
    if (e(t4)) return me(e4.toNumber(), Se(t4), r4);
    if (ie(t4)) return me(e4.toNumber(), t4.toNumber(), r4);
    if (re(t4)) throw new n2(null, "CannotCompareDateAndTime", null);
  }
  return !!ye(e4, t4) && ("<=" === r4 || ">=" === r4);
}
function ye(e4, t4) {
  if (e4 === t4) return true;
  if (null === e4 && t4 === P || null === t4 && e4 === P) return true;
  if (ne(e4) && ne(t4)) return e4.equals(t4);
  if (ie(e4) && ie(t4)) return e4.equals(t4);
  if (re(e4) && re(t4)) return e4.equals(t4);
  if (e4 instanceof h2) return e4.equalityTest(t4);
  if (e4 instanceof i3) return e4.equalityTest(t4);
  if (e4 instanceof _ && t4 instanceof _) {
    const n4 = e4.cache._arcadeCacheId, r4 = t4.cache._arcadeCacheId;
    if (null != n4) return n4 === r4;
  }
  if (ae(e4) && ae(t4)) {
    if (e4._arcadeCacheId === t4._arcadeCacheId && void 0 !== e4._arcadeCacheId && null !== e4._arcadeCacheId) return true;
    if (e4._underlyingGraphic === t4._underlyingGraphic && void 0 !== e4._underlyingGraphic && null !== e4._underlyingGraphic) return true;
  }
  return false;
}
function pe(e4, { useNumbersForDates: t4 }) {
  let n4 = "";
  for (const r4 in e4) {
    "" !== n4 && (n4 += ",");
    const i5 = e4[r4];
    null == i5 ? n4 += JSON.stringify(r4) + ":null" : t(i5) || n(i5) || e(i5) ? n4 += JSON.stringify(r4) + ":" + JSON.stringify(i5) : U(i5) ? n4 += JSON.stringify(r4) + ":" + be(i5) : ie(i5) || re(i5) ? n4 += `${JSON.stringify(r4)}:${JSON.stringify(i5.toString())}` : te(i5) || Array.isArray(i5) ? n4 += JSON.stringify(r4) + ":" + be(i5, null, t4) : ne(i5) ? n4 += t4 ? JSON.stringify(r4) + ":" + JSON.stringify(i5.getTime()) : JSON.stringify(r4) + ":" + i5.stringify() : null !== i5 && "object" == typeof i5 && "castToText" in i5 && (n4 += JSON.stringify(r4) + ":" + i5.castToText(t4));
  }
  return "{" + n4 + "}";
}
function ge(e4, t4) {
  if (e(e4)) return e4;
  if (null === e4) return "";
  if (n(e4)) return le(e4, t4);
  if (t(e4)) return e4.toString();
  if (ne(e4)) return fe(e4, t4);
  if (ie(e4)) return e4.toFormat(t4);
  if (re(e4)) return e4.toFormat(t4);
  if (e4 instanceof s2) return JSON.stringify(e4.toJSON());
  if (o(e4)) {
    const t5 = [];
    for (let n4 = 0; n4 < e4.length; n4++) t5[n4] = Ne(e4[n4]);
    return "[" + t5.join(",") + "]";
  }
  if (e4 instanceof t2) {
    const t5 = [];
    for (let n4 = 0; n4 < e4.length(); n4++) t5[n4] = Ne(e4.get(n4));
    return "[" + t5.join(",") + "]";
  }
  return null !== e4 && "object" == typeof e4 && "castToText" in e4 ? e4.castToText() : L(e4) ? "object, Function" : e4 === P ? "" : G(e4) ? "object, Module" : "";
}
function he(e4) {
  const t4 = [];
  if (e4 instanceof t2) {
    for (let n4 = 0; n4 < e4.length(); n4++) t4[n4] = Se(e4.get(n4));
    return t4;
  }
  if (!o(e4)) return null;
  for (let n4 = 0; n4 < e4.length; n4++) t4[n4] = Se(e4[n4]);
  return t4;
}
function be(e4, t4, n4 = false) {
  if (e(e4)) return e4;
  if (null === e4) return "";
  if (n(e4)) return le(e4, t4);
  if (t(e4)) return e4.toString();
  if (ne(e4)) return fe(e4, t4);
  if (ie(e4)) return e4.toFormat(t4);
  if (re(e4)) return e4.toFormat(t4);
  if (e4 instanceof s2) return e4 instanceof z ? '{"xmin":' + e4.xmin.toString() + ',"ymin":' + e4.ymin.toString() + "," + (e4.hasZ ? '"zmin":' + e4.zmin.toString() + "," : "") + (e4.hasM ? '"mmin":' + e4.mmin.toString() + "," : "") + '"xmax":' + e4.xmax.toString() + ',"ymax":' + e4.ymax.toString() + "," + (e4.hasZ ? '"zmax":' + e4.zmax.toString() + "," : "") + (e4.hasM ? '"mmax":' + e4.mmax.toString() + "," : "") + '"spatialReference":' + we(e4.spatialReference) + "}" : we(e4.toJSON(), (e5, t5) => e5.key === t5.key ? 0 : "spatialReference" === e5.key ? 1 : "spatialReference" === t5.key || e5.key < t5.key ? -1 : e5.key > t5.key ? 1 : 0);
  if (o(e4)) {
    const t5 = [];
    for (let r4 = 0; r4 < e4.length; r4++) t5[r4] = Ne(e4[r4], n4);
    return "[" + t5.join(",") + "]";
  }
  if (e4 instanceof t2) {
    const t5 = [];
    for (let r4 = 0; r4 < e4.length(); r4++) t5[r4] = Ne(e4.get(r4), n4);
    return "[" + t5.join(",") + "]";
  }
  return null !== e4 && "object" == typeof e4 && "castToText" in e4 ? e4.castToText(n4) : L(e4) ? "object, Function" : e4 === P ? "" : G(e4) ? "object, Module" : "";
}
function Ne(e4, t4 = false) {
  if (null === e4) return "null";
  if (t(e4) || e(e4)) return JSON.stringify(e4);
  if (n(e4)) return e4.toString();
  if (e4 instanceof s2) return be(e4, null, t4);
  if (e4 instanceof t2) return be(e4, null, t4);
  if (Array.isArray(e4)) return be(e4, null, t4);
  if (ne(e4)) return t4 ? JSON.stringify(e4.getTime()) : JSON.stringify(fe(e4, ""));
  if (ie(e4)) return JSON.stringify(e4.toString());
  if (re(e4)) return JSON.stringify(e4.toString());
  if (null !== e4 && "object" == typeof e4) {
    if ("castToText" in e4) return e4.castToText(t4);
  } else if (e4 === P) return "null";
  return "null";
}
function Se(e4, t4) {
  return n(e4) ? e4 : null === e4 || "" === e4 ? 0 : ne(e4) || re(e4) || ie(e4) ? NaN : t(e4) ? e4 ? 1 : 0 : o(e4) || "" === e4 || void 0 === e4 ? NaN : void 0 !== t4 && e(e4) ? (t4 = Y(t4, "‰", ""), t4 = Y(t4, "¤", ""), p(e4, { pattern: t4 })) : e4 === P ? 0 : Number(e4);
}
function Ze(e4, t4) {
  if (ne(e4)) return e4;
  if (e(e4)) {
    const r4 = Te(e4, t4);
    if (r4) return m.dateTimeToArcadeDate(r4);
  }
  return null;
}
function Te(e4, t4) {
  const n4 = / (\d\d)/, i5 = h(t4);
  let a = DateTime.fromISO(e4, { zone: i5 });
  return a.isValid || n4.test(e4) && (e4 = e4.replace(n4, "T$1"), a = DateTime.fromISO(e4, { zone: t4 }), a.isValid) ? a : null;
}
function Ae(e4) {
  return t(e4) ? e4 : e(e4) ? "true" === (e4 = e4.toLowerCase()) : !!n(e4) && (0 !== e4 && !isNaN(e4));
}
function ke(e4, t4) {
  const n4 = JSON.parse(e4);
  return n4 && !n4.spatialReference && (n4.spatialReference = t4), u(n4);
}
function je(e4, t4) {
  return null == e4 ? null : (null !== e4.spatialReference && void 0 !== e4.spatialReference || (e4.spatialReference = t4), e4);
}
function De(e4) {
  if (null === e4) return null;
  if (e4 instanceof _) return "NaN" === e4.x || null === e4.x || isNaN(e4.x) ? null : e4;
  if (e4 instanceof j) {
    if (0 === (e4.curveRings ?? e4.rings).length) return null;
    for (const t4 of e4.curveRings ?? e4.rings) if (t4.length > 0) return e4;
    return null;
  }
  if (e4 instanceof y) {
    if (0 === (e4.curvePaths ?? e4.paths).length) return null;
    for (const t4 of e4.curvePaths ?? e4.paths) if (t4.length > 0) return e4;
    return null;
  }
  return e4 instanceof m2 ? 0 === e4.points.length ? null : e4 : e4 instanceof z ? "NaN" === e4.xmin || null === e4.xmin || isNaN(e4.xmin) ? null : e4 : null;
}
function xe(e4, t4) {
  if (!e4) return t4;
  if (!e4.domain) return t4;
  let n4 = null, r4 = null;
  if (ne(t4)) n4 = t4.toNumber();
  else if (re(t4)) n4 = t4.toString();
  else if (ie(t4)) n4 = t4.toStorageString();
  else if ("string" === e4.field.type || "esriFieldTypeString" === e4.field.type) n4 = ge(t4);
  else {
    if (null == t4) return null;
    if ("" === t4) return t4;
    n4 = Se(t4);
  }
  for (let i5 = 0; i5 < e4.domain.codedValues.length; i5++) {
    const t5 = e4.domain.codedValues[i5];
    t5.code === n4 && (r4 = t5);
  }
  return null === r4 ? ge(t4) : r4.name;
}
function Oe(e4, t4) {
  if (!e4) return t4;
  if (!e4.domain) return t4;
  let n4 = null;
  const r4 = ge(t4);
  for (let i5 = 0; i5 < e4.domain.codedValues.length; i5++) {
    const t5 = e4.domain.codedValues[i5];
    t5.name === r4 && (n4 = t5);
  }
  return null === n4 ? t4 : n4.code;
}
function Ce(e4, t4, n4 = null, r4 = null) {
  if (!t4) return null;
  if (!t4.fields) return null;
  let i5, o2, u2 = null;
  for (let a = 0; a < t4.fields.length; a++) {
    const n5 = t4.fields[a];
    n5.name.toLowerCase() === e4.toString().toLowerCase() && (u2 = n5);
  }
  if (null === u2) throw new n2(null, "FieldNotFound", null, { key: e4 });
  let s5 = t4.typeIdField, l3 = "id", f3 = t4.types;
  if (t4.subtypeField && (s5 = t4.subtypeField, l3 = "code", f3 = t4.subtypes ?? []), null === r4 && n4 && s5) r4 = n4.hasField(s5) ? n4.field(s5) : null;
  else if (s5 && null !== r4) {
    let e5 = false;
    for (const t5 of f3 || []) if (r4 === t5[l3]) {
      e5 = true;
      break;
    }
    if (!e5) {
      for (const t5 of f3 || []) if (r4 === t5.name) {
        r4 = t5[l3], e5 = true;
        break;
      }
    }
    e5 || (r4 = null, n4 && s5 && (r4 = n4.hasField(s5) ? n4.field(s5) : null));
  }
  return null != r4 && f3.some((e5) => e5[l3] === r4 && (i5 = e5.domains?.[u2.name], i5 && "inherited" === i5.type && (i5 = Fe(u2.name, t4), o2 = true), true)), o2 || i5 || (i5 = Fe(e4, t4)), { field: u2, domain: i5 };
}
function Fe(e4, t4) {
  let n4;
  return t4.fields.some((t5) => (t5.name.toLowerCase() === e4.toLowerCase() && (n4 = t5.domain), !!n4)), n4;
}
function we(e4, t4) {
  t4 || (t4 = {}), "function" == typeof t4 && (t4 = { cmp: t4 });
  const n4 = "boolean" == typeof t4.cycles && t4.cycles, r4 = t4.cmp && (i5 = t4.cmp, function(e5) {
    return function(t5, n5) {
      const r5 = { key: t5, value: e5[t5] }, a2 = { key: n5, value: e5[n5] };
      return i5(r5, a2);
    };
  });
  var i5;
  const a = [];
  return (function e5(t5) {
    if (t5?.toJSON && "function" == typeof t5.toJSON && (t5 = t5.toJSON()), void 0 === t5) return;
    if ("number" == typeof t5) return isFinite(t5) ? "" + t5 : "null";
    if ("object" != typeof t5) return JSON.stringify(t5);
    let i6, o2;
    if (Array.isArray(t5)) {
      for (o2 = "[", i6 = 0; i6 < t5.length; i6++) i6 && (o2 += ","), o2 += e5(t5[i6]) || "null";
      return o2 + "]";
    }
    if (null === t5) return "null";
    if (a.includes(t5)) {
      if (n4) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const u2 = a.push(t5) - 1, s5 = Object.keys(t5).sort(r4?.(t5));
    for (o2 = "", i6 = 0; i6 < s5.length; i6++) {
      const n5 = s5[i6], r5 = e5(t5[n5]);
      r5 && (o2 && (o2 += ","), o2 += JSON.stringify(n5) + ":" + r5);
    }
    return a.splice(u2, 1), "{" + o2 + "}";
  })(e4);
}
function Je(e4) {
  if (null === e4) return null;
  const t4 = [];
  for (const n4 of e4) H(n4) ? t4.push(n4.geometry()) : t4.push(n4);
  return t4;
}
function Me(e4, t4) {
  if (!(t4 instanceof _)) throw new n2(null, "InvalidParameter", null);
  e4.push(t4.hasZ ? t4.hasM ? [t4.x, t4.y, t4.z, t4.m] : [t4.x, t4.y, t4.z] : [t4.x, t4.y]);
}
function Re(e4, t4) {
  if (o(e4) || te(e4)) {
    let n4 = false, r4 = false, i5 = [], o2 = t4;
    if (o(e4)) {
      for (const t5 of e4) Me(i5, t5);
      i5.length > 0 && (o2 = e4[0].spatialReference, n4 = e4[0].hasZ, r4 = e4[0].hasM);
    } else if (e4 instanceof i3) i5 = e4._elements, i5.length > 0 && (n4 = e4._hasZ, r4 = e4._hasM, o2 = e4.get(0).spatialReference);
    else {
      if (!te(e4)) throw new n2(null, "InvalidParameter", null);
      for (const t5 of e4.toArray()) Me(i5, t5);
      i5.length > 0 && (o2 = e4.get(0).spatialReference, n4 = true === e4.get(0).hasZ, r4 = true === e4.get(0).hasM);
    }
    if (0 === i5.length) return null;
    return g(i5) || (i5 = i5.slice().reverse()), new j({ rings: [i5], spatialReference: o2, hasZ: n4, hasM: r4 });
  }
  return e4;
}
function ve(e4, t4) {
  if (o(e4) || te(e4)) {
    let n4 = false, r4 = false, i5 = [], a = t4;
    if (o(e4)) {
      for (const t5 of e4) Me(i5, t5);
      i5.length > 0 && (a = e4[0].spatialReference, n4 = true === e4[0].hasZ, r4 = true === e4[0].hasM);
    } else if (e4 instanceof i3) i5 = e4._elements, i5.length > 0 && (n4 = e4._hasZ, r4 = e4._hasM, a = e4.get(0).spatialReference);
    else if (te(e4)) {
      for (const t5 of e4.toArray()) Me(i5, t5);
      i5.length > 0 && (a = e4.get(0).spatialReference, n4 = true === e4.get(0).hasZ, r4 = true === e4.get(0).hasM);
    }
    return 0 === i5.length ? null : new y({ paths: [i5], spatialReference: a, hasZ: n4, hasM: r4 });
  }
  return e4;
}
function Pe(e4, t4) {
  if (o(e4) || te(e4)) {
    let n4 = false, r4 = false, i5 = [], a = t4;
    if (o(e4)) {
      for (const t5 of e4) Me(i5, t5);
      i5.length > 0 && (a = e4[0].spatialReference, n4 = true === e4[0].hasZ, r4 = true === e4[0].hasM);
    } else if (e4 instanceof i3) i5 = e4._elements, i5.length > 0 && (n4 = e4._hasZ, r4 = e4._hasM, a = e4.get(0).spatialReference);
    else if (te(e4)) {
      for (const t5 of e4.toArray()) Me(i5, t5);
      i5.length > 0 && (a = e4.get(0).spatialReference, n4 = true === e4.get(0).hasZ, r4 = true === e4.get(0).hasM);
    }
    return 0 === i5.length ? null : new m2({ points: i5, spatialReference: a, hasZ: n4, hasM: r4 });
  }
  return e4;
}
function Ie(e4, t4 = true) {
  if (null == e4) return [];
  if (o(e4)) {
    const n4 = [];
    for (const r4 of e4) {
      const e5 = ge(r4);
      (t4 || "" !== e5) && n4.push(e5);
    }
    return n4;
  }
  if (te(e4)) {
    const n4 = [];
    for (let r4 = 0; r4 < e4.length(); r4++) {
      const i5 = ge(e4.get(r4));
      (t4 || "" !== i5) && n4.push(i5);
    }
    return n4;
  }
  if (V(e4)) {
    const n4 = ge(e4);
    if (t4 || "" !== n4) return [n4];
  }
  return [];
}
var _e = 0;
function Ye() {
  return _e++, _e % 100 == 0 ? (_e = 0, new Promise((e4) => {
    setTimeout(() => {
      e4();
    }, 0);
  })) : Promise.resolve();
}
function Le(e4, t4, n4) {
  switch (n4) {
    case "&":
      return e4 & t4;
    case "|":
      return e4 | t4;
    case "^":
      return e4 ^ t4;
    case "<<":
      return e4 << t4;
    case ">>":
      return e4 >> t4;
    case ">>>":
      return e4 >>> t4;
  }
}
function Ge(e4, t4 = null) {
  return null == e4 ? null : t(e4) || n(e4) || e(e4) ? e4 : e4 instanceof s2 ? true === t4?.keepGeometryType ? e4 : e4.toJSON() : e4 instanceof t2 ? e4.toArray().map((e5) => Ge(e5, t4)) : Array.isArray(e4) ? e4.map((e5) => Ge(e5, t4)) : f(e4) ? e4 : ne(e4) ? e4.toJSDate() : ie(e4) ? e4.toString() : re(e4) ? e4.toJSDate() : null !== e4 && "object" == typeof e4 && void 0 !== e4.castAsJson ? e4.castAsJson(t4) : null;
}
async function Ve(e4, t4, n4, r4, i5) {
  const a = await ze(e4, t4, n4);
  i5[r4] = a;
}
async function ze(e4, t4 = null, n4 = null) {
  if (e4 instanceof t2 && (e4 = e4.toArray()), null == e4) return null;
  if (V(e4) || e4 instanceof s2 || f(e4) || ne(e4)) return Ge(e4, n4);
  if (Array.isArray(e4)) {
    const r4 = [], i5 = [];
    for (const a of e4) null === a || V(a) || a instanceof s2 || f(a) || ne(a) ? i5.push(Ge(a, n4)) : (i5.push(null), r4.push(Ve(a, t4, n4, i5.length - 1, i5)));
    return r4.length > 0 && await Promise.all(r4), i5;
  }
  return null !== e4 && "object" == typeof e4 && void 0 !== e4.castAsJsonAsync ? e4.castAsJsonAsync(t4, n4) : null;
}
function Ee(e4) {
  return qe(e4) ? e4.parent : e4;
}
function qe(e4) {
  return e4 && "declaredClass" in e4 && "esri.layers.support.SubtypeSublayer" === e4.declaredClass;
}
function Ue(e4) {
  return e4 && "declaredClass" in e4 && "esri.layers.SubtypeGroupLayer" === e4.declaredClass;
}
function He(e4, t4, n4) {
  const r4 = Ee(e4.fullSchema());
  if (null === r4) return null;
  if (!r4.fields) return null;
  return Ce(t4, r4, e4, n4);
}
function We(e4) {
  const t4 = Ee(e4.fullSchema());
  return null === t4 ? null : t4.fields ? t4.subtypeField ? { subtypeField: t4.subtypeField, subtypes: t4.subtypes ? t4.subtypes.map((e5) => ({ name: e5.name, code: e5.code })) : [] } : t4.typeIdField ? { subtypeField: t4.typeIdField, subtypes: t4.types ? t4.types.map((e5) => ({ name: e5.name, code: e5.id })) : [] } : null : null;
}
function $e(e4, t4, n4, r4) {
  const i5 = Ee(e4.fullSchema());
  if (null === i5) return null;
  if (!i5.fields) return null;
  const a = Ce(t4, i5, e4, r4);
  if (void 0 === n4) try {
    n4 = e4.field(t4);
  } catch (o2) {
    return null;
  }
  return xe(a, n4);
}
function Be(e4, t4, n4, r4) {
  const i5 = Ee(e4.fullSchema());
  if (null === i5) return null;
  if (!i5.fields) return null;
  if (void 0 === n4) {
    try {
      n4 = e4.field(t4);
    } catch (a) {
      return null;
    }
    return n4;
  }
  return Oe(Ce(t4, i5, e4, r4), n4);
}
function Ke(e4) {
  return e4?.timeZone ?? "system";
}
function Qe(e4) {
  const t4 = Ee(e4.fullSchema());
  if (null === t4) return null;
  if (!t4.fields) return null;
  const n4 = [];
  for (const r4 of t4.fields) n4.push(l(r4));
  return { objectIdField: t4.objectIdField, globalIdField: t4.globalIdField ?? "", geometryType: void 0 === D[t4.geometryType] ? "" : D[t4.geometryType], fields: n4 };
}
function Xe(r4, i5) {
  const a = m.systemTimeZoneCanonicalName;
  return "system" === r4 && (r4 = a), { version: et, engineVersion: e2, timeZone: r4, userTimeZone: a, spatialReference: i5 instanceof S ? i5.toJSON() : i5, application: s.applicationName ?? "", engine: "web", locale: i() };
}
var et = "1.35";
var tt = Object.freeze(Object.defineProperty({ __proto__: null, ImplicitResult: v, ReturnResult: R, absRound: se, arcadeVersion: et, autoCastArrayOfPointsToMultiPoint: Pe, autoCastArrayOfPointsToPolygon: Re, autoCastArrayOfPointsToPolyline: ve, autoCastFeatureToGeometry: Je, binaryOperator: Le, breakResult: I, castAsJson: Ge, castAsJsonAsync: ze, castRecordToText: pe, continueResult: _2, defaultExecutingContext: Xe, defaultTimeZone: Ke, defaultUndefined: z2, equalityTest: ye, featureDomainCodeLookup: Be, featureDomainValueLookup: $e, featureFullDomain: He, featureSchema: Qe, featureSubtypes: We, fixNullGeometry: De, fixSpatialReference: je, formatDate: fe, formatNumber: le, getDomain: Ce, getDomainCode: Oe, getDomainValue: xe, getType: E, greaterThanLessThan: de, isArray: o, isBoolean: t, isDate: ne, isDateOnly: re, isDictionary: K, isDictionaryLike: Q, isEmpty: ue, isFeature: H, isFeatureSet: B, isFeatureSetCollection: X, isFunctionParameter: L, isGeometry: U, isGraphic: t3, isImmutableArray: te, isInteger: r, isJsDate: f, isKnowledgeGraph: ee, isModule: G, isNumber: n, isObject: ae, isPixel: $, isSimpleType: V, isString: e, isSubtypeGrouplayer: Ue, isSubtypeSublayer: qe, isTime: ie, isVoid: q, isVoxel: W, multiReplace: Y, parseGeometryFromJson: ke, pcCheck: oe, stableStringify: we, standardiseDateFormat: ce, tick: Ye, toBoolean: Ae, toDate: Ze, toNumber: Se, toNumberArray: he, toString: ge, toStringArray: Ie, toStringExplicit: be, voidOperation: P }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/arcade/deepClone.js
function i4(a) {
  p2 = a;
}
var p2;
function f2(i5) {
  return null === i5 ? null : ne(i5) ? i5.clone() : V(i5) ? i5 : U(i5) ? i5.clone() : te(i5) ? i5.toArray().map((a) => f2(a)) : o(i5) ? i5.map((a) => f2(a)) : H(i5) ? p2.createFromArcadeFeature(i5) : X(i5) || B(i5) ? i5 : K(i5) || "esri.arcade.Attachment" === i5?.declaredClass ? i5.deepClone() : ("esri.arcade.Portal" === i5?.declaredClass || ee(i5) || i5 instanceof s3 || L(i5), i5);
}

export {
  s3 as s,
  r3 as r,
  n3 as n,
  e3 as e,
  s4 as s2,
  i3 as i,
  h2 as h,
  R,
  v,
  P,
  I,
  _2 as _,
  Y,
  L,
  G,
  V,
  z2 as z,
  E,
  q,
  U,
  H,
  W,
  $,
  B,
  K,
  Q,
  X,
  ee,
  te,
  ne,
  re,
  ie,
  oe,
  ue,
  se,
  ce,
  de,
  ye,
  pe,
  ge,
  he,
  be,
  Se,
  Ze,
  Ae,
  je,
  De,
  xe,
  Oe,
  Ce,
  Je,
  Re,
  ve,
  Pe,
  Ie,
  Ye,
  Le,
  Ge,
  ze,
  qe,
  He,
  We,
  $e,
  Be,
  Ke,
  Qe,
  Xe,
  tt,
  i4 as i2,
  f2 as f
};
//# sourceMappingURL=chunk-2KPSUWRN.js.map
