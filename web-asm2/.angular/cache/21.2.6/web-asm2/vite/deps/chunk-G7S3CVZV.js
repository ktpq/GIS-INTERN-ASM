import {
  s
} from "./chunk-X3QOEQYX.js";
import {
  n as n2
} from "./chunk-RG2GSHKH.js";
import {
  u
} from "./chunk-Y6TGJABT.js";
import {
  m
} from "./chunk-2IAEDPBU.js";
import {
  l
} from "./chunk-DUGX5C7M.js";
import {
  Fe
} from "./chunk-WUSMTFBU.js";
import {
  S
} from "./chunk-YDHIJ7J4.js";
import {
  Z,
  f2 as f
} from "./chunk-5AVTDH3Y.js";
import {
  n
} from "./chunk-JADLUMUQ.js";
import {
  a3 as a,
  c
} from "./chunk-GUGGSMY4.js";
import {
  o
} from "./chunk-W5GOZNVR.js";
import {
  has,
  r3 as r
} from "./chunk-6SPQI6I6.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/layers/support/ParquetGeometryEncodingLocation.js
var s2 = class extends l(n) {
  constructor(o3) {
    super(o3), this.type = "location", this.xField = null, this.yField = null;
  }
};
__decorate([a({ type: ["location"], nonNullable: true, readOnly: true, json: { read: false, write: { isRequired: true } } })], s2.prototype, "type", void 0), __decorate([a({ type: String, json: { write: { isRequired: true } } })], s2.prototype, "xField", void 0), __decorate([a({ type: String, json: { write: { isRequired: true } } })], s2.prototype, "yField", void 0), s2 = __decorate([c("esri.layers.support.ParquetGeometryEncodingLocation")], s2);

// node_modules/@arcgis/core/layers/support/ParquetGeometryEncodingWkb.js
var s3 = class extends l(n) {
  constructor(e) {
    super(e), this.type = "wkb", this.field = null;
  }
};
__decorate([a({ type: ["wkb"], nonNullable: true, readOnly: true, json: { read: false, write: { isRequired: true } } })], s3.prototype, "type", void 0), __decorate([a({ type: ["counter-clockwise"], json: { write: true } })], s3.prototype, "orientation", void 0), __decorate([a({ type: String, json: { write: { isRequired: true } } })], s3.prototype, "field", void 0), s3 = __decorate([c("esri.layers.support.ParquetGeometryEncodingWkb")], s3);

