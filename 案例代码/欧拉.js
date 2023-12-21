data ={
    "province": "浙江省",
    "city": "嘉兴市",
    "dealer_type": 3,
    "site_id": "aGKWkpZvaZvFbJrKl5RilmiTmGebmJKZaWNvmpaYxpNoaJmZmmtl"
}
// data = {
//     "dealer_type": 4,
//     "city": "嘉兴市",
//     "site_id": "aGKWkpZtZZ2UnMOflZNoZGGTmGaalJNwlmVoaZOcmJNtZpyUzJuW"
// }
// const BigInteger  = require('big-integer');
var rng_state, rng_pptr = null;
rng_pool = [
    44,
    84,
    20,
    16,
    248,
    255,
    245,
    78,
    252,
    237,
    157,
    71,
    232,
    253,
    202,
    187,
    109,
    4,
    140,
    25,
    90,
    211,
    27,
    207,
    86,
    241,
    22,
    116,
    210,
    72,
    152,
    167,
    214,
    68,
    59,
    86,
    165,
    72,
    195,
    249,
    200,
    95,
    131,
    22,
    209,
    24,
    132,
    101,
    161,
    9,
    176,
    91,
    41,
    84,
    210,
    242,
    3,
    225,
    58,
    29,
    216,
    14,
    184,
    217,
    128,
    179,
    161,
    218,
    207,
    39,
    7,
    25,
    222,
    252,
    101,
    184,
    201,
    245,
    239,
    183,
    139,
    202,
    198,
    155,
    9,
    229,
    50,
    185,
    234,
    255,
    151,
    26,
    25,
    252,
    54,
    142,
    169,
    224,
    162,
    151,
    91,
    124,
    225,
    193,
    121,
    52,
    103,
    119,
    94,
    0,
    120,
    117,
    59,
    87,
    121,
    44,
    251,
    204,
    154,
    248,
    206,
    158,
    39,
    123,
    146,
    229,
    90,
    136,
    28,
    168,
    116,
    222,
    228,
    29,
    93,
    80,
    27,
    13,
    105,
    14,
    48,
    76,
    142,
    70,
    53,
    63,
    43,
    29,
    91,
    84,
    58,
    168,
    26,
    131,
    82,
    90,
    58,
    34,
    160,
    101,
    239,
    151,
    22,
    214,
    74,
    253,
    118,
    189,
    106,
    216,
    129,
    227,
    92,
    166,
    72,
    200,
    121,
    231,
    228,
    137,
    106,
    67,
    21,
    161,
    48,
    127,
    137,
    244,
    134,
    74,
    210,
    196,
    154,
    201,
    110,
    93,
    90,
    59,
    183,
    84,
    114,
    209,
    230,
    241,
    226,
    242,
    147,
    169,
    4,
    104,
    17,
    204,
    162,
    72,
    169,
    175,
    190,
    123,
    3,
    193,
    235,
    182,
    48,
    148,
    244,
    42,
    106,
    91,
    26,
    19,
    50,
    245,
    121,
    64,
    195,
    150,
    40,
    96,
    177,
    46,
    237,
    73,
    20,
    45,
    42,
    7,
    44,
    110,
    144,
    15,
    47,
    180,
    9,
    190,
    142,
    66
]
Base64 = {
        decode: function(a) {
            var i;
            if (void 0 === decoder$1) {
                for (decoder$1 = Object.create(null),
                i = 0; i < 64; ++i)
                    decoder$1["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i)] = i;
                for (i = 0; i < "= \f\n\r\t \u2028\u2029".length; ++i)
                    decoder$1["= \f\n\r\t \u2028\u2029".charAt(i)] = -1
            }
            var out = []
              , bits = 0
              , char_count = 0;
            for (i = 0; i < a.length; ++i) {
                var c = a.charAt(i);
                if ("=" == c)
                    break;
                if (-1 != (c = decoder$1[c])) {
                    if (void 0 === c)
                        throw new Error("Illegal character at offset " + i);
                    bits |= c,
                    ++char_count >= 4 ? (out[out.length] = bits >> 16,
                    out[out.length] = bits >> 8 & 255,
                    out[out.length] = 255 & bits,
                    bits = 0,
                    char_count = 0) : bits <<= 6
                }
            }
            switch (char_count) {
            case 1:
                throw new Error("Base64 encoding incomplete: at least 2 bits missing");
            case 2:
                out[out.length] = bits >> 10;
                break;
            case 3:
                out[out.length] = bits >> 16,
                out[out.length] = bits >> 8 & 255
            }
            return out
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function(a) {
            var m = Base64.re.exec(a);
            if (m)
                if (m[1])
                    a = m[1];
                else {
                    if (!m[2])
                        throw new Error("RegExp out of sync");
                    a = m[2]
                }
            return Base64.decode(a)
        }
    }
var hexcase = 0
  , b64pad = ""
  , chrsz = 8;
var signKey = "u*afNnLWi6g78K0dlOyIB9KHTfQmVPhvB"
function int2char(n) {
        return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(n)
    }
var newParam = {};
function nbits(x) {
        var t, r = 1;
        return 0 != (t = x >>> 16) && (x = t,
        r += 16),
        0 != (t = x >> 8) && (x = t,
        r += 8),
        0 != (t = x >> 4) && (x = t,
        r += 4),
        0 != (t = x >> 2) && (x = t,
        r += 2),
        0 != (t = x >> 1) && (x = t,
        r += 1),
        r
    }
function nbi() {
        return new BigInteger(null)
    }
ASN1Tag = function() {
        function ASN1Tag(stream) {
            var buf = stream.get();
            if (this.tagClass = buf >> 6,
            this.tagConstructed = 0 != (32 & buf),
            this.tagNumber = 31 & buf,
            31 == this.tagNumber) {
                var n = new Int10;
                do {
                    buf = stream.get(),
                    n.mulAdd(128, 127 & buf)
                } while (128 & buf);
                this.tagNumber = n.simplify()
            }
        }
        return ASN1Tag.prototype.isUniversal = function() {
            return 0 === this.tagClass
        }
        ,
        ASN1Tag.prototype.isEOC = function() {
            return 0 === this.tagClass && 0 === this.tagNumber
        }
        ,
        ASN1Tag
    }()
var Stream = function() {
        function Stream(enc, pos) {
            this.hexDigits = "0123456789ABCDEF",
            enc instanceof Stream ? (this.enc = enc.enc,
            this.pos = enc.pos) : (this.enc = enc,
            this.pos = pos)
        }
        return Stream.prototype.get = function(pos) {
            if (void 0 === pos && (pos = this.pos++),
            pos >= this.enc.length)
                throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
            return "string" == typeof this.enc ? this.enc.charCodeAt(pos) : this.enc[pos]
        }
        ,
        Stream.prototype.hexByte = function(b) {
            return this.hexDigits.charAt(b >> 4 & 15) + this.hexDigits.charAt(15 & b)
        }
        ,
        Stream.prototype.hexDump = function(start, end, raw) {
            for (var s = "", i = start; i < end; ++i)
                if (s += this.hexByte(this.get(i)),
                !0 !== raw)
                    switch (15 & i) {
                    case 7:
                        s += "  ";
                        break;
                    case 15:
                        s += "\n";
                        break;
                    default:
                        s += " "
                    }
            return s
        }
        ,
        Stream.prototype.isASCII = function(start, end) {
            for (var i = start; i < end; ++i) {
                var c = this.get(i);
                if (c < 32 || c > 176)
                    return !1
            }
            return !0
        }
        ,
        Stream.prototype.parseStringISO = function(start, end) {
            for (var s = "", i = start; i < end; ++i)
                s += String.fromCharCode(this.get(i));
            return s
        }
        ,
        Stream.prototype.parseStringUTF = function(start, end) {
            for (var s = "", i = start; i < end; ) {
                var c = this.get(i++);
                s += c < 128 ? String.fromCharCode(c) : c > 191 && c < 224 ? String.fromCharCode((31 & c) << 6 | 63 & this.get(i++)) : String.fromCharCode((15 & c) << 12 | (63 & this.get(i++)) << 6 | 63 & this.get(i++))
            }
            return s
        }
        ,
        Stream.prototype.parseStringBMP = function(start, end) {
            for (var hi, lo, str = "", i = start; i < end; )
                hi = this.get(i++),
                lo = this.get(i++),
                str += String.fromCharCode(hi << 8 | lo);
            return str
        }
        ,
        Stream.prototype.parseTime = function(start, end, shortYear) {
            var s = this.parseStringISO(start, end)
              , m = (shortYear ? reTimeS : reTimeL).exec(s);
            return m ? (shortYear && (m[1] = +m[1],
            m[1] += +m[1] < 70 ? 2e3 : 1900),
            s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4],
            m[5] && (s += ":" + m[5],
            m[6] && (s += ":" + m[6],
            m[7] && (s += "." + m[7]))),
            m[8] && (s += " UTC",
            "Z" != m[8] && (s += m[8],
            m[9] && (s += ":" + m[9]))),
            s) : "Unrecognized time: " + s
        }
        ,
        Stream.prototype.parseInteger = function(start, end) {
            for (var len, v = this.get(start), neg = v > 127, pad = neg ? 255 : 0, s = ""; v == pad && ++start < end; )
                v = this.get(start);
            if (0 === (len = end - start))
                return neg ? -1 : 0;
            if (len > 4) {
                for (s = v,
                len <<= 3; 0 == (128 & (+s ^ pad)); )
                    s = +s << 1,
                    --len;
                s = "(" + len + " bit)\n"
            }
            neg && (v -= 256);
            for (var n = new Int10(v), i = start + 1; i < end; ++i)
                n.mulAdd(256, this.get(i));
            return s + n.toString()
        }
        ,
        Stream.prototype.parseBitString = function(start, end, maxLength) {
            for (var unusedBit = this.get(start), intro = "(" + ((end - start - 1 << 3) - unusedBit) + " bit)\n", s = "", i = start + 1; i < end; ++i) {
                for (var b = this.get(i), skip = i == end - 1 ? unusedBit : 0, j = 7; j >= skip; --j)
                    s += b >> j & 1 ? "1" : "0";
                if (s.length > maxLength)
                    return intro + stringCut(s, maxLength)
            }
            return intro + s
        }
        ,
        Stream.prototype.parseOctetString = function(start, end, maxLength) {
            if (this.isASCII(start, end))
                return stringCut(this.parseStringISO(start, end), maxLength);
            var len = end - start
              , s = "(" + len + " byte)\n";
            len > (maxLength /= 2) && (end = start + maxLength);
            for (var i = start; i < end; ++i)
                s += this.hexByte(this.get(i));
            return len > maxLength && (s += "…"),
            s
        }
        ,
        Stream.prototype.parseOID = function(start, end, maxLength) {
            for (var s = "", n = new Int10, bits = 0, i = start; i < end; ++i) {
                var v = this.get(i);
                if (n.mulAdd(128, 127 & v),
                bits += 7,
                !(128 & v)) {
                    if ("" === s)
                        if ((n = n.simplify())instanceof Int10)
                            n.sub(80),
                            s = "2." + n.toString();
                        else {
                            var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                            s = m + "." + (n - 40 * m)
                        }
                    else
                        s += "." + n.toString();
                    if (s.length > maxLength)
                        return stringCut(s, maxLength);
                    n = new Int10,
                    bits = 0
                }
            }
            return bits > 0 && (s += ".incomplete"),
            s
        }
        ,
        Stream
    }()
Montgomery = function() {
        function Montgomery(m) {
            this.m = m,
            this.mp = m.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << 28 - 15) - 1,
            this.mt2 = 2 * m.t
        }
        return Montgomery.prototype.convert = function(x) {
            var r = nbi();
            return x.abs().dlShiftTo(this.m.t, r),
            r.divRemTo(this.m, null, r),
            x.s < 0 && r.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(r, r),
            r
        }
        ,
        Montgomery.prototype.revert = function(x) {
            var r = nbi();
            return x.copyTo(r),
            this.reduce(r),
            r
        }
        ,
        Montgomery.prototype.reduce = function(x) {
            for (; x.t <= this.mt2; )
                x[x.t++] = 0;
            for (var i = 0; i < this.m.t; ++i) {
                var j = 32767 & x[i]
                  , u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & 268435455;
                for (x[j = i + this.m.t] += this.m.am(0, u0, x, i, 0, this.m.t); x[j] >= 268435456; )
                    x[j] -= 268435456,
                    x[++j]++
            }
            x.clamp(),
            x.drShiftTo(this.m.t, x),
            x.compareTo(this.m) >= 0 && x.subTo(this.m, x)
        }
        ,
        Montgomery.prototype.mulTo = function(x, y, r) {
            x.multiplyTo(y, r),
            this.reduce(r)
        }
        ,
        Montgomery.prototype.sqrTo = function(x, r) {
            x.squareTo(r),
            this.reduce(r)
        }
        ,
        Montgomery
    }()

