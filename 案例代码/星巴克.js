function P() {
                    var e = ["D2DSv04", "wvzPreq", "Cgf0Aa", "C0zUAg4", "DxnLCLr5CgvqyxrO", "zgf0yq", "BxjcsgO", "s2vOq3K", "sLPfCfG", "EMLhB1C", "z2v0tg9NAw5bDxrOsw5MBW", "EgXNC3O", "uwTzrgO", "mZCWode2tK9osM9S", "wxrIDNe", "uMvTwK4", "yxv0AfnLDhrPBMC", "z2v0u3rVCMfNzq", "mJrWrvr2Dxy", "CgfNzxm", "CgvZruy", "Bg9NAw5bDxrO", "zM9YrwfJAa", "B3LKt3y", "Bg9NB3v0", "yNfYs1u", "vxfqEu8", "yxnMrxu", "DgvZDa", "vuPns2i", "C2v0u3rVCMfNzq", "mtq2mdaXnJHTDfrhsvG", "BgvUz3rO", "zefovge", "Aw5KzxG", "owPctvr6ta", "qvDoyxi", "z2v0", "BMvov2u", "C3rHDgu", "nJe0whr0teLW", "ueLZrgq", "ChvZAa", "zMLUywXSEq", "y29UzMLN", "ntmWntj5sgvurg4", "AKXQBvC", "AgXcugC", "seP6zLa", "seDJvMC", "y29TBwL0", "ody0nZe3y2PJBuzZ", "tgDey0W", "B0vive8", "CM91Dgu", "vgXNEMO", "BfLdrxa", "DwXfwKS", "y29TBw9U", "CMT4AMS", "rLziu0G", "z0nruKm", "DxnLCLr5Cgu", "mtu4ndi3mgnUBxL4AW", "BMv3u2LNBG", "tg5UCKO", "Aw5KzxHpzG", "C3rYAw5NAwz5", "y05pweS", "BfzNs08", "ChnXs0y", "z2v0u2v0DgLUzW", "mZbUwMvls0i", "BxPmuvK", "Bg9NAw5bDxrOtMfTzq", "C29YDa", "DxnLCG", "D29dsuu", "nZGWotzyvhfPyuK", "yxv0AevYCLrVsw5KzxG", "q0rZwg0", "CfLeuKm", "zvLhwwe", "EuT6txi", "C2nVCguUDxnLCKXVy2f0Aw9U", "EgztDvG", "wvPXrhO", "uw9XzKG", "rvruA0u", "Bg9JAW", "Eu1UAfq", "q2Xmuve", "BwvTyMvY", "mtm4m01gwK5fAG", "C2f2zuXVz2LUuhjVy2vZC0rHDge", "z2v0q29UzMLN", "u0LQzgy", "wefHB0q", "C2v0tg9NAw5bDxrOsw5MBW", "rMr6vMC"];
                    return P = function() {
                        return e
                    }
                    ,
                    P()
                }
p = {}
p['sm3'] = function(e, t) {
                    function s(e) {
                    return e.map((function(e) {
                        return e = e.toString(16),
                        1 === e.length ? "0" + e : e
                    }
                    )).join("")
                }
                    if (e = "string" === typeof e ? u(e) : Array.prototype.slice.call(e),
                    t) {
                        var n = t.mode || "hmac";
                        if ("hmac" !== n)
                            throw new Error("invalid mode");
                        var r = t.key;
                        if (!r)
                            throw new Error("invalid key");
                        return r = "string" === typeof r ? c(r) : Array.prototype.slice.call(r),
                        s(o(e, r))
                    }
                    return s(a(e))
                }

function o(e, t) {
                    var n = 31 & t;
                    return e << n | e >>> 32 - n
                }
function c(e) {
                    return e ^ o(e, 15) ^ o(e, 23)
                }
