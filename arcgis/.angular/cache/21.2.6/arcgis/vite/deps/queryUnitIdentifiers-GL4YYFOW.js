import {
  f as f2,
  s,
  u
} from "./chunk-TUNGPGHU.js";
import "./chunk-IPJXMYTM.js";
import {
  f2 as f
} from "./chunk-2OF3JE3F.js";
import {
  n
} from "./chunk-5EUDKAG7.js";
import "./chunk-FJ25BHAS.js";
import {
  a3 as a,
  c,
  o3 as o
} from "./chunk-LV7AMIAU.js";
import "./chunk-O4A47ZEM.js";
import "./chunk-O3PP4I47.js";
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
//# sourceMappingURL=queryUnitIdentifiers-GL4YYFOW.js.map
