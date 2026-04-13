import {
  H,
  f as f4,
  h as h4,
  r as r8
} from "./chunk-7UCCZG5W.js";
import {
  Mt,
  Y,
  at,
  d,
  o as o6,
  te,
  u as u5,
  x
} from "./chunk-D3Y3Q73K.js";
import {
  A,
  B
} from "./chunk-X6QQC6UP.js";
import {
  f as f3
} from "./chunk-OYRVHNLD.js";
import {
  c as c7,
  o as o5,
  s as s3,
  u as u4
} from "./chunk-XZCI4GUG.js";
import {
  c as c6,
  m as m3
} from "./chunk-ASFIQBMH.js";
import {
  a as a7
} from "./chunk-ZVU4QOEK.js";
import {
  i as i3
} from "./chunk-YUXFXSDC.js";
import {
  p as p5
} from "./chunk-AEK3IBGV.js";
import {
  s2
} from "./chunk-ESFGILEN.js";
import {
  I as I2,
  v as v4,
  y as y3
} from "./chunk-ZV255XC4.js";
import {
  h3,
  m as m2
} from "./chunk-4467EPGR.js";
import {
  r as r7
} from "./chunk-L7NRTQ6W.js";
import {
  o as o4
} from "./chunk-QVWRNZWA.js";
import {
  a as a6,
  g,
  g2,
  t as t6
} from "./chunk-ZE6EOMGW.js";
import {
  a as a4,
  i as i2
} from "./chunk-FMMQYU6V.js";
import {
  c as c5
} from "./chunk-TGURFMYB.js";
import {
  a as a5,
  r as r6,
  u as u3,
  w
} from "./chunk-AX63Z5H7.js";
import {
  C as C2,
  k
} from "./chunk-KWGDYBY5.js";
import {
  O,
  b as b4,
  i,
  m,
  p as p4
} from "./chunk-VIZQEP3L.js";
import {
  b as b2,
  h as h2,
  j,
  p as p3,
  v as v2
} from "./chunk-3GPHIYF3.js";
import {
  b as b3,
  v as v3,
  y as y2
} from "./chunk-3AKQYIL2.js";
import {
  t as t5
} from "./chunk-4YHKCBNT.js";
import {
  c as c4
} from "./chunk-ZO27FAQA.js";
import {
  p as p2
} from "./chunk-5CZQAS24.js";
import {
  t as t4
} from "./chunk-TZSKNWRI.js";
import {
  Q,
  t as t3
} from "./chunk-NPUCBGFZ.js";
import {
  D
} from "./chunk-HXLK47WT.js";
import {
  _ as _2
} from "./chunk-IODIHRP7.js";
import {
  C,
  I,
  _,
  c as c3,
  e as e5,
  o as o3,
  p,
  u as u2,
  y
} from "./chunk-SGNC5H35.js";
import {
  n as n3
} from "./chunk-47CFN4JI.js";
import {
  r as r5,
  t as t2
} from "./chunk-TVLXQ42J.js";
import {
  L,
  r as r4
} from "./chunk-OR24MDO6.js";
import {
  f as f2,
  n as n2,
  q
} from "./chunk-IRS5H2YE.js";
import {
  N
} from "./chunk-PWZ6VVYN.js";
import {
  e as e4
} from "./chunk-OFSNX7BB.js";
import {
  e as e3
} from "./chunk-XNNZ2U24.js";
import {
  e as e2,
  l as l2,
  o,
  u,
  v
} from "./chunk-5GPMO33J.js";
import {
  o as o2
} from "./chunk-WWKLZ2P6.js";
import {
  a as a3,
  n,
  r as r3,
  t
} from "./chunk-KEY3YQEB.js";
import {
  h,
  l
} from "./chunk-M44GXGOJ.js";
import {
  a as a2,
  f
} from "./chunk-UXWT3ISO.js";
import {
  r as r2,
  s
} from "./chunk-253Z6EVN.js";
import {
  b
} from "./chunk-HXIOMN57.js";
import {
  a3 as a,
  c as c2
} from "./chunk-JM4CKTH2.js";
import {
  c,
  e2 as e,
  r
} from "./chunk-WARIPJQI.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/3d/interactive/visualElements/DrapedVisualElementResources.js
var i4 = class {
  constructor(e8) {
    this._resourceFactory = e8, this._resources = null, this._visible = true, this._attached = false, this._renderGroup = 2;
  }
  destroy() {
    this._destroyResources();
  }
  get resources() {
    return this._resources?.external;
  }
  get visible() {
    return this._visible;
  }
  set visible(e8) {
    e8 !== this._visible && (this._visible = e8, this._syncGeometriesToRenderer());
  }
  get attached() {
    return this._attached;
  }
  set attached(e8) {
    e8 !== this._attached && (this._attached = e8, this._createOrDestroyResources());
  }
  get renderGroup() {
    return this._renderGroup;
  }
  set renderGroup(e8) {
    this._renderGroup = e8;
    const r10 = this._resources?.layerView;
    r10 && (r10.renderGroup = e8);
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    this._resourceFactory.recreateGeometry ? null != this._resources && (this._ensureRenderGeometriesRemoved(), this._resourceFactory.recreateGeometry(this._resources.external), this._syncGeometriesToRenderer()) : this.recreate();
  }
  forEachMaterial(e8) {
    this._resources && this._resourceFactory.forEachMaterial(this._resources.external, e8);
  }
  _createOrDestroyResources() {
    this._attached ? null == this._resources && this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const e8 = this._resourceFactory.createResources(), r10 = new c8({ view: this._resourceFactory.view, renderGroup: this._renderGroup }), s4 = this._resourceFactory.view.overlayManager;
    this._resources = { layerView: r10, external: e8, geometriesAdded: false }, s4 && (this._resources.drapeSourceRenderer = s4.registerGeometryDrapeSource(r10)), this._syncGeometriesToRenderer();
  }
  _destroyResources() {
    if (null == this._resources) return;
    this._ensureRenderGeometriesRemoved();
    const e8 = this._resourceFactory.view.overlayManager;
    e8 && e8.unregisterDrapeSource(this._resources.layerView), this._resourceFactory.destroyResources(this._resources.external), this._resources = null;
  }
  _syncGeometriesToRenderer() {
    this._visible ? this._ensureRenderGeometriesAdded() : this._ensureRenderGeometriesRemoved();
  }
  _ensureRenderGeometriesRemoved() {
    if (null == this._resources?.drapeSourceRenderer) return;
    if (!this._resources.geometriesAdded) return;
    this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries, 1), this._resources.geometriesAdded = false;
  }
  _ensureRenderGeometriesAdded() {
    if (null == this._resources?.drapeSourceRenderer) return;
    if (this._resources.geometriesAdded) return;
    this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries, 1), this._resources.geometriesAdded = true;
  }
};
var c8 = class extends o2(b) {
  constructor(e8) {
    super(e8), this.drapeSourceType = 1, this.updatePolicy = 1, this.renderGroup = 2;
  }
};
__decorate([a({ constructOnly: true })], c8.prototype, "view", void 0), __decorate([a({ readOnly: true })], c8.prototype, "drapeSourceType", void 0), __decorate([a()], c8.prototype, "renderGroup", void 0), c8 = __decorate([c2("esri.views.3d.interactive.visualElements.DrapedVisualElementResources")], c8);

// node_modules/@arcgis/core/views/3d/interactive/visualElements/VisualElement.js
var t7 = class {
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(e8) {
    this._isDecoration = e8, this.forEachMaterial((t9) => t9?.setParameters({ isDecoration: e8 }));
  }
  constructor(t9) {
    this._isDecoration = false, this._attached = false, this._resourcesCreated = false, this._visible = true, this.view = t9.view, this._handle = l(() => t9.view.ready, (e8) => {
      this._resourcesCreated && (e8 ? this._createResources() : this._destroyResources());
    });
  }
  applyProperties(e8) {
    let t9 = false;
    for (const s4 in e8) s4 in this && ("attached" === s4 ? t9 = !!e8[s4] : this[s4] = e8[s4]);
    this.attached = t9;
  }
  destroy() {
    this.attached = false, this._handle.remove();
  }
  get attached() {
    return this._attached;
  }
  set attached(e8) {
    e8 !== this._attached && this.view.stage && (this._attached = e8, this._attached && !this._resourcesCreated ? this._createResources() : !this._attached && this._resourcesCreated && this._destroyResources(), this.onAttachedChange(e8));
  }
  onAttachedChange(e8) {
  }
  get visible() {
    return this._visible;
  }
  set visible(e8) {
    e8 !== this._visible && (this._visible = e8, this.attached && this.updateVisibility(e8));
  }
  _createResources() {
    this.createResources(), this._resourcesCreated = true, this.updateVisibility(this.visible);
  }
  _destroyResources() {
    this.destroyResources(), this._resourcesCreated = false;
  }
};

