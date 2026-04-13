import {
  _
} from "./chunk-MCN6PQSA.js";
import {
  e
} from "./chunk-6I4LGQ74.js";
import "./chunk-PDKX3TBX.js";
import "./chunk-65PBNPQY.js";
import "./chunk-7PBMX777.js";
import "./chunk-DWBAGWXH.js";
import "./chunk-XWIC4KUB.js";
import "./chunk-JAXZMTZX.js";
import "./chunk-FCVEMPGG.js";
import "./chunk-2RVDN6RH.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-NSJQHJ2B.js";
import "./chunk-T6F4SXOT.js";
import {
  b
} from "./chunk-XFHDI4IR.js";
import "./chunk-4QSSUPBC.js";
import "./chunk-FHDG7GP6.js";
import "./chunk-QLC3W7PG.js";
import "./chunk-KO4S3BRZ.js";
import "./chunk-PMKUQ7UU.js";
import "./chunk-RTWZV6QR.js";
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
import "./chunk-47Z5HJ52.js";
import "./chunk-RMATTWBS.js";
import "./chunk-IPJXMYTM.js";
import "./chunk-ZILR7JK7.js";
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
  a3 as a,
  c
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
import "./chunk-55ZAYF5P.js";
import "./chunk-FMPS52FS.js";
import "./chunk-MSRN4ADD.js";
import "./chunk-XUZBRFKA.js";
import {
  F
} from "./chunk-XNNRUT34.js";
import "./chunk-AEGIA5BY.js";
import "./chunk-E73BLMZG.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-POW25PFR.js";
import {
  r3 as r
} from "./chunk-IDI4VM7T.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/UnknownLayer.js
var l = class extends _(e(b)) {
  constructor(r2) {
    super(r2), this.resourceInfo = null, this.type = "unknown";
  }
  initialize() {
    this.addResolvingPromise(new Promise((r2, o) => {
      F(() => {
        const r3 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let t = "Unknown layer type";
        r3 && (t += " " + r3), o(new r("layer:unknown-layer-type", t, { layerType: r3 }));
      });
    }));
  }
  read(r2, e2) {
    super.read({ resourceInfo: r2 }, e2);
  }
  write(r2, e2) {
    return null;
  }
};
__decorate([a({ readOnly: true })], l.prototype, "resourceInfo", void 0), __decorate([a({ type: ["show", "hide"] })], l.prototype, "listMode", void 0), __decorate([a({ json: { read: false }, readOnly: true, value: "unknown" })], l.prototype, "type", void 0), l = __decorate([c("esri.layers.UnknownLayer")], l);
var a2 = l;
export {
  a2 as default
};
//# sourceMappingURL=UnknownLayer-ZJQ4IKZY.js.map
