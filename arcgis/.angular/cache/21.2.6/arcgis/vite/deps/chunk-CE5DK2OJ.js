import {
  c as c2,
  l
} from "./chunk-Q75NH6CE.js";
import {
  o as o2
} from "./chunk-CW3EW7KK.js";
import {
  g
} from "./chunk-ARRYQO7C.js";
import {
  z2 as z
} from "./chunk-ERIUCT52.js";
import {
  _
} from "./chunk-2ZL6ZCDF.js";
import {
  S
} from "./chunk-4HQQF57Z.js";
import {
  n as n3
} from "./chunk-LHBO6K5Y.js";
import {
  n as n2
} from "./chunk-5EUDKAG7.js";
import {
  a3,
  c,
  o3 as o,
  r4 as r2
} from "./chunk-LV7AMIAU.js";
import {
  i
} from "./chunk-O4A47ZEM.js";
import {
  a as a2,
  n2 as n,
  u3 as u
} from "./chunk-POW25PFR.js";
import {
  a,
  r3 as r
} from "./chunk-IDI4VM7T.js";
import {
  __decorate
} from "./chunk-HRD6PGVX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@arcgis/core/chunks/Zlib.js
var e;
var r3 = { exports: {} };
function i2() {
  return e || (e = 1, i9 = r3, void 0 !== (t6 = (function() {
    function t7() {
      this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
    }
    return t7.prototype = { ensureBuffer: function(t8) {
      var e6 = this.buffer, r12 = e6 ? e6.byteLength : 0;
      if (t8 < r12) return e6;
      for (var i10 = 512; i10 < t8; ) i10 <<= 1;
      for (var s4 = new Uint8Array(i10), f = 0; f < r12; ++f) s4[f] = e6[f];
      return this.buffer = s4;
    }, getByte: function() {
      for (var t8 = this.pos; this.bufferLength <= t8; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    }, getBytes: function(t8) {
      var e6 = this.pos;
      if (t8) {
        this.ensureBuffer(e6 + t8);
        for (var r12 = e6 + t8; !this.eof && this.bufferLength < r12; ) this.readBlock();
        var i10 = this.bufferLength;
        r12 > i10 && (r12 = i10);
      } else {
        for (; !this.eof; ) this.readBlock();
        r12 = this.bufferLength;
      }
      return this.pos = r12, this.buffer.subarray(e6, r12);
    }, lookChar: function() {
      for (var t8 = this.pos; this.bufferLength <= t8; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    }, getChar: function() {
      for (var t8 = this.pos; this.bufferLength <= t8; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    }, makeSubStream: function(t8, e6, r12) {
      for (var i10 = t8 + e6; this.bufferLength <= i10 && !this.eof; ) this.readBlock();
      return new Stream(this.buffer, t8, e6, r12);
    }, skip: function(t8) {
      t8 || (t8 = 1), this.pos += t8;
    }, reset: function() {
      this.pos = 0;
    } }, t7;
  })(), s3 = (function() {
    if (!self || !self.Uint32Array) return null;
    var e6 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), r12 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), i10 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), s4 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], f = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
    function o8(t7) {
      throw new Error(t7);
    }
    function n11(e7) {
      var r13 = 0, i11 = e7[r13++], s5 = e7[r13++];
      -1 != i11 && -1 != s5 || o8("Invalid header in flate stream"), 8 != (15 & i11) && o8("Unknown compression method in flate stream"), ((i11 << 8) + s5) % 31 != 0 && o8("Bad FCHECK in flate stream"), 32 & s5 && o8("FDICT bit set in flate stream"), this.bytes = e7, this.bytesPos = r13, this.codeSize = 0, this.codeBuf = 0, t6.call(this);
    }
    return n11.prototype = Object.create(t6.prototype), n11.prototype.getBits = function(t7) {
      for (var e7, r13 = this.codeSize, i11 = this.codeBuf, s5 = this.bytes, f2 = this.bytesPos; r13 < t7; ) void 0 === (e7 = s5[f2++]) && o8("Bad encoding in flate stream"), i11 |= e7 << r13, r13 += 8;
      return e7 = i11 & (1 << t7) - 1, this.codeBuf = i11 >> t7, this.codeSize = r13 -= t7, this.bytesPos = f2, e7;
    }, n11.prototype.getCode = function(t7) {
      for (var e7 = t7[0], r13 = t7[1], i11 = this.codeSize, s5 = this.codeBuf, f2 = this.bytes, n12 = this.bytesPos; i11 < r13; ) {
        var a10;
        void 0 === (a10 = f2[n12++]) && o8("Bad encoding in flate stream"), s5 |= a10 << i11, i11 += 8;
      }
      var h2 = e7[s5 & (1 << r13) - 1], u6 = h2 >> 16, l5 = 65535 & h2;
      return (0 == i11 || i11 < u6 || 0 == u6) && o8("Bad encoding in flate stream"), this.codeBuf = s5 >> u6, this.codeSize = i11 - u6, this.bytesPos = n12, l5;
    }, n11.prototype.generateHuffmanTable = function(t7) {
      for (var e7 = t7.length, r13 = 0, i11 = 0; i11 < e7; ++i11) t7[i11] > r13 && (r13 = t7[i11]);
      for (var s5 = 1 << r13, f2 = new Uint32Array(s5), o9 = 1, n12 = 0, a10 = 2; o9 <= r13; ++o9, n12 <<= 1, a10 <<= 1) for (var h2 = 0; h2 < e7; ++h2) if (t7[h2] == o9) {
        var u6 = 0, l5 = n12;
        for (i11 = 0; i11 < o9; ++i11) u6 = u6 << 1 | 1 & l5, l5 >>= 1;
        for (i11 = u6; i11 < s5; i11 += a10) f2[i11] = o9 << 16 | h2;
        ++n12;
      }
      return [f2, r13];
    }, n11.prototype.readBlock = function() {
      function t7(t8, e7, r13, i11, s5) {
        for (var f2 = t8.getBits(r13) + i11; f2-- > 0; ) e7[b3++] = s5;
      }
      var n12 = this.getBits(3);
      if (1 & n12 && (this.eof = true), 0 != (n12 >>= 1)) {
        var a10, h2;
        if (1 == n12) a10 = s4, h2 = f;
        else if (2 == n12) {
          for (var u6 = this.getBits(5) + 257, l5 = this.getBits(5) + 1, c3 = this.getBits(4) + 4, d2 = Array(e6.length), b3 = 0; b3 < c3; ) d2[e6[b3++]] = this.getBits(3);
          for (var v3 = this.generateHuffmanTable(d2), g4 = 0, B2 = (b3 = 0, u6 + l5), p3 = new Array(B2); b3 < B2; ) {
            var y3 = this.getCode(v3);
            16 == y3 ? t7(this, p3, 2, 3, g4) : 17 == y3 ? t7(this, p3, 3, 3, g4 = 0) : 18 == y3 ? t7(this, p3, 7, 11, g4 = 0) : p3[b3++] = g4 = y3;
          }
          a10 = this.generateHuffmanTable(p3.slice(0, u6)), h2 = this.generateHuffmanTable(p3.slice(u6, B2));
        } else o8("Unknown block type in flate stream");
        for (var m3 = (x3 = this.buffer) ? x3.length : 0, k3 = this.bufferLength; ; ) {
          var w2 = this.getCode(a10);
          if (w2 < 256) k3 + 1 >= m3 && (m3 = (x3 = this.ensureBuffer(k3 + 1)).length), x3[k3++] = w2;
          else {
            if (256 == w2) return void (this.bufferLength = k3);
            var C3 = (w2 = r12[w2 -= 257]) >> 16;
            C3 > 0 && (C3 = this.getBits(C3)), g4 = (65535 & w2) + C3, w2 = this.getCode(h2), (C3 = (w2 = i10[w2]) >> 16) > 0 && (C3 = this.getBits(C3));
            var L3 = (65535 & w2) + C3;
            k3 + g4 >= m3 && (m3 = (x3 = this.ensureBuffer(k3 + g4)).length);
            for (var S5 = 0; S5 < g4; ++S5, ++k3) x3[k3] = x3[k3 - L3];
          }
        }
      } else {
        var A3, U3 = this.bytes, P3 = this.bytesPos;
        void 0 === (A3 = U3[P3++]) && o8("Bad block header in flate stream");
        var z2 = A3;
        void 0 === (A3 = U3[P3++]) && o8("Bad block header in flate stream"), z2 |= A3 << 8, void 0 === (A3 = U3[P3++]) && o8("Bad block header in flate stream");
        var H2 = A3;
        void 0 === (A3 = U3[P3++]) && o8("Bad block header in flate stream"), (H2 |= A3 << 8) != (65535 & ~z2) && o8("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
        var T3 = this.bufferLength, x3 = this.ensureBuffer(T3 + z2), j3 = T3 + z2;
        this.bufferLength = j3;
        for (var E3 = T3; E3 < j3; ++E3) {
          if (void 0 === (A3 = U3[P3++])) {
            this.eof = true;
            break;
          }
          x3[E3] = A3;
        }
        this.bytesPos = P3;
      }
    }, n11;
  })()) && (i9.exports = s3)), r3.exports;
  var t6, i9, s3;
}
var s = o2(i2());