// node_modules/@arcgis/core/libs/parquet/parquet.js
var o2 = "parquet.v1";
var s4 = new u({ concurrency: 12, process: async (t) => {
  const { data: n3 } = await f(t.url, t.options);
  return n3;
} });
var i = (e) => async function(t, n3, a2, r2) {
  const i2 = e?.(), l3 = { url: t, options: { responseType: "array-buffer", query: i2 ?? {}, cacheMode: "no-store", useQueue: true, headers: { range: `bytes=${n3}-${a2}` } } };
  if (!has("parquetlayer-cache-enabled")) return s4.push(l3);
  const c3 = new URL(t);
  c3.searchParams.append("range", `${n3}-${a2}`);
  try {
    const e2 = await caches.open(`${o2}:${t}`), n4 = await e2.match(c3);
    if (n4) return await n4.arrayBuffer();
    const a3 = await s4.push(l3);
    return await e2.put(c3, new Response(a3, { headers: { "Content-Type": "application/octet-stream", "Content-Length": a3.byteLength.toString() } })), a3;
  } catch (u3) {
    return s4.push(l3);
  }
};
var l2 = (t) => async function(n3) {
  if (Z(n3)) {
    const { data: t2 } = await f(n3, { responseType: "blob" });
    return t2.size;
  }
  const { data: r2 } = await f(n3, { responseType: "native", method: "head", query: t?.() }), s5 = r2.headers.get("Content-Length");
  if (null == s5) throw new Error("Unable to parse content length");
  const i2 = parseInt(s5, 10);
  if (!has("parquetlayer-cache-enabled")) return i2;
  try {
    const e = `${o2}:${n3}`, t2 = new URL(n3);
    t2.searchParams.append("metadata", "true");
    let a2 = await caches.open(e);
    const s6 = r2.headers.get("etag") ?? r2.headers.get("Last-Modified");
    if (null == s6) return await caches.delete(e), i2;
    const l3 = await a2.match(t2), c3 = await l3?.json();
    c3?.tag !== s6 && (await caches.delete(e), a2 = await caches.open(e));
    const u3 = JSON.stringify({ tag: s6 });
    await a2.put(t2, new Response(u3, { headers: { "Content-Type": "application/json", "Content-Length": u3.length.toString() } }));
  } catch (l3) {
  }
  return i2;
};
function c2(e, n3) {
  switch (n3) {
    case "esriGeometryPoint":
      return e.GeometryType.Point;
    case "esriGeometryPolygon":
    case "polygon":
      return e.GeometryType.Polygon;
    case "esriGeometryPolyline":
    case "polyline":
      return e.GeometryType.Polyline;
    case "esriGeometryMultipoint":
    case "multipoint":
      return e.GeometryType.Multipoint;
    default:
      throw new r("parquet", `Found unexpected GeometryType: ${n3}`);
  }
}
function u2(e, t) {
  const n3 = t.encoding, a2 = c2(e, t.geometryType), r2 = t.spatialReference.wkid;
  if (null == r2) throw new Error("InternalError: Wkid must be defined.");
  switch (n3.type) {
    case "wkb":
      return e.GeometryField.fromWkb(n3.field, r2, a2);
    case "location": {
      const { yField: t2, xField: o3 } = n3;
      return e.GeometryField.fromLocation(t2, o3, r2, a2);
    }
  }
}
function p(e, t) {
  const n3 = e.GeometryInfo.new();
  t.geometry && n3.setGeometry(u2(e, t.geometry));
  const a2 = t.displayOptimization;
  if (a2) {
    const { index: t2, parentColumn: r2 } = a2, o3 = (e2) => null != r2 ? [r2, e2].join(".") : e2;
    if ("z" === t2.type) {
      const a3 = e.DisplayOptimizationZBuilder.new();
      a3.setCodeField(o3(t2.code)), a3.setXColumn(o3(t2.xColumn)), a3.setYColumn(o3(t2.yColumn)), a3.setCooordinatePrecision(t2.coordinatePrecision), a3.setFullExtent(t2.fullExtent), a3.setSpatialReference(t2.wkid, t2.wkt), a3.setHasZ(!!t2.zColumn), a3.setHasM(!!t2.mColumn), n3.setOptmizationZ(a3);
    }
    if ("xz" === t2.type) {
      const a3 = c2(e, t2.geometryType), r3 = e.DisplayOptimizationXZBuilder.new();
      r3.setCodeField(o3(t2.code)), r3.setEncoding(t2.encoding), r3.setFullExtent(t2.fullExtent), r3.setGeometryType(a3), r3.setSpatialReference(t2.wkid, t2.wkt), r3.setMaxLevel(t2.maxLevel), r3.setHasZ(t2.hasZ ?? false), r3.setHasM(t2.hasM ?? false);
      for (const n4 of t2.levels ?? []) {
        const [t3, a4] = n4.transform.translate, [s5, i2] = n4.transform.scale, l3 = new Float64Array([t3, a4]), c3 = new Float64Array([s5, i2]), u3 = o3(n4.column);
        r3.addLevel(e.MultiscaleGeometryField.new(n4.level, n4.scale, u3, l3, c3));
      }
      n3.setOptmizationXZ(r3);
    }
  }
  return n3;
}
async function d(e, n3 = {}) {
  const a2 = await s(), o3 = i(n3.getCustomParameters), s5 = l2(n3.getCustomParameters), c3 = n3.geometryInfo ? p(a2, n3.geometryInfo) : null;
  try {
    return await a2.ParquetFile.fromUrl(e, o3, s5, c3);
  } catch (u3) {
    throw new r("parquet", "Failed to parse file", { error: u3 });
  }
}
function y(e) {
  const t = e.keyValueMetadata("geo");
  return null != t ? JSON.parse(t) : null;
}
function m2(e) {
  if (e.keyValueMetadata("esri")) throw new r("parquet:unsupported", "File was created using an unsupported experimental display index. Please regenerate the file.");
  const n3 = e.keyValueMetadata("geodisplay");
  if (null != n3) return JSON.parse(n3);
  const a2 = e.keyValueMetadata("org.apache.spark.sql.parquet.row.metadata");
  if (null != a2) {
    const e2 = JSON.parse(a2);
    for (const n4 of e2.fields) if (null != n4.metadata && "type" in n4.metadata && ("xz" === n4.metadata.type || "z" === n4.metadata.type)) {
      const e3 = { parentColumn: n4.name, index: n4.metadata };
      if ("xz" === e3.index.type && (e3.index.geometryType = e3.index.geometryType.toLowerCase(), "esri-pbf" === e3.index.encoding && (e3.index.encoding = "esriPBF"), "esriPBF" !== e3.index.encoding)) throw new r("parquet:unsupported", `Encoding for display index must be of type esriPBF, but found ${e3.index.encoding}`);
      return e3;
    }
  }
  return null;
}

