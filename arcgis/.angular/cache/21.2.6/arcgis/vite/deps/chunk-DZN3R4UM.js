import {
  c as c2,
  c2 as c3,
  m as m5
} from "./chunk-OD52MENG.js";
import {
  e,
  n as n3
} from "./chunk-XK2FSQWW.js";
import {
  n as n7,
  r as r3
} from "./chunk-AIECNX6R.js";
import {
  i as i3,
  l as l3,
  u as u3
} from "./chunk-ZPAQA4G3.js";
import {
  u as u2,
  y
} from "./chunk-WLCIR5JN.js";
import {
  m as m3,
  n as n4,
  p as p2
} from "./chunk-OFIL7BYT.js";
import {
  i as i2,
  m as m4
} from "./chunk-M3PLR22U.js";
import {
  l as l2
} from "./chunk-NSJQHJ2B.js";
import {
  v
} from "./chunk-DNCZTJNI.js";
import {
  u
} from "./chunk-QU4UZ7C2.js";
import {
  d,
  e as e3,
  n as n5,
  n2 as n6
} from "./chunk-HKOFZI3I.js";
import {
  g
} from "./chunk-V6655I3I.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import {
  M
} from "./chunk-RMATTWBS.js";
import {
  e as e2,
  o as o2
} from "./chunk-QWNB5I7T.js";
import {
  D as D2,
  K,
  Y,
  f,
  h,
  m as m2,
  p,
  st,
  tt
} from "./chunk-2OF3JE3F.js";
import {
  n as n2
} from "./chunk-5EUDKAG7.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  D,
  a3 as a2,
  c,
  m3 as m,
  o3 as o,
  r3 as r,
  r4 as r2,
  s4 as s2,
  t2 as t,
  x
} from "./chunk-LV7AMIAU.js";
import {
  i
} from "./chunk-O4A47ZEM.js";
import {
  s
} from "./chunk-POW25PFR.js";
import {
  a,
  l3 as l,
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/symbols/CIMSymbol.js
var n8;
var m6 = n8 = class extends n5 {
  constructor(r6) {
    super(r6), this.data = null, this.type = "cim";
  }
  readData(r6, t6) {
    return t6;
  }
  writeData(r6, t6) {
    Object.assign(t6, r6);
  }
  async collectRequiredFields(r6, t6) {
    if ("CIMSymbolReference" === this.data?.type) {
      const o7 = this.data.primitiveOverrides;
      if (o7) {
        const e8 = o7.map((o8) => {
          const e9 = o8.valueExpressionInfo;
          return e9 ? v(r6, t6, null, e9.expression) : null;
        });
        await Promise.all(e8);
      }
    }
  }
  clone() {
    return new n8({ data: a(this.data) });
  }
  hash() {
    return l(JSON.stringify(this.data)).toString();
  }
};
__decorate([a2({ json: { write: false } })], m6.prototype, "color", void 0), __decorate([a2({ json: { write: true } })], m6.prototype, "data", void 0), __decorate([o("data", ["symbol"])], m6.prototype, "readData", null), __decorate([r2("data", {})], m6.prototype, "writeData", null), __decorate([r({ CIMSymbolReference: "cim" }, { readOnly: true })], m6.prototype, "type", void 0), m6 = n8 = __decorate([c("esri.symbols.CIMSymbol")], m6);

// node_modules/@arcgis/core/symbols/Symbol3DLayer.js
var i4 = class extends n2 {
  constructor(e8) {
    super(e8), this.enabled = true, this.type = null, this.ignoreDrivers = false;
  }
  writeEnabled(e8, r6, t6) {
    e8 || (r6[t6] = e8);
  }
};
__decorate([a2({ type: Boolean, json: { read: { source: "enable" }, write: { target: "enable" } } })], i4.prototype, "enabled", void 0), __decorate([r2("enabled")], i4.prototype, "writeEnabled", null), __decorate([a2({ type: ["icon", "object", "line", "path", "fill", "water", "extrude", "text"], readOnly: true, json: { write: { isRequired: true } } })], i4.prototype, "type", void 0), i4 = __decorate([c("esri.symbols.Symbol3DLayer")], i4);

// node_modules/@arcgis/core/symbols/support/materialUtils.js
function s3(e8, o7) {
  const t6 = null != o7.transparency ? r3(o7.transparency) : 1, s7 = o7.color;
  return s7 && Array.isArray(s7) ? new g([s7[0] || 0, s7[1] || 0, s7[2] || 0, t6]) : null;
}
function c4(r6, e8) {
  e8.color = r6.toJSON().slice(0, 3);
  const o7 = n7(r6.a);
  0 !== o7 && (e8.transparency = o7);
}
function a3(e8) {
  return { type: g, nonNullable: e8?.nonNullable, json: { type: [D], default: null, read: { source: ["color", "transparency"], reader: s3 }, write: { target: { color: { type: [D], isRequired: e8?.colorRequiredOnWrite }, transparency: { type: D } }, writer: c4 } } };
}
var i5 = { type: Number, cast: o2, json: { write: true } };
function l4(r6) {
  return "emissive" === r6 ? 0 : 1;
}

// node_modules/@arcgis/core/symbols/edges/Edges3D.js
var c5 = class extends n2 {
  constructor(e8) {
    super(e8), this.color = new g([0, 0, 0, 1]);
  }
  get extensionLength() {
    return this._get("extensionLength") ?? 0;
  }
  set extensionLength(e8) {
    this._set("extensionLength", e8);
  }
  get size() {
    return this._get("size") ?? e2(1);
  }
  set size(e8) {
    this._set("size", e8);
  }
  clone() {
  }
  cloneProperties() {
    return { color: a(this.color), size: this.size, extensionLength: this.extensionLength };
  }
};
__decorate([a2({ type: ["solid", "sketch"], readOnly: true, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], c5.prototype, "type", void 0), __decorate([a2(a3({ colorRequiredOnWrite: true }))], c5.prototype, "color", void 0), __decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { overridePolicy: (e8) => ({ enabled: !!e8 }) } } }))], c5.prototype, "extensionLength", null), __decorate([a2(i5)], c5.prototype, "size", null), c5 = __decorate([c("esri.symbols.edges.Edges3D")], c5);
var g2 = c5;

// node_modules/@arcgis/core/symbols/edges/SketchEdges3D.js
var t2;
var c6 = t2 = class extends g2 {
  constructor(e8) {
    super(e8), this.type = "sketch";
  }
  clone() {
    return new t2(this.cloneProperties());
  }
};
__decorate([r({ sketch: "sketch" }, { readOnly: true })], c6.prototype, "type", void 0), c6 = t2 = __decorate([c("esri.symbols.edges.SketchEdges3D")], c6);
var p3 = c6;

// node_modules/@arcgis/core/symbols/edges/SolidEdges3D.js
var t3;
var i6 = t3 = class extends g2 {
  constructor(o7) {
    super(o7), this.type = "solid";
  }
  clone() {
    return new t3(this.cloneProperties());
  }
};
__decorate([r({ solid: "solid" }, { readOnly: true })], i6.prototype, "type", void 0), i6 = t3 = __decorate([c("esri.symbols.edges.SolidEdges3D")], i6);
var p4 = i6;

// node_modules/@arcgis/core/symbols/edges/utils.js
var t4 = { types: { key: "type", base: g2, typeMap: { solid: p4, sketch: p3 } }, json: { write: true } };

// node_modules/@arcgis/core/symbols/patterns/LinePattern3D.js
var p5 = class extends l2(n2) {
  constructor(r6) {
    super(r6);
  }
};
__decorate([a2({ type: ["style", "image"], readOnly: true, json: { read: true, write: { ignoreOrigin: true } } })], p5.prototype, "type", void 0), p5 = __decorate([c("esri.symbols.patterns.LinePattern3D")], p5);

