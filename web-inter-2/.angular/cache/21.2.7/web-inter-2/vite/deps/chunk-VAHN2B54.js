import {
  c
} from "./chunk-GUNEH5YJ.js";
import {
  o as o2
} from "./chunk-YO723O3F.js";
import {
  m
} from "./chunk-VOOLKODY.js";
import {
  I,
  N,
  P,
  b,
  p
} from "./chunk-WMLNU33A.js";
import {
  r,
  t as t2
} from "./chunk-NQCEYKIE.js";
import {
  t
} from "./chunk-VQOLBZYG.js";
import {
  e
} from "./chunk-77OYKINW.js";
import {
  B,
  C,
  q
} from "./chunk-DLNYS76H.js";
import {
  Z
} from "./chunk-3EE7FDFG.js";
import {
  R
} from "./chunk-IODIHRP7.js";
import {
  o
} from "./chunk-FVU6XCMJ.js";
import {
  g
} from "./chunk-6XF5AJ25.js";
import {
  d
} from "./chunk-AGHTZMGO.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js
var i = class _i {
  constructor(t5) {
    this._precisionFactors = {}, this._key = t5;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._geometryLayout || this._buildMaterialInfo(), this._stride;
  }
  getAttributeLocations() {
    return this._geometryLayout || this._buildMaterialInfo(), this._locations;
  }
  getPrecisionFactors() {
    return this._precisionFactors || this._buildMaterialInfo(), this._precisionFactors;
  }
  get geometryLayout() {
    return this._geometryLayout || this._buildMaterialInfo(), this._geometryLayout;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildMaterialInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildMaterialInfo(), this._uniforms;
  }
  getUsedAttributes() {
    return this._usedAttributes || this._buildMaterialInfo(), this._usedAttributes;
  }
  encodeAttributes(t5, e6, o4, r6) {
    const n = this.propertyInfos, s = this.getEncodingInfos(), i5 = [], a5 = i5.length, c5 = Math.ceil(this._ddStrideInBytes / 4);
    for (let l3 = 0; l3 < c5; l3++) i5.push(0);
    let u3 = 0, h2 = null;
    for (const l3 of Object.keys(s)) {
      const c6 = s[l3], { type: y3, precisionFactor: d5, isLayout: p2 } = n[l3];
      h2 === y3 && 32 !== u3 || (u3 = 0, h2 = y3);
      const _3 = p2 ? o4.getLayoutProperty(l3) : o4.getPaintProperty(l3), m3 = _3.interpolator?.getInterpolationRange(e6);
      let f2 = 0;
      for (const o5 of c6) {
        const { offset: n2 } = o5, s2 = a5 + Math.floor(n2 / 4), c7 = r6 ?? _3.getValue(m3 ? m3[f2] : e6, t5), h3 = d5 || 1;
        switch (y3) {
          case 0:
          case 1:
            i5[s2] |= this._encodeByte(c7 * h3, 0) << u3, u3 += 8;
            break;
          case 2:
          case 3:
            i5[s2] |= this._encodeShort(c7 * h3, 0) << u3, u3 += 16;
            break;
          case 4:
          case 5:
            {
              const t6 = this._encodeByte(c7 * h3, 0), e7 = this._encodeByte(c7 * h3, 8);
              i5[s2] |= t6 << u3, i5[s2] |= e7 << u3, u3 += 16;
            }
            break;
          case 6:
          case 7:
            i5[s2] |= this._encodeShort(c7 * h3, 0), i5[s2] |= this._encodeShort(c7 * h3, 16);
            break;
          case 8:
          case 9:
            i5[s2] |= this._encodeByte(c7 * h3, 0), i5[s2] |= this._encodeByte(c7 * h3, 8), i5[s2] |= this._encodeByte(c7 * h3, 16), i5[s2] |= this._encodeByte(c7 * h3, 24);
            break;
          case 10:
            i5[s2] = this._encodeColor(c7);
            break;
          case 11:
          case 12:
            this._encodePattern(s2, i5, c7);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        f2++;
      }
    }
    return i5;
  }
  getAtributeState(t5) {
    let e6 = 0;
    const o4 = 3 + 2 * t5;
    return e6 |= this._bit(o4), e6 |= this._bit(o4 + 1) << 1, e6;
  }
  static {
    this._encodingInfo = { 0: { dataType: R.BYTE, bytesPerElement: 1, count: 1, normalized: false }, 1: { dataType: R.UNSIGNED_BYTE, bytesPerElement: 1, count: 1, normalized: false }, 2: { dataType: R.SHORT, bytesPerElement: 2, count: 1, normalized: false }, 3: { dataType: R.UNSIGNED_SHORT, bytesPerElement: 2, count: 1, normalized: false }, 4: { dataType: R.BYTE, bytesPerElement: 1, count: 2, normalized: false }, 5: { dataType: R.UNSIGNED_BYTE, bytesPerElement: 1, count: 2, normalized: false }, 6: { dataType: R.SHORT, bytesPerElement: 2, count: 2, normalized: false }, 7: { dataType: R.UNSIGNED_SHORT, bytesPerElement: 2, count: 2, normalized: false }, 8: { dataType: R.BYTE, bytesPerElement: 1, count: 4, normalized: false }, 9: { dataType: R.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: false }, 10: { dataType: R.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: true }, 11: { dataType: R.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false }, 12: { dataType: R.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false } };
  }
  _getLayoutElementsForPropertyState(t5, e6, o4) {
    const r6 = o4[t5], n = r6.name, { count: s, dataType: a5, normalized: c5 } = _i._encodingInfo[r6.type], { attribueIdx: u3, precisionFactor: h2 } = r6, l3 = h2 || 1, y3 = [{ location: u3[0], name: n, propertyName: t5, count: s, type: a5, normalized: c5, precisionFactor: l3 }];
    if (this._precisionFactors[n] = l3, 2 === e6) {
      const e7 = `${n}To`;
      y3.push({ location: u3[1], name: e7, propertyName: t5, count: s, type: a5, normalized: c5, precisionFactor: l3 }), this._precisionFactors[e7] = l3;
    }
    return y3;
  }
  _buildMaterialInfo() {
    const t5 = [];
    this._propertyEncodingInfo = {};
    const e6 = {}, o4 = this.properties, r6 = this.propertyInfos;
    let n = -1;
    for (const i5 of o4) {
      n++;
      const o5 = r6[i5].name;
      e6[o5] = false, e6[`${o5}To`] = false;
      const s2 = this.getAtributeState(n);
      if (0 === s2 || 3 === s2) continue;
      const a5 = this._getLayoutElementsForPropertyState(i5, s2, r6);
      t5.push(...a5);
    }
    for (const i5 of t5) e6[i5.name] = true;
    const s = u(t5);
    this._buildLayout(s), this._buildShaderUniforms(), this._usedAttributes = e6;
  }
  _buildLayout(t5) {
    this.opacityLayout ? this._locations = t2([this.baseGeometryLayout, this.opacityLayout]) : this._locations = r(this.baseGeometryLayout);
    const e6 = this.baseGeometryLayout;
    let o4 = e6[0].stride;
    const i5 = [];
    let u3 = 0;
    for (const r6 of t5) u3 += a2(r6.type) * r6.count;
    o4 = c2(o4 + u3);
    for (const r6 of e6) i5.push(new t(r6.name, r6.count, r6.type, r6.offset, o4, r6.normalized));
    let h2 = 0;
    for (const r6 of t5) i5.push(new t(r6.name, r6.count, r6.type, e6[0].stride + h2, o4, r6.normalized)), void 0 === this._propertyEncodingInfo[r6.propertyName] && (this._propertyEncodingInfo[r6.propertyName] = []), this._propertyEncodingInfo[r6.propertyName].push({ offset: h2 }), h2 += a2(r6.type) * r6.count;
    this._ddStrideInBytes = h2, this._geometryLayout = i5;
    const l3 = this._locations;
    for (const r6 of t5) l3.set(r6.name, r6.location);
    this._stride = o4;
  }
  _buildShaderUniforms() {
    const t5 = [], e6 = this.properties, o4 = this.propertyInfos;
    let r6 = -1;
    for (const n of e6) {
      r6++;
      const { name: e7, type: s, isLayout: i5 } = o4[n];
      switch (this.getAtributeState(r6)) {
        case 0:
          t5.push({ name: e7, getValue: (t6, e8, o5, r7) => {
            const a5 = i5 ? t6.getLayoutValue(n, e8) : t6.getPaintValue(n, e8);
            switch (s) {
              case 11: {
                const o6 = t6.getDashKey(a5, t6.getLayoutValue("line-cap", e8)), n2 = r7.getMosaicItemPosition(o6, false);
                if (null == n2) return null;
                const { tl: s2, br: i6 } = n2;
                return [s2[0], i6[1], i6[0], s2[1]];
              }
              case 12: {
                const t7 = r7.getMosaicItemPosition(a5, !n.includes("line-"));
                if (null == t7) return null;
                const { tl: e9, br: o6 } = t7;
                return [e9[0], o6[1], o6[0], e9[1]];
              }
              case 10: {
                const t7 = a5[3];
                return [t7 * a5[0], t7 * a5[1], t7 * a5[2], t7];
              }
              default:
                return a5;
            }
          } });
          break;
        case 2: {
          const o5 = `${e7}Mix`;
          t5.push({ name: o5, getValue: (t6, e8, o6, r7) => (i5 ? t6.getLayoutProperty(n) : t6.getPaintProperty(n)).interpolator.interpolationUniformValue(o6, e8) });
        }
      }
    }
    this._uniforms = t5;
  }
  _bit(t5) {
    return (this._key & 1 << t5) >> t5;
  }
  _encodeColor(e6) {
    const o4 = 255 * e6[3];
    return m(e6[0] * o4, e6[1] * o4, e6[2] * o4, o4);
  }
  _encodePattern(t5, e6, o4) {
    if (!o4?.rect) return;
    const r6 = 2, n = o4.rect, s = o4.width, i5 = o4.height;
    e6[t5] = this._encodeShort(n.x + r6, 0), e6[t5] |= this._encodeShort(n.y + r6 + i5, 16), e6[t5 + 1] = this._encodeShort(n.x + r6 + s, 0), e6[t5 + 1] |= this._encodeShort(n.y + r6, 16);
  }
  _encodeByte(t5, e6) {
    return (255 & t5) << e6;
  }
  _encodeShort(t5, e6) {
    return (65535 & t5) << e6;
  }
};
var a2 = (t5) => {
  switch (t5) {
    case R.FLOAT:
    case R.INT:
    case R.UNSIGNED_INT:
      return 4;
    case R.SHORT:
    case R.UNSIGNED_SHORT:
    case R.HALF_FLOAT:
      return 2;
    case R.BYTE:
    case R.UNSIGNED_BYTE:
      return 1;
  }
};
var c2 = (t5) => t5 + 3 & -4;
function u(t5) {
  const o4 = o2(t5), r6 = [];
  let n = 0;
  for (const e6 of o4) r6.push(__spreadProps(__spreadValues({}, e6), { offset: n })), n += a2(e6.type) * e6.count;
  return r6;
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLBackgroundMaterial.js
var e2 = class _e extends i {
  static {
    this.ATTRIBUTES = ["background-color", "background-pattern"];
  }
  static {
    this.GEOMETRY_LAYOUT = [new t("position", 2, R.SHORT, 0, 4)];
  }
  static {
    this.ATTRIBUTES_INFO = { "background-color": { name: "background-color", type: 0, attribueIdx: [0, 1], isLayout: false }, "background-pattern": { name: "background-pattern", type: 0, attribueIdx: [1, 2], isLayout: false, isOptional: true } };
  }
  constructor(t5) {
    super(t5), this.baseGeometryLayout = _e.GEOMETRY_LAYOUT, this.properties = _e.ATTRIBUTES, this.propertyInfos = _e.ATTRIBUTES_INFO;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLCircleMaterial.js
var i2 = class _i extends i {
  static {
    this.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"];
  }
  static {
    this.GEOMETRY_LAYOUT = [new t("position", 2, R.SHORT, 0, 4)];
  }
  static {
    this.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: 1, attribueIdx: [1, 8] }, "circle-color": { name: "color", type: 10, attribueIdx: [2, 9] }, "circle-opacity": { name: "opacity", type: 1, attribueIdx: [3, 10], precisionFactor: 100 }, "circle-stroke-width": { name: "strokeWidth", type: 1, attribueIdx: [4, 11], precisionFactor: 4 }, "circle-stroke-color": { name: "strokeColor", type: 10, attribueIdx: [5, 12] }, "circle-stroke-opacity": { name: "strokeOpacity", type: 1, attribueIdx: [6, 13], precisionFactor: 100 }, "circle-blur": { name: "blur", type: 1, attribueIdx: [7, 14], precisionFactor: 32 } };
  }
  constructor(t5) {
    super(t5), this.baseGeometryLayout = _i.GEOMETRY_LAYOUT, this.properties = _i.ATTRIBUTES, this.propertyInfos = _i.ATTRIBUTES_INFO;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLFillMaterial.js
var e3 = class _e extends i {
  static {
    this.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"];
  }
  static {
    this.GEOMETRY_LAYOUT = [new t("position", 2, R.SHORT, 0, 4)];
  }
  static {
    this.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: 10, attribueIdx: [1, 4] }, "fill-opacity": { name: "opacity", type: 1, precisionFactor: 100, attribueIdx: [2, 5] }, "fill-pattern": { name: "tlbr", type: 12, isOptional: true, attribueIdx: [3, 3] } };
  }
  constructor(t5) {
    super(t5), this.baseGeometryLayout = _e.GEOMETRY_LAYOUT, this.properties = _e.ATTRIBUTES, this.propertyInfos = _e.ATTRIBUTES_INFO;
  }
};
var r2 = class _r extends i {
  static {
    this.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"];
  }
  static {
    this.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"];
  }
  static {
    this.GEOMETRY_LAYOUT = [new t("position", 2, R.SHORT, 0, 8), new t("offset", 2, R.BYTE, 4, 8), new t("normal", 2, R.BYTE, 6, 8)];
  }
  static {
    this.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: 10, attribueIdx: [3, 5] }, "fill-opacity": { name: "opacity", type: 1, precisionFactor: 100, attribueIdx: [4, 6] } };
  }
  static {
    this.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: 10, attribueIdx: [3, 5] }, "fill-opacity": { name: "opacity", type: 1, precisionFactor: 100, attribueIdx: [4, 6] } };
  }
  constructor(t5, i5) {
    super(t5), this.baseGeometryLayout = _r.GEOMETRY_LAYOUT, this.properties = i5 ? _r.ATTRIBUTES_FILL : _r.ATTRIBUTES_OUTLINE, this.propertyInfos = i5 ? _r.ATTRIBUTES_INFO_FILL : _r.ATTRIBUTES_INFO_OUTLINE;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLLineMaterial.js
var r3 = class _r extends i {
  static {
    this.ATTRIBUTES = ["line-color", "line-width", "line-opacity", "line-blur", "line-offset", "line-pattern", "line-dasharray"];
  }
  static {
    this.GEOMETRY_LAYOUT = [new t("position", 2, R.SHORT, 0, 16), new t("extrudeOffset", 4, R.BYTE, 4, 16), new t("directionNormal", 4, R.BYTE, 8, 16), new t("accumulatedDistance", 2, R.UNSIGNED_SHORT, 12, 16)];
  }
  static {
    this.ATTRIBUTES_INFO = { "line-color": { name: "color", type: 10, attribueIdx: [4, 10] }, "line-width": { name: "width", type: 1, attribueIdx: [5, 11], precisionFactor: 2 }, "line-opacity": { name: "opacity", type: 1, attribueIdx: [6, 12], precisionFactor: 100 }, "line-blur": { name: "blur", type: 1, attribueIdx: [7, 13], precisionFactor: 4 }, "line-offset": { name: "offset", type: 0, attribueIdx: [8, 14], precisionFactor: 2 }, "line-pattern": { name: "tlbr", type: 12, attribueIdx: [9, 9], isOptional: true }, "line-dasharray": { name: "tlbr", type: 11, attribueIdx: [9, 9], isOptional: true } };
  }
  constructor(t5) {
    super(t5), this.baseGeometryLayout = _r.GEOMETRY_LAYOUT, this.properties = _r.ATTRIBUTES, this.propertyInfos = _r.ATTRIBUTES_INFO;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLSymbolMaterial.js
var i3 = [new t("positionAndOffset", 4, R.SHORT, 0, 16), new t("iconInfo", 4, R.UNSIGNED_SHORT, 8, 16)];
var a3 = [new t("opacityInfo", 1, R.UNSIGNED_BYTE, 0, 1)];
var r4 = class _r extends i {
  static {
    this.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"];
  }
  static {
    this.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: 10, attribueIdx: [2, 8] }, "icon-opacity": { name: "opacity", type: 1, precisionFactor: 100, attribueIdx: [3, 9] }, "icon-halo-color": { name: "haloColor", type: 10, attribueIdx: [4, 10] }, "icon-halo-width": { name: "haloWidth", type: 1, precisionFactor: 4, attribueIdx: [5, 11] }, "icon-halo-blur": { name: "haloBlur", type: 1, precisionFactor: 4, attribueIdx: [6, 12] }, "icon-size": { name: "size", type: 1, precisionFactor: 32, isLayout: true, attribueIdx: [7, 13] } };
  }
  constructor(t5) {
    super(t5), this.baseGeometryLayout = i3, this.opacityLayout = a3, this.properties = _r.ATTRIBUTES, this.propertyInfos = _r.ATTRIBUTES_INFO;
  }
};
var c3 = class _c extends i {
  static {
    this.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"];
  }
  static {
    this.ATTRIBUTES_INFO = { "text-color": { name: "color", type: 10, attribueIdx: [4, 10] }, "text-opacity": { name: "opacity", type: 1, precisionFactor: 100, attribueIdx: [3, 9] }, "text-halo-color": { name: "haloColor", type: 10, attribueIdx: [5, 11] }, "text-halo-width": { name: "haloWidth", type: 1, precisionFactor: 4, attribueIdx: [6, 12] }, "text-halo-blur": { name: "haloBlur", type: 1, precisionFactor: 4, attribueIdx: [7, 13] }, "text-size": { name: "size", type: 1, isLayout: true, attribueIdx: [2, 8] } };
  }
  constructor(t5) {
    super(t5), this.baseGeometryLayout = i3, this.opacityLayout = a3, this.properties = _c.ATTRIBUTES, this.propertyInfos = _c.ATTRIBUTES_INFO;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js
var r5 = { kind: "null" };
var e4 = { kind: "number" };
var t3 = { kind: "string" };
var i4 = { kind: "boolean" };
var o3 = { kind: "color" };
var f = { kind: "object" };
var u2 = { kind: "value" };
function a4(n, r6) {
  return { kind: "array", itemType: n, n: r6 };
}
var y = [r5, e4, t3, i4, o3, f, a4(u2)];
function k(n) {
  if ("array" === n.kind) {
    const r6 = k(n.itemType);
    return "number" == typeof n.n ? `array<${r6}, ${n.n}>` : "value" === n.itemType.kind ? "array" : `array<${r6}>`;
  }
  return n.kind;
}
function l(y3) {
  if (null === y3) return r5;
  if ("string" == typeof y3) return t3;
  if ("boolean" == typeof y3) return i4;
  if ("number" == typeof y3) return e4;
  if (y3 instanceof g) return o3;
  if (Array.isArray(y3)) {
    let n;
    for (const r6 of y3) {
      const e6 = l(r6);
      if (n) {
        if (n !== e6) {
          n = u2;
          break;
        }
      } else n = e6;
    }
    return a4(n || u2, y3.length);
  }
  return "object" == typeof y3 ? f : u2;
}
function c4(n, r6) {
  if ("array" === r6.kind) return "array" === n.kind && (0 === n.n && "value" === n.itemType.kind || c4(n.itemType, r6.itemType)) && ("number" != typeof r6.n || r6.n === n.n);
  if ("value" === r6.kind) {
    for (const e6 of y) if (c4(n, e6)) return true;
  }
  return r6.kind === n.kind;
}
function d2(r6) {
  if (null === r6) return "";
  const e6 = typeof r6;
  return "string" === e6 ? r6 : "number" === e6 || "boolean" === e6 ? String(r6) : r6 instanceof g ? r6.toString() : JSON.stringify(r6);
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/expression.js
var y2 = class {
  constructor(t5) {
    this._parent = t5, this._vars = {};
  }
  add(t5, e6) {
    this._vars[t5] = e6;
  }
  get(t5) {
    return this._vars[t5] ? this._vars[t5] : this._parent ? this._parent.get(t5) : null;
  }
};
var _ = class __ {
  constructor() {
    this.type = u2;
  }
  static parse(t5) {
    if (t5.length > 1) throw new Error('"id" does not expect arguments');
    return new __();
  }
  evaluate(t5, e6) {
    return t5?.id;
  }
};
var v = class _v {
  constructor() {
    this.type = t3;
  }
  static parse(t5) {
    if (t5.length > 1) throw new Error('"geometry-type" does not expect arguments');
    return new _v();
  }
  evaluate(t5, e6) {
    if (!t5) return null;
    switch (t5.type) {
      case 1:
        return "Point";
      case 2:
        return "LineString";
      case 3:
        return "Polygon";
      default:
        return null;
    }
  }
};
var b2 = class _b {
  constructor() {
    this.type = f;
  }
  static parse(t5) {
    if (t5.length > 1) throw new Error('"properties" does not expect arguments');
    return new _b();
  }
  evaluate(t5, e6) {
    return t5?.values;
  }
};
var d3 = class _d {
  constructor() {
    this.type = e4;
  }
  static parse(t5) {
    if (t5.length > 1) throw new Error('"zoom" does not expect arguments');
    return new _d();
  }
  evaluate(t5, e6) {
    return e6;
  }
};
var x = class _x {
  constructor(t5, e6, r6) {
    this._lhs = t5, this._rhs = e6, this._compare = r6, this.type = i4;
  }
  static parse(t5, e6, r6) {
    if (3 !== t5.length && 4 !== t5.length) throw new Error(`"${t5[0]}" expects 2 or 3 arguments`);
    if (4 === t5.length) throw new Error(`"${t5[0]}" collator not supported`);
    return new _x(pt(t5[1], e6), pt(t5[2], e6), r6);
  }
  evaluate(t5, e6) {
    return this._compare(this._lhs.evaluate(t5, e6), this._rhs.evaluate(t5, e6));
  }
};
var E = class extends x {
  static parse(t5, e6) {
    return x.parse(t5, e6, (t6, e7) => t6 === e7);
  }
};
var $ = class extends x {
  static parse(t5, e6) {
    return x.parse(t5, e6, (t6, e7) => t6 !== e7);
  }
};
var M = class extends x {
  static parse(t5, e6) {
    return x.parse(t5, e6, (t6, e7) => t6 < e7);
  }
};
var k2 = class extends x {
  static parse(t5, e6) {
    return x.parse(t5, e6, (t6, e7) => t6 <= e7);
  }
};
var A = class extends x {
  static parse(t5, e6) {
    return x.parse(t5, e6, (t6, e7) => t6 > e7);
  }
};
var j = class extends x {
  static parse(t5, e6) {
    return x.parse(t5, e6, (t6, e7) => t6 >= e7);
  }
};
var q2 = class _q {
  constructor(t5) {
    this._arg = t5, this.type = i4;
  }
  static parse(t5, e6) {
    if (2 !== t5.length) throw new Error('"!" expects 1 argument');
    return new _q(pt(t5[1], e6));
  }
  evaluate(t5, e6) {
    return !this._arg.evaluate(t5, e6);
  }
};
var N2 = class _N {
  constructor(t5) {
    this._args = t5, this.type = i4;
  }
  static parse(t5, e6) {
    const r6 = [];
    for (let s = 1; s < t5.length; s++) r6.push(pt(t5[s], e6));
    return new _N(r6);
  }
  evaluate(t5, e6) {
    for (const r6 of this._args) if (!r6.evaluate(t5, e6)) return false;
    return true;
  }
};
var R2 = class _R {
  constructor(t5) {
    this._args = t5, this.type = i4;
  }
  static parse(t5, e6) {
    const r6 = [];
    for (let s = 1; s < t5.length; s++) r6.push(pt(t5[s], e6));
    return new _R(r6);
  }
  evaluate(t5, e6) {
    for (const r6 of this._args) if (r6.evaluate(t5, e6)) return true;
    return false;
  }
};
var C2 = class _C {
  constructor(t5) {
    this._args = t5, this.type = i4;
  }
  static parse(t5, e6) {
    const r6 = [];
    for (let s = 1; s < t5.length; s++) r6.push(pt(t5[s], e6));
    return new _C(r6);
  }
  evaluate(t5, e6) {
    for (const r6 of this._args) if (r6.evaluate(t5, e6)) return false;
    return true;
  }
};
var z = class _z {
  constructor(t5, e6, r6) {
    this.type = t5, this._args = e6, this._fallback = r6;
  }
  static parse(t5, e6, r6) {
    if (t5.length < 4) throw new Error('"case" expects at least 3 arguments');
    if (t5.length % 2 == 1) throw new Error('"case" expects an odd number of arguments');
    let s;
    const n = [];
    for (let o4 = 1; o4 < t5.length - 1; o4 += 2) {
      const a6 = pt(t5[o4], e6), i5 = pt(t5[o4 + 1], e6, r6);
      s || (s = i5.type), n.push({ condition: a6, output: i5 });
    }
    const a5 = pt(t5[t5.length - 1], e6, r6);
    return s || (s = a5.type), new _z(s, n, a5);
  }
  evaluate(t5, e6) {
    for (const r6 of this._args) if (r6.condition.evaluate(t5, e6)) return r6.output.evaluate(t5, e6);
    return this._fallback.evaluate(t5, e6);
  }
};
var I2 = class _I {
  constructor(t5, e6) {
    this.type = t5, this._args = e6;
  }
  static parse(t5, e6) {
    if (t5.length < 2) throw new Error('"coalesce" expects at least 1 argument');
    let r6;
    const s = [];
    for (let n = 1; n < t5.length; n++) {
      const a5 = pt(t5[n], e6);
      r6 || (r6 = a5.type), s.push(a5);
    }
    return new _I(r6, s);
  }
  evaluate(t5, e6) {
    for (const r6 of this._args) {
      const s = r6.evaluate(t5, e6);
      if (null !== s) return s;
    }
    return null;
  }
};
var L = class _L {
  constructor(t5, e6, r6, s, n) {
    this.type = t5, this._input = e6, this._labels = r6, this._outputs = s, this._fallback = n;
  }
  static parse(t5, e6) {
    if (t5.length < 3) throw new Error('"match" expects at least 3 arguments');
    if (t5.length % 2 == 0) throw new Error('"case" expects an even number of arguments');
    let r6;
    const s = pt(t5[1], e6), n = [], a5 = {};
    let o4;
    for (let i5 = 2; i5 < t5.length - 1; i5 += 2) {
      let s2 = t5[i5];
      Array.isArray(s2) || (s2 = [s2]);
      for (const t6 of s2) {
        const e7 = typeof t6;
        if ("string" !== e7 && "number" !== e7) throw new Error('"match" requires string or number literal as labels');
        if (o4) {
          if (e7 !== o4) throw new Error('"match" requires labels to have the same type');
        } else o4 = e7;
        a5[t6] = n.length;
      }
      const l3 = pt(t5[i5 + 1], e6);
      r6 || (r6 = l3.type), n.push(l3);
    }
    return new _L(r6, s, a5, n, pt(t5[t5.length - 1], e6));
  }
  evaluate(t5, e6) {
    const r6 = this._input.evaluate(t5, e6);
    return (this._outputs[this._labels[r6]] || this._fallback).evaluate(t5, e6);
  }
};
var U = class _U {
  constructor(t5, e6, r6, s, n) {
    this._operator = t5, this.type = e6, this.interpolation = r6, this.input = s, this._stops = n;
  }
  static parse(t5, e6, r6) {
    const s = t5[0];
    if (t5.length < 5) throw new Error(`"${s}" expects at least 4 arguments`);
    const n = t5[1];
    if (!Array.isArray(n) || 0 === n.length) throw new Error(`"${n}" is not a valid interpolation`);
    switch (n[0]) {
      case "linear":
        if (1 !== n.length) throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (2 !== n.length || "number" != typeof n[1]) throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (5 !== n.length) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let t6 = 1; t6 < 5; t6++) {
          const e7 = n[t6];
          if ("number" != typeof e7 || e7 < 0 || e7 > 1) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t5[0]}" unknown interpolation type "${n[0]}"`);
    }
    if (t5.length % 2 != 1) throw new Error(`"${s}" expects an even number of arguments`);
    const a5 = pt(t5[2], e6, e4);
    let o4;
    "interpolate-hcl" === s || "interpolate-lab" === s ? o4 = o3 : r6 && "value" !== r6.kind && (o4 = r6);
    const l3 = [];
    for (let i5 = 3; i5 < t5.length; i5 += 2) {
      const r7 = t5[i5];
      if ("number" != typeof r7) throw new Error(`"${s}" requires stop inputs as literal numbers`);
      if (l3.length && l3[l3.length - 1][0] >= r7) throw new Error(`"${s}" requires strictly ascending stop inputs`);
      const n2 = pt(t5[i5 + 1], e6, o4);
      o4 || (o4 = n2.type), l3.push([r7, n2]);
    }
    if (o4 && o4 !== o3 && o4 !== e4 && ("array" !== o4.kind || o4.itemType !== e4)) throw new Error(`"${s}" cannot interpolate type ${k(o4)}`);
    return new _U(s, o4, n, a5, l3);
  }
  evaluate(n, o4) {
    const i5 = this._stops;
    if (1 === i5.length) return i5[0][1].evaluate(n, o4);
    const l3 = this.input.evaluate(n, o4);
    if (l3 <= i5[0][0]) return i5[0][1].evaluate(n, o4);
    if (l3 >= i5[i5.length - 1][0]) return i5[i5.length - 1][1].evaluate(n, o4);
    let u3 = 0;
    for (; ++u3 < i5.length && !(l3 < i5[u3][0]); ) ;
    const c5 = i5[u3 - 1][0], h2 = i5[u3][0], g2 = _U.interpolationRatio(this.interpolation, l3, c5, h2), f2 = i5[u3 - 1][1].evaluate(n, o4), w = i5[u3][1].evaluate(n, o4);
    if ("interpolate" === this._operator) {
      if ("array" === this.type.kind && Array.isArray(f2) && Array.isArray(w)) return f2.map((t5, e6) => p(t5, w[e6], g2));
      if ("color" === this.type.kind && f2 instanceof g && w instanceof g) {
        const e6 = new g(f2), r6 = new g(w);
        return new g([p(e6.r, r6.r, g2), p(e6.g, r6.g, g2), p(e6.b, r6.b, g2), p(e6.a, r6.a, g2)]);
      }
      if ("number" === this.type.kind && "number" == typeof f2 && "number" == typeof w) return p(f2, w, g2);
      throw new Error(`"${this._operator}" cannot interpolate type ${k(this.type)}`);
    }
    if ("interpolate-hcl" === this._operator) {
      const s = B(f2), n2 = B(w), o5 = n2.h - s.h, i6 = C({ h: s.h + g2 * (o5 > 180 || o5 < -180 ? o5 - 360 * Math.round(o5 / 360) : o5), c: p(s.c, n2.c, g2), l: p(s.l, n2.l, g2) });
      return new g(__spreadValues({ a: p(f2.a, w.a, g2) }, i6));
    }
    if ("interpolate-lab" === this._operator) {
      const e6 = q(f2), n2 = q(w), o5 = C({ l: p(e6.l, n2.l, g2), a: p(e6.a, n2.a, g2), b: p(e6.b, n2.b, g2) });
      return new g(__spreadValues({ a: p(f2.a, w.a, g2) }, o5));
    }
    throw new Error(`Unexpected operator "${this._operator}"`);
  }
  interpolationUniformValue(t5, e6) {
    const r6 = this._stops;
    if (1 === r6.length) return 0;
    if (t5 >= r6[r6.length - 1][0]) return 0;
    let s = 0;
    for (; ++s < r6.length && !(t5 < r6[s][0]); ) ;
    const n = r6[s - 1][0], a5 = r6[s][0];
    return _U.interpolationRatio(this.interpolation, e6, n, a5);
  }
  getInterpolationRange(t5) {
    const e6 = this._stops;
    if (1 === e6.length) {
      const t6 = e6[0][0];
      return [t6, t6];
    }
    const r6 = e6[e6.length - 1][0];
    if (t5 >= r6) return [r6, r6];
    let s = 0;
    for (; ++s < e6.length && !(t5 < e6[s][0]); ) ;
    return [e6[s - 1][0], e6[s][0]];
  }
  static interpolationRatio(t5, e6, r6, s) {
    let a5 = 0;
    if ("linear" === t5[0]) a5 = _U._exponentialInterpolationRatio(e6, 1, r6, s);
    else if ("exponential" === t5[0]) a5 = _U._exponentialInterpolationRatio(e6, t5[1], r6, s);
    else if ("cubic-bezier" === t5[0]) {
      a5 = e(t5[1], t5[2], t5[3], t5[4])(_U._exponentialInterpolationRatio(e6, 1, r6, s), 1e-5);
    }
    return a5 < 0 ? a5 = 0 : a5 > 1 && (a5 = 1), a5;
  }
  static _exponentialInterpolationRatio(t5, e6, r6, s) {
    const n = s - r6;
    if (0 === n) return 0;
    const a5 = t5 - r6;
    return 1 === e6 ? a5 / n : (e6 ** a5 - 1) / (e6 ** n - 1);
  }
};
var B2 = class _B {
  constructor(t5, e6, r6) {
    this.type = t5, this._input = e6, this._stops = r6;
  }
  static parse(t5, e6) {
    if (t5.length < 5) throw new Error('"step" expects at least 4 arguments');
    if (t5.length % 2 != 1) throw new Error('"step" expects an even number of arguments');
    const r6 = pt(t5[1], e6, e4);
    let s;
    const n = [];
    n.push([-1 / 0, pt(t5[2], e6)]);
    for (let a5 = 3; a5 < t5.length; a5 += 2) {
      const r7 = t5[a5];
      if ("number" != typeof r7) throw new Error('"step" requires stop inputs as literal numbers');
      if (n.length && n[n.length - 1][0] >= r7) throw new Error('"step" requires strictly ascending stop inputs');
      const o4 = pt(t5[a5 + 1], e6);
      s || (s = o4.type), n.push([r7, o4]);
    }
    return new _B(s, r6, n);
  }
  evaluate(t5, e6) {
    const r6 = this._stops;
    if (1 === r6.length) return r6[0][1].evaluate(t5, e6);
    const s = this._input.evaluate(t5, e6);
    let n = 0;
    for (; ++n < r6.length && !(s < r6[n][0]); ) ;
    return this._stops[n - 1][1].evaluate(t5, e6);
  }
};
var S = class _S {
  constructor(t5, e6) {
    this.type = t5, this._output = e6;
  }
  static parse(t5, e6, r6) {
    if (t5.length < 4) throw new Error('"let" expects at least 3 arguments');
    if (t5.length % 2 == 1) throw new Error('"let" expects an odd number of arguments');
    const s = new y2(e6);
    for (let a5 = 1; a5 < t5.length - 1; a5 += 2) {
      const r7 = t5[a5];
      if ("string" != typeof r7) throw new Error(`"let" requires a string to define variable names - found ${r7}`);
      s.add(r7, pt(t5[a5 + 1], e6));
    }
    const n = pt(t5[t5.length - 1], s, r6);
    return new _S(n.type, n);
  }
  evaluate(t5, e6) {
    return this._output.evaluate(t5, e6);
  }
};
var P2 = class _P {
  constructor(t5, e6) {
    this.type = t5, this.output = e6;
  }
  static parse(t5, e6, r6) {
    if (2 !== t5.length || "string" != typeof t5[1]) throw new Error('"var" requires just one literal string argument');
    const s = e6.get(t5[1]);
    if (!s) throw new Error(`${t5[1]} must be defined before being used in a "var" expression`);
    return new _P(r6 || u2, s);
  }
  evaluate(t5, e6) {
    return this.output.evaluate(t5, e6);
  }
};
var O = class _O {
  constructor(t5, e6, r6) {
    this.type = t5, this._index = e6, this._array = r6;
  }
  static parse(t5, e6) {
    if (3 !== t5.length) throw new Error('"at" expects 2 arguments');
    const r6 = pt(t5[1], e6, e4), s = pt(t5[2], e6);
    return new _O(s.type.itemType, r6, s);
  }
  evaluate(t5, e6) {
    const r6 = this._index.evaluate(t5, e6), s = this._array.evaluate(t5, e6);
    if (r6 < 0 || r6 >= s.length) throw new Error('"at" index out of bounds');
    if (r6 !== Math.floor(r6)) throw new Error('"at" index must be an integer');
    return s[r6];
  }
};
var T = class _T {
  constructor(t5) {
    this._args = t5, this.type = u2;
  }
  static parse(t5, e6) {
    const r6 = t5.slice(1).map((t6) => Array.isArray(t6) ? pt(t6, e6) : t6);
    return new _T(r6);
  }
  evaluate(t5, e6) {
    const r6 = (t6, e7) => Array.from({ length: t6.length / 2 }, (r7, s2) => e7(t6[2 * s2], t6[2 * s2 + 1])), s = (t6, e7) => t6;
    let n;
    return this._args && (n = this._args.map((r7) => r7 && r7.evaluate ? r7.evaluate(t5, e6) : r7)), !n || n.length < 2 && n.length % 2 == 1 ? "" : r6(n, s).join();
  }
};
var F = class _F {
  constructor(t5, e6) {
    this._key = t5, this._obj = e6, this.type = u2;
  }
  static parse(t5, e6) {
    let r6, s;
    switch (t5.length) {
      case 2:
        return r6 = pt(t5[1], e6), new _F(r6);
      case 3:
        return r6 = pt(t5[1], e6), s = pt(t5[2], e6), new _F(r6, s);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t5, e6) {
    const r6 = this._key.evaluate(t5, e6);
    if (this._obj) {
      return this._obj.evaluate(t5, e6)[r6];
    }
    return t5?.values[r6];
  }
};
var G = class _G {
  constructor(t5, e6) {
    this._key = t5, this._obj = e6, this.type = i4;
  }
  static parse(t5, e6) {
    let r6, s;
    switch (t5.length) {
      case 2:
        return r6 = pt(t5[1], e6), new _G(r6);
      case 3:
        return r6 = pt(t5[1], e6), s = pt(t5[2], e6), new _G(r6, s);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t5, e6) {
    const r6 = this._key.evaluate(t5, e6);
    if (this._obj) {
      return r6 in this._obj.evaluate(t5, e6);
    }
    return !!t5?.values[r6];
  }
};
var V = class _V {
  constructor(t5, e6) {
    this._key = t5, this._vals = e6, this.type = i4;
  }
  static parse(t5, e6) {
    if (3 !== t5.length) throw new Error('"in" expects 2 arguments');
    return new _V(pt(t5[1], e6), pt(t5[2], e6));
  }
  evaluate(t5, e6) {
    const r6 = this._key.evaluate(t5, e6);
    return this._vals.evaluate(t5, e6).includes(r6);
  }
};
var D = class _D {
  constructor(t5, e6, r6) {
    this._item = t5, this._array = e6, this._from = r6, this.type = e4;
  }
  static parse(t5, e6) {
    if (t5.length < 3 || t5.length > 4) throw new Error('"index-of" expects 3 or 4 arguments');
    const r6 = pt(t5[1], e6), s = pt(t5[2], e6);
    if (4 === t5.length) {
      const n = pt(t5[3], e6, e4);
      return new _D(r6, s, n);
    }
    return new _D(r6, s);
  }
  evaluate(t5, e6) {
    const r6 = this._item.evaluate(t5, e6), s = this._array.evaluate(t5, e6);
    if (this._from) {
      const n = this._from.evaluate(t5, e6);
      if (n !== Math.floor(n)) throw new Error('"index-of" index must be an integer');
      return s.indexOf(r6, n);
    }
    return s.indexOf(r6);
  }
};
var H = class _H {
  constructor(t5) {
    this._arg = t5, this.type = e4;
  }
  static parse(t5, e6) {
    if (2 !== t5.length) throw new Error('"length" expects 2 arguments');
    const r6 = pt(t5[1], e6);
    return new _H(r6);
  }
  evaluate(t5, e6) {
    const r6 = this._arg.evaluate(t5, e6);
    if ("string" == typeof r6) return r6.length;
    if (Array.isArray(r6)) return r6.length;
    throw new Error('"length" expects string or array');
  }
};
var J = class _J {
  constructor(t5, e6, r6, s) {
    this.type = t5, this._array = e6, this._from = r6, this._to = s;
  }
  static parse(t5, e6) {
    if (t5.length < 3 || t5.length > 4) throw new Error('"slice" expects 2 or 3 arguments');
    const r6 = pt(t5[1], e6), s = pt(t5[2], e6, e4);
    if (s.type !== e4) throw new Error('"slice" index must return a number');
    if (4 === t5.length) {
      const n = pt(t5[3], e6, e4);
      if (n.type !== e4) throw new Error('"slice" index must return a number');
      return new _J(r6.type, r6, s, n);
    }
    return new _J(r6.type, r6, s);
  }
  evaluate(t5, e6) {
    const r6 = this._array.evaluate(t5, e6);
    if (!Array.isArray(r6) && "string" != typeof r6) throw new Error('"slice" input must be an array or a string');
    const s = this._from.evaluate(t5, e6);
    if (s < 0 || s >= r6.length) throw new Error('"slice" index out of bounds');
    if (s !== Math.floor(s)) throw new Error('"slice" index must be an integer');
    if (this._to) {
      const n = this._to.evaluate(t5, e6);
      if (n < 0 || n >= r6.length) throw new Error('"slice" index out of bounds');
      if (n !== Math.floor(n)) throw new Error('"slice" index must be an integer');
      return r6.slice(s, n);
    }
    return r6.slice(s);
  }
};
var K = class _K {
  constructor() {
    this.type = i4;
  }
  static parse(t5) {
    if (1 !== t5.length) throw new Error('"has-id" expects no arguments');
    return new _K();
  }
  evaluate(t5, e6) {
    return void 0 !== t5?.id;
  }
};
var Q = class _Q {
  constructor(t5, e6) {
    this._args = t5, this._calculate = e6, this.type = e4;
  }
  static parse(t5, e6, r6) {
    const s = t5.slice(1).map((t6) => pt(t6, e6));
    return new _Q(s, r6);
  }
  evaluate(t5, e6) {
    let r6;
    return this._args && (r6 = this._args.map((r7) => r7.evaluate(t5, e6))), this._calculate(r6);
  }
};
var W = class extends Q {
  static parse(t5, e6) {
    switch (t5.length) {
      case 2:
        return Q.parse(t5, e6, (t6) => -t6[0]);
      case 3:
        return Q.parse(t5, e6, (t6) => t6[0] - t6[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
};
var X = class extends Q {
  static parse(t5, e6) {
    return Q.parse(t5, e6, (t6) => {
      let e7 = 1;
      for (const r6 of t6) e7 *= r6;
      return e7;
    });
  }
};
var Y = class extends Q {
  static parse(t5, e6) {
    if (3 === t5.length) return Q.parse(t5, e6, (t6) => t6[0] / t6[1]);
    throw new Error('"/" expects 2 arguments');
  }
};
var Z2 = class extends Q {
  static parse(t5, e6) {
    if (3 === t5.length) return Q.parse(t5, e6, (t6) => t6[0] % t6[1]);
    throw new Error('"%" expects 2 arguments');
  }
};
var tt = class extends Q {
  static parse(t5, e6) {
    if (3 === t5.length) return Q.parse(t5, e6, (t6) => t6[0] ** t6[1]);
    throw new Error('"^" expects 1 or 2 arguments');
  }
};
var et = class extends Q {
  static parse(t5, e6) {
    return Q.parse(t5, e6, (t6) => {
      let e7 = 0;
      for (const r6 of t6) e7 += r6;
      return e7;
    });
  }
};
var rt = class _rt {
  constructor(t5, e6) {
    this._args = t5, this._calculate = e6, this.type = e4;
  }
  static {
    this.ops = { abs: (t5) => Math.abs(t5[0]), acos: (t5) => Math.acos(t5[0]), asin: (t5) => Math.asin(t5[0]), atan: (t5) => Math.atan(t5[0]), ceil: (t5) => Math.ceil(t5[0]), cos: (t5) => Math.cos(t5[0]), e: () => Math.E, floor: (t5) => Math.floor(t5[0]), ln: (t5) => Math.log(t5[0]), ln2: () => Math.LN2, log10: (t5) => Math.log(t5[0]) / Math.LN10, log2: (t5) => Math.log(t5[0]) / Math.LN2, max: (t5) => Math.max(...t5), min: (t5) => Math.min(...t5), pi: () => Math.PI, round: (t5) => Math.round(t5[0]), sin: (t5) => Math.sin(t5[0]), sqrt: (t5) => Math.sqrt(t5[0]), tan: (t5) => Math.tan(t5[0]) };
  }
  static parse(t5, e6) {
    const r6 = t5.slice(1).map((t6) => pt(t6, e6));
    return new _rt(r6, _rt.ops[t5[0]]);
  }
  evaluate(t5, e6) {
    let r6;
    return this._args && (r6 = this._args.map((r7) => r7.evaluate(t5, e6))), this._calculate(r6);
  }
};
var st = class _st {
  constructor(t5) {
    this._args = t5, this.type = t3;
  }
  static parse(t5, e6) {
    return new _st(t5.slice(1).map((t6) => pt(t6, e6)));
  }
  evaluate(t5, e6) {
    return this._args.map((r6) => r6.evaluate(t5, e6)).join("");
  }
};
var nt = class _nt {
  constructor(t5, e6) {
    this._arg = t5, this._calculate = e6, this.type = t3;
  }
  static {
    this.ops = { downcase: (t5) => t5.toLowerCase(), upcase: (t5) => t5.toUpperCase() };
  }
  static parse(t5, e6) {
    if (2 !== t5.length) throw new Error(`${t5[0]} expects 1 argument`);
    const r6 = pt(t5[1], e6);
    return new _nt(r6, _nt.ops[t5[0]]);
  }
  evaluate(t5, e6) {
    return this._calculate(this._arg.evaluate(t5, e6));
  }
};
var at = class _at {
  constructor(t5) {
    this._args = t5, this.type = o3;
  }
  static parse(t5, e6) {
    if (4 !== t5.length) throw new Error('"rgb" expects 3 arguments');
    const r6 = t5.slice(1).map((t6) => pt(t6, e6));
    return new _at(r6);
  }
  evaluate(e6, r6) {
    const s = this._validate(this._args[0].evaluate(e6, r6)), n = this._validate(this._args[1].evaluate(e6, r6)), a5 = this._validate(this._args[2].evaluate(e6, r6));
    return new g({ r: s, g: n, b: a5 });
  }
  _validate(t5) {
    if ("number" != typeof t5 || t5 < 0 || t5 > 255) throw new Error(`${t5}: invalid color component`);
    return Math.round(t5);
  }
};
var ot = class _ot {
  constructor(t5) {
    this._args = t5, this.type = o3;
  }
  static parse(t5, e6) {
    if (5 !== t5.length) throw new Error('"rgba" expects 4 arguments');
    const r6 = t5.slice(1).map((t6) => pt(t6, e6));
    return new _ot(r6);
  }
  evaluate(e6, r6) {
    const s = this._validate(this._args[0].evaluate(e6, r6)), n = this._validate(this._args[1].evaluate(e6, r6)), a5 = this._validate(this._args[2].evaluate(e6, r6)), o4 = this._validateAlpha(this._args[3].evaluate(e6, r6));
    return new g({ r: s, g: n, b: a5, a: o4 });
  }
  _validate(t5) {
    if ("number" != typeof t5 || t5 < 0 || t5 > 255) throw new Error(`${t5}: invalid color component`);
    return Math.round(t5);
  }
  _validateAlpha(t5) {
    if ("number" != typeof t5 || t5 < 0 || t5 > 1) throw new Error(`${t5}: invalid alpha color component`);
    return t5;
  }
};
var it = class _it {
  constructor(t5) {
    this._color = t5, this.type = a4(e4, 4);
  }
  static parse(t5, e6) {
    if (2 !== t5.length) throw new Error('"to-rgba" expects 1 argument');
    const r6 = pt(t5[1], e6);
    return new _it(r6);
  }
  evaluate(e6, r6) {
    return new g(this._color.evaluate(e6, r6)).toRgba();
  }
};
var lt = class _lt {
  constructor(t5, e6) {
    this.type = t5, this._args = e6;
  }
  static parse(t5, e6) {
    const r6 = t5[0];
    if (t5.length < 2) throw new Error(`${r6} expects at least one argument`);
    let s, n = 1;
    if ("array" === r6) {
      if (t5.length > 2) {
        switch (t5[1]) {
          case "string":
            s = t3;
            break;
          case "number":
            s = e4;
            break;
          case "boolean":
            s = i4;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        n++;
      } else s = u2;
      let e7;
      if (t5.length > 3) {
        if (e7 = t5[2], null !== e7 && ("number" != typeof e7 || e7 < 0 || e7 !== Math.floor(e7))) throw new Error('"array" length argument must be a positive integer literal');
        n++;
      }
      s = a4(s, e7);
    } else switch (r6) {
      case "string":
        s = t3;
        break;
      case "number":
        s = e4;
        break;
      case "boolean":
        s = i4;
        break;
      case "object":
        s = f;
    }
    const a5 = [];
    for (; n < t5.length; n++) {
      const r7 = pt(t5[n], e6);
      a5.push(r7);
    }
    return new _lt(s, a5);
  }
  evaluate(t5, e6) {
    let r6;
    for (const s of this._args) {
      const n = s.evaluate(t5, e6);
      if (r6 = l(n), c4(r6, this.type)) return n;
    }
    throw new Error(`Expected ${k(this.type)} but got ${k(r6)}`);
  }
};
var ut = class _ut {
  static {
    this.types = { "to-boolean": i4, "to-color": o3, "to-number": e4, "to-string": t3 };
  }
  constructor(t5, e6) {
    this.type = t5, this._args = e6;
  }
  static parse(t5, e6) {
    const r6 = t5[0], s = _ut.types[r6];
    if (s === i4 || s === t3) {
      if (2 !== t5.length) throw new Error(`${r6} expects one argument`);
    } else if (t5.length < 2) throw new Error(`${r6} expects at least one argument`);
    const n = [];
    for (let a5 = 1; a5 < t5.length; a5++) {
      const r7 = pt(t5[a5], e6);
      n.push(r7);
    }
    return new _ut(s, n);
  }
  evaluate(e6, r6) {
    if (this.type === i4) return Boolean(this._args[0].evaluate(e6, r6));
    if (this.type === t3) return d2(this._args[0].evaluate(e6, r6));
    if (this.type === e4) {
      for (const t5 of this._args) {
        const s = Number(t5.evaluate(e6, r6));
        if (!isNaN(s)) return s;
      }
      return null;
    }
    if (this.type === o3) {
      for (const s of this._args) try {
        const n = _ut.toColor(s.evaluate(e6, r6));
        if (n instanceof g) return n;
      } catch {
      }
      return null;
    }
  }
  static toBoolean(t5) {
    return Boolean(t5);
  }
  static toString(t5) {
    return d2(t5);
  }
  static toNumber(t5) {
    const e6 = Number(t5);
    if (isNaN(e6)) throw new Error(`"${t5}" is not a number`);
    return e6;
  }
  static toColor(e6) {
    if (e6 instanceof g) return e6;
    if ("string" == typeof e6) {
      const r6 = g.fromString(e6);
      if (r6) return r6;
      throw new Error(`"${e6}" is not a color`);
    }
    if (Array.isArray(e6)) return g.fromArray(e6);
    throw new Error(`"${e6}" is not a color`);
  }
};
var ct = class _ct {
  constructor(t5) {
    this._val = t5, this.type = l(t5);
  }
  static parse(t5) {
    if (2 !== t5.length) throw new Error('"literal" expects 1 argument');
    return new _ct(t5[1]);
  }
  evaluate(t5, e6) {
    return this._val;
  }
};
var ht = class _ht {
  constructor(t5) {
    this._arg = t5, this.type = t3;
  }
  static parse(t5, e6) {
    if (2 !== t5.length) throw new Error('"typeof" expects 1 argument');
    return new _ht(pt(t5[1], e6));
  }
  evaluate(t5, e6) {
    return k(l(this._arg.evaluate(t5, e6)));
  }
};
function pt(t5, e6, r6) {
  const s = typeof t5;
  if ("string" === s || "boolean" === s || "number" === s || null === t5) {
    if (r6) switch (r6.kind) {
      case "string":
        "string" !== s && (t5 = ut.toString(t5));
        break;
      case "number":
        "number" !== s && (t5 = ut.toNumber(t5));
        break;
      case "color":
        t5 = ut.toColor(t5);
    }
    t5 = ["literal", t5];
  }
  if (!Array.isArray(t5) || 0 === t5.length) throw new Error("Expression must be a non empty array");
  const n = t5[0];
  if ("string" != typeof n) throw new Error("First element of expression must be a string");
  const a5 = gt[n];
  if (void 0 === a5) throw new Error(`Invalid expression operator "${n}"`);
  if (!a5) throw new Error(`Unimplemented expression operator "${n}"`);
  return a5.parse(t5, e6, r6);
}
var gt = { array: lt, boolean: lt, collator: null, format: T, image: null, literal: ct, number: lt, "number-format": null, object: lt, string: lt, "to-boolean": ut, "to-color": ut, "to-number": ut, "to-string": ut, typeof: ht, accumulated: null, "feature-state": null, "geometry-type": v, id: _, "line-progress": null, properties: b2, at: O, get: F, has: G, in: V, "index-of": D, length: H, slice: J, "!": q2, "!=": $, "<": M, "<=": k2, "==": E, ">": A, ">=": j, all: N2, any: R2, case: z, coalesce: I2, match: L, within: null, interpolate: U, "interpolate-hcl": U, "interpolate-lab": U, step: B2, let: S, var: P2, concat: st, downcase: nt, "is-supported-script": null, "resolved-locale": null, upcase: nt, rgb: at, rgba: ot, "to-rgba": it, "-": W, "*": X, "/": Y, "%": Z2, "^": tt, "+": et, abs: rt, acos: rt, asin: rt, atan: rt, ceil: rt, cos: rt, e: rt, floor: rt, ln: rt, ln2: rt, log10: rt, log2: rt, max: rt, min: rt, pi: rt, round: rt, sin: rt, sqrt: rt, tan: rt, zoom: d3, "heatmap-density": null, "has-id": K, none: C2 };

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/Filter.js
var t4 = class _t {
  constructor(e6) {
    this._expression = e6;
  }
  filter(e6, r6) {
    if (!this._expression) return true;
    try {
      return this._expression.evaluate(e6, r6);
    } catch (t5) {
      return console.log(t5.message), true;
    }
  }
  static createFilter(n) {
    if (!n) return null;
    this.isLegacyFilter(n) && (n = this.convertLegacyFilter(n));
    try {
      const s = pt(n, null, i4);
      return new _t(s);
    } catch (s) {
      return console.log(s.message), null;
    }
  }
  static isLegacyFilter(e6) {
    if (!Array.isArray(e6)) return true;
    if (0 === e6.length) return true;
    switch (e6[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return 3 === e6.length && "string" == typeof e6[1] && !Array.isArray(e6[2]);
      case "in":
        return e6.length >= 3 && "string" == typeof e6[1] && !Array.isArray(e6[2]);
      case "!in":
      case "none":
      case "!has":
        return true;
      case "any":
      case "all":
        for (let r6 = 1; r6 < e6.length; r6++) if (this.isLegacyFilter(e6[r6])) return true;
        return false;
      case "has":
        return 2 === e6.length && ("$id" === e6[1] || "$type" === e6[1]);
      default:
        return false;
    }
  }
  static convertLegacyFilter(e6) {
    if (!Array.isArray(e6) || 0 === e6.length) return true;
    const r6 = e6[0];
    if (1 === e6.length) return "any" !== r6;
    switch (r6) {
      case "==":
        return _t.convertComparison("==", e6[1], e6[2]);
      case "!=":
        return _t.negate(_t.convertComparison("==", e6[1], e6[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return _t.convertComparison(r6, e6[1], e6[2]);
      case "in":
        return _t.convertIn(e6[1], e6.slice(2));
      case "!in":
        return _t.negate(_t.convertIn(e6[1], e6.slice(2)));
      case "any":
      case "all":
      case "none":
        return _t.convertCombining(r6, e6.slice(1));
      case "has":
        return _t.convertHas(e6[1]);
      case "!has":
        return _t.negate(_t.convertHas(e6[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(e6, r6, t5) {
    switch (r6) {
      case "$type":
        return [e6, ["geometry-type"], t5];
      case "$id":
        return [e6, ["id"], t5];
      default:
        return [e6, ["get", r6], t5];
    }
  }
  static convertIn(e6, r6) {
    switch (e6) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", r6]];
      case "$id":
        return ["in", ["id"], ["literal", r6]];
      default:
        return ["in", ["get", e6], ["literal", r6]];
    }
  }
  static convertHas(e6) {
    switch (e6) {
      case "$type":
        return true;
      case "$id":
        return ["has-id"];
      default:
        return ["has", e6];
    }
  }
  static convertCombining(e6, r6) {
    return [e6].concat(r6.map(this.convertLegacyFilter));
  }
  static negate(e6) {
    return ["!", e6];
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js
var e5 = class {
  static {
    this.backgroundLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 } };
  }
  static {
    this.fillLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 } };
  }
  static {
    this.lineLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 }, "line-cap": { type: "enum", values: ["butt", "round", "square"], default: 0 }, "line-join": { type: "enum", values: ["bevel", "round", "miter"], default: 2 }, "line-miter-limit": { type: "number", default: 2 }, "line-round-limit": { type: "number", default: 1.05 } };
  }
  static {
    this.symbolLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 }, "symbol-avoid-edges": { type: "boolean", default: false }, "symbol-placement": { type: "enum", values: ["point", "line", "line-center"], default: 0 }, "symbol-sort-key": { type: "number", default: -1 }, "symbol-spacing": { type: "number", minimum: 1, default: 250 }, "icon-allow-overlap": { type: "boolean", default: false }, "icon-anchor": { type: "enum", values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"], default: 0 }, "icon-ignore-placement": { type: "boolean", default: false }, "icon-image": { type: "string" }, "icon-keep-upright": { type: "boolean", default: false }, "icon-offset": { type: "array", value: "number", length: 2, default: [0, 0] }, "icon-optional": { type: "boolean", default: false }, "icon-padding": { type: "number", minimum: 0, default: 2 }, "icon-rotate": { type: "number", default: 0 }, "icon-rotation-alignment": { type: "enum", values: ["map", "viewport", "auto"], default: 2 }, "icon-size": { type: "number", minimum: 0, default: 1 }, "text-allow-overlap": { type: "boolean", default: false }, "text-anchor": { type: "enum", values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"], default: 0 }, "text-field": { type: "string" }, "text-font": { type: "array", value: "string", default: ["Open Sans Regular", "Arial Unicode MS Regular"] }, "text-ignore-placement": { type: "boolean", default: false }, "text-justify": { type: "enum", values: ["auto", "left", "center", "right"], default: 2 }, "text-keep-upright": { type: "boolean", default: true }, "text-letter-spacing": { type: "number", default: 0 }, "text-line-height": { type: "number", default: 1.2 }, "text-max-angle": { type: "number", minimum: 0, default: 45 }, "text-max-width": { type: "number", minimum: 0, default: 10 }, "text-offset": { type: "array", value: "number", length: 2, default: [0, 0] }, "text-optional": { type: "boolean", default: false }, "text-padding": { type: "number", minimum: 0, default: 2 }, "text-rotate": { type: "number", default: 0 }, "text-rotation-alignment": { type: "enum", values: ["map", "viewport", "auto"], default: 2 }, "text-size": { type: "number", minimum: 0, default: 16 }, "text-transform": { type: "enum", values: ["none", "uppercase", "lowercase"], default: 0 }, "text-writing-mode": { type: "array", value: "enum", values: ["horizontal", "vertical"], default: [0] } };
  }
  static {
    this.circleLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: 0 } };
  }
  static {
    this.backgroundPaintDefinition = { "background-color": { type: "color", default: [0, 0, 0, 1] }, "background-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "background-pattern": { type: "string" } };
  }
  static {
    this.fillPaintDefinition = { "fill-antialias": { type: "boolean", default: true }, "fill-color": { type: "color", default: [0, 0, 0, 1] }, "fill-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "fill-outline-color": { type: "color", default: [0, 0, 0, 0] }, "fill-pattern": { type: "string" }, "fill-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "fill-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 } };
  }
  static {
    this.linePaintDefinition = { "line-blur": { type: "number", minimum: 0, default: 0 }, "line-color": { type: "color", default: [0, 0, 0, 1] }, "line-dasharray": { type: "array", value: "number", default: [] }, "line-gap-width": { type: "number", minimum: 0, default: 0 }, "line-offset": { type: "number", default: 0 }, "line-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "line-pattern": { type: "string" }, "line-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "line-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 }, "line-width": { type: "number", minimum: 0, default: 1 } };
  }
  static {
    this.symbolPaintDefinition = { "icon-color": { type: "color", default: [0, 0, 0, 1] }, "icon-halo-blur": { type: "number", minimum: 0, default: 0 }, "icon-halo-color": { type: "color", default: [0, 0, 0, 0] }, "icon-halo-width": { type: "number", minimum: 0, default: 0 }, "icon-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "icon-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "icon-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 }, "text-color": { type: "color", default: [0, 0, 0, 1] }, "text-halo-blur": { type: "number", minimum: 0, default: 0 }, "text-halo-color": { type: "color", default: [0, 0, 0, 0] }, "text-halo-width": { type: "number", minimum: 0, default: 0 }, "text-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "text-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "text-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 } };
  }
  static {
    this.rasterPaintDefinition = { "raster-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "raster-hue-rotate": { type: "number", default: 0 }, "raster-brightness-min": { type: "number", minimum: 0, maximum: 1, default: 0 }, "raster-brightness-max": { type: "number", minimum: 0, maximum: 1, default: 1 }, "raster-saturation": { type: "number", minimum: -1, maximum: 1, default: 0 }, "raster-contrast": { type: "number", minimum: -1, maximum: 1, default: 0 }, "raster-fade-duration": { type: "number", minimum: 0, default: 300 } };
  }
  static {
    this.circlePaintDefinition = { "circle-blur": { type: "number", minimum: 0, default: 0 }, "circle-color": { type: "color", default: [0, 0, 0, 1] }, "circle-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "circle-radius": { type: "number", minimum: 0, default: 5 }, "circle-stroke-color": { type: "color", default: [0, 0, 0, 1] }, "circle-stroke-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "circle-stroke-width": { type: "number", minimum: 0, default: 0 }, "circle-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "circle-translate-anchor": { type: "enum", values: ["map", "viewport"], default: 0 } };
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleProperty.js
var h = class _h {
  constructor(t5, e6) {
    let r6;
    switch (this.isDataDriven = false, this.interpolator = null, t5.type) {
      case "number":
      case "color":
        r6 = true;
        break;
      case "array":
        r6 = "number" === t5.value;
        break;
      default:
        r6 = false;
    }
    if ((null == e6 || "" === e6 && "color" === t5.type) && (e6 = t5.default), Array.isArray(e6) && e6.length > 0 && gt[e6[0]]) {
      const r7 = { number: e4, color: o3, string: t3, boolean: i4, enum: t3 };
      try {
        const i5 = "array" === t5.type ? a4(r7[t5.value] || u2, t5.length) : r7[t5.type], n = pt(e6, null, i5);
        this.getValue = this._buildExpression(n, t5), this.isDataDriven = true, n instanceof U && n.input instanceof d3 && (this.interpolator = n);
      } catch (h2) {
        console.log(h2.message), this.getValue = this._buildSimple(t5.default);
      }
      return;
    }
    r6 && "interval" === e6.type && (r6 = false);
    const m3 = e6?.stops && e6.stops.length > 0;
    if (m3) for (const i5 of e6.stops) i5[1] = this._validate(i5[1], t5);
    if (this.isDataDriven = !!e6 && !!e6.property, this.isDataDriven) if (void 0 !== e6.default && (e6.default = this._validate(e6.default, t5)), m3) switch (e6.type) {
      case "identity":
        this.getValue = this._buildIdentity(e6, t5);
        break;
      case "categorical":
        this.getValue = this._buildCategorical(e6, t5);
        break;
      default:
        this.getValue = r6 ? this._buildInterpolate(e6, t5) : this._buildInterval(e6, t5);
    }
    else this.getValue = this._buildIdentity(e6, t5);
    else m3 ? this.getValue = r6 ? this._buildZoomInterpolate(e6) : this._buildZoomInterval(e6) : (e6 = this._validate(e6, t5), this.getValue = this._buildSimple(e6));
  }
  _validate(t5, e6) {
    if ("number" === e6.type) {
      if (null != e6.minimum && t5 < e6.minimum) return e6.minimum;
      if (null != e6.maximum && t5 > e6.maximum) return e6.maximum;
    } else "color" === e6.type ? t5 = _h._parseColor(t5) : "enum" === e6.type ? "string" == typeof t5 && (t5 = e6.values.indexOf(t5)) : "array" === e6.type && "enum" === e6.value ? t5 = t5.map((t6) => "string" == typeof t6 ? e6.values.indexOf(t6) : t6) : "string" === e6.type && (t5 = d2(t5));
    return t5;
  }
  _buildSimple(t5) {
    return () => t5;
  }
  _buildExpression(t5, e6) {
    return (r6, i5) => {
      try {
        const l3 = t5.evaluate(i5, r6);
        return void 0 === l3 ? e6.default : this._validate(l3, e6);
      } catch (l3) {
        return console.log(l3.message), e6.default;
      }
    };
  }
  _buildIdentity(t5, e6) {
    return (r6, i5) => {
      let l3;
      return i5 && (l3 = i5.values[t5.property]), void 0 !== l3 && (l3 = this._validate(l3, e6)), null != l3 ? l3 : void 0 !== t5.default ? t5.default : e6.default;
    };
  }
  _buildCategorical(t5, e6) {
    return (r6, i5) => {
      let l3;
      return i5 && (l3 = i5.values[t5.property]), l3 = this._categorical(l3, t5.stops), void 0 !== l3 ? l3 : void 0 !== t5.default ? t5.default : e6.default;
    };
  }
  _buildInterval(t5, e6) {
    return (r6, i5) => {
      let l3;
      return i5 && (l3 = i5.values[t5.property]), "number" == typeof l3 ? this._interval(l3, t5.stops) : void 0 !== t5.default ? t5.default : e6.default;
    };
  }
  _buildInterpolate(t5, e6) {
    return (r6, i5) => {
      let l3;
      return i5 && (l3 = i5.values[t5.property]), "number" == typeof l3 ? this._interpolate(l3, t5.stops, t5.base || 1) : void 0 !== t5.default ? t5.default : e6.default;
    };
  }
  _buildZoomInterpolate(t5) {
    return (e6) => this._interpolate(e6, t5.stops, t5.base || 1);
  }
  _buildZoomInterval(t5) {
    return (e6) => this._interval(e6, t5.stops);
  }
  _categorical(t5, e6) {
    const r6 = e6.length;
    for (let i5 = 0; i5 < r6; i5++) if (e6[i5][0] === t5) return e6[i5][1];
  }
  _interval(t5, e6) {
    const r6 = e6.length;
    let i5 = 0;
    for (let l3 = 0; l3 < r6 && e6[l3][0] <= t5; l3++) i5 = l3;
    return e6[i5][1];
  }
  _interpolate(t5, e6, i5) {
    let l3, s;
    const a5 = e6.length;
    for (let r6 = 0; r6 < a5; r6++) {
      const i6 = e6[r6];
      if (!(i6[0] <= t5)) {
        s = i6;
        break;
      }
      l3 = i6;
    }
    if (l3 && s) {
      const e7 = s[0] - l3[0], a6 = t5 - l3[0], o4 = 1 === i5 ? a6 / e7 : (i5 ** a6 - 1) / (i5 ** e7 - 1);
      if (Array.isArray(l3[1])) {
        const t6 = l3[1], e8 = s[1], i6 = [];
        for (let l4 = 0; l4 < t6.length; l4++) i6.push(p(t6[l4], e8[l4], o4));
        return i6;
      }
      return p(l3[1], s[1], o4);
    }
    return l3 ? l3[1] : s ? s[1] : void 0;
  }
  static _isEmpty(t5) {
    for (const e6 in t5) if (t5.hasOwnProperty(e6)) return false;
    return true;
  }
  static _parseColor(r6) {
    return Array.isArray(r6) ? r6 : "string" == typeof r6 ? d(r6) ?? void 0 : r6 instanceof g && !this._isEmpty(r6) ? r6.toUnitRGBA() : void 0;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleLayer.js
var D2 = class {
  constructor(t5, i5, e6, a5, o4, r6) {
    this.layer = t5, this.feature = i5, this.bounds = e6, this.normalizationRatio = a5, this.normalizationOffsetX = o4, this.normalizationOffsetY = r6;
  }
};
var m2 = class {
  constructor(t5, i5, e6, a5) {
    switch (this.type = t5, this.typeName = i5.type, this.id = i5.id, this.source = i5.source, this.sourceLayer = i5["source-layer"], this.minzoom = i5.minzoom, this.maxzoom = i5.maxzoom, this.filter = i5.filter, this.layout = i5.layout, this.paint = i5.paint, this.z = e6, this.uid = a5, t5) {
      case 0:
        this._layoutDefinition = e5.backgroundLayoutDefinition, this._paintDefinition = e5.backgroundPaintDefinition;
        break;
      case 1:
        this._layoutDefinition = e5.fillLayoutDefinition, this._paintDefinition = e5.fillPaintDefinition;
        break;
      case 2:
        this._layoutDefinition = e5.lineLayoutDefinition, this._paintDefinition = e5.linePaintDefinition;
        break;
      case 3:
        this._layoutDefinition = e5.symbolLayoutDefinition, this._paintDefinition = e5.symbolPaintDefinition;
        break;
      case 4:
        this._layoutDefinition = e5.circleLayoutDefinition, this._paintDefinition = e5.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return void 0 !== this._featureFilter ? this._featureFilter : this._featureFilter = t4.createFilter(this.filter);
  }
  getLayoutProperty(t5) {
    return this._layoutProperties[t5];
  }
  getPaintProperty(t5) {
    return this._paintProperties[t5];
  }
  getLayoutValue(t5, i5, e6) {
    let a5;
    const o4 = this._layoutProperties[t5];
    return o4 && (a5 = o4.getValue(i5, e6)), void 0 === a5 && (a5 = this._layoutDefinition[t5].default), a5;
  }
  getPaintValue(t5, i5, e6) {
    let a5;
    const o4 = this._paintProperties[t5];
    return o4 && (a5 = o4.getValue(i5, e6)), void 0 === a5 && (a5 = this._paintDefinition[t5].default), a5;
  }
  isPainterDataDriven() {
    const t5 = this._paintProperties;
    if (t5) {
      for (const i5 in t5) if (t5[i5].isDataDriven) return true;
    }
    return false;
  }
  isIntersectingFeature(t5, i5, e6, a5, o4, r6, n) {
    return false;
  }
  getFeatureInflatedBounds(t5, i5, e6, a5) {
    return null;
  }
  _parseLayout(t5) {
    const i5 = {};
    for (const e6 in t5) {
      const a5 = this._layoutDefinition[e6];
      a5 && (i5[e6] = new h(a5, t5[e6]));
    }
    return i5;
  }
  _parsePaint(t5) {
    const i5 = {};
    for (const e6 in t5) {
      const a5 = this._paintDefinition[e6];
      a5 && (i5[e6] = new h(a5, t5[e6]));
    }
    return i5;
  }
  computeAttributesKey(t5, i5, e6, a5) {
    let o4 = 0, r6 = 0;
    for (const n of i5) {
      let t6 = 3;
      if (n && n !== a5) {
        const i6 = e6[n], { isLayout: a6, isOptional: o5 } = i6, r7 = a6 ? this.getLayoutProperty(n) : this.getPaintProperty(n);
        t6 = r7?.interpolator ? 2 : r7?.isDataDriven ? 1 : o5 && !r7 ? 3 : 0;
      }
      r6 |= t6 << o4, o4 += 2;
    }
    return r6 << 3 | t5;
  }
};
var d4 = class extends m2 {
  constructor(t5, i5, e6, a5) {
    super(t5, i5, e6, a5), this.backgroundMaterial = new e2(this.computeAttributesKey(0, e2.ATTRIBUTES, e2.ATTRIBUTES_INFO));
  }
};
var _2 = class extends m2 {
  constructor(t5, i5, e6, a5) {
    super(t5, i5, e6, a5);
    const o4 = this.getPaintProperty("fill-color"), r6 = this.getPaintProperty("fill-opacity"), n = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = o4?.isDataDriven, this.hasDataDrivenOpacity = r6?.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || n?.isDataDriven;
    const s = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !s, this.hasDataDrivenOutlineColor = s?.isDataDriven, this.hasDataDrivenOutline = s ? s.isDataDriven : !!o4 && o4.isDataDriven, this.hasDataDrivenOutline = (s ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new e3(this.computeAttributesKey(1, e3.ATTRIBUTES, e3.ATTRIBUTES_INFO)), this.outlineMaterial = new r2(this.computeAttributesKey(2, this.outlineUsesFillColor ? r2.ATTRIBUTES_FILL : r2.ATTRIBUTES_OUTLINE, this.outlineUsesFillColor ? r2.ATTRIBUTES_INFO_FILL : r2.ATTRIBUTES_INFO_OUTLINE), this.outlineUsesFillColor);
  }
  getFeatureInflatedBounds(t5, i5, e6, a5) {
    const o4 = z2(t5);
    if (!o4) return null;
    const r6 = this.getPaintValue("fill-translate", i5, t5), n = a5 * Math.max(r6[0], r6[1]);
    return o4[0] -= n, o4[2] -= n, o4[1] += n, o4[3] += n, o4;
  }
  isIntersectingFeature(t5, a5, n, s, l3, h2, u3) {
    const p2 = s.getGeometry();
    if (!p2) return false;
    const g2 = c / u3.normalizationRatio;
    t5 = t5 / u3.normalizationRatio + u3.normalizationOffsetX, a5 = a5 / u3.normalizationRatio + u3.normalizationOffsetY;
    const c5 = b(this.getPaintValue("fill-translate", l3, s), this.getPaintValue("fill-translate-anchor", l3, s), h2, c);
    t5 -= g2 * c5.x, a5 -= g2 * c5.y;
    return !!I(t5, a5, p2) || N(t5, a5, p2, n);
  }
};
var L2 = class extends m2 {
  constructor(t5, i5, e6, a5) {
    super(t5, i5, e6, a5);
    const o4 = this.getPaintProperty("line-pattern");
    if (this.lineMaterial = new r3(this.computeAttributesKey(3, r3.ATTRIBUTES, r3.ATTRIBUTES_INFO, o4 ? "line-dasharray" : "")), this.hasDataDrivenLine = this.getPaintProperty("line-blur")?.isDataDriven || this.getPaintProperty("line-color")?.isDataDriven || this.getPaintProperty("line-gap-width")?.isDataDriven || this.getPaintProperty("line-offset")?.isDataDriven || this.getPaintProperty("line-opacity")?.isDataDriven || this.getPaintProperty("line-pattern")?.isDataDriven || this.getPaintProperty("line-dasharray")?.isDataDriven || this.getLayoutProperty("line-cap")?.isDataDriven || this.getPaintProperty("line-width")?.isDataDriven, this.canUseThinTessellation = false, !this.hasDataDrivenLine) {
      const t6 = this.getPaintProperty("line-width");
      if (!t6 || "number" == typeof t6 && 0.5 * t6 < Z) {
        const t7 = this.getPaintProperty("line-offset");
        (!t7 || "number" == typeof t7 && 0 === t7) && (this.canUseThinTessellation = true);
      }
    }
  }
  getDashKey(t5, i5) {
    let e6;
    switch (i5) {
      case 0:
      default:
        e6 = "Butt";
        break;
      case 1:
        e6 = "Round";
        break;
      case 2:
        e6 = "Square";
    }
    return `dasharray-[${t5.toString()}]-${e6}`;
  }
  getFeatureInflatedBounds(t5, i5, e6, a5) {
    const o4 = z2(t5);
    if (!o4) return null;
    const r6 = this.getPaintValue("line-translate", i5, t5), n = a5 * Math.max(r6[0], r6[1]);
    o4[0] -= n, o4[2] -= n, o4[1] += n, o4[3] += n;
    const s = a5 * Math.abs(this.getPaintValue("line-offset", i5, t5) || 0), l3 = a5 * (this.getPaintValue("line-width", i5, t5) / 2);
    return o4[0] -= s + l3, o4[1] -= s + l3, o4[2] += s + l3, o4[3] += s + l3, o4;
  }
  isIntersectingFeature(t5, r6, n, s, l3, h2, u3) {
    let p2 = s.getGeometry();
    if (!p2) return false;
    const g2 = c / u3.normalizationRatio;
    t5 = t5 / u3.normalizationRatio + u3.normalizationOffsetX, r6 = r6 / u3.normalizationRatio + u3.normalizationOffsetY;
    const c5 = b(this.getPaintValue("line-translate", l3, s), this.getPaintValue("line-translate-anchor", l3, s), h2, c);
    t5 -= g2 * c5.x, r6 -= g2 * c5.y;
    const y3 = g2 * this.getPaintValue("line-offset", l3, s) || 0;
    0 !== y3 && (p2 = P(p2, -y3));
    const P3 = g2 * (this.getPaintValue("line-width", l3, s) / 2), f2 = Math.max(1, n - P3);
    return N(t5, r6, p2, f2);
  }
};
var x2 = class extends m2 {
  constructor(t5, i5, e6, a5) {
    super(t5, i5, e6, a5), this.iconMaterial = new r4(this.computeAttributesKey(4, r4.ATTRIBUTES, r4.ATTRIBUTES_INFO)), this.textMaterial = new c3(this.computeAttributesKey(6, c3.ATTRIBUTES, c3.ATTRIBUTES_INFO)), this.hasDataDrivenIcon = this.getPaintProperty("icon-color")?.isDataDriven || this.getPaintProperty("icon-halo-blur")?.isDataDriven || this.getPaintProperty("icon-halo-color")?.isDataDriven || this.getPaintProperty("icon-halo-width")?.isDataDriven || this.getPaintProperty("icon-opacity")?.isDataDriven || this.getLayoutProperty("icon-size")?.isDataDriven, this.hasDataDrivenText = this.getPaintProperty("text-color")?.isDataDriven || this.getPaintProperty("text-halo-blur")?.isDataDriven || this.getPaintProperty("text-halo-color")?.isDataDriven || this.getPaintProperty("text-halo-width")?.isDataDriven || this.getPaintProperty("text-opacity")?.isDataDriven || this.getLayoutProperty("text-size")?.isDataDriven;
  }
};
var v2 = class extends m2 {
  constructor(t5, i5, e6, a5) {
    super(t5, i5, e6, a5), this.circleMaterial = new i2(this.computeAttributesKey(5, i2.ATTRIBUTES, i2.ATTRIBUTES_INFO));
  }
  getFeatureInflatedBounds(t5, e6, a5, o4) {
    const r6 = z2(t5);
    if (!r6) return null;
    const n = this.getPaintValue("circle-translate", e6, t5), s = Math.max(n[0], n[1]);
    r6[0] -= s, r6[2] -= s, r6[1] += s, r6[3] += s;
    const l3 = o4 * (c * (this.getPaintValue("circle-radius", e6, t5) + this.getPaintValue("circle-stroke-width", e6, t5)) / 2);
    return r6[0] -= l3, r6[1] -= l3, r6[2] += l3, r6[3] += l3, r6;
  }
  isIntersectingFeature(t5, a5, o4, r6, n, s, l3) {
    const h2 = r6.getGeometry();
    if (!h2) return false;
    const u3 = c / l3.normalizationRatio;
    t5 = t5 / l3.normalizationRatio + l3.normalizationOffsetX, a5 = a5 / l3.normalizationRatio + l3.normalizationOffsetY;
    const p2 = b(this.getPaintValue("circle-translate", n, r6), this.getPaintValue("circle-translate-anchor", n, r6), s, u3), g2 = u3 * (this.getPaintValue("circle-radius", n, r6) + this.getPaintValue("circle-stroke-width", n, r6));
    let c5, y3;
    for (const i5 of h2) if (i5) for (const e6 of i5) {
      c5 = e6.x + p2.x, y3 = e6.y + p2.y;
      if (Math.sqrt((t5 - c5) * (t5 - c5) + (a5 - y3) * (a5 - y3)) - o4 <= g2) return true;
    }
    return false;
  }
};
var V2 = class {
  constructor(t5, i5, e6) {
    let a5;
    this.allowOverlap = t5.getLayoutValue("icon-allow-overlap", i5), this.ignorePlacement = t5.getLayoutValue("icon-ignore-placement", i5), this.keepUpright = t5.getLayoutValue("icon-keep-upright", i5), this.optional = t5.getLayoutValue("icon-optional", i5), this.rotationAlignment = t5.getLayoutValue("icon-rotation-alignment", i5), 2 === this.rotationAlignment && (this.rotationAlignment = e6 ? 0 : 1), a5 = t5.getLayoutProperty("icon-anchor"), a5?.isDataDriven ? this._anchorProp = a5 : this.anchor = t5.getLayoutValue("icon-anchor", i5), a5 = t5.getLayoutProperty("icon-offset"), a5?.isDataDriven ? this._offsetProp = a5 : this.offset = t5.getLayoutValue("icon-offset", i5), a5 = t5.getLayoutProperty("icon-padding"), a5?.isDataDriven ? this._paddingProp = a5 : this.padding = t5.getLayoutValue("icon-padding", i5), a5 = t5.getLayoutProperty("icon-rotate"), a5?.isDataDriven ? this._rotateProp = a5 : this.rotate = t5.getLayoutValue("icon-rotate", i5), a5 = t5.getLayoutProperty("icon-size"), a5?.isDataDriven ? this._sizeProp = a5 : this.size = t5.getLayoutValue("icon-size", i5);
  }
  update(t5, i5) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t5, i5)), this._offsetProp && (this.offset = this._offsetProp.getValue(t5, i5)), this._paddingProp && (this.padding = this._paddingProp.getValue(t5, i5)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t5, i5)), this._sizeProp && (this.size = this._sizeProp.getValue(t5, i5));
  }
};
var T2 = class {
  constructor(t5, i5, e6) {
    let a5;
    this.allowOverlap = t5.getLayoutValue("text-allow-overlap", i5), this.ignorePlacement = t5.getLayoutValue("text-ignore-placement", i5), this.keepUpright = t5.getLayoutValue("text-keep-upright", i5), this.optional = t5.getLayoutValue("text-optional", i5), this.rotationAlignment = t5.getLayoutValue("text-rotation-alignment", i5), 2 === this.rotationAlignment && (this.rotationAlignment = e6 ? 0 : 1), a5 = t5.getLayoutProperty("text-anchor"), a5?.isDataDriven ? this._anchorProp = a5 : this.anchor = t5.getLayoutValue("text-anchor", i5), a5 = t5.getLayoutProperty("text-justify"), a5?.isDataDriven ? this._justifyProp = a5 : this.justify = t5.getLayoutValue("text-justify", i5), a5 = t5.getLayoutProperty("text-letter-spacing"), a5?.isDataDriven ? this._letterSpacingProp = a5 : this.letterSpacing = t5.getLayoutValue("text-letter-spacing", i5), a5 = t5.getLayoutProperty("text-line-height"), a5?.isDataDriven ? this._lineHeightProp = a5 : this.lineHeight = t5.getLayoutValue("text-line-height", i5), a5 = t5.getLayoutProperty("text-max-angle"), a5?.isDataDriven ? this._maxAngleProp = a5 : this.maxAngle = t5.getLayoutValue("text-max-angle", i5), a5 = t5.getLayoutProperty("text-max-width"), a5?.isDataDriven ? this._maxWidthProp = a5 : this.maxWidth = t5.getLayoutValue("text-max-width", i5), a5 = t5.getLayoutProperty("text-offset"), a5?.isDataDriven ? this._offsetProp = a5 : this.offset = t5.getLayoutValue("text-offset", i5), a5 = t5.getLayoutProperty("text-padding"), a5?.isDataDriven ? this._paddingProp = a5 : this.padding = t5.getLayoutValue("text-padding", i5), a5 = t5.getLayoutProperty("text-rotate"), a5?.isDataDriven ? this._rotateProp = a5 : this.rotate = t5.getLayoutValue("text-rotate", i5), a5 = t5.getLayoutProperty("text-size"), a5?.isDataDriven ? this._sizeProp = a5 : this.size = t5.getLayoutValue("text-size", i5), a5 = t5.getLayoutProperty("text-writing-mode"), a5?.isDataDriven ? this._writingModeProp = a5 : this.writingMode = t5.getLayoutValue("text-writing-mode", i5);
  }
  update(t5, i5) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t5, i5)), this._justifyProp && (this.justify = this._justifyProp.getValue(t5, i5)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t5, i5)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t5, i5)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t5, i5)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t5, i5)), this._offsetProp && (this.offset = this._offsetProp.getValue(t5, i5)), this._paddingProp && (this.padding = this._paddingProp.getValue(t5, i5)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t5, i5)), this._sizeProp && (this.size = this._sizeProp.getValue(t5, i5)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t5, i5));
  }
};
function z2(i5) {
  const e6 = i5?.getGeometry();
  if (null == e6) return null;
  let a5 = 1 / 0, o4 = 1 / 0, r6 = -1 / 0, n = -1 / 0;
  for (const t5 of e6) if (t5) for (const i6 of t5) a5 = Math.min(a5, i6.x), o4 = Math.min(o4, i6.y), r6 = Math.max(r6, i6.x), n = Math.max(n, i6.y);
  return o(a5, o4, r6, n);
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js
var l2 = class _l {
  constructor(t5, r6 = true) {
    if (this.backgroundBucketIds = [], this._uidToLayer = /* @__PURE__ */ new Map(), this._layerByName = {}, this._runningId = 0, this._style = r6 ? a(t5) : t5, this._style.layers || (this._style.layers = []), this.version = parseFloat(this._style.version), this.layers = this._style.layers.map((e6, t6, r7) => this._create(e6, t6, r7)).filter((e6) => !!e6), this.layers) for (let e6 = 0; e6 < this.layers.length; e6++) {
      const t6 = this.layers[e6];
      this._layerByName[t6.id] = t6, this._uidToLayer.set(t6.uid, t6), 0 === t6.type && this.backgroundBucketIds.push(t6.id);
    }
    this._identifyRefLayers();
  }
  getLayerStyleProperties(e6, t5) {
    const r6 = this.getStyleLayerByUID(e6), a5 = 0 !== r6?.getLayoutValue("symbol-placement", t5);
    let i5 = r6?.getLayoutValue("icon-rotation-alignment", t5);
    2 === i5 && (i5 = a5 ? 0 : 1);
    let s = r6?.getLayoutValue("text-rotation-alignment", t5);
    2 === s && (s = a5 ? 0 : 1);
    const l3 = r6?.getPaintValue("icon-translate", t5), n = r6?.getPaintValue("icon-translate-anchor", t5), y3 = r6?.getPaintValue("text-translate", t5), o4 = r6?.getPaintValue("text-translate-anchor", t5);
    return { geometryType: null, iconAllowOverlap: r6?.getLayoutValue("icon-allow-overlap", t5), iconIgnorePlacement: r6?.getLayoutValue("icon-ignore-placement", t5), textAllowOverlap: r6?.getLayoutValue("text-allow-overlap", t5), textIgnorePlacement: r6?.getLayoutValue("text-ignore-placement", t5), iconRotationAlignment: i5, textRotationAlignment: s, iconTranslateAnchor: n, iconTranslate: l3, textTranslateAnchor: o4, textTranslate: y3 };
  }
  isPainterDataDriven(e6) {
    const t5 = this._layerByName[e6];
    return !!t5 && t5.isPainterDataDriven();
  }
  getStyleLayerId(e6) {
    return e6 >= this.layers.length ? null : this.layers[e6].id;
  }
  getStyleLayerByUID(e6) {
    return this._uidToLayer.get(e6) ?? null;
  }
  getStyleLayerIndex(e6) {
    const t5 = this._layerByName[e6];
    return t5 ? this.layers.indexOf(t5) : -1;
  }
  setStyleLayer(e6, t5) {
    if (!e6?.id) return;
    const r6 = this._style;
    null != t5 && t5 >= this.layers.length && (t5 = this.layers.length - 1);
    let a5, i5 = true;
    const s = this._layerByName[e6.id];
    if (s) {
      const n = this.layers.indexOf(s);
      t5 || (t5 = n), t5 === n ? (i5 = false, a5 = _l._recreateLayer(e6, s), this.layers[t5] = a5, r6.layers[t5] = e6) : (this.layers.splice(n, 1), r6.layers.splice(n, 1), a5 = this._create(e6, t5, this.layers), this.layers.splice(t5, 0, a5), r6.layers.splice(t5, 0, e6));
    } else a5 = this._create(e6, t5, this.layers), !t5 || t5 >= this.layers.length ? (this.layers.push(a5), r6.layers.push(e6)) : (this.layers.splice(t5, 0, a5), r6.layers.splice(t5, 0, e6));
    this._layerByName[e6.id] = a5, this._uidToLayer.set(a5.uid, a5), i5 && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(e6) {
    const t5 = this._layerByName[e6];
    return t5 ? { type: t5.typeName, id: t5.id, source: t5.source, "source-layer": t5.sourceLayer, minzoom: t5.minzoom, maxzoom: t5.maxzoom, filter: t5.filter, layout: t5.layout, paint: t5.paint } : null;
  }
  deleteStyleLayer(e6) {
    const t5 = this._layerByName[e6];
    if (t5) {
      delete this._layerByName[e6], this._uidToLayer.delete(t5.uid);
      const r6 = this.layers.indexOf(t5);
      this.layers.splice(r6, 1), this._style.layers.splice(r6, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(e6) {
    return this._layerByName[e6];
  }
  getLayoutProperties(e6) {
    const t5 = this._layerByName[e6];
    return t5 ? t5.layout : null;
  }
  getPaintProperties(e6) {
    const t5 = this._layerByName[e6];
    return t5 ? t5.paint : null;
  }
  setPaintProperties(e6, t5) {
    const r6 = this._layerByName[e6];
    if (!r6) return;
    const a5 = { type: r6.typeName, id: r6.id, source: r6.source, "source-layer": r6.sourceLayer, minzoom: r6.minzoom, maxzoom: r6.maxzoom, filter: r6.filter, layout: r6.layout, paint: t5 }, i5 = _l._recreateLayer(a5, r6), s = this.layers.indexOf(r6);
    this.layers[s] = i5, this._style.layers[s].paint = t5, this._layerByName[r6.id] = i5, this._uidToLayer.set(r6.uid, i5);
  }
  setLayoutProperties(e6, t5) {
    const r6 = this._layerByName[e6];
    if (!r6) return;
    const a5 = { type: r6.typeName, id: r6.id, source: r6.source, "source-layer": r6.sourceLayer, minzoom: r6.minzoom, maxzoom: r6.maxzoom, filter: r6.filter, layout: t5, paint: r6.paint }, i5 = _l._recreateLayer(a5, r6), s = this.layers.indexOf(r6);
    this.layers[s] = i5, this._style.layers[s].layout = t5, this._layerByName[r6.id] = i5, this._uidToLayer.set(r6.uid, i5);
  }
  setStyleLayerVisibility(e6, t5) {
    const r6 = this._layerByName[e6];
    if (!r6) return;
    const a5 = r6.layout || {};
    a5.visibility = t5;
    const i5 = { type: r6.typeName, id: r6.id, source: r6.source, "source-layer": r6.sourceLayer, minzoom: r6.minzoom, maxzoom: r6.maxzoom, filter: r6.filter, layout: a5, paint: r6.paint }, s = _l._recreateLayer(i5, r6), n = this.layers.indexOf(r6);
    this.layers[n] = s, this._style.layers[n].layout = a5, this._layerByName[r6.id] = s, this._uidToLayer.set(r6.uid, s);
  }
  getStyleLayerVisibility(e6) {
    const t5 = this._layerByName[e6];
    if (!t5) return "none";
    const r6 = t5.layout;
    return r6?.visibility ?? "visible";
  }
  _recomputeZValues() {
    const e6 = this.layers, t5 = 1 / (e6.length + 1);
    for (let r6 = 0; r6 < e6.length; r6++) e6[r6].z = 1 - (1 + r6) * t5;
  }
  _identifyRefLayers() {
    const e6 = [], t5 = [];
    let r6 = 0;
    for (const a5 of this.layers) {
      const i5 = a5.layout;
      if (1 === a5.type) {
        const t6 = a5;
        let s = a5.source + "|" + a5.sourceLayer;
        s += "|" + (i5?.visibility ?? ""), s += "|" + a5.minzoom, s += "|" + a5.maxzoom, s += "|" + JSON.stringify(a5.filter), (t6.hasDataDrivenFill || t6.hasDataDrivenOutline) && (s += "|" + r6), e6.push({ key: s, layer: a5 });
      } else if (2 === a5.type) {
        const e7 = a5, s = a5.paint, l3 = null != s && (null != s["line-pattern"] || null != s["line-dasharray"]);
        let n = a5.source + "|" + a5.sourceLayer;
        n += "|" + (i5?.visibility ?? ""), n += "|" + a5.minzoom, n += "|" + a5.maxzoom, n += "|" + JSON.stringify(a5.filter), n += "|" + (void 0 !== i5 ? i5["line-cap"] : ""), n += "|" + (void 0 !== i5 ? i5["line-join"] : ""), (e7.hasDataDrivenLine || l3) && (n += "|" + r6), t5.push({ key: n, layer: a5 });
      }
      ++r6;
    }
    this._assignRefLayers(e6), this._assignRefLayers(t5);
  }
  _assignRefLayers(e6) {
    let t5, r6;
    e6.sort((e7, t6) => e7.key < t6.key ? -1 : e7.key > t6.key ? 1 : 0);
    const a5 = e6.length;
    for (let i5 = 0; i5 < a5; i5++) {
      const s = e6[i5];
      if (s.key === t5) s.layer.refLayerId = r6;
      else if (t5 = s.key, r6 = s.layer.id, 1 === s.layer.type) {
        if (!s.layer.getPaintProperty("fill-outline-color")) for (let l3 = i5 + 1; l3 < a5; l3++) {
          const a6 = e6[l3];
          if (a6.key !== t5) break;
          if (a6.layer.getPaintProperty("fill-outline-color")) {
            e6[i5] = a6, e6[l3] = s, r6 = a6.layer.id;
            break;
          }
        }
      } else if (2 === s.layer.type) {
        let l3 = s.layer;
        for (let n = i5 + 1; n < a5; n++) {
          const a6 = e6[n];
          if (a6.key !== t5) break;
          const y3 = a6.layer;
          (l3.canUseThinTessellation && !y3.canUseThinTessellation || !l3.canUseThinTessellation && (y3.getPaintProperty("line-pattern") || y3.getPaintProperty("line-dasharray"))) && (l3 = y3, e6[i5] = a6, e6[n] = s, r6 = a6.layer.id);
        }
      }
    }
  }
  _create(e6, l3, n) {
    const y3 = 1 - (1 + l3) * (1 / (n.length + 1)), o4 = this._runningId++;
    switch (e6.type) {
      case "background":
        return new d4(0, e6, y3, o4);
      case "fill":
        return new _2(1, e6, y3, o4);
      case "line":
        return new L2(2, e6, y3, o4);
      case "symbol":
        return new x2(3, e6, y3, o4);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${e6.id}`), null;
      case "circle":
        return new v2(4, e6, y3, o4);
    }
    return null;
  }
  static _recreateLayer(e6, l3) {
    switch (e6.type) {
      case "background":
        return new d4(0, e6, l3.z, l3.uid);
      case "fill":
        return new _2(1, e6, l3.z, l3.uid);
      case "line":
        return new L2(2, e6, l3.z, l3.uid);
      case "symbol":
        return new x2(3, e6, l3.z, l3.uid);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${e6.id}`), null;
      case "circle":
        return new v2(4, e6, l3.z, l3.uid);
    }
    return null;
  }
};

export {
  D2 as D,
  V2 as V,
  T2 as T,
  l2 as l
};
//# sourceMappingURL=chunk-VAHN2B54.js.map