// node_modules/@arcgis/core/layers/raster/formats/ImageCanvasDecoder.js
var i3 = class _i {
  constructor(t6) {
    this._canvas = null, this._ctx = null, t6 && (this._canvas = t6.canvas, this._ctx = t6.ctx || t6.canvas && t6.canvas.getContext("2d"));
  }
  decode(n11, s3, r12) {
    if (!n11 || n11.byteLength < 10) throw new r("imagecanvasdecoder: decode", "required a valid encoded data as input.");
    let { width: c3 = 0, height: h2 = 0, format: o8 } = s3;
    const { applyJpegMask: l5 } = s3;
    if (l5 && (!c3 || !h2)) throw new r("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
    return new Promise((t6, d2) => {
      let g4 = null;
      "jpg" === o8 && l5 && (g4 = _i._getMask(n11, { width: c3, height: h2 }));
      const w2 = new Blob([new Uint8Array(n11)], { type: "image/" + o8 == "jpg" ? "jpeg" : o8 }), v3 = URL.createObjectURL(w2), m3 = new Image();
      m3.src = v3, m3.onload = () => {
        if (URL.revokeObjectURL(v3), a2(r12)) return void d2(u());
        c3 = m3.width, h2 = m3.height, this._canvas && this._ctx ? (this._canvas.width === c3 && this._canvas.height === h2 || (this._canvas.width = c3, this._canvas.height = h2), this._ctx.clearRect(0, 0, c3, h2)) : (this._canvas = document.createElement("canvas"), this._canvas.width = c3, this._canvas.height = h2, this._ctx = this._canvas.getContext("2d")), this._ctx.drawImage(m3, 0, 0);
        const n12 = this._ctx.getImageData(0, 0, c3, h2), i9 = n12.data;
        if (s3.renderOnCanvas) {
          if (g4) for (let t7 = 0; t7 < g4.length; t7++) g4[t7] ? i9[4 * t7 + 3] = 255 : i9[4 * t7 + 3] = 0;
          return this._ctx.putImageData(n12, 0, 0), void t6(null);
        }
        const o9 = c3 * h2, l6 = new Uint8Array(o9), w3 = new Uint8Array(o9), _3 = new Uint8Array(o9);
        if (g4) for (let t7 = 0; t7 < o9; t7++) l6[t7] = i9[4 * t7], w3[t7] = i9[4 * t7 + 1], _3[t7] = i9[4 * t7 + 2];
        else {
          g4 = new Uint8Array(o9);
          for (let t7 = 0; t7 < o9; t7++) l6[t7] = i9[4 * t7], w3[t7] = i9[4 * t7 + 1], _3[t7] = i9[4 * t7 + 2], g4[t7] = i9[4 * t7 + 3];
        }
        t6({ width: c3, height: h2, pixels: [l6, w3, _3], mask: g4, pixelType: "u8" });
      }, m3.onerror = () => {
        URL.revokeObjectURL(v3), d2("cannot load image");
      };
    });
  }
  static _getMask(t6, e6) {
    let a10 = null;
    try {
      const i9 = new Uint8Array(t6), s3 = Math.ceil(i9.length / 2);
      let r12 = 0;
      const c3 = i9.length - 2;
      for (r12 = s3; r12 < c3 && (255 !== i9[r12] || 217 !== i9[r12 + 1]); r12++) ;
      if (r12 += 2, r12 < i9.length - 1) {
        const t7 = new s(i9.subarray(r12)).getBytes();
        a10 = new Uint8Array(e6.width * e6.height);
        let s4 = 0;
        for (let e7 = 0; e7 < t7.length; e7++) for (let n11 = 7; n11 >= 0; n11--) a10[s4++] = t7[e7] >> n11 & 1;
      }
    } catch (i9) {
    }
    return a10;
  }
};

// node_modules/@arcgis/core/chunks/Jpg.js
var n4;
var r4 = { exports: {} };
function o3() {
  return n4 || (n4 = 1, e6 = r4, o8 = function() {
    var e7 = (function() {
      function e8(e9) {
        this.message = "JPEG error: " + e9;
      }
      return e8.prototype = new Error(), e8.prototype.name = "JpegError", e8.constructor = e8, e8;
    })();
    return (function() {
      if (!self || !self.Uint8ClampedArray) return null;
      var n11 = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r12 = 4017, o9 = 799, a11 = 3406, t6 = 2276, i9 = 1567, s3 = 3784, c3 = 5793, f = 2896;
      function l5() {
        this.decodeTransform = null, this.colorTransform = -1;
      }
      function u6(e8, n12) {
        for (var r13, o10, a12 = 0, t7 = [], i10 = 16; i10 > 0 && !e8[i10 - 1]; ) i10--;
        t7.push({ children: [], index: 0 });
        var s4, c4 = t7[0];
        for (r13 = 0; r13 < i10; r13++) {
          for (o10 = 0; o10 < e8[r13]; o10++) {
            for ((c4 = t7.pop()).children[c4.index] = n12[a12]; c4.index > 0; ) c4 = t7.pop();
            for (c4.index++, t7.push(c4); t7.length <= r13; ) t7.push(s4 = { children: [], index: 0 }), c4.children[c4.index] = s4.children, c4 = s4;
            a12++;
          }
          r13 + 1 < i10 && (t7.push(s4 = { children: [], index: 0 }), c4.children[c4.index] = s4.children, c4 = s4);
        }
        return t7[0].children;
      }
      function h2(e8, n12, r13) {
        return 64 * ((e8.blocksPerLine + 1) * n12 + r13);
      }
      function v3(r13, o10, a12, t7, i10, s4, c4, f2, l6) {
        var u7 = a12.mcusPerLine, v4 = a12.progressive, m4 = o10, d3 = 0, b3 = 0;
        function k3() {
          if (b3 > 0) return b3--, d3 >> b3 & 1;
          if (255 === (d3 = r13[o10++])) {
            var n12 = r13[o10++];
            if (n12) throw new e7("unexpected marker " + (d3 << 8 | n12).toString(16));
          }
          return b3 = 7, d3 >>> 7;
        }
        function g4(n12) {
          for (var r14 = n12; ; ) {
            if ("number" == typeof (r14 = r14[k3()])) return r14;
            if ("object" != typeof r14) throw new e7("invalid huffman sequence");
          }
        }
        function C3(e8) {
          for (var n12 = 0; e8 > 0; ) n12 = n12 << 1 | k3(), e8--;
          return n12;
        }
        function w2(e8) {
          if (1 === e8) return 1 === k3() ? 1 : -1;
          var n12 = C3(e8);
          return n12 >= 1 << e8 - 1 ? n12 : n12 + (-1 << e8) + 1;
        }
        function x3(e8, r14) {
          var o11 = g4(e8.huffmanTableDC), a13 = 0 === o11 ? 0 : w2(o11);
          e8.blockData[r14] = e8.pred += a13;
          for (var t8 = 1; t8 < 64; ) {
            var i11 = g4(e8.huffmanTableAC), s5 = 15 & i11, c5 = i11 >> 4;
            if (0 !== s5) {
              var f3 = n11[t8 += c5];
              e8.blockData[r14 + f3] = w2(s5), t8++;
            } else {
              if (c5 < 15) break;
              t8 += 16;
            }
          }
        }
        function y3(e8, n12) {
          var r14 = g4(e8.huffmanTableDC), o11 = 0 === r14 ? 0 : w2(r14) << l6;
          e8.blockData[n12] = e8.pred += o11;
        }
        function D3(e8, n12) {
          e8.blockData[n12] |= k3() << l6;
        }
        var T3 = 0;
        function P3(e8, r14) {
          if (T3 > 0) T3--;
          else for (var o11 = s4, a13 = c4; o11 <= a13; ) {
            var t8 = g4(e8.huffmanTableAC), i11 = 15 & t8, f3 = t8 >> 4;
            if (0 !== i11) {
              var u8 = n11[o11 += f3];
              e8.blockData[r14 + u8] = w2(i11) * (1 << l6), o11++;
            } else {
              if (f3 < 15) {
                T3 = C3(f3) + (1 << f3) - 1;
                break;
              }
              o11 += 16;
            }
          }
        }
        var L3, A3 = 0;
        function _3(r14, o11) {
          for (var a13, t8, i11 = s4, f3 = c4, u8 = 0; i11 <= f3; ) {
            var h3 = n11[i11];
            switch (A3) {
              case 0:
                if (u8 = (t8 = g4(r14.huffmanTableAC)) >> 4, 0 == (a13 = 15 & t8)) u8 < 15 ? (T3 = C3(u8) + (1 << u8), A3 = 4) : (u8 = 16, A3 = 1);
                else {
                  if (1 !== a13) throw new e7("invalid ACn encoding");
                  L3 = w2(a13), A3 = u8 ? 2 : 3;
                }
                continue;
              case 1:
              case 2:
                r14.blockData[o11 + h3] ? r14.blockData[o11 + h3] += k3() << l6 : 0 === --u8 && (A3 = 2 === A3 ? 3 : 0);
                break;
              case 3:
                r14.blockData[o11 + h3] ? r14.blockData[o11 + h3] += k3() << l6 : (r14.blockData[o11 + h3] = L3 << l6, A3 = 0);
                break;
              case 4:
                r14.blockData[o11 + h3] && (r14.blockData[o11 + h3] += k3() << l6);
            }
            i11++;
          }
          4 === A3 && 0 === --T3 && (A3 = 0);
        }
        function U3(e8, n12, r14, o11, a13) {
          var t8 = r14 % u7;
          n12(e8, h2(e8, (r14 / u7 | 0) * e8.v + o11, t8 * e8.h + a13));
        }
        function z2(e8, n12, r14) {
          n12(e8, h2(e8, r14 / e8.blocksPerLine | 0, r14 % e8.blocksPerLine));
        }
        var I3, M3, Y2, q, S5, H2, R3 = t7.length;
        H2 = v4 ? 0 === s4 ? 0 === f2 ? y3 : D3 : 0 === f2 ? P3 : _3 : x3;
        var j3, E3, J, V2, B2 = 0;
        for (E3 = 1 === R3 ? t7[0].blocksPerLine * t7[0].blocksPerColumn : u7 * a12.mcusPerColumn; B2 < E3; ) {
          var N2 = i10 ? Math.min(E3 - B2, i10) : E3;
          for (M3 = 0; M3 < R3; M3++) t7[M3].pred = 0;
          if (T3 = 0, 1 === R3) for (I3 = t7[0], S5 = 0; S5 < N2; S5++) z2(I3, H2, B2), B2++;
          else for (S5 = 0; S5 < N2; S5++) {
            for (M3 = 0; M3 < R3; M3++) for (J = (I3 = t7[M3]).h, V2 = I3.v, Y2 = 0; Y2 < V2; Y2++) for (q = 0; q < J; q++) U3(I3, H2, B2, Y2, q);
            B2++;
          }
          b3 = 0, (j3 = p3(r13, o10)) && j3.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + j3.invalid), o10 = j3.offset);
          var G2 = j3 && j3.marker;
          if (!G2 || G2 <= 65280) throw new e7("marker was not found");
          if (!(G2 >= 65488 && G2 <= 65495)) break;
          o10 += 2;
        }
        return (j3 = p3(r13, o10)) && j3.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + j3.invalid), o10 = j3.offset), o10 - m4;
      }
      function m3(n12, l6, u7) {
        var h3, v4, m4, d3, p4, b3, k3, g4, C3, w2, x3, y3, D3, T3, P3, L3, A3, _3 = n12.quantizationTable, U3 = n12.blockData;
        if (!_3) throw new e7("missing required Quantization Table.");
        for (var z2 = 0; z2 < 64; z2 += 8) C3 = U3[l6 + z2], w2 = U3[l6 + z2 + 1], x3 = U3[l6 + z2 + 2], y3 = U3[l6 + z2 + 3], D3 = U3[l6 + z2 + 4], T3 = U3[l6 + z2 + 5], P3 = U3[l6 + z2 + 6], L3 = U3[l6 + z2 + 7], C3 *= _3[z2], 0 !== (w2 | x3 | y3 | D3 | T3 | P3 | L3) ? (w2 *= _3[z2 + 1], x3 *= _3[z2 + 2], y3 *= _3[z2 + 3], D3 *= _3[z2 + 4], T3 *= _3[z2 + 5], P3 *= _3[z2 + 6], L3 *= _3[z2 + 7], v4 = (h3 = (h3 = c3 * C3 + 128 >> 8) + (v4 = c3 * D3 + 128 >> 8) + 1 >> 1) - v4, A3 = (m4 = x3) * s3 + (d3 = P3) * i9 + 128 >> 8, m4 = m4 * i9 - d3 * s3 + 128 >> 8, k3 = (p4 = (p4 = f * (w2 - L3) + 128 >> 8) + (k3 = T3 << 4) + 1 >> 1) - k3, b3 = (g4 = (g4 = f * (w2 + L3) + 128 >> 8) + (b3 = y3 << 4) + 1 >> 1) - b3, d3 = (h3 = h3 + (d3 = A3) + 1 >> 1) - d3, m4 = (v4 = v4 + m4 + 1 >> 1) - m4, A3 = p4 * t6 + g4 * a11 + 2048 >> 12, p4 = p4 * a11 - g4 * t6 + 2048 >> 12, g4 = A3, A3 = b3 * o9 + k3 * r12 + 2048 >> 12, b3 = b3 * r12 - k3 * o9 + 2048 >> 12, k3 = A3, u7[z2] = h3 + g4, u7[z2 + 7] = h3 - g4, u7[z2 + 1] = v4 + k3, u7[z2 + 6] = v4 - k3, u7[z2 + 2] = m4 + b3, u7[z2 + 5] = m4 - b3, u7[z2 + 3] = d3 + p4, u7[z2 + 4] = d3 - p4) : (A3 = c3 * C3 + 512 >> 10, u7[z2] = A3, u7[z2 + 1] = A3, u7[z2 + 2] = A3, u7[z2 + 3] = A3, u7[z2 + 4] = A3, u7[z2 + 5] = A3, u7[z2 + 6] = A3, u7[z2 + 7] = A3);
        for (var I3 = 0; I3 < 8; ++I3) C3 = u7[I3], 0 !== ((w2 = u7[I3 + 8]) | (x3 = u7[I3 + 16]) | (y3 = u7[I3 + 24]) | (D3 = u7[I3 + 32]) | (T3 = u7[I3 + 40]) | (P3 = u7[I3 + 48]) | (L3 = u7[I3 + 56])) ? (v4 = (h3 = 4112 + ((h3 = c3 * C3 + 2048 >> 12) + (v4 = c3 * D3 + 2048 >> 12) + 1 >> 1)) - v4, A3 = (m4 = x3) * s3 + (d3 = P3) * i9 + 2048 >> 12, m4 = m4 * i9 - d3 * s3 + 2048 >> 12, d3 = A3, k3 = (p4 = (p4 = f * (w2 - L3) + 2048 >> 12) + (k3 = T3) + 1 >> 1) - k3, b3 = (g4 = (g4 = f * (w2 + L3) + 2048 >> 12) + (b3 = y3) + 1 >> 1) - b3, A3 = p4 * t6 + g4 * a11 + 2048 >> 12, p4 = p4 * a11 - g4 * t6 + 2048 >> 12, g4 = A3, A3 = b3 * o9 + k3 * r12 + 2048 >> 12, b3 = b3 * r12 - k3 * o9 + 2048 >> 12, C3 = (C3 = (h3 = h3 + d3 + 1 >> 1) + g4) < 16 ? 0 : C3 >= 4080 ? 255 : C3 >> 4, w2 = (w2 = (v4 = v4 + m4 + 1 >> 1) + (k3 = A3)) < 16 ? 0 : w2 >= 4080 ? 255 : w2 >> 4, x3 = (x3 = (m4 = v4 - m4) + b3) < 16 ? 0 : x3 >= 4080 ? 255 : x3 >> 4, y3 = (y3 = (d3 = h3 - d3) + p4) < 16 ? 0 : y3 >= 4080 ? 255 : y3 >> 4, D3 = (D3 = d3 - p4) < 16 ? 0 : D3 >= 4080 ? 255 : D3 >> 4, T3 = (T3 = m4 - b3) < 16 ? 0 : T3 >= 4080 ? 255 : T3 >> 4, P3 = (P3 = v4 - k3) < 16 ? 0 : P3 >= 4080 ? 255 : P3 >> 4, L3 = (L3 = h3 - g4) < 16 ? 0 : L3 >= 4080 ? 255 : L3 >> 4, U3[l6 + I3] = C3, U3[l6 + I3 + 8] = w2, U3[l6 + I3 + 16] = x3, U3[l6 + I3 + 24] = y3, U3[l6 + I3 + 32] = D3, U3[l6 + I3 + 40] = T3, U3[l6 + I3 + 48] = P3, U3[l6 + I3 + 56] = L3) : (A3 = (A3 = c3 * C3 + 8192 >> 14) < -2040 ? 0 : A3 >= 2024 ? 255 : A3 + 2056 >> 4, U3[l6 + I3] = A3, U3[l6 + I3 + 8] = A3, U3[l6 + I3 + 16] = A3, U3[l6 + I3 + 24] = A3, U3[l6 + I3 + 32] = A3, U3[l6 + I3 + 40] = A3, U3[l6 + I3 + 48] = A3, U3[l6 + I3 + 56] = A3);
      }
      function d2(e8, n12) {
        for (var r13 = n12.blocksPerLine, o10 = n12.blocksPerColumn, a12 = new Int16Array(64), t7 = 0; t7 < o10; t7++) for (var i10 = 0; i10 < r13; i10++) m3(n12, h2(n12, t7, i10), a12);
        return n12.blockData;
      }
      function p3(e8, n12, r13) {
        function o10(n13) {
          return e8[n13] << 8 | e8[n13 + 1];
        }
        var a12 = e8.length - 1, t7 = r13 < n12 ? r13 : n12;
        if (n12 >= a12) return null;
        var i10 = o10(n12);
        if (i10 >= 65472 && i10 <= 65534) return { invalid: null, marker: i10, offset: n12 };
        for (var s4 = o10(t7); !(s4 >= 65472 && s4 <= 65534); ) {
          if (++t7 >= a12) return null;
          s4 = o10(t7);
        }
        return { invalid: i10.toString(16), marker: s4, offset: t7 };
      }
      return l5.prototype = { parse: function(r13) {
        function o10() {
          var e8 = r13[c4] << 8 | r13[c4 + 1];
          return c4 += 2, e8;
        }
        function a12() {
          var e8 = o10(), n12 = c4 + e8 - 2, a13 = p3(r13, n12, c4);
          a13 && a13.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + a13.invalid), n12 = a13.offset);
          var t8 = r13.subarray(c4, n12);
          return c4 += t8.length, t8;
        }
        function t7(e8) {
          for (var n12 = Math.ceil(e8.samplesPerLine / 8 / e8.maxH), r14 = Math.ceil(e8.scanLines / 8 / e8.maxV), o11 = 0; o11 < e8.components.length; o11++) {
            R3 = e8.components[o11];
            var a13 = Math.ceil(Math.ceil(e8.samplesPerLine / 8) * R3.h / e8.maxH), t8 = Math.ceil(Math.ceil(e8.scanLines / 8) * R3.v / e8.maxV), i11 = n12 * R3.h, s5 = r14 * R3.v * 64 * (i11 + 1);
            R3.blockData = new Int16Array(s5), R3.blocksPerLine = a13, R3.blocksPerColumn = t8;
          }
          e8.mcusPerLine = n12, e8.mcusPerColumn = r14;
        }
        var i10, s4, c4 = 0, f2 = null, l6 = null, h3 = [], m4 = [], b3 = [], k3 = o10();
        if (65496 !== k3) throw new e7("SOI not found");
        for (k3 = o10(); 65497 !== k3; ) {
          var g4, C3, w2;
          switch (k3) {
            case 65504:
            case 65505:
            case 65506:
            case 65507:
            case 65508:
            case 65509:
            case 65510:
            case 65511:
            case 65512:
            case 65513:
            case 65514:
            case 65515:
            case 65516:
            case 65517:
            case 65518:
            case 65519:
            case 65534:
              var x3 = a12();
              65504 === k3 && 74 === x3[0] && 70 === x3[1] && 73 === x3[2] && 70 === x3[3] && 0 === x3[4] && (f2 = { version: { major: x3[5], minor: x3[6] }, densityUnits: x3[7], xDensity: x3[8] << 8 | x3[9], yDensity: x3[10] << 8 | x3[11], thumbWidth: x3[12], thumbHeight: x3[13], thumbData: x3.subarray(14, 14 + 3 * x3[12] * x3[13]) }), 65518 === k3 && 65 === x3[0] && 100 === x3[1] && 111 === x3[2] && 98 === x3[3] && 101 === x3[4] && (l6 = { version: x3[5] << 8 | x3[6], flags0: x3[7] << 8 | x3[8], flags1: x3[9] << 8 | x3[10], transformCode: x3[11] });
              break;
            case 65499:
              for (var y3 = o10() + c4 - 2; c4 < y3; ) {
                var D3 = r13[c4++], T3 = new Uint16Array(64);
                if (D3 >> 4) {
                  if (D3 >> 4 != 1) throw new e7("DQT - invalid table spec");
                  for (C3 = 0; C3 < 64; C3++) T3[n11[C3]] = o10();
                } else for (C3 = 0; C3 < 64; C3++) T3[n11[C3]] = r13[c4++];
                h3[15 & D3] = T3;
              }
              break;
            case 65472:
            case 65473:
            case 65474:
              if (i10) throw new e7("Only single frame JPEGs supported");
              o10(), (i10 = {}).extended = 65473 === k3, i10.progressive = 65474 === k3, i10.precision = r13[c4++], i10.scanLines = o10(), i10.samplesPerLine = o10(), i10.components = [], i10.componentIds = {};
              var P3, L3 = r13[c4++], A3 = 0, _3 = 0;
              for (g4 = 0; g4 < L3; g4++) {
                P3 = r13[c4];
                var U3 = r13[c4 + 1] >> 4, z2 = 15 & r13[c4 + 1];
                A3 < U3 && (A3 = U3), _3 < z2 && (_3 = z2);
                var I3 = r13[c4 + 2];
                w2 = i10.components.push({ h: U3, v: z2, quantizationId: I3, quantizationTable: null }), i10.componentIds[P3] = w2 - 1, c4 += 3;
              }
              i10.maxH = A3, i10.maxV = _3, t7(i10);
              break;
            case 65476:
              var M3 = o10();
              for (g4 = 2; g4 < M3; ) {
                var Y2 = r13[c4++], q = new Uint8Array(16), S5 = 0;
                for (C3 = 0; C3 < 16; C3++, c4++) S5 += q[C3] = r13[c4];
                var H2 = new Uint8Array(S5);
                for (C3 = 0; C3 < S5; C3++, c4++) H2[C3] = r13[c4];
                g4 += 17 + S5, (Y2 >> 4 ? m4 : b3)[15 & Y2] = u6(q, H2);
              }
              break;
            case 65501:
              o10(), s4 = o10();
              break;
            case 65498:
              o10();
              var R3, j3 = r13[c4++], E3 = [];
              for (g4 = 0; g4 < j3; g4++) {
                var J = i10.componentIds[r13[c4++]];
                R3 = i10.components[J];
                var V2 = r13[c4++];
                R3.huffmanTableDC = b3[V2 >> 4], R3.huffmanTableAC = m4[15 & V2], E3.push(R3);
              }
              var B2 = r13[c4++], N2 = r13[c4++], G2 = r13[c4++], O3 = v3(r13, c4, i10, E3, s4, B2, N2, G2 >> 4, 15 & G2);
              c4 += O3;
              break;
            case 65535:
              255 !== r13[c4] && c4--;
              break;
            default:
              if (255 === r13[c4 - 3] && r13[c4 - 2] >= 192 && r13[c4 - 2] <= 254) {
                c4 -= 3;
                break;
              }
              throw new e7("unknown marker " + k3.toString(16));
          }
          k3 = o10();
        }
        for (this.width = i10.samplesPerLine, this.height = i10.scanLines, this.jfif = f2, this.eof = c4, this.adobe = l6, this.components = [], g4 = 0; g4 < i10.components.length; g4++) {
          var Q = h3[(R3 = i10.components[g4]).quantizationId];
          Q && (R3.quantizationTable = Q), this.components.push({ output: d2(i10, R3), scaleX: R3.h / i10.maxH, scaleY: R3.v / i10.maxV, blocksPerLine: R3.blocksPerLine, blocksPerColumn: R3.blocksPerColumn });
        }
        this.numComponents = this.components.length;
      }, _getLinearizedBlockData: function(e8, n12) {
        var r13, o10, a12, t7, i10, s4, c4, f2, l6, u7, h3, v4 = this.width / e8, m4 = this.height / n12, d3 = 0, p4 = this.components.length, b3 = e8 * n12 * p4, k3 = new Uint8ClampedArray(b3), g4 = new Uint32Array(e8), C3 = 4294967288;
        for (c4 = 0; c4 < p4; c4++) {
          for (o10 = (r13 = this.components[c4]).scaleX * v4, a12 = r13.scaleY * m4, d3 = c4, h3 = r13.output, t7 = r13.blocksPerLine + 1 << 3, i10 = 0; i10 < e8; i10++) f2 = 0 | i10 * o10, g4[i10] = (f2 & C3) << 3 | 7 & f2;
          for (s4 = 0; s4 < n12; s4++) for (u7 = t7 * ((f2 = 0 | s4 * a12) & C3) | (7 & f2) << 3, i10 = 0; i10 < e8; i10++) k3[d3] = h3[u7 + g4[i10]], d3 += p4;
        }
        var w2 = this.decodeTransform;
        if (w2) for (c4 = 0; c4 < b3; ) for (f2 = 0, l6 = 0; f2 < p4; f2++, c4++, l6 += 2) k3[c4] = (k3[c4] * w2[l6] >> 8) + w2[l6 + 1];
        return k3;
      }, _isColorConversionNeeded: function() {
        return this.adobe ? !!this.adobe.transformCode : 3 === this.numComponents ? 0 !== this.colorTransform : 1 === this.colorTransform;
      }, _convertYccToRgb: function(e8) {
        for (var n12, r13, o10, a12 = 0, t7 = e8.length; a12 < t7; a12 += 3) n12 = e8[a12], r13 = e8[a12 + 1], o10 = e8[a12 + 2], e8[a12] = n12 - 179.456 + 1.402 * o10, e8[a12 + 1] = n12 + 135.459 - 0.344 * r13 - 0.714 * o10, e8[a12 + 2] = n12 - 226.816 + 1.772 * r13;
        return e8;
      }, _convertYcckToRgb: function(e8) {
        for (var n12, r13, o10, a12, t7 = 0, i10 = 0, s4 = e8.length; i10 < s4; i10 += 4) n12 = e8[i10], r13 = e8[i10 + 1], o10 = e8[i10 + 2], a12 = e8[i10 + 3], e8[t7++] = r13 * (-660635669420364e-19 * r13 + 437130475926232e-18 * o10 - 54080610064599e-18 * n12 + 48449797120281e-17 * a12 - 0.154362151871126) - 122.67195406894 + o10 * (-957964378445773e-18 * o10 + 817076911346625e-18 * n12 - 0.00477271405408747 * a12 + 1.53380253221734) + n12 * (961250184130688e-18 * n12 - 0.00266257332283933 * a12 + 0.48357088451265) + a12 * (-336197177618394e-18 * a12 + 0.484791561490776), e8[t7++] = 107.268039397724 + r13 * (219927104525741e-19 * r13 - 640992018297945e-18 * o10 + 659397001245577e-18 * n12 + 426105652938837e-18 * a12 - 0.176491792462875) + o10 * (-778269941513683e-18 * o10 + 0.00130872261408275 * n12 + 770482631801132e-18 * a12 - 0.151051492775562) + n12 * (0.00126935368114843 * n12 - 0.00265090189010898 * a12 + 0.25802910206845) + a12 * (-318913117588328e-18 * a12 - 0.213742400323665), e8[t7++] = r13 * (-570115196973677e-18 * r13 - 263409051004589e-19 * o10 + 0.0020741088115012 * n12 - 0.00288260236853442 * a12 + 0.814272968359295) - 20.810012546947 + o10 * (-153496057440975e-19 * o10 - 132689043961446e-18 * n12 + 560833691242812e-18 * a12 - 0.195152027534049) + n12 * (0.00174418132927582 * n12 - 0.00255243321439347 * a12 + 0.116935020465145) + a12 * (-343531996510555e-18 * a12 + 0.24165260232407);
        return e8;
      }, _convertYcckToCmyk: function(e8) {
        for (var n12, r13, o10, a12 = 0, t7 = e8.length; a12 < t7; a12 += 4) n12 = e8[a12], r13 = e8[a12 + 1], o10 = e8[a12 + 2], e8[a12] = 434.456 - n12 - 1.402 * o10, e8[a12 + 1] = 119.541 - n12 + 0.344 * r13 + 0.714 * o10, e8[a12 + 2] = 481.816 - n12 - 1.772 * r13;
        return e8;
      }, _convertCmykToRgb: function(e8) {
        for (var n12, r13, o10, a12, t7 = 0, i10 = 1 / 255, s4 = 0, c4 = e8.length; s4 < c4; s4 += 4) n12 = e8[s4] * i10, r13 = e8[s4 + 1] * i10, o10 = e8[s4 + 2] * i10, a12 = e8[s4 + 3] * i10, e8[t7++] = 255 + n12 * (-4.387332384609988 * n12 + 54.48615194189176 * r13 + 18.82290502165302 * o10 + 212.25662451639585 * a12 - 285.2331026137004) + r13 * (1.7149763477362134 * r13 - 5.6096736904047315 * o10 - 17.873870861415444 * a12 - 5.497006427196366) + o10 * (-2.5217340131683033 * o10 - 21.248923337353073 * a12 + 17.5119270841813) - a12 * (21.86122147463605 * a12 + 189.48180835922747), e8[t7++] = 255 + n12 * (8.841041422036149 * n12 + 60.118027045597366 * r13 + 6.871425592049007 * o10 + 31.159100130055922 * a12 - 79.2970844816548) + r13 * (-15.310361306967817 * r13 + 17.575251261109482 * o10 + 131.35250912493976 * a12 - 190.9453302588951) + o10 * (4.444339102852739 * o10 + 9.8632861493405 * a12 - 24.86741582555878) - a12 * (20.737325471181034 * a12 + 187.80453709719578), e8[t7++] = 255 + n12 * (0.8842522430003296 * n12 + 8.078677503112928 * r13 + 30.89978309703729 * o10 - 0.23883238689178934 * a12 - 14.183576799673286) + r13 * (10.49593273432072 * r13 + 63.02378494754052 * o10 + 50.606957656360734 * a12 - 112.23884253719248) + o10 * (0.03296041114873217 * o10 + 115.60384449646641 * a12 - 193.58209356861505) - a12 * (22.33816807309886 * a12 + 180.12613974708367);
        return e8;
      }, getData: function(n12, r13, o10) {
        if (this.numComponents > 4) throw new e7("Unsupported color mode");
        var a12 = this._getLinearizedBlockData(n12, r13);
        if (1 === this.numComponents && o10) {
          for (var t7 = a12.length, i10 = new Uint8ClampedArray(3 * t7), s4 = 0, c4 = 0; c4 < t7; c4++) {
            var f2 = a12[c4];
            i10[s4++] = f2, i10[s4++] = f2, i10[s4++] = f2;
          }
          return i10;
        }
        if (3 === this.numComponents && this._isColorConversionNeeded()) return this._convertYccToRgb(a12);
        if (4 === this.numComponents) {
          if (this._isColorConversionNeeded()) return o10 ? this._convertYcckToRgb(a12) : this._convertYcckToCmyk(a12);
          if (o10) return this._convertCmykToRgb(a12);
        }
        return a12;
      } }, l5;
    })();
  }, void 0 !== (a10 = o8()) && (e6.exports = a10)), r4.exports;
  var e6, o8, a10;
}
var a4 = o2(o3());

