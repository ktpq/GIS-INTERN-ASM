// node_modules/@arcgis/core/widgets/PanoramicViewer/support/importUtils.js
async function t(t2) {
  const e2 = (await import("./PanoramicMeshManager-OASMR32X.js").then((t3) => t3.default)).getInstance();
  return await e2.load(t2);
}
async function e() {
  return i(await import("./Mesh-UZC3PHBR.js"));
}
async function r() {
  return i(await import("./MeshComponent-KARU6BCP.js"));
}
async function n() {
  return i(await import("./MeshMaterial-DYE5IIN7.js"));
}
async function s() {
  return i(await import("./MeshTexture-ISKJZ7CW.js"));
}
async function o() {
  return (await import("./MeshVertexAttributes-V3ISXPOE.js")).default;
}
function i(t2) {
  return t2.default ?? t2;
}
async function u() {
  const [a, i2, u2, c, p2, m2] = await Promise.all([e(), r(), n(), s(), o(), t()]);
  return { Mesh: a, MeshComponent: i2, MeshMaterial: u2, MeshTexture: c, MeshVertexAttributes: p2, panoramicMeshManager: m2 };
}
async function p() {
  return i(await import("./PanoramicTilePyramid-XJFEPLKI.js"));
}
async function m() {
  return i(await import("./RasterFactory-YS77GOQE.js"));
}

export {
  u,
  p,
  m
};
//# sourceMappingURL=chunk-34OXIVT2.js.map
