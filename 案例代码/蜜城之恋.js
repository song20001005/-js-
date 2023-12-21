var a = {
    "@database": "MYSQL",
    "[]": {
        "page": 0,
        "query": 2,
        "count": 10,
        "shop": {
            "@schema": "shop",
            "shop_status": 2,
            "is_delete": 0,
            "sellout_open": 1,
            "onboard_open": 1,
            "@combine": "sellout_open,onboard_open",
            "company_id": 10284,
            "city_name": "\u4E34\u6C82\u5E02",
            "shop_type<": 10,
            "@order": "distance+",
            "@column": "business_status,id,shop_name,detail_address,longitude,latitude,shop_logo,sellout_open,onboard_open,address,mobile,contact_tel;#ApijsonDistance(\"30.83074951171875\",\"120.92716217041016\",\"shop.latitude\",\"shop.longitude\")#:distance"
        },
        "shop_sell_out": {
            "@schema": "shop",
            "shop_id@": "[]/shop/id",
            "@column": "id:selloutId,do_time_type,common_send_time,extra_send_time,init_price"
        },
        "shop_do_day": {
            "@schema": "shop",
            "business_data@": "[]/shop/id",
            "type": 1,
            "@column": "type,monday,tuesday,wednesday,thursday,friday,saturday,sunday"
        },
        "shop_reservation[]": {
            "page": 0,
            "query": 2,
            "count": 10,
            "shop_reservation": {
                "@schema": "shop",
                "shop_id@": "[]/shop/id",
                "is_delete": 0
            }
        },
        "shop_do_time[]": {
            "page": 0,
            "query": 2,
            "count": 10,
            "shop_do_time": {
                "@schema": "shop",
                "business_data@": "[]/shop/id",
                "is_delete": 0,
                "type": 1,
                "@column": "type,start_time,end_time",
                "@order": "start_time+"
            }
        }
    },
    "total@": "/[]/total"
}

var s ='https://web.hknet-inc.com/queryport'

var pp = '5f799f787c15c374ed1addcd91894214'


function g(e) {
            function s(e, t, n, a, r, o, c) {
                return i(t & a | n & ~a, e, t, r, o, c)
            }
            function u(e, t, n, a, r, o, c) {
                return i(t ^ n ^ a, e, t, r, o, c)
            }
            function d(e, t, n, a, r, o, c) {
                return i(n ^ (t | ~a), e, t, r, o, c)
            }
    function c(e, t, n, a, r, o, c) {

                return i(t & n | ~t & a, e, t, r, o, c)
            }
    function i(e, t, n, a, r, i) {
                return o(function(e, t) {
                    return e << t | e >>> 32 - t
                }(o(o(t, e), o(a, i)), r), n)
            }
    function o(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
            }
    function m(e) {
                var t, n = "", a = 32 * e.length;
                for (t = 0; t < a; t += 8)
                    n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }
    function l(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0,
                t = 0; t < n.length; t += 1)
                    n[t] = 0;
                var a = 8 * e.length;
                for (t = 0; t < a; t += 8)
                    n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }
    function p(e, t) {
                var n, a, r, i, p;
                e[t >> 5] |= 128 << t % 32,
                e[14 + (t + 64 >>> 9 << 4)] = t;
                var m = 1732584193
                  , l = -271733879
                  , _ = -1732584194
                  , f = 271733878;
                for (n = 0; n < e.length; n += 16)
                    a = m,
                    r = l,
                    i = _,
                    p = f,
                    m = c(m, l, _, f, e[n], 7, -680876936),
                    f = c(f, m, l, _, e[n + 1], 12, -389564586),
                    _ = c(_, f, m, l, e[n + 2], 17, 606105819),
                    l = c(l, _, f, m, e[n + 3], 22, -1044525330),
                    m = c(m, l, _, f, e[n + 4], 7, -176418897),
                    f = c(f, m, l, _, e[n + 5], 12, 1200080426),
                    _ = c(_, f, m, l, e[n + 6], 17, -1473231341),
                    l = c(l, _, f, m, e[n + 7], 22, -45705983),
                    m = c(m, l, _, f, e[n + 8], 7, 1770035416),
                    f = c(f, m, l, _, e[n + 9], 12, -1958414417),
                    _ = c(_, f, m, l, e[n + 10], 17, -42063),
                    l = c(l, _, f, m, e[n + 11], 22, -1990404162),
                    m = c(m, l, _, f, e[n + 12], 7, 1804603682),
                    f = c(f, m, l, _, e[n + 13], 12, -40341101),
                    _ = c(_, f, m, l, e[n + 14], 17, -1502002290),
                    m = s(m, l = c(l, _, f, m, e[n + 15], 22, 1236535329), _, f, e[n + 1], 5, -165796510),
                    f = s(f, m, l, _, e[n + 6], 9, -1069501632),
                    _ = s(_, f, m, l, e[n + 11], 14, 643717713),
                    l = s(l, _, f, m, e[n], 20, -373897302),
                    m = s(m, l, _, f, e[n + 5], 5, -701558691),
                    f = s(f, m, l, _, e[n + 10], 9, 38016083),
                    _ = s(_, f, m, l, e[n + 15], 14, -660478335),
                    l = s(l, _, f, m, e[n + 4], 20, -405537848),
                    m = s(m, l, _, f, e[n + 9], 5, 568446438),
                    f = s(f, m, l, _, e[n + 14], 9, -1019803690),
                    _ = s(_, f, m, l, e[n + 3], 14, -187363961),
                    l = s(l, _, f, m, e[n + 8], 20, 1163531501),
                    m = s(m, l, _, f, e[n + 13], 5, -1444681467),
                    f = s(f, m, l, _, e[n + 2], 9, -51403784),
                    _ = s(_, f, m, l, e[n + 7], 14, 1735328473),
                    m = u(m, l = s(l, _, f, m, e[n + 12], 20, -1926607734), _, f, e[n + 5], 4, -378558),
                    f = u(f, m, l, _, e[n + 8], 11, -2022574463),
                    _ = u(_, f, m, l, e[n + 11], 16, 1839030562),
                    l = u(l, _, f, m, e[n + 14], 23, -35309556),
                    m = u(m, l, _, f, e[n + 1], 4, -1530992060),
                    f = u(f, m, l, _, e[n + 4], 11, 1272893353),
                    _ = u(_, f, m, l, e[n + 7], 16, -155497632),
                    l = u(l, _, f, m, e[n + 10], 23, -1094730640),
                    m = u(m, l, _, f, e[n + 13], 4, 681279174),
                    f = u(f, m, l, _, e[n], 11, -358537222),
                    _ = u(_, f, m, l, e[n + 3], 16, -722521979),
                    l = u(l, _, f, m, e[n + 6], 23, 76029189),
                    m = u(m, l, _, f, e[n + 9], 4, -640364487),
                    f = u(f, m, l, _, e[n + 12], 11, -421815835),
                    _ = u(_, f, m, l, e[n + 15], 16, 530742520),
                    m = d(m, l = u(l, _, f, m, e[n + 2], 23, -995338651), _, f, e[n], 6, -198630844),
                    f = d(f, m, l, _, e[n + 7], 10, 1126891415),
                    _ = d(_, f, m, l, e[n + 14], 15, -1416354905),
                    l = d(l, _, f, m, e[n + 5], 21, -57434055),
                    m = d(m, l, _, f, e[n + 12], 6, 1700485571),
                    f = d(f, m, l, _, e[n + 3], 10, -1894986606),
                    _ = d(_, f, m, l, e[n + 10], 15, -1051523),
                    l = d(l, _, f, m, e[n + 1], 21, -2054922799),
                    m = d(m, l, _, f, e[n + 8], 6, 1873313359),
                    f = d(f, m, l, _, e[n + 15], 10, -30611744),
                    _ = d(_, f, m, l, e[n + 6], 15, -1560198380),
                    l = d(l, _, f, m, e[n + 13], 21, 1309151649),
                    m = d(m, l, _, f, e[n + 4], 6, -145523070),
                    f = d(f, m, l, _, e[n + 11], 10, -1120210379),
                    _ = d(_, f, m, l, e[n + 2], 15, 718787259),
                    l = d(l, _, f, m, e[n + 9], 21, -343485551),
                    m = o(m, a),
                    l = o(l, r),
                    _ = o(_, i),
                    f = o(f, p);
                return [m, l, _, f]
            }
    function f(e) {
                return unescape(encodeURIComponent(e))
            }
                return function(e) {
                    return m(p(l(e), 8 * e.length))
                }(f(e))
            }

