import {
  f2 as f,
  ot,
  t2 as t
} from "./chunk-LAAWMBRE.js";
import {
  d
} from "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/imageUtils.js
var i = null;
var o = true;
function s(t2, e, r2) {
  if (!t2 || !e) throw new Error("Cannot construct image data without dimensions");
  if (o) try {
    return new ImageData(t2, e);
  } catch (a) {
    o = false;
  }
  return m(t2, e, r2);
}
function c(t2, e, r2, a) {
  if (!e || !r2) throw new Error("Cannot construct image data without dimensions");
  if (o) try {
    return new ImageData(t2, e, r2);
  } catch (i2) {
    o = false;
  }
  const n = m(e, r2, a);
  return n.data.set(t2, 0), n;
}
function f2() {
  return i || (i = document.createElement("canvas"), i.width = 1, i.height = 1), i;
}
function m(t2, e, r2) {
  return r2 || (r2 = f2()), r2.getContext("2d").createImageData(t2, e);
}
async function u(a, n) {
  const i2 = window.URL.createObjectURL(a);
  try {
    const { data: e } = await f(i2, __spreadProps(__spreadValues({}, n), { responseType: "image" }));
    return e;
  } catch (o2) {
    if (!d(o2)) throw new r("invalid-image", `Could not fetch requested image at ${i2}`);
    throw o2;
  } finally {
    window.URL.revokeObjectURL(i2);
  }
}
async function p(t2, e) {
  const { arrayBuffer: r2, mediaType: a } = await d2(t2, e), n = "image/png" === a;
  if ("image/gif" === a) {
    const { isAnimatedGIF: t3, parseGif: a2 } = await import("./gif-Y3ZUSP3F.js");
    if (t3(r2)) return a2(r2, e);
  }
  if (n) {
    const { isAnimatedPNG: t3, parseApng: a2 } = await import("./apng-67I4IMBP.js");
    if (t3(r2)) return a2(r2, e);
  }
  return u(new Blob([r2], { type: a }), e);
}
async function d2(e, r2) {
  const i2 = ot(e);
  if (i2?.isBase64) return { arrayBuffer: t(i2.data), mediaType: i2.mediaType };
  const o2 = await f(e, __spreadValues({ responseType: "array-buffer" }, r2));
  return { arrayBuffer: o2.data, mediaType: o2.getHeader?.("Content-Type") ?? "" };
}

export {
  s,
  c,
  p
};
//# sourceMappingURL=chunk-ADTMD3CX.js.map
