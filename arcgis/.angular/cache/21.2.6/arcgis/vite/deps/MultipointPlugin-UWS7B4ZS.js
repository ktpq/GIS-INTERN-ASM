import {
  n
} from "./chunk-6OPXXNEA.js";
import "./chunk-BEEP3FKE.js";
import {
  c as c2
} from "./chunk-AEEIJGHJ.js";
import "./chunk-BMYA7NZP.js";
import "./chunk-V7SQTPST.js";
import "./chunk-NNANCYKT.js";
import "./chunk-ZEMVKL33.js";
import "./chunk-ZHB32LSG.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-SVWIACQP.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-ZILR7JK7.js";
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
  a3 as a,
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
//# sourceMappingURL=MultipointPlugin-UWS7B4ZS.js.map
