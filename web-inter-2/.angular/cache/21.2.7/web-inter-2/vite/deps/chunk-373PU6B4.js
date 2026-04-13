import {
  z
} from "./chunk-44DFY7I4.js";
import {
  s as s3
} from "./chunk-PXICZPXV.js";
import {
  n as n2
} from "./chunk-WTVOAGXR.js";
import {
  N,
  _,
  c,
  e as e2,
  f2 as f,
  r2
} from "./chunk-2F6BRQJJ.js";
import {
  t as t2
} from "./chunk-BCADJITZ.js";
import {
  $,
  C,
  a,
  d,
  e2 as e,
  h,
  l,
  o4 as o,
  s as s2,
  t2 as t,
  u3 as u,
  w
} from "./chunk-WARIPJQI.js";
import {
  has,
  n2 as n,
  r3 as r,
  s2 as s
} from "./chunk-6I475YAP.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/workers/utils.js
var r3 = "worker:port-closed";
var e3 = { HANDSHAKE: 0, OPEN: 1, OPENED: 2, RESPONSE: 3, INVOKE: 4, ABORT: 5, CLOSE: 6, OPEN_PORT: 7, ON: 8 };
var n3 = 0;
function s4() {
  return n3++;
}
function i(t4) {
  return t4 && "object" == typeof t4 && ("result" in t4 || "transferList" in t4);
}
function o2(t4) {
  return t4 ? "string" == typeof t4 ? JSON.stringify({ name: "message", message: t4 }) : t4.toJSON ? JSON.stringify(t4) : JSON.stringify({ name: t4.name, message: t4.message, details: t4.details || { stack: t4.stack } }) : null;
}
function a2(t4, r5, n7, s6) {
  if (r5.type === e3.OPEN_PORT) return void t4.postMessage(r5, [r5.port]);
  if (r5.type !== e3.INVOKE && r5.type !== e3.RESPONSE) return void t4.postMessage(r5);
  let o3;
  i(n7) ? (o3 = u2(n7.transferList), r5.data = n7.result) : (o3 = u2(s6), r5.data = n7), o3 ? t4.postMessage(r5, o3) : t4.postMessage(r5);
}
function f2(t4) {
  if (!t4) return null;
  const r5 = t4.data;
  return r5 ? "string" == typeof r5 ? JSON.parse(r5) : r5 : null;
}
function u2(t4) {
  if (!t4?.length) return null;
  if (has("esri-workers-arraybuffer-transfer")) return t4;
  const r5 = t4.filter((t5) => !c2(t5));
  return r5.length ? r5 : null;
}
function c2(t4) {
  return t4 instanceof ArrayBuffer || "ArrayBuffer" === t4?.constructor?.name;
}
async function l2(e6) {
  try {
    return await e6;
  } catch (n7) {
    const e7 = n7?.name === r3;
    if (!(d(n7) || e7)) throw n7;
    return;
  }
}

// node_modules/@arcgis/core/core/workers/InvokeHandler.js
function t3(t4, r5) {
  return new Proxy({}, { get: (e6, i3, s6) => (...e7) => {
    let s7, o3;
    const a7 = e7[e7.length - 1];
    n4(a7) && (s7 = a7.signal, o3 = a7.transferList, e7.pop());
    return t4.apply(r5 ? `${r5}.${i3.toString()}` : i3.toString(), e7, { transferList: o3, signal: s7 });
  } });
}
function n4(t4) {
  return "object" == typeof t4 && !Array.isArray(t4) && null != t4 && ("signal" in t4 || "transferList" in t4 || 0 === Object.keys(t4).length);
}