// node_modules/@arcgis/core/symbols/patterns/lineStyles.js
var o3 = ["dash", "dash-dot", "dot", "long-dash", "long-dash-dot", "long-dash-dot-dot", "none", "short-dash", "short-dash-dot", "short-dash-dot-dot", "short-dot", "solid"];

// node_modules/@arcgis/core/symbols/patterns/LineStylePattern3D.js
var h2 = i()({ dash: "dash", "dash-dot": "dash-dot", "dash-dot-dot": "long-dash-dot-dot", dot: "dot", "long-dash": "long-dash", "long-dash-dot": "long-dash-dot", null: "none", "short-dash": "short-dash", "short-dash-dot": "short-dash-dot", "short-dash-dot-dot": "short-dash-dot-dot", "short-dot": "short-dot", solid: "solid" });
var i7 = class extends p5 {
  constructor(o7) {
    super(o7), this.type = "style", this.style = "solid";
  }
};
__decorate([a2({ type: ["style"], json: { write: { isRequired: true } } })], i7.prototype, "type", void 0), __decorate([r(h2), a2({ type: o3, json: { write: { isRequired: true } } })], i7.prototype, "style", void 0), i7 = __decorate([c("esri.symbols.patterns.LineStylePattern3D")], i7);

// node_modules/@arcgis/core/symbols/patterns/Pattern3D.js
var p6 = class extends l2(n2) {
  constructor() {
    super(...arguments), this.type = "style";
  }
};
__decorate([a2({ type: ["style"], readOnly: true, json: { read: true, write: { ignoreOrigin: true } } })], p6.prototype, "type", void 0), p6 = __decorate([c("esri.symbols.patterns.Pattern3D")], p6);

// node_modules/@arcgis/core/symbols/patterns/styles.js
var o4 = ["backward-diagonal", "cross", "diagonal-cross", "forward-diagonal", "horizontal", "none", "solid", "vertical"];

// node_modules/@arcgis/core/symbols/patterns/StylePattern3D.js
var i8 = class extends p6 {
  constructor(t6) {
    super(t6), this.type = "style", this.style = "solid";
  }
};
__decorate([a2({ type: ["style"], json: { write: { isRequired: true } } })], i8.prototype, "type", void 0), __decorate([a2({ type: o4, json: { read: true, write: { isRequired: true } } })], i8.prototype, "style", void 0), i8 = __decorate([c("esri.symbols.patterns.StylePattern3D")], i8);

// node_modules/@arcgis/core/symbols/patterns/utils.js
var s4 = { types: { key: "type", base: p6, typeMap: { style: i8 } }, json: { write: true } };
var o5 = { types: { key: "type", base: p5, typeMap: { style: i7 } }, json: { write: true } };

// node_modules/@arcgis/core/symbols/support/colors.js
var r4 = new g("white");
var n9 = new g([255, 255, 255, 0]);
function t5(o7) {
  return 0 === o7.r && 0 === o7.g && 0 === o7.b;
}

// node_modules/@arcgis/core/symbols/support/Symbol3DEmissive.js
var p7 = class extends l2(n2) {
  constructor(o7) {
    super(o7), this.strength = 1, this.source = "emissive";
  }
};
__decorate([a2({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: true } })], p7.prototype, "strength", void 0), __decorate([r({ emissive: "emissive", color: "color" }), a2({ nonNullable: true, json: { write: { enabled: true } } })], p7.prototype, "source", void 0), p7 = __decorate([c("esri.symbols.support.Symbol3DEmissive")], p7);

// node_modules/@arcgis/core/symbols/support/Symbol3DMaterial.js
var p8 = class extends l2(n2) {
  constructor(o7) {
    super(o7), this.color = null, this.emissive = null;
  }
};
__decorate([a2(a3())], p8.prototype, "color", void 0), __decorate([a2({ type: p7, json: { write: true } })], p8.prototype, "emissive", void 0), p8 = __decorate([c("esri.symbols.support.Symbol3DMaterial")], p8);

// node_modules/@arcgis/core/symbols/support/Symbol3DFillMaterial.js
var l5 = class extends p8 {
  constructor(o7) {
    super(o7), this.colorMixMode = null;
  }
};
__decorate([r({ multiply: "multiply", replace: "replace", tint: "tint" })], l5.prototype, "colorMixMode", void 0), l5 = __decorate([c("esri.symbols.support.Symbol3DFillMaterial")], l5);

// node_modules/@arcgis/core/symbols/support/Symbol3DOutline.js
var u4;
var c7 = u4 = class extends n2 {
  constructor(t6) {
    super(t6), this.color = new g([0, 0, 0, 1]), this.pattern = null, this.patternCap = "butt";
  }
  get size() {
    return this._get("size") ?? e2(1);
  }
  set size(t6) {
    this._set("size", t6);
  }
  clone() {
    const t6 = { color: null != this.color ? this.color.clone() : null, size: this.size, pattern: null != this.pattern ? this.pattern.clone() : null, patternCap: this.patternCap };
    return new u4(t6);
  }
};
__decorate([a2(a3({ colorRequiredOnWrite: true }))], c7.prototype, "color", void 0), __decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { isRequired: true } } }))], c7.prototype, "size", null), __decorate([a2(o5)], c7.prototype, "pattern", void 0), __decorate([a2({ type: u3, json: { default: "butt", write: { overridePolicy() {
  return { enabled: null != this.pattern };
} } } })], c7.prototype, "patternCap", void 0), c7 = u4 = __decorate([c("esri.symbols.support.Symbol3DOutline")], c7);
var m7 = c7;

