import {
  u
} from "./chunk-UIKAL3FG.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
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
import "./chunk-TX75HZKJ.js";
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
var o = { disjoint: t("disjoint", () => import("./disjointOperator-TCGMF7UG.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-6T3ICYJU.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-UD7DRNQ5.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-JR75U3FJ.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-K2VLYXII.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-5BUFRMLO.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-JL4R4G4F.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-HG6ZQQ7V.js");
  return (r2, o2) => t2.execute(u(r2), u(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-GMCLSWX2.js");
  return (r2, o2, n2) => t2.execute(u(r2), u(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-GBADN726.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-TQ3VHV22.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-XUE27IQD.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-EYCJFLU3.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-RTEL6S5Y.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-PVD4UL7P.js");
  return (o2, n2) => t2.execute(u(o2), u(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-TX3RSTBU.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-RTW35XEO.js");
  return (n2, a) => {
    const s = t2.execute(u(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-KS4VJGPF.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-RTW35XEO.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-H3NMBKOW.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-RTW35XEO.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-WBLMWX4N.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-RTW35XEO.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-K3PDECR2.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-RTW35XEO.js");
  return (n2, a, s) => {
    const i = t2.execute(u(n2), u(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-I3F6KOLG.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-RTW35XEO.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-6DOP2SHY.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-RTW35XEO.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(u(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-ENE7LJYF.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-RTW35XEO.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-4QYJWHX7.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-RTW35XEO.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-DCDFFEA4.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-RTW35XEO.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-IAFBNBTW.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-B43I63NQ.js"), { default: o2 } = await import("./Transformation-H7TUDV5V.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(u(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-7KXJ2RVL.js");
  return (o2) => r(t2.execute(u(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-6XPP2JKJ.js");
  return (o2) => r(t2.execute(u(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-IYH6XJOG.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-S6BIHAAU.js"), r2 = await import("./simplifyOGCOperator-F34KLNV3.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(u(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-IYH6XJOG.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-K65JVXAG.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-6LHJJBX5.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(u(o2), u(n2), a);
    return __spreadProps(__spreadValues({}, s), { coordinate: r(s.coordinate) });
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const { executeNearestVertex: t2 } = await import("./nearestVertex-IWTO6OKE.js");
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
//# sourceMappingURL=operatorsWorker-4P5LJIH4.js.map
