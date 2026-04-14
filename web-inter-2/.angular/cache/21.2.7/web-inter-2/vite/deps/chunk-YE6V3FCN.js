import {
  I,
  b,
  p as p3
} from "./chunk-EQ7O3NAW.js";
import {
  l
} from "./chunk-LPOR7RBY.js";
import {
  P as P3,
  Z,
  d,
  z as z3
} from "./chunk-MWYV2T46.js";
import {
  t as t4
} from "./chunk-OQ5Y43LD.js";
import {
  t as t5
} from "./chunk-Y327ZXQZ.js";
import {
  r as r4
} from "./chunk-YCI7PD23.js";
import {
  M,
  r as r2
} from "./chunk-GUTQBY5P.js";
import {
  I as I2,
  a
} from "./chunk-T6TXZ6TA.js";
import {
  p as p2
} from "./chunk-HL5VRJDT.js";
import {
  $,
  $e,
  Ae,
  B,
  Be,
  De,
  E,
  H,
  He,
  Je,
  K,
  Ke,
  L,
  P as P2,
  Q,
  Qe,
  Se,
  U,
  V,
  W,
  We,
  X,
  Xe,
  Y,
  Ze,
  be,
  ce,
  f as f2,
  ge,
  i as i3,
  ie,
  je,
  ne,
  oe,
  re,
  se,
  te,
  ue,
  ye,
  z as z2
} from "./chunk-M26DUV3M.js";
import {
  t as t3
} from "./chunk-FPO7A7U4.js";
import {
  p
} from "./chunk-BI5WXBSP.js";
import {
  i as i4
} from "./chunk-UTMQRFW7.js";
import {
  P
} from "./chunk-EDM7PDCW.js";
import {
  h,
  i as i2,
  m,
  r as r3
} from "./chunk-5QF2VDYR.js";
import {
  n as n4,
  o as o2,
  s,
  t as t2
} from "./chunk-K3KADXMX.js";
import {
  n as n5
} from "./chunk-Z3PP4SLW.js";
import {
  u
} from "./chunk-XJP3RSS7.js";
import {
  M as M2
} from "./chunk-OOTSAG75.js";
import {
  e,
  n as n3,
  o,
  r,
  t
} from "./chunk-UDRKO2UK.js";
import {
  DateTime
} from "./chunk-HTVDNBEG.js";
import {
  i
} from "./chunk-6TF3NI7G.js";
import {
  m as m2
} from "./chunk-FMIKVU3Q.js";
import {
  j
} from "./chunk-R3PBZCGD.js";
import {
  y3 as y
} from "./chunk-Z5I3WFZJ.js";
import {
  g
} from "./chunk-DFCHXQYB.js";
import {
  z2 as z
} from "./chunk-OYOKYTYR.js";
import {
  _,
  s as s2
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  D
} from "./chunk-RVKOLALF.js";
import {
  v
} from "./chunk-253Z6EVN.js";
import {
  c,
  f
} from "./chunk-HXIOMN57.js";
import {
  C,
  n as n2
} from "./chunk-WARIPJQI.js";
import {
  n2 as n
} from "./chunk-6I475YAP.js";

// node_modules/@arcgis/core/arcade/ArcadeModuleLoader.js
var s3 = class {
  constructor(s8, t8) {
    this._moduleSingletons = s8, this._syntaxModules = t8;
  }
  loadLibrary(s8) {
    if (null == this._syntaxModules) return null;
    const t8 = this._syntaxModules[s8];
    return t8 ? { syntax: t8.script, uri: t8.uri } : null;
  }
};

// node_modules/@arcgis/core/arcade/compilerUtils.js
var a2 = () => n.getLogger("esri.arcade.compilerUtils");
function c2(t8, r7, o4) {
  switch (t8.type) {
    case "VariableDeclaration":
      for (const o5 of t8.declarations) r7.add(r4(o5.id));
      return;
    case "BlockStatement":
      for (const e3 of t8.body) c2(e3, r7, o4);
      return;
    case "ExportNamedDeclaration": {
      const e3 = /* @__PURE__ */ new Set();
      c2(t8.declaration, e3, o4);
      for (const t9 of e3) r7.add(t9), o4.add(t9);
      return;
    }
    case "ForInStatement":
    case "ForOfStatement":
      return "VariableDeclaration" === t8.left.type && c2(t8.left, r7, o4), void c2(t8.body, r7, o4);
    case "ForStatement":
      return "VariableDeclaration" === t8.init?.type && c2(t8.init, r7, o4), void c2(t8.body, r7, o4);
    case "FunctionDeclaration":
      return void r7.add(r4(t8.id));
    case "IfStatement":
      return c2(t8.consequent, r7, o4), void (t8.alternate && c2(t8.alternate, r7, o4));
    case "ImportDeclaration":
      for (const o5 of t8.specifiers) r7.add(r4(o5.local));
      return;
    case "WhileStatement":
      return void c2(t8.body, r7, o4);
    case "BreakStatement":
    case "ContinueStatement":
    case "EmptyStatement":
    case "ExpressionStatement":
    case "ReturnStatement":
      return;
  }
}
function s4(e3) {
  const r7 = /* @__PURE__ */ new Set(), s8 = /* @__PURE__ */ new Set();
  for (const t8 of e3.body) c2(t8, r7, s8);
  if (!f(s8, r7)) throw a2().error(`Internal error: exported undeclared symbols {${Array.from(c(s8, r7)).join(", ")}}`), new s(null, "NeverReach", null);
  return { globals: r7, exports: s8 };
}
function i5(e3) {
  const r7 = /* @__PURE__ */ new Set(), o4 = /* @__PURE__ */ new Set();
  if (c2(e3.body, r7, o4), o4.size > 0) throw a2().error(`Internal error: cannot export locals {${Array.from(o4.values()).join(", ")}}`), new s(null, "NeverReach", null);
  return r7;
}
function l2(e3) {
  const t8 = [];
  let r7 = [], o4 = e3.expression;
  for (; ; ) switch (o4.type) {
    case "MemberExpression":
      r7.push(o4), o4 = o4.object;
      break;
    case "CallExpression":
      r7.push(o4), o4 = o4.callee;
      break;
    case "SafeMemberExpression":
      t8.push({ checked: o4, unchecked: r7.reverse() }), r7 = [], o4 = o4.object;
      break;
    default:
      return { root: r7.at(0) ?? o4, sections: t8.reverse() };
  }
}

// node_modules/@arcgis/core/arcade/treeAnalysis.js
var n6 = { all: { min: 2, max: 2 }, time: { min: 0, max: 4 }, dateonly: { min: 0, max: 3 }, getenvironment: { min: 0, max: 0 }, none: { min: 2, max: 2 }, any: { min: 2, max: 2 }, reduce: { min: 2, max: 3 }, map: { min: 2, max: 2 }, filter: { min: 2, max: 2 }, fromcodepoint: { min: 1, max: -1 }, fromcharcode: { min: 1, max: -1 }, tocodepoint: { min: 1, max: 2 }, tocharcode: { min: 1, max: 2 }, concatenate: { min: 0, max: -1 }, expects: { min: 1, max: -1 }, getfeatureset: { min: 1, max: 2 }, week: { min: 1, max: 2 }, fromjson: { min: 1, max: 1 }, length3d: { min: 1, max: 2 }, tohex: { min: 1, max: 1 }, hash: { min: 1, max: 1 }, timezone: { min: 1, max: 1 }, timezoneoffset: { min: 1, max: 1 }, changetimezone: { min: 2, max: 2 }, isoweek: { min: 1, max: 1 }, isoweekday: { min: 1, max: 1 }, hasvalue: { min: 2, max: 2 }, isomonth: { min: 1, max: 1 }, isoyear: { min: 1, max: 1 }, resize: { min: 2, max: 3 }, slice: { min: 0, max: -1 }, splice: { min: 0, max: -1 }, push: { min: 2, max: 2 }, pop: { min: 1, max: 1 }, includes: { min: 2, max: 2 }, array: { min: 0, max: 2 }, front: { min: 1, max: 1 }, back: { min: 1, max: 1 }, insert: { min: 3, max: 3 }, erase: { min: 2, max: 2 }, split: { min: 2, max: 4 }, guid: { min: 0, max: 1 }, standardizeguid: { min: 2, max: 2 }, today: { min: 0, max: 0 }, angle: { min: 2, max: 3 }, bearing: { min: 2, max: 3 }, urlencode: { min: 1, max: 1 }, now: { min: 0, max: 0 }, timestamp: { min: 0, max: 0 }, day: { min: 1, max: 1 }, month: { min: 1, max: 1 }, year: { min: 1, max: 1 }, hour: { min: 1, max: 1 }, second: { min: 1, max: 1 }, millisecond: { min: 1, max: 1 }, minute: { min: 1, max: 1 }, weekday: { min: 1, max: 1 }, toutc: { min: 1, max: 1 }, tolocal: { min: 1, max: 1 }, date: { min: 0, max: 8 }, datediff: { min: 2, max: 4 }, dateadd: { min: 2, max: 3 }, trim: { min: 1, max: 1 }, text: { min: 1, max: 2 }, left: { min: 2, max: 2 }, right: { min: 2, max: 2 }, mid: { min: 2, max: 3 }, upper: { min: 1, max: 1 }, proper: { min: 1, max: 2 }, lower: { min: 1, max: 1 }, find: { min: 2, max: 3 }, iif: { min: 3, max: 3 }, decode: { min: 2, max: -1 }, when: { min: 2, max: -1 }, defaultvalue: { min: 2, max: 3 }, isempty: { min: 1, max: 1 }, domaincode: { min: 2, max: 4 }, domainname: { min: 2, max: 4 }, polygon: { min: 1, max: 1 }, point: { min: 1, max: 1 }, polyline: { min: 1, max: 1 }, extent: { min: 1, max: 1 }, multipoint: { min: 1, max: 1 }, ringisclockwise: { min: 1, max: 1 }, geometry: { min: 1, max: 1 }, count: { min: 0, max: -1 }, number: { min: 1, max: 2 }, acos: { min: 1, max: 1 }, asin: { min: 1, max: 1 }, atan: { min: 1, max: 1 }, atan2: { min: 2, max: 2 }, ceil: { min: 1, max: 2 }, floor: { min: 1, max: 2 }, round: { min: 1, max: 2 }, cos: { min: 1, max: 1 }, exp: { min: 1, max: 1 }, log: { min: 1, max: 1 }, min: { min: 0, max: -1 }, constrain: { min: 3, max: 3 }, console: { min: 0, max: -1 }, max: { min: 0, max: -1 }, pow: { min: 2, max: 2 }, random: { min: 0, max: 0 }, sqrt: { min: 1, max: 1 }, sin: { min: 1, max: 1 }, tan: { min: 1, max: 1 }, abs: { min: 1, max: 1 }, isnan: { min: 1, max: 1 }, stdev: { min: 0, max: -1 }, average: { min: 0, max: -1 }, mean: { min: 0, max: -1 }, sum: { min: 0, max: -1 }, variance: { min: 0, max: -1 }, distinct: { min: 0, max: -1 }, first: { min: 1, max: 1 }, top: { min: 2, max: 2 }, boolean: { min: 1, max: 1 }, dictionary: { min: 0, max: -1 }, typeof: { min: 1, max: 1 }, reverse: { min: 1, max: 1 }, replace: { min: 3, max: 4 }, sort: { min: 1, max: 2 }, feature: { min: 1, max: -1 }, haskey: { min: 2, max: 2 }, indexof: { min: 2, max: 2 }, disjoint: { min: 2, max: 2 }, intersects: { min: 2, max: 2 }, touches: { min: 2, max: 2 }, crosses: { min: 2, max: 2 }, within: { min: 2, max: 2 }, contains: { min: 2, max: 2 }, overlaps: { min: 2, max: 2 }, equals: { min: 2, max: 2 }, relate: { min: 3, max: 3 }, intersection: { min: 2, max: 2 }, union: { min: 1, max: 2 }, difference: { min: 2, max: 2 }, symmetricdifference: { min: 2, max: 2 }, clip: { min: 2, max: 2 }, cut: { min: 2, max: 2 }, area: { min: 1, max: 2 }, areageodetic: { min: 1, max: 2 }, length: { min: 1, max: 2 }, lengthgeodetic: { min: 1, max: 2 }, distancegeodetic: { min: 2, max: 3 }, distance: { min: 2, max: 3 }, densify: { min: 2, max: 3 }, densifygeodetic: { min: 2, max: 3 }, generalize: { min: 2, max: 4 }, buffer: { min: 2, max: 3 }, buffergeodetic: { min: 2, max: 3 }, offset: { min: 2, max: 6 }, rotate: { min: 2, max: 3 }, issimple: { min: 1, max: 1 }, simplify: { min: 1, max: 1 }, convexhull: { min: 1, max: 1 }, centroid: { min: 1, max: 1 }, nearestcoordinate: { min: 2, max: 2 }, nearestvertex: { min: 2, max: 2 }, isselfintersecting: { min: 1, max: 1 }, multiparttosinglepart: { min: 1, max: 1 }, setgeometry: { min: 2, max: 2 }, portal: { min: 1, max: 1 }, getuser: { min: 0, max: 2 }, subtypes: { min: 1, max: 1 }, subtypecode: { min: 1, max: 1 }, subtypename: { min: 1, max: 1 }, domain: { min: 2, max: 3 }, convertdirection: { min: 3, max: 3 }, sqltimestamp: { min: 1, max: 3 }, schema: { min: 1, max: 1 }, measuretocoordinate: { min: 2, max: 2 }, distancetocoordinate: { min: 2, max: 2 }, pointtocoordinate: { min: 2, max: 2 } };
var a3 = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() };
var t6 = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() };
for (const k3 of ["pi", "infinity"]) t6.constantDefinitions.set(k3, { type: "constant" }), a3.constantDefinitions.set(k3, { type: "constant" });
t6.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "newline", type: "constant" }] }), a3.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "newline", type: "constant" }] });
for (const k3 in n6) {
  const e3 = n6[k3];
  t6.functionDefinitions.set(k3, { overloads: [{ type: "function", parametersInfo: { min: e3.min, max: e3.max } }] }), a3.functionDefinitions.set(k3, { overloads: [{ type: "function", parametersInfo: { min: e3.min, max: e3.max } }] });
}
var i6 = /* @__PURE__ */ new Set(["attachments", "featureset", "featuresetbyassociation", "featuresetbyid", "featuresetbyname", "featuresetbyportalitem", "featuresetbyrelationshipname", "featuresetbyurl", "filterbysubtypecode", "getfeatureset", "getfeaturesetinfo", "getuser", "knowledgegraphbyportalitem", "querygraph"]);
var m3 = /* @__PURE__ */ new Set(["translatetext"]);
var s5 = /* @__PURE__ */ new Set(["area", "areageodetic", "buffer", "buffergeodetic", "centroid", "clip", "contains", "convexhull", "crosses", "cut", "densify", "densifygeodetic", "difference", "disjoint", "distance", "distancegeodetic", "distancetocoordinate", "equals", "generalize", "intersection", "intersects", "isselfintersecting", "issimple", "length", "length3d", "lengthgeodetic", "measuretocoordinate", "multiparttosinglepart", "nearestcoordinate", "nearestvertex", "offset", "overlaps", "pointtocoordinate", "relate", "rotate", "simplify", "symmetricdifference", "touches", "union", "within"]);
function o3(e3, n8) {
  const i9 = "sync" === n8 ? a3 : t6;
  i9.functionDefinitions.has(e3.name.toLowerCase()) ? i9.functionDefinitions.get(e3.name.toLowerCase())?.overloads.push({ type: "function", parametersInfo: { min: e3.min, max: e3.max } }) : i9.functionDefinitions.set(e3.name.toLowerCase(), { overloads: [{ type: "function", parametersInfo: { min: e3.min, max: e3.max } }] });
}
function r5(e3, n8) {
  if (e3) for (const a5 of e3) c3(a5, n8);
}
function c3(e3, n8) {
  if (e3 && false !== n8(e3)) switch (e3.type) {
    case "ImportDeclaration":
      r5(e3.specifiers, n8), c3(e3.source, n8);
      break;
    case "ExportNamedDeclaration":
      c3(e3.declaration, n8);
      break;
    case "ArrayExpression":
      r5(e3.elements, n8);
      break;
    case "AssignmentExpression":
    case "BinaryExpression":
    case "LogicalExpression":
      c3(e3.left, n8), c3(e3.right, n8);
      break;
    case "BlockStatement":
    case "Program":
      r5(e3.body, n8);
      break;
    case "BreakStatement":
    case "ContinueStatement":
    case "EmptyStatement":
    case "Identifier":
    case "Literal":
      break;
    case "CallExpression":
      c3(e3.callee, n8), r5(e3.arguments, n8);
      break;
    case "ExpressionStatement":
    case "MemberAccessChainExpression":
      c3(e3.expression, n8);
      break;
    case "ForInStatement":
    case "ForOfStatement":
      c3(e3.left, n8), c3(e3.right, n8), c3(e3.body, n8);
      break;
    case "ForStatement":
      c3(e3.init, n8), c3(e3.test, n8), c3(e3.update, n8), c3(e3.body, n8);
      break;
    case "WhileStatement":
      c3(e3.test, n8), c3(e3.body, n8);
      break;
    case "FunctionDeclaration":
      c3(e3.id, n8), r5(e3.params, n8), c3(e3.body, n8);
      break;
    case "IfStatement":
      c3(e3.test, n8), c3(e3.consequent, n8), c3(e3.alternate, n8);
      break;
    case "MemberExpression":
    case "SafeMemberExpression":
      c3(e3.object, n8), c3(e3.property, n8);
      break;
    case "ObjectExpression":
      r5(e3.properties, n8);
      break;
    case "Property":
      c3(e3.key, n8), c3(e3.value, n8);
      break;
    case "ReturnStatement":
    case "UnaryExpression":
    case "UpdateExpression":
      c3(e3.argument, n8);
      break;
    case "VariableDeclaration":
      r5(e3.declarations, n8);
      break;
    case "VariableDeclarator":
      c3(e3.id, n8), c3(e3.init, n8);
      break;
    case "TemplateLiteral":
      r5(e3.expressions, n8), r5(e3.quasis, n8);
  }
}
function x(e3) {
  return "Literal" === e3?.type && "string" == typeof e3.value;
}
function l3(e3, n8) {
  let a5 = false;
  const t8 = n8.toLowerCase();
  return c3(e3, (e4) => !a5 && ("Identifier" === e4.type && e4.name && e4.name.toLowerCase() === t8 && (a5 = true), true)), a5;
}
function u2(n8) {
  const a5 = [];
  return c3(n8, (n9) => ("ImportDeclaration" === n9.type && n9.source && n9.source.value && a5.push({ libname: r4(n9.specifiers[0].local), source: n9.source.value }), true)), a5;
}
function p4(e3, n8) {
  let a5 = false;
  const t8 = n8.toLowerCase();
  return c3(e3, (e4) => !a5 && ("CallExpression" !== e4.type || "Identifier" !== e4.callee.type || !e4.callee.name || e4.callee.name.toLowerCase() !== t8 || (a5 = true, false))), a5;
}
function f3(n8) {
  const a5 = [];
  return c3(n8, (n9) => "MemberExpression" !== n9.type || "Identifier" !== n9.object.type || (("Identifier" === n9.property.type || "Literal" === n9.property.type && "string" == typeof n9.property.value) && a5.push({ varId: r4(n9.object), memberId: r4(n9.property) }), false)), a5;
}
function d2(n8) {
  const a5 = [];
  return c3(n8, (n9) => {
    if ("CallExpression" === n9.type && "Identifier" === n9.callee.type) switch (r4(n9.callee)) {
      case "expects":
        if (n9.arguments.length > 1) {
          const [t8, ...i9] = n9.arguments;
          if ("Identifier" === t8?.type) {
            const n10 = r4(t8);
            for (const e3 of i9) x(e3) && a5.push({ varId: n10, memberNamePattern: e3.value });
          }
        }
        return false;
      case "domainname":
      case "domaincode":
      case "domain":
      case "haskey":
      case "hasvalue":
        if (n9.arguments.length >= 2) {
          const [t8, i9] = n9.arguments;
          "Identifier" === t8?.type && x(i9) && a5.push({ varId: r4(t8), memberNamePattern: i9.value });
        }
        return true;
      case "defaultvalue":
        if (n9.arguments.length > 2) {
          const [t8, i9] = n9.arguments;
          "Identifier" === t8?.type && x(i9) && a5.push({ varId: r4(t8), memberNamePattern: i9.value });
        }
        return true;
      default:
        return true;
    }
    return "MemberExpression" !== n9.type || "Identifier" !== n9.object.type || (n9.computed ? !!x(n9.property) && (a5.push({ varId: r4(n9.object), memberNamePattern: n9.property.value }), false) : (a5.push({ varId: r4(n9.object), memberNamePattern: n9.property.name }), false));
  }), a5;
}
function b2(n8) {
  const a5 = [];
  return c3(n8, (n9) => ("CallExpression" === n9.type && "Identifier" === n9.callee.type && a5.push(r4(n9.callee)), true)), a5;
}
function g2(e3, n8 = []) {
  let a5 = null;
  if (void 0 === e3.usesFeatureSet) {
    null === a5 && (a5 = b2(e3)), e3.usesFeatureSet = false;
    for (let n9 = 0; n9 < a5.length; n9++) i6.has(a5[n9]) && (e3.usesFeatureSet = true, e3.isAsync = true);
    if (false === e3.usesFeatureSet && n8 && n8.length > 0) {
      for (const a6 of n8) if (l3(e3, a6)) {
        e3.usesFeatureSet = true, e3.isAsync = true;
        break;
      }
    }
  }
  if (void 0 === e3.isAsync && (null === a5 && (a5 = b2(e3)), a5.some((e4) => m3.has(e4)) && (e3.isAsync = true)), void 0 === e3.usesModules) {
    e3.usesModules = false;
    u2(e3).length > 0 && (e3.usesModules = true);
  }
  if (void 0 === e3.usesGeometry) {
    e3.usesGeometry = false, null === a5 && (a5 = b2(e3));
    for (let n9 = 0; n9 < a5.length; n9++) s5.has(a5[n9]) && (e3.usesGeometry = true);
  }
}