// node_modules/@arcgis/core/core/workers/registry.js
var r4 = { CSVSourceWorker: () => import("./CSVSourceWorker-6PSF7FX6.js"), EdgeProcessingWorker: () => import("./EdgeProcessingWorker-E3NOZ4DZ.js"), ElevationSamplerWorker: () => import("./ElevationSamplerWorker-4XYWCQPN.js"), FeaturePipelineWorker: () => import("./FeaturePipelineWorker-66RSN2P4.js"), FeatureServiceSnappingSourceWorker: () => import("./FeatureServiceSnappingSourceWorker-AD72MIQR.js"), FlowWorker: () => import("./FlowWorker-CUSQJCZ5.js"), GaussianSplatSortWorker: () => import("./GaussianSplatSortWorker-B7CLDR2H.js"), MeasurementWorker: () => import("./MeasurementWorker-PZ2BNMFL.js"), GeoJSONSourceWorker: () => import("./GeoJSONSourceWorker-LBUQRBTR.js"), LercWorker: () => import("./LercWorker-2PWUEMIR.js"), Lyr3DWorker: () => import("./Lyr3DWorker-BVHTWS2Y.js"), MemorySourceWorker: () => import("./MemorySourceWorker-KSB4KOEZ.js"), PBFDecoderWorker: () => import("./PBFDecoderWorker-HSFCMT77.js"), PanoramicMeshWorker: () => import("./PanoramicMeshWorker-C34BJUDB.js"), ParquetSourceWorker: () => import("./ParquetSourceWorker-2TPBZDXF.js"), PointCloudWorker: () => import("./PointCloudWorker-KUOIU7QV.js"), RasterWorker: () => import("./RasterWorker-GSEBOVEG.js"), SceneLayerSnappingSourceWorker: () => import("./SceneLayerSnappingSourceWorker-HWVWV43H.js"), SceneLayerWorker: () => import("./SceneLayerWorker-2OCIM2XB.js"), TextureCompressionWorker: () => import("./TextureCompressionWorker-7VXJBESC.js"), WFSSourceWorker: () => import("./WFSSourceWorker-PDCEVUQE.js"), WorkerTileHandler: () => import("./WorkerTileHandler-VOTDY7O7.js"), arcadeGeometryOperatorsWorker: () => import("./operatorsWorker-OKCVYFEP.js"), statsWorker: () => import("./statsWorker-SUPZPVHP.js"), ImageMeasurementWorker: () => import("./ImageMeasurementWorker-HBEW7ZRZ.js") };

