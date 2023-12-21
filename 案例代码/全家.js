apiAppCode = "0cba052eda72e36ed2e98faf4fc82792"
appKey = "4c5541ac28af65c95d31d477ec5cfe4c"

const CryptoJS = require('crypto-js');

const s = {};
s.hash = CryptoJS.SHA256;


function mksign(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return useSha256(appKey + JSON.stringify(t) + e + apiAppCode);
      }
function useSha256(t) {
        hash = s.hash(t).toString(CryptoJS.enc.Hex);
        return hash
      }
e= {}
e.data = {
    "city_name": "嘉兴",
    "size": 100,
    "page": 1,
    "user_lat": 30.83074951171875,
    "user_lng": 120.92716217041016
}
t = '7226d3cba3573b1fef1482b327781a67.4a4beabe0b4bfaaafc2a0d23151be532'
sign = mksign(e.data,t)
console.log(sign)