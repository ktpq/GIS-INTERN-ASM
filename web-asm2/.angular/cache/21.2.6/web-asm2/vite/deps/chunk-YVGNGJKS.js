import {
  e
} from "./chunk-IX44BN2R.js";
import {
  c,
  h,
  l
} from "./chunk-HKAEXOPY.js";
import {
  B,
  C,
  U,
  q
} from "./chunk-WNCWSSLK.js";
import {
  t
} from "./chunk-5AVTDH3Y.js";
import {
  o
} from "./chunk-W5GOZNVR.js";
import {
  s
} from "./chunk-2DNVIDFH.js";
import {
  has,
  n2 as n
} from "./chunk-6SPQI6I6.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/views/2d/engine/flow/dataUtils.js
var s2 = () => n.getLogger("esri.views.2d.engine.flow.dataUtils");
var i = 10;
async function c2(t3, e3, c4, u4, f3) {
  const w2 = performance.now();
  c(c4);
  const V = a(h(e3, c4), e3), d2 = performance.now(), x = l(e3, V, c4.width, c4.height, u4), M = performance.now(), g2 = m(x), D2 = performance.now(), b2 = "Streamlines" === t3 ? h2(g2, i, x) : p(g2, x), y2 = performance.now();
  return has("esri-2d-profiler") && (s2().info("I.1", "_createFlowFieldFromData (ms)", Math.round(d2 - w2)), s2().info("I.2", "_getStreamlines (ms)", Math.round(M - d2)), s2().info("I.3", "createAnimatedLinesData (ms)", Math.round(D2 - M)), s2().info("I.4", "create{Streamlines|Particles}Mesh (ms)", Math.round(y2 - D2)), s2().info("I.5", "createFlowMesh (ms)", Math.round(y2 - w2)), s2().info("I.6", "Mesh size (bytes)", b2.vertexData.buffer.byteLength + b2.indexData.buffer.byteLength)), await Promise.resolve(), s(f3), b2;
}
function a(t3, n4) {
  const { perturb: e3 } = n4;
  if (e3) {
    const { rotation: n5 } = e3;
    null != n5 && (t3 = u(t3, n5));
    const { scale: r2 } = e3;
    null != r2 && (t3 = f(t3, r2));
  }
  return t3;
}
function u(t3, n4) {
  const e3 = Math.cos(n4), r2 = Math.sin(n4);
  return (n5, o3) => {
    const [l2, s4] = t3(n5, o3);
    return [e3 * l2 + r2 * s4, -r2 * l2 + e3 * s4];
  };
}
function f(t3, n4) {
  return (e3, r2) => {
    const [o3, l2] = t3(e3, r2);
    return [o3 * n4, l2 * n4];
  };
}
function m(t3) {
  const n4 = t3.reduce((t4, n5) => t4 + n5.vertices.length, 0), e3 = new Float32Array(4 * n4), r2 = new Array(t3.length);
  let o3 = 0, l2 = 0;
  for (const { vertices: s4 } of t3) {
    const t4 = o3;
    for (const n5 of s4) e3[4 * o3] = n5.x, e3[4 * o3 + 1] = n5.y, e3[4 * o3 + 2] = n5.time, e3[4 * o3 + 3] = n5.speed, o3++;
    r2[l2++] = { startVertex: t4, numberOfVertices: s4.length, firstTime: s4[0].time, lastTime: s4[s4.length - 1].time };
  }
  return { lineVertices: e3, lineDescriptors: r2 };
}
function h2(t3, n4, r2) {
  const o3 = 9, { lineVertices: l2, lineDescriptors: s4 } = t3;
  let i3 = 0, c4 = 0;
  for (const e3 of s4) {
    i3 += 2 * e3.numberOfVertices;
    c4 += 6 * (e3.numberOfVertices - 1);
  }
  const a4 = new Float32Array(i3 * o3), u4 = new Uint32Array(c4);
  let f3 = 0, m3 = 0;
  function h4() {
    u4[m3++] = f3 - 2, u4[m3++] = f3, u4[m3++] = f3 - 1, u4[m3++] = f3, u4[m3++] = f3 + 1, u4[m3++] = f3 - 1;
  }
  function p3(t4, n5, e3, r3, l3, s5, i4, c5) {
    const u5 = f3 * o3;
    let m4 = 0;
    a4[u5 + m4++] = t4, a4[u5 + m4++] = n5, a4[u5 + m4++] = 1, a4[u5 + m4++] = e3, a4[u5 + m4++] = s5, a4[u5 + m4++] = i4, a4[u5 + m4++] = r3 / 2, a4[u5 + m4++] = l3 / 2, a4[u5 + m4++] = c5, f3++, a4[u5 + m4++] = t4, a4[u5 + m4++] = n5, a4[u5 + m4++] = -1, a4[u5 + m4++] = e3, a4[u5 + m4++] = s5, a4[u5 + m4++] = i4, a4[u5 + m4++] = -r3 / 2, a4[u5 + m4++] = -l3 / 2, a4[u5 + m4++] = c5, f3++;
  }
  for (const e3 of s4) {
    const { firstTime: t4, lastTime: r3 } = e3;
    let o4 = null, s5 = null, i4 = null, c5 = null, a5 = null, u5 = null;
    for (let f4 = 0; f4 < e3.numberOfVertices; f4++) {
      const m4 = l2[4 * (e3.startVertex + f4)], w3 = l2[4 * (e3.startVertex + f4) + 1], V = l2[4 * (e3.startVertex + f4) + 2], d2 = l2[4 * (e3.startVertex + f4) + 3];
      let x = null, M = null, g2 = null, D2 = null;
      if (f4 > 0) {
        x = m4 - o4, M = w3 - s5;
        const e4 = Math.sqrt(x * x + M * M);
        if (x /= e4, M /= e4, f4 > 1) {
          let t5 = x + a5, e5 = M + u5;
          const r4 = Math.sqrt(t5 * t5 + e5 * e5);
          t5 /= r4, e5 /= r4;
          const o5 = Math.min(1 / (t5 * x + e5 * M), n4);
          t5 *= o5, e5 *= o5, g2 = -e5, D2 = t5;
        } else g2 = -M, D2 = x;
        null !== g2 && null !== D2 && (p3(o4, s5, i4, g2, D2, t4, r3, d2), h4());
      }
      o4 = m4, s5 = w3, i4 = V, a5 = x, u5 = M, c5 = d2;
    }
    p3(o4, s5, i4, -u5, a5, t4, r3, c5);
  }
  const w2 = e(r2);
  return { vertexData: a4, indexData: u4, pathData: w2 };
}
function p(t3, n4) {
  const r2 = 16, o3 = 1, l2 = 2, { lineVertices: s4, lineDescriptors: i3 } = t3;
  let c4 = 0, a4 = 0;
  for (const e3 of i3) {
    const t4 = e3.numberOfVertices - 1;
    c4 += 4 * t4 * 2, a4 += 6 * t4 * 2;
  }
  const u4 = new Float32Array(c4 * r2), f3 = new Uint32Array(a4);
  let m3, h4, p3, w2, V, d2, x, M, g2, D2, b2, y2, v2, A2, F = 0, I2 = 0;
  function O() {
    f3[I2++] = F - 8, f3[I2++] = F - 7, f3[I2++] = F - 6, f3[I2++] = F - 7, f3[I2++] = F - 5, f3[I2++] = F - 6, f3[I2++] = F - 4, f3[I2++] = F - 3, f3[I2++] = F - 2, f3[I2++] = F - 3, f3[I2++] = F - 1, f3[I2++] = F - 2;
  }
  function T(t4, n5, e3, s5, i4, c5, a5, f4, m4, h5, p4, w3, V2, d3) {
    const x2 = F * r2;
    let M2 = 0;
    for (const r3 of [o3, l2]) for (const o4 of [1, 2, 3, 4]) u4[x2 + M2++] = t4, u4[x2 + M2++] = n5, u4[x2 + M2++] = e3, u4[x2 + M2++] = s5, u4[x2 + M2++] = a5, u4[x2 + M2++] = f4, u4[x2 + M2++] = m4, u4[x2 + M2++] = h5, u4[x2 + M2++] = r3, u4[x2 + M2++] = o4, u4[x2 + M2++] = V2, u4[x2 + M2++] = d3, u4[x2 + M2++] = i4 / 2, u4[x2 + M2++] = c5 / 2, u4[x2 + M2++] = p4 / 2, u4[x2 + M2++] = w3 / 2, F++;
  }
  function j(t4, n5) {
    let e3 = g2 + b2, r3 = D2 + y2;
    const o4 = Math.sqrt(e3 * e3 + r3 * r3);
    e3 /= o4, r3 /= o4;
    const l3 = g2 * e3 + D2 * r3;
    e3 /= l3, r3 /= l3;
    let s5 = b2 + v2, i4 = y2 + A2;
    const c5 = Math.sqrt(s5 * s5 + i4 * i4);
    s5 /= c5, i4 /= c5;
    const a5 = b2 * s5 + y2 * i4;
    s5 /= a5, i4 /= a5, T(m3, h4, p3, w2, -r3, e3, V, d2, x, M, -i4, s5, t4, n5), O();
  }
  function q2(t4, n5, e3, r3, o4, l3) {
    if (g2 = b2, D2 = y2, b2 = v2, y2 = A2, null == g2 && null == D2 && (g2 = b2, D2 = y2), null != V && null != d2) {
      v2 = t4 - V, A2 = n5 - d2;
      const e4 = Math.sqrt(v2 * v2 + A2 * A2);
      v2 /= e4, A2 /= e4;
    }
    null != g2 && null != D2 && j(o4, l3), m3 = V, h4 = d2, p3 = x, w2 = M, V = t4, d2 = n5, x = e3, M = r3;
  }
  function L(t4, n5) {
    g2 = b2, D2 = y2, b2 = v2, y2 = A2, null == g2 && null == D2 && (g2 = b2, D2 = y2), null != g2 && null != D2 && j(t4, n5);
  }
  for (const e3 of i3) {
    m3 = null, h4 = null, p3 = null, w2 = null, V = null, d2 = null, x = null, M = null, g2 = null, D2 = null, b2 = null, y2 = null, v2 = null, A2 = null;
    const { firstTime: t4, lastTime: n5 } = e3;
    for (let r3 = 0; r3 < e3.numberOfVertices; r3++) {
      q2(s4[4 * (e3.startVertex + r3)], s4[4 * (e3.startVertex + r3) + 1], s4[4 * (e3.startVertex + r3) + 2], s4[4 * (e3.startVertex + r3) + 3], t4, n5);
    }
    L(t4, n5);
  }
  const U2 = e(n4);
  return { vertexData: u4, indexData: f3, pathData: U2 };
}

