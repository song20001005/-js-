const crypto = require('crypto');
window = global;

(function(_0x133e40, _0x384cee) {
    var _0x1aaa3a = _0x5825
      , _0x737f78 = _0x133e40();
    while (!![]) {
        try {
            var _0x873741 = -parseInt(_0x1aaa3a(0xe3)) / 0x1 + parseInt(_0x1aaa3a(0xf4)) / 0x2 * (parseInt(_0x1aaa3a(0x10e)) / 0x3) + parseInt(_0x1aaa3a(0xf2)) / 0x4 * (-parseInt(_0x1aaa3a(0x10a)) / 0x5) + parseInt(_0x1aaa3a(0x11b)) / 0x6 + parseInt(_0x1aaa3a(0xea)) / 0x7 + parseInt(_0x1aaa3a(0x11f)) / 0x8 + -parseInt(_0x1aaa3a(0xec)) / 0x9;
            if (_0x873741 === _0x384cee)
                break;
            else
                _0x737f78['push'](_0x737f78['shift']());
        } catch (_0x2b9e40) {
            _0x737f78['push'](_0x737f78['shift']());
        }
    }
}(_0x14c4, 0x79943));
function _0x5825(_0x5e9d09, _0x45b884) {
    var _0x14c4f0 = _0x14c4();
    return _0x5825 = function(_0x58251e, _0x472249) {
        _0x58251e = _0x58251e - 0xdc;
        var _0x400617 = _0x14c4f0[_0x58251e];
        return _0x400617;
    }
    ,
    _0x5825(_0x5e9d09, _0x45b884);
}

function encrypt128(text, key,iv) {
    const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted
}

async function encryptAES(_0x129052, _0x23e7a7, _0x3ccf16) {
    _0x7995e0 = encrypt128(_0x129052,_0x23e7a7,_0x3ccf16)
    return _0x7995e0;
}
async function encryptAndDisplay(_0x2e9503, _0x43d961, _0x21e590) {
    const _0x4628fa = hexStringToUint8Array(_0x2e9503)
      , _0x1c18c1 = hexStringToUint8Array(_0x43d961);
    return result = await encryptAES(_0x21e590, _0x4628fa, _0x1c18c1),
    result;
}
function hexStringToUint8Array(_0x4e4a56) {
    var _0x4ff36f = _0x5825;
    const _0x2ce904 = _0x4e4a56['match'](/.{1,2}/g)["map"](_0x496514=>parseInt(_0x496514, 0x10));
    return new Uint8Array(_0x2ce904);
}
async function getCurrentTimestamp() {
    var _0x582389 = _0x5825;
    return Math[_0x582389(0x106)](Date[_0x582389(0x117)]() / 0x3e8);
}
function _0x14c4() {
    var _0x3541be = ['length', 'crypto', '1947741ODRkHO', 'Đã\x20xảy\x20ra\x20lỗi:', 'nofollow\x20noreferrer', 'random', 'toString', 'then', 'replace', 'js-results-date', 'json', 'now', 'map', 'https://twitter.com/', 'slice', '3339054Grugwv', 'digest', 'js-results-id', 'd1eb53cda668dde7c2f6bb84a38f61f5', '6288032tfmRcD', 'application/json', 'js-image', 'textContent', 'subtle', '_blank', 'encode', 'join', '666124ycmVPV', 'js-results-username', 'stringify', 'createTextNode', '@hotmail.com', 'SHA-256', 'error', '987567UstwCv', 'rel', '7538598XgxaoE', 'from', 'AES-CBC', 'round', 'None', 'target', '4KWtsfB', 'innerHTML', '2ImXlzw', 'js-results-email', 'js-results-followers', 'getElementById', '/twt_info', '@outlook.com', '@gmail.com', 'output', 'Waiting...', 'padStart', 'raw', 'display', 'appendChild', 'href', 'disabled', 'block', 'Convert', 'createElement', 'floor', 'js-results-description', 'Rate\x20limit\x20exceeded.\x20Please\x20wait\x20for\x201\x20minute\x20before\x20making\x20another\x20request.', 'style', '655540FEpmIV', 'encrypt'];
    _0x14c4 = function() {
        return _0x3541be;
    }
    ;
    return _0x14c4();
}
function arrayBufferToHexString(_0x14cdc6) {
    var _0x396e18 = _0x5825;
    const _0x569dd6 = new Uint8Array(_0x14cdc6)
      , _0x4bfd73 = Array[_0x396e18(0xed)](_0x569dd6, _0x51b063=>_0x51b063[_0x396e18(0x112)](0x10)[_0x396e18(0xfd)](0x2, '0'));
    return _0x4bfd73[_0x396e18(0xe2)]('');
}
async function generateKeyAndIVFromTimestamp(_0x3e1000) {
    var _0x362b95 = _0x5825;
    const _0x182bb8 = Math[_0x362b95(0xef)](_0x3e1000 / 0x3c) * 0x3c
      , _0xedeb4b = new TextEncoder()
      , _0xa936e4 = _0xedeb4b['encode'](_0x182bb8[_0x362b95(0x112)]() + 'hungdaica')
        const _0x7d056 = crypto.createHash('sha256').update(_0xa936e4).digest()
        console.log(_0x7d056)
        //, _0x7d056 = await crypto['subtle']['digest']("SHA-256", _0xa936e4)
      , _0x3e9c28 = _0x7d056['slice'](0x0, 0x10)
      , _0x2cdc4d = _0x362b95(0x11e);
        //console.log('key:',_0x3e9c28)
        //console.log('iv:',_0x2cdc4d)
    return {
        'key': _0x3e9c28,
        'iv': _0x2cdc4d
    };
}
async function submitData() {
    var _0x521c08 = _0x5825
      , _0x2ad97d = "1122517851737346048"
    timestamp = await getCurrentTimestamp();
    const {key: _0xc6c46c, iv: _0x57ae2c} = await generateKeyAndIVFromTimestamp(timestamp)
      , _0x26f775 = arrayBufferToHexString(_0xc6c46c)
      , _0x58fff4 = await encryptAndDisplay(_0x26f775, _0x57ae2c, _0x2ad97d);
    var _0x430988 = {
        'username': _0x58fff4[_0x521c08(0x112)]()
    };
    console.log(_0x430988)
}

submitData()