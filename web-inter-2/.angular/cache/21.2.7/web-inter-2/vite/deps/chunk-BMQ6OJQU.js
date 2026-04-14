import {
  n as n3
} from "./chunk-YGUAW6ZO.js";
import {
  i,
  m,
  m2
} from "./chunk-ZRTWIUJY.js";
import {
  n as n2
} from "./chunk-P7RZPXO4.js";
import {
  f
} from "./chunk-F77L3CIW.js";
import {
  d
} from "./chunk-ACTGCYFB.js";
import {
  g
} from "./chunk-EE4SGCNH.js";
import {
  R
} from "./chunk-VCFT2RFZ.js";
import {
  n
} from "./chunk-ZKGNDXUQ.js";
import {
  T
} from "./chunk-LANOLZOB.js";
import {
  I
} from "./chunk-RVKOLALF.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c
} from "./chunk-JM4CKTH2.js";
import {
  p
} from "./chunk-WARIPJQI.js";
import {
  has,
  r3 as r
} from "./chunk-6I475YAP.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js
var S = class extends b {
  constructor(e) {
    super(e), this.dynamicDataSource = null, this.fieldsIndex = null, this.gdbVersion = null, this.infoFor3D = null, this.pbfSupported = false, this.pbfSupportedWithCurves = false, this.queryAttachmentsSupported = false, this.relativeTimeBinWindow = 0, this.sourceSpatialReference = null, this.uniqueIdFields = null, this.url = null;
  }
  get parsedUrl() {
    return I(this.url);
  }
  async execute(e, t) {
    const r2 = await this.executeJSON(e, t);
    return this.featureSetFromJSON(e, r2, t);
  }
  async executeJSON(e, t) {
    const r2 = this._normalizeQuery(e), o = null != e.outStatistics?.[0], s = has("featurelayer-pbf-statistics");
    let i2;
    if (this.pbfSupported && (!o || s) && (!e.returnTrueCurves || this.pbfSupportedWithCurves)) try {
      i2 = await n3(this.url, r2, t, { uniqueIdFields: this.uniqueIdFields });
    } catch (u) {
      if ("query:parsing-pbf" !== u.name) throw u;
      this.pbfSupported = false;
    }
    return i2 ??= await n2(this.url, r2, t, { uniqueIdFields: this.uniqueIdFields }), this._normalizeFields(i2.fields), i2;
  }
  async featureSetFromJSON(e, t, r2) {
    if (!this._queryGet3DObjectFormat(e) || null == this.infoFor3D || !t.features) return g.fromJSON(t);
    const { meshFeatureSetFromJSON: s } = await p(import("./meshFeatureSet-3VVK3E4S.js"), r2);
    return s(e, this.infoFor3D, t);
  }
  executeForCount(e, t) {
    return m(this.url, this._normalizeQuery(e), t, { uniqueIdFields: this.uniqueIdFields });
  }
  executeForExtent(e, t) {
    return m2(this.url, this._normalizeQuery(e), t);
  }
  executeForIds(e, t) {
    return i(this.url, this._normalizeQuery(e), t, { uniqueIdFields: this.uniqueIdFields });
  }
  async executeRelationshipQuery(e, t) {
    const [{ default: r2 }, { executeRelationshipQuery: s }] = await p(Promise.all([import("./RelationshipQuery-M2HVHMT6.js"), import("./executeRelationshipQuery-L32SMGEZ.js")]), t);
    let i2 = r2.from(e);
    return (this.gdbVersion || this.dynamicDataSource) && (i2 = i2.clone(), i2.gdbVersion = i2.gdbVersion || this.gdbVersion, i2.dynamicDataSource = i2.dynamicDataSource || this.dynamicDataSource), s(this.url, i2, t);
  }
  async executeRelationshipQueryForCount(e, t) {
    const [{ default: r2 }, { executeRelationshipQueryForCount: s }] = await p(Promise.all([import("./RelationshipQuery-M2HVHMT6.js"), import("./executeRelationshipQuery-L32SMGEZ.js")]), t);
    let i2 = r2.from(e);
    return (this.gdbVersion || this.dynamicDataSource) && (i2 = i2.clone(), i2.gdbVersion = i2.gdbVersion || this.gdbVersion, i2.dynamicDataSource = i2.dynamicDataSource || this.dynamicDataSource), s(this.url, i2, t);
  }
  async executeAttachmentQuery(e, t) {
    const { executeAttachmentQuery: r2, fetchAttachments: s, processAttachmentQueryResult: i2 } = await p(import("./queryAttachments-LYV4OZKR.js"), t), u = f(this.url);
    return i2(u, await (this.queryAttachmentsSupported ? r2(u, e, t) : s(u, e, t)));
  }
  async executeAttributeBinsQuery(e, t) {
    const { executeAttributeBinsQuery: r2 } = await p(import("./executeAttributeBinsQuery-5VKZ2SNA.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executePivotQuery(e, t) {
    const { executePivotQuery: r2 } = await p(import("./executePivotQuery-JXB24BPX.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executeTopFeaturesQuery(e, t) {
    const { executeTopFeaturesQuery: r2 } = await p(import("./executeTopFeaturesQuery-NIZNE3YL.js"), t);
    return r2(this.parsedUrl, e, this.sourceSpatialReference, t);
  }
  async executeForTopIds(e, t) {
    const { executeForTopIds: r2 } = await p(import("./executeForTopIds-WGUQ3HIR.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executeForTopExtents(e, t) {
    const { executeForTopExtents: r2 } = await p(import("./executeForTopExtents-CWXCJHVG.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  async executeForTopCount(e, t) {
    const { executeForTopCount: r2 } = await p(import("./executeForTopCount-NULFHJRM.js"), t);
    return r2(this.parsedUrl, e, t);
  }
  _normalizeQuery(e) {
    let t = R.from(e);
    t.sourceSpatialReference = t.sourceSpatialReference || this.sourceSpatialReference, (this.gdbVersion || this.dynamicDataSource) && (t = t === e ? t.clone() : t, t.gdbVersion = e.gdbVersion || this.gdbVersion, t.dynamicDataSource = e.dynamicDataSource ? n.from(e.dynamicDataSource) : this.dynamicDataSource);
    const { infoFor3D: o } = this, s = this._queryGet3DObjectFormat(e);
    if (null != o && s) {
      if (t = t === e ? t.clone() : t, t.formatOf3DObjects = s, t.outSpatialReference && !T(t.outSpatialReference, this.sourceSpatialReference)) throw new r("query:unsupported-out-spatial-reference", "3D object feature services do not support projection of geometries");
      if (null == t.outFields || !t.outFields.includes("*")) {
        t = t === e ? t.clone() : t, null == t.outFields && (t.outFields = []);
        const { originX: r2, originY: s2, originZ: i2, translationX: u, translationY: n4, translationZ: a2, scaleX: c2, scaleY: p2, scaleZ: l, rotationX: d2, rotationY: m3, rotationZ: y, rotationDeg: h } = o.transformFieldRoles;
        t.outFields.push(r2, s2, i2, u, n4, a2, c2, p2, l, d2, m3, y, h);
      }
    }
    return t;
  }
  _normalizeFields(e) {
    if (null != this.fieldsIndex && null != e) for (const t of e) {
      const e2 = this.fieldsIndex.get(t.name);
      e2 && Object.assign(t, e2.toJSON());
    }
  }
  _queryGet3DObjectFormat({ returnGeometry: e, multipatchOption: t, outStatistics: r2 }) {
    return true !== e || "xyFootprint" === t || r2 ? null : d(this.infoFor3D);
  }
};
__decorate([a({ type: n })], S.prototype, "dynamicDataSource", void 0), __decorate([a()], S.prototype, "fieldsIndex", void 0), __decorate([a()], S.prototype, "gdbVersion", void 0), __decorate([a()], S.prototype, "infoFor3D", void 0), __decorate([a({ readOnly: true })], S.prototype, "parsedUrl", null), __decorate([a()], S.prototype, "pbfSupported", void 0), __decorate([a()], S.prototype, "pbfSupportedWithCurves", void 0), __decorate([a()], S.prototype, "queryAttachmentsSupported", void 0), __decorate([a()], S.prototype, "relativeTimeBinWindow", void 0), __decorate([a()], S.prototype, "sourceSpatialReference", void 0), __decorate([a()], S.prototype, "uniqueIdFields", void 0), __decorate([a({ type: String })], S.prototype, "url", void 0), S = __decorate([c("esri.layers.graphics.sources.support.QueryTask")], S);

export {
  S
};
//# sourceMappingURL=chunk-BMQ6OJQU.js.map
