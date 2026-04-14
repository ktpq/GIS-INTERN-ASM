import {
  d,
  w,
  x
} from "./chunk-ZSRN67J4.js";
import "./chunk-GTKQ5OIO.js";
import "./chunk-IR2HLRVY.js";
import {
  e as e2,
  t
} from "./chunk-5LD45GA6.js";
import {
  r
} from "./chunk-GSA7GSBJ.js";
import "./chunk-U53LEWHC.js";
import "./chunk-WOCPFOF3.js";
import "./chunk-IO7CXLQO.js";
import {
  i
} from "./chunk-MF53JKT5.js";
import {
  m
} from "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import "./chunk-U4R7X4DP.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-PYUJO4E2.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import {
  S
} from "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  e2 as e
} from "./chunk-XCGM4D6U.js";
import "./chunk-TIEYANBR.js";
import "./chunk-DCL27SPX.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-PQFEWUZC.js";
import "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/operations/pbfDehydratedFeatureSet.js
var p = class _p {
  constructor(t3) {
    this._options = t3, this.featureSet = new x(), this.usesShortGeometryTypes = true, this._queryGeometryType = null, this._queryGeometry = null, this.parseOnly = null, this.missingAttributes = [], this._transformInPlace = null, this._attributesClass = null, this._previousX = 0, this._previousY = 0, this._point = null, this._lengths = null, this._vertex = [], this._part = null, this._parts = null, this._i = 0, this._finishVertex = _p._finishVertexNonPoint;
  }
  queryGeometryType() {
    return this._queryGeometryType;
  }
  queryGeometry() {
    return this._queryGeometry;
  }
  idField(t3) {
    "string" == typeof t3 && (this.featureSet.objectIdFieldName = t3);
  }
  finish() {
    this._options.applyTransform && (this.featureSet.transform = null);
    let { spatialReference: t3, features: s2, fields: i2 } = this.featureSet;
    if (!t3 || t3 instanceof S || (this.featureSet.spatialReference = t3 = S.fromJSON(t3)), t3) for (const { geometry: e3 } of s2) e3 && (e3.spatialReference = t3);
    i2.forEach((t4, e3) => {
      t4 instanceof m || (i2[e3] = m.fromJSON(t4));
    });
  }
  _setVertexTransformer() {
    const { sourceSpatialReference: t3 } = this._options, { spatialReference: e3, hasZ: i2 } = this.featureSet, r2 = i2 ? i(t3, e3) : 1;
    this._transformInPlace ??= e2(this.featureSet, r2);
  }
  feature() {
    this._attributesClass ??= t(this.featureSet.fields?.map((t3) => t3.name) ?? []), this.featureSet.features.push(new d(e(), null, new this._attributesClass())), this._options.applyTransform && this._setVertexTransformer();
  }
  finishFeature() {
    const { maxStringAttributeLength: t3, maxStringAttributeFields: e3 } = this._options, { attributes: s2 } = this.featureSet.features.at(-1), i2 = s2[this.featureSet.objectIdFieldName];
    w(s2, e3, t3, (t4) => {
      null != i2 && this.missingAttributes.push({ objectId: i2, attribute: t4 });
    });
  }
  _createPoint() {
    const { hasZ: t3, hasM: e3, spatialReference: s2 } = this.featureSet, i2 = { type: "point", x: 0, y: 0, spatialReference: s2, hasZ: t3, hasM: e3 };
    return t3 && (i2.z = 0), e3 && (i2.m = 0), i2;
  }
  centroid(t3) {
    const { hasZ: e3, hasM: s2 } = this.featureSet, i2 = this._createPoint();
    [i2.x, i2.y] = t3, e3 && (i2.z = t3[2]), s2 && (i2.m = t3.at(-1)), this.featureSet.features.at(-1).centroid = i2;
  }
  geometry(t3, e3, s2) {
    this._previousX = this._previousY = 0, this._lengths = s2;
    let i2, { spatialReference: r2, hasZ: a, hasM: n } = this.featureSet;
    switch (a ??= false, n ??= false, this._vertex = [0, 0], a && this._vertex.push(0), n && this._vertex.push(0), this._finishVertex = _p._finishVertexNonPoint, e3) {
      case "esriGeometryPoint":
        this._point = this._createPoint(), i2 = this._point, this._finishVertex = a ? n ? _p._finishVertexPointXYZM : _p._finishVertexPointXYZ : n ? _p._finishVertexPointXYM : _p._finishVertexPointXY;
        break;
      case "esriGeometryMultipoint":
        i2 = { type: "multipoint", points: [], spatialReference: r2, hasZ: a, hasM: n }, this._part = i2.points, this._parts = [];
        break;
      case "esriGeometryPolyline":
        i2 = { type: "polyline", paths: [], spatialReference: r2, hasZ: a, hasM: n }, this._parts = i2.paths, this._part = [];
        break;
      case "esriGeometryPolygon":
        i2 = { type: "polygon", rings: [], spatialReference: r2, hasZ: a, hasM: n }, this._parts = i2.rings, this._part = [];
    }
    1 === t3 ? (this._queryGeometry = i2, this._queryGeometryType = e3, this._options.applyTransform || this._setVertexTransformer()) : this.featureSet.features.at(-1).geometry = i2;
  }
  coord(t3) {
    const e3 = this._vertex;
    e3[this._i++] = t3, this._i < e3.length || (this._i = 0, this._transformInPlace && (e3[0] += this._previousX, e3[1] += this._previousY, [this._previousX, this._previousY] = e3, this._transformInPlace(e3)), this._finishVertex(this));
  }
  static _finishVertexPointXY({ _point: t3, _vertex: e3 }) {
    [t3.x, t3.y] = e3;
  }
  static _finishVertexPointXYZ({ _point: t3, _vertex: e3 }) {
    [t3.x, t3.y, t3.z] = e3;
  }
  static _finishVertexPointXYM({ _point: t3, _vertex: e3 }) {
    [t3.x, t3.y, t3.m] = e3;
  }
  static _finishVertexPointXYZM({ _point: t3, _vertex: e3 }) {
    [t3.x, t3.y, t3.z, t3.m] = e3;
  }
  static _finishVertexNonPoint(t3) {
    const { _part: e3, _parts: s2, _lengths: i2, _vertex: r2 } = t3;
    e3.push([...r2]), e3.length < i2[s2.length] || (t3._previousX = t3._previousY = 0, t3._part = [], s2.push(e3));
  }
};

// node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js
var t2 = class {
  _parseFeatureQuery(t3) {
    const s2 = new p(t3.options), i2 = r(t3.buffer, s2), o = __spreadProps(__spreadValues({}, i2), { spatialReference: i2.spatialReference?.toJSON(), fields: i2.fields ? i2.fields.map((e3) => e3.toJSON()) : void 0, missingAttributes: s2.missingAttributes });
    return Promise.resolve(o);
  }
};
function s() {
  return new t2();
}
export {
  s as default
};
//# sourceMappingURL=PBFDecoderWorker-JVQD5RIH.js.map
