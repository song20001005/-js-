const { MD5 } = require('crypto-js');

var _0xe29ec5 = new Date().getTime();
_0x3fd572 = (0xf4240 * Math.random() + '').replace('.', '') + '&*';

_0x3552eb = function(e) {
    return MD5(e).toString();
}

_0x409b90 = _0x3552eb(_0xe29ec5 + '7C9408E2E22ED1329A72837709851954' + _0x3fd572);

YDRZ = {}
opts = {}
function uuid(len, radix) {
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
		var uuid = [],
			i;
		radix = radix || chars.length;

		if (len) {
			for (i = 0; i < len; i++)
				uuid[i] = chars[0 | Math.random() * radix];
		} else {
			var r;

			uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
			uuid[14] = '4';

			for (i = 0; i < 36; i++) {
				if (!uuid[i]) {
					r = 0 | Math.random() * 16;
					uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
				}
			}
		}
		return uuid.join('');
	}
YDRZ.getSign = function (appId, version) {
			opts.uuid = uuid(32, 32);
			opts.msgId = uuid(32, 32);
			//拼接sign签名
			var signStr = appId + opts.msgId + opts.timestamp + opts.uuid + version;
			//通过业务方获取sign
			return signStr;
		}
a = "300012050548",
b = YDRZ.getSign(a, "1.0")

aa = [_0x3fd572,_0xe29ec5,_0x409b90,b]
console.log(aa)