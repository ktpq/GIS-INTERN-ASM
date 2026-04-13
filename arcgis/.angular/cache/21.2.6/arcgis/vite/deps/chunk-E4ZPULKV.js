import {
  O,
  R
} from "./chunk-LW5ZVONF.js";
import {
  e as e2
} from "./chunk-C6P3JIAK.js";
import {
  e as e3,
  t
} from "./chunk-RAVYRPMK.js";
import {
  A,
  P,
  Q,
  _ as _2,
  e,
  x
} from "./chunk-YM62CGUL.js";
import {
  u
} from "./chunk-YY77NHLE.js";
import {
  n
} from "./chunk-MLBRAI7B.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import {
  N
} from "./chunk-KWV5EQET.js";

// node_modules/@arcgis/core/views/draw/support/surfaceCoordinateSystems.js
function u2(t2, r, e4 = null) {
  return null != e4 ? [t2, r, e4] : [t2, r];
}
function w(t2, r, e4 = null) {
  return null != e4 ? { x: t2, y: r, z: e4 } : { x: t2, y: r };
}
var g = class {
  constructor(t2) {
    this.spatialReference = t2;
  }
  mapToLocalMultiple(r) {
    return r.map((t2) => this.mapToLocal(t2)).filter(N);
  }
  get doUnnormalization() {
    return false;
  }
};
var R2 = class extends g {
  constructor(t2, a, o = null) {
    super(a), this._defaultZ = o, this.transform = e3(), this.transformInv = e3(), this.transform = t(t2), u(this.transformInv, this.transform);
  }
  makeMapPoint(t2, r) {
    return u2(t2, r, this._defaultZ);
  }
  mapToLocal(t2) {
    return w(this.transform[0] * t2[0] + this.transform[2] * t2[1] + this.transform[4], this.transform[1] * t2[0] + this.transform[3] * t2[1] + this.transform[5]);
  }
  localToMap(t2) {
    return u2(this.transformInv[0] * t2.x + this.transformInv[2] * t2.y + this.transformInv[4], this.transformInv[1] * t2.x + this.transformInv[3] * t2.y + this.transformInv[5], this._defaultZ);
  }
};
var W = class extends g {
  constructor(t2, r) {
    super(t2.spatialReference), this.view = t2, this.defaultZ = null, this.pWS = n(), this.tangentFrameUpWS = n(), this.tangentFrameRightWS = n(), this.tangentFrameForwardWS = n(), this.localFrameRightWS = n(), this.localFrameUpWS = n(), this.worldToLocalTransform = e2(), this.localToWorldTransform = e2(), this.scale = 1, this.scale = t2.resolution, this.referenceMapPoint = r, this.defaultZ = r.hasZ ? r.z : null;
    const e4 = t2.state.camera.viewRight;
    this.view.renderCoordsHelper.toRenderCoords(this.referenceMapPoint, this.pWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, 0, this.tangentFrameRightWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, 1, this.tangentFrameUpWS), this.view.renderCoordsHelper.worldBasisAtPosition(this.pWS, 2, this.tangentFrameForwardWS);
    const s = n();
    x(s, this.tangentFrameForwardWS, A(e4, this.tangentFrameForwardWS)), e(this.localFrameRightWS, e4, s), _2(this.localFrameRightWS, this.localFrameRightWS), P(this.localFrameUpWS, this.tangentFrameForwardWS, this.localFrameRightWS), R(this.worldToLocalTransform, this.localFrameRightWS, this.tangentFrameRightWS), O(this.localToWorldTransform, this.worldToLocalTransform);
  }
  get doUnnormalization() {
    return "global" === this.view.viewingMode;
  }
  makeMapPoint(t2, r) {
    return u2(t2, r, this.defaultZ);
  }
  mapToLocal(t2) {
    const r = n();
    this.view.renderCoordsHelper.toRenderCoords(new _({ x: t2[0], y: t2[1], spatialReference: this.spatialReference }), r), Q(r, r, this.worldToLocalTransform);
    const e4 = this.view.renderCoordsHelper.fromRenderCoords(r, new _({ spatialReference: this.view.spatialReference }));
    return null != e4 ? w(e4.x / this.scale, e4.y / this.scale) : null;
  }
  localToMap(t2) {
    const r = n();
    this.view.renderCoordsHelper.toRenderCoords(new _({ x: t2.x * this.scale, y: t2.y * this.scale, spatialReference: this.spatialReference }), r), Q(r, r, this.localToWorldTransform);
    const e4 = this.view.renderCoordsHelper.fromRenderCoords(r, new _({ spatialReference: this.view.spatialReference }));
    return null != e4 ? u2(e4.x, e4.y, this.defaultZ) : null;
  }
};
function v(t2, r) {
  if ("2d" === t2.type) return new R2(t2.state.transform, t2.spatialReference, r.length > 2 ? r[2] : null);
  if ("3d" === t2.type) {
    const e4 = r.length > 2 ? new _({ x: r[0], y: r[1], z: r[2], spatialReference: t2.spatialReference }) : new _({ x: r[0], y: r[1], spatialReference: t2.spatialReference });
    return new W(t2, e4);
  }
  return null;
}

export {
  w,
  v
};
//# sourceMappingURL=chunk-E4ZPULKV.js.map
