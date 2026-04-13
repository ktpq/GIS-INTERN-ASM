import {
  V
} from "./chunk-7BPYV7LA.js";
import "./chunk-FCXKHKKU.js";
import "./chunk-46RYNYCK.js";
import "./chunk-VWW4CN57.js";
import "./chunk-KWGDYBY5.js";
import "./chunk-DPFYRE7L.js";
import "./chunk-TZ37OLCQ.js";
import "./chunk-OU7IBCXM.js";
import "./chunk-HXLK47WT.js";
import "./chunk-LBXDB7YQ.js";
import "./chunk-MXBCSABZ.js";
import {
  F
} from "./chunk-SGNC5H35.js";
import "./chunk-47CFN4JI.js";
import "./chunk-TVLXQ42J.js";
import "./chunk-OR24MDO6.js";
import "./chunk-FLG5AFOF.js";
import "./chunk-OKJ7MV5V.js";
import "./chunk-7H3HYUBR.js";
import "./chunk-I7B74Y7B.js";
import "./chunk-44DFY7I4.js";
import "./chunk-VBPD3MAX.js";
import "./chunk-MVS4RVUO.js";
import "./chunk-LF4XI7IU.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-GALDA7CN.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-LOVQ4LFC.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import {
  v
} from "./chunk-URLT4X25.js";
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
import "./chunk-EKLJIMB3.js";
import {
  f
} from "./chunk-UXWT3ISO.js";
import "./chunk-AGHTZMGO.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  c
} from "./chunk-JM4CKTH2.js";
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
//# sourceMappingURL=SegmentLabels2D-3ANAJLDV.js.map
