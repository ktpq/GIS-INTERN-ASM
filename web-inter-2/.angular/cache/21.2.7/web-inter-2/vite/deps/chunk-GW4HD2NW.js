import {
  d,
  n
} from "./chunk-CJBFJRGB.js";
import {
  g
} from "./chunk-6XF5AJ25.js";
import {
  a3 as a2,
  c,
  r3 as r
} from "./chunk-XCGM4D6U.js";
import {
  o
} from "./chunk-TIEYANBR.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/symbols/FillSymbol.js
var i = class extends n {
  constructor(e) {
    super(e), this.outline = null, this.type = null;
  }
  hash() {
    return `${this.type}.${this.outline?.hash()}`;
  }
};
__decorate([a2({ types: { key: "type", base: null, defaultKeyValue: "simple-line", typeMap: { "simple-line": d } }, json: { default: null, write: true } })], i.prototype, "outline", void 0), __decorate([a2({ type: ["simple-fill", "picture-fill"], readOnly: true })], i.prototype, "type", void 0), i = __decorate([c("esri.symbols.FillSymbol")], i);

// node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var p;
var c2 = new o({ esriSFSSolid: "solid", esriSFSNull: "none", esriSFSHorizontal: "horizontal", esriSFSVertical: "vertical", esriSFSForwardDiagonal: "forward-diagonal", esriSFSBackwardDiagonal: "backward-diagonal", esriSFSCross: "cross", esriSFSDiagonalCross: "diagonal-cross" });
var m = p = class extends i {
  constructor(...o2) {
    super(...o2), this.color = new g([0, 0, 0, 0.25]), this.outline = new d(), this.type = "simple-fill", this.style = "solid";
  }
  normalizeCtorArgs(o2, r2, e) {
    if (o2 && "string" != typeof o2) return o2;
    const s = {};
    return o2 && (s.style = o2), r2 && (s.outline = r2), e && (s.color = e), s;
  }
  clone() {
    return new p({ color: a(this.color), outline: this.outline && this.outline.clone(), style: this.style });
  }
  hash() {
    return `${super.hash()}${this.style}.${this.color && this.color.hash()}`;
  }
};
__decorate([a2({ type: g })], m.prototype, "color", void 0), __decorate([a2()], m.prototype, "outline", void 0), __decorate([r({ esriSFS: "simple-fill" }, { readOnly: true })], m.prototype, "type", void 0), __decorate([a2({ type: c2.apiValues, json: { read: c2.read, write: c2.write } })], m.prototype, "style", void 0), m = p = __decorate([c("esri.symbols.SimpleFillSymbol")], m);

export {
  i,
  m
};
//# sourceMappingURL=chunk-GW4HD2NW.js.map