// node_modules/@arcgis/core/chunks/array.js
function F(F4) {
  function p8(n8, e3, o4) {
    if (n8 instanceof t3) return n8.toArray();
    if (o(n8)) return n8;
    throw new n4(e3, "InvalidParameter", o4);
  }
  function y3(n8, t8) {
    const r7 = n8.length, e3 = Math.floor(r7 / 2);
    return 0 === r7 ? [] : 1 === r7 ? [n8[0]] : v4(y3(n8.slice(0, e3), t8), y3(n8.slice(e3, r7), t8), t8);
  }
  function v4(n8, t8, r7) {
    const e3 = [];
    for (; n8.length > 0 || t8.length > 0; ) if (n8.length > 0 && t8.length > 0) {
      let o4 = r7(n8[0], t8[0]);
      isNaN(o4) && (o4 = 0), o4 <= 0 ? (e3.push(n8[0]), n8 = n8.slice(1)) : (e3.push(t8[0]), t8 = t8.slice(1));
    } else n8.length > 0 ? (e3.push(n8[0]), n8 = n8.slice(1)) : t8.length > 0 && (e3.push(t8[0]), t8 = t8.slice(1));
    return e3;
  }
  async function P7(n8, t8) {
    const r7 = n8.length, e3 = Math.floor(r7 / 2);
    if (0 === r7) return [];
    if (1 === r7) return [n8[0]];
    const o4 = [await P7(n8.slice(0, e3), t8), await P7(n8.slice(e3, r7), t8)];
    return I5(o4[0], o4[1], t8, []);
  }
  async function I5(n8, t8, r7, e3) {
    const o4 = e3;
    if (n8.length > 0 || t8.length > 0) {
      if (n8.length > 0 && t8.length > 0) {
        let i9 = await r7(n8[0], t8[0]);
        return isNaN(i9) && (i9 = 1), i9 <= 0 ? (o4.push(n8[0]), n8 = n8.slice(1)) : (o4.push(t8[0]), t8 = t8.slice(1)), I5(n8, t8, r7, e3);
      }
      return n8.length > 0 ? (o4.push(n8[0]), I5(n8 = n8.slice(1), t8, r7, e3)) : (o4.push(t8[0]), I5(n8, t8 = t8.slice(1), r7, e3));
    }
    return e3;
  }
  function N2(n8, r7, o4, u4) {
    oe(o4, 1, 2, n8, r7);
    let s8 = o4[0];
    if (te(s8) && (s8 = s8.toArray()), false === o(s8)) throw new n4(n8, "InvalidParameter", r7);
    if (o4.length > 1) {
      if (false === L(o4[1])) throw new n4(n8, "InvalidParameter", r7);
      let e3 = s8;
      const i9 = o4[1].createFunction(n8);
      return u4 ? P7(e3, i9) : (e3 = y3(e3, (n9, t8) => i9(n9, t8)), e3);
    }
    let l6 = s8;
    if (0 === l6.length) return [];
    const h3 = {};
    for (let t8 = 0; t8 < l6.length; t8++) {
      const n9 = E(l6[t8]);
      "" !== n9 && (h3[n9] = true);
    }
    if (true === h3.Array || true === h3.Dictionary || true === h3.Feature || true === h3.Voxel || true === h3.Pixel || true === h3.Point || true === h3.Polygon || true === h3.Polyline || true === h3.Multipoint || true === h3.Extent || true === h3.Function) return l6.slice();
    let g6 = 0, m6 = "";
    for (const t8 in h3) g6++, m6 = t8;
    return l6 = g6 > 1 || "String" === m6 ? y3(l6, (n9, t8) => {
      if (null == n9 || n9 === P2) return null == t8 || t8 === P2 ? 0 : 1;
      if (null == t8 || t8 === P2) return -1;
      const r8 = ge(n9), e3 = ge(t8);
      return r8 < e3 ? -1 : r8 === e3 ? 0 : 1;
    }) : "Number" === m6 ? y3(l6, (n9, t8) => n9 - t8) : "Boolean" === m6 ? y3(l6, (n9, t8) => n9 === t8 ? 0 : t8 ? -1 : 1) : "Date" === m6 ? y3(l6, (n9, t8) => n9.toNumber() - t8.toNumber()) : l6.slice(), l6;
  }
  F4.functions.array = function(r7, a5) {
    return F4.standardFunction(r7, a5, (s8, c5, l6) => {
      if (oe(l6, 0, 2, r7, a5), 0 === l6.length) return [];
      if (1 === l6.length && null === l6[0]) return [];
      if (o(l6[0])) {
        if (2 === l6.length && false === t(l6[1])) throw new n4(r7, "InvalidParameter", a5);
        return true === z2(l6[1], false) ? f2(l6[0]) : l6[0].slice();
      }
      if (te(l6[0])) {
        if (2 === l6.length && false === t(l6[1])) throw new n4(r7, "InvalidParameter", a5);
        return true === z2(l6[1], false) ? f2(l6[0]) : l6[0].toArray().slice();
      }
      const f7 = Se(l6[0]);
      if (isNaN(f7) || false === r(f7)) throw new n4(r7, "InvalidParameter", a5);
      const d5 = z2(l6[1], null), h3 = new Array(f7);
      return h3.fill(d5), h3;
    });
  }, F4.functions.front = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, u4, a5) => {
      if (oe(a5, 1, 1, n8, r7), te(a5[0])) {
        if (a5[0].length() <= 0) throw new n4(n8, "OutOfBounds", r7);
        return a5[0].get(0);
      }
      if (o(a5[0])) {
        if (a5[0].length <= 0) throw new n4(n8, "OutOfBounds", r7);
        return a5[0][0];
      }
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.back = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, u4, a5) => {
      if (oe(a5, 1, 1, n8, r7), te(a5[0])) {
        if (a5[0].length() <= 0) throw new n4(n8, "OutOfBounds", r7);
        return a5[0].get(a5[0].length() - 1);
      }
      if (o(a5[0])) {
        if (a5[0].length <= 0) throw new n4(n8, "OutOfBounds", r7);
        return a5[0][a5[0].length - 1];
      }
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.push = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, i9, u4) => {
      if (oe(u4, 1, 2, n8, r7), o(u4[0])) return u4[0][u4[0].length] = u4[1], u4[0].length;
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.pop = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, i9, u4) => {
      if (oe(u4, 1, 1, n8, r7), o(u4[0])) {
        if (u4[0].length <= 0) throw new n4(n8, "OutOfBounds", r7);
        const e3 = u4[0][u4[0].length - 1];
        return u4[0].length = u4[0].length - 1, e3;
      }
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.erase = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, i9, l6) => {
      if (oe(l6, 2, 2, n8, r7), o(l6[0])) {
        let e3 = Se(l6[1]);
        if (isNaN(e3) || false === r(e3)) throw new n4(n8, "InvalidParameter", r7);
        const o5 = l6[0];
        if (o5.length <= 0) throw new n4(n8, "OutOfBounds", r7);
        if (e3 < 0 && (e3 = o5.length + e3), e3 < 0) throw new n4(n8, "OutOfBounds", r7);
        if (e3 >= o5.length) throw new n4(n8, "OutOfBounds", r7);
        return o5.splice(e3, 1), P2;
      }
      if (K(l6[0])) return l6[0].eraseField(ge(l6[1])), P2;
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.insert = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, i9, l6) => {
      if (oe(l6, 3, 3, n8, r7), o(l6[0])) {
        const e3 = Se(l6[1]);
        if (isNaN(e3) || false === r(e3)) throw new n4(n8, "InvalidParameter", r7);
        const o5 = l6[2], i10 = l6[0];
        if (e3 > i10.length) throw new n4(n8, "OutOfBounds", r7);
        if (e3 < 0 && e3 < -1 * i10.length) throw new n4(n8, "OutOfBounds", r7);
        return e3 === i10.length ? (i10[e3] = o5, P2) : (i10.splice(e3, 0, o5), P2);
      }
      if (K(l6[0])) return l6[0].setField(ge(l6[1]), l6[2]), P2;
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.getkeys = function(n8, r7) {
    return F4.standardFunction(n8, r7, (n9, r8, o4) => {
      if (oe(o4, 1, 1, n9, r8), null == o4[0]) return [];
      if (K(o4[0])) return o4[0].keys();
      throw new n4(n9, "InvalidParameter", r8);
    });
  }, F4.functions.getvalues = function(n8, r7) {
    return F4.standardFunction(n8, r7, (n9, r8, o4) => {
      if (oe(o4, 1, 1, n9, r8), null == o4[0]) return [];
      if (K(o4[0])) return o4[0].values();
      throw new n4(n9, "InvalidParameter", r8);
    });
  }, F4.functions.resize = function(n8, r7) {
    return F4.standardFunction(n8, r7, (i9, s8, c5) => {
      if (oe(c5, 2, 3, n8, r7), o(c5[0])) {
        const e3 = Se(c5[1]);
        if (isNaN(e3) || false === r(e3)) throw new n4(n8, "InvalidParameter", r7);
        if (e3 < 0) throw new n4(n8, "InvalidParameter", r7);
        const i10 = z2(c5[2], null), s9 = c5[0];
        if (s9.length >= e3) return s9.length = e3, P2;
        const l6 = s9.length;
        s9.length = e3;
        for (let n9 = l6; n9 < s9.length; n9++) s9[n9] = i10;
        return P2;
      }
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.includes = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, u4, a5) => {
      if (oe(a5, 2, 2, n8, r7), o(a5[0])) {
        const n9 = a5[1];
        return !!a5[0].some((t8) => ye(t8, n9));
      }
      if (te(a5[0])) {
        const n9 = a5[1];
        return !!a5[0].toArray().some((t8) => ye(t8, n9));
      }
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.slice = function(n8, r7) {
    return F4.standardFunction(n8, r7, (a5, s8, c5) => {
      if (oe(c5, 1, 3, n8, r7), o(c5[0])) {
        const e3 = Se(z2(c5[1], 0)), i9 = Se(z2(c5[2], c5[0].length));
        if (isNaN(e3) || false === r(e3)) throw new n4(n8, "InvalidParameter", r7);
        if (isNaN(i9) || false === r(i9)) throw new n4(n8, "InvalidParameter", r7);
        return c5[0].slice(e3, i9);
      }
      if (te(c5[0])) {
        const e3 = c5[0], i9 = Se(z2(c5[1], 0)), a6 = Se(z2(c5[2], e3.length()));
        if (isNaN(i9) || false === r(i9)) throw new n4(n8, "InvalidParameter", r7);
        if (isNaN(a6) || false === r(a6)) throw new n4(n8, "InvalidParameter", r7);
        return e3.toArray().slice(i9, a6);
      }
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.splice = function(n8, t8) {
    return F4.standardFunction(n8, t8, (n9, t9, r7) => {
      const e3 = [];
      for (let o4 = 0; o4 < r7.length; o4++) o(r7[o4]) ? e3.push(...r7[o4]) : te(r7[o4]) ? e3.push(...r7[o4].toArray()) : e3.push(r7[o4]);
      return e3;
    });
  }, F4.functions.top = function(n8, r7) {
    return F4.standardFunction(n8, r7, (o4, a5, s8) => {
      if (oe(s8, 2, 2, n8, r7), o(s8[0])) return Se(s8[1]) >= s8[0].length ? s8[0].slice() : s8[0].slice(0, Se(s8[1]));
      if (te(s8[0])) return Se(s8[1]) >= s8[0].length() ? s8[0].slice() : s8[0].slice(0, Se(s8[1]));
      throw new n4(n8, "InvalidParameter", r7);
    });
  }, F4.functions.first = function(n8, t8) {
    return F4.standardFunction(n8, t8, (r7, o4, u4) => (oe(u4, 1, 1, n8, t8), o(u4[0]) ? 0 === u4[0].length ? null : u4[0][0] : te(u4[0]) ? 0 === u4[0].length() ? null : u4[0].get(0) : null));
  }, "sync" === F4.mode && (F4.functions.sort = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, e3) => N2(n8, r7, e3, false));
  }, F4.functions.any = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      for (const n9 of u4) {
        const t10 = i9(n9);
        if (t(t10) && true === t10) return true;
      }
      return false;
    });
  }, F4.functions.all = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      for (const n9 of u4) {
        if (true !== i9(n9)) return false;
      }
      return true;
    });
  }, F4.functions.none = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      for (const n9 of u4) {
        if (true === i9(n9)) return false;
      }
      return true;
    });
  }, F4.functions.reduce = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, o4) => {
      oe(o4, 2, 3, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      return 2 === o4.length ? 0 === u4.length ? null : u4.reduce((n9, t10) => {
        const r8 = i9(n9, t10);
        return n9 = void 0 !== r8 && r8 !== P2 ? r8 : null;
      }) : u4.reduce((n9, t10) => {
        const r8 = i9(n9, t10);
        return n9 = void 0 !== r8 && r8 !== P2 ? r8 : null;
      }, o4[2]);
    });
  }, F4.functions.map = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7), s8 = [];
      for (const n9 of u4) {
        const t10 = i9(n9);
        void 0 !== t10 && t10 !== P2 ? s8.push(t10) : s8.push(null);
      }
      return s8;
    });
  }, F4.functions.filter = function(n8, t8) {
    return F4.standardFunction(n8, t8, (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7), a5 = [];
      for (const n9 of u4) {
        true === i9(n9) && a5.push(n9);
      }
      return a5;
    });
  }), "async" === F4.mode && (F4.functions.sort = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, e3) => N2(n8, r7, e3, true));
  }, F4.functions.any = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      for (const n9 of u4) {
        const t10 = await i9(n9);
        let r8 = null;
        if (r8 = C(r8) ? await t10 : t10, t(r8) && true === r8) return true;
      }
      return false;
    });
  }, F4.functions.all = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      for (const n9 of u4) {
        const t10 = await i9(n9);
        let r8 = null;
        if (r8 = C(r8) ? await t10 : t10, true !== r8) return false;
      }
      return true;
    });
  }, F4.functions.none = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7);
      for (const n9 of u4) {
        const t10 = await i9(n9);
        let r8 = null;
        if (r8 = C(r8) ? await t10 : t10, true === r8) return false;
      }
      return true;
    });
  }, F4.functions.filter = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7), a5 = [];
      for (const n9 of u4) {
        const t10 = await i9(n9);
        let r8 = null;
        r8 = C(r8) ? await t10 : t10, true === r8 && a5.push(n9);
      }
      return a5;
    });
  }, F4.functions.reduce = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, i9) => {
      oe(i9, 2, 3, n8, r7);
      const u4 = i9[1].createFunction(n8), s8 = p8(i9[0], n8, r7);
      let c5;
      if (i9.length > 2) {
        const n9 = z2(i9[2], null);
        c5 = s8.reduce(async (n10, t10) => {
          let r8 = await n10;
          return void 0 !== r8 && r8 !== P2 || (r8 = null), u4(r8, t10);
        }, Promise.resolve(n9));
      } else {
        if (0 === s8.length) return null;
        c5 = s8.reduce(async (n9, t10, r8) => {
          if (r8 <= 1) return u4(n9, t10);
          let e3 = await n9;
          return void 0 !== e3 && e3 !== P2 || (e3 = null), u4(e3, t10);
        });
      }
      return c5.then((n9) => void 0 !== n9 && n9 !== P2 ? n9 : null);
    });
  }, F4.functions.map = function(n8, t8) {
    return F4.standardFunctionAsync(n8, t8, async (t9, r7, o4) => {
      oe(o4, 2, 2, n8, r7);
      const i9 = o4[1].createFunction(n8), u4 = p8(o4[0], n8, r7), s8 = [];
      for (const n9 of u4) {
        const t10 = await i9(n9);
        let r8 = null;
        r8 = C(r8) ? await t10 : t10, void 0 !== r8 && r8 !== P2 ? s8.push(r8) : s8.push(null);
      }
      return s8;
    });
  });
}
var p5 = Object.freeze(Object.defineProperty({ __proto__: null, registerFunctions: F }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/arcade/functions/date.js
function D2(n8, r7, e3) {
  return n8 + (k(e3) ? S2 : P4)[r7];
}
function k(n8) {
  return n8 % 4 == 0 && (n8 % 100 != 0 || n8 % 400 == 0);
}
var P4 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var S2 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function p6(n8) {
  return null === n8 ? n8 : false === n8.isValid ? null : n8;
}
function Z2(n8, r7) {
  switch (t2(n8)) {
    case "":
    case "default":
      return Ke(r7);
    case "z":
      return "UTC";
    default:
      return n8;
  }
}
function C2(n8, r7) {
  return re(n8) ? n8.toArcadeDate() : Ze(n8, Ke(r7));
}
var O = new o2(["days", "months", "minutes", "seconds", "hours", "years", "milliseconds"], [["day", "days"], ["d", "days"], ["month", "months"], ["minute", "minutes"], ["m", "minutes"], ["second", "seconds"], ["s", "seconds"], ["hour", "hours"], ["h", "hours"], ["year", "years"], ["y", "years"], ["millisecond", "milliseconds"], ["ms", "milliseconds"]]);
function U2(n8) {
  return "M" === n8 ? "months" : O.lookup(ge(n8)) ?? "milliseconds";
}
function j2(e3, t8) {
  e3.today = function(r7, e4) {
    return t8(r7, e4, (t9, o4, i9) => {
      oe(i9, 0, 0, r7, e4);
      const a5 = /* @__PURE__ */ new Date();
      return a5.setHours(0, 0, 0, 0), m.dateJSAndZoneToArcadeDate(a5, Ke(r7));
    });
  }, e3.time = function(r7, e4) {
    return t8(r7, e4, (t9, f7, m6) => {
      switch (oe(m6, 0, 4, r7, e4), m6.length) {
        case 0: {
          const e5 = m.nowToArcadeDate(Ke(r7));
          return new r3(e5.hour, e5.minute, e5.second, e5.millisecond);
        }
        case 1: {
          if (ie(m6[0])) return m6[0].clone();
          if (ne(m6[0])) return new r3(m6[0].hour, m6[0].minute, m6[0].second, m6[0].millisecond);
          if (re(m6[0])) return new r3(0, 0, 0, 0);
          if (e(m6[0])) return r3.fromString(m6[0]);
          const n8 = Se(m6[0]);
          return false === isNaN(n8) ? r3.fromMilliseconds(n8) : null;
        }
        case 2:
          return e(m6[0]) && e(m6[1]) ? r3.fromString(m6[0], m6[1]) : r3.fromParts(Se(m6[0]), Se(m6[1]), 0, 0);
        case 3:
          return r3.fromParts(Se(m6[0]), Se(m6[1]), Se(m6[2]), 0);
        case 4:
          return r3.fromParts(Se(m6[0]), Se(m6[1]), Se(m6[2]), Se(m6[3]));
      }
      throw new n4(r7, "InvalidParameter", e4);
    });
  }, e3.dateonly = function(r7, e4) {
    return t8(r7, e4, (t9, o4, a5) => {
      if (oe(a5, 0, 3, r7, e4), 3 === a5.length) return i2.fromParts(Se(a5[0]), Se(a5[1]) + 1, Se(a5[2]));
      if (2 === a5.length) {
        const n8 = ge(a5[1]);
        return "" === n8 ? null : "X" === n8 ? i2.fromSeconds(Se(a5[0])) : "x" === n8 ? i2.fromMilliseconds(Se(a5[0])) : i2.fromString(ge(a5[0]), n8);
      }
      if (1 === a5.length) {
        if (e(a5[0])) {
          if ("" === a5[0].replaceAll(/^\s+|\s+$/g, "")) return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(a5[0])) return i2.fromString(a5[0] + "-01-01");
        }
        if (re(a5[0])) return a5[0].clone();
        if (ne(a5[0])) return i2.fromParts(a5[0].year, a5[0].monthJS + 1, a5[0].day);
        const n8 = Se(a5[0]);
        return false === isNaN(n8) ? i2.fromMilliseconds(n8) : e(a5[0]) ? i2.fromString(a5[0]) : null;
      }
      if (0 === a5.length) {
        const e5 = m.nowToArcadeDate(Ke(r7));
        return false === e5.isValid ? null : i2.fromParts(e5.year, e5.monthJS + 1, e5.day);
      }
      return null;
    });
  }, e3.changetimezone = function(e4, i9) {
    return t8(e4, i9, (t9, a5, s8) => {
      if (oe(s8, 2, 2, e4, i9), null === s8[0]) return null;
      if (re(s8[0])) throw new n4(e4, "CannotChangeTimeZoneDateOnly", i9);
      if (re(s8[0])) throw new n4(e4, "CannotChangeTimeZoneTime", i9);
      const d5 = Ze(s8[0], Ke(e4));
      if (null === d5) throw new n4(e4, "InvalidParameter", i9);
      const h3 = h(Z2(ge(s8[1]), e4), false);
      if (null === h3) return null;
      const N2 = m.arcadeDateAndZoneToArcadeDate(d5, h3);
      return false === N2.isValid ? null : N2;
    });
  }, e3.timezone = function(r7, e4) {
    return t8(r7, e4, (t9, o4, i9) => {
      if (oe(i9, 1, 2, r7, e4), ie(i9[0])) return "Unknown";
      if (re(i9[0])) return "Unknown";
      const s8 = Ze(i9[0], Ke(r7));
      if (null === s8) return null;
      const f7 = s8.timeZone;
      return "system" === f7 ? m.systemTimeZoneCanonicalName : "utc" === f7.toLowerCase() ? "UTC" : "unknown" === f7.toLowerCase() ? "Unknown" : f7;
    });
  }, e3.timezoneoffset = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? null : 60 * i9.timeZoneOffset * 1e3;
    });
  }, e3.now = function(r7, e4) {
    return t8(r7, e4, (t9, o4, i9) => {
      oe(i9, 0, 0, r7, e4);
      const a5 = m.nowToArcadeDate(Ke(r7));
      return false === a5.isValid ? null : a5;
    });
  }, e3.timestamp = function(r7, e4) {
    return t8(r7, e4, (t9, o4, l6) => {
      oe(l6, 0, 0, r7, e4);
      const i9 = m.nowUTCToArcadeDate();
      return false === i9.isValid ? null : i9;
    });
  }, e3.toutc = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? null : i9.toUTC();
    });
  }, e3.tolocal = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? null : i9.toLocal();
    });
  }, e3.day = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.day;
    });
  }, e3.month = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.monthJS;
    });
  }, e3.year = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.year;
    });
  }, e3.hour = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      if (oe(o4, 1, 1, n8, r7), ie(o4[0])) return o4[0].hour;
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.hour;
    });
  }, e3.second = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      if (oe(o4, 1, 1, n8, r7), ie(o4[0])) return o4[0].second;
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.second;
    });
  }, e3.millisecond = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      if (oe(o4, 1, 1, n8, r7), ie(o4[0])) return o4[0].millisecond;
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.millisecond;
    });
  }, e3.minute = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      if (oe(o4, 1, 1, n8, r7), ie(o4[0])) return o4[0].minute;
      const i9 = Ze(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.minute;
    });
  }, e3.week = function(n8, r7) {
    return t8(n8, r7, (e4, t9, a5) => {
      oe(a5, 1, 2, n8, r7);
      const s8 = C2(a5[0], Ke(n8));
      if (null === s8) return NaN;
      const c5 = Se(z2(a5[1], 0));
      if (c5 < 0 || c5 > 6) throw new n4(n8, "InvalidParameter", r7);
      const f7 = s8.day, m6 = s8.monthJS, h3 = s8.year, N2 = s8.dayOfWeekJS, y3 = D2(f7, m6, h3) - 1, w = Math.floor(y3 / 7);
      return N2 - c5 + (N2 - c5 < 0 ? 7 : 0) < y3 - 7 * w ? w + 1 : w;
    });
  }, e3.weekday = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.dayOfWeekJS;
    });
  }, e3.isoweekday = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.dayOfWeekISO;
    });
  }, e3.isomonth = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.monthISO;
    });
  }, e3.isoweek = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.weekISO;
    });
  }, e3.isoyear = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 1, 1, n8, r7);
      const i9 = C2(o4[0], Ke(n8));
      return null === i9 ? NaN : i9.yearISO;
    });
  }, e3.date = function(e4, o4) {
    return t8(e4, o4, (t9, s8, d5) => {
      if (oe(d5, 0, 8, e4, o4), 3 === d5.length) {
        if (re(d5[0]) && ie(d5[1]) && e(d5[2])) {
          const t10 = h(Z2(ge(d5[2]) ?? "unknown", e4), false);
          return null === t10 ? null : p6(m.fromParts(d5[0].year, d5[0].month, d5[0].day, d5[1].hour, d5[1].minute, d5[1].second, d5[1].millisecond, t10));
        }
        return p6(m.fromParts(Se(d5[0]), Se(d5[1]) + 1, Se(d5[2]), 0, 0, 0, 0, Ke(e4)));
      }
      if (4 === d5.length) return p6(m.fromParts(Se(d5[0]), Se(d5[1]) + 1, Se(d5[2]), Se(d5[3]), 0, 0, 0, Ke(e4)));
      if (5 === d5.length) return p6(m.fromParts(Se(d5[0]), Se(d5[1]) + 1, Se(d5[2]), Se(d5[3]), Se(d5[4]), 0, 0, Ke(e4)));
      if (6 === d5.length) return p6(m.fromParts(Se(d5[0]), Se(d5[1]) + 1, Se(d5[2]), Se(d5[3]), Se(d5[4]), Se(d5[5]), 0, Ke(e4)));
      if (7 === d5.length) return p6(m.fromParts(Se(d5[0]), Se(d5[1]) + 1, Se(d5[2]), Se(d5[3]), Se(d5[4]), Se(d5[5]), Se(d5[6]), Ke(e4)));
      if (8 === d5.length) {
        const t10 = h(Z2(ge(d5[7]) ?? "unknown", e4), false);
        return null === t10 ? null : p6(m.fromParts(Se(d5[0]), Se(d5[1]) + 1, Se(d5[2]), Se(d5[3]), Se(d5[4]), Se(d5[5]), Se(d5[6]), t10));
      }
      if (2 === d5.length) {
        if (re(d5[0]) && e(d5[1])) {
          const t11 = h(Z2(ge(d5[1]) ?? "unknown", e4), false);
          return null === t11 ? null : p6(m.fromParts(d5[0].year, d5[0].month, d5[0].day, 0, 0, 0, 0, t11));
        }
        if (re(d5[0]) && ie(d5[1])) return p6(m.fromParts(d5[0].year, d5[0].month, d5[0].day, d5[1].hour, d5[1].minute, d5[1].second, d5[1].millisecond, "unknown"));
        let t10, o5 = ge(d5[1]);
        return "" === o5 ? null : (o5 = ce(o5, true), t10 = "X" === o5 ? DateTime.fromSeconds(Se(d5[0])) : "x" === o5 ? DateTime.fromMillis(Se(d5[0])) : DateTime.fromFormat(ge(d5[0]), o5, { locale: i(), numberingSystem: "latn" }), t10.isValid ? m.dateTimeToArcadeDate(t10) : null);
      }
      if (1 === d5.length) {
        if (re(d5[0])) return p6(m.fromParts(d5[0].year, d5[0].month, d5[0].day, 0, 0, 0, 0, "unknown"));
        if (e(d5[0])) {
          if ("" === d5[0].replaceAll(/^\s+|\s+$/g, "")) return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(d5[0])) return Ze(d5[0] + "-01-01", Ke(e4));
        }
        const r7 = Se(d5[0]);
        if (false === isNaN(r7)) {
          const t10 = DateTime.fromMillis(r7);
          return t10.isValid ? m.dateTimeAndZoneToArcadeDate(t10, Ke(e4)) : null;
        }
        return Ze(d5[0], Ke(e4));
      }
      return 0 === d5.length ? m.nowToArcadeDate(Ke(e4)) : null;
    });
  }, e3.datediff = function(r7, e4) {
    return t8(r7, e4, (t9, o4, i9) => {
      if (oe(i9, 2, 4, r7, e4), ie(i9[0])) return ie(i9[1]) ? i9[0].difference(i9[1], ge(i9[2])) : NaN;
      if (ie(i9[1])) return NaN;
      if (re(i9[0])) return re(i9[1]) ? i9[0].difference(i9[1], ge(i9[2])) : NaN;
      if (re(i9[1])) return NaN;
      let s8 = Ze(i9[0], Ke(r7)), h3 = Ze(i9[1], Ke(r7));
      if (null === s8 || null === h3) return NaN;
      let N2 = z2(i9[3], "");
      return "" !== N2 && null !== N2 ? (N2 = Z2(ge(N2), r7), s8 = m.arcadeDateAndZoneToArcadeDate(s8, N2), h3 = m.arcadeDateAndZoneToArcadeDate(h3, N2)) : s8.timeZone !== h3.timeZone && (s8.isUnknownTimeZone ? s8 = m.arcadeDateAndZoneToArcadeDate(s8, h3.timeZone) : h3 = (h3.isUnknownTimeZone, m.arcadeDateAndZoneToArcadeDate(h3, s8.timeZone))), s8.diff(h3, U2(i9[2]));
    });
  }, e3.dateadd = function(n8, r7) {
    return t8(n8, r7, (e4, t9, o4) => {
      oe(o4, 2, 3, n8, r7);
      let s8 = Se(o4[1]);
      if (isNaN(s8) || s8 === 1 / 0 || s8 === -1 / 0) return ie(o4[0]) || re(o4[0]) ? o4[0].clone() : Ze(o4[0], Ke(n8));
      const f7 = U2(o4[2]);
      if ("days" !== f7 && "months" !== f7 || (s8 = re(o4[0]) ? s8 : se(s8)), ie(o4[0])) return o4[0].plus(f7, s8);
      if (re(o4[0])) return o4[0].plus(f7, s8);
      const d5 = Ze(o4[0], Ke(n8));
      return null === d5 ? null : d5.plus({ [f7]: s8 });
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/feature.js
function I3(e3) {
  const r7 = e3?.fullSchema();
  return r7?.datesInUnknownTimezone ? "unknown" : r7?.dateFieldsTimeZone || "UTC";
}
function F2(e3) {
  const r7 = e3.fullSchema()?.fieldsIndex;
  return null == r7 && e3 instanceof I2 ? e3.fieldsIndex : r7;
}
var g3 = { getAttributeSQL(e3, r7) {
  const t8 = e3.field(r7);
  if (null == t8) return t8;
  if (ne(t8)) {
    const n8 = t8.toDateTime(), o4 = F2(e3)?.get(r7)?.type;
    return "esriFieldTypeTimestampOffset" === o4 || "timestamp-offset" === o4 ? r2.fromDateTime(n8) : n8;
  }
  return t8;
} };
function P5(o4, w, P7) {
  o4.domain = function(e3, r7) {
    return w(e3, r7, (o5, m6, c5) => {
      if (oe(c5, 2, 3, e3, r7), H(c5[0])) {
        const r8 = He(c5[0], ge(c5[1]), void 0 === c5[2] ? void 0 : c5[2]);
        return r8 && r8.domain ? "coded-value" === r8.domain.type || "codedValue" === r8.domain.type ? p2.convertObjectToArcadeDictionary({ type: "codedValue", name: r8.domain.name, dataType: P[r8.field.type], codedValues: r8.domain.codedValues.map((e4) => ({ name: e4.name, code: e4.code })) }, Ke(e3)) : p2.convertObjectToArcadeDictionary({ type: "range", name: r8.domain.name, dataType: P[r8.field.type], min: r8.domain.minValue, max: r8.domain.maxValue }, Ke(e3)) : null;
      }
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.domaincode = function(e3, r7) {
    return w(e3, r7, (t8, o5, s8) => {
      if (oe(s8, 2, 4, e3, r7), H(s8[0])) return Be(s8[0], ge(s8[1]), s8[2], void 0 === s8[3] ? void 0 : s8[3]);
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.domainname = function(e3, r7) {
    return w(e3, r7, (t8, o5, s8) => {
      if (oe(s8, 2, 4, e3, r7), H(s8[0])) return $e(s8[0], ge(s8[1]), s8[2], void 0 === s8[3] ? void 0 : s8[3]);
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.expects = function(e3, r7) {
    return w(e3, r7, (t8, o5, i9) => {
      if (i9.length < 1) throw new n4(e3, "WrongNumberOfParameters", r7);
      return P2;
    });
  }, o4.featureinfilter = function(e3, r7) {
    return w(e3, r7, (e4, r8, t8) => {
      oe(t8, 2, 2, e4, r8);
      const [o5, s8] = t8;
      if (null == o5) return false;
      if ("" === s8 || null == s8) return true;
      if (!H(o5) || !e(s8)) throw new n4(e4, "InvalidParameter", r8);
      const u4 = M.create(s8, { fieldsIndex: F2(o5), timeZone: I3(o5) }), d5 = u4.getVariables();
      for (const n8 of d5) u4.parameters[n8] = P7(e4, { name: n8 });
      return u4.testFeature(o5, g3);
    });
  }, o4.gdbversion = function(e3, r7) {
    return w(e3, r7, (t8, o5, s8) => {
      if (oe(s8, 1, 1, e3, r7), H(s8[0])) return s8[0].gdbVersion();
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.schema = function(e3, r7) {
    return w(e3, r7, (o5, i9, s8) => {
      if (H(s8[0])) {
        const r8 = Qe(s8[0]);
        return r8 ? p2.convertObjectToArcadeDictionary(r8, Ke(e3)) : null;
      }
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.subtypecode = function(e3, r7) {
    return w(e3, r7, (t8, o5, s8) => {
      if (oe(s8, 1, 1, e3, r7), H(s8[0])) {
        const e4 = We(s8[0]);
        if (!e4) return null;
        if (e4.subtypeField && s8[0].hasField(e4.subtypeField)) {
          const r8 = s8[0].field(e4.subtypeField);
          for (const t9 of e4.subtypes) if (t9.code === r8) return t9.code;
          return null;
        }
        return null;
      }
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.subtypename = function(e3, r7) {
    return w(e3, r7, (t8, o5, s8) => {
      if (oe(s8, 1, 1, e3, r7), H(s8[0])) {
        const e4 = We(s8[0]);
        if (!e4) return "";
        if (e4.subtypeField && s8[0].hasField(e4.subtypeField)) {
          const r8 = s8[0].field(e4.subtypeField);
          for (const t9 of e4.subtypes) if (t9.code === r8) return t9.name;
          return "";
        }
        return "";
      }
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4.subtypes = function(e3, r7) {
    return w(e3, r7, (o5, s8, u4) => {
      if (oe(u4, 1, 1, e3, r7), H(u4[0])) {
        const r8 = We(u4[0]);
        return r8 ? p2.convertObjectToArcadeDictionary(r8, Ke(e3)) : null;
      }
      throw new n4(e3, "InvalidParameter", r7);
    });
  }, o4[r4("TimeReceived")] = function(r7, t8) {
    return w(r7, t8, (r8, t9, o5) => {
      if (oe(o5, 1, 1, r8, t9), H(o5[0])) {
        if (o5[0].hasField(i4)) {
          const t10 = o5[0].field(i4);
          return n3(t10) ? m.epochToArcadeDate(t10, r8.timeZone ?? "system") : ne(t10) ? t10 : null;
        }
        return null;
      }
      throw new n4(r8, "InvalidParameter", t9);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/geometry.js
function _2(_4, E4) {
  _4.ringisclockwise = function(e3, t8) {
    return E4(e3, t8, (n8, a5, s8) => {
      oe(s8, 1, 1, e3, t8);
      let f7 = [];
      if (null === s8[0]) return false;
      if (o(s8[0])) for (const i9 of s8[0]) {
        if (!(i9 instanceof _)) throw new n4(e3, "InvalidParameter", t8);
        f7.push(i9.hasZ ? i9.hasM ? [i9.x, i9.y, i9.z, i9.m] : [i9.x, i9.y, i9.z] : [i9.x, i9.y]);
      }
      else if (s8[0] instanceof i3) f7 = s8[0]._elements;
      else {
        if (!te(s8[0])) throw new n4(e3, "InvalidParameter", t8);
        for (const n9 of s8[0].toArray()) {
          if (!(n9 instanceof _)) throw new n4(e3, "InvalidParameter", t8);
          f7.push(n9.hasZ ? n9.hasM ? [n9.x, n9.y, n9.z, n9.m] : [n9.x, n9.y, n9.z] : [n9.x, n9.y]);
        }
      }
      return !(f7.length < 3) && g(f7);
    });
  }, _4.polygon = function(e3, t8) {
    return E4(e3, t8, (a5, i9, o4) => {
      let c5;
      if (oe(o4, 1, 1, e3, t8), o4[0] instanceof p2) {
        const t9 = je(a(o4[0], e3.spatialReference, "polygon"), e3.spatialReference);
        if (null == t9) return null;
        c5 = t9;
      } else if (o4[0] instanceof j) c5 = u(o4[0].toJSON());
      else {
        const t9 = JSON.parse(o4[0]);
        t9 && !t9.spatialReference && (t9.spatialReference = e3.spatialReference), c5 = je(new j(t9), e3.spatialReference);
      }
      if (null !== c5 && false === c5.spatialReference.equals(e3.spatialReference)) throw new n4(e3, "WrongSpatialReference", t8);
      return De(c5);
    });
  }, _4.polyline = function(e3, t8) {
    return E4(e3, t8, (a5, i9, o4) => {
      let c5;
      if (oe(o4, 1, 1, e3, t8), o4[0] instanceof p2) {
        const t9 = je(a(o4[0], e3.spatialReference, "polyline"), e3.spatialReference);
        if (null == t9) return null;
        c5 = t9;
      } else if (o4[0] instanceof y) c5 = u(o4[0].toJSON());
      else {
        const t9 = JSON.parse(o4[0]);
        t9 && !t9.spatialReference && (t9.spatialReference = e3.spatialReference), c5 = je(new y(t9), e3.spatialReference);
      }
      if (null !== c5 && false === c5.spatialReference.equals(e3.spatialReference)) throw new n4(e3, "WrongSpatialReference", t8);
      return De(c5);
    });
  }, _4.point = function(e3, t8) {
    return E4(e3, t8, (a5, i9, o4) => {
      let c5;
      if (oe(o4, 1, 1, e3, t8), o4[0] instanceof p2) {
        const t9 = je(a(o4[0], e3.spatialReference, "point"), e3.spatialReference);
        if (null == t9) return null;
        c5 = t9;
      } else if (o4[0] instanceof _) c5 = u(o4[0].toJSON());
      else {
        const t9 = JSON.parse(o4[0]);
        t9 && !t9.spatialReference && (t9.spatialReference = e3.spatialReference), c5 = je(new _(t9), e3.spatialReference);
      }
      if (null !== c5 && false === c5.spatialReference.equals(e3.spatialReference)) throw new n4(e3, "WrongSpatialReference", t8);
      return De(c5);
    });
  }, _4.multipoint = function(e3, t8) {
    return E4(e3, t8, (a5, i9, o4) => {
      let c5;
      if (oe(o4, 1, 1, e3, t8), o4[0] instanceof p2) {
        const t9 = je(a(o4[0], e3.spatialReference, "multipoint"), e3.spatialReference);
        if (null == t9) return null;
        c5 = t9;
      } else if (o4[0] instanceof m2) c5 = u(o4[0].toJSON());
      else {
        const t9 = JSON.parse(o4[0]);
        t9 && !t9.spatialReference && (t9.spatialReference = e3.spatialReference), c5 = je(new m2(t9), e3.spatialReference);
      }
      if (null !== c5 && false === c5.spatialReference.equals(e3.spatialReference)) throw new n4(e3, "WrongSpatialReference", t8);
      return De(c5);
    });
  }, _4.extent = function(e3, t8) {
    return E4(e3, t8, (a5, i9, o4) => {
      o4 = Je(o4), oe(o4, 1, 1, e3, t8);
      let u4 = null;
      if (o4[0] instanceof p2) u4 = je(a(o4[0], e3.spatialReference), e3.spatialReference);
      else if (o4[0] instanceof _) {
        const e4 = { xmin: o4[0].x, ymin: o4[0].y, xmax: o4[0].x, ymax: o4[0].y, spatialReference: o4[0].spatialReference.toJSON() }, t9 = o4[0];
        t9.hasZ && (e4.zmin = t9.z, e4.zmax = t9.z), t9.hasM && (e4.mmin = t9.m, e4.mmax = t9.m), u4 = u(e4);
      } else if (o4[0] instanceof j) u4 = u(o4[0].extent?.toJSON());
      else if (o4[0] instanceof y) u4 = u(o4[0].extent?.toJSON());
      else if (o4[0] instanceof m2) u4 = u(o4[0].extent?.toJSON());
      else if (o4[0] instanceof z) u4 = u(o4[0].toJSON());
      else {
        const t9 = JSON.parse(o4[0]);
        t9 && !t9.spatialReference && (t9.spatialReference = e3.spatialReference), u4 = je(new z(t9), e3.spatialReference);
      }
      if (null !== u4 && false === u4.spatialReference.equals(e3.spatialReference)) throw new n4(e3, "WrongSpatialReference", t8);
      return De(u4);
    });
  }, _4.geometry = function(e3, t8) {
    return E4(e3, t8, (a5, i9, o4) => {
      oe(o4, 1, 1, e3, t8);
      let c5 = null;
      if (null === o4[0]) return null;
      if (H(o4[0])) c5 = je(o4[0].geometry(), e3.spatialReference);
      else if (o4[0] instanceof p2) c5 = je(a(o4[0], e3.spatialReference), e3.spatialReference);
      else {
        const t9 = JSON.parse(o4[0]);
        t9 && !t9.spatialReference && (t9.spatialReference = e3.spatialReference), c5 = je(u(t9), e3.spatialReference);
      }
      if (null !== c5 && false === c5.spatialReference.equals(e3.spatialReference)) throw new n4(e3, "WrongSpatialReference", t8);
      return De(c5);
    });
  }, _4.setgeometry = function(e3, t8) {
    return E4(e3, t8, (n8, a5, i9) => {
      if (oe(i9, 2, 2, e3, t8), !H(i9[0])) throw new n4(e3, "InvalidParameter", t8);
      if (true === i9[0].immutable) throw new n4(e3, "Immutable", t8);
      if (!(i9[1] instanceof s2 || null === i9[1])) throw new n4(e3, "InvalidParameter", t8);
      return i9[0]._geometry = i9[1], P2;
    });
  }, _4.feature = function(e3, t8) {
    return E4(e3, t8, (i9, l6, o4) => {
      if (0 === o4.length) throw new n4(e3, "WrongNumberOfParameters", t8);
      let f7;
      if (1 === o4.length) if (e(o4[0])) f7 = I2.fromJson(JSON.parse(o4[0]), e3.timeZone);
      else if (H(o4[0])) f7 = I2.createFromArcadeFeature(o4[0]);
      else if (o4[0] instanceof s2) f7 = I2.createFromGraphicLikeObject(o4[0], null, null, e3.timeZone);
      else {
        if (!(o4[0] instanceof p2)) throw new n4(e3, "InvalidParameter", t8);
        {
          const n8 = o4[0].hasField("geometry") ? o4[0].field("geometry") : null, i10 = o4[0].hasField("attributes") ? o4[0].field("attributes") : null;
          let l7, s8;
          if (K(n8)) l7 = a(n8, e3.spatialReference);
          else {
            if (null != n8 && !U(n8)) throw new n4(e3, "InvalidParameter", t8);
            l7 = n8;
          }
          if (K(i10)) s8 = I2.parseAttributesFromDictionary(i10);
          else {
            if (null != i10) throw new n4(e3, "InvalidParameter", t8);
            s8 = null;
          }
          f7 = I2.createFromGraphicLikeObject(l7, s8, null, e3.timeZone);
        }
      }
      else if (2 === o4.length) {
        let i10 = null, l7 = null;
        if (null !== o4[0]) if (o4[0] instanceof s2) i10 = o4[0];
        else {
          if (!(o4[0] instanceof p2)) throw new n4(e3, "InvalidParameter", t8);
          i10 = a(o4[0], e3.spatialReference);
        }
        if (null !== o4[1]) {
          if (!(o4[1] instanceof p2)) throw new n4(e3, "InvalidParameter", t8);
          l7 = I2.parseAttributesFromDictionary(o4[1]);
        }
        f7 = I2.createFromGraphicLikeObject(i10, l7, null, e3.timeZone);
      } else {
        let i10 = null;
        const l7 = {};
        if (null !== o4[0]) if (o4[0] instanceof s2) i10 = o4[0];
        else {
          if (!(o4[0] instanceof p2)) throw new n4(e3, "InvalidParameter", t8);
          i10 = a(o4[0], e3.spatialReference);
        }
        for (let n8 = 1; n8 < o4.length; n8 += 2) {
          const a5 = ge(o4[n8]), i11 = o4[n8 + 1];
          if (!(null == i11 || e(i11) || isNaN(i11) || ne(i11) || n3(i11) || ie(i11) || re(i11) || t(i11))) throw new n4(e3, "InvalidParameter", t8);
          if (L(i11) || false === V(i11)) throw new n4(e3, "InvalidParameter", t8);
          l7[a5] = i11 === P2 ? null : i11;
        }
        f7 = I2.createFromGraphicLikeObject(i10, l7, null, e3.timeZone);
      }
      return f7._geometry = je(f7.geometry(), e3.spatialReference), f7.immutable = false, f7;
    });
  }, _4.dictionary = function(e3, t8) {
    return E4(e3, t8, (a5, i9, l6) => {
      if (0 === l6.length || 1 === l6.length && null === l6[0]) {
        const e4 = new p2();
        return e4.immutable = false, e4;
      }
      if (1 === l6.length && e(l6[0])) try {
        const t9 = JSON.parse(l6[0]), r7 = p2.convertObjectToArcadeDictionary(t9, Ke(e3), false);
        return r7.immutable = false, r7;
      } catch (c5) {
        throw new n4(e3, "InvalidParameter", t8);
      }
      if (1 === l6.length && l6[0] instanceof s2) try {
        const t9 = l6[0].toJSON();
        t9.hasZ = true === l6[0].hasZ, t9.hasM = true === l6[0].hasM;
        const r7 = p2.convertObjectToArcadeDictionary(t9, Ke(e3), false);
        return r7.immutable = false, r7;
      } catch (c5) {
        throw new n4(e3, "InvalidParameter", t8);
      }
      if (1 === l6.length && H(l6[0])) try {
        const e4 = new p2();
        e4.immutable = false, e4.setField("geometry", l6[0].geometry());
        const t9 = new p2();
        t9.immutable = false, e4.setField("attributes", t9);
        for (const n8 of l6[0].keys()) t9.setField(n8, l6[0].field(n8));
        return e4;
      } catch (c5) {
        throw new n4(e3, "InvalidParameter", t8);
      }
      if (1 === l6.length && (K(l6[0]) || W(l6[0]) || $(l6[0]))) try {
        const e4 = new p2();
        e4.immutable = false;
        for (const t9 of l6[0].keys()) e4.setField(t9, l6[0].field(t9));
        return e4;
      } catch (c5) {
        throw new n4(e3, "InvalidParameter", t8);
      }
      if (2 === l6.length && l6[0] instanceof p2 && t(l6[1])) try {
        if (!(true === l6[1])) {
          const e4 = new p2();
          e4.immutable = false;
          for (const t9 of l6[0].keys()) e4.setField(t9, l6[0].field(t9));
          return e4;
        }
        return l6[0].deepClone();
      } catch (c5) {
        throw new n4(e3, "InvalidParameter", t8);
      }
      if (l6.length % 2 != 0) throw new n4(e3, "WrongNumberOfParameters", t8);
      const s8 = /* @__PURE__ */ Object.create(null);
      for (let n8 = 0; n8 < l6.length; n8 += 2) {
        const a6 = ge(l6[n8]), i10 = l6[n8 + 1];
        if (!(null == i10 || e(i10) || isNaN(i10) || ne(i10) || n3(i10) || t(i10) || re(i10) || ie(i10) || o(i10) || te(i10))) throw new n4(e3, "InvalidParameter", t8);
        if (L(i10)) throw new n4(e3, "InvalidParameter", t8);
        s8[a6] = i10 === P2 ? null : i10;
      }
      const f7 = new p2(s8);
      return f7.immutable = false, f7;
    });
  }, _4.haskey = function(t8, a5) {
    return E4(t8, a5, (i9, o4, s8) => {
      oe(s8, 2, 2, t8, a5);
      const f7 = ge(s8[1]);
      if (Q(s8[0]) || s8[0] instanceof p2) return s8[0].hasField(f7);
      if (s8[0] instanceof s2) {
        const t9 = f7.toLowerCase();
        for (const n8 of p3(s8[0])) if (n8.toLowerCase() === t9) return true;
        return false;
      }
      throw new n4(t8, "InvalidParameter", a5);
    });
  }, _4.hasvalue = function(e3, n8) {
    return E4(e3, n8, (r7, a5, i9) => (oe(i9, 2, 2, e3, n8), null != b(i9[0], i9[1])));
  }, _4.indexof = function(e3, t8) {
    return E4(e3, t8, (n8, a5, i9) => {
      oe(i9, 2, 2, e3, t8);
      const s8 = i9[1];
      if (o(i9[0])) {
        for (let e4 = 0; e4 < i9[0].length; e4++) if (ye(s8, i9[0][e4])) return e4;
        return -1;
      }
      if (te(i9[0])) {
        const e4 = i9[0].length();
        for (let t9 = 0; t9 < e4; t9++) if (ye(s8, i9[0].get(t9))) return t9;
        return -1;
      }
      throw new n4(e3, "InvalidParameter", t8);
    });
  }, _4.angle = function(e3, t8) {
    return E4(e3, t8, (n8, a5, i9) => {
      if (i9 = Je(i9), oe(i9, 2, 3, e3, t8), !(i9[0] instanceof _)) throw new n4(e3, "InvalidParameter", t8);
      if (!(i9[1] instanceof _)) throw new n4(e3, "InvalidParameter", t8);
      if (i9.length > 2 && !(i9[2] instanceof _)) throw new n4(e3, "InvalidParameter", t8);
      return 2 === i9.length ? z3(i9[0], i9[1]) : P3(i9[0], i9[1], i9[2]);
    });
  }, _4.bearing = function(e3, t8) {
    return E4(e3, t8, (n8, a5, i9) => {
      if (i9 = Je(i9), oe(i9, 2, 3, e3, t8), !(i9[0] instanceof _)) throw new n4(e3, "InvalidParameter", t8);
      if (!(i9[1] instanceof _)) throw new n4(e3, "InvalidParameter", t8);
      if (i9.length > 2 && !(i9[2] instanceof _)) throw new n4(e3, "InvalidParameter", t8);
      return 2 === i9.length ? d(i9[0], i9[1]) : Z(i9[0], i9[1], i9[2]);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/maths.js
function g4(g6, d5) {
  function j4(r7, n8, t8) {
    const u4 = Se(r7);
    return isNaN(u4) ? u4 : isNaN(n8) || isNaN(t8) || n8 > t8 ? NaN : u4 < n8 ? n8 : u4 > t8 ? t8 : u4;
  }
  g6.number = function(r7, n8) {
    return d5(r7, n8, (a5, s8, f7) => {
      oe(f7, 1, 2, r7, n8);
      const c5 = f7[0];
      if (n3(c5)) return c5;
      if (null === c5) return 0;
      if (ne(c5) || ie(c5) || re(c5)) return c5.toNumber();
      if (t(c5)) return Number(c5);
      if (o(c5)) return NaN;
      if ("" === c5) return Number(c5);
      if (void 0 === c5) return Number(c5);
      if (e(c5)) {
        if (void 0 !== f7[1]) {
          let r8 = Y(f7[1], "‰", "");
          return r8 = Y(r8, "¤", ""), p(c5, { pattern: r8 });
        }
        return Number(c5.trim());
      }
      return Number(c5);
    });
  }, g6.abs = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.abs(Se(o4[0]))));
  }, g6.acos = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.acos(Se(o4[0]))));
  }, g6.asin = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.asin(Se(o4[0]))));
  }, g6.atan = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.atan(Se(o4[0]))));
  }, g6.atan2 = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 2, 2, r7, n8), Math.atan2(Se(o4[0]), Se(o4[1]))));
  }, g6.ceil = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => {
      if (oe(o4, 1, 2, r7, n8), 2 === o4.length) {
        let r8 = Se(o4[1]);
        return isNaN(r8) && (r8 = 0), v("ceil", Se(o4[0]), -1 * r8);
      }
      return Math.ceil(Se(o4[0]));
    });
  }, g6.round = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => {
      if (oe(o4, 1, 2, r7, n8), 2 === o4.length) {
        let r8 = Se(o4[1]);
        return isNaN(r8) && (r8 = 0), v("round", Se(o4[0]), -1 * r8);
      }
      return Math.round(Se(o4[0]));
    });
  }, g6.floor = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => {
      if (oe(o4, 1, 2, r7, n8), 2 === o4.length) {
        let r8 = Se(o4[1]);
        return isNaN(r8) && (r8 = 0), v("floor", Se(o4[0]), -1 * r8);
      }
      return Math.floor(Se(o4[0]));
    });
  }, g6.cos = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.cos(Se(o4[0]))));
  }, g6.isnan = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), "number" == typeof o4[0] && isNaN(o4[0])));
  }, g6.exp = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.exp(Se(o4[0]))));
  }, g6.log = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.log(Se(o4[0]))));
  }, g6.pow = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 2, 2, r7, n8), Se(o4[0]) ** Se(o4[1])));
  }, g6.random = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 0, 0, r7, n8), Math.random()));
  }, g6.sin = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.sin(Se(o4[0]))));
  }, g6.sqrt = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.sqrt(Se(o4[0]))));
  }, g6.tan = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => (oe(o4, 1, 1, r7, n8), Math.tan(Se(o4[0]))));
  }, g6.isempty = function(u4, e3) {
    return d5(u4, e3, (u5, e4, o4) => {
      if (oe(o4, 1, 2, u5, e4), o4.length >= 2 && !t(o4[1])) throw new n4(u5, "InvalidParameter", e4);
      return z2(o4[1], false) ? I(o4[0]) : ue(o4[0]);
    });
  }, g6.boolean = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => {
      oe(o4, 1, 1, r7, n8);
      const i9 = o4[0];
      return Ae(i9);
    });
  }, g6.constrain = function(r7, n8) {
    return d5(r7, n8, (u4, e3, o4) => {
      oe(o4, 3, 3, r7, n8);
      const i9 = Se(o4[1]), s8 = Se(o4[2]);
      if (o(o4[0])) {
        const r8 = [];
        for (const n9 of o4[0]) r8.push(j4(n9, i9, s8));
        return r8;
      }
      if (te(o4[0])) {
        const r8 = [];
        for (let n9 = 0; n9 < o4[0].length(); n9++) r8.push(j4(o4[0].get(n9), i9, s8));
        return r8;
      }
      return j4(o4[0], i9, s8);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/stats.js
function f4(n8, r7) {
  if (1 === r7.length) {
    if (o(r7[0])) return l(n8, r7[0], -1);
    if (te(r7[0])) return l(n8, r7[0].toArray(), -1);
  }
  return l(n8, r7, -1);
}
function a4(u4, a5) {
  u4.stdev = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("stdev", t8));
  }, u4.variance = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("variance", t8));
  }, u4.average = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("mean", t8));
  }, u4.mean = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("mean", t8));
  }, u4.sum = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("sum", t8));
  }, u4.min = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("min", t8));
  }, u4.max = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("max", t8));
  }, u4.distinct = function(n8, r7) {
    return a5(n8, r7, (n9, r8, t8) => f4("distinct", t8));
  }, u4.count = function(u5, f7) {
    return a5(u5, f7, (a6, c5, m6) => {
      if (oe(m6, 1, 1, u5, f7), null == m6[0]) return 0;
      if (o(m6[0]) || e(m6[0])) return m6[0].length;
      if (te(m6[0])) return m6[0].length();
      if (K(m6[0])) return m6[0].entryCount();
      throw new n4(u5, "InvalidParameter", f7);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/convertdirection.js
var l4 = (e3) => (n8, t8, r7 = 14) => +e3(n8, t8).toFixed(r7);
var d3 = (e3, n8) => e3 + n8;
var g5 = (e3, n8) => e3 * n8;
var m4 = (e3, n8) => e3 / n8;
var f5 = (e3, n8, t8) => l4(d3)(e3, n8, t8);
var A = (e3, n8, t8) => l4(g5)(e3, n8, t8);
var D3 = (e3, n8, t8) => l4(m4)(e3, n8, t8);
var p7 = 360;
var T = 400;
var E2 = 2 * Math.PI;
var S3 = 3600;
var _3 = 3240;
var R = 60;
var F3 = 60;
var M3 = 180 * S3 / Math.PI;
var v2 = p7 * R * F3;
var L2 = 90 * S3;
var U3 = 180 * S3;
var x2 = 270 * S3;
var N = String.fromCharCode(7501);
var b3 = "°";
function O2(e3) {
  if (false === e(e3)) throw new n4(null, "InvalidParameter", null);
  return e3;
}
function G(e3, n8) {
  const t8 = 10 ** n8;
  return Math.round(e3 * t8) / t8;
}
function I4(e3, n8) {
  return e3 % n8;
}
function y2(e3) {
  const n8 = parseFloat(e3.toString().replace(Math.trunc(e3).toString(), "0")) * Math.sign(e3);
  if (e3 < 0) {
    return { fraction: n8, integer: Math.ceil(e3) };
  }
  return { fraction: n8, integer: Math.floor(e3) };
}
function H2(e3, n8) {
  switch (e3) {
    case 0:
      return "SHORT" === n8 ? "N" : "North";
    case 1:
      return "SHORT" === n8 ? "E" : "East";
    case 2:
      return "SHORT" === n8 ? "S" : "South";
    case 3:
      return "SHORT" === n8 ? "W" : "West";
  }
}
function k2(e3, n8) {
  return e3 - Math.floor(e3 / n8) * n8;
}
function P6(e3) {
  switch (e3) {
    case 6:
    case 1:
      return p7;
    case 4:
      return E2;
    case 5:
      return T;
    case 2:
      return v2;
    case 7:
      return R;
    case 8:
      return F3;
    default:
      throw new n4(null, "LogicError", null, { reason: "unsupported evaluations" });
  }
}
var j3 = new o2([], [["NORTH", 1], ["NORTH AZIMUTH", 1], ["POLAR", 2], ["QUADRANT", 3], ["SOUTH", 4], ["SOUTH AZIMUTH", 4]]);
function z4(e3) {
  const n8 = j3.lookup(e3);
  if (null == n8) throw new n4(null, "LogicError", null, { reason: "unsupported directionType" });
  return n8;
}
var Q2 = new o2([], [["D", 1], ["DD", 1], ["DECIMAL DEGREE", 1], ["DEGREE", 1], ["DECIMAL DEGREES", 1], ["DEGREES", 1], ["DMS", 3], ["DEGREES MINUTES SECONDS", 3], ["R", 4], ["RAD", 4], ["RADS", 4], ["RADIAN", 4], ["RADIANS", 4], ["G", 5], ["GON", 5], ["GONS", 5], ["GRAD", 5], ["GRADS", 5], ["GRADIAN", 5], ["GRADIANS", 5]]);
function C3(e3) {
  const n8 = Q2.lookup(e3);
  if (null == n8) throw new n4(null, "LogicError", null, { reason: "unsupported units" });
  return n8;
}
var W2 = class _W {
  constructor(e3, n8, t8) {
    this.m_degrees = e3, this.m_minutes = n8, this.m_seconds = t8;
  }
  getField(e3) {
    switch (e3) {
      case 1:
      case 6:
        return this.m_degrees;
      case 7:
        return this.m_minutes;
      case 2:
      case 8:
        return this.m_seconds;
      default:
        throw new n4(null, "LogicError", null, { reason: "unexpected evaluation" });
    }
  }
  static secondsToDMS(e3) {
    const n8 = y2(e3).fraction;
    let t8 = y2(e3).integer;
    const r7 = Math.floor(t8 / S3);
    t8 -= r7 * S3;
    const s8 = Math.floor(t8 / F3);
    return t8 -= s8 * F3, new _W(r7, s8, t8 + n8);
  }
  static numberToDms(e3) {
    const n8 = y2(e3).fraction, t8 = y2(e3).integer, r7 = A(y2(100 * n8).fraction, 100), s8 = y2(100 * n8).integer;
    return new _W(t8, s8, r7);
  }
  format(e3, n8) {
    let t8 = G(this.m_seconds, n8), r7 = this.m_minutes, s8 = this.m_degrees;
    if (2 === e3 || 8 === e3) F3 <= t8 && (t8 -= F3, ++r7), R <= r7 && (r7 = 0, ++s8), p7 <= s8 && (s8 = 0);
    else if (7 === e3) t8 = 0, r7 = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, s8 = this.m_degrees, R <= r7 && (r7 = 0, ++s8), p7 <= s8 && (s8 = 0);
    else if (1 === e3 || 6 === e3) {
      const e4 = D3(this.m_seconds, S3), n9 = D3(this.m_minutes, R);
      s8 = Math.round(this.m_degrees + n9 + e4), r7 = 0, t8 = 0;
    }
    return new _W(s8, r7, t8);
  }
  static dmsToSeconds(e3, n8, t8) {
    return e3 * S3 + n8 * F3 + t8;
  }
};
var B2 = class {
  constructor(e3, n8, t8) {
    this.meridian = e3, this.angle = n8, this.direction = t8;
  }
  fetchAzimuth(e3) {
    return 0 === e3 ? this.meridian : this.direction;
  }
};
var V2 = class _V {
  constructor(e3) {
    this._angle = e3;
  }
  static createFromAngleAndDirection(e3, n8) {
    return new _V(new Z3(_V._convertDirectionFormat(e3.extractAngularUnits(2), n8, 1)));
  }
  getAngle(e3) {
    const n8 = this._angle.extractAngularUnits(2);
    switch (e3) {
      case 1:
      case 4:
      case 2:
        return new Z3(_V._convertDirectionFormat(n8, 1, e3));
      case 3: {
        const e4 = _V.secondsNorthAzimuthToQuadrant(n8);
        return new Z3(e4.angle);
      }
    }
  }
  getMeridian(e3) {
    const n8 = this._angle.extractAngularUnits(2);
    switch (e3) {
      case 1:
        return 0;
      case 4:
        return 2;
      case 2:
        return 1;
      case 3:
        return _V.secondsNorthAzimuthToQuadrant(n8).meridian;
    }
  }
  getDirection(e3) {
    const n8 = this._angle.extractAngularUnits(2);
    switch (e3) {
      case 1:
        return 1;
      case 4:
        return 3;
      case 2:
        return 0;
      case 3:
        return _V.secondsNorthAzimuthToQuadrant(n8).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(e3) {
    const n8 = e3 <= L2 || e3 >= x2 ? 0 : 2, t8 = 0 === n8 ? Math.min(v2 - e3, e3) : Math.abs(e3 - U3);
    return new B2(n8, t8, e3 > U3 ? 3 : 1);
  }
  static createFromAngleMeridianAndDirection(e3, n8, t8) {
    return new _V(new Z3(_V.secondsQuadrantToNorthAzimuth(e3.extractAngularUnits(2), n8, t8)));
  }
  static secondsQuadrantToNorthAzimuth(e3, n8, t8) {
    return 0 === n8 ? 1 === t8 ? e3 : v2 - e3 : 1 === t8 ? U3 - e3 : U3 + e3;
  }
  static _convertDirectionFormat(e3, n8, r7) {
    let s8 = 0;
    switch (n8) {
      case 1:
        s8 = e3;
        break;
      case 2:
        s8 = L2 - e3;
        break;
      case 3:
        throw new n4(null, "LogicError", null, { reason: "unexpected evaluation" });
      case 4:
        s8 = e3 + U3;
    }
    let i9 = 0;
    switch (r7) {
      case 1:
        i9 = s8;
        break;
      case 2:
        i9 = L2 - s8;
        break;
      case 3:
        throw new n4(null, "LogicError", null, { reason: "unexpected evaluation" });
      case 4:
        i9 = s8 - U3;
    }
    return i9 = I4(i9, v2), i9 < 0 ? v2 + i9 : i9;
  }
};
function X2(e3, n8, r7) {
  let s8 = null;
  switch (n8) {
    case 1:
      s8 = A(e3, S3);
      break;
    case 2:
      s8 = e3;
      break;
    case 5:
      s8 = A(e3, _3);
      break;
    case 4:
      s8 = A(e3, M3);
      break;
    default:
      throw new n4(null, "LogicError", null, { reason: "unexpected evaluation" });
  }
  switch (r7) {
    case 1:
      return D3(s8, S3);
    case 2:
      return s8;
    case 5:
      return D3(s8, _3);
    case 4:
      return s8 / M3;
    default:
      throw new n4(null, "LogicError", null, { reason: "unexpected evaluation" });
  }
}
var Z3 = class _Z {
  constructor(e3) {
    this._seconds = e3;
  }
  static createFromAngleAndUnits(e3, n8) {
    return new _Z(X2(e3, n8, 2));
  }
  extractAngularUnits(e3) {
    return X2(this._seconds, 2, q(e3));
  }
  static createFromDegreesMinutesSeconds(e3, n8, t8) {
    return new _Z(f5(f5(A(e3, S3), A(n8, F3)), t8));
  }
};
function q(e3) {
  switch (n2(e3), e3) {
    case 1:
    case 6:
    case 3:
      return 1;
    case 5:
      return 5;
    case 7:
      return 7;
    case 4:
      return 4;
    case 2:
    case 8:
      return 2;
  }
}
var J = class _J {
  constructor(e3, n8, t8, r7) {
    this.view = e3, this.angle = n8, this.merdian = t8, this.direction = r7, this._dms = null, this._formattedDms = null;
  }
  static createFromStringAndBearing(e3, n8, t8) {
    return new _J(e3, n8.getAngle(t8), n8.getMeridian(t8), n8.getDirection(t8));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return null === this._dms && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return null === this._formattedDms && this._calculateDms(), this._formattedDms;
  }
  _calculateDms() {
    let e3 = null, n8 = 6, t8 = 0;
    for (let r7 = 0; r7 < this.view.length; r7++) {
      const s8 = this.view[r7];
      switch (s8) {
        case "m":
          e3 = ae(this.view, r7, s8), n8 = 6 === n8 ? 7 : n8, r7 = e3.newpos;
          continue;
        case "s":
          e3 = ae(this.view, r7, s8), n8 = 8, t8 = t8 < e3.rounding ? e3.rounding : t8, r7 = e3.newpos;
          continue;
        default:
          continue;
      }
    }
    this._dms = W2.secondsToDMS(this.angle.extractAngularUnits(2)), this._formattedDms = W2.secondsToDMS(this.angle.extractAngularUnits(2)).format(n8, t8);
  }
};
function K2(e3, n8, r7, s8, i9) {
  let o4 = null;
  switch (n8) {
    case 1:
    case 4:
    case 5:
      return o4 = k2(G(e3.extractAngularUnits(n8), s8), P6(n8)), o4.toFixed(s8).padStart(r7 + s8 + (s8 > 0 ? 1 : 0), "0");
    case 6:
    case 7:
      return o4 = k2(i9.fetchFormattedDms().getField(n8), P6(n8)), o4.toFixed(s8).padStart(r7 + s8 + (s8 > 0 ? 1 : 0), "0");
    case 8:
      return o4 = k2(G(i9.fetchDms().getField(n8), s8), P6(n8)), o4.toFixed(s8).padStart(r7 + s8 + (s8 > 0 ? 1 : 0), "0");
    default:
      throw new n4(null, "LogicError", null, { reason: "unexpected evaluation" });
  }
}
function Y2(e3, n8, r7) {
  if (3 === r7) throw new n4(null, "LogicError", null, { reason: "conversion error" });
  if (3 === n8) {
    const n9 = W2.numberToDms(e3);
    return V2.createFromAngleAndDirection(Z3.createFromDegreesMinutesSeconds(n9.m_degrees, n9.m_minutes, n9.m_seconds), r7);
  }
  return V2.createFromAngleAndDirection(Z3.createFromAngleAndUnits(e3, q(n8)), r7);
}
function $2(e3) {
  switch (Se(e3)) {
    case 1:
      return { first: 0, second: 1 };
    case 2:
      return { first: 2, second: 1 };
    case 3:
      return { first: 2, second: 3 };
    case 4:
      return { first: 0, second: 3 };
  }
  return null;
}
function ee(e3) {
  switch (e3.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return 0;
    case "E":
    case "EAST":
      return 1;
    case "S":
    case "SOUTH":
      return 2;
    case "W":
    case "WEST":
      return 3;
  }
  return null;
}
function ne2(e3) {
  const n8 = parseFloat(e3);
  if (n3(n8)) {
    if (isNaN(n8)) throw new n4(null, "LogicError", null, { reason: "invalid conversion" });
    return n8;
  }
  throw new n4(null, "LogicError", null, { reason: "invalid conversion" });
}
function te2(e3, n8, s8) {
  const i9 = 3 === s8;
  let o4 = null, c5 = null, a5 = 0, u4 = 0, l6 = 0;
  if (i9) {
    if (e3.length < 2) throw new n4(null, "LogicError", null, { reason: "conversion error" });
    l6 = 1;
    const n9 = $2(ge(e3[e3.length - 1]));
    if (n9 ? (o4 = n9.first, c5 = n9.second) : (a5 = 1, o4 = ee(ge(e3[0])), c5 = ee(ge(e3[e3.length - 1]))), null === o4 || null === c5) throw new n4(null, "LogicError", null, { reason: "invalid conversion" });
  }
  switch (n8) {
    case 1:
    case 4:
    case 5:
      if (0 === e3.length) throw new n4(null, "LogicError", null, { reason: "invalid conversion" });
      return i9 ? V2.createFromAngleMeridianAndDirection(Z3.createFromAngleAndUnits(ne2(e3[a5]), q(n8)), o4, c5) : V2.createFromAngleAndDirection(Z3.createFromAngleAndUnits(ne2(e3[a5]), q(n8)), s8);
    case 3:
      if (u4 = e3.length - l6 - a5, 3 === u4) {
        const n9 = Z3.createFromDegreesMinutesSeconds(ne2(e3[a5]), ne2(e3[a5 + 1]), ne2(e3[a5 + 2]));
        return i9 ? V2.createFromAngleMeridianAndDirection(n9, o4, c5) : V2.createFromAngleAndDirection(n9, s8);
      }
      if (1 === u4) {
        const n9 = ne2(e3[a5]), t8 = W2.numberToDms(n9), r7 = Z3.createFromDegreesMinutesSeconds(t8.m_degrees, t8.m_minutes, t8.m_seconds);
        return i9 ? V2.createFromAngleMeridianAndDirection(r7, o4, c5) : V2.createFromAngleAndDirection(r7, s8);
      }
  }
  throw new n4(null, "LogicError", null, { reason: "invalid conversion" });
}
function re2(e3) {
  const n8 = /* @__PURE__ */ new Set([" ", "-", "/", "'", '"', "\\", "^", b3, N, "	", "\r", "\n", "*"]);
  let t8 = "";
  for (let r7 = 0; r7 < e3.length; r7++) {
    const s8 = e3.charAt(r7);
    n8.has(s8) ? t8 += "RRSPLITRRSPLITRR" : t8 += s8;
  }
  return t8.split("RRSPLITRRSPLITRR").filter((e4) => "" !== e4);
}
function se2(e3, n8, r7) {
  if (n3(e3)) return Y2(Se(e3), n8, r7);
  if (e(e3)) return te2(re2(e3), n8, r7);
  if (o(e3)) return te2(e3, n8, r7);
  if (te(e3)) return te2(e3.toArray(), n8, r7);
  throw new n4(null, "LogicError", null, { reason: "conversion error" });
}
function ie2(e3, n8, r7) {
  const s8 = q(r7);
  if (s8 && 3 !== r7) {
    return e3.getAngle(n8).extractAngularUnits(s8);
  }
  throw new n4(null, "LogicError", null, { reason: "conversion error" });
}
function oe2(e3, n8, t8) {
  const r7 = e3.getAngle(n8);
  if (3 === n8 && 3 === t8) {
    const t9 = W2.secondsToDMS(r7.extractAngularUnits(2));
    return [H2(e3.getMeridian(n8), "SHORT"), t9.m_degrees, t9.m_minutes, t9.m_seconds, H2(e3.getDirection(n8), "SHORT")];
  }
  if (3 === t8) {
    const e4 = W2.secondsToDMS(r7.extractAngularUnits(2));
    return [e4.m_degrees, e4.m_minutes, e4.m_seconds];
  }
  return 3 === n8 ? [H2(e3.getMeridian(n8), "SHORT"), r7.extractAngularUnits(t8), H2(e3.getDirection(n8), "SHORT")] : [r7.extractAngularUnits(t8)];
}
function ce2(e3, n8) {
  let r7 = "";
  switch (e3) {
    case 1:
      r7 = 3 === n8 ? "DD.DD" + b3 : "DDD.DD" + b3;
      break;
    case 3:
      r7 = 3 === n8 ? "dd" + b3 + ` mm' ss"` : "ddd" + b3 + ` mm' ss.ss"`;
      break;
    case 4:
      r7 = "R.RR";
      break;
    case 5:
      r7 = "GGG.GG" + N;
      break;
    default:
      throw new n4(null, "LogicError", null, { reason: "conversion error" });
  }
  return 3 === n8 && (r7 = "p " + r7 + " b"), r7;
}
function ae(e3, n8, t8) {
  const r7 = { padding: 0, rounding: 0, newpos: n8 };
  let s8 = false;
  for (; n8 < e3.length; ) {
    const i9 = e3[n8];
    if (i9 === t8) s8 ? r7.rounding++ : r7.padding++, n8++;
    else {
      if ("." !== i9) break;
      s8 = true, n8++;
    }
  }
  return r7.newpos = n8 - 1, r7;
}
function ue2(e3, n8, t8) {
  const r7 = { escaped: "", newpos: n8 };
  for (n8++; n8 < e3.length; ) {
    const t9 = e3[n8];
    if (n8++, "]" === t9) break;
    r7.escaped += t9;
  }
  return r7.newpos = n8 - 1, r7;
}
function le(e3, n8, t8) {
  let r7 = "", s8 = null, i9 = null;
  const o4 = J.createFromStringAndBearing(n8, e3, t8), c5 = { D: 1, d: 6, m: 7, s: 8, R: 4, G: 5 };
  for (let a5 = 0; a5 < n8.length; a5++) {
    const u4 = n8[a5];
    switch (u4) {
      case "[":
        s8 = ue2(n8, a5), r7 += s8.escaped, a5 = s8.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        s8 = ae(n8, a5, u4), i9 = e3.getAngle(t8), r7 += K2(i9, c5[u4], s8.padding, s8.rounding, o4), a5 = s8.newpos;
        continue;
      case "P":
      case "p":
        r7 += H2(o4.fetchMeridian(), "p" === u4 ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r7 += H2(o4.fetchDirection(), "b" === u4 ? "SHORT" : "LONG");
        continue;
      default:
        r7 += u4;
    }
  }
  return r7;
}
var de = new o2(["TEXT", "VALUE"]);
function he(n8, s8, i9) {
  if (!(s8 instanceof p2)) throw new n4(null, "InvalidParameter", null);
  if (false === s8.hasField("directionType")) throw new n4(null, "LogicError", null, { reason: "missing directionType" });
  if (false === s8.hasField("angleType")) throw new n4(null, "LogicError", null, { reason: "missing angleType" });
  const o4 = z4(O2(s8.field("directiontype"))), c5 = se2(n8, C3(O2(s8.field("angletype"))), o4);
  if (!(i9 instanceof p2)) throw new n4(null, "InvalidParameter", null);
  if (false === i9.hasField("directionType")) throw new n4(null, "LogicError", null, { reason: "missing directionType" });
  if (false === i9.hasField("outputType")) throw new n4(null, "LogicError", null, { reason: "missing angleType" });
  const a5 = z4(O2(i9.field("directiontype"))), u4 = i9.hasField("angleType") ? C3(O2(i9.field("angletype"))) : null, l6 = de.get(O2(i9.field("outputType")));
  if (!a5 || !l6) throw new n4(null, "LogicError", null, { reason: "conversion error" });
  if (!(u4 || "TEXT" === l6 && i9.hasField("format"))) throw new n4(null, "LogicError", null, { reason: "invalid unit" });
  switch (l6) {
    case "VALUE":
      return 3 === a5 || 3 === u4 ? oe2(c5, a5, u4) : ie2(c5, a5, u4);
    case "TEXT": {
      let e3 = "";
      return i9.hasField("format") && (e3 = ge(i9.field("format"))), null !== e3 && "" !== e3 || (e3 = ce2(u4, a5)), le(c5, e3, a5);
    }
    default:
      throw new n4(null, "InvalidParameter", null);
  }
}

// node_modules/@arcgis/core/arcade/functions/hash.js
var t7 = 2654435761;
var s6 = 2246822519;
var n7 = 3266489917;
var e2 = 668265263;
var r6 = 374761393;
function h2(t8) {
  const s8 = [];
  for (let n8 = 0, e3 = t8.length; n8 < e3; n8++) {
    let e4 = t8.charCodeAt(n8);
    e4 < 128 ? s8.push(e4) : e4 < 2048 ? s8.push(192 | e4 >> 6, 128 | 63 & e4) : e4 < 55296 || e4 >= 57344 ? s8.push(224 | e4 >> 12, 128 | e4 >> 6 & 63, 128 | 63 & e4) : (n8++, e4 = 65536 + ((1023 & e4) << 10 | 1023 & t8.charCodeAt(n8)), s8.push(240 | e4 >> 18, 128 | e4 >> 12 & 63, 128 | e4 >> 6 & 63, 128 | 63 & e4));
  }
  return new Uint8Array(s8);
}
var i7 = class {
  constructor(t8) {
    this._seed = t8, this._totallen = 0, this._bufs = [], this.init();
  }
  init() {
    return this._bufs = [], this._totallen = 0, this;
  }
  updateFloatArray(t8) {
    const s8 = [];
    for (const n8 of t8) isNaN(n8) ? s8.push("NaN") : n8 === 1 / 0 ? s8.push("Infinity") : n8 === -1 / 0 ? s8.push("-Infinity") : 0 === n8 ? s8.push("0") : s8.push(n8.toString(16));
    this.update(h2(s8.join("")));
  }
  updateIntArray(t8) {
    const s8 = Int32Array.from(t8);
    this.update(new Uint8Array(s8.buffer));
  }
  updateUint8Array(t8) {
    this.update(Uint8Array.from(t8));
  }
  updateWithString(t8) {
    return this.update(h2(t8));
  }
  update(t8) {
    return this._bufs.push(t8), this._totallen += t8.length, this;
  }
  digest() {
    const t8 = new Uint8Array(this._totallen);
    let s8 = 0;
    for (const n8 of this._bufs) t8.set(n8, s8), s8 += n8.length;
    return this.init(), this._xxHash32(t8, this._seed);
  }
  _xxHash32(h3, i9 = 0) {
    const o4 = h3;
    let u4 = i9 + r6 & 4294967295, a5 = 0;
    if (o4.length >= 16) {
      const n8 = [i9 + t7 + s6 & 4294967295, i9 + s6 & 4294967295, i9 + 0 & 4294967295, i9 - t7 & 4294967295], e3 = h3, r7 = e3.length - 16;
      let o5 = 0;
      for (a5 = 0; (4294967280 & a5) <= r7; a5 += 4) {
        const r8 = a5, h4 = e3[r8] + (e3[r8 + 1] << 8), i10 = e3[r8 + 2] + (e3[r8 + 3] << 8), u5 = h4 * s6 + (i10 * s6 << 16);
        let l7 = n8[o5] + u5 & 4294967295;
        l7 = l7 << 13 | l7 >>> 19;
        const f7 = 65535 & l7, p8 = l7 >>> 16;
        n8[o5] = f7 * t7 + (p8 * t7 << 16) & 4294967295, o5 = o5 + 1 & 3;
      }
      u4 = (n8[0] << 1 | n8[0] >>> 31) + (n8[1] << 7 | n8[1] >>> 25) + (n8[2] << 12 | n8[2] >>> 20) + (n8[3] << 18 | n8[3] >>> 14) & 4294967295;
    }
    u4 = u4 + h3.length & 4294967295;
    const l6 = h3.length - 4;
    for (; a5 <= l6; a5 += 4) {
      const t8 = a5, s8 = o4[t8] + (o4[t8 + 1] << 8), r7 = o4[t8 + 2] + (o4[t8 + 3] << 8);
      u4 = u4 + (s8 * n7 + (r7 * n7 << 16)) & 4294967295, u4 = u4 << 17 | u4 >>> 15, u4 = (65535 & u4) * e2 + ((u4 >>> 16) * e2 << 16) & 4294967295;
    }
    for (; a5 < o4.length; ++a5) {
      u4 += o4[a5] * r6, u4 = u4 << 11 | u4 >>> 21, u4 = (65535 & u4) * t7 + ((u4 >>> 16) * t7 << 16) & 4294967295;
    }
    return u4 ^= u4 >>> 15, u4 = ((65535 & u4) * s6 & 4294967295) + ((u4 >>> 16) * s6 << 16), u4 ^= u4 >>> 13, u4 = ((65535 & u4) * n7 & 4294967295) + ((u4 >>> 16) * n7 << 16), u4 ^= u4 >>> 16, u4 < 0 ? u4 + 4294967296 : u4;
  }
};

// node_modules/@arcgis/core/arcade/functions/string.js
function D4(t8) {
  if ("loaded" === t8.loadStatus && t8.user?.sourceJSON) {
    return t8.user.sourceJSON;
  }
  return null;
}
function J2(t8, e3) {
  return !!t8 && D(t8, e3?.restUrl || "");
}
function W3(t8, e3) {
  if (!t8 || !e3) return t8 === e3;
  if (t8.x === e3.x && t8.y === e3.y) {
    if (t8.hasZ) {
      if (t8.z !== e3.z) return false;
    } else if (e3.hasZ) return false;
    if (t8.hasM) {
      if (t8.m !== e3.m) return false;
    } else if (e3.hasM) return false;
    return true;
  }
  return false;
}
function B3(n8, o4, i9) {
  if (null !== n8) if (o(n8)) {
    if (o4.updateUint8Array([61]), i9.map.has(n8)) {
      const t8 = i9.map.get(n8);
      o4.updateIntArray([61237541 ^ t8]);
    } else {
      i9.map.set(n8, i9.currentLength++);
      for (const t8 of n8) B3(t8, o4, i9);
      i9.map.delete(n8), i9.currentLength--;
    }
    o4.updateUint8Array([199]);
  } else if (te(n8)) {
    if (o4.updateUint8Array([61]), i9.map.has(n8)) {
      const t8 = i9.map.get(n8);
      o4.updateIntArray([61237541 ^ t8]);
    } else {
      i9.map.set(n8, i9.currentLength++);
      for (const t8 of n8.toArray()) B3(t8, o4, i9);
      i9.map.delete(n8), i9.currentLength--;
    }
    o4.updateUint8Array([199]);
  } else {
    if (ne(n8)) return o4.updateIntArray([n8.toNumber()]), void o4.updateUint8Array([241]);
    if (re(n8)) return o4.updateIntArray([n8.toNumber()]), void o4.updateIntArray([257]);
    if (ie(n8)) return o4.updateIntArray([n8.toNumber()]), void o4.updateIntArray([263]);
    if (e(n8)) return o4.updateIntArray([n8.length]), o4.updateWithString(n8), void o4.updateUint8Array([41]);
    if (t(n8)) o4.updateUint8Array([true === n8 ? 1 : 0, 113]);
    else {
      if (n3(n8)) return o4.updateFloatArray([n8]), void o4.updateUint8Array([173]);
      if (n8 instanceof t5) throw new n4(i9.context, "UnsupportedHashType", i9.node);
      if (n8 instanceof t4) throw new n4(i9.context, "UnsupportedHashType", i9.node);
      if (!(n8 instanceof p2)) {
        if (H(n8)) throw new n4(i9.context, "UnsupportedHashType", i9.node);
        if (n8 instanceof _) return o4.updateIntArray([3833836621]), o4.updateIntArray([0]), o4.updateFloatArray([n8.x]), o4.updateIntArray([1]), o4.updateFloatArray([n8.y]), n8.hasZ && (o4.updateIntArray([2]), o4.updateFloatArray([n8.z])), n8.hasM && (o4.updateIntArray([3]), o4.updateFloatArray([n8.m])), o4.updateIntArray([3765347959]), void B3(n8.spatialReference.wkid, o4, i9);
        if (n8 instanceof j) {
          o4.updateIntArray([1266616829]);
          for (let t8 = 0; t8 < n8.rings.length; t8++) {
            const e3 = n8.rings[t8], r7 = [];
            let a5 = null, u4 = null;
            for (let o5 = 0; o5 < e3.length; o5++) {
              const i10 = n8.getPoint(t8, o5);
              if (0 === o5) a5 = i10;
              else if (W3(u4, i10)) continue;
              u4 = i10, o5 === e3.length - 1 && W3(a5, i10) || r7.push(i10);
            }
            o4.updateIntArray([1397116793, r7.length]);
            for (let t9 = 0; t9 < r7.length; t9++) {
              const e4 = r7[t9];
              o4.updateIntArray([3962308117, t9]), B3(e4, o4, i9), o4.updateIntArray([2716288009]);
            }
            o4.updateIntArray([2278822459]);
          }
          return o4.updateIntArray([3878477243]), void B3(n8.spatialReference.wkid, o4, i9);
        }
        if (n8 instanceof y) {
          o4.updateIntArray([4106883559]);
          for (let t8 = 0; t8 < n8.paths.length; t8++) {
            const e3 = n8.paths[t8];
            o4.updateIntArray([1397116793, e3.length]);
            for (let r7 = 0; r7 < e3.length; r7++) o4.updateIntArray([3962308117, r7]), B3(n8.getPoint(t8, r7), o4, i9), o4.updateIntArray([2716288009]);
            o4.updateIntArray([2278822459]);
          }
          return o4.updateIntArray([2568784753]), void B3(n8.spatialReference.wkid, o4, i9);
        }
        if (n8 instanceof m2) {
          o4.updateIntArray([588535921, n8.points.length]);
          for (let t8 = 0; t8 < n8.points.length; t8++) {
            const e3 = n8.getPoint(t8);
            o4.updateIntArray([t8]), B3(e3, o4, i9);
          }
          return o4.updateIntArray([1700171621]), void B3(n8.spatialReference.wkid, o4, i9);
        }
        if (n8 instanceof z) return o4.updateIntArray([3483648373]), o4.updateIntArray([0]), o4.updateFloatArray([n8.xmax]), o4.updateIntArray([1]), o4.updateFloatArray([n8.xmin]), o4.updateIntArray([2]), o4.updateFloatArray([n8.ymax]), o4.updateIntArray([3]), o4.updateFloatArray([n8.ymin]), n8.hasZ && (o4.updateIntArray([4]), o4.updateFloatArray([n8.zmax]), o4.updateIntArray([5]), o4.updateFloatArray([n8.zmin])), n8.hasM && (o4.updateIntArray([6]), o4.updateFloatArray([n8.mmax]), o4.updateIntArray([7]), o4.updateFloatArray([n8.mmin])), o4.updateIntArray([3622027469]), void B3(n8.spatialReference.wkid, o4, i9);
        if (n8 instanceof S) return o4.updateIntArray([14]), void 0 !== n8.wkid && null !== n8.wkid && o4.updateIntArray([n8.wkid]), n8.wkt && o4.updateWithString(n8.wkt), void (n8.wkt2 && o4.updateWithString(n8.wkt2));
        if (L(n8)) throw new n4(i9.context, "UnsupportedHashType", i9.node);
        if (B(n8)) throw new n4(i9.context, "UnsupportedHashType", i9.node);
        if (X(n8)) throw new n4(i9.context, "UnsupportedHashType", i9.node);
        if (n8 === P2) throw new n4(i9.context, "UnsupportedHashType", i9.node);
        throw new n4(i9.context, "UnsupportedHashType", i9.node);
      }
      if (o4.updateUint8Array([223]), i9.map.has(n8)) {
        const t8 = i9.map.get(n8);
        o4.updateIntArray([61237541 ^ t8]);
      } else {
        i9.map.set(n8, i9.currentLength++);
        for (const t8 of n8.keys()) {
          o4.updateIntArray([t8.length]), o4.updateWithString(t8), o4.updateUint8Array([251]);
          B3(n8.field(t8), o4, i9), o4.updateUint8Array([239]);
        }
        i9.map.delete(n8), i9.currentLength--;
      }
      o4.updateUint8Array([73]);
    }
  }
  else o4.updateUint8Array([0, 139]);
}
function E3(e3, m6) {
  e3.portal = function(e4, r7) {
    return m6(e4, r7, (n8, a5, u4) => (oe(u4, 1, 1, e4, r7), new t4(ge(u4[0]))));
  }, e3.typeof = function(t8, e4) {
    return m6(t8, e4, (r7, n8, i9) => {
      oe(i9, 1, 1, t8, e4);
      const s8 = E(i9[0]);
      if ("Unrecognized Type" === s8) throw new n4(t8, "UnrecognizedType", e4);
      return s8;
    });
  }, e3.trim = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => (oe(a5, 1, 1, t8, e4), ge(a5[0]).trim()));
  }, e3.tohex = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 1, 1, t8, e4);
      const i9 = Se(a5[0]);
      return isNaN(i9) ? i9 : i9.toString(16);
    });
  }, e3.upper = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => (oe(a5, 1, 1, t8, e4), ge(a5[0]).toUpperCase()));
  };
  const A2 = new o2(["every-word", "first-word"]);
  e3.proper = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 1, 2, t8, e4);
      const u4 = (a5.length >= 2 ? A2.lookup(ge(a5[1])) : null) ?? "every-word", s8 = /\s/, l6 = ge(a5[0]);
      let p8 = "", f7 = true;
      for (let t9 = 0; t9 < l6.length; t9++) {
        let e5 = l6[t9];
        if (s8.test(e5)) "every-word" === u4 && (f7 = true);
        else {
          e5.toUpperCase() !== e5.toLowerCase() && (f7 ? (e5 = e5.toUpperCase(), f7 = false) : e5 = e5.toLowerCase());
        }
        p8 += e5;
      }
      return p8;
    });
  }, e3.lower = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => (oe(a5, 1, 1, t8, e4), ge(a5[0]).toLowerCase()));
  };
  const w = new o2(["digits", "digits-hyphen", "digits-hyphen-braces", "digits-hyphen-parentheses"]);
  e3.guid = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 0, 1, t8, e4);
      switch (a5.length > 0 ? w.lookup(ge(a5[0])) : null) {
        case "digits":
          return n5().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return n5();
        case "digits-hyphen-parentheses":
          return "(" + n5() + ")";
        default:
          return "{" + n5() + "}";
      }
    });
  }, e3.standardizeguid = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 2, 2, t8, e4);
      let u4 = ge(a5[0]);
      if ("" === u4 || null === u4) return "";
      const s8 = /^(\{|\()?(?<partA>[0-9a-z]{8})(-?)(?<partB>[0-9a-z]{4})(-?)(?<partC>[0-9a-z]{4})(-?)(?<partD>[0-9a-z]{4})(-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(u4);
      if (!s8) return "";
      const l6 = s8.groups;
      switch (u4 = l6.partA + "-" + l6.partB + "-" + l6.partC + "-" + l6.partD + "-" + l6.partE, w.lookup(ge(a5[1]))) {
        case "digits":
          return u4.replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return u4;
        case "digits-hyphen-parentheses":
          return "(" + u4 + ")";
        default:
          return "{" + u4 + "}";
      }
    });
  }, e3.console = function(t8, e4) {
    return m6(t8, e4, (e5, r7, n8) => (0 === n8.length || (1 === n8.length ? t8.console(ge(n8[0])) : t8.console(ge(n8))), P2));
  }, e3.mid = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 2, 3, t8, e4);
      let u4 = Se(a5[1]);
      if (isNaN(u4)) return "";
      if (u4 = Math.max(0, u4), 2 === a5.length) return ge(a5[0]).slice(u4);
      let l6 = Se(a5[2]);
      return isNaN(l6) ? "" : (l6 < 0 && (l6 = 0), ge(a5[0]).slice(u4, u4 + l6));
    });
  }, e3.find = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 2, 3, t8, e4);
      let u4 = 0;
      if (a5.length > 2) {
        if (u4 = Se(z2(a5[2], 0)), isNaN(u4)) return -1;
        u4 < 0 && (u4 = 0);
      }
      return ge(a5[1]).indexOf(ge(a5[0]), u4);
    });
  }, e3.left = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 2, 2, t8, e4);
      let u4 = Se(a5[1]);
      return isNaN(u4) ? "" : (u4 < 0 && (u4 = 0), ge(a5[0]).slice(0, u4));
    });
  }, e3.right = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 2, 2, t8, e4);
      const u4 = Se(a5[1]);
      if (isNaN(u4) || u4 <= 0) return "";
      return ge(a5[0]).slice(-u4);
    });
  }, e3.split = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      let u4;
      oe(a5, 2, 4, t8, e4);
      let l6 = Se(z2(a5[2], -1));
      const c5 = Ae(z2(a5[3], false));
      if (-1 === l6 || null === l6 || true === c5 ? u4 = ge(a5[0]).split(ge(a5[1])) : (isNaN(l6) && (l6 = -1), l6 < -1 && (l6 = -1), u4 = ge(a5[0]).split(ge(a5[1]), l6)), false === c5) return u4;
      const d5 = [];
      for (let t9 = 0; t9 < u4.length && !(-1 !== l6 && d5.length >= l6); t9++) "" !== u4[t9] && void 0 !== u4[t9] && d5.push(u4[t9]);
      return d5;
    });
  }, e3.text = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => (oe(a5, 1, 2, t8, e4), be(a5[0], a5[1])));
  }, e3.concatenate = function(t8, e4) {
    return m6(t8, e4, (t9, e5, r7) => {
      const n8 = [];
      if (r7.length < 1) return "";
      if (o(r7[0])) {
        const t10 = z2(r7[2], "");
        for (let e6 = 0; e6 < r7[0].length; e6++) n8[e6] = be(r7[0][e6], t10);
        return r7.length > 1 ? n8.join(r7[1]) : n8.join("");
      }
      if (te(r7[0])) {
        const t10 = z2(r7[2], "");
        for (let e6 = 0; e6 < r7[0].length(); e6++) n8[e6] = be(r7[0].get(e6), t10);
        return r7.length > 1 ? n8.join(r7[1]) : n8.join("");
      }
      for (let a5 = 0; a5 < r7.length; a5++) n8[a5] = be(r7[a5]);
      return n8.join("");
    });
  }, e3.reverse = function(t8, e4) {
    return m6(t8, e4, (r7, n8, i9) => {
      if (oe(i9, 1, 1, t8, e4), o(i9[0])) {
        const t9 = i9[0].slice();
        return t9.reverse(), t9;
      }
      if (te(i9[0])) {
        const t9 = i9[0].toArray().slice();
        return t9.reverse(), t9;
      }
      throw new n4(t8, "InvalidParameter", e4);
    });
  }, e3.replace = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 3, 4, t8, e4);
      const u4 = ge(a5[0]), s8 = ge(a5[1]), l6 = ge(a5[2]);
      return 4 !== a5.length || Ae(a5[3]) ? Y(u4, s8, l6) : u4.replace(s8, l6);
    });
  }, e3.urlencode = function(t8, e4) {
    return m6(t8, e4, (n8, a5, u4) => {
      if (oe(u4, 1, 1, t8, e4), null === u4[0]) return "";
      if (u4[0] instanceof p2) {
        let t9 = "";
        for (const e5 of u4[0].keys()) {
          const r7 = u4[0].field(e5);
          "" !== t9 && (t9 += "&"), t9 += null === r7 ? encodeURIComponent(e5) + "=" : encodeURIComponent(e5) + "=" + encodeURIComponent(r7);
        }
        return t9;
      }
      return encodeURIComponent(ge(u4[0]));
    });
  }, e3.hash = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => {
      oe(a5, 1, 1, t8, e4);
      const i9 = new i7(0);
      return B3(a5[0], i9, { context: t8, node: e4, map: /* @__PURE__ */ new Map(), currentLength: 0 }), i9.digest();
    });
  }, e3.convertdirection = function(t8, e4) {
    return m6(t8, e4, (r7, n8, a5) => (oe(a5, 3, 3, t8, e4), he(a5[0], a5[1], a5[2])));
  }, e3.fromjson = function(t8, e4) {
    return m6(t8, e4, (n8, u4, s8) => {
      if (oe(s8, 1, 1, t8, e4), false === e(s8[0])) throw new n4(t8, "InvalidParameter", e4);
      return p2.convertJsonToArcade(JSON.parse(ge(s8[0])), Ke(t8));
    });
  }, e3.tocharcode = function(t8, e4) {
    return m6(t8, e4, (r7, n8, u4) => {
      oe(u4, 1, 2, t8, e4);
      const l6 = Se(z2(u4[1], 0)), f7 = ge(u4[0]);
      if (0 === f7.length && 1 === u4.length) return null;
      if (f7.length <= l6 || l6 < 0) throw new n4(t8, "OutOfBounds", e4);
      return f7.charCodeAt(l6);
    });
  }, e3.tocodepoint = function(t8, e4) {
    return m6(t8, e4, (r7, n8, u4) => {
      oe(u4, 1, 2, t8, e4);
      const l6 = Se(z2(u4[1], 0)), f7 = ge(u4[0]);
      if (0 === f7.length && 1 === u4.length) return null;
      if (f7.length <= l6 || l6 < 0) throw new n4(t8, "OutOfBounds", e4);
      return f7.codePointAt(l6);
    });
  }, e3.fromcharcode = function(t8, e4) {
    return m6(t8, e4, (r7, n8, o4) => {
      if (o4.length < 1) throw new n4(t8, "WrongNumberOfParameters", e4);
      const i9 = o4.map((t9) => Math.trunc(Se(t9))).filter((t9) => t9 >= 0 && t9 <= 65535);
      return 0 === i9.length ? null : String.fromCharCode.apply(null, i9);
    });
  }, e3.fromcodepoint = function(t8, e4) {
    return m6(t8, e4, (r7, n8, o4) => {
      if (o4.length < 1) throw new n4(t8, "WrongNumberOfParameters", e4);
      let i9;
      try {
        i9 = o4.map((t9) => Math.trunc(Se(t9))).filter((t9) => t9 <= 1114111 && t9 >>> 0 === t9);
      } catch (u4) {
        return null;
      }
      return 0 === i9.length ? null : String.fromCodePoint.apply(null, i9);
    });
  }, e3.getuser = function(e4, n8) {
    return m6(e4, n8, (u4, s8, l6) => {
      oe(l6, 0, 2, e4, n8);
      let f7 = z2(l6[1], "");
      if (f7 = true === f7 || false === f7 ? "" : ge(f7), null !== f7 && "" !== f7) return null;
      if (0 === l6.length || l6[0] instanceof t4) {
        let t8 = null;
        if (t8 = e4.services?.portal ? e4.services.portal : M2.getDefault(), l6.length > 0) {
          if (!J2(l6[0].field("url"), t8)) return null;
        }
        if (!t8) return null;
        if ("" === f7) {
          const n9 = D4(t8);
          if (n9) {
            const t9 = JSON.parse(JSON.stringify(n9));
            for (const e5 of ["lastLogin", "created", "modified"]) void 0 !== t9[e5] && null !== t9[e5] && (t9[e5] = new Date(t9[e5]));
            return p2.convertObjectToArcadeDictionary(t9, Ke(e4));
          }
        }
        return null;
      }
      throw new n4(e4, "InvalidParameter", n8);
    });
  }, e3.getenvironment = function(t8, e4) {
    return m6(t8, e4, (n8, a5, i9) => (oe(i9, 0, 0, t8, e4), p2.convertObjectToArcadeDictionary(Xe(Ke(t8), t8.spatialReference), Ke(t8), true)));
  }, e3.standardizefilename = function(t8, e4) {
    return m6(t8, e4, (t9, e5, r7) => {
      oe(r7, 1, 1, t9, e5);
      const [n8] = r7;
      if (null == n8) return "";
      if (!e(n8)) throw new n4(t9, "InvalidParameter", e5);
      return n8.replaceAll(/[<>"?*]/g, "_").replaceAll(/[/\\|]/g, "-").replaceAll(":", ", ");
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/track.js
var c4;
async function s7() {
  null == c4 && (c4 = await import("./geodeticDistanceOperator-V6LIGEQO.js"), await c4.load());
}
function i8(t8) {
  const n8 = t8.track;
  if (null == n8) throw new n4(t8, "InvalidParameter", null);
  return n8;
}
function u3(t8, n8, r7, e3) {
  const o4 = Math.max(0, f6(t8, n8)), a5 = Math.max(0, f6(t8, r7));
  return t8.observations.slice(o4, a5).map((t9, n9) => e3(t9, n9 + o4));
}
function f6(t8, n8) {
  return t8.currentObservationIndex + n8;
}
function l5(t8, n8) {
  const e3 = f6(t8, n8);
  if (e3 < 0 || e3 >= t8.observations.length) throw new n4(null, "InvalidParameter", null);
  return e3;
}
function d4(t8, n8) {
  const { stats: r7 } = t8.observations[n8];
  if (null != r7.totalDistance) return r7.totalDistance;
  if (0 === n8) return r7.totalDistance = 0;
  let e3, o4 = 0;
  for (e3 = n8 - 1; e3 > 0; e3--) {
    const n9 = t8.observations[e3].stats;
    if (null != n9.totalDistance) {
      o4 = n9.totalDistance;
      break;
    }
  }
  for (let a5 = e3 + 1; a5 <= n8; a5++) {
    const n9 = t8.observations[a5];
    o4 += m5(t8, a5), n9.stats.totalDistance = o4;
  }
  return o4;
}
function m5(t8, n8) {
  const r7 = t8.observations[n8], e3 = r7.stats;
  if (null != e3.distance) return e3.distance;
  if (0 === n8) return e3.distance = 0;
  const o4 = t8.observations[n8 - 1];
  return e3.distance = c4.execute(o4.feature.geometry(), r7.feature.geometry());
}
function T2(t8, n8) {
  const r7 = t8.observations[n8], e3 = r7.stats;
  if (null != e3.speed) return e3.speed;
  if (0 === n8) return e3.speed = 0;
  const o4 = t8.observations[n8 - 1], a5 = r7.endTime - o4.startTime;
  if (a5 <= 0) return e3.speed = 0;
  const c5 = m5(t8, n8);
  return e3.speed = c5 / (a5 / 1e3);
}
function v3(t8, n8) {
  const r7 = t8.observations[n8], e3 = r7.stats;
  if (null != e3.acceleration) return e3.acceleration;
  if (0 === n8) return e3.acceleration = 0;
  const o4 = t8.observations[n8 - 1], a5 = r7.endTime - o4.startTime;
  if (a5 <= 0) return e3.acceleration = 0;
  const c5 = T2(t8, n8), s8 = T2(t8, n8 - 1);
  return e3.acceleration = (c5 - s8) / (a5 / 1e3);
}
function b4(r7, c5) {
  r7[r4("TrackIndex")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => (oe(r8, 0, 0, t9, n9), i8(t9).currentObservationIndex));
  }, r7[r4("TrackWindow")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 2, 2, t9, n9);
      const a5 = Se(r8[0]), c6 = Se(r8[1]);
      return u3(i8(t9), a5, c6, (t10) => t10.feature);
    });
  }, r7[r4("TrackFieldWindow")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 3, 3, t9, n9);
      const c6 = ge(r8[0]), s8 = Se(r8[1]), f7 = Se(r8[2]);
      return u3(i8(t9), s8, f7, (t10) => t10.feature.field(c6));
    });
  }, r7[r4("TrackGeometryWindow")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 2, 2, t9, n9);
      const a5 = Se(r8[0]), c6 = Se(r8[1]);
      return u3(i8(t9), a5, c6, (t10) => t10.feature.geometry());
    });
  }, r7[r4("TrackStartTime")] = function(n8, r8) {
    return c5(n8, r8, (n9, r9, o4) => (oe(o4, 0, 0, n9, r9), m.epochToArcadeDate(i8(n9).observations[0].startTime, n9.timeZone ?? "system")));
  }, r7[r4("TrackCurrentTime")] = function(n8, r8) {
    return c5(n8, r8, (n9, r9, o4) => {
      oe(o4, 0, 0, n9, r9);
      const a5 = i8(n9);
      return m.epochToArcadeDate(a5.observations[a5.currentObservationIndex].startTime, n9.timeZone ?? "system");
    });
  }, r7[r4("TrackDuration")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 0, 0, t9, n9);
      const o4 = i8(t9);
      return o4.observations[o4.currentObservationIndex].startTime - o4.observations[0].startTime;
    });
  }, r7[r4("TrackCurrentDistance")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 0, 0, t9, n9);
      const o4 = i8(t9);
      return d4(o4, o4.currentObservationIndex);
    });
  }, r7[r4("TrackDistanceAt")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 1, 1, t9, n9);
      const a5 = Se(r8[0]), c6 = i8(t9);
      return d4(c6, l5(c6, a5));
    });
  }, r7[r4("TrackDistanceWindow")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 2, 2, t9, n9);
      const a5 = Se(r8[0]), c6 = Se(r8[1]), s8 = i8(t9);
      return u3(s8, a5, c6, (t10, n10) => d4(s8, n10));
    });
  }, r7[r4("TrackCurrentSpeed")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 0, 0, t9, n9);
      const o4 = i8(t9);
      return T2(o4, o4.currentObservationIndex);
    });
  }, r7[r4("TrackSpeedAt")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 1, 1, t9, n9);
      const a5 = Se(r8[0]), c6 = i8(t9);
      return T2(c6, l5(c6, a5));
    });
  }, r7[r4("TrackSpeedWindow")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 2, 2, t9, n9);
      const a5 = Se(r8[0]), c6 = Se(r8[1]), s8 = i8(t9);
      return u3(s8, a5, c6, (t10, n10) => T2(s8, n10));
    });
  }, r7[r4("TrackCurrentAcceleration")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 0, 0, t9, n9);
      const o4 = i8(t9);
      return v3(o4, o4.currentObservationIndex);
    });
  }, r7[r4("TrackAccelerationAt")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 1, 1, t9, n9);
      const a5 = Se(r8[0]), c6 = i8(t9);
      return v3(c6, l5(c6, a5));
    });
  }, r7[r4("TrackAccelerationWindow")] = function(t8, n8) {
    return c5(t8, n8, (t9, n9, r8) => {
      oe(r8, 2, 2, t9, n9);
      const a5 = Se(r8[0]), c6 = Se(r8[1]), s8 = i8(t9);
      return u3(s8, a5, c6, (t10, n10) => v3(s8, n10));
    });
  };
}

export {
  s3 as s,
  s4 as s2,
  i5 as i,
  l2 as l,
  o3 as o,
  l3 as l2,
  u2 as u,
  p4 as p,
  f3 as f,
  d2 as d,
  b2 as b,
  g2 as g,
  p5 as p2,
  j2 as j,
  P5 as P,
  _2 as _,
  g4 as g2,
  a4 as a,
  E3 as E,
  s7 as s3,
  b4 as b2
};
//# sourceMappingURL=chunk-YE6V3FCN.js.map
