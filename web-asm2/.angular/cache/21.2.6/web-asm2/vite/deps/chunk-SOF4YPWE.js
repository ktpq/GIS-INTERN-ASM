import {
  i
} from "./chunk-XXAM3AK3.js";
import {
  n
} from "./chunk-5XSOLVCE.js";
import {
  v
} from "./chunk-MJPQS723.js";
import {
  _,
  at,
  mt
} from "./chunk-RK3JBATE.js";
import {
  R,
  T
} from "./chunk-GRJKZ4TZ.js";
import {
  E
} from "./chunk-K3VHKD6G.js";
import {
  e,
  o
} from "./chunk-47Z5HJ52.js";
import {
  t
} from "./chunk-QK7JX7UE.js";

// node_modules/@arcgis/core/symbols/cim/CIMSymbolRasterizer.js
var g = 96 / 72;
var y = class {
  constructor(e2) {
    this._spatialReference = e2, this._imageDataCanvas = null, this._cimResourceManager = new i();
  }
  get _canvas() {
    return this._imageDataCanvas || (this._imageDataCanvas = document.createElement("canvas")), this._imageDataCanvas;
  }
  get resourceManager() {
    return this._cimResourceManager;
  }
  async rasterizeCIMSymbolAsync(i2, r, s, h, l, c, g2, y2, d2, u) {
    if (!i2) return null;
    const { data: p } = i2;
    if (!p || "CIMSymbolReference" !== p.type || !p.symbol) return null;
    const { symbol: f } = p;
    c || (c = E(f));
    const x = await v.resolveSymbolOverrides(p, r, this._spatialReference, l, c, g2, y2), b = this._cimResourceManager, M = [];
    _.fetchResources(x, b, M), _.fetchFonts(x, b, M), M.length > 0 && await Promise.all(M);
    const { width: v2, height: C } = s;
    let R2 = w(c, v2, C, h, u);
    const I = _.getEnvelope(x, R2, b);
    if (!I) return null;
    I.x === 1 / 0 && (I.x = v2 + 2), I.y === 1 / 0 && (I.y = -C / 2), I.width === -1 / 0 && (I.width = v2), I.height === -1 / 0 && (I.height = C);
    let S = 1, _2 = 0, P = 0;
    switch (f.type) {
      case "CIMPointSymbol":
      case "CIMTextSymbol":
        {
          let e2 = 1;
          I.width > v2 && (e2 = v2 / I.width);
          let t2 = 1;
          I.height > C && (t2 = C / I.height), "preview" === h && (I.width < v2 && (e2 = v2 / I.width), I.height < C && (t2 = C / I.height)), S = Math.min(e2, t2), _2 = I.x + I.width / 2, P = I.y + I.height / 2;
        }
        break;
      case "CIMLineSymbol":
        if (u) {
          P = I.y + I.height / 2, _2 = I.x + I.width / 2;
          const e2 = I.width - v2, t2 = I.height - C;
          R2 = { paths: T(R2.paths, { xmin: -1 * I.width / 2 + e2, xmax: I.width / 2 - e2, ymin: -1 * I.height / 2 + t2, ymax: I.height / 2 - t2, width: I.width - 2 * e2, height: I.height - 2 * t2 }) };
        } else {
          (d2 || I.height > C) && (S = C / I.height), P = I.y + I.height / 2;
          const i3 = I.x * S + v2 / 2, r2 = (I.x + I.width) * S + v2 / 2, s2 = e(R2) ? R2.paths : o(R2) ? R2.rings : null;
          if (null === s2) throw new Error("Bad geometry, can't rasterise symbol!");
          s2[0][0][0] -= i3 / S, s2[0][2][0] -= (r2 - v2) / S;
        }
        break;
      case "CIMPolygonSymbol":
        if (u) {
          P = I.y + I.height / 2, _2 = I.x + I.width / 2;
          const e2 = I.width - v2, t2 = I.height - C;
          R2 = { paths: T(R2.rings, { xmin: -1 * I.width / 2 + e2, xmax: I.width / 2 - e2, ymin: -1 * I.height / 2 + t2, ymax: I.height / 2 - t2, width: I.width - 2 * e2, height: I.height - 2 * t2 }) };
        } else {
          _2 = I.x + I.width / 2, P = I.y + I.height / 2;
          const e2 = I.x * S + v2 / 2, t2 = (I.x + I.width) * S + v2 / 2, i3 = I.y * S + C / 2, r2 = (I.y + I.height) * S + C / 2, { rings: s2 } = R2;
          e2 < 0 && (s2[0][0][0] -= e2, s2[0][3][0] -= e2, s2[0][4][0] -= e2), i3 < 0 && (s2[0][0][1] += i3, s2[0][1][1] += i3, s2[0][4][1] += i3), t2 > v2 && (s2[0][1][0] -= t2 - v2, s2[0][2][0] -= t2 - v2), r2 > C && (s2[0][2][1] += r2 - C, s2[0][3][1] += r2 - C);
        }
    }
    const j = { type: "cim", data: { type: "CIMSymbolReference", symbol: x } };
    return this.rasterize(j, v2, C, _2, P, S, c, 1, R2);
  }
  rasterize(e2, t2, i2, r, n2, o2, a, l = 0, c = null, y2 = window.devicePixelRatio || 1) {
    const { data: d2 } = e2;
    if (!d2 || "CIMSymbolReference" !== d2.type || !d2.symbol) return null;
    const { symbol: u } = d2, p = this._canvas, f = y2 * g;
    p.width = t2 * f, p.height = i2 * f, a || (a = E(u)), c || (c = w(a, t2, i2, "legend")), p.width += 2 * l, p.height += 2 * l;
    const x = p.getContext("2d", { willReadFrequently: true }), b = at.createIdentity();
    b.translate(-r, -n2), b.scale(o2 * f, -o2 * f), b.translate(t2 * f / 2 + l, i2 * f / 2 + l), x.clearRect(0, 0, p.width, p.height);
    return new mt(x, this._cimResourceManager, b, true).drawSymbol(u, c), x.getImageData(0, 0, p.width, p.height);
  }
};
function d(e2, t2, r, s) {
  const h = t(e2) ? n(e2, r, s) : e2;
  if ("esriGeometryPolygon" === t2) {
    return { rings: R(T(h.rings, { xmin: 0, ymin: 0, width: r, height: s }), -1 * r / 2, -1 * s / 2) };
  }
  if ("esriGeometryPolyline" === t2) {
    return { paths: R(T(h.paths, { xmin: 0, ymin: 0, width: r, height: s }), -1 * r / 2, -1 * s / 2) };
  }
  return null;
}
function w(e2, t2, i2, r, s) {
  const h = 1, n2 = -t2 / 2 + h, o2 = t2 / 2 - h, a = i2 / 2 - h, l = -i2 / 2 + h;
  if (s && ("esriGeometryPolygon" === e2 || "esriGeometryPolyline" === e2)) {
    const r2 = d(s, e2, t2, i2);
    if (r2) return r2;
  }
  switch (e2) {
    case "esriGeometryPoint":
      return { x: 0, y: 0 };
    case "esriGeometryPolyline":
      return { paths: [[[n2, 0, -4], [0, 0, 0], [o2, 0, 2]]], hasM: true };
    default:
      return "legend" === r ? { rings: [[[n2, a], [o2, 0], [o2, l], [n2, l], [n2, a]]] } : { rings: [[[n2, a], [o2, a], [o2, l], [n2, l], [n2, a]]] };
  }
}

export {
  y
};
//# sourceMappingURL=chunk-SOF4YPWE.js.map
