import {
  a as a2
} from "./chunk-HYCVHVFW.js";
import {
  r,
  s,
  w3 as w
} from "./chunk-77HLGP2C.js";
import {
  t
} from "./chunk-GNDMWO24.js";
import {
  a
} from "./chunk-TBUQHNJE.js";
import "./chunk-NOYK25RO.js";
import "./chunk-QPRTLERD.js";
import "./chunk-D2UKWTS5.js";
import {
  B,
  Je,
  U,
  ge,
  oe
} from "./chunk-2KPSUWRN.js";
import "./chunk-5BCI2JU3.js";
import "./chunk-6FHQMPHK.js";
import "./chunk-QCEMOJ33.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-2V4Q54HN.js";
import {
  G
} from "./chunk-7RXTTEFJ.js";
import "./chunk-JSUZNUEF.js";
import "./chunk-N7DF7CMI.js";
import "./chunk-2UK7CYH6.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-OCXIU36X.js";
import "./chunk-3QK2DR4J.js";
import "./chunk-2IAEDPBU.js";
import "./chunk-Y4ME44SE.js";
import "./chunk-L244Y4DX.js";
import "./chunk-JNCFJPS4.js";
import {
  n as n2
} from "./chunk-O6ZJLPWL.js";
import {
  n
} from "./chunk-6YL5AAWZ.js";
import "./chunk-TV7JW3IK.js";
import "./chunk-SPTOZROU.js";
import "./chunk-PMZYW4N2.js";
import "./chunk-ZN24EUTK.js";
import "./chunk-R5ZARNWA.js";
import "./chunk-Q25A4AK6.js";
import "./chunk-GLXJP2Y5.js";
import "./chunk-6X3RLJIF.js";
import "./chunk-GOPT3PO2.js";
import "./chunk-ZPTC4YZQ.js";
import "./chunk-LKWKFYCL.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-X7ZXABIR.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-WUSMTFBU.js";
import "./chunk-RJMYNJ36.js";
import "./chunk-TPJLJ32L.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-OOSRFM7N.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import {
  l
} from "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-J27BSZXM.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-XKHV7U7B.js";
import "./chunk-M2KBLK7K.js";
import "./chunk-TT3WF5RA.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import "./chunk-2DNVIDFH.js";
import "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=featuresetgeom-UCFLIOPM.js.map