var ll = function(e) {
            function m() {
                            return s.includes("daily") || s.includes("gray") ? "" : Object(r.b)("encryptType")
                        }
                        r = {}
            r.b = function g(e) {
    const _ ={
    "API_JSON": "https://web.hknet-inc.com/queryport",
    "APP_URL": "https://web.hknet-inc.com",
    "APP_TYPE": "mini",
    "APP_KEY": "12610510",
    "APP_SECERT": "5f799f787c15c374ed1addcd91894214",
    "encryptType": "",
    "dpr": 0.552,
    "platform": "windows",
    "windowHeight": 736,
    "statusBarHeight": 0,
    "inLoginPageNow": false,
    "Session_key": "cookie",
    "appKey": "aMdi6T4a2kA=",
    "h5-wrap-classname": ".taro-tabbar__panel",
    "storageKey": {
        "shopcart": {
            "key": "shopcart"
        },
        "userinfo": {
            "key": "userinfo"
        },
        "landmark": {
            "key": "landmark"
        },
        "phone_uuid": {
            "key": "phone_uuid"
        }
    },
    "version": "12.0.77",
    "companyId": 10284,
    "appId": "wx0216dfe9e4024a5d",
    "primary": "#000",
    "primaryBg": "#c72525",
    "componentAppId": "wx0f7006921959f799",
    "IS_IOS": false,
    "vconsole": false,
    "itemCookCompany": [
        7,
        10605
    ],
    "noHomeAdShow": true,
    "cardQuanStr": null,
    "priceColor": "#000000"
}
            return e ? _[e] : _
        }
            var t = JSON.stringify(e)
              , n = m();
            "default" == n && (e = t = c.a.encode(t));
            function b(e, t, n) {
                return t ? n ? h(t, e) : function(e, t) {
                    return _(h(e, t))
                }(t, e) : n ? g(e) : function(e) {
                    return _(g(e))
                }(e)
            }
            function _(e) {
                var t, n, a = "0123456789abcdef", r = "";
                for (n = 0; n < e.length; n += 1)
                    t = e.charCodeAt(n),
                    r += a.charAt(t >>> 4 & 15) + a.charAt(15 & t);
                return r
            }
            var r = b(pp + ":" + t + ":" + pp);
            return r
        }

sign = ll(a)
console.log(sign)