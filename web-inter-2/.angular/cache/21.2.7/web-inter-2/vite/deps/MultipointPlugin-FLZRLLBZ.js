import {
  n
} from "./chunk-WSJNDDRJ.js";
import "./chunk-ZWIQBT42.js";
import {
  c as c2
} from "./chunk-U4R7X4DP.js";
import "./chunk-L5CCICKP.js";
import "./chunk-7V6QSUHG.js";
import "./chunk-76B4KLE5.js";
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
import "./chunk-URLT4X25.js";
import "./chunk-RU6HGVJG.js";
import "./chunk-JC2AZ2NN.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-ZTEDLWCB.js";
import "./chunk-KGE7V7CJ.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
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
//# sourceMappingURL=MultipointPlugin-FLZRLLBZ.js.map
