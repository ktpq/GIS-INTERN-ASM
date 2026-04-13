import {
  oe,
  re
} from "./chunk-NR66QFNF.js";
import {
  A,
  D as D2,
  O,
  P,
  T,
  W,
  g,
  p
} from "./chunk-LANOLZOB.js";
import {
  n
} from "./chunk-FMWSBXS5.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  D,
  l2 as l,
  m2 as m,
  r4 as r
} from "./chunk-JM4CKTH2.js";
import {
  a
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/geometry/SpatialReference.js
var k;
var S = class extends n {
  static {
    k = this;
  }
  static {
    this.GCS_NAD_1927 = null;
  }
  static {
    this.WGS84 = null;
  }
  static {
    this.WebMercator = null;
  }
  static {
    this.PlateCarree = null;
  }
  static fromJSON(e) {
    if (!e) return null;
    if (!g2.some((t2) => null != e[t2])) {
      if (102100 === e?.wkid) return k.WebMercator;
      if (4326 === e?.wkid) return k.WGS84;
    }
    const t = new k();
    return t.read(e), t;
  }
  constructor(e) {
    super(e), this.latestWkid = null, this.wkid = null, this.wkt = null, this.wkt2 = null, this.vcsWkid = null, this.latestVcsWkid = null, this.falseM = null, this.falseX = null, this.falseY = null, this.falseZ = null, this.mTolerance = null, this.mUnits = null, this.xyTolerance = null, this.xyUnits = null, this.zTolerance = null, this.zUnits = null, this.imageCoordinateSystem = null;
  }
  normalizeCtorArgs(e) {
    if (e && "object" == typeof e) return e;
    const t = "string" == typeof e ? "wkt" : "wkid";
    return { [t]: e };
  }
  get isWGS84() {
    return P(this);
  }
  get isWebMercator() {
    return O(this);
  }
  get isGeographic() {
    return A(this);
  }
  get isWrappable() {
    return D2(this);
  }
  get metersPerUnit() {
    return re(this);
  }
  get unit() {
    return oe(this) || (this.isGeographic ? "degrees" : null);
  }
  writeWkt(e, t) {
    this.wkid || (t.wkt = e);
  }
  clone() {
    if (this === k.WGS84) return new k(g);
    if (this === k.WebMercator) return new k(p);
    const e = new k();
    return null != this.wkid ? (e.wkid = this.wkid, null != this.latestWkid && (e.latestWkid = this.latestWkid), null != this.vcsWkid && (e.vcsWkid = this.vcsWkid), null != this.latestVcsWkid && (e.latestVcsWkid = this.latestVcsWkid)) : (null != this.wkt && (e.wkt = this.wkt), null != this.wkt2 && (e.wkt2 = this.wkt2)), this.imageCoordinateSystem && (e.imageCoordinateSystem = a(this.imageCoordinateSystem)), null != this.falseM && (e.falseM = this.falseM), null != this.falseX && (e.falseX = this.falseX), null != this.falseY && (e.falseY = this.falseY), null != this.falseZ && (e.falseZ = this.falseZ), null != this.mTolerance && (e.mTolerance = this.mTolerance), null != this.mUnits && (e.mUnits = this.mUnits), null != this.xyTolerance && (e.xyTolerance = this.xyTolerance), null != this.xyUnits && (e.xyUnits = this.xyUnits), null != this.zTolerance && (e.zTolerance = this.zTolerance), null != this.zUnits && (e.zUnits = this.zUnits), e;
  }
  equals(e) {
    if (null == e) return false;
    if (this.imageCoordinateSystem || e.imageCoordinateSystem) {
      if (null == this.imageCoordinateSystem || null == e.imageCoordinateSystem) return false;
      const { id: t, referenceServiceName: i } = e.imageCoordinateSystem, { geodataXform: r2 } = e.imageCoordinateSystem, s = this.imageCoordinateSystem;
      return null == t || r2 ? JSON.stringify(s) === JSON.stringify(e.imageCoordinateSystem) : i ? s.id === t && s.referenceServiceName === i : s.id === t;
    }
    return T(this, e);
  }
  toJSON(e) {
    return this.write(void 0, e);
  }
};
__decorate([m({ readOnly: true })], S.prototype, "isWGS84", null), __decorate([m({ readOnly: true })], S.prototype, "isWebMercator", null), __decorate([m({ readOnly: true })], S.prototype, "isGeographic", null), __decorate([m({ readOnly: true })], S.prototype, "isWrappable", null), __decorate([m({ type: D, json: { write: true } })], S.prototype, "latestWkid", void 0), __decorate([m({ readOnly: true })], S.prototype, "metersPerUnit", null), __decorate([m({ readOnly: true })], S.prototype, "unit", null), __decorate([m({ type: D, json: { write: true, origins: { "web-scene": { write: { overridePolicy() {
  return { isRequired: null == this.wkt };
} } } } } })], S.prototype, "wkid", void 0), __decorate([m({ type: String, json: { origins: { "web-scene": { write: { overridePolicy() {
  return { isRequired: null == this.wkid };
} } } } } })], S.prototype, "wkt", void 0), __decorate([r("wkt"), r("web-scene", "wkt")], S.prototype, "writeWkt", null), __decorate([m({ type: String, json: { write: false } })], S.prototype, "wkt2", void 0), __decorate([m({ type: D, json: { write: true } })], S.prototype, "vcsWkid", void 0), __decorate([m({ type: D, json: { write: true } })], S.prototype, "latestVcsWkid", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "falseM", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "falseX", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "falseY", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "falseZ", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "mTolerance", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "mUnits", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "xyTolerance", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "xyUnits", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "zTolerance", void 0), __decorate([m({ type: Number, json: { write: true } })], S.prototype, "zUnits", void 0), __decorate([m()], S.prototype, "imageCoordinateSystem", void 0), S = k = __decorate([l("esri.geometry.SpatialReference")], S), S.prototype.toJSON.isDefaultToJSON = true, S.GCS_NAD_1927 = b.freeze(new S({ wkid: 4267, wkt: 'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]' })), S.WGS84 = b.freeze(new S(g)), S.WebMercator = b.freeze(new S(p)), S.PlateCarree = b.freeze(new S(W));
var g2 = ["falseM", "falseX", "falseY", "falseZ", "mTolerance", "mUnits", "xyTolerance", "xyUnits", "zTolerance", "zUnits"];

export {
  S
};
//# sourceMappingURL=chunk-TOB5EAWJ.js.map
