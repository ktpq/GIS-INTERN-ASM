import {
  z
} from "./chunk-JSUZNUEF.js";
import {
  s as s3
} from "./chunk-OR4JKEPP.js";
import {
  n as n2
} from "./chunk-FCTZWJBQ.js";
import {
  N,
  _,
  a2,
  b,
  f2 as f,
  r2
} from "./chunk-5AVTDH3Y.js";
import {
  t as t2
} from "./chunk-YR4EWTGD.js";
import {
  $,
  C,
  a,
  d,
  e,
  h,
  l2 as l,
  o4 as o,
  s as s2,
  t,
  u3 as u,
  w
} from "./chunk-2DNVIDFH.js";
import {
  has,
  n2 as n,
  r3 as r,
  s
} from "./chunk-6SPQI6I6.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/core/workers/utils.js
var r3 = "worker:port-closed";
var e2 = { HANDSHAKE: 0, OPEN: 1, OPENED: 2, RESPONSE: 3, INVOKE: 4, ABORT: 5, CLOSE: 6, OPEN_PORT: 7, ON: 8 };
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
function a3(t4, r5, n7, s6) {
  if (r5.type === e2.OPEN_PORT) return void t4.postMessage(r5, [r5.port]);
  if (r5.type !== e2.INVOKE && r5.type !== e2.RESPONSE) return void t4.postMessage(r5);
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
  const r5 = t4.filter((t5) => !c(t5));
  return r5.length ? r5 : null;
}
function c(t4) {
  return t4 instanceof ArrayBuffer || "ArrayBuffer" === t4?.constructor?.name;
}
async function l2(e5) {
  try {
    return await e5;
  } catch (n7) {
    const e6 = n7?.name === r3;
    if (!(d(n7) || e6)) throw n7;
    return;
  }
}

// node_modules/@arcgis/core/core/workers/InvokeHandler.js
function t3(t4, r5) {
  return new Proxy({}, { get: (e5, i3, s6) => (...e6) => {
    let s7, o3;
    const a8 = e6[e6.length - 1];
    n4(a8) && (s7 = a8.signal, o3 = a8.transferList, e6.pop());
    return t4.apply(r5 ? `${r5}.${i3.toString()}` : i3.toString(), e6, { transferList: o3, signal: s7 });
  } });
}
function n4(t4) {
  return "object" == typeof t4 && !Array.isArray(t4) && null != t4 && ("signal" in t4 || "transferList" in t4 || 0 === Object.keys(t4).length);
}

// node_modules/@arcgis/core/core/workers/registry.js
var r4 = { CSVSourceWorker: () => import("./CSVSourceWorker-5TMZZMC3.js"), EdgeProcessingWorker: () => import("./EdgeProcessingWorker-LOEHHZ7I.js"), ElevationSamplerWorker: () => import("./ElevationSamplerWorker-YBK3T7WZ.js"), FeaturePipelineWorker: () => import("./FeaturePipelineWorker-WKQEBM7Z.js"), FeatureServiceSnappingSourceWorker: () => import("./FeatureServiceSnappingSourceWorker-TN2MYLTK.js"), FlowWorker: () => import("./FlowWorker-WWEF2R4X.js"), GaussianSplatSortWorker: () => import("./GaussianSplatSortWorker-YEVSSQD7.js"), MeasurementWorker: () => import("./MeasurementWorker-5EKAWTST.js"), GeoJSONSourceWorker: () => import("./GeoJSONSourceWorker-NXLZMTY3.js"), LercWorker: () => import("./LercWorker-3PNBGGRQ.js"), Lyr3DWorker: () => import("./Lyr3DWorker-7MZW6ANP.js"), MemorySourceWorker: () => import("./MemorySourceWorker-FJNBYAO7.js"), PBFDecoderWorker: () => import("./PBFDecoderWorker-TSDIDK3L.js"), PanoramicMeshWorker: () => import("./PanoramicMeshWorker-FQRNNM2A.js"), ParquetSourceWorker: () => import("./ParquetSourceWorker-BPJ27NCS.js"), PointCloudWorker: () => import("./PointCloudWorker-B2TDIOXT.js"), RasterWorker: () => import("./RasterWorker-Q2HLZ7F5.js"), SceneLayerSnappingSourceWorker: () => import("./SceneLayerSnappingSourceWorker-DQPM5UGL.js"), SceneLayerWorker: () => import("./SceneLayerWorker-QQYXLM4L.js"), TextureCompressionWorker: () => import("./TextureCompressionWorker-DPJMNVX3.js"), WFSSourceWorker: () => import("./WFSSourceWorker-744O4OZC.js"), WorkerTileHandler: () => import("./WorkerTileHandler-35GKILQB.js"), arcadeGeometryOperatorsWorker: () => import("./operatorsWorker-35FVEW5A.js"), statsWorker: () => import("./statsWorker-PVDUV5TB.js"), ImageMeasurementWorker: () => import("./ImageMeasurementWorker-BT3EYPJ5.js") };

