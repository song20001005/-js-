var signKey = "u*afNnLWi6g78K0dlOyIB9KHTfQmVPhvB"
  , ajaxBaseUrl = "https://cmsmanage-siteapi.gwm.com.cn";
window = {}
var JSEncrypt = require('jsencrypt');
var hexcase = 0
  , b64pad = ""
  , chrsz = 8;

function encryptPublicLong(str, pubKey) {
    var strB64 = encodeFuc(str)
      , jsEncrypt = new JSEncrypt;
    jsEncrypt.setPublicKey(pubKey);
    for (var str117 = "", strEncrypt = "", length = Math.ceil(strB64.length / 117), i = 0; i < length; i++)
        str117 = strB64.substr(117 * i, 117),
        strEncrypt += str117 = jsEncrypt.encrypt(str117);
    return strEncrypt
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
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
  , createSign = function(oParam) {
    if (!oParam)
        return null;
    var keyValue = "";
    return Object.keys(oParam).forEach((function(key) {
        keyValue += key + oParam[key]
    }
    )),
    hex_md5(keyValue += signKey)
}
data = {
    "dealer_type": 4,
    "city": "嘉兴市",
    "site_id": "aGKWkpZtZZ2UnMOflZNoZGGTmGaalJNwlmVoaZOcmJNtZpyUzJuW"
}
var newParam = {}
newParam.d = createEncrypt(data)
newParam.t = parseInt((new Date).getTime() / 1e3)
newParam.sign = createSign(newParam)
console.log(newParam)