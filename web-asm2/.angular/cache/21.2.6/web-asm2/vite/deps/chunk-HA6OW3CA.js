import {
  a
} from "./chunk-2OYJMVOW.js";
import {
  p
} from "./chunk-DOLWXTWY.js";
import {
  s
} from "./chunk-6EWCUMLH.js";
import {
  n as n2
} from "./chunk-ULRT2MRD.js";
import {
  j
} from "./chunk-TV7JW3IK.js";
import {
  m as m2
} from "./chunk-R5ZARNWA.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  y3 as y2
} from "./chunk-DHIQ5CF2.js";
import {
  e as e3,
  y
} from "./chunk-EFJUSEVJ.js";
import {
  u
} from "./chunk-J27BSZXM.js";
import {
  d
} from "./chunk-M2KBLK7K.js";
import {
  e as e2
} from "./chunk-QWNB5I7T.js";
import {
  _
} from "./chunk-X7TQ4MJH.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  m
} from "./chunk-GUGGSMY4.js";
import {
  e
} from "./chunk-2DNVIDFH.js";

// node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js
var f = class extends a {
  constructor(e4) {
    super(), this._graphicsAdapter = e4, this._symbolPairingsByType = /* @__PURE__ */ new Map();
  }
  visualizeIntersectionPoint(e4, t) {
    return this._visualizeSnappingIndicator(new _({ x: e4.intersectionPoint[0], y: e4.intersectionPoint[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("intersectionPoint", t.view.effectiveTheme.accentColor));
  }
  visualizePoint(e4, t) {
    return this._visualizeSnappingIndicator(new _({ x: e4.point[0], y: e4.point[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("point", t.view.effectiveTheme.accentColor));
  }
  visualizeLine(e4, t) {
    return this._visualizeSnappingIndicator(new y2({ paths: [[[...e4.lineStart], [...e4.lineEnd]]], spatialReference: m(S, t.spatialReference) }), this._getOrCreateSymbol("line", t.view.effectiveTheme.accentColor));
  }
  visualizeCurve(e4, t) {
    return this._visualizeSnappingIndicator(new y2({ curvePaths: [[[...e4.start], e4.curve]], spatialReference: m(S, t.spatialReference) }), this._getOrCreateSymbol("line", t.view.effectiveTheme.accentColor));
  }
  visualizeParallelSign(e4, t) {
    return this._visualizeSnappingIndicator(new y2({ paths: [[[...e4.lineStart], [...e4.lineEnd]]], spatialReference: m(S, t.spatialReference) }), this._getOrCreateSymbol("parallelSign", t.view.effectiveTheme.accentColor));
  }
  visualizeRightAngleQuad(e4, t) {
    const r = n2(), s2 = n2(), p2 = n();
    e3(r, s(e4.centerVertex), s(e4.previousVertex)), e3(s2, s(e4.nextVertex), s(e4.previousVertex)), y(p2, r, s2);
    const y3 = `rightAngleQuad${p2[2] < 0 ? 45 : 225}`;
    return this._visualizeSnappingIndicator(new y2({ paths: [[[...e4.previousVertex], [...e4.centerVertex], [...e4.nextVertex]]], spatialReference: m(S, t.spatialReference) }), this._getOrCreateSymbol(y3, t.view.effectiveTheme.accentColor));
  }
  _visualizeSnappingIndicator(r, i) {
    const n3 = new j({ geometry: r, symbol: i });
    return this._graphicsAdapter.add(n3), e(() => {
      this._graphicsAdapter.remove(n3);
    });
  }
  _getOrCreateSymbol(e4, t) {
    const r = this._symbolPairingsByType;
    return r.get(e4)?.color !== t && r.set(e4, { color: t, symbol: u2(e4, t) }), r.get(e4).symbol;
  }
};
function u2(e4, t) {
  const i = [...t.toRgb(), 255 * t.a];
  switch (e4) {
    case "point":
      return new u({ outline: { width: 0.5, color: [0, 0, 0, 1] }, size: 10, color: t });
    case "intersectionPoint":
      return new u({ outline: new d({ width: 1.5, color: t }), size: 15, color: [0, 0, 0, 0] });
    case "line":
      return new m2({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e2(p.lineHintWidthTarget), color: i }] } } });
    case "parallelSign":
      return new m2({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: -1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, 1.5], [7, 1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }, { type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: 1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, -1.5], [7, -1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    case "rightAngleQuad45":
    case "rightAngleQuad225": {
      const n3 = "rightAngleQuad45" === e4 ? 45 : 225;
      return new m2({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0.5, y: 0.5, z: 0 }, anchorPointUnits: "Relative", size: e2(p.rightAngleHintSize), rotation: n3, markerPlacement: { type: "CIMMarkerPlacementOnVertices", placePerPart: true, angleToLine: true, placeOnEndPoints: false }, frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[5, -5], [-5, -5], [-5, 5], [5, 5], [5, -5]]] }, symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e2(p.rightAngleHintOutlineSize), color: i }, { type: "CIMSolidFill", enable: true, color: [...t.toRgb(), 255 * t.a * 0.4] }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    }
  }
}

export {
  f
};
//# sourceMappingURL=chunk-HA6OW3CA.js.map