// node_modules/@arcgis/core/layers/support/parquetUtils.js
var m3 = new o({ esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint" });
var f2 = /* @__PURE__ */ new Set(["uncompressed", "snappy", "gzip"]);
function d2(e) {
  return m3.toJSON(e);
}
function y2(e) {
  return m3.fromJSON(e);
}
async function w(e, o3 = {}) {
  if (e.urls.length < 1) throw new r("parquet:bad-input", "At least one url must be specified", e);
  if (e.geometryType && e.spatialReference && e.geometryEncoding && e.fields) return e;
  const s5 = await d(e.urls.getItemAt(0), { getCustomParameters: () => o3.customParameters });
  for (const n3 of s5.compressionCodecs()) if (!f2.has(n3)) throw new r("parquet:unsupported", `Compression codec ${n3} is unsupported. Must be of type ${Array.from(f2).join(",")}`);
  const l3 = y(s5), c3 = __spreadProps(__spreadValues({}, e), { file: s5 });
  if (null == c3.fields && (c3.fields = s5.fields(false).map((e2) => m.fromJSON({ name: e2.name, alias: e2.name, type: e2.type }))), null != c3.geometryEncoding) {
    const e2 = c3.geometryEncoding;
    switch (e2.type) {
      case "wkb": {
        const o4 = c3.fields.find((t) => t.name === e2.field);
        if (!o4) throw new r("parquet:unsupported", `Geometry encoding references field ${e2.field} which does not exist`);
        if ("blob" !== o4.type) throw new r("parquet:unsupported", `Invalid field type for geometry encoding. Found ${o4.type} but expected 'blob'`);
        break;
      }
      case "location":
        for (const o4 of [e2.xField, e2.yField]) if (null != o4) {
          const e3 = c3.fields.find((e4) => e4.name === o4);
          if (!e3) throw new r("parquet:unsupported", `Geometry encoding references field ${o4} which does not exist`);
          if (!Fe(e3)) throw new r("parquet:unsupported", `Invalid field type for location geometry encoding. Found ${e3.type} but expected a numeric`);
        }
    }
  }
  null == c3.geometryEncoding && (c3.geometryEncoding = b(l3, c3.fields));
  const m4 = m2(s5);
  if (m4 && (c3.displayOptimization = m4), c3.geometryEncoding) switch (c3.geometryEncoding.type) {
    case "location":
      null == c3.spatialReference && (c3.spatialReference = S.WGS84), null == c3.geometryType && (c3.geometryType = "point");
      break;
    case "wkb": {
      if (!l3) return c3;
      const e2 = l3.primary_column, t = l3.columns[e2];
      if (c3.geometryType || (c3.geometryType = j(t)), c3.spatialReference || (c3.spatialReference = k(t)), c3.fields) for (const o4 of Object.keys(l3.columns)) c3.fields = c3.fields.filter((e3) => e3.name !== o4);
    }
  }
  if (c3.displayOptimization) {
    const e2 = c3.displayOptimization.index;
    if (!c3.spatialReference && e2.wkid && (c3.spatialReference = new S({ wkid: e2.wkid })), !c3.geometryType) switch (e2.type) {
      case "z":
        c3.geometryType = "point";
        break;
      case "xz":
        c3.geometryType = e2.geometryType;
    }
  }
  return c3;
}
function b(e, t) {
  if (null != e) {
    const t2 = e.primary_column, o4 = e.columns[t2];
    return new s3({ field: t2, orientation: "counterclockwise" === o4.orientation ? "counter-clockwise" : null });
  }
  const o3 = t.filter((e2) => Fe(e2)).map((e2) => e2.name), n3 = n2(o3);
  return n3.latitudeFieldName && n3.longitudeFieldName ? new s2({ xField: n3.longitudeFieldName, yField: n3.latitudeFieldName }) : null;
}
function h(e) {
  switch (e) {
    case "Point":
      return "point";
    case "Polygon":
    case "MultiPolygon":
      return "polygon";
    case "LineString":
      return "polyline";
    case "MultiPoint":
      return "multipoint";
    default:
      return null;
  }
}
function j(e) {
  const { geometry_types: o3 } = e, n3 = /* @__PURE__ */ new Set();
  for (const t of o3) {
    const e2 = h(t);
    e2 && n3.add(e2);
  }
  if (n3.size > 1) throw new r("parquet:unsupported", "Parquet mixed geometry types are not supported", { geometryTypes: n3 });
  return 1 === n3.size ? n3.values().next().value : void 0;
}
function k(e) {
  const t = e.crs?.id?.code;
  return t && "number" == typeof t ? new S({ wkid: t }) : void 0;
}

export {
  s2 as s,
  s3 as s2,
  d,
  y,
  m3 as m,
  d2,
  y2,
  w
};
//# sourceMappingURL=chunk-G7S3CVZV.js.map