function parseBigInt(str, r) {
        return new BigInteger(str,r)
    }
var rr, vv, BI_RC = [];
    for (rr = "0".charCodeAt(0),
    vv = 0; vv <= 9; ++vv)
        BI_RC[rr++] = vv;
    for (rr = "a".charCodeAt(0),
    vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
    for (rr = "A".charCodeAt(0),
    vv = 10; vv < 36; ++vv)
        BI_RC[rr++] = vv;
function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return null == c ? -1 : c
    }
ASN1 = function() {
        function ASN1(stream, header, length, tag, sub) {
            if (!(tag instanceof ASN1Tag))
                throw new Error("Invalid tag value.");
            this.stream = stream,
            this.header = header,
            this.length = length,
            this.tag = tag,
            this.sub = sub
        }
        return ASN1.prototype.typeName = function() {
            switch (this.tag.tagClass) {
            case 0:
                switch (this.tag.tagNumber) {
                case 0:
                    return "EOC";
                case 1:
                    return "BOOLEAN";
                case 2:
                    return "INTEGER";
                case 3:
                    return "BIT_STRING";
                case 4:
                    return "OCTET_STRING";
                case 5:
                    return "NULL";
                case 6:
                    return "OBJECT_IDENTIFIER";
                case 7:
                    return "ObjectDescriptor";
                case 8:
                    return "EXTERNAL";
                case 9:
                    return "REAL";
                case 10:
                    return "ENUMERATED";
                case 11:
                    return "EMBEDDED_PDV";
                case 12:
                    return "UTF8String";
                case 16:
                    return "SEQUENCE";
                case 17:
                    return "SET";
                case 18:
                    return "NumericString";
                case 19:
                    return "PrintableString";
                case 20:
                    return "TeletexString";
                case 21:
                    return "VideotexString";
                case 22:
                    return "IA5String";
                case 23:
                    return "UTCTime";
                case 24:
                    return "GeneralizedTime";
                case 25:
                    return "GraphicString";
                case 26:
                    return "VisibleString";
                case 27:
                    return "GeneralString";
                case 28:
                    return "UniversalString";
                case 30:
                    return "BMPString"
                }
                return "Universal_" + this.tag.tagNumber.toString();
            case 1:
                return "Application_" + this.tag.tagNumber.toString();
            case 2:
                return "[" + this.tag.tagNumber.toString() + "]";
            case 3:
                return "Private_" + this.tag.tagNumber.toString()
            }
        }
        ,
        ASN1.prototype.content = function(maxLength) {
            if (void 0 === this.tag)
                return null;
            void 0 === maxLength && (maxLength = 1 / 0);
            var content = this.posContent()
              , len = Math.abs(this.length);
            if (!this.tag.isUniversal())
                return null !== this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(content, content + len, maxLength);
            switch (this.tag.tagNumber) {
            case 1:
                return 0 === this.stream.get(content) ? "false" : "true";
            case 2:
                return this.stream.parseInteger(content, content + len);
            case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(content, content + len, maxLength);
            case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(content, content + len, maxLength);
            case 6:
                return this.stream.parseOID(content, content + len, maxLength);
            case 16:
            case 17:
                return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
            case 12:
                return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
                return stringCut(this.stream.parseStringISO(content, content + len), maxLength);
            case 30:
                return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);
            case 23:
            case 24:
                return this.stream.parseTime(content, content + len, 23 == this.tag.tagNumber)
            }
            return null
        }
        ,
        ASN1.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
        }
        ,
        ASN1.prototype.toPrettyString = function(indent) {
            void 0 === indent && (indent = "");
            var s = indent + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0 && (s += "+"),
            s += this.length,
            this.tag.tagConstructed ? s += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (s += " (encapsulates)"),
            s += "\n",
            null !== this.sub) {
                indent += "  ";
                for (var i = 0, max = this.sub.length; i < max; ++i)
                    s += this.sub[i].toPrettyString(indent)
            }
            return s
        }
        ,
        ASN1.prototype.posStart = function() {
            return this.stream.pos
        }
        ,
        ASN1.prototype.posContent = function() {
            return this.stream.pos + this.header
        }
        ,
        ASN1.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length)
        }
        ,
        ASN1.prototype.toHexString = function() {
            return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
        }
        ,
        ASN1.decodeLength = function(stream) {
            var buf = stream.get()
              , len = 127 & buf;
            if (len == buf)
                return len;
            if (len > 6)
                throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
            if (0 === len)
                return null;
            buf = 0;
            for (var i = 0; i < len; ++i)
                buf = 256 * buf + stream.get();
            return buf
        }
        ,
        ASN1.prototype.getHexStringValue = function() {
            var hexString = this.toHexString()
              , offset = 2 * this.header
              , length = 2 * this.length;
            return hexString.substr(offset, length)
        }
        ,
        ASN1.decode = function(str) {
            var stream;
            stream = str instanceof Stream ? str : new Stream(str,0);
            var streamStart = new Stream(stream)
              , tag = new ASN1Tag(stream)
              , len = ASN1.decodeLength(stream)
              , start = stream.pos
              , header = start - streamStart.pos
              , sub = null
              , getSub = function() {
                var ret = [];
                if (null !== len) {
                    for (var end = start + len; stream.pos < end; )
                        ret[ret.length] = ASN1.decode(stream);
                    if (stream.pos != end)
                        throw new Error("Content size is not correct for container starting at offset " + start)
                } else
                    try {
                        for (; ; ) {
                            var s = ASN1.decode(stream);
                            if (s.tag.isEOC())
                                break;
                            ret[ret.length] = s
                        }
                        len = start - stream.pos
                    } catch (e) {
                        throw new Error("Exception while decoding undefined length content: " + e)
                    }
                return ret
            };
            if (tag.tagConstructed)
                sub = getSub();
            else if (tag.isUniversal() && (3 == tag.tagNumber || 4 == tag.tagNumber))
                try {
                    if (3 == tag.tagNumber && 0 != stream.get())
                        throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                    sub = getSub();
                    for (var i = 0; i < sub.length; ++i)
                        if (sub[i].tag.isEOC())
                            throw new Error("EOC is not supposed to be actual content.")
                } catch (e) {
                    sub = null
                }
            if (null === sub) {
                if (null === len)
                    throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
                stream.pos = start + Math.abs(len)
            }
            return new ASN1(streamStart,header,len,tag,sub)
        }
        ,
        ASN1
    }()
