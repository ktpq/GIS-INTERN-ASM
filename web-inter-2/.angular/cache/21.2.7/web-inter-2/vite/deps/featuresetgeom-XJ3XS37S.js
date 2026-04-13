import {
  a as a2
} from "./chunk-FCTNGHZN.js";
import {
  r,
  s,
  w3 as w
} from "./chunk-KSD2OHGV.js";
import {
  t
} from "./chunk-YCI7PD23.js";
import {
  a
} from "./chunk-CAE43PMU.js";
import "./chunk-CHN46D77.js";
import "./chunk-NDSBN2Q5.js";
import {
  B,
  Je,
  U,
  ge,
  oe
} from "./chunk-2TM3RLAF.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-BI5WXBSP.js";
import "./chunk-D2Z2HLWL.js";
import "./chunk-GUTQBY5P.js";
import "./chunk-VJCO7ZMT.js";
import "./chunk-373PU6B4.js";
import "./chunk-LBXDB7YQ.js";
import {
  G
} from "./chunk-EDM7PDCW.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-GXLPH2D4.js";
import "./chunk-Q3C4JQ3I.js";
import "./chunk-44DFY7I4.js";
import "./chunk-VBPD3MAX.js";
import "./chunk-MVS4RVUO.js";
import "./chunk-PXICZPXV.js";
import "./chunk-K6KUHFK2.js";
import {
  n as n2
} from "./chunk-5QF2VDYR.js";
import {
  n
} from "./chunk-K3KADXMX.js";
import "./chunk-PF33M5XM.js";
import "./chunk-HBLYZMSH.js";
import "./chunk-MNLCSEA7.js";
import "./chunk-YZDX62BD.js";
import "./chunk-MUI2ETB6.js";
import "./chunk-T5UM3L76.js";
import "./chunk-737A5DQP.js";
import "./chunk-MQAP2X3X.js";
import "./chunk-QNJTKKZK.js";
import "./chunk-WZW6KMAU.js";
import "./chunk-WRETNREX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-LF4XI7IU.js";
import "./chunk-DAHPVVCD.js";
import "./chunk-WWKLZ2P6.js";
import "./chunk-BJNDU6LU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-WDPGHXN4.js";
import "./chunk-E4TLNY2F.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-LQMHYEKG.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import {
  l
} from "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-PWZ6VVYN.js";
import "./chunk-OFSNX7BB.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-2OJZRK55.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import "./chunk-PKBHGDEY.js";
import "./chunk-DNJ342E3.js";
import "./chunk-XPGSGU2C.js";
import "./chunk-EKLJIMB3.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/featureset/actions/SpatialFilter.js
var o = class extends w {
  constructor(t2) {
    super(), this.declaredClass = "esri.arcade.featureset.actions.SpatialFilter", this._maxProcessing = 40, this._parent = t2.parentfeatureset, this._relation = t2.relation, this._relationString = t2.relationString ?? "", this._relationGeom = t2.relationGeom;
  }
  get _spatialFilter() {
    return { relation: "esriSpatialRelRelation" !== this._relation ? this._relation : `esriSpatialRelRelation:${this._relationString}`, geometry: this._relationGeom };
  }
  async _queryAll() {
    return (await this.query({ abortSignal: t })).features;
  }
  async query(t2) {
    await this._ensureLoaded();
    const e = await this._parent.query(__spreadProps(__spreadValues({}, t2), { spatialFilter: this._spatialFilter }));
    return s(t2.abortSignal), __spreadProps(__spreadValues({}, e), { spatialFilterApplied: null == t2.spatialFilter, features: e.spatialFilterApplied ? e.features : this._applySpatialFilter(e.features, t2.abortSignal) });
  }
  async *_applySpatialFilter(t2, e) {
    for await (const a3 of t2) {
      s(e);
      const t3 = [];
      for (const e2 of a3) await this._executeSpatialRelationTest(e2) && t3.push(e2);
      t3.length > 0 && (yield t3);
    }
  }
  async queryStat(t2) {
    if (null != t2.spatialFilter) return { calculated: false };
    const e = await this._parent.queryStat(__spreadProps(__spreadValues({}, t2), { spatialFilter: this._spatialFilter }));
    return e.calculated ? e : null == t2.where && null == t2.spatialFilter ? this._manualStat(t2.stat, t2.field, t2.limit ?? G, t2.abortSignal) : { calculated: false };
  }
  async canQueryAggregate(t2) {
    return null == t2.spatialFilter && this._parent.canQueryAggregate(__spreadProps(__spreadValues({}, t2), { spatialFilter: this._spatialFilter }));
  }
  async queryAggregate(t2) {
    if (null != t2.spatialFilter) throw new r("NeverReach");
    return this._parent.queryAggregate(__spreadProps(__spreadValues({}, t2), { spatialFilter: this._spatialFilter }));
  }
  async _executeSpatialRelationTest(t2) {
    if (null == t2.geometry) return false;
    switch (this._relation) {
      case "esriSpatialRelEnvelopeIntersects": {
        const r2 = n2(this._relationGeom), a3 = l(t2.geometry);
        return null != r2 && null != a3 && a("intersects", [r2.toJSON(), a3]);
      }
      case "esriSpatialRelIntersects":
        return a("intersects", [this._relationGeom.toJSON(), t2.geometry]);
      case "esriSpatialRelContains":
        return a("contains", [this._relationGeom.toJSON(), t2.geometry]);
      case "esriSpatialRelOverlaps":
        return a("overlaps", [this._relationGeom.toJSON(), t2.geometry]);
      case "esriSpatialRelWithin":
        return a("within", [this._relationGeom.toJSON(), t2.geometry]);
      case "esriSpatialRelTouches":
        return a("touches", [this._relationGeom.toJSON(), t2.geometry]);
      case "esriSpatialRelCrosses":
        return a("crosses", [this._relationGeom.toJSON(), t2.geometry]);
      case "esriSpatialRelRelation":
        return a("relate", [this._relationGeom.toJSON(), t2.geometry, this._relationString]);
      default:
        return this._relation, false;
    }
  }
  getFieldsIndex() {
    return this._parent.getFieldsIndex();
  }
};

