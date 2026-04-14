import {
  T,
  Ue,
  e2 as e
} from "./chunk-BGBXZWYV.js";
import {
  p
} from "./chunk-DMOCO4H5.js";

// node_modules/@arcgis/core/layers/support/featurePopupQueryUtils.js
async function s(i, s2, n2, r) {
  const u = new Array(s2.length), l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), a = T(i.fieldsIndex, n2.outFields), d = true === i.capabilities?.operations?.supportsQuery && null != i.queryFeatures, f = r?.hasRequiredFields ?? Ue;
  for (let e2 = 0; e2 < s2.length; e2++) {
    const t = s2[e2];
    if (d && !t.isAggregate) {
      if (n2.returnGeometry || !f(t, a)) {
        const o = t.getObjectId();
        if (null != o) {
          l.set(o, { graphic: t, index: e2 });
          continue;
        }
        const i2 = t.getGlobalId();
        if (null != i2) {
          c.set(i2, { graphic: t, index: e2 });
          continue;
        }
      }
      u[e2] = t;
    } else u[e2] = t;
  }
  if (!d || !i.queryFeatures || 0 === l.size && 0 === c.size) return u.filter(Boolean);
  const p2 = [], y = (e2, t) => {
    t && (e2.outFields ??= [], e2.outFields.includes(t) || e2.outFields.push(t));
  };
  if (l.size > 0) {
    const e2 = n2.clone();
    y(e2, i.objectIdField), "uniqueIdFields" in i && i.uniqueIdFields?.length && (e2.outFields ??= [], e2.outFields.push(...i.uniqueIdFields)), e2.objectIds = Array.from(l.keys()), p2.push({ type: "object-id", query: e2, map: l });
  }
  const g = "globalIdField" in i ? i.globalIdField : null;
  if (null != g && c.size > 0) {
    const t = n2.clone();
    y(t, g);
    const o = Array.from(c.keys());
    t.where = p(g, o), p2.push({ type: "global-id", query: t, map: c });
  }
  const b = r?.updateSourceAttributes ?? false;
  for (const { type: e2, query: t, map: o } of p2) try {
    const s3 = await i.queryFeatures(t, r);
    for (const t2 of s3.features) {
      const i2 = "object-id" === e2 ? t2.getObjectId() : t2.getGlobalId();
      if (null == i2) continue;
      const s4 = o.get(i2);
      if (!s4) continue;
      const { graphic: n3, index: r2 } = s4;
      if (b && t2.attributes) {
        n3.attributes ??= {};
        for (const e3 of a) e3 in t2.attributes && (n3.attributes[e3] = t2.attributes[e3]);
      }
      const { geometry: l2, origin: c2 } = n3;
      t2.geometry ||= l2, t2.origin = c2, u[r2] = t2;
    }
  } catch {
  }
  return u.filter(Boolean);
}
async function n(e2) {
  if (e2.expressionInfos?.length || Array.isArray(e2.content) && e2.content.some((e3) => "expression" === e3.type)) return e();
}

export {
  s,
  n
};
//# sourceMappingURL=chunk-WMURTKW3.js.map