// node_modules/@arcgis/core/layers/raster/formats/JpgPlus.js
var r5 = class {
  static decode(r12, n11 = false) {
    const s3 = new Uint8Array(r12), l5 = new a4();
    l5.parse(s3);
    const { width: o8, height: a10, numComponents: i9, eof: f } = l5, h2 = l5.getData(o8, a10, true), c3 = o8 * a10;
    let u6, g4 = null;
    if (!n11 && f < s3.length - 1) try {
      const t6 = new s(s3.subarray(f)).getBytes();
      g4 = new Uint8Array(c3);
      let r13 = 0;
      for (let e6 = 0; e6 < t6.length; e6++) for (let n12 = 7; n12 >= 0; n12--) g4[r13++] = t6[e6] >> n12 & 1;
    } catch {
    }
    if (1 === i9 && h2.length === o8 * a10) {
      const t6 = new Uint8Array(h2.buffer);
      u6 = [t6, t6, t6];
    } else {
      u6 = [];
      for (let e6 = 0; e6 < 3; e6++) u6.push(new Uint8Array(c3));
      let t6 = 0;
      for (let e6 = 0; e6 < c3; e6++) for (let r13 = 0; r13 < 3; r13++) u6[r13][e6] = h2[t6++];
    }
    return { width: o8, height: a10, pixels: u6, mask: g4 };
  }
};

// node_modules/@arcgis/core/layers/raster/formats/Lerc.js
var t = [{ pixelType: "S8", size: 1, ctor: Int8Array, range: [-128, 127] }, { pixelType: "U8", size: 1, ctor: Uint8Array, range: [0, 255] }, { pixelType: "S16", size: 2, ctor: Int16Array, range: [-32768, 32767] }, { pixelType: "U16", size: 2, ctor: Uint16Array, range: [0, 65536] }, { pixelType: "S32", size: 4, ctor: Int32Array, range: [-2147483648, 2147483647] }, { pixelType: "U32", size: 4, ctor: Uint32Array, range: [0, 4294967296] }, { pixelType: "F32", size: 4, ctor: Float32Array, range: [-34027999387901484e22, 34027999387901484e22] }, { pixelType: "F64", size: 8, ctor: Float64Array, range: [-17976931348623157e292, 17976931348623157e292] }];
var n5 = null;
function r6() {
  return n5 || (n5 = import("./lerc-wasm-QXPMF6ZC.js").then(({ default: t6 }) => t6({ locateFile: (t7) => n3(`esri/layers/raster/formats/${t7}`) })).then((e6) => {
    l2(e6);
  }), n5);
}
var a5 = { getBlobInfo: null, decode: null };
function o4(e6) {
  return 16 + (e6 >> 3 << 3);
}
function s2(e6, t6, n11) {
  n11.set(e6.slice(t6, t6 + n11.length));
}
function l2(e6) {
  const { _malloc: n11, _free: r12, memory: l5, _lerc_getBlobInfo: i9, _lerc_getDataRanges: u6, _lerc_decode_4D: c3 } = e6;
  let f;
  const y3 = (e7) => {
    const t6 = e7.map((e8) => o4(e8)), r13 = t6.reduce((e8, t7) => e8 + t7), a10 = n11(r13);
    f = new Uint8Array(l5.buffer);
    let s3 = t6[0];
    t6[0] = a10;
    for (let n12 = 1; n12 < t6.length; n12++) {
      const e8 = t6[n12];
      t6[n12] = t6[n12 - 1] + s3, s3 = e8;
    }
    return t6;
  };
  a5.getBlobInfo = (e7) => {
    const t6 = 12, n12 = 3, a10 = new Uint8Array(4 * t6), o8 = new Uint8Array(8 * n12), [c4, h2, p3] = y3([e7.length, a10.length, o8.length]);
    f.set(e7, c4), f.set(a10, h2), f.set(o8, p3);
    let g4 = i9(c4, e7.length, h2, p3, t6, n12);
    if (g4) throw r12(c4), new Error(`lerc-getBlobInfo: error code is ${g4}`);
    f = new Uint8Array(l5.buffer), s2(f, h2, a10), s2(f, p3, o8);
    const d2 = new Uint32Array(a10.buffer), w2 = new Float64Array(o8.buffer), [b3, A3, , m3, U3, x3, C3, V2, T3, D3, z2] = d2, I3 = { version: b3, depthCount: D3, width: m3, height: U3, validPixelCount: C3, bandCount: x3, blobSize: V2, maskCount: T3, dataType: A3, minValue: w2[0], maxValue: w2[1], maxZerror: w2[2], statistics: [], bandCountWithNoData: z2 };
    if (z2 && D3 > 1) return r12(c4), I3;
    if (1 === D3 && 1 === x3) return r12(c4), I3.statistics.push({ minValue: w2[0], maxValue: w2[1] }), I3;
    const F2 = D3 * x3 * 8, _3 = new Uint8Array(F2), k3 = new Uint8Array(F2);
    let B2 = c4, S5 = 0, $ = 0, v3 = false;
    if (f.byteLength < c4 + 2 * F2 ? (r12(c4), v3 = true, [B2, S5, $] = y3([e7.length, F2, F2]), f.set(e7, B2)) : [S5, $] = y3([F2, F2]), f.set(_3, S5), f.set(k3, $), g4 = u6(B2, e7.length, D3, x3, S5, $), g4) throw r12(B2), v3 || r12(S5), new Error(`lerc-getDataRanges: error code is ${g4}`);
    f = new Uint8Array(l5.buffer), s2(f, S5, _3), s2(f, $, k3);
    const E3 = new Float64Array(_3.buffer), M3 = new Float64Array(k3.buffer), O3 = I3.statistics;
    for (let r13 = 0; r13 < x3; r13++) if (D3 > 1) {
      const e8 = E3.slice(r13 * D3, (r13 + 1) * D3), t7 = M3.slice(r13 * D3, (r13 + 1) * D3), n13 = Math.min.apply(null, e8), a11 = Math.max.apply(null, t7);
      O3.push({ minValue: n13, maxValue: a11, depthStats: { minValues: e8, maxValues: t7 } });
    } else O3.push({ minValue: E3[r13], maxValue: M3[r13] });
    return r12(B2), v3 || r12(S5), I3;
  }, a5.decode = (e7, n12) => {
    const { maskCount: a10, depthCount: o8, bandCount: i10, width: u7, height: h2, dataType: p3, bandCountWithNoData: g4 } = n12, d2 = t[p3], w2 = u7 * h2, b3 = new Uint8Array(w2 * i10), A3 = w2 * o8 * i10 * d2.size, m3 = new Uint8Array(A3), U3 = new Uint8Array(i10), x3 = new Uint8Array(8 * i10), [C3, V2, T3, D3, z2] = y3([e7.length, b3.length, m3.length, U3.length, x3.length]);
    f.set(e7, C3), f.set(b3, V2), f.set(m3, T3), f.set(U3, D3), f.set(x3, z2);
    const I3 = c3(C3, e7.length, a10, V2, o8, u7, h2, i10, p3, T3, D3, z2);
    if (I3) throw r12(C3), new Error(`lerc-decode: error code is ${I3}`);
    f = new Uint8Array(l5.buffer), s2(f, T3, m3), s2(f, V2, b3);
    let F2 = null;
    if (g4) {
      s2(f, D3, U3), s2(f, z2, x3), F2 = [];
      const e8 = new Float64Array(x3.buffer);
      for (let t6 = 0; t6 < U3.length; t6++) F2.push(U3[t6] ? e8[t6] : null);
    }
    return r12(C3), { data: m3, maskData: b3, noDataValues: F2 };
  };
}
function i4(e6, t6, n11, r12, a10) {
  if (n11 < 2) return e6;
  const o8 = new r12(t6 * n11);
  for (let s3 = 0, l5 = 0; s3 < t6; s3++) for (let r13 = 0, a11 = s3; r13 < n11; r13++, a11 += t6) o8[a11] = e6[l5++];
  return o8;
}
function u2(e6, n11 = {}) {
  const r12 = n11.inputOffset ?? 0, o8 = e6 instanceof Uint8Array ? e6.subarray(r12) : new Uint8Array(e6, r12), s3 = a5.getBlobInfo(o8), { data: l5, maskData: u6, noDataValues: c3 } = a5.decode(o8, s3), { width: f, height: y3, bandCount: h2, depthCount: p3, dataType: g4, maskCount: d2, statistics: w2 } = s3, b3 = t[g4], A3 = new b3.ctor(l5.buffer), m3 = [], U3 = [], x3 = f * y3, C3 = x3 * p3;
  for (let t6 = 0; t6 < h2; t6++) {
    const e7 = A3.subarray(t6 * C3, (t6 + 1) * C3);
    if (n11.returnInterleaved) m3.push(e7);
    else {
      const t7 = i4(e7, x3, p3, b3.ctor);
      m3.push(t7);
    }
    U3.push(u6.subarray(t6 * C3, (t6 + 1) * C3));
  }
  const V2 = 0 === d2 ? null : 1 === d2 ? U3[0] : new Uint8Array(x3);
  if (d2 > 1) {
    V2.set(U3[0]);
    for (let e7 = 1; e7 < U3.length; e7++) {
      const t6 = U3[e7];
      for (let e8 = 0; e8 < x3; e8++) V2[e8] = V2[e8] & t6[e8];
    }
  }
  const { noDataValue: T3 } = n11, D3 = null != T3 && b3.range[0] <= T3 && b3.range[1] >= T3;
  if (d2 > 0 && D3) for (let t6 = 0; t6 < h2; t6++) {
    const e7 = m3[t6], n12 = U3[t6] || V2;
    for (let t7 = 0; t7 < x3; t7++) 0 === n12[t7] && (e7[t7] = T3);
  }
  const z2 = d2 === h2 && h2 > 1 ? U3 : null, { pixelType: I3 } = b3;
  return { width: f, height: y3, bandCount: h2, pixelType: I3, depthCount: p3, statistics: w2, pixels: m3, mask: V2, bandMasks: z2, noDataValues: c3 };
}

// node_modules/@arcgis/core/layers/raster/formats/Lzw.js
function e2(e6, n11, t6, r12 = true) {
  if (n11 % 4 != 0 || t6 % 4 != 0) {
    const i9 = new ArrayBuffer(4 * Math.ceil(t6 / 4)), o8 = new Uint8Array(i9), l5 = new Uint8Array(e6, n11, t6);
    if (r12) for (let e7 = 0; e7 < o8.length; e7 += 4) o8[e7] = l5[e7 + 3], o8[e7 + 1] = l5[e7 + 2], o8[e7 + 2] = l5[e7 + 1], o8[e7 + 3] = l5[e7];
    else o8.set(l5);
    return new Uint32Array(o8.buffer);
  }
  if (r12) {
    const r13 = new Uint8Array(e6, n11, t6), i9 = new Uint8Array(r13.length);
    for (let e7 = 0; e7 < i9.length; e7 += 4) i9[e7] = r13[e7 + 3], i9[e7 + 1] = r13[e7 + 2], i9[e7 + 2] = r13[e7 + 1], i9[e7 + 3] = r13[e7];
    return new Uint32Array(i9.buffer);
  }
  return new Uint32Array(e6, n11, t6 / 4);
}
function n6() {
  const e6 = [];
  for (let n11 = 0; n11 <= 257; n11++) e6[n11] = [n11];
  return e6;
}
function t2(e6, n11) {
  for (let t6 = 0; t6 < n11.length; t6++) e6.push(n11[t6]);
}
var r7 = /* @__PURE__ */ new Set();
function i5(i9, o8, l5, f = true) {
  const s3 = e2(i9, o8, l5, f);
  let a10 = 9, c3 = n6(), u6 = 32, h2 = c3.length, d2 = [], w2 = 1, g4 = s3[0], y3 = 0;
  const A3 = s3.length, U3 = 8 * (4 * A3 - l5), p3 = [];
  for (; null != g4; ) {
    if (u6 >= a10) u6 -= a10, y3 = g4 >>> 32 - a10, g4 <<= a10;
    else {
      y3 = g4 >>> 32 - u6, g4 = s3[w2++];
      const e7 = a10 - u6;
      u6 = 32 - e7, y3 = (y3 << e7) + (g4 >>> u6), g4 <<= e7;
    }
    if (257 === y3) break;
    if (256 === y3) {
      a10 = 9, c3 = n6(), h2 = c3.length, d2 = [];
      continue;
    }
    const e6 = c3[y3];
    if (null == e6) {
      if (y3 > c3.length) throw new Error("data integrity issue: code does not exist on code page");
      d2.push(d2[0]), c3[h2++] = d2.slice(), t2(p3, d2);
    } else t2(p3, e6), d2.push(e6[0]), d2.length > 1 && (c3[h2++] = d2.slice()), d2 = e6.slice();
    if (r7.has(h2) && a10++, 0 === u6 && (g4 = s3[w2++], u6 = 32), w2 > A3 || w2 === A3 && u6 <= U3) break;
  }
  return new Uint8Array(p3);
}
r7.add(511), r7.add(1023), r7.add(2047), r7.add(4095), r7.add(8191);

