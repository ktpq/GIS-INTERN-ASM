import {
  t
} from "./chunk-4QPXF4NH.js";
import {
  b
} from "./chunk-EJ2RGS4X.js";
import {
  l
} from "./chunk-GFBTEKTS.js";
import {
  N
} from "./chunk-CPNUUDDA.js";
import {
  e
} from "./chunk-RTVKY37F.js";
import {
  c
} from "./chunk-XCN5EJK7.js";

// node_modules/@arcgis/core/widgets/Legend/support/heatmapRampUtils.js
function r(r2) {
  if (!r2.colorStops) return [];
  const e2 = [...r2.colorStops].filter((o) => o.color?.a > 0);
  let t2 = e2.length - 1;
  if (e2 && e2[0]) {
    const r3 = e2[t2];
    r3 && 1 !== r3.ratio && (e2.push(new l({ ratio: 1, color: r3.color })), t2++);
  }
  return e2.map((o, e3) => {
    let l2 = "";
    return 0 === e3 ? l2 = r2.legendOptions?.minLabel || "low" : e3 === t2 && (l2 = r2.legendOptions?.maxLabel || "high"), { color: o.color, label: l2, ratio: o.ratio };
  }).reverse();
}

// node_modules/@arcgis/core/renderers/support/utils.js
var v = N("short-date");
async function w(e2, l2, t2) {
  e(e2, l2, () => []).push(...t2);
}
async function x(l2) {
  const t2 = /* @__PURE__ */ new Map();
  if (!l2) return t2;
  if ("visualVariables" in l2 && l2.visualVariables) {
    for (const e2 of l2.visualVariables) if (D(e2)) {
      const l3 = (await t(e2) ?? []).map((e3) => e3.color);
      await w(t2, e2.field || e2.valueExpression, l3);
    }
  }
  if ("heatmap" === l2.type) {
    const e2 = r(l2).map((e3) => e3.color);
    await w(t2, l2.field || l2.valueExpression, e2);
  } else if ("pie-chart" === l2.type) {
    for (const e2 of l2.attributes) await w(t2, e2.field || e2.valueExpression, [e2.color]);
    await w(t2, "default", [l2?.othersCategory?.color, b(l2.backgroundFillSymbol, null)]);
  } else if ("dot-density" === l2.type) {
    for (const e2 of l2.attributes) await w(t2, e2.field || e2.valueExpression, [e2.color]);
    await w(t2, "default", [l2.backgroundColor]);
  } else if ("unique-value" === l2.type) if ("predominance" === l2.authoringInfo?.type) for (const e2 of l2.uniqueValueInfos ?? []) await w(t2, e2.value.toString(), [b(e2.symbol, null)]);
  else {
    const e2 = (l2.uniqueValueInfos ?? []).map((e3) => b(e3.symbol, null)), { field: i, field2: o, field3: a2, valueExpression: n2 } = l2;
    (i || n2) && await w(t2, i || n2, e2), o && await w(t2, o, e2), a2 && await w(t2, a2, e2);
  }
  else if ("class-breaks" === l2.type) {
    const e2 = l2.classBreakInfos.map((e3) => b(e3.symbol, null)), { field: i, valueExpression: o } = l2;
    await w(t2, i ?? o, e2);
  } else "simple" === l2.type && await w(t2, "default", [b(l2.symbol, null)]);
  return "defaultSymbol" in l2 && l2.defaultSymbol && await w(t2, "default", [b(l2.defaultSymbol, null)]), t2.forEach((l3, i) => {
    const o = c(l3.filter(Boolean), (e2, l4) => JSON.stringify(e2) === JSON.stringify(l4));
    t2.set(i, o);
  }), t2;
}
function D(e2) {
  return "color" === e2.type;
}

export {
  r,
  x
};
//# sourceMappingURL=chunk-DYFGMWPB.js.map
