import {
  M,
  p
} from "./chunk-OOTSAG75.js";
import {
  K,
  Rt,
  f2
} from "./chunk-RVKOLALF.js";
import {
  f2 as f
} from "./chunk-WARIPJQI.js";
import {
  has,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/support/styleCache.js
var e = /* @__PURE__ */ new Map();

// node_modules/@arcgis/core/symbols/support/styleUtils.js
async function f3(e2, r2) {
  try {
    return { data: (await p2(e2, r2)).data, baseUrl: Rt(e2), styleUrl: e2 };
  } catch (s) {
    return f(s), null;
  }
}
function u(e2, r2, t) {
  const o = null != r2.portal ? r2.portal : M.getDefault();
  let s;
  const l = `${o.url} - ${o.user?.username} - ${e2}`, f4 = e.get(l);
  if (f4) return f4;
  const u2 = c(e2, o, t).then((e3) => (s = e3, e3.fetchData())).then((r3) => ({ data: r3, baseUrl: s.itemUrl ?? "", styleName: e2 }));
  return e.set(l, u2), u2;
}
function c(e2, t, o) {
  return t.load(o).then(() => {
    const r2 = new p({ disableExtraQuery: true, query: `owner:${d} AND type:${w} AND typekeywords:"${e2}"` });
    return t.queryItems(r2, o);
  }).then(({ results: t2 }) => {
    let s = null;
    const n = e2.toLowerCase();
    if (t2 && Array.isArray(t2)) for (const e3 of t2) {
      const r2 = e3.typeKeywords?.some((e4) => e4.toLowerCase() === n);
      if (r2 && e3.type === w && e3.owner === d) {
        s = e3;
        break;
      }
    }
    if (!s) throw new r("symbolstyleutils:style-not-found", `The style '${e2}' could not be found`, { styleName: e2 });
    return s.load(o);
  });
}
function i(e2, t, o) {
  return null != e2?.styleUrl ? f3(e2.styleUrl, o) : null != e2?.styleName ? u(e2.styleName, t, o) : Promise.reject(new r("symbolstyleutils:style-url-and-name-missing", "Either styleUrl or styleName is required to resolve a style"));
}
function m(e2) {
  return null === e2 || "CIMSymbolReference" === e2.type ? e2 : { type: "CIMSymbolReference", symbol: e2 };
}
function y(e2, r2) {
  for (const t of r2) switch (t) {
    case "cim":
      if (e2.cimRef) return { format: t, url: encodeURI(e2.cimRef) };
      break;
    case "web-gltf-basisu": {
      const r3 = b(e2, "gltf_basisu");
      if (r3) return { format: t, url: r3 };
      break;
    }
    case "web-gltf": {
      const r3 = b(e2, "gltf");
      if (r3) return { format: t, url: r3 };
      break;
    }
    case "web": {
      const r3 = b(e2, "gltf");
      if (r3) return { format: "web-gltf", url: r3 };
      if (e2.webRef) return { format: t, url: encodeURI(e2.webRef) };
      break;
    }
  }
}
function b(e2, r2) {
  if (!has("enable-feature:force-wosr")) return e2.formatInfos?.find((e3) => e3.type === r2)?.href;
}
function p2(r2, t) {
  const o = __spreadValues({ responseType: "json", query: { f: "json" } }, t);
  return f2(K(r2), o);
}
var d = "esri_en";
var w = "Style";
var h = "https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";

export {
  i,
  m,
  y,
  p2 as p,
  h
};
//# sourceMappingURL=chunk-5YPYTZNP.js.map
