import {
  r as r2
} from "./chunk-OANXGOUH.js";
import "./chunk-2V4Q54HN.js";
import "./chunk-JSUZNUEF.js";
import "./chunk-N7DF7CMI.js";
import "./chunk-2UK7CYH6.js";
import "./chunk-OR4JKEPP.js";
import "./chunk-TUCZDNFG.js";
import "./chunk-OLWKRV2W.js";
import "./chunk-LHNGH3Y4.js";
import "./chunk-2DT3G6U2.js";
import "./chunk-K3RYWESQ.js";
import "./chunk-FCTZWJBQ.js";
import "./chunk-5AVTDH3Y.js";
import "./chunk-W5GOZNVR.js";
import "./chunk-GVV5RH4O.js";
import "./chunk-E7T52Q27.js";
import "./chunk-YR4EWTGD.js";
import "./chunk-O3PP4I47.js";
import {
  s
} from "./chunk-2DNVIDFH.js";
import {
  r3 as r
} from "./chunk-6SPQI6I6.js";
import "./chunk-KWV5EQET.js";
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
//# sourceMappingURL=PanoramicMeshManager-OASMR32X.js.map