// node_modules/@arcgis/core/symbols/FillSymbol3DLayer.js
var y2;
var d2 = class extends i4 {
  static {
    y2 = this;
  }
  constructor(t6) {
    super(t6), this.type = "fill", this.material = null, this.pattern = null, this.castShadows = true, this.outline = null, this.edges = null;
  }
  clone() {
    const t6 = { edges: null != this.edges ? this.edges.clone() : null, enabled: this.enabled, material: null != this.material ? this.material.clone() : null, pattern: null != this.pattern ? this.pattern.clone() : null, castShadows: this.castShadows, outline: null != this.outline ? this.outline.clone() : null };
    return new y2(t6);
  }
  static fromSimpleFillSymbol(t6) {
    const e8 = t6.outline && t6.outline.style && "solid" !== t6.outline.style ? new i7({ style: t6.outline.style }) : null, o7 = { size: t6.outline?.width ?? 0, color: (t6.outline?.color ?? r4).clone(), pattern: e8 };
    return e8 && t6.outline?.cap && (o7.patternCap = t6.outline.cap), new y2({ material: new l5({ color: (t6.color ?? n9).clone() }), pattern: t6.style && "solid" !== t6.style ? new i8({ style: t6.style }) : null, outline: o7 });
  }
};
__decorate([r({ Fill: "fill" }, { readOnly: true })], d2.prototype, "type", void 0), __decorate([a2({ type: l5, json: { write: true } })], d2.prototype, "material", void 0), __decorate([a2(s4)], d2.prototype, "pattern", void 0), __decorate([a2({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], d2.prototype, "castShadows", void 0), __decorate([a2({ type: m7, json: { write: true } })], d2.prototype, "outline", void 0), __decorate([a2(t4)], d2.prototype, "edges", void 0), d2 = y2 = __decorate([c("esri.symbols.FillSymbol3DLayer")], d2);

// node_modules/@arcgis/core/symbols/support/StyleOrigin.js
var l6;
var p9 = l6 = class extends b {
  constructor(t6) {
    super(t6), this.name = null, this.styleUrl = null, this.styleName = null, this.portal = null;
  }
  clone() {
    return new l6({ name: this.name, styleUrl: this.styleUrl, styleName: this.styleName, portal: this.portal });
  }
};
__decorate([a2({ type: String })], p9.prototype, "name", void 0), __decorate([a2({ type: String })], p9.prototype, "styleUrl", void 0), __decorate([a2({ type: String })], p9.prototype, "styleName", void 0), __decorate([a2({ type: M })], p9.prototype, "portal", void 0), p9 = l6 = __decorate([c("esri.symbols.support.StyleOrigin")], p9);

// node_modules/@arcgis/core/symbols/support/Thumbnail.js
var e4;
var p10 = e4 = class extends b {
  constructor() {
    super(...arguments), this.url = "";
  }
  clone() {
    return new e4({ url: this.url });
  }
};
__decorate([a2({ type: String })], p10.prototype, "url", void 0), p10 = e4 = __decorate([c("esri.symbols.support.Thumbnail")], p10);

// node_modules/@arcgis/core/symbols/ExtrudeSymbol3DLayer.js
var l7;
var p11 = class extends i4 {
  static {
    l7 = this;
  }
  constructor(e8) {
    super(e8), this.type = "extrude", this.size = 1, this.material = null, this.castShadows = true, this.edges = null;
  }
  clone() {
    return new l7({ edges: this.edges?.clone(), enabled: this.enabled, material: this.material?.clone(), castShadows: this.castShadows, size: this.size });
  }
};
__decorate([r({ Extrude: "extrude" }, { readOnly: true })], p11.prototype, "type", void 0), __decorate([a2({ type: Number, json: { write: { enabled: true, isRequired: true } }, nonNullable: true })], p11.prototype, "size", void 0), __decorate([a2({ type: p8, json: { write: true } })], p11.prototype, "material", void 0), __decorate([a2({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], p11.prototype, "castShadows", void 0), __decorate([a2(t4)], p11.prototype, "edges", void 0), p11 = l7 = __decorate([c("esri.symbols.ExtrudeSymbol3DLayer")], p11);

// node_modules/@arcgis/core/symbols/support/IconSymbol3DLayerResource.js
var l8;
var h3 = i()({ circle: "circle", square: "square", cross: "cross", x: "x", kite: "kite", triangle: "triangle" });
var d3 = l8 = class extends n2 {
  constructor(r6) {
    super(r6);
  }
  readHref(r6, e8, t6) {
    return r6 ? p(r6, t6) : e8.dataURI;
  }
  writeHref(r6, e8, t6, p20) {
    r6 && (tt(r6) ? e8.dataURI = r6 : (e8.href = m2(r6, p20), Y(e8.href) && (e8.href = K(e8.href))));
  }
  clone() {
    return new l8({ href: this.href, primitive: this.primitive });
  }
  equals(r6) {
    return r6.primitive === this.primitive && r6.href === this.href;
  }
};
__decorate([a2({ type: String, json: { write: true, read: { source: ["href", "dataURI"] } } })], d3.prototype, "href", void 0), __decorate([o("href")], d3.prototype, "readHref", null), __decorate([r2("href", { href: { type: String }, dataURI: { type: String } })], d3.prototype, "writeHref", null), __decorate([r(h3)], d3.prototype, "primitive", void 0), d3 = l8 = __decorate([c("esri.symbols.support.IconSymbol3DLayerResource")], d3);
var j = d3;

// node_modules/@arcgis/core/symbols/support/OccludedVisibility.js
var i9 = class extends l2(n2) {
  constructor(o7) {
    super(o7), this.mode = "adaptive";
  }
  equals(o7) {
    return this.mode === o7.mode;
  }
};
__decorate([a2({ type: ["adaptive", "hidden", "visible"], json: { write: { isRequired: true } } })], i9.prototype, "mode", void 0), i9 = __decorate([c("esri.symbols.support.OccludedVisibility")], i9);

// node_modules/@arcgis/core/symbols/support/occludedVisibilityUtils.js
var i10 = { type: i9, json: { write: true, default: null } };

// node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition2D.js
var e5;
var i11 = e5 = class extends b {
  constructor(o7) {
    super(o7), this.x = 0, this.y = 0;
  }
  clone() {
    return new e5({ x: this.x, y: this.y });
  }
  equals(o7) {
    return o7.x === this.x && o7.y === this.y;
  }
};
__decorate([a2({ type: Number })], i11.prototype, "x", void 0), __decorate([a2({ type: Number })], i11.prototype, "y", void 0), i11 = e5 = __decorate([c("esri.symbols.support.Symbol3DAnchorPosition2D")], i11);
var p12 = i11;

// node_modules/@arcgis/core/symbols/support/Symbol3DIconOutline.js
var n10;
var u5 = n10 = class extends n2 {
  constructor(o7) {
    super(o7), this.color = new g([0, 0, 0, 1]);
  }
  get size() {
    return this._get("size") ?? e2(1);
  }
  set size(o7) {
    this._set("size", o7);
  }
  clone() {
    const o7 = { color: null != this.color ? this.color.clone() : null, size: this.size };
    return new n10(o7);
  }
  equals(o7) {
    return o7.size === this.size && (null == this.color ? null == o7.color : this.color.equals(o7.color));
  }
};
__decorate([a2(a3({ colorRequiredOnWrite: true }))], u5.prototype, "color", void 0), __decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { isRequired: true } } }))], u5.prototype, "size", null), u5 = n10 = __decorate([c("esri.symbols.support.Symbol3DIconOutline")], u5);
var p13 = u5;

// node_modules/@arcgis/core/symbols/IconSymbol3DLayer.js
var b2;
var g3 = class extends i4 {
  static {
    b2 = this;
  }
  constructor(o7) {
    super(o7), this.material = null, this.resource = null, this.type = "icon", this.anchor = "center", this.anchorPosition = null, this.outline = null, this.angle = 0, this.occludedVisibility = new i9({ mode: "adaptive" });
  }
  get size() {
    return this._get("size") ?? 12;
  }
  set size(o7) {
    this._set("size", o7);
  }
  clone() {
    return new b2({ anchor: this.anchor, anchorPosition: a(this.anchorPosition), enabled: this.enabled, material: a(this.material), outline: a(this.outline), resource: a(this.resource), angle: this.angle, size: this.size, occludedVisibility: a(this.occludedVisibility) });
  }
  static fromSimpleMarkerSymbol(o7) {
    const t6 = o7.color || r4, i15 = j2(o7), r6 = o7.outline && o7.outline.width > 0 ? { size: o7.outline.width, color: (o7.outline.color || r4).clone() } : null;
    return new b2({ size: o7.size, angle: o7.angle, resource: { primitive: z(() => n.getLogger(this.prototype), o7.style) }, material: { color: t6 }, outline: r6, anchor: i15 ? "relative" : void 0, anchorPosition: i15, occludedVisibility: null });
  }
  static fromPictureMarkerSymbol(o7) {
    const t6 = !o7.color || t5(o7.color) ? r4 : o7.color, e8 = j2(o7);
    return new b2({ size: o7.width <= o7.height ? o7.height : o7.width, angle: o7.angle, resource: { href: o7.url }, material: { color: t6.clone() }, anchor: e8 ? "relative" : void 0, anchorPosition: e8, occludedVisibility: null });
  }
  static fromCIMSymbol(o7) {
    return new b2({ resource: { href: st({ mediaType: "application/json", data: JSON.stringify(o7.data) }) }, occludedVisibility: null });
  }
};
function j2(o7) {
  const t6 = "width" in o7 ? o7.width : o7.size, e8 = "height" in o7 ? o7.height : o7.size, i15 = w(o7.xoffset), r6 = w(o7.yoffset);
  return (i15 || r6) && t6 && e8 ? { x: -i15 / t6, y: r6 / e8 } : null;
}
function w(o7) {
  return isFinite(o7) ? o7 : 0;
}
__decorate([a2({ type: p8, json: { write: true } })], g3.prototype, "material", void 0), __decorate([a2({ type: j, json: { write: true } })], g3.prototype, "resource", void 0), __decorate([r({ Icon: "icon" }, { readOnly: true })], g3.prototype, "type", void 0), __decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { isRequired: true } } }))], g3.prototype, "size", null), __decorate([r({ center: "center", left: "left", right: "right", top: "top", bottom: "bottom", topLeft: "top-left", topRight: "top-right", bottomLeft: "bottom-left", bottomRight: "bottom-right", relative: "relative" }, { default: "center" })], g3.prototype, "anchor", void 0), __decorate([a2({ type: p12, json: { type: [Number], read: { reader: (o7) => new p12({ x: o7[0], y: o7[1] }) }, write: { writer: (o7, t6) => {
  t6.anchorPosition = [o7.x, o7.y];
}, overridePolicy() {
  return { enabled: "relative" === this.anchor };
} } } })], g3.prototype, "anchorPosition", void 0), __decorate([a2({ type: p13, json: { write: true } })], g3.prototype, "outline", void 0), __decorate([a2({ type: Number, json: { write: true, default: 0 } })], g3.prototype, "angle", void 0), __decorate([a2(i10)], g3.prototype, "occludedVisibility", void 0), g3 = b2 = __decorate([c("esri.symbols.IconSymbol3DLayer")], g3);
var v2 = { circle: "circle", cross: "cross", diamond: "kite", square: "square", x: "x", triangle: "triangle", path: null };
function z(o7, t6) {
  const e8 = v2[t6];
  return e8 || (o7().warn(`${t6} cannot be mapped to Icon symbol. Fallback to "circle"`), "circle");
}