// node_modules/@arcgis/core/layers/raster/formats/Qb3.js
var e3 = /* @__PURE__ */ new Set(["uint8", "int8", "uint16", "int16", "uint32", "int32", "int64", "uint64"]);
var n7 = /* @__PURE__ */ new Map([["uint8", { byteCount: 1, pixelType: "u8", ctor: Uint8Array }], ["int8", { byteCount: 1, pixelType: "s8", ctor: Int8Array }], ["uint16", { byteCount: 2, pixelType: "u16", ctor: Uint16Array }], ["int16", { byteCount: 2, pixelType: "s16", ctor: Int16Array }], ["uint32", { byteCount: 4, pixelType: "u32", ctor: Uint32Array }], ["int32", { byteCount: 4, pixelType: "s32", ctor: Int32Array }], ["uint64", { byteCount: 8, pixelType: "f64", ctor: BigUint64Array }], ["int64", { byteCount: 8, pixelType: "f64", ctor: BigInt64Array }]]);
var r8;
function o5() {
  return r8 ??= import("./qb3-wasm-S3OTCHQT.js").then(({ default: e6 }) => e6({ locateFile: (e7) => n3(`esri/layers/raster/formats/${e7}`) })).then((t6) => {
    l3(t6);
  }), r8;
}
var i6 = { getBlobInfo: null, decode: null };
function a6(t6) {
  if (!n7.has(t6)) throw new Error("Unsupported data type: " + t6);
  return n7.get(t6);
}
function l3(t6) {
  const { _GetInfo: n11, _decode: r12, _malloc: o8, _free: l5, writeArrayToMemory: u6, UTF8ToString: y3 } = t6;
  i6.getBlobInfo = (t7) => {
    t7.length > 1e3 && (t7 = t7.slice(0, 1e3));
    const e6 = o8(t7.length);
    u6(t7, e6);
    const r13 = n11(e6, t7.length);
    if (l5(e6), !r13) return null;
    const i9 = y3(r13);
    l5(r13);
    try {
      const t8 = JSON.parse(i9);
      return { width: t8.xsize, height: t8.ysize, bandCount: t8.nbands, dataType: t8.dtype, mode: t8.mode, bandMap: t8.bandmap };
    } catch {
      return null;
    }
  }, i6.decode = (n12, o9) => {
    const { dataType: i9, width: l6, height: u7, bandCount: y4 } = o9;
    if (!e3.has(i9)) throw new Error("Unsupported data type: " + i9);
    const { _malloc: c3, _free: s3 } = t6, p3 = c3(n12.length);
    t6.writeArrayToMemory(n12, p3);
    const { ctor: d2, byteCount: f } = a6(i9), h2 = l6 * u7 * y4 * f, g4 = c3(h2), b3 = c3(1024);
    if (0 === r12(p3, n12.length, g4, b3)) throw s3(p3), s3(g4), s3(b3), new Error("Decoding failed: " + t6.UTF8ToString(b3));
    const w2 = new d2(t6.HEAPU8.slice(g4, g4 + h2).buffer);
    if (s3(p3), s3(g4), s3(b3), w2 instanceof BigInt64Array || w2 instanceof BigUint64Array) {
      const t7 = new Float64Array(w2.length);
      for (let e6 = 0; e6 < w2.length; e6++) t7[e6] = Number(w2[e6]);
      return t7;
    }
    return w2;
  };
}
function u3(t6) {
  const e6 = new Uint8Array(t6), n11 = i6.getBlobInfo(e6);
  if (!n11) return null;
  const r12 = i6.decode(e6, n11);
  if (!r12) return null;
  const { width: o8, height: l5, bandCount: u6, dataType: y3 } = n11, { ctor: c3, pixelType: s3 } = a6(y3), p3 = c3 === BigInt64Array || c3 === BigUint64Array ? Float64Array : c3, d2 = Array.from({ length: u6 }, () => new p3(o8 * l5));
  for (let i9 = 0, a10 = 0; i9 < o8 * l5; i9++) for (let t7 = 0; t7 < u6; t7++) d2[t7][i9] = r12[a10++];
  return { width: o8, height: l5, pixelType: s3, pixels: d2 };
}

// node_modules/@arcgis/core/layers/raster/formats/Raw.js
var e4 = (e6, r12) => {
  const a10 = r12.width * r12.height, n11 = r12.pixelType;
  return Math.floor(e6.byteLength / (a10 * t3(n11)));
};
var t3 = (e6) => {
  let t6 = 1;
  switch (e6) {
    case Uint8Array:
    case Int8Array:
      t6 = 1;
      break;
    case Uint16Array:
    case Int16Array:
      t6 = 2;
      break;
    case Uint32Array:
    case Int32Array:
    case Float32Array:
      t6 = 4;
      break;
    case Float64Array:
      t6 = 8;
  }
  return t6;
};
var r9 = (e6, t6) => {
  if (8 * e6.byteLength < t6) return null;
  const r12 = new Uint8Array(e6, 0, Math.ceil(t6 / 8)), a10 = new Uint8Array(t6);
  let n11 = 0, s3 = 0;
  for (let c3 = 0; c3 < r12.length - 1; c3++) {
    s3 = r12[c3];
    for (let e7 = 7; e7 >= 0; e7--) a10[n11++] = s3 >> e7 & 1;
  }
  let l5 = 7;
  for (; n11 < t6 - 1; ) s3 = r12[r12.length - 1], a10[n11++] = s3 >> l5 & 1, l5--;
  return a10;
};
var a7 = class {
  static decode(a10, n11) {
    const s3 = n11.pixelType, l5 = [], c3 = n11.width * n11.height, i9 = e4(a10, n11), { bandIds: h2, format: o8 } = n11, y3 = h2?.length || e4(a10, n11), b3 = a10.byteLength - a10.byteLength % (c3 * t3(s3)), f = new s3(a10, 0, c3 * i9);
    if ("bip" === o8) for (let e6 = 0; e6 < y3; e6++) {
      const t6 = new s3(c3), r12 = h2 ? h2[e6] : e6;
      for (let e7 = 0; e7 < c3; e7++) t6[e7] = f[e7 * i9 + r12];
      l5.push(t6);
    }
    else if ("bsq" === o8) for (let e6 = 0; e6 < y3; e6++) {
      const t6 = h2 ? h2[e6] : e6;
      l5.push(f.subarray(t6 * c3, (t6 + 1) * c3));
    }
    let u6 = null;
    return b3 < a10.byteLength - 1 && (u6 = r9(a10.slice(b3), c3)), { pixels: l5, mask: u6 };
  }
};

// node_modules/@arcgis/core/layers/raster/datasets/byteStreamUtils.js
function r10(r12, t6) {
  let n11 = 0, o8 = "", e6 = 0, f = 0;
  const c3 = r12.length;
  for (; n11 < c3; ) f = r12[n11++], e6 = f >> 4, e6 < 8 ? e6 = 1 : 15 === e6 ? (e6 = 4, f = (7 & f) << 18 | (63 & r12[n11++]) << 12 | (63 & r12[n11++]) << 6 | 63 & r12[n11++]) : 14 === e6 ? (e6 = 3, f = (15 & f) << 12 | (63 & r12[n11++]) << 6 | 63 & r12[n11++]) : (e6 = 2, f = (31 & f) << 6 | 63 & r12[n11++]), (0 !== f || t6) && (o8 += String.fromCharCode(f));
  return o8;
}

// node_modules/@arcgis/core/layers/raster/formats/tiffTag.js
var e5 = (() => {
  const e6 = [];
  return e6[254] = "NEWSUBFILETYPE", e6[255] = "SUBFILETYPE", e6[256] = "IMAGEWIDTH", e6[257] = "IMAGELENGTH", e6[258] = "BITSPERSAMPLE", e6[259] = "COMPRESSION", e6[262] = "PHOTOMETRICINTERPRETATION", e6[263] = "THRESHHOLDING", e6[264] = "CELLWIDTH", e6[265] = "CELLLENGTH", e6[266] = "FILLORDER", e6[269] = "DOCUMENTNAME", e6[270] = "IMAGEDESCRIPTION", e6[271] = "MAKE", e6[272] = "MODEL", e6[273] = "STRIPOFFSETS", e6[274] = "ORIENTATION", e6[277] = "SAMPLESPERPIXEL", e6[278] = "ROWSPERSTRIP", e6[279] = "STRIPBYTECOUNTS", e6[280] = "MINSAMPLEVALUE", e6[281] = "MAXSAMPLEVALUE", e6[282] = "XRESOLUTION", e6[283] = "YRESOLUTION", e6[284] = "PLANARCONFIGURATION", e6[285] = "PAGENAME", e6[286] = "XPOSITION", e6[287] = "YPOSITION", e6[288] = "FREEOFFSETS", e6[289] = "FREEBYTECOUNTS", e6[290] = "GRAYRESPONSEUNIT", e6[291] = "GRAYRESPONSECURVE", e6[292] = "T4OPTIONS", e6[293] = "T6OPTIONS", e6[296] = "RESOLUTIONUNIT", e6[297] = "PAGENUMBER", e6[300] = "COLORRESPONSEUNIT", e6[301] = "TRANSFERFUNCTION", e6[305] = "SOFTWARE", e6[306] = "DATETIME", e6[315] = "ARTIST", e6[316] = "HOSTCOMPUTER", e6[317] = "PREDICTOR", e6[318] = "WHITEPOINT", e6[319] = "PRIMARYCHROMATICITIES", e6[320] = "COLORMAP", e6[321] = "HALFTONEHINTS", e6[322] = "TILEWIDTH", e6[323] = "TILELENGTH", e6[324] = "TILEOFFSETS", e6[325] = "TILEBYTECOUNTS", e6[326] = "BADFAXLINES", e6[327] = "CLEANFAXDATA", e6[328] = "CONSECUTIVEBADFAXLINES", e6[330] = "SUBIFD", e6[332] = "INKSET", e6[333] = "INKNAMES", e6[334] = "NUMBEROFINKS", e6[336] = "DOTRANGE", e6[337] = "TARGETPRINTER", e6[338] = "EXTRASAMPLES", e6[339] = "SAMPLEFORMAT", e6[340] = "SMINSAMPLEVALUE", e6[341] = "SMAXSAMPLEVALUE", e6[342] = "TRANSFERRANGE", e6[347] = "JPEGTABLES", e6[512] = "JPEGPROC", e6[513] = "JPEGIFOFFSET", e6[514] = "JPEGIFBYTECOUNT", e6[515] = "JPEGRESTARTINTERVAL", e6[517] = "JPEGLOSSLESSPREDICTORS", e6[518] = "JPEGPOINTTRANSFORM", e6[519] = "JPEGQTABLES", e6[520] = "JPEGDCTABLES", e6[521] = "JPEGACTABLES", e6[529] = "YCBCRCOEFFICIENTS", e6[530] = "YCBCRSUBSAMPLING", e6[531] = "YCBCRPOSITIONING", e6[532] = "REFERENCEBLACKWHITE", e6[700] = "XMP", e6[33550] = "GEOPIXELSCALE", e6[33922] = "GEOTIEPOINTS", e6[33432] = "COPYRIGHT", e6[42112] = "GDAL_METADATA", e6[42113] = "GDAL_NODATA", e6[50844] = "RPCCOEFFICIENT", e6[34264] = "GEOTRANSMATRIX", e6[34735] = "GEOKEYDIRECTORY", e6[34736] = "GEODOUBLEPARAMS", e6[34737] = "GEOASCIIPARAMS", e6[34665] = "EXIFIFD", e6[34853] = "GPSIFD", e6[40965] = "INTEROPERABILITYIFD", e6;
})();
var i7 = (() => {
  const i9 = e5.slice();
  return i9[36864] = "ExifVersion", i9[40960] = "FlashpixVersion", i9[40961] = "ColorSpace", i9[42240] = "Gamma", i9[37121] = "ComponentsConfiguration", i9[37122] = "CompressedBitsPerPixel", i9[40962] = "PixelXDimension", i9[40963] = "PixelYDimension", i9[37500] = "MakerNote", i9[37510] = "UserComment", i9[40964] = "RelatedSoundFile", i9[36867] = "DateTimeOriginal", i9[36868] = "DateTimeDigitized", i9[36880] = "OffsetTime", i9[36881] = "OffsetTimeOriginal", i9[36882] = "OffsetTimeDigitized", i9[37520] = "SubSecTime", i9[37521] = "SubSecTimeOriginal", i9[37522] = "SubSecTimeDigitized", i9[37888] = "Temperature", i9[37889] = "Humidity", i9[37890] = "Pressure", i9[37891] = "WaterDepth", i9[37892] = "Acceleration", i9[37893] = "CameraElevationAngle", i9[42016] = "ImageUniqueID", i9[42032] = "CameraOwnerName", i9[42033] = "BodySerialNumber", i9[42034] = "LensSpecification", i9[42035] = "LensMake", i9[42036] = "LensModel", i9[42037] = "LensSerialNumber", i9[33434] = "ExposureTime", i9[33437] = "FNumber", i9[34850] = "ExposureProgram", i9[34852] = "SpectralSensitivity", i9[34855] = "PhotographicSensitivity", i9[34856] = "OECF", i9[34864] = "SensitivityType", i9[34865] = "StandardOutputSensitivity", i9[34866] = "RecommendedExposureIndex", i9[34867] = "ISOSpeed", i9[34868] = "ISOSpeedLatitudeyyy", i9[34869] = "ISOSpeedLatitudezzz", i9[37377] = "ShutterSpeedValue", i9[37378] = "ApertureValue", i9[37379] = "BrightnessValue", i9[37380] = "ExposureBiasValue", i9[37381] = "MaxApertureValue", i9[37382] = "SubjectDistance", i9[37383] = "MeteringMode", i9[37384] = "LightSource", i9[37385] = "Flash", i9[37386] = "FocalLength", i9[37396] = "SubjectArea", i9[41483] = "FlashEnergy", i9[41484] = "SpatialFrequencyResponse", i9[41486] = "FocalPlaneXResolution", i9[41487] = "FocalPlaneYResolution", i9[41488] = "FocalPlaneResolutionUnit", i9[41492] = "SubjectLocation", i9[41493] = "ExposureIndex", i9[41495] = "SensingMethod", i9[41728] = "FileSource", i9[41729] = "SceneType", i9[41730] = "CFAPattern", i9[41985] = "CustomRendered", i9[41986] = "ExposureMode", i9[41987] = "WhiteBalance", i9[41988] = "DigitalZoomRatio", i9[41989] = "FocalLengthIn35mmFilm", i9[41990] = "SceneCaptureType", i9[41991] = "GainControl", i9[41992] = "Contrast", i9[41993] = "Saturation", i9[41994] = "Sharpness", i9[41995] = "DeviceSettingDescription", i9[41996] = "SubjectDistanceRange", i9;
})();
var o6 = ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"];
var t4 = (() => {
  const e6 = [];
  return e6[1024] = "GTModelTypeGeoKey", e6[1025] = "GTRasterTypeGeoKey", e6[1026] = "GTCitationGeoKey", e6[2048] = "GeographicTypeGeoKey", e6[2049] = "GeogCitationGeoKey", e6[2050] = "GeogGeodeticDatumGeoKey", e6[2051] = "GeogPrimeMeridianGeoKey", e6[2052] = "GeogLinearUnitsGeoKey", e6[2053] = "GeogLinearUnitSizeGeoKey", e6[2054] = "GeogAngularUnitsGeoKey", e6[2055] = "GeogAngularUnitSizeGeoKey", e6[2056] = "GeogEllipsoidGeoKey", e6[2057] = "GeogSemiMajorAxisGeoKey", e6[2058] = "GeogSemiMinorAxisGeoKey", e6[2059] = "GeogInvFlatteningGeoKey", e6[2061] = "GeogPrimeMeridianLongGeoKey", e6[2060] = "GeogAzimuthUnitsGeoKey", e6[3072] = "ProjectedCSTypeGeoKey", e6[3073] = "PCSCitationGeoKey", e6[3074] = "ProjectionGeoKey", e6[3075] = "ProjCoordTransGeoKey", e6[3076] = "ProjLinearUnitsGeoKey", e6[3077] = "ProjLinearUnitSizeGeoKey", e6[3078] = "ProjStdParallel1GeoKey", e6[3079] = "ProjStdParallel2GeoKey", e6[3080] = "ProjNatOriginLongGeoKey", e6[3081] = "ProjNatOriginLatGeoKey", e6[3082] = "ProjFalseEastingGeoKey", e6[3083] = "ProjFalseNorthingGeoKey", e6[3084] = "ProjFalseOriginLongGeoKey", e6[3085] = "ProjFalseOriginLatGeoKey", e6[3086] = "ProjFalseOriginEastingGeoKey", e6[3087] = "ProjFalseOriginNorthingGeoKey", e6[3088] = "ProjCenterLongGeoKey", e6[3090] = "ProjCenterEastingGeoKey", e6[3091] = "ProjCenterNorthingGeoKey", e6[3092] = "ProjScaleAtNatOriginGeoKey", e6[3093] = "ProjScaleAtCenterGeoKey", e6[3094] = "ProjAzimuthAngleGeoKey", e6[3095] = "ProjStraightVertPoleLongGeoKey", e6[4096] = "VerticalCSTypeGeoKey", e6[4097] = "VerticalCitationGeoKey", e6[4098] = "VerticalDatumGeoKey", e6[4099] = "VerticalUnitsGeoKey", e6;
})();
var S2 = (i9, o8) => {
  let t6 = (o8 || e5)[i9];
  return void 0 === t6 && (t6 = "unknown" + String(i9)), t6;
};
var E = /* @__PURE__ */ new Map([["EXIFIFD", i7], ["GPSIFD", o6]]);