// node_modules/@arcgis/core/views/3d/interactive/visualElements/VisualElementResources.js
var c9 = class {
  constructor(e8) {
    this._resourceFactory = e8, this._resources = null, this._visible = true, this._attached = false;
  }
  destroy() {
    this._destroyResources();
  }
  get object() {
    return null != this._resources ? this._resources.object : null;
  }
  get resources() {
    return null != this._resources ? this._resources.external : null;
  }
  get visible() {
    return this._visible;
  }
  set visible(e8) {
    e8 !== this._visible && (this._visible = e8, this._syncVisible());
  }
  get attached() {
    return this._attached;
  }
  set attached(e8) {
    e8 !== this._attached && (this._attached = e8, this._createOrDestroyResources());
  }
  recreate() {
    this.attached && this._createResources();
  }
  recreateGeometry() {
    if (!this._resourceFactory.recreateGeometry) return void this.recreate();
    const e8 = this._resourceFactory.view.stage;
    if (null == this._resources || !e8) return;
    const s4 = this._resources.object;
    s4.removeAllGeometries(), this._resourceFactory.recreateGeometry(this._resources.external, s4, this._resources.layer);
  }
  forEachMaterial(e8) {
    this._resources && this._resourceFactory.forEachMaterial(this._resources.external, e8);
  }
  _createOrDestroyResources() {
    this._attached ? this._resources || this._createResources() : this._destroyResources();
  }
  _createResources() {
    this._destroyResources();
    const c13 = this._resourceFactory, i5 = c13.view, o8 = i5.stage;
    if (!o8) return;
    const a9 = new d(o8, { pickable: false, updatePolicy: 1 }), h6 = new x({ castShadow: false }), u6 = c13.createResources(h6, a9);
    a9.add(h6);
    const l5 = c13.cameraChanged, _5 = l5 ? l(() => i5.state.camera, (e8) => l5(e8), h) : null;
    this._resources = { layer: a9, object: h6, external: u6, cameraHandle: _5 }, this._syncVisible();
  }
  _destroyResources() {
    null != this._resources && (this._resources.layer.destroy(), this._resources.object.dispose(), this._resources.cameraHandle?.remove(), this._resourceFactory.destroyResources(this._resources.external), this._resources = null);
  }
  _syncVisible() {
    null != this._resources && (this._resources.object.visible = this._visible);
  }
};

