const CryptoJS = require('crypto-js');

function md5Hash(input) {
  const hashedValue = CryptoJS.MD5(input).toString(CryptoJS.enc.Hex);
  return hashedValue;
}
const _0x3d8b44 = +new Date() + ''
    , _0x6f7fe7 = Math['random']()['toString'](0x24)['substr'](0x2)
    , _0x53c91f = md5Hash(md5Hash(_0x3d8b44) + _0x6f7fe7)
a =[_0x3d8b44,_0x6f7fe7,_0x53c91f]
console.log(a)