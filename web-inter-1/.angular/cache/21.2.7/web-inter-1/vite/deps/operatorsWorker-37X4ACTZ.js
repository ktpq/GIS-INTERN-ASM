import {
  u
} from "./chunk-XJP3RSS7.js";
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
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/geometry/operatorsWorker.js
function t(e, t2) {
  let r2;
  return { loaded: false, load: () => r2 ??= t2().then((t3) => {
    o[e] = { loaded: true, execute: t3 };
  }) };
}
function r(e) {
  return null == e ? null : e.toJSON();
}
var o = { disjoint: t("disjoint", () => import("./disjointOperator-5BYOZDFJ.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-S6BDVW7U.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-OXETKBOO.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-AOCKJPNT.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-SG5ASJZ7.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-7HDWPMG4.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-FM3XDAD2.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-FPIGGA2D.js");
  return (r2, o2) => t2.execute(u(r2), u(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-7G6FJ2X5.js");
  return (r2, o2, n2) => t2.execute(u(r2), u(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-YAAECO3V.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-EHPIRANW.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-LKSRMYSK.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-34MIPSDJ.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-RIQU7LW6.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-LB46C37O.js");
  return (o2, n2) => t2.execute(u(o2), u(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-VV6ZY2KF.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-DRARSB7X.js");
  return (n2, a) => {
    const s = t2.execute(u(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-VJXSGSW5.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-DRARSB7X.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-7KYALOEJ.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-DRARSB7X.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-MPLCV2IB.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-DRARSB7X.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-XVZSWTSS.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-DRARSB7X.js");
  return (n2, a, s) => {
    const i = t2.execute(u(n2), u(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-2Q7TMZPN.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-DRARSB7X.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-Z3NLPJ6O.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-DRARSB7X.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(u(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-R6VZON2G.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-DRARSB7X.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-GHDXRA2K.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-DRARSB7X.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-RKWD5PHB.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-DRARSB7X.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-CZBXG3RA.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-SK45AGJS.js"), { default: o2 } = await import("./Transformation-H7TUDV5V.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(u(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-QNBYBRDA.js");
  return (o2) => r(t2.execute(u(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-CHMHFWGR.js");
  return (o2) => r(t2.execute(u(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-XVIAWB5Z.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-S6BIHAAU.js"), r2 = await import("./simplifyOGCOperator-WS4KOHHH.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(u(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-XVIAWB5Z.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-5FZPVZ3Y.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-NFH2BTNO.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(u(o2), u(n2), a);
    return __spreadProps(__spreadValues({}, s), { coordinate: r(s.coordinate) });
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const { executeNearestVertex: t2 } = await import("./nearestVertex-BBZWS6OS.js");
  return (o2, n2) => {
    const a = t2(u(o2), u(n2));
    return null == a ? null : __spreadProps(__spreadValues({}, a), { coordinate: r(a.coordinate) });
  };
}) };
function n(e, t2) {
  const r2 = o[e];
  return r2.loaded ? r2.execute.apply(void 0, t2) : r2.load().then(() => n(e, t2));
}
export {
  n as invokeGeometryOp
};
//# sourceMappingURL=operatorsWorker-37X4ACTZ.js.map