// node_modules/@arcgis/core/layers/raster/formats/utils.js
var r11 = (() => {
  const r12 = new ArrayBuffer(4), n11 = new Uint8Array(r12);
  return new Uint32Array(r12)[0] = 1, 1 === n11[0];
})();

// node_modules/@arcgis/core/layers/raster/formats/TiffDecoder.js
var h = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8];
var g2 = 4294967296;
var E2 = /* @__PURE__ */ new Set([1, 5, 6, 7, 8, 34712, 34887]);
function I(e6, t6) {
  let n11 = "unknown";
  return 3 === e6 ? n11 = 64 === t6 ? "f64" : "f32" : 1 === e6 ? 1 === t6 ? n11 = "u1" : 2 === t6 ? n11 = "u2" : 4 === t6 ? n11 = "u4" : t6 <= 8 ? n11 = "u8" : t6 <= 16 ? n11 = "u16" : t6 <= 32 && (n11 = "u32") : 2 === e6 && (t6 <= 8 ? n11 = "s8" : t6 <= 16 ? n11 = "s16" : t6 <= 32 && (n11 = "s32")), n11;
}
function T(e6) {
  let t6 = null;
  switch (e6 ? e6.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t6 = Uint8Array;
      break;
    case "u16":
      t6 = Uint16Array;
      break;
    case "u32":
      t6 = Uint32Array;
      break;
    case "s8":
      t6 = Int8Array;
      break;
    case "s16":
      t6 = Int16Array;
      break;
    case "s32":
      t6 = Int32Array;
      break;
    case "f64":
      t6 = Float64Array;
      break;
    default:
      t6 = Float32Array;
  }
  return t6;
}
function w(e6, t6) {
  return { x: t6[0] * e6.x + t6[1] * e6.y + t6[2], y: t6[3] * e6.x + t6[4] * e6.y + t6[5] };
}
function p(e6, t6) {
  return e6.get(t6)?.values;
}
function d(e6, t6) {
  return e6.get(t6)?.values;
}
function m(e6, t6) {
  return e6.get(t6)?.values?.[0];
}
function y(e6, t6) {
  return e6.get(t6)?.values?.[0];
}
function A(e6, t6, n11, a10 = 0, i9 = e5, r12 = 4) {
  const l5 = 8 === r12, f = l5 ? B(new DataView(e6, n11, 8), 0, t6) : new DataView(e6, n11, 2).getUint16(0, t6), u6 = 4 + 2 * r12, c3 = l5 ? 8 : 2, h2 = c3 + f * u6;
  if (n11 + h2 > e6.byteLength) return { success: false, ifd: null, nextIFD: null, requiredBufferSize: h2 };
  const g4 = 8 === r12 ? 8 : 4, E3 = n11 + h2 + g4 <= e6.byteLength ? W(new DataView(e6, n11 + h2, g4), 0, t6, 8 === r12) : null, I3 = n11 + c3, T3 = /* @__PURE__ */ new Map();
  let w2, p3, d2, m3, y3, A3 = 0, S5 = 0;
  for (let s3 = 0; s3 < f; s3++) {
    p3 = new DataView(e6, I3 + u6 * s3, u6), d2 = p3.getUint16(0, t6), y3 = p3.getUint16(2, t6), m3 = S2(d2, i9);
    const n12 = [];
    2 === r12 ? (A3 = p3.getUint16(4, t6), S5 = p3.getUint16(6, t6)) : 4 === r12 ? (A3 = p3.getUint32(4, t6), S5 = p3.getUint32(8, t6)) : 8 === r12 && (A3 = W(p3, 4, t6, true), S5 = W(p3, 12, t6, true), n12.push(p3.getUint32(12, t6)), n12.push(p3.getUint32(16, t6))), w2 = { id: d2, type: y3, valueCount: A3, valueOffset: S5, valueOffsets: n12, values: null }, N(e6, t6, w2, a10, false, r12), T3.set(m3, w2);
  }
  return { success: true, ifd: T3, nextIFD: E3, requiredBufferSize: h2 };
}
var S3 = (e6, t6) => u2(e6, { inputOffset: t6 }).pixels[0];
function M(e6, t6) {
  if (t6 % 8 == 0) return e6;
  const n11 = t6 > 16 ? 32 : t6 > 8 ? 16 : 8;
  n11 > 8 && (e6 = b(e6, 32 === n11 ? 4 : 2));
  const a10 = 32 === n11 ? Uint32Array : 16 === n11 ? Uint16Array : Uint8Array, i9 = new a10(e6), r12 = Math.floor(8 * e6.byteLength / t6 + 1e-6), s3 = new a10(r12), l5 = (1 << t6) - 1;
  let o8 = 0, f = 0, u6 = 0;
  for (let c3 = 0; c3 < r12; c3++) if (0 === f && (u6 = i9[o8++], f = n11), f >= t6) s3[c3] = u6 >>> f - t6 & l5, f -= t6;
  else {
    const e7 = t6 - f;
    let a11 = (u6 & l5) << e7 & l5;
    u6 = i9[o8++], f = n11 - e7, a11 += u6 >>> f, s3[c3] = a11;
  }
  return s3.buffer;
}
function P(e6, n11, a10) {
  const i9 = new a4();
  i9.parse(e6), i9.colorTransform = 6 === a10 ? -1 : 0;
  const r12 = i9.getData(i9.width, i9.height, 1 !== n11 && 4 !== n11);
  return new Uint8Array(r12.buffer);
}
function O(e6) {
  const t6 = new s(e6).getBytes(), n11 = new ArrayBuffer(t6.length), a10 = new Uint8Array(n11);
  return a10.set(t6), a10;
}
function b(e6, t6) {
  const n11 = new Uint8Array(e6), a10 = new Uint8Array(n11.length);
  if (2 === t6) for (let i9 = 0; i9 < n11.length; i9 += 2) a10[i9] = n11[i9 + 1], a10[i9 + 1] = n11[i9];
  else if (4 === t6) for (let i9 = 0; i9 < n11.length; i9 += 4) a10[i9] = n11[i9 + 3], a10[i9 + 1] = n11[i9 + 2], a10[i9 + 2] = n11[i9 + 1], a10[i9 + 3] = n11[i9];
  else for (let i9 = 0; i9 < n11.length; i9 += 8) a10[i9] = n11[i9 + 7], a10[i9 + 1] = n11[i9 + 6], a10[i9 + 2] = n11[i9 + 5], a10[i9 + 3] = n11[i9 + 4], a10[i9 + 4] = n11[i9 + 3], a10[i9 + 5] = n11[i9 + 2], a10[i9 + 6] = n11[i9 + 1], a10[i9 + 7] = n11[i9];
  return a10.buffer;
}
async function x(e6, t6, a10, r12, s3) {
  const l5 = r11 === t6, o8 = y(a10, "BITSPERSAMPLE"), f = y(a10, "SAMPLESPERPIXEL") ?? 1, c3 = y(a10, "PHOTOMETRICINTERPRETATION"), h2 = y(a10, "SAMPLEFORMAT") ?? 1, g4 = I(h2, o8), E3 = y(a10, "COMPRESSION") ?? 1, w2 = T(g4);
  let p3, d2, m3;
  if (34887 === E3) return await r6(), S3(e6, r12);
  if (1 === E3) p3 = e6.slice(r12, r12 + s3), d2 = new Uint8Array(p3);
  else if (8 === E3 || 32946 === E3) d2 = new Uint8Array(e6, r12, s3), d2 = O(d2), p3 = d2.buffer;
  else if (6 === E3) d2 = new Uint8Array(e6, r12, s3), d2 = P(d2, f, c3), p3 = d2.buffer;
  else if (7 === E3) {
    const t7 = a10.get("JPEGTABLES").values, n11 = t7.length - 2;
    d2 = new Uint8Array(n11 + s3 - 2);
    for (let e7 = 0; e7 < n11; e7++) d2[e7] = t7[e7];
    const i9 = new Uint8Array(e6, r12 + 2, s3 - 2);
    for (let e7 = 0; e7 < i9.length; e7++) d2[n11 + e7] = i9[e7];
    d2 = P(d2, f, c3), p3 = d2.buffer;
  } else {
    if (5 !== E3) throw new Error("tiff-decode: unsupport compression " + E3);
    d2 = i5(e6, r12, s3, t6), p3 = d2.buffer;
  }
  if (p3 = M(p3, o8), l5 || o8 <= 8) m3 = new w2(p3);
  else {
    const e7 = o8 > 32 ? 8 : o8 > 16 ? 4 : 2;
    m3 = new w2(b(d2.buffer, e7));
  }
  const A3 = y(a10, "PREDICTOR") ?? 1, x3 = y(a10, "TILEWIDTH"), L3 = y(a10, "TILELENGTH");
  if (A3 > 1 && (5 === E3 || 8 === E3 || 32946 === E3) && x3 && L3) {
    const e7 = C(a10), t7 = new w2(m3.length);
    t7.set(m3), m3 = j(t7, L3, x3, 3 === h2 && 3 === A3, e7 ? 1 : f);
  }
  return m3;
}
async function L(e6, t6, n11) {
  const a10 = d(n11, "TILEOFFSETS");
  if (void 0 === a10) return null;
  const i9 = d(n11, "TILEBYTECOUNTS"), { width: r12, height: s3, pixelType: l5, tileWidth: o8, tileHeight: f } = k([n11]), u6 = C(n11, t6), c3 = y(n11, "SAMPLESPERPIXEL") || t6.planes, h2 = r12 * s3, g4 = y(n11, "BITSPERSAMPLE"), E3 = 34887 === (y(n11, "COMPRESSION") ?? 1), I3 = T(l5), w2 = [];
  for (let T3 = 0; T3 < c3; T3++) w2.push(new I3(h2));
  const p3 = Math.ceil(r12 / o8), m3 = new Uint8Array(h2).fill(255);
  let A3 = null, S5 = false;
  if (g4 % 8 == 0) if (E3 && u6 && c3 > 1) {
    const l6 = Math.round(a10.length / c3);
    for (let u7 = 0; u7 < l6; u7++) {
      const l7 = Math.floor(u7 / p3) * f, h3 = u7 % p3 * o8, g5 = l7 * r12 + h3;
      for (let E4 = 0; E4 < c3; E4++) {
        const I4 = u7 * c3 + E4;
        0 === i9[I4] ? (A3 = null, S5 = true) : A3 = await x(e6, t6.littleEndian, n11, a10[I4], i9[I4]);
        const T3 = Math.min(o8, r12 - h3), p4 = Math.min(f, s3 - l7), d2 = w2[E4];
        for (let e7 = 0; e7 < p4; e7++) {
          let t7 = g5 + e7 * r12, n12 = e7 * o8;
          for (let e8 = 0; e8 < T3; e8++, t7++, n12++) A3 ? d2[t7] = A3[n12] : m3[t7] = 0;
        }
      }
    }
  } else for (let T3 = 0; T3 < a10.length; T3++) {
    const l6 = Math.floor(T3 / p3) * f, h3 = T3 % p3 * o8, g5 = l6 * r12 + h3;
    0 === i9[T3] ? (A3 = null, S5 = true) : A3 = await x(e6, t6.littleEndian, n11, a10[T3], i9[T3]);
    const I4 = Math.min(o8, r12 - h3), d2 = Math.min(f, s3 - l6);
    for (let e7 = 0; e7 < c3; e7++) {
      const t7 = w2[e7];
      if (u6 || E3) for (let n12 = 0; n12 < d2; n12++) {
        let a11 = g5 + n12 * r12, i10 = o8 * f * e7 + n12 * o8;
        for (let e8 = 0; e8 < I4; e8++, a11++, i10++) A3 ? t7[a11] = A3[i10] : m3[a11] = 0;
      }
      else for (let n12 = 0; n12 < d2; n12++) {
        let a11 = g5 + n12 * r12, i10 = n12 * o8 * c3 + e7;
        for (let e8 = 0; e8 < I4; e8++, a11++, i10 += c3) A3 ? t7[a11] = A3[i10] : m3[a11] = 0;
      }
    }
  }
  return { width: r12, height: s3, pixelType: l5, pixels: w2, mask: S5 ? m3 : void 0 };
}
var R = (e6, t6, n11) => {
  const a10 = r11 === t6.littleEndian, r12 = d(n11, "STRIPOFFSETS");
  if (void 0 === r12) return null;
  const { width: s3, height: l5, pixelType: o8 } = k([n11]), f = y(n11, "SAMPLESPERPIXEL") || t6.planes, c3 = y(n11, "PHOTOMETRICINTERPRETATION"), h2 = s3 * l5, g4 = y(n11, "BITSPERSAMPLE"), E3 = T(o8), I3 = new E3(h2 * f), w2 = d(n11, "STRIPBYTECOUNTS"), p3 = y(n11, "ROWSPERSTRIP"), m3 = y(n11, "COMPRESSION") ?? 1;
  let A3, S5, b3, x3;
  if (g4 % 8 == 0) for (let u6 = 0; u6 < r12.length; u6++) {
    const n12 = u6 * (p3 * s3) * f;
    if ("u8" === o8 || "s8" === o8 || a10) 8 === m3 || 32946 === m3 ? (b3 = new Uint8Array(e6, r12[u6], w2[u6]), b3 = O(b3), S5 = b3.buffer) : 6 === m3 ? (b3 = new Uint8Array(e6, r12[u6], w2[u6]), b3 = P(b3, f, c3), S5 = b3.buffer) : 5 === m3 ? (b3 = i5(e6, r12[u6], w2[u6], t6.littleEndian), S5 = b3.buffer) : S5 = e6.slice(r12[u6], r12[u6] + w2[u6]), S5 = M(S5, g4), A3 = new E3(S5);
    else {
      switch (6 === m3 || 8 === m3 || 32946 === m3 ? (b3 = new Uint8Array(e6, r12[u6], w2[u6]), x3 = O(b3), S5 = x3.buffer) : (S5 = new ArrayBuffer(w2[u6]), b3 = new Uint8Array(e6, r12[u6], w2[u6]), x3 = new Uint8Array(S5)), o8) {
        case "u16":
        case "s16":
          for (let e7 = 0; e7 < b3.length; e7 += 2) x3[e7] = b3[e7 + 1], x3[e7 + 1] = b3[e7];
          break;
        case "u32":
        case "s32":
        case "f32":
          for (let e7 = 0; e7 < b3.length; e7 += 4) x3[e7] = b3[e7 + 3], x3[e7 + 1] = b3[e7 + 2], x3[e7 + 2] = b3[e7 + 1], x3[e7 + 3] = b3[e7];
      }
      S5 = M(S5, g4), A3 = new E3(S5);
    }
    I3.set(A3, n12);
  }
  const L3 = [];
  if (1 === f) L3.push(I3);
  else for (let i9 = 0; i9 < f; i9++) {
    const e7 = new E3(h2);
    for (let t7 = 0; t7 < h2; t7++) e7[t7] = I3[t7 * f + i9];
    L3.push(e7);
  }
  return { width: s3, height: l5, pixelType: o8, pixels: L3 };
};
var D = (e6, t6, n11) => {
  if (!(e6 && e6.length > 0 && t6 && n11)) return null;
  let a10, i9, r12;
  const s3 = e6[0].length, l5 = e6.length, o8 = new Uint8Array(s3);
  for (let f = 0; f < l5; f++) if (a10 = e6[f], i9 = t6[f], r12 = n11[f], 0 === f) for (let e7 = 0; e7 < s3; e7++) o8[e7] = a10[e7] < i9 || a10[e7] > r12 ? 0 : 1;
  else for (let e7 = 0; e7 < s3; e7++) o8[e7] && (o8[e7] = a10[e7] < i9 || a10[e7] > r12 ? 0 : 1);
  return o8;
};
var U = (e6) => {
  if (!e6) return null;
  const t6 = e6.match(/<Item(.*?)Item>/gi);
  if (!t6 || 0 === t6.length) return null;
  const n11 = /* @__PURE__ */ new Map();
  let a10, i9, r12, s3, l5;
  for (let w2 = 0; w2 < t6.length; w2++) a10 = t6[w2], i9 = a10.slice(6, a10.indexOf(">")), s3 = a10.indexOf("sample="), s3 > -1 && (l5 = a10.slice(s3 + 8, a10.indexOf('"', s3 + 8))), s3 = a10.indexOf("name="), s3 > -1 && (i9 = a10.slice(s3 + 6, a10.indexOf('"', s3 + 6))), i9 && (r12 = a10.slice(a10.indexOf(">") + 1, a10.indexOf("</Item>")).trim(), null != l5 ? n11.has(i9) ? n11.get(i9)[l5] = r12 : n11.set(i9, [r12]) : n11.set(i9, r12)), l5 = null;
  const o8 = n11.get("STATISTICS_MINIMUM"), f = n11.get("STATISTICS_MAXIMUM"), u6 = n11.get("STATISTICS_MEAN"), c3 = n11.get("STATISTICS_STDDEV");
  let h2 = null;
  if (o8 && f) {
    h2 = [];
    for (let e7 = 0; e7 < o8.length; e7++) h2.push({ min: parseFloat(o8[e7]), max: parseFloat(f[e7]), avg: u6 && parseFloat(u6[e7]), stddev: c3 && parseFloat(c3[e7]) });
  }
  const g4 = n11.get("BandName"), E3 = n11.get("WavelengthMin"), I3 = n11.get("WavelengthMax");
  let T3 = null;
  if (g4) {
    T3 = [];
    for (let e7 = 0; e7 < g4.length; e7++) T3.push({ BandName: g4[e7], WavelengthMin: E3 && parseFloat(E3[e7]), WavelengthMax: I3 && parseFloat(I3[e7]) });
  }
  return { statistics: h2, bandProperties: T3, dataType: n11.get("DataType"), rawMetadata: n11 };
};
function N(e6, t6, n11, a10 = 0, i9 = false, r12 = 4) {
  if (n11.values) return true;
  const s3 = n11.type, l5 = n11.valueCount;
  let o8 = n11.valueOffset, f = [];
  const u6 = h[s3], c3 = 8 * u6, E3 = l5 * u6, I3 = l5 * h[s3] * 8;
  let T3, w2;
  const p3 = 8 === r12 ? 64 : 32, d2 = n11.valueOffsets;
  if (I3 > p3) {
    if (E3 > (i9 ? e6.byteLength : e6 ? e6.byteLength - o8 + a10 : 0)) return n11.offlineOffsetSize = [o8, E3], n11.values = null, false;
  }
  if (I3 <= p3) {
    if (!t6) if (p3 <= 32) o8 >>>= 32 - I3;
    else {
      const e7 = d2?.length ? d2[0] : o8 >>> 0, t7 = d2?.length ? d2[1] : Math.round((o8 - e7) / g2);
      I3 <= 32 ? (o8 = e7 >>> 32 - I3, d2[0] = o8) : (o8 = e7 * 2 ** (32 - I3) + (t7 >>> 32 - I3), d2[0] = e7, d2[1] = t7 >>> 32 - I3);
    }
    if (1 === l5 && c3 === p3) f = [o8];
    else if (64 === p3) {
      const e7 = d2?.length ? d2[0] : o8 >>> 0, t7 = d2?.length ? d2[1] : Math.round((o8 - e7) / g2);
      let n12 = e7, a11 = 32;
      for (w2 = 1; w2 <= l5; w2++) {
        const e8 = 32 - c3 * w2 % 32;
        if (a11 < c3) {
          const i10 = n12 << e8 >>> 32 - a11, r13 = t7 << 32 - a11 >>> 32 - a11;
          n12 = t7, f.push(i10 + r13 * 2 ** (c3 - a11)), a11 -= 32 - (c3 - a11);
        } else f.push(n12 << e8 >>> 32 - c3), a11 -= c3;
        0 === a11 && (a11 = 32, n12 = t7);
      }
    } else for (w2 = 1; w2 <= l5; w2++) {
      const e7 = 32 - c3 * w2;
      f.push(o8 << e7 >>> 32 - c3);
    }
  } else {
    o8 -= a10, i9 && (o8 = 0);
    for (let n12 = o8; n12 < o8 + E3; n12 += u6) {
      switch (s3) {
        case 1:
        case 2:
        case 7:
          T3 = new DataView(e6, n12, 1).getUint8(0);
          break;
        case 3:
          T3 = new DataView(e6, n12, 2).getUint16(0, t6);
          break;
        case 4:
        case 13:
          T3 = new DataView(e6, n12, 4).getUint32(0, t6);
          break;
        case 5:
          T3 = new DataView(e6, n12, 4).getUint32(0, t6) / new DataView(e6, n12 + 4, 4).getUint32(0, t6);
          break;
        case 6:
          T3 = new DataView(e6, n12, 1).getInt8(0);
          break;
        case 8:
          T3 = new DataView(e6, n12, 2).getInt16(0, t6);
          break;
        case 9:
          T3 = new DataView(e6, n12, 4).getInt32(0, t6);
          break;
        case 10:
          T3 = new DataView(e6, n12, 4).getInt32(0, t6) / new DataView(e6, n12 + 4, 4).getInt32(0, t6);
          break;
        case 11:
          T3 = new DataView(e6, n12, 4).getFloat32(0, t6);
          break;
        case 12:
          T3 = new DataView(e6, n12, 8).getFloat64(0, t6);
          break;
        case 16:
        case 18:
          T3 = B(new DataView(e6, n12, 8), 0, t6);
          break;
        case 17:
          T3 = V(new DataView(e6, n12, 8), 0, t6);
          break;
        default:
          T3 = null;
      }
      f.push(T3);
    }
  }
  if (2 === s3) {
    let e7 = "";
    const t7 = f;
    for (f = [], w2 = 0; w2 < t7.length; w2++) 0 === t7[w2] && "" !== e7 ? (f.push(e7), e7 = "") : e7 += String.fromCharCode(t7[w2]);
    "" === e7 && 0 !== f.length || f.push(e7);
  }
  return n11.values = f, true;
}
function k(e6) {
  const t6 = e6[0], n11 = y(t6, "TILEWIDTH"), a10 = y(t6, "TILELENGTH"), i9 = y(t6, "IMAGEWIDTH"), r12 = y(t6, "IMAGELENGTH"), s3 = y(t6, "BITSPERSAMPLE"), l5 = y(t6, "SAMPLESPERPIXEL"), o8 = y(t6, "SAMPLEFORMAT") ?? 1, f = I(o8, s3), u6 = C(t6), c3 = p(t6, "GDAL_NODATA");
  let h2 = null;
  c3?.length && (h2 = c3.map((e7) => parseFloat(e7)), h2.some((e7) => isNaN(e7)) && (h2 = null));
  const g4 = y(t6, "COMPRESSION") ?? 1;
  let T3;
  switch (g4) {
    case 1:
      T3 = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      T3 = "CCITT";
      break;
    case 5:
      T3 = "LZW";
      break;
    case 6:
    case 7:
      T3 = "JPEG";
      break;
    case 32773:
      T3 = "PACKBITS";
      break;
    case 8:
    case 32946:
      T3 = "DEFLATE";
      break;
    case 34712:
      T3 = "JPEG2000";
      break;
    case 34887:
      T3 = "LERC";
      break;
    default:
      T3 = String(g4);
  }
  let A3 = true, S5 = "";
  E2.has(g4) || (A3 = false, S5 += "unsupported tag compression " + g4), o8 > 3 && (A3 = false, S5 += "unsupported tag sampleFormat " + o8), s3 > 32 && 64 !== s3 && (A3 = false, S5 += "unsupported tag bitsPerSample " + s3);
  const M3 = m(t6, "GEOASCIIPARAMS");
  let P3;
  if (M3) {
    const e7 = M3.split("|").find((e8) => e8.includes("ESRI PE String = ")), t7 = e7 ? e7.replace("ESRI PE String = ", "") : "";
    P3 = t7.startsWith("COMPD_CS") || t7.startsWith("PROJCS") || t7.startsWith("GEOGCS") ? { wkid: null, wkt: t7 } : null;
  }
  const O3 = d(t6, "GEOTIEPOINTS"), b3 = d(t6, "GEOPIXELSCALE"), x3 = d(t6, "GEOTRANSMATRIX"), L3 = t6.has("GEOKEYDIRECTORY") ? t6.get("GEOKEYDIRECTORY").data : null;
  let R3, D3, N2 = false, k3 = false;
  if (L3) {
    N2 = 2 === y(L3, "GTRasterTypeGeoKey");
    const e7 = y(L3, "GTModelTypeGeoKey");
    if (2 === e7) {
      const e8 = y(L3, "GeographicTypeGeoKey");
      e8 >= 1024 && e8 <= 32766 && (P3 = { wkid: e8 }), P3 || 32767 !== e8 || (k3 = true, P3 = { wkid: 4326 });
    } else if (1 === e7) {
      const e8 = y(L3, "ProjectedCSTypeGeoKey");
      e8 >= 1024 && e8 <= 32766 && (P3 = { wkid: e8 });
    }
  }
  if (b3 && O3 && O3.length >= 6 ? (R3 = [b3[0], 0, O3[3] - O3[0] * b3[0], 0, -Math.abs(b3[1]), O3[4] - O3[1] * b3[1]], N2 && (R3[2] -= 0.5 * R3[0] + 0.5 * R3[1], R3[5] -= 0.5 * R3[3] + 0.5 * R3[4])) : x3 && 16 === x3.length && (R3 = N2 ? [x3[0], x3[1], x3[3] - 0.5 * x3[0], x3[4], x3[5], x3[7] - 0.5 * x3[5]] : [x3[0], x3[1], x3[3], x3[4], x3[5], x3[7]]), R3) {
    const e7 = [{ x: 0, y: r12 }, { x: 0, y: 0 }, { x: i9, y: r12 }, { x: i9, y: 0 }];
    let t7, n12 = Number.POSITIVE_INFINITY, a11 = Number.POSITIVE_INFINITY, s4 = Number.NEGATIVE_INFINITY, l6 = Number.NEGATIVE_INFINITY;
    for (let i10 = 0; i10 < e7.length; i10++) t7 = w(e7[i10], R3), n12 = t7.x > n12 ? n12 : t7.x, s4 = t7.x < s4 ? s4 : t7.x, a11 = t7.y > a11 ? a11 : t7.y, l6 = t7.y < l6 ? l6 : t7.y;
    D3 = { xmin: n12, xmax: s4, ymin: a11, ymax: l6, spatialReference: P3 };
  } else D3 = { xmin: -0.5, ymin: 0.5 - r12, xmax: i9 - 0.5, ymax: 0.5, spatialReference: P3 };
  k3 && (D3.xmax - D3.xmin > 400 || Math.max(Math.abs(D3.xmin), Math.abs(D3.xmax)) > 361) && (P3 = null, D3.spatialReference = null);
  const F2 = G(e6);
  let B2, V2, W2, H2, Y2;
  if (F2.length > 0) {
    W2 = Math.round(Math.log(i9 / y(F2[0], "IMAGEWIDTH")) / Math.LN2);
    const e7 = F2[F2.length - 1];
    H2 = F2.length, B2 = y(e7, "TILEWIDTH"), V2 = y(e7, "TILELENGTH");
  }
  B2 = null != H2 && H2 > 0 ? B2 || n11 : null, V2 = null != H2 && H2 > 0 ? V2 || a10 : null, n11 && (Y2 = [{ maxCol: Math.ceil(i9 / n11) - 1, maxRow: Math.ceil(r12 / a10) - 1, minRow: 0, minCol: 0 }], F2.forEach((e7) => {
    Y2.push({ maxCol: Math.ceil(y(e7, "IMAGEWIDTH") / y(e7, "TILEWIDTH")) - 1, maxRow: Math.ceil(y(e7, "IMAGELENGTH") / y(e7, "TILELENGTH")) - 1, minRow: 0, minCol: 0 });
  }));
  const j3 = m(e6[0], "GDAL_METADATA"), X2 = U(j3);
  S5 += " " + _2({ width: i9, height: r12, tileWidth: n11, tileHeight: a10, planes: l5, ifds: e6 });
  const K2 = v(e6).length === F2.length + 1, J = F2?.length ? F2.map((e7) => ({ x: i9 / y(e7, "IMAGEWIDTH"), y: r12 / y(e7, "IMAGELENGTH") })) : void 0;
  return { width: i9, height: r12, tileWidth: n11, tileHeight: a10, planes: l5, isBSQ: u6, pixelType: f, compression: T3, noData: h2, hasMaskBand: K2, isSupported: A3, pyramidResolutions: J, message: S5, extent: D3, isPseudoGeographic: k3, affine: b3 ? null : R3, firstPyramidLevel: W2, maximumPyramidLevel: H2, pyramidBlockWidth: B2, pyramidBlockHeight: V2, tileBoundary: Y2, metadata: X2 };
}
function C(e6, t6) {
  const n11 = p(e6, "PLANARCONFIGURATION");
  return n11 ? 2 === n11[0] : !!t6 && t6.isBSQ;
}
function G(e6) {
  return e6.filter((e7) => 1 === y(e7, "NEWSUBFILETYPE"));
}
function v(e6) {
  return e6.filter((e7) => {
    const t6 = !(4 & ~(y(e7, "NEWSUBFILETYPE") ?? 0)), n11 = 4 === y(e7, "PHOTOMETRICINTERPRETATION");
    return t6 && n11;
  });
}
function F(e6) {
  const { littleEndian: t6, isBigTiff: n11, firstIFDPos: a10 } = H(e6);
  let i9 = a10;
  const r12 = [];
  do {
    const a11 = Y(e6, t6, i9, 0, e5, n11 ? 8 : 4);
    if (!a11.success) break;
    r12.push(a11.ifd), i9 = a11.nextIFD;
  } while (i9 > 0);
  return __spreadProps(__spreadValues({}, k(r12)), { littleEndian: t6, isBigTiff: n11, ifds: r12, pyramidIFDs: G(r12), maskIFDs: v(r12) });
}
function B(e6, t6, n11) {
  const a10 = e6.getUint32(t6, n11), i9 = e6.getUint32(t6 + 4, n11);
  return n11 ? i9 * g2 + a10 : a10 * g2 + i9;
}
function V(e6, t6, n11) {
  let a10 = n11 ? e6.getInt32(t6, n11) : e6.getUint32(t6, n11), i9 = n11 ? e6.getUint32(t6 + 4, n11) : e6.getInt32(t6 + 4, n11);
  const r12 = (n11 ? a10 : i9) >= 0 ? 1 : -1;
  n11 ? a10 *= r12 : i9 *= r12;
  return r12 * (n11 ? i9 * g2 + a10 : a10 * g2 + i9);
}
function W(e6, t6, n11, a10) {
  return a10 ? B(e6, t6, n11) : e6.getUint32(t6, n11);
}
function H(e6) {
  const t6 = new DataView(e6, 0, 16), n11 = t6.getUint16(0, false);
  let a10 = null;
  if (18761 === n11) a10 = true;
  else {
    if (19789 !== n11) throw new Error("unexpected endianess byte");
    a10 = false;
  }
  const i9 = t6.getUint16(2, a10);
  if (42 !== i9 && 43 !== i9) throw new Error("unexpected tiff identifier");
  let r12 = 4;
  const s3 = 43 === i9;
  if (s3) {
    const e7 = t6.getUint16(r12, a10);
    if (r12 += 2, 8 !== e7) throw new Error("unsupported bigtiff version");
    if (0 !== t6.getUint16(r12, a10)) throw new Error("unsupported bigtiff version");
    r12 += 2;
  }
  return { littleEndian: a10, isBigTiff: s3, firstIFDPos: W(t6, r12, a10, s3) };
}
function Y(t6, n11, a10, i9 = 0, r12 = e5, o8 = 4) {
  const u6 = A(t6, n11, a10, i9, r12, o8);
  let c3;
  const h2 = u6.ifd;
  if (h2) {
    if (E.forEach((e6, a11) => {
      h2.has(a11) && (c3 = h2.get(a11), c3.data = A(t6, n11, c3.valueOffset - i9, i9, e6).ifd);
    }), h2.has("GEOKEYDIRECTORY")) {
      c3 = h2.get("GEOKEYDIRECTORY");
      const e6 = c3.values;
      if (e6 && e6.length > 4) {
        const a11 = e6[0] + "." + e6[1] + "." + e6[2];
        c3.data = A(t6, n11, c3.valueOffset + 6 - i9, i9, t4, 2).ifd, c3.data && c3.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [a11] });
      }
    }
    if (h2.has("XMP")) {
      c3 = h2.get("XMP");
      const t7 = c3.values;
      "number" == typeof t7[0] && 7 === c3.type && (c3.values = [r10(new Uint8Array(t7))]);
    }
  }
  return u6;
}
function _2(e6) {
  const { width: t6, height: n11, tileHeight: a10, tileWidth: i9 } = e6, r12 = e6.planes, s3 = i9 ? i9 * a10 : t6 * n11, l5 = y(e6.ifds[0], "BITSPERSAMPLE");
  let o8 = "";
  return s3 * r12 > 2 ** 30 / (l5 > 8 ? l5 / 8 : 1) && (o8 = i9 ? "tiled tiff exceeding 1 gigabits per tile is not supported" : "scanline tiff exceeding 1 gigabits is not supported"), o8;
}
function j(e6, t6, n11, a10, i9) {
  const r12 = a10 ? 4 : 1, s3 = n11 * r12 * i9;
  a10 && (e6 = new Uint8Array(e6.buffer));
  for (let f = 0; f < t6; f++) {
    const t7 = f * s3;
    for (let n12 = i9; n12 < s3; n12++) e6[t7 + n12] += e6[t7 + n12 - i9];
  }
  if (!a10) return e6;
  const l5 = new Uint8Array(e6.length), o8 = n11 * i9;
  for (let f = 0; f < t6; f++) {
    const t7 = f * s3;
    for (let n12 = 0; n12 < o8; n12++) for (let a11 = 0; a11 < r12; a11++) l5[t7 + n12 * r12 + a11] = e6[t7 + n12 + (r12 - a11 - 1) * o8];
  }
  return new Float32Array(l5.buffer);
}
async function X(e6, t6) {
  const { headerInfo: n11, ifd: a10, offsets: i9, sizes: s3 } = t6, l5 = [];
  for (let r12 = 0; r12 < i9.length; r12++) {
    s3[r12];
    const t7 = await x(e6, n11.littleEndian, a10, i9[r12], s3[r12] || e6.byteLength);
    l5.push(t7);
  }
  const o8 = C(a10, n11), f = y(a10, "BITSPERSAMPLE"), u6 = I(y(a10, "SAMPLEFORMAT") ?? 1, f), c3 = y(a10, "SAMPLESPERPIXEL") || n11.planes, h2 = T(u6), g4 = y(a10, "TILEWIDTH"), E3 = y(a10, "TILELENGTH"), w2 = y(a10, "COMPRESSION") ?? 1, p3 = g4 * E3;
  let d2;
  const m3 = [];
  let A3 = l5[0];
  const S5 = 34887 === w2;
  for (let r12 = 0; r12 < c3; r12++) {
    if (d2 = new h2(p3), l5.length === c3) A3 = l5[r12], A3.length === p3 && (d2 = A3);
    else if (A3.length) if (o8 || S5) d2 = A3.length === p3 ? A3 : A3.slice(p3 * r12, p3 * (r12 + 1));
    else for (let e7 = 0; e7 < p3; e7++) d2[e7] = A3[e7 * c3 + r12];
    m3.push(d2);
  }
  const M3 = n11.noData ? n11.noData[0] : t6.noDataValue, P3 = n11.metadata ? n11.metadata.statistics : null, O3 = P3 ? P3.map((e7) => e7.min) : null, b3 = P3 ? P3.map((e7) => e7.max) : null, L3 = { pixelType: u6, width: g4, height: E3, pixels: m3, noDataValue: M3 };
  return null != M3 ? g(L3, M3, { matchAllNoData: t6?.matchAllNoData }) : O3 && b3 && t6.applyMinMaxConstraint && (L3.mask = D(m3, O3, b3)), L3;
}
async function K(e6, t6 = {}) {
  const n11 = t6.pyramidLevel || 0, a10 = t6.headerInfo || F(e6), { ifds: i9, noData: s3 } = a10;
  if (0 === i9.length) throw new Error("no valid image file directory");
  const l5 = _2(a10);
  if (l5) throw l5;
  let o8 = null;
  const f = -1 === n11 ? i9[i9.length - 1] : i9[n11], u6 = s3 ?? t6.noDataValue;
  if (o8 = a10.tileWidth ? await L(e6, a10, f) : R(e6, a10, f), !o8) return o8;
  if (null != u6) {
    g(o8, u6, { matchAllNoData: null == s3 && t6?.matchAllNoData });
  }
  return o8;
}

