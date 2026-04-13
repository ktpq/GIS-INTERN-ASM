import {
  n
} from "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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

// node_modules/@arcgis/core/rest/networks/unitIdentifiers/support/ResetParameters.js
var c2;
var i = c2 = class extends n {
  static from(o) {
    return m(c2, o);
  }
  constructor(o) {
    super(o), this.objects = null, this.gdbVersion = null, this.sessionId = null;
  }
  writeObjects(o, r2) {
    const t = /* @__PURE__ */ new Map();
    o.forEach((o2) => {
      const { sourceId: r3, globalId: e } = o2, s = t.get(r3);
      s ? s.push(e) : t.set(r3, [e]);
    }), r2.objects = Array.from(t, ([o2, r3]) => ({ sourceId: o2, globalIds: r3 }));
  }
};
__decorate([a({ json: { type: [Object], write: true } })], i.prototype, "objects", void 0), __decorate([r("objects")], i.prototype, "writeObjects", null), __decorate([a({ type: String, json: { write: true } })], i.prototype, "gdbVersion", void 0), __decorate([a({ type: String, json: { write: true } })], i.prototype, "sessionId", void 0), i = c2 = __decorate([c("esri.rest.networks.unitIdentifiers.support.ResetParameters")], i);
var n2 = i;
export {
  n2 as default
};
//# sourceMappingURL=ResetParameters-MJFOG4NB.js.map