// node_modules/@arcgis/core/core/workers/RemoteClient.js
var { CLOSE: M, ABORT: k, INVOKE: y, RESPONSE: j, OPEN_PORT: J, ON: I } = e3;
var w2 = class {
  constructor(e6) {
    this._invoke = e6, this._timer = null, this._cancelledJobIds = /* @__PURE__ */ new Set(), this._invokeMessages = [], this._timer = null, this._process = this._process.bind(this);
  }
  push(e6) {
    e6.type === k ? this._cancelledJobIds.add(e6.jobId) : (this._invokeMessages.push(e6), null === this._timer && (this._timer = setTimeout(this._process, 0)));
  }
  clear() {
    this._invokeMessages.length = 0, this._cancelledJobIds.clear(), this._timer = null;
  }
  _process() {
    this._timer = null;
    for (const e6 of this._invokeMessages) this._cancelledJobIds.has(e6.jobId) || this._invoke(e6);
    this._cancelledJobIds.clear(), this._invokeMessages.length = 0;
  }
};
var O = class _O {
  static {
    this.kernelInfo = { buildDate: e2, fullVersion: r2, revision: c };
  }
  static {
    this.clients = /* @__PURE__ */ new Map();
  }
  static connect(e6, s6) {
    const t4 = new MessageChannel();
    let o3;
    o3 = "function" == typeof e6 ? new e6() : "default" in e6 && "function" == typeof e6.default ? new e6.default() : e6;
    const n7 = new _O(t4.port1, { channel: t4, client: o3, schedule: s6 });
    return "object" == typeof o3 && "remoteClient" in o3 && (o3.remoteClient = n7), _O.clients.set(n7, o3), t4.port2;
  }
  static loadWorker(e6) {
    const s6 = r4[e6];
    return s6 ? s6() : Promise.resolve(null);
  }
  constructor(e6, s6, t4, o3) {
    this._port = e6, this._jobQueue = t4, this._lowPriorityJobQueue = o3, this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this._invokeQueue = new w2((e7) => this._onInvokeMessage(e7)), this._client = s6.client, this._onMessage = this._onMessage.bind(this), this._channel = s6.channel, this._schedule = s6.schedule, this._maxNumberOfConcurrentJobs = s6.maxNumberOfConcurrentJobs ?? 2, this._port.addEventListener("message", this._onMessage), this._port.start();
  }
  close() {
    this._post({ type: M }), this._close();
  }
  isBusy() {
    return this._outJobs.size > 0;
  }
  invoke(e6, s6, t4) {
    return this.apply(e6, [s6], t4);
  }
  apply(e6, t4, o3) {
    const h4 = o3?.signal, a7 = o3?.transferList;
    if (!this._port) return Promise.reject(new r(r3, `Cannot call invoke('${e6}'), port is closed`, { methodName: e6, data: t4 }));
    const c5 = s4();
    return new Promise((s6, o4) => {
      if (a(h4)) return this._processWork(), void o4(u());
      const p3 = w(h4, () => {
        const e7 = this._outJobs.get(c5);
        e7 && (this._outJobs.delete(c5), this._processWork(), l(e7.abortHandle), this._post({ type: k, jobId: c5 }), o4(u()));
      }), _3 = { resolve: s6, reject: o4, abortHandle: p3, debugInfo: e6 };
      this._outJobs.set(c5, _3), this._post({ type: y, jobId: c5, methodName: e6, abortable: null != h4 }, t4, a7);
    });
  }
  createInvokeProxy(e6) {
    return t3(this, e6);
  }
  on(e6, s6) {
    const t4 = new MessageChannel();
    function n7(e7) {
      s6(e7.data);
    }
    return this._port.postMessage({ type: I, eventType: e6, port: t4.port2 }, [t4.port2]), t4.port1.addEventListener("message", n7), t4.port1.start(), e(() => {
      t4.port1.postMessage({ type: M }), t4.port1.close(), t4.port1.removeEventListener("message", n7);
    });
  }
  jobAdded() {
    this._processWork();
  }
  openPort() {
    const e6 = new MessageChannel();
    return this._post({ type: J, port: e6.port2 }), e6.port1;
  }
  _processWork() {
    if (this._outJobs.size >= this._maxNumberOfConcurrentJobs) return;
    const e6 = this._jobQueue?.pop() ?? this._lowPriorityJobQueue?.pop();
    if (!e6) return;
    const { methodName: s6, data: t4, invokeOptions: o3, resolver: n7 } = e6;
    this.apply(s6, t4, o3).then((e7) => n7.resolve(e7)).catch((e7) => n7.reject(e7));
  }
  _close() {
    this._channel && (this._channel = void 0), this._port.removeEventListener("message", this._onMessage), this._port.close(), this._outJobs.forEach((e6) => {
      l(e6.abortHandle), e6.reject(u(`Worker closing, aborting job calling '${e6.debugInfo}'`));
    }), this._inJobs.clear(), this._outJobs.clear(), this._invokeQueue.clear(), this._port = null, this._client = null, this._schedule = null, this._onMessage = null, this._channel = null, this._jobQueue = void 0, this._invokeQueue = void 0, this._lowPriorityJobQueue = void 0;
  }
  _onMessage(e6) {
    null != this._schedule ? this._schedule(() => this._processMessage(e6, true)) : this._processMessage(e6, false);
  }
  _processMessage(e6, s6) {
    const t4 = f2(e6);
    if (t4) switch (t4.type) {
      case j:
        this._onResponseMessage(t4);
        break;
      case y:
        s6 ? this._onInvokeMessage(t4) : this._invokeQueue.push(t4);
        break;
      case k:
        this._onAbortMessage(t4);
        break;
      case M:
        this._onCloseMessage();
        break;
      case J:
        this._onOpenPortMessage(t4);
        break;
      case I:
        this._onOnMessage(t4);
    }
  }
  _onAbortMessage(e6) {
    const s6 = this._inJobs, t4 = e6.jobId, o3 = s6.get(t4);
    this._invokeQueue.push(e6), o3 && (o3.controller && o3.controller.abort(), s6.delete(t4));
  }
  _onCloseMessage() {
    const e6 = this._client;
    this._close(), e6 && "destroy" in e6 && _O.clients.get(this) === e6 && e6.destroy(), _O.clients.delete(this), e6?.remoteClient && (e6.remoteClient = null);
  }
  _onInvokeMessage(e6) {
    const { methodName: s6, jobId: t4, data: o3 = [], abortable: n7 } = e6, i3 = n7 ? new AbortController() : null, r5 = this._inJobs;
    let l4, c5 = this._client, p3 = c5[s6];
    try {
      if (!p3 && s6 && s6.includes(".")) {
        const e7 = s6.split(".");
        for (let s7 = 0; s7 < e7.length - 1; s7++) c5 = c5[e7[s7]], p3 = c5[e7[s7 + 1]];
      }
      if ("function" != typeof p3) throw new TypeError(`${s6} is not a function`);
      o3.push({ client: this, signal: i3 ? i3.signal : null }), l4 = p3.apply(c5, o3);
    } catch (_3) {
      return void this._post({ type: j, jobId: t4, error: o2(_3) });
    }
    C(l4) ? (r5.set(t4, { controller: i3, promise: l4 }), l4.then((e7) => {
      r5.has(t4) && (r5.delete(t4), this._post({ type: j, jobId: t4 }, e7));
    }, (e7) => {
      r5.has(t4) && (r5.delete(t4), d(e7) || this._post({ type: j, jobId: t4, error: o2(e7 || { message: `Error encountered at method ${s6}` }) }));
    })) : this._post({ type: j, jobId: t4 }, l4);
  }
  _onOpenPortMessage(e6) {
    new _O(e6.port, { client: this._client });
  }
  _onOnMessage(e6) {
    const { port: s6 } = e6, o3 = this._client.on(e6.eventType, (e7) => {
      s6.postMessage(e7);
    }), n7 = o(e6.port, "message", (e7) => {
      const t4 = f2(e7);
      t4?.type === M && (n7.remove(), o3.remove(), s6.close());
    });
  }
  _onResponseMessage(e6) {
    const { jobId: t4, error: o3, data: i3 } = e6, r5 = this._outJobs;
    if (!r5.has(t4)) return;
    const l4 = r5.get(t4);
    r5.delete(t4), this._processWork(), l(l4.abortHandle), o3 ? l4.reject(r.fromJSON(JSON.parse(o3))) : l4.resolve(i3);
  }
  _post(e6, s6, t4) {
    return a2(this._port, e6, s6, t4);
  }
};