// node_modules/@arcgis/core/layers/raster/formats/RasterCodec.js
var g3 = (function(t6) {
  var e6, a10, i9, s3, r12, n11;
  function o8(t7) {
    var e7, a11, i10, s4, r13, n12, o9, h2, c3, l5, p3, d2, u6;
    for (this.data = t7, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, r13 = null; ; ) {
      switch (e7 = this.readUInt32(), h2 = function() {
        var t8, e8;
        for (e8 = [], t8 = 0; t8 < 4; ++t8) e8.push(String.fromCharCode(this.data[this.pos++]));
        return e8;
      }.call(this).join(""), h2) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(e7);
          break;
        case "fcTL":
          r13 && this.animation.frames.push(r13), this.pos += 4, r13 = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, s4 = this.readUInt16(), i10 = this.readUInt16() || 100, r13.delay = 1e3 * s4 / i10, r13.disposeOp = this.data[this.pos++], r13.blendOp = this.data[this.pos++], r13.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for ("fdAT" === h2 && (this.pos += 4, e7 -= 4), t7 = (null != r13 ? r13.data : void 0) || this.imgData, p3 = 0; 0 <= e7 ? p3 < e7 : p3 > e7; 0 <= e7 ? ++p3 : --p3) t7.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (this.transparency.indexed = this.read(e7), (c3 = 255 - this.transparency.indexed.length) > 0) for (d2 = 0; 0 <= c3 ? d2 < c3 : d2 > c3; 0 <= c3 ? ++d2 : --d2) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(e7)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(e7);
          }
          break;
        case "tEXt":
          n12 = (l5 = this.read(e7)).indexOf(0), o9 = String.fromCharCode.apply(String, l5.slice(0, n12)), this.text[o9] = String.fromCharCode.apply(String, l5.slice(n12 + 1));
          break;
        case "IEND":
          return r13 && this.animation.frames.push(r13), this.colors = function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }.call(this), this.hasAlphaChannel = 4 === (u6 = this.colorType) || 6 === u6, a11 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * a11, this.colorSpace = function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }.call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += e7;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return o8.load = function(t7, e7, a11) {
    var i10;
    return "function" == typeof e7 && (a11 = e7), (i10 = new XMLHttpRequest()).open("GET", t7, true), i10.responseType = "arraybuffer", i10.onload = function() {
      var t8;
      return t8 = new o8(new Uint8Array(i10.response || i10.mozResponseArrayBuffer)), "function" == typeof (null != e7 ? e7.getContext : void 0) && t8.render(e7), "function" == typeof a11 ? a11(t8) : void 0;
    }, i10.send(null);
  }, a10 = 1, i9 = 2, e6 = 0, o8.prototype.read = function(t7) {
    var e7, a11;
    for (a11 = [], e7 = 0; 0 <= t7 ? e7 < t7 : e7 > t7; 0 <= t7 ? ++e7 : --e7) a11.push(this.data[this.pos++]);
    return a11;
  }, o8.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o8.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o8.prototype.decodePixels = function(t7) {
    var e7, a11, i10, s4, r13, n12, o9, c3, l5, p3, d2, u6, f, m3, w2, g4, y3, x3, b3, k3, T3, C3, I3;
    if (null == t7 && (t7 = this.imgData), 0 === t7.length) return new Uint8Array(0);
    for (t7 = (t7 = new s(t7)).getBytes(), g4 = (u6 = this.pixelBitlength / 8) * this.width, f = new Uint8Array(g4 * this.height), n12 = t7.length, w2 = 0, m3 = 0, a11 = 0; m3 < n12; ) {
      switch (t7[m3++]) {
        case 0:
          for (s4 = b3 = 0; b3 < g4; s4 = b3 += 1) f[a11++] = t7[m3++];
          break;
        case 1:
          for (s4 = k3 = 0; k3 < g4; s4 = k3 += 1) e7 = t7[m3++], r13 = s4 < u6 ? 0 : f[a11 - u6], f[a11++] = (e7 + r13) % 256;
          break;
        case 2:
          for (s4 = T3 = 0; T3 < g4; s4 = T3 += 1) e7 = t7[m3++], i10 = (s4 - s4 % u6) / u6, y3 = w2 && f[(w2 - 1) * g4 + i10 * u6 + s4 % u6], f[a11++] = (y3 + e7) % 256;
          break;
        case 3:
          for (s4 = C3 = 0; C3 < g4; s4 = C3 += 1) e7 = t7[m3++], i10 = (s4 - s4 % u6) / u6, r13 = s4 < u6 ? 0 : f[a11 - u6], y3 = w2 && f[(w2 - 1) * g4 + i10 * u6 + s4 % u6], f[a11++] = (e7 + Math.floor((r13 + y3) / 2)) % 256;
          break;
        case 4:
          for (s4 = I3 = 0; I3 < g4; s4 = I3 += 1) e7 = t7[m3++], i10 = (s4 - s4 % u6) / u6, r13 = s4 < u6 ? 0 : f[a11 - u6], 0 === w2 ? y3 = x3 = 0 : (y3 = f[(w2 - 1) * g4 + i10 * u6 + s4 % u6], x3 = i10 && f[(w2 - 1) * g4 + (i10 - 1) * u6 + s4 % u6]), o9 = r13 + y3 - x3, c3 = Math.abs(o9 - r13), p3 = Math.abs(o9 - y3), d2 = Math.abs(o9 - x3), l5 = c3 <= p3 && c3 <= d2 ? r13 : p3 <= d2 ? y3 : x3, f[a11++] = (e7 + l5) % 256;
          break;
        default:
          throw new Error("Invalid filter algorithm: " + t7[m3 - 1]);
      }
      w2++;
    }
    return f;
  }, o8.prototype.decodePalette = function() {
    var t7, e7, a11, i10, s4, r13, n12, o9, h2;
    for (a11 = this.palette, r13 = this.transparency.indexed || [], s4 = new Uint8Array((r13.length || 0) + a11.length), i10 = 0, a11.length, t7 = 0, e7 = n12 = 0, o9 = a11.length; n12 < o9; e7 = n12 += 3) s4[i10++] = a11[e7], s4[i10++] = a11[e7 + 1], s4[i10++] = a11[e7 + 2], s4[i10++] = null != (h2 = r13[t7++]) ? h2 : 255;
    return s4;
  }, o8.prototype.copyToImageData = function(t7, e7) {
    var a11, i10, s4, r13, n12, o9, h2, c3, l5, p3, d2;
    if (i10 = this.colors, l5 = null, a11 = this.hasAlphaChannel, this.palette.length && (l5 = null != (d2 = this._decodedPalette) ? d2 : this._decodedPalette = this.decodePalette(), i10 = 4, a11 = true), c3 = (s4 = t7.data || t7).length, n12 = l5 || e7, r13 = o9 = 0, 1 === i10) for (; r13 < c3; ) h2 = l5 ? 4 * e7[r13 / 4] : o9, p3 = n12[h2++], s4[r13++] = p3, s4[r13++] = p3, s4[r13++] = p3, s4[r13++] = a11 ? n12[h2++] : this.transparency.grayscale && this.transparency.grayscale === p3 ? 0 : 255, o9 = h2;
    else for (; r13 < c3; ) h2 = l5 ? 4 * e7[r13 / 4] : o9, s4[r13++] = n12[h2++], s4[r13++] = n12[h2++], s4[r13++] = n12[h2++], s4[r13++] = a11 ? n12[h2++] : this.transparency.rgb && this.transparency.rgb[1] === n12[h2 - 3] && this.transparency.rgb[3] === n12[h2 - 2] && this.transparency.rgb[5] === n12[h2 - 1] ? 0 : 255, o9 = h2;
  }, o8.prototype.decode = function() {
    var t7;
    return t7 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t7, this.decodePixels()), t7;
  }, r12 = t6.document && t6.document.createElement("canvas"), n11 = r12 && r12.getContext("2d"), s3 = function(t7) {
    var e7;
    return n11.width = t7.width, n11.height = t7.height, n11.clearRect(0, 0, t7.width, t7.height), n11.putImageData(t7, 0, 0), (e7 = new Image()).src = r12.toDataURL(), e7;
  }, o8.prototype.decodeFrames = function(t7) {
    var e7, a11, i10, r13, n12, o9, h2, c3;
    if (this.animation) {
      for (c3 = [], a11 = n12 = 0, o9 = (h2 = this.animation.frames).length; n12 < o9; a11 = ++n12) e7 = h2[a11], i10 = t7.createImageData(e7.width, e7.height), r13 = this.decodePixels(new Uint8Array(e7.data)), this.copyToImageData(i10, r13), e7.imageData = i10, c3.push(e7.image = s3(i10));
      return c3;
    }
  }, o8.prototype.renderFrame = function(t7, s4) {
    var r13, n12, o9;
    return r13 = (n12 = this.animation.frames)[s4], o9 = n12[s4 - 1], 0 === s4 && t7.clearRect(0, 0, this.width, this.height), (null != o9 ? o9.disposeOp : void 0) === a10 ? t7.clearRect(o9.xOffset, o9.yOffset, o9.width, o9.height) : (null != o9 ? o9.disposeOp : void 0) === i9 && t7.putImageData(o9.imageData, o9.xOffset, o9.yOffset), r13.blendOp === e6 && t7.clearRect(r13.xOffset, r13.yOffset, r13.width, r13.height), t7.drawImage(r13.image, r13.xOffset, r13.yOffset);
  }, o8.prototype.animate = function(t7) {
    var e7, a11, i10, s4, r13, n12, o9 = this;
    return a11 = 0, n12 = this.animation, s4 = n12.numFrames, i10 = n12.frames, r13 = n12.numPlays, (e7 = function() {
      var n13, h2;
      if (n13 = a11++ % s4, h2 = i10[n13], o9.renderFrame(t7, n13), s4 > 1 && a11 / s4 < r13) return o9.animation._timeout = setTimeout(e7, h2.delay);
    })();
  }, o8.prototype.stopAnimation = function() {
    var t7;
    return clearTimeout(null != (t7 = this.animation) ? t7._timeout : void 0);
  }, o8.prototype.render = function(t7) {
    var e7, a11;
    return t7._png && t7._png.stopAnimation(), t7._png = this, t7.width = this.width, t7.height = this.height, e7 = t7.getContext("2d"), this.animation ? (this.decodeFrames(e7), this.animate(e7)) : (a11 = e7.createImageData(this.width, this.height), this.copyToImageData(a11, this.decodePixels()), e7.putImageData(a11, 0, 0));
  }, o8;
})(self);
var y2 = /* @__PURE__ */ new Set(["jpg", "png", "bmp", "gif"]);
async function x2(e6, a10) {
  if (!r11) throw new r("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
  await r6();
  const { offset: i9 } = a10, { width: n11, height: o8, pixelType: h2, statistics: c3, depthCount: l5, noDataValues: p3, bandMasks: d2, pixels: u6, mask: g4 } = u2(e6, { inputOffset: i9, returnInterleaved: a10.returnInterleaved }), y3 = new c2({ width: n11, height: o8, pixelType: h2.toLowerCase(), pixels: u6, mask: g4, statistics: c3.map(({ minValue: t6, maxValue: e7 }) => new l(t6, e7)), bandMasks: d2, depthCount: l5, noDataValues: p3 });
  return c3?.length || y3.updateStatistics(), y3;
}
async function b2(e6, a10) {
  await o5();
  const i9 = u3(e6);
  if (!i9) throw new r("rasterCodec:decode", "failed to decode the input data.");
  const { width: s3, height: r12, pixels: n11, pixelType: o8 } = i9, h2 = new c2({ width: s3, height: r12, pixelType: o8, pixels: n11 });
  return h2.updateStatistics(), h2;
}
async function k2(t6, a10) {
  const i9 = await K(t6, __spreadProps(__spreadValues({}, a10), { noDataValue: a10.tiffNoDataValue, matchAllNoData: a10.matchAllNoData }));
  n(i9);
  const s3 = new c2({ width: i9.width, height: i9.height, pixels: i9.pixels, pixelType: i9.pixelType.toLowerCase(), mask: i9.mask, bandMasks: i9.bandMasks, statistics: null });
  return s3.updateStatistics(), s3;
}
async function T2(t6, e6) {
  const a10 = await X(t6, e6.customOptions), i9 = new c2({ width: a10.width, height: a10.height, pixels: a10.pixels, pixelType: a10.pixelType.toLowerCase(), mask: a10.mask, statistics: null });
  return i9.updateStatistics(), i9;
}
function C2(t6, e6) {
  const a10 = e6.pixelType || "u8", i9 = c2.getPixelArrayConstructor(a10), s3 = "u8" === a10 ? t6 : new i9(t6.buffer), r12 = [], n11 = e6.planes || 1;
  if (1 === n11) r12.push(s3);
  else for (let h2 = 0; h2 < n11; h2++) {
    const a11 = (e6.width || 1) * (e6.height || t6.length), o9 = new i9(a11);
    for (let t7 = 0; t7 < a11; t7++) o9[t7] = s3[t7 * n11 + h2];
    r12.push(o9);
  }
  const o8 = new c2({ width: e6.width || 1, height: e6.height || t6.length, pixels: r12, pixelType: a10, statistics: null });
  return o8.updateStatistics(), o8;
}
function I2(t6, e6) {
  return C2(new s(new Uint8Array(t6)).getBytes(), e6);
}
function A2(t6, e6) {
  return C2(i5(t6, e6.offset, e6.eof, !e6.isInputBigEndian), e6);
}
function v2(t6, e6, a10) {
  const { pixelTypeCtor: i9 } = P2(e6.pixelType), s3 = (0, a7.decode)(t6, { width: e6.width, height: e6.height, pixelType: i9, format: a10 }), r12 = new c2({ width: e6.width, height: e6.height, pixels: s3.pixels, pixelType: e6.pixelType, mask: s3.mask, statistics: null });
  return r12.updateStatistics(), r12;
}
function D2(t6, e6) {
  const a10 = r5.decode(t6, e6.hasNoZlibMask ?? void 0), s3 = new c2({ width: a10.width, height: a10.height, pixels: a10.pixels, pixelType: "u8", mask: a10.mask, statistics: null });
  return s3.updateStatistics(), s3;
}
function U2(t6, e6) {
  const a10 = new Uint8Array(t6), i9 = new g3(a10), { width: s3, height: r12 } = e6, n11 = s3 * r12, o8 = i9.decode();
  let h2, c3 = 0, l5 = 0;
  const p3 = new Uint8Array(n11);
  for (c3 = 0; c3 < n11; c3++) p3[c3] = o8[4 * c3 + 3];
  const d2 = new c2({ width: s3, height: r12, pixels: [], pixelType: "u8", mask: p3, statistics: [] });
  for (c3 = 0; c3 < 3; c3++) {
    for (h2 = new Uint8Array(n11), l5 = 0; l5 < n11; l5++) h2[l5] = o8[4 * l5 + c3];
    d2.addData({ pixels: h2 });
  }
  return d2.updateStatistics(), d2;
}
async function S4(t6, e6, i9, s3) {
  const r12 = new i3(), n11 = __spreadValues({ applyJpegMask: false, format: e6 }, i9), o8 = await r12.decode(t6, n11, s3), h2 = new c2(o8);
  return h2.updateStatistics(), h2;
}
function j2(e6) {
  if (null == e6) throw new r("rasterCodec:decode", "parameter encodeddata is required.");
  const a10 = new Uint8Array(e6, 0, 10);
  let i9 = "";
  return 255 === a10[0] && 216 === a10[1] ? i9 = "jpg" : 137 === a10[0] && 80 === a10[1] && 78 === a10[2] && 71 === a10[3] ? i9 = "png" : 67 === a10[0] && 110 === a10[1] && 116 === a10[2] && 90 === a10[3] && 73 === a10[4] && 109 === a10[5] && 97 === a10[6] && 103 === a10[7] && 101 === a10[8] && 32 === a10[9] ? i9 = "lerc" : 76 === a10[0] && 101 === a10[1] && 114 === a10[2] && 99 === a10[3] && 50 === a10[4] && 32 === a10[5] ? i9 = "lerc2" : 73 === a10[0] && 73 === a10[1] && 42 === a10[2] && 0 === a10[3] || 77 === a10[0] && 77 === a10[1] && 0 === a10[2] && 42 === a10[3] || 73 === a10[0] && 73 === a10[1] && 43 === a10[2] && 0 === a10[3] || 77 === a10[0] && 77 === a10[1] && 0 === a10[2] && 43 === a10[3] ? i9 = "tiff" : 71 === a10[0] && 73 === a10[1] && 70 === a10[2] ? i9 = "gif" : 66 === a10[0] && 77 === a10[1] ? i9 = "bmp" : 81 === a10[0] && 66 === a10[1] && 51 === a10[2] ? i9 = "qb3" : String.fromCharCode.apply(null, a10).toLowerCase().includes("error") && (i9 = "error"), i9;
}
function O2(e6) {
  let a10 = null;
  switch (e6) {
    case "lerc":
    case "lerc2":
      a10 = x2;
      break;
    case "jpg":
      a10 = D2;
      break;
    case "png":
      a10 = U2;
      break;
    case "bsq":
    case "bip":
      a10 = (t6, a11) => v2(t6, a11, e6);
      break;
    case "tiff":
      a10 = k2;
      break;
    case "deflate":
      a10 = I2;
      break;
    case "lzw":
      a10 = A2;
      break;
    case "qb3":
      a10 = b2;
      break;
    case "error":
      a10 = () => {
        throw new r("rasterCodec:decode", "input data contains error");
      };
      break;
    default:
      a10 = () => {
        throw new r("rasterCodec:decode", "unsupported raster format");
      };
  }
  return a10;
}
function P2(t6) {
  let e6 = null, a10 = null;
  switch (t6 ? t6.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      a10 = 255, e6 = Uint8Array;
      break;
    case "u16":
      a10 = a10 || 65535, e6 = Uint16Array;
      break;
    case "u32":
      a10 = a10 || 2 ** 32 - 1, e6 = Uint32Array;
      break;
    case "s8":
      a10 = a10 || -128, e6 = Int8Array;
      break;
    case "s16":
      a10 = a10 || -32768, e6 = Int16Array;
      break;
    case "s32":
      a10 = a10 || 0 - 2 ** 31, e6 = Int32Array;
      break;
    default:
      e6 = Float32Array;
  }
  return { pixelTypeCtor: e6, noDataValue: a10 };
}
function M2(t6, e6 = 1) {
  if (!t6) return;
  const { pixels: a10, width: i9, height: s3, mask: r12 } = t6;
  if (!a10 || 0 === a10.length) return;
  const n11 = i9 - 1, o8 = s3 - 1, h2 = [];
  let c3 = null;
  const l5 = c2.getPixelArrayConstructor(t6.pixelType);
  if (0 === e6) {
    for (const t7 of a10) {
      const e7 = new l5(n11 * o8);
      for (let a11 = 0; a11 < o8; a11++) {
        const s4 = a11 * i9;
        for (let i10 = 0; i10 < n11; i10++) e7[a11 * n11 + i10] = t7[s4 + i10];
      }
      h2.push(e7);
    }
    if (null != r12) {
      c3 = new Uint8Array(n11 * o8);
      for (let t7 = 0; t7 < o8; t7++) {
        const e7 = t7 * i9;
        for (let a11 = 0; a11 < n11; a11++) c3[t7 * n11 + a11] = r12[e7 + a11];
      }
    }
  } else {
    for (const t7 of a10) {
      const e7 = new l5(n11 * o8);
      for (let a11 = 0; a11 < o8; a11++) {
        const s4 = a11 * i9;
        for (let r13 = 0; r13 < n11; r13++) e7[a11 * n11 + r13] = (t7[s4 + r13] + t7[s4 + r13 + 1] + t7[s4 + i9 + r13] + t7[s4 + i9 + r13 + 1]) / 4;
      }
      h2.push(e7);
    }
    if (r12) {
      c3 = new Uint8Array(n11 * o8);
      for (let t7 = 0; t7 < o8; t7++) {
        const e7 = t7 * i9;
        for (let a11 = 0; a11 < n11; a11++) c3[t7 * n11 + a11] = Math.min.apply(null, [r12[e7 + a11], r12[e7 + a11 + 1], r12[e7 + i9 + a11], r12[e7 + i9 + a11 + 1]]);
      }
    }
  }
  t6.width = n11, t6.height = o8, t6.mask = c3, t6.pixels = h2;
}
function L2(t6) {
  let e6 = j2(t6);
  return "lerc2" === e6 ? e6 = "lerc" : "error" === e6 && (e6 = ""), e6;
}
async function R2(e6, a10 = {}, i9) {
  if (null == e6) throw new r("rasterCodec:decode", "missing encodeddata parameter.");
  let s3 = a10.format?.toLowerCase();
  if (!("bsq" !== s3 && "bip" !== s3 || null != a10.width && null != a10.height)) throw new r("rasterCodec:decode", "requires width and height in options parameter.");
  if ("tiff" === s3 && a10.customOptions) return T2(e6, a10);
  if ((!s3 || "bsq" !== s3 && "bip" !== s3 && "deflate" !== s3 && "lzw" !== s3) && (s3 = j2(e6)), a10.useCanvas && y2.has(s3)) return S4(e6, s3, a10, i9);
  const r12 = O2(s3);
  let n11;
  a10.isPoint && (null != (a10 = __spreadValues({}, a10)).width && a10.width++, null != a10.height && a10.height++);
  const { offsets: h2 } = a10;
  if (h2 && h2.length > 1) {
    const t6 = h2.map((t7, i11) => r12(e6.slice(t7, h2[i11 + 1]), a10)), i10 = await Promise.all(t6);
    n11 = i10[0], n11.pixels = i10.map((t7) => t7.pixels[0]);
    const s4 = i10.map((t7) => t7.mask);
    i10.some((t7) => null != t7) && (s4.forEach((t7, e7) => {
      null == t7 && (s4[e7] = new Uint8Array(n11.width * n11.height).fill(255));
    }), n11.bandMasks = s4, n11.mask = c2.combineBandMasks(s4)), n11.updateStatistics();
  } else n11 = await r12(e6, __spreadProps(__spreadValues({}, a10), { offset: h2?.[0] ?? a10.offset }));
  return "jpg" !== s3 && null != a10.noDataValue && 1 === n11.depthCount && g(n11, a10.noDataValue, { customFloatTolerance: a10.tolerance }), a10.isPoint && M2(n11), n11;
}

// node_modules/@arcgis/core/layers/support/rasterEnums.js
var a8 = i()({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" });
var i8 = i()({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" });
var n8 = i()({ U1: "u1", U2: "u2", U4: "u4", U8: "u8", S8: "s8", U16: "u16", S16: "s16", U32: "u32", S32: "s32", F32: "f32", F64: "f64", C64: "c64", C128: "c128", UNKNOWN: "unknown" });

// node_modules/@arcgis/core/layers/support/RasterStorageInfo.js
var l4;
var p2 = class extends n2 {
  constructor() {
    super(...arguments), this.blockWidth = void 0, this.blockHeight = void 0, this.compression = null, this.origin = null, this.firstPyramidLevel = null, this.maximumPyramidLevel = null, this.pyramidScalingFactor = 2, this.pyramidBlockWidth = null, this.pyramidBlockHeight = null, this.isBsqTile = false, this.isVirtualTileInfo = false, this.tileInfo = null, this.transposeInfo = null, this.blockBoundary = null;
  }
  static {
    l4 = this;
  }
  clone() {
    return new l4({ blockWidth: this.blockWidth, blockHeight: this.blockHeight, compression: this.compression, origin: a(this.origin), firstPyramidLevel: this.firstPyramidLevel, maximumPyramidLevel: this.maximumPyramidLevel, pyramidResolutions: a(this.pyramidResolutions), pyramidScalingFactor: this.pyramidScalingFactor, pyramidBlockWidth: this.pyramidBlockWidth, pyramidBlockHeight: this.pyramidBlockHeight, isBsqTile: this.isBsqTile, isVirtualTileInfo: this.isVirtualTileInfo, tileInfo: a(this.tileInfo), transposeInfo: a(this.transposeInfo), blockBoundary: a(this.blockBoundary) });
  }
};
__decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "blockWidth", void 0), __decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "blockHeight", void 0), __decorate([a3({ type: String, json: { write: true } })], p2.prototype, "compression", void 0), __decorate([a3({ type: _, json: { write: true } })], p2.prototype, "origin", void 0), __decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "firstPyramidLevel", void 0), __decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "maximumPyramidLevel", void 0), __decorate([a3({ json: { write: true } })], p2.prototype, "pyramidResolutions", void 0), __decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "pyramidScalingFactor", void 0), __decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "pyramidBlockWidth", void 0), __decorate([a3({ type: Number, json: { write: true } })], p2.prototype, "pyramidBlockHeight", void 0), __decorate([a3({ json: { write: true } })], p2.prototype, "isBsqTile", void 0), __decorate([a3({ type: Boolean, json: { write: true } })], p2.prototype, "isVirtualTileInfo", void 0), __decorate([a3({ json: { write: true } })], p2.prototype, "tileInfo", void 0), __decorate([a3()], p2.prototype, "transposeInfo", void 0), __decorate([a3({ json: { write: true } })], p2.prototype, "blockBoundary", void 0), p2 = l4 = __decorate([c("esri.layers.support.RasterStorageInfo")], p2);

