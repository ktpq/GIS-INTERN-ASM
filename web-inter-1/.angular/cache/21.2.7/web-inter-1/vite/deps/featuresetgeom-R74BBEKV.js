import {
  a as a2
} from "./chunk-2CBKRI7T.js";
import {
  r,
  s,
  w3 as w
} from "./chunk-URAHGYU3.js";
import {
  t
} from "./chunk-ML7XCMTY.js";
import {
  a
} from "./chunk-CWBPOIGY.js";
import "./chunk-OPBWY7J4.js";
import "./chunk-5TMZXAAW.js";
import "./chunk-D73LDRDL.js";
import {
  B,
  Je,
  U,
  ge,
  oe
} from "./chunk-5MXYX4KI.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-NAH26QEI.js";
import "./chunk-XKXL36MC.js";
import {
  G
} from "./chunk-PT3QCIYI.js";
import "./chunk-64GACA3E.js";
import "./chunk-G2AJQACY.js";
import "./chunk-55ANZSLC.js";
import "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
import "./chunk-K6KUHFK2.js";
import "./chunk-2KAJZEPA.js";
import {
  n as n2
} from "./chunk-B4FJHFAW.js";
import {
  n
} from "./chunk-G3XGV2JB.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-U54DMEX7.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-JXLQUNSA.js";
import "./chunk-XWU2ZKWF.js";
import "./chunk-QKDZ43GD.js";
import "./chunk-UKSB452I.js";
import "./chunk-7PBHIAQH.js";
import "./chunk-FAG2TZ7O.js";
import "./chunk-MDVA2DB6.js";
import "./chunk-3Y2ZRVZS.js";
import "./chunk-VWG26L3C.js";
import "./chunk-6PVP32FV.js";
import "./chunk-TKPO3PT4.js";
import "./chunk-7LBYAQE7.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-W34UF4X5.js";
import "./chunk-K5YEU7YE.js";
import "./chunk-DWF2MCID.js";
import "./chunk-E3TCHN5O.js";
import "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-LFCO57WV.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import {
  l
} from "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MZFPTE7Q.js";
import "./chunk-U3RH7VGM.js";
import "./chunk-XNNZ2U24.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-ZC4RH2DW.js";
import "./chunk-ON6HJSAD.js";
import "./chunk-SWZYRYDU.js";
import "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-2FYYEMZJ.js";
import "./chunk-HIVGPE4F.js";
import "./chunk-XETCTTJV.js";
import "./chunk-CPNUUDDA.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import "./chunk-YVKQ6DO2.js";
import "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-6CYBR6FP.js";
import "./chunk-AE7PFPPS.js";
import "./chunk-LD7VLL5E.js";
import "./chunk-TUJXLUEV.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
//# sourceMappingURL=featuresetgeom-R74BBEKV.js.map
