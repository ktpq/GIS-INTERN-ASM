import {
  m
} from "./chunk-FQA45FSP.js";
import {
  t
} from "./chunk-2TISYHLG.js";
import {
  f as f2
} from "./chunk-A3TI5LYY.js";
import {
  f
} from "./chunk-J7JBGJAS.js";
import {
  r
} from "./chunk-RS3JOHKF.js";
import {
  v
} from "./chunk-YM62CGUL.js";
import {
  R
} from "./chunk-5XBFAIUN.js";
import {
  o as o2
} from "./chunk-BQWO5RXV.js";
import {
  g
} from "./chunk-FHDG7GP6.js";
import {
  l,
  w
} from "./chunk-55ZAYF5P.js";
import {
  o
} from "./chunk-MSRN4ADD.js";

// node_modules/@arcgis/core/views/interactive/snapping/snappingUtils.js
var g2 = /* @__PURE__ */ Symbol("grid-placement-graphic");
function d(e, t2) {
  const r2 = e.x - t2.x, n = e.y - t2.y;
  return r2 * r2 + n * n;
}
function f3(e, t2) {
  return Math.sqrt(d(e, t2));
}
function y(e, t2) {
  t2.sort((t3, r2) => v(t3.targetPoint, e) - v(r2.targetPoint, e));
}
function h({ parameters: { point: e, distance: t2, returnEdge: r2, vertexMode: i, coordinateHelper: { spatialReference: l2 }, filter: p }, returnZ: c, filter: m2 }) {
  const g3 = m2?.clone() ?? new R({ where: "1=1" });
  return g3.returnZ = c, p && (g3.geometry = p.geometry, g3.distance = p.distance, g3.spatialRelationship = p.spatialRelationship, g3.where = o2(g3.where, p.where), g3.timeExtent = g(g3.timeExtent, p.timeExtent), g3.objectIds = w2(g3.objectIds, p.objectIds)), { point: t(e[0], e[1], e[2], l2.toJSON()), distance: t2, returnEdge: r2, vertexMode: i, query: g3.toJSON() };
}
function w2(e, t2) {
  return e || t2 ? t2 ? e ? Array.from(o(new Set(e), new Set(t2))) : t2 : e : null;
}
function j(e, t2, r2) {
  return { left: m(e.leftVertex.pos, t2, r2), right: m(e.rightVertex.pos, t2, r2) };
}
var b = /* @__PURE__ */ Symbol("snapping-toggle");
function x(r2, n = () => {
}) {
  const o3 = l(() => ({ view: r2.view, snappingOptions: r2.snappingOptions }), ({ view: e, snappingOptions: t2 }) => {
    if (r2.removeHandles(b), !e || !t2) return;
    const o4 = f.TOOL, i = [e.on("key-down", (e2) => {
      e2.key !== f2.toggle || e2.repeat || (t2.enabledToggled = true, n());
    }, o4), e.on("key-up", (e2) => {
      e2.key === f2.toggle && (t2.enabledToggled = false, n());
    }, o4), e.on("pointer-move", (e2) => {
      const r3 = e2.native.ctrlKey;
      t2.enabledToggled !== r3 && (t2.enabledToggled = r3, n());
    }, o4)];
    r2.addHandles(i, b);
  }, w);
  r2.addHandles(o3);
}
function v2(e) {
  return r(e) && "utilityNetworks" in e && !!e.utilityNetworks?.length;
}
function k(e) {
  return "line" === e?.type;
}

export {
  g2 as g,
  d,
  f3 as f,
  y,
  h,
  j,
  x,
  v2 as v,
  k
};
//# sourceMappingURL=chunk-WLT354DA.js.map