function a(e) {
                                    function s(e) {
                    return e ^ o(e, 9) ^ o(e, 17)
                }

                    var t = 8 * e.length
                      , n = t % 512;
                    n = n >= 448 ? 512 - n % 448 - 1 : 448 - n - 1;
                    for (var i = new Array((n - 7) / 8), u = new Array(8), l = 0, d = i.length; l < d; l++)
                        i[l] = 0;
                    for (var p = 0, f = u.length; p < f; p++)
                        u[p] = 0;
                    t = t.toString(2);
                    for (var h = 7; h >= 0; h--)
                        if (t.length > 8) {
                            var g = t.length - 8;
                            u[h] = parseInt(t.substr(g), 2),
                            t = t.substr(0, g)
                        } else
                            t.length > 0 && (u[h] = parseInt(t, 2),
                            t = "");
                    for (var v = new Uint8Array([].concat(e, [128], i, u)), m = new DataView(v.buffer,0), y = v.length / 64, b = new Uint32Array([1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214]), _ = 0; _ < y; _++) {
                        var r = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "14": 0,
    "15": 0,
    "16": 0,
    "17": 0,
    "18": 0,
    "19": 0,
    "20": 0,
    "21": 0,
    "22": 0,
    "23": 0,
    "24": 0,
    "25": 0,
    "26": 0,
    "27": 0,
    "28": 0,
    "29": 0,
    "30": 0,
    "31": 0,
    "32": 0,
    "33": 0,
    "34": 0,
    "35": 0,
    "36": 0,
    "37": 0,
    "38": 0,
    "39": 0,
    "40": 0,
    "41": 0,
    "42": 0,
    "43": 0,
    "44": 0,
    "45": 0,
    "46": 0,
    "47": 0,
    "48": 0,
    "49": 0,
    "50": 0,
    "51": 0,
    "52": 0,
    "53": 0,
    "54": 0,
    "55": 0,
    "56": 0,
    "57": 0,
    "58": 0,
    "59": 0,
    "60": 0,
    "61": 0,
    "62": 0,
    "63": 0,
    "64": 0,
    "65": 0,
    "66": 0,
    "67": 0
}
                        var a ={
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0,
    "13": 0,
    "14": 0,
    "15": 0,
    "16": 0,
    "17": 0,
    "18": 0,
    "19": 0,
    "20": 0,
    "21": 0,
    "22": 0,
    "23": 0,
    "24": 0,
    "25": 0,
    "26": 0,
    "27": 0,
    "28": 0,
    "29": 0,
    "30": 0,
    "31": 0,
    "32": 0,
    "33": 0,
    "34": 0,
    "35": 0,
    "36": 0,
    "37": 0,
    "38": 0,
    "39": 0,
    "40": 0,
    "41": 0,
    "42": 0,
    "43": 0,
    "44": 0,
    "45": 0,
    "46": 0,
    "47": 0,
    "48": 0,
    "49": 0,
    "50": 0,
    "51": 0,
    "52": 0,
    "53": 0,
    "54": 0,
    "55": 0,
    "56": 0,
    "57": 0,
    "58": 0,
    "59": 0,
    "60": 0,
    "61": 0,
    "62": 0,
    "63": 0,
    "64": 0,
    "65": 0,
    "66": 0,
    "67": 0
}
                        for (var T = 16 * _, k = 0; k < 16; k++)
                            r[k] = m.getUint32(4 * (T + k), !1);
                        for (var O = 16; O < 68; O++)
                            r[O] = c(r[O - 16] ^ r[O - 9] ^ o(r[O - 3], 15)) ^ o(r[O - 13], 7) ^ r[O - 6];
                        for (var P = 0; P < 64; P++)
                            a[P] = r[P] ^ r[P + 4];
                        for (var w = 2043430169, S = 2055708042, C = b[0], x = b[1], E = b[2], I = b[3], D = b[4], A = b[5], M = b[6], R = b[7], N = void 0, j = void 0, L = void 0, B = void 0, U = void 0, F = 0; F < 64; F++)
                            U = F >= 0 && F <= 15 ? w : S,
                            N = o(o(C, 12) + D + o(U, F), 7),
                            j = N ^ o(C, 12),
                            L = (F >= 0 && F <= 15 ? C ^ x ^ E : C & x | C & E | x & E) + I + j + a[F],
                            B = (F >= 0 && F <= 15 ? D ^ A ^ M : D & A | ~D & M) + R + N + r[F],
                            I = E,
                            E = o(x, 9),
                            x = C,
                            C = L,
                            R = M,
                            M = o(A, 19),
                            A = D,
                            D = s(B);
                        b[0] ^= C,
                        b[1] ^= x,
                        b[2] ^= E,
                        b[3] ^= I,
                        b[4] ^= D,
                        b[5] ^= A,
                        b[6] ^= M,
                        b[7] ^= R
                    }
                    for (var q = [], $ = 0, G = b.length; $ < G; $++) {
                        var z = b[$];
                        q.push((4278190080 & z) >>> 24, (16711680 & z) >>> 16, (65280 & z) >>> 8, 255 & z)
                    }
                    return q
                }
