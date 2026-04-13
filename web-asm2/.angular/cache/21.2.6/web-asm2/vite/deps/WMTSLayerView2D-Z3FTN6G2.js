import {
  n as n2,
  r as r2
} from "./chunk-XW435B74.js";
import "./chunk-47KLUZYI.js";
import "./chunk-D7SCNX6L.js";
import "./chunk-7NMRWGF3.js";
import "./chunk-LE53ULHB.js";
import {
  i
} from "./chunk-BZ5QMKJU.js";
import "./chunk-TF6FMOGZ.js";
import {
  S
} from "./chunk-LQAXBSUN.js";
import {
  I
} from "./chunk-5F5EEEPA.js";
import "./chunk-JPEJPHSH.js";
import "./chunk-AV3H3GE7.js";
import "./chunk-JFSL442Y.js";
import "./chunk-LE7L5AWJ.js";
import "./chunk-7HEBNF6D.js";
import "./chunk-UYNYIOPC.js";
import "./chunk-QOY7P5Z5.js";
import "./chunk-DGIEJ3OR.js";
import "./chunk-W4X6TDMU.js";
import "./chunk-YJLDUHU6.js";
import "./chunk-2ZM4WQIE.js";
import "./chunk-LPNBAHZG.js";
import "./chunk-YOINB67K.js";
import "./chunk-Q4GEJJXY.js";
import "./chunk-ETN7N3NT.js";
import "./chunk-SPI5RLJQ.js";
import "./chunk-G7LDH7VD.js";
import "./chunk-7U4LQW5Y.js";
import "./chunk-QCEMOJ33.js";
import "./chunk-SEVWV2FY.js";
import "./chunk-ZSAPXY7T.js";
import "./chunk-Z5FUIBSR.js";
import "./chunk-2DDOBC4Y.js";
import "./chunk-OAK4TACJ.js";
import "./chunk-D4W2QISB.js";
import "./chunk-DO7AIBZH.js";
import "./chunk-NAAAH7RP.js";
import {
  a as a2,
  r
} from "./chunk-XS6WUCBD.js";
import "./chunk-2WTHIKFG.js";
import {
  h
} from "./chunk-KHI7HSAJ.js";
import "./chunk-LBUHOK3S.js";
import "./chunk-YY77NHLE.js";
import {
  e
} from "./chunk-EVUW6QB5.js";
import "./chunk-HR7MU35Z.js";
import "./chunk-PCKGNCDO.js";
import "./chunk-GHG4ULKJ.js";
import {
  p
} from "./chunk-43RE4NFD.js";
import "./chunk-BH57RERT.js";
import "./chunk-AFCXMSTT.js";
import "./chunk-YM62CGUL.js";
import "./chunk-ULRT2MRD.js";
import "./chunk-SGJIDPMU.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-FPTKPNJ2.js";
import "./chunk-OCXIU36X.js";
import "./chunk-DOW7IE32.js";
import "./chunk-XW3QCD2I.js";
import "./chunk-BGSLLK4A.js";
import "./chunk-XASC6DGR.js";
import "./chunk-RTWZV6QR.js";
import "./chunk-JNCFJPS4.js";
import "./chunk-WYBA72UW.js";
import "./chunk-IRE2Q6SD.js";
import "./chunk-D4W5U2I5.js";
import "./chunk-Q25A4AK6.js";
import "./chunk-ULJA4TCB.js";
import "./chunk-GLXZFAAW.js";
import "./chunk-DH7E4OJC.js";
import "./chunk-XSQPGBLC.js";
import "./chunk-XLY2Y27N.js";
import "./chunk-MLBRAI7B.js";
import "./chunk-DUGX5C7M.js";
import "./chunk-CD6IOUFB.js";
import "./chunk-B4Y3SDRP.js";
import "./chunk-DOVHXPQB.js";
import "./chunk-75I3MNCT.js";
import "./chunk-4L5TCIUQ.js";
import "./chunk-DHIQ5CF2.js";
import "./chunk-EKUGKFFS.js";
import "./chunk-PBNUMATE.js";
import "./chunk-4F4IE6P5.js";
import "./chunk-EF6HOWDG.js";
import "./chunk-EFJUSEVJ.js";
import "./chunk-47Z5HJ52.js";
import "./chunk-QK7JX7UE.js";
import "./chunk-4UWOVR5Y.js";
import "./chunk-SLHRVNEB.js";
import "./chunk-7RKO4CUB.js";
import "./chunk-L3WEJB7W.js";
import "./chunk-LHMCLOXR.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-TT3WF5RA.js";
import "./chunk-QWNB5I7T.js";
import "./chunk-S3BACLSK.js";
import "./chunk-ZILR7JK7.js";
import "./chunk-X7TQ4MJH.js";
import "./chunk-YDHIJ7J4.js";
import "./chunk-DHNLUBWZ.js";
import "./chunk-EWPZDMTE.js";
import {
  T
} from "./chunk-4X5LQ2UO.js";
import "./chunk-YBEVNI5U.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-JADLUMUQ.js";
import "./chunk-SG23UZYK.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-IQN5O5FG.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-HJCCWVZL.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-TVMQ3GIS.js";
import "./chunk-O3PP4I47.js";
import {
  d
} from "./chunk-2DNVIDFH.js";
import {
  n2 as n
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var y = [0, 0];
var _ = class extends i(r2(S(I))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const { activeLayer: e2 } = this.layer, { tileMatrixSet: t } = e2;
    if (t && T(t.tileInfo?.spatialReference, this.view.spatialReference)) return t;
    const i2 = this._getTileMatrixSetBySpatialReference(e2);
    return i2 && i2.id !== e2.tileMatrixSetId ? (e2.tileMatrixSetId = i2.id, i2) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    const e2 = this.tileMatrixSet?.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new a2({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t), scheduler: this.scheduler, priority: p.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new r({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet], () => this.doRefresh())), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    return this.layer.activeLayer.tileMatrixSets?.some((t) => T(t.tileInfo?.spatialReference, e2)) ?? false;
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i2 = t.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(y, t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e2, t = {}) {
    const s = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r3, resamplingLevel: a3 = 0 } = t;
    if (!s) return this._fetchImage(e2, r3);
    const l = new e(0, 0, 0, 0);
    let h2;
    try {
      await s.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l, { signal: r3 }), h2 = await this._fetchImage(l, r3);
    } catch (n3) {
      if (d(n3)) throw n3;
      if (a3 < 3) {
        const i2 = this._tileInfoView.getTileParentId(e2.id);
        if (i2) {
          const s2 = new e(i2), r4 = await this.fetchTile(s2, __spreadProps(__spreadValues({}, t), { resamplingLevel: a3 + 1 }));
          return n2(this._tileInfoView, r4, s2, e2);
        }
      }
      throw n3;
    }
    return n2(this._tileInfoView, h2, l, e2);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.size[0], e2.bitmap.height = this._tileInfoView.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s) {
        d(s) || n.getLogger(this).error(s);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    return e2.tileMatrixSets?.find((e3) => T(e3.tileInfo?.spatialReference, this.view.spatialReference));
  }
};
__decorate([a({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = __decorate([c("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=WMTSLayerView2D-Z3FTN6G2.js.map
