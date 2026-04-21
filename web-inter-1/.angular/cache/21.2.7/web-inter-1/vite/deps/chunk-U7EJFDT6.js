// node_modules/@arcgis/core/views/support/selectionUtils.js
function e(n) {
  return !(null == n || "object" != typeof n || !("id" in n) || !("type" in n));
}
function r(n) {
  return !!(e(n) && "on" in n && n.on);
}
function t2(n) {
  return !!(e(n) && "graphics" in n && n.graphics);
}
function i(n) {
  return !!(e(n) && "fields" in n && "fieldsIndex" in n && "objectIdField" in n && "createQuery" in n && n.createQuery && "queryFeatures" in n && n.queryFeatures);
}
function u(n) {
  return i(n) || t2(n);
}
function c(n) {
  return !!(null != n && "object" == typeof n && "layer" in n && n.layer && e(n.layer) && "view" in n);
}
function o(n) {
  return !(!c(n) || !("queryGraphics" in n));
}
function a(n) {
  return !!(c(n) && "highlight" in n && n.highlight);
}
function f(n) {
  return !!(c(n) && "createQuery" in n && n.createQuery && "queryFeatures" in n && n.queryFeatures);
}
function l(n) {
  return f(n) || o(n);
}
function y(n) {
  return !(null == n || "object" != typeof n || !("isTable" in n) || !n.isTable);
}

export {
  r,
  t2 as t,
  i,
  u,
  a,
  f,
  l,
  y
};
//# sourceMappingURL=chunk-U7EJFDT6.js.map
