import {
  u
} from "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
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
var o = { disjoint: t("disjoint", () => import("./disjointOperator-LSXPTR3Z.js").then((e) => e.execute)), intersects: t("intersects", () => import("./intersectsOperator-PMKULUL6.js").then((e) => e.execute)), touches: t("touches", () => import("./touchesOperator-VGXLFOAJ.js").then((e) => e.execute)), crosses: t("crosses", () => import("./crossesOperator-3JYXHIMY.js").then((e) => e.execute)), within: t("within", () => import("./withinOperator-ZURSEY4C.js").then((e) => e.execute)), contains: t("contains", () => import("./containsOperator-ECI7LSKW.js").then((e) => e.execute)), overlaps: t("overlaps", () => import("./overlapsOperator-AF7JVKX3.js").then((e) => e.execute)), equals: t("equals", async () => {
  const t2 = await import("./equalsOperator-J3FSJTO3.js");
  return (r2, o2) => t2.execute(u(r2), u(o2));
}), relate: t("relate", async () => {
  const t2 = await import("./relateOperator-YCWSC3D6.js");
  return (r2, o2, n2) => t2.execute(u(r2), u(o2), n2);
}), intersection: t("intersection", () => import("./intersectionOperator-TZZ2YM2I.js").then((e) => e.execute)), union: t("union", () => import("./unionOperator-377M3IYU.js").then((e) => e.executeMany)), difference: t("difference", async () => {
  const t2 = await import("./differenceOperator-2SQQNOII.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), symmetricDifference: t("symmetricDifference", async () => {
  const t2 = await import("./symmetricDifferenceOperator-GGAKIHOR.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), clip: t("clip", async () => {
  const t2 = await import("./clipOperator-DEJCF2XV.js");
  return (o2, n2) => r(t2.execute(u(o2), u(n2)));
}), cut: t("cut", async () => {
  const t2 = await import("./cutOperator-N23VYMGF.js");
  return (o2, n2) => t2.execute(u(o2), u(n2)).map((e) => r(e));
}), area: t("area", async () => {
  const t2 = await import("./areaOperator-2TWUA4CN.js"), { convertFromSpatialReferenceUnit: r2, toAreaUnit: o2 } = await import("./unitConversion-PBDONVQU.js");
  return (n2, a) => {
    const s = t2.execute(u(n2));
    return r2(n2.spatialReference, o2(a), s);
  };
}), geodeticArea: t("geodeticArea", async () => {
  const t2 = await import("./geodeticAreaOperator-HSATCKZS.js"), { convert: r2, squareMeters: o2, toAreaUnit: n2 } = await import("./unitConversion-PBDONVQU.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), length: t("length", async () => {
  const e = await import("./lengthOperator-ZID3HK7F.js"), { convertFromSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-PBDONVQU.js");
  return (o2, n2) => {
    const a = e.execute(o2);
    return t2(o2.spatialReference, r2(n2), a);
  };
}), geodeticLength: t("geodeticLength", async () => {
  const t2 = await import("./geodeticLengthOperator-V6FL2PFL.js"), { convert: r2, meters: o2, toLengthUnit: n2 } = await import("./unitConversion-PBDONVQU.js");
  return await t2.load(), (a, s, i) => {
    const c = t2.execute(u(a), { curveType: i });
    return r2(o2, n2(s), c);
  };
}), distance: t("distance", async () => {
  const t2 = await import("./distanceOperator-FYFSSANO.js"), { convertFromSpatialReferenceUnit: r2, toLengthUnit: o2 } = await import("./unitConversion-PBDONVQU.js");
  return (n2, a, s) => {
    const i = t2.execute(u(n2), u(a));
    return r2(n2.spatialReference, o2(s), i);
  };
}), densify: t("densify", async () => {
  const t2 = await import("./densifyOperator-2FWQCD7K.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-PBDONVQU.js");
  return (a, s, i) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s)));
}), geodeticDensify: t("geodeticDensify", async () => {
  const t2 = await import("./geodeticDensifyOperator-LZRI6JNP.js"), { convert: o2, meters: n2, toLengthUnit: a } = await import("./unitConversion-PBDONVQU.js");
  return await t2.load(), (s, i, c, p) => (i = o2(a(c), n2, i), r(t2.execute(u(s), i, { curveType: p })));
}), generalize: t("generalize", async () => {
  const t2 = await import("./generalizeOperator-F6IWNONF.js"), { convertToSpatialReferenceUnit: o2, toLengthUnit: n2 } = await import("./unitConversion-PBDONVQU.js");
  return (a, s, i, c) => (s = o2(n2(i), a.spatialReference, s), r(t2.execute(u(a), s, c)));
}), buffer: t("buffer", async () => {
  const e = await import("./bufferOperator-4BL6Y4SB.js"), { convertToSpatialReferenceUnit: t2, toLengthUnit: r2 } = await import("./unitConversion-PBDONVQU.js");
  return (o2, n2, a) => (n2 = t2(r2(a), o2.spatialReference, n2), e.execute(o2, n2));
}), geodesicBuffer: t("geodesicBuffer", async () => {
  const e = await import("./geodesicBufferOperator-CN3KACWY.js"), { convert: t2, meters: r2, toLengthUnit: o2 } = await import("./unitConversion-PBDONVQU.js");
  return await e.load(), (n2, a, s, i) => (a = t2(o2(s), r2, a), e.execute(n2, a, { curveType: i }));
}), offset: t("offset", async () => {
  const { executeOffsetJson: e } = await import("./offset-ZALI32XK.js");
  return e;
}), rotate: t("rotate", async () => {
  const t2 = await import("./affineTransformOperator-FQ4VRDLQ.js"), { default: o2 } = await import("./Transformation-GVQBUQB2.js");
  return (n2, a, s, i) => {
    const c = new o2().rotate(a, s, i);
    return r(t2.execute(u(n2), c));
  };
}), centroid: t("centroid", async () => {
  const t2 = await import("./centroidOperator-LF7E3BJJ.js");
  return (o2) => r(t2.execute(u(o2)));
}), labelPoint: t("labelPoint", async () => {
  const t2 = await import("./labelPointOperator-MDWM4GYK.js");
  return (o2) => r(t2.execute(u(o2)));
}), simplify: t("simplify", () => import("./simplifyOperator-GAUELTSM.js").then((e) => e.execute)), isSelfIntersecting: t("isSelfIntersecting", async () => {
  const { NonSimpleResult: t2 } = await import("./OperatorDefinitions-QMRK5NK4.js"), r2 = await import("./simplifyOGCOperator-H4WTML3Z.js"), o2 = /* @__PURE__ */ new Set([5, 6, 7, 10, 11, 12]);
  return (n2) => {
    const a = new t2();
    return !r2.isSimple(u(n2), a) && o2.has(a.m_reason);
  };
}), isSimple: t("isSimple", () => import("./simplifyOperator-GAUELTSM.js").then((e) => e.isSimple)), convexHull: t("convexHull", () => import("./convexHullOperator-TU7TI5SD.js").then((e) => e.execute)), getNearestCoordinate: t("getNearestCoordinate", async () => {
  const t2 = await import("./proximityOperator-YMIJD7VI.js");
  return (o2, n2, a) => {
    const s = t2.getNearestCoordinate(u(o2), u(n2), a);
    return __spreadProps(__spreadValues({}, s), { coordinate: r(s.coordinate) });
  };
}), getNearestVertex: t("getNearestVertex", async () => {
  const { executeNearestVertex: t2 } = await import("./nearestVertex-KGCVSO5R.js");
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
//# sourceMappingURL=operatorsWorker-35FVEW5A.js.map