// node_modules/@arcgis/core/core/workers/connectionRegistry.js
var n5 = new FinalizationRegistry((n7) => {
  n7.close();
});
function e4(e6, i3) {
  n5.register(e6, i3, i3);
}
function i2(e6) {
  n5.unregister(e6);
}

// node_modules/@arcgis/core/core/workers/Connection.js
var c3 = class {
  constructor() {
    this._inUseClients = new Array(), this._clients = new Array(), this._clientPromises = new Array(), this._ongoingJobsQueue = new s3(), this._ongoingLowPriorityJobsQueue = new s3();
  }
  destroy() {
    this.close();
  }
  get closed() {
    return !this._clients?.length;
  }
  open(e6, s6) {
    return new Promise((i3, n7) => {
      let r5 = true;
      const l4 = (e7) => {
        s2(s6.signal), r5 && (r5 = false, e7());
      };
      this._clients.length = e6.length, this._clientPromises.length = e6.length, this._inUseClients.length = e6.length;
      for (let o3 = 0; o3 < e6.length; ++o3) {
        const r6 = e6[o3];
        C(r6) ? this._clientPromises[o3] = r6.then((e7) => (this._clients[o3] = new O(e7, s6, this._ongoingJobsQueue, this._ongoingLowPriorityJobsQueue), l4(i3), this._clients[o3]), () => (l4(n7), null)) : (this._clients[o3] = new O(r6, s6, this._ongoingJobsQueue, this._ongoingLowPriorityJobsQueue), this._clientPromises[o3] = Promise.resolve(this._clients[o3]), l4(i3));
      }
    });
  }
  broadcast(e6, t4, s6) {
    const i3 = new Array(this._clientPromises.length);
    for (let o3 = 0; o3 < this._clientPromises.length; ++o3) {
      const n7 = this._clientPromises[o3];
      i3[o3] = n7.then((i4) => i4?.invoke(e6, t4, s6));
    }
    return i3;
  }
  close() {
    let e6;
    for (; e6 = this._ongoingJobsQueue.pop(); ) e6.resolver.reject(u(`Worker closing, aborting job calling '${e6.methodName}'`));
    for (; e6 = this._ongoingLowPriorityJobsQueue.pop(); ) e6.resolver.reject(u(`Worker closing, aborting job calling '${e6.methodName}'`));
    for (const t4 of this._clientPromises) t4.then((e7) => e7?.close());
    this._clients.length = 0, this._clientPromises.length = 0, this._inUseClients.length = 0, i2(this);
  }
  invoke(e6, t4, s6) {
    return this.apply(e6, [t4], s6);
  }
  apply(e6, t4, s6) {
    const o3 = $();
    (1 === s6?.jobPriority ? this._ongoingLowPriorityJobsQueue : this._ongoingJobsQueue).push({ methodName: e6, data: t4, invokeOptions: s6, resolver: o3 });
    for (let i3 = 0; i3 < this._clientPromises.length; i3++) {
      const e7 = this._clients[i3];
      e7 ? e7.jobAdded() : this._clientPromises[i3].then((e8) => e8?.jobAdded());
    }
    return o3.promise;
  }
  createInvokeProxy(e6) {
    return t3(this, e6);
  }
  on(t4, s6) {
    return Promise.all(this._clientPromises).then(() => t(this._clients.map((e6) => e6.on(t4, s6))));
  }
  openPorts() {
    return new Promise((e6) => {
      const t4 = new Array(this._clientPromises.length);
      let s6 = t4.length;
      for (let i3 = 0; i3 < this._clientPromises.length; ++i3) {
        this._clientPromises[i3].then((o3) => {
          o3 && (t4[i3] = o3.openPort()), 0 === --s6 && e6(t4);
        });
      }
    });
  }
  get test() {
  }
};

