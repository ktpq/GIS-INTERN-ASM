// node_modules/@arcgis/core/widgets/PanoramicViewer/support/importUtils.js
async function t(t2) {
  const e2 = (await import("./PanoramicMeshManager-NVCZVMDD.js").then((t3) => t3.default)).getInstance();
  return await e2.load(t2);
}
async function e() {
  return i(await import("./Mesh-JVYVF5XA.js"));
}
async function r() {
  return i(await import("./MeshComponent-J6BMYQVE.js"));
}
async function n() {
  return i(await import("./MeshMaterial-NSN2OA5F.js"));
}
async function s() {
  return i(await import("./MeshTexture-5WWKVQ3B.js"));
}
async function o() {
  return (await import("./MeshVertexAttributes-EXT4JENM.js")).default;
}
function i(t2) {
  return t2.default ?? t2;
}
async function u() {
  const [a, i2, u2, c, p2, m2] = await Promise.all([e(), r(), n(), s(), o(), t()]);
  return { Mesh: a, MeshComponent: i2, MeshMaterial: u2, MeshTexture: c, MeshVertexAttributes: p2, panoramicMeshManager: m2 };
}
async function p() {
  return i(await import("./PanoramicTilePyramid-GBKB3RUC.js"));
}
async function m() {
  return i(await import("./RasterFactory-6SFRSDDV.js"));
}

export {
  u,
  p,
  m
};
//# sourceMappingURL=chunk-PINTYE7R.js.map