// node_modules/@arcgis/core/layers/support/RasterBandInfo.js
var n9;
function t5(e6) {
  return e6 = Number(e6), isNaN(e6) ? void 0 : e6;
}
var o7 = class extends n2 {
  static {
    n9 = this;
  }
  constructor(e6) {
    super(e6), this.name = null, this.minWavelength = void 0, this.maxWavelength = void 0, this.radianceBias = void 0, this.radianceGain = void 0, this.reflectanceBias = void 0, this.reflectanceGain = void 0, this.solarIrradiance = void 0;
  }
  clone() {
    return new n9({ name: this.name, minWavelength: this.minWavelength, maxWavelength: this.maxWavelength, radianceBias: this.radianceBias, radianceGain: this.radianceGain, reflectanceBias: this.reflectanceBias, reflectanceGain: this.reflectanceGain, solarIrradiance: this.solarIrradiance });
  }
};
__decorate([a3({ json: { name: "BandName", write: true } })], o7.prototype, "name", void 0), __decorate([a3({ json: { read: { source: ["WavelengthMin", "Wavelength"], reader: (e6, a10) => t5(a10.WavelengthMin ?? a10.Wavelength) }, write: { target: "WavelengthMin" } } })], o7.prototype, "minWavelength", void 0), __decorate([a3({ json: { name: "WavelengthMax", read: { reader: t5 }, write: true } })], o7.prototype, "maxWavelength", void 0), __decorate([a3({ json: { name: "RadianceBias", read: { reader: t5 }, write: true } })], o7.prototype, "radianceBias", void 0), __decorate([a3({ json: { name: "RadianceGain", read: { reader: t5 }, write: true } })], o7.prototype, "radianceGain", void 0), __decorate([a3({ json: { name: "ReflectanceBias", read: { reader: t5 }, write: true } })], o7.prototype, "reflectanceBias", void 0), __decorate([a3({ json: { name: "ReflectanceGain", read: { reader: t5 }, write: true } })], o7.prototype, "reflectanceGain", void 0), __decorate([a3({ json: { name: "SolarIrradiance", read: { reader: t5 }, write: true } })], o7.prototype, "solarIrradiance", void 0), o7 = n9 = __decorate([c("esri.layers.support.RasterBandInfo")], o7);