// node_modules/@arcgis/core/core/workers/staticWorkerMessages.js
var a3 = { async request(a7, s6) {
  const r5 = a7.options, n7 = r5.responseType;
  r5.signal = s6?.signal, r5.responseType = "native" === n7 || "native-request-init" === n7 ? "native-request-init" : n7 && ["blob", "json", "text"].includes(n7) && N(a7.url)?.after ? n7 : "array-buffer";
  const i3 = await f(a7.url, r5), o3 = { data: i3.data, httpStatus: i3.httpStatus, ssl: i3.ssl };
  switch (i3.requestOptions?.responseType) {
    case "native-request-init":
      return delete o3.data.signal, o3;
    case "blob":
      o3.data = await o3.data.arrayBuffer();
      break;
    case "json":
      o3.data = new TextEncoder().encode(JSON.stringify(o3.data)).buffer;
      break;
    case "text":
      o3.data = new TextEncoder().encode(o3.data).buffer;
  }
  return { result: o3, transferList: [o3.data] };
} };

// node_modules/@arcgis/core/core/workers/loaderConfig.js
var a4 = {};
function e5(s6) {
  const e6 = { async: s6.async, isDebug: s6.isDebug, locale: s6.locale, baseUrl: s6.baseUrl, has: __spreadValues({}, s6.has), map: __spreadValues({}, s6.map), packages: s6.packages?.slice() || [], paths: __spreadValues(__spreadValues({}, a4.paths), s6.paths) };
  return s6.hasOwnProperty("async") || (e6.async = true), s6.hasOwnProperty("isDebug") || (e6.isDebug = false), s6.baseUrl || (e6.baseUrl = a4.baseUrl), e6;
}

// node_modules/@arcgis/core/core/workers/WorkerFallback.js
var n6 = class {
  constructor() {
    const e6 = document.createDocumentFragment();
    ["addEventListener", "dispatchEvent", "removeEventListener"].forEach((s6) => {
      this[s6] = (...r5) => e6[s6](...r5);
    });
  }
};
var a5 = class {
  constructor() {
    this._dispatcher = new n6(), this._workerPostMessage({ type: e3.HANDSHAKE });
  }
  terminate() {
  }
  get onmessage() {
    return this._onmessageHandler;
  }
  set onmessage(e6) {
    this._onmessageHandler && this.removeEventListener("message", this._onmessageHandler), this._onmessageHandler = e6, e6 && this.addEventListener("message", e6);
  }
  get onmessageerror() {
    return this._onmessageerrorHandler;
  }
  set onmessageerror(e6) {
    this._onmessageerrorHandler && this.removeEventListener("messageerror", this._onmessageerrorHandler), this._onmessageerrorHandler = e6, e6 && this.addEventListener("messageerror", e6);
  }
  get onerror() {
    return this._onerrorHandler;
  }
  set onerror(e6) {
    this._onerrorHandler && this.removeEventListener("error", this._onerrorHandler), this._onerrorHandler = e6, e6 && this.addEventListener("error", e6);
  }
  postMessage(s6) {
    t2(() => {
      this._workerMessageHandler(new MessageEvent("message", { data: s6 }));
    });
  }
  dispatchEvent(e6) {
    return this._dispatcher.dispatchEvent(e6);
  }
  addEventListener(e6, s6, r5) {
    this._dispatcher.addEventListener(e6, s6, r5);
  }
  removeEventListener(e6, s6, r5) {
    this._dispatcher.removeEventListener(e6, s6, r5);
  }
  _workerPostMessage(s6) {
    t2(() => {
      this.dispatchEvent(new MessageEvent("message", { data: s6 }));
    });
  }
  async _workerMessageHandler(e6) {
    const n7 = f2(e6);
    if (n7 && n7.type === e3.OPEN) {
      const { modulePath: e7, jobId: t4 } = n7;
      let a7 = await O.loadWorker(e7);
      a7 || (a7 = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        e7
      ));
      const o3 = O.connect(a7);
      this._workerPostMessage({ type: e3.OPENED, jobId: t4, data: o3 });
    }
  }
};

