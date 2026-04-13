import {
  V
} from "./chunk-HWTYAFQP.js";
import "./chunk-EZIO3NNQ.js";
import "./chunk-2WTYKJMP.js";
import "./chunk-GMRKHJJA.js";
import "./chunk-MWXSARGP.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-YUTAX525.js";
import "./chunk-WNCWSSLK.js";
import {
  F
} from "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-NRIYMVEQ.js";
import "./chunk-OWMNTHDK.js";
import "./chunk-JSUZNUEF.js";
import "./chunk-N7DF7CMI.js";
import "./chunk-2UK7CYH6.js";
import "./chunk-OCXIU36X.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-4NYLPGO2.js";
import "./chunk-NASQUHY4.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-IQ4J5AR2.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-IDWN24M7.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import {
  v
} from "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-VSDCDWT5.js";
import "./chunk-TT3WF5RA.js";
import {
  f
} from "./chunk-QWNB5I7T.js";
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
import {
  c
} from "./chunk-GUGGSMY4.js";
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
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/interactive/SegmentLabels2D.js
var i = class extends V {
  getCameraOrExtent({ view: e }) {
    return e.extent;
  }
  toScreenPointArray({ view: e, editGeometryOperations: r }, o, s = f()) {
    const { coordinateHelper: n } = r.data, i2 = e.toScreen(n.arrayToPoint(o));
    return i2 && (s[0] = i2.x, s[1] = i2.y), s;
  }
  getRing(e, t, r, n, i2) {
    const a = [];
    for (const o of t.parts[i2].iterateVertices()) o.leftSegment ? a.push(o.leftSegment.toCurveOrCoordinate()) : a.push(o.pos);
    if (0 === i2 && null != r && a.push(n.vectorToArray(r)), a.length < 2) return a;
    const c2 = a[0], m = a.at(-1), p = n.toXYZ(n.arrayToVector(v(c2))), l = n.toXYZ(n.arrayToVector(v(m)));
    return "polygon" === e.type && a.length > 2 && !F(p, l) && a.push(c2), a;
  }
};
i = __decorate([c("esri.views.2d.interactive.SegmentLabels2D")], i);
export {
  i as SegmentLabels2D
};
//# sourceMappingURL=SegmentLabels2D-PCD2WCLO.js.map