// node_modules/@arcgis/core/layers/support/RasterSensorInfo.js
var n10;
function a9(e6) {
  return e6 = Number(e6), isNaN(e6) ? void 0 : e6;
}
var u4 = class extends n2 {
  static {
    n10 = this;
  }
  constructor(e6) {
    super(e6), this.acquisitionDate = void 0, this.cloudCover = void 0, this.productName = void 0, this.sensorName = null, this.sensorAzimuth = void 0, this.sensorElevation = void 0, this.sunAzimuth = void 0, this.sunElevation = void 0;
  }
  readAcquisitionDate(e6) {
    return new Date(e6);
  }
  writeAcquisitionDate(e6, o8) {
    o8.AcquisitionDate = e6.getTime();
  }
  clone() {
    return new n10({ acquisitionDate: this.acquisitionDate, cloudCover: this.cloudCover, productName: this.productName, sensorName: this.sensorName, sensorAzimuth: this.sensorAzimuth, sensorElevation: this.sensorElevation, sunAzimuth: this.sunAzimuth, sunElevation: this.sunElevation });
  }
};
__decorate([a3({ type: Date, json: { name: "AcquisitionDate", write: true } })], u4.prototype, "acquisitionDate", void 0), __decorate([o("acquisitionDate")], u4.prototype, "readAcquisitionDate", null), __decorate([r2("acquisitionDate")], u4.prototype, "writeAcquisitionDate", null), __decorate([a3({ json: { name: "CloudCover", read: { reader: a9 }, write: true } })], u4.prototype, "cloudCover", void 0), __decorate([a3({ json: { name: "ProductName", write: true } })], u4.prototype, "productName", void 0), __decorate([a3({ json: { name: "SensorName", write: true } })], u4.prototype, "sensorName", void 0), __decorate([a3({ json: { name: "SensorAzimuth", read: { reader: a9 }, write: true } })], u4.prototype, "sensorAzimuth", void 0), __decorate([a3({ json: { name: "SensorElevation", read: { reader: a9 }, write: true } })], u4.prototype, "sensorElevation", void 0), __decorate([a3({ json: { name: "SunAzimuth", read: { reader: a9 }, write: true } })], u4.prototype, "sunAzimuth", void 0), __decorate([a3({ json: { name: "SunElevation", read: { reader: a9 }, write: true } })], u4.prototype, "sunElevation", void 0), u4 = n10 = __decorate([c("esri.layers.support.RasterSensorInfo")], u4);

// node_modules/@arcgis/core/layers/support/RasterInfo.js
var u5;
var m2 = class extends n2 {
  static {
    u5 = this;
  }
  constructor(t6) {
    super(t6), this.attributeTable = null, this.bandCount = null, this.colormap = null, this.extent = null, this.format = void 0, this.height = null, this.width = null, this.histograms = null, this.keyProperties = {}, this.multidimensionalInfo = null, this.noDataValue = null, this.pixelSize = null, this.pixelType = null, this.isPseudoSpatialReference = false, this.spatialReference = null, this.statistics = null, this.storageInfo = null, this.transform = null;
  }
  get bandInfos() {
    const t6 = this.keyProperties.BandProperties, { bandCount: e6 } = this;
    if (!t6?.length || t6.length < e6) {
      const t7 = [];
      for (let o9 = 1; o9 <= e6; o9++) t7.push(new o7({ name: "band_" + o9 }));
      return t7;
    }
    const o8 = t6.map((t7) => o7.fromJSON(t7));
    for (let i9 = 0; i9 < o8.length; i9++) o8[i9].name = o8[i9].name || "band_" + (i9 + 1);
    return o8;
  }
  get dataType() {
    const t6 = this.keyProperties?.DataType?.toLowerCase() ?? "generic";
    return "stdtime" === t6 ? "standard-time" : t6;
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(t6) {
    t6 && this._set("nativeExtent", t6);
  }
  get nativePixelSize() {
    if (null == this.transform || !this.transform.affectsPixelSize) return this.pixelSize;
    const t6 = this.nativeExtent;
    return { x: t6.width / this.width, y: t6.height / this.height };
  }
  get hasMultidimensionalTranspose() {
    return !!this.storageInfo?.transposeInfo;
  }
  get sensorInfo() {
    if (this.keyProperties?.SensorName) return u4.fromJSON(this.keyProperties);
  }
  clone() {
    return new u5({ attributeTable: a(this.attributeTable), bandCount: this.bandCount, colormap: a(this.colormap), extent: a(this.extent), format: this.format, height: this.height, width: this.width, histograms: a(this.histograms), keyProperties: a(this.keyProperties), multidimensionalInfo: a(this.multidimensionalInfo), noDataValue: this.noDataValue, pixelSize: a(this.pixelSize), pixelType: this.pixelType, isPseudoSpatialReference: this.isPseudoSpatialReference, spatialReference: a(this.spatialReference), statistics: a(this.statistics), storageInfo: a(this.storageInfo), transform: a(this.transform) });
  }
};
__decorate([a3({ json: { write: true } })], m2.prototype, "attributeTable", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "bandCount", void 0), __decorate([a3({ readOnly: true })], m2.prototype, "bandInfos", null), __decorate([a3({ json: { write: true } })], m2.prototype, "colormap", void 0), __decorate([a3({ type: String, readOnly: true })], m2.prototype, "dataType", null), __decorate([a3({ type: z, json: { write: true } })], m2.prototype, "extent", void 0), __decorate([a3({ type: z, json: { write: true } })], m2.prototype, "nativeExtent", null), __decorate([a3({ json: { write: true } })], m2.prototype, "nativePixelSize", null), __decorate([a3({ json: { write: true } })], m2.prototype, "format", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "height", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "width", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "hasMultidimensionalTranspose", null), __decorate([a3({ json: { write: true } })], m2.prototype, "histograms", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "keyProperties", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "multidimensionalInfo", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "noDataValue", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "pixelSize", void 0), __decorate([a3({ type: n8.apiValues, json: { write: true } })], m2.prototype, "pixelType", void 0), __decorate([a3()], m2.prototype, "isPseudoSpatialReference", void 0), __decorate([a3({ readOnly: true })], m2.prototype, "sensorInfo", null), __decorate([a3({ type: S, json: { write: true } })], m2.prototype, "spatialReference", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "statistics", void 0), __decorate([a3({ type: p2, json: { write: true } })], m2.prototype, "storageInfo", void 0), __decorate([a3({ json: { write: true } })], m2.prototype, "transform", void 0), m2 = u5 = __decorate([c("esri.layers.support.RasterInfo")], m2);

export {
  r10 as r,
  e5 as e,
  t4 as t,
  r11 as r2,
  N,
  k,
  C,
  G,
  v,
  H,
  Y,
  L2 as L,
  R2 as R,
  a8 as a,
  i8 as i,
  n8 as n,
  p2 as p,
  m2 as m
};
//# sourceMappingURL=chunk-CE5DK2OJ.js.map