// node_modules/@arcgis/core/core/workers/workerFactory.js
var d2 = () => n.getLogger("esri.core.workers.workerFactory");
var { HANDSHAKE: m } = e3;
var p = '"use strict";let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}self.invokeStaticMessage=(e,o,r)=>{const t=r&&r.signal,n=globalId++;let s=null;return new Promise((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}).finally(()=>{t&&t.removeEventListener("abort",s)})};let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://esriurl.com/using-local-assets.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let t;function n(e){const o=t.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],e=>{t=e.default||e,checkWorkerRevision(t),t.loadWorker(o.modulePath).then(e=>e||new Promise(e=>{require([o.modulePath],e)})).then(n)}):"System"in self&&"function"==typeof System.import?System.import(workerPath).then(e=>(t=e.default,checkWorkerRevision(t),t.loadWorker(o.modulePath))).then(e=>e||System.import(o.modulePath)).then(n):esriConfig.workers.useDynamicImport?import(workerPath).then(e=>{t=e.default||e,checkWorkerRevision(t),t.loadWorker(o.modulePath).then(e=>e||import(o.modulePath)).then(n)}):(self.RemoteClient||importScripts(workerPath),t=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(t),t.loadWorker(o.modulePath).then(n));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';
var g;
var y2;
var h2 = "Failed to create Worker. Fallback to execute module in main thread";
async function k2() {
  if (!has("esri-workers")) return w3(new a5());
  if (!g && !y2) try {
    const e7 = p.split("{CONFIGURATION}").join(b());
    g = URL.createObjectURL(new Blob([e7], { type: "text/javascript" }));
  } catch (r5) {
    y2 = r5 || {};
  }
  let e6;
  if (g) try {
    e6 = new Worker(g, { name: "esri-worker-" + v++ });
  } catch (r5) {
    d2().warn(h2, y2), e6 = new a5();
  }
  else d2().warn(h2, y2), e6 = new a5();
  return w3(e6);
}
async function w3(e6) {
  return new Promise((r5) => {
    function t4(s6) {
      const a7 = f2(s6);
      a7 && a7.type === m && (e6.removeEventListener("message", t4), e6.removeEventListener("error", o3), r5(e6));
    }
    function o3(r6) {
      r6.preventDefault(), e6.removeEventListener("message", t4), e6.removeEventListener("error", o3), d2().warn("Failed to create Worker. Fallback to execute module in main thread", r6), (e6 = new a5()).addEventListener("message", t4), e6.addEventListener("error", o3);
    }
    e6.addEventListener("message", t4), e6.addEventListener("error", o3);
  });
}
function b() {
  let s6;
  if (null != s.default) {
    const e6 = __spreadValues({}, s);
    delete e6.default, s6 = JSON.parse(JSON.stringify(e6));
  } else s6 = JSON.parse(JSON.stringify(s));
  s6.assetsPath = _(s6.assetsPath), s6.defaultAssetsPath = s6.defaultAssetsPath ? _(s6.defaultAssetsPath) : void 0, s6.request.interceptors = [], s6.log.interceptors = [], s6.locale = z(), s6.has = { "esri-csp-restrictions": has("esri-csp-restrictions"), "esri-2d-debug": false, "esri-2d-update-debug": has("esri-2d-update-debug"), "esri-2d-log-updating": has("esri-2d-log-updating"), "featurelayer-pbf": has("featurelayer-pbf"), "featurelayer-simplify-thresholds": has("featurelayer-simplify-thresholds"), "featurelayer-simplify-payload-size-factors": has("featurelayer-simplify-payload-size-factors"), "featurelayer-simplify-mobile-factor": has("featurelayer-simplify-mobile-factor"), "featurelayer-query-max-depth": has("featurelayer-query-max-depth"), "featurelayer-query-max-page-size": has("featurelayer-query-max-page-size"), "featurelayer-query-tile-max-features": has("featurelayer-query-tile-max-features"), "featurelayer-query-tile-concurrency": has("featurelayer-query-tile-concurrency"), "featurelayer-query-pausing-enabled": has("featurelayer-query-pausing-enabled"), "featurelayer-snapshot-concurrency": has("featurelayer-snapshot-concurrency"), "featurelayer-snapshot-enabled": has("featurelayer-snapshot-enabled"), "parquetlayer-full-query-feature-count": has("parquetlayer-full-query-feature-count"), "parquetlayer-cache-enabled": has("parquetlayer-cache-enabled"), "esri-atomics": has("esri-atomics"), "esri-shared-array-buffer": has("esri-shared-array-buffer"), "esri-tiles-debug": has("esri-tiles-debug"), "esri-workers-arraybuffer-transfer": has("esri-workers-arraybuffer-transfer"), "feature-polyline-generalization-factor": has("feature-polyline-generalization-factor"), "host-webworker": 1 }, s6.workers.loaderUrl && (s6.workers.loaderUrl = _(s6.workers.loaderUrl)), s6.workers.workerPath ? s6.workers.workerPath = _(s6.workers.workerPath) : s6.workers.workerPath = _(n2("esri/core/workers/RemoteClient.js")), s6.workers.useDynamicImport = has("esri-esbuild-build");
  const i3 = s.workers.loaderConfig, l4 = e5({ baseUrl: i3?.baseUrl, locale: z(), has: __spreadValues({ "csp-restrictions": 1, "dojo-test-sniff": 0, "host-webworker": 1 }, i3?.has), map: __spreadValues({}, i3?.map), paths: __spreadValues({}, i3?.paths), packages: i3?.packages || [] }), f4 = { buildDate: e2, fullVersion: r2, revision: c };
  return JSON.stringify({ esriConfig: s6, loaderConfig: l4, kernelInfo: f4 });
}
var v = 0;

