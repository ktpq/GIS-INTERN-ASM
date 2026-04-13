import {
  n as n2
} from "./chunk-4JUVGHKD.js";
import {
  e
} from "./chunk-OKER3UJ5.js";
import {
  c as c2
} from "./chunk-TCXNGMY4.js";
import {
  i
} from "./chunk-ZPD3CEEC.js";
import {
  P
} from "./chunk-PC2SGWGS.js";
import {
  f as f2,
  s,
  u as u2
} from "./chunk-QWYKLNNR.js";
import {
  j
} from "./chunk-TV7JW3IK.js";
import {
  o as o2
} from "./chunk-RJMYNJ36.js";
import {
  m
} from "./chunk-OOSRFM7N.js";
import {
  u
} from "./chunk-47Z5HJ52.js";
import {
  d
} from "./chunk-4X5LQ2UO.js";
import {
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a,
  c,
  o4 as o,
  r4 as r
} from "./chunk-GUGGSMY4.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/operations/identify.js
function o3(e2, r2) {
  const { dpi: n3, gdbVersion: s2, geometry: o4, geometryPrecision: a4, height: p2, historicMoment: m3, layerOption: f4, mapExtent: y, maxAllowableOffset: u4, returnFieldName: c3, returnGeometry: d2, returnUnformattedValues: g, returnZ: x, spatialReference: h, timeExtent: b, tolerance: E, width: O } = e2.toJSON(), { dynamicLayers: S, layerDefs: j2, layerIds: N } = l(e2), $ = null != r2?.geometry ? r2.geometry : null, I = { historicMoment: m3, geometryPrecision: a4, maxAllowableOffset: u4, returnFieldName: c3, returnGeometry: d2, returnUnformattedValues: g, returnZ: x, tolerance: E }, R = $?.toJSON() || o4;
  I.imageDisplay = `${O},${p2},${n3}`, s2 && (I.gdbVersion = s2), R && (delete R.spatialReference, I.geometry = JSON.stringify(R), I.geometryType = u(R));
  const U = h ?? R?.spatialReference ?? y?.spatialReference;
  if (U && (I.sr = d(U)), I.time = b ? [b.start, b.end].join(",") : null, y) {
    const { xmin: e3, ymin: t, xmax: r3, ymax: i2 } = y;
    I.mapExtent = `${e3},${t},${r3},${i2}`;
  }
  return j2 && (I.layerDefs = j2), S && !j2 && (I.dynamicLayers = S), I.layers = "popup" === f4 ? "visible" : f4, N && !S && (I.layers += `:${N.join(",")}`), I;
}
function l(e2) {
  const { mapExtent: t, floors: i2, width: o4, sublayers: l3, layerIds: p2, layerOption: m3, gdbVersion: f4 } = e2, y = l3?.find((e3) => null != e3.layer)?.layer?.serviceSublayers, u4 = "popup" === m3, c3 = {}, d2 = i({ extent: t, width: o4, spatialReference: t?.spatialReference }), g = [], x = (e3) => {
    const t2 = 0 === d2, r2 = 0 === e3.minScale || d2 <= e3.minScale, i3 = 0 === e3.maxScale || d2 >= e3.maxScale;
    if (e3.visible && (t2 || r2 && i3)) if (e3.sublayers) e3.sublayers.forEach(x);
    else {
      if (false === p2?.includes(e3.id) || u4 && (!e3.popupTemplate || !e3.popupEnabled)) return;
      g.unshift(e3);
    }
  };
  if (l3?.forEach(x), l3 && !g.length) c3.layerIds = [];
  else {
    const e3 = e(g, y, f4), t2 = g.map((e4) => {
      const t3 = n2(i2, e4);
      return e4.toExportImageJSON(t3);
    });
    if (e3) c3.dynamicLayers = JSON.stringify(t2);
    else {
      if (l3) {
        let e5 = g.map(({ id: e6 }) => e6);
        p2 && (e5 = e5.filter((e6) => p2.includes(e6))), c3.layerIds = e5;
      } else p2?.length && (c3.layerIds = p2);
      const e4 = a2(i2, g);
      if (null != e4 && e4.length) {
        const t3 = {};
        for (const r2 of e4) r2.definitionExpression && (t3[r2.id] = r2.definitionExpression);
        Object.keys(t3).length && (c3.layerDefs = JSON.stringify(t3));
      }
    }
  }
  return c3;
}
function a2(t, r2) {
  const i2 = !!t?.length, s2 = r2.filter((e2) => null != e2.definitionExpression || i2 && null != e2.floorInfo);
  return s2.length ? s2.map((r3) => {
    const i3 = n2(t, r3), s3 = o2(i3, r3.definitionExpression);
    return { id: r3.id, definitionExpression: s3 ?? void 0 };
  }) : null;
}

// node_modules/@arcgis/core/rest/support/IdentifyResult.js
var u3 = class extends n {
  constructor(t) {
    super(t), this.displayFieldName = null, this.feature = null, this.layerId = null, this.layerName = null;
  }
  readFeature(t, r2) {
    return j.fromJSON({ attributes: __spreadValues({}, r2.attributes), geometry: __spreadValues({}, r2.geometry) });
  }
  writeFeature(t, e2) {
    if (!t) return;
    const { attributes: r2, geometry: o4 } = t;
    r2 && (e2.attributes = __spreadValues({}, r2)), null != o4 && (e2.geometry = o4.toJSON(), e2.geometryType = m.toJSON(o4.type));
  }
};
__decorate([a({ type: String, json: { write: true } })], u3.prototype, "displayFieldName", void 0), __decorate([a({ type: j })], u3.prototype, "feature", void 0), __decorate([o("feature", ["attributes", "geometry"])], u3.prototype, "readFeature", null), __decorate([r("feature")], u3.prototype, "writeFeature", null), __decorate([a({ type: Number, json: { write: true } })], u3.prototype, "layerId", void 0), __decorate([a({ type: String, json: { write: true } })], u3.prototype, "layerName", void 0), u3 = __decorate([c("esri.rest.support.IdentifyResult")], u3);
var l2 = u3;

// node_modules/@arcgis/core/rest/identify.js
async function f3(u4, i2, f4) {
  const c3 = (i2 = a3(i2)).geometry ? [i2.geometry] : [], l3 = f2(u4);
  return l3.path += "/identify", P(c3).then((e2) => {
    const t = o3(i2, { geometry: e2?.[0] }), u5 = u2(__spreadValues(__spreadProps(__spreadValues({}, l3.query), { f: "json" }), t)), a4 = s(u5, f4);
    return f(l3.path, a4).then(m2).then((r2) => p(r2, i2.sublayers));
  });
}
function m2(r2) {
  const e2 = r2.data;
  return e2.results = e2.results || [], e2.exceededTransferLimit = Boolean(e2.exceededTransferLimit), e2.results = e2.results.map((r3) => l2.fromJSON(r3)), e2;
}
function a3(r2) {
  return r2 = c2.from(r2);
}
function p(r2, e2) {
  if (!e2?.length) return r2;
  const t = /* @__PURE__ */ new Map();
  function o4(r3) {
    t.set(r3.id, r3), r3.sublayers && r3.sublayers.forEach(o4);
  }
  e2.forEach(o4);
  for (const s2 of r2.results) s2.feature.sourceLayer = t.get(s2.layerId);
  return r2;
}

export {
  f3 as f
};
//# sourceMappingURL=chunk-TEIOPA5N.js.map
