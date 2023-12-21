    var e = require("@babel/runtime/helpers/interopRequireDefault").default;
    const request = require('request'); // 使用 'request' 模块来进行 HTTP 请求

    var t = require("../@babel/runtime/helpers/regeneratorRuntime")
      , n = require("../@babel/runtime/helpers/asyncToGenerator")

      , r = e(require("../vendors/sha"))
      , a = e(require("../config"))
      , u = e(require("js-md5"))
      , i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      , c = {};
    function o() {
        for (var e = "", t = 0; t < 6; t++) {
            var n = Math.floor(Math.random() * i.length);
            e += i[n]
        }
        return e
    }
    function p() {
    return new Promise((function(resolve) {
        // 这里定义了一个变量t，模拟小程序中的 u.default
        var t = "app_code=1002&ylD4#v3MQ8Mpo[Gmp4UJeO?aCz*1Di^-Eyt5}*!dq2r7+n1XRB$FU1h6@16iwbA@";
        // 这里定义了一个变量n，模拟小程序中的 c.signVaildTimestamp
        var n = c.signVaildTimestamp;

        // 如果n不是整数或者当前时间超过n+120000（12e4）的时候
        if (!parseInt(n) || parseInt(n) + 120000 <= Date.now()) {
            // 发起一个 HTTP 请求
            request({
                method: "GET",
                url: `${a.default.platformApiBaseUrl}/bc/common/getSysTime`,
                qs: {
                    app_code: "1002",
                    sign: t.toUpperCase()
                }
            }, function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    const responseData = JSON.parse(body);
                    if (responseData.success) {
                        // 如果请求成功并且返回的数据success字段为true，则更新c.signVaildTimestamp并将其作为promise的结果
                        c.signVaildTimestamp = responseData.data;
                        resolve(responseData.data);
                    } else {
                        // 如果不成功，将当前时间作为promise的结果
                        resolve(Date.now());
                    }
                } else {
                    // 如果请求失败，将当前时间作为promise的结果
                    resolve(Date.now());
                }
            });
        } else {
            // 如果当前时间在有效时间范围内，直接将c.signVaildTimestamp作为promise的结果
            resolve(c.signVaildTimestamp);
        }
    }));
}
    function f() {
        return (f = n(t().mark((function e(n) {
            var a, u, i, c;
            return t().wrap((function(e) {
                for (; ; )
                    switch (e.prev = e.next) {
                    case 0:
                        return a = o(),
                        e.next = 3,
                        p();
                    case 3:
                        return u = e.sent,
                        (i = new r.default("SHA-1","TEXT")).update("".concat("yO7rE1nE0ck2Ey").concat(a).concat(u)),
                        c = i.getHash("HEX"),
                        e.abrupt("return", {
                            nonce: a,
                            timestamp: u,
                            signature: c
                        });
                    case 8:
                    case "end":
                        return e.stop()
                    }
            }
            ), e)
        }
        )))).apply(this, arguments)
    }
    function l(e) {
        for (var t = Object.keys(e).sort(), n = {}, r = 0; r < t.length; r++)
            e[t[r]] && (n[t[r]] = e[t[r]]);
        return n
    }


f().then((result) => {
  console.log(result)
}).catch((error) => {
    // 处理错误
    console.error(error);
});