// node_modules/@arcgis/core/symbols/LineStyleMarker3D.js
var c8 = class extends l2(n2) {
  constructor(o7) {
    super(o7), this.type = "style", this.placement = "begin-end", this.style = "arrow", this.color = null;
  }
  equals(o7) {
    return null != o7 && o7.placement === this.placement && o7.style === this.style && (null == this.color && null == o7.color || null != this.color && null != o7.color && this.color.toJSON() === o7.color.toJSON());
  }
};
__decorate([a2({ type: ["style"], readOnly: true, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], c8.prototype, "type", void 0), __decorate([a2({ type: e3, json: { default: "begin-end", write: true } })], c8.prototype, "placement", void 0), __decorate([a2({ type: n6, json: { default: "arrow", write: true } })], c8.prototype, "style", void 0), __decorate([a2({ type: g, json: { type: [D], default: null, write: true } })], c8.prototype, "color", void 0), c8 = __decorate([c("esri.symbols.LineStyleMarker3D")], c8);

// node_modules/@arcgis/core/symbols/LineSymbol3DLayer.js
var h4;
var j3 = class extends i4 {
  static {
    h4 = this;
  }
  constructor(t6) {
    super(t6), this.material = null, this.type = "line", this.join = "miter", this.cap = "butt", this.pattern = null, this.imagePattern = null, this.marker = null;
  }
  get size() {
    return this._get("size") ?? e2(1);
  }
  set size(t6) {
    this._set("size", t6);
  }
  clone() {
    const t6 = { enabled: this.enabled, material: null != this.material ? this.material.clone() : null, size: this.size, join: this.join, cap: this.cap, pattern: null != this.pattern ? this.pattern.clone() : null, imagePattern: null != this.imagePattern ? this.imagePattern.clone() : null, marker: null != this.marker ? this.marker.clone() : null };
    return new h4(t6);
  }
  static fromSimpleLineSymbol(t6) {
    const r6 = { enabled: true, size: t6.width ?? e2(1), cap: t6.cap || "butt", join: t6.join || "miter", pattern: t6.style ? new i7({ style: t6.style }) : null, imagePattern: null, material: new p8({ color: (t6.color || r4).clone() }), marker: t6.marker ? new c8({ placement: t6.marker.placement, style: t6.marker.style, color: t6.marker.color?.clone() ?? null }) : null };
    return new h4(r6);
  }
};
__decorate([a2({ type: p8, json: { write: true } })], j3.prototype, "material", void 0), __decorate([r({ Line: "line" }, { readOnly: true })], j3.prototype, "type", void 0), __decorate([a2({ type: l3, json: { write: true, default: "miter" } })], j3.prototype, "join", void 0), __decorate([a2({ type: u3, json: { write: true, default: "butt" } })], j3.prototype, "cap", void 0), __decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { isRequired: true } } }))], j3.prototype, "size", null), __decorate([a2(o5)], j3.prototype, "pattern", void 0), __decorate([a2()], j3.prototype, "imagePattern", void 0), __decorate([a2({ types: { key: "type", base: c8, typeMap: { style: c8 } }, json: { write: true } })], j3.prototype, "marker", void 0), j3 = h4 = __decorate([c("esri.symbols.LineSymbol3DLayer")], j3);

// node_modules/@arcgis/core/symbols/support/ObjectSymbol3DLayerResource.js
var n11;
var m8 = i()({ sphere: "sphere", cylinder: "cylinder", cube: "cube", cone: "cone", diamond: "diamond", tetrahedron: "tetrahedron", invertedCone: "inverted-cone" });
var a4 = n11 = class extends n2 {
  constructor(r6) {
    super(r6);
  }
  clone() {
    return new n11({ href: this.href, primitive: this.primitive });
  }
};
__decorate([a2({ type: String, json: { read: f, write: h } })], a4.prototype, "href", void 0), __decorate([r(m8)], a4.prototype, "primitive", void 0), a4 = n11 = __decorate([c("esri.symbols.support.ObjectSymbol3DLayerResource")], a4);
var d4 = a4;

// node_modules/@arcgis/core/symbols/support/Symbol3DAnchorPosition3D.js
var e6;
var p14 = e6 = class extends b {
  constructor(o7) {
    super(o7), this.x = 0, this.y = 0, this.z = 0;
  }
  clone() {
    return new e6({ x: this.x, y: this.y, z: this.z });
  }
};
__decorate([a2({ type: Number })], p14.prototype, "x", void 0), __decorate([a2({ type: Number })], p14.prototype, "y", void 0), __decorate([a2({ type: Number })], p14.prototype, "z", void 0), p14 = e6 = __decorate([c("esri.symbols.support.Symbol3DAnchorPosition3D")], p14);
var i12 = p14;

// node_modules/@arcgis/core/symbols/ObjectSymbol3DLayer.js
var n12;
var a5 = class extends i4 {
  static {
    n12 = this;
  }
  constructor(t6) {
    super(t6), this.material = null, this.castShadows = true, this.resource = null, this.type = "object", this.width = void 0, this.height = void 0, this.depth = void 0, this.anchor = void 0, this.anchorPosition = void 0, this.heading = void 0, this.tilt = void 0, this.roll = void 0;
  }
  clone() {
    return new n12({ heading: this.heading, tilt: this.tilt, roll: this.roll, anchor: this.anchor, anchorPosition: this.anchorPosition?.clone(), depth: this.depth, enabled: this.enabled, height: this.height, material: this.material?.clone() ?? null, castShadows: this.castShadows, resource: this.resource?.clone(), width: this.width });
  }
  get isPrimitive() {
    return !this.resource || "string" != typeof this.resource.href;
  }
};
__decorate([a2({ type: p8, json: { write: true } })], a5.prototype, "material", void 0), __decorate([a2({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], a5.prototype, "castShadows", void 0), __decorate([a2({ type: d4, json: { write: true } })], a5.prototype, "resource", void 0), __decorate([r({ Object: "object" }, { readOnly: true })], a5.prototype, "type", void 0), __decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "width", void 0), __decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "height", void 0), __decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "depth", void 0), __decorate([r({ center: "center", top: "top", bottom: "bottom", origin: "origin", relative: "relative" }, { default: "origin" })], a5.prototype, "anchor", void 0), __decorate([a2({ type: i12, json: { type: [Number], read: { reader: (t6) => new i12({ x: t6[0], y: t6[1], z: t6[2] }) }, write: { writer: (t6, o7) => {
  o7.anchorPosition = [t6.x, t6.y, t6.z];
}, overridePolicy() {
  return { enabled: "relative" === this.anchor };
} } } })], a5.prototype, "anchorPosition", void 0), __decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "heading", void 0), __decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "tilt", void 0), __decorate([a2({ type: Number, json: { write: true } })], a5.prototype, "roll", void 0), __decorate([a2({ readOnly: true })], a5.prototype, "isPrimitive", null), a5 = n12 = __decorate([c("esri.symbols.ObjectSymbol3DLayer")], a5);

