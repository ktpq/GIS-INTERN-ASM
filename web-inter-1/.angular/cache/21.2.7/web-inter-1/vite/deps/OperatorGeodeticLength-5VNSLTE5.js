import {
  w
} from "./chunk-N2PGSHNJ.js";
import {
  Al,
  Cc,
  Dc,
  Hu,
  Tl,
  Zl,
  o,
  qh
} from "./chunk-TTDA3WA3.js";
import {
  $s,
  Qs
} from "./chunk-L3K266YP.js";
import "./chunk-MSO245PE.js";
import "./chunk-QJ53E7LJ.js";
import "./chunk-HDXHQWQ2.js";
import {
  P,
  a,
  f,
  j,
  x2 as x
} from "./chunk-VIRT6ASK.js";
import "./chunk-TPDTUQ5K.js";
import "./chunk-QLDYCH6C.js";
import {
  __addDisposableResource,
  __disposeResources
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/OperatorGeodeticLength.js
var S = class {
  getOperatorType() {
    return 10311;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, r) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, t, f2, y) {
    if (4 === f2) return new w().execute(e, t, y);
    if (0 === t.getCoordinateSystemType() && P(""), j(e), e.isEmpty() || e.getDimension() < 1) return 0;
    const S2 = t.getGCS(), d = Hu();
    S2.querySpheroidData(d);
    const P2 = d.majorSemiAxis, E = d.e2, G = S2.getUnit().getUnitToBaseFactor();
    let j2;
    const v = e.getGeometryType();
    if (v === a.enumPolygon ? j2 = e.getBoundary() : v === a.enumEnvelope ? j2 = $s(e) : f(v) ? (j2 = new Qs({ vd: e.getDescription() }), j2.addSegment(e, true)) : j2 = e, j2.hasNonLinearSegments()) {
      j2 = new o().execute(j2, 0, t.getTolerance(0), 0, y);
    }
    if (S2 !== t) {
      const r = t.getSRToGCSTransform();
      if (t.isPannable()) {
        j2 = Al(j2, t), v === a.enumPolyline && j2 === e && (j2 = e.clone());
        const r2 = new x();
        t.getPannableExtent().queryIntervalX(r2);
        for (let e2 = 0, t2 = j2.getPointCount(); e2 < t2; e2++) {
          const t3 = j2.getXY(e2);
          t3.x = Tl(t3.x, r2), j2.setXY(e2, t3);
        }
      }
      const n = j2.createInstance();
      j2 = Zl(r, j2, n, y) ? n : new qh().execute(j2, r, y);
    }
    return this._ExecuteMultiPathGeodeticLength(j2, f2, P2, E, G);
  }
  _ExecuteMultiPathGeodeticLength(r, n, o2, a2, s) {
    const i = { stack: [], error: void 0, hasError: false };
    try {
      const t = __addDisposableResource(i, new Cc(), false);
      let c = 0;
      const m = r.querySegmentIterator();
      for (; m.nextPath(); ) for (; m.hasNextSegment(); ) {
        const e = m.nextSegment(), r2 = e.getStartXY(), i2 = e.getEndXY();
        r2.scale(s), i2.scale(s), Dc.geodeticDistance(o2, a2, r2.x, r2.y, i2.x, i2.y, t, null, null, n), c += t.val;
      }
      return c;
    } catch (c) {
      i.error = c, i.hasError = true;
    } finally {
      __disposeResources(i);
    }
  }
};
export {
  S as OperatorGeodeticLength
};
//# sourceMappingURL=OperatorGeodeticLength-5VNSLTE5.js.map
