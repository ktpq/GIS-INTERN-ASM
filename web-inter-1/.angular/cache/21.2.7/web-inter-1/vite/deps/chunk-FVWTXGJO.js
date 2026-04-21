import {
  l as l3
} from "./chunk-X66P7J6U.js";
import {
  r as r2
} from "./chunk-5HOYHRTL.js";
import {
  R
} from "./chunk-37CL2A4G.js";
import {
  u
} from "./chunk-K5YEU7YE.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import {
  Bt,
  f2 as f
} from "./chunk-TPFIN626.js";
import {
  l as l2
} from "./chunk-LD7VLL5E.js";
import {
  a3 as a,
  c,
  l2 as l
} from "./chunk-7ELXYOAW.js";
import {
  $,
  T
} from "./chunk-2KP24SU5.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-XE7VYYSA.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/StreamConnection.js
var n2 = class extends l2 {
  destroy() {
    this.emit("destroy");
  }
  get connectionError() {
    return this.errorString ? new r("stream-connection", this.errorString) : null;
  }
  onFeature(r4) {
    this.emit("data-received", r4);
  }
  onMessage(r4) {
    this.emit("message-received", r4);
  }
};
__decorate([a({ readOnly: true })], n2.prototype, "connectionError", null), n2 = __decorate([c("esri.layers.support.StreamConnection")], n2);

