import {
  c as c2,
  n
} from "./chunk-XH3ATY6S.js";
import {
  i
} from "./chunk-PM52Q5K4.js";
import {
  a3 as a2,
  c
} from "./chunk-XCGM4D6U.js";
import {
  $
} from "./chunk-PQFEWUZC.js";
import {
  a
} from "./chunk-TX75HZKJ.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";

// node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var a3 = new i();
function l(t) {
  return a3.on("apply-edits", new WeakRef(t));
}
function h(t) {
  return a3.on("update-moment", new WeakRef(t));
}
function c3(t, e, i2 = null, d = false) {
  const n2 = $();
  return d = null == e || d, a3.emit("apply-edits", { serviceUrl: t, layerId: e, gdbVersion: i2, mayReceiveServiceEdits: d, result: n2.promise }), n2;
}
var m = /* @__PURE__ */ Symbol();
function p(t) {
  return null != t && "object" == typeof t && m in t;
}
function b(t) {
  return null != t && "object" == typeof t && "gdbVersion" in t;
}
function g(t, e, i2) {
  const s = new URL(t).host, d = n.get(s), n2 = (t2) => !t2 || t2 === d;
  return n2(e) && n2(i2) || e === i2;
}
var F = (e) => {
  var s;
  const o = e;
  let a4 = class extends o {
    static {
      s = m;
    }
    constructor(...t) {
      super(...t), this[s] = true, this._applyEditsHandler = (t2) => {
        const { serviceUrl: e2, layerId: s2, gdbVersion: d, mayReceiveServiceEdits: n2, result: r } = t2, o2 = e2 === this.url, a5 = null != s2 && null != this.layerId && s2 === this.layerId, l2 = b(this), h2 = b(this) && g(e2, d, this.gdbVersion);
        if (!o2 || l2 && !h2 || !a5 && !n2) return;
        const c4 = r.then((t3) => {
          if (this.lastEditsEventDate = /* @__PURE__ */ new Date(), a5 && (t3.addedFeatures.length || t3.updatedFeatures.length || t3.deletedFeatures.length || t3.addedAttachments.length || t3.updatedAttachments.length || t3.deletedAttachments.length)) return this.emit("edits", a(t3)), t3;
          const s3 = t3.editedFeatures?.find(({ layerId: t4 }) => t4 === this.layerId);
          if (s3) {
            const { adds: e3, updates: d2, deletes: n4 } = s3.editedFeatures, r2 = { edits: null, addedAttachments: [], deletedAttachments: [], updatedAttachments: [], addedFeatures: e3 ? e3.map(({ attributes: t4 }) => ({ objectId: this.objectIdField && t4[this.objectIdField], globalId: this.globalIdField && t4[this.globalIdField] })) : [], deletedFeatures: n4 ? n4.map(({ attributes: t4 }) => ({ objectId: this.objectIdField && t4[this.objectIdField], globalId: this.globalIdField && t4[this.globalIdField] })) : [], updatedFeatures: d2 ? d2.map(({ current: { attributes: t4 } }) => ({ objectId: this.objectIdField && t4[this.objectIdField], globalId: this.globalIdField && t4[this.globalIdField] })) : [], editedFeatures: a(t3.editedFeatures), exceededTransferLimit: false, historicMoment: a(t3.historicMoment) };
            return this.emit("edits", r2), r2;
          }
          const n3 = { edits: null, addedAttachments: [], deletedAttachments: [], updatedAttachments: [], addedFeatures: [], deletedFeatures: [], updatedFeatures: [], editedFeatures: a(t3.editedFeatures), exceededTransferLimit: false, historicMoment: a(t3.historicMoment) };
          return "historicMoment" in this && this._shouldUpdateHistoricMoment(e2, d, n3.historicMoment) && this.emit("edits", n3), n3;
        }).then((t3) => ("historicMoment" in this && this._shouldUpdateHistoricMoment(e2, d, t3.historicMoment) && (this.historicMoment = t3.historicMoment), t3));
        this.emit("apply-edits", { result: c4 });
      }, this._updateMomentHandler = (t2) => {
        const { serviceUrl: e2, gdbVersion: i2, moment: s2 } = t2, d = e2 === this.url, n2 = b(this), r = b(this) && g(e2, i2, this.gdbVersion), o2 = b(this) && !g(e2, this.gdbVersion, null);
        d && n2 && r && o2 && "historicMoment" in this && this.historicMoment !== s2 && (this.historicMoment = s2);
      }, this.when().then(() => {
        this.addHandles(l(this._applyEditsHandler)), "historicMoment" in this && this.addHandles(h(this._updateMomentHandler));
      }, () => {
      });
    }
    _shouldUpdateHistoricMoment(t, e2, i2) {
      return "historicMoment" in this && this.historicMoment !== i2 && c2(t, e2);
    }
  };
  return __decorate([a2()], a4.prototype, "lastEditsEventDate", void 0), a4 = __decorate([c("esri.layers.mixins.EditBusLayer")], a4), a4;
};

export {
  l,
  h,
  c3 as c,
  p,
  g,
  F
};
//# sourceMappingURL=chunk-3V5B2XJ5.js.map