// node_modules/@arcgis/core/symbols/PathSymbol3DLayer.js
var h5;
var n13 = class extends i4 {
  static {
    h5 = this;
  }
  constructor(t6) {
    super(t6), this.material = null, this.castShadows = true, this.type = "path", this.profile = "circle", this.join = "miter", this.cap = "butt", this.width = void 0, this.height = void 0, this.anchor = "center", this.profileRotation = "all";
  }
  readWidth(t6, e8) {
    return null != t6 ? t6 : null == e8.height && null != e8.size ? e8.size : void 0;
  }
  readHeight(t6, e8) {
    return null != t6 ? t6 : null == e8.width && null != e8.size ? e8.size : void 0;
  }
  clone() {
    return new h5({ enabled: this.enabled, material: null != this.material ? this.material.clone() : null, castShadows: this.castShadows, profile: this.profile, join: this.join, cap: this.cap, width: this.width, height: this.height, profileRotation: this.profileRotation, anchor: this.anchor });
  }
};
__decorate([a2({ type: p8, json: { write: true } })], n13.prototype, "material", void 0), __decorate([a2({ type: Boolean, nonNullable: true, json: { write: true, default: true } })], n13.prototype, "castShadows", void 0), __decorate([r({ Path: "path" }, { readOnly: true })], n13.prototype, "type", void 0), __decorate([a2({ type: ["circle", "quad"], nonNullable: true, json: { write: true, default: "circle" } })], n13.prototype, "profile", void 0), __decorate([a2({ type: l3, nonNullable: true, json: { write: true, default: "miter" } })], n13.prototype, "join", void 0), __decorate([a2({ type: i3, nonNullable: true, json: { write: true, default: "butt" } })], n13.prototype, "cap", void 0), __decorate([a2({ type: Number, json: { write: { enabled: true, target: { width: { type: Number }, size: { type: Number } } } } })], n13.prototype, "width", void 0), __decorate([o("width", ["width", "size", "height"])], n13.prototype, "readWidth", null), __decorate([a2({ type: Number, json: { write: true } })], n13.prototype, "height", void 0), __decorate([o("height", ["height", "size", "width"])], n13.prototype, "readHeight", null), __decorate([a2({ type: ["center", "bottom", "top"], nonNullable: true, json: { write: true, default: "center" } })], n13.prototype, "anchor", void 0), __decorate([a2({ type: ["heading", "all"], nonNullable: true, json: { write: true, default: "all" } })], n13.prototype, "profileRotation", void 0), n13 = h5 = __decorate([c("esri.symbols.PathSymbol3DLayer")], n13);

// node_modules/@arcgis/core/symbols/support/Symbol3DHalo.js
var c9;
var m9 = c9 = class extends n2 {
  constructor(o7) {
    super(o7), this.color = new g([0, 0, 0, 1]);
  }
  get size() {
    return this._get("size") ?? 0;
  }
  set size(o7) {
    this._set("size", o7);
  }
  clone() {
    const o7 = { color: a(this.color), size: this.size };
    return new c9(o7);
  }
};
__decorate([a2(a3())], m9.prototype, "color", void 0), __decorate([a2(i5)], m9.prototype, "size", null), m9 = c9 = __decorate([c("esri.symbols.support.Symbol3DHalo")], m9);

// node_modules/@arcgis/core/symbols/support/Symbol3DTextBackground.js
var l9 = class extends l2(n2) {
  constructor(o7) {
    super(o7), this.color = null;
  }
};
__decorate([a2(a3())], l9.prototype, "color", void 0), l9 = __decorate([c("esri.symbols.support.Symbol3DTextBackground")], l9);

// node_modules/@arcgis/core/symbols/TextSymbol3DLayer.js
var g4;
var b3 = class extends i4 {
  static {
    g4 = this;
  }
  constructor(t6) {
    super(t6), this._userSize = void 0, this.halo = null, this.horizontalAlignment = "center", this.lineHeight = 1, this.material = null, this.background = null, this.text = null, this.type = "text", this.verticalAlignment = "baseline", this.occludedVisibility = new i9({ mode: "adaptive" });
  }
  get font() {
    return this._get("font") || null;
  }
  set font(t6) {
    null != t6 && null != this._userSize && (t6.size = this._userSize), this._set("font", t6);
  }
  writeFont(t6, e8, o7, i15) {
    const r6 = __spreadProps(__spreadValues({}, i15), { textSymbol3D: true });
    e8.font = t6.write({}, r6), delete e8.font.size;
  }
  get size() {
    return null != this._userSize ? this._userSize : null != this.font?.size ? this.font.size : 9;
  }
  set size(t6) {
    this._userSize = Number(t6), null != this.font && (this.font.size = this._userSize), this.notifyChange("size");
  }
  clone() {
    const t6 = new g4({ enabled: this.enabled, font: a(this.font), halo: a(this.halo), horizontalAlignment: this.horizontalAlignment, lineHeight: this.lineHeight, material: null != this.material ? this.material.clone() : null, text: this.text, verticalAlignment: this.verticalAlignment, background: a(this.background), occludedVisibility: a(this.occludedVisibility) });
    return t6._userSize = this._userSize, t6;
  }
  static fromTextSymbol(t6) {
    return new g4({ font: null != t6.font ? t6.font.clone() : new y(), halo: z2(t6.haloColor, t6.haloSize), horizontalAlignment: t6.horizontalAlignment, lineHeight: t6.lineHeight, material: t6.color ? new p8({ color: t6.color.clone() }) : null, text: t6.text, verticalAlignment: t6.verticalAlignment, background: t6.backgroundColor ? new l9({ color: t6.backgroundColor.clone() }) : null, occludedVisibility: null });
  }
};
function z2(t6, o7) {
  return t6 && null != o7 && o7 > 0 ? new m9({ color: a(t6), size: o7 }) : null;
}
__decorate([a2({ type: y, json: { write: true } })], b3.prototype, "font", null), __decorate([r2("font")], b3.prototype, "writeFont", null), __decorate([a2({ type: m9, json: { write: true } })], b3.prototype, "halo", void 0), __decorate([a2(__spreadProps(__spreadValues({}, m3), { json: { default: "center", write: true } }))], b3.prototype, "horizontalAlignment", void 0), __decorate([a2(__spreadProps(__spreadValues({}, n4), { json: { default: 1, write: true } }))], b3.prototype, "lineHeight", void 0), __decorate([a2({ type: p8, json: { write: true } })], b3.prototype, "material", void 0), __decorate([a2({ type: l9, json: { write: true } })], b3.prototype, "background", void 0), __decorate([a2(i5)], b3.prototype, "size", null), __decorate([a2({ type: String, json: { write: true } })], b3.prototype, "text", void 0), __decorate([r({ Text: "text" }, { readOnly: true })], b3.prototype, "type", void 0), __decorate([a2(__spreadProps(__spreadValues({}, p2), { json: { default: "baseline", write: true } }))], b3.prototype, "verticalAlignment", void 0), __decorate([a2(i10)], b3.prototype, "occludedVisibility", void 0), b3 = g4 = __decorate([c("esri.symbols.TextSymbol3DLayer")], b3);

