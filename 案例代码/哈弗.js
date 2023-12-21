window = this
const hex_md5  = require('md5')
JSEncrypt = require('jsencrypt')
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function utf8_encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c)
        } else if ((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128)
        } else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128)
        }
    }
    return utftext
}
function encodeFuc(input) {
    var output = "", chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
    input = utf8_encode(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64
        } else if (isNaN(chr3)) {
            enc4 = 64
        }
        output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4)
    }
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

data= {
    "car_model_id": 0,
    "province": "广东省",
    "city": "广州市",
    "lat": 1.352083,
    "lon": 103.819836,
    "dealer_type": 1,
    "saleCarBrand": "新哈弗H5",
    "car_id": "2000035",
    "cooperation": 1,
    "is_release": 0,
    "site_id": "aGqZxcudmMbFb8eem5SXZWOalZafasRql2xpcpual8Zwlp0=",
    "storeId": "",
    "type": 2,
    "version_id": 1
}
// 字符串转base64
var signKey = 'u*afNnLWi6g78K0dlOyIB9KHTfQmVPhvB';
var apiBaseType = {
    "dev": "http://hw-scms-api.pcuion.com",
    "pre": "http://pre-scms-api.pcuion.com",
    "online": "https://cmsmanage-siteapi.gwm.com.cn"
}
// 接口的域名地址
var ajaxBaseUrl = apiBaseType['online'];
var createSign = function(oParam) {
        if (!oParam) {
            return null
        }
        var keyValue = ''
        Object.keys(oParam).forEach(function(key) {
            keyValue += (key+oParam[key])
        });
        keyValue += signKey
        var md5Value = hex_md5(keyValue)
        return md5Value
    }
var createEncrypt = function(data) {
    var pubKey = '-----BEGIN PUBLIC KEY-----'
    pubKey += 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRRnWUDiF+c/LKNmsROebjTlIH'
    pubKey += '4uBWPytFYeNKV0kNfor1l6DFI7stvq1w5XIa+MBDniGOrHH4R3c8NcnHbTf2kHMD'
    pubKey += 'nLFUqRYHLNt8ytEC0S9vvMNxsJPskPhuV3rs2F/QOkRqtapXuEFkF2k083Oa4bBX'
    pubKey += 'TnpKvIxP0Hkrrqa/WQIDAQAB'
    pubKey += '-----END PUBLIC KEY-----'
    var dataStr = JSON.stringify(data);
    var encrypted = encryptPublicLong(dataStr, pubKey)
    return encrypted
};
var newParam = {}
data["site_id"] = 'aGqZxcudmMbFb8eem5SXZWOalZafasRql2xpcpual8Zwlp0=';
if (data) {
    if (false) {
        data['is_release'] = 0;
        var str = '***测试地址请求参数输出开始***\n';
        Object.keys(data).forEach(function(key) {
            str += key + ' => ' + data[key] +'\n'
        });
        str += '***测试地址请求参数输出结束***\n';
        console.log(str);
    }
    newParam.d = createEncrypt(data)
} else {
    data["is_release"] = 1;
}
newParam.t = parseInt(new Date().getTime() / 1000)
newParam.sign = createSign(newParam)
console.log(newParam)