import {
  V
} from "./chunk-DQZPY62H.js";
import "./chunk-SCV6BBEB.js";
import "./chunk-FT6EGYS5.js";
import "./chunk-LFMU2JMK.js";
import "./chunk-DCS7BAOQ.js";
import "./chunk-YP7OFZOK.js";
import "./chunk-WQBN2KKE.js";
import "./chunk-EASH2KMP.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-DJSZRQUX.js";
import "./chunk-47CFN4JI.js";
import {
  F
} from "./chunk-SGNC5H35.js";
import "./chunk-7H3HYUBR.js";
import "./chunk-I7B74Y7B.js";
import "./chunk-DA25W2D5.js";
import "./chunk-7YICSANW.js";
import "./chunk-SQXGMFK2.js";
import "./chunk-UG7GC5ST.js";
import "./chunk-X4YO53U7.js";
import "./chunk-AP2NAWWU.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-P476LLZ4.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import {
  v
} from "./chunk-WSE2ZKFY.js";
import "./chunk-SWZYRYDU.js";
import {
  f
} from "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
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
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  c
} from "./chunk-7ELXYOAW.js";
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
//# sourceMappingURL=SegmentLabels2D-NPRYBLNF.js.map
