import {
  n
} from "./chunk-KBZ7E6F2.js";
import "./chunk-KI7SNQFW.js";
import {
  c as c2
} from "./chunk-WRETNREX.js";
import "./chunk-M44GXGOJ.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-URLT4X25.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-OYOKYTYR.js";
import "./chunk-ONXOVX4W.js";
import "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DK6LJVYU.js";
import "./chunk-U5RKVLEL.js";
import "./chunk-RVKOLALF.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
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
//# sourceMappingURL=MultipointPlugin-35OCVO4P.js.map
