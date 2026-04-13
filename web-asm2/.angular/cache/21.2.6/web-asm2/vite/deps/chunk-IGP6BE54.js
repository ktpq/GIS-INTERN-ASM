import {
  w
} from "./chunk-47KLUZYI.js";
import {
  h
} from "./chunk-KHI7HSAJ.js";
import {
  e
} from "./chunk-EVUW6QB5.js";
import {
  z
} from "./chunk-IDR4SUAQ.js";
import {
  m,
  u
} from "./chunk-SLHRVNEB.js";
import {
  G
} from "./chunk-4X5LQ2UO.js";
import {
  b
} from "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  L,
  f2 as f,
  j,
  s
} from "./chunk-2DNVIDFH.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/views/2d/viewStateUtils.js
var t = Math.PI / 180;
function n(n2) {
  return n2 * t;
}
function o(t2, o2) {
  const a3 = n(o2.rotation), r = Math.abs(Math.cos(a3)), s2 = Math.abs(Math.sin(a3)), [u2, c2] = o2.size;
  return t2[0] = Math.round(c2 * s2 + u2 * r), t2[1] = Math.round(c2 * r + u2 * s2), t2;
}
function a2(t2, n2, o2, a3) {
  const [r, s2] = n2, [u2, c2] = a3, h2 = 0.5 * o2;
  return t2[0] = r - h2 * u2, t2[1] = s2 - h2 * c2, t2[2] = r + h2 * u2, t2[3] = s2 + h2 * c2, t2;
}

// node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js
var x = u();
var y = [0, 0];
var S = new e(0, 0, 0, 0);
var w2 = { imageMaxWidth: 2048, imageMaxHeight: 2048, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false };
var M = class extends b {
  constructor(t2) {
    super(t2), this._imagePromise = null, this.bitmaps = [], this.hidpi = w2.hidpi, this.imageMaxWidth = w2.imageMaxWidth, this.imageMaxHeight = w2.imageMaxHeight, this.imageRotationSupported = w2.imageRotationSupported, this.imageNormalizationSupported = w2.imageNormalizationSupported, this.update = L(async (t3, e2) => {
      if (s(e2), !t3.stationary || this.destroyed) return;
      const i = t3.state, a3 = G(i.spatialReference), s2 = this.hidpi ? t3.pixelRatio : 1, n2 = i.worldScreenWidth > 0, p = n2 && this.imageNormalizationSupported && i.worldScreenWidth < i.size[0], m2 = Math.round((this.imageMaxWidth ?? 0) / s2), d = Math.round((this.imageMaxHeight ?? 0) / s2);
      p ? (y[0] = i.worldScreenWidth, y[1] = i.size[1]) : this.imageRotationSupported ? (y[0] = i.size[0], y[1] = i.size[1]) : o(y, i);
      const c2 = Math.floor(y[0]) > m2 || Math.floor(y[1]) > d, u2 = a3 && (i.extent.xmin < a3.valid[0] || i.extent.xmax > a3.valid[1]), g = !this.imageNormalizationSupported && u2, f2 = !c2 && !g, x2 = this.imageRotationSupported ? i.rotation : 0, S2 = this.container.children.slice();
      if (f2) {
        const t4 = p ? i.paddedViewState.center : i.center;
        this._imagePromise = this._singleExport(i, y, t4, i.resolution, x2, s2, e2);
      } else {
        let t4 = Math.min(m2, d);
        n2 && (t4 = Math.min(i.worldScreenWidth, t4), t4 = Math.round(i.worldScreenWidth / Math.ceil(i.worldScreenWidth / t4))), this._imagePromise = this._tiledExport(i, t4, s2, e2);
      }
      try {
        const t4 = await this._imagePromise ?? [];
        s(e2);
        const i2 = [];
        if (this._imagePromise = null, this.destroyed) return;
        this.bitmaps = t4;
        for (const e3 of S2) t4.includes(e3) || i2.push(e3.fadeOut().then(() => {
          e3.remove(), e3.destroy();
        }));
        for (const e3 of t4) i2.push(e3.fadeIn());
        await Promise.all(i2);
      } catch (w3) {
        this._imagePromise = null, f(w3);
      }
    }, 5e3), this.updateExports = L(async (t3) => {
      const e2 = [];
      for (const i of this.container.children) {
        if (!i.visible || !i.stage) return;
        e2.push(t3(i).then(() => {
          i.invalidateTexture(), i.requestRender();
        }));
      }
      this._imagePromise = j(e2).then(() => this._imagePromise = null), await this._imagePromise;
    });
  }
  destroy() {
    this.bitmaps.forEach((t2) => t2.destroy()), this.bitmaps = [];
  }
  get updating() {
    return !this.destroyed && null !== this._imagePromise;
  }
  async _export(t2, e2, i, r, a3, s2) {
    const n2 = await this.fetchSource(t2, Math.floor(e2 * a3), Math.floor(i * a3), { rotation: r, pixelRatio: a3, signal: s2 });
    s(s2);
    const p = new w(null, true);
    return p.x = t2.xmin, p.y = t2.ymax, p.resolution = t2.width / e2, p.rotation = r, p.pixelRatio = a3, p.opacity = 0, this.container.addChild(p), await p.setSourceAsync(n2, s2), s(s2), p;
  }
  async _singleExport(t2, e2, i, o2, r, a3, s2) {
    a2(x, i, o2, e2);
    const n2 = m(x, t2.spatialReference);
    return [await this._export(n2, e2[0], e2[1], r, a3, s2)];
  }
  _tiledExport(t2, e2, i, o2) {
    const r = z.create({ size: e2, spatialReference: t2.spatialReference, scales: [t2.scale] }), a3 = new h(r), s2 = a3.getTileCoverage(t2);
    if (!s2) return null;
    const n2 = [];
    return s2.forEach((r2, s3, m2, h2) => {
      S.set(r2, s3, m2, 0), a3.getTileBounds(x, S);
      const d = m(x, t2.spatialReference);
      n2.push(this._export(d, e2, e2, 0, i, o2).then((t3) => (0 !== h2 && (S.set(r2, s3, m2, h2), a3.getTileBounds(x, S), t3.x = x[0], t3.y = x[3]), t3)));
    }), Promise.all(n2);
  }
};
__decorate([a()], M.prototype, "_imagePromise", void 0), __decorate([a()], M.prototype, "bitmaps", void 0), __decorate([a()], M.prototype, "container", void 0), __decorate([a()], M.prototype, "fetchSource", void 0), __decorate([a()], M.prototype, "hidpi", void 0), __decorate([a()], M.prototype, "imageMaxWidth", void 0), __decorate([a()], M.prototype, "imageMaxHeight", void 0), __decorate([a()], M.prototype, "imageRotationSupported", void 0), __decorate([a()], M.prototype, "imageNormalizationSupported", void 0), __decorate([a()], M.prototype, "requestUpdate", void 0), __decorate([a()], M.prototype, "updating", null), M = __decorate([c("esri.views.2d.layers.support.ExportStrategy")], M);

export {
  M
};
//# sourceMappingURL=chunk-IGP6BE54.js.map
