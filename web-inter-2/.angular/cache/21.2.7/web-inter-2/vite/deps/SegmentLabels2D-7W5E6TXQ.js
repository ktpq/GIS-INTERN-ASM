import {
  V
} from "./chunk-LKKX2GEH.js";
import "./chunk-LAX4TFUD.js";
import "./chunk-ES4OWHGF.js";
import "./chunk-46ULTMCK.js";
import "./chunk-LNYVQOBZ.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-TZ37OLCQ.js";
import "./chunk-H7U52OP3.js";
import "./chunk-DLNYS76H.js";
import {
  F
} from "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-7H3HYUBR.js";
import "./chunk-NMDBB7YG.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-TMWNM5ZK.js";
import "./chunk-I4DPELMA.js";
import "./chunk-I7B74Y7B.js";
import "./chunk-IRGX4DBZ.js";
import "./chunk-3PLUKWC5.js";
import "./chunk-AHEHRQEH.js";
import "./chunk-MXBCSABZ.js";
import "./chunk-KYLXXMSB.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-FMYEMU2E.js";
import "./chunk-L5CCICKP.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-62JQGYSV.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-GF53CKBB.js";
import "./chunk-N7K4YSHO.js";
import "./chunk-FFRDPIUM.js";
import "./chunk-LKZBFHT4.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-FVU6XCMJ.js";
import "./chunk-T5K7SRI5.js";
import "./chunk-X2SNEXCL.js";
import {
  v
} from "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-6XF5AJ25.js";
import {
  f
} from "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  c
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
//# sourceMappingURL=SegmentLabels2D-7W5E6TXQ.js.map