// node_modules/@arcgis/core/core/workers/WorkerOwner.js
var { ABORT: b2, INVOKE: m2, OPEN: _2, OPENED: g2, RESPONSE: u3 } = e3;
var j2 = class _j {
  static async create(e6) {
    const t4 = await k2();
    return new _j(t4, e6);
  }
  constructor(e6, o3) {
    this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this.worker = e6, this.id = o3, e6.addEventListener("message", this._onMessage.bind(this)), e6.addEventListener("error", (e7) => {
      e7.preventDefault(), n.getLogger("esri.core.workers.WorkerOwner").error(e7);
    });
  }
  terminate() {
    this.worker.terminate();
  }
  async open(e6, t4 = {}) {
    const { signal: o3 } = t4, r5 = s4();
    return new Promise((t5, n7) => {
      const a7 = { resolve: t5, reject: n7, abortHandle: h(o3, () => {
        this._outJobs.delete(r5), this._post({ type: b2, jobId: r5 });
      }) };
      this._outJobs.set(r5, a7), this._post({ type: _2, jobId: r5, modulePath: e6 });
    });
  }
  _onMessage(e6) {
    const t4 = f2(e6);
    if (t4) switch (t4.type) {
      case g2:
        this._onOpenedMessage(t4);
        break;
      case u3:
        this._onResponseMessage(t4);
        break;
      case b2:
        this._onAbortMessage(t4);
        break;
      case m2:
        this._onInvokeMessage(t4);
    }
  }
  _onAbortMessage(e6) {
    const t4 = this._inJobs, o3 = e6.jobId, s6 = t4.get(o3);
    s6 && (s6.controller && s6.controller.abort(), t4.delete(o3));
  }
  _onInvokeMessage(e6) {
    const { methodName: t4, jobId: o3, data: s6, abortable: i3 } = e6, l4 = i3 ? new AbortController() : null, c5 = this._inJobs, h4 = a3[t4];
    let p3;
    try {
      if ("function" != typeof h4) throw new TypeError(`${t4} is not a function`);
      p3 = h4.call(null, s6, { signal: l4 ? l4.signal : null });
    } catch (b3) {
      return void this._post({ type: u3, jobId: o3, error: o2(b3) });
    }
    C(p3) ? (c5.set(o3, { controller: l4, promise: p3 }), p3.then((e7) => {
      c5.has(o3) && (c5.delete(o3), this._post({ type: u3, jobId: o3 }, e7));
    }, (e7) => {
      c5.has(o3) && (c5.delete(o3), e7 || (e7 = { message: "Error encountered at method" + t4 }), d(e7) || this._post({ type: u3, jobId: o3, error: o2(e7 || { message: `Error encountered at method ${t4}` }) }));
    })) : this._post({ type: u3, jobId: o3 }, p3);
  }
  _onOpenedMessage(e6) {
    const { jobId: t4, data: s6 } = e6, r5 = this._outJobs.get(t4);
    r5 && (this._outJobs.delete(t4), l(r5.abortHandle), r5.resolve(s6));
  }
  _onResponseMessage(t4) {
    const { jobId: s6, error: r5, data: n7 } = t4, a7 = this._outJobs.get(s6);
    a7 && (this._outJobs.delete(s6), l(a7.abortHandle), r5 ? a7.reject(r.fromJSON(JSON.parse(r5))) : a7.resolve(n7));
  }
  _post(e6, t4, o3) {
    return a2(this.worker, e6, t4, o3);
  }
};