function u(e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) {
                        var a = e.codePointAt(n);
                        if (a <= 127)
                            t.push(a);
                        else if (a <= 2047)
                            t.push(192 | a >>> 6),
                            t.push(128 | 63 & a);
                        else if (a <= 55295 || a >= 57344 && a <= 65535)
                            t.push(224 | a >>> 12),
                            t.push(128 | a >>> 6 & 63),
                            t.push(128 | 63 & a);
                        else {
                            if (!(a >= 65536 && a <= 1114111))
                                throw t.push(a),
                                new Error("input is not supported");
                            n++,
                            t.push(240 | a >>> 18 & 28),
                            t.push(128 | a >>> 12 & 63),
                            t.push(128 | a >>> 6 & 63),
                            t.push(128 | 63 & a)
                        }
                    }
                    return t
                }
function S(e, t) {
                    var n = P();
                    return S = function(t, r) {
                        t -= 210;
                        var a = n[t];
                        if (void 0 === S["LRZgRO"]) {
                            var o = function(e) {
                                for (var t, n, r = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", a = "", o = "", i = 0, s = 0; n = e["charAt"](s++); ~n && (t = i % 4 ? 64 * t + n : n,
                                i++ % 4) ? a += String["fromCharCode"](255 & t >> (-2 * i & 6)) : 0)
                                    n = r["indexOf"](n);
                                for (var c = 0, u = a["length"]; c < u; c++)
                                    o += "%" + ("00" + a["charCodeAt"](c)["toString"](16))["slice"](-2);
                                return decodeURIComponent(o)
                            };
                            S["gZzLhW"] = o,
                            e = arguments,
                            S["LRZgRO"] = !0
                        }
                        var i = n[0]
                          , s = t + i
                          , c = e[s];
                        return c ? a = c : (a = S["gZzLhW"](a),
                        e[s] = a),
                        a
                    }
                    ,
                    S(e, t)
                }
newSign = function(e) {

    var t = this
                              , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'get'
                              , r = S
                              , a = {
                                iwuXg: function(e, t) {
                                    return e instanceof t
                                },
                                yKzMr: "yttqd",
                                wglWN: 'QoqfH',
                                DGhyX: function(e, t) {
                                    return e === t
                                },
                                CDsXm: function(e, t) {
                                    return e || t
                                },
                                txuql: function(e, t) {
                                    return e(t)
                                }
                            }
                              , o = "";
                            if (a["DGhyX"](n, r(306))) {
                                e = a[r(249)](e, {});
                                var i = Object["keys"](e)[r(244)]()
                                  , s = [];
                                i["forEach"]((function(n) {
                                    var i = r;
                                    if (e[n]instanceof Array || a["iwuXg"](e[n], Object)) {
                                        if (a[i(252)] === a[i(269)])
                                            return t[i(267)](a, o);
                                        e[n] = JSON[i(236)](e[n])
                                    }
                                    s[i(211)](n + "=" + e[n])
                                }
                                )),
                                o = s["join"]("&")
                            } else
                                e && (o = JSON['stringify'](e));
                            return a["txuql"](p["sm3"], o)
                        }
e = {"pageNo":1,"pageSize":200,"currentLongitude":120.92716217041016,"currentLatitude":30.83074951171875,"longitude":120.92716217041016,"latitude":30.83074951171875,"diameter":50000,"nonce":0.5873772608327363}
t = 'post'
sign = newSign(e,t)
console.log(sign)
