import {
  u
} from "./chunk-4YKWF6M6.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
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
import "./chunk-O3PP4I47.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
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
var o = { disjoint: t("disjoint", () => import("./disjointOperator-FFXZL4HE.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-CYCWOVVN.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-ARPKKYPW.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-YXP2EMKN.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-2XATDJFH.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-ZWZWTO4O.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-DQ7545XK.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-DMYV4E2U.js");
  return (r2, o2) => t2.execute(u(r2), u(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-QD6ZFTOS.js");
  return (r2, o2, n2) => t2.execute(u(r2), u(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-MNFWMMXS.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-2A4LGBPH.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-U7TX3BCS.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-YNKPZP5Y.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-OLJD5XNR.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-FVSOGSSM.js");
  return (o2, n2) => t2.execute(u(o2), u(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-X5QCVWII.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-2ZURRGPT.js");
  return (n2, a) => {
    const s = t2.execute(u(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-WC6XQEQZ.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-2ZURRGPT.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-INNGVCBL.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-2ZURRGPT.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-G4SEKE4M.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-2ZURRGPT.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-PSTBUUDF.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-2ZURRGPT.js");
  return (n2, a, s) => {
    const i = t2.execute(u(n2), u(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-H7NZB3NS.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-2ZURRGPT.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-LUMQWKWI.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-2ZURRGPT.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(u(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-YJOZYJEZ.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-2ZURRGPT.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-SQZKUA4M.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-2ZURRGPT.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-ETBOBYUG.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-2ZURRGPT.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-7ZNMOBJB.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-SPP52ENQ.js"), { default: o2 } = await import("./Transformation-GVQBUQB2.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(u(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-C5WYWX7D.js");
  return (o2) => r(t2.execute(u(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-EQKEDRRL.js");
  return (o2) => r(t2.execute(u(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-X6ZGHXC5.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-QMRK5NK4.js"), r2 = await import("./simplifyOGCOperator-4XTFQYUJ.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(u(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-X6ZGHXC5.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-Y6FUAYJC.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-5FA33RGF.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(u(o2), u(n2), a);
    return __spreadProps(__spreadValues({}, s), { coordinate: r(s.coordinate) });
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const { executeNearestVertex: t2 } = await import("./nearestVertex-S2LY2CBM.js");
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
//# sourceMappingURL=operatorsWorker-2TSYA5UP.js.map