// node_modules/@arcgis/core/arcade/functions/featuresetgeom.js
function c(a3) {
  return async (c2, f2, p) => {
    if (oe(p, 2, 2, c2, f2), null === (p = Je(p))[0] && null === p[1]) return false;
    if (B(p[0])) {
      if (U(p[1])) return new o({ parentfeatureset: p[0], relation: a3, relationGeom: p[1] });
      if (null === p[1]) return new a2({ parentfeatureset: p[0] });
      throw new n(c2, "InvalidParameter", f2);
    }
    if (U(p[0])) {
      if (U(p[1])) {
        switch (a3) {
          case "esriSpatialRelEnvelopeIntersects": {
            const e = n2(p[0]), n3 = n2(p[1]);
            return null != e && null != n3 && a("intersects", [e.toJSON(), n3.toJSON()]);
          }
          case "esriSpatialRelIntersects":
            return a("intersects", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelContains":
            return a("contains", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelOverlaps":
            return a("overlaps", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelWithin":
            return a("within", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelTouches":
            return a("touches", [p[0].toJSON(), p[1].toJSON()]);
          case "esriSpatialRelCrosses":
            return a("crosses", [p[0].toJSON(), p[1].toJSON()]);
        }
        throw new n(c2, "InvalidParameter", f2);
      }
      if (B(p[1])) return new o({ parentfeatureset: p[1], relation: a3, relationGeom: p[0] });
      if (null === p[1]) return false;
      throw new n(c2, "InvalidParameter", f2);
    }
    if (null === p[0]) {
      if (B(p[1])) return new a2({ parentfeatureset: p[1] });
      if (U(p[1]) || null === p[1]) return false;
    }
    throw new n(c2, "InvalidParameter", f2);
  };
}
function f(t2) {
  "async" === t2.mode && (t2.functions.intersects = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelIntersects"));
  }, t2.functions.envelopeintersects = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelEnvelopeIntersects"));
  }, t2.signatures.push({ name: "envelopeintersects", min: 2, max: 2 }), t2.functions.contains = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelContains"));
  }, t2.functions.overlaps = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelOverlaps"));
  }, t2.functions.within = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelWithin"));
  }, t2.functions.touches = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelTouches"));
  }, t2.functions.crosses = function(e, n3) {
    return t2.standardFunctionAsync(e, n3, c("esriSpatialRelCrosses"));
  }, t2.functions.relate = function(c2, f2) {
    return t2.standardFunctionAsync(c2, f2, async (t3, p, S) => {
      if (S = Je(S), oe(S, 3, 3, c2, f2), U(S[0]) && U(S[1])) return a("relate", [S[0].toJSON(), S[1].toJSON(), ge(S[2])]);
      if (U(S[0]) && null === S[1]) return false;
      if (U(S[1]) && null === S[0]) return false;
      if (B(S[0]) && null === S[1]) return new a2({ parentfeatureset: S[0] });
      if (B(S[1]) && null === S[0]) return new a2({ parentfeatureset: S[1] });
      if (B(S[0]) && U(S[1])) return new o({ parentfeatureset: S[0], relation: "esriSpatialRelRelation", relationGeom: S[1], relationString: ge(S[2]) });
      if (B(S[1]) && U(S[0])) return new o({ parentfeatureset: S[1], relation: "esriSpatialRelRelation", relationGeom: S[0], relationString: ge(S[2]) });
      if (null === S[0] && null === S[1]) return false;
      throw new n(c2, "InvalidParameter", f2);
    });
  });
}
export {
  f as registerFunctions
};
//# sourceMappingURL=featuresetgeom-XJ3XS37S.js.map
