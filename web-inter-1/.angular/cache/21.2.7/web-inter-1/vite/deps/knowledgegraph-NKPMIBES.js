import {
  l
} from "./chunk-AIFYFCSQ.js";
import {
  t as t2
} from "./chunk-TOOCARAN.js";
import {
  i
} from "./chunk-XVDAASWG.js";
import {
  p as p2,
  s as s3,
  s2 as s4,
  t
} from "./chunk-EQRJ5SVP.js";
import {
  p
} from "./chunk-Z4WLQRKR.js";
import {
  K,
  Ke,
  U,
  ee,
  ge,
  ie,
  ne,
  oe,
  re,
  z
} from "./chunk-HBIWUHXR.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-BI5WXBSP.js";
import {
  n as n3,
  n2 as n4
} from "./chunk-O4H6HTBC.js";
import "./chunk-OXKG6ITC.js";
import "./chunk-TTRHBDVK.js";
import "./chunk-33JEBRCY.js";
import {
  F,
  H,
  V
} from "./chunk-Y4WJAV66.js";
import "./chunk-5TEEMD4W.js";
import "./chunk-MESRIVTQ.js";
import "./chunk-YNPTGDAS.js";
import "./chunk-Q3C4JQ3I.js";
import {
  k
} from "./chunk-MCLMCBJF.js";
import "./chunk-JL3Z5SD5.js";
import "./chunk-IANKUBS7.js";
import "./chunk-HUY5VELL.js";
import {
  n as n2
} from "./chunk-K3KADXMX.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-XJP3RSS7.js";
import "./chunk-FMIKVU3Q.js";
import "./chunk-R3PBZCGD.js";
import "./chunk-Z5I3WFZJ.js";
import "./chunk-DFCHXQYB.js";
import "./chunk-ODWYDPQK.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-5GPMO33J.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-URLT4X25.js";
import {
  M
} from "./chunk-YY44XNLW.js";
import "./chunk-KEY3YQEB.js";
import "./chunk-NLVGGH5B.js";
import "./chunk-SH72BZH2.js";
import "./chunk-CHITL6T5.js";
import "./chunk-HJMMRQXJ.js";
import "./chunk-GALDA7CN.js";
import "./chunk-QRPQOATM.js";
import {
  e,
  f,
  n,
  o
} from "./chunk-UDRKO2UK.js";
import "./chunk-OYOKYTYR.js";
import {
  S as S2,
  j,
  s as s2
} from "./chunk-ONXOVX4W.js";
import {
  S
} from "./chunk-TOB5EAWJ.js";
import "./chunk-NR66QFNF.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-LANOLZOB.js";
import "./chunk-DTNG3PQB.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-6TF3NI7G.js";
import "./chunk-DF4ABCPV.js";
import "./chunk-3Z7OKY4G.js";
import "./chunk-LAAWMBRE.js";
import "./chunk-253Z6EVN.js";
import "./chunk-FMWSBXS5.js";
import "./chunk-HXIOMN57.js";
import "./chunk-JM4CKTH2.js";
import "./chunk-SZXJF3IE.js";
import "./chunk-HDFIZIZL.js";
import "./chunk-W3O3DL7T.js";
import "./chunk-SY7OJLZ7.js";
import "./chunk-IK45K3EN.js";
import "./chunk-BCADJITZ.js";
import "./chunk-PFC2RERS.js";
import "./chunk-RTVKY37F.js";
import "./chunk-WARIPJQI.js";
import {
  s2 as s
} from "./chunk-6I475YAP.js";
import "./chunk-GLWFJLHD.js";
import "./chunk-HRD6PGVX.js";
import "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/arcade/functions/knowledgegraph.js
var J = null;
async function N(r) {
  const t3 = s.geometryServiceUrl ?? "";
  if (!t3) {
    V() || await F();
    for (const e2 of r) e2.container[e2.indexer] = H(e2.container[e2.indexer], S.WGS84);
    return;
  }
  const n5 = r.map((e2) => e2.container[e2.indexer]), o2 = new n3({ geometries: n5, outSpatialReference: S.WGS84 }), a = await n4(t3, o2);
  for (let e2 = 0; e2 < a.length; e2++) {
    const t4 = r[e2];
    t4.container[t4.indexer] = a[e2];
  }
}
async function F2(e2, r) {
  const t3 = new k({ portal: e2, id: r });
  return await t3.load(), null === J && (J = await import("./knowledgeGraphService-RJZ367YD.js")), await J.fetchKnowledgeGraph(t3.url);
}
function M2(e2, r, t3, n5, o2) {
  if (null === e2) return null;
  if (e(e2) || n(e2)) return e2;
  if (ne(e2)) return e2.toJSDate();
  if (ne(e2)) return e2.toJSDate();
  if (re(e2)) return e2.toStorageFormat();
  if (ie(e2)) return e2.toStorageString();
  if (K(e2)) {
    const a = {};
    for (const i2 of e2.keys()) a[i2] = M2(e2.field(i2), r, t3, n5, o2), a[i2] instanceof s2 && o2.push({ container: a, indexer: i2 });
    return a;
  }
  if (o(e2)) {
    const a = e2.map((e3) => M2(e3, r, t3, n5, o2));
    for (let e3 = 0; e3 < a.length; e3++) a[e3] instanceof s2 && o2.push({ container: a, indexer: e3 });
    return a;
  }
  return U(e2) ? e2.spatialReference.isWGS84 ? e2 : e2.spatialReference.isWebMercator && r ? S2(e2) : e2 : void 0;
}
function Q(e2, r) {
  if (!e2) return e2;
  if (e2.spatialReference.isWGS84 && r.spatialReference.isWebMercator) return j(e2);
  if (e2.spatialReference.equals(r.spatialReference)) return e2;
  throw new n2(r, "WrongSpatialReference", null);
}
function B(e2, r) {
  if (!e2) return null;
  const t3 = {};
  for (const n5 in e2) t3[n5] = E(e2[n5], r);
  return t3;
}
function E(e2, r) {
  return null === e2 ? null : o(e2) ? e2.map((e3) => E(e3, r)) : e2 instanceof p2 ? { graphTypeName: e2.typeName, id: e2.id, graphType: "entity", properties: B(e2.properties, r) } : e2 instanceof t ? { graphType: "object", properties: B(e2.properties, r) } : e2 instanceof s4 ? { graphTypeName: e2.typeName, id: e2.id, graphType: "relationship", originId: e2.originId ?? null, destinationId: e2.destinationId ?? null, properties: B(e2.properties, r) } : e2 instanceof s3 ? { graphType: "path", path: e2.path ? e2.path.map((e3) => E(e3, r)) : null } : U(e2) ? Q(e2, r) : e(e2) || n(e2) || f(e2) ? e2 : null;
}
function K2(e2) {
  "async" === e2.mode && (e2.functions.knowledgegraphbyportalitem = function(t3, i2) {
    return e2.standardFunctionAsync(t3, i2, (e3, s5, p3) => {
      if (oe(p3, 2, 2, t3, i2), null === p3[0]) throw new n2(t3, "PortalRequired", i2);
      if (p3[0] instanceof t2) {
        const e4 = ge(p3[1]);
        let r;
        r = t3.services?.portal ? t3.services.portal : M.getDefault();
        return F2(l(p3[0], r), e4);
      }
      if (false === e(p3[0])) throw new n2(t3, "InvalidParameter", i2);
      const l2 = ge(p3[0]);
      return F2(t3.services?.portal ?? M.getDefault(), l2);
    });
  }, e2.signatures.push({ name: "knowledgegraphbyportalitem", min: 2, max: 2 }), e2.functions.querygraph = function(r, a) {
    return e2.standardFunctionAsync(r, a, async (e3, l2, c) => {
      oe(c, 2, 4, r, a);
      const f2 = c[0];
      if (!ee(f2)) throw new n2(r, "InvalidParameter", a);
      const u = c[1];
      if (!e(u)) throw new n2(r, "InvalidParameter", a);
      null === J && (J = await import("./knowledgeGraphService-RJZ367YD.js"));
      let m = null;
      const d = z(c[2], null);
      if (!(d instanceof p || null === d)) throw new n2(r, "InvalidParameter", a);
      if (d) {
        let e4 = [];
        m = M2(d, true, false, r, e4), e4 = e4.filter((e5) => !e5.container[e5.indexer].spatialReference.isWGS84), e4.length > 0 && await N(e4);
      }
      const h = z(c[3], false), g = new i({ openCypherQuery: u, bindParameters: m, provenanceBehavior: h ? "include" : "exclude" });
      (f2?.serviceDefinition?.currentVersion ?? 11.3) > 11.2 && (g.outputSpatialReference = r.spatialReference);
      const w = (await J.executeQueryStreaming(f2, g)).resultRowsStream.getReader(), y = [];
      try {
        for (; ; ) {
          const { done: e4, value: t3 } = await w.read();
          if (e4) break;
          if (o(t3)) for (const n5 of t3) y.push(E(n5, r));
          else {
            const e5 = [];
            for (const n5 of t3) e5.push(E(t3[n5], r));
            y.push(e5);
          }
        }
      } catch (j2) {
        throw j2;
      }
      return p.convertJsonToArcade(y, Ke(r), false, true);
    });
  }, e2.signatures.push({ name: "querygraph", min: 2, max: 4 }));
}
export {
  K2 as registerFunctions
};
//# sourceMappingURL=knowledgegraph-NKPMIBES.js.map
