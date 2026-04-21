import {
  i
} from "./chunk-3PV3MUY2.js";
import {
  p as p2,
  s as s3,
  s2 as s4,
  t as t2
} from "./chunk-2KI7TKQK.js";
import {
  l
} from "./chunk-2P4POXQG.js";
import {
  t
} from "./chunk-JLMB65LM.js";
import {
  p
} from "./chunk-D73LDRDL.js";
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
} from "./chunk-5MXYX4KI.js";
import "./chunk-FPO7A7U4.js";
import "./chunk-NAH26QEI.js";
import {
  n as n3,
  n2 as n4
} from "./chunk-6YPBUAZD.js";
import "./chunk-PT3QCIYI.js";
import {
  k
} from "./chunk-RNT2VJHG.js";
import "./chunk-B4FJHFAW.js";
import {
  n as n2
} from "./chunk-G3XGV2JB.js";
import {
  F,
  H,
  V
} from "./chunk-QBEV3F3C.js";
import "./chunk-MAWAFQXQ.js";
import "./chunk-4YOIFLLS.js";
import "./chunk-IANKUBS7.js";
import "./chunk-RXP6U2XC.js";
import "./chunk-A7Y45KTY.js";
import "./chunk-FNL3SIHY.js";
import "./chunk-EK6IDC6N.js";
import "./chunk-ZBPHFQZH.js";
import "./chunk-KEY3YQEB.js";
import {
  M
} from "./chunk-P476LLZ4.js";
import "./chunk-XMB55ILJ.js";
import "./chunk-K5YEU7YE.js";
import {
  e,
  f,
  n,
  o
} from "./chunk-UDRKO2UK.js";
import "./chunk-I3MJLPKC.js";
import "./chunk-FH7ZMRUF.js";
import "./chunk-2YANO3UR.js";
import "./chunk-GTWJPBIK.js";
import "./chunk-XYIHFHUH.js";
import "./chunk-MC2OVSQ5.js";
import "./chunk-6U5MFJUS.js";
import "./chunk-EQVY5WGD.js";
import "./chunk-P7NLTDL7.js";
import "./chunk-5GPMO33J.js";
import "./chunk-CHITL6T5.js";
import "./chunk-WSE2ZKFY.js";
import "./chunk-GM5PCDS3.js";
import "./chunk-253Z6EVN.js";
import "./chunk-7ZFYLJ6O.js";
import "./chunk-XETCTTJV.js";
import "./chunk-VEYY6VCN.js";
import "./chunk-HTVDNBEG.js";
import "./chunk-UJPIJ3ZF.js";
import "./chunk-ORVZAZPX.js";
import {
  S as S2,
  j,
  s as s2
} from "./chunk-YVKQ6DO2.js";
import {
  S
} from "./chunk-VYBVCH3T.js";
import "./chunk-DMD5CGVA.js";
import "./chunk-FZD4GVUW.js";
import "./chunk-VHQJAPCR.js";
import "./chunk-SJGGAAKL.js";
import "./chunk-YPBIWRR5.js";
import "./chunk-TPFIN626.js";
import "./chunk-TUJXLUEV.js";
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
import {
  s
} from "./chunk-XE7VYYSA.js";
import "./chunk-XCN5EJK7.js";
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
  return await t3.load(), null === J && (J = await import("./knowledgeGraphService-TC6JONPY.js")), await J.fetchKnowledgeGraph(t3.url);
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
  return null === e2 ? null : o(e2) ? e2.map((e3) => E(e3, r)) : e2 instanceof p2 ? { graphTypeName: e2.typeName, id: e2.id, graphType: "entity", properties: B(e2.properties, r) } : e2 instanceof t2 ? { graphType: "object", properties: B(e2.properties, r) } : e2 instanceof s4 ? { graphTypeName: e2.typeName, id: e2.id, graphType: "relationship", originId: e2.originId ?? null, destinationId: e2.destinationId ?? null, properties: B(e2.properties, r) } : e2 instanceof s3 ? { graphType: "path", path: e2.path ? e2.path.map((e3) => E(e3, r)) : null } : U(e2) ? Q(e2, r) : e(e2) || n(e2) || f(e2) ? e2 : null;
}
function K2(e2) {
  "async" === e2.mode && (e2.functions.knowledgegraphbyportalitem = function(t3, i2) {
    return e2.standardFunctionAsync(t3, i2, (e3, s5, p3) => {
      if (oe(p3, 2, 2, t3, i2), null === p3[0]) throw new n2(t3, "PortalRequired", i2);
      if (p3[0] instanceof t) {
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
      null === J && (J = await import("./knowledgeGraphService-TC6JONPY.js"));
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
//# sourceMappingURL=knowledgegraph-YGG5YT7F.js.map
