import {
  L,
  M,
  N
} from "./chunk-M6KLHHNB.js";
import {
  S
} from "./chunk-R5ZARNWA.js";
import {
  e2 as e
} from "./chunk-WUSMTFBU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Legend/styles/support/relationshipUtils.js
var b = "esri-relationship-ramp";
var m = `${b}--diamond`;
var u = `${b}--square`;
var f = { diamondContainer: `${m}__container`, diamondLeftCol: `${m}__left-column`, diamondRightCol: `${m}__right-column`, diamondMidCol: `${m}__middle-column`, diamondMidColLabel: `${m}__middle-column--label`, diamondMidColRamp: `${m}__middle-column--ramp`, squareTable: `${u}__table`, squareTableRow: `${u}__table-row`, squareTableCell: `${u}__table-cell`, squareTableLabel: `${u}__table-label`, squareTableLabelLeftBottom: `${u}__table-label--left-bottom`, squareTableLabelRightBottom: `${u}__table-label--right-bottom`, squareTableLabelLeftTop: `${u}__table-label--left-top`, squareTableLabelRightTop: `${u}__table-label--right-top` };

// node_modules/@arcgis/core/symbols/support/symbolUtils.js
function L3(e3) {
  return e3 && void 0 !== e3.opacity ? e3.opacity * ("parent" in e3 ? L3(e3.parent) : 1) : 1;
}
async function R2(e3, t) {
  if (!e3) return;
  const l2 = e3.sourceLayer, a2 = (null != t && t.useSourceLayer ? l2 : e3.layer) ?? l2, r = t?.ignoreOpacity ? 1 : L3(a2);
  if (null != e3.symbol && (null == t || true !== t.ignoreGraphicSymbol)) {
    const l3 = "web-style" === e3.symbol.type ? await e3.symbol.fetchSymbol(__spreadProps(__spreadValues({}, t), { acceptedFormats: t?.webStyleAcceptedFormats, cache: t?.webStyleCache })) : e3.symbol.clone();
    return L(l3, null, { add: r }), l3;
  }
  const s2 = t?.renderer ?? I(a2);
  let o2 = s2 && "getSymbolAsync" in s2 ? await s2.getSymbolAsync(e3, t) : null;
  if (!o2) return;
  if (o2 = "web-style" === o2.type ? await o2.fetchSymbol(__spreadProps(__spreadValues({}, t), { acceptedFormats: t?.webStyleAcceptedFormats, cache: t?.webStyleCache })) : o2.clone(), !(s2 && "visualVariables" in s2 && s2.visualVariables?.length && j(o2))) return L(o2, null, { add: r }), o2;
  if ("arcadeRequiredForVisualVariables" in s2 && s2.arcadeRequiredForVisualVariables && null == t?.arcade) {
    const e4 = __spreadValues({}, t);
    e4.arcade = await e(), t = e4;
  }
  const { getColor: n, getOpacity: f2, getAllSizes: y3, getRotationAngle: h } = await import("./visualVariableUtils-5M4JGELT.js"), m2 = [], d = [], b3 = [], g2 = [];
  for (const i2 of s2.visualVariables) switch (i2.type) {
    case "color":
      m2.push(i2);
      break;
    case "opacity":
      d.push(i2);
      break;
    case "rotation":
      g2.push(i2);
      break;
    case "size":
      i2.target || b3.push(i2);
  }
  const w = !!m2.length && m2[m2.length - 1], S3 = w ? n(w, e3, t) : null, v = !!t?.ignoreOpacity, V = !!d.length && d[d.length - 1], k3 = V ? f2(V, e3, t) : null;
  if (L(o2, S3, v ? void 0 : { override: k3, add: r }), b3.length && true !== t?.ignoreSizeVariables) {
    const l3 = y3(b3, e3, t);
    await M(o2, l3);
  }
  if (true !== t?.ignoreRotationVariables) for (const i2 of g2) N(o2, h(i2, e3, t), i2.axis);
  return o2;
}
function j(e3) {
  return !S(e3) || "water" !== e3.symbolLayers.at(0)?.type;
}
function I(e3) {
  if (e3) return "renderer" in e3 ? e3.renderer : void 0;
}

export {
  R2 as R
};
//# sourceMappingURL=chunk-CMTDRUWK.js.map
