import {
  f as f2,
  s,
  u
} from "./chunk-KGOQYI3F.js";
import "./chunk-GF53CKBB.js";
import {
  f2 as f
} from "./chunk-ZRWCUWWK.js";
import {
  n
} from "./chunk-FDQUQGWK.js";
import "./chunk-5OGMOTJP.js";
import {
  a3 as a,
  c,
  o4 as o
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/networks/unitIdentifiers/support/UnitQueryResult.js
var n2 = class extends n {
  constructor(r) {
    super(r), this.container = null, this.ranges = null;
  }
  readContainer(r, t) {
    return { sourceId: t.sourceId, globalId: t.globalId };
  }
  readRanges(r, t) {
    return [...t.gaps.map((r2) => ({ firstUnit: r2.start, lastUnit: r2.end, isGap: true })), ...t.unitIdentifiers.map((r2) => ({ firstUnit: r2.firstUnit, lastUnit: r2.numUnits, isGap: false, content: { sourceId: r2.sourceId, globalId: r2.globalId } }))];
  }
};
__decorate([a({ type: Object })], n2.prototype, "container", void 0), __decorate([o("container", ["sourceId", "globalId"])], n2.prototype, "readContainer", null), __decorate([a({ type: [Object] })], n2.prototype, "ranges", void 0), __decorate([o("ranges", ["gaps", "unitIdentifiers"])], n2.prototype, "readRanges", null), n2 = __decorate([c("esri.rest.networks.unitIdentifiers.support.UnitQueryResult")], n2);

// node_modules/@arcgis/core/rest/networks/unitIdentifiers/queryUnitIdentifiers.js
async function i(i2, n3, p) {
  const u2 = f2(i2), m = n3.toJSON();
  n3.objects && (m.objects = JSON.stringify(m.objects));
  const a2 = __spreadProps(__spreadValues({}, m), { f: "json" }), c2 = u(__spreadValues(__spreadValues({}, u2.query), a2)), f3 = s(c2, __spreadProps(__spreadValues({}, p), { method: "post", authMode: "no-prompt" })), j = `${u2.path}/unitIdentifiers/query`, { data: y } = await f(j, f3);
  return y.objects.map((t) => n2.fromJSON(t));
}
export {
  i as queryUnitIdentifiers
};
//# sourceMappingURL=queryUnitIdentifiers-D75CCLRT.js.map
