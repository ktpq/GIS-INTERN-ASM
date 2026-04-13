import {
  n
} from "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c,
  m,
  r4 as r
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
//# sourceMappingURL=ResetParameters-LM6F2LID.js.map
