// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var t = (t2, ...n2) => {
  let e = "";
  for (let o = 0; o < n2.length; o++) e += t2[o] + n2[o];
  return e += t2[t2.length - 1], e;
};
function n(t2, n2, e = "") {
  return t2 ? n2 : e;
}
t.int = (t2) => t2.toFixed(), t.uint = (t2) => `${Math.max(0, t2).toFixed()}u`, t.hexuint = (t2) => `0x${Math.round(Math.max(0, t2)).toString(16)}u`, t.float = (t2) => t2.toPrecision(8);

export {
  t,
  n
};
//# sourceMappingURL=chunk-QLAEYQER.js.map
