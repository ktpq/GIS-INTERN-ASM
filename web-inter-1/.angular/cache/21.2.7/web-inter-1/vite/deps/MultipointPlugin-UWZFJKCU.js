import {
  n
} from "./chunk-O3OH5LJH.js";
import "./chunk-TXF5FFQH.js";
import {
  c as c2
} from "./chunk-7PBHIAQH.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-253Z6EVN.js";
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
  a3 as a,
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

// node_modules/@arcgis/core/views/draw/plugins/MultipointPlugin.js
var s = class extends n {
  get helpMessageKey() {
    return "multipoint";
  }
  start(e) {
    super.start(e), e.session.appendOrReplacePart(null, []);
  }
  beforeAttachPlugin(e) {
    return { useStandaloneSession: true, geometryType: "point" };
  }
  detachPlugin(e, t) {
    if ("complete" !== t) return;
    const o = this._context?.getSession(e), n2 = this._session, s2 = o?.generatePreviewGeometry({ includeAutomaticConnection: false, geometryType: "point" });
    s2 && c2(s2) && n2 && (n2.appendOrReplacePoint(null, s2), n2.appendOrReplacePart(null, []), n2.automaticRestart = false, n2.groupGeometryChanges()), e.configuration && this._context?.requestBeginDownstreamPlugin(e.configuration);
  }
};
__decorate([a()], s.prototype, "helpMessageKey", null), s = __decorate([c("esri.views.draw.plugins.MultipointPlugin")], s);
export {
  s as MultipointPlugin
};
//# sourceMappingURL=MultipointPlugin-UWZFJKCU.js.map
