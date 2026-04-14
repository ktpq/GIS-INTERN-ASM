import {
  a,
  l as l2
} from "./chunk-RRM5APPM.js";
import {
  _
} from "./chunk-IODIHRP7.js";
import {
  b
} from "./chunk-NMDBB7YG.js";
import {
  f2,
  nt,
  tt
} from "./chunk-ZRWCUWWK.js";
import {
  f2 as f,
  s
} from "./chunk-PQFEWUZC.js";
import {
  r3 as r
} from "./chunk-TX75HZKJ.js";
import {
  A,
  U2 as U,
  l2 as l,
  m,
  t2 as t
} from "./chunk-GLWFJLHD.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/vec2.js
function o(e, t2) {
  n(e.typedBuffer, t2.typedBuffer, e.typedBufferStride, t2.typedBufferStride);
}
function n(o3, n2, l5 = 2, u3 = l5) {
  const i2 = n2.length / 2;
  let a2 = 0, d = 0;
  if (!m(n2) || l(n2)) {
    for (let e = 0; e < i2; ++e) o3[a2] = n2[d], o3[a2 + 1] = n2[d + 1], a2 += l5, d += u3;
    return;
  }
  const c = U(n2);
  if (A(n2)) for (let e = 0; e < i2; ++e) o3[a2] = Math.max(n2[d] / c, -1), o3[a2 + 1] = Math.max(n2[d + 1] / c, -1), a2 += l5, d += u3;
  else for (let e = 0; e < i2; ++e) o3[a2] = n2[d] / c, o3[a2 + 1] = n2[d + 1] / c, a2 += l5, d += u3;
}
function l3(e, t2, r2, f4) {
  const o3 = e.typedBuffer, n2 = e.typedBufferStride, l5 = f4?.count ?? e.count;
  let u3 = (f4?.dstIndex ?? 0) * n2;
  for (let i2 = 0; i2 < l5; ++i2) o3[u3] = t2, o3[u3 + 1] = r2, u3 += n2;
}
var u = Object.freeze(Object.defineProperty({ __proto__: null, fill: l3, normalizeIntegerBuffer: n, normalizeIntegerBufferView: o }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var l4 = class {
  constructor(r2 = (r3) => r3) {
    this._resolveURI = r2;
  }
  async loadJSON(r2, o3) {
    return this._load("json", r2, o3);
  }
  async loadBinary(r2, o3) {
    return tt(r2) ? (s(o3), nt(r2)) : this._load("array-buffer", r2, o3);
  }
  async loadImage(r2, o3) {
    return this._load("image", r2, o3);
  }
  async _load(s2, a2, i2) {
    a2 = this._resolveURI(a2);
    const l5 = await b(f2(a2, __spreadValues({ responseType: s2 }, i2)));
    if (l5.ok) return l5.value.data;
    throw f(l5.error), new r("gltf-loader-request-error", `Request for resource failed: ${l5.error}`);
  }
};

// node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
function o2(r2, t2) {
  switch (t2) {
    case _.TRIANGLES:
      return f3(r2);
    case _.TRIANGLE_STRIP:
      return u2(r2);
    case _.TRIANGLE_FAN:
      return i(r2);
  }
}
function f3(t2) {
  return "number" == typeof t2 ? l2(t2) : t(t2) ? new Uint16Array(t2) : t2;
}
function u2(r2) {
  const e = "number" == typeof r2 ? r2 : r2.length;
  if (e < 3) return [];
  const n2 = e - 2, o3 = a(3 * n2);
  if ("number" == typeof r2) {
    let r3 = 0;
    for (let t2 = 0; t2 < n2; t2 += 1) t2 % 2 == 0 ? (o3[r3++] = t2, o3[r3++] = t2 + 1, o3[r3++] = t2 + 2) : (o3[r3++] = t2 + 1, o3[r3++] = t2, o3[r3++] = t2 + 2);
  } else {
    let t2 = 0;
    for (let e2 = 0; e2 < n2; e2 += 1) e2 % 2 == 0 ? (o3[t2++] = r2[e2], o3[t2++] = r2[e2 + 1], o3[t2++] = r2[e2 + 2]) : (o3[t2++] = r2[e2 + 1], o3[t2++] = r2[e2], o3[t2++] = r2[e2 + 2]);
  }
  return o3;
}
function i(r2) {
  const t2 = "number" == typeof r2 ? r2 : r2.length;
  if (t2 < 3) return new Uint16Array(0);
  const e = t2 - 2, n2 = e <= 65536 ? new Uint16Array(3 * e) : new Uint32Array(3 * e);
  if ("number" == typeof r2) {
    let r3 = 0;
    for (let t3 = 0; t3 < e; ++t3) n2[r3++] = 0, n2[r3++] = t3 + 1, n2[r3++] = t3 + 2;
    return n2;
  }
  const o3 = r2[0];
  let f4 = r2[1], u3 = 0;
  for (let i2 = 0; i2 < e; ++i2) {
    const t3 = r2[i2 + 2];
    n2[u3++] = o3, n2[u3++] = f4, n2[u3++] = t3, f4 = t3;
  }
  return n2;
}

export {
  o,
  n,
  l3 as l,
  l4 as l2,
  o2
};
//# sourceMappingURL=chunk-OYUQQNUW.js.map
