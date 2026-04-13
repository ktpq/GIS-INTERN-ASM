import {
  V
} from "./chunk-YE3XANBG.js";
import "./chunk-V54VR3EM.js";
import "./chunk-GGSDTHCJ.js";
import "./chunk-6ZXIHJYY.js";
import "./chunk-X6WTKQKW.js";
import "./chunk-54KJR4YB.js";
import "./chunk-MXAZZ5UX.js";
import "./chunk-7FU7UPOQ.js";
import "./chunk-ULRT2MRD.js";
import {
  F
} from "./chunk-YM62CGUL.js";
import "./chunk-AHPCQT3Y.js";
import "./chunk-LA4TOQGW.js";
import "./chunk-QEE2QYIE.js";
import "./chunk-2RVDN6RH.js";
import "./chunk-IXOUFXRS.js";
import "./chunk-XA4KTSOB.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-V6655I3I.js";
import "./chunk-S3BACLSK.js";
import "./chunk-NRIYMVEQ.js";
import "./chunk-OWMNTHDK.js";
import "./chunk-JC7PAMG4.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import {
  v
} from "./chunk-QK7JX7UE.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import {
  f
} from "./chunk-QWNB5I7T.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-DESITEXU.js";
import "./chunk-D7RUZBWM.js";
import "./chunk-OFY6GFSK.js";
import "./chunk-46YDVYTJ.js";
import "./chunk-Z6H2XBDN.js";
import "./chunk-5AMLDUSG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-OTB5O3ZS.js";
import "./chunk-ERIUCT52.js";
import "./chunk-2ZL6ZCDF.js";
import "./chunk-4HQQF57Z.js";
import "./chunk-66OU277M.js";
import "./chunk-EWPZDMTE.js";
import "./chunk-TIZ3VJFS.js";
import "./chunk-6CUKMFJV.js";
import "./chunk-LHBO6K5Y.js";
import "./chunk-2OF3JE3F.js";
import "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import "./chunk-IDI4VM7T.js";
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
//# sourceMappingURL=SegmentLabels2D-6ALXEJQO.js.map
