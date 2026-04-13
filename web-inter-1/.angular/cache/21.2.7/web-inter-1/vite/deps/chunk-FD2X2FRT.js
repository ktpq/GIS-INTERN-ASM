// node_modules/@arcgis/core/widgets/PanoramicViewer/support/importUtils.js
async function t(t2) {
  const e2 = (await import("./PanoramicMeshManager-746SZ67T.js").then((t3) => t3.default)).getInstance();
  return await e2.load(t2);
}
async function e() {
  return i(await import("./Mesh-DWRJ6JI7.js"));
}
async function r() {
  return i(await import("./MeshComponent-BFMPAS3X.js"));
}
async function n() {
  return i(await import("./MeshMaterial-O3V5EFOH.js"));
}
async function s() {
  return i(await import("./MeshTexture-KJSZN6SK.js"));
}
async function o() {
  return (await import("./MeshVertexAttributes-VYLXWPI7.js")).default;
}
function i(t2) {
  return t2.default ?? t2;
}
async function u() {
  const [a, i2, u2, c, p2, m2] = await Promise.all([e(), r(), n(), s(), o(), t()]);
  return { Mesh: a, MeshComponent: i2, MeshMaterial: u2, MeshTexture: c, MeshVertexAttributes: p2, panoramicMeshManager: m2 };
}
async function p() {
  return i(await import("./PanoramicTilePyramid-HA2QYV25.js"));
}
async function m() {
  return i(await import("./RasterFactory-H2LEHTQR.js"));
}

export {
  u,
  p,
  m
};
//# sourceMappingURL=chunk-FD2X2FRT.js.map