var decoder, extendStatics = function(d, b) {
        return (extendStatics = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(d, b) {
            d.__proto__ = b
        }
        || function(d, b) {
            for (var p in b)
                b.hasOwnProperty(p) && (d[p] = b[p])
        }
        )(d, b)
    }
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
BigInteger = function() {
        function BigInteger(a, b, c) {
            null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
        }
        return BigInteger.prototype.toString = function(b) {
            if (this.s < 0)
                return "-" + this.negate().toString(b);
            var k;
            if (16 == b)
                k = 4;
            else if (8 == b)
                k = 3;
            else if (2 == b)
                k = 1;
            else if (32 == b)
                k = 5;
            else {
                if (4 != b)
                    return this.toRadix(b);
                k = 2
            }
            var d, km = (1 << k) - 1, m = !1, r = "", i = this.t, p =  28 - i *  28 % k;
            if (i-- > 0)
                for (p <  28 && (d = this[i] >> p) > 0 && (m = !0,
                r = int2char(d)); i >= 0; )
                    p < k ? (d = (this[i] & (1 << p) - 1) << k - p,
                    d |= this[--i] >> (p +=  28 - k)) : (d = this[i] >> (p -= k) & km,
                    p <= 0 && (p +=  28,
                    --i)),
                    d > 0 && (m = !0),
                    m && (r += int2char(d));
            return m ? r : "0"
        }
        ,
         BigInteger.prototype.am = function(i, x, w, j, c, n) {
        for (var xl = 16383 & x, xh = x >> 14; --n >= 0; ) {
            var l = 16383 & this[i]
              , h = this[i++] >> 14
              , m = xh * l + h * xl;
            c = ((l = xl * l + ((16383 & m) << 14) + w[j] + c) >> 28) + (m >> 14) + xh * h,
            w[j++] = 268435455 & l
        }
        return c
    }
    ,
        BigInteger.prototype.negate = function() {
            var r = nbi();
            return BigInteger.ZERO.subTo(this, r),
            r
        }
        ,
        BigInteger.prototype.abs = function() {
            return this.s < 0 ? this.negate() : this
        }
        ,
        BigInteger.prototype.compareTo = function(a) {
            var r = this.s - a.s;
            if (0 != r)
                return r;
            var i = this.t;
            if (0 != (r = i - a.t))
                return this.s < 0 ? -r : r;
            for (; --i >= 0; )
                if (0 != (r = this[i] - a[i]))
                    return r;
            return 0
        }
        ,
        BigInteger.prototype.bitLength = function() {
            return this.t <= 0 ? 0 :  28 * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & 268435455)
        }
        ,
        BigInteger.prototype.mod = function(a) {
            var r = nbi();
            return this.abs().divRemTo(a, null, r),
            this.s < 0 && r.compareTo(BigInteger.ZERO) > 0 && a.subTo(r, r),
            r
        }
        ,
        BigInteger.prototype.modPowInt = function(e, m) {
            var z;
            return z = e < 256 || m.isEven() ? new Classic(m) : new Montgomery(m),
            this.exp(e, z)
        }
        ,
        BigInteger.prototype.clone = function() {
            var r = nbi();
            return this.copyTo(r),
            r
        }
        ,
        BigInteger.prototype.intValue = function() {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - 268435456;
                if (0 == this.t)
                    return -1
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0
            }
            return (this[1] & (1 << 32 -  28) - 1) <<  28 | this[0]
        }
        ,
        BigInteger.prototype.byteValue = function() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24
        }
        ,
        BigInteger.prototype.shortValue = function() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16
        }
        ,
        BigInteger.prototype.signum = function() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
        }
        ,
        BigInteger.prototype.toByteArray = function() {
            var i = this.t
              , r = [];
            r[0] = this.s;
            var d, p =  28 - i *  28 % 8, k = 0;
            if (i-- > 0)
                for (p <  28 && (d = this[i] >> p) != (this.s & 268435455) >> p && (r[k++] = d | this.s <<  28 - p); i >= 0; )
                    p < 8 ? (d = (this[i] & (1 << p) - 1) << 8 - p,
                    d |= this[--i] >> (p +=  28 - 8)) : (d = this[i] >> (p -= 8) & 255,
                    p <= 0 && (p +=  28,
                    --i)),
                    0 != (128 & d) && (d |= -256),
                    0 == k && (128 & this.s) != (128 & d) && ++k,
                    (k > 0 || d != this.s) && (r[k++] = d);
            return r
        }
        ,
        BigInteger.prototype.equals = function(a) {
            return 0 == this.compareTo(a)
        }
        ,
        BigInteger.prototype.min = function(a) {
            return this.compareTo(a) < 0 ? this : a
        }
        ,
        BigInteger.prototype.max = function(a) {
            return this.compareTo(a) > 0 ? this : a
        }
        ,
        BigInteger.prototype.and = function(a) {
            var r = nbi();
            return this.bitwiseTo(a, op_and, r),
            r
        }
        ,
        BigInteger.prototype.or = function(a) {
            var r = nbi();
            return this.bitwiseTo(a, op_or, r),
            r
        }
        ,
        BigInteger.prototype.xor = function(a) {
            var r = nbi();
            return this.bitwiseTo(a, op_xor, r),
            r
        }
        ,
        BigInteger.prototype.andNot = function(a) {
            var r = nbi();
            return this.bitwiseTo(a, op_andnot, r),
            r
        }
        ,
        BigInteger.prototype.not = function() {
            for (var r = nbi(), i = 0; i < this.t; ++i)
                r[i] = 268435455 & ~this[i];
            return r.t = this.t,
            r.s = ~this.s,
            r
        }
        ,
        BigInteger.prototype.shiftLeft = function(n) {
            var r = nbi();
            return n < 0 ? this.rShiftTo(-n, r) : this.lShiftTo(n, r),
            r
        }
        ,
        BigInteger.prototype.shiftRight = function(n) {
            var r = nbi();
            return n < 0 ? this.lShiftTo(-n, r) : this.rShiftTo(n, r),
            r
        }
        ,
        BigInteger.prototype.getLowestSetBit = function() {
            for (var i = 0; i < this.t; ++i)
                if (0 != this[i])
                    return i *  28 + lbit(this[i]);
            return this.s < 0 ? this.t *  28 : -1
        }
        ,
        BigInteger.prototype.bitCount = function() {
            for (var r = 0, x = this.s & 268435455, i = 0; i < this.t; ++i)
                r += cbit(this[i] ^ x);
            return r
        }
        ,
        BigInteger.prototype.testBit = function(n) {
            var j = Math.floor(n /  28);
            return j >= this.t ? 0 != this.s : 0 != (this[j] & 1 << n %  28)
        }
        ,
        BigInteger.prototype.setBit = function(n) {
            return this.changeBit(n, op_or)
        }
        ,
        BigInteger.prototype.clearBit = function(n) {
            return this.changeBit(n, op_andnot)
        }
        ,
        BigInteger.prototype.flipBit = function(n) {
            return this.changeBit(n, op_xor)
        }
        ,
        BigInteger.prototype.add = function(a) {
            var r = nbi();
            return this.addTo(a, r),
            r
        }
        ,
        BigInteger.prototype.subtract = function(a) {
            var r = nbi();
            return this.subTo(a, r),
            r
        }
        ,
        BigInteger.prototype.multiply = function(a) {
            var r = nbi();
            return this.multiplyTo(a, r),
            r
        }
        ,
        BigInteger.prototype.divide = function(a) {
            var r = nbi();
            return this.divRemTo(a, r, null),
            r
        }
        ,
        BigInteger.prototype.remainder = function(a) {
            var r = nbi();
            return this.divRemTo(a, null, r),
            r
        }
        ,
        BigInteger.prototype.divideAndRemainder = function(a) {
            var q = nbi()
              , r = nbi();
            return this.divRemTo(a, q, r),
            [q, r]
        }
        ,
        BigInteger.prototype.modPow = function(e, m) {
            var k, z, i = e.bitLength(), r = nbv(1);
            if (i <= 0)
                return r;
            k = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6,
            z = i < 8 ? new Classic(m) : m.isEven() ? new Barrett(m) : new Montgomery(m);
            var g = []
              , n = 3
              , k1 = k - 1
              , km = (1 << k) - 1;
            if (g[1] = z.convert(this),
            k > 1) {
                var g2 = nbi();
                for (z.sqrTo(g[1], g2); n <= km; )
                    g[n] = nbi(),
                    z.mulTo(g2, g[n - 2], g[n]),
                    n += 2
            }
            var w, t, j = e.t - 1, is1 = !0, r2 = nbi();
            for (i = nbits(e[j]) - 1; j >= 0; ) {
                for (i >= k1 ? w = e[j] >> i - k1 & km : (w = (e[j] & (1 << i + 1) - 1) << k1 - i,
                j > 0 && (w |= e[j - 1] >>  28 + i - k1)),
                n = k; 0 == (1 & w); )
                    w >>= 1,
                    --n;
                if ((i -= n) < 0 && (i +=  28,
                --j),
                is1)
                    g[w].copyTo(r),
                    is1 = !1;
                else {
                    for (; n > 1; )
                        z.sqrTo(r, r2),
                        z.sqrTo(r2, r),
                        n -= 2;
                    n > 0 ? z.sqrTo(r, r2) : (t = r,
                    r = r2,
                    r2 = t),
                    z.mulTo(r2, g[w], r)
                }
                for (; j >= 0 && 0 == (e[j] & 1 << i); )
                    z.sqrTo(r, r2),
                    t = r,
                    r = r2,
                    r2 = t,
                    --i < 0 && (i =  28 - 1,
                    --j)
            }
            return z.revert(r)
        }
        ,
        BigInteger.prototype.modInverse = function(m) {
            var ac = m.isEven();
            if (this.isEven() && ac || 0 == m.signum())
                return BigInteger.ZERO;
            for (var u = m.clone(), v = this.clone(), a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1); 0 != u.signum(); ) {
                for (; u.isEven(); )
                    u.rShiftTo(1, u),
                    ac ? (a.isEven() && b.isEven() || (a.addTo(this, a),
                    b.subTo(m, b)),
                    a.rShiftTo(1, a)) : b.isEven() || b.subTo(m, b),
                    b.rShiftTo(1, b);
                for (; v.isEven(); )
                    v.rShiftTo(1, v),
                    ac ? (c.isEven() && d.isEven() || (c.addTo(this, c),
                    d.subTo(m, d)),
                    c.rShiftTo(1, c)) : d.isEven() || d.subTo(m, d),
                    d.rShiftTo(1, d);
                u.compareTo(v) >= 0 ? (u.subTo(v, u),
                ac && a.subTo(c, a),
                b.subTo(d, b)) : (v.subTo(u, v),
                ac && c.subTo(a, c),
                d.subTo(b, d))
            }
            return 0 != v.compareTo(BigInteger.ONE) ? BigInteger.ZERO : d.compareTo(m) >= 0 ? d.subtract(m) : d.signum() < 0 ? (d.addTo(m, d),
            d.signum() < 0 ? d.add(m) : d) : d
        }
        ,
        BigInteger.prototype.pow = function(e) {
            return this.exp(e, new NullExp)
        }
        ,
        BigInteger.prototype.gcd = function(a) {
            var x = this.s < 0 ? this.negate() : this.clone()
              , y = a.s < 0 ? a.negate() : a.clone();
            if (x.compareTo(y) < 0) {
                var t = x;
                x = y,
                y = t
            }
            var i = x.getLowestSetBit()
              , g = y.getLowestSetBit();
            if (g < 0)
                return x;
            for (i < g && (g = i),
            g > 0 && (x.rShiftTo(g, x),
            y.rShiftTo(g, y)); x.signum() > 0; )
                (i = x.getLowestSetBit()) > 0 && x.rShiftTo(i, x),
                (i = y.getLowestSetBit()) > 0 && y.rShiftTo(i, y),
                x.compareTo(y) >= 0 ? (x.subTo(y, x),
                x.rShiftTo(1, x)) : (y.subTo(x, y),
                y.rShiftTo(1, y));
            return g > 0 && y.lShiftTo(g, y),
            y
        }
        ,
        BigInteger.prototype.isProbablePrime = function(t) {
            var i, x = this.abs();
            if (1 == x.t && x[0] <= lowprimes[lowprimes.length - 1]) {
                for (i = 0; i < lowprimes.length; ++i)
                    if (x[0] == lowprimes[i])
                        return !0;
                return !1
            }
            if (x.isEven())
                return !1;
            for (i = 1; i < lowprimes.length; ) {
                for (var m = lowprimes[i], j = i + 1; j < lowprimes.length && m < lplim; )
                    m *= lowprimes[j++];
                for (m = x.modInt(m); i < j; )
                    if (m % lowprimes[i++] == 0)
                        return !1
            }
            return x.millerRabin(t)
        }
        ,
        BigInteger.prototype.copyTo = function(r) {
            for (var i = this.t - 1; i >= 0; --i)
                r[i] = this[i];
            r.t = this.t,
            r.s = this.s
        }
        ,
        BigInteger.prototype.fromInt = function(x) {
            this.t = 1,
            this.s = x < 0 ? -1 : 0,
            x > 0 ? this[0] = x : x < -1 ? this[0] = x + 268435456 : this.t = 0
        }
        ,
        BigInteger.prototype.fromString = function(s, b) {
            var k;
            if (16 == b)
                k = 4;
            else if (8 == b)
                k = 3;
            else if (256 == b)
                k = 8;
            else if (2 == b)
                k = 1;
            else if (32 == b)
                k = 5;
            else {
                if (4 != b)
                    return void this.fromRadix(s, b);
                k = 2
            }
            this.t = 0,
            this.s = 0;
            for (var i = s.length, mi = !1, sh = 0; --i >= 0; ) {
                var x = 8 == k ? 255 & +s[i] : intAt(s, i);
                x < 0 ? "-" == s.charAt(i) && (mi = !0) : (mi = !1,
                0 == sh ? this[this.t++] = x : sh + k > 28 ? (this[this.t - 1] |= (x & (1 << 28 - sh) - 1) << sh,
                this[this.t++] = x >> 28 - sh) : this[this.t - 1] |= x << sh,
                (sh += k) >= 28 && (sh -= 28))
            }
            8 == k && 0 != (128 & +s[0]) && (this.s = -1,
            sh > 0 && (this[this.t - 1] |= (1 << 28 - sh) - 1 << sh)),
            this.clamp(),
            mi && BigInteger.ZERO.subTo(this, this)
        }
        ,
        BigInteger.prototype.clamp = function() {
            for (var c = this.s & 268435455; this.t > 0 && this[this.t - 1] == c; )
                --this.t
        }
        ,
        BigInteger.prototype.dlShiftTo = function(n, r) {
            var i;
            for (i = this.t - 1; i >= 0; --i)
                r[i + n] = this[i];
            for (i = n - 1; i >= 0; --i)
                r[i] = 0;
            r.t = this.t + n,
            r.s = this.s
        }
        ,
        BigInteger.prototype.drShiftTo = function(n, r) {
            for (var i = n; i < this.t; ++i)
                r[i - n] = this[i];
            r.t = Math.max(this.t - n, 0),
            r.s = this.s
        }
        ,
        BigInteger.prototype.lShiftTo = function(n, r) {
            for (var bs = n %  28, cbs =  28 - bs, bm = (1 << cbs) - 1, ds = Math.floor(n /  28), c = this.s << bs & 268435455, i = this.t - 1; i >= 0; --i)
                r[i + ds + 1] = this[i] >> cbs | c,
                c = (this[i] & bm) << bs;
            for (i = ds - 1; i >= 0; --i)
                r[i] = 0;
            r[ds] = c,
            r.t = this.t + ds + 1,
            r.s = this.s,
            r.clamp()
        }
        ,
        BigInteger.prototype.rShiftTo = function(n, r) {
            r.s = this.s;
            var ds = Math.floor(n /  28);
            if (ds >= this.t)
                r.t = 0;
            else {
                var bs = n %  28
                  , cbs =  28 - bs
                  , bm = (1 << bs) - 1;
                r[0] = this[ds] >> bs;
                for (var i = ds + 1; i < this.t; ++i)
                    r[i - ds - 1] |= (this[i] & bm) << cbs,
                    r[i - ds] = this[i] >> bs;
                bs > 0 && (r[this.t - ds - 1] |= (this.s & bm) << cbs),
                r.t = this.t - ds,
                r.clamp()
            }
        }
        ,
        BigInteger.prototype.subTo = function(a, r) {
            for (var i = 0, c = 0, m = Math.min(a.t, this.t); i < m; )
                c += this[i] - a[i],
                r[i++] = c & 268435455,
                c >>=  28;
            if (a.t < this.t) {
                for (c -= a.s; i < this.t; )
                    c += this[i],
                    r[i++] = c & 268435455,
                    c >>=  28;
                c += this.s
            } else {
                for (c += this.s; i < a.t; )
                    c -= a[i],
                    r[i++] = c & 268435455,
                    c >>=  28;
                c -= a.s
            }
            r.s = c < 0 ? -1 : 0,
            c < -1 ? r[i++] = 268435456 + c : c > 0 && (r[i++] = c),
            r.t = i,
            r.clamp()
        }
        ,
        BigInteger.prototype.multiplyTo = function(a, r) {
            var x = this.abs()
              , y = a.abs()
              , i = x.t;
            for (r.t = i + y.t; --i >= 0; )
                r[i] = 0;
            for (i = 0; i < y.t; ++i)
                r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
            r.s = 0,
            r.clamp(),
            this.s != a.s && BigInteger.ZERO.subTo(r, r)
        }
        ,
        BigInteger.prototype.squareTo = function(r) {
            for (var x = this.abs(), i = r.t = 2 * x.t; --i >= 0; )
                r[i] = 0;
            for (i = 0; i < x.t - 1; ++i) {
                var c = x.am(i, x[i], r, 2 * i, 0, 1);
                (r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= 268435456 && (r[i + x.t] -= 268435456,
                r[i + x.t + 1] = 1)
            }
            r.t > 0 && (r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1)),
            r.s = 0,
            r.clamp()
        }
        ,
        BigInteger.prototype.divRemTo = function(m, q, r) {
            var pm = m.abs();
            if (!(pm.t <= 0)) {
                var pt = this.abs();
                if (pt.t < pm.t)
                    return null != q && q.fromInt(0),
                    void (null != r && this.copyTo(r));
                null == r && (r = nbi());
                var y = nbi()
                  , ts = this.s
                  , ms = m.s
                  , nsh =  28 - nbits(pm[pm.t - 1]);
                nsh > 0 ? (pm.lShiftTo(nsh, y),
                pt.lShiftTo(nsh, r)) : (pm.copyTo(y),
                pt.copyTo(r));
                var ys = y.t
                  , y0 = y[ys - 1];
                if (0 != y0) {
                    var yt = y0 * (1 << 24) + (ys > 1 ? y[ys - 2] >> 4 : 0)
                      , d1 = 4503599627370496 / yt
                      , d2 = (1 << 24) / yt
                      , e = 1 << 4
                      , i = r.t
                      , j = i - ys
                      , t = null == q ? nbi() : q;
                    // 初始化 BigInteger.ONE 对象
                        BigInteger.ONE = new BigInteger();
                        BigInteger.ONE[0] = 1;
                        BigInteger.ONE.t = 1;
                        BigInteger.ONE.s = 0;
                    for (y.dlShiftTo(j, t),
                    r.compareTo(t) >= 0 && (r[r.t++] = 1,
                    r.subTo(t, r)),
                    BigInteger.ONE.dlShiftTo(ys, t),
                    t.subTo(y, y); y.t < ys; )
                        y[y.t++] = 0;
                    for (; --j >= 0; ) {
                        var qd = r[--i] == y0 ? 268435455: Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
                        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd)
                            for (y.dlShiftTo(j, t),
                            r.subTo(t, r); r[i] < --qd; )
                                r.subTo(t, r)
                    }
                    BigInteger.ZERO = new BigInteger();
                    BigInteger.ZERO.t = 0;
                    BigInteger.ZERO.s = 0;
                    null != q && (r.drShiftTo(ys, q),
                    ts != ms && BigInteger.ZERO.subTo(q, q)),
                    r.t = ys,
                    r.clamp(),
                    nsh > 0 && r.rShiftTo(nsh, r),
                    ts < 0 && BigInteger.ZERO.subTo(r, r)
                }
            }
        }
        ,
        BigInteger.prototype.invDigit = function() {
            if (this.t < 1)
                return 0;
            var x = this[0];
            if (0 == (1 & x))
                return 0;
            var y = 3 & x;
            return (y = (y = (y = (y = y * (2 - (15 & x) * y) & 15) * (2 - (255 & x) * y) & 255) * (2 - ((65535 & x) * y & 65535)) & 65535) * (2 - x * y % 268435456) % 268435456) > 0 ? 268435456 - y : -y
        }
        ,
        BigInteger.prototype.isEven = function() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }
        ,
        BigInteger.prototype.exp = function(e, z) {
            if (e > 4294967295 || e < 1)
                return BigInteger.ONE;
            var r = nbi()
              , r2 = nbi()
              , g = z.convert(this)
              , i = nbits(e) - 1;
            for (g.copyTo(r); --i >= 0; )
                if (z.sqrTo(r, r2),
                (e & 1 << i) > 0)
                    z.mulTo(r2, g, r);
                else {
                    var t = r;
                    r = r2,
                    r2 = t
                }
            return z.revert(r)
        }
        ,
        BigInteger.prototype.chunkSize = function(r) {
            return Math.floor(Math.LN2 *  28 / Math.log(r))
        }
        ,
        BigInteger.prototype.toRadix = function(b) {
            if (null == b && (b = 10),
            0 == this.signum() || b < 2 || b > 36)
                return "0";
            var cs = this.chunkSize(b)
              , a = Math.pow(b, cs)
              , d = nbv(a)
              , y = nbi()
              , z = nbi()
              , r = "";
            for (this.divRemTo(d, y, z); y.signum() > 0; )
                r = (a + z.intValue()).toString(b).substr(1) + r,
                y.divRemTo(d, y, z);
            return z.intValue().toString(b) + r
        }
        ,
        BigInteger.prototype.fromRadix = function(s, b) {
            this.fromInt(0),
            null == b && (b = 10);
            for (var cs = this.chunkSize(b), d = Math.pow(b, cs), mi = !1, j = 0, w = 0, i = 0; i < s.length; ++i) {
                var x = intAt(s, i);
                x < 0 ? "-" == s.charAt(i) && 0 == this.signum() && (mi = !0) : (w = b * w + x,
                ++j >= cs && (this.dMultiply(d),
                this.dAddOffset(w, 0),
                j = 0,
                w = 0))
            }
            j > 0 && (this.dMultiply(Math.pow(b, j)),
            this.dAddOffset(w, 0)),
            mi && BigInteger.ZERO.subTo(this, this)
        }
        ,
        BigInteger.prototype.fromNumber = function(a, b, c) {
            if ("number" == typeof b)
                if (a < 2)
                    this.fromInt(1);
                else
                    for (this.fromNumber(a, c),
                    this.testBit(a - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this),
                    this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(b); )
                        this.dAddOffset(2, 0),
                        this.bitLength() > a && this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            else {
                var x = []
                  , t = 7 & a;
                x.length = 1 + (a >> 3),
                b.nextBytes(x),
                t > 0 ? x[0] &= (1 << t) - 1 : x[0] = 0,
                this.fromString(x, 256)
            }
        }
        ,
        BigInteger.prototype.bitwiseTo = function(a, op, r) {
            var i, f, m = Math.min(a.t, this.t);
            for (i = 0; i < m; ++i)
                r[i] = op(this[i], a[i]);
            if (a.t < this.t) {
                for (f = a.s & 268435455,
                i = m; i < this.t; ++i)
                    r[i] = op(this[i], f);
                r.t = this.t
            } else {
                for (f = this.s & 268435455,
                i = m; i < a.t; ++i)
                    r[i] = op(f, a[i]);
                r.t = a.t
            }
            r.s = op(this.s, a.s),
            r.clamp()
        }
        ,
        BigInteger.prototype.changeBit = function(n, op) {
            var r = BigInteger.ONE.shiftLeft(n);
            return this.bitwiseTo(r, op, r),
            r
        }
        ,
        BigInteger.prototype.addTo = function(a, r) {
            for (var i = 0, c = 0, m = Math.min(a.t, this.t); i < m; )
                c += this[i] + a[i],
                r[i++] = c & 268435455,
                c >>=  28;
            if (a.t < this.t) {
                for (c += a.s; i < this.t; )
                    c += this[i],
                    r[i++] = c & 268435455,
                    c >>=  28;
                c += this.s
            } else {
                for (c += this.s; i < a.t; )
                    c += a[i],
                    r[i++] = c & 268435455,
                    c >>=  28;
                c += a.s
            }
            r.s = c < 0 ? -1 : 0,
            c > 0 ? r[i++] = c : c < -1 && (r[i++] = 268435456 + c),
            r.t = i,
            r.clamp()
        }
        ,
        BigInteger.prototype.dMultiply = function(n) {
            this[this.t] = this.am(0, n - 1, this, 0, 0, this.t),
            ++this.t,
            this.clamp()
        }
        ,
        BigInteger.prototype.dAddOffset = function(n, w) {
            if (0 != n) {
                for (; this.t <= w; )
                    this[this.t++] = 0;
                for (this[w] += n; this[w] >= 268435456; )
                    this[w] -= 268435456,
                    ++w >= this.t && (this[this.t++] = 0),
                    ++this[w]
            }
        }
        ,
        BigInteger.prototype.multiplyLowerTo = function(a, n, r) {
            var i = Math.min(this.t + a.t, n);
            for (r.s = 0,
            r.t = i; i > 0; )
                r[--i] = 0;
            for (var j = r.t - this.t; i < j; ++i)
                r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
            for (j = Math.min(a.t, n); i < j; ++i)
                this.am(0, a[i], r, i, 0, n - i);
            r.clamp()
        }
        ,
        BigInteger.prototype.multiplyUpperTo = function(a, n, r) {
            --n;
            var i = r.t = this.t + a.t - n;
            for (r.s = 0; --i >= 0; )
                r[i] = 0;
            for (i = Math.max(n - this.t, 0); i < a.t; ++i)
                r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
            r.clamp(),
            r.drShiftTo(1, r)
        }
        ,
        BigInteger.prototype.modInt = function(n) {
            if (n <= 0)
                return 0;
            var d = 268435456 % n
              , r = this.s < 0 ? n - 1 : 0;
            if (this.t > 0)
                if (0 == d)
                    r = this[0] % n;
                else
                    for (var i = this.t - 1; i >= 0; --i)
                        r = (d * r + this[i]) % n;
            return r
        }
        ,
        BigInteger.prototype.millerRabin = function(t) {
            var n1 = this.subtract(BigInteger.ONE)
              , k = n1.getLowestSetBit();
            if (k <= 0)
                return !1;
            var r = n1.shiftRight(k);
            (t = t + 1 >> 1) > lowprimes.length && (t = lowprimes.length);
            for (var a = nbi(), i = 0; i < t; ++i) {
                a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
                var y = a.modPow(r, this);
                if (0 != y.compareTo(BigInteger.ONE) && 0 != y.compareTo(n1)) {
                    for (var j = 1; j++ < k && 0 != y.compareTo(n1); )
                        if (0 == (y = y.modPowInt(2, this)).compareTo(BigInteger.ONE))
                            return !1;
                    if (0 != y.compareTo(n1))
                        return !1
                }
            }
            return !0
        }
        ,
        BigInteger.prototype.square = function() {
            var r = nbi();
            return this.squareTo(r),
            r
        }
        ,
        BigInteger.prototype.gcda = function(a, callback) {
            var x = this.s < 0 ? this.negate() : this.clone()
              , y = a.s < 0 ? a.negate() : a.clone();
            if (x.compareTo(y) < 0) {
                var t = x;
                x = y,
                y = t
            }
            var i = x.getLowestSetBit()
              , g = y.getLowestSetBit();
            if (g < 0)
                callback(x);
            else {
                i < g && (g = i),
                g > 0 && (x.rShiftTo(g, x),
                y.rShiftTo(g, y));
                var gcda1 = function() {
                    (i = x.getLowestSetBit()) > 0 && x.rShiftTo(i, x),
                    (i = y.getLowestSetBit()) > 0 && y.rShiftTo(i, y),
                    x.compareTo(y) >= 0 ? (x.subTo(y, x),
                    x.rShiftTo(1, x)) : (y.subTo(x, y),
                    y.rShiftTo(1, y)),
                    x.signum() > 0 ? setTimeout(gcda1, 0) : (g > 0 && y.lShiftTo(g, y),
                    setTimeout((function() {
                        callback(y)
                    }
                    ), 0))
                };
                setTimeout(gcda1, 10)
            }
        }
        ,
        BigInteger.prototype.fromNumberAsync = function(a, b, c, callback) {
            if ("number" == typeof b)
                if (a < 2)
                    this.fromInt(1);
                else {
                    this.fromNumber(a, c),
                    this.testBit(a - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this),
                    this.isEven() && this.dAddOffset(1, 0);
                    var bnp_1 = this
                      , bnpfn1_1 = function() {
                        bnp_1.dAddOffset(2, 0),
                        bnp_1.bitLength() > a && bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1),
                        bnp_1.isProbablePrime(b) ? setTimeout((function() {
                            callback()
                        }
                        ), 0) : setTimeout(bnpfn1_1, 0)
                    };
                    setTimeout(bnpfn1_1, 0)
                }
            else {
                var x = []
                  , t = 7 & a;
                x.length = 1 + (a >> 3),
                b.nextBytes(x),
                t > 0 ? x[0] &= (1 << t) - 1 : x[0] = 0,
                this.fromString(x, 256)
            }
        }
        ,
        BigInteger
    }()
