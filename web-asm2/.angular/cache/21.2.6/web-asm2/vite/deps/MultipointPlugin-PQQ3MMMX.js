import {
  n
} from "./chunk-E62DEL36.js";
import "./chunk-GHG4ULKJ.js";
import "./chunk-CD6IOUFB.js";
import {
  c as c2
} from "./chunk-OOSRFM7N.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
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
  a3 as a,
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
//# sourceMappingURL=MultipointPlugin-PQQ3MMMX.js.map
