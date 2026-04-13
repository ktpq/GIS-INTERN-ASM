import {
  r as r2
} from "./chunk-PRAT45XG.js";
import "./chunk-373PU6B4.js";
import "./chunk-44DFY7I4.js";
import "./chunk-VBPD3MAX.js";
import "./chunk-MVS4RVUO.js";
import "./chunk-PXICZPXV.js";
import "./chunk-N7OQ4MFT.js";
import "./chunk-QRPQOATM.js";
import "./chunk-473S3KQM.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-WTVOAGXR.js";
import "./chunk-2F6BRQJJ.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-RTVKY37F.js";
import {
  s
} from "./chunk-WARIPJQI.js";
import {
  r3 as r
} from "./chunk-6I475YAP.js";
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
//# sourceMappingURL=PanoramicMeshManager-TMWAKD72.js.map