// node_modules/@arcgis/core/symbols/WaterSymbol3DLayer.js
var l10;
var p15 = class extends i4 {
  static {
    l10 = this;
  }
  constructor(e8) {
    super(e8), this.color = n14.clone(), this.type = "water", this.waterbodySize = "medium", this.waveDirection = null, this.waveStrength = "moderate";
  }
  clone() {
    return new l10({ color: this.color.clone(), waterbodySize: this.waterbodySize, waveDirection: this.waveDirection, waveStrength: this.waveStrength });
  }
};
__decorate([a2({ type: g, nonNullable: true, json: { type: [D], write: (e8, t6, o7) => t6[o7] = e8.toArray(1), default: () => n14.clone(), defaultEquals: (e8) => e8.toCss(true) === n14.toCss(true) } })], p15.prototype, "color", void 0), __decorate([r({ Water: "water" }, { readOnly: true })], p15.prototype, "type", void 0), __decorate([a2({ type: ["small", "medium", "large"], json: { write: true, default: "medium" } })], p15.prototype, "waterbodySize", void 0), __decorate([a2({ type: Number, json: { write: true, default: null } })], p15.prototype, "waveDirection", void 0), __decorate([a2({ type: ["calm", "rippled", "slight", "moderate"], json: { write: true, default: "moderate" } })], p15.prototype, "waveStrength", void 0), p15 = l10 = __decorate([c("esri.symbols.WaterSymbol3DLayer")], p15);
var n14 = new g([0, 119, 190]);

// node_modules/@arcgis/core/symbols/Symbol3D.js
var v3 = { icon: g3, object: a5, line: j3, path: n13, fill: d2, extrude: p11, text: b3, water: p15 };
var C = q.ofType({ base: i4, key: "type", typeMap: v3, errorContext: "symbol-layer" });
var T = class extends n5 {
  constructor(e8) {
    super(e8), this.styleOrigin = null, this.thumbnail = null, this.type = null;
    const t6 = this.__accessor__ && this.__accessor__.metadata && this.__accessor__.metadata.symbolLayers, o7 = t6?.type, s7 = o7 || q;
    this._set("symbolLayers", new s7());
  }
  get color() {
    return null;
  }
  set color(e8) {
    this.constructed && n.getLogger(this).error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.");
  }
  set symbolLayers(e8) {
    n3(e8, this._get("symbolLayers"));
  }
  readStyleOrigin(e8, r6, t6) {
    if (e8.styleUrl && e8.name) {
      const r7 = p(e8.styleUrl, t6);
      return new p9({ styleUrl: r7, name: e8.name });
    }
    if (e8.styleName && e8.name) return new p9({ portal: t6?.portal || M.getDefault(), styleName: e8.styleName, name: e8.name });
    t6?.messages && t6.messages.push(new t("symbol3d:incomplete-style-origin", "Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property", { context: t6, definition: e8 }));
  }
  writeStyleOrigin(e8, r6, t6, o7) {
    if (e8.styleUrl && e8.name) {
      let t7 = m2(e8.styleUrl, o7);
      Y(t7) && (t7 = K(t7)), r6.styleOrigin = { styleUrl: t7, name: e8.name };
    } else e8.styleName && e8.name && (e8.portal && o7?.portal && !D2(e8.portal.restUrl, o7.portal.restUrl) ? o7?.messages && o7.messages.push(new t("symbol:cross-portal", "The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.", { symbol: this })) : r6.styleOrigin = { styleName: e8.styleName, name: e8.name });
  }
  normalizeCtorArgs(e8) {
    return e8 instanceof i4 || e8 && v3[e8.type] ? { symbolLayers: [e8] } : Array.isArray(e8) ? { symbolLayers: e8 } : e8;
  }
};
__decorate([a2({ json: { read: false, write: false } })], T.prototype, "color", null), __decorate([a2({ type: C, nonNullable: true, json: { write: true } }), m(e)], T.prototype, "symbolLayers", null), __decorate([a2({ type: p9 })], T.prototype, "styleOrigin", void 0), __decorate([o("styleOrigin")], T.prototype, "readStyleOrigin", null), __decorate([r2("styleOrigin", { "styleOrigin.styleUrl": { type: String }, "styleOrigin.styleName": { type: String }, "styleOrigin.name": { type: String } })], T.prototype, "writeStyleOrigin", null), __decorate([a2({ type: p10, json: { read: false } })], T.prototype, "thumbnail", void 0), __decorate([a2({ type: ["point-3d", "line-3d", "polygon-3d", "mesh-3d", "label-3d"], readOnly: true })], T.prototype, "type", void 0), T = __decorate([c("esri.symbols.Symbol3D")], T);

// node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var p16;
var a6 = q.ofType({ base: null, key: "type", typeMap: { fill: d2 } });
var n15 = p16 = class extends T {
  constructor(o7) {
    super(o7), this.type = "mesh-3d", this.symbolLayers = new a6();
  }
  get symbolLayers() {
    return this._get("symbolLayers");
  }
  set symbolLayers(o7) {
    n3(o7, this._get("symbolLayers"));
  }
  clone() {
    return new p16({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromSimpleFillSymbol(o7) {
    return new p16({ symbolLayers: new q([d2.fromSimpleFillSymbol(o7)]) });
  }
};
__decorate([a2({ type: a6 })], n15.prototype, "symbolLayers", null), __decorate([r({ MeshSymbol3D: "mesh-3d" }, { readOnly: true })], n15.prototype, "type", void 0), n15 = p16 = __decorate([c("esri.symbols.MeshSymbol3D")], n15);

// node_modules/@arcgis/core/symbols/callouts/Callout3D.js
var s5 = class extends n2 {
  constructor(o7) {
    super(o7), this.visible = true;
  }
  clone() {
    throw new Error("Subclasses of Callout3D should implement their own clone method.");
  }
};
__decorate([a2({ type: ["line"], constructOnly: true, json: { read: false, write: { ignoreOrigin: true, isRequired: true } } })], s5.prototype, "type", void 0), __decorate([a2({ readOnly: true })], s5.prototype, "visible", void 0), s5 = __decorate([c("esri.symbols.callouts.Callout3D")], s5);

// node_modules/@arcgis/core/symbols/callouts/LineCallout3DBorder.js
var i13;
var p17 = i13 = class extends n2 {
  constructor(o7) {
    super(o7), this.color = new g("white");
  }
  clone() {
    return new i13({ color: a(this.color) });
  }
};
__decorate([a2(a3({ colorRequiredOnWrite: true }))], p17.prototype, "color", void 0), p17 = i13 = __decorate([c("esri.symbols.callouts.LineCallout3DBorder")], p17);
var m10 = p17;

// node_modules/@arcgis/core/symbols/callouts/LineCallout3D.js
var u6;
var a7 = u6 = class extends s5 {
  constructor(o7) {
    super(o7), this.type = "line", this.color = new g([0, 0, 0, 1]), this.border = null;
  }
  get size() {
    return this._get("size") ?? e2(1);
  }
  set size(o7) {
    this._set("size", o7);
  }
  get visible() {
    return this.size > 0 && null != this.color && this.color.a > 0;
  }
  clone() {
    return new u6({ color: a(this.color), size: this.size, border: a(this.border) });
  }
};
__decorate([r({ line: "line" })], a7.prototype, "type", void 0), __decorate([a2(a3({ colorRequiredOnWrite: true }))], a7.prototype, "color", void 0), __decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { isRequired: true } } }))], a7.prototype, "size", null), __decorate([a2({ type: m10, json: { write: true } })], a7.prototype, "border", void 0), __decorate([a2({ readOnly: true })], a7.prototype, "visible", null), a7 = u6 = __decorate([c("esri.symbols.callouts.LineCallout3D")], a7);