const one = BigInteger.valueOf({
    "0": 1,
    "t": 1,
    "s": 0
});
var decoder$1, Hex_decode = function(a) {
        var i;
        if (void 0 === decoder) {
            var hex = "0123456789ABCDEF";
            for (decoder = {},
            i = 0; i < 16; ++i)
                decoder[hex.charAt(i)] = i;
            for (hex = hex.toLowerCase(),
            i = 10; i < 16; ++i)
                decoder[hex.charAt(i)] = i;
            for (i = 0; i < " \f\n\r\t \u2028\u2029".length; ++i)
                decoder[" \f\n\r\t \u2028\u2029".charAt(i)] = -1
        }
        var out = []
          , bits = 0
          , char_count = 0;
        for (i = 0; i < a.length; ++i) {
            var c = a.charAt(i);
            if ("=" == c)
                break;
            if (-1 != (c = decoder[c])) {
                if (void 0 === c)
                    throw new Error("Illegal character at offset " + i);
                bits |= c,
                ++char_count >= 2 ? (out[out.length] = bits,
                bits = 0,
                char_count = 0) : bits <<= 4
            }
        }
        if (char_count)
            throw new Error("Hex encoding incomplete: 4 bits missing");
        return out
    }
function rng_get_byte() {
        if (null == rng_state) {
            for (rng_state = new Arcfour; rng_pptr < 256; ) {
                var random = Math.floor(65536 * Math.random());
                rng_pool[rng_pptr++] = 255 & random
            }
            for (rng_state.init(rng_pool),
            rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
                rng_pool[rng_pptr] = 0;
            rng_pptr = 0
        }
        return rng_state.next()
    }
// NullExp = function() {
//         function NullExp() {}
//         return NullExp.prototype.convert = function(x) {
//             return x
//         }
//         ,
//         NullExp.prototype.revert = function(x) {
//             return x
//         }
//         ,
//         NullExp.prototype.mulTo = function(x, y, r) {
//             x.multiplyTo(y, r)
//         }
//         ,
//         NullExp.prototype.sqrTo = function(x, r) {
//             x.squareTo(r)
//         }
//         ,
//         NullExp
//     }(),
Classic = function() {
        function Classic(m) {
            this.m = m
        }
        return Classic.prototype.convert = function(x) {
            return x.s < 0 || x.compareTo(this.m) >= 0 ? x.mod(this.m) : x
        }
        ,
        Classic.prototype.revert = function(x) {
            return x
        }
        ,
        Classic.prototype.reduce = function(x) {
            x.divRemTo(this.m, null, x)
        }
        ,
        Classic.prototype.mulTo = function(x, y, r) {
            x.multiplyTo(y, r),
            this.reduce(r)
        }
        ,
        Classic.prototype.sqrTo = function(x, r) {
            x.squareTo(r),
            this.reduce(r)
        }
        ,
        Classic
    }(),
function rng_get_byte() {
        if (null == rng_state) {
            for (rng_state = new Arcfour; rng_pptr < 256; ) {
                var random = Math.floor(65536 * Math.random());
                rng_pool[rng_pptr++] = 255 & random
            }
            for (rng_state.init(rng_pool),
            rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
                rng_pool[rng_pptr] = 0;
            rng_pptr = 0
        }
        return rng_state.next()
    }
var SecureRandom = function() {
        function SecureRandom() {}
        return SecureRandom.prototype.nextBytes = function(ba) {
            for (var i = 0; i < ba.length; ++i)
                ba[i] = rng_get_byte()
        }
        ,
        SecureRandom
    }();
var Arcfour = function() {
        function Arcfour() {
            this.i = 0,
            this.j = 0,
            this.S = []
        }
        return Arcfour.prototype.init = function(key) {
            var i, j, t;
            for (i = 0; i < 256; ++i)
                this.S[i] = i;
            for (j = 0,
            i = 0; i < 256; ++i)
                j = j + this.S[i] + key[i % key.length] & 255,
                t = this.S[i],
                this.S[i] = this.S[j],
                this.S[j] = t;
            this.i = 0,
            this.j = 0
        }
        ,
        Arcfour.prototype.next = function() {
            var t;
            return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            t = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = t,
            this.S[t + this.S[this.i] & 255]
        }
        ,
        Arcfour
    }();
function hex2b64(h) {
    var i, c, ret = "";
    for (i = 0; i + 3 <= h.length; i += 3)
        c = parseInt(h.substring(i, i + 3), 16),
        ret += b64map.charAt(c >> 6) + b64map.charAt(63 & c);
    for (i + 1 == h.length ? (c = parseInt(h.substring(i, i + 1), 16),
    ret += b64map.charAt(c << 2)) : i + 2 == h.length && (c = parseInt(h.substring(i, i + 2), 16),
    ret += b64map.charAt(c >> 2) + b64map.charAt((3 & c) << 4)); (3 & ret.length) > 0; )
        ret += "=";
    return ret
}
function RSAKey() {
            this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
        }
var JSEncryptRSAKey = function(_super) {
        function JSEncryptRSAKey(key) {
            var _this = _super.call(this) || this;
            return key && ("string" == typeof key ? _this.parseKey(key) : (JSEncryptRSAKey.hasPrivateKeyProperty(key) || JSEncryptRSAKey.hasPublicKeyProperty(key)) && _this.parsePropertiesFrom(key)),
            _this
        }
        return function(d, b) {
            function __() {
                this.constructor = d
            }
            extendStatics(d, b),
            d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype,
            new __)
        }(JSEncryptRSAKey, _super),
        JSEncryptRSAKey.prototype.parseKey = function(pem) {
            try {
                var modulus = 0
                  , public_exponent = 0
                  , der = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(pem) ? Hex_decode(pem) : Base64.unarmor(pem)
                  , asn1 = ASN1.decode(der);
                if (3 === asn1.sub.length && (asn1 = asn1.sub[2].sub[0]),
                9 === asn1.sub.length) {
                    modulus = asn1.sub[1].getHexStringValue(),
                    this.n = parseBigInt(modulus, 16),
                    public_exponent = asn1.sub[2].getHexStringValue(),
                    this.e = parseInt(public_exponent, 16);
                    var private_exponent = asn1.sub[3].getHexStringValue();
                    this.d = parseBigInt(private_exponent, 16);
                    var prime1 = asn1.sub[4].getHexStringValue();
                    this.p = parseBigInt(prime1, 16);
                    var prime2 = asn1.sub[5].getHexStringValue();
                    this.q = parseBigInt(prime2, 16);
                    var exponent1 = asn1.sub[6].getHexStringValue();
                    this.dmp1 = parseBigInt(exponent1, 16);
                    var exponent2 = asn1.sub[7].getHexStringValue();
                    this.dmq1 = parseBigInt(exponent2, 16);
                    var coefficient = asn1.sub[8].getHexStringValue();
                    this.coeff = parseBigInt(coefficient, 16)
                } else {
                    if (2 !== asn1.sub.length)
                        return !1;
                    var sequence = asn1.sub[1].sub[0];
                    modulus = sequence.sub[0].getHexStringValue(),
                    this.n = parseBigInt(modulus, 16),
                    public_exponent = sequence.sub[1].getHexStringValue(),
                    this.e = parseInt(public_exponent, 16)
                }
                return !0
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncryptRSAKey.prototype.getPrivateBaseKey = function() {
            var options = {
                array: [new KJUR.asn1.DERInteger({
                    int: 0
                }), new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    int: this.e
                }), new KJUR.asn1.DERInteger({
                    bigint: this.d
                }), new KJUR.asn1.DERInteger({
                    bigint: this.p
                }), new KJUR.asn1.DERInteger({
                    bigint: this.q
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmp1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.dmq1
                }), new KJUR.asn1.DERInteger({
                    bigint: this.coeff
                })]
            };
            return new KJUR.asn1.DERSequence(options).getEncodedHex()
        }
        ,
        JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function() {
            return hex2b64(this.getPrivateBaseKey())
        }
        ,
        JSEncryptRSAKey.prototype.getPublicBaseKey = function() {
            var first_sequence = new KJUR.asn1.DERSequence({
                array: [new KJUR.asn1.DERObjectIdentifier({
                    oid: "1.2.840.113549.1.1.1"
                }), new KJUR.asn1.DERNull]
            })
              , second_sequence = new KJUR.asn1.DERSequence({
                array: [new KJUR.asn1.DERInteger({
                    bigint: this.n
                }), new KJUR.asn1.DERInteger({
                    int: this.e
                })]
            })
              , bit_string = new KJUR.asn1.DERBitString({
                hex: "00" + second_sequence.getEncodedHex()
            });
            return new KJUR.asn1.DERSequence({
                array: [first_sequence, bit_string]
            }).getEncodedHex()
        }
        ,
        JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function() {
            return hex2b64(this.getPublicBaseKey())
        }
        ,
        JSEncryptRSAKey.wordwrap = function(str, width) {
            if (!str)
                return str;
            var regex = "(.{1," + (width = width || 64) + "})( +|$\n?)|(.{1," + width + "})";
            return str.match(RegExp(regex, "g")).join("\n")
        }
        ,
        JSEncryptRSAKey.prototype.getPrivateKey = function() {
            var key = "-----BEGIN RSA PRIVATE KEY-----\n";
            return key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n",
            key += "-----END RSA PRIVATE KEY-----"
        }
        ,
        JSEncryptRSAKey.prototype.getPublicKey = function() {
            var key = "-----BEGIN PUBLIC KEY-----\n";
            return key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n",
            key += "-----END PUBLIC KEY-----"
        }
        ,
        JSEncryptRSAKey.hasPublicKeyProperty = function(obj) {
            return (obj = obj || {}).hasOwnProperty("n") && obj.hasOwnProperty("e")
        }
        ,
        JSEncryptRSAKey.hasPrivateKeyProperty = function(obj) {
            return (obj = obj || {}).hasOwnProperty("n") && obj.hasOwnProperty("e") && obj.hasOwnProperty("d") && obj.hasOwnProperty("p") && obj.hasOwnProperty("q") && obj.hasOwnProperty("dmp1") && obj.hasOwnProperty("dmq1") && obj.hasOwnProperty("coeff")
        }
        ,
        JSEncryptRSAKey.prototype.parsePropertiesFrom = function(obj) {
            this.n = obj.n,
            this.e = obj.e,
            obj.hasOwnProperty("d") && (this.d = obj.d,
            this.p = obj.p,
            this.q = obj.q,
            this.dmp1 = obj.dmp1,
            this.dmq1 = obj.dmq1,
            this.coeff = obj.coeff)
        }
        ,
        JSEncryptRSAKey
    }(RSAKey)
RSAKey.prototype.doPublic = function(x) {
            return x.modPowInt(this.e, this.n)
        }
JSEncrypt = function() {
        function JSEncrypt(options) {
            options = options || {},
            this.default_key_size = parseInt(options.default_key_size, 10) || 1024,
            this.default_public_exponent = options.default_public_exponent || "010001",
            this.log = options.log || !1,
            this.key = null
        }
        return JSEncrypt.prototype.setKey = function(key) {
            this.log && this.key && console.warn("A key was already set, overriding existing."),
            this.key = new JSEncryptRSAKey(key)
        }
        ,
        JSEncrypt.prototype.setPrivateKey = function(privkey) {
            this.setKey(privkey)
        }
        ,
        JSEncrypt.prototype.setPublicKey = function(pubkey) {
            this.setKey(pubkey)
        }
        ,
        JSEncrypt.prototype.decrypt = function(str) {
            try {
                return this.getKey().decrypt(b64tohex(str))
            } catch (ex) {
                return !1
            }
        }
        , RSAKey.prototype.encrypt = function(text) {
            var m = function(s, n) {
                if (n < s.length + 11)
                    return console.error("Message too long for RSA"),
                    null;
                for (var ba = [], i = s.length - 1; i >= 0 && n > 0; ) {
                    var c = s.charCodeAt(i--);
                    c < 128 ? ba[--n] = c : c > 127 && c < 2048 ? (ba[--n] = 63 & c | 128,
                    ba[--n] = c >> 6 | 192) : (ba[--n] = 63 & c | 128,
                    ba[--n] = c >> 6 & 63 | 128,
                    ba[--n] = c >> 12 | 224)
                }
                ba[--n] = 0;
                for (var rng = new SecureRandom, x = []; n > 2; ) {
                    for (x[0] = 0; 0 == x[0]; )
                        rng.nextBytes(x);
                    ba[--n] = x[0]
                }
                return ba[--n] = 2,
                ba[--n] = 0,
                new BigInteger(ba)
            }(text, 128);
            if (null == m)
                return null;
            var c = this.doPublic(m);
            if (null == c)
                return null;
            var h = c.toString(16);
            return 0 == (1 & h.length) ? h : "0" + h
        },
        JSEncrypt.prototype.encrypt = function(str) {
            try {
                return hex2b64(this.getKey().encrypt(str))
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncrypt.prototype.sign = function(str, digestMethod, digestName) {
            try {
                return hex2b64(this.getKey().sign(str, digestMethod, digestName))
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncrypt.prototype.verify = function(str, signature, digestMethod) {
            try {
                return this.getKey().verify(str, b64tohex(signature), digestMethod)
            } catch (ex) {
                return !1
            }
        }
        ,
        JSEncrypt.prototype.getKey = function(cb) {
            if (!this.key) {
                if (this.key = new JSEncryptRSAKey,
                cb && "[object Function]" === {}.toString.call(cb))
                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        }
        ,
        JSEncrypt.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey()
        }
        ,
        JSEncrypt.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64()
        }
        ,
        JSEncrypt.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey()
        }
        ,
        JSEncrypt.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64()
        }
        ,
        JSEncrypt.version = "3.0.0-rc.1",
        JSEncrypt
    }();

keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
function utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    for (var utftext = "", n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        c < 128 ? utftext += String.fromCharCode(c) : c > 127 && c < 2048 ? (utftext += String.fromCharCode(c >> 6 | 192),
        utftext += String.fromCharCode(63 & c | 128)) : (utftext += String.fromCharCode(c >> 12 | 224),
        utftext += String.fromCharCode(c >> 6 & 63 | 128),
        utftext += String.fromCharCode(63 & c | 128))
    }
    return utftext
}
function encodeFuc(input) {
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = "", i = 0;
    for (input = utf8_encode(input); i < input.length; )
        enc1 = (chr1 = input.charCodeAt(i++)) >> 2,
        enc2 = (3 & chr1) << 4 | (chr2 = input.charCodeAt(i++)) >> 4,
        enc3 = (15 & chr2) << 2 | (chr3 = input.charCodeAt(i++)) >> 6,
        enc4 = 63 & chr3,
        isNaN(chr2) ? enc3 = enc4 = 64 : isNaN(chr3) && (enc4 = 64),
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    return output
}
function encryptPublicLong(str, pubKey) {
    var strB64 = encodeFuc(str)
      , jsEncrypt = new JSEncrypt;
    jsEncrypt.setPublicKey(pubKey);
    for (var str117 = "", strEncrypt = "", length = Math.ceil(strB64.length / 117), i = 0; i < length; i++)
        str117 = strB64.substr(117 * i, 117),
        strEncrypt += str117 = jsEncrypt.encrypt(str117);
    return strEncrypt
}
createSign = function(oParam) {
    if (!oParam)
        return null;
    var keyValue = "";
    return Object.keys(oParam).forEach((function(key) {
        keyValue += key + oParam[key]
    }
    )),
    hex_md5(keyValue += signKey)
};
function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz))
}
function b64_md5(s) {
    return binl2b64(core_md5(str2binl(s), s.length * chrsz))
}
function str_md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz))
}
function hex_hmac_md5(key, data) {
    return binl2hex(core_hmac_md5(key, data))
}
function b64_hmac_md5(key, data) {
    return binl2b64(core_hmac_md5(key, data))
}
function str_hmac_md5(key, data) {
    return binl2str(core_hmac_md5(key, data))
}

