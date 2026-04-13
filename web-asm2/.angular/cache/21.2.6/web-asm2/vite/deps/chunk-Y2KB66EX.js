import {
  n,
  t
} from "./chunk-5KA5HRRK.js";
import {
  r,
  u as u2
} from "./chunk-IXOUFXRS.js";
import {
  u
} from "./chunk-QWNB5I7T.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js
function i(e2) {
  return e2 && e2.enabled && (n(e2) || t(e2)) && null != e2.edges;
}
function c(e2) {
  return e2 && e2.enabled && e2.edges || null;
}
function s(e2, n2) {
  return l(c(e2), n2);
}
function l(o, r3) {
  if (null == o) return null;
  const i2 = null != o.color ? u2(o.color.toUnitRGBA()) : r(0, 0, 0, 0), c3 = u(o.size), s2 = u(o.extensionLength);
  switch (o.type) {
    case "solid":
      return u3(__spreadValues({ color: i2, size: c3, extensionLength: s2 }, r3));
    case "sketch":
      return a(__spreadValues({ color: i2, size: c3, extensionLength: s2 }, r3));
    default:
      return;
  }
}
function u3(e2) {
  return __spreadProps(__spreadValues(__spreadValues({}, f), e2), { type: 0 });
}
function a(e2) {
  return __spreadProps(__spreadValues(__spreadValues({}, p), e2), { type: 1 });
}
var f = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: 1, hasSlicePlane: false };
var p = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: 1, hasSlicePlane: false };

// node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
function e(t2, r3) {
  for (let n2 = 0; n2 < 4; n2++) t2[n2] = u4(r3[n2]);
  return t2;
}
function u4(t2) {
  return isNaN(t2) ? 255 : t2 * (254 / 255);
}
var c2 = 85;
var a2 = 2 * c2;

export {
  i,
  s,
  u3 as u,
  e
};
//# sourceMappingURL=chunk-Y2KB66EX.js.map