// node_modules/@arcgis/core/symbols/callouts/calloutUtils.js
function e7(t6) {
  if (!t6) return false;
  const n17 = t6.verticalOffset;
  return !(!n17 || n17.screenLength <= 0 || null != n17.maxWorldLength && n17.maxWorldLength <= 0);
}
function r5(t6) {
  if (!t6 || !t6.supportsCallout || !t6.supportsCallout()) return false;
  const n17 = t6.callout;
  return !!n17?.visible && !!e7(t6);
}
function o6(t6) {
  return "point-3d" === t6.type || "label-3d" === t6.type;
}
function l11(t6) {
  return "center" === t6.horizontalAlignment;
}
var u7 = { types: { key: "type", base: s5, typeMap: { line: a7 } }, json: { write: true } };

// node_modules/@arcgis/core/symbols/support/Symbol3DVerticalOffset.js
var s6;
var i14 = s6 = class extends n2 {
  constructor(e8) {
    super(e8), this.minWorldLength = 0, this.maxWorldLength = null;
  }
  get screenLength() {
    return this._get("screenLength") ?? 0;
  }
  set screenLength(e8) {
    this._set("screenLength", e8);
  }
  clone() {
    return new s6({ screenLength: this.screenLength, minWorldLength: this.minWorldLength, maxWorldLength: this.maxWorldLength });
  }
};
__decorate([a2(__spreadProps(__spreadValues({}, i5), { json: { write: { isRequired: true } } }))], i14.prototype, "screenLength", null), __decorate([a2({ type: Number, nonNullable: true, json: { write: true, default: 0 } })], i14.prototype, "minWorldLength", void 0), __decorate([a2({ type: Number, json: { write: true } })], i14.prototype, "maxWorldLength", void 0), i14 = s6 = __decorate([c("esri.symbols.support.Symbol3DVerticalOffset")], i14);

// node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var u8;
var b4 = q.ofType({ base: null, key: "type", typeMap: { text: b3 } });
var f2 = u8 = class extends T {
  constructor(t6) {
    super(t6), this.verticalOffset = null, this.callout = null, this.styleOrigin = null, this.type = "label-3d", this.symbolLayers = new b4();
  }
  get symbolLayers() {
    return this._get("symbolLayers");
  }
  set symbolLayers(t6) {
    n3(t6, this._get("symbolLayers"));
  }
  supportsCallout() {
    return true;
  }
  hasVisibleCallout() {
    return r5(this);
  }
  hasVisibleVerticalOffset() {
    return e7(this);
  }
  clone() {
    return new u8({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail), callout: a(this.callout), verticalOffset: a(this.verticalOffset) });
  }
  static fromTextSymbol(t6) {
    return new u8({ symbolLayers: new q([b3.fromTextSymbol(t6)]) });
  }
};
__decorate([a2({ type: i14, json: { write: true } })], f2.prototype, "verticalOffset", void 0), __decorate([a2(u7)], f2.prototype, "callout", void 0), __decorate([a2({ json: { read: false, write: false } })], f2.prototype, "styleOrigin", void 0), __decorate([a2({ type: b4 })], f2.prototype, "symbolLayers", null), __decorate([r({ LabelSymbol3D: "label-3d" }, { readOnly: true })], f2.prototype, "type", void 0), f2 = u8 = __decorate([c("esri.symbols.LabelSymbol3D")], f2);

