import {
  t as t3
} from "./chunk-EFPILPJC.js";
import {
  e as e2
} from "./chunk-QYCSWJWU.js";
import {
  h as h3
} from "./chunk-J5D74YXM.js";
import {
  L as L2,
  S,
  f as f3,
  w as w3
} from "./chunk-Q2YFKIY7.js";
import {
  u as u3
} from "./chunk-ARRYQO7C.js";
import {
  y
} from "./chunk-WY4B5WX2.js";
import {
  F,
  S as S2,
  V as V3,
  i as i2,
  u as u4,
  w as w4
} from "./chunk-GMLY5ZHH.js";
import {
  r as r2
} from "./chunk-ZXAMNI2K.js";
import {
  c as c5,
  s,
  t as t4,
  u as u6
} from "./chunk-IZLVG2W7.js";
import {
  C,
  V as V2,
  c as c4,
  d,
  f as f4,
  g as g2,
  h as h4,
  j as j2,
  u2 as u5,
  w as w2
} from "./chunk-TJS4ES3S.js";
import {
  l as l2
} from "./chunk-6EZNJGLC.js";
import {
  h as h2,
  q as q2
} from "./chunk-HQYJ6EHB.js";
import {
  k
} from "./chunk-VZ3MCGGK.js";
import {
  t as t2
} from "./chunk-IAMT5ISO.js";
import {
  u as u2
} from "./chunk-FQUUUHLI.js";
import {
  V,
  i
} from "./chunk-RLRR5X7B.js";
import {
  B,
  o as o3
} from "./chunk-FCVEMPGG.js";
import {
  m
} from "./chunk-M3PLR22U.js";
import {
  v,
  w
} from "./chunk-DNCZTJNI.js";
import {
  c as c3
} from "./chunk-BQWO5RXV.js";
import {
  u
} from "./chunk-QU4UZ7C2.js";
import {
  g
} from "./chunk-V6655I3I.js";
import {
  q
} from "./chunk-KO4S3BRZ.js";
import {
  e
} from "./chunk-QWNB5I7T.js";
import {
  r
} from "./chunk-ZILR7JK7.js";
import {
  R
} from "./chunk-DESITEXU.js";
import {
  c as c2
} from "./chunk-D7RUZBWM.js";
import {
  Bt,
  f2,
  t3 as t
} from "./chunk-2OF3JE3F.js";
import {
  b
} from "./chunk-FJ25BHAS.js";
import {
  a3 as a2,
  c
} from "./chunk-LV7AMIAU.js";
import {
  o as o2
} from "./chunk-O4A47ZEM.js";
import {
  a,
  f,
  h,
  j,
  l
} from "./chunk-55ZAYF5P.js";
import {
  o
} from "./chunk-XUZBRFKA.js";
import {
  p
} from "./chunk-E73BLMZG.js";
import {
  L
} from "./chunk-POW25PFR.js";
import {
  n2 as n
} from "./chunk-IDI4VM7T.js";
import {
  N
} from "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/Legend/support/clusterUtils.js
function l3(l4, i3, s3) {
  const a3 = l4.effectiveClusterRenderer;
  if (!a3 || !("visualVariables" in a3) || !a3.visualVariables) return null;
  const n2 = a3.visualVariables.find((e3) => "size" === e3.type);
  if (!("stops" in n2) || !n2.stops) return null;
  const t5 = n2.stops.find((e3) => e3.useMinValue), u8 = n2.stops.find((e3) => e3.useMaxValue);
  if (null == t5 || null == u8) return null;
  const r3 = s3.featuresTilingScheme.getClosestInfoForScale(s3.scale).level, f6 = n2.field, o4 = i3.getDisplayStatistics(r3, f6);
  return o4 ? new V({ field: n2.field, minSize: l4.clusterMinSize, minDataValue: o4.minValue, maxSize: l4.clusterMaxSize, maxDataValue: o4.maxValue }) : null;
}

// node_modules/@arcgis/core/widgets/smartMapping/support/utils.js
function s2(t5) {
  const n2 = 2, o4 = Math.floor(Math.log10(Math.abs(t5))) + 1, e3 = o4 < 4 || o4 > 6 ? 4 : o4, r3 = 1e6, s3 = Math.abs(t5) >= r3 ? "compact" : "standard";
  return c2(t5, { notation: s3, minimumSignificantDigits: n2, maximumSignificantDigits: e3 });
}

