import {
  c,
  f as f2
} from "./chunk-7WSSXDPD.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  s
} from "./chunk-POW25PFR.js";
import {
  h
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var i = class {
  constructor(t, s2, e) {
    this.assetName = t, this.assetMimeType = s2, this.parts = e;
  }
  equals(t) {
    return this === t || this.assetName === t.assetName && this.assetMimeType === t.assetMimeType && h(this.parts, t.parts, (t2, s2) => t2.equals(s2));
  }
  isOnService(t) {
    return this.parts.every((s2) => s2.isOnService(t));
  }
  makeHash() {
    let t = "";
    for (const s2 of this.parts) t += s2.partHash;
    return t;
  }
  async toBlob(t) {
    const { parts: s2 } = this;
    if (1 === s2.length) return s2[0].toBlob(t);
    const r = await Promise.all(s2.map((s3) => s3.toBlob(t)));
    return s(t), new Blob(r);
  }
};
var n = class {
  constructor(t, s2) {
    this.partUrl = t, this.partHash = s2;
  }
  equals(t) {
    return this === t || this.partUrl === t.partUrl && this.partHash === t.partHash;
  }
  isOnService(t) {
    return this.partUrl.startsWith(`${t.path}/assets/`);
  }
  async toBlob(s2) {
    const { data: r } = await f(this.partUrl, { responseType: "blob" });
    return s(s2), r;
  }
};
function o(t) {
  return l(t?.source);
}
var c2 = /^(model\/gltf\+json)|(model\/gltf-binary)$/;
var u = /\.(gltf|glb)/i;
function l(t) {
  switch (t?.type) {
    case "client":
      return Array.isArray(t.files) ? t.files.some(p) : p(t.files);
    case "service":
      return t.assets.some(p);
    case "loadable":
      return true;
    default:
      return false;
  }
}
function p(t) {
  if (t instanceof File) {
    const { type: s2, name: e } = t;
    return c2.test(s2) || u.test(e);
  }
  return c2.test(t.assetMimeType) || u.test(t.assetName);
}
function f3(t, s2) {
  if (!t) return false;
  const { source: e } = t;
  return h2(e, s2);
}
function m(t, s2) {
  if (t === s2) return true;
  const { source: e } = t, { source: r } = s2;
  if (e === r) return true;
  if ("service" === e.type && "service" === r.type) {
    if (e.assets.length !== r.assets.length) return false;
    const t2 = (t3, s4) => t3.assetName < s4.assetName ? -1 : t3.assetName > s4.assetName ? 1 : 0, s3 = [...e.assets].sort(t2), a = [...r.assets].sort(t2);
    for (let e2 = 0; e2 < s3.length; ++e2) if (!s3[e2].equals(a[e2])) return false;
    return true;
  }
  return false;
}
function h2(t, s2) {
  return "service" === t.type && t.assets.every((t2) => t2.isOnService(s2));
}
function y(t, s2) {
  return t instanceof File ? c(t, s2) : f2(t.assetMimeType, t.assetName, s2);
}
function b(t) {
  switch (t.type) {
    case "client":
      return Array.isArray(t.files) ? t.files : [t.files];
    case "service":
      return t.assets;
    case "loadable":
      return;
  }
}
function v(t) {
  return !!t.original;
}

export {
  i,
  n,
  o,
  f3 as f,
  m,
  y,
  b,
  v
};
//# sourceMappingURL=chunk-CGUBXIPL.js.map
