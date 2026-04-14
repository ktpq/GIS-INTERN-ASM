import {
  u
} from "./chunk-ZOGFK6VN.js";
import {
  o
} from "./chunk-Z4OV5TC3.js";
import {
  Y
} from "./chunk-WDBBUHVA.js";
import {
  m
} from "./chunk-FIGRRXUX.js";
import {
  g
} from "./chunk-KRHMY6UB.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import {
  s
} from "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __objRest
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/PanoramicViewer/support/PanoramicTileNode.js
var l = class _l {
  constructor(i, l2, n, h, m2, w, p, u2, f, d) {
    this.level = i, this.row = l2, this.column = n, this.horizontalFieldOfView = h, this.verticalFieldOfView = m2, this.yaw = w, this.pitch = p, this.distance = u2, this.horizonAngles = f, this.getPixelBlock = d, this._cache = null, this.loadMesh = async (i2) => {
      const { level: l3, row: n2, column: h2, horizontalFieldOfView: m3, verticalFieldOfView: w2, yaw: p2, pitch: u3, distance: f2 } = this, { Mesh: d2, MeshComponent: g2, MeshVertexAttributes: v, panoramicMeshManager: M } = await u(), _a = await M.getFacesWithVertexAttributes({ distance: f2, yaw: p2, horizontalFieldOfView: m3, pitch: u3, verticalFieldOfView: w2 }), { faces: x } = _a, y = __objRest(_a, ["faces"]);
      s(i2);
      const V = await this.getPixelBlock(l3, n2, h2, i2);
      if (s(i2), !V) throw new r("panoramic-viewer:missing-tile-data", `Tile data for level ${l3}, row ${n2}, column ${h2} is missing`, { level: l3, row: n2, column: h2 });
      const A = await M.convertPixelBlockToImageData(V);
      s(i2);
      const F = new d2({ vertexAttributes: new v(y), components: [new g2({ faces: x, trustSourceNormals: true, material: new m({ colorTexture: new g({ data: A }) }) })], spatialReference: S.WebMercator });
      return F.rotate(...this.horizonAngles, { origin: o }), await F.load(i2), this._cache = F, this._cache;
    }, this.loadMeshAtDistance = async (e, t) => {
      const i2 = this.distance;
      return this.distance = e, Math.abs(i2 - e) > 1e-6 && this._cache ? this._cache : await this.loadMesh(t);
    };
  }
  get loaded() {
    return null !== this._cache;
  }
  get key() {
    return `${this.level}/${this.row}/${this.column}`;
  }
  clone() {
    const { level: e, row: t, column: s2, horizontalFieldOfView: o2, verticalFieldOfView: r2, yaw: a, pitch: c, distance: n, getPixelBlock: h, horizonAngles: m2 } = this, w = new _l(e, t, s2, o2, r2, a, c, n, m2, h);
    if (this._cache) {
      const { vertexAttributes: e2, components: t2, spatialReference: s3 } = this._cache, o3 = t2?.map(({ material: e3, faces: t3, trustSourceNormals: i }) => ({ material: e3, faces: t3?.slice(), trustSourceNormals: i }));
      w._cache = new Y({ components: o3, vertexAttributes: e2.clone(), spatialReference: s3 });
    }
    return w;
  }
};

export {
  l
};
//# sourceMappingURL=chunk-RUH5L4SV.js.map
