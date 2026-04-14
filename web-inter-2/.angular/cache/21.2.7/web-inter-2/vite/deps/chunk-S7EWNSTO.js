import {
  o
} from "./chunk-Z3PP4SLW.js";
import {
  f2 as f
} from "./chunk-RVKOLALF.js";

// node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js
var t = o();
var n = /* @__PURE__ */ new Map();
var s = /* @__PURE__ */ new Map();
async function o2(r, t2, s2) {
  if (!r || !s2) return false;
  if (!t2) return true;
  const a = new URL(r).host;
  let o3 = n.get(a);
  if (!o3) {
    const t3 = r.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, "");
    o3 = (await f(t3, { responseType: "json", query: { f: "json" } })).data.defaultVersionName;
  }
  return o3 === t2;
}
async function i(e, r, n2 = false) {
  if (!e || !r) return true;
  const a = e.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, ""), o3 = s.get(a)?.entries();
  if (o3) {
    for (const [s2, i2] of o3) if (i2.name === r) {
      const e2 = !i2.stack?.hasForwardEdits();
      if (!e2 && n2) {
        const [{ deleteForwardEdits: e3 }, { default: r2 }] = await Promise.all([import("./deleteForwardEdits-MTAYTFAT.js"), import("./DeleteForwardEditsParameters-OCZVKEYH.js")]), n3 = await e3(a, s2, new r2({ sessionId: t, moment: i2.moment }));
        return n3.success && i2.stack?.clearForwardEdits(), n3.success;
      }
      return e2;
    }
  }
  return true;
}
function c(e, r) {
  if (!e) return false;
  const t2 = e.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, ""), n2 = s.get(t2)?.entries();
  if (n2) {
    for (const [s2, a] of n2) if (a.name === r) {
      return "edit" === a.lockType;
    }
  }
  return false;
}

export {
  t,
  n,
  o2 as o,
  i,
  c
};
//# sourceMappingURL=chunk-S7EWNSTO.js.map