// node_modules/@arcgis/core/widgets/Legend/support/ActiveLayerInfo.js
var ye = 16;
var he = "https://utility.arcgis.com/sharing/tools/legend";
var fe = "esri.layers.ImageryLayer";
var me = "esri.layers.ImageryTileLayer";
var pe = "esri.layers.WCSLayer";
var ge = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
var be = new o2({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch" });
var _e = new u({ size: 6, outline: { color: [128, 128, 128, 0.5], width: 0.5 } });
var Se = new m({ style: "solid" });
function we(e3) {
  return "flow" === e3.type;
}
function ve(e3) {
  return "vector-field" === e3.type;
}
function Le(e3) {
  return "raster-colormap" === e3.type;
}
function Ee(e3) {
  return "raster-stretch" === e3.type;
}
function Fe(e3) {
  return "raster-shaded-relief" === e3.type;
}
function Ce(e3) {
  return "esri.renderers.SimpleRenderer" === e3.declaredClass;
}
function Ie(e3) {
  return "esri.renderers.ClassBreaksRenderer" === e3.declaredClass;
}
function Re(e3) {
  return "esri.renderers.UniqueValueRenderer" === e3.declaredClass;
}
function Ve(e3) {
  return "esri.renderers.HeatmapRenderer" === e3.declaredClass;
}
function De(e3) {
  return ze(e3) || Te(e3) || je(e3) || xe(e3);
}
function xe(e3) {
  return "esri.renderers.PointCloudRGBRenderer" === e3.declaredClass;
}
function ze(e3) {
  return "esri.renderers.PointCloudClassBreaksRenderer" === e3.declaredClass;
}
function Te(e3) {
  return "esri.renderers.PointCloudStretchRenderer" === e3.declaredClass;
}
function je(e3) {
  return "esri.renderers.PointCloudUniqueValueRenderer" === e3.declaredClass;
}
function ke(e3) {
  return "esri.renderers.DotDensityRenderer" === e3.declaredClass;
}
function Pe(e3) {
  return "esri.renderers.PieChartRenderer" === e3.declaredClass;
}
function Me(e3, t5) {
  return Ce(e3) || Ie(e3) || Re(e3) || Ve(e3) || ke(e3) || Pe(e3) ? "2d" === t5.type || t3(e3) : Ee(e3) || Le(e3) || Fe(e3) || ze(e3) || Te(e3) || je(e3) || ve(e3) || we(e3);
}
function Oe(e3) {
  return "esri.layers.BuildingSceneLayer" === e3.declaredClass;
}
function Ue(e3) {
  return "esri.layers.SubtypeGroupLayer" === e3.declaredClass;
}
function Ae(e3) {
  return "esri.layers.VoxelLayer" === e3.declaredClass;
}
function Be(e3) {
  return "esri.layers.WMSLayer" === e3.declaredClass;
}
function Ne(e3) {
  return "esri.layers.WMTSLayer" === e3.declaredClass;
}
function $e(e3) {
  return "esri.layers.MapImageLayer" === e3.declaredClass;
}
function He(e3) {
  return "esri.layers.TileLayer" === e3.declaredClass;
}
function qe(e3) {
  return e3.declaredClass === fe;
}
function We(e3) {
  return e3.declaredClass === me;
}
function Ge(e3) {
  return e3.declaredClass === pe;
}
function Je(e3) {
  return "stretch-ramp" === e3.type;
}
function Ze(e3) {
  const t5 = "authoringInfo" in e3 ? e3?.authoringInfo : null;
  return "univariate-color-size" === t5?.type;
}
function Qe(e3) {
  const t5 = "authoringInfo" in e3 ? e3?.authoringInfo : null;
  return "univariate-color-size" === t5?.type && "above-and-below" === t5?.univariateTheme;
}
function Ke(e3) {
  return "sublayers" in e3;
}
function Xe(e3) {
  return e3 && "symbol" in e3;
}
function Ye(e3, t5) {
  const { field: i3, field2: s3, field3: l4, fieldDelimiter: r3, valueExpression: n2 } = e3;
  if (!i3) return null;
  const a3 = !(!i3 && !n2 || !s3 && !l4) ? t5?.toString().split(r3 || "") : [t5], o4 = i3 ? { [i3]: a3?.[0] } : null;
  return o4 && (s3 && (o4[s3] = a3?.[1]), l4 && (o4[l4] = a3?.[2])), o4;
}
var et = new u({ style: "path", path: "M10,5 L5,0 0,5 M5,0 L5,15", size: 15, outline: { width: 1, color: [85, 85, 85, 1] } });
var tt = {};
var it = /* @__PURE__ */ new WeakMap();
var st = class extends b {
  constructor(e3) {
    super(e3), this._hasColorRamp = false, this._hasOpacityRamp = false, this._hasSizeRamp = false, this._loading = false, this._webStyleSymbolCache = /* @__PURE__ */ new Map(), this._dotDensityUrlCache = /* @__PURE__ */ new Map(), this._scaleDrivenSizeVariable = null, this._clusterSizeVariable = null, this._layerDefinitionExpression = null, this._layerDefinitionExpressionClause = null, this._layerDisplayFilter = null, this._layerDisplayFilterClause = null, this.children = new q(), this.layerView = null, this.layer = null, this.legendElements = [], this.parent = null, this.hideLayersNotInCurrentView = false, this.keepCacheOnDestroy = false, this.respectLayerDefinitionExpression = false, this.respectLayerVisibility = true, this.sublayerIds = [], this.title = null, this.view = null;
  }
  initialize() {
    const e3 = () => this.notifyChange("ready");
    this.addHandles([a(() => this.children, "change", (t5) => {
      const { added: i3, removed: s3 } = t5;
      i3.forEach((t6) => {
        const i4 = `activeLayerInfo-ready-watcher-${t6.layer.uid}`;
        this.addHandles(l(() => t6.ready, e3, h), i4);
      }), s3.forEach((e4) => this.removeHandles(e4.layer.uid)), e3();
    })]), this.keepCacheOnDestroy || (tt = {});
  }
  destroy() {
    this._webStyleSymbolCache = null, this._dotDensityUrlCache = null, this._scaleDrivenSizeVariable = null, this.keepCacheOnDestroy || (tt = null), this._layerDefinitionExpressionClause = null;
  }
  get cssEffectFilter() {
    const { layer: e3, scale: t5 } = this, i3 = "effect" in e3 ? e3.effect : null;
    if (!i3) return null;
    const s3 = new h3({ effect: i3 });
    return s3.endTransition(), s3.scale = t5, q2(s3, true);
  }
  get loading() {
    return this.children.length > 0 ? this.children.some((e3) => e3.loading) : this._loading;
  }
  get opacity() {
    const e3 = this.layer.opacity, t5 = this.parent?.opacity, i3 = this.layer.parent, s3 = i3 && "uid" in i3 ? this._getParentLayerOpacity(i3) : null;
    return null != t5 ? t5 * e3 : null != s3 ? s3 * e3 : e3;
  }
  get ready() {
    return p(() => null === this.layer || (this.children.length > 0 ? this._isGroupActive() : this.legendElements.length > 0));
  }
  get scale() {
    return this.view?.scale ?? 0;
  }
  get isScaleDriven() {
    const e3 = this.layer;
    if (null === e3) return false;
    if ("effect" in e3 && e3.effect && Array.isArray(e3.effect)) return true;
    if ("featureReduction" in e3 && e3.featureReduction) {
      if ("cluster" === e3.featureReduction.type) return true;
      if ("binning" === e3.featureReduction.type && "renderer" in e3.featureReduction && e3.featureReduction.renderer) return this._isRendererScaleDriven(e3.featureReduction.renderer);
    }
    return "renderer" in e3 && e3.renderer ? !!("displayFilterInfo" in e3 && e3.displayFilterInfo && Re(e3.renderer)) || this._isRendererScaleDriven(e3.renderer) : this._isLayerScaleDriven(this.layer);
  }
  get version() {
    return this.commitProperty("ready"), p(() => this._get("version") + 1);
  }
  async buildLegendElementsForFeatureCollections(e3) {
    this._loading = true;
    if (!(!this.hideLayersNotInCurrentView || await this._isLayerInCurrentView())) return this.legendElements = [], this._loading = false, void this.notifyChange("ready");
    const t5 = Array.from(e3, (e4) => {
      if (o3(e4)) return this._getRendererLegendElements(e4.renderer, { title: e4.title });
      if (e4.featureSet?.features.length) {
        const t6 = e4.layerDefinition, i3 = t6?.drawingInfo, s3 = i3 && t2(i3.renderer), l4 = be.read(t6.geometryType);
        return s3 ? this._getRendererLegendElements(s3, { title: e4.name, geometryType: l4 }) : (n.getLogger(this).warn("drawingInfo not available!"), null);
      }
      return null;
    });
    try {
      const e4 = [], i3 = await Promise.allSettled(t5);
      for (const t6 of i3) if ("fulfilled" === t6.status) for (const i4 of t6.value ?? []) e4.push(i4);
      this.legendElements = e4;
    } catch (i3) {
      n.getLogger(this).warn("error while building legend for layer!", i3);
    } finally {
      this._loading = false, this.notifyChange("ready");
    }
  }
  async buildLegendElementsForRenderer(e3) {
    try {
      this._loading = true;
      const t5 = !this.hideLayersNotInCurrentView || await this._isLayerInCurrentView();
      this.legendElements = t5 ? await this._getRendererLegendElements(e3) : [];
    } catch (t5) {
      n.getLogger(this).warn("error while building legend for layer!", t5);
    } finally {
      this._loading = false, this.notifyChange("ready");
    }
  }
  async buildLegendElementsForFeatureReduction(e3) {
    try {
      this._loading = true, await this._waitForLayerViewUpdate(this.layerView);
      const t5 = !this.hideLayersNotInCurrentView || await this._isLayerInCurrentView();
      this.legendElements = t5 ? await this._getLegendElementsForFeatureReduction(e3) : [];
    } catch (t5) {
      n.getLogger(this).warn("error while building legend for layer!", t5);
    } finally {
      this._loading = false, this.notifyChange("ready");
    }
  }
  async buildLegendElementsForTools() {
    this._loading = true;
    const e3 = this.layer;
    if (Ae(e3)) await this._constructLegendElementsForVoxelLayer();
    else if (Ne(e3)) this._constructLegendElementsForWMTSlayer();
    else if (Be(e3)) await this._constructLegendElementsForWMSSublayers();
    else if (Oe(e3)) await this._constructLegendElementsForBuildingSceneLayer();
    else if ($e(e3) || He(e3) || Ue(e3)) await this._constructLegendElementsForSublayers();
    else {
      this.removeHandles("imageryLayers-watcher");
      let t5 = "default";
      if (qe(e3)) {
        const i3 = e3;
        t5 = (i3?.rasterFunction?.functionName || "default") + "_" + (e3.bandIds?.length ? e3.bandIds.join("") : "###");
      }
      if (We(e3) || "link-chart" === e3.type) return;
      await this._getLegendLayers(`${e3.uid}-${t5}`).then(async (t6) => {
        this.legendElements = [];
        const i3 = t6.map(async (t7) => {
          if (qe(e3)) {
            const t8 = l(() => [e3.rasterFunction, e3.bandIds], () => L(async () => {
              tt.default = null, e3.renderer ? await this.buildLegendElementsForRenderer(e3.renderer) : await this.buildLegendElementsForTools();
            })());
            this.addHandles(t8, "imageryLayers-watcher");
          }
          const i4 = this._generateSymbolTableElementForLegendLayer(t7);
          i4?.infos.length && (qe(e3) && (i4.title = e3.title), this.legendElements.push(i4));
        });
        await Promise.allSettled(i3);
      }).catch((e4) => {
        n.getLogger(this).warn("Request to server for legend has failed!", e4);
      });
    }
    this._loading = false, this.notifyChange("ready");
  }
  async _isLayerInCurrentView(e3) {
    return this._checkFeatureCountForExpression(e3, this.view.extent);
  }
  _getParentLayerOpacity(e3) {
    let t5 = 1;
    const i3 = e3.parent;
    return i3 && "uid" in i3 && (t5 = this._getParentLayerOpacity(i3)), e3.opacity * t5;
  }
  _isGroupActive() {
    return this.children.some((e3) => e3.ready);
  }
  _isRendererScaleDriven(e3) {
    if ("dot-density" === e3.type) return true;
    const t5 = "valueExpression" in e3 ? e3.valueExpression : null;
    if (ge.test(t5)) return true;
    const i3 = "visualVariables" in e3 ? e3.visualVariables : null;
    return !!i3?.some((e4) => this._isScaleDrivenSizeVariable(e4)) || this._hasScaleDrivenSymbols(e3);
  }
  _hasScaleDrivenSymbols(e3) {
    switch (e3.type) {
      case "simple":
        return this._isScaleDrivenSymbol(e3.symbol);
      case "class-breaks":
        return this._isScaleDrivenSymbol(e3.defaultSymbol) || e3.classBreakInfos.some((e4) => this._isScaleDrivenSymbol(e4.symbol));
      case "unique-value":
        return this._isScaleDrivenSymbol(e3.defaultSymbol) || !!e3.uniqueValueInfos?.some((e4) => this._isScaleDrivenSymbol(e4.symbol));
    }
    return false;
  }
  _isScaleDrivenSymbol(e3) {
    if ("cim" === e3?.type) {
      const { primitiveOverrides: t5, minScale: i3, maxScale: s3 } = e3.data, l4 = t5?.some((e4) => (e4.valueExpressionInfo?.expression || "").includes("$view.scale")) ?? false;
      return null != i3 || null != s3 || l4;
    }
    return false;
  }
  _isScaleDrivenSizeVariable(e3) {
    if (e3 && "size" !== e3.type) return false;
    const t5 = e3, i3 = t5.minSize, s3 = t5.maxSize;
    return !("object" != typeof i3 || !i3 || !this._isScaleDrivenSizeVariable(i3)) || (!("object" != typeof s3 || !s3 || !this._isScaleDrivenSizeVariable(s3)) || ge.test(t5.valueExpression));
  }
  _isLayerScaleDriven(e3) {
    if ("minScale" in e3 && e3.minScale > 0 || "maxScale" in e3 && e3.maxScale > 0) return true;
    if ("sublayers" in e3 && e3.sublayers) return e3.sublayers.some((e4) => this._isLayerScaleDriven(e4));
    const t5 = e3.parent;
    if (false === e3.loaded && t5 && $e(t5) && "source" in e3 && e3.source && "map-layer" === e3.source.type) {
      for (const i3 of t5.sourceJSON.layers ?? []) if (i3.id === e3.source.mapLayerId && (i3.minScale > 0 || i3.maxScale > 0)) return true;
    }
    return false;
  }
  async _constructLegendElementsForVoxelLayer() {
    this._loading = true, this.legendElements = [], this.removeHandles("voxel-style-watcher"), this.removeHandles("voxel-current-variable");
    const e3 = this.layer;
    this.addHandles(l(() => e3.currentVariableId, () => this._constructLegendElementsForVoxelLayer()), "voxel-current-variable"), this.addHandles(l(() => e3.getVariableStyles(), () => this._constructLegendElementsForVoxelLayer()), "voxel-style-watcher");
    const t5 = e3.getVariableStyle(null), i3 = [];
    if (t5) {
      if (t5.uniqueValues?.length) {
        const e4 = [];
        t5.uniqueValues.forEach((t6) => {
          t6.enabled && e4.push({ label: t6.label || `${t6.value}`, value: t6.value, symbol: new m({ color: t6.color, outline: null }) });
        }), e4.length && i3.push({ type: "symbol-table", title: t5.label, infos: e4 });
      } else if (t5.transferFunction) {
        const { colorStops: e4, stretchRange: s3 } = t5.transferFunction, l4 = e4.toArray().reverse(), r3 = s3.map((e5, t6) => `${0 === t6 ? u5 : f4} ${s2(e5)}`).reverse(), n2 = l4.map((e5) => ({ color: e5.color, value: null, label: null }));
        n2[0].label = r3[0], n2[n2.length - 1].label = r3[1], i3.push({ type: "color-ramp", title: t5.label, infos: n2, preview: V3(l4.map((e5) => e5.color)) });
      }
    }
    await this._generatePreviewsForLegendElements(i3, { opacity: e3.opacity }), this.legendElements = i3, this._loading = false, this.notifyChange("ready");
  }
  _constructLegendElementsForWMTSlayer() {
    this._loading = true, this.legendElements = [], this.removeHandles("wmts-activeLayer-watcher");
    const e3 = this.layer.activeLayer;
    this.addHandles(l(() => {
      const { layer: e4 } = this;
      return e4 && "activeLayer" in e4 && e4.activeLayer;
    }, () => this._constructLegendElementsForWMTSlayer()), "wmts-activeLayer-watcher");
    const t5 = e3.styleId ? e3.styles?.find(({ id: t6 }) => t6 === e3.styleId)?.legendUrl : void 0;
    t5 && (this.legendElements = [{ type: "symbol-table", title: e3.title, infos: [{ src: t5, opacity: this.opacity }] }]), this._loading = false, this.notifyChange("ready");
  }
  async _constructLegendElementsForWMSSublayers() {
    this._loading = true, this.legendElements = [], this.removeHandles("wms-sublayers-watcher");
    const e3 = this.layer;
    let t5 = null;
    (e3.customParameters || e3.customLayerParameters) && (t5 = __spreadValues(__spreadValues({}, e3.customParameters), e3.customLayerParameters)), this.addHandles(l(() => {
      const { layer: e4 } = this;
      return e4 && "sublayers" in e4 && e4.sublayers;
    }, () => this._constructLegendElementsForWMSSublayers()), "wms-sublayers-watcher"), this.legendElements = await this._generateLegendElementsForWMSSublayers(e3.sublayers, t5), this._loading = false, this.notifyChange("ready");
  }
  async _generateLegendElementsForWMSSublayers(e3, t5) {
    const i3 = this.layer, s3 = [];
    this.addHandles(e3.on("change", () => this._constructLegendElementsForWMSSublayers()), "wms-sublayers-watcher");
    const l4 = this.sublayerIds?.map((e4) => i3.findSublayerById(e4))?.filter(N) ?? [], n2 = l4.length ? l4 : e3.toArray();
    for (const r3 of n2) {
      const e4 = l(() => [r3.title, r3.visible, r3.legendEnabled], () => this._constructLegendElementsForWMSSublayers());
      if (this.addHandles(e4, "wms-sublayers-watcher"), !this.respectLayerVisibility || r3.visible && r3.legendEnabled) {
        const e5 = await this._generateSymbolTableElementForWMSSublayer(r3, t5);
        e5?.infos.length && s3.unshift(e5);
      }
    }
    return s3;
  }
  async _generateSymbolTableElementForWMSSublayer(e3, t5) {
    if (!e3.legendUrl && e3.sublayers) {
      const i3 = (await this._generateLegendElementsForWMSSublayers(e3.sublayers, t5)).filter((e4) => e4);
      return { type: "symbol-table", title: e3.title, infos: i3 };
    }
    return this._generateSymbolTableElementForLegendUrl(e3, t5);
  }
  async _generateSymbolTableElementForLegendUrl(e3, t5) {
    let i3 = e3.legendUrl;
    if (!i3) return;
    const l4 = { type: "symbol-table", title: e3.title || e3.name || String(e3.id ?? ""), infos: [] };
    t5 && (i3 = Bt(i3, t5));
    let r3 = null;
    const n2 = e3.layer?.opacity;
    try {
      r3 = (await f2(i3, { responseType: "image" })).data, r3 && (r3.style.opacity = n2);
    } catch {
    }
    return l4.infos.push({ src: i3, preview: r3, opacity: n2 }), l4;
  }
  _getLegendLayers(e3, t5) {
    const i3 = tt && tt[e3];
    return i3 ? Promise.resolve(i3) : this._legendRequest(t5).then((t6) => {
      const i4 = t6.layers;
      return tt[e3] = i4, i4;
    });
  }
  _legendRequest(e3) {
    const t5 = this.layer;
    let i3 = { f: "json", dynamicLayers: e3 };
    if (qe(t5)) {
      const e4 = t5.exportImageServiceParameters.rasterFunction;
      if (e4 && (i3.renderingRule = JSON.stringify(e4.functionDefinition?.toJSON() || e4.toJSON())), t5.bandIds && (i3.bandIds = t5.bandIds.join()), t5.raster || t5.viewId || t5.customParameters) {
        const { raster: e5, viewId: s3, customParameters: l5 } = t5;
        i3 = __spreadValues(__spreadValues({ raster: e5, viewId: s3 }, i3), l5);
      }
    }
    let l4 = t5.url.replace(/(\/)+$/, "");
    if ("version" in t5 && +t5.version >= 10.01) {
      const e4 = l4.indexOf("?");
      e4 > -1 ? l4 = l4.slice(0, e4) + "/legend" + l4.slice(e4) : l4 += "/legend";
    } else {
      const e4 = l4.toLowerCase().indexOf("/rest/"), t6 = -1 === e4 ? l4 : l4.slice(0, e4) + l4.slice(e4 + 5);
      l4 = he + "?soapUrl=" + encodeURI(t6) + "&returnbytes=true";
    }
    return f2(l4, { query: i3 }).then((e4) => e4.data);
  }
  async _constructLegendElementsForBuildingSceneLayer() {
    this._loading = true, this.legendElements = [], this.removeHandles("sublayers-watcher");
    const e3 = this.layer;
    this.addHandles(l(() => e3.sublayers, () => this._constructLegendElementsForBuildingSceneLayer()), "sublayers-watcher");
    try {
      this.legendElements = await this._generateLegendElementsForBuildingSublayers(e3.sublayers, this.opacity);
    } catch (t5) {
      n.getLogger(this).warn("Request to server for legend has failed!", t5);
    } finally {
      this._loading = false, this.notifyChange("ready");
    }
  }
  async _generateLegendElementsForBuildingSublayers(e3, t5) {
    let i3 = [];
    this.addHandles(e3.on("change", () => this._constructLegendElementsForBuildingSceneLayer()), "sublayers-watcher");
    const s3 = e3.toArray();
    for (const l4 of s3) {
      const e4 = l(() => ["renderer" in l4 && l4.renderer, l4.opacity, l4.title, l4.visible], () => this._constructLegendElementsForBuildingSceneLayer());
      if (this.addHandles(e4, "sublayers-watcher"), !this.respectLayerVisibility || l4.visible) {
        const e5 = null != l4?.opacity ? l4.opacity : null, s4 = null != e5 ? e5 * t5 : t5;
        if ("building-group" === l4.type) {
          const e6 = { type: "symbol-table", title: l4.title, infos: [] }, t6 = await this._generateLegendElementsForBuildingSublayers(l4.sublayers, s4);
          e6.infos.push(...t6), i3 = [e6, ...i3];
        } else if (l4.renderer) {
          i3 = [...await this._getRendererLegendElements(l4.renderer, { title: l4.title, opacity: s4, sublayer: l4 }), ...i3];
        }
      }
    }
    return i3.filter((e4) => !!e4 && (!("infos" in e4) || !e4.infos || e4.infos.length > 0));
  }
  async _constructLegendElementsForSublayers() {
    this._loading = true, this.removeHandles("sublayers-watcher");
    const e3 = this.layer;
    if (!($e(e3) || He(e3) || Ue(e3)) || this.hideLayersNotInCurrentView && !await this._isLayerInCurrentView()) return this.legendElements = [], this._loading = false, void this.notifyChange("ready");
    this.addHandles(l(() => e3.sublayers, () => this._constructLegendElementsForSublayers), "sublayers-watcher");
    try {
      this.legendElements = await this._generateLegendElementsForSublayers(e3.sublayers, this.opacity);
    } catch (t5) {
      n.getLogger(this).warn("Request to server for legend has failed!", t5);
    } finally {
      this._loading = false, this.notifyChange("ready");
    }
  }
  async _generateLegendElementsForSublayers(e3, t5, i3) {
    const s3 = this.layer;
    let l4 = [];
    this.addHandles(e3.on("change", () => this._constructLegendElementsForSublayers()), "sublayers-watcher");
    let n2 = e3.toArray();
    !i3 && this.sublayerIds && this.sublayerIds.length && (n2 = Ue(s3) ? this.sublayerIds.map((e4) => s3.findSublayerForSubtypeCode(e4)).filter(N) : this.sublayerIds.map((e4) => s3.findSublayerById(e4)).filter(N));
    for (const r3 of n2) {
      const e4 = l(() => [r3.renderer, r3.opacity, r3.title, r3.visible, r3.legendEnabled], () => this._constructLegendElementsForSublayers());
      this.addHandles(e4, "sublayers-watcher");
      const s4 = r3.createQuery().where, n3 = !this.hideLayersNotInCurrentView || await this._isLayerInCurrentView(s4), a3 = !this.respectLayerVisibility || r3.visible && r3.legendEnabled && this._isSublayerInScale(r3);
      if (n3 && a3) {
        const e5 = null != r3?.opacity ? r3.opacity : null, s5 = null != e5 ? e5 * t5 : t5, n4 = !Ke(r3) || r3.originIdOf("renderer") > 2 && !r3.sublayers;
        if (r3.renderer && n4) {
          await r3.load();
          l4 = [...await this._getRendererLegendElements(r3.renderer, { title: r3.title, opacity: s5, sublayer: r3 }), ...l4];
        } else if (Ke(r3)) {
          const e6 = await this._generateSymbolTableElementForSublayer(r3, s5, i3);
          e6 && l4.unshift(e6);
        }
      }
    }
    return l4.filter((e4) => !!e4 && (!("infos" in e4) || !e4.infos || e4.infos.length > 0));
  }
  async _generateSymbolTableElementForSublayer(e3, t5, i3) {
    if (!i3) {
      i3 = /* @__PURE__ */ new Map();
      const t6 = this.layer, s4 = e3.source;
      let l4 = null;
      if (!(!s4 || "map-layer" === s4.type && s4.mapLayerId === e3.id && (!s4.gdbVersion || s4.gdbVersion === ("gdbVersion" in t6 && t6.gdbVersion))) || e3.originIdOf("renderer") > 2 || e3.originIdOf("labelingInfo") > 2 || e3.originIdOf("labelsVisible") > 2) {
        const e4 = new y({ layer: this.layer });
        l4 = e4.hasDynamicLayers ? e4.dynamicLayers : null, e4.destroy();
      }
      const r3 = l4 || `${t6.uid}-default`;
      (await this._getLegendLayers(r3, l4)).forEach((e4) => i3.set(e4.layerId, e4));
    }
    const s3 = i3.get(e3.id);
    if ((!s3 || s3?.subLayerIds && s3.defaultVisibility) && e3.sublayers) {
      const s4 = await this._generateLegendElementsForSublayers(e3.sublayers, t5, i3);
      return { type: "symbol-table", title: e3.title, infos: s4 };
    }
    return this._generateSymbolTableElementForLegendLayer(s3, e3, t5);
  }
  _generateSymbolTableElementForLegendLayer(e3, t5, i3) {
    if (!e3?.legend || this.respectLayerVisibility && !this._isLegendLayerInScale(e3, t5)) return null;
    const s3 = t5?.renderer;
    let l4 = t5?.title || e3.layerName;
    if (s3 && (!t5 || t5?.originIdOf("renderer") > 2)) {
      const e4 = t5?.title || this._getRendererTitle(s3, t5);
      e4 && (l4 && "string" != typeof e4 && "title" in e4 && (e4.title = l4), l4 = e4);
    }
    const r3 = { type: "symbol-table", title: l4, legendType: e3.legendType || null, infos: [] }, n2 = t5 ? this._sanitizeLegendForSublayer(e3.legend.slice(), t5) : e3.legend;
    return e3.legendGroups && e3.legendGroups.length > 0 ? e3.legendGroups.forEach((s4) => {
      const l5 = { type: "symbol-table", title: s4.heading, legendType: e3.legendType || null, infos: this._generateSymbolTableElementInfosForLegendLayer(n2.filter((e4) => e4.groupId === s4.id), e3.layerId, s4.heading || r3.title || t5?.title, i3) };
      l5.infos?.length > 0 && r3.infos.push(l5);
    }) : r3.infos = this._generateSymbolTableElementInfosForLegendLayer(n2, e3.layerId, r3.title || t5?.title, i3), r3.infos.length > 0 ? r3 : null;
  }
  _generateSymbolTableElementInfosForLegendLayer(e3, t5, s3, l4) {
    return e3.map((e4) => {
      let r3 = e4.url;
      if (e4.imageData && e4.imageData.length > 0) r3 = `data:image/png;base64,${e4.imageData}`;
      else {
        if (r3.startsWith("http")) return null;
        r3 = t(`${this.layer.url}/${t5}/images/${r3}`);
      }
      let n2 = e4.label;
      return "<all other values>" === n2 && (n2 = "others"), { previewAriaLabel: n2 || s3, label: n2, src: r3, opacity: l4 ?? this.opacity, width: e4.width, height: e4.height };
    }).filter(N);
  }
  _isSublayerInScale(e3) {
    const t5 = e3.minScale || 0, i3 = e3.maxScale || 0;
    return !(t5 > 0 && t5 < this.scale || i3 > this.scale);
  }
  _isLegendLayerInScale(e3, t5) {
    const i3 = t5 || this.layer;
    let s3 = null, l4 = null, r3 = true;
    return !i3.minScale && 0 !== i3.minScale || !i3.maxScale && 0 !== i3.maxScale ? (0 === e3.minScale && i3.tileInfo && (s3 = i3.tileInfo.lods[0].scale), 0 === e3.maxScale && i3.tileInfo && (l4 = i3.tileInfo.lods[i3.tileInfo.lods.length - 1].scale)) : (s3 = Math.min(i3.minScale, e3.minScale) || i3.minScale || e3.minScale, l4 = Math.max(i3.maxScale, e3.maxScale)), (s3 > 0 && s3 < this.scale || l4 > this.scale) && (r3 = false), r3;
  }
  _sanitizeLegendForSublayer(e3, t5) {
    if ("version" in this.layer && +this.layer.version < 10.1 || 0 === e3.length) return e3;
    const i3 = t5.renderer, s3 = e3.some((e4) => e4.values);
    let l4 = 0, r3 = null;
    return s3 && e3.some((e4, t6) => (e4.values || (l4 = t6, r3 = e4, r3.label || (r3.label = "others")), null != r3)), i3 ? "unique-value" === i3.type ? r3 && (e3.splice(l4, 1), e3.push(r3)) : "class-breaks" === i3.type && (r3 && e3.splice(l4, 1), i3.legendOptions?.order || e3.reverse(), r3 && e3.push(r3)) : r3 && (e3.splice(l4, 1), e3.push(r3)), e3;
  }
  async _getRendererLegendElements(e3, t5 = {}) {
    if (!Me(e3, this.view)) return n.getLogger(this).warn(`Renderer of type '${e3.type}' not supported!`), [];
    if (De(e3)) return this._constructPointCloudRendererLegendElements(e3, t5);
    if (ke(e3)) return this._constructDotDensityRendererLegendElements(e3);
    const i3 = await this._loadRenderer(e3);
    return Pe(i3) ? this._constructPieChartRendererLegendElements(i3) : this._constructRendererLegendElements(i3, t5);
  }
  async _getLegendElementsForFeatureReduction(e3) {
    let t5 = null;
    return "binning" === e3.type ? t5 = e3.renderer : "cluster" === e3.type && (t5 = this._getClusterRenderer(e3)), t5 ? this._getRendererLegendElements(t5, { isFeatureReductionRenderer: true }) : [];
  }
  _getPointCloudRendererTitle(e3) {
    return (e3.legendOptions?.title || e3.field) ?? "";
  }
  async _constructPointCloudRendererLegendElements(e3, t5 = {}) {
    const i3 = t5.title, s3 = [];
    let l4 = null, r3 = null;
    if (ze(e3)) l4 = { type: "symbol-table", title: i3 || this._getPointCloudRendererTitle(e3), infos: [] }, e3.colorClassBreakInfos.forEach((e4) => {
      l4.infos.unshift({ label: e4.label || e4.minValue + " - " + e4.maxValue, value: [e4.minValue, e4.maxValue], symbol: this._getAppliedCloneSymbol(_e, e4.color) });
    });
    else if (Te(e3)) {
      const t6 = e3.stops;
      let s4 = null;
      if (t6?.length && (1 === t6.length && (s4 = t6[0].color), !s4)) {
        const e4 = t6[0].value, i4 = t6[t6.length - 1].value;
        if (null != e4 && null != i4) {
          s4 = s(e4 + (i4 - e4) / 2, t6);
        }
      }
      l4 = { type: "symbol-table", title: null, infos: [{ label: null, value: null, symbol: this._getAppliedCloneSymbol(_e, s4 || _e.color) }] };
      const n2 = u6(e3.stops ?? []) ?? [];
      r3 = { type: "color-ramp", title: i3 || this._getPointCloudRendererTitle(e3), infos: n2, preview: V3(n2.map((e4) => e4.color)) };
    } else je(e3) && (l4 = { type: "symbol-table", title: i3 || this._getPointCloudRendererTitle(e3), infos: [] }, e3.colorUniqueValueInfos?.forEach((e4) => {
      l4.infos.push({ label: e4.label || e4.values.join(", "), value: e4.values.join(", "), symbol: this._getAppliedCloneSymbol(_e, e4.color) });
    }));
    return l4?.infos.length && s3.push(l4), r3?.infos.length && s3.push(r3), await this._generatePreviewsForLegendElements(s3, { opacity: this.opacity, symbolConfig: { applyColorModulation: !!e3.colorModulation } }), s3;
  }
  async _getElementInfoForDotDensity(e3, t5) {
    const { color: i3, label: s3, valueExpressionTitle: l4 } = t5, { backgroundColor: r3, outline: n2, dotSize: a3 } = e3, o4 = this.cssEffectFilter, c7 = a3 + "-" + i3 + "-" + r3 + "-" + (n2 && JSON.stringify(n2.toJSON())) + "-" + o4, u8 = this._dotDensityUrlCache, d2 = u8.has(c7) ? u8.get(c7) : w4(e3, i3);
    u8.set(c7, d2);
    const y2 = { shape: { type: "image", x: 0, y: 0, width: d2.width, height: d2.height, src: d2.src }, fill: null, stroke: null, offset: [0, 0] }, h5 = l2([[y2]], [d2.width, d2.height], { cssEffectFilter: this.cssEffectFilter });
    return { opacity: 1, src: d2.src, preview: h5, width: d2.width, height: d2.height, previewAriaLabel: s3 || l4 };
  }
  async _constructDotDensityRendererLegendElements(e3) {
    const t5 = e3.calculateDotValue(this.view.scale), i3 = e3.legendOptions?.unit, s3 = { type: "symbol-table", title: { value: t5 && Math.round(t5), unit: i3 || "" }, infos: [] };
    for (const l4 of e3.attributes) {
      const t6 = await this._getElementInfoForDotDensity(e3, l4);
      t6.label = l4.label || l4.valueExpressionTitle || l4.field, s3.infos.push(t6);
    }
    return [s3];
  }
  async _constructPieChartRendererLegendElements(e3) {
    const t5 = [];
    let i3 = null;
    const s3 = e3.outline;
    e3.attributes.forEach((e4) => {
      const i4 = new u({ color: e4.color, outline: s3 }), l5 = e4.label || e4.valueExpressionTitle || e4.field;
      t5.push({ label: l5, symbol: i4 });
    });
    const l4 = t5.length ? [...t5] : [];
    if (e3.othersCategory?.color && 0 !== e3.othersCategory?.threshold) {
      const l5 = new u({ color: e3.othersCategory.color, outline: s3 });
      i3 = e3.othersCategory.label || "Other", t5.push({ label: i3, symbol: l5 });
    }
    if (e3.defaultColor?.a) {
      const i4 = new u({ color: e3.defaultColor, outline: s3 });
      t5.push({ label: e3.defaultLabel, symbol: i4 });
    }
    const r3 = await this._getVisualVariableLegendElements(e3, this.layer) || [];
    if (t5.length) {
      r3.unshift({ type: "symbol-table", title: null, infos: t5 });
      const n2 = l4.filter((e4) => e4.label !== i3).map((e4) => e4.symbol.color).filter(Boolean), a3 = S2(n2, { holePercentage: e3.holePercentage, backgroundColor: e3.backgroundFillSymbol?.color, cssEffectFilter: this.cssEffectFilter, outline: s3 });
      r3.unshift({ type: "pie-chart-ramp", title: this._getRendererTitle(e3, this.layer), infos: t5, preview: a3 });
    }
    return await this._generatePreviewsForLegendElements(r3, { opacity: this.layer.opacity, cssEffectFilter: this.cssEffectFilter }), r3;
  }
  async _getWhereClause(e3, t5, i3) {
    const s3 = await c3(e3, i3), l4 = /* @__PURE__ */ new Set(), { field: r3, field2: n2, field3: a3 } = t5;
    w(l4, i3, [r3, n2, a3]), await v(l4, i3, null, t5.valueExpression);
    const o4 = new Set(Array.from(l4, (e4) => e4.toLowerCase())), c7 = s3?.fieldNames.map((e4) => e4.toLowerCase());
    return c7?.some((e4) => !o4.has(e4)) ? null : s3;
  }
  async _processDefinitionExpression(e3, t5) {
    if (!("definitionExpression" in e3)) return;
    const i3 = e3.definitionExpression;
    i3 && this.respectLayerDefinitionExpression ? this._layerDefinitionExpression !== i3 && (this._layerDefinitionExpressionClause = await this._getWhereClause(i3, t5, e3.fieldsIndex)) : this._layerDefinitionExpressionClause = null, this._layerDefinitionExpression = i3;
  }
  async _processDisplayFilter(e3, t5) {
    if (!("displayFilterInfo" in e3)) return;
    const i3 = e3.displayFilterInfo ? u2(e3.displayFilterInfo, this.view) : null;
    return i3?.where ? this._layerDisplayFilter?.id !== i3?.id && (this._layerDisplayFilterClause = await this._getWhereClause(i3.where, t5, e3.fieldsIndex)) : this._layerDisplayFilterClause = null, this._layerDisplayFilter = i3, i3;
  }
  async _constructRendererLegendElements(e3, t5 = {}) {
    const { title: i3, sublayer: s3, isFeatureReductionRenderer: l4 } = t5, r3 = s3 || this.layer, n2 = V2(e3, "reference-size"), a3 = V2(e3, "spike"), o4 = l4 && "renderer" in r3 && r3.renderer ? r3.renderer : e3;
    let c7 = null;
    Re(o4) && (await this._processDefinitionExpression(r3, o4), c7 = await this._processDisplayFilter(r3, o4)), this._hasColorRamp = false, this._hasOpacityRamp = false, this._hasSizeRamp = false, this._scaleDrivenSizeVariable = null;
    const u8 = await this._getVisualVariableLegendElements(e3, r3) || [], d2 = { type: "symbol-table", title: i3 || this._getRendererTitle(e3, r3), infos: [] };
    let y2 = null, h5 = false;
    const f6 = /* @__PURE__ */ new Set();
    if (we(e3) && !this._hasSizeRamp) {
      const t6 = await w2(e3);
      d2.infos.push({ label: null, symbol: t6 });
    } else if (Ze(e3)) {
      let t6 = i3;
      const s4 = Qe(e3) ? "univariate-above-and-below-ramp" : "univariate-color-size-ramp", l5 = u8.findIndex((e4) => "color-ramp" === e4.type), r4 = -1 !== l5 ? u8.splice(l5, 1)[0] : null, n3 = u8.findIndex((e4) => "size-ramp" === e4.type), a4 = -1 !== n3 ? u8.splice(n3, 1)[0] : null, o5 = [];
      r4 && (t6 = r4.title, o5.push(r4)), a4 && (t6 = a4.title, o5.push(a4)), o5.length > 0 && u8.push({ type: s4, title: t6, infos: o5 });
    } else if (Ve(e3)) {
      const t6 = r2(e3);
      u8.push({ type: "heatmap-ramp", title: i3 || this._getRendererTitle(e3, r3), infos: t6, preview: V3(t6.map((e4) => e4.color), { cssEffectFilter: this.cssEffectFilter }) });
    } else if (Re(e3)) {
      const t6 = e3.authoringInfo;
      if ("relationship" === t6?.type) {
        const { numClasses: i4, field1: s4, field2: l5 } = t6, n3 = t6.focus;
        if (i4 && s4 && l5) {
          const t7 = [s4, l5];
          let a4 = u4(n3) || 0;
          for (const e4 of t7) {
            const { field: t8, normalizationField: i5, label: s5 } = e4, l6 = s5 || { field: this._getFieldAlias(t8, r3), normField: i5 && this._getFieldAlias(i5, r3) }, n4 = et.clone();
            n4.angle = a4, d2.infos.push({ label: l6, symbol: n4 }), f6.add(n4), a4 += 90;
          }
          const o5 = i2({ focus: n3, numClasses: i4, infos: e3.uniqueValueInfos ?? [] });
          u8.unshift(o5);
        }
      } else if (qe(this.layer) || We(this.layer)) {
        const { uniqueValueInfos: t7 } = e3;
        if (t7) for (const e4 of t7) e4.symbol && await this._checkClausesForUVR(o4, e4.value) && d2.infos.push({ label: e4.label || e4.value, value: e4.value, symbol: e4.symbol });
      } else {
        const { field: t7, field2: s4, field3: l5, fieldDelimiter: a4, valueExpression: u9, defaultSymbol: y3 } = e3, f7 = !(!t7 && !u9 || !s4 && !l5), m3 = c7?.title?.trim(), p4 = [], { uniqueValueGroups: g4 } = e3;
        if (g4) for (const e4 of g4) {
          const i4 = { type: "symbol-table", title: e4.heading, infos: [] }, { classes: c8 } = e4;
          if (c8) for (const e5 of c8) {
            const { symbol: c9, values: d3 } = e5;
            if (c9) {
              const y4 = [], h6 = [];
              for (const e6 of d3 ?? []) {
                const { value: i5, value2: n3, value3: o5 } = e6, c10 = [], d4 = [];
                (t7 || u9) && (c10.push(i5), d4.push(this._getDomainName(t7, i5, r3) ?? d(i5, C(r3, t7, this.view.timeZone)))), s4 && (c10.push(n3), d4.push(this._getDomainName(s4, n3, r3) ?? d(n3, C(r3, s4, this.view.timeZone)))), l5 && (c10.push(o5), d4.push(this._getDomainName(l5, o5, r3) ?? d(o5, C(r3, l5, this.view.timeZone)))), y4.push(f7 ? c10.join(a4 || "") : c10[0]), h6.push(d4.join(" - "));
              }
              const m4 = y4.join(", ");
              let p5 = e5.label;
              if (!p5) {
                const e6 = h6.filter(Boolean);
                p5 = e6.length ? e6.join(", ") : m4;
              }
              let g5 = c9;
              "cim" === g5.type && n2 && (g5 = g5.clone(), f3(g5, { innerDotSize: 0.5 * ye, outerRingSize: ye }));
              let b4 = false;
              for (const e6 of y4) if (b4 = await this._checkClausesForUVR(o4, e6), b4) break;
              b4 && i4.infos.push({ label: p5, value: m4, symbol: g5 });
            }
          }
          i4.infos.length && p4.push(i4);
        }
        if (p4.length) {
          const t8 = p4[0];
          if (1 === p4.length && "title" in t8 && !t8.title) {
            const e4 = t8.infos?.filter(Xe) ?? [];
            d2.infos.push(...e4);
          } else y3 && (p4.push({ type: "symbol-table", infos: [{ label: e3.defaultLabel || "others", symbol: y3 }] }), h5 = true), d2.infos.push(...p4);
          i3 || e3.legendOptions?.title || e3.valueExpressionTitle ? m3 && (d2.title = `${d2.title} (${m3})`) : d2.title = m3;
        }
      }
      e3.defaultSymbol && !h5 && (d2.infos.push({ label: e3.defaultLabel || "others", symbol: e3.defaultSymbol }), h5 = true);
    } else if (Ie(e3)) {
      if (!n2 && !a3) {
        y2 = this._isUnclassedRenderer(e3);
        if (!y2 || !this._hasSizeRamp) {
          const t6 = e3.classBreakInfos.filter(({ symbol: e4 }) => e4), i4 = "ascending-values" === e3.legendOptions?.order;
          for (const { label: e4, minValue: s4, maxValue: l5, symbol: n3 } of t6) {
            const t7 = e4 || (y2 ? null : `${s4} - ${l5}`), a4 = { previewAriaLabel: t7 || d2.title || r3.title, label: t7, value: [s4, l5], symbol: n3 };
            i4 ? d2.infos.push(a4) : d2.infos.unshift(a4);
          }
          y2 && (d2.title = null), this._updateInfosForClassedSizeRenderer(e3, d2.infos);
        }
        e3.defaultSymbol && !y2 && (d2.infos.push({ label: e3.defaultLabel || "others", symbol: e3.defaultSymbol }), h5 = true);
      }
    } else if (Ee(e3)) if (We(this.layer) || Ge(this.layer)) {
      const t6 = await this._constructTileImageryStretchRendererElements(e3);
      Je(t6) ? u8.push(t6) : d2.infos = t6;
    } else {
      const t6 = this.layer;
      let i4, s4;
      e3.customStatistics?.length && ({ min: i4, max: s4 } = e3.customStatistics[0]);
      let l5 = [], r4 = t6.serviceRasterInfo;
      if (t6.rasterFunction) try {
        r4 = await t6.generateRasterInfo(t6.rasterFunction);
      } catch {
      }
      const n3 = u3(r4.pixelType);
      if (1 === r4.bandCount) {
        const l6 = t6.bandIds?.[0] || 0;
        i4 = null != i4 ? i4 : r4.statistics ? r4.statistics[l6].min : n3[0], s4 = null != s4 ? s4 : r4.statistics ? r4.statistics[l6].max : n3[1], i4 || s4 ? u8.push(await this._getStretchLegendElements(e3, { min: i4, max: s4 })) : this._getServerSideLegend();
      } else if (1 === t6.bandIds?.length) i4 = null != i4 ? i4 : r4.statistics ? r4.statistics[t6.bandIds[0]].min : n3[0], s4 = null != s4 ? s4 : r4.statistics ? r4.statistics[t6.bandIds[0]].max : n3[1], i4 || s4 ? u8.push(await this._getStretchLegendElements(e3, { min: i4, max: s4 })) : this._getServerSideLegend();
      else if (r4.bandCount >= 3) {
        const { bandInfos: e4 } = r4, { bandIds: i5 } = t6;
        e4.length >= r4.bandCount ? 3 === i5?.length ? (l5 = i5.map((t7) => e4[t7].name), d2.infos = this._createSymbolTableElementMultiBand(l5)) : "lerc" === t6.format ? (l5 = [0, 1, 2].map((t7) => e4[t7].name), d2.infos = this._createSymbolTableElementMultiBand(l5)) : this._getServerSideLegend() : "lerc" === t6.format ? (l5 = ["band1", "band2", "band3"], d2.infos = this._createSymbolTableElementMultiBand(l5)) : this._getServerSideLegend();
      } else this._getServerSideLegend();
    }
    else if (Le(e3)) e3.colormapInfos.forEach((e4) => {
      d2.infos.push({ label: e4.label, value: e4.value, symbol: this._getAppliedCloneSymbol(Se, e4.color) });
    });
    else if (Ce(e3)) {
      let i4 = e3.symbol;
      switch (t5.geometryType) {
        case "point":
          i4 = "pointSymbol" in r3 ? r3.pointSymbol : null;
          break;
        case "polyline":
          i4 = "lineSymbol" in r3 ? r3.lineSymbol : null;
          break;
        case "polygon":
          i4 = "polygonSymbol" in r3 ? r3.polygonSymbol : null;
      }
      const s4 = this._clusterSizeVariable && this._getClusterSymbol() || !this._hasSizeRamp;
      e3.symbol && s4 && d2.infos.push({ previewAriaLabel: e3.label || d2.title || r3.title, label: e3.label, symbol: i4 });
    } else if (ve(e3)) {
      e3.outputUnit && (this.title = "(" + e3.toJSON().outputUnit + ")"), d2.title = e3.attributeField;
      const t6 = e3.getClassBreakInfos();
      t6?.length ? t6.forEach((e4) => {
        d2.infos.push({ label: e4.minValue + " - " + e4.maxValue, symbol: e4.symbol });
      }) : d2.infos.push({ label: e3.attributeField, symbol: e3.getDefaultSymbol() });
    } else Fe(e3) && u8.push(await this._getStretchLegendElements(e3, { min: 0, max: 255 }));
    const m2 = e3.defaultSymbol;
    !m2 || h5 || Ce(e3) || y2 && !this._hasColorRamp && !this._hasSizeRamp && !this._hasOpacityRamp || u8.push({ type: "symbol-table", infos: [{ label: e3.defaultLabel || "others", symbol: m2 }] }), d2.infos.length && u8.unshift(d2);
    const p3 = null == t5.opacity ? this.opacity : t5.opacity, g3 = this._isTallSymbol("visualVariables" in e3 ? e3.visualVariables : null), b3 = qe(this.layer) || We(this.layer);
    return await this._generatePreviewsForLegendElements(u8, { opacity: p3, symbolConfig: { isTall: g3, isSquareFill: b3 }, cssEffectFilter: this.cssEffectFilter }, { arrowMarkerSymbols: f6 }), e3 = null, u8;
  }
  async _waitForLayerViewUpdate(e3) {
    await j(() => !e3.updating);
  }
  async _checkFeatureCountForExpression(e3, t5) {
    const i3 = this.layerView;
    if (!(i3 && "createQuery" in i3 && "queryFeatureCount" in i3)) return true;
    try {
      await this._waitForLayerViewUpdate(i3);
      const s3 = i3.createQuery();
      e3 && (s3.where = j2(s3.where, e3)), t5 && (s3.geometry = t5);
      return await i3.queryFeatureCount(s3) > 0;
    } catch {
      return true;
    }
  }
  async _checkClausesForUVR(e3, t5) {
    const i3 = Ye(e3, t5);
    if (!i3) return true;
    return (!!!(!this._layerDefinitionExpressionClause && this._layerDefinitionExpression && this.respectLayerDefinitionExpression || !this._layerDisplayFilterClause && this._layerDisplayFilter?.where) || await this._checkFeatureCountForExpression(`${e3.field} = ${t5}`)) && (!this._layerDefinitionExpressionClause || this._layerDefinitionExpressionClause.testFeature(i3)) && (!this._layerDisplayFilterClause || this._layerDisplayFilterClause.testFeature(i3));
  }
  _getServerSideLegend() {
    setTimeout(() => this.buildLegendElementsForTools(), 0);
  }
  _getAllInfos(e3) {
    const t5 = e3?.infos;
    return t5 ? t5.reduce((e4, t6) => e4.concat(this._getAllInfos(t6)), []) : [e3];
  }
  async _constructTileImageryStretchRendererElements(e3) {
    const t5 = this.layer, i3 = t5.symbolizer.rasterInfo ?? t5.raster.rasterInfo;
    let s3, l4;
    const r3 = e3?.customStatistics?.length ? e3.customStatistics : i3?.statistics;
    if (r3) ({ min: s3, max: l4 } = r3[0]);
    else {
      const e4 = u3(i3.pixelType);
      s3 = e4[0], l4 = e4[1];
    }
    if (t5.hasStandardTime() && (s3 = t5.getStandardTimeValue(s3), l4 = t5.getStandardTimeValue(l4)), 1 === i3.bandCount || 1 === t5.bandIds?.length) return this._getStretchLegendElements(e3, { min: s3, max: l4 });
    const n2 = (t5?.bandIds?.length ? t5.bandIds : Array.from(Array(Math.min(i3.bandCount, 3)).keys())).map((e4) => i3.bandInfos[e4].name);
    return n2.length < 3 ? n2.push(n2[1]) : n2.length > 3 && n2.splice(3), this._createSymbolTableElementMultiBand(n2);
  }
  async _getStretchLegendElements(e3, t5) {
    const i3 = e3.colorRamp?.toJSON(), s3 = c5(i3, t5);
    return { type: "stretch-ramp", title: "", infos: s3, preview: V3(s3.map((e4) => e4.color)) };
  }
  _getClusterSymbol() {
    const e3 = this.layer, t5 = "featureReduction" in e3 && e3.featureReduction, i3 = t5 && "symbol" in t5 && t5.renderer;
    return i3 && true !== i3?.authoringInfo?.isAutoGenerated ? null : t5 && "symbol" in t5 ? t5.symbol : null;
  }
  async _getSizeLegendElement(e3, t5, i3, s3) {
    return { type: "size-ramp", title: this._clusterSizeVariable ? this._getClusterTitle(t5) : e3, infos: await L2(i3, t5, await g2(i3), this.scale, this.view, s3, this._clusterSizeVariable ? this._getClusterSymbol() : null) };
  }
  _createSymbolTableElementMultiBand(e3) {
    const t5 = [], i3 = ["red", "green", "blue"];
    return e3.forEach((e4, s3) => {
      t5.push({ label: { colorName: i3[s3], bandName: e4 }, src: c4[s3], opacity: this.opacity ?? 1 });
    }), t5;
  }
  _updateInfosForClassedSizeRenderer(e3, t5) {
    const i3 = "class-breaks-size" === e3.authoringInfo?.type, s3 = e3.classBreakInfos.some((e4) => h2(e4.symbol));
    if (i3 && s3) {
      const i4 = w3, s4 = S, l4 = e3.classBreakInfos.length, r3 = (i4 - s4) / (l4 > 1 ? l4 - 1 : l4);
      t5.forEach((e4, t6) => {
        e4.size = i4 - r3 * t6;
      });
    }
  }
  _isTallSymbol(e3) {
    let t5 = false, i3 = false;
    if (e3) for (let s3 = 0; s3 < e3.length && (!t5 || !i3); s3++) {
      const l4 = e3[s3];
      "size" === l4.type && ("height" === l4.axis && (t5 = true), "width-and-depth" === l4.axis && (i3 = true));
    }
    return t5 && i3;
  }
  async _generatePreviewsForLegendElements(e3, t5, i3) {
    const s3 = [];
    for (const l4 of e3) for (const e4 of l4.infos ?? []) if ("infos" in e4 && e4.infos && s3.push(this._generatePreviewsForLegendElements([e4], t5, i3)), Xe(e4) && e4.symbol && !e4.preview) {
      let r3 = true;
      if ("cim" === e4.symbol.type) {
        const { minScale: t6, maxScale: i4 } = e4.symbol.data;
        (t6 && t6 < this.scale || i4 && i4 > this.scale) && (r3 = false);
      }
      r3 && s3.push(this._generateSymbolPreviewForInfo(e4, __spreadProps(__spreadValues({}, t5), { clipBloomEffect: "theme" in l4 && "spike" === l4.theme, cssEffectFilter: i3?.arrowMarkerSymbols?.has(e4.symbol) ? null : t5.cssEffectFilter }), i3 ? { applyScaleDrivenSize: !i3.arrowMarkerSymbols?.has(e4.symbol) } : void 0));
    }
    await Promise.all(s3);
  }
  async _getSize(e3, t5) {
    let i3 = null == e3.size && this._hasSizeRamp ? e(22) : e3.size;
    if (this._scaleDrivenSizeVariable && t5?.applyScaleDrivenSize) {
      const { getSize: t6 } = await import("./visualVariableUtils-IECIRYDC.js");
      i3 = t6(this._scaleDrivenSizeVariable, null, { view: this.view.type, scale: this.scale, shape: "simple-marker" === e3.symbol.type ? e3.symbol.style : null });
    }
    return i3;
  }
  _getPreviewCIMOptions(e3) {
    return { style: "legend", cimOptions: { allowScalingUp: this._hasSizeRamp || !(!this._scaleDrivenSizeVariable || !e3?.applyScaleDrivenSize), viewParams: this.isScaleDriven ? { viewingMode: "2d" === this.view?.type ? "map" : this.view?.viewingMode, scale: this.view?.scale } : null } };
  }
  async _generateSymbolPreviewForInfo(e3, t5 = {}, i3) {
    const { symbol: s3 } = e3;
    try {
      if (t5.size = await this._getSize(e3, i3), t5.scale = false, "cim" === s3.type) {
        const e4 = this._getPreviewCIMOptions(i3);
        t5 = __spreadValues(__spreadValues({}, t5), e4);
      }
      e3.preview = await F(s3, t5);
    } catch {
      e3.preview = null, n.getLogger(this).warn(`Generating symbol preview failed for symbol type: ${s3?.type}`);
    }
  }
  _getClusterRenderer(e3) {
    this._clusterSizeVariable = null;
    const t5 = "renderer" in this.layer ? this.layer.renderer : null, i3 = e3.renderer?.clone() || t5?.clone(), s3 = l3(e3, this.layerView, this.view);
    if (s3 && null != i3 && "visualVariables" in i3) {
      const t6 = i3.visualVariables?.some((e4) => "size" === e4.type && "outline" !== e4.target && !ge.test(e4.valueExpression));
      if (!t6) {
        if ("clusterMinSize" in e3 && "clusterMaxSize" in e3) {
          const { clusterMinSize: t8, clusterMaxSize: i4 } = e3;
          s3.legendOptions = new i({ showLegend: t8 !== i4 });
        }
        const t7 = i3.visualVariables || [];
        i3.visualVariables = t7.concat([s3]), this._clusterSizeVariable = s3;
      }
    }
    return i3;
  }
  async _loadRenderer(e3) {
    if (it.has(e3)) return it.get(e3);
    const t5 = [], i3 = e3.clone(), s3 = await g2(i3);
    if (Ie(i3) || Re(i3)) {
      const e4 = (i3.classBreakInfos || i3.uniqueValueInfos).map((e5) => this._fetchSymbol(e5.symbol, s3).then((t6) => {
        e5.symbol = t6;
      }).catch(() => {
        e5.symbol = null;
      }));
      Array.prototype.push.apply(t5, e4);
    }
    return t5.push(this._fetchSymbol(i3.symbol || i3.defaultSymbol, i3.defaultSymbol ? null : s3).then((e4) => {
      this._applySymbolToRenderer(i3, e4, Ce(i3));
    }).catch(() => {
      this._applySymbolToRenderer(i3, null, Ce(i3));
    })), await Promise.allSettled(t5), it.set(e3, i3), i3;
  }
  _applySymbolToRenderer(e3, t5, i3) {
    i3 ? e3.symbol = t5 : e3.defaultSymbol = t5;
  }
  async _fetchSymbol(e3, t5) {
    if (!e3) throw new Error();
    if ("web-style" === e3.type) {
      const i3 = this._webStyleSymbolCache;
      try {
        const s3 = await e3.fetchSymbol({ cache: i3 });
        return this._getAppliedCloneSymbol(s3, t5);
      } catch {
        throw n.getLogger(this).warn("Fetching web-style failed!"), new Error();
      }
    }
    return this._getAppliedCloneSymbol(e3, t5);
  }
  _getAppliedCloneSymbol(e3, i3) {
    if (!e3 || !i3) return e3;
    const s3 = e3.clone(), l4 = i3 && i3.toRgba();
    return s3.type.includes("3d") ? this._applyColorTo3dSymbol(s3, l4) : "cim" === s3.type ? k(s3, i3) : s3.color && (s3.color = new g(l4 || s3.color)), s3;
  }
  _applyColorTo3dSymbol(e3, i3) {
    i3 && e3.symbolLayers.forEach((e4) => {
      e4 && (e4.material || (e4.material = {}), e4.material.color = new g(i3));
    });
  }
  async _getVisualVariableLegendElements(e3, t5) {
    if (!("visualVariables" in e3) || "vector-field" === e3.type) return null;
    const i3 = e3.visualVariables ?? [], s3 = [], l4 = [], n2 = [], a3 = V2(e3, "reference-size") ?? V2(e3, "spike");
    let o4;
    const u8 = this._clusterSizeVariable;
    if (2 === a3?.sizeStops?.length && (Ie(e3) || Re(e3))) {
      const [e4, t6] = a3.sizeStops, i4 = u8 ? u8.minDataValue : e4.value, s4 = u8 ? u8.maxDataValue : t6.value;
      o4 = new V({ field: a3.field ?? void 0, normalizationField: a3.normalizationField, minSize: r(e4.size, 10, 100), maxSize: r(t6.size, 50, 150), minDataValue: i4, maxDataValue: s4 }), l4.push(o4);
    }
    for (const r3 of i3) if ("color" === r3.type) s3.push(r3);
    else if ("size" === r3.type) {
      if ("cluster_count" === r3.field && o4) continue;
      l4.push(r3);
    } else "opacity" === r3.type && n2.push(r3);
    const d2 = [...s3, ...l4, ...n2];
    let y2, h5;
    if (0 === s3.length && Ie(e3) && e3.classBreakInfos && 1 === e3.classBreakInfos.length) {
      const t6 = e3.classBreakInfos[0];
      y2 = t6 && t6.symbol;
    }
    if (0 === s3.length && Ce(e3) && (y2 = e3.symbol), y2) if (y2.type.includes("3d")) {
      const e4 = y2.symbolLayers.at(0);
      "water" === e4.type ? null != e4.color && (h5 = e4.color) : null != e4.material?.color && (h5 = e4.material.color);
    } else y2.url || (h5 = y2.color);
    const f6 = this.cssEffectFilter;
    return (await Promise.all(d2.map(async (i4) => {
      if (false !== i4.legendOptions?.showLegend) {
        const s4 = we(e3) ? i4.field : this._getRampTitle(i4, t5);
        let l5 = null;
        const r3 = h4(t5, i4, this.view.timeZone);
        if ("color" === i4.type) {
          const e4 = await t4(i4, null, r3) ?? [];
          l5 = { type: "color-ramp", title: s4, infos: e4, preview: V3(e4.map((e5) => e5.color), { cssEffectFilter: f6 }) }, this._hasColorRamp || (this._hasColorRamp = e4.length > 0);
        } else if ("size" === i4.type && "outline" !== i4.target) ge.test(i4.valueExpression) ? this._clusterSizeVariable || (this._scaleDrivenSizeVariable = i4) : (l5 = await this._getSizeLegendElement(s4, i4, e3, r3), o4 === i4 && "spike" === a3?.theme && (l5.theme = a3.theme), this._hasSizeRamp || (this._hasSizeRamp = !(null == l5.infos || !l5.infos.length)));
        else if ("opacity" === i4.type) {
          const e4 = await t4(i4, h5, r3) ?? [];
          l5 = { type: "opacity-ramp", title: s4, infos: e4, preview: V3(e4.map((e5) => e5.color), { cssEffectFilter: f6 }) }, this._hasOpacityRamp || (this._hasOpacityRamp = e4.length > 0);
        }
        return l5?.infos ? l5 : null;
      }
    }))).filter(N);
  }
  _getDomainName(e3, t5, i3) {
    if (e3 && "function" != typeof e3) {
      const s3 = "getField" in i3 && i3.getField?.(e3), l4 = s3 && "getFieldDomain" in i3 && i3.getFieldDomain ? i3.getFieldDomain(s3.name) : null;
      return "coded-value" === l4?.type ? l4.getName(t5) : null;
    }
    return null;
  }
  _getClusterTitle(e3) {
    const t5 = this.layer, i3 = e3.field;
    if ("featureReduction" in t5 && "cluster" === t5.featureReduction?.type) {
      const e4 = t5.featureReduction, s3 = "popupTemplate" in e4 && e4.popupTemplate, l4 = s3 && s3.fieldInfos;
      if (l4) {
        for (const t6 of l4) if (t6.fieldName === i3) return "cluster_count" === i3 ? t6.label || { showCount: true } : t6.label;
      }
    }
    return { showCount: true };
  }
  _getRampTitle(e3, t5) {
    let i3 = e3.field, s3 = e3.normalizationField, l4 = false, r3 = false, n2 = false, a3 = null;
    i3 = "function" == typeof i3 ? null : i3, s3 = "function" == typeof s3 ? null : s3;
    const o4 = e3.legendOptions?.title;
    if (null != o4) a3 = o4;
    else if (e3.valueExpressionTitle) a3 = e3.valueExpressionTitle;
    else {
      if ("renderer" in t5 && t5.renderer && "authoringInfo" in t5.renderer && t5.renderer.authoringInfo?.visualVariables) {
        const e4 = t5.renderer.authoringInfo.visualVariables;
        for (let t6 = 0; t6 < e4.length; t6++) {
          const i4 = e4[t6];
          if ("color" === i4.type) {
            if ("ratio" === i4.style) {
              l4 = true;
              break;
            }
            if ("percent" === i4.style) {
              r3 = true;
              break;
            }
            if ("percent-of-total" === i4.style) {
              n2 = true;
              break;
            }
          }
        }
      }
      a3 = { field: i3 && this._getFieldAlias(i3, t5), normField: s3 && this._getFieldAlias(s3, t5), ratio: l4, ratioPercent: r3, ratioPercentTotal: n2 };
    }
    return a3;
  }
  _getRendererTitle(e3, t5) {
    const i3 = e3;
    if (i3.legendOptions?.title) return i3.legendOptions.title;
    if (i3.valueExpressionTitle) return i3.valueExpressionTitle;
    let s3 = i3.field, l4 = null, r3 = null;
    if (Ie(i3) && (l4 = i3.normalizationField, r3 = "percent-of-total" === i3.normalizationType), s3 = "function" == typeof s3 ? null : s3, l4 = "function" == typeof l4 ? null : l4, Re(i3)) {
      const { field2: e4, field3: l5, fieldDelimiter: r4 } = i3;
      let n3 = s3 && this._getFieldAlias(s3, t5);
      return e4 && (n3 = `<${n3}>${r4}<${this._getFieldAlias(e4, t5)}>`, l5 && (n3 = `${n3}${r4}<${this._getFieldAlias(l5, t5)}>`)), n3;
    }
    let n2 = null;
    return (s3 || l4) && (n2 = { field: s3 && this._getFieldAlias(s3, t5), normField: l4 && this._getFieldAlias(l4, t5), normByPct: r3 }), n2;
  }
  _getFieldAlias(e3, t5) {
    const i3 = B(t5, { checkFeatureReduction: true });
    if (i3) return i3.getFieldAlias(e3) || e3;
    const s3 = "popupTemplate" in t5 ? t5.popupTemplate : null, l4 = s3?.fieldInfos;
    let r3 = l4?.find((t6) => e3 === t6.fieldName), n2 = null;
    "getField" in t5 && t5.getField ? n2 = t5.getField(e3) : "fieldsIndex" in t5 && t5.fieldsIndex && (n2 = t5.fieldsIndex.get(e3));
    let a3 = null;
    const o4 = "featureReduction" in t5 && t5.featureReduction;
    o4 && (r3 ??= "popupTemplate" in o4 ? o4.popupTemplate?.fieldInfos?.find((t6) => e3?.toLowerCase() === t6.fieldName?.toLowerCase()) : void 0, "fields" in o4 && o4.fields && (a3 = o4.fields.find((t6) => t6.name?.toLowerCase() === e3?.toLowerCase())));
    const c7 = r3 || n2 || a3;
    let u8 = null;
    return c7 && (u8 = r3?.label || n2?.alias || a3?.alias || "name" in c7 && c7.name || "fieldName" in c7 && c7.fieldName || null), u8;
  }
  _isUnclassedRenderer(e3) {
    const t5 = e3.visualVariables;
    let i3 = false;
    return Ie(e3) && e3.classBreakInfos && 1 === e3.classBreakInfos.length && t5 && (i3 = e3.field ? t5.some((t6) => !(!t6 || e3.field !== t6.field || (e3.normalizationField || t6.normalizationField) && e3.normalizationField !== t6.normalizationField)) : !!t5.length), i3;
  }
};
__decorate([a2()], st.prototype, "_loading", void 0), __decorate([a2()], st.prototype, "children", void 0), __decorate([a2({ readOnly: true })], st.prototype, "cssEffectFilter", null), __decorate([a2()], st.prototype, "layerView", void 0), __decorate([a2()], st.prototype, "layer", void 0), __decorate([a2()], st.prototype, "legendElements", void 0), __decorate([a2({ readOnly: true })], st.prototype, "loading", null), __decorate([a2({ readOnly: true })], st.prototype, "opacity", null), __decorate([a2()], st.prototype, "parent", void 0), __decorate([a2({ readOnly: true })], st.prototype, "ready", null), __decorate([a2()], st.prototype, "hideLayersNotInCurrentView", void 0), __decorate([a2()], st.prototype, "keepCacheOnDestroy", void 0), __decorate([a2()], st.prototype, "respectLayerDefinitionExpression", void 0), __decorate([a2()], st.prototype, "respectLayerVisibility", void 0), __decorate([a2({ readOnly: true })], st.prototype, "scale", null), __decorate([a2()], st.prototype, "sublayerIds", void 0), __decorate([a2({ readOnly: true })], st.prototype, "isScaleDriven", null), __decorate([a2()], st.prototype, "title", void 0), __decorate([a2({ readOnly: true, value: 0 })], st.prototype, "version", null), __decorate([a2()], st.prototype, "view", void 0), st = __decorate([c("esri.widgets.Legend.support.ActiveLayerInfo")], st);

// node_modules/@arcgis/core/widgets/Legend/LegendViewModel.js
var c6 = { state: "state", view: "view", allLayerViews: "all-layer-views", legendProperties: "legend-properties" };
var L3 = q.ofType(st);
var f5 = /* @__PURE__ */ new Set(["esri.layers.BuildingSceneLayer", "esri.layers.CatalogLayer", "esri.layers.CSVLayer", "esri.layers.FeatureLayer", "esri.layers.GeoJSONLayer", "esri.layers.GeoRSSLayer", "esri.layers.GroupLayer", "esri.layers.HeatmapLayer", "esri.layers.ImageryLayer", "esri.layers.ImageryTileLayer", "esri.layers.MapImageLayer", "esri.layers.OGCFeatureLayer", "esri.layers.OrientedImageryLayer", "esri.layers.ParquetLayer", "esri.layers.PointCloudLayer", "esri.layers.StreamLayer", "esri.layers.SceneLayer", "esri.layers.SubtypeGroupLayer", "esri.layers.TileLayer", "esri.layers.VoxelLayer", "esri.layers.WFSLayer", "esri.layers.WMSLayer", "esri.layers.WMTSLayer", "esri.layers.WCSLayer", "esri.layers.LinkChartLayer", "esri.layers.catalog.CatalogFootprintLayer", "esri.layers.catalog.CatalogDynamicGroupLayer", "esri.layers.knowledgeGraph.KnowledgeGraphSublayer", "esri.layers.KnowledgeGraphLayer"]);
var u7 = "view.basemapView.baseLayerViews";
var p2 = "view.groundView.layerViews";
var v3 = "view.basemapView.referenceLayerViews";
var w5 = [u7, p2, "view.layerViews", v3];
var _ = class extends b {
  constructor(e3) {
    super(e3), this._layerViewByLayerId = {}, this._layerInfosByLayerViewId = {}, this._activeLayerInfosByLayerViewId = {}, this._activeLayerInfosWithNoParent = new q(), this._activeLayerInfosPromises = /* @__PURE__ */ new WeakMap(), this.activeLayerInfos = new L3(), this.basemapLegendVisible = false, this.groundLegendVisible = false, this.hideLayersNotInCurrentView = false, this.keepCacheOnDestroy = false, this.respectLayerDefinitionExpression = false, this.respectLayerVisibility = true, this.layerInfos = [], this.view = null;
  }
  initialize() {
    this.addHandles(l(() => this.view, () => this._viewHandles(), h), c6.view), this.addHandles(R(() => this._refresh()));
  }
  destroy() {
    this._destroyViewActiveLayerInfos(), this.view = null;
  }
  get loading() {
    return this.activeLayerInfos.some((e3) => e3.loading);
  }
  get state() {
    return this.view?.ready ? "ready" : "disabled";
  }
  _viewHandles() {
    this.removeHandles(c6.state), this.view && this.addHandles(l(() => this.state, () => this._stateHandles(), h), c6.state);
  }
  _stateHandles() {
    this._resetAll(), "ready" === this.state && this._watchPropertiesAndAllLayerViews();
  }
  _resetAll() {
    this.removeHandles([c6.allLayerViews, c6.legendProperties]), this._destroyViewActiveLayerInfos(), this.activeLayerInfos.removeAll();
  }
  _destroyViewActiveLayerInfos() {
    Object.keys(this._activeLayerInfosByLayerViewId).forEach(this._destroyViewActiveLayerInfo, this);
  }
  _destroyViewActiveLayerInfo(e3) {
    this.removeHandles(e3);
    const i3 = this._activeLayerInfosByLayerViewId[e3];
    i3 && this._activeLayerInfosPromises.delete(i3), delete this._activeLayerInfosByLayerViewId[e3], i3?.parent?.children.remove(i3);
  }
  _watchPropertiesAndAllLayerViews() {
    const { view: e3 } = this;
    if (!e3) return;
    const { allLayerViews: i3 } = e3;
    i3.length && this._refresh(), this.addHandles(i3.on("change", (e4) => this._allLayerViewsChangeHandle(e4)), c6.allLayerViews), this.addHandles(l(() => [this.basemapLegendVisible, this.groundLegendVisible, this.hideLayersNotInCurrentView, this.keepCacheOnDestroy, this.layerInfos, this.respectLayerDefinitionExpression, this.respectLayerVisibility], () => this._refresh()), c6.legendProperties);
  }
  _allLayerViewsChangeHandle(e3) {
    if (e3.added.length && this._generateActiveLayerInfosForLayerViews(e3.added), e3.moved.length) return this._destroyViewActiveLayerInfos(), void this._refresh();
    if (e3.removed.length) {
      for (const { uid: i3 } of e3.removed) this._destroyViewActiveLayerInfo(i3);
      this._refresh();
    }
  }
  _refresh() {
    this._layerInfosByLayerViewId = {}, this.activeLayerInfos.drain((e3) => this._activeLayerInfosPromises.delete(e3)), this._generateActiveLayerInfosForLayerViews(this._generateLayerViews());
  }
  _generateActiveLayerInfosForLayerViews(e3) {
    e3.filter(this._filterBasemapLayerViews, this).filter(this._filterLayerViewsByLayerInfos, this).filter(this._isLayerViewSupported, this).forEach(this._generateActiveLayerInfo, this);
  }
  _filterBasemapLayerViews(e3) {
    if (!this.view?.basemapView) return true;
    const { baseLayerViews: i3, groundLayerViews: r3, referenceLayerViews: t5 } = this.view.basemapView, s3 = i3.some((i4) => {
      const r4 = "layerViews" in i4 ? i4.layerViews : null;
      return r4 ? r4.includes(e3) : i4 === e3;
    }), a3 = !this.basemapLegendVisible && (s3 || t5?.includes(e3)), n2 = !this.groundLegendVisible && r3?.includes(e3);
    return !a3 && !n2;
  }
  _sortActiveLayerInfos(e3) {
    const i3 = this.view;
    if (e3.length < 2 || !i3) return;
    const r3 = [];
    e3.forEach((i4) => {
      if (!i4.parent) {
        const t6 = i4.layer.parent, s3 = t6 && "uid" in t6 && this._layerViewByLayerId[t6.uid], a3 = s3 && this._activeLayerInfosByLayerViewId[s3.uid];
        a3 && e3.includes(a3) && (r3.push(i4), i4.parent = a3, a3.children.add(i4), this._sortActiveLayerInfos(a3.children));
      }
    }), e3.removeMany(r3);
    const t5 = {};
    i3.allLayerViews.forEach((e4, i4) => t5[e4.layer.uid] = i4), e3.sort((e4, i4) => {
      const r4 = t5[e4.layer.uid] || 0;
      return (t5[i4.layer.uid] || 0) - r4;
    });
  }
  _generateLayerViews() {
    const e3 = [];
    return w5.filter(this._filterLayerViews, this).map((e4) => o(this, e4)).filter((e4) => null != e4).forEach(this._collectLayerViews("layerViews", e3)), e3;
  }
  _filterLayerViews(e3) {
    const i3 = !this.basemapLegendVisible && (e3 === u7 || e3 === v3), r3 = !this.groundLegendVisible && e3 === p2;
    return !i3 && !r3;
  }
  _collectLayerViews(e3, i3) {
    const r3 = (t5) => (t5 && t5.forEach((t6) => {
      i3.push(t6), r3(t6[e3]);
    }), i3);
    return r3;
  }
  _filterLayerViewsByLayerInfos(e3) {
    const i3 = this.layerInfos;
    return !i3 || !i3.length || i3.some((i4) => this._hasLayerInfo(i4, e3));
  }
  _hasLayerInfo(e3, i3) {
    const r3 = this._isLayerUIDMatching(e3.layer, i3.layer.uid);
    return r3 && (this._layerInfosByLayerViewId[i3.uid] = e3), r3;
  }
  _isLayerUIDMatching(e3, i3) {
    return e3 && (e3.uid === i3 || this._hasLayerUID(e3.layers, i3));
  }
  _hasLayerUID(e3, i3) {
    return e3 && e3.some((e4) => this._isLayerUIDMatching(e4, i3));
  }
  _isLayerViewSupported(e3) {
    return !!f5.has(e3.layer.declaredClass) && (this._layerViewByLayerId[e3.layer.uid] = e3, true);
  }
  _generateActiveLayerInfo(e3) {
    this._isLayerActive(e3) ? this._buildActiveLayerInfo(e3) : (this.removeHandles(e3.uid), this.addHandles(l(() => [e3.legendEnabled, e3.layer?.legendEnabled], () => this._layerActiveHandle(e3)), e3.uid));
  }
  _layerActiveHandle(e3) {
    this._isLayerActive(e3) && (this.removeHandles(e3.uid), this._buildActiveLayerInfo(e3));
  }
  _isLayerActive(e3) {
    return !this.respectLayerVisibility || e3.legendEnabled && e3.layer?.legendEnabled;
  }
  async _buildActiveLayerInfo(e3) {
    const i3 = e3.layer, r3 = e3.uid, t5 = this._layerInfosByLayerViewId[r3];
    let s3 = this._activeLayerInfosByLayerViewId[r3];
    s3 || (s3 = new st({ layer: i3, layerView: e3, view: this.view ?? void 0 }), this._activeLayerInfosByLayerViewId[r3] = s3);
    const a3 = void 0 !== t5?.title && t5.layer.uid === i3.uid;
    s3.title = a3 ? t5.title : i3.title, s3.respectLayerDefinitionExpression = this.respectLayerDefinitionExpression, s3.respectLayerVisibility = this.respectLayerVisibility, s3.hideLayersNotInCurrentView = this.hideLayersNotInCurrentView, s3.keepCacheOnDestroy = this.keepCacheOnDestroy, s3.sublayerIds = t5?.sublayerIds || [];
    const n2 = i3.parent && "uid" in i3.parent ? this._layerViewByLayerId[i3.parent?.uid] : null;
    s3.parent = this._activeLayerInfosByLayerViewId[n2?.uid], this._addActiveLayerInfo(s3), this._constructLegendElements(s3), this._attachHandlesToActiveLayerInfo(s3);
  }
  _attachHandlesToActiveLayerInfo(e3) {
    const { layer: i3, layerView: r3 } = e3, t5 = r3.uid;
    this.removeHandles(t5), this.addHandles([l(() => i3.title, (i4) => this._titleHandle(i4, e3)), l(() => [i3.opacity, "renderer" in i3 && i3.renderer, "pointSymbol" in i3 && i3.pointSymbol, "lineSymbol" in i3 && i3.lineSymbol, "polygonSymbol" in i3 && i3.polygonSymbol, "effect" in i3 && i3.effect, "featureReduction" in i3 && e2(i3, r3.view), this.view?.timeZone], () => this._constructLegendElements(e3)), l(() => "filter" in r3 && r3.filter, () => {
      null != e2(r3.layer, r3.view) && this._constructLegendElements(e3);
    }), f(() => !!this.view?.stationary, () => this._scaleHandle(e3)), l(() => e3.loading, () => this.notifyChange("loading"), h)], t5), this.respectLayerVisibility && this.addHandles([l(() => i3.legendEnabled, (i4) => this._legendEnabledHandle(i4, e3)), l(() => r3.legendEnabled, (i4) => {
      this.view?.suspended || this._legendEnabledHandle(i4, e3);
    })], t5), this.respectLayerDefinitionExpression && "definitionExpression" in i3 && this.addHandles(l(() => i3.definitionExpression, () => this._constructLegendElements(e3)), t5);
  }
  _titleHandle(e3, i3) {
    i3.title = e3, this._constructLegendElements(i3);
  }
  _legendEnabledHandle(e3, i3) {
    e3 ? this._addActiveLayerInfo(i3) : this._removeActiveLayerInfo(i3);
  }
  _scaleHandle(e3) {
    (e3.isScaleDriven || e3.hideLayersNotInCurrentView) && this._constructLegendElements(e3);
  }
  _addActiveLayerInfo(e3) {
    const { layerView: i3, layer: r3 } = e3;
    if (this._isLayerActive(i3) && !this.activeLayerInfos.includes(e3)) {
      const i4 = e3.parent;
      if (i4) i4.children.includes(e3) || i4.children.push(e3), this._sortActiveLayerInfos(i4.children);
      else {
        const i5 = this.layerInfos?.some((e4) => e4.layer.uid === r3.uid), t5 = r3.parent;
        (t5 && "uid" in t5 ? this._layerViewByLayerId[t5.uid] : null) && !i5 ? this._activeLayerInfosWithNoParent.add(e3) : (this.activeLayerInfos.add(e3), this._sortActiveLayerInfos(this.activeLayerInfos));
      }
      if (this._activeLayerInfosWithNoParent.length) {
        const e4 = [];
        this._activeLayerInfosWithNoParent.forEach((i5) => {
          const r4 = i5.layer.parent, t5 = r4 && "uid" in r4 ? this._layerViewByLayerId[r4?.uid] : null, s3 = this._activeLayerInfosByLayerViewId[t5?.uid];
          s3 && (e4.push(i5), i5.parent = s3);
        }), e4.length && (this._activeLayerInfosWithNoParent.removeMany(e4), e4.forEach((e5) => this._addActiveLayerInfo(e5)));
      }
    }
  }
  _removeActiveLayerInfo(e3) {
    const i3 = e3.parent;
    i3 ? i3.children.remove(e3) : this.activeLayerInfos.remove(e3);
  }
  async _getBuildLegendPromise(e3) {
    const { layer: i3 } = e3;
    if ("featureCollections" in i3 && i3.featureCollections) return e3.buildLegendElementsForFeatureCollections(i3.featureCollections);
    if ("featureReduction" in i3 && i3.featureReduction && "renderer" in i3.featureReduction && ("binning" === i3.featureReduction.type || "cluster" === i3.featureReduction.type) && (!this.view || i3.featureReduction.maxScale <= this.view.scale)) return e3.buildLegendElementsForFeatureReduction(i3.featureReduction);
    if ("renderer" in i3 && i3.renderer && !("sublayers" in i3)) return e3.buildLegendElementsForRenderer(i3.renderer);
    if ("url" in i3 && i3.url && "catalog" !== i3.type && "knowledge-graph" !== i3.type) return e3.buildLegendElementsForTools();
    const r3 = e3.children.map((e4) => this._constructLegendElements(e4));
    return Promise.all(r3).then(() => {
    });
  }
  async _constructLegendElements(e3) {
    const i3 = this._activeLayerInfosPromises.get(e3);
    i3 && await i3.catch(() => {
    });
    const r3 = this._getBuildLegendPromise(e3);
    this._activeLayerInfosPromises.set(e3, r3), r3.finally(() => {
      this._activeLayerInfosPromises.delete(e3);
    });
  }
};
__decorate([a2({ type: L3 })], _.prototype, "activeLayerInfos", void 0), __decorate([a2()], _.prototype, "basemapLegendVisible", void 0), __decorate([a2()], _.prototype, "groundLegendVisible", void 0), __decorate([a2()], _.prototype, "hideLayersNotInCurrentView", void 0), __decorate([a2()], _.prototype, "keepCacheOnDestroy", void 0), __decorate([a2({ readOnly: true })], _.prototype, "loading", null), __decorate([a2()], _.prototype, "respectLayerDefinitionExpression", void 0), __decorate([a2()], _.prototype, "respectLayerVisibility", void 0), __decorate([a2()], _.prototype, "layerInfos", void 0), __decorate([a2({ readOnly: true })], _.prototype, "state", null), __decorate([a2()], _.prototype, "view", void 0), _ = __decorate([c("esri.widgets.Legend.LegendViewModel")], _);

export {
  st,
  _
};
//# sourceMappingURL=chunk-V7BV4HMT.js.map