// node_modules/@arcgis/core/symbols/LineSymbol3D.js
var p18;
var n16 = q.ofType({ base: null, key: "type", typeMap: { line: j3, path: n13 } });
var a8 = q.ofType({ base: null, key: "type", typeMap: { line: j3, path: n13 } });
var b5 = p18 = class extends T {
  constructor(e8) {
    super(e8), this.symbolLayers = new n16(), this.type = "line-3d";
  }
  clone() {
    return new p18({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromSimpleLineSymbol(e8) {
    return new p18({ symbolLayers: new q([j3.fromSimpleLineSymbol(e8)]) });
  }
};
__decorate([a2({ type: n16, json: { type: a8 } })], b5.prototype, "symbolLayers", void 0), __decorate([r({ LineSymbol3D: "line-3d" }, { readOnly: true })], b5.prototype, "type", void 0), b5 = p18 = __decorate([c("esri.symbols.LineSymbol3D")], b5);

// node_modules/@arcgis/core/symbols/PictureFillSymbol.js
var p19;
var f3 = p19 = class extends i2 {
  constructor(...t6) {
    super(...t6), this.color = null, this.type = "picture-fill", this.url = null, this.xscale = 1, this.yscale = 1, this.source = null;
  }
  normalizeCtorArgs(t6, e8, o7, r6) {
    if (t6 && "string" != typeof t6 && null == t6.imageData) return t6;
    const i15 = {};
    return t6 && (i15.url = t6), e8 && (i15.outline = e8), null != o7 && (i15.width = o2(o7)), null != r6 && (i15.height = o2(r6)), i15;
  }
  get width() {
    return this._get("width") ?? 12;
  }
  set width(t6) {
    this._set("width", t6);
  }
  get height() {
    return this._get("height") ?? 12;
  }
  set height(t6) {
    this._set("height", t6);
  }
  get xoffset() {
    return this._get("xoffset") ?? 0;
  }
  set xoffset(t6) {
    this._set("xoffset", t6);
  }
  get yoffset() {
    return this._get("yoffset") ?? 0;
  }
  set yoffset(t6) {
    this._set("yoffset", t6);
  }
  clone() {
    const t6 = new p19({ color: a(this.color), height: this.height, outline: a(this.outline), url: this.url, width: this.width, xoffset: this.xoffset, xscale: this.xscale, yoffset: this.yoffset, yscale: this.yscale });
    return t6._set("source", a(this.source)), t6;
  }
  hash() {
    return `${super.hash()}.${this.color?.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`;
  }
};
__decorate([a2({ json: { write: false } })], f3.prototype, "color", void 0), __decorate([r({ esriPFS: "picture-fill" }, { readOnly: true })], f3.prototype, "type", void 0), __decorate([a2(m5)], f3.prototype, "url", void 0), __decorate([a2({ type: Number, json: { write: true } })], f3.prototype, "xscale", void 0), __decorate([a2({ type: Number, json: { write: true } })], f3.prototype, "yscale", void 0), __decorate([a2({ type: Number, cast: o2, json: { write: true } })], f3.prototype, "width", null), __decorate([a2({ type: Number, cast: o2, json: { write: true } })], f3.prototype, "height", null), __decorate([a2({ type: Number, cast: o2, json: { write: true } })], f3.prototype, "xoffset", null), __decorate([a2({ type: Number, cast: o2, json: { write: true } })], f3.prototype, "yoffset", null), __decorate([a2(c2)], f3.prototype, "source", void 0), f3 = p19 = __decorate([c("esri.symbols.PictureFillSymbol")], f3);

// node_modules/@arcgis/core/symbols/PointSymbol3D.js
var h6;
var S = q.ofType({ base: null, key: "type", typeMap: { icon: g3, object: a5, text: b3 } });
var w2 = h6 = class extends T {
  constructor(t6) {
    super(t6), this.verticalOffset = null, this.callout = null, this.symbolLayers = new S(), this.type = "point-3d";
  }
  supportsCallout() {
    if ((this.symbolLayers ? this.symbolLayers.length : 0) < 1) return false;
    for (const t6 of this.symbolLayers.items) switch (t6.type) {
      case "icon":
      case "text":
      case "object":
        continue;
      default:
        return false;
    }
    return true;
  }
  hasVisibleCallout() {
    return r5(this);
  }
  hasVisibleVerticalOffset() {
    return e7(this);
  }
  clone() {
    return new h6({ verticalOffset: a(this.verticalOffset), callout: a(this.callout), styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromSimpleMarkerSymbol(t6) {
    return new h6({ symbolLayers: new q([g3.fromSimpleMarkerSymbol(t6)]) });
  }
  static fromPictureMarkerSymbol(t6) {
    return new h6({ symbolLayers: new q([g3.fromPictureMarkerSymbol(t6)]) });
  }
  static fromCIMSymbol(t6) {
    const r6 = t6.data?.symbol?.type;
    if ("CIMPointSymbol" !== r6) return null;
    const s7 = t6.data.symbol;
    return new h6(s7?.callout ? { symbolLayers: new q([g3.fromCIMSymbol(t6)]), callout: new a7({ size: 0.5, color: new g([0, 0, 0]) }), verticalOffset: new i14({ screenLength: 40 }) } : { symbolLayers: new q([g3.fromCIMSymbol(t6)]) });
  }
  static fromTextSymbol(t6) {
    return new h6({ symbolLayers: new q([b3.fromTextSymbol(t6)]) });
  }
};
__decorate([a2({ type: i14, json: { write: true } })], w2.prototype, "verticalOffset", void 0), __decorate([a2(u7)], w2.prototype, "callout", void 0), __decorate([a2({ type: S, json: { origins: { "web-scene": { write: true } } } })], w2.prototype, "symbolLayers", void 0), __decorate([r({ PointSymbol3D: "point-3d" }, { readOnly: true })], w2.prototype, "type", void 0), w2 = h6 = __decorate([c("esri.symbols.PointSymbol3D")], w2);

// node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var c10;
var b6 = q.ofType({ base: null, key: "type", typeMap: { extrude: p11, fill: d2, icon: g3, object: a5, water: p15 } });
var f4 = c10 = class extends T {
  constructor(o7) {
    super(o7), this.symbolLayers = new b6(), this.type = "polygon-3d";
  }
  clone() {
    return new c10({ styleOrigin: a(this.styleOrigin), symbolLayers: a(this.symbolLayers), thumbnail: a(this.thumbnail) });
  }
  static fromJSON(o7) {
    const r6 = new c10();
    return r6.read(o7), r6;
  }
  static fromSimpleFillSymbol(o7) {
    return new c10({ symbolLayers: new q([d2.fromSimpleFillSymbol(o7)]) });
  }
};
__decorate([a2({ type: b6, json: { write: true } })], f4.prototype, "symbolLayers", void 0), __decorate([r({ PolygonSymbol3D: "polygon-3d" }, { readOnly: true })], f4.prototype, "type", void 0), f4 = c10 = __decorate([c("esri.symbols.PolygonSymbol3D")], f4);

// node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var m11;
var c11 = m11 = class extends n5 {
  constructor(t6) {
    super(t6), this.color = null, this.styleName = null, this.portal = null, this.styleUrl = null, this.thumbnail = null, this.name = null, this.type = "web-style";
  }
  get _fetchCacheKey() {
    const t6 = null != this.portal ? this.portal : M.getDefault(), e8 = t6.user ? t6.user.username : null;
    return `${this.styleName}:${this.styleUrl}:${this.name}:${e8}:${t6.url}`;
  }
  read(t6, e8) {
    this.portal = e8?.portal, super.read(t6, e8);
  }
  clone() {
    return new m11({ name: this.name, styleUrl: this.styleUrl, styleName: this.styleName, portal: this.portal });
  }
  fetchSymbol(t6) {
    return this._fetchSymbol(t6);
  }
  async _fetchSymbol(t6) {
    const r6 = null != t6 ? t6.cache : null, l12 = r6 ? this._fetchCacheKey : null;
    if (null != r6) {
      const t7 = l12 && r6.get(l12);
      if (t7) return t7.clone();
    }
    const { resolveWebStyleSymbol: s7 } = await import("./webStyleSymbolUtils-FCVBDN5R.js");
    s(t6);
    const i15 = s7(this, { portal: this.portal }, t6);
    i15.catch((t7) => {
      n.getLogger(this).error("#fetchSymbol()", "Failed to create symbol from style", t7);
    });
    const p20 = await i15;
    return null != r6 && r6.set(l12, p20.clone()), p20;
  }
};
__decorate([a2({ json: { write: false } })], c11.prototype, "color", void 0), __decorate([a2({ type: String, json: { write: true } })], c11.prototype, "styleName", void 0), __decorate([a2({ type: M, json: { write: false } })], c11.prototype, "portal", void 0), __decorate([a2({ type: String, json: { read: f, write: h } })], c11.prototype, "styleUrl", void 0), __decorate([a2({ type: p10, json: { read: false } })], c11.prototype, "thumbnail", void 0), __decorate([a2({ type: String, json: { write: true } })], c11.prototype, "name", void 0), __decorate([r({ styleSymbolReference: "web-style" }, { readOnly: true })], c11.prototype, "type", void 0), __decorate([a2()], c11.prototype, "_fetchCacheKey", null), c11 = m11 = __decorate([c("esri.symbols.WebStyleSymbol")], c11);

// node_modules/@arcgis/core/symbols/support/typeUtils.js
function k(e8) {
  if (!e8) return false;
  switch (e8.type) {
    case "picture-fill":
    case "picture-marker":
    case "simple-fill":
    case "simple-line":
    case "simple-marker":
    case "text":
    case "cim":
      return true;
    default:
      return false;
  }
}
function S2(e8) {
  switch (e8?.type) {
    case "label-3d":
    case "line-3d":
    case "mesh-3d":
    case "point-3d":
    case "polygon-3d":
      return true;
    default:
      return false;
  }
}
var x2 = { base: n5, key: "type", typeMap: { "simple-fill": m4, "picture-fill": f3, "picture-marker": c3, "simple-line": d, "simple-marker": u, text: u2, "label-3d": f2, "line-3d": b5, "mesh-3d": n15, "point-3d": w2, "polygon-3d": f4, "web-style": c11, cim: m6 }, errorContext: "symbol" };
var M2 = { base: n5, key: "type", typeMap: { "picture-marker": c3, "simple-marker": u, "point-3d": w2, cim: m6 }, errorContext: "symbol" };
var C2 = { base: n5, key: "type", typeMap: { "simple-line": d, "line-3d": b5, cim: m6 }, errorContext: "symbol" };
var h7 = { base: n5, key: "type", typeMap: { "simple-fill": m4, "picture-fill": f3, "polygon-3d": f4, cim: m6 }, errorContext: "symbol" };
var g5 = { base: n5, key: "type", typeMap: { "picture-marker": c3, "simple-marker": u, text: u2, "web-style": c11, cim: m6 }, errorContext: "symbol" };
var w3 = s2({ types: x2 });
var D3 = { base: n5, key: "type", typeMap: { "simple-fill": m4, "picture-fill": f3, "picture-marker": c3, "simple-line": d, "simple-marker": u, text: u2, "line-3d": b5, "mesh-3d": n15, "point-3d": w2, "polygon-3d": f4, "web-style": c11, cim: m6 }, errorContext: "symbol" };
var P = { base: n5, key: "type", typeMap: { text: u2, "label-3d": f2 }, errorContext: "symbol" };
var F = { base: n5, key: "type", typeMap: { "line-3d": b5, "mesh-3d": n15, "point-3d": w2, "polygon-3d": f4, "web-style": c11, cim: m6 }, errorContext: "symbol" };
var T2 = { base: n5, key: "type", typeMap: { "label-3d": f2 }, errorContext: "symbol" };
var z3 = x(x2);

export {
  m6 as m,
  l4 as l,
  p4 as p,
  t4 as t,
  p8 as p2,
  d2 as d,
  p12 as p3,
  j3 as j,
  b3 as b,
  p9 as p4,
  p10 as p5,
  m10 as m2,
  a7 as a,
  o6 as o,
  l11 as l2,
  i14 as i,
  f2 as f,
  b5 as b2,
  n15 as n,
  w2 as w,
  f4 as f2,
  c11 as c,
  k,
  S2 as S,
  x2 as x,
  M2 as M,
  C2 as C,
  h7 as h,
  g5 as g,
  w3 as w2,
  D3 as D,
  P,
  F,
  T2 as T,
  z3 as z
};
//# sourceMappingURL=chunk-DZN3R4UM.js.map
