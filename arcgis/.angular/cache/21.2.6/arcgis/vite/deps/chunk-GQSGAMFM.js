import {
  i
} from "./chunk-QWNB5I7T.js";

// node_modules/@arcgis/core/views/support/screenUtils.js
function n(t) {
  return i(t.x, t.y);
}
function r(t, n2) {
  const c = (t instanceof HTMLElement ? t : t.surface)?.getBoundingClientRect();
  return c ? i(n2.clientX - c.left, n2.clientY - c.top) : i(0, 0);
}
function i2(e, t) {
  return t instanceof Event ? r(e, t) : n(t);
}
function o(e) {
  if (e instanceof Event) return true;
  if ("object" == typeof e && "type" in e) {
    switch (e.type) {
      case "click":
      case "double-click":
      case "pointer-down":
      case "pointer-drag":
      case "pointer-enter":
      case "pointer-leave":
      case "pointer-up":
      case "pointer-move":
      case "immediate-click":
      case "immediate-double-click":
      case "hold":
      case "drag":
      case "mouse-wheel":
      case "double-tap-drag":
      case "vertical-two-finger-drag":
        return true;
      default:
        return false;
    }
  }
  return false;
}

export {
  n,
  r,
  i2 as i,
  o
};
//# sourceMappingURL=chunk-GQSGAMFM.js.map