// node_modules/@arcgis/core/views/3d/interactive/visualElements/EngineVisualElement.js
var t8 = class extends t7 {
  constructor(s4) {
    super(s4), this._isDraped = false, this.object3dResources = new c9(this.createObject3DResourceFactory(s4.view)), this.drapedResources = new i4(this.createDrapedResourceFactory(s4.view)), this.isDraped = s4.isDraped ?? false;
  }
  get isDraped() {
    return this._isDraped;
  }
  set isDraped(e8) {
    e8 !== this._isDraped && (this._isDraped = e8, this.object3dResources.attached = this.attached && !e8, this.drapedResources.attached = this.attached && e8);
  }
  get renderGroup() {
    return this.drapedResources.renderGroup;
  }
  set renderGroup(e8) {
    this.drapedResources.renderGroup = e8;
  }
  createResources() {
    this.object3dResources.attached = !this._isDraped, this.drapedResources.attached = this._isDraped;
  }
  destroyResources() {
    this.object3dResources.attached = false, this.drapedResources.attached = false;
  }
  recreate() {
    this.object3dResources.recreate(), this.drapedResources.recreate();
  }
  recreateGeometry() {
    this.object3dResources.recreateGeometry(), this.drapedResources.recreateGeometry();
  }
  destroy() {
    this.object3dResources.destroy(), this.drapedResources.destroy(), super.destroy();
  }
  updateVisibility(e8) {
    this.object3dResources.visible = e8, this.drapedResources.visible = e8;
  }
  forEachMaterial(e8) {
    this.object3dResources?.forEachMaterial(e8), this.drapedResources?.forEachMaterial(e8);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/CompositingTechnique.js
var l3 = class extends g {
  constructor() {
    super(...arguments), this.shader = new t6(c6, () => import("./Compositing.glsl-BYI2HSFW.js"));
  }
  initializePipeline(e8) {
    const { blitMode: r10, blendEmissive: s4 } = e8;
    switch (r10) {
      case 0:
      case 3:
        return w({ colorWrite: u3, drawBuffers: h3(0, s4) });
      case 1:
        return w({ blending: a5, colorWrite: u3, drawBuffers: h3(0, s4) });
      default:
        return w({ blending: r6, colorWrite: u3, drawBuffers: h3(0, s4) });
    }
  }
};
l3 = __decorate([c2("esri.views.3d.webgl-engine.shaders.CompositingTechnique")], l3);

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/CompositingTechniqueConfiguration.js
var e6 = class extends a4 {
  constructor() {
    super(...arguments), this.blitMode = 0, this.blendEmissive = false, this.hasOpacityFactor = false;
  }
};
__decorate([i2({ count: 4 })], e6.prototype, "blitMode", void 0), __decorate([i2()], e6.prototype, "blendEmissive", void 0), __decorate([i2()], e6.prototype, "hasOpacityFactor", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/blit/Blit.js
var r9 = class {
  constructor(r10, s4 = 0) {
    this._techniques = r10, this._parameters = new m3(), this._configuration = new e6(), this._configuration.blitMode = s4, r10.precompile(l3, this._configuration), this._configuration.hasOpacityFactor = true, r10.precompile(l3, this._configuration), this._configuration.hasOpacityFactor = false;
  }
  blit(t9, i5, e8, r10) {
    this.blitTexture(t9, i5.getTexture(), e8, r10);
  }
  blitTexture(t9, e8, r10, s4) {
    t9.bindFramebuffer(r10.fbo), t9.setClearColor(0, 0, 0, 1), t9.clear(16384), this._parameters.texture = e8;
    const o8 = this._techniques.get(l3, this._configuration);
    t9.bindTechnique(o8, s4, this._parameters), t9.screen.draw();
  }
  blend(t9, e8, r10, s4, o8 = 1) {
    this._configuration.hasOpacityFactor = o8 < 1;
    const n6 = this._techniques.get(l3, this._configuration);
    return !!n6.compiled && (t9.bindFramebuffer(r10.fbo), this._parameters.texture = e8.getTexture(), this._parameters.opacity = o8, t9.bindTechnique(n6, s4, this._parameters), t9.screen.draw(), true);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlineTechnique.js
var c10 = class extends c5 {
  constructor() {
    super(...arguments), this.innerColor = r3(1, 1, 1), this.innerWidth = 1, this.glowColor = r3(1, 0.5, 0), this.glowWidth = 8, this.glowFalloff = 8, this.globalAlpha = 0.75, this.globalAlphaContrastBoost = 2, this.angleCutoff = s(6), this.pointDistanceOrigin = n(), this.pointDistanceTarget = n(), this.lineVerticalPlaneSegment = v2(), this.intersectsLineSegment = v2(), this.intersectsLineRadius = 3, this.heightManifoldTarget = n(), this.lineStartWorld = n(), this.lineEndWorld = n();
  }
};
var m4 = class extends g {
  constructor() {
    super(...arguments), this.shader = new t6(B, () => import("./Laserline.glsl-2K3MOJJM.js"));
  }
};
m4 = __decorate([c2("esri.views.3d.webgl-engine.effects.laserlines.LaserlineTechnique")], m4);

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlinePathTechnique.js
var n4 = class extends c10 {
  constructor() {
    super(...arguments), this.origin = n();
  }
};
var l4 = class extends g {
  constructor(e8, r10) {
    super(e8, r10, t3(r10.spherical ? p6 : m5)), this.shader = new t6(f3, () => import("./LaserlinePath.glsl-SLU3ESU6.js"));
  }
};
l4 = __decorate([c2("esri.views.3d.webgl-engine.effects.laserlines.LaserlinePathTechnique")], l4);
var p6 = Q().vec3f("start").vec3f("end").vec2f("extrude").vec3f("startUp").vec3f("endUp");
var m5 = Q().vec3f("start").vec3f("end").vec2f("extrude");

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlinePathData.js
var h5 = class {
  constructor(t9) {
    this._renderCoordsHelper = t9, this._origin = n(), this._dirty = false, this._count = 0;
  }
  set vertices(t9) {
    const e8 = e4(3 * t9.length);
    let r10 = 0;
    for (const s4 of t9) e8[r10++] = s4[0], e8[r10++] = s4[1], e8[r10++] = s4[2];
    this.buffers = [e8];
  }
  set buffers(e8) {
    if (this._buffers = e8, this._buffers.length > 0) {
      const e9 = this._buffers[0], r10 = 3 * Math.floor(e9.length / 3 / 2);
      u2(this._origin, e9[r10], e9[r10 + 1], e9[r10 + 2]);
    } else u2(this._origin, 0, 0, 0);
    this._dirty = true;
  }
  get origin() {
    return this._origin;
  }
  draw(t9) {
    const e8 = this._ensureVAO(t9);
    null != e8 && (t9.bindVAO(e8), t9.drawArrays(_2.TRIANGLES, 0, this._count));
  }
  dispose() {
    null != this._vao && this._vao.dispose();
  }
  get _layout() {
    return 1 === this._renderCoordsHelper.viewingMode ? p6 : m5;
  }
  _ensureVAO(t9) {
    return null == this._buffers ? null : (this._vao ??= this._createVAO(t9, this._buffers), this._ensureVertexData(this._vao, this._buffers), this._vao);
  }
  _createVAO(t9, e8) {
    const r10 = this._createDataBuffer(e8);
    return this._dirty = false, new r8(t9, new r7(t9, t3(this._layout), r10));
  }
  _ensureVertexData(t9, e8) {
    if (!this._dirty) return;
    const r10 = this._createDataBuffer(e8);
    t9.buffer()?.setData(r10), this._dirty = false;
  }
  _createDataBuffer(r10) {
    const s4 = r10.reduce((t9, e8) => t9 + a8(e8), 0);
    this._count = s4;
    const i5 = this._layout.createBuffer(s4), o8 = this._origin;
    let n6 = 0, f5 = 0;
    const u6 = "startUp" in i5 ? this._setUpVectors.bind(this, i5) : void 0;
    for (const l5 of r10) {
      for (let r11 = 0; r11 < l5.length; r11 += 3) {
        const s5 = u2(_3, l5[r11], l5[r11 + 1], l5[r11 + 2]);
        0 === r11 ? f5 = this._renderCoordsHelper.getAltitude(s5) : this._renderCoordsHelper.setAltitude(s5, f5);
        const h6 = n6 + 2 * r11;
        u6?.(r11, h6, l5, s5);
        const a9 = e5(_3, s5, o8);
        if (r11 < l5.length - 3) {
          for (let t9 = 0; t9 < 6; t9++) i5.start.setVec(h6 + t9, a9);
          i5.extrude.setValues(h6, 0, -1), i5.extrude.setValues(h6 + 1, 1, -1), i5.extrude.setValues(h6 + 2, 1, 1), i5.extrude.setValues(h6 + 3, 0, -1), i5.extrude.setValues(h6 + 4, 1, 1), i5.extrude.setValues(h6 + 5, 0, 1);
        }
        if (r11 > 0) for (let t9 = -6; t9 < 0; t9++) i5.end.setVec(h6 + t9, a9);
      }
      n6 += a8(l5);
    }
    return i5.buffer;
  }
  _setUpVectors(t9, e8, r10, s4, i5) {
    const o8 = this._renderCoordsHelper.worldUpAtPosition(i5, c11);
    if (e8 < s4.length - 3) for (let n6 = 0; n6 < 6; n6++) t9.startUp.setVec(r10 + n6, o8);
    if (e8 > 0) for (let n6 = -6; n6 < 0; n6++) t9.endUp.setVec(r10 + n6, o8);
  }
};
function a8(t9) {
  return 3 * (2 * (t9.length / 3 - 1));
}
var c11 = n();
var _3 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlinePathTechniqueConfiguration.js
var e7 = class extends a4 {
  constructor() {
    super(...arguments), this.contrastControlEnabled = false, this.spherical = false;
  }
};
__decorate([i2()], e7.prototype, "contrastControlEnabled", void 0), __decorate([i2()], e7.prototype, "spherical", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserlineTechniqueConfiguration.js
var n5 = class extends e7 {
  constructor() {
    super(...arguments), this.heightManifoldEnabled = false, this.pointDistanceEnabled = false, this.lineVerticalPlaneEnabled = false, this.intersectsLineEnabled = false;
  }
};
__decorate([i2()], n5.prototype, "heightManifoldEnabled", void 0), __decorate([i2()], n5.prototype, "pointDistanceEnabled", void 0), __decorate([i2()], n5.prototype, "lineVerticalPlaneEnabled", void 0), __decorate([i2()], n5.prototype, "intersectsLineEnabled", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/laserlines/LaserLineRenderer.js
var L2 = class extends a6 {
  constructor(e8) {
    super(e8), this.isDecoration = true, this.produces = g2.LASERLINES, this.consumes = { required: [g2.LASERLINES, "normals"] }, this.requireGeometryDepth = true, this._configuration = new n5(), this._pathTechniqueConfiguration = new e7(), this._heightManifoldEnabled = false, this._pointDistanceEnabled = false, this._lineVerticalPlaneEnabled = false, this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._pathVerticalPlaneEnabled = false, this._passParameters = new n4();
    const t9 = e8.view.stage.renderView.techniques, i5 = new e7();
    i5.contrastControlEnabled = e8.contrastControlEnabled, t9.precompile(l4, i5);
  }
  initialize() {
    this._passParameters.renderCoordsHelper = this.view.renderCoordsHelper, this._pathTechniqueConfiguration.spherical = 1 === this.view.state.viewingMode, this._pathTechniqueConfiguration.contrastControlEnabled = this.contrastControlEnabled, this._techniques.precompile(l4, this._pathTechniqueConfiguration), this._blit = new r9(this._techniques, 2);
  }
  destroy() {
    this._pathVerticalPlaneData = r(this._pathVerticalPlaneData), this._blit = null;
  }
  get _techniques() {
    return this.view.stage.renderView.techniques;
  }
  get heightManifoldEnabled() {
    return this._heightManifoldEnabled;
  }
  set heightManifoldEnabled(e8) {
    this._heightManifoldEnabled !== e8 && (this._heightManifoldEnabled = e8, this.requestRender(1));
  }
  get heightManifoldTarget() {
    return this._passParameters.heightManifoldTarget;
  }
  set heightManifoldTarget(e8) {
    o3(this._passParameters.heightManifoldTarget, e8), this.requestRender(1);
  }
  get pointDistanceEnabled() {
    return this._pointDistanceEnabled;
  }
  set pointDistanceEnabled(e8) {
    e8 !== this._pointDistanceEnabled && (this._pointDistanceEnabled = e8, this.requestRender(1));
  }
  get pointDistanceTarget() {
    return this._passParameters.pointDistanceTarget;
  }
  set pointDistanceTarget(e8) {
    o3(this._passParameters.pointDistanceTarget, e8), this.requestRender(1);
  }
  get pointDistanceOrigin() {
    return this._passParameters.pointDistanceOrigin;
  }
  set pointDistanceOrigin(e8) {
    o3(this._passParameters.pointDistanceOrigin, e8), this.requestRender(1);
  }
  get lineVerticalPlaneEnabled() {
    return this._lineVerticalPlaneEnabled;
  }
  set lineVerticalPlaneEnabled(e8) {
    e8 !== this._lineVerticalPlaneEnabled && (this._lineVerticalPlaneEnabled = e8, this.requestRender(1));
  }
  get lineVerticalPlaneSegment() {
    return this._passParameters.lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e8) {
    p3(e8, this._passParameters.lineVerticalPlaneSegment), this.requestRender(1);
  }
  get intersectsLineEnabled() {
    return this._intersectsLineEnabled;
  }
  set intersectsLineEnabled(e8) {
    e8 !== this._intersectsLineEnabled && (this._intersectsLineEnabled = e8, this.requestRender(1));
  }
  get intersectsLineSegment() {
    return this._passParameters.intersectsLineSegment;
  }
  set intersectsLineSegment(e8) {
    p3(e8, this._passParameters.intersectsLineSegment), this.requestRender(1);
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e8) {
    e8 !== this._intersectsLineInfinite && (this._intersectsLineInfinite = e8, this.requestRender(1));
  }
  get pathVerticalPlaneEnabled() {
    return this._pathVerticalPlaneEnabled;
  }
  set pathVerticalPlaneEnabled(e8) {
    e8 !== this._pathVerticalPlaneEnabled && (this._pathVerticalPlaneEnabled = e8, null != this._pathVerticalPlaneData && this.requestRender(1));
  }
  set pathVerticalPlaneVertices(e8) {
    null == this._pathVerticalPlaneData && (this._pathVerticalPlaneData = new h5(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.vertices = e8, this.pathVerticalPlaneEnabled && this.requestRender(1);
  }
  set pathVerticalPlaneBuffers(e8) {
    null == this._pathVerticalPlaneData && (this._pathVerticalPlaneData = new h5(this._passParameters.renderCoordsHelper)), this._pathVerticalPlaneData.buffers = e8, this.pathVerticalPlaneEnabled && this.requestRender(1);
  }
  setParameters(e8) {
    o4(this._passParameters, e8) && this.requestRender(1);
  }
  precompile() {
    this._acquireTechnique();
  }
  render(e8) {
    const t9 = e8.find(({ name: e9 }) => e9 === this.produces);
    if (this.isDecoration && !this.bindParameters.decorations || null == this._blit) return t9;
    const i5 = this.renderingContext, n6 = e8.find(({ name: e9 }) => "normals" === e9);
    this._passParameters.normals = n6?.getTexture();
    const s4 = () => {
      (this.heightManifoldEnabled || this.pointDistanceEnabled || this.lineVerticalPlaneSegment || this.intersectsLineEnabled) && this._renderUnified(), this.pathVerticalPlaneEnabled && this._renderPath();
    };
    if (!this.contrastControlEnabled) return i5.bindFramebuffer(t9.fbo), s4(), t9;
    this._passParameters.colors = t9.getTexture();
    const r10 = this.fboCache.acquire(t9.fbo.width, t9.fbo.height, "laser lines");
    return i5.bindFramebuffer(r10.fbo), i5.setClearColor(0, 0, 0, 0), i5.clear(16640), s4(), i5.unbindTexture(t9.getTexture()), this._blit.blend(i5, r10, t9, this.bindParameters) || this.requestRender(1), r10.release(), t9;
  }
  _acquireTechnique() {
    return this._configuration.heightManifoldEnabled = this.heightManifoldEnabled, this._configuration.lineVerticalPlaneEnabled = this.lineVerticalPlaneEnabled, this._configuration.pointDistanceEnabled = this.pointDistanceEnabled, this._configuration.intersectsLineEnabled = this.intersectsLineEnabled, this._configuration.contrastControlEnabled = this.contrastControlEnabled, this._configuration.spherical = 1 === this.view.state.viewingMode, this._techniques.get(m4, this._configuration);
  }
  _renderUnified() {
    if (!this._updatePassParameters()) return;
    const e8 = this._acquireTechnique();
    if (e8.compiled) {
      const t9 = this.renderingContext;
      t9.bindTechnique(e8, this.bindParameters, this._passParameters), t9.screen.draw();
    } else this.requestRender(1);
  }
  _renderPath() {
    if (null == this._pathVerticalPlaneData) return;
    const e8 = this._techniques.get(l4, this._pathTechniqueConfiguration);
    if (e8.compiled) {
      const t9 = this.renderingContext;
      this._passParameters.origin = this._pathVerticalPlaneData.origin, t9.bindTechnique(e8, this.bindParameters, this._passParameters), this._pathVerticalPlaneData.draw(t9);
    } else this.requestRender(1);
  }
  _updatePassParameters() {
    if (!this._intersectsLineEnabled) return true;
    const e8 = this.bindParameters.camera, t9 = this._passParameters;
    if (this._intersectsLineInfinite) {
      if (m(v3(t9.intersectsLineSegment.origin, t9.intersectsLineSegment.vector), D2), D2.c0 = -Number.MAX_VALUE, !O(e8.frustum, D2)) return false;
      p4(D2, t9.lineStartWorld), b4(D2, t9.lineEndWorld);
    } else o3(t9.lineStartWorld, t9.intersectsLineSegment.origin), c3(t9.lineEndWorld, t9.intersectsLineSegment.origin, t9.intersectsLineSegment.vector);
    return true;
  }
  get test() {
  }
};
__decorate([a({ constructOnly: true })], L2.prototype, "contrastControlEnabled", void 0), __decorate([a()], L2.prototype, "isDecoration", void 0), __decorate([a()], L2.prototype, "produces", void 0), __decorate([a()], L2.prototype, "consumes", void 0), L2 = __decorate([c2("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")], L2);
var D2 = i();

// node_modules/@arcgis/core/views/3d/interactive/visualElements/LaserlineVisualElement.js
var c12 = class extends t7 {
  constructor(e8) {
    super(e8), this._angleCutoff = A, this._style = {}, this._heightManifoldTarget = n(), this._heightManifoldEnabled = false, this._intersectsLine = v2(), this._intersectsLineEnabled = false, this._intersectsLineInfinite = false, this._lineVerticalPlaneSegment = null, this._pathVerticalPlaneBuffers = null, this._pointDistanceLine = null, this.applyProperties(e8);
  }
  get testData() {
  }
  createResources() {
    this._ensureRenderer();
  }
  destroyResources() {
    this._disposeRenderer();
  }
  updateVisibility() {
    this._syncRenderer(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance();
  }
  get angleCutoff() {
    return this._angleCutoff;
  }
  set angleCutoff(e8) {
    this._angleCutoff !== e8 && (this._angleCutoff = e8, this._syncAngleCutoff());
  }
  get style() {
    return this._style;
  }
  set style(e8) {
    this._style = e8, this._syncStyle();
  }
  get heightManifoldTarget() {
    return this._heightManifoldEnabled ? this._heightManifoldTarget : null;
  }
  set heightManifoldTarget(t9) {
    null != t9 ? (o3(this._heightManifoldTarget, t9), this._heightManifoldEnabled = true) : this._heightManifoldEnabled = false, this._syncRenderer(), this._syncHeightManifold();
  }
  set intersectsWorldUpAtLocation(e8) {
    if (null == e8) return void (this.intersectsLine = null);
    const t9 = this.view.renderCoordsHelper.worldUpAtPosition(e8, _4);
    this.intersectsLine = b2(e8, t9), this.intersectsLineInfinite = true;
  }
  get intersectsLine() {
    return this._intersectsLineEnabled ? this._intersectsLine : null;
  }
  set intersectsLine(e8) {
    null != e8 ? (p3(e8, this._intersectsLine), this._intersectsLineEnabled = true) : this._intersectsLineEnabled = false, this._syncIntersectsLine(), this._syncRenderer();
  }
  get intersectsLineInfinite() {
    return this._intersectsLineInfinite;
  }
  set intersectsLineInfinite(e8) {
    this._intersectsLineInfinite = e8, this._syncIntersectsLineInfinite();
  }
  get lineVerticalPlaneSegment() {
    return this._lineVerticalPlaneSegment;
  }
  set lineVerticalPlaneSegment(e8) {
    this._lineVerticalPlaneSegment = null != e8 ? p3(e8) : null, this._syncLineVerticalPlane(), this._syncRenderer();
  }
  get pathVerticalPlane() {
    return this._pathVerticalPlaneBuffers;
  }
  set pathVerticalPlane(e8) {
    this._pathVerticalPlaneBuffers = e8, this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncRenderer();
  }
  get pointDistanceLine() {
    return this._pointDistanceLine;
  }
  set pointDistanceLine(e8) {
    this._pointDistanceLine = null != e8 ? { origin: t(e8.origin), target: e8.target ? t(e8.target) : null } : null, this._syncPointDistance(), this._syncRenderer();
  }
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(e8) {
    this._isDecoration = e8, this._renderer && (this._renderer.isDecoration = e8);
  }
  _syncRenderer() {
    this.attached && this.visible && (this._intersectsLineEnabled || this._heightManifoldEnabled || null != this._pointDistanceLine || null != this._pathVerticalPlaneBuffers) ? this._ensureRenderer() : this._disposeRenderer();
  }
  _ensureRenderer() {
    null == this._renderer && (this._renderer = new L2({ view: this.view, contrastControlEnabled: true, isDecoration: this.isDecoration }), this._syncStyle(), this._syncHeightManifold(), this._syncIntersectsLine(), this._syncIntersectsLineInfinite(), this._syncPathVerticalPlane(), this._syncLineVerticalPlane(), this._syncPointDistance(), this._syncAngleCutoff());
  }
  _syncStyle() {
    null != this._renderer && this._renderer.setParameters(this._style);
  }
  _syncAngleCutoff() {
    this._renderer?.setParameters({ angleCutoff: this._angleCutoff });
  }
  _syncHeightManifold() {
    null != this._renderer && (this._renderer.heightManifoldEnabled = this._heightManifoldEnabled && this.visible, this._heightManifoldEnabled && (this._renderer.heightManifoldTarget = this._heightManifoldTarget));
  }
  _syncIntersectsLine() {
    null != this._renderer && (this._renderer.intersectsLineEnabled = this._intersectsLineEnabled && this.visible, this._intersectsLineEnabled && (this._renderer.intersectsLineSegment = this._intersectsLine));
  }
  _syncIntersectsLineInfinite() {
    null != this._renderer && (this._renderer.intersectsLineInfinite = this._intersectsLineInfinite);
  }
  _syncPathVerticalPlane() {
    null != this._renderer && (this._renderer.pathVerticalPlaneEnabled = null != this._pathVerticalPlaneBuffers && this.visible, null != this._pathVerticalPlaneBuffers && (this._renderer.pathVerticalPlaneBuffers = this._pathVerticalPlaneBuffers));
  }
  _syncLineVerticalPlane() {
    null != this._renderer && (this._renderer.lineVerticalPlaneEnabled = null != this._lineVerticalPlaneSegment && this.visible, null != this._lineVerticalPlaneSegment && (this._renderer.lineVerticalPlaneSegment = this._lineVerticalPlaneSegment));
  }
  _syncPointDistance() {
    if (null == this._renderer) return;
    const e8 = this._pointDistanceLine, t9 = null != e8;
    this._renderer.pointDistanceEnabled = t9 && null != e8.target && this.visible, t9 && (this._renderer.pointDistanceOrigin = e8.origin, null != e8.target && (this._renderer.pointDistanceTarget = e8.target));
  }
  _disposeRenderer() {
    null != this._renderer && this.view.stage && (this._renderer.destroy(), this._renderer = null);
  }
  forEachMaterial() {
  }
};
var _4 = n();

// node_modules/@arcgis/core/views/3d/interactive/visualElements/ExtendedLineVisualElement.js
var E = class extends t8 {
  constructor(e8) {
    super(e8), this._ray = b3(), this._isWorldDown = false, this._start = n(), this._end = r3(1, 0, 0), this._width = 1, this._color = r5(1, 0, 1, 1), this._polygonOffset = false, this._writeDepthEnabled = true, this._innerWidth = 0, this._innerColor = r5(1, 1, 1, 1), this._stipplePattern = null, this._stippleOffColor = null, this._stipplePreferContinuous = true, this._falloff = 0, this._extensionType = 0, this._laserlineStyle = null, this._laserlineEnabled = false, this._renderOccluded = 4, this._fadedExtensions = A2, this._laserline = new c12({ view: this.view, isDecoration: e8.isDecoration }), this.applyProperties(e8);
  }
  destroy() {
    this._laserline.destroy(), super.destroy();
  }
  createObject3DResourceFactory(e8) {
    return { view: e8, createResources: (e9) => this._createObject3DResources(e9), destroyResources: G, recreateGeometry: (e9, t9) => this._recreateObject3DGeometry(e9, t9), cameraChanged: () => this._updateGeometry(), forEachMaterial: (e9, t9) => t9(e9.material) };
  }
  createDrapedResourceFactory(e8) {
    return { view: e8, createResources: () => this._createDrapedResources(), destroyResources: G, recreateGeometry: (e9) => this._recreateDrapedGeometry(e9), forEachMaterial: (e9, t9) => t9(e9.material) };
  }
  updateVisibility(e8) {
    super.updateVisibility(e8), this._laserline.visible = e8;
  }
  onAttachedChange() {
    this._laserline.attached = this._laserlineAttached;
  }
  setStartEndFromWorldDownAtLocation(r10) {
    this._isWorldDown = true, o3(this._start, r10), this.view.renderCoordsHelper.worldUpAtPosition(r10, this._end), e5(this._end, r10, this._end), y2(this._start, this._end, this._ray), this._updateGeometry();
  }
  get start() {
    return this._start;
  }
  set start(t9) {
    this._isWorldDown = false, C(this._start, t9) || (o3(this._start, t9), y2(this._start, this._end, this._ray), this._updateGeometry());
  }
  get end() {
    return this._end;
  }
  set end(t9) {
    this._isWorldDown = false, C(this._end, t9) || (o3(this._end, t9), y2(this._start, this._end, this._ray), this._updateGeometry());
  }
  get width() {
    return this._width;
  }
  set width(e8) {
    e8 !== this._width && (this._width = e8, this._updateMaterial());
  }
  get color() {
    return this._color;
  }
  set color(e8) {
    L(e8, this._color) || (r4(this._color, e8), this._updateMaterial());
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e8) {
    e8 !== this._polygonOffset && (this._polygonOffset = e8, this._updateMaterial());
  }
  get writeDepthEnabled() {
    return this._writeDepthEnabled;
  }
  set writeDepthEnabled(e8) {
    this._writeDepthEnabled !== e8 && (this._writeDepthEnabled = e8, this._updateMaterial());
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set innerWidth(e8) {
    e8 !== this._innerWidth && (this._innerWidth = e8, this._updateMaterial());
  }
  get innerColor() {
    return this._innerColor;
  }
  set innerColor(e8) {
    L(e8, this._innerColor) || (r4(this._innerColor, e8), this._updateMaterial());
  }
  get stipplePattern() {
    return this._stipplePattern;
  }
  set stipplePattern(e8) {
    const t9 = null != e8 != (null != this._stipplePattern);
    this._stipplePattern = e8, t9 ? this.recreate() : this._updateMaterial();
  }
  get stippleOffColor() {
    return this._stippleOffColor;
  }
  set stippleOffColor(e8) {
    null != e8 && null != this._stippleOffColor && L(e8, this._stippleOffColor) || (this._stippleOffColor = null != e8 ? t2(e8) : null, this._updateMaterial());
  }
  get stipplePreferContinuous() {
    return this._stipplePreferContinuous;
  }
  set stipplePreferContinuous(e8) {
    e8 !== this._stipplePreferContinuous && (this._stipplePreferContinuous = e8, this._updateMaterial());
  }
  get falloff() {
    return this._falloff;
  }
  set falloff(e8) {
    e8 !== this._falloff && (this._falloff = e8, this._updateMaterial());
  }
  get extensionType() {
    return this._extensionType;
  }
  set extensionType(e8) {
    e8 !== this._extensionType && (this._extensionType = e8, this.recreateGeometry());
  }
  get _laserlineAttached() {
    return this._laserlineEnabled && null != this._laserlineStyle && this.attached && !this.isDraped;
  }
  get laserlineStyle() {
    return this._laserlineStyle;
  }
  set laserlineStyle(e8) {
    this._laserlineStyle = e8, this._laserline.attached = this._laserlineAttached, null != e8 && (this._laserline.style = e8);
  }
  get laserlineEnabled() {
    return this._laserlineEnabled;
  }
  set laserlineEnabled(e8) {
    this._laserlineEnabled !== e8 && (this._laserlineEnabled = e8, this._laserline.attached = this._laserlineAttached);
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e8) {
    e8 !== this._renderOccluded && (this._renderOccluded = e8, this._updateMaterial());
  }
  get _normalizedRenderOccluded() {
    return this.isDraped && 8 === this._renderOccluded ? 4 : this._renderOccluded;
  }
  get fadedExtensions() {
    return this._fadedExtensions;
  }
  set fadedExtensions(e8) {
    this._fadedExtensions = e8 ?? A2, this.recreateGeometry();
  }
  _updateMaterial() {
    const { materialParameters: e8 } = this;
    this.object3dResources.resources?.material.setParameters(e8), this.drapedResources.resources?.material.setParameters(e8);
  }
  get materialParameters() {
    return { width: this._width, color: this._color, stippleOffColor: this._stippleOffColor, stipplePattern: this._stipplePattern, stipplePreferContinuous: this._stipplePreferContinuous, innerWidth: this._innerWidth, innerColor: this._innerColor, falloff: this._falloff, hasPolygonOffset: this._polygonOffset, renderOccluded: this._normalizedRenderOccluded, isDecoration: this.isDecoration, writeDepth: this._writeDepthEnabled };
  }
  _createObject3DResources(e8) {
    const t9 = new Y(this.materialParameters, this.view.state.isGlobal), r10 = new Array();
    return this._createObject3DGeometry(t9, e8, r10), { material: t9, geometries: r10 };
  }
  _recreateObject3DGeometry(e8, t9) {
    e8.geometries.length = 0, this._createObject3DGeometry(e8.material, t9, e8.geometries);
  }
  _createObject3DGeometry(e8, t9, r10) {
    const i5 = this._createGeometry(e8);
    r10.push(i5), t9.addGeometry(i5), this._updateVerticesObject3D(t9);
  }
  _createDrapedResources() {
    const e8 = new Y(this.materialParameters, this.view.state.isGlobal);
    return { material: e8, geometries: [this._createDrapedGeometry(e8)] };
  }
  _recreateDrapedGeometry(e8) {
    e8.geometries = [this._createDrapedGeometry(e8.material)];
  }
  _createDrapedGeometry(e8) {
    const t9 = this._createGeometry(e8);
    return this._updateVerticesDraped(t9), new h4(t9);
  }
  _createGeometry(e8) {
    const t9 = 3 === this.extensionType, r10 = t9 ? [n(), n(), n(), n()] : [n(), n()];
    return Mt(e8, r10, null, t9 ? [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] : null);
  }
  _updateGeometry() {
    if (this.isDraped) this.drapedResources.recreateGeometry();
    else {
      const e8 = this.object3dResources.object;
      e8 && this._updateVerticesObject3D(e8);
    }
  }
  _updateVerticesObject3D(e8) {
    const t9 = this._lineSegment;
    this._updateVertexAttributesObject3D(e8, t9), this._laserline.intersectsLine = t9;
  }
  _updateVerticesDraped(e8) {
    this._updateVertexAttributesDraped(e8, this._lineSegment);
  }
  get _lineSegment() {
    return 3 === this._extensionType ? this._updateLineSegmentFinite(M) : this._updateLineSegmentInfinite(this._extensionType, M);
  }
  _updateLineSegmentFinite(e8) {
    return h2(this._start, this._end, e8);
  }
  _updateLineSegmentInfinite(e8, t9) {
    const r10 = this.view.state.camera;
    switch (m(this._ray, P), e8) {
      case 0:
        P.c0 = -Number.MAX_VALUE;
        break;
      case 1:
      case 2: {
        const e9 = this._ray.origin, t10 = this.view.elevationProvider.getElevation(e9[0], e9[1], e9[2], this.view.renderCoordsHelper.spatialReference, "ground") ?? 0, r11 = this.view.renderCoordsHelper.getAltitude(e9);
        this._isWorldDown && r11 < t10 && y(P.ray.direction, P.ray.direction), 2 === this._extensionType && null != t10 && (P.c1 = Math.abs(r11 - t10));
        break;
      }
    }
    if (!O(r10.frustum, P)) return this._updateLineSegmentFinite(t9);
    const s4 = p4(P, v5), n6 = b4(P, R);
    return h2(s4, n6, t9);
  }
  _updateVertexAttributesObject3D(e8, t9) {
    const r10 = e8.geometries[0].getMutableAttribute("position")?.data;
    if (!r10) return;
    let i5 = 0;
    for (const s4 of this._lineVertices(t9)) r10[i5++] = s4[0], r10[i5++] = s4[1], r10[i5++] = s4[2];
    e8.geometryVertexAttributeUpdated(e8.geometries[0], "position");
  }
  _updateVertexAttributesDraped(e8, t9) {
    const r10 = e8.getMutableAttribute("position")?.data;
    if (!r10) return;
    let i5 = 0;
    for (const s4 of this._lineVertices(t9)) r10[i5++] = s4[0], r10[i5++] = s4[1], r10[i5++] = H;
    e8.invalidateBoundingInfo();
  }
  *_lineVertices(e8) {
    3 === this.extensionType ? (yield j(e8, -this.fadedExtensions.start, v5), yield j(e8, 0, v5), yield j(e8, 1, v5), yield j(e8, 1 + this.fadedExtensions.end, v5)) : (yield j(e8, 0, v5), yield j(e8, 1, v5));
  }
};
function G(e8) {
  e8.geometries = [];
}
var P = i();
var v5 = n();
var R = n();
var M = v2();
var V = 1 / 3;
var A2 = { start: V, end: V };

// node_modules/@arcgis/core/views/3d/interactive/visualElements/ParallelLineVisualElement.js
var O2 = class extends t8 {
  constructor(e8) {
    super(e8), this._location = n(), this._direction = r3(1, 0, 0), this._width = 1, this._offset = 1, this._length = 18, this._color = r5(1, 0, 1, 1), this._renderOccluded = 4, this.applyProperties(e8);
  }
  createObject3DResourceFactory(e8) {
    return { view: e8, createResources: (e9) => this._createObject3DResources(e9), destroyResources: V2, recreateGeometry: (e9, t9) => this._recreateObject3DGeometry(e9, t9), cameraChanged: () => this._updateGeometry(), forEachMaterial: (e9, t9) => t9(e9.material) };
  }
  createDrapedResourceFactory(e8) {
    return { view: e8, createResources: () => this._createDrapedResources(), destroyResources: M2, recreateGeometry: (e9) => this._recreateDrapedGeometry(e9), forEachMaterial: (e9, t9) => t9(e9.material) };
  }
  get location() {
    return this._location;
  }
  set location(e8) {
    C(this._location, e8) || (o3(this._location, e8), this._updateGeometry());
  }
  get direction() {
    return this._direction;
  }
  set direction(e8) {
    C(this._direction, e8) || (o3(this._direction, e8), this._updateGeometry());
  }
  setDirectionFromPoints(e8, t9) {
    _(this._direction, e5(this._direction, t9, e8)), this._updateGeometry();
  }
  get width() {
    return this._width;
  }
  set width(e8) {
    e8 !== this._width && (this._width = e8, this._updateMaterial());
  }
  get offset() {
    return this._offset;
  }
  set offset(e8) {
    e8 !== this._offset && (this._offset = e8, this._updateGeometry());
  }
  get length() {
    return this._length;
  }
  set length(e8) {
    e8 !== this._length && (this._length = e8, this._updateGeometry());
  }
  get color() {
    return this._color;
  }
  set color(e8) {
    L(e8, this._color) || (r4(this._color, e8), this._updateMaterial());
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e8) {
    e8 !== this._renderOccluded && (this._renderOccluded = e8, this._updateMaterial());
  }
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(e8) {
    this._isDecoration = e8, this._updateMaterial();
  }
  _createObject3DResources(e8) {
    const t9 = new Y(this.materialParameters, this.view.state.isGlobal), r10 = new Array();
    return this._createObject3DGeometry(t9, e8, r10), { material: t9, geometries: r10 };
  }
  _recreateObject3DGeometry(e8, t9) {
    e8.geometries.length = 0, this._createObject3DGeometry(e8.material, t9, e8.geometries);
  }
  _createObject3DGeometry(e8, t9, r10) {
    const [i5, s4] = x2(e8);
    t9.addGeometry(i5), t9.addGeometry(s4), r10.push(i5), r10.push(s4), this._updateVerticesObject3D(t9);
  }
  _createDrapedResources() {
    const t9 = new Y(this.materialParameters, this.view.state.isGlobal), r10 = l(() => this.view.state.contentPixelRatio, () => this.drapedResources.recreateGeometry());
    return { material: t9, geometries: this._createDrapedGeometry(t9), pixelRatioHandle: r10 };
  }
  _recreateDrapedGeometry(e8) {
    e8.geometries = this._createDrapedGeometry(e8.material);
  }
  _createDrapedGeometry(e8) {
    const t9 = x2(e8);
    return this._updateVerticesDraped(t9), t9.map((e9) => new h4(e9));
  }
  _updateMaterial() {
    const { materialParameters: e8 } = this;
    this.object3dResources.resources?.material.setParameters(e8), this.drapedResources.resources?.material.setParameters(e8);
  }
  get materialParameters() {
    return { width: this._width, color: this._color, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  _updateGeometry() {
    if (this.isDraped) this.drapedResources.recreateGeometry();
    else {
      const e8 = this.object3dResources.object;
      e8 && this._updateVerticesObject3D(e8);
    }
  }
  _updateVerticesObject3D(e8) {
    const t9 = this.view.state.camera;
    t9.projectToScreen(this.location, S), c3(P2, this.location, this.direction), t9.projectToScreen(P2, U), v(U, e2(U, U, S)), this._updateVertexAttributesObject3D(t9, e8, 0, S, U, 1), this._updateVertexAttributesObject3D(t9, e8, 1, S, U, -1);
  }
  _updateVertexAttributesObject3D(e8, r10, i5, s4, o8, a9) {
    const c13 = r10.geometries[i5], n6 = c13.getMutableAttribute("position")?.data;
    if (!n6) return;
    const { start: d2, end: h6 } = v6(o8, s4, a9, this.offset, this.width, this.length);
    e8.unprojectFromScreen(a2(d2), P2), n6[0] = P2[0], n6[1] = P2[1], n6[2] = P2[2], e8.unprojectFromScreen(a2(h6), P2), n6[3] = P2[0], n6[4] = P2[1], n6[5] = P2[2], r10.geometryVertexAttributeUpdated(c13, "position");
  }
  _updateVerticesDraped(e8) {
    const { view: { overlayManager: t9, state: { contentPixelRatio: r10 } } } = this, { location: i5, width: s4, length: o8, offset: a9 } = this, c13 = z;
    c13.spatialReference = t9.spatialReference, c13.x = i5[0], c13.y = i5[1];
    const n6 = this.view.overlayPixelSizeInMapUnits(c13) * r10, d2 = s4 * n6, h6 = o8 * n6, l5 = a9 * n6;
    this._updateVertexAttributesDraped(e8[0], d2, h6, l5, -1), this._updateVertexAttributesDraped(e8[1], d2, h6, l5, 1);
  }
  _updateVertexAttributesDraped(e8, t9, r10, i5, s4) {
    const o8 = e8.getMutableAttribute("position")?.data;
    if (!o8) return;
    const { location: a9, direction: c13 } = this, { start: n6, end: d2 } = v6(c13, a9, s4, i5, t9, r10);
    o8[0] = n6[0], o8[1] = n6[1], o8[2] = H, o8[3] = d2[0], o8[4] = d2[1], o8[5] = H, e8.invalidateBoundingInfo();
  }
};
function x2(e8) {
  return [Mt(e8, [n(), n()]), Mt(e8, [n(), n()])];
}
function v6(e8, t9, r10, i5, s4, n6) {
  const d2 = l2(A3, o(A3, e8[1] * r10, e8[0] * -r10), i5 + s4 / 2), h6 = u(E2, u(E2, u(E2, t9, l2(E2, e8, n6 / 2)), d2), d2);
  return { start: h6, end: u(F, h6, l2(F, e8, -n6)) };
}
function V2(e8) {
  e8.geometries.length = 0;
}
function M2(e8) {
  e8.pixelRatioHandle.remove(), e8.geometries = [];
}
var P2 = n();
var A3 = n3();
var E2 = n3();
var F = n3();
var S = f();
var U = f();
var z = t4(0, 0, void 0, null);

// node_modules/@arcgis/core/views/3d/interactive/visualElements/Object3DVisualElement.js
var o7 = class extends t7 {
  constructor(e8) {
    super(e8), this._resources = null, this._transform = e3();
  }
  get object() {
    return null != this._resources ? this._resources.object : null;
  }
  get transform() {
    return this._transform;
  }
  set transform(s4) {
    n2(this._transform, s4), null != this._resources && (this._resources.object.transformation = this._transform);
  }
  recreate() {
    this.attached && this.createResources();
  }
  recreateGeometry() {
    if (null == this._resources) return;
    const e8 = this._resources.object;
    e8.removeAllGeometries(), this.createGeometries(e8), e8.visible = this.visible;
  }
  createResources() {
    this.destroyResources();
    const e8 = this.view.stage;
    if (!e8) return;
    const s4 = new d(e8, { pickable: false, updatePolicy: 1 }), r10 = new x({ castShadow: false });
    r10.transformation = this._transform, this.createExternalResources(), this.createGeometries(r10), s4.add(r10), r10.visible = this.visible, this._resources = { layer: s4, object: r10 };
  }
  destroyResources() {
    const e8 = this.view.stage;
    null != this._resources && e8 && (this._resources.layer.destroy(), this._resources.object.dispose(), this.destroyExternalResources(), this._resources = null);
  }
  updateVisibility(e8) {
    null != this._resources && (this._resources.object.visible = e8);
  }
};

// node_modules/@arcgis/core/views/3d/interactive/visualElements/PointVisualElement.js
var x3 = class extends o7 {
  constructor(e8) {
    super(e8), this._material = null, this._texture = null, this._geometry = null, this._size = 3, this._color = r5(1, 0, 1, 1), this._pixelSnappingEnabled = true, this._primitive = "square", this._outlineSize = 1, this._outlineColor = r5(1, 1, 1, 1), this._elevationInfo = null, this.applyProperties(e8);
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(e8) {
    this._geometry = e8, this.recreateGeometry();
  }
  get size() {
    return this._size;
  }
  set size(e8) {
    if (e8 !== this._size) {
      const t9 = this._preferredTextureSize;
      this._size = e8, t9 < this._preferredTextureSize ? this.recreate() : this._updateSizeAttribute();
    }
  }
  get color() {
    return this._color;
  }
  set color(e8) {
    L(e8, this._color) || (r4(this._color, e8), this._updateMaterial());
  }
  get pixelSnappingEnabled() {
    return this._pixelSnappingEnabled;
  }
  set pixelSnappingEnabled(e8) {
    this._pixelSnappingEnabled !== e8 && (this._pixelSnappingEnabled = e8, this._updateMaterial());
  }
  get primitive() {
    return this._primitive;
  }
  set primitive(e8) {
    this._primitive !== e8 && (this._primitive = e8, this.recreate());
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e8) {
    e8 !== this._outlineSize && (this._outlineSize = e8, this._updateMaterial());
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e8) {
    L(e8, this._outlineColor) || (r4(this._outlineColor, e8), this._updateMaterial());
  }
  get elevationInfo() {
    return this._elevationInfo;
  }
  set elevationInfo(e8) {
    this._elevationInfo = e8, this.recreateGeometry();
  }
  _updateMaterial() {
    this._material?.setParameters(this._materialParameters);
  }
  _updateSizeAttribute() {
    const e8 = this.object;
    if (null == e8) return;
    const t9 = e8.geometries[0];
    if (null == t9) return;
    const i5 = t9.getMutableAttribute("size").data, r10 = this._geometrySize;
    i5[0] = r10, i5[1] = r10, e8.geometryVertexAttributeUpdated(e8.geometries[0], "size");
  }
  get _materialParameters() {
    return { color: this._color, textureIsSignedDistanceField: true, sampleSignedDistanceFieldTexelCenter: c7(this._primitive), distanceFieldBoundingBox: u4, useVisibilityPixel: false, outlineColor: this._outlineColor, outlineSize: this._outlineSize, textureId: this._texture?.id, polygonOffset: false, shaderPolygonOffset: 0, drawAsLabel: true, depthEnabled: false, pixelSnappingEnabled: this.pixelSnappingEnabled, isDecoration: this.isDecoration };
  }
  get _geometrySize() {
    return this._size / o5;
  }
  createExternalResources() {
    this._texture = s3(this._primitive, this._preferredTextureSize), this._material = new te(this._materialParameters, 1 === this.view.state.viewingMode);
    const e8 = this.view.stage;
    this._texture.load(e8.renderView.renderingContext), e8.addTexture(this._texture);
  }
  destroyExternalResources() {
    if (this._texture) {
      this.view.stage.removeTexture(this._texture), this._texture.dispose(), this._texture = null;
    }
    this._material = null;
  }
  createGeometries(e8) {
    const t9 = this._createRenderGeometry();
    null != t9 && e8.addGeometry(t9);
  }
  forEachMaterial(e8) {
    e8(this._material);
  }
  get _preferredTextureSize() {
    return r2(2 * this._geometrySize, 16, 128);
  }
  calculateMapBounds(e8) {
    const t9 = this.object?.geometries[0];
    if (!t9) return false;
    const i5 = t9.attributes.get("position").data;
    return p2(i5, this.view.renderCoordsHelper.spatialReference, v7, this.view.spatialReference), N(e8, v7), true;
  }
  _createRenderGeometry() {
    const { geometry: e8, _material: i5 } = this;
    if (null == e8 || null == i5) return null;
    const { renderCoordsHelper: r10, elevationProvider: s4 } = this.view, o8 = u5(e8, s4, o6.fromElevationInfo(this.elevationInfo), r10), l5 = u2(c4.get(), e8.x, e8.y, o8), h6 = c4.get();
    p2(l5, e8.spatialReference, h6, r10.spatialReference);
    const p7 = this._geometrySize;
    return at(i5, { position: h6, size: [p7, p7], centerOffsetAndDistance: [0, 0, 0, 1] });
  }
};
var v7 = n();

// node_modules/@arcgis/core/views/3d/interactive/visualElements/RightAngleQuadVisualElement.js
var w2 = class extends t8 {
  constructor(e8) {
    super(e8), this._maxSize = 0, this._position = n(), this._up = n(), this._right = n(), this._renderOccluded = 4, this._color = r5(1, 0, 0, 1), this._outlineColor = r5(0, 0, 0, 1), this._outlineSize = 0, this._size = 32, this._outlineRenderOccluded = 16, this.applyProperties(e8);
  }
  createObject3DResourceFactory(e8) {
    return { view: e8, createResources: (e9) => this._createObject3DResources(e9), destroyResources: () => {
    }, cameraChanged: () => this._updateTransformObject3D(), forEachMaterial: (e9, t9) => {
      t9(e9.outlineMaterial), t9(e9.quadMaterial);
    } };
  }
  createDrapedResourceFactory(e8) {
    return { view: e8, createResources: () => this._createDrapedResources(), destroyResources: y4, forEachMaterial: (e9, t9) => {
      t9(e9.outlineMaterial), t9(e9.quadMaterial);
    } };
  }
  get renderOccluded() {
    return this._renderOccluded;
  }
  set renderOccluded(e8) {
    e8 !== this._renderOccluded && (this._renderOccluded = e8, this._updateQuadMaterial());
  }
  get isDecoration() {
    return this._isDecoration;
  }
  set isDecoration(e8) {
    this._isDecoration = e8, this._updateOutlineMaterial(), this._updateQuadMaterial();
  }
  get color() {
    return this._color;
  }
  set color(e8) {
    r4(this._color, e8), this._updateQuadMaterial();
  }
  get outlineColor() {
    return this._outlineColor;
  }
  set outlineColor(e8) {
    r4(this._outlineColor, e8), this._updateOutlineMaterial();
  }
  get outlineSize() {
    return this._outlineSize;
  }
  set outlineSize(e8) {
    const t9 = 0 === this._outlineSize != (0 === e8);
    this._outlineSize = e8, t9 ? this.recreateGeometry() : this._updateOutlineMaterial();
  }
  get size() {
    return this._size;
  }
  set size(e8) {
    e8 !== this._size && (this._size = e8, this._updateTransform());
  }
  get outlineRenderOccluded() {
    return this._outlineRenderOccluded;
  }
  set outlineRenderOccluded(e8) {
    this._outlineRenderOccluded = e8, this._updateOutlineMaterial();
  }
  set geometry({ previous: e8, center: t9, next: r10 }) {
    this._maxSize = Math.min(p(t9, e8), p(t9, r10)) / 3, _(this._up, e5(this._up, e8, t9)), _(this._right, e5(this._right, r10, t9)), o3(this._position, t9), this.recreateGeometry();
  }
  _createObject3DResources(e8) {
    const t9 = new f4(this._quadMaterialParameters), r10 = 0 === this._outlineSize ? void 0 : new Y(this._outlineMaterialParameters, this.view.state.isGlobal);
    return this._createObject3DGeometries(e8, t9, r10), { quadMaterial: t9, outlineMaterial: r10 };
  }
  _createObject3DGeometries(e8, t9, r10) {
    if (C(this._up, a3) && C(this._right, a3)) return;
    const i5 = this._createGeometries(t9, r10);
    for (const s4 of i5) e8.addGeometry(s4);
    this._updateTransformObject3D(e8);
  }
  _createDrapedResources() {
    const t9 = new f4(this._quadMaterialParameters), r10 = 0 === this._outlineSize ? void 0 : new Y(this._outlineMaterialParameters, this.view.state.isGlobal), i5 = this._createGeometries(t9, r10).map((e8) => new h4(e8));
    this._setTransformDraped(i5);
    return { quadMaterial: t9, outlineMaterial: r10, geometries: i5, pixelRatioHandle: l(() => this.view.state.contentPixelRatio, () => this.drapedResources.recreateGeometry()) };
  }
  _createGeometries(e8, t9) {
    const { up: r10, right: i5, corner: s4 } = this._getVertices(), a9 = z2(r10, i5, s4, e8);
    if (!t9) return [a9];
    return [a9, Mt(t9, [r10, s4, i5])];
  }
  _getVertices() {
    let e8 = this._up, t9 = this._right;
    const r10 = c3(c4.get(), e8, t9);
    return this.isDraped && (e8 = o3(c4.get(), e8), t9 = o3(c4.get(), t9), e8[2] = 0, t9[2] = 0, r10[2] = 0), { up: e8, right: t9, corner: r10 };
  }
  _updateTransform() {
    this.isDraped ? this.drapedResources.recreateGeometry() : this._updateTransformObject3D();
  }
  _updateTransformObject3D(e8 = this.object3dResources.object) {
    if (!e8) return;
    const i5 = this.view.state.camera, s4 = this._size * i5.computeScreenPixelSizeAt(this._position), a9 = Math.min(this._maxSize, s4);
    q(v8, this._position), f2(v8, v8, [a9, a9, a9]), e8.transformation = v8;
  }
  _setTransformDraped(e8) {
    if (0 === e8.length) return;
    const { view: { overlayManager: i5, state: { contentPixelRatio: s4 } } } = this, { _position: a9, _size: o8 } = this, l5 = o3(c4.get(), a9);
    l5[2] = H;
    const c13 = x4;
    c13.spatialReference = i5.spatialReference, c13.x = l5[0], c13.y = l5[1];
    const u6 = o8 * (this.view.overlayPixelSizeInMapUnits(c13) * s4), h6 = Math.min(this._maxSize, u6);
    q(v8, l5), f2(v8, v8, [h6, h6, 1]);
    for (const t9 of e8) t9.transformation = v8;
  }
  get _quadMaterialParameters() {
    return { color: this._color, forceTransparentMode: true, writeDepth: false, polygonOffset: true, renderOccluded: this._renderOccluded, isDecoration: this.isDecoration };
  }
  _updateQuadMaterial() {
    this.object3dResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters), this.drapedResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters);
  }
  get _outlineMaterialParameters() {
    return { color: this._outlineColor, width: this._outlineSize, renderOccluded: this._outlineRenderOccluded, isDecoration: this.isDecoration };
  }
  _updateOutlineMaterial() {
    this.object3dResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters), this.drapedResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters);
  }
};
function y4(e8) {
  e8.pixelRatioHandle.remove(), e8.geometries = [];
}
function z2(e8, t9, r10, i5) {
  return new m2(i5, [["position", new t5([0, 0, 0, ...t9, ...e8, ...r10], [0, 1, 2, 1, 2, 3], 3, true)]]);
}
var v8 = e3();
var x4 = t4(0, 0, void 0, null);

// node_modules/@arcgis/core/views/3d/interactive/SnappingVisualizer3D.js
var w3 = class extends a7 {
  sortUniqueHints(e8) {
    return e8.sort((e9, i5) => (i5 instanceof s2 ? i5.length : 0) - (e9 instanceof s2 ? e9.length : 0));
  }
  visualizeIntersectionPoint(e8, n6) {
    const { spatialReference: t9, view: o8 } = n6, r10 = x5(n6);
    return c(new x3({ view: o8, primitive: "circle", geometry: y3(e8.intersectionPoint, t9), elevationInfo: e8.isDraped ? C2 : k, size: 20, outlineSize: 2, color: r10.intersectionPointColor, outlineColor: r10.intersectionPointOutlineColor, pixelSnappingEnabled: false, isDecoration: true, attached: true }));
  }
  visualizePoint(e8, n6) {
    const { view: t9, spatialReference: o8 } = n6, r10 = x5(n6), l5 = E3(e8.point, e8.domain, n6);
    return c(new x3({ view: t9, primitive: "circle", geometry: y3(l5, o8), elevationInfo: j2(e8), size: 20, outlineSize: 2, color: r10.pointColor, outlineColor: r10.pointOutlineColor, pixelSnappingEnabled: false, isDecoration: true, attached: true }));
  }
  visualizeLine(e8, n6) {
    const { view: t9, spatialReference: o8 } = n6, r10 = x5(n6), l5 = E3(e8.lineStart, e8.domain, n6), a9 = E3(e8.lineEnd, e8.domain, n6);
    return c(z3(e8.type, l5, a9, o8, j2(e8), t9, r10, e8.isDraped, e8.fadeLeft, e8.fadeRight));
  }
  visualizeCurve(e8, i5) {
    return e();
  }
  visualizeParallelSign(e8, n6) {
    const { view: o8, spatialReference: r10 } = n6, l5 = x5(n6), { isDraped: a9 } = e8, s4 = j2(e8), c13 = E3(e8.lineStart, e8.domain, n6), p7 = E3(e8.lineEnd, e8.domain, n6), u6 = D3(c13, r10, s4, o8, a9), m6 = D3(p7, r10, s4, o8, a9), f5 = I(m6, u6, m6, 0.5), g3 = new O2({ view: o8, attached: false, offset: p5.parallelLineHintOffset, length: p5.parallelLineHintLength, width: p5.parallelLineHintWidth, color: l5.parallelSignColor, location: f5, renderOccluded: a9 ? 4 : 16, isDraped: a9, renderGroup: 3, isDecoration: true });
    return g3.setDirectionFromPoints(u6, f5), g3.attached = true, c(g3);
  }
  visualizeRightAngleQuad(e8, n6) {
    const { view: t9, spatialReference: o8 } = n6, r10 = x5(n6), l5 = j2(e8), { isDraped: a9 } = e8, s4 = E3(e8.previousVertex, e8.domain, n6), c13 = E3(e8.centerVertex, e8.domain, n6), d2 = E3(e8.nextVertex, e8.domain, n6), p7 = D3(s4, o8, l5, t9, a9), m6 = D3(c13, o8, l5, t9, a9), f5 = D3(d2, o8, l5, t9, a9);
    return c(new w2({ view: t9, attached: true, color: a9 ? r10.rightAngleColorDraped : r10.rightAngleColor, renderOccluded: a9 ? 4 : 2, outlineRenderOccluded: a9 ? 4 : 16, outlineColor: r10.rightAngleOutlineColor, outlineSize: p5.rightAngleHintOutlineSize, size: p5.rightAngleHintSize, isDraped: a9, geometry: { previous: p7, center: m6, next: f5 }, renderGroup: 3, isDecoration: true }));
  }
};
function x5(i5) {
  const { effectiveTheme: n6 } = i5.view, t9 = n6.accentColor.toUnitRGBA(), o8 = [0, 0, 0, 0];
  return { intersectionPointColor: o8, intersectionPointOutlineColor: t9, pointColor: o8, pointOutlineColor: t9, lineColor: t9, lineOutlineColor: void 0, parallelSignColor: t9, rightAngleColor: t9, rightAngleColorDraped: D(n6.accentColor, 0.5).toUnitRGBA(), rightAngleOutlineColor: t9 };
}
function E3(e8, i5, { selfSnappingZ: n6, view: t9, spatialReference: o8 }) {
  return 2 & i5 && v4(e8) && null != n6 ? I2(e8, n6, t9, o8) : e8;
}
function j2(e8) {
  return e8.isDraped ? C2 : k;
}
function z3(e8, i5, n6, t9, o8, r10, l5, a9 = false, s4 = true, d2 = true) {
  const p7 = D3(i5, t9, o8, r10, a9), u6 = D3(n6, t9, o8, r10, a9), m6 = new E({ view: r10, extensionType: 3, start: p7, end: u6, isDraped: a9, color: l5.lineColor, renderOccluded: a9 ? 4 : 16, renderGroup: 3, isDecoration: true });
  switch (e8) {
    case 0:
      m6.width = p5.lineHintWidthTarget, m6.fadedExtensions = { start: 0, end: p5.lineHintFadedExtensions };
      break;
    case 2:
      m6.width = p5.lineHintWidthReference, m6.fadedExtensions = { start: 0, end: 0 };
      break;
    case 1:
      m6.width = p5.lineHintWidthReference, m6.fadedExtensions = { start: s4 ? p5.lineHintFadedExtensions : 0, end: d2 ? p5.lineHintFadedExtensions : 0 };
  }
  return m6.attached = true, m6;
}
function D3(e8, i5, n6, t9, l5) {
  const a9 = n();
  if (l5) {
    const n7 = t9.overlayManager.spatialReference;
    p2(e8, i5, a9, n7);
  } else i3(e8, i5, n6, t9, a9);
  return a9;
}

export {
  t8 as t,
  c12 as c,
  E,
  o7 as o,
  x3 as x,
  w3 as w
};
//# sourceMappingURL=chunk-T6K27EAS.js.map
