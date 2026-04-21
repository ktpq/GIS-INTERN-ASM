import {
  n
} from "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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
//# sourceMappingURL=ResetParameters-EZKJNKHL.js.map
