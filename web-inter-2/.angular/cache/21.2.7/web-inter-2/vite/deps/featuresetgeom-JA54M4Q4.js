import {
  a as a2
} from "./chunk-ZC3TXDUN.js";
import {
  r,
  s,
  w3 as w
} from "./chunk-W6HXLMYS.js";
import {
  t
} from "./chunk-ORHXWUYE.js";
import {
  a
} from "./chunk-ZTWGQF5T.js";
import "./chunk-YVZGGELN.js";
import "./chunk-PZPVYO2I.js";
import "./chunk-JWKKLHJV.js";
import {
  B,
  Je,
  U,
  ge,
  oe
} from "./chunk-PNSNEWSP.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-J6FIECQJ.js";
import "./chunk-WLPGGM5I.js";
import "./chunk-VJCO7ZMT.js";
import {
  G
} from "./chunk-4L74KNVT.js";
import "./chunk-IO7CXLQO.js";
import "./chunk-QGNQJYZT.js";
import "./chunk-NMDBB7YG.js";
import "./chunk-K6KUHFK2.js";
import "./chunk-V44XD4F6.js";
import {
  n as n2
} from "./chunk-G6RPDJXV.js";
import {
  n
} from "./chunk-B22UQGUL.js";
import "./chunk-IRGX4DBZ.js";
import "./chunk-3PLUKWC5.js";
import "./chunk-AHEHRQEH.js";
import "./chunk-DVV55TEN.js";
import "./chunk-5EVMO3EL.js";
import "./chunk-3PXGXX6C.js";
import "./chunk-TE5PBIJT.js";
import "./chunk-X7OFK26H.js";
import "./chunk-PLGRXYAP.js";
import "./chunk-ZAH4NE7U.js";
import "./chunk-U4R7X4DP.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-UIKAL3FG.js";
import "./chunk-RWJPPLGT.js";
import "./chunk-F2LKHJX3.js";
import "./chunk-WEURYJAU.js";
import "./chunk-UYITUXWW.js";
import "./chunk-WDHJMFLW.js";
import "./chunk-V5XS2I7U.js";
import "./chunk-KYLXXMSB.js";
import "./chunk-6KBSN3RJ.js";
import "./chunk-7F3DNNUI.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLL3NYBQ.js";
import "./chunk-M756WYLA.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-FMYEMU2E.js";
import "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-GW4HD2NW.js";
import "./chunk-OEXL7OFS.js";
import "./chunk-F6AS75CS.js";
import "./chunk-PM52Q5K4.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-GF53CKBB.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
import {
  l
} from "./chunk-N7K4YSHO.js";
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
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-Y2SQYXOZ.js";
import "./chunk-CJBFJRGB.js";
import "./chunk-6XF5AJ25.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import "./chunk-XCGM4D6U.js";
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
//# sourceMappingURL=featuresetgeom-JA54M4Q4.js.map
