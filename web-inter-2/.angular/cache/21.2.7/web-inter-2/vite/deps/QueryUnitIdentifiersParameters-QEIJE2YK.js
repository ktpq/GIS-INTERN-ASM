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

// node_modules/@arcgis/core/rest/networks/unitIdentifiers/support/QueryUnitIdentifiersParameters.js
var p;
var n2 = p = class extends n {
  static from(t) {
    return m(p, t);
  }
  constructor(t) {
    super(t), this.objects = null, this.moment = null, this.gdbVersion = null, this.sessionId = null;
  }
  writeObjects(t, e) {
    const o = /* @__PURE__ */ new Map();
    t.forEach((t2) => {
      const { sourceId: e2, globalId: r2 } = t2, s = o.get(e2);
      s ? s.push(r2) : o.set(e2, [r2]);
    }), e.objects = Array.from(o, ([t2, e2]) => ({ sourceId: t2, globalIds: e2 }));
  }
};
__decorate([a({ json: { type: [Object], write: true } })], n2.prototype, "objects", void 0), __decorate([r("objects")], n2.prototype, "writeObjects", null), __decorate([a({ type: Date, json: { type: Number, write: { writer: (t, e) => {
  e.moment = t ? t.getTime() : null;
} } } })], n2.prototype, "moment", void 0), __decorate([a({ type: String, json: { write: true } })], n2.prototype, "gdbVersion", void 0), __decorate([a({ type: String, json: { write: true } })], n2.prototype, "sessionId", void 0), n2 = p = __decorate([c("esri.rest.networks.unitIdentifiers.support.QueryUnitIdentifiersParameters")], n2);
var c2 = n2;
export {
  c2 as default
};
//# sourceMappingURL=QueryUnitIdentifiersParameters-QEIJE2YK.js.map