// node_modules/@arcgis/core/core/workers/RemoteClient.js
var { CLOSE: M, ABORT: k, INVOKE: y, RESPONSE: j, OPEN_PORT: J, ON: I } = e2;
var w2 = class {
  constructor(e5) {
    this._invoke = e5, this._timer = null, this._cancelledJobIds = /* @__PURE__ */ new Set(), this._invokeMessages = [], this._timer = null, this._process = this._process.bind(this);
  }
  push(e5) {
    e5.type === k ? this._cancelledJobIds.add(e5.jobId) : (this._invokeMessages.push(e5), null === this._timer && (this._timer = setTimeout(this._process, 0)));
  }
  clear() {
    this._invokeMessages.length = 0, this._cancelledJobIds.clear(), this._timer = null;
  }
  _process() {
    this._timer = null;
    for (const e5 of this._invokeMessages) this._cancelledJobIds.has(e5.jobId) || this._invoke(e5);
    this._cancelledJobIds.clear(), this._invokeMessages.length = 0;
  }
};
var O = class _O {
  static {
    this.kernelInfo = { buildDate: a2, fullVersion: r2, revision: b };
  }
  static {
    this.clients = /* @__PURE__ */ new Map();
  }
  static connect(e5, s6) {
    const t4 = new MessageChannel();
    let o3;
    o3 = "function" == typeof e5 ? new e5() : "default" in e5 && "function" == typeof e5.default ? new e5.default() : e5;
    const n7 = new _O(t4.port1, { channel: t4, client: o3, schedule: s6 });
    return "object" == typeof o3 && "remoteClient" in o3 && (o3.remoteClient = n7), _O.clients.set(n7, o3), t4.port2;
  }
  static loadWorker(e5) {
    const s6 = r4[e5];
    return s6 ? s6() : Promise.resolve(null);
  }
  constructor(e5, s6, t4, o3) {
    this._port = e5, this._jobQueue = t4, this._lowPriorityJobQueue = o3, this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this._invokeQueue = new w2((e6) => this._onInvokeMessage(e6)), this._client = s6.client, this._onMessage = this._onMessage.bind(this), this._channel = s6.channel, this._schedule = s6.schedule, this._maxNumberOfConcurrentJobs = s6.maxNumberOfConcurrentJobs ?? 2, this._port.addEventListener("message", this._onMessage), this._port.start();
  }
  close() {
    this._post({ type: M }), this._close();
  }
  isBusy() {
    return this._outJobs.size > 0;
  }
  invoke(e5, s6, t4) {
    return this.apply(e5, [s6], t4);
  }
  apply(e5, t4, o3) {
    const h4 = o3?.signal, a8 = o3?.transferList;
    if (!this._port) return Promise.reject(new r(r3, `Cannot call invoke('${e5}'), port is closed`, { methodName: e5, data: t4 }));
    const c4 = s4();
    return new Promise((s6, o4) => {
      if (a(h4)) return this._processWork(), void o4(u());
      const p3 = w(h4, () => {
        const e6 = this._outJobs.get(c4);
        e6 && (this._outJobs.delete(c4), this._processWork(), l(e6.abortHandle), this._post({ type: k, jobId: c4 }), o4(u()));
      }), _3 = { resolve: s6, reject: o4, abortHandle: p3, debugInfo: e5 };
      this._outJobs.set(c4, _3), this._post({ type: y, jobId: c4, methodName: e5, abortable: null != h4 }, t4, a8);
    });
  }
  createInvokeProxy(e5) {
    return t3(this, e5);
  }
  on(e5, s6) {
    const t4 = new MessageChannel();
    function n7(e6) {
      s6(e6.data);
    }
    return this._port.postMessage({ type: I, eventType: e5, port: t4.port2 }, [t4.port2]), t4.port1.addEventListener("message", n7), t4.port1.start(), e(() => {
      t4.port1.postMessage({ type: M }), t4.port1.close(), t4.port1.removeEventListener("message", n7);
    });
  }
  jobAdded() {
    this._processWork();
  }
  openPort() {
    const e5 = new MessageChannel();
    return this._post({ type: J, port: e5.port2 }), e5.port1;
  }
  _processWork() {
    if (this._outJobs.size >= this._maxNumberOfConcurrentJobs) return;
    const e5 = this._jobQueue?.pop() ?? this._lowPriorityJobQueue?.pop();
    if (!e5) return;
    const { methodName: s6, data: t4, invokeOptions: o3, resolver: n7 } = e5;
    this.apply(s6, t4, o3).then((e6) => n7.resolve(e6)).catch((e6) => n7.reject(e6));
  }
  _close() {
    this._channel && (this._channel = void 0), this._port.removeEventListener("message", this._onMessage), this._port.close(), this._outJobs.forEach((e5) => {
      l(e5.abortHandle), e5.reject(u(`Worker closing, aborting job calling '${e5.debugInfo}'`));
    }), this._inJobs.clear(), this._outJobs.clear(), this._invokeQueue.clear(), this._port = null, this._client = null, this._schedule = null, this._onMessage = null, this._channel = null, this._jobQueue = void 0, this._invokeQueue = void 0, this._lowPriorityJobQueue = void 0;
  }
  _onMessage(e5) {
    null != this._schedule ? this._schedule(() => this._processMessage(e5, true)) : this._processMessage(e5, false);
  }
  _processMessage(e5, s6) {
    const t4 = f2(e5);
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
  _onAbortMessage(e5) {
    const s6 = this._inJobs, t4 = e5.jobId, o3 = s6.get(t4);
    this._invokeQueue.push(e5), o3 && (o3.controller && o3.controller.abort(), s6.delete(t4));
  }
  _onCloseMessage() {
    const e5 = this._client;
    this._close(), e5 && "destroy" in e5 && _O.clients.get(this) === e5 && e5.destroy(), _O.clients.delete(this), e5?.remoteClient && (e5.remoteClient = null);
  }
  _onInvokeMessage(e5) {
    const { methodName: s6, jobId: t4, data: o3 = [], abortable: n7 } = e5, i3 = n7 ? new AbortController() : null, r5 = this._inJobs;
    let l4, c4 = this._client, p3 = c4[s6];
    try {
      if (!p3 && s6 && s6.includes(".")) {
        const e6 = s6.split(".");
        for (let s7 = 0; s7 < e6.length - 1; s7++) c4 = c4[e6[s7]], p3 = c4[e6[s7 + 1]];
      }
      if ("function" != typeof p3) throw new TypeError(`${s6} is not a function`);
      o3.push({ client: this, signal: i3 ? i3.signal : null }), l4 = p3.apply(c4, o3);
    } catch (_3) {
      return void this._post({ type: j, jobId: t4, error: o2(_3) });
    }
    C(l4) ? (r5.set(t4, { controller: i3, promise: l4 }), l4.then((e6) => {
      r5.has(t4) && (r5.delete(t4), this._post({ type: j, jobId: t4 }, e6));
    }, (e6) => {
      r5.has(t4) && (r5.delete(t4), d(e6) || this._post({ type: j, jobId: t4, error: o2(e6 || { message: `Error encountered at method ${s6}` }) }));
    })) : this._post({ type: j, jobId: t4 }, l4);
  }
  _onOpenPortMessage(e5) {
    new _O(e5.port, { client: this._client });
  }
  _onOnMessage(e5) {
    const { port: s6 } = e5, o3 = this._client.on(e5.eventType, (e6) => {
      s6.postMessage(e6);
    }), n7 = o(e5.port, "message", (e6) => {
      const t4 = f2(e6);
      t4?.type === M && (n7.remove(), o3.remove(), s6.close());
    });
  }
  _onResponseMessage(e5) {
    const { jobId: t4, error: o3, data: i3 } = e5, r5 = this._outJobs;
    if (!r5.has(t4)) return;
    const l4 = r5.get(t4);
    r5.delete(t4), this._processWork(), l(l4.abortHandle), o3 ? l4.reject(r.fromJSON(JSON.parse(o3))) : l4.resolve(i3);
  }
  _post(e5, s6, t4) {
    return a3(this._port, e5, s6, t4);
  }
};

// node_modules/@arcgis/core/core/workers/connectionRegistry.js
var n5 = new FinalizationRegistry((n7) => {
  n7.close();
});
function e3(e5, i3) {
  n5.register(e5, i3, i3);
}
function i2(e5) {
  n5.unregister(e5);
}

// node_modules/@arcgis/core/core/workers/Connection.js
var c2 = class {
  constructor() {
    this._inUseClients = new Array(), this._clients = new Array(), this._clientPromises = new Array(), this._ongoingJobsQueue = new s3(), this._ongoingLowPriorityJobsQueue = new s3();
  }
  destroy() {
    this.close();
  }
  get closed() {
    return !this._clients?.length;
  }
  open(e5, s6) {
    return new Promise((i3, n7) => {
      let r5 = true;
      const l4 = (e6) => {
        s2(s6.signal), r5 && (r5 = false, e6());
      };
      this._clients.length = e5.length, this._clientPromises.length = e5.length, this._inUseClients.length = e5.length;
      for (let o3 = 0; o3 < e5.length; ++o3) {
        const r6 = e5[o3];
        C(r6) ? this._clientPromises[o3] = r6.then((e6) => (this._clients[o3] = new O(e6, s6, this._ongoingJobsQueue, this._ongoingLowPriorityJobsQueue), l4(i3), this._clients[o3]), () => (l4(n7), null)) : (this._clients[o3] = new O(r6, s6, this._ongoingJobsQueue, this._ongoingLowPriorityJobsQueue), this._clientPromises[o3] = Promise.resolve(this._clients[o3]), l4(i3));
      }
    });
  }
  broadcast(e5, t4, s6) {
    const i3 = new Array(this._clientPromises.length);
    for (let o3 = 0; o3 < this._clientPromises.length; ++o3) {
      const n7 = this._clientPromises[o3];
      i3[o3] = n7.then((i4) => i4?.invoke(e5, t4, s6));
    }
    return i3;
  }
  close() {
    let e5;
    for (; e5 = this._ongoingJobsQueue.pop(); ) e5.resolver.reject(u(`Worker closing, aborting job calling '${e5.methodName}'`));
    for (; e5 = this._ongoingLowPriorityJobsQueue.pop(); ) e5.resolver.reject(u(`Worker closing, aborting job calling '${e5.methodName}'`));
    for (const t4 of this._clientPromises) t4.then((e6) => e6?.close());
    this._clients.length = 0, this._clientPromises.length = 0, this._inUseClients.length = 0, i2(this);
  }
  invoke(e5, t4, s6) {
    return this.apply(e5, [t4], s6);
  }
  apply(e5, t4, s6) {
    const o3 = $();
    (1 === s6?.jobPriority ? this._ongoingLowPriorityJobsQueue : this._ongoingJobsQueue).push({ methodName: e5, data: t4, invokeOptions: s6, resolver: o3 });
    for (let i3 = 0; i3 < this._clientPromises.length; i3++) {
      const e6 = this._clients[i3];
      e6 ? e6.jobAdded() : this._clientPromises[i3].then((e7) => e7?.jobAdded());
    }
    return o3.promise;
  }
  createInvokeProxy(e5) {
    return t3(this, e5);
  }
  on(t4, s6) {
    return Promise.all(this._clientPromises).then(() => t(this._clients.map((e5) => e5.on(t4, s6))));
  }
  openPorts() {
    return new Promise((e5) => {
      const t4 = new Array(this._clientPromises.length);
      let s6 = t4.length;
      for (let i3 = 0; i3 < this._clientPromises.length; ++i3) {
        this._clientPromises[i3].then((o3) => {
          o3 && (t4[i3] = o3.openPort()), 0 === --s6 && e5(t4);
        });
      }
    });
  }
  get test() {
  }
};

// node_modules/@arcgis/core/core/workers/staticWorkerMessages.js
var a4 = { async request(a8, s6) {
  const r5 = a8.options, n7 = r5.responseType;
  r5.signal = s6?.signal, r5.responseType = "native" === n7 || "native-request-init" === n7 ? "native-request-init" : n7 && ["blob", "json", "text"].includes(n7) && N(a8.url)?.after ? n7 : "array-buffer";
  const i3 = await f(a8.url, r5), o3 = { data: i3.data, httpStatus: i3.httpStatus, ssl: i3.ssl };
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
var a5 = {};
function e4(s6) {
  const e5 = { async: s6.async, isDebug: s6.isDebug, locale: s6.locale, baseUrl: s6.baseUrl, has: __spreadValues({}, s6.has), map: __spreadValues({}, s6.map), packages: s6.packages?.slice() || [], paths: __spreadValues(__spreadValues({}, a5.paths), s6.paths) };
  return s6.hasOwnProperty("async") || (e5.async = true), s6.hasOwnProperty("isDebug") || (e5.isDebug = false), s6.baseUrl || (e5.baseUrl = a5.baseUrl), e5;
}

// node_modules/@arcgis/core/core/workers/WorkerFallback.js
var n6 = class {
  constructor() {
    const e5 = document.createDocumentFragment();
    ["addEventListener", "dispatchEvent", "removeEventListener"].forEach((s6) => {
      this[s6] = (...r5) => e5[s6](...r5);
    });
  }
};
var a6 = class {
  constructor() {
    this._dispatcher = new n6(), this._workerPostMessage({ type: e2.HANDSHAKE });
  }
  terminate() {
  }
  get onmessage() {
    return this._onmessageHandler;
  }
  set onmessage(e5) {
    this._onmessageHandler && this.removeEventListener("message", this._onmessageHandler), this._onmessageHandler = e5, e5 && this.addEventListener("message", e5);
  }
  get onmessageerror() {
    return this._onmessageerrorHandler;
  }
  set onmessageerror(e5) {
    this._onmessageerrorHandler && this.removeEventListener("messageerror", this._onmessageerrorHandler), this._onmessageerrorHandler = e5, e5 && this.addEventListener("messageerror", e5);
  }
  get onerror() {
    return this._onerrorHandler;
  }
  set onerror(e5) {
    this._onerrorHandler && this.removeEventListener("error", this._onerrorHandler), this._onerrorHandler = e5, e5 && this.addEventListener("error", e5);
  }
  postMessage(s6) {
    t2(() => {
      this._workerMessageHandler(new MessageEvent("message", { data: s6 }));
    });
  }
  dispatchEvent(e5) {
    return this._dispatcher.dispatchEvent(e5);
  }
  addEventListener(e5, s6, r5) {
    this._dispatcher.addEventListener(e5, s6, r5);
  }
  removeEventListener(e5, s6, r5) {
    this._dispatcher.removeEventListener(e5, s6, r5);
  }
  _workerPostMessage(s6) {
    t2(() => {
      this.dispatchEvent(new MessageEvent("message", { data: s6 }));
    });
  }
  async _workerMessageHandler(e5) {
    const n7 = f2(e5);
    if (n7 && n7.type === e2.OPEN) {
      const { modulePath: e6, jobId: t4 } = n7;
      let a8 = await O.loadWorker(e6);
      a8 || (a8 = await import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        e6
      ));
      const o3 = O.connect(a8);
      this._workerPostMessage({ type: e2.OPENED, jobId: t4, data: o3 });
    }
  }
};

// node_modules/@arcgis/core/core/workers/workerFactory.js
var d2 = () => n.getLogger("esri.core.workers.workerFactory");
var { HANDSHAKE: m } = e2;
var p = '"use strict";let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}self.invokeStaticMessage=(e,o,r)=>{const t=r&&r.signal,n=globalId++;let s=null;return new Promise((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}).finally(()=>{t&&t.removeEventListener("abort",s)})};let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://esriurl.com/using-local-assets.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let t;function n(e){const o=t.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],e=>{t=e.default||e,checkWorkerRevision(t),t.loadWorker(o.modulePath).then(e=>e||new Promise(e=>{require([o.modulePath],e)})).then(n)}):"System"in self&&"function"==typeof System.import?System.import(workerPath).then(e=>(t=e.default,checkWorkerRevision(t),t.loadWorker(o.modulePath))).then(e=>e||System.import(o.modulePath)).then(n):esriConfig.workers.useDynamicImport?import(workerPath).then(e=>{t=e.default||e,checkWorkerRevision(t),t.loadWorker(o.modulePath).then(e=>e||import(o.modulePath)).then(n)}):(self.RemoteClient||importScripts(workerPath),t=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(t),t.loadWorker(o.modulePath).then(n));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});';
var g;
var y2;
var h2 = "Failed to create Worker. Fallback to execute module in main thread";
async function k2() {
  if (!has("esri-workers")) return w3(new a6());
  if (!g && !y2) try {
    const e6 = p.split("{CONFIGURATION}").join(b2());
    g = URL.createObjectURL(new Blob([e6], { type: "text/javascript" }));
  } catch (r5) {
    y2 = r5 || {};
  }
  let e5;
  if (g) try {
    e5 = new Worker(g, { name: "esri-worker-" + v++ });
  } catch (r5) {
    d2().warn(h2, y2), e5 = new a6();
  }
  else d2().warn(h2, y2), e5 = new a6();
  return w3(e5);
}
async function w3(e5) {
  return new Promise((r5) => {
    function t4(s6) {
      const a8 = f2(s6);
      a8 && a8.type === m && (e5.removeEventListener("message", t4), e5.removeEventListener("error", o3), r5(e5));
    }
    function o3(r6) {
      r6.preventDefault(), e5.removeEventListener("message", t4), e5.removeEventListener("error", o3), d2().warn("Failed to create Worker. Fallback to execute module in main thread", r6), (e5 = new a6()).addEventListener("message", t4), e5.addEventListener("error", o3);
    }
    e5.addEventListener("message", t4), e5.addEventListener("error", o3);
  });
}
function b2() {
  let s6;
  if (null != s.default) {
    const e5 = __spreadValues({}, s);
    delete e5.default, s6 = JSON.parse(JSON.stringify(e5));
  } else s6 = JSON.parse(JSON.stringify(s));
  s6.assetsPath = _(s6.assetsPath), s6.defaultAssetsPath = s6.defaultAssetsPath ? _(s6.defaultAssetsPath) : void 0, s6.request.interceptors = [], s6.log.interceptors = [], s6.locale = z(), s6.has = { "esri-csp-restrictions": has("esri-csp-restrictions"), "esri-2d-debug": false, "esri-2d-update-debug": has("esri-2d-update-debug"), "esri-2d-log-updating": has("esri-2d-log-updating"), "featurelayer-pbf": has("featurelayer-pbf"), "featurelayer-simplify-thresholds": has("featurelayer-simplify-thresholds"), "featurelayer-simplify-payload-size-factors": has("featurelayer-simplify-payload-size-factors"), "featurelayer-simplify-mobile-factor": has("featurelayer-simplify-mobile-factor"), "featurelayer-query-max-depth": has("featurelayer-query-max-depth"), "featurelayer-query-max-page-size": has("featurelayer-query-max-page-size"), "featurelayer-query-tile-max-features": has("featurelayer-query-tile-max-features"), "featurelayer-query-tile-concurrency": has("featurelayer-query-tile-concurrency"), "featurelayer-query-pausing-enabled": has("featurelayer-query-pausing-enabled"), "featurelayer-snapshot-concurrency": has("featurelayer-snapshot-concurrency"), "featurelayer-snapshot-enabled": has("featurelayer-snapshot-enabled"), "parquetlayer-full-query-feature-count": has("parquetlayer-full-query-feature-count"), "parquetlayer-cache-enabled": has("parquetlayer-cache-enabled"), "esri-atomics": has("esri-atomics"), "esri-shared-array-buffer": has("esri-shared-array-buffer"), "esri-tiles-debug": has("esri-tiles-debug"), "esri-workers-arraybuffer-transfer": has("esri-workers-arraybuffer-transfer"), "feature-polyline-generalization-factor": has("feature-polyline-generalization-factor"), "host-webworker": 1 }, s6.workers.loaderUrl && (s6.workers.loaderUrl = _(s6.workers.loaderUrl)), s6.workers.workerPath ? s6.workers.workerPath = _(s6.workers.workerPath) : s6.workers.workerPath = _(n2("esri/core/workers/RemoteClient.js")), s6.workers.useDynamicImport = has("esri-esbuild-build");
  const i3 = s.workers.loaderConfig, l4 = e4({ baseUrl: i3?.baseUrl, locale: z(), has: __spreadValues({ "csp-restrictions": 1, "dojo-test-sniff": 0, "host-webworker": 1 }, i3?.has), map: __spreadValues({}, i3?.map), paths: __spreadValues({}, i3?.paths), packages: i3?.packages || [] }), f4 = { buildDate: a2, fullVersion: r2, revision: b };
  return JSON.stringify({ esriConfig: s6, loaderConfig: l4, kernelInfo: f4 });
}
var v = 0;

// node_modules/@arcgis/core/core/workers/WorkerOwner.js
var { ABORT: b3, INVOKE: m2, OPEN: _2, OPENED: g2, RESPONSE: u3 } = e2;
var j2 = class _j {
  static async create(e5) {
    const t4 = await k2();
    return new _j(t4, e5);
  }
  constructor(e5, o3) {
    this._outJobs = /* @__PURE__ */ new Map(), this._inJobs = /* @__PURE__ */ new Map(), this.worker = e5, this.id = o3, e5.addEventListener("message", this._onMessage.bind(this)), e5.addEventListener("error", (e6) => {
      e6.preventDefault(), n.getLogger("esri.core.workers.WorkerOwner").error(e6);
    });
  }
  terminate() {
    this.worker.terminate();
  }
  async open(e5, t4 = {}) {
    const { signal: o3 } = t4, r5 = s4();
    return new Promise((t5, n7) => {
      const a8 = { resolve: t5, reject: n7, abortHandle: h(o3, () => {
        this._outJobs.delete(r5), this._post({ type: b3, jobId: r5 });
      }) };
      this._outJobs.set(r5, a8), this._post({ type: _2, jobId: r5, modulePath: e5 });
    });
  }
  _onMessage(e5) {
    const t4 = f2(e5);
    if (t4) switch (t4.type) {
      case g2:
        this._onOpenedMessage(t4);
        break;
      case u3:
        this._onResponseMessage(t4);
        break;
      case b3:
        this._onAbortMessage(t4);
        break;
      case m2:
        this._onInvokeMessage(t4);
    }
  }
  _onAbortMessage(e5) {
    const t4 = this._inJobs, o3 = e5.jobId, s6 = t4.get(o3);
    s6 && (s6.controller && s6.controller.abort(), t4.delete(o3));
  }
  _onInvokeMessage(e5) {
    const { methodName: t4, jobId: o3, data: s6, abortable: i3 } = e5, l4 = i3 ? new AbortController() : null, c4 = this._inJobs, h4 = a4[t4];
    let p3;
    try {
      if ("function" != typeof h4) throw new TypeError(`${t4} is not a function`);
      p3 = h4.call(null, s6, { signal: l4 ? l4.signal : null });
    } catch (b4) {
      return void this._post({ type: u3, jobId: o3, error: o2(b4) });
    }
    C(p3) ? (c4.set(o3, { controller: l4, promise: p3 }), p3.then((e6) => {
      c4.has(o3) && (c4.delete(o3), this._post({ type: u3, jobId: o3 }, e6));
    }, (e6) => {
      c4.has(o3) && (c4.delete(o3), e6 || (e6 = { message: "Error encountered at method" + t4 }), d(e6) || this._post({ type: u3, jobId: o3, error: o2(e6 || { message: `Error encountered at method ${t4}` }) }));
    })) : this._post({ type: u3, jobId: o3 }, p3);
  }
  _onOpenedMessage(e5) {
    const { jobId: t4, data: s6 } = e5, r5 = this._outJobs.get(t4);
    r5 && (this._outJobs.delete(t4), l(r5.abortHandle), r5.resolve(s6));
  }
  _onResponseMessage(t4) {
    const { jobId: s6, error: r5, data: n7 } = t4, a8 = this._outJobs.get(s6);
    a8 && (this._outJobs.delete(s6), l(a8.abortHandle), r5 ? a8.reject(r.fromJSON(JSON.parse(r5))) : a8.resolve(n7));
  }
  _post(e5, t4, o3) {
    return a3(this.worker, e5, t4, o3);
  }
};

// node_modules/@arcgis/core/core/workers/workers.js
var s5 = has("host-browser") ? Math.min(navigator.hardwareConcurrency - 1, has("workers-pool-size") ?? 8) : 0;
var a7 = has("esri-mobile") ? Math.min(s5, 3) : s5;
a7 || (a7 = has("safari") && has("mac") ? 7 : 2);
var c3 = 0;
var l3 = [];
function m3() {
  g3();
}
function u4(r5, t4 = {}) {
  return f3(r5, t4);
}
async function f3(r5, t4) {
  const n7 = new c2(), _a = t4, { registryTarget: i3 } = _a, s6 = __objRest(_a, ["registryTarget"]);
  return await n7.open(r5, s6), i3 && e3(i3, n7), n7;
}
async function p2(o3, e5 = {}) {
  if ("string" != typeof o3) throw new r("workers:undefined-module", "modulePath is missing");
  let i3 = e5.strategy || "distributed";
  if (has("host-webworker") && !has("esri-workers") && (i3 = "local"), "local" === i3) {
    let r5 = await O.loadWorker(o3);
    r5 || (r5 = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      o3
    )), s2(e5.signal);
    const i4 = e5.client || r5;
    return f3([O.connect(r5, e5.schedule)], __spreadProps(__spreadValues({}, e5), { client: i4 }));
  }
  if (await g3(), s2(e5.signal), "dedicated" === i3) {
    const r5 = c3++ % a7;
    return f3([await l3[r5].open(o3, e5)], e5);
  }
  if (e5.maxNumWorkers && e5.maxNumWorkers > 0) {
    const r5 = Math.min(e5.maxNumWorkers, a7);
    if (r5 < a7) {
      const t4 = new Array(r5);
      for (let n7 = 0; n7 < r5; ++n7) {
        const r6 = c3++ % a7;
        t4[n7] = l3[r6].open(o3, e5);
      }
      return f3(t4, e5);
    }
  }
  return f3(l3.map((r5) => r5.open(o3, e5)), e5);
}
var h3;
var d3 = null;
async function g3() {
  if (d3) return d3;
  h3 = new AbortController();
  const r5 = [];
  for (let t4 = 0; t4 < a7; t4++) {
    const o3 = j2.create(t4).then((r6) => (l3[t4] = r6, r6));
    r5.push(o3);
  }
  return d3 = Promise.all(r5), d3;
}

export {
  l2 as l,
  O,
  c2 as c,
  m3 as m,
  u4 as u,
  p2 as p
};
//# sourceMappingURL=chunk-2V4Q54HN.js.map