function core_md5(x, len) {
    x[len >> 5] |= 128 << len % 32,
    x[14 + (len + 64 >>> 9 << 4)] = len;
    for (var a = 1732584193, b = -271733879, c = -1732584194, d = 271733878, i = 0; i < x.length; i += 16) {
        var olda = a
          , oldb = b
          , oldc = c
          , oldd = d;
        a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936),
        d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586),
        c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819),
        b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330),
        a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897),
        d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426),
        c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341),
        b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983),
        a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416),
        d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417),
        c = md5_ff(c, d, a, b, x[i + 10], 17, -42063),
        b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162),
        a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682),
        d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101),
        c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290),
        a = md5_gg(a, b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329), c, d, x[i + 1], 5, -165796510),
        d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632),
        c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713),
        b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302),
        a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691),
        d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083),
        c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335),
        b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848),
        a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438),
        d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690),
        c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961),
        b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501),
        a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467),
        d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784),
        c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473),
        a = md5_hh(a, b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734), c, d, x[i + 5], 4, -378558),
        d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463),
        c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562),
        b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556),
        a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060),
        d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353),
        c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632),
        b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640),
        a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174),
        d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222),
        c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979),
        b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189),
        a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487),
        d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835),
        c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520),
        a = md5_ii(a, b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651), c, d, x[i + 0], 6, -198630844),
        d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415),
        c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905),
        b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055),
        a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571),
        d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606),
        c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523),
        b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799),
        a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359),
        d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744),
        c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380),
        b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649),
        a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070),
        d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379),
        c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259),
        b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551),
        a = safe_add(a, olda),
        b = safe_add(b, oldb),
        c = safe_add(c, oldc),
        d = safe_add(d, oldd)
    }
    return Array(a, b, c, d)
}
function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b)
}
function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn(b & c | ~b & d, a, b, x, s, t)
}
function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn(b & d | c & ~d, a, b, x, s, t)
}
function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t)
}
function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t)
}
function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    bkey.length > 16 && (bkey = core_md5(bkey, key.length * chrsz));
    for (var ipad = Array(16), opad = Array(16), i = 0; i < 16; i++)
        ipad[i] = 909522486 ^ bkey[i],
        opad[i] = 1549556828 ^ bkey[i];
    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 640)
}
function safe_add(x, y) {
    var lsw = (65535 & x) + (65535 & y);
    return (x >> 16) + (y >> 16) + (lsw >> 16) << 16 | 65535 & lsw
}
function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt
}
function str2binl(str) {
    for (var bin = Array(), mask = (1 << chrsz) - 1, i = 0; i < str.length * chrsz; i += chrsz)
        bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
    return bin
}
function binl2str(bin) {
    for (var str = "", mask = (1 << chrsz) - 1, i = 0; i < 32 * bin.length; i += chrsz)
        str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
    return str
}
function binl2hex(binarray) {
    for (var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", str = "", i = 0; i < 4 * binarray.length; i++)
        str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
    return str
}
function binl2b64(binarray) {
    for (var str = "", i = 0; i < 4 * binarray.length; i += 3)
        for (var triplet = (binarray[i >> 2] >> i % 4 * 8 & 255) << 16 | (binarray[i + 1 >> 2] >> (i + 1) % 4 * 8 & 255) << 8 | binarray[i + 2 >> 2] >> (i + 2) % 4 * 8 & 255, j = 0; j < 4; j++)
            8 * i + 6 * j > 32 * binarray.length ? str += b64pad : str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(triplet >> 6 * (3 - j) & 63);
    return str
}
var createEncrypt = function(data) {
    return "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRRnWUDiF+c/LKNmsROebjTlIH",
    "4uBWPytFYeNKV0kNfor1l6DFI7stvq1w5XIa+MBDniGOrHH4R3c8NcnHbTf2kHMD",
    "nLFUqRYHLNt8ytEC0S9vvMNxsJPskPhuV3rs2F/QOkRqtapXuEFkF2k083Oa4bBX",
    "TnpKvIxP0Hkrrqa/WQIDAQAB",
    "-----END PUBLIC KEY-----",
    encryptPublicLong(JSON.stringify(data), "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRRnWUDiF+c/LKNmsROebjTlIH4uBWPytFYeNKV0kNfor1l6DFI7stvq1w5XIa+MBDniGOrHH4R3c8NcnHbTf2kHMDnLFUqRYHLNt8ytEC0S9vvMNxsJPskPhuV3rs2F/QOkRqtapXuEFkF2k083Oa4bBXTnpKvIxP0Hkrrqa/WQIDAQAB-----END PUBLIC KEY-----")
}
aaa=createEncrypt(data);
newParam.t = parseInt((new Date).getTime() / 1e3)


newParam.sign = createSign(newParam)
bbb=newParam.sign