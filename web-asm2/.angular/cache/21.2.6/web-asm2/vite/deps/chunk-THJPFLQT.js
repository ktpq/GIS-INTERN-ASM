import {
  r as r2
} from "./chunk-GNDMWO24.js";
import {
  t
} from "./chunk-6PP7DNS4.js";
import {
  p
} from "./chunk-D2UKWTS5.js";
import {
  Ie,
  oe,
  te
} from "./chunk-2KPSUWRN.js";
import {
  n as n3
} from "./chunk-6YL5AAWZ.js";
import {
  a,
  f as f2,
  s
} from "./chunk-QWYKLNNR.js";
import {
  M
} from "./chunk-IQ4J5AR2.js";
import {
  e as e2,
  o
} from "./chunk-TPJLJ32L.js";
import {
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  n as n2
} from "./chunk-JADLUMUQ.js";
import {
  l2 as l,
  m2 as m
} from "./chunk-GUGGSMY4.js";
import {
  e
} from "./chunk-O3PP4I47.js";
import {
  n2 as n,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/support/TranslateResult.js
var s2 = class extends n2 {
  constructor(e3) {
    super(e3), this.text = null, this.detectedLanguage = "en", this.detectedLanguageScore = -1;
  }
};
__decorate([m({ type: String, json: { write: true } })], s2.prototype, "key", void 0), __decorate([m({ type: String, json: { write: true } })], s2.prototype, "text", void 0), __decorate([m({ type: String, json: { read: { source: "detectedLanguage.language" }, write: { target: "detectedLanguage.language" } } })], s2.prototype, "detectedLanguage", void 0), __decorate([m({ type: Number, json: { read: { source: "detectedLanguage.score" }, write: { target: "detectedLanguage.score" } } })], s2.prototype, "detectedLanguageScore", void 0), __decorate([m({ type: Object, json: { write: true } })], s2.prototype, "translation", void 0), s2 = __decorate([l("esri.rest.support.TranslateResult")], s2);

// node_modules/@arcgis/core/rest/translate.js
async function n4(n5, e3, p2) {
  const i2 = e3.toJSON();
  i2.contents = JSON.stringify(i2.contents), i2.token = await a(e3.portalUrl, e3.apiKey, { signal: p2?.signal, prompt: "no-prompt" !== p2?.authMode });
  const m2 = f2(n5), u = s(m2.query, __spreadProps(__spreadValues({}, p2), { query: i2, method: "post", authMode: "anonymous" }));
  return (await f(m2.path, u)).data.results.map((t2) => s2.fromJSON(t2));
}

// node_modules/@arcgis/core/rest/support/TranslateContent.js
var s3 = class extends n2 {
  constructor(r3) {
    super(r3);
  }
};
__decorate([m({ type: String, json: { write: true } })], s3.prototype, "key", void 0), __decorate([m({ type: String, json: { write: true } })], s3.prototype, "text", void 0), s3 = __decorate([l("esri.rest.support.TranslateContent")], s3);

// node_modules/@arcgis/core/rest/support/TranslateParameters.js
var i = class extends n2 {
  constructor(t2) {
    super(t2), this.to = null, this.contents = null, this.portalUrl = "https://www.arcgis.com", this.translator = "esri", this.from = null, this.apiKey = null, this.requestSource = null;
  }
};
__decorate([m({ type: [String], json: { write: true } })], i.prototype, "to", void 0), __decorate([m({ type: [s3], json: { write: true } })], i.prototype, "contents", void 0), __decorate([m({ type: String, json: { write: true } })], i.prototype, "portalUrl", void 0), __decorate([m({ type: String, json: { write: true, default: "esri" } })], i.prototype, "translator", void 0), __decorate([m({ type: String, json: { write: true } })], i.prototype, "from", void 0), __decorate([m(t)], i.prototype, "apiKey", void 0), __decorate([m({ type: String, json: { name: "x-esri-request-source" } })], i.prototype, "requestSource", void 0), i = __decorate([l("esri.rest.support.TranslateParameters")], i);

// node_modules/@arcgis/core/chunks/aiServices.js
var d = class {
  constructor(t2, e3) {
    this.portal = t2, this._debugLog = e3;
  }
  async translate(t2) {
    this.portal.loaded || await this.portal.load();
    const e3 = this.portal.helperServices?.aiUtilityServices;
    if (null == e3) return { success: false };
    const s4 = e3.url + e3.translateUtility;
    try {
      t2.requestSource ??= "arcade";
      return { success: true, results: (await n4(s4, t2, { authMode: "no-prompt" })).map((t3) => t3.toJSON()) };
    } catch (r3) {
      return null != this._debugLog && (r3 instanceof Error || r3 instanceof r) && this._debugLog(`TranslateText error: ${r3.message}`), n.getLogger("esri.arcade.functions.aiServices").error(r3), { success: false };
    }
  }
};
var g = class {
  constructor(t2, e3, s4) {
    this._parameters = t2, this._maxTotalContentSize = e3, this._maxContentsLength = s4, this._requests = [], this._normalizedContents = /* @__PURE__ */ new Map(), this._contentsTotalSize = 0;
  }
  tryAdd(t2) {
    const e3 = new Set(t2.filter((t3) => !this._normalizedContents.has(t3.text)).map((t3) => t3.text));
    if (this._requests.length + e3.size > this._maxContentsLength) return null;
    let s4 = 0;
    for (const n5 of e3) s4 += n5.length;
    if ((s4 + this._contentsTotalSize) * (this._parameters.to.length ?? 1) > this._maxTotalContentSize) return null;
    const r3 = this._requests.length;
    for (const { key: n5, text: o2 } of t2) e(this._normalizedContents, o2, () => []).push({ batchIdx: r3, key: n5 });
    return this._requests.push(t2), this._contentsTotalSize += s4, r3;
  }
  async send(t2) {
    const e3 = [], s4 = [];
    let r3 = 0;
    for (const [i2, c] of this._normalizedContents) e3.push(new s3({ key: String(r3++), text: i2 })), s4.push(c);
    const n5 = new i(this._parameters);
    n5.contents = e3;
    const o2 = await t2.translate(n5);
    if (!o2.success) return Array.from(this._requests, () => o2);
    const a2 = Array.from(this._requests, () => ({ success: true, results: [] }));
    for (const i2 of o2.results) {
      const t3 = Number(i2.key);
      for (const e4 of s4[t3]) a2[e4.batchIdx].results.push(__spreadProps(__spreadValues({}, i2), { key: e4.key }));
    }
    return a2;
  }
};
function y(t2) {
  const e3 = [...new Set(t2.to)].sort(), s4 = t2.from ?? null, r3 = t2.portalUrl, n5 = t2.translator, o2 = t2.apiKey ?? null;
  return JSON.stringify([e3, s4, r3, n5, o2]);
}
async function w(t2, e3, s4) {
  try {
    return (await t2.yieldFor(s4))[e3];
  } catch {
    return { success: false };
  }
}
var x = class {
  constructor(t2, e3, { maxTotalContentSize: s4 = 5e4, maxContentsLength: r3 = 1e3 } = {}) {
    this._executor = t2, this._service = e3, this._openBatches = /* @__PURE__ */ new Map(), this._maxTotalContentSize = s4, this._maxContentsLength = r3;
  }
  create(t2) {
    return { translate: async (e3) => {
      const s4 = y(e3), { contents: r3, to: n5, from: o2, translator: a2, portalUrl: i2, apiKey: c } = e3;
      if (null == n5) return { success: false };
      if (null == r3 || r3.every((t3) => 0 === t3.text.length)) return { success: false };
      const l2 = this._openBatches.get(s4);
      if (null != l2) {
        const e4 = l2.data.tryAdd(r3);
        if (null != e4) return await w(t2, e4, l2);
        l2.send();
      }
      const u = new g({ to: n5, from: o2, translator: a2, portalUrl: i2, apiKey: c }, this._maxTotalContentSize, this._maxContentsLength), h = u.tryAdd(r3);
      if (null != h) {
        const e4 = this._executor.openBatch(u, { open: (t3) => {
          this._openBatches.set(s4, t3);
        }, execute: (t3) => t3.send(this._service), close: (t3) => {
          this._openBatches.get(s4) === t3 && this._openBatches.delete(s4);
        } });
        return await w(t2, h, e4);
      }
      return await this._service.translate(e3);
    } };
  }
};
function S(a2) {
  "async" === a2.mode && (a2.functions[r2("TranslateText")] = function(t2, i2) {
    return a2.standardFunctionAsync(t2, i2, async (t3, a3, i3) => {
      if (oe(i3, 2, 3, t3, a3), !e2(i3[0]) && !o(i3[0]) && !te(i3[0])) throw new n3(t3, "InvalidParameter", a3);
      const c = Ie(i3[0]);
      if (!e2(i3[1]) && !o(i3[1]) && !te(i3[1])) throw new n3(t3, "InvalidParameter", a3);
      const u = Ie(i3[1]);
      let g2 = null;
      if (i3.length >= 3) {
        if (!e2(i3[2])) throw new n3(t3, "InvalidParameter", a3);
        g2 = i3[2];
      }
      const w2 = c.map((t4, e3) => new s3({ key: String(e3), text: t4 })), x2 = t3.services?.portal ?? M.getDefault(), S2 = new i({ to: u, contents: w2, from: g2, portalUrl: x2.restUrl.replace(/\/sharing\/rest$/, "") }), T2 = /* @__PURE__ */ new Map();
      let v = null;
      if (null != t3.lrucache) {
        const e3 = t3.lrucache;
        v ??= y(S2), S2.contents = S2.contents?.filter((t4) => {
          const s4 = e3.getCachedTranslation(v, t4.text);
          return null == s4 || (T2.set(t4.key, __spreadProps(__spreadValues({}, s4), { key: t4.key, text: t4.text })), false);
        });
      }
      if (S2.contents?.length) {
        const r3 = t3.services?.translation ?? new d(x2, t3.console), n5 = await r3.translate(S2);
        if (!n5.success) return new p({ __proto__: null, success: false });
        for (const e3 of n5.results) {
          const r4 = S2.contents?.find((t4) => t4.key === e3.key)?.text;
          if (null == r4) throw new n3(null, "NeverReach", null);
          T2.set(e3.key, e3), null != t3.lrucache && (v ??= y(S2), t3.lrucache.setCachedTranslation(v, r4, { detectedLanguage: e3.detectedLanguage, translation: e3.translation }));
        }
      }
      const C = Array.from(w2, (r3) => {
        const n5 = s2.fromJSON(T2.get(r3.key));
        if (null == n5) throw new n3(null, "NeverReach", null);
        return n5.text = r3.text, p.convertJsonToArcade(n5.toJSON(), t3.timeZone ?? "system", true);
      });
      return new p({ __proto__: null, success: true, results: C });
    });
  });
}
var T = Object.freeze(Object.defineProperty({ __proto__: null, BatchTranslationServiceFactory: x, PortalTranslationService: d, getTranslateParametersKey: y, registerFunctions: S }, Symbol.toStringTag, { value: "Module" }));

export {
  d,
  y,
  x,
  S,
  T
};
//# sourceMappingURL=chunk-THJPFLQT.js.map
