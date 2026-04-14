import {
  E,
  P as P2,
  _ as _2,
  a,
  b2,
  g2 as g,
  i as i2,
  j,
  l,
  o as o2,
  p2 as p3,
  s as s2,
  s2 as s3
} from "./chunk-7Y3366T7.js";
import {
  M,
  b,
  p as p2,
  x,
  y
} from "./chunk-O5OA3ODZ.js";
import "./chunk-6SO43BSO.js";
import {
  T
} from "./chunk-N6C22INU.js";
import {
  B as B2
} from "./chunk-IBGVTF2C.js";
import "./chunk-U56GM7CD.js";
import "./chunk-NJEFNUML.js";
import "./chunk-PRGQEMCH.js";
import "./chunk-VSV5RZS5.js";
import "./chunk-TZUET3WW.js";
import {
  r,
  t as t2
} from "./chunk-ORHXWUYE.js";
import "./chunk-ZTWGQF5T.js";
import "./chunk-IKCUBMQP.js";
import "./chunk-YVZGGELN.js";
import {
  I as I2
} from "./chunk-PZPVYO2I.js";
import {
  p
} from "./chunk-JWKKLHJV.js";
import {
  B,
  H,
  I,
  L,
  Le,
  P,
  Q,
  R,
  Se,
  U,
  _,
  de,
  e as e2,
  ge,
  n as n4,
  oe,
  q,
  r as r2,
  s,
  s2 as s4,
  te,
  v,
  ye
} from "./chunk-PNSNEWSP.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-J6FIECQJ.js";
import "./chunk-WLPGGM5I.js";
import "./chunk-JKKDTCKU.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-UTMQRFW7.js";
import "./chunk-4L74KNVT.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-QGNQJYZT.js";
import "./chunk-K6KUHFK2.js";
import "./chunk-V44XD4F6.js";
import "./chunk-G6RPDJXV.js";
import {
  i,
  n as n3
} from "./chunk-B22UQGUL.js";
import "./chunk-IRGX4DBZ.js";
import "./chunk-3PLUKWC5.js";
import "./chunk-Z3PP4SLW.js";
import "./chunk-AHEHRQEH.js";
import "./chunk-DVV55TEN.js";
import "./chunk-KGOQYI3F.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import {
  t as t3
} from "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-KYLXXMSB.js";
import "./chunk-NLL3NYBQ.js";
import "./chunk-M756WYLA.js";
import {
  e,
  n as n2,
  o,
  t
} from "./chunk-UDRKO2UK.js";
import "./chunk-FMYEMU2E.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-GF53CKBB.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
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
import {
  n2 as n
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/arcadeAsyncRuntime.js
var ne = () => n.getLogger("esri.arcade.arcadeAsyncRuntime");
var re = /* @__PURE__ */ Symbol("uninitialized");
function oe2(e3) {
  if (e3 === re) throw new n3(null, "InvalidIdentifier", null);
}
function ae(e3) {
  return oe2(e3), e3;
}
function ie(t4, n5) {
  const r3 = r(n5);
  if (null !== t4.localScope) {
    const e3 = t4.localScope[r3];
    if (void 0 !== e3) return { scope: t4.localScope, id: r3, var: e3 };
  }
  const o3 = t4.globalScope[r3];
  if (void 0 !== o3) return { scope: t4.globalScope, id: r3, var: o3 };
  throw new n3(t4, "InvalidIdentifier", n5);
}
function se(t4, n5, r3 = "InvalidIdentifier") {
  const o3 = r(n5);
  if (null !== t4.localScope) {
    const e3 = t4.localScope[o3];
    if (void 0 !== e3) return oe2(e3), e3.value;
  }
  const a2 = t4.globalScope[o3];
  if (void 0 !== a2) return oe2(a2), a2.value;
  throw new n3(t4, r3, n5);
}
var ce = function() {
};
async function le(e3, t4) {
  const n5 = [];
  for (let r3 = 0; r3 < t4.arguments.length; r3++) n5.push(await he(e3, t4.arguments[r3]));
  return n5;
}
async function ue(e3, t4, n5) {
  if (true === t4.preparsed) return n5(e3, null, t4.arguments);
  return n5(e3, t4, await le(e3, t4));
}
ce.prototype = Object.freeze(/* @__PURE__ */ Object.create(null));
var fe = class extends r2 {
  constructor(e3, t4, n5, r3) {
    super(), this.definition = e3, this.context = t4, this._params = n5, this._locals = r3;
  }
  createFunction(e3) {
    return (...t4) => {
      const n5 = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, timeZone: this.context.timeZone ?? null, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, services: this.context.services, abortSignal: this.context.abortSignal, localScope: new ce(), depthCounter: { depth: e3.depthCounter.depth + 1 }, globalScope: this.context.globalScope, track: this.context.track };
      if (n5.depthCounter.depth > 64) throw new n3(e3, "MaximumCallDepth", null);
      return pe(n5, this.definition.body, this._params, this._locals, t4, null);
    };
  }
  call(e3, t4) {
    return de2(e3, t4, (n5, r3, o3) => {
      const a2 = { spatialReference: e3.spatialReference, services: e3.services, console: e3.console, libraryResolver: e3.libraryResolver, exports: e3.exports, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: new ce(), abortSignal: e3.abortSignal, globalScope: e3.globalScope, depthCounter: { depth: e3.depthCounter.depth + 1 }, track: e3.track };
      if (a2.depthCounter.depth > 64) throw new n3(e3, "MaximumCallDepth", t4);
      return pe(a2, this.definition.body, this._params, this._locals, o3, t4);
    });
  }
  marshalledCall(e3, t4, n5, r3) {
    return r3(e3, t4, async (o3, a2, i3) => {
      const s5 = { spatialReference: e3.spatialReference, services: e3.services, globalScope: n5.globalScope, depthCounter: { depth: e3.depthCounter.depth + 1 }, libraryResolver: e3.libraryResolver, exports: e3.exports, console: e3.console, abortSignal: e3.abortSignal, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: new ce(), track: e3.track };
      return i3 = i3.map((t5) => !L(t5) || t5 instanceof s4 ? t5 : n4(t5, e3, r3)), n4(await pe(s5, this.definition.body, this._params, this._locals, i3, t4), n5, r3);
    });
  }
};
async function pe(e3, t4, n5, r3, o3, a2) {
  if (n5.length !== o3.length) throw new n3(e3, "WrongNumberOfParameters", a2);
  if (null != e3.localScope) {
    for (let t5 = 0; t5 < n5.length; t5++) e3.localScope[n5[t5]] = { value: o3[t5] };
    for (const t5 of r3) e3.localScope[t5] = re;
  }
  const i3 = await me(e3, t4);
  if (i3 instanceof R) return i3.value;
  if (i3 === I) throw new n3(e3, "UnexpectedToken", a2);
  if (i3 === _) throw new n3(e3, "UnexpectedToken", a2);
  return i3 instanceof v ? i3.value : i3;
}
var we = class _we extends s {
  constructor(e3) {
    super(), this.moduleGlobalContext = e3;
  }
  global(t4) {
    const n5 = r(t4);
    if (!this.moduleGlobalContext.exports.has(n5)) throw new n3(null, "ModuleExportNotFound", null);
    const r3 = this.moduleGlobalContext.globalScope[n5];
    if (oe2(r3), L(r3.value) && !(r3.value instanceof s4)) {
      const e3 = new s4();
      return e3.fn = r3.value, e3.parameterEvaluator = ue, e3.context = this.moduleGlobalContext, this.moduleGlobalContext.globalScope[n5] = { value: e3 }, e3;
    }
    return r3.value;
  }
  setGlobal(t4, n5) {
    if (L(n5)) throw new n3(null, "AssignModuleFunction", null);
    const r3 = r(t4);
    if (!this.moduleGlobalContext.exports.has(r3)) throw new n3(null, "ModuleExportNotFound", null);
    this.moduleGlobalContext.globalScope[r3] = { value: n5 };
  }
  hasGlobal(t4) {
    return this.moduleGlobalContext.exports.has(r(t4));
  }
  static async load(e3, n5) {
    const { globals: a2, exports: i3 } = s3(n5), s5 = new it();
    for (const t4 of a2) t4 in s5 || (s5[t4] = re);
    const c = e3.spatialReference ?? S.WebMercator, l2 = { lrucache: e3.lrucache, interceptor: e3.interceptor, services: e3.services, console: e3.console ?? ct, abortSignal: e3.abortSignal ?? t2, timeZone: e3.timeZone ?? null, spatialReference: c, track: null, depthCounter: { depth: 1 }, libraryResolver: new s2(e3.libraryResolver._moduleSingletons, n5.loadedModules), exports: i3, localScope: null, globalScope: s5 };
    return await Ae(l2, n5), new _we(l2);
  }
};
async function de2(e3, t4, n5) {
  if (true === t4.preparsed) return n5(e3, null, t4.arguments);
  return n5(e3, t4, await le(e3, t4));
}
async function he(e3, t4) {
  t4.breakpoint && await t4.breakpoint();
  try {
    switch (t4.type) {
      case "UpdateExpression":
        return await Re(e3, t4);
      case "AssignmentExpression":
        return await Ce(e3, t4);
      case "TemplateLiteral":
        return await Qe(e3, t4);
      case "Identifier":
        return $e(e3, t4);
      case "MemberExpression":
        return await _e(e3, t4);
      case "Literal":
        return t4.value;
      case "CallExpression":
        return await He(e3, t4);
      case "UnaryExpression":
        return await Ve(e3, t4);
      case "BinaryExpression":
        return await Te(e3, t4);
      case "LogicalExpression":
        return await Ye(e3, t4);
      case "ArrayExpression":
        return await Ke(e3, t4);
      case "ObjectExpression":
        return await ge2(e3, t4);
      case "MemberAccessChainExpression":
        return await We(e3, t4);
      case "SafeMemberExpression":
        throw ne().error("SafeMemberExpression outside of MemberAccessChainExpression"), new n3(null, "Unrecognized", t4);
      default:
        throw new n3(e3, "Unrecognized", t4);
    }
  } catch (n5) {
    throw i(e3, t4, n5);
  }
}
async function me(e3, t4) {
  t4.breakpoint && await t4.breakpoint();
  try {
    switch (t4.type) {
      case "ImportDeclaration":
        return await Ge(e3, t4);
      case "ExportNamedDeclaration":
        return await Le2(e3, t4);
      case "VariableDeclaration":
        return await ze(e3, t4);
      case "BlockStatement":
        return await Ae(e3, t4);
      case "FunctionDeclaration":
        return await Ue(e3, t4);
      case "ReturnStatement":
        return await Be(e3, t4);
      case "IfStatement":
        return await Me(e3, t4);
      case "ExpressionStatement":
        return await Ee(e3, t4);
      case "ForStatement":
        return await be(e3, t4);
      case "WhileStatement":
        return await ye2(e3, t4);
      case "ForInStatement":
        return await je(e3, t4);
      case "ForOfStatement":
        return await Oe(e3, t4);
      case "BreakStatement":
        return I;
      case "EmptyStatement":
        return P;
      case "ContinueStatement":
        return _;
      default:
        throw new n3(e3, "Unrecognized", t4);
    }
  } catch (n5) {
    throw i(e3, t4, n5);
  }
}
async function ge2(e3, t4) {
  const n5 = [];
  for (let i3 = 0; i3 < t4.properties.length; i3++) {
    const r4 = t4.properties[i3], o4 = await he(e3, r4.value), a3 = "Identifier" === r4.key.type ? r4.key.name : await he(e3, r4.key);
    n5[i3] = { key: a3, value: o4 };
  }
  const r3 = /* @__PURE__ */ Object.create(null), o3 = /* @__PURE__ */ new Map();
  for (let i3 = 0; i3 < n5.length; i3++) {
    const a3 = n5[i3];
    if (L(a3.value)) throw new n3(e3, "NoFunctionInDictionary", t4);
    if (false === e(a3.key)) throw new n3(e3, "KeyMustBeString", t4);
    let s5 = a3.key.toString();
    const c = s5.toLowerCase();
    o3.has(c) ? s5 = o3.get(c) : o3.set(c, s5), a3.value === P ? r3[s5] = null : r3[s5] = a3.value;
  }
  const a2 = new p(r3);
  return a2.immutable = false, a2;
}
async function ye2(e3, t4) {
  let n5 = await he(e3, t4.test);
  if (false === n5) return P;
  if (true !== n5) throw new n3(e3, "BooleanConditionRequired", t4);
  for (; true === n5; ) {
    const r3 = await me(e3, t4.body);
    if (r3 === I) break;
    if (r3 instanceof R) return r3;
    if (n5 = await he(e3, t4.test), true !== n5 && false !== n5) throw new n3(e3, "BooleanConditionRequired", t4);
  }
  return P;
}
async function be(e3, t4) {
  try {
    for (null !== t4.init && ("VariableDeclaration" === t4.init.type ? await me(e3, t4.init) : await he(e3, t4.init)); ; ) {
      if (null !== t4.test) {
        const n6 = await he(e3, t4.test);
        if (true === e3.abortSignal?.aborted) throw new n3(e3, "Cancelled", t4);
        if (false === n6) break;
        if (true !== n6) throw new n3(e3, "BooleanConditionRequired", t4);
      }
      const n5 = await me(e3, t4.body);
      if (n5 === I) break;
      if (n5 instanceof R) return n5;
      null !== t4.update && await he(e3, t4.update);
    }
    return P;
  } catch (n5) {
    throw n5;
  }
}
async function ve(e3, t4, n5, r3, o3 = "i") {
  const a2 = n5.length;
  for (let i3 = 0; i3 < a2; i3++) {
    if ("k" === o3) {
      if (i3 >= n5.length) throw new n3(e3, "OutOfBounds", t4);
      r3.scope[r3.id] = { value: n5[i3] };
    } else r3.scope[r3.id] = { value: i3 };
    const a3 = await me(e3, t4.body);
    if (a3 === I) break;
    if (a3 instanceof R) return a3;
  }
  return P;
}
async function xe(e3, t4, n5, r3, o3 = "i") {
  const a2 = n5.length();
  for (let i3 = 0; i3 < a2; i3++) {
    r3.scope[r3.id] = "k" === o3 ? { value: n5.get(i3) } : { value: i3 };
    const a3 = await me(e3, t4.body);
    if (a3 === I) break;
    if (a3 instanceof R) return a3;
  }
  return P;
}
async function Se2(e3, t4, n5, r3) {
  e: for await (const o3 of await n5.queryAll(e3.abortSignal)) for (const a2 of o3) {
    r3.scope[r3.id] = { value: I2.createFromGraphicLikeObject(a2.geometry, a2.attributes, n5, e3.timeZone) };
    const o4 = await me(e3, t4.body);
    if (o4 === I) break e;
    if (o4 instanceof R) return o4;
  }
  return P;
}
async function ke(e3, t4, n5, r3) {
  for (const o3 of n5.keys()) {
    const a2 = n5.field(o3);
    r3.scope[r3.id] = { value: p.containerEntry(o3, a2) };
    const i3 = await me(e3, t4.body);
    if (i3 === I) break;
    if (i3 instanceof R) return i3;
  }
  return P;
}
async function Fe(e3, t4, n5, r3) {
  for (const o3 of p2(n5)) {
    const a2 = y(n5, o3, e3, t4);
    r3.scope[r3.id] = { value: p.containerEntry(o3, a2) };
    const i3 = await me(e3, t4.body);
    if (i3 === I) break;
    if (i3 instanceof R) return i3;
  }
  return P;
}
async function je(e3, t4) {
  const n5 = await he(e3, t4.right);
  "VariableDeclaration" === t4.left.type && await me(e3, t4.left);
  const r3 = ie(e3, "VariableDeclaration" === t4.left.type ? t4.left.declarations[0].id : t4.left);
  return o(n5) || e(n5) ? await ve(e3, t4, n5, r3) : te(n5) ? await xe(e3, t4, n5, r3) : n5 instanceof p || Q(n5) ? await ve(e3, t4, n5.keys(), r3, "k") : B(n5) ? await Se2(e3, t4, n5, r3) : U(n5) ? await ve(e3, t4, p2(n5), r3, "k") : P;
}
async function Oe(e3, t4) {
  const n5 = await he(e3, t4.right);
  "VariableDeclaration" === t4.left.type && await me(e3, t4.left);
  const r3 = ie(e3, "VariableDeclaration" === t4.left.type ? t4.left.declarations[0].id : t4.left);
  return o(n5) || e(n5) ? await ve(e3, t4, n5, r3, "k") : te(n5) ? await xe(e3, t4, n5, r3, "k") : n5 instanceof p || Q(n5) ? await ke(e3, t4, n5, r3) : B(n5) ? await Se2(e3, t4, n5, r3) : U(n5) ? await Fe(e3, t4, n5, r3) : P;
}
async function Re(e3, t4) {
  const n5 = t4.argument;
  if ("CallExpression" === n5.type) throw new n3(e3, "NeverReach", t4);
  if ("MemberExpression" === n5.type) {
    const r4 = await he(e3, n5.object);
    let o4, a3;
    if (true === n5.computed) o4 = await he(e3, n5.property);
    else {
      if ("Identifier" !== n5.property.type) throw new n3(e3, "Unrecognized", t4);
      o4 = n5.property.name;
    }
    if (o(r4)) {
      if (!n2(o4)) throw new n3(e3, "ArrayAccessMustBeNumber", t4);
      if (o4 < 0 && (o4 = r4.length + o4), o4 < 0 || o4 >= r4.length) throw new n3(e3, "OutOfBounds", t4);
      a3 = Se(r4[o4]), r4[o4] = "++" === t4.operator ? a3 + 1 : a3 - 1;
    } else if (r4 instanceof p) {
      if (false === e(o4)) throw new n3(e3, "KeyAccessorMustBeString", t4);
      if (true !== r4.hasField(o4)) throw new n3(e3, "FieldNotFound", t4, { key: o4 });
      a3 = Se(r4.field(o4)), r4.setField(o4, "++" === t4.operator ? a3 + 1 : a3 - 1);
    } else if (r4 instanceof we) {
      if (false === e(o4)) throw new n3(e3, "ModuleAccessorMustBeString", t4);
      if (true !== r4.hasGlobal(o4)) throw new n3(e3, "ModuleExportNotFound", t4);
      a3 = Se(r4.global(o4)), r4.setGlobal(o4, "++" === t4.operator ? a3 + 1 : a3 - 1);
    } else {
      if (!H(r4)) throw te(r4) ? new n3(e3, "Immutable", t4) : new n3(e3, "InvalidParameter", t4);
      if (false === e(o4)) throw new n3(e3, "KeyAccessorMustBeString", t4);
      if (true !== r4.hasField(o4)) throw new n3(e3, "FieldNotFound", t4, { key: o4 });
      a3 = Se(r4.field(o4)), r4.setField(o4, "++" === t4.operator ? a3 + 1 : a3 - 1);
    }
    return false === t4.prefix ? a3 : "++" === t4.operator ? a3 + 1 : a3 - 1;
  }
  const r3 = ie(e3, n5), o3 = Se(ae(r3.var).value), a2 = "++" === t4.operator ? o3 + 1 : o3 - 1;
  return r3.scope[r3.id] = { value: a2 }, false === t4.prefix ? o3 : "++" === t4.operator ? o3 + 1 : o3 - 1;
}
function Ie(e3, t4, n5, r3, o3) {
  switch (t4) {
    case "=":
      return e3 === P ? null : e3;
    case "/=":
      return Se(n5) / Se(e3);
    case "*=":
      return Se(n5) * Se(e3);
    case "-=":
      return Se(n5) - Se(e3);
    case "+=":
      return e(n5) || e(e3) ? ge(n5) + ge(e3) : Se(n5) + Se(e3);
    case "%=":
      return Se(n5) % Se(e3);
    default:
      throw new n3(o3, "UnsupportedOperator", r3);
  }
}
async function Ce(e3, t4) {
  const n5 = t4.left;
  if ("MemberExpression" === n5.type) {
    const r4 = await he(e3, n5.object);
    let o4;
    if (true === n5.computed) o4 = await he(e3, n5.property);
    else {
      if ("Identifier" !== n5.property.type) throw new n3(e3, "InvalidIdentifier", t4);
      o4 = n5.property.name;
    }
    const a2 = await he(e3, t4.right);
    if (o(r4)) {
      if (!n2(o4)) throw new n3(e3, "ArrayAccessMustBeNumber", t4);
      if (o4 < 0 && (o4 = r4.length + o4), o4 < 0 || o4 > r4.length) throw new n3(e3, "OutOfBounds", t4);
      if (o4 === r4.length) {
        if ("=" !== t4.operator) throw new n3(e3, "OutOfBounds", t4);
        r4[o4] = Ie(a2, t4.operator, r4[o4], t4, e3);
      } else r4[o4] = Ie(a2, t4.operator, r4[o4], t4, e3);
    } else if (r4 instanceof p) {
      if (false === e(o4)) throw new n3(e3, "KeyAccessorMustBeString", t4);
      if (true === r4.hasField(o4)) r4.setField(o4, Ie(a2, t4.operator, r4.field(o4), t4, e3));
      else {
        if ("=" !== t4.operator) throw new n3(e3, "FieldNotFound", t4, { key: o4 });
        r4.setField(o4, Ie(a2, t4.operator, null, t4, e3));
      }
    } else if (r4 instanceof we) {
      if (false === e(o4)) throw new n3(e3, "KeyAccessorMustBeString", t4);
      if (true !== r4.hasGlobal(o4)) throw new n3(e3, "ModuleExportNotFound", t4);
      r4.setGlobal(o4, Ie(a2, t4.operator, r4.global(o4), t4, e3));
    } else {
      if (!H(r4)) throw te(r4) ? new n3(e3, "Immutable", t4) : new n3(e3, "InvalidParameter", t4);
      if (false === e(o4)) throw new n3(e3, "KeyAccessorMustBeString", t4);
      if (true === r4.hasField(o4)) r4.setField(o4, Ie(a2, t4.operator, r4.field(o4), t4, e3));
      else {
        if ("=" !== t4.operator) throw new n3(e3, "FieldNotFound", t4, { key: o4 });
        r4.setField(o4, Ie(a2, t4.operator, null, t4, e3));
      }
    }
    return P;
  }
  const r3 = ie(e3, n5), o3 = await he(e3, t4.right);
  return r3.scope[r3.id] = { value: Ie(o3, t4.operator, "=" !== t4.operator ? ae(r3.var).value : null, t4, e3) }, P;
}
async function Ee(e3, t4) {
  const n5 = await he(e3, t4.expression);
  return n5 === P ? P : new v(n5);
}
async function Me(e3, t4) {
  const n5 = await he(e3, t4.test);
  if (true === n5) return me(e3, t4.consequent);
  if (false === n5) return null !== t4.alternate ? me(e3, t4.alternate) : P;
  throw new n3(e3, "BooleanConditionRequired", t4);
}
async function Ae(e3, t4) {
  return Ne(e3, t4, 0);
}
async function Ne(e3, t4, n5) {
  if (n5 >= t4.body.length) return P;
  const r3 = await me(e3, t4.body[n5]);
  return r3 instanceof R || r3 === I || r3 === _ || n5 === t4.body.length - 1 ? r3 : Ne(e3, t4, n5 + 1);
}
async function Be(e3, t4) {
  if (null === t4.argument) return new R(P);
  const n5 = await he(e3, t4.argument);
  return new R(n5);
}
async function Ue(t4, n5) {
  if (null != t4.localScope) throw ne().error("Function declarations are only valid in global scope."), new n3(t4, "NeverReach", n5);
  const r3 = r(n5.id);
  if (!(r3 in t4.globalScope)) throw ne().error(`Function "${r3}" not declared.`), new n3(t4, "NeverReach", n5);
  const o3 = i2(n5), a2 = n5.params.map((t5) => r(t5)), s5 = Array.from(o3).filter((e3) => !a2.includes(e3));
  return t4.globalScope[r3] = { value: new fe(n5, t4, a2, s5) }, P;
}
async function Ge(e3, t4) {
  const n5 = ie(e3, t4.specifiers[0].local), r3 = e3.libraryResolver;
  if (null == r3) throw ne().error("Internal error: module loader not initialized"), new n3(e3, "NeverReach", t4);
  const o3 = r3.loadLibrary(n5.id);
  let a2;
  return r3._moduleSingletons?.has(o3.uri) ? a2 = r3._moduleSingletons.get(o3.uri) : (a2 = await we.load(e3, o3.syntax), r3._moduleSingletons?.set(o3.uri, a2)), n5.scope[n5.id] = { value: a2 }, P;
}
async function Le2(e3, t4) {
  return await me(e3, t4.declaration), P;
}
async function ze(e3, t4) {
  for (const n5 of t4.declarations) await De(e3, n5);
  return P;
}
async function De(e3, t4) {
  let n5 = null;
  n5 = null === t4.init ? null : await he(e3, t4.init), n5 === P && (n5 = null);
  const r3 = ie(e3, t4.id);
  r3.scope[r3.id] = { value: n5 };
}
async function _e(e3, t4) {
  return Ze(e3, await he(e3, t4.object), t4);
}
async function Ze(e3, t4, n5) {
  const r3 = n5.computed ? await he(e3, n5.property) : n5.property.name;
  return M(t4, r3);
}
async function qe(e3, t4, n5) {
  for (const r3 of n5) switch (r3.type) {
    case "MemberExpression":
      t4 = await Ze(e3, t4, r3);
      break;
    case "CallExpression":
      t4 = await Je(e3, t4, r3);
      break;
    default:
      throw new n3(null, "Unrecognized", r3);
  }
  return t4;
}
async function Pe(e3, t4, n5) {
  const r3 = n5.computed ? await he(e3, n5.property) : n5.property.name;
  return x(t4, r3);
}
async function We(e3, t4) {
  const n5 = l(t4);
  let r3 = await he(e3, n5.root);
  for (const o3 of n5.sections) {
    const t5 = await Pe(e3, r3, o3.checked);
    if (null == t5) return null;
    r3 = await qe(e3, t5, o3.unchecked);
  }
  return r3;
}
async function Ve(e3, t4) {
  const n5 = await he(e3, t4.argument);
  if (t(n5)) {
    if ("!" === t4.operator) return !n5;
    if ("-" === t4.operator) return -1 * Se(n5);
    if ("+" === t4.operator) return 1 * Se(n5);
    if ("~" === t4.operator) return ~Se(n5);
    throw new n3(e3, "UnsupportUnaryOperator", t4);
  }
  if ("-" === t4.operator) return -1 * Se(n5);
  if ("+" === t4.operator) return 1 * Se(n5);
  if ("~" === t4.operator) return ~Se(n5);
  throw new n3(e3, "UnsupportUnaryOperator", t4);
}
async function Ke(e3, t4) {
  const n5 = [];
  for (let r3 = 0; r3 < t4.elements.length; r3++) n5.push(await he(e3, t4.elements[r3]));
  for (let r3 = 0; r3 < n5.length; r3++) {
    if (L(n5[r3])) throw new n3(e3, "NoFunctionInArray", t4);
    n5[r3] === P && (n5[r3] = null);
  }
  return n5;
}
async function Te(e3, t4) {
  const n5 = await he(e3, t4.left), r3 = await he(e3, t4.right);
  switch (t4.operator) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Le(Se(n5), Se(r3), t4.operator);
    case "==":
      return ye(n5, r3);
    case "!=":
      return !ye(n5, r3);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return de(n5, r3, t4.operator);
    case "+":
      return e(n5) || e(r3) ? ge(n5) + ge(r3) : Se(n5) + Se(r3);
    case "-":
      return Se(n5) - Se(r3);
    case "*":
      return Se(n5) * Se(r3);
    case "/":
      return Se(n5) / Se(r3);
    case "%":
      return Se(n5) % Se(r3);
    default:
      throw t4.operator, new n3(e3, "UnsupportedOperator", t4);
  }
}
async function Ye(e3, t4) {
  const n5 = await he(e3, t4.left);
  if (!t(n5)) throw new n3(e3, "LogicalExpressionOnlyBoolean", t4);
  switch (t4.operator) {
    case "||": {
      if (true === n5) return n5;
      const r3 = await he(e3, t4.right);
      if (t(r3)) return r3;
      throw new n3(e3, "LogicExpressionOrAnd", t4);
    }
    case "&&": {
      if (false === n5) return n5;
      const r3 = await he(e3, t4.right);
      if (t(r3)) return r3;
      throw new n3(e3, "LogicExpressionOrAnd", t4);
    }
    default:
      throw t4.operator, new n3(e3, "LogicExpressionOrAnd", t4);
  }
}
function $e(e3, t4) {
  return se(e3, t4);
}
async function He(e3, t4) {
  return Je(e3, "Identifier" === t4.callee.type ? se(e3, t4.callee, "FunctionNotFound") : await he(e3, t4.callee), t4);
}
async function Je(e3, t4, n5) {
  if (L(t4)) return t4.call(e3, n5);
  throw new n3(e3, "CallNonFunction", n5);
}
async function Qe(e3, t4) {
  let n5 = "", r3 = 0;
  for (const o3 of t4.quasis) if (n5 += o3.value ? o3.value.cooked : "", false === o3.tail) {
    if (t4.expressions[r3]) {
      const o4 = await he(e3, t4.expressions[r3]);
      if (L(o4)) throw new n3(e3, "NoFunctionInTemplateLiteral", t4);
      n5 += ge(o4);
    }
    r3++;
  }
  return n5;
}
async function Xe(e3, t4) {
  oe(null === t4.arguments ? [] : t4.arguments, 3, 3, e3, t4);
  const n5 = await he(e3, t4.arguments[0]);
  if (false === t(n5)) throw new n3(e3, "BooleanConditionRequired", t4);
  return he(e3, n5 ? t4.arguments[1] : t4.arguments[2]);
}
async function et(e3, t4) {
  oe(null === t4.arguments ? [] : t4.arguments, 2, 3, e3, t4);
  const n5 = await he(e3, t4.arguments[0]);
  if (3 === t4.arguments.length) {
    const r3 = await he(e3, t4.arguments[1]), o3 = b(n5, r3);
    return null != o3 && "" !== o3 ? o3 : he(e3, t4.arguments[2]);
  }
  return null == n5 || "" === n5 ? he(e3, t4.arguments[1]) : n5;
}
async function tt(e3, t4) {
  if (t4.arguments.length < 2) throw new n3(e3, "WrongNumberOfParameters", t4);
  if (2 === t4.arguments.length) return he(e3, t4.arguments[1]);
  if ((t4.arguments.length - 1) % 2 == 0) throw new n3(e3, "WrongNumberOfParameters", t4);
  return nt(e3, t4, 1, await he(e3, t4.arguments[0]));
}
async function nt(e3, t4, n5, r3) {
  const o3 = await he(e3, t4.arguments[n5]);
  if (ye(o3, r3)) return he(e3, t4.arguments[n5 + 1]);
  const a2 = t4.arguments.length - n5;
  return 1 === a2 ? he(e3, t4.arguments[n5]) : 2 === a2 ? null : 3 === a2 ? he(e3, t4.arguments[n5 + 2]) : nt(e3, t4, n5 + 2, r3);
}
async function rt(e3, t4) {
  if (t4.arguments.length < 3) throw new n3(e3, "WrongNumberOfParameters", t4);
  if (t4.arguments.length % 2 == 0) throw new n3(e3, "WrongNumberOfParameters", t4);
  const n5 = await he(e3, t4.arguments[0]);
  if (false === t(n5)) throw new n3(e3, "BooleanConditionRequired", t4.arguments[0]);
  return ot(e3, t4, 0, n5);
}
async function ot(e3, t4, n5, r3) {
  if (true === r3) return he(e3, t4.arguments[n5 + 1]);
  if (3 === t4.arguments.length - n5) return he(e3, t4.arguments[n5 + 2]);
  const o3 = await he(e3, t4.arguments[n5 + 2]);
  if (false === t(o3)) throw new n3(e3, "ModuleExportNotFound", t4.arguments[n5 + 2]);
  return ot(e3, t4, n5 + 2, o3);
}
function at() {
  const e3 = /* @__PURE__ */ Object.create(null);
  j(e3, ue), E(e3, ue), P2(e3, ue, $e), g(e3, ue), _2(e3, ue), a(e3, ue), b2(e3, ue), B2({ functions: e3, compiled: false, signatures: null, evaluateIdentifier: null, mode: "async", standardFunction: ue, standardFunctionAsync: de2 }), e3.iif = Xe, e3.defaultvalue = et, e3.decode = tt, e3.when = rt;
  const t4 = function() {
    this.textformatting = { value: p.textFormatting() };
  };
  t4.prototype = /* @__PURE__ */ Object.create(null), t4.prototype.infinity = Object.freeze({ value: Number.POSITIVE_INFINITY }), t4.prototype.pi = Object.freeze({ value: Math.PI });
  for (const [n5, r3] of Object.entries(e3)) t4.prototype[n5] = Object.freeze({ value: new e2(r3) });
  return t4;
}
var it = at();
function st(e3) {
  const t4 = { mode: "async", compiled: false, functions: /* @__PURE__ */ Object.create(null), signatures: [], standardFunction: ue, standardFunctionAsync: de2, evaluateIdentifier: $e };
  for (let n5 = 0; n5 < e3.length; n5++) e3[n5].registerFunctions(t4);
  for (const [n5, r3] of Object.entries(t4.functions)) it.prototype[n5] = Object.freeze({ value: new e2(r3) });
  for (let n5 = 0; n5 < t4.signatures.length; n5++) o2(t4.signatures[n5], "async");
}
function ct(e3) {
  console.log(e3);
}
function lt(n5, a2) {
  const i3 = new Set(Object.keys(a2?.vars || {}).map((t4) => r(t4))), s5 = new Set(Object.keys(a2?.customfunctions || {}).map((t4) => r(t4))), { globals: c, exports: l2 } = s3(n5);
  return async (e3) => {
    const o3 = e3.spatialReference ?? S.WebMercator;
    let a3 = null;
    n5.usesModules && (a3 = new s2(/* @__PURE__ */ new Map(), n5.loadedModules));
    const u = new it();
    for (const t4 of s5) null != e3.customfunctions && t4 in e3.customfunctions ? u[t4] = { value: new e2(e3.customfunctions[t4]) } : u[t4] = re;
    for (const t4 of i3) {
      if (null == e3.vars || !(t4 in e3.vars)) {
        t4 in u || (u[t4] = re);
        continue;
      }
      const n6 = e3.vars[t4] ?? null;
      t3(n6) ? u[t4] = { value: I2.createFromGraphic(n6, e3.timeZone ?? null) } : u[t4] = { value: n6 };
    }
    for (const t4 of c) t4 in u || (u[t4] = re);
    const f = { lrucache: e3.lrucache, interceptor: e3.interceptor, services: e3.services, console: e3.console ?? ct, abortSignal: e3.abortSignal ?? t2, timeZone: e3.timeZone ?? null, spatialReference: o3, track: e3.track, depthCounter: { depth: 1 }, libraryResolver: a3, exports: l2, localScope: null, globalScope: u }, p4 = await Ae(f, n5);
    if (p4 instanceof R || p4 instanceof v) {
      const e4 = p4.value;
      if (q(e4)) return null;
      if (L(e4)) throw new n3(f, "IllegalResult", null);
      return e4;
    }
    if (q(p4)) return null;
    if (p4 === I) throw new n3(f, "IllegalResult", null);
    if (p4 === _) throw new n3(f, "IllegalResult", null);
    throw new n3(f, "NeverReach", null);
  };
}
function ut(e3, t4) {
  return lt(e3, t4)(t4);
}
st([p3]), st([T]);
export {
  ut as executeScript,
  st as extend,
  lt as prepareScript
};
//# sourceMappingURL=arcadeAsyncRuntime-B32WDUNR.js.map
