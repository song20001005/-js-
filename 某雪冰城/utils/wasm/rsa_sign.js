var e = require("../../@babel/runtime/helpers/interopRequireDefault");
const path = require("path");
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function (e, r) {
    return x.apply(this, arguments)
};
var r = e(require("../../@babel/runtime/regenerator")), n = require("../../@babel/runtime/helpers/asyncToGenerator"), t = e(require("../httpQueue"));
require("./textencoder");
var a = global.TextDecoder, u = global.TextEncoder, i = new a("utf-8", {
    ignoreBOM: !0,
    fatal: !0
});
i.decode();
var o, c = 0, s = new Uint8Array, f = new Int32Array, l = new t.default, d = "wasm_init_queue", _ = {
    wbg: {
        __wbindgen_throw: function (e, r) {
            throw new Error(g(e, r))
        }
    }
};
function b() {
    return w.apply(this, arguments)
}
function w() {
    return (w = n(r.default.mark((function e() {
                        return r.default.wrap((function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function (e) {
                                                    l.add(d, {
                                                        res: e
                                                    }, (function () {
                                                            var e = l.get(d);
                                                            const fs = require('fs');
                                                            const filePath = path.join(__dirname, "rsa_sign_bg.wasm");
                                                            const buffer = fs.readFileSync(filePath);
                                                            // const buffer = fs.readFileSync("./rsa_sign_bg.wasm");
                                                            WebAssembly.instantiate(buffer, _).then((function (r) {
                                                                    var n = r.instance;
                                                                    for (o = n.exports, f = new Int32Array, s = new Uint8Array; e.length; )
                                                                        e.shift().res();
                                                                    l.delete(d)
                                                                }))
                                                        }))
                                                })));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e)
                    })))).apply(this, arguments)
}
var p = new u("utf-8");
function g(e, r) {
    return i.decode(m().subarray(e, e + r))
}
var h = "function" == typeof p.encodeInto ? function (e, r) {
    return p.encodeInto(e, r)
}
 : function (e, r) {
    var n = p.encode(e);
    return r.set(n), {
        read: e.length,
        written: n.length
    }
};
function y(e, r, n) {
    if (void 0 === n) {
        var t = p.encode(e),
        a = r(t.length);
        return m().subarray(a, a + t.length).set(t),
        c = t.length,
        a
    }
    for (var u = e.length, i = r(u), o = m(), s = 0; s < u; s++) {
        var f = e.charCodeAt(s);
        if (f > 127)
            break;
        o[i + s] = f
    }
    if (s !== u) {
        0 !== s && (e = e.slice(s)),
        i = n(i, u, u = s + 3 * e.length);
        var l = m().subarray(i + s, i + u);
        s += h(e, l).written
    }
    return c = s,
    i
}
function v() {
    return 0 === f.byteLength && (f = new Int32Array(o.memory.buffer)),
    f
}
function m() {
    return 0 === s.byteLength && (s = new Uint8Array(o.memory.buffer)),
    s
}
function x() {
    return (x = n(r.default.mark((function e(n, t) {
                        var a,
                        u,
                        i,
                        s,
                        f,
                        l,
                        d;
                        return r.default.wrap((function (e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (o) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                        b();
                                    case 3:
                                        return e.prev = 3,
                                        a = o.__wbindgen_add_to_stack_pointer(-16),
                                        u = y(n, o.__wbindgen_malloc, o.__wbindgen_realloc),
                                        i = c,
                                        s = y(t, o.__wbindgen_malloc, o.__wbindgen_realloc),
                                        f = c,
                                        o.rsa_sign(a, u, i, s, f),
                                        l = v()[a / 4 + 0],
                                        d = v()[a / 4 + 1],
                                        e.abrupt("return", g(l, d));
                                    case 13:
                                        return e.prev = 13,
                                        o.__wbindgen_add_to_stack_pointer(16),
                                        o.__wbindgen_free(l, d),
                                        e.finish(13);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                    }
                            }), e, null, [[3, , 13, 17]])
                    })))).apply(this, arguments)
}