// node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js
var h = class extends n2 {
  constructor(e) {
    super({}), this._outstandingMessages = [], this.errorString = null;
    const { geometryType: t, spatialReference: o2, sourceSpatialReference: s } = e;
    this._config = e, this._featureZScaler = r2(t, s, o2), this._open();
  }
  normalizeCtorArgs() {
    return {};
  }
  async _open() {
    await this._tryCreateWebSocket(), this.destroyed || await this._handshake();
  }
  destroy() {
    super.destroy(), null != this._websocket && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
  }
  get connectionStatus() {
    if (null == this._websocket) return "disconnected";
    switch (this._websocket.readyState) {
      case 0:
      case 1:
        return "connected";
      case 2:
      case 3:
        return "disconnected";
    }
  }
  sendMessageToSocket(e) {
    null != this._websocket ? this._websocket.send(JSON.stringify(e)) : this._outstandingMessages.push(e);
  }
  sendMessageToClient(e) {
    this._onMessage(e);
  }
  updateCustomParameters(e) {
    this._config.customParameters = e, null != this._websocket && this._websocket.close();
  }
  async _tryCreateWebSocket(e = this._config.source.path, r4 = 1e3, i = 0) {
    try {
      if (this.destroyed) return;
      const t = Bt(e, this._config.customParameters ?? {});
      this._websocket = await this._createWebSocket(t), this.notifyChange("connectionStatus");
    } catch (c2) {
      const n3 = r4 / 1e3;
      return this._config.maxReconnectionAttempts && i >= this._config.maxReconnectionAttempts ? (n.getLogger(this).error(new r("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy()) : (n.getLogger(this).error(new r("websocket-connection", `Failed to connect. Attempting to reconnect in ${n3}s`, c2)), await T(r4), this._tryCreateWebSocket(e, Math.min(1.5 * r4, 1e3 * this._config.maxReconnectionInterval), i + 1));
    }
  }
  _setWebSocketJSONParseHandler(e) {
    e.onmessage = (e2) => {
      try {
        const t = JSON.parse(e2.data);
        this._onMessage(t);
      } catch (s) {
        return void n.getLogger(this).error(new r("websocket-connection", "Failed to parse message, invalid JSON", { error: s }));
      }
    };
  }
  _createWebSocket(e) {
    return new Promise((t, o2) => {
      const s = new WebSocket(e);
      s.onopen = () => {
        if (s.onopen = null, this.destroyed) return s.onclose = null, void s.close();
        s.onclose = (e2) => this._onClose(e2), s.onerror = (e2) => this._onError(e2), this._setWebSocketJSONParseHandler(s), t(s);
      }, s.onclose = (e2) => {
        s.onopen = s.onclose = null, o2(e2);
      };
    });
  }
  async _handshake(e = 1e4) {
    const s = this._websocket;
    if (null == s) return;
    const n3 = $(), i = s.onmessage, { filter: c2, outFields: a3, spatialReference: l4 } = this._config;
    return n3.timeout(e), s.onmessage = (e2) => {
      let r4 = null;
      try {
        r4 = JSON.parse(e2.data);
      } catch (h3) {
      }
      r4 && "object" == typeof r4 || (n.getLogger(this).error(new r("websocket-connection", "Protocol violation. Handshake failed - malformed message", e2.data)), n3.reject(), this.destroy()), r4.spatialReference?.wkid !== l4?.wkid && (n.getLogger(this).error(new r("websocket-connection", `Protocol violation. Handshake failed - expected wkid of ${l4.wkid}`, e2.data)), n3.reject(), this.destroy()), "json" !== r4.format && (n.getLogger(this).error(new r("websocket-connection", "Protocol violation. Handshake failed - format is not set", e2.data)), n3.reject(), this.destroy()), c2 && r4.filter !== c2 && n.getLogger(this).error(new r("websocket-connection", "Tried to set filter, but server doesn't support it")), a3 && r4.outFields !== a3 && n.getLogger(this).error(new r("websocket-connection", "Tried to set outFields, but server doesn't support it")), s.onmessage = i;
      for (const t of this._outstandingMessages) s.send(JSON.stringify(t));
      this._outstandingMessages = [], n3.resolve();
    }, s.send(JSON.stringify({ filter: c2, outFields: a3, format: "json", spatialReference: { wkid: l4.wkid } })), n3.promise;
  }
  _onMessage(e) {
    if (this.onMessage(e), "type" in e) switch (e.type) {
      case "features":
      case "featureResult":
        for (const t of e.features) null != this._featureZScaler && this._featureZScaler(t.geometry), this.onFeature(t);
    }
  }
  _onError(e) {
    const t = "Encountered an error over WebSocket connection";
    this._set("errorString", t), n.getLogger(this).error("websocket-connection", t);
  }
  _onClose(e) {
    this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e.code && n.getLogger(this).error("websocket-connection", `WebSocket closed unexpectedly with error code ${e.code}`), this.destroyed || this._open();
  }
};
__decorate([a()], h.prototype, "connectionStatus", null), __decorate([a()], h.prototype, "errorString", void 0), h = __decorate([c("esri.layers.graphics.sources.connections.WebSocketConnection")], h);

// node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js
var h2 = 1e4;
var d = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
var g = class extends h {
  constructor(e) {
    super(__spreadValues(__spreadValues({}, d), e)), this._buddyServicesQuery = null, this._relatedFeatures = null;
  }
  async _open() {
    const e = await this._fetchServiceDefinition(this._config.source);
    e.timeInfo.trackIdField || n.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
    const t = this._fetchWebSocketUrl(e.streamUrls, this._config.spatialReference);
    this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices()), await this._buddyServicesQuery, await this._tryCreateWebSocket(t);
    const { filter: r4, outFields: o2 } = this._config;
    this.destroyed || this._setFilter(r4, o2);
  }
  _onMessage(e) {
    if ("attributes" in e) {
      let o2;
      try {
        o2 = this._enrich(e), null != this._featureZScaler && this._featureZScaler(o2.geometry);
      } catch (t) {
        return void n.getLogger(this).error(new r("geoevent-connection", "Failed to parse message", t));
      }
      this.onFeature(o2);
    } else this.onMessage(e);
  }
  async _fetchServiceDefinition(e) {
    const r4 = __spreadValues({ f: "json" }, this._config.customParameters), i = f(e.path, { query: r4, responseType: "json" }), o2 = (await i).data;
    return this._serviceDefinition = o2, o2;
  }
  _fetchWebSocketUrl(e, t) {
    const r4 = e[0], { urls: i, token: o2 } = r4, n3 = this._inferWebSocketBaseUrl(i);
    return Bt(`${n3}/subscribe`, { outSR: "" + t.wkid, token: o2 });
  }
  _inferWebSocketBaseUrl(e) {
    if (1 === e.length) return e[0];
    for (const t of e) if (t.includes("wss")) return t;
    return n.getLogger(this).error(new r("geoevent-connection", "Unable to infer WebSocket url", e)), null;
  }
  async _setFilter(e, t) {
    const s = this._websocket;
    if (null == s || null == e && null == t) return;
    const n3 = JSON.stringify({ filter: this._serializeFilter(e, t) });
    let a3 = false;
    const c2 = $(), u2 = () => {
      a3 || (this.destroyed || this._websocket !== s || n.getLogger(this).error(new r("geoevent-connection", "Server timed out when setting filter")), c2.reject());
    }, l4 = (e2) => {
      const t2 = JSON.parse(e2.data);
      t2.filter && (t2.error && (n.getLogger(this).error(new r("geoevent-connection", "Failed to set service filter", t2.error)), this._set("errorString", `Could not set service filter - ${t2.error}`), c2.reject(t2.error)), this._setWebSocketJSONParseHandler(s), a3 = true, c2.resolve());
    };
    return s.onmessage = l4, s.send(n3), setTimeout(u2, h2), c2.promise;
  }
  _serializeFilter(e, t) {
    const o2 = {};
    if (null == e && null == t) return o2;
    if (e?.geometry) try {
      const t2 = u(e.geometry);
      if ("extent" !== t2.type) throw new r("geoevent-connection", `Expected extent but found type ${t2.type}`);
      o2.geometry = JSON.stringify(t2.shiftCentralMeridian());
    } catch (s) {
      n.getLogger(this).error(new r("geoevent-connection", "Encountered an error when setting connection geometryDefinition", s));
    }
    return e?.where && "1 = 1" !== e.where && "1=1" !== e.where && (o2.where = e.where), null != t && (o2.outFields = t.join(",")), o2;
  }
  _enrich(e) {
    if (!this._relatedFeatures) return e;
    const t = this._serviceDefinition.relatedFeatures.joinField, o2 = e.attributes[t], s = this._relatedFeatures.get(o2);
    if (!s) return n.getLogger(this).warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e), e;
    const { attributes: n3, geometry: a3 } = s;
    for (const r4 in n3) e.attributes[r4] = n3[r4];
    return a3 && (e.geometry = a3), e.geometry || e.centroid || n.getLogger(this).error(new r("geoevent-connection", "Found malformed feature - no geometry found", e)), e;
  }
  async _queryBuddyServices() {
    try {
      const { relatedFeatures: e, keepLatestArchive: t } = this._serviceDefinition, r4 = this._queryRelatedFeatures(e), i = this._queryArchive(t);
      await r4;
      const o2 = await i;
      if (!o2) return;
      for (const s of o2.features) this.onFeature(this._enrich(s));
    } catch (e) {
      n.getLogger(this).error(new r("geoevent-connection", "Encountered an error when querying buddy services", { error: e }));
    }
  }
  async _queryRelatedFeatures(e) {
    if (!e) return;
    const t = await this._queryBuddy(e.featuresUrl);
    this._addRelatedFeatures(t);
  }
  async _queryArchive(e) {
    if (e) return this._queryBuddy(e.featuresUrl);
  }
  async _queryBuddy(e) {
    const t = new (await import("./@arcgis_core_layers_FeatureLayer.js")).default({ url: e }), { capabilities: r4 } = await t.load(), i = r4.query.supportsMaxRecordCountFactor, o2 = r4.query.supportsPagination, s = r4.query.supportsCentroid, n3 = this._config.maxRecordCountFactor, c2 = t.capabilities.query.maxRecordCount, u2 = i ? c2 * n3 : c2, h3 = new R();
    if (h3.outFields = this._config.outFields ?? ["*"], h3.where = this._config.filter?.where ?? "1=1", h3.returnGeometry = true, h3.returnExceededLimitFeatures = true, h3.outSpatialReference = S.fromJSON(this._config.spatialReference), s && (h3.returnCentroid = true), i && (h3.maxRecordCountFactor = n3), o2) return h3.num = u2, t.destroy(), this._queryPages(e, h3);
    const d2 = await l3(e, h3, this._config.sourceSpatialReference);
    return t.destroy(), d2;
  }
  async _queryPages(e, t, r4 = [], i = 0) {
    t.start = null != t.num ? i * t.num : null;
    const o2 = await l3(e, t, this._config.sourceSpatialReference);
    return o2.exceededTransferLimit && i < (this._config.maxQueryDepth ?? 0) ? (o2.features.forEach((e2) => r4.push(e2)), this._queryPages(e, t, r4, i + 1)) : (r4.forEach((e2) => o2.features.push(e2)), o2);
  }
  _addRelatedFeatures(e) {
    const t = /* @__PURE__ */ new Map(), r4 = e.features, i = this._serviceDefinition.relatedFeatures.joinField;
    for (const o2 of r4) {
      const e2 = o2.attributes[i];
      t.set(e2, o2);
    }
    this._relatedFeatures = t;
  }
};
g = __decorate([c("esri.layers.graphics.sources.connections.GeoEventConnection")], g);

// node_modules/@arcgis/core/layers/support/ClientSideConnection.js
var a2 = class extends n2 {
  constructor(e) {
    super({}), this.connectionStatus = "connected", this.errorString = null;
    const { geometryType: t, spatialReference: r4, sourceSpatialReference: s } = e;
    this._featureZScaler = r2(t, s, r4);
  }
  normalizeCtorArgs() {
    return {};
  }
  updateCustomParameters(e) {
  }
  sendMessageToSocket(e) {
  }
  sendMessageToClient(e) {
    if ("type" in e) switch (e.type) {
      case "features":
      case "featureResult":
        for (const t of e.features) null != this._featureZScaler && this._featureZScaler(t.geometry), this.onFeature(t);
    }
    this.onMessage(e);
  }
};
__decorate([a()], a2.prototype, "connectionStatus", void 0), __decorate([a()], a2.prototype, "errorString", void 0), a2 = __decorate([l("esri.layers.support.ClientSideConnection")], a2);

// node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js
function o(e, t) {
  if (null == e && null == t) return null;
  const n3 = {};
  return null != t && (n3.geometry = t), null != e && (n3.where = e), n3;
}
function r3(r4, i, s, c2, l4, u2, a3, m, p) {
  const f2 = { source: r4, sourceSpatialReference: i, spatialReference: s, geometryType: c2, filter: o(l4, u2), maxReconnectionAttempts: a3, maxReconnectionInterval: m, customParameters: p };
  if (!r4) return new a2(f2);
  return r4.path.startsWith("wss://") || r4.path.startsWith("ws://") ? new h(f2) : new g(f2);
}

export {
  r3 as r
};
//# sourceMappingURL=chunk-FVWTXGJO.js.map