// node_modules/@arcgis/core/core/workers/workers.js
var s5 = has("host-browser") ? Math.min(navigator.hardwareConcurrency - 1, has("workers-pool-size") ?? 8) : 0;
var a6 = has("esri-mobile") ? Math.min(s5, 3) : s5;
a6 || (a6 = has("safari") && has("mac") ? 7 : 2);
var c4 = 0;
var l3 = [];
function m3() {
  g3();
}
function u4(r5, t4 = {}) {
  return f3(r5, t4);
}
async function f3(r5, t4) {
  const n7 = new c3(), _a = t4, { registryTarget: i3 } = _a, s6 = __objRest(_a, ["registryTarget"]);
  return await n7.open(r5, s6), i3 && e4(i3, n7), n7;
}
async function p2(o3, e6 = {}) {
  if ("string" != typeof o3) throw new r("workers:undefined-module", "modulePath is missing");
  let i3 = e6.strategy || "distributed";
  if (has("host-webworker") && !has("esri-workers") && (i3 = "local"), "local" === i3) {
    let r5 = await O.loadWorker(o3);
    r5 || (r5 = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      o3
    )), s2(e6.signal);
    const i4 = e6.client || r5;
    return f3([O.connect(r5, e6.schedule)], __spreadProps(__spreadValues({}, e6), { client: i4 }));
  }
  if (await g3(), s2(e6.signal), "dedicated" === i3) {
    const r5 = c4++ % a6;
    return f3([await l3[r5].open(o3, e6)], e6);
  }
  if (e6.maxNumWorkers && e6.maxNumWorkers > 0) {
    const r5 = Math.min(e6.maxNumWorkers, a6);
    if (r5 < a6) {
      const t4 = new Array(r5);
      for (let n7 = 0; n7 < r5; ++n7) {
        const r6 = c4++ % a6;
        t4[n7] = l3[r6].open(o3, e6);
      }
      return f3(t4, e6);
    }
  }
  return f3(l3.map((r5) => r5.open(o3, e6)), e6);
}
var h3;
var d3 = null;
async function g3() {
  if (d3) return d3;
  h3 = new AbortController();
  const r5 = [];
  for (let t4 = 0; t4 < a6; t4++) {
    const o3 = j2.create(t4).then((r6) => (l3[t4] = r6, r6));
    r5.push(o3);
  }
  return d3 = Promise.all(r5), d3;
}

export {
  l2 as l,
  O,
  c3 as c,
  m3 as m,
  u4 as u,
  p2 as p
};
//# sourceMappingURL=chunk-373PU6B4.js.map
