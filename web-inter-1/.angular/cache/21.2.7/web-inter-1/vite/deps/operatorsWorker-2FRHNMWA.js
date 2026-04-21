import {
  u
} from "./chunk-K5YEU7YE.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
var o = { disjoint: t("disjoint", () => import("./disjointOperator-A5NSES5L.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-D7AP2SMJ.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-KTUEIXVE.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-ODGHQDX6.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-GMCR5UYT.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-YKGVXJUF.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-NH6HDT5V.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-6QEYNZE7.js");
  return (r2, o2) => t2.execute(u(r2), u(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-YUI5TQ7K.js");
  return (r2, o2, n2) => t2.execute(u(r2), u(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-4RDOJIFV.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-OFIP6NSF.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-BDUU2RNB.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-GIGBP3CQ.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-UOH3GFPN.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-JGAEQDOE.js");
  return (o2, n2) => t2.execute(u(o2), u(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-6YAYNHWS.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-AQMZPUW4.js");
  return (n2, a) => {
    const s = t2.execute(u(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-WGO7Z5EJ.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-AQMZPUW4.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-XIRGC3GN.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-AQMZPUW4.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-NJQEWB6P.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-AQMZPUW4.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-3KBG2GO7.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-AQMZPUW4.js");
  return (n2, a, s) => {
    const i = t2.execute(u(n2), u(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-KG2WA5V6.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-AQMZPUW4.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-5RVFP4TK.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-AQMZPUW4.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(u(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-APIISFV5.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-AQMZPUW4.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-FOIOSIDW.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-AQMZPUW4.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-5XD35ZEZ.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-AQMZPUW4.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-E7WWZLE6.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-LP3COQLR.js"), { default: o2 } = await import("./Transformation-H7TUDV5V.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(u(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-KRPBQOPJ.js");
  return (o2) => r(t2.execute(u(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-SIS2GMBH.js");
  return (o2) => r(t2.execute(u(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-VREG3YCM.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-S6BIHAAU.js"), r2 = await import("./simplifyOGCOperator-D56UMGWU.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(u(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-VREG3YCM.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-BAX4Z3AY.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-OJEPJDJT.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(u(o2), u(n2), a);
    return __spreadProps(__spreadValues({}, s), { coordinate: r(s.coordinate) });
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const { executeNearestVertex: t2 } = await import("./nearestVertex-OEPTCV5I.js");
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
//# sourceMappingURL=operatorsWorker-2FRHNMWA.js.map
