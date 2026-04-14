// node_modules/@arcgis/core/widgets/PanoramicViewer/support/importUtils.js
async function t(t2) {
  const e2 = (await import("./PanoramicMeshManager-SJC37WTS.js").then((t3) => t3.default)).getInstance();
  return await e2.load(t2);
}
async function e() {
  return i(await import("./Mesh-V7QFIPDF.js"));
}
async function r() {
  return i(await import("./MeshComponent-DM5R7DEE.js"));
}
async function n() {
  return i(await import("./MeshMaterial-LGHOGIHA.js"));
}
async function s() {
  return i(await import("./MeshTexture-EZX2CWDJ.js"));
}
async function o() {
  return (await import("./MeshVertexAttributes-UDNZC7PP.js")).default;
}
function i(t2) {
  return t2.default ?? t2;
}
async function u() {
  const [a, i2, u2, c, p2, m2] = await Promise.all([e(), r(), n(), s(), o(), t()]);
  return { Mesh: a, MeshComponent: i2, MeshMaterial: u2, MeshTexture: c, MeshVertexAttributes: p2, panoramicMeshManager: m2 };
}
async function p() {
  return i(await import("./PanoramicTilePyramid-U5BVATRO.js"));
}
async function m() {
  return i(await import("./RasterFactory-VM63TJSV.js"));
}

export {
  u,
  p,
  m
};
//# sourceMappingURL=chunk-LZPQMILF.js.map
