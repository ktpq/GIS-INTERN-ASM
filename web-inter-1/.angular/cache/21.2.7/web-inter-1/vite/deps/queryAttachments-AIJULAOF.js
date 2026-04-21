import {
  d
} from "./chunk-E6R5LRCV.js";
import {
  t as t2
} from "./chunk-OVDW6BG5.js";
import {
  P,
  f2 as f,
  t2 as t
} from "./chunk-TPFIN626.js";
import "./chunk-MCBUVFBI.js";
import "./chunk-CV6NMUZC.js";
import "./chunk-2HP4RAZC.js";
import "./chunk-7ELXYOAW.js";
import "./chunk-BVHAZAH7.js";
import "./chunk-Y3Z2324M.js";
import "./chunk-GIWRB4OC.js";
import "./chunk-43YEPY4V.js";
import "./chunk-BCADJITZ.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-6NO4CQAR.js";
import "./chunk-RTVKY37F.js";
import "./chunk-2KP24SU5.js";
import "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
import "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/rest/query/operations/queryAttachments.js
function s(t3) {
  const o = t3.toJSON();
  return o.attachmentTypes && (o.attachmentTypes = o.attachmentTypes.join(",")), o.keywords && (o.keywords = o.keywords.join(",")), o.globalIds && (o.globalIds = o.globalIds.join(",")), o.objectIds && (o.objectIds = o.objectIds.join(",")), o.size && (o.size = o.size.join(",")), o.orderByFields && (o.orderByFields = o.orderByFields.join(",")), o;
}
function a(o, r) {
  const s2 = {};
  for (const a2 of r) {
    const { parentObjectId: r2, parentGlobalId: c2, attachmentInfos: i2 } = a2;
    for (const a3 of i2) {
      const { id: i3 } = a3, d2 = P(t(`${o.path}/${r2}/attachments/${i3}`)), m = d.fromJSON(a3);
      m.set({ url: d2, parentObjectId: r2, parentGlobalId: c2 }), s2[r2] ? s2[r2].push(m) : s2[r2] = [m];
    }
  }
  return s2;
}
function c(t3, e, n) {
  let a2 = { query: t2(__spreadValues(__spreadProps(__spreadValues({}, t3.query), { f: "json" }), s(e))) };
  return n && (a2 = __spreadProps(__spreadValues(__spreadValues({}, n), a2), { query: __spreadValues(__spreadValues({}, n.query), a2.query) })), f(t3.path + "/queryAttachments", a2).then((t4) => t4.data.attachmentGroups);
}
async function i(t3, e, r) {
  const { objectIds: n } = e, s2 = [];
  for (const a2 of n) s2.push(f(t3.path + "/" + a2 + "/attachments", r));
  return Promise.all(s2).then((t4) => n.map((o, e2) => ({ parentObjectId: o, attachmentInfos: t4[e2].data.attachmentInfos })));
}
export {
  c as executeAttachmentQuery,
  i as fetchAttachments,
  a as processAttachmentQueryResult
};
//# sourceMappingURL=queryAttachments-AIJULAOF.js.map