// node_modules/@arcgis/core/renderers/support/colorRampUtils.js
var n2 = ["random", "ndvi", "ndvi2", "ndvi3", "elevation", "gray", "hillshade"];
var C2 = [{ id: "aspect", type: "multipart", colorRamps: [{ fromColor: [190, 190, 190], toColor: [255, 45, 8] }, { fromColor: [255, 45, 8], toColor: [255, 181, 61] }, { fromColor: [255, 181, 61], toColor: [255, 254, 52] }, { fromColor: [255, 254, 52], toColor: [0, 251, 50] }, { fromColor: [0, 251, 50], toColor: [255, 254, 52] }, { fromColor: [0, 253, 255], toColor: [0, 181, 255] }, { fromColor: [0, 181, 255], toColor: [26, 35, 253] }, { fromColor: [26, 35, 253], toColor: [255, 57, 251] }, { fromColor: [255, 57, 251], toColor: [255, 45, 8] }] }, { id: "black-to-white", fromColor: [0, 0, 0], toColor: [255, 255, 255] }, { id: "blue-bright", fromColor: [204, 204, 255], toColor: [0, 0, 224] }, { id: "blue-light-to-dark", fromColor: [211, 229, 232], toColor: [46, 100, 140] }, { id: "blue-green-bright", fromColor: [203, 245, 234], toColor: [48, 207, 146] }, { id: "blue-green-light-to-dark", fromColor: [216, 242, 237], toColor: [21, 79, 74] }, { id: "brown-light-to-dark", fromColor: [240, 236, 170], toColor: [102, 72, 48] }, { id: "brown-to-blue-green-diverging-right", type: "multipart", colorRamps: [{ fromColor: [156, 85, 31], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [33, 130, 145] }] }, { id: "brown-to-blue-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [110, 70, 45], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [48, 100, 102] }] }, { id: "coefficient-bias", fromColor: [214, 214, 255], toColor: [0, 57, 148] }, { id: "cold-to-hot-diverging", type: "multipart", colorRamps: [{ fromColor: [69, 117, 181], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [214, 47, 39] }] }, { id: "condition-number", type: "multipart", colorRamps: [{ fromColor: [0, 97, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 34, 0] }] }, { id: "cyan-to-purple", type: "multipart", colorRamps: [{ fromColor: [0, 245, 245], toColor: [0, 0, 245] }, { fromColor: [0, 0, 245], toColor: [245, 0, 245] }] }, { id: "cyan-light-to-blue-dark", type: "multipart", colorRamps: [{ fromColor: [182, 237, 240], toColor: [31, 131, 224] }, { fromColor: [31, 131, 224], toColor: [9, 9, 145] }] }, { id: "distance", fromColor: [255, 200, 0], toColor: [0, 0, 255] }, { id: "elevation1", type: "multipart", colorRamps: [{ fromColor: [175, 240, 233], toColor: [255, 255, 179] }, { fromColor: [255, 255, 179], toColor: [0, 128, 64] }, { fromColor: [0, 128, 64], toColor: [252, 186, 3] }, { fromColor: [252, 186, 3], toColor: [128, 0, 0] }, { fromColor: [120, 0, 0], toColor: [105, 48, 13] }, { fromColor: [105, 48, 13], toColor: [171, 171, 171] }, { fromColor: [171, 171, 171], toColor: [255, 252, 255] }] }, { id: "elevation2", type: "multipart", colorRamps: [{ fromColor: [118, 219, 211], toColor: [255, 255, 199] }, { fromColor: [255, 255, 199], toColor: [255, 255, 128] }, { fromColor: [255, 255, 128], toColor: [217, 194, 121] }, { fromColor: [217, 194, 121], toColor: [135, 96, 38] }, { fromColor: [135, 96, 38], toColor: [150, 150, 181] }, { fromColor: [150, 150, 181], toColor: [181, 150, 181] }, { fromColor: [181, 150, 181], toColor: [255, 252, 255] }] }, { id: "errors", fromColor: [255, 235, 214], toColor: [196, 10, 10] }, { id: "gray-light-to-dark", fromColor: [219, 219, 219], toColor: [69, 69, 69] }, { id: "green-bright", fromColor: [204, 255, 204], toColor: [14, 204, 14] }, { id: "green-light-to-dark", fromColor: [220, 245, 233], toColor: [34, 102, 51] }, { id: "green-to-blue", type: "multipart", colorRamps: [{ fromColor: [32, 204, 16], toColor: [0, 242, 242] }, { fromColor: [0, 242, 242], toColor: [2, 33, 227] }] }, { id: "orange-bright", fromColor: [255, 235, 204], toColor: [240, 118, 5] }, { id: "orange-light-to-dark", fromColor: [250, 233, 212], toColor: [171, 65, 36] }, { id: "partial-spectrum", type: "multipart", colorRamps: [{ fromColor: [242, 241, 162], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }, { fromColor: [252, 3, 69], toColor: [176, 7, 237] }, { fromColor: [176, 7, 237], toColor: [2, 29, 173] }] }, { id: "partial-spectrum-1-diverging", type: "multipart", colorRamps: [{ fromColor: [135, 38, 38], toColor: [240, 149, 12] }, { fromColor: [240, 149, 12], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [74, 80, 181] }, { fromColor: [74, 80, 181], toColor: [39, 32, 122] }] }, { id: "partial-spectrum-2-diverging", type: "multipart", colorRamps: [{ fromColor: [115, 77, 42], toColor: [201, 137, 52] }, { fromColor: [201, 137, 52], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [91, 63, 176] }, { fromColor: [91, 63, 176], toColor: [81, 13, 97] }] }, { id: "pink-to-yellow-green-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [158, 30, 113], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [99, 110, 45] }] }, { id: "pink-to-yellow-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [97, 47, 73], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [22, 59, 15] }] }, { id: "precipitation", type: "multipart", colorRamps: [{ fromColor: [194, 82, 60], toColor: [237, 161, 19] }, { fromColor: [237, 161, 19], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 219, 0] }, { fromColor: [0, 219, 0], toColor: [32, 153, 143] }, { fromColor: [32, 153, 143], toColor: [11, 44, 122] }] }, { id: "prediction", type: "multipart", colorRamps: [{ fromColor: [40, 146, 199], toColor: [250, 250, 100] }, { fromColor: [250, 250, 100], toColor: [232, 16, 20] }] }, { id: "purple-bright", fromColor: [255, 204, 255], toColor: [199, 0, 199] }, { id: "purple-to-green-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [77, 32, 150], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [20, 122, 11] }] }, { id: "purple-to-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [67, 14, 89], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [24, 79, 15] }] }, { id: "purple-blue-bright", fromColor: [223, 184, 230], toColor: [112, 12, 242] }, { id: "purple-blue-light-to-dark", fromColor: [229, 213, 242], toColor: [93, 44, 112] }, { id: "purple-red-bright", fromColor: [255, 204, 225], toColor: [199, 0, 99] }, { id: "purple-red-light-to-dark", fromColor: [250, 215, 246], toColor: [143, 17, 57] }, { id: "red-bright", fromColor: [255, 204, 204], toColor: [219, 0, 0] }, { id: "red-light-to-dark", fromColor: [255, 224, 224], toColor: [143, 10, 10] }, { id: "red-to-blue-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [196, 69, 57], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [48, 95, 207] }] }, { id: "red-to-blue-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [107, 13, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [13, 53, 97] }] }, { id: "red-to-green", type: "multipart", colorRamps: [{ fromColor: [245, 0, 0], toColor: [245, 245, 0] }, { fromColor: [245, 245, 0], toColor: [0, 245, 0] }] }, { id: "red-to-green-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [186, 20, 20], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [54, 145, 33] }] }, { id: "red-to-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [97, 21, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [16, 69, 16] }] }, { id: "slope", type: "multipart", colorRamps: [{ fromColor: [56, 168, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }, { id: "spectrum-full-bright", type: "multipart", colorRamps: [{ fromColor: [255, 0, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 0, 255] }] }, { id: "spectrum-full-dark", type: "multipart", colorRamps: [{ fromColor: [153, 0, 0], toColor: [153, 153, 0] }, { fromColor: [153, 153, 0], toColor: [0, 153, 153] }, { fromColor: [0, 153, 153], toColor: [0, 0, 153] }] }, { id: "spectrum-full-light", type: "multipart", colorRamps: [{ fromColor: [255, 153, 153], toColor: [255, 255, 153] }, { fromColor: [255, 255, 153], toColor: [153, 255, 255] }, { fromColor: [153, 255, 255], toColor: [153, 153, 255] }] }, { id: "surface", type: "multipart", colorRamps: [{ fromColor: [112, 153, 89], toColor: [242, 238, 162] }, { fromColor: [242, 238, 162], toColor: [242, 206, 133] }, { fromColor: [242, 206, 133], toColor: [194, 140, 124] }, { fromColor: [194, 140, 124], toColor: [255, 242, 255] }] }, { id: "temperature", type: "multipart", colorRamps: [{ fromColor: [255, 252, 255], toColor: [255, 0, 255] }, { fromColor: [255, 0, 255], toColor: [0, 0, 255] }, { fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 255, 0] }, { fromColor: [0, 255, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 128, 0] }, { fromColor: [255, 128, 0], toColor: [128, 0, 0] }] }, { id: "white-to-black", fromColor: [255, 255, 255], toColor: [0, 0, 0] }, { id: "yellow-to-dark-red", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [242, 167, 46] }, { fromColor: [242, 167, 46], toColor: [107, 0, 0] }] }, { id: "yellow-to-green-to-dark-blue", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [56, 224, 9] }, { fromColor: [56, 224, 9], toColor: [26, 147, 171] }, { fromColor: [26, 147, 171], toColor: [12, 16, 120] }] }, { id: "yellow-to-red", fromColor: [245, 245, 0], toColor: [255, 0, 0] }, { id: "yellow-green-bright", fromColor: [236, 252, 204], toColor: [157, 204, 16] }, { id: "yellow-green-light-to-dark", fromColor: [215, 240, 175], toColor: [96, 107, 45] }];
var m2 = new o({ Aspect: "aspect", "Black to White": "black-to-white", "Blue Bright": "blue-bright", "Blue Light to Dark": "blue-light-to-dark", "Blue-Green Bright": "blue-green-bright", "Blue-Green Light to Dark": "blue-green-light-to-dark", "Brown Light to Dark": "brown-light-to-dark", "Brown to Blue Green Diverging, Bright": "brown-to-blue-green-diverging-right", "Brown to Blue Green Diverging, Dark": "brown-to-blue-green-diverging-dark", "Coefficient Bias": "coefficient-bias", "Cold to Hot Diverging": "cold-to-hot-diverging", "Condition Number": "condition-number", "Cyan to Purple": "cyan-to-purple", "Cyan-Light to Blue-Dark": "cyan-light-to-blue-dark", Distance: "distance", "Elevation #1": "elevation1", "Elevation #2": "elevation2", Errors: "errors", "Gray Light to Dark": "gray-light-to-dark", "Green Bright": "green-bright", "Green Light to Dark": "green-light-to-dark", "Green to Blue": "green-to-blue", "Orange Bright": "orange-bright", "Orange Light to Dark": "orange-light-to-dark", "Partial Spectrum": "partial-spectrum", "Partial Spectrum 1 Diverging": "partial-spectrum-1-diverging", "Partial Spectrum 2 Diverging": "partial-spectrum-2-diverging", "Pink to YellowGreen Diverging, Bright": "pink-to-yellow-green-diverging-bright", "Pink to YellowGreen Diverging, Dark": "pink-to-yellow-green-diverging-dark", Precipitation: "precipitation", Prediction: "prediction", "Purple Bright": "purple-bright", "Purple to Green Diverging, Bright": "purple-to-green-diverging-bright", "Purple to Green Diverging, Dark": "purple-to-green-diverging-dark", "Purple-Blue Bright": "purple-blue-bright", "Purple-Blue Light to Dark": "purple-blue-light-to-dark", "Purple-Red Bright": "purple-red-bright", "Purple-Red Light to Dark": "purple-red-light-to-dark", "Red Bright": "red-bright", "Red Light to Dark": "red-light-to-dark", "Red to Blue Diverging, Bright": "red-to-blue-diverging-bright", "Red to Blue Diverging, Dark": "red-to-blue-diverging-dark", "Red to Green": "red-to-green", "Red to Green Diverging, Bright": "red-to-green-diverging-bright", "Red to Green Diverging, Dark": "red-to-green-diverging-dark", Slope: "slope", "Spectrum-Full Bright": "spectrum-full-bright", "Spectrum-Full Dark": "spectrum-full-dark", "Spectrum-Full Light": "spectrum-full-light", Surface: "surface", Temperature: "temperature", "White to Black": "white-to-black", "Yellow to Dark Red": "yellow-to-dark-red", "Yellow to Green to Dark Blue": "yellow-to-green-to-dark-blue", "Yellow to Red": "yellow-to-red", "Yellow-Green Bright": "yellow-green-bright", "Yellow-Green Light to Dark": "yellow-green-light-to-dark" });
function a2(o3, r2) {
  if (!o3 || !r2 || o3.length !== r2.length) return false;
  for (let t3 = 0; t3 < o3.length; t3++) if (o3[t3] > r2[t3] + 2 || o3[t3] < r2[t3] - 2) return false;
  return true;
}
function g(o3) {
  const r2 = o3.clone();
  return r2.fromColor = o3.toColor, r2.toColor = o3.fromColor, r2;
}
function p2(o3) {
  if ("multipart" === o3.type) {
    const r2 = o3.clone();
    return r2.colorRamps?.length ? (r2.colorRamps = r2.colorRamps.reverse().map((o4) => g(o4)), r2) : r2;
  }
  return g(o3);
}
function u2(o3, r2) {
  const t3 = r2 ?? C2;
  if ("algorithmic" === o3.type) {
    const r3 = o3.fromColor.toRgb(), l3 = o3.toColor.toRgb();
    return t3.find((o4) => a2(r3, o4.fromColor) && a2(l3, o4.toColor))?.id;
  }
  if (o3.weights?.length) return;
  const l2 = o3.colorRamps?.map((o4) => ({ fromColor: o4.fromColor.toRgb(), toColor: o4.toColor.toRgb() }));
  return t3.find((o4) => {
    const r3 = o4.colorRamps;
    return !(!l2 || l2.length !== r3?.length) && r3.every((o5, r4) => a2(l2[r4].fromColor, o5.fromColor) && a2(l2[r4].toColor, o5.toColor));
  })?.id;
}
function f2(o3, r2, t3 = false) {
  if (!o3) return;
  let l2 = false, e3 = u2(o3, r2);
  return null != e3 || t3 || (l2 = true, e3 = u2(o3 = p2(o3), r2)), e3 ? { id: e3, inverted: l2 } : void 0;
}
function s3(o3, r2 = false) {
  const t3 = "string" == typeof o3 ? o3 : f2(o3, void 0, r2)?.id;
  return t3 ? m2.toJSON(t3) : null;
}
function d(o3, r2 = "esriCIELabAlgorithm") {
  const t3 = C2.find(({ id: r3 }) => r3 === o3);
  return t3 ? t3.colorRamps ? { type: "multipart", colorRamps: t3.colorRamps.map((o4) => ({ type: "algorithmic", algorithm: r2, fromColor: [...o4.fromColor], toColor: [...o4.toColor] })) } : { type: "algorithmic", algorithm: r2, fromColor: [...t3.fromColor], toColor: [...t3.toColor] } : null;
}
function c3(o3) {
  o3 ??= {};
  const r2 = o3.numColors || 256, t3 = o3.distanceOffset || 0, l2 = null != o3.isCustomInterval ? o3.isCustomInterval : null !== o3.distanceInterval && o3.distanceInterval !== 1 / (r2 - 1), e3 = o3.distanceInterval || 1 / (r2 - 1);
  return __spreadProps(__spreadValues({}, o3), { numColors: r2, distanceOffset: t3, interpolateAlpha: !!o3.interpolateAlpha, distanceInterval: e3, isCustomInterval: l2, weights: o3.weights });
}
function h3(o3, r2, t3) {
  const { numColors: l2, distanceOffset: e3, distanceInterval: i3, isCustomInterval: n4 } = t3, C3 = 0 === o3.s, m3 = 0 === r2.s;
  let a4 = o3.h, g2 = r2.h;
  C3 && !m3 ? a4 = g2 : m3 && !C3 && (r2 = __spreadProps(__spreadValues({}, r2), { h: a4 }), g2 = a4);
  let p3 = Math.abs(g2 - a4), u4 = 0;
  const f3 = 360;
  p3 < f3 / 2 ? u4 = (g2 - a4) * i3 : (p3 = f3 - p3, u4 = a4 > g2 ? p3 * i3 : -p3 * i3);
  const s4 = (r2.s - o3.s) * i3, d2 = (r2.v - o3.v) * i3;
  let { s: c4, v: h4 } = o3, b2 = a4;
  if (e3) {
    const o4 = e3 / i3;
    b2 = (b2 + o4 * u4 + f3) % f3, c4 += o4 * s4, h4 += o4 * d2;
  }
  const v2 = [];
  for (let y2 = 0; y2 < l2 - 1; y2++) v2.push({ h: b2, s: c4, v: h4 }), b2 = (b2 + u4 + f3) % f3, c4 += s4, h4 += d2;
  return v2.push(n4 ? { h: b2, s: c4, v: h4 } : r2), v2;
}
function b(o3, r2, t3) {
  const { numColors: l2, distanceOffset: e3, distanceInterval: i3, isCustomInterval: n4 } = t3;
  let { l: C3, a: m3, b: a4 } = o3;
  const g2 = (r2.l - C3) * i3, p3 = (r2.a - m3) * i3, u4 = (r2.b - a4) * i3, f3 = [];
  if (e3) {
    const o4 = e3 / i3;
    C3 += o4 * g2, m3 += o4 * p3, a4 += o4 * u4;
  }
  for (let s4 = 0; s4 < l2 - 1; s4++) f3.push({ l: C3, a: m3, b: a4 }), C3 += g2, m3 += p3, a4 += u4;
  return f3.push(n4 ? { l: C3, a: m3, b: a4 } : r2), f3;
}
function v(o3, r2, t3) {
  const { numColors: l2, distanceOffset: e3, distanceInterval: i3, isCustomInterval: n4 } = t3, C3 = o3.h, m3 = r2.h, a4 = 2 * Math.PI;
  let g2 = 0;
  if (C3 <= m3) {
    const o4 = m3 - C3, r3 = m3 - C3 - a4;
    g2 = Math.abs(r3) < Math.abs(o4) ? r3 : o4;
  } else {
    const o4 = m3 + a4 - C3, r3 = m3 - C3;
    g2 = Math.abs(r3) < Math.abs(o4) ? r3 : o4;
  }
  const p3 = g2 * i3, u4 = (r2.l - o3.l) * i3, f3 = (r2.c - o3.c) * i3;
  let { l: s4, c: d2, h: c4 } = o3;
  if (e3) {
    const o4 = e3 / i3;
    s4 += o4 * u4, d2 += o4 * f3, c4 = (c4 + o4 * p3 + a4) % a4;
  }
  const h4 = [];
  for (let b2 = 0; b2 < l2 - 1; b2++) h4.push({ l: s4, c: d2, h: c4 }), s4 += u4, d2 += f3, c4 = (c4 + p3 + a4) % a4;
  return h4.push(n4 ? { l: s4, c: d2, h: c4 } : r2), h4;
}
function y(e3, i3) {
  const { fromColor: n4, toColor: C3 } = e3, m3 = 3 === n4.length ? [...n4, 255] : [...n4], a4 = 3 === C3.length ? [...C3, 255] : [...C3], g2 = e3.algorithm || "esriCIELabAlgorithm", p3 = c3(i3), { numColors: u4, distanceOffset: f3, isCustomInterval: s4, interpolateAlpha: d2 } = p3;
  if (1 === u4 && 0 === f3) return [m3];
  if (2 === u4 && 0 === f3 && !s4) return [m3, a4];
  const y2 = { r: m3[0], g: m3[1], b: m3[2] }, k2 = { r: a4[0], g: a4[1], b: a4[2] }, R2 = "esriCIELabAlgorithm" === g2 ? b(q(y2), q(k2), p3) : "esriHSVAlgorithm" === g2 ? h3(U(y2), U(k2), p3) : v(B(y2), B(k2), p3), w2 = [], B3 = m3[3] ?? 255, D2 = ((a4[3] ?? 255) - B3) / (u4 - 1);
  for (let o3 = 0; o3 < u4; o3++) {
    const { r: r2, g: t3, b: e4 } = C(R2[o3]), i4 = d2 ? Math.round(B3 + D2 * o3) : 255;
    w2.push([r2, t3, e4, i4]);
  }
  return w2;
}
function k(o3, r2) {
  const { colorRamps: t3 } = o3;
  if (r2 ??= t3.map(({ start: o4, stop: r3 }) => null == o4 || null == r3 ? -1 : r3 - o4), r2.length !== t3.length || r2.some((o4) => o4 < 0)) return Array.from({ length: t3.length }, () => 1 / t3.length);
  const l2 = r2.reduce((o4, r3) => o4 + r3);
  return r2.map((o4) => o4 / l2);
}
function R(o3, r2) {
  const { numColors: t3, interpolateAlpha: l2 } = c3(r2), e3 = k(o3, r2?.weights), { colorRamps: i3 } = o3, n4 = [], C3 = 1 / (t3 - 1);
  let m3 = 0, a4 = false;
  for (let p3 = 0; p3 < i3.length; p3++) {
    const o4 = n4.length, r3 = a4 ? 0 : o4 * C3 - m3;
    m3 += e3[p3];
    let g3 = p3 === i3.length - 1 ? t3 - 1 - o4 : (e3[p3] - r3) / C3;
    if (a4 = Math.ceil(g3) === g3, g3 = Math.ceil(g3), 0 === g3) continue;
    const u4 = y(i3[p3], { numColors: g3, interpolateAlpha: l2, distanceOffset: r3 / e3[p3], distanceInterval: C3 / e3[p3] });
    n4.push(...u4);
  }
  const g2 = [...i3[i3.length - 1].toColor];
  return 3 === g2.length && g2.push(255), n4.push(g2), n4;
}
function w(o3, r2) {
  const t3 = t(o3) ? o3.toJSON() : o3;
  return "multipart" === t3.type ? R(t3, r2) : y(t3, r2);
}
function B2(o3, r2) {
  const t3 = w(o3, r2), l2 = r2?.interpolateAlpha;
  return t3.forEach((o4, r3) => {
    o4.unshift(r3), l2 || o4.pop();
  }), t3;
}
function D(r2) {
  const t3 = [];
  for (let l2 = 0; l2 < r2.length; l2 += 4) {
    const e3 = U({ r: r2[l2], g: r2[l2 + 1], b: r2[l2 + 2] });
    t3.push([e3.h / 60, e3.s / 100, 255 * e3.v / 100]);
  }
  return t3;
}
function I(r2) {
  const t3 = U(r2);
  return { type: "HsvColor", Hue: t3.h, Saturation: t3.s, Value: t3.v, AlphaValue: 255 };
}
function A(o3) {
  const r2 = o3.toJSON();
  return { Algorithm: r2?.Algorithm || "esriHSVAlgorithm", type: "AlgorithmicColorRamp", FromColor: I(o3.fromColor), ToColor: I(o3.toColor) };
}
function G(o3) {
  const r2 = s3(o3);
  if (!r2) return null;
  if ("algorithmic" === o3.type) return __spreadProps(__spreadValues({}, A(o3)), { Name: r2 });
  if (o3.colorRamps) {
    const t3 = o3.colorRamps.map(A);
    return { type: "MultiPartColorRamp", NumColorRamps: t3.length, ArrayOfColorRamp: t3, Name: r2 };
  }
  return null;
}
function P(o3) {
  const r2 = [...o3].reverse().map((o4) => {
    const r3 = o4.toString(16);
    return r3.length < 2 ? "0" + r3 : r3;
  });
  return 4294967295 & Number.parseInt(r2.join(""), 16);
}

// node_modules/@arcgis/core/renderers/support/rasterRendererChecks.js
function n3(n4) {
  return ["u8", "s8"].includes(n4.pixelType) && null != n4.statistics?.[0]?.min && null != n4.statistics[0]?.max && 1 === n4.bandCount;
}
function t2(t3, e3) {
  const { attributeTable: u4, bandCount: r2 } = t3;
  if (null == u4 && n3(t3)) return true;
  if (null == u4 || r2 > 1) return false;
  if (e3) {
    if (null == u4.fields.find((n4) => n4.name.toLowerCase() === e3.toLowerCase())) return false;
  }
  return true;
}
function e2(n4) {
  const { bandCount: t3, dataType: e3, pixelType: u4 } = n4;
  return "elevation" === e3 || "generic" === e3 && 1 === t3 && ("s16" === u4 || "s32" === u4 || "f32" === u4 || "f64" === u4);
}
function u3(n4, t3 = false) {
  const { bandCount: e3, colormap: u4, pixelType: r2 } = n4;
  return 1 === e3 && (!!u4?.length || !t3 && "u8" === r2);
}
function r(n4, t3 = false) {
  const { attributeTable: e3, bandCount: u4 } = n4;
  return 1 === u4 && (!t3 || null != e3 || null != n4.histograms);
}
function o2(n4) {
  const { dataType: t3 } = n4;
  return "vector-uv" === t3 || "vector-magdir" === t3;
}
function i2(n4) {
  const { dataType: t3 } = n4;
  return "vector-uv" === t3 || "vector-magdir" === t3;
}
function a3(n4) {
  return !!n4?.length && n4.length <= 16384;
}

export {
  n2 as n,
  C2 as C,
  m2 as m,
  s3 as s,
  d,
  w,
  B2 as B,
  D,
  G,
  P,
  t2 as t,
  e2 as e,
  u3 as u,
  r,
  o2 as o,
  i2 as i,
  a3 as a,
  c2 as c
};
//# sourceMappingURL=chunk-YVGNGJKS.js.map
