import {
  r as r2
} from "./chunk-IMJBZ4A5.js";
import "./chunk-QGNQJYZT.js";
import "./chunk-IRGX4DBZ.js";
import "./chunk-3PLUKWC5.js";
import "./chunk-AHEHRQEH.js";
import "./chunk-DVV55TEN.js";
import "./chunk-3ELL5H57.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-NIB6ADTM.js";
import "./chunk-ZWC72SJH.js";
import "./chunk-ZEWMLOOY.js";
import "./chunk-ZRWCUWWK.js";
import "./chunk-TIEYANBR.js";
import "./chunk-N3SZCRGD.js";
import "./chunk-MRTJYRK3.js";
import "./chunk-BCADJITZ.js";
import "./chunk-RTVKY37F.js";
import {
  s
} from "./chunk-PQFEWUZC.js";
import {
  r3 as r
} from "./chunk-TX75HZKJ.js";
import "./chunk-GLWFJLHD.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/widgets/PanoramicViewer/support/PanoramicMeshManager.js
var o = class _o {
  constructor() {
    this._connection = null, this.convertPixelBlockToImageData = async (e) => {
      if (!this._connection) throw new r("panoramic-mesh-manager:convertPixelBlockToImageData", "Panoramic mesh manager is not loaded");
      const n = e.clone(), { pixelBlock: o2, transferList: i } = n.getTransferableObject();
      return await this._connection.invoke("convertPixelBlockToImageData", o2, { transferList: i });
    }, this.getFacesWithVertexAttributes = async (e) => {
      if (!this._connection) throw new r("panoramic-mesh-manager:getFacesWithVertexAttributes", "Panoramic mesh manager is not loaded");
      return await this._connection.invoke("getFacesWithVertexAttributes", e);
    };
  }
  destroy() {
    this._connection?.close();
  }
  async _startWorker(t) {
    this._connection = await r2("PanoramicMeshWorker", t);
  }
  static getInstance() {
    return _o._instance || (_o._instance = new _o()), _o._instance;
  }
  async load(t) {
    return s(t), await this._startWorker(t), this;
  }
  async recomputePositions(e, n, o2, i) {
    if (!this._connection) throw new r("panoramic-mesh-manager:recomputePositions", "Panoramic mesh manager is not loaded");
    return await this._connection.invoke("recomputePositions", { oldDistance: e, newDistance: n, position: o2 }, __spreadProps(__spreadValues({}, i), { transferList: [o2.buffer.slice()] }));
  }
};
export {
  o as default
};
//# sourceMappingURL=PanoramicMeshManager-SJC37WTS.js.map
