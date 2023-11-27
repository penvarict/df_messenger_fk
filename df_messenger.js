'use strict';
var DF_M;

function DF_Maa(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
var DF_Mba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function DF_Mca(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var DF_Ma = DF_Mca(this);

function DF_Mb(a, b) {
    if (b) a: {
        var c = DF_Ma;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && DF_Mba(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
DF_Mb("Symbol", function(a) {
    function b(f) {
        if (this instanceof b) throw new TypeError("Symbol is not a constructor");
        return new c(d + (f || "") + "_" + e++, f)
    }

    function c(f, g) {
        this.g = f;
        DF_Mba(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    }
    if (a) return a;
    c.prototype.toString = function() {
        return this.g
    };
    var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        e = 0;
    return b
});
DF_Mb("Symbol.iterator", function(a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = DF_Ma[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && DF_Mba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return DF_Mda(DF_Maa(this))
            }
        })
    }
    return a
});

function DF_Mda(a) {
    a = {
        next: a
    };
    a[Symbol.iterator] = function() {
        return this
    };
    return a
}

function DF_Mc(a) {
    return a.raw = a
}

function DF_Md(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    if (b) return b.call(a);
    if ("number" == typeof a.length) return {
        next: DF_Maa(a)
    };
    throw Error(String(a) + " is not an iterable or ArrayLike");
}

function DF_Me(a) {
    if (!(a instanceof Array)) {
        a = DF_Md(a);
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        a = c
    }
    return a
}

function DF_Mea(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
var DF_Mfa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (d)
            for (var e in d) DF_Mea(d, e) && (a[e] = d[e])
    }
    return a
};
DF_Mb("Object.assign", function(a) {
    return a || DF_Mfa
});
var DF_Mga = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    },
    DF_Mha = function() {
        function a() {
            function c() {}
            new c;
            Reflect.construct(c, [], function() {});
            return new c instanceof c
        }
        if ("undefined" != typeof Reflect && Reflect.construct) {
            if (a()) return Reflect.construct;
            var b = Reflect.construct;
            return function(c, d, e) {
                c = b(c, d);
                e && Reflect.setPrototypeOf(c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = DF_Mga(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c,
                e, d) || e
        }
    }(),
    DF_Mia;
if ("function" == typeof Object.setPrototypeOf) DF_Mia = Object.setPrototypeOf;
else {
    var DF_Mja;
    a: {
        var DF_Mka = {
                a: !0
            },
            DF_Mla = {};
        try {
            DF_Mla.__proto__ = DF_Mka;
            DF_Mja = DF_Mla.a;
            break a
        } catch (a) {}
        DF_Mja = !1
    }
    DF_Mia = DF_Mja ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var DF_Mma = DF_Mia;

function DF_Mf(a, b) {
    a.prototype = DF_Mga(b.prototype);
    a.prototype.constructor = a;
    if (DF_Mma) DF_Mma(a, b);
    else
        for (var c in b)
            if ("prototype" != c)
                if (Object.defineProperties) {
                    var d = Object.getOwnPropertyDescriptor(b, c);
                    d && Object.defineProperty(a, c, d)
                } else a[c] = b[c];
    a.rd = b.prototype
}

function DF_Mna() {
    this.F = !1;
    this.i = null;
    this.h = void 0;
    this.g = 1;
    this.N = this.G = 0;
    this.j = null
}

function DF_Moa(a) {
    if (a.F) throw new TypeError("Generator is already running");
    a.F = !0
}
DF_Mna.prototype.K = function(a) {
    this.h = a
};

function DF_Mpa(a, b) {
    a.j = {
        cc: b,
        ed: !0
    };
    a.g = a.G || a.N
}
DF_Mna.prototype.return = function(a) {
    this.j = {
        return: a
    };
    this.g = this.N
};

function DF_Mg(a, b, c) {
    a.g = c;
    return {
        value: b
    }
}

function DF_Mqa(a) {
    this.g = new DF_Mna;
    this.h = a
}

function DF_Mra(a, b) {
    DF_Moa(a.g);
    var c = a.g.i;
    if (c) return DF_Msa(a, "return" in c ? c["return"] : function(d) {
        return {
            value: d,
            done: !0
        }
    }, b, a.g.return);
    a.g.return(b);
    return DF_Mta(a)
}

function DF_Msa(a, b, c, d) {
    try {
        var e = b.call(a.g.i, c);
        if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
        if (!e.done) return a.g.F = !1, e;
        var f = e.value
    } catch (g) {
        return a.g.i = null, DF_Mpa(a.g, g), DF_Mta(a)
    }
    a.g.i = null;
    d.call(a.g, f);
    return DF_Mta(a)
}

function DF_Mta(a) {
    for (; a.g.g;) try {
        var b = a.h(a.g);
        if (b) return a.g.F = !1, {
            value: b.value,
            done: !1
        }
    } catch (c) {
        a.g.h = void 0, DF_Mpa(a.g, c)
    }
    a.g.F = !1;
    if (a.g.j) {
        b = a.g.j;
        a.g.j = null;
        if (b.ed) throw b.cc;
        return {
            value: b.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
}

function DF_Mua(a) {
    this.next = function(b) {
        DF_Moa(a.g);
        a.g.i ? b = DF_Msa(a, a.g.i.next, b, a.g.K) : (a.g.K(b), b = DF_Mta(a));
        return b
    };
    this.throw = function(b) {
        DF_Moa(a.g);
        a.g.i ? b = DF_Msa(a, a.g.i["throw"], b, a.g.K) : (DF_Mpa(a.g, b), b = DF_Mta(a));
        return b
    };
    this.return = function(b) {
        return DF_Mra(a, b)
    };
    this[Symbol.iterator] = function() {
        return this
    }
}

function DF_Mva(a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function(d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
}

function DF_Mh(a) {
    return DF_Mva(new DF_Mua(new DF_Mqa(a)))
}

function DF_Mwa() {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
    return b
}
DF_Mb("Reflect", function(a) {
    return a ? a : {}
});
DF_Mb("Reflect.construct", function() {
    return DF_Mha
});
DF_Mb("Reflect.setPrototypeOf", function(a) {
    return a ? a : DF_Mma ? function(b, c) {
        try {
            return DF_Mma(b, c), !0
        } catch (d) {
            return !1
        }
    } : null
});
DF_Mb("Promise", function(a) {
    function b(g) {
        this.h = 0;
        this.i = void 0;
        this.g = [];
        this.K = !1;
        var h = this.j();
        try {
            g(h.resolve, h.reject)
        } catch (k) {
            h.reject(k)
        }
    }

    function c() {
        this.g = null
    }

    function d(g) {
        return g instanceof b ? g : new b(function(h) {
            h(g)
        })
    }
    if (a) return a;
    c.prototype.h = function(g) {
        if (null == this.g) {
            this.g = [];
            var h = this;
            this.i(function() {
                h.F()
            })
        }
        this.g.push(g)
    };
    var e = DF_Ma.setTimeout;
    c.prototype.i = function(g) {
        e(g, 0)
    };
    c.prototype.F = function() {
        for (; this.g && this.g.length;) {
            var g = this.g;
            this.g = [];
            for (var h = 0; h <
                g.length; ++h) {
                var k = g[h];
                g[h] = null;
                try {
                    k()
                } catch (l) {
                    this.j(l)
                }
            }
        }
        this.g = null
    };
    c.prototype.j = function(g) {
        this.i(function() {
            throw g;
        })
    };
    b.prototype.j = function() {
        function g(l) {
            return function(m) {
                k || (k = !0, l.call(h, m))
            }
        }
        var h = this,
            k = !1;
        return {
            resolve: g(this.ta),
            reject: g(this.F)
        }
    };
    b.prototype.ta = function(g) {
        if (g === this) this.F(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof b) this.Ea(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
            }
            h ? this.O(g) : this.G(g)
        }
    };
    b.prototype.O = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (k) {
            this.F(k);
            return
        }
        "function" == typeof h ? this.Fa(h, g) : this.G(g)
    };
    b.prototype.F = function(g) {
        this.N(2, g)
    };
    b.prototype.G = function(g) {
        this.N(1, g)
    };
    b.prototype.N = function(g, h) {
        if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
        this.h = g;
        this.i = h;
        2 === this.h && this.ua();
        this.aa()
    };
    b.prototype.ua = function() {
        var g = this;
        e(function() {
            if (g.ka()) {
                var h = DF_Ma.console;
                "undefined" !== typeof h &&
                    h.error(g.i)
            }
        }, 1)
    };
    b.prototype.ka = function() {
        if (this.K) return !1;
        var g = DF_Ma.CustomEvent,
            h = DF_Ma.Event,
            k = DF_Ma.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g ? g = new g("unhandledrejection", {
            cancelable: !0
        }) : "function" === typeof h ? g = new h("unhandledrejection", {
            cancelable: !0
        }) : (g = DF_Ma.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.i;
        return k(g)
    };
    b.prototype.aa = function() {
        if (null != this.g) {
            for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
            this.g = null
        }
    };
    var f = new c;
    b.prototype.Ea = function(g) {
        var h = this.j();
        g.Wa(h.resolve, h.reject)
    };
    b.prototype.Fa = function(g, h) {
        var k = this.j();
        try {
            g.call(h, k.resolve, k.reject)
        } catch (l) {
            k.reject(l)
        }
    };
    b.prototype.then = function(g, h) {
        function k(p, q) {
            return "function" == typeof p ? function(r) {
                try {
                    l(p(r))
                } catch (t) {
                    m(t)
                }
            } : q
        }
        var l, m, n = new b(function(p, q) {
            l = p;
            m = q
        });
        this.Wa(k(g, l), k(h, m));
        return n
    };
    b.prototype.catch = function(g) {
        return this.then(void 0, g)
    };
    b.prototype.Wa = function(g, h) {
        function k() {
            switch (l.h) {
                case 1:
                    g(l.i);
                    break;
                case 2:
                    h(l.i);
                    break;
                default:
                    throw Error("Unexpected state: " + l.h);
            }
        }
        var l = this;
        null == this.g ? f.h(k) : this.g.push(k);
        this.K = !0
    };
    b.resolve = d;
    b.reject = function(g) {
        return new b(function(h, k) {
            k(g)
        })
    };
    b.race = function(g) {
        return new b(function(h, k) {
            for (var l = DF_Md(g), m = l.next(); !m.done; m = l.next()) d(m.value).Wa(h, k)
        })
    };
    b.all = function(g) {
        var h = DF_Md(g),
            k = h.next();
        return k.done ? d([]) : new b(function(l, m) {
            function n(r) {
                return function(t) {
                    p[r] = t;
                    q--;
                    0 == q && l(p)
                }
            }
            var p = [],
                q = 0;
            do p.push(void 0), q++, d(k.value).Wa(n(p.length -
                1), m), k = h.next(); while (!k.done)
        })
    };
    return b
});
DF_Mb("Object.setPrototypeOf", function(a) {
    return a || DF_Mma
});
DF_Mb("WeakMap", function(a) {
    function b(k) {
        this.g = (h += Math.random() + 1).toString();
        if (k) {
            k = DF_Md(k);
            for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
        }
    }

    function c() {}

    function d(k) {
        var l = typeof k;
        return "object" === l && null !== k || "function" === l
    }

    function e(k) {
        if (!DF_Mea(k, g)) {
            var l = new c;
            DF_Mba(k, g, {
                value: l
            })
        }
    }

    function f(k) {
        var l = Object[k];
        l && (Object[k] = function(m) {
            if (m instanceof c) return m;
            Object.isExtensible(m) && e(m);
            return l(m)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}),
                    l = Object.seal({}),
                    m = new a([
                        [k, 2],
                        [l, 3]
                    ]);
                if (2 != m.get(k) || 3 != m.get(l)) return !1;
                m.delete(k);
                m.set(l, 4);
                return !m.has(k) && 4 == m.get(l)
            } catch (n) {
                return !1
            }
        }()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function(k, l) {
        if (!d(k)) throw Error("Invalid WeakMap key");
        e(k);
        if (!DF_Mea(k, g)) throw Error("WeakMap key fail: " + k);
        k[g][this.g] = l;
        return this
    };
    b.prototype.get = function(k) {
        return d(k) && DF_Mea(k, g) ? k[g][this.g] : void 0
    };
    b.prototype.has =
        function(k) {
            return d(k) && DF_Mea(k, g) && DF_Mea(k[g], this.g)
        };
    b.prototype.delete = function(k) {
        return d(k) && DF_Mea(k, g) && DF_Mea(k[g], this.g) ? delete k[g][this.g] : !1
    };
    return b
});
DF_Mb("Map", function(a) {
    function b() {
        var h = {};
        return h.ja = h.next = h.head = h
    }

    function c(h, k) {
        var l = h[1];
        return DF_Mda(function() {
            if (l) {
                for (; l.head != h[1];) l = l.ja;
                for (; l.next != l.head;) return l = l.next, {
                    done: !1,
                    value: k(l)
                };
                l = null
            }
            return {
                done: !0,
                value: void 0
            }
        })
    }

    function d(h, k) {
        var l = k && typeof k;
        "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
        var m = h[0][l];
        if (m && DF_Mea(h[0], l))
            for (h = 0; h < m.length; h++) {
                var n = m[h];
                if (k !== k && n.key !== n.key || k === n.key) return {
                    id: l,
                    list: m,
                    index: h,
                    R: n
                }
            }
        return {
            id: l,
            list: m,
            index: -1,
            R: void 0
        }
    }

    function e(h) {
        this[0] = {};
        this[1] = b();
        this.size = 0;
        if (h) {
            h = DF_Md(h);
            for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
        }
    }
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    k = new a(DF_Md([
                        [h, "s"]
                    ]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size) return !1;
                var l = k.entries(),
                    m = l.next();
                if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                m = l.next();
                return m.done ||
                    4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
            } catch (n) {
                return !1
            }
        }()) return a;
    var f = new WeakMap;
    e.prototype.set = function(h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this[0][l.id] = []);
        l.R ? l.R.value = k : (l.R = {
            next: this[1],
            ja: this[1].ja,
            head: this[1],
            key: h,
            value: k
        }, l.list.push(l.R), this[1].ja.next = l.R, this[1].ja = l.R, this.size++);
        return this
    };
    e.prototype.delete = function(h) {
        h = d(this, h);
        return h.R && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.R.ja.next = h.R.next, h.R.next.ja =
            h.R.ja, h.R.head = null, this.size--, !0) : !1
    };
    e.prototype.clear = function() {
        this[0] = {};
        this[1] = this[1].ja = b();
        this.size = 0
    };
    e.prototype.has = function(h) {
        return !!d(this, h).R
    };
    e.prototype.get = function(h) {
        return (h = d(this, h).R) && h.value
    };
    e.prototype.entries = function() {
        return c(this, function(h) {
            return [h.key, h.value]
        })
    };
    e.prototype.keys = function() {
        return c(this, function(h) {
            return h.key
        })
    };
    e.prototype.values = function() {
        return c(this, function(h) {
            return h.value
        })
    };
    e.prototype.forEach = function(h, k) {
        for (var l = this.entries(),
                m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e
});
DF_Mb("WeakSet", function(a) {
    function b(c) {
        this.g = new WeakMap;
        if (c) {
            c = DF_Md(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var c = Object.seal({}),
                    d = Object.seal({}),
                    e = new a([c]);
                if (!e.has(c) || e.has(d)) return !1;
                e.delete(c);
                e.add(d);
                return !e.has(c) && e.has(d)
            } catch (f) {
                return !1
            }
        }()) return a;
    b.prototype.add = function(c) {
        this.g.set(c, !0);
        return this
    };
    b.prototype.has = function(c) {
        return this.g.has(c)
    };
    b.prototype.delete = function(c) {
        return this.g.delete(c)
    };
    return b
});
DF_Mb("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
    }
});
DF_Mb("Set", function(a) {
    function b(c) {
        this.g = new Map;
        if (c) {
            c = DF_Md(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.g.size
    }
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(DF_Md([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size) return !1;
                var e = d.entries(),
                    f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 !=
                    f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
    b.prototype.add = function(c) {
        c = 0 === c ? 0 : c;
        this.g.set(c, c);
        this.size = this.g.size;
        return this
    };
    b.prototype.delete = function(c) {
        c = this.g.delete(c);
        this.size = this.g.size;
        return c
    };
    b.prototype.clear = function() {
        this.g.clear();
        this.size = 0
    };
    b.prototype.has = function(c) {
        return this.g.has(c)
    };
    b.prototype.entries = function() {
        return this.g.entries()
    };
    b.prototype.values = function() {
        return this.g.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.g.forEach(function(f) {
            return c.call(d, f, f, e)
        })
    };
    return b
});
DF_Mb("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) DF_Mea(b, d) && c.push([d, b[d]]);
        return c
    }
});
DF_Mb("globalThis", function(a) {
    return a || DF_Ma
});
DF_Mb("Array.from", function(a) {
    return a ? a : function(b, c, d) {
        c = null != c ? c : function(h) {
            return h
        };
        var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
        if ("function" == typeof f) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
        } else
            for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
        return e
    }
});

function DF_Mxa(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
}
DF_Mb("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return DF_Mxa(this, function(b) {
            return b
        })
    }
});
DF_Mb("Array.prototype.flat", function(a) {
    return a ? a : function(b) {
        b = void 0 === b ? 1 : b;
        var c = [];
        Array.prototype.forEach.call(this, function(d) {
            Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
        });
        return c
    }
});
DF_Mb("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});

function DF_Mya(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + ""
}
DF_Mb("String.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        return -1 !== DF_Mya(this, b, "includes").indexOf(b, c || 0)
    }
});
DF_Mb("String.prototype.endsWith", function(a) {
    return a ? a : function(b, c) {
        var d = DF_Mya(this, b, "endsWith");
        void 0 === c && (c = d.length);
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var e = b.length; 0 < e && 0 < c;)
            if (d[--c] != b[--e]) return !1;
        return 0 >= e
    }
});
DF_Mb("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return DF_Mxa(this, function(b, c) {
            return [b, c]
        })
    }
});
DF_Mb("Array.prototype.values", function(a) {
    return a ? a : function() {
        return DF_Mxa(this, function(b, c) {
            return c
        })
    }
});
DF_Mb("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        var d = DF_Mya(this, b, "startsWith"),
            e = d.length,
            f = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var g = 0; g < f && c < e;)
            if (d[c++] != b[g++]) return !1;
        return g >= f
    }
});
DF_Mb("Array.prototype.fill", function(a) {
    return a ? a : function(b, c, d) {
        var e = this.length || 0;
        0 > c && (c = Math.max(0, e + c));
        if (null == d || d > e) d = e;
        d = Number(d);
        0 > d && (d = Math.max(0, e + d));
        for (c = Number(c || 0); c < d; c++) this[c] = b;
        return this
    }
});

function DF_Mza(a) {
    return a ? a : Array.prototype.fill
}
DF_Mb("Int8Array.prototype.fill", DF_Mza);
DF_Mb("Uint8Array.prototype.fill", DF_Mza);
DF_Mb("Uint8ClampedArray.prototype.fill", DF_Mza);
DF_Mb("Int16Array.prototype.fill", DF_Mza);
DF_Mb("Uint16Array.prototype.fill", DF_Mza);
DF_Mb("Int32Array.prototype.fill", DF_Mza);
DF_Mb("Uint32Array.prototype.fill", DF_Mza);
DF_Mb("Float32Array.prototype.fill", DF_Mza);
DF_Mb("Float64Array.prototype.fill", DF_Mza);
DF_Mb("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var DF_Mi = this || self;

function DF_MAa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function DF_MBa(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function DF_MCa(a, b, c) {
    DF_MCa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? DF_MAa : DF_MBa;
    return DF_MCa.apply(null, arguments)
}

function DF_MDa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d)
    }
}

function DF_MEa(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.rd = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.xd = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}

function DF_MFa(a) {
    return a
};

function DF_Mj(a, b, c, d) {
    var e = arguments.length,
        f = 3 > e ? b : null === d ? d = Object.getOwnPropertyDescriptor(b, c) : d,
        g;
    if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.decorate) f = Reflect.decorate(a, b, c, d);
    else
        for (var h = a.length - 1; 0 <= h; h--)
            if (g = a[h]) f = (3 > e ? g(f) : 3 < e ? g(b, c, f) : g(b, c)) || f;
    return 3 < e && f && Object.defineProperty(b, c, f), f
}

function DF_Mk(a, b) {
    if ("object" === typeof Reflect && Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(a, b)
};
var DF_MGa = !/^\s*class\s*\{\s*\}\s*$/.test(function() {}.toString());
var DF_MHa = DF_Mi.Reflect;

function DF_MIa() {
    return DF_MHa.construct(Event, DF_Mwa.apply(0, arguments), this.constructor)
}
DF_MIa.prototype = Event.prototype;
var DF_MJa = DF_MGa ? DF_MIa : Event;
/*

 Copyright 2021 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MKa(a, b, c) {
    var d = DF_MJa.call(this, "context-request", {
        bubbles: !0,
        composed: !0
    }) || this;
    d.context = a;
    d.callback = b;
    d.subscribe = null != c ? c : !1;
    return d
}
DF_Mf(DF_MKa, DF_MJa);

function DF_MLa() {
    var a = this;
    this.g = new Map;
    this.h = function(b) {
        var c = a.g.get(b.context);
        if (void 0 !== c) {
            a.g.delete(b.context);
            c = DF_Md(c.jc);
            for (var d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = e.Uc.deref();
                e = e.Pc.deref();
                void 0 !== d && void 0 !== e && d.dispatchEvent(new DF_MKa(b.context, e, !0))
            }
        }
    };
    this.Jb = function(b) {
        if (!0 === b.subscribe) {
            var c = b.composedPath()[0],
                d = b.callback,
                e = a.g.get(b.context);
            void 0 === e && a.g.set(b.context, e = {
                Xb: new WeakMap,
                jc: []
            });
            b = e.Xb.get(c);
            void 0 === b && e.Xb.set(c, b = new WeakSet);
            b.has(d) || (b.add(d), e.jc.push({
                Uc: new WeakRef(c),
                Pc: new WeakRef(d)
            }))
        }
    }
};

function DF_MMa(a, b) {
    var c = this;
    this.Mb = this.subscribe = !1;
    this.value = void 0;
    this.Gc = function(e, f) {
        c.unsubscribe && (c.unsubscribe !== f && (c.Mb = !1, c.unsubscribe()), c.subscribe || c.unsubscribe());
        c.value = e;
        DF_MNa(c.host);
        if (!c.Mb || c.subscribe) c.Mb = !0, c.callback && c.callback(e, f);
        c.unsubscribe = f
    };
    this.host = a;
    if (void 0 !== b.context) {
        this.context = b.context;
        this.callback = b.callback;
        var d;
        this.subscribe = null != (d = b.subscribe) ? d : !1
    } else this.context = b, this.callback = void 0, this.subscribe = !1;
    DF_MOa(this.host, this)
}
DF_MMa.prototype.Eb = function() {
    this.host.dispatchEvent(new DF_MKa(this.context, this.Gc, this.subscribe))
};
DF_MMa.prototype.cd = function() {
    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0)
};

function DF_MPa(a) {
    var b = this;
    this.Ca = new Map;
    this.h = function() {
        for (var c = DF_Md(b.Ca), d = c.next(); !d.done; d = c.next()) {
            var e = DF_Md(d.value);
            d = e.next().value;
            e = e.next().value.ac;
            d(b.g, e)
        }
    };
    void 0 !== a && (this.value = a)
}

function DF_MQa(a, b) {
    var c = !Object.is(b, a.g);
    a.g = b;
    c && a.h()
}

function DF_MRa(a, b, c, d) {
    d ? (a.Ca.has(b) || a.Ca.set(b, {
        ac: function() {
            a.Ca.delete(b)
        },
        Qc: c
    }), c = a.Ca.get(b).ac, b(a.value, c)) : b(a.value)
}
DF_Ma.Object.defineProperties(DF_MPa.prototype, {
    value: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g
        },
        set: function(a) {
            DF_MQa(this, a)
        }
    }
});

function DF_MSa(a) {
    var b = DF_MJa.call(this, "context-provider", {
        bubbles: !0,
        composed: !0
    }) || this;
    b.context = a;
    return b
}
DF_Mf(DF_MSa, DF_MJa);

function DF_MTa(a, b, c) {
    DF_MPa.call(this, void 0 !== b.context ? b.Cd : c);
    var d = this;
    this.Jb = function(e) {
        var f = e.composedPath()[0];
        e.context === d.context && f !== d.host && (e.stopPropagation(), DF_MRa(d, e.callback, f, e.subscribe))
    };
    this.kd = function(e) {
        var f = e.composedPath()[0];
        if (e.context === d.context && f !== d.host) {
            f = new Set;
            for (var g = DF_Md(d.Ca), h = g.next(); !h.done; h = g.next()) {
                var k = DF_Md(h.value);
                h = k.next().value;
                k = k.next().value.Qc;
                f.has(h) || (f.add(h), k.dispatchEvent(new DF_MKa(d.context, h, !0)))
            }
            e.stopPropagation()
        }
    };
    this.host = a;
    this.context = void 0 !== b.context ? b.context : b;
    this.host.addEventListener("context-request", this.Jb);
    this.host.addEventListener("context-provider", this.kd);
    DF_MOa(this.host, this)
}
DF_Mf(DF_MTa, DF_MPa);
DF_MTa.prototype.Eb = function() {
    this.host.dispatchEvent(new DF_MSa(this.context))
};
/*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MUa(a) {
    var b = a.context,
        c = a.subscribe;
    return function(d, e) {
        "object" === typeof e ? e.l(function() {
            var f = this;
            new DF_MMa(this, {
                context: b,
                callback: function(g) {
                    f[e.name] = g
                },
                subscribe: c
            })
        }) : d.constructor.l(function(f) {
            new DF_MMa(f, {
                context: b,
                callback: function(g) {
                    f[e] = g
                },
                subscribe: c
            })
        })
    }
};
/*

 Copyright 2017 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_MVa(a) {
    var b = a.context;
    return function(c, d) {
        var e = new WeakMap;
        if ("object" === typeof d) return d.l(function() {
            e.set(this, new DF_MTa(this, {
                context: b
            }))
        }), {
            get: function() {
                return c.get.call(this)
            },
            set: function(k) {
                var l;
                null == (l = e.get(this)) || DF_MQa(l, k);
                return c.set.call(this, k)
            },
            dd: function(k) {
                var l;
                null == (l = e.get(this)) || DF_MQa(l, k);
                return k
            }
        };
        c.constructor.l(function(k) {
            e.set(k, new DF_MTa(k, {
                context: b
            }))
        });
        var f = Object.getOwnPropertyDescriptor(c, d);
        if (void 0 === f) {
            var g = new WeakMap;
            f = {
                get: function() {
                    return g.get(this)
                },
                set: function(k) {
                    DF_MQa(e.get(this), k);
                    g.set(this, k)
                }
            }
        } else {
            var h = null == f ? void 0 : f.set;
            f = Object.assign({}, f, {
                set: function(k) {
                    var l;
                    null == (l = e.get(this)) || DF_MQa(l, k);
                    null == h || h.call(this, k)
                }
            })
        }
        Object.defineProperty(c, d, f)
    }
};

function DF_Ml(a, b, c) {
    c = void 0 === c ? {} : c;
    console.debug("DF-MESSENGER", "fireCustomEvent", b, c);
    b = new CustomEvent(b, {
        detail: c,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    });
    return a.dispatchEvent(b)
}

function DF_MWa() {
    var a = document.documentElement,
        b = this;
    this.element = a;
    this.name = "df-register-message-consumer";
    this.g = [];
    this.h = function(c) {
        b.g.push(c)
    };
    a.addEventListener("df-register-message-consumer", this.h)
}
DF_MWa.prototype.flush = function() {
    for (var a = DF_Md(this.g), b = a.next(); !b.done; b = a.next()) b = b.value, b.target && b.detail && DF_Ml(b.target, this.name, b.detail);
    this.g = [];
    this.element.removeEventListener(this.name, this.h)
};
var DF_Mm = new Map([
    ["en", {
        askSomething: "Ask something...",
        chatTitle: "Chat",
        genericErrorMessage: "Something went wrong, please try again.",
        messageTooLong: "Oops! Your message is {$numOfChars} character(s) too long.",
        authErrorMessage: "Permission denied.",
        openAriaLabel: "Open {$chatTitle}",
        closeAriaLabel: "Close {$chatTitle}",
        sendAriaLabel: "Send",
        inputAriaLabel: "Talk to Agent",
        opensInANewTab: "Opens in a new tab",
        agentSays: "Agent Says:",
        iSay: "I Say:",
        citationsMessage: "Source:",
        feedbackWhyRatingText: "Why did you choose this rating?",
        feedbackOptionalText: "optional",
        feedbackPlaceholder: "Additional Feedback",
        feedbackSubmit: "Submit",
        feedbackChipIrrelevant: "Irrelevant",
        feedbackChipIncorrect: "Incorrect",
        feedbackChipUnsafe: "Unsafe",
        feedbackInputAriaLabel: "Provide additional feedback",
        feedbackCloseAriaLabel: "Close additional feedack",
        feedbackSubmitAriaLabel: "Submit additional feedback",
        feedbackThankYouText: "Thank you for your feedback",
        feedbackPrivacyNoticeText: "Please do not provide any personal or sensitive data",
        requestAccess: "Request Access",
        useCodeWithCautionText: "Use code with caution.",
        copyCodeAriaLabel: "Copy code",
        jumpToBottom: "Jump to bottom",
        youtubeVideoLabel: "Youtube video",
        videoNoSupportFallbackText: "Your browser does not support the video tag."
    }]
]);
DF_Mm.set("da", {
    askSomething: "Stil et sp\u00f8rgsm\u00e5l\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Der opstod en fejl. Pr\u00f8v igen.",
    messageTooLong: "Ups! Din besked er {$numOfChars} tegn for lang.",
    authErrorMessage: "Tilladelsen blev n\u00e6gtet.",
    openAriaLabel: "\u00c5bn {$chatTitle}",
    closeAriaLabel: "Luk {$chatTitle}",
    sendAriaLabel: "Send",
    inputAriaLabel: "Tal med en repr\u00e6sentant",
    opensInANewTab: "\u00c5bnes p\u00e5 en ny fane",
    agentSays: "Repr\u00e6sentanten siger:",
    iSay: "Jeg siger:",
    citationsMessage: "Kilde:",
    feedbackWhyRatingText: "Hvorfor valgte du denne bed\u00f8mmelse?",
    feedbackOptionalText: "valgfrit",
    feedbackPlaceholder: "Yderligere feedback",
    feedbackSubmit: "Send",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Forkert",
    feedbackChipUnsafe: "Usikkert",
    feedbackInputAriaLabel: "Giv yderligere feedback",
    feedbackCloseAriaLabel: "Luk yderligere feedback",
    feedbackSubmitAriaLabel: "Indsend yderligere feedback",
    feedbackThankYouText: "Tak for din feedback",
    feedbackPrivacyNoticeText: "S\u00f8rg for ikke at angive personlige eller f\u00f8lsomme oplysninger",
    requestAccess: "Anmod om adgang",
    useCodeWithCautionText: "V\u00e6r forsigtig med at bruge denne kode.",
    copyCodeAriaLabel: "Kopi\u00e9r kode",
    jumpToBottom: "G\u00e5 til bunden",
    youtubeVideoLabel: "YouTube-video",
    videoNoSupportFallbackText: "Din browser underst\u00f8tter ikke videotagget."
});
DF_Mm.set("de", {
    askSomething: "Stellen Sie eine Frage\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
    messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
    authErrorMessage: "Die Berechtigung wurde verweigert.",
    openAriaLabel: "{$chatTitle} \u00f6ffnen",
    closeAriaLabel: "{$chatTitle} schlie\u00dfen",
    sendAriaLabel: "Senden",
    inputAriaLabel: "Mit Agent sprechen",
    opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
    agentSays: "Agent sagt:",
    iSay: "Ich sage:",
    citationsMessage: "Quelle:",
    feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
    feedbackOptionalText: "optional",
    feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
    feedbackSubmit: "Senden",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Falsch",
    feedbackChipUnsafe: "Unsicher",
    feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
    feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
    feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
    feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
    feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
    requestAccess: "Zugriff anfordern",
    useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
    copyCodeAriaLabel: "Code kopieren",
    jumpToBottom: "Nach unten springen",
    youtubeVideoLabel: "YouTube-Video",
    videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht."
});
DF_Mm.set("de-at", {
    askSomething: "Stellen Sie eine Frage\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
    messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
    authErrorMessage: "Die Berechtigung wurde verweigert.",
    openAriaLabel: "{$chatTitle} \u00f6ffnen",
    closeAriaLabel: "{$chatTitle} schlie\u00dfen",
    sendAriaLabel: "Senden",
    inputAriaLabel: "Mit Agent sprechen",
    opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
    agentSays: "Agent sagt:",
    iSay: "Ich sage:",
    citationsMessage: "Quelle:",
    feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
    feedbackOptionalText: "optional",
    feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
    feedbackSubmit: "Senden",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Falsch",
    feedbackChipUnsafe: "Unsicher",
    feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
    feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
    feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
    feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
    feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
    requestAccess: "Zugriff anfordern",
    useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
    copyCodeAriaLabel: "Code kopieren",
    jumpToBottom: "Nach unten springen",
    youtubeVideoLabel: "YouTube-Video",
    videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht."
});
DF_Mm.set("de-ch", {
    askSomething: "Stellen Sie eine Frage\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Ein Problem ist aufgetreten. Bitte versuchen Sie es noch einmal.",
    messageTooLong: "Hoppla! Ihre Nachricht ist {$numOfChars}\u00a0Zeichen zu lang.",
    authErrorMessage: "Die Berechtigung wurde verweigert.",
    openAriaLabel: "{$chatTitle} \u00f6ffnen",
    closeAriaLabel: "{$chatTitle} schlie\u00dfen",
    sendAriaLabel: "Senden",
    inputAriaLabel: "Mit Agent sprechen",
    opensInANewTab: "Wird in einem neuen Tab ge\u00f6ffnet",
    agentSays: "Agent sagt:",
    iSay: "Ich sage:",
    citationsMessage: "Quelle:",
    feedbackWhyRatingText: "Warum haben Sie sich f\u00fcr diese Bewertung entschieden?",
    feedbackOptionalText: "optional",
    feedbackPlaceholder: "Zus\u00e4tzliches Feedback",
    feedbackSubmit: "Senden",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Falsch",
    feedbackChipUnsafe: "Unsicher",
    feedbackInputAriaLabel: "Zus\u00e4tzliches Feedback geben",
    feedbackCloseAriaLabel: "Zus\u00e4tzliches Feedback schlie\u00dfen",
    feedbackSubmitAriaLabel: "Zus\u00e4tzliches Feedback senden",
    feedbackThankYouText: "Vielen Dank f\u00fcr Ihr Feedback",
    feedbackPrivacyNoticeText: "Geben Sie bitte keine personenbezogenen oder vertraulichen Daten an",
    requestAccess: "Zugriff anfordern",
    useCodeWithCautionText: "Seien Sie vorsichtig, wenn sie den Code verwenden.",
    copyCodeAriaLabel: "Code kopieren",
    jumpToBottom: "Nach unten springen",
    youtubeVideoLabel: "YouTube-Video",
    videoNoSupportFallbackText: "Ihr Browser unterst\u00fctzt das Video-Tag nicht."
});
DF_Mm.set("es", {
    askSomething: "Pregunta algo...",
    chatTitle: "Chat",
    genericErrorMessage: "Se ha producido un error. Vuelve a intentarlo.",
    messageTooLong: "\u00a1Vaya! Tu mensaje contiene caracteres de m\u00e1s: {$numOfChars}",
    authErrorMessage: "Permiso denegado.",
    openAriaLabel: "Abrir {$chatTitle}",
    closeAriaLabel: "Cerrar {$chatTitle}",
    sendAriaLabel: "Enviar",
    inputAriaLabel: "Hablar con agente",
    opensInANewTab: "Se abre en una nueva pesta\u00f1a",
    agentSays: "Mensaje del agente:",
    iSay: "Mi mensaje:",
    citationsMessage: "Fuente:",
    feedbackWhyRatingText: "\u00bfPor qu\u00e9 has elegido esta valoraci\u00f3n?",
    feedbackOptionalText: "opcional",
    feedbackPlaceholder: "M\u00e1s comentarios",
    feedbackSubmit: "Enviar",
    feedbackChipIrrelevant: "Irrelevante",
    feedbackChipIncorrect: "Incorrecto",
    feedbackChipUnsafe: "No seguro",
    feedbackInputAriaLabel: "Proporciona m\u00e1s comentarios",
    feedbackCloseAriaLabel: "Cerrar m\u00e1s comentarios",
    feedbackSubmitAriaLabel: "Enviar m\u00e1s comentarios",
    feedbackThankYouText: "Gracias por enviarnos tus comentarios",
    feedbackPrivacyNoticeText: "No incluyas datos personales ni sensibles",
    requestAccess: "Solicitar acceso",
    useCodeWithCautionText: "Usa el c\u00f3digo con precauci\u00f3n.",
    copyCodeAriaLabel: "Copiar c\u00f3digo",
    jumpToBottom: "Ir al final",
    youtubeVideoLabel: "V\u00eddeo de YouTube",
    videoNoSupportFallbackText: "Tu navegador no es compatible con la etiqueta de v\u00eddeo."
});
DF_Mm.set("fr", {
    askSomething: "Posez une question\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
    messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient {$numOfChars}\u00a0caract\u00e8re(s) en trop.",
    authErrorMessage: "Autorisation refus\u00e9e.",
    openAriaLabel: "Ouvrir\u00a0{$chatTitle}",
    closeAriaLabel: "Fermer {$chatTitle}",
    sendAriaLabel: "Envoyer",
    inputAriaLabel: "Parlez \u00e0 l'agent",
    opensInANewTab: "La page s'ouvre dans un nouvel onglet",
    agentSays: "L'agent dit\u00a0:",
    iSay: "Je dis\u00a0:",
    citationsMessage: "Source\u00a0:",
    feedbackWhyRatingText: "Pourquoi \u00eates-vous de cet avis\u00a0?",
    feedbackOptionalText: "facultatif",
    feedbackPlaceholder: "Autres commentaires",
    feedbackSubmit: "Envoyer",
    feedbackChipIrrelevant: "Non pertinent",
    feedbackChipIncorrect: "Incorrect",
    feedbackChipUnsafe: "Non s\u00e9curis\u00e9",
    feedbackInputAriaLabel: "Fournir d'autres commentaires",
    feedbackCloseAriaLabel: "Fermer les commentaires suppl\u00e9mentaires",
    feedbackSubmitAriaLabel: "Envoyer les commentaires suppl\u00e9mentaires",
    feedbackThankYouText: "Merci de vos commentaires",
    feedbackPrivacyNoticeText: "Veuillez ne pas fournir d'informations personnelles ni sensibles",
    requestAccess: "Demander l'acc\u00e8s",
    useCodeWithCautionText: "Utilisez ce code avec pr\u00e9caution.",
    copyCodeAriaLabel: "Copier le code",
    jumpToBottom: "Aller en bas",
    youtubeVideoLabel: "Vid\u00e9o YouTube",
    videoNoSupportFallbackText: "Votre navigateur n'est pas compatible avec le tag vid\u00e9o."
});
DF_Mm.set("fr-ch", {
    askSomething: "Posez une question\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Une erreur s'est produite. Veuillez r\u00e9essayer.",
    messageTooLong: "Petit probl\u00e8me\u2026 Votre message contient {$numOfChars}\u00a0caract\u00e8re(s) en trop.",
    authErrorMessage: "Autorisation refus\u00e9e.",
    openAriaLabel: "Ouvrir\u00a0{$chatTitle}",
    closeAriaLabel: "Fermer {$chatTitle}",
    sendAriaLabel: "Envoyer",
    inputAriaLabel: "Parlez \u00e0 l'agent",
    opensInANewTab: "La page s'ouvre dans un nouvel onglet",
    agentSays: "L'agent dit\u00a0:",
    iSay: "Je dis\u00a0:",
    citationsMessage: "Source\u00a0:",
    feedbackWhyRatingText: "Pourquoi \u00eates-vous de cet avis\u00a0?",
    feedbackOptionalText: "facultatif",
    feedbackPlaceholder: "Autres commentaires",
    feedbackSubmit: "Envoyer",
    feedbackChipIrrelevant: "Non pertinent",
    feedbackChipIncorrect: "Incorrect",
    feedbackChipUnsafe: "Non s\u00e9curis\u00e9",
    feedbackInputAriaLabel: "Fournir d'autres commentaires",
    feedbackCloseAriaLabel: "Fermer les commentaires suppl\u00e9mentaires",
    feedbackSubmitAriaLabel: "Envoyer les commentaires suppl\u00e9mentaires",
    feedbackThankYouText: "Merci de vos commentaires",
    feedbackPrivacyNoticeText: "Veuillez ne pas fournir d'informations personnelles ni sensibles",
    requestAccess: "Demander l'acc\u00e8s",
    useCodeWithCautionText: "Utilisez ce code avec pr\u00e9caution.",
    copyCodeAriaLabel: "Copier le code",
    jumpToBottom: "Aller en bas",
    youtubeVideoLabel: "Vid\u00e9o YouTube",
    videoNoSupportFallbackText: "Votre navigateur n'est pas compatible avec le tag vid\u00e9o."
});
DF_Mm.set("hi", {
    askSomething: "\u0915\u0941\u091b \u092a\u0942\u091b\u0947\u0902...",
    chatTitle: "\u091a\u0948\u091f \u0915\u0930\u0947\u0902",
    genericErrorMessage: "\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908, \u0915\u0943\u092a\u092f\u093e \u092b\u093f\u0930 \u0938\u0947 \u0915\u094b\u0936\u093f\u0936 \u0915\u0930\u0947\u0902.",
    messageTooLong: "\u0913\u0939! \u0906\u092a\u0915\u0947 \u092e\u0948\u0938\u0947\u091c \u092e\u0947\u0902 {$numOfChars} \u0935\u0930\u094d\u0923 \u091c\u093c\u094d\u092f\u093e\u0926\u093e \u0939\u0948\u0902.",
    authErrorMessage: "\u0905\u0928\u0941\u092e\u0924\u093f \u0928\u0939\u0940\u0902 \u0926\u0940 \u0917\u0908.",
    openAriaLabel: "{$chatTitle} \u0916\u094b\u0932\u0947\u0902",
    closeAriaLabel: "{$chatTitle} \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
    sendAriaLabel: "\u092d\u0947\u091c\u0947\u0902",
    inputAriaLabel: "\u090f\u091c\u0947\u0902\u091f \u0938\u0947 \u092c\u093e\u0924 \u0915\u0930\u0947\u0902",
    opensInANewTab: "\u0928\u090f \u091f\u0948\u092c \u092e\u0947\u0902 \u0916\u0941\u0932\u0924\u093e \u0939\u0948",
    agentSays: "\u090f\u091c\u0947\u0902\u091f \u0928\u0947 \u0915\u0939\u093e:",
    iSay: "\u092e\u0948\u0902\u0928\u0947 \u0915\u0939\u093e:",
    citationsMessage: "\u0938\u094d\u0930\u094b\u0924:",
    feedbackWhyRatingText: "\u0906\u092a\u0915\u0947 \u092f\u0939 \u0930\u0947\u091f\u093f\u0902\u0917 \u0926\u0947\u0928\u0947 \u0915\u0940 \u0935\u091c\u0939 \u0915\u094d\u092f\u093e \u0939\u0948?",
    feedbackOptionalText: "\u091c\u093c\u0930\u0942\u0930\u0940 \u0928\u0939\u0940\u0902",
    feedbackPlaceholder: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935",
    feedbackSubmit: "\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902",
    feedbackChipIrrelevant: "\u0915\u093e\u092e \u0915\u093e \u0928\u0939\u0940\u0902 \u0939\u0948",
    feedbackChipIncorrect: "\u0917\u0932\u0924 \u0939\u0948",
    feedbackChipUnsafe: "\u0905\u0938\u0941\u0930\u0915\u094d\u0937\u093f\u0924 \u0939\u0948",
    feedbackInputAriaLabel: "\u0915\u094b\u0908 \u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0926\u0947\u0902",
    feedbackCloseAriaLabel: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0935\u093e\u0932\u093e \u0938\u0947\u0915\u094d\u0936\u0928 \u092c\u0902\u0926 \u0915\u0930\u0947\u0902",
    feedbackSubmitAriaLabel: "\u0905\u0928\u094d\u092f \u0938\u0941\u091d\u093e\u0935 \u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902",
    feedbackThankYouText: "\u0906\u092a\u0915\u0947 \u0938\u0941\u091d\u093e\u0935 \u0915\u0947 \u0932\u093f\u090f \u0927\u0928\u094d\u092f\u0935\u093e\u0926",
    feedbackPrivacyNoticeText: "\u0915\u0943\u092a\u092f\u093e \u0915\u094b\u0908 \u0928\u093f\u091c\u0940 \u092f\u093e \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0928 \u0926\u0947\u0902",
    requestAccess: "\u0910\u0915\u094d\u0938\u0947\u0938 \u092e\u093e\u0902\u0917\u0947\u0902",
    useCodeWithCautionText: "\u0915\u094b\u0921 \u0915\u093e \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0938\u093e\u0935\u0927\u093e\u0928\u0940 \u0938\u0947 \u0915\u0930\u0947\u0902.",
    copyCodeAriaLabel: "\u0915\u094b\u0921 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902",
    jumpToBottom: "\u0938\u092c\u0938\u0947 \u0928\u0940\u091a\u0947 \u091c\u093e\u090f\u0902",
    youtubeVideoLabel: "YouTube \u0935\u0940\u0921\u093f\u092f\u094b",
    videoNoSupportFallbackText: "\u0906\u092a\u0915\u0947 \u092c\u094d\u0930\u093e\u0909\u091c\u093c\u0930 \u092e\u0947\u0902, \u0935\u0940\u0921\u093f\u092f\u094b \u092e\u0947\u0902 \u091f\u0948\u0917 \u091c\u094b\u0921\u093c\u0928\u0947 \u0915\u0940 \u0938\u0941\u0935\u093f\u0927\u093e \u0915\u093e\u092e \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u0940."
});
DF_Mm.set("it", {
    askSomething: "Poni una domanda\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Si \u00e8 verificato un errore. Riprova.",
    messageTooLong: "Spiacenti. Il tuo messaggio \u00e8 troppo lungo (caratteri oltre la lunghezza massima consentita: {$numOfChars}).",
    authErrorMessage: "Autorizzazione negata.",
    openAriaLabel: "Apri {$chatTitle}",
    closeAriaLabel: "Chiudi {$chatTitle}",
    sendAriaLabel: "Invia",
    inputAriaLabel: "Parla con l'agente",
    opensInANewTab: "Si apre in una nuova scheda",
    agentSays: "Messaggio dell'agente:",
    iSay: "Messaggio dell'utente:",
    citationsMessage: "Fonte:",
    feedbackWhyRatingText: "Perch\u00e9 hai assegnato questa valutazione?",
    feedbackOptionalText: "facoltativo",
    feedbackPlaceholder: "Feedback aggiuntivo",
    feedbackSubmit: "Invia",
    feedbackChipIrrelevant: "Non pertinente",
    feedbackChipIncorrect: "Incorretto",
    feedbackChipUnsafe: "Non sicuro",
    feedbackInputAriaLabel: "Fornisci un feedback aggiuntivo",
    feedbackCloseAriaLabel: "Chiudi feedack aggiuntivo",
    feedbackSubmitAriaLabel: "Invia feedback aggiuntivo",
    feedbackThankYouText: "Grazie per il tuo feedback",
    feedbackPrivacyNoticeText: "Non fornire dati personali o sensibili",
    requestAccess: "Richiedi accesso",
    useCodeWithCautionText: "Usa il codice con cautela.",
    copyCodeAriaLabel: "Copia codice",
    jumpToBottom: "Vai alla fine",
    youtubeVideoLabel: "Video di YouTube",
    videoNoSupportFallbackText: "Il tuo browser non supporta il tag video."
});
DF_Mm.set("nl", {
    askSomething: "Vraag iets...",
    chatTitle: "Chat",
    genericErrorMessage: "Er is iets misgegaan. Probeer het opnieuw.",
    messageTooLong: "Oeps! Uw bericht is {$numOfChars} teken(s) te lang.",
    authErrorMessage: "Toestemming geweigerd.",
    openAriaLabel: "{$chatTitle} openen",
    closeAriaLabel: "{$chatTitle} sluiten",
    sendAriaLabel: "Sturen",
    inputAriaLabel: "Praten met medewerker",
    opensInANewTab: "Wordt op een nieuw tabblad geopend",
    agentSays: "Medewerker zegt:",
    iSay: "Ik zeg:",
    citationsMessage: "Bron:",
    feedbackWhyRatingText: "Waarom heb je deze beoordeling gekozen?",
    feedbackOptionalText: "optioneel",
    feedbackPlaceholder: "Aanvullende feedback",
    feedbackSubmit: "Sturen",
    feedbackChipIrrelevant: "Niet relevant",
    feedbackChipIncorrect: "Onjuist",
    feedbackChipUnsafe: "Onveilig",
    feedbackInputAriaLabel: "Aanvullende feedback geven",
    feedbackCloseAriaLabel: "Aanvullende feedback sluiten",
    feedbackSubmitAriaLabel: "Aanvullende feedback sturen",
    feedbackThankYouText: "Hartelijk dank voor uw feedback",
    feedbackPrivacyNoticeText: "Vermeld geen persoonlijke of gevoelige gegevens",
    requestAccess: "Toegang aanvragen",
    useCodeWithCautionText: "Wees voorzichtig met het gebruik van de code.",
    copyCodeAriaLabel: "Code kopi\u00ebren",
    jumpToBottom: "Naar beneden",
    youtubeVideoLabel: "YouTube-video",
    videoNoSupportFallbackText: "Uw browser ondersteunt de videotag niet."
});
DF_Mm.set("pt-pt", {
    askSomething: "Fa\u00e7a uma pergunta\u2026",
    chatTitle: "Chat",
    genericErrorMessage: "Algo correu mal. Tente mais tarde.",
    messageTooLong: "Ups! A sua mensagem tem {$numOfChars} car\u00e1ter/carateres a mais.",
    authErrorMessage: "Autoriza\u00e7\u00e3o recusada.",
    openAriaLabel: "Abrir {$chatTitle}",
    closeAriaLabel: "Fechar {$chatTitle}",
    sendAriaLabel: "Enviar",
    inputAriaLabel: "Fale com um agente",
    opensInANewTab: "Abre-se num novo separador",
    agentSays: "O agente disse:",
    iSay: "Eu disse:",
    citationsMessage: "Fonte:",
    feedbackWhyRatingText: "Porque escolheu esta classifica\u00e7\u00e3o?",
    feedbackOptionalText: "opcional",
    feedbackPlaceholder: "Feedback adicional",
    feedbackSubmit: "Enviar",
    feedbackChipIrrelevant: "Irrelevante",
    feedbackChipIncorrect: "Incorreto",
    feedbackChipUnsafe: "Inseguro",
    feedbackInputAriaLabel: "Envie feedback adicional",
    feedbackCloseAriaLabel: "Fechar feedback adicional",
    feedbackSubmitAriaLabel: "Enviar feedback adicional",
    feedbackThankYouText: "Obrigado pelo seu feedback",
    feedbackPrivacyNoticeText: "N\u00e3o partilhe dados pessoais nem confidenciais",
    requestAccess: "Pedir acesso",
    useCodeWithCautionText: "Use o c\u00f3digo com cuidado.",
    copyCodeAriaLabel: "Copiar c\u00f3digo",
    jumpToBottom: "Ir para o final",
    youtubeVideoLabel: "V\u00eddeo do YouTube",
    videoNoSupportFallbackText: "O seu navegador n\u00e3o suporta a etiqueta de v\u00eddeo."
});
DF_Mm.set("sv", {
    askSomething: "St\u00e4ll en fr\u00e5ga\u00a0\u2026",
    chatTitle: "Chatt",
    genericErrorMessage: "Ett fel uppstod. F\u00f6rs\u00f6k igen.",
    messageTooLong: "Hoppsan! Ditt meddelande \u00e4r {$numOfChars} tecken f\u00f6r l\u00e5ngt.",
    authErrorMessage: "Beh\u00f6righet nekad.",
    openAriaLabel: "\u00d6ppna {$chatTitle}",
    closeAriaLabel: "St\u00e4ng {$chatTitle}",
    sendAriaLabel: "Skicka",
    inputAriaLabel: "Prata med representant",
    opensInANewTab: "\u00d6ppnas p\u00e5 en ny flik",
    agentSays: "Representanten s\u00e4ger:",
    iSay: "Jag s\u00e4ger:",
    citationsMessage: "K\u00e4lla:",
    feedbackWhyRatingText: "Varf\u00f6r valde du det h\u00e4r betyget?",
    feedbackOptionalText: "valfritt",
    feedbackPlaceholder: "\u00d6vrig feedback",
    feedbackSubmit: "Skicka",
    feedbackChipIrrelevant: "Irrelevant",
    feedbackChipIncorrect: "Felaktig",
    feedbackChipUnsafe: "Os\u00e4ker",
    feedbackInputAriaLabel: "L\u00e4mna ytterligare feedback",
    feedbackCloseAriaLabel: "St\u00e4ng ytterligare feedback",
    feedbackSubmitAriaLabel: "L\u00e4mna ytterligare feedback",
    feedbackThankYouText: "Tack f\u00f6r din feedback!",
    feedbackPrivacyNoticeText: "Ange inga personliga eller k\u00e4nsliga uppgifter",
    requestAccess: "Beg\u00e4r \u00e5tkomst",
    useCodeWithCautionText: "Anv\u00e4nd koden med f\u00f6rsiktighet.",
    copyCodeAriaLabel: "Kopiera kod",
    jumpToBottom: "Hoppa l\u00e4ngst ned",
    youtubeVideoLabel: "YouTube-video",
    videoNoSupportFallbackText: "Din webbl\u00e4sare har inte st\u00f6d f\u00f6r videotaggen."
});

function DF_Mn(a, b, c) {
    a = DF_MXa(a, b);
    if (!c) return a;
    c = DF_Md(Object.entries(c));
    for (b = c.next(); !b.done; b = c.next()) {
        var d = DF_Md(b.value);
        b = d.next().value;
        d = d.next().value;
        a = a.replace(new RegExp("\\{\\$" + b + "\\}", "g"), d)
    }
    return a
}

function DF_MXa(a, b) {
    var c, d;
    if (c = null == (d = globalThis.dfMessengerTexts) ? void 0 : d[b]) return c;
    if (!a) return DF_Mm.get("en")[b] || "";
    a = a.toLowerCase();
    return DF_Mm.has(a) ? (a = DF_Mm.get(a)[b]) ? a : DF_Mm.get("en")[b] || "" : DF_Mm.get("en")[b] || ""
};

function DF_MYa(a, b, c) {
    var d = new Image;
    d.onload = function() {
        b()
    };
    d.onerror = function() {
        c()
    };
    d.src = a
}

function DF_MZa(a) {
    var b = a.filter(DF_M_a);
    a = a.filter(DF_M0a);
    var c = [],
        d = a.filter(function(e) {
            return "html" === e.type
        });
    0 < d.length && c.push.apply(c, DF_Me(d.map(function(e) {
        return e
    })));
    0 < b.length && c.push({
        type: "customCard",
        richElements: b
    });
    DF_M1a(a, "custom_template", c);
    DF_M1a(a, "match_citations", c);
    DF_M1a(a, "chips", c);
    DF_M1a(a, "files", c);
    return c
}

function DF_M1a(a, b, c) {
    a = a.filter(function(d) {
        return d.type === b
    });
    0 !== a.length && c.push.apply(c, DF_Me(a.map(function(d) {
        return d
    })))
}

function DF_M2a(a) {
    return void 0 !== a && null !== a
}

function DF_M0a(a) {
    return "chips" === a.type || "html" === a.type || "match_citations" === a.type || "custom_template" === a.type || "files" === a.type
}

function DF_M_a(a) {
    return !DF_M0a(a)
}

function DF_M3a(a, b, c) {
    return null != a ? a : DF_Mn(b, c)
}

function DF_M4a(a) {
    DF_Ml(a, "df-messenger-scroll-into-view", {
        padding: 10,
        element: a
    })
}

function DF_M5a(a) {
    return "string" === typeof a || a instanceof String
}

function DF_M6a(a) {
    return null != a && ("object" === typeof a || a instanceof Object)
}
var DF_M7a = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu\.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/;

function DF_M8a(a) {
    if ((a = a.match(DF_M7a)) && !(6 > a.length)) return a[6]
}

function DF_M9a(a) {
    return function() {
        var b = !1;
        return function() {
            b || (b = a())
        }
    }()
}

function DF_M$a(a, b) {
    return 0 > b ? !0 : a <= b
};

function DF_Mo(a) {
    return function(b, c) {
        void 0 !== c ? c.l(function() {
            customElements.define(a, b)
        }) : customElements.define(a, b)
    }
};
/*

 Copyright 2016 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Mab = !DF_MGa || HTMLElement.es5Shimmed || void 0 === DF_Mi.Reflect || void 0 === DF_Mi.customElements || DF_Mi.customElements.polyfillWrapFlushCallback || !1,
    DF_Mbb;

function DF_Mcb() {
    function a() {
        return c.construct(b, [], this.constructor)
    }
    var b = HTMLElement;
    if (DF_Mab) return b;
    if (void 0 !== DF_Mbb) return DF_Mbb;
    var c = DF_Mi.Reflect;
    a.prototype = b.prototype;
    a.prototype.constructor = a;
    a.es5Shimmed = !0;
    Object.setPrototypeOf(a, b);
    return DF_Mbb = a
}
var DF_Mdb = !1;
/*

 Copyright 2019 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
var DF_Meb = DF_Mi.ShadowRoot && (void 0 === DF_Mi.ShadyCSS || DF_Mi.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
    DF_Mfb = Symbol(),
    DF_Mgb = new WeakMap;

function DF_Mhb(a, b, c) {
    this._$cssResult$ = !0;
    if (c !== DF_Mfb) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = a;
    this.h = b
}
DF_Mhb.prototype.toString = function() {
    return this.cssText
};
DF_Ma.Object.defineProperties(DF_Mhb.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = this.i,
                b = this.h;
            if (DF_Meb && void 0 === a) {
                var c = void 0 !== b && 1 === b.length;
                c && (a = DF_Mgb.get(b));
                void 0 === a && ((this.i = a = new CSSStyleSheet).replaceSync(this.cssText), c && DF_Mgb.set(b, a))
            }
            return a
        }
    }
});

function DF_Mp(a) {
    var b = DF_Mwa.apply(1, arguments);
    return function() {
        var c = 1 === a.length ? a[0] : b.reduce(function(d, e, f) {
            if (!0 === e._$cssResult$) e = e.cssText;
            else if ("number" !== typeof e) throw Error("Value passed to 'css' function must be a 'css' function result: " + (e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."));
            return d + e + a[f + 1]
        }, a[0]);
        return new DF_Mhb(c, a, DF_Mfb)
    }()
}

function DF_Mib(a, b) {
    if (DF_Meb) a.adoptedStyleSheets = b.map(function(f) {
        return f instanceof CSSStyleSheet ? f : f.g
    });
    else {
        b = DF_Md(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = document.createElement("style"),
                e = DF_Mi.litNonce;
            void 0 !== e && d.setAttribute("nonce", e);
            d.textContent = c.cssText;
            a.appendChild(d)
        }
    }
}
var DF_Mjb = DF_Meb ? function(a) {
    return a
} : function(a) {
    if (a instanceof CSSStyleSheet) {
        var b = "";
        a = DF_Md(a.cssRules);
        for (var c = a.next(); !c.done; c = a.next()) b += c.value.cssText;
        b = new DF_Mhb("string" === typeof b ? b : String(b), void 0, DF_Mfb)
    } else b = a;
    return b
};

function DF_Mkb(a) {
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        a = a.ReactiveElement.prototype;
        window.ShadyDOM && window.ShadyDOM.inUse && !0 === window.ShadyDOM.noPatch && window.ShadyDOM.patchElementProto(a);
        var b = a.ma;
        a.ma = function() {
            var e = this.localName;
            if (window.ShadyCSS.nativeShadow) return b.call(this);
            if (!this.constructor.hasOwnProperty("__scoped")) {
                this.constructor.__scoped = !0;
                var f = this.constructor.m.map(function(l) {
                        return l instanceof CSSStyleSheet ? Array.from(l.cssRules).reduce(function(m,
                            n) {
                            return m + n.cssText
                        }, "") : l.cssText
                    }),
                    g, h;
                null == (g = window.ShadyCSS) || null == (h = g.ScopingShim) || h.prepareAdoptedCssText(f, e);
                void 0 === this.constructor.xc && window.ShadyCSS.prepareTemplateStyles(document.createElement("template"), e)
            }
            var k;
            return null != (k = this.shadowRoot) ? k : this.attachShadow(this.constructor.C)
        };
        var c = a.connectedCallback;
        a.connectedCallback = function() {
            c.call(this);
            this.Aa && window.ShadyCSS.styleElement(this)
        };
        var d = a.pb;
        a.pb = function(e) {
            this.Aa || window.ShadyCSS.styleElement(this);
            d.call(this,
                e)
        }
    }
}
var DF_Mlb;
null != (DF_Mlb = window).reactiveElementPolyfillSupport || (DF_Mlb.reactiveElementPolyfillSupport = DF_Mkb);
DF_Mab || DF_Mdb || (DF_Mdb = !0, DF_Mi.HTMLElement = DF_Mcb());
var DF_Mmb = DF_Mcb(),
    DF_Mnb = Object,
    DF_Mob = DF_Mnb.is,
    DF_Mpb = DF_Mnb.defineProperty,
    DF_Mqb = DF_Mnb.getOwnPropertyDescriptor,
    DF_Mrb = DF_Mnb.getOwnPropertyNames,
    DF_Msb = DF_Mnb.getOwnPropertySymbols,
    DF_Mtb = DF_Mnb.getPrototypeOf,
    DF_Mub = DF_Mi.trustedTypes,
    DF_Mvb = DF_Mub ? DF_Mub.emptyScript : "",
    DF_Mwb = DF_Mi.reactiveElementPolyfillSupport,
    DF_Mxb = {
        lc: function(a, b) {
            switch (b) {
                case Boolean:
                    a = a ? DF_Mvb : null;
                    break;
                case Object:
                case Array:
                    a = null == a ? a : JSON.stringify(a)
            }
            return a
        },
        Db: function(a, b) {
            var c = a;
            switch (b) {
                case Boolean:
                    c =
                        null !== a;
                    break;
                case Number:
                    c = null === a ? null : Number(a);
                    break;
                case Object:
                case Array:
                    try {
                        c = JSON.parse(a)
                    } catch (d) {
                        c = null
                    }
            }
            return c
        }
    };

function DF_Myb(a, b) {
    return !DF_Mob(a, b)
}
var DF_Mzb = {
        D: !0,
        type: String,
        qa: DF_Mxb,
        L: !1,
        dc: DF_Myb
    },
    DF_MAb;
null == Symbol.metadata && (Symbol.metadata = Symbol("metadata"));
DF_MAb = Symbol.metadata;
var DF_MBb = new WeakMap;

function DF_Mq() {
    var a = DF_Mmb.call(this) || this;
    a.N = void 0;
    a.K = !1;
    a.Aa = !1;
    a.i = null;
    a.Bc();
    return a
}
DF_Mf(DF_Mq, DF_Mmb);
DF_Mq.l = function(a) {
    this.g();
    var b;
    (null != (b = this.Ia) ? b : this.Ia = []).push(a)
};
DF_Mq.s = function(a, b) {
    b = void 0 === b ? DF_Mzb : b;
    b.state && (b.D = !1);
    this.g();
    this.ba.set(a, b);
    b.Dd || (b = this.i(a, Symbol(), b), void 0 !== b && DF_Mpb(this.prototype, a, b))
};
DF_Mq.i = function(a, b, c) {
    var d, e = null != (d = DF_Mqb(this.prototype, a)) ? d : {
            get: function() {
                return this[b]
            },
            set: function(h) {
                this[b] = h
            }
        },
        f = e.get,
        g = e.set;
    return {
        get: function() {
            return null == f ? void 0 : f.call(this)
        },
        set: function(h) {
            var k = null == f ? void 0 : f.call(this);
            g.call(this, h);
            DF_MNa(this, a, k, c)
        },
        configurable: !0,
        enumerable: !0
    }
};
DF_Mq.v = function(a) {
    var b;
    return null != (b = this.ba.get(a)) ? b : DF_Mzb
};
DF_Mq.g = function() {
    if (!this.hasOwnProperty("ba")) {
        var a = DF_Mtb(this);
        a.u();
        void 0 !== a.Ia && (this.Ia = [].concat(DF_Me(a.Ia)));
        this.ba = new Map(a.ba)
    }
};
DF_Mq.u = function() {
    DF_MCb();
    if (!this.hasOwnProperty("Cb")) {
        this.Cb = !0;
        this.g();
        if (this.hasOwnProperty("ld")) {
            var a = this.ld,
                b = [].concat(DF_Me(DF_Mrb(a)), DF_Me(DF_Msb(a)));
            b = DF_Md(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, this.s(c, a[c])
        }
        a = this[DF_MAb];
        if (null !== a && (a = DF_MBb.get(a), void 0 !== a))
            for (a = DF_Md(a), b = a.next(); !b.done; b = a.next()) c = DF_Md(b.value), b = c.next().value, c = c.next().value, this.ba.set(b, c);
        this.Va = new Map;
        a = DF_Md(this.ba);
        for (b = a.next(); !b.done; b = a.next()) c = DF_Md(b.value), b = c.next().value,
            c = c.next().value, c = this.o(b, c), void 0 !== c && this.Va.set(c, b);
        this.m = this.h(this.j)
    }
};
DF_Mq.h = function(a) {
    var b = [];
    if (Array.isArray(a)) {
        a = new Set(a.flat(Infinity).reverse());
        a = DF_Md(a);
        for (var c = a.next(); !c.done; c = a.next()) b.unshift(DF_Mjb(c.value))
    } else void 0 !== a && b.push(DF_Mjb(a));
    return b
};
DF_Mq.o = function(a, b) {
    b = b.D;
    return !1 === b ? void 0 : "string" === typeof b ? b : "string" === typeof a ? a.toLowerCase() : void 0
};
DF_M = DF_Mq.prototype;
DF_M.Bc = function() {
    var a = this;
    this.ta = new Promise(function(c) {
        return a.bc = c
    });
    this.F = new Map;
    this.Dc();
    DF_MNa(this);
    var b;
    null == (b = this.constructor.Ia) || b.forEach(function(c) {
        return c(a)
    })
};

function DF_MOa(a, b) {
    var c;
    (null != (c = a.G) ? c : a.G = []).push(b);
    if (void 0 !== a.T && a.isConnected) {
        var d;
        null == (d = b.Eb) || d.call(b)
    }
}
DF_M.Dc = function() {
    for (var a = new Map, b = DF_Md(this.constructor.ba.keys()), c = b.next(); !c.done; c = b.next()) c = c.value, this.hasOwnProperty(c) && (a.set(c, this[c]), delete this[c]);
    0 < a.size && (this.N = a)
};
DF_M.ma = function() {
    var a, b = null != (a = this.shadowRoot) ? a : this.attachShadow(this.constructor.C);
    DF_Mib(b, this.constructor.m);
    return b
};
DF_M.connectedCallback = function() {
    null != this.T || (this.T = this.ma());
    this.bc(!0);
    var a;
    null == (a = this.G) || a.forEach(function(b) {
        var c;
        return null == (c = b.Eb) ? void 0 : c.call(b)
    })
};
DF_M.bc = function() {};
DF_M.disconnectedCallback = function() {
    var a;
    null == (a = this.G) || a.forEach(function(b) {
        var c;
        return null == (c = b.cd) ? void 0 : c.call(b)
    })
};
DF_M.attributeChangedCallback = function(a, b, c) {
    this.wc(a, c)
};
DF_M.Cc = function(a, b) {
    var c = this.constructor.ba.get(a),
        d = this.constructor.o(a, c);
    if (void 0 !== d && !0 === c.L) {
        var e, f = (void 0 !== (null == (e = c.qa) ? void 0 : e.lc) ? c.qa : DF_Mxb).lc(b, c.type);
        this.i = a;
        null == f ? this.removeAttribute(d) : this.setAttribute(d, f);
        this.i = null
    }
};
DF_M.wc = function(a, b) {
    var c = this.constructor;
    a = c.Va.get(a);
    if (void 0 !== a && this.i !== a) {
        c = c.v(a);
        var d, e = "function" === typeof c.qa ? {
            Db: c.qa
        } : void 0 !== (null == (d = c.qa) ? void 0 : d.Db) ? c.qa : DF_Mxb;
        this.i = a;
        this[a] = e.Db(b, c.type);
        this.i = null
    }
};

function DF_MNa(a, b, c, d) {
    var e = void 0 === e ? !1 : e;
    if (void 0 !== b) {
        null != d || (d = a.constructor.v(b));
        var f;
        if ((null != (f = d.dc) ? f : DF_Myb)(e ? void 0 : a[b], c)) a.ob(b, c, d);
        else return
    }!1 === a.K && (a.ta = a.Ac())
}
DF_M.ob = function(a, b, c) {
    this.F.has(a) || this.F.set(a, b);
    if (!0 === c.L && this.i !== a) {
        var d;
        (null != (d = this.aa) ? d : this.aa = new Set).add(a)
    }
};
DF_M.Ac = function() {
    var a = this,
        b, c;
    return DF_Mh(function(d) {
        switch (d.g) {
            case 1:
                return a.K = !0, d.G = 2, DF_Mg(d, a.ta, 4);
            case 4:
                d.g = 3;
                d.G = 0;
                break;
            case 2:
                d.G = 0;
                var e = d.j.cc;
                d.j = null;
                b = e;
                a.wd || Promise.reject(b);
            case 3:
                c = DF_MDb(a);
                if (null == c) {
                    d.g = 5;
                    break
                }
                return DF_Mg(d, c, 5);
            case 5:
                return d.return(!a.K)
        }
    })
};

function DF_MDb(a) {
    if (a.K) {
        if (!a.Aa) {
            if (a.N) {
                for (var b = DF_Md(a.N), c = b.next(); !c.done; c = b.next()) {
                    var d = DF_Md(c.value);
                    c = d.next().value;
                    d = d.next().value;
                    a[c] = d
                }
                a.N = void 0
            }
            b = a.constructor.ba;
            if (0 < b.size)
                for (b = DF_Md(b), c = b.next(); !c.done; c = b.next()) d = DF_Md(c.value), c = d.next().value, d = d.next().value, !0 !== d.vd || a.F.has(c) || void 0 === a[c] || a.ob(c, a[c], d)
        }
        b = !1;
        c = a.F;
        try {
            b = !0;
            var e;
            null == (e = a.G) || e.forEach(function(f) {
                var g;
                return null == (g = f.Ad) ? void 0 : g.call(f)
            });
            a.pa(c)
        } catch (f) {
            throw b = !1, a.Sb(), f;
        }
        b &&
            a.pb(c)
    }
}
DF_M.pb = function(a) {
    var b;
    null == (b = this.G) || b.forEach(function(c) {
        var d;
        return null == (d = c.Bd) ? void 0 : d.call(c)
    });
    this.Aa || (this.Aa = !0, this.Z(a));
    this.Da(a)
};
DF_M.Sb = function() {
    this.F = new Map;
    this.K = !1
};
DF_M.pa = function() {
    var a = this;
    this.aa && (this.aa = this.aa.forEach(function(b) {
        return a.Cc(b, a[b])
    }));
    this.Sb()
};
DF_M.Da = function() {};
DF_M.Z = function() {};
DF_Ma.Object.defineProperties(DF_Mq, {
    observedAttributes: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            this.u();
            return this.Va && [].concat(DF_Me(this.Va.keys()))
        }
    }
});
DF_Mq.m = [];
DF_Mq.C = {
    mode: "open"
};
DF_Mq.ba = new Map;
DF_Mq.Cb = new Map;
null == DF_Mwb || DF_Mwb({
    ReactiveElement: DF_Mq
});

function DF_MCb() {
    var a;
    (null != (a = DF_Mi.reactiveElementVersions) ? a : DF_Mi.reactiveElementVersions = []).push("2.0.1");
    DF_MCb = function() {}
};
var DF_MEb = {
    D: !0,
    type: String,
    qa: DF_Mxb,
    L: !1,
    dc: DF_Myb
};

function DF_MFb(a, b, c) {
    a = void 0 === a ? DF_MEb : a;
    var d = c.kind,
        e = c.metadata,
        f = DF_MBb.get(e);
    void 0 === f && DF_MBb.set(e, f = new Map);
    f.set(c.name, a);
    if ("accessor" === d) {
        var g = c.name;
        return {
            set: function(k) {
                var l = b.get.call(this);
                b.set.call(this, k);
                DF_MNa(this, g, l, a)
            },
            dd: function(k) {
                void 0 !== k && this.ob(g, void 0, a);
                return k
            }
        }
    }
    if ("setter" === d) {
        var h = c.name;
        return function(k) {
            var l = this[h];
            b.call(this, k);
            DF_MNa(this, h, l, a)
        }
    }
    throw Error("Unsupported decorator location: " + d);
}

function DF_Mr(a) {
    return function(b, c) {
        if ("object" === typeof c) b = DF_MFb(a, b, c);
        else {
            var d = b.hasOwnProperty(c);
            b.constructor.s(c, d ? Object.assign({}, a, {
                vd: !0
            }) : a);
            b = d ? Object.getOwnPropertyDescriptor(b, c) : void 0
        }
        return b
    }
};

function DF_MGb(a, b, c) {
    c.configurable = !0;
    c.enumerable = !0;
    Reflect.zd && "object" !== typeof b && Object.defineProperty(a, b, c);
    return c
};

function DF_Ms() {
    return DF_Mr(Object.assign({}, void 0, {
        state: !0,
        D: !1
    }))
};
var DF_MHb = new Set,
    DF_MIb = new Map;

function DF_MJb(a, b) {
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        var c, d, e = (null == (c = window.ShadyDOM) ? 0 : c.inUse) && !0 === (null == (d = window.ShadyDOM) ? void 0 : d.noPatch) ? window.ShadyDOM.wrap : function(n) {
                return n
            },
            f = function(n) {
                var p = DF_MIb.get(n);
                void 0 === p && DF_MIb.set(n, p = []);
                return p
            },
            g = new Map,
            h = a.createElement;
        a.createElement = function(n, p) {
            n = h.call(a, n, p);
            p = null == p ? void 0 : p.scope;
            void 0 !== p && (window.ShadyCSS.nativeShadow || window.ShadyCSS.prepareTemplateDom(n,
                p), void 0 === p || DF_MHb.has(p) || (p = f(p), p.push.apply(p, DF_Me(Array.from(n.content.querySelectorAll("style")).map(function(q) {
                var r;
                null == (r = q.parentNode) || r.removeChild(q);
                return q.textContent
            })))));
            return n
        };
        var k = document.createDocumentFragment(),
            l = document.createComment("");
        b = b.prototype;
        var m = b.ga;
        b.ga = function(n, p) {
            p = void 0 === p ? this : p;
            var q = e(this.ha).parentNode,
                r, t = null == (r = this.options) ? void 0 : r.scope,
                v;
            if ((q instanceof ShadowRoot || q === (null == (v = this.options) ? void 0 : v.Fd)) && void 0 !== t && !DF_MHb.has(t)) {
                r =
                    this.ha;
                v = this.wa;
                k.appendChild(l);
                this.ha = l;
                this.wa = null;
                m.call(this, n, p);
                n = (null == n ? 0 : n._$litType$) ? this.J.qb.za : document.createElement("template");
                p = f(t);
                var u = 0 !== p.length;
                if (u) {
                    var x = document.createElement("style");
                    x.textContent = p.join("\n");
                    n.content.appendChild(x)
                }
                DF_MHb.add(t);
                DF_MIb.delete(t);
                window.ShadyCSS.prepareTemplateStyles(n, t);
                u && window.ShadyCSS.nativeShadow && (t = n.content.querySelector("style"), null !== t && n.content.appendChild(t));
                k.removeChild(l);
                var w;
                if (null == (w = window.ShadyCSS) ?
                    0 : w.nativeShadow) w = n.content.querySelector("style"), null !== w && k.appendChild(w.cloneNode(!0));
                q.insertBefore(k, v);
                this.ha = r;
                this.wa = v
            } else m.call(this, n, p)
        };
        b.Rb = function(n) {
            var p, q = null == (p = this.options) ? void 0 : p.scope;
            p = g.get(q);
            void 0 === p && g.set(q, p = new Map);
            q = p.get(n.strings);
            void 0 === q && p.set(n.strings, q = new a(n, this.options));
            return q
        }
    }
}
var DF_MKb;
null != (DF_MKb = window).litHtmlPolyfillSupport || (DF_MKb.litHtmlPolyfillSupport = DF_MJb);
var DF_MLb = "";
if (window.Symbol) {
    var DF_MMb = Symbol();
    "symbol" !== typeof DF_MMb && (DF_MLb = Object.keys(DF_MMb)[0])
}
var DF_MNb = "" !== DF_MLb,
    DF_MOb = DF_MNb ? function(a) {
        return null != a && void 0 !== a[DF_MLb]
    } : function() {
        return !1
    };
if (DF_MNb && !window.Symbol.for) {
    var DF_MPb = new Map;
    window.Symbol.for = function(a) {
        DF_MPb.has(a) || DF_MPb.set(a, Symbol(a));
        return DF_MPb.get(a)
    }
};

function DF_MQb(a) {
    a = a.LitElement;
    if (void 0 !== window.ShadyCSS && (!window.ShadyCSS.nativeShadow || window.ShadyCSS.ApplyShim)) {
        a.xc = !0;
        a = a.prototype;
        var b = a.ma;
        a.ma = function() {
            this.fb.scope = this.localName;
            return b.call(this)
        }
    }
}
var DF_MRb;
null != (DF_MRb = window).litElementPolyfillSupport || (DF_MRb.litElementPolyfillSupport = DF_MQb);

function DF_MSb(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, DF_MSb);
    else {
        var c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b)
}
DF_MEa(DF_MSb, Error);
DF_MSb.prototype.name = "CustomError";

function DF_MTb(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    DF_MSb.call(this, c + a[d])
}
DF_MEa(DF_MTb, DF_MSb);
DF_MTb.prototype.name = "AssertionError";
var DF_MUb = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    DF_MVb = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    DF_MWb = Array.prototype.map ? function(a, b) {
        return Array.prototype.map.call(a,
            b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };

function DF_MXb(a) {
    return Array.prototype.concat.apply([], arguments)
}

function DF_MYb(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function DF_MZb(a, b) {
    return DF_MXb.apply([], DF_MWb(a, b))
};

function DF_M_b(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}

function DF_M0b(a) {
    var b = {},
        c;
    for (c in a) b[c] = a[c];
    return b
};
var DF_M1b;

function DF_M2b() {
    if (void 0 === DF_M1b) {
        var a = null,
            b = DF_Mi.trustedTypes;
        if (b && b.createPolicy) {
            try {
                a = b.createPolicy("goog#html", {
                    createHTML: DF_MFa,
                    createScript: DF_MFa,
                    createScriptURL: DF_MFa
                })
            } catch (c) {
                DF_Mi.console && DF_Mi.console.error(c.message)
            }
            DF_M1b = a
        } else DF_M1b = a
    }
    return DF_M1b
};

function DF_M3b(a, b) {
    this.i = a === DF_M4b && b || "";
    this.j = DF_M5b
}
DF_M3b.prototype.h = !0;
DF_M3b.prototype.g = function() {
    return this.i
};
var DF_M5b = {},
    DF_M4b = {};

function DF_M6b(a) {
    this.i = a
}
DF_M6b.prototype.toString = function() {
    return this.i + ""
};
DF_M6b.prototype.h = !0;
DF_M6b.prototype.g = function() {
    return this.i.toString()
};

function DF_M7b(a) {
    return a instanceof DF_M6b && a.constructor === DF_M6b ? a.i : "type_error:TrustedResourceUrl"
}
var DF_M8b = {};

function DF_M9b(a) {
    var b = DF_M2b();
    a = b ? b.createScriptURL(a) : a;
    return new DF_M6b(a, DF_M8b)
};
var DF_M$b = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
};

function DF_Mt(a) {
    this.i = a
}
DF_Mt.prototype.toString = function() {
    return this.i.toString()
};
DF_Mt.prototype.h = !0;
DF_Mt.prototype.g = function() {
    return this.i.toString()
};

function DF_Mac(a) {
    return a instanceof DF_Mt && a.constructor === DF_Mt ? a.i : "type_error:SafeUrl"
}
var DF_Mbc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    DF_Mcc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

function DF_Mdc(a) {
    a instanceof DF_Mt || (a = "object" == typeof a && a.h ? a.g() : String(a), DF_Mcc.test(a) ? a = new DF_Mt(a, DF_Mec) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(DF_Mbc) ? new DF_Mt(a, DF_Mec) : null));
    return a || DF_Mfc
}
var DF_Mec = {},
    DF_Mfc = new DF_Mt("about:invalid#zClosurez", DF_Mec);
var DF_Mgc = {};

function DF_Mhc(a) {
    this.i = a;
    this.h = !0
}
DF_Mhc.prototype.g = function() {
    return this.i
};
DF_Mhc.prototype.toString = function() {
    return this.i.toString()
};

function DF_Mic(a) {
    return a instanceof DF_Mhc && a.constructor === DF_Mhc ? a.i : "type_error:SafeStyle"
}
var DF_Mjc = new DF_Mhc("", DF_Mgc);

function DF_Mkc(a) {
    if (a instanceof DF_Mt) return 'url("' + DF_Mac(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    if (a instanceof DF_M3b) a = a instanceof DF_M3b && a.constructor === DF_M3b && a.j === DF_M5b ? a.i : "type_error:Const";
    else {
        a = String(a);
        var b = a.replace(DF_Mlc, "$1").replace(DF_Mlc, "$1").replace(DF_Mmc, "url");
        if (DF_Mnc.test(b)) {
            if (b = !DF_Moc.test(a)) {
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                b = b && c && DF_Mpc(a)
            }
            a = b ? DF_Mqc(a) : "zClosurez"
        } else a = "zClosurez"
    }
    if (/[{;}]/.test(a)) throw new DF_MTb("Value does not allow [{;}], got: %s.",
        [a]);
    return a
}

function DF_Mpc(a) {
    for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
            if (b) return !1;
            b = !0
        } else if ("[" == e) {
            if (!b) return !1;
            b = !1
        } else if (!b && !c.test(e)) return !1
    }
    return b
}
var DF_Mnc = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    DF_Mmc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    DF_Mlc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
    DF_Moc = /\/\*/;

function DF_Mqc(a) {
    return a.replace(DF_Mmc, function(b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
            f = h;
            return k
        });
        b = DF_Mdc(d).g();
        return c + f + b + f + e
    })
};
var DF_Mrc = {};

function DF_Msc(a) {
    this.i = a;
    this.h = !0
}
DF_Msc.prototype.toString = function() {
    return this.i.toString()
};

function DF_Mtc(a) {
    function b(d) {
        Array.isArray(d) ? d.forEach(b) : c += DF_Muc(d)
    }
    var c = "";
    Array.prototype.forEach.call(arguments, b);
    return new DF_Msc(c, DF_Mrc)
}
DF_Msc.prototype.g = function() {
    return this.i
};

function DF_Muc(a) {
    return a instanceof DF_Msc && a.constructor === DF_Msc ? a.i : "type_error:SafeStyleSheet"
}
var DF_Mvc = new DF_Msc("", DF_Mrc);
var DF_Mwc, DF_Mxc;
a: {
    for (var DF_Myc = ["CLOSURE_FLAGS"], DF_Mzc = DF_Mi, DF_MAc = 0; DF_MAc < DF_Myc.length; DF_MAc++)
        if (DF_Mzc = DF_Mzc[DF_Myc[DF_MAc]], null == DF_Mzc) {
            DF_Mxc = null;
            break a
        } DF_Mxc = DF_Mzc
}
var DF_MBc = DF_Mxc && DF_Mxc[610401301];
DF_Mwc = null != DF_MBc ? DF_MBc : !1;

function DF_MCc() {
    var a = DF_Mi.navigator;
    return a && (a = a.userAgent) ? a : ""
}
var DF_MDc, DF_MEc = DF_Mi.navigator;
DF_MDc = DF_MEc ? DF_MEc.userAgentData || null : null;

function DF_MFc(a) {
    return DF_Mwc ? DF_MDc ? DF_MDc.brands.some(function(b) {
        return (b = b.brand) && -1 != b.indexOf(a)
    }) : !1 : !1
}

function DF_Mu(a) {
    return -1 != DF_MCc().indexOf(a)
};

function DF_MGc() {
    return DF_Mwc ? !!DF_MDc && 0 < DF_MDc.brands.length : !1
}

function DF_MHc() {
    return DF_MGc() ? DF_MFc("Chromium") : (DF_Mu("Chrome") || DF_Mu("CriOS")) && !(DF_MGc() ? 0 : DF_Mu("Edge")) || DF_Mu("Silk")
};
var DF_MIc = {};

function DF_MJc(a) {
    this.i = a;
    this.h = !0
}
DF_MJc.prototype.g = function() {
    return this.i.toString()
};
DF_MJc.prototype.toString = function() {
    return this.i.toString()
};

function DF_MKc(a) {
    return a instanceof DF_MJc && a.constructor === DF_MJc ? a.i : "type_error:SafeHtml"
}

function DF_MLc(a) {
    var b = DF_M2b();
    a = b ? b.createHTML(a) : a;
    return new DF_MJc(a, DF_MIc)
}
var DF_MMc = new DF_MJc(DF_Mi.trustedTypes && DF_Mi.trustedTypes.emptyHTML || "", DF_MIc);
/*

 SPDX-License-Identifier: Apache-2.0
*/
function DF_MNc(a) {
    this.fd = a
}

function DF_MOc(a) {
    return new DF_MNc(function(b) {
        return b.substr(0, a.length + 1).toLowerCase() === a + ":"
    })
}
var DF_MPc = [DF_MOc("data"), DF_MOc("http"), DF_MOc("https"), DF_MOc("mailto"), DF_MOc("ftp"), new DF_MNc(function(a) {
    return /^[^:]*([/?#]|$)/.test(a)
})];

function DF_MQc(a) {
    var b = void 0 === b ? DF_MPc : b;
    a: if (b = void 0 === b ? DF_MPc : b, !(a instanceof DF_Mt)) {
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof DF_MNc && d.fd(a)) {
                a = new DF_Mt(a, DF_Mec);
                break a
            }
        }
        a = void 0
    }
    return a || DF_Mfc
}
var DF_MRc = "function" === typeof URL;

function DF_MSc(a) {
    var b = DF_Mwa.apply(1, arguments);
    if (0 === b.length) return DF_M9b(a[0]);
    for (var c = a[0], d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return DF_M9b(c)
};
var DF_MTc = DF_Mc(["about:invalid#zClosurez"]),
    DF_MVc = DF_MUc;

function DF_MUc(a, b, c) {
    if (1 !== a.nodeType) return DF_MWc;
    b = b.toLowerCase();
    if ("innerhtml" === b || "innertext" === b || "textcontent" === b || "outerhtml" === b) return function() {
        return DF_MXc
    };
    var d = DF_MYc.get(a.tagName + " " + b);
    return void 0 !== d ? d : /^on/.test(b) && "attribute" === c && (a = a.tagName.includes("-") ? HTMLElement.prototype : a, b in a) ? function() {
        throw Error("invalid binding");
    } : DF_MWc
}
var DF_MZc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
    DF_M_c = DF_M7b(DF_MSc(DF_MTc)),
    DF_MXc = DF_MKc(DF_MMc);

function DF_MWc(a) {
    return a
}

function DF_M0c(a) {
    return DF_MZc.test(String(a)) ? a : DF_M_c
}

function DF_M1c() {
    return DF_M_c
}

function DF_M2c(a) {
    return a instanceof DF_M6b ? DF_M7b(a) : DF_M_c
}
var DF_MYc = new Map([
    ["A href", DF_M0c],
    ["AREA href", DF_M0c],
    ["BASE href", DF_M1c],
    ["BUTTON formaction", DF_M0c],
    ["EMBED src", DF_M1c],
    ["FORM action", DF_M0c],
    ["FRAME src", DF_M1c],
    ["IFRAME src", DF_M2c],
    ["IFRAME srcdoc", function(a) {
        return a instanceof DF_MJc ? DF_MKc(a) : DF_MXc
    }],
    ["INPUT formaction", DF_M0c],
    ["LINK href", DF_M2c],
    ["OBJECT codebase", DF_M1c],
    ["OBJECT data", DF_M1c],
    ["SCRIPT href", DF_M2c],
    ["SCRIPT src", DF_M2c],
    ["SCRIPT text", DF_M1c],
    ["USE href", DF_M2c]
]);
var DF_M3c, DF_M4c, DF_M5c, DF_M6c = (null == (DF_M3c = DF_Mi.ShadyDOM) ? 0 : DF_M3c.inUse) && (!0 === (null == (DF_M4c = DF_Mi.ShadyDOM) ? void 0 : DF_M4c.noPatch) || "on-demand" === (null == (DF_M5c = DF_Mi.ShadyDOM) ? void 0 : DF_M5c.noPatch)) ? DF_Mi.ShadyDOM.wrap : function(a) {
        return a
    },
    DF_M7c = DF_Mi.trustedTypes,
    DF_M8c = DF_M7c ? DF_M7c.createPolicy("lit-html", {
        createHTML: function(a) {
            return a
        }
    }) : void 0;

function DF_M9c(a) {
    return a
}

function DF_M$c() {
    return DF_M9c
}
var DF_Mad = "lit$" + String(Math.random()).slice(9) + "$",
    DF_Mbd = "?" + DF_Mad,
    DF_Mcd = "<" + DF_Mbd + ">",
    DF_Mdd = document;

function DF_Med(a) {
    return null === a || "object" != typeof a && "function" != typeof a || DF_MOb(a)
}
var DF_Mfd = Array.isArray,
    DF_Mgd = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    DF_Mhd = /--\x3e/g,
    DF_Mid = />/g,
    DF_Mjd = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
    DF_Mkd = /'/g,
    DF_Mld = /"/g,
    DF_Mmd = /^(?:script|style|textarea|title)$/i;

function DF_Mv(a) {
    var b = DF_Mwa.apply(1, arguments),
        c = {};
    return c._$litType$ = 1, c.strings = a, c.values = b, c
}
var DF_Mnd = Symbol.for ? Symbol.for("lit-noChange") : Symbol("lit-noChange"),
    DF_Mw = Symbol.for ? Symbol.for("lit-nothing") : Symbol("lit-nothing"),
    DF_Mod = new WeakMap,
    DF_Mpd = DF_Mdd.createTreeWalker(DF_Mdd, 129);

function DF_Mqd(a, b) {
    if (!Array.isArray(a) || !a.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== DF_M8c ? DF_M8c.createHTML(b) : b
}

function DF_Mrd(a, b) {
    var c = a.strings,
        d = a._$litType$;
    this.g = [];
    for (var e = a = 0, f = c.length - 1, g = this.g, h = c.length - 1, k = [], l = 2 === d ? "<svg>" : "", m, n = DF_Mgd, p = 0; p < h; p++) {
        for (var q = c[p], r = -1, t = void 0, v = 0, u; v < q.length;) {
            n.lastIndex = v;
            u = n.exec(q);
            if (null === u) break;
            v = n.lastIndex;
            n === DF_Mgd ? "!--" === u[1] ? n = DF_Mhd : void 0 !== u[1] ? n = DF_Mid : void 0 !== u[2] ? (DF_Mmd.test(u[2]) && (m = new RegExp("</" + u[2], "g")), n = DF_Mjd) : void 0 !== u[3] && (n = DF_Mjd) : n === DF_Mjd ? ">" === u[0] ? (r = void 0, n = null != (r = m) ? r : DF_Mgd, r = -1) : void 0 === u[1] ? r = -2 :
                (r = n.lastIndex - u[2].length, t = u[1], n = void 0 === u[3] ? DF_Mjd : '"' === u[3] ? DF_Mld : DF_Mkd) : n === DF_Mld || n === DF_Mkd ? n = DF_Mjd : n === DF_Mhd || n === DF_Mid ? n = DF_Mgd : (n = DF_Mjd, m = void 0)
        }
        v = n === DF_Mjd && c[p + 1].startsWith("/>") ? " " : "";
        l += n === DF_Mgd ? q + DF_Mcd : 0 <= r ? (k.push(t), q.slice(0, r) + "$lit$" + q.slice(r)) + DF_Mad + v : q + DF_Mad + (-2 === r ? p : v)
    }
    c = [DF_Mqd(c, l + (c[h] || "<?>") + (2 === d ? "</svg>" : "")), k];
    c = DF_Md(c);
    m = c.next().value;
    c = c.next().value;
    this.za = DF_Mrd.createElement(m, b);
    DF_Mpd.currentNode = this.za.content;
    2 === d && (b = this.za.content.firstChild,
        b.replaceWith.apply(b, DF_Me(b.childNodes)));
    for (; null !== (b = DF_Mpd.nextNode()) && g.length < f;) {
        if (1 === b.nodeType) {
            if (b.hasAttributes())
                for (d = DF_Md(b.getAttributeNames()), m = d.next(); !m.done; m = d.next()) m = m.value, m.endsWith("$lit$") ? (k = c[e++], h = b.getAttribute(m).split(DF_Mad), k = /([.?@])?(.*)/.exec(k), g.push({
                    type: 1,
                    index: a,
                    name: k[2],
                    strings: h,
                    Sc: "." === k[1] ? DF_Msd : "?" === k[1] ? DF_Mtd : "@" === k[1] ? DF_Mud : DF_Mvd
                }), b.removeAttribute(m)) : m.startsWith(DF_Mad) && (g.push({
                    type: 6,
                    index: a
                }), b.removeAttribute(m));
            if (DF_Mmd.test(b.tagName) &&
                (d = b.textContent.split(DF_Mad), m = d.length - 1, 0 < m)) {
                b.textContent = DF_M7c ? DF_M7c.emptyScript : "";
                for (h = 0; h < m; h++) b.append(d[h], DF_Mdd.createComment("")), DF_Mpd.nextNode(), g.push({
                    type: 2,
                    index: ++a
                });
                b.append(d[m], DF_Mdd.createComment(""))
            }
        } else if (8 === b.nodeType)
            if (b.data === DF_Mbd) g.push({
                type: 2,
                index: a
            });
            else
                for (d = -1; - 1 !== (d = b.data.indexOf(DF_Mad, d + 1));) g.push({
                    type: 7,
                    index: a
                }), d += DF_Mad.length - 1;
        a++
    }
}
DF_Mrd.createElement = function(a) {
    var b = DF_Mdd.createElement("template");
    b.innerHTML = a;
    return b
};

function DF_Mwd(a, b, c, d) {
    c = void 0 === c ? a : c;
    if (b === DF_Mnd) return b;
    var e, f = void 0 !== d ? null == (e = c.h) ? void 0 : e[d] : c.G;
    e = DF_Med(b) ? void 0 : b._$litDirective$;
    var g;
    if ((null == (g = f) ? void 0 : g.constructor) !== e) {
        var h, k;
        null == (h = f) || null == (k = h._$notifyDirectiveConnectionChanged) || k.call(h, !1);
        void 0 === e ? f = void 0 : (f = new e(a), f.yc(a, c, d));
        if (void 0 !== d) {
            var l, m;
            (null != (m = (l = c).h) ? m : l.h = [])[d] = f
        } else c.G = f
    }
    void 0 !== f && (b = DF_Mwd(a, f.zc(a, b.values), f, d));
    return b
}

function DF_Mxd(a, b) {
    this.h = [];
    this.i = void 0;
    this.qb = a;
    this.g = b
}
DF_Mxd.prototype.F = function(a) {
    var b = this.qb,
        c = b.za.content;
    b = b.g;
    var d, e = (null != (d = null == a ? void 0 : a.yd) ? d : DF_Mdd).importNode(c, !0);
    DF_Mpd.currentNode = e;
    c = DF_Mpd.nextNode();
    for (var f = d = 0, g = b[0]; void 0 !== g;) {
        if (d === g.index) {
            var h = void 0;
            2 === g.type ? h = new DF_Myd(c, c.nextSibling, this, a) : 1 === g.type ? h = new g.Sc(c, g.name, g.strings, this, a) : 6 === g.type && (h = new DF_Mzd(c, this, a));
            this.h.push(h);
            g = b[++f]
        }
        h = void 0;
        d !== (null == (h = g) ? void 0 : h.index) && (c = DF_Mpd.nextNode(), d++)
    }
    DF_Mpd.currentNode = DF_Mdd;
    return e
};
DF_Mxd.prototype.j = function(a) {
    for (var b = 0, c = DF_Md(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, void 0 !== d && (void 0 !== d.strings ? (d.ga(a, d, b), b += d.strings.length - 2) : d.ga(a[b])), b++
};
DF_Ma.Object.defineProperties(DF_Mxd.prototype, {
    parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.parentNode
        }
    },
    fa: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.fa
        }
    }
});

function DF_Myd(a, b, c, d) {
    this.type = 2;
    this.J = DF_Mw;
    this.i = void 0;
    this.ha = a;
    this.wa = b;
    this.g = c;
    this.options = d;
    var e;
    this.j = null != (e = null == d ? void 0 : d.isConnected) ? e : !0;
    this.h = void 0
}
DF_M = DF_Myd.prototype;
DF_M.ga = function(a, b) {
    a = DF_Mwd(this, a, void 0 === b ? this : b);
    DF_Med(a) ? a === DF_Mw || null == a || "" === a ? (this.J !== DF_Mw && this.Ua(), this.J = DF_Mw) : a !== this.J && a !== DF_Mnd && this.Tb(a) : void 0 !== a._$litType$ ? this.Ic(a) : void 0 !== a.nodeType ? this.sb(a) : DF_Mfd(a) || "function" === typeof(null == a ? void 0 : a[Symbol.iterator]) ? this.Hc(a) : this.Tb(a)
};
DF_M.ub = function(a) {
    return DF_M6c(DF_M6c(this.ha).parentNode).insertBefore(a, this.wa)
};
DF_M.sb = function(a) {
    if (this.J !== a) {
        this.Ua();
        if (DF_MVc !== DF_M$c) {
            var b, c = null == (b = this.ha.parentNode) ? void 0 : b.nodeName;
            if ("STYLE" === c || "SCRIPT" === c) throw Error("Forbidden");
        }
        this.J = this.ub(a)
    }
};
DF_M.Tb = function(a) {
    if (this.J !== DF_Mw && DF_Med(this.J)) {
        var b = DF_M6c(this.ha).nextSibling;
        void 0 === this.h && (this.h = DF_MVc(b, "data", "property"));
        a = this.h(a);
        b.data = a
    } else b = DF_Mdd.createTextNode(""), this.sb(b), void 0 === this.h && (this.h = DF_MVc(b, "data", "property")), a = this.h(a), b.data = a;
    this.J = a
};
DF_M.Ic = function(a) {
    var b = a.values,
        c = a._$litType$;
    a = "number" === typeof c ? this.Rb(a) : (void 0 === c.za && (c.za = DF_Mrd.createElement(DF_Mqd(c.Xc, c.Xc[0]), this.options)), c);
    var d;
    (null == (d = this.J) ? void 0 : d.qb) === a ? this.J.j(b) : (d = new DF_Mxd(a, this), a = d.F(this.options), d.j(b), this.sb(a), this.J = d)
};
DF_M.Rb = function(a) {
    var b = DF_Mod.get(a.strings);
    void 0 === b && DF_Mod.set(a.strings, b = new DF_Mrd(a));
    return b
};
DF_M.Hc = function(a) {
    DF_Mfd(this.J) || (this.J = [], this.Ua());
    var b = this.J,
        c = 0,
        d;
    a = DF_Md(a);
    for (var e = a.next(); !e.done; e = a.next()) e = e.value, c === b.length ? b.push(d = new DF_Myd(this.ub(DF_Mdd.createComment("")), this.ub(DF_Mdd.createComment("")), this, this.options)) : d = b[c], d.ga(e), c++;
    c < b.length && (this.Ua(d && DF_M6c(d.wa).nextSibling, c), b.length = c)
};
DF_M.Ua = function(a, b) {
    a = void 0 === a ? DF_M6c(this.ha).nextSibling : a;
    var c;
    for (null == (c = this.F) || c.call(this, !1, !0, b); a && a !== this.wa;) b = DF_M6c(a).nextSibling, DF_M6c(a).remove(), a = b
};

function DF_MAd(a, b) {
    if (void 0 === a.g) {
        a.j = b;
        var c;
        null == (c = a.F) || c.call(a, b)
    }
}
DF_Ma.Object.defineProperties(DF_Myd.prototype, {
    fa: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a, b;
            return null != (b = null == (a = this.g) ? void 0 : a.fa) ? b : this.j
        }
    },
    parentNode: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a = DF_M6c(this.ha).parentNode,
                b = this.g,
                c;
            void 0 !== b && 11 === (null == (c = a) ? void 0 : c.nodeType) && (a = b.parentNode);
            return a
        }
    }
});

function DF_Mvd(a, b, c, d, e) {
    this.type = 1;
    this.J = DF_Mw;
    this.i = void 0;
    this.element = a;
    this.name = b;
    this.g = d;
    this.options = e;
    2 < c.length || "" !== c[0] || "" !== c[1] ? (this.J = Array(c.length - 1).fill(new String), this.strings = c) : this.J = DF_Mw;
    this.xa = void 0
}
DF_Mvd.prototype.ga = function(a, b, c, d) {
    b = void 0 === b ? this : b;
    var e = this.strings,
        f = !1;
    if (void 0 === e) {
        if (a = DF_Mwd(this, a, b, 0), f = !DF_Med(a) || a !== this.J && a !== DF_Mnd) this.J = a
    } else {
        var g = a;
        a = e[0];
        var h;
        for (h = 0; h < e.length - 1; h++) {
            var k = DF_Mwd(this, g[c + h], b, h);
            k === DF_Mnd && (k = this.J[h]);
            f || (f = !DF_Med(k) || k !== this.J[h]);
            if (k === DF_Mw) a = DF_Mw;
            else if (a !== DF_Mw) {
                var l = void 0;
                a += (null != (l = k) ? l : "") + e[h + 1]
            }
            this.J[h] = k
        }
    }
    f && !d && this.tb(a)
};
DF_Mvd.prototype.tb = function(a) {
    if (a === DF_Mw) DF_M6c(this.element).removeAttribute(this.name);
    else {
        void 0 === this.xa && (this.xa = DF_MVc(this.element, this.name, "attribute"));
        var b;
        a = this.xa(null != (b = a) ? b : "");
        var c;
        DF_M6c(this.element).setAttribute(this.name, null != (c = a) ? c : "")
    }
};
DF_Ma.Object.defineProperties(DF_Mvd.prototype, {
    tagName: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.element.tagName
        }
    },
    fa: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.fa
        }
    }
});

function DF_Msd() {
    DF_Mvd.apply(this, arguments);
    this.type = 3
}
DF_Mf(DF_Msd, DF_Mvd);
DF_Msd.prototype.tb = function(a) {
    void 0 === this.xa && (this.xa = DF_MVc(this.element, this.name, "property"));
    a = this.xa(a);
    this.element[this.name] = a === DF_Mw ? void 0 : a
};

function DF_Mtd() {
    DF_Mvd.apply(this, arguments);
    this.type = 4
}
DF_Mf(DF_Mtd, DF_Mvd);
DF_Mtd.prototype.tb = function(a) {
    DF_M6c(this.element).toggleAttribute(this.name, !!a && a !== DF_Mw)
};

function DF_Mud(a, b, c, d, e) {
    DF_Mvd.call(this, a, b, c, d, e);
    this.type = 5
}
DF_Mf(DF_Mud, DF_Mvd);
DF_Mud.prototype.ga = function(a, b) {
    var c;
    a = null != (c = DF_Mwd(this, a, void 0 === b ? this : b, 0)) ? c : DF_Mw;
    if (a !== DF_Mnd) {
        b = this.J;
        c = a === DF_Mw && b !== DF_Mw || a.capture !== b.capture || a.once !== b.once || a.passive !== b.passive;
        var d = a !== DF_Mw && (b === DF_Mw || c);
        c && this.element.removeEventListener(this.name, this, b);
        d && this.element.addEventListener(this.name, this, a);
        this.J = a
    }
};
DF_Mud.prototype.handleEvent = function(a) {
    if ("function" === typeof this.J) {
        var b, c;
        this.J.call(null != (c = null == (b = this.options) ? void 0 : b.host) ? c : this.element, a)
    } else this.J.handleEvent(a)
};

function DF_Mzd(a, b, c) {
    this.element = a;
    this.type = 6;
    this.i = void 0;
    this.g = b;
    this.options = c
}
DF_Mzd.prototype.ga = function(a) {
    DF_Mwd(this, a)
};
DF_Ma.Object.defineProperties(DF_Mzd.prototype, {
    fa: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.fa
        }
    }
});
var DF_MBd;
null == (DF_MBd = window.litHtmlPolyfillSupport) || DF_MBd(DF_Mrd, DF_Myd);
var DF_MCd, DF_MDd;
(null != (DF_MDd = DF_Mi.litHtmlVersions) ? DF_MDd : DF_Mi.litHtmlVersions = []).push("3.0.2");
DF_MCd = function(a, b, c) {
    var d, e = null != (d = null == c ? void 0 : c.eb) ? d : b;
    d = e._$litPart$;
    if (void 0 === d) {
        var f;
        d = null != (f = null == c ? void 0 : c.eb) ? f : null;
        e._$litPart$ = d = new DF_Myd(b.insertBefore(DF_Mdd.createComment(""), d), d, void 0, null != c ? c : {})
    }
    d.ga(a);
    return d
};

function DF_Mx() {
    var a = DF_Mq.apply(this, arguments) || this;
    a.fb = {
        host: a
    };
    a.ka = void 0;
    return a
}
DF_Mf(DF_Mx, DF_Mq);
DF_Mx.C = DF_Mq.C;
DF_Mx.m = DF_Mq.m;
DF_Mx.o = DF_Mq.o;
DF_Mx.h = DF_Mq.h;
DF_Mx.g = DF_Mq.g;
DF_Mx.v = DF_Mq.v;
DF_Mx.i = DF_Mq.i;
DF_Mx.s = DF_Mq.s;
DF_Mx.l = DF_Mq.l;
DF_M = DF_Mx.prototype;
DF_M.ma = function() {
    var a = DF_Mq.prototype.ma.call(this),
        b;
    null != (b = this.fb).eb || (b.eb = a.firstChild);
    return a
};
DF_M.pa = function(a) {
    var b = this.render();
    this.Aa || (this.fb.isConnected = this.isConnected);
    DF_Mq.prototype.pa.call(this, a);
    this.ka = DF_MCd(b, this.T, this.fb)
};
DF_M.connectedCallback = function() {
    DF_Mq.prototype.connectedCallback.call(this);
    var a;
    null == (a = this.ka) || DF_MAd(a, !0)
};
DF_M.disconnectedCallback = function() {
    DF_Mq.prototype.disconnectedCallback.call(this);
    var a;
    null == (a = this.ka) || DF_MAd(a, !1)
};
DF_M.render = function() {
    return DF_Mnd
};
DF_Mx.u = function() {
    DF_MEd();
    return DF_Mq.u.call(this)
};
DF_Mx._$litElement$ = !0;
DF_Mx.Cb = !0;
var DF_MFd;
null == (DF_MFd = window.litElementPolyfillSupport) || DF_MFd({
    LitElement: DF_Mx
});

function DF_MEd() {
    var a, b;
    (null != (b = (a = window).litElementVersions) ? b : a.litElementVersions = []).push("4.0.1");
    DF_MEd = function() {}
};
var DF_MGd = DF_M9a(function() {
    var a = new DF_MLa,
        b = document.documentElement;
    b.addEventListener("context-request", a.Jb);
    b.addEventListener("context-provider", a.h);
    return !0
});

function DF_My() {
    var a = DF_Mx.call(this) || this;
    a.chatTitle = null;
    a.chatSubtitle = null;
    a.chatTitleIcon = null;
    a.botWritingText = null;
    a.botWritingImage = null;
    a.requestAuthText = null;
    a.placeholderText = null;
    a.languageCode = null;
    a.botActorImage = null;
    a.userActorImage = null;
    a.enableFileUpload = !1;
    a.enableAudioInput = !1;
    a.O = new DF_MWa;
    DF_MGd();
    return a
}
DF_Mf(DF_My, DF_Mx);
DF_My.C = DF_Mx.C;
DF_My.m = DF_Mx.m;
DF_My.o = DF_Mx.o;
DF_My.h = DF_Mx.h;
DF_My.g = DF_Mx.g;
DF_My.v = DF_Mx.v;
DF_My.i = DF_Mx.i;
DF_My.s = DF_Mx.s;
DF_My.l = DF_Mx.l;
DF_My.u = DF_Mx.u;

function DF_MHd(a) {
    var b, c;
    return DF_Mh(function(d) {
        return null == (b = a.V) || !b.welcomeIntent || (null == (c = a.V) ? 0 : c.isAuthenticationPending) ? d.return() : DF_Mg(d, a.V.presenter.triggerWelcomeIntent(a.V.welcomeIntent), 0)
    })
}
DF_Ma.Object.defineProperties(DF_My.prototype, {
    V: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.j = a;
            this.O.flush()
        },
        get: function() {
            return this.j
        }
    }
});
DF_Mj([DF_Mr({
    D: "chat-title",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "chatTitle", void 0);
DF_Mj([DF_Mr({
    D: "chat-subtitle",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "chatSubtitle", void 0);
DF_Mj([DF_Mr({
    D: "chat-title-icon",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "chatTitleIcon", void 0);
DF_Mj([DF_Mr({
    D: "bot-writing-text",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "botWritingText", void 0);
DF_Mj([DF_Mr({
    D: "bot-writing-image",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "botWritingImage", void 0);
DF_Mj([DF_Mr({
    D: "request-auth-text",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "requestAuthText", void 0);
DF_Mj([DF_Mr({
    D: "placeholder-text",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "placeholderText", void 0);
DF_Mj([DF_MUa({
    context: "df-languagecode",
    subscribe: !0
}), DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "languageCode", void 0);
DF_Mj([DF_Mr({
    D: "bot-actor-image",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "botActorImage", void 0);
DF_Mj([DF_Mr({
    D: "user-actor-image",
    type: String
}), DF_Mk("design:type", Object)], DF_My.prototype, "userActorImage", void 0);
DF_Mj([DF_Mr({
    D: "enable-file-upload",
    type: Boolean
}), DF_Mk("design:type", Object)], DF_My.prototype, "enableFileUpload", void 0);
DF_Mj([DF_Mr({
    D: "enable-audio-input",
    type: Boolean
}), DF_Mk("design:type", Object)], DF_My.prototype, "enableAudioInput", void 0);
DF_Mj([DF_MUa({
    context: "df-instance",
    subscribe: !0
}), DF_Mk("design:type", Object), DF_Mk("design:paramtypes", [Object])], DF_My.prototype, "V", null);
var DF_MId = DF_Mp([".wrapper{font-family:var(--df-messenger-font-family, var(--df-messenger-default-font-family));font-size:var(--df-messenger-font-size, var(--df-messenger-default-font-size));font-weight:400;margin:0;padding:0;height:100%}.chat-bubble-default-wrapper{position:fixed;bottom:20px;right:20px}"]);
var DF_MJd = DF_Mp([".auth-screen-wrapper{width:100%;height:100%;background:var(--df-messenger-auth-background,var(--df-messenger-auth-background-color,rgba(204,204,204,.8)));display:flex;justify-content:center;align-items:center}.auth-screen-wrapper .auth-button{background:var(--df-messenger-auth-button-background,var(--df-messenger-auth-button-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));color:var(--df-messenger-auth-button-font-color,#fff);font-family:var(--df-messenger-auth-button-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-auth-button-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );padding:8px;border:var(--df-messenger-auth-button-border,none);border-radius:var(--df-messenger-auth-button-border-radius,8px)}"]);
var DF_MKd = DF_Mc(["", "px"]),
    DF_MLd = DF_Mc(["var(--df-messenger-focus-color-contrast, var(--df-messenger-default-focus-color-contrast))"]),
    DF_MMd = DF_Mc(["var(--df-messenger-focus-color, var(--df-messenger-default-focus-color))"]),
    DF_MNd = DF_Mc(["\n    border-radius: ", ";\n    border: 3px solid ", ";\n    bottom: 0;\n    box-sizing: border-box;\n    content: '';\n    left: 0;\n    outline: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n  "]),
    DF_MOd = DF_Mc(["\n  .visually-hidden {\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    white-space: nowrap;\n    outline: 0;\n  }\n\n  .focus-outline:focus-visible,\n  .focus-outline-contrast:focus-visible {\n    outline: none;\n    position: relative;\n  }\n\n  .focus-outline:focus-visible:before {\n    ",
        "\n  }\n\n  .focus-outline-contrast:focus-visible:before {\n    ", "\n  }\n\n  .focus-outset:focus-visible:before {\n    margin: -5px;\n  }\n\n  .focus-inset:focus-visible:before {\n    margin: 5px;\n  }\n\n  button.action-button {\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    border-radius: 999px;\n    transition: background-color 0.3s;\n  }\n\n  button.action-button:hover {\n    background-color: rgba(68, 71, 70, 0.08);\n    transition: background-color 0.3s;\n  }\n"
    ]);

function DF_MPd(a) {
    return DF_Mp(DF_MNd, DF_Mp(DF_MKd, 8), (void 0 === a ? 0 : a) ? DF_Mp(DF_MLd) : DF_Mp(DF_MMd))
}
var DF_Mz = DF_Mp(DF_MOd, DF_MPd(!1), DF_MPd(!0));

function DF_MA() {
    var a = DF_Mx.apply(this, arguments) || this;
    a.languageCode = "";
    return a
}
DF_Mf(DF_MA, DF_Mx);
DF_MA.C = DF_Mx.C;
DF_MA.m = DF_Mx.m;
DF_MA.o = DF_Mx.o;
DF_MA.h = DF_Mx.h;
DF_MA.g = DF_Mx.g;
DF_MA.v = DF_Mx.v;
DF_MA.i = DF_Mx.i;
DF_MA.s = DF_Mx.s;
DF_MA.l = DF_Mx.l;
DF_MA.u = DF_Mx.u;
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_MA.prototype, "languageCode", void 0);
var DF_MQd = DF_Mc(['<div class="auth-screen-wrapper">\n      <button\n        class="auth-button"\n        @click="', '"\n      >\n          ', "\n      </button>\n    </div>"]);

function DF_MB() {
    var a = DF_MA.apply(this, arguments) || this;
    a.requestAuthText = null;
    return a
}
DF_Mf(DF_MB, DF_MA);
DF_MB.C = DF_MA.C;
DF_MB.m = DF_MA.m;
DF_MB.o = DF_MA.o;
DF_MB.h = DF_MA.h;
DF_MB.g = DF_MA.g;
DF_MB.v = DF_MA.v;
DF_MB.i = DF_MA.i;
DF_MB.s = DF_MA.s;
DF_MB.l = DF_MA.l;
DF_MB.u = DF_MA.u;
DF_MB.prototype.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        return DF_Mg(b, a.mc.requestAuthentication(), 0)
    })
};
DF_MB.prototype.render = function() {
    var a = DF_M3a(this.requestAuthText, this.languageCode, "requestAccess");
    return DF_Mv(DF_MQd, this.requestAuthentication, a)
};
var DF_MRd = DF_MB;
DF_MRd.j = [DF_MJd, DF_Mz];
DF_Mj([DF_MUa({
    context: "df-instance",
    subscribe: !0
}), DF_Mk("design:type", Object)], DF_MRd.prototype, "mc", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: String
}), DF_Mk("design:type", Object)], DF_MRd.prototype, "requestAuthText", void 0);
DF_MRd = DF_Mj([DF_Mo("df-messenger-auth-screen")], DF_MRd);
var DF_MSd = DF_Mp([".chat-wrapper{height:100%;width:100%;display:flex;flex-direction:column;border:var(--df-messenger-chat-border,none);border-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));position:relative;z-index:0}.chat-wrapper df-messenger-auth-screen{position:absolute;z-index:100;inset:0}df-messenger-message-list{flex-grow:1;min-height:0;display:flex;flex-direction:column}"]);
var DF_MTd = DF_Mp([":host{--df-messenger-message-internal-border-radius:var(--df-messenger-message-border-radius,\n      var(--df-messenger-default-border-radius)\n    )}.message-list-wrapper{background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa));flex-grow:1;display:flex;flex-direction:column;overflow:hidden;position:relative;border-left:var(--df-messenger-chat-messagelist-border,none);border-right:var(--df-messenger-chat-messagelist-border,none)}.error,.jump-to-bottom{position:absolute;opacity:0}.message-list-wrapper.no-titlebar{border-top-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border-top-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius))}.message-list-wrapper::after{content:'';position:absolute;bottom:0;display:block;width:100%;padding-top:4px;margin-top:-4px;background:var(--df-messenger-chat-messagelist-scroll-shadow-background,radial-gradient(farthest-side at 50% 100%,rgba(0,0,0,.2),transparent) bottom);pointer-events:none;opacity:0;transition:opacity .3s}.error,.error.show{transition:transform .2s,opacity .2s}.message-list-wrapper.show-shadow::after{opacity:1;transition:opacity .3s}#message-list{flex-grow:1;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll;padding:var(--df-messenger-chat-padding,10px)}.content{flex-grow:1;width:100%;max-width:var(--df-messenger-chat-max-width,none);margin-left:auto;margin-right:auto;display:flex;flex-direction:column}.entry:first-child{margin-top:auto!important}.entry:not(:first-child){margin-top:var(--df-messenger-message-spacing,10px)}.entry{display:flex;gap:var(--df-messenger-message-actor-spacing,16px);opacity:0;animation:.3s .1s forwards present-yourself;border-radius:var(--df-messenger-message-group-border-radius,0);padding:var(--df-messenger-message-group-padding,0)}.entry.bot{background:var(--df-messenger-message-bot-group-background,var(--df-messenger-message-bot-group-background-color,transparent));flex-direction:var(--df-messenger-message-bot-actor-order,row)}.entry.user{background:var(--df-messenger-message-user-group-background,var(--df-messenger-message-user-group-background-color,transparent));flex-direction:var(--df-messenger-message-user-actor-order,row-reverse)}.actor-container{display:flex;flex-direction:var(--df-messenger-message-actor-direction,column);justify-content:var(--df-messenger-message-actor-align,flex-start)}.actor{border-radius:var(--df-messenger-message-actor-border-radius,999px);width:var(--df-messenger-message-actor-image-size,24px);height:var(--df-messenger-message-actor-image-size,24px);padding:var(--df-messenger-message-actor-padding,8px);z-index:1}.actor img{width:inherit;height:inherit}.entry.bot .actor{background:var(--df-messenger-message-bot-actor-background,#fff);border:var(--df-messenger-message-bot-actor-border,none);margin:var(--df-messenger-message-bot-actor-offset,0)}.entry.user .actor{background:var(--df-messenger-message-user-actor-background,#fff);border:var(--df-messenger-message-user-actor-border,none);margin:var(--df-messenger-message-user-actor-offset,0)}df-messenger-utterance{flex-grow:1;min-width:0}.error{display:flex;align-items:center;justify-content:center;background:var(--df-messenger-message-error-background,var(--df-messenger-message-error-background-color,rgba(0,0,0,.87)));box-shadow:1px 4px 15px 0 rgba(0,0,0,.24);color:var(--df-messenger-message-error-font-color,#fff);font-family:var(--df-messenger-message-error-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-error-font-size, 12px);padding:10px;z-index:1;width:100%;box-sizing:border-box;transform:translateY(-100%)}.error.show{opacity:.8;transform:translateY(0)}.jump-to-bottom{display:var(--df-messenger-chat-scroll-button-display,none);left:0;right:0;bottom:0;visibility:hidden;pointer-events:none;transition:opacity .3s,visibility 0s linear .3s;color:var(--df-messenger-chat-scroll-button-font-color,#fff);font-size:var(--df-messenger-chat-scroll-button-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );padding:var(--df-messenger-chat-scroll-button-container-padding,8px)}.jump-to-bottom.show{visibility:visible;opacity:1;transition:opacity .3s,visibility}.jump-to-bottom button{cursor:pointer;pointer-events:auto;margin:auto;display:flex;justify-content:center;align-items:center;background:var(--df-messenger-chat-scroll-button-background,var(--df-messenger-chat-scroll-button-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));border:none;padding:8px 16px;border-radius:var(--df-messenger-chat-scroll-button-border-radius,999px);color:inherit;font-size:1em}.jump-to-bottom .icon{margin-right:8px;color:inherit;font-size:1.5em}.typing-message{flex-grow:1;min-width:0;display:flex;justify-content:var(--df-messenger-message-bot-align,flex-start)}.message{margin-top:var(--df-messenger-message-bot-writing-spacing,var(--df-messenger-message-spacing,10px));border-top-left-radius:var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-border-top-left-radius,var(--df-messenger-message-internal-border-radius)));border-top-right-radius:var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-border-top-right-radius,var(--df-messenger-message-internal-border-radius)));border-bottom-left-radius:var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-border-bottom-left-radius,var(--df-messenger-message-internal-border-radius)));border-bottom-right-radius:var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-border-bottom-right-radius,var(--df-messenger-message-internal-border-radius)));padding:var(--df-messenger-message-bot-writing-padding,var(--df-messenger-message-padding,12px));margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);background:var(--df-messenger-message-bot-writing-background,var(--df-messenger-message-bot-writing-background-color,var(--df-messenger-message-bot-background,var(--df-messenger-message-bot-background-color,#ecf3fe))));border:var(--df-messenger-message-bot-writing-border,var(--df-messenger-message-bot-border,var(--df-messenger-message-border,none)));font-family:var(--df-messenger-message-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-bot-writing-font-size,\n      var(--df-messenger-message-font-size,\n        var(--df-messenger-font-size,\n          var(--df-messenger-default-font-size)\n        )\n      )\n    );font-weight:var(--df-messenger-message-bot-writing-font-weight,var(--df-messenger-message-bot-font-weight,var(--df-messenger-message-font-weight,normal)));line-height:var(--df-messenger-message-line-height, normal)}.message img{width:var(--df-messenger-message-bot-writing-image-width,24px);height:var(--df-messenger-message-bot-writing-image-height,24px)}@keyframes present-yourself{to{opacity:1}}"]);
var DF_MUd = DF_Mp([".feedback-box .separator::after,.feedback-box .separator::before{content:'';display:block;height:var(--df-messenger-message-group-border-radius);background:var(--df-messenger-message-bot-group-background,var(--df-messenger-message-bot-group-background-color,transparent))}.feedback-box,.textarea-row{position:relative;display:flex}:host{--df-messenger-internal-message-feedback-icon-fill:var(--df-messenger-message-feedback-icon-font-color,\n      /* Legacy: df-messenger-message-feedback-font-color */\n      var(--df-messenger-message-feedback-font-color,\n        var(--df-messenger-icon-font-color,\n          var(--df-messenger-default-icon-font-color)\n        )\n      )\n    )}.feedback{display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-font-size,\n      var(--df-messenger-default-font-size)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color))}.feedback .thumbs{margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px);align-self:var(--df-messenger-message-bot-align,flex-start)}.thumb{border:var(--df-messenger-message-feedback-icon-border,none);border-radius:var(--df-messenger-message-feedback-icon-border-radius,0);background:var(--df-messenger-message-feedback-icon-background,none);padding:var(--df-messenger-message-feedback-icon-padding,0);fill:var(--df-messenger-internal-message-feedback-icon-fill)}.thumb:hover{background:var(--df-messenger-message-feedback-icon-background-hover,var(--df-messenger-message-feedback-icon-background,none))}.thumb.active{fill:var(--df-messenger-message-feedback-icon-font-color-active,var(--df-messenger-internal-message-feedback-icon-fill))}.thumbs-up{margin-right:var(--df-messenger-message-feedback-icon-distance,8px)}.feedback-box{margin-top:10px;flex-direction:column;gap:var(--df-messenger-message-rich-feedback-spacing,10px);padding:var(--df-messenger-message-rich-feedback-padding,0);background:var(--df-messenger-message-rich-feedback-background,none);border-radius:var(--df-messenger-message-rich-feedback-border-radius,0);border:var(--df-messenger-message-rich-feedback-border,none);margin-left:var(--df-messenger-rich-feedback-offset-left,0)}.feedback-box .separator{display:var(--df-messenger-message-rich-feedback-block-separator-display,none);margin:calc(0px - var(--df-messenger-message-rich-feedback-spacing,10px)) var(--df-messenger-message-rich-feedback-block-separator-padding-offset,0);background:var(--df-messenger-chat-background,var(--df-messenger-chat-background-color,#fafafa));height:calc(var(--df-messenger-message-stack-spacing,var(--df-messenger-message-spacing,10px)) + var(--df-messenger-message-group-border-radius) * 2)}.feedback-box .separator::before{border-bottom-left-radius:var(--df-messenger-message-group-border-radius);border-bottom-right-radius:var(--df-messenger-message-group-border-radius)}.feedback-box .separator::after{border-top-left-radius:var(--df-messenger-message-group-border-radius);border-top-right-radius:var(--df-messenger-message-group-border-radius);margin-top:10px}.feedback-title-row{display:flex;justify-content:space-between;align-items:center}.feedback-close{padding:12px;margin:-12px -10px -12px -12px;background-color:transparent;border:none;fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))}.feedback-title{font-weight:700}.feedback-subtitle{margin-left:10px;font-weight:400}.feedback-reason-row{display:flex;flex-wrap:wrap;flex-direction:var(--df-messenger-message-rich-feedback-chips-flex-direction,row);gap:var(--df-messenger-message-rich-feedback-chips-spacing,10px);row-gap:var(--df-messenger-message-rich-feedback-chips-spacing,10px)}.feedback-reason-chip,.feedback-submit{border:var(--df-messenger-default-border);border-radius:var(--df-messenger-default-border-radius);margin:0;padding:8px 16px}.feedback-reason-chip{background:var(--df-messenger-message-rich-feedback-chips-background,none);color:var(--df-messenger-message-rich-feedback-chips-font-color,inherit);align-self:flex-start}.feedback-reason-chip:hover,.feedback-submit:not(:disabled):hover{background:var(--df-messenger-message-rich-feedback-chips-background-hover,rgba(68,71,70,.08))}.feedback-reason-chip.active{background:var(--df-messenger-message-rich-feedback-chips-background-active,#e8f0fe);color:var(--df-messenger-message-rich-feedback-chips-font-color-active,#174ea6)}.feedback-submit{background:var(--df-messenger-message-rich-feedback-submit-background,none);color:var(--df-messenger-message-rich-feedback-submit-font-color,inherit);align-self:var(--df-messenger-message-rich-feedback-submit-align,flex-end)}.privacy-notice-row,.thank-you{font-size:12px;color:var(--df-messenger-message-rich-feedback-notice-font-color,var(--df-messenger-default-secondary-font-color))}.feedback-submit:disabled{opacity:.5}.textarea-row  textarea{resize:none;box-sizing:border-box;border:var(--df-messenger-default-border);border-radius:var(--df-messenger-default-border-radius);background:var(--df-messenger-message-rich-feedback-input-background,#fff);color:var(--df-messenger-message-rich-feedback-input-font-color,inherit);padding:8px 16px;font-family:inherit;font-size:inherit;flex-grow:1}.textarea-row  textarea:focus{outline:0}.privacy-notice-row{padding:0 17px}.feedback-submit-row{display:flex;flex-direction:column}.thank-you{margin-top:10px;opacity:0;animation:.3s .1s forwards present-yourself}@keyframes present-yourself{to{opacity:1}}"]);

function DF_MVd(a) {
    return 0 < a ? 1 : 0 > a ? 2 : 0
}
var DF_MWd = [1, 2, 3];
var DF_MXd = DF_Mc(['\n  <svg id="defaultSvg" height="36px" width="36px" xmlns="http://www.w3.org/2000/svg"\n    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="11999 18083\n    41 52">\n    <defs>\n    <style>\n      .cls-1 {\n        clip-path: url(#clip-path);\n      }\n\n      .cls-2 {\n        fill: #ef6c00;\n      }\n\n      .cls-3 {\n        fill: #ff9800;\n      }\n\n      .cls-4 {\n        fill: #bf360c;\n      }\n\n      .cls-4, .cls-5 {\n        opacity: 0.1;\n      }\n\n      .cls-5 {\n        fill: #fff;\n      }\n    </style>\n    <clipPath id="clip-path">\n      <path id="Path_1082" data-name="Path 1082"\n          d="M39.217,10.27,22.275.48a3.559,3.559,0,0,0-3.554,0L1.779,\n          10.27A3.572,3.572,0,0,0,.01,13.357v19.6a3.569,3.569,0,0,0,\n          1.769,3.079l8.479,4.907v10a1.064,1.064,0,0,0,1.071,1.064,\n          1.013,1.013,0,0,0,.527-.146L39.241,36.041a3.532,3.532,0,0,0,\n          1.769-3.079v-19.6A3.575,3.575,0,0,0,39.217,10.27Z"\n          transform="translate(0 0)"/>\n    </clipPath>\n    </defs>\n    <g id="Group_1192" data-name="Group 1192" class="cls-1"\n      transform="translate(11998.99 18082.994)">\n    <path id="Path_1078" data-name="Path 1078" class="cls-2"\n        d="M0,13.91V37.6l10.248,5.923V55.377L40.984,\n        37.6V13.91L20.5,25.755Z"\n        transform="translate(0.002 -2.608)"/>\n    <path id="Path_1079" data-name="Path 1079" class="cls-3"\n        d="M0,11.175,20.5-.67,40.984,11.175,20.5,23.021Z"\n        transform="translate(0.002 0.127)"/>\n    <path id="Path_1080" data-name="Path 1080" class="cls-4"\n        d="M40.5,13.56,20.139,25.332.13,13.763,\n        0,13.844,20.5,25.69,40.984,13.844Z"\n        transform="translate(0.002 -2.542)"/>\n    <path id="Path_1081" data-name="Path 1081" class="cls-5"\n        d="M20.5,25.772.13,14,0,14.073,20.5,25.918Z"\n        transform="translate(0.002 -2.625)"/>\n    </g>\n  </svg>\n']),
    DF_MYd = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>']),
    DF_MZd = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z"/></svg>']),
    DF_M_d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z"/></svg>']),
    DF_M0d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z"/></svg>']),
    DF_M1d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z"/></svg>']),
    DF_M2d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>']),
    DF_M3d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M4,9h10.5v3.5H4V9z M4,14.5 h10.5V18L4,18V14.5z M20,18l-3.5,0V9H20V18z"/></g></svg>']),
    DF_M4d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>']),
    DF_M5d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M320-200v-560l440 280-440 280Z"/></svg>']),
    DF_M6d = DF_Mc(['<svg viewBox="0 0 30 20" id="brandmark" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z" fill="#FF0000"></path><path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white"></path></svg>']),
    DF_M7d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z"/></svg>']),
    DF_M8d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" width="24" height="24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z"/><path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z"/></g></g></svg>']),
    DF_M9d = DF_Mc(['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>']),
    DF_M$d = DF_Mv(DF_MXd),
    DF_Mae = DF_Mv(DF_MYd),
    DF_Mbe = DF_Mv(DF_MZd),
    DF_Mce = DF_Mv(DF_M_d),
    DF_Mde = DF_Mv(DF_M0d),
    DF_Mee = DF_Mv(DF_M1d),
    DF_Mfe = DF_Mv(DF_M2d),
    DF_Mge = DF_Mv(DF_M3d),
    DF_Mhe = DF_Mv(DF_M4d),
    DF_Mie = DF_Mv(DF_M5d),
    DF_Mje = DF_Mv(DF_M6d),
    DF_Mke = DF_Mv(DF_M7d),
    DF_Mle = DF_Mv(DF_M8d),
    DF_Mme = DF_Mv(DF_M9d);
var DF_Mne = DF_Mc(["\n  .show-focus:after {\n    ", "\n  }\n"]),
    DF_Moe = DF_Mc(['\n        <div class="feedback">\n          <div class="thumbs">\n            ', "", "\n          </div>\n          ", "\n          ", "\n        </div>"]),
    DF_Mpe = DF_Mc(['\n        <button\n          class="thumb focus-outline thumbs-up ', '"\n          @click=', "\n        >\n          ", "\n        </button>"]),
    DF_Mqe = DF_Mc(['\n        <button\n          class="thumb focus-outline thumbs-down ', '"\n          @click=', "\n        >\n          ",
        "\n        </button>"
    ]),
    DF_Mre = DF_Mc(['\n          <div class="feedback-box">\n            <div class="separator"></div>\n            ', "\n          </div>"]),
    DF_Mse = DF_Mc(['\n                <button\n                  class="feedback-reason-chip focus-outline\n                    ', '"\n                  @click=', "\n                >\n                  ", "\n                </button>"]),
    DF_Mte = DF_Mc('\n        <div class="feedback-box">\n          <div class="separator"></div>\n          <div class="feedback-title-row">\n            <div>\n              <span class="feedback-title">;</span>\n              <span class="feedback-subtitle">(;)</span>\n            </div>\n            <button\n              class="feedback-close focus-outline action-button"\n              @click=;\n              aria-label=";"\n            >\n              ;\n            </button>\n          </div>\n          <div class="feedback-reason-row">\n            ;\n          </div>\n          <div\n            class="textarea-row ;"\n          >\n            <textarea\n              rows="1"\n              placeholder=";"\n              @input=;\n              @mousedown=;\n              @focusin=;\n              @focusout=;\n              aria-label=";"\n            ></textarea>\n          </div>\n          <div class="privacy-notice-row">\n            ;\n          </div>\n          <div class="feedback-submit-row">\n            <button\n              class="feedback-submit focus-outline"\n              @click=;\n              ?disabled=;\n              aria-label=";"\n            >\n              ;\n            </button>\n          </div>\n        </div>'.split(";")),
    DF_Mue = DF_Mc(['<div class="thank-you">', "</div>"]),
    DF_Mve = DF_Mp(DF_Mne, DF_MPd(!1));

function DF_MC() {
    var a = DF_MA.apply(this, arguments) || this;
    a.responseId = null;
    a.showNegativeFeedback = !1;
    a.h = !1;
    a.X = 0;
    a.jb = !1;
    a.hb = !1;
    a.oa = 0;
    a.ib = !1;
    return a
}
DF_Mf(DF_MC, DF_MA);
DF_MC.C = DF_MA.C;
DF_MC.m = DF_MA.m;
DF_MC.o = DF_MA.o;
DF_MC.h = DF_MA.h;
DF_MC.g = DF_MA.g;
DF_MC.v = DF_MA.v;
DF_MC.i = DF_MA.i;
DF_MC.s = DF_MA.s;
DF_MC.l = DF_MA.l;
DF_MC.u = DF_MA.u;
DF_M = DF_MC.prototype;
DF_M.Z = function(a) {
    DF_MA.prototype.Z.call(this, a);
    var b, c;
    this.X = null != (c = null == (b = this.va) ? void 0 : b.presenter.getUtteranceReaction(this.responseId)) ? c : 0
};
DF_M.pa = function(a) {
    DF_MA.prototype.pa.call(this, a);
    this.showNegativeFeedback && this.showNegativeFeedback !== this.h && (a = this.T.querySelector(".feedback-box")) && DF_M4a(a);
    this.h = this.showNegativeFeedback
};
DF_M.render = function() {
    var a = 0 < this.X;
    a = DF_Mv(DF_Mpe, a ? "active" : "", this.ud.bind(this, a), a ? DF_Mce : DF_Mbe);
    var b = 0 > this.X;
    b = DF_Mv(DF_Mqe, b ? "active" : "", this.td.bind(this, b), b ? DF_Mee : DF_Mde);
    var c = DF_Mwe(this);
    if (!this.ib || this.showNegativeFeedback) var d = null;
    else d = DF_Mn(this.languageCode, "feedbackThankYouText"), d = DF_Mv(DF_Mue, d);
    return DF_Mv(DF_Moe, a, b, c, d)
};
DF_M.ud = function(a) {
    this.X = a ? 0 : 1;
    var b;
    null == (b = this.va) || b.presenter.storeUtteranceReaction(this.responseId, this.X);
    var c;
    null == (c = this.va) || c.presenter.sendFeedback({
        responseId: this.responseId,
        answerFeedback: {
            rating: DF_MVd(this.X)
        }
    })
};
DF_M.td = function(a) {
    this.X = a ? 0 : -1;
    this.showNegativeFeedback = 0 > this.X;
    var b;
    null == (b = this.va) || b.presenter.storeUtteranceReaction(this.responseId, this.X);
    var c;
    null == (c = this.va) || c.presenter.sendFeedback({
        responseId: this.responseId,
        answerFeedback: {
            rating: DF_MVd(this.X)
        }
    })
};

function DF_Mxe(a) {
    var b = document.createElement("df-external-custom-feedback");
    b.addEventListener("df-custom-submit-feedback-clicked", function(c) {
        c = c.detail;
        console.debug("DF-MESSENGER", "Event df-custom-submit-feedback-clicked received", c);
        DF_Mye(a, {
            responseId: a.responseId,
            answerFeedback: {
                rating: DF_MVd(a.X),
                customRating: c
            }
        })
    });
    console.debug("DF-MESSENGER", "Registered listener for event df-custom-submit-feedback-clicked");
    return DF_Mv(DF_Mre, b)
}

function DF_Mwe(a) {
    if (!a.showNegativeFeedback || 0 <= a.X) return null;
    if (customElements.get("df-external-custom-feedback")) return DF_Mxe(a);
    var b = DF_Mn(a.languageCode, "feedbackPlaceholder"),
        c = DF_Mn(a.languageCode, "feedbackInputAriaLabel"),
        d = DF_Mn(a.languageCode, "feedbackWhyRatingText"),
        e = DF_Mn(a.languageCode, "feedbackOptionalText"),
        f = DF_Mn(a.languageCode, "feedbackCloseAriaLabel"),
        g = DF_Mn(a.languageCode, "feedbackPrivacyNoticeText"),
        h = DF_Mn(a.languageCode, "feedbackSubmit"),
        k = DF_Mn(a.languageCode, "feedbackSubmitAriaLabel");
    return DF_Mv(DF_Mte, d, e, a.kc, f, DF_Mae, DF_MWd.map(function(l) {
        return DF_Mv(DF_Mse, a.oa === l ? "active" : "", a.Yc.bind(a, l), DF_Mze(a, l))
    }), a.hb ? "show-focus" : "", b, a.pc, function() {
        return a.jb = !0
    }, a.nc, a.oc, c, g, a.qd, 0 === a.oa && !a.j, k, h)
}

function DF_Mze(a, b) {
    switch (b) {
        case 1:
            return DF_Mn(a.languageCode, "feedbackChipIrrelevant");
        case 2:
            return DF_Mn(a.languageCode, "feedbackChipIncorrect");
        case 3:
            return DF_Mn(a.languageCode, "feedbackChipUnsafe");
        default:
            return null
    }
}
DF_M.Yc = function(a) {
    this.oa = this.oa === a ? 0 : a
};
DF_M.pc = function() {
    this.g.style.height = "";
    this.g.style.height = this.g.scrollHeight + 2 + "px";
    DF_MNa(this)
};
DF_M.nc = function() {
    this.hb = this.jb ? !1 : !0;
    this.jb = !1
};
DF_M.oc = function() {
    this.hb = !1
};
DF_M.qd = function() {
    var a;
    DF_Mye(this, {
        responseId: this.responseId,
        answerFeedback: {
            rating: DF_MVd(this.X),
            ratingReason: Object.assign({}, 0 === this.oa ? {} : {
                reasonLabels: [DF_Mze(this, this.oa)]
            }, {
                feedback: null != (a = this.j) ? a : ""
            })
        }
    })
};

function DF_Mye(a, b) {
    var c;
    null == (c = a.va) || c.presenter.sendFeedback(b);
    a.kc();
    a.ib = !0;
    setTimeout(function() {
        a.ib = !1
    }, 2400)
}
DF_M.kc = function() {
    this.oa = 0;
    this.showNegativeFeedback = !1
};
DF_Ma.Object.defineProperties(DF_MC.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.T.querySelector("textarea")
        }
    },
    j: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return null == (a = this.g) ? void 0 : a.value
        }
    }
});
var DF_MAe = DF_MC;
DF_MAe.j = [DF_MUd, DF_Mz, DF_Mve];
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_MAe.prototype, "responseId", void 0);
DF_Mj([DF_Mr({
    type: Boolean
}), DF_Mk("design:type", Object)], DF_MAe.prototype, "showNegativeFeedback", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_MAe.prototype, "X", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_MAe.prototype, "jb", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_MAe.prototype, "hb", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Number)], DF_MAe.prototype, "oa", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_MAe.prototype, "ib", void 0);
DF_Mj([DF_MUa({
    context: "df-instance",
    subscribe: !0
}), DF_Mk("design:type", Object)], DF_MAe.prototype, "va", void 0);
DF_MAe = DF_Mj([DF_Mo("df-messenger-feedback")], DF_MAe);
var DF_MBe = DF_Mp([".message-stack{display:flex;flex-direction:column}.message-stack:not(:first-child){margin-top:var(--df-messenger-message-stack-spacing,var(--df-messenger-message-spacing,10px))}.message-stack.none{margin-top:0}df-card,df-chips,df-citations,df-custom-template,df-html-message,df-markdown-message,df-text-message{max-width:100%}df-chips,df-citations,df-text-message[isbot]{align-self:var(--df-messenger-message-bot-align,flex-start)}df-card{align-self:var(--df-messenger-message-card-align,var(--df-messenger-message-bot-align,flex-start))}df-custom-template{align-self:stretch}df-html-message,df-markdown-message,df-text-message[isbot]{margin-left:var(--df-messenger-message-bot-margin-left,0);margin-right:var(--df-messenger-message-bot-margin-right,75px)}df-html-message,df-markdown-message{align-self:var(--df-messenger-message-rich-text-align,var(--df-messenger-message-bot-align,flex-start))}df-text-message:not([isbot]){align-self:var(--df-messenger-message-user-align,flex-end);margin-left:var(--df-messenger-message-user-margin-left,75px);margin-right:var(--df-messenger-message-user-margin-right,0)}.feedback{margin-top:var(--df-messenger-message-feedback-spacing,var(--df-messenger-message-spacing,10px))}"]);

function DF_MD(a, b, c) {
    var d = DF_MA.call(this) || this;
    d.type = c;
    d.uniqueId = c + "-" + a + "-" + b;
    return d
}
DF_Mf(DF_MD, DF_MA);
DF_MD.C = DF_MA.C;
DF_MD.m = DF_MA.m;
DF_MD.o = DF_MA.o;
DF_MD.h = DF_MA.h;
DF_MD.g = DF_MA.g;
DF_MD.v = DF_MA.v;
DF_MD.i = DF_MA.i;
DF_MD.s = DF_MA.s;
DF_MD.l = DF_MA.l;
DF_MD.u = DF_MA.u;
DF_MD.prototype.isVisible = function() {
    return !0
};
var DF_MCe = DF_Mc(["\n  .show-focus:after {\n    ", "\n  }\n"]),
    DF_MDe = DF_Mc(["\n      ", "\n      ", ""]),
    DF_MEe = DF_Mc(['\n      <div class="feedback">\n        <df-messenger-feedback\n          .responseId=', "\n        ></df-messenger-feedback>\n      </div>"]),
    DF_MFe = DF_Mc(['\n          <div class="message-stack ', '">\n            ', "\n          </div>"]);

function DF_MGe(a) {
    return "chips" === a.type || "match_citations" === a.type || "files" === a.type
}
var DF_MHe = DF_Mp(DF_MCe, DF_MPd(!1));

function DF_ME() {
    return DF_MA.apply(this, arguments) || this
}
DF_Mf(DF_ME, DF_MA);
DF_ME.C = DF_MA.C;
DF_ME.m = DF_MA.m;
DF_ME.o = DF_MA.o;
DF_ME.h = DF_MA.h;
DF_ME.g = DF_MA.g;
DF_ME.v = DF_MA.v;
DF_ME.i = DF_MA.i;
DF_ME.s = DF_MA.s;
DF_ME.l = DF_MA.l;
DF_ME.u = DF_MA.u;
DF_ME.prototype.render = function() {
    var a = DF_MIe(this.utterance.elements),
        b, c, d;
    var e = (null == (b = this.utterance) ? 0 : b.isBot) && (null == (c = this.utterance) ? 0 : c.allowFeedback) && (null == (d = this.qc) ? 0 : d.reactionsAllowed()) ? DF_Mv(DF_MEe, this.utterance.responseId) : null;
    return DF_Mv(DF_MDe, a, e)
};

function DF_MIe(a) {
    function b(c) {
        return c < a.length - 1 && !DF_MGe(a[c + 1])
    }
    return a.map(function(c, d) {
        var e = DF_MGe(a[d]) ? "none" : 0 < d && !DF_MGe(a[d - 1]) || b(d) ? 0 < d && !DF_MGe(a[d - 1]) ? b(d) ? "mid" : "last" : b(d) ? 0 < d && !DF_MGe(a[d - 1]) ? "mid" : "first" : "unknown" : "single";
        c.classList.add(e);
        0 === d && c.classList.add("first-child");
        d === a.length - 1 && c.classList.add("last-child");
        return DF_Mv(DF_MFe, e, c)
    })
}
var DF_MJe = DF_ME;
DF_MJe.j = [DF_MBe, DF_Mz, DF_MHe];
DF_Mj([DF_Mr({
    type: Object,
    D: !1
}), DF_Mk("design:type", Object)], DF_MJe.prototype, "utterance", void 0);
DF_Mj([DF_MUa({
    context: "df-instance",
    subscribe: !0
}), DF_Mk("design:type", Object)], DF_MJe.prototype, "qc", void 0);
DF_MJe = DF_Mj([DF_Mo("df-messenger-utterance")], DF_MJe);
var DF_MKe = {
        type: "info",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        actionLink: ""
    },
    DF_MLe = {
        type: "description",
        title: "",
        text: []
    },
    DF_MMe = {
        type: "image",
        rawUrl: "",
        accessibilityText: ""
    },
    DF_MNe = {
        type: "list",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        event: {
            event: ""
        }
    },
    DF_MOe = {
        type: "button",
        icon: {
            type: "",
            color: ""
        },
        image: {
            src: {
                rawUrl: ""
            }
        },
        text: "",
        link: ""
    },
    DF_MPe = {
        type: "accordion",
        title: "",
        subtitle: "",
        image: {
            src: {
                rawUrl: ""
            }
        },
        text: ""
    },
    DF_MQe = {
        type: "chips",
        options: [{
            text: "Suggestion",
            link: ""
        }, {
            text: "Suggestion with icon",
            image: {
                src: {
                    rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
                }
            },
            link: ""
        }, {
            text: "Suggestion with link",
            link: "https://google.com"
        }, {
            text: "Suggestion with link & icon",
            image: {
                src: {
                    rawUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/29715-200.png"
                }
            },
            link: "https://google.com"
        }]
    },
    DF_MRe = {
        type: "html",
        html: ""
    },
    DF_MSe = {
        type: "match_citations",
        citations: [{
            title: "Citation title",
            subtitle: "Citation subtitle",
            actionLink: ""
        }]
    },
    DF_MTe = {
        type: "custom_template",
        name: "",
        payload: {}
    },
    DF_MUe = {
        type: "video",
        source: {
            type: "link",
            anchor: {
                href: ""
            }
        }
    },
    DF_MVe = {
        type: "files",
        files: [{
            name: "",
            image: {
                rawUrl: ""
            },
            anchor: {
                href: ""
            }
        }]
    };
var DF_MWe = {
    BUILD_EMBED_LABEL: "dialogflow_infobot_20231115_0608_RC00",
    BUILD_BASELINE_CHANGELIST: "582633398",
    BUILD_CHANGELIST: "582633398"
};

function DF_MXe() {}
DF_MXe.prototype.payloadForTesting = function(a) {
    switch (a) {
        case "info":
            return Object.assign({}, DF_MKe);
        case "description":
            return Object.assign({}, DF_MLe);
        case "image":
            return Object.assign({}, DF_MMe);
        case "list":
            return Object.assign({}, DF_MNe);
        case "button":
            return Object.assign({}, DF_MOe);
        case "accordion":
            return Object.assign({}, DF_MPe);
        case "chips":
            return Object.assign({}, DF_MQe);
        case "html":
            return Object.assign({}, DF_MRe);
        case "match_citations":
            return Object.assign({}, DF_MSe);
        case "custom_template":
            return Object.assign({}, DF_MTe);
        case "video":
            return Object.assign({}, DF_MUe);
        case "files":
            return Object.assign({}, DF_MVe);
        case "text":
            return [];
        default:
            console.error("DF-MESSENGER", "Could not find a payload for " + a)
    }
};
DF_MXe.prototype.getBuildChangelist = function() {
    if ("BUILD_CHANGELIST" in DF_MWe) {
        var a = Number(DF_MWe.BUILD_CHANGELIST);
        a = isFinite(a) ? a : void 0
    } else a = void 0;
    return a
};
DF_MXe.prototype.getAvailableLanguages = function() {
    return Array.from(DF_Mm.keys())
};
DF_MXe.prototype.getAvailableTexts = function() {
    return Object.assign({}, DF_Mm.get("en"))
};
var DF_MYe = DF_Mp(["#df-accordion-wrapper,#df-accordion-wrapper #title{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color))}#df-accordion-wrapper{cursor:pointer;display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px);text-decoration:none}#df-accordion-wrapper .top-row{align-items:stretch;background-color:transparent;border:none;display:flex;justify-content:space-between}#df-accordion-wrapper .top-row:hover{cursor:pointer}#df-accordion-wrapper .top-row .content{display:flex}#df-accordion-wrapper #image{margin-right:16px;max-width:24px;max-height:24px}#df-accordion-wrapper #title{font-size:inherit;line-height:22px;font-weight:700;margin:0}#df-accordion-wrapper #subtitle{color:var(--df-messenger-secondary-font-color,var(--df-messenger-default-secondary-font-color));line-height:22px;text-align:left}#df-accordion-wrapper .text-content{display:flex;flex-direction:column;justify-content:space-evenly}#df-accordion-wrapper .text-row{max-height:inherit;transition:max-height .25s ease-in}#df-accordion-wrapper #text{padding-top:10px}.expand-icon{padding:8px;margin:-8px -8px -8px 0}#df-accordion-wrapper #expandIcon{color:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color));font-size:32px;transform:rotate(90deg);transition:transform .15s ease-out}#df-accordion-wrapper .word-wrap{overflow-wrap:break-word;word-break:break-word;word-wrap:break-word}#df-accordion-wrapper #expandIcon.open{font-size:32px;transform:rotate(-90deg);transition:transform .15s ease-in}#df-accordion-wrapper button:focus-visible{outline:0;position:relative}button{font-family:inherit;font-size:inherit;text-align:left;padding:0}#accordion-content.collapsed{overflow:hidden;max-height:0}#accordion-content.expanded{max-height:unset}"]);
var DF_MZe = DF_Mp([".message img,.message table{max-width:100%}.message :not(pre.code-block) > code{background-color:#e9e8e8;border-radius:6px;padding:1px 6px}.message a{text-decoration:var(--df-messenger-link-decoration,var(--df-messenger-default-link-decoration));color:var(--df-messenger-link-font-color,var(--df-messenger-default-link-font-color));background:var(--df-messenger-link-background,var(--df-messenger-link-background-color,transparent));padding:var(--df-messenger-link-padding,0);border:var(--df-messenger-link-border,none);border-radius:var(--df-messenger-link-border-radius,0)}.message table,.message table thead th:first-child{border-top-left-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0))}.message table,.message table thead th:last-child{border-top-right-radius:var(--df-messenger-table-header-border-radius,var(--df-messenger-table-border-radius,0))}.message table,.message table tbody tr:last-child td:first-child{border-bottom-left-radius:var(--df-messenger-table-border-radius,0)}.message table,.message table tbody tr:last-child td:last-child{border-bottom-right-radius:var(--df-messenger-table-border-radius,0)}.message a:visited{color:var(--df-messenger-link-visited-font-color,var(--df-messenger-default-link-font-color))}.message a:hover{color:var(--df-messenger-link-hover-font-color,var(--df-messenger-default-link-font-color))}.message table{width:var(--df-messenger-table-width,auto);border-spacing:0;border-collapse:var(--df-messenger-table-border-collapse,separate)}.message table thead th{font-size:var(--df-messenger-table-header-font-size,\n      var(--df-messenger-table-font-size,\n        var(--df-messenger-font-size,\n          var(--df-messenger-default-font-size)\n        )\n      )\n    );font-weight:var(--df-messenger-table-header-font-weight,bold);color:var(--df-messenger-table-header-font-color,var(--df-messenger-table-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color))));text-align:var(--df-messenger-table-header-align,var(--df-messenger-table-align,left));padding:var(--df-messenger-table-header-padding,var(--df-messenger-table-padding,0));border-top:var(--df-messenger-table-header-border-top,none);border-bottom:var(--df-messenger-table-header-border-bottom,none);border-left:var(--df-messenger-table-header-border-left,none);border-right:var(--df-messenger-table-header-border-right,none)}.message table thead th:first-child{border-left:var(--df-messenger-table-header-border-left-first,var(--df-messenger-table-header-border-left,none))}.message table thead th:last-child{border-right:var(--df-messenger-table-header-border-right-last,var(--df-messenger-table-header-border-right,none))}.message table thead tr{background:var(--df-messenger-table-header-background,var(--df-messenger-table-header-background-color,var(--df-messenger-table-background-color,transparent)))}.message table tbody td{font-size:var(--df-messenger-table-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );color:var(--df-messenger-table-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));text-align:var(--df-messenger-table-align,left);padding:var(--df-messenger-table-padding,0);border-top:var(--df-messenger-table-border-top,none);border-bottom:var(--df-messenger-table-border-bottom,none);border-left:var(--df-messenger-table-border-left,none);border-right:var(--df-messenger-table-border-right,none)}.message table tbody tr:first-child td{border-top:var(--df-messenger-table-border-top-first,var(--df-messenger-table-border-top,none))}.message table tbody tr:last-child td{border-bottom:var(--df-messenger-table-border-bottom-last,var(--df-messenger-table-border-bottom,none))}.message table tbody td:first-child{border-left:var(--df-messenger-table-border-left-first,var(--df-messenger-table-border-left,none))}.message table tbody td:last-child{border-right:var(--df-messenger-table-border-right-last,var(--df-messenger-table-border-right,none))}.message table tbody tr:nth-child(even){background:var(--df-messenger-table-even-background,var(--df-messenger-table-even-background-color,var(--df-messenger-table-background-color,transparent)))}.message table tbody tr:nth-child(odd){background:var(--df-messenger-table-odd-background,var(--df-messenger-table-odd-background-color,var(--df-messenger-table-background-color,transparent)))}"]);

function DF_M_e(a) {
    return function() {
        var b = DF_Mwa.apply(0, arguments),
            c = {};
        return c._$litDirective$ = a, c.values = b, c
    }
}

function DF_M0e() {}
DF_M0e.prototype.yc = function(a, b, c) {
    this.F = a;
    this.g = b;
    this.j = c
};
DF_M0e.prototype.zc = function(a, b) {
    return this.i(a, b)
};
DF_M0e.prototype.i = function(a, b) {
    return this.render.apply(this, DF_Me(b))
};
DF_Ma.Object.defineProperties(DF_M0e.prototype, {
    fa: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.g.fa
        }
    }
});

function DF_M1e(a) {
    this.value = DF_Mw;
    if (2 !== a.type) throw Error(this.constructor.Tc + "() can only be used in child bindings");
}
DF_Mf(DF_M1e, DF_M0e);
DF_M1e.prototype.render = function(a) {
    if (a === DF_Mw || void 0 === a) return this.h = void 0, this.value = a;
    if (a === DF_Mnd) return a;
    if (a === this.value) return this.h;
    this.value = a;
    a = [DF_MKc(a)];
    a.raw = a;
    var b = {};
    return this.h = (b._$litType$ = this.constructor.resultType, b.strings = a, b.values = [], b)
};
DF_M1e.Tc = "safeHTML";
DF_M1e.resultType = 1;
var DF_M2e = DF_M_e(DF_M1e);
var DF_M3e = DF_Mc(["<style>\n      @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n    </style>"]),
    DF_M4e = DF_Mc(['\n      <div class="expand-icon">\n        <span\n          class="', '"\n          id="expandIcon"\n          aria-hidden="true"\n        >chevron_right</span>\n      </div>']),
    DF_M5e = DF_Mc(['\n      <div class="image-content">\n        <img id="image" src="', '" />\n      </div>']),
    DF_M6e = DF_Mc(['\n        <div\n          id="accordion-content"\n          class="text-row ',
        '"\n          aria-labelledby="title"\n          role="region"\n        >\n          <div id="text" class="word-wrap message">', "</div>\n        </div>"
    ]),
    DF_M7e = DF_Mc('\n      ;\n      <div id="df-accordion-wrapper">\n        <button\n          @click=";"\n          id="accordion-button"\n          class="top-row focus-outline"\n          aria-controls="accordion-content"\n          aria-expanded=";"\n        >\n          <div class="content">\n            ;\n            <div class="text-content">\n              <h3 id="title" class="word-wrap">;</h3>\n              <div id="subtitle" class="word-wrap">\n                ;\n              </div>\n            </div>\n          </div>\n          ;\n        </button>\n        ;\n      </div>'.split(";"));

function DF_MF(a, b) {
    a = DF_MD.call(this, a, b, "accordion") || this;
    a.expanded = !1;
    a.title = "";
    a.subtitle = "";
    a.text = null;
    a.image = null;
    a.Ta = !1;
    return a
}
DF_Mf(DF_MF, DF_MD);
DF_MF.C = DF_MD.C;
DF_MF.m = DF_MD.m;
DF_MF.o = DF_MD.o;
DF_MF.h = DF_MD.h;
DF_MF.g = DF_MD.g;
DF_MF.v = DF_MD.v;
DF_MF.i = DF_MD.i;
DF_MF.s = DF_MD.s;
DF_MF.l = DF_MD.l;
DF_MF.u = DF_MD.u;
DF_MF.prototype.connectedCallback = function() {
    var a = this;
    DF_MD.prototype.connectedCallback.call(this);
    var b;
    (null == (b = this.image) ? 0 : b.rawUrl) && DF_MYa(this.image.rawUrl, function() {
        a.Ta = !0
    }, function() {
        a.Ta = !1
    })
};
DF_MF.prototype.pa = function(a) {
    DF_MD.prototype.pa.call(this, a);
    this.expanded && DF_M4a(this)
};
DF_MF.prototype.render = function() {
    var a = DF_Mv(DF_M3e),
        b = this.text ? DF_Mv(DF_M4e, this.expanded ? "material-icons open" : "material-icons") : void 0,
        c, d = (null == (c = this.image) ? 0 : c.rawUrl) && this.Ta ? DF_Mv(DF_M5e, this.image.rawUrl) : void 0;
    c = this.text ? DF_Mv(DF_M6e, this.expanded ? "expanded" : "collapsed", DF_M2e(this.text)) : void 0;
    return DF_Mv(DF_M7e, a, this.h, this.expanded, d, this.title, this.subtitle, b, c)
};
DF_MF.prototype.h = function() {
    this.text && (DF_Ml(this, "df-accordion-clicked", {}), this.expanded = !this.expanded)
};
var DF_M8e = DF_MF;
DF_M8e.j = [DF_MYe, DF_MZe, DF_Mz];
DF_Mj([DF_Mr({
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M8e.prototype, "expanded", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_M8e.prototype, "title", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_M8e.prototype, "subtitle", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_M8e.prototype, "text", void 0);
DF_Mj([DF_Mr({
    type: Object
}), DF_Mk("design:type", Object)], DF_M8e.prototype, "image", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M8e.prototype, "Ta", void 0);
DF_M8e = DF_Mj([DF_Mo("df-accordion"), DF_Mk("design:paramtypes", [String, String])], DF_M8e);
var DF_M9e = DF_Mp(["#dfButtonAnchorWrapper,#dfButtonWrapper{align-items:center;background:0 0;border:var(--df-messenger-button-border,none);border-radius:var(--df-messenger-button-border-radius,var(--df-messenger-default-border-radius));box-sizing:border-box;cursor:pointer;display:flex;color:var(--df-messenger-button-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-family:var(--df-messenger-button-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-button-font-size,\n      var(--df-messenger-default-font-size)\n    );padding:var(--df-messenger-button-padding,var(--df-messenger-card-padding,16px));text-decoration:none;width:100%;overflow:hidden}#dfButtonAnchorWrapper:hover > .df-button-icon,#dfButtonAnchorWrapper:hover > .text,#dfButtonWrapper:hover > .df-button-icon,#dfButtonWrapper:hover > .text{opacity:.5}.text{padding-left:var(--df-messenger-button-icon-spacing,12px)}.df-button-icon,.df-button-icon #materialButtonIcon{height:var(--df-messenger-button-icon-font-size,24px);width:var(--df-messenger-button-icon-font-size,24px)}.df-button-image img{display:block;height:var(--df-messenger-button-image-size,var(--df-messenger-button-icon-font-size,24px));width:var(--df-messenger-button-image-size,var(--df-messenger-button-icon-font-size,24px));margin:var(--df-messenger-button-image-offset,0)}a#dfButtonAnchorWrapper:focus-visible,button#dfButtonWrapper:focus-visible{outline:0;position:relative}"]);

function DF_MG() {
    return DF_MD.apply(this, arguments) || this
}
DF_Mf(DF_MG, DF_MD);
DF_MG.C = DF_MD.C;
DF_MG.m = DF_MD.m;
DF_MG.o = DF_MD.o;
DF_MG.h = DF_MD.h;
DF_MG.g = DF_MD.g;
DF_MG.v = DF_MD.v;
DF_MG.i = DF_MD.i;
DF_MG.s = DF_MD.s;
DF_MG.l = DF_MD.l;
DF_MG.u = DF_MD.u;
DF_Mj([DF_MUa({
    context: "df-instance",
    subscribe: !0
}), DF_Mk("design:type", Object)], DF_MG.prototype, "Ga", void 0);
var DF_M$e = {
        event: {
            event: ""
        },
        languageCode: ""
    },
    DF_Maf = {
        text: {
            text: ""
        },
        languageCode: ""
    },
    DF_Mbf = {
        audio: {
            audio: "",
            config: {
                audioEncoding: 0,
                sampleRateHertz: 48E3,
                model: "latest_short"
            }
        },
        languageCode: ""
    };

function DF_Mcf(a, b) {
    var c = Object.assign({}, DF_Maf);
    c.text.text = a;
    c.languageCode = b || "";
    return c
}

function DF_Mdf(a, b) {
    var c = Object.assign({}, DF_M$e);
    c.event.event = a;
    c.languageCode = b || "";
    return c
};
/*

 Copyright 2018 Google LLC
 SPDX-License-Identifier: BSD-3-Clause
*/
function DF_Mef(a) {
    var b;
    if (1 !== a.type || "style" !== a.name || 2 < (null == (b = a.strings) ? void 0 : b.length)) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
}
DF_Mf(DF_Mef, DF_M0e);
DF_Mef.prototype.render = function(a) {
    return Object.keys(a).reduce(function(b, c) {
        var d = a[c];
        if (null == d) return b;
        c = c.includes("-") ? c : c.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
        return b + (c + ":" + d + ";")
    }, "")
};
DF_Mef.prototype.i = function(a, b) {
    b = DF_Md(b).next().value;
    a = a.element.style;
    void 0 === this.h && (this.h = new Set);
    for (var c = DF_Md(this.h), d = c.next(); !d.done; d = c.next()) d = d.value, null == b[d] && (this.h.delete(d), d.includes("-") ? a.removeProperty(d) : a[d] = null);
    for (var e in b) c = b[e], null != c && (this.h.add(e), d = "string" === typeof c && c.endsWith(" !important"), e.includes("-") || d ? a.setProperty(e, d ? c.slice(0, -11) : c, d ? "important" : "") : a[e] = c);
    return DF_Mnd
};
var DF_Mff = DF_M_e(DF_Mef);
var DF_Mgf = DF_Mc('\n        <a\n          href=";"\n          class="focus-outline"\n          target=";"\n          rel=";"\n          id="dfButtonAnchorWrapper"\n          @click=";"\n        >\n          <span class="visually-hidden">;</span>\n          ;\n          <span class="text">\n            ;\n          </span>\n        </a>'.split(";")),
    DF_Mhf = DF_Mc(['\n        <button\n          class="focus-outline"\n          id="dfButtonWrapper"\n          @click="', '"\n        >\n          ', '\n          <span class="text">\n            ',
        "\n          </span>\n        </button>\n      "
    ]),
    DF_Mif = DF_Mc(['\n        <div class="df-button-image">\n          <img src="', '" />\n        </div>']),
    DF_Mjf = DF_Mc(['\n      <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div class="df-button-icon">\n        <span\n          aria-hidden="true"\n          class="material-icons"\n          id="materialButtonIcon"\n          style=', "\n        >\n          ", "\n        </span>\n      </div>"]);

function DF_MH(a, b) {
    a = DF_MG.call(this, a, b, "button") || this;
    a.anchor = null;
    a.text = "";
    a.icon = null;
    a.image = null;
    a.event = void 0;
    a.mode = "normal";
    return a
}
DF_Mf(DF_MH, DF_MG);
DF_MH.C = DF_MG.C;
DF_MH.m = DF_MG.m;
DF_MH.o = DF_MG.o;
DF_MH.h = DF_MG.h;
DF_MH.g = DF_MG.g;
DF_MH.v = DF_MG.v;
DF_MH.i = DF_MG.i;
DF_MH.s = DF_MG.s;
DF_MH.l = DF_MG.l;
DF_MH.u = DF_MG.u;
DF_MH.prototype.connectedCallback = function() {
    var a = this;
    DF_MG.prototype.connectedCallback.call(this);
    var b;
    (null == (b = this.image) ? 0 : b.rawUrl) ? DF_MYa(this.image.rawUrl, function() {
        a.Ha = !0
    }, function() {
        a.Ha = !1
    }): this.Ha = !1
};
DF_MH.prototype.h = function() {
    var a = this,
        b, c, d, e, f, g, h, k;
    return DF_Mh(function(l) {
        c = (null == (b = a.event) ? void 0 : b.languageCode) || a.languageCode;
        DF_Ml(a, "df-button-clicked", Object.assign({}, {
            event: null == (d = a.event) ? void 0 : d.event
        }, (null == (e = a.event) ? 0 : e.event) ? {
            languageCode: c
        } : {}, {
            actionLink: null == (f = a.anchor) ? void 0 : f.href
        }));
        "blocking" === a.mode && a.Ga && (a.Ga.canAcceptInput = !0);
        if (null != (g = a.event) && g.event) return h = DF_Mdf(a.event.event, c), DF_Mg(l, null == (k = a.Ga) ? void 0 : k.presenter.sendRequest(h), 0);
        l.g =
            0
    })
};
DF_MH.prototype.render = function() {
    if (this.anchor) {
        var a = DF_Mn(this.languageCode, "opensInANewTab");
        return DF_Mv(DF_Mgf, this.anchor.href, this.anchor.target, this.anchor.rel, this.h, a, DF_Mkf(this), this.text || "")
    }
    return DF_Mv(DF_Mhf, this.h, DF_Mkf(this), this.text || "")
};

function DF_Mkf(a) {
    if (void 0 === a.Ha) return null;
    var b;
    if ((null == (b = a.image) ? 0 : b.rawUrl) && a.Ha) return DF_Mv(DF_Mif, a.image.rawUrl);
    var c;
    b = DF_Mff({
        color: (null == (c = a.icon) ? void 0 : c.color) || "#444746"
    });
    var d;
    return DF_Mv(DF_Mjf, b, (null == (d = a.icon) ? void 0 : d.type) || "forward_arrow")
}
var DF_Mlf = DF_MH;
DF_Mlf.j = [DF_M9e, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mlf.prototype, "anchor", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mlf.prototype, "text", void 0);
DF_Mj([DF_Mr({
    type: Object
}), DF_Mk("design:type", Object)], DF_Mlf.prototype, "icon", void 0);
DF_Mj([DF_Mr({
    type: Object
}), DF_Mk("design:type", Object)], DF_Mlf.prototype, "image", void 0);
DF_Mj([DF_Mr({
    type: Object
}), DF_Mk("design:type", Object)], DF_Mlf.prototype, "event", void 0);
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_Mlf.prototype, "mode", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Boolean)], DF_Mlf.prototype, "Ha", void 0);
DF_Mlf = DF_Mj([DF_Mo("df-button"), DF_Mk("design:paramtypes", [String, String])], DF_Mlf);
var DF_Mmf = DF_Mp([":host{--df-messenger-card-internal-border-radius:var(--df-messenger-card-border-radius,\n      var(--df-messenger-default-border-radius)\n    );--df-messenger-card-internal-border-top-left-radius:var(--df-messenger-card-border-top-left-radius,\n      var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-border-top-right-radius:var(--df-messenger-card-border-top-right-radius,\n    var(--df-messenger-card-internal-border-radius)\n  );--df-messenger-card-internal-border-bottom-left-radius:var(--df-messenger-card-border-bottom-left-radius,\n      var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-border-bottom-right-radius:var(--df-messenger-card-border-bottom-right-radius,\n      var(--df-messenger-card-internal-border-radius)\n    );--df-messenger-card-internal-button-radius:var(--df-messenger-button-border-radius,\n    var(--df-messenger-default-border-radius)\n  )}.card-wrapper{background:var(--df-messenger-card-background,var(--df-messenger-card-background-color,#fff));border-top-left-radius:var(--df-messenger-card-internal-border-top-left-radius);border-top-right-radius:var(--df-messenger-card-internal-border-top-right-radius);border-bottom-left-radius:var(--df-messenger-card-internal-border-bottom-left-radius);border-bottom-right-radius:var(--df-messenger-card-internal-border-bottom-right-radius);box-shadow:var(--df-messenger-card-box-shadow,var(--df-messenger-default-box-shadow));border:var(--df-messenger-card-border,var(--df-messenger-default-border))}:host(.first) .card-wrapper{border-bottom-left-radius:var(--df-messenger-card-stack-border-bottom-left-radius,var(--df-messenger-card-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-card-stack-border-bottom-right-radius,var(--df-messenger-card-internal-border-bottom-right-radius))}:host(.mid) .card-wrapper{border-top-left-radius:var(--df-messenger-card-stack-border-top-left-radius,var(--df-messenger-card-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-card-stack-border-top-right-radius,var(--df-messenger-card-internal-border-top-right-radius));border-bottom-left-radius:var(--df-messenger-card-stack-border-bottom-left-radius,var(--df-messenger-card-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-card-stack-border-bottom-right-radius,var(--df-messenger-card-internal-border-bottom-right-radius))}:host(.last) .card-wrapper{border-top-left-radius:var(--df-messenger-card-stack-border-top-left-radius,var(--df-messenger-card-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-card-stack-border-top-right-radius,var(--df-messenger-card-internal-border-top-right-radius))}.card-wrapper.button{border:none;border-top-left-radius:var(--df-messenger-card-internal-button-radius)!important;border-top-right-radius:var(--df-messenger-card-internal-button-radius)!important;border-bottom-left-radius:var(--df-messenger-card-internal-button-radius)!important;border-bottom-right-radius:var(--df-messenger-card-internal-button-radius)!important}.card-wrapper.video{overflow:hidden;border:var(--df-messenger-video-border,var(--df-messenger-card-border,var(--df-messenger-default-border)))}"]);
var DF_Mnf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="card-wrapper ', '">\n        ', "\n      </div>"]);

function DF_MI(a, b) {
    a = DF_MD.call(this, a, b, "customCard") || this;
    a.elements = [];
    return a
}
DF_Mf(DF_MI, DF_MD);
DF_MI.C = DF_MD.C;
DF_MI.m = DF_MD.m;
DF_MI.o = DF_MD.o;
DF_MI.h = DF_MD.h;
DF_MI.g = DF_MD.g;
DF_MI.v = DF_MD.v;
DF_MI.i = DF_MD.i;
DF_MI.s = DF_MD.s;
DF_MI.l = DF_MD.l;
DF_MI.u = DF_MD.u;
DF_MI.prototype.Da = function(a) {
    a.has("elements") && this.elements.some(function(b) {
        return "list" === (null == b ? void 0 : b.type)
    }) && this.setAttribute("role", "list")
};
DF_MI.prototype.render = function() {
    if (this.elements && this.elements.length) {
        var a = DF_Mn(this.languageCode, "agentSays");
        return DF_Mv(DF_Mnf, a, 1 === this.elements.length ? this.elements[0].type : "", this.elements)
    }
};
var DF_Mof = DF_MI;
DF_Mof.j = [DF_Mmf, DF_Mz];
DF_Mj([DF_Mr({
    type: Array
}), DF_Mk("design:type", Array)], DF_Mof.prototype, "elements", void 0);
DF_Mof = DF_Mj([DF_Mo("df-card"), DF_Mk("design:paramtypes", [String, String])], DF_Mof);
var DF_Mpf = DF_Mp([".df-chips-wrapper{padding:var(--df-messenger-chips-spacing,10px) 0;display:flex;gap:var(--df-messenger-chips-distance,8px);row-gap:var(--df-messenger-chips-distance,8px);flex-wrap:wrap;justify-content:var(--df-messenger-message-bot-align,flex-start)}:host(.first-child) .df-chips-wrapper{padding-top:0}:host(.last-child) .df-chips-wrapper{padding-bottom:0}.df-chips-wrapper.clicked{display:none}.chip{align-items:center;background:var(--df-messenger-chips-background,var(--df-messenger-chips-background-color,#fff));border:1px solid;border-color:var(--df-messenger-chips-border-color,var(--df-messenger-default-border-color));border-radius:var(--df-messenger-chips-border-radius,999px);box-shadow:var(--df-messenger-chips-box-shadow,var(--df-messenger-default-box-shadow));display:inline-flex;padding:var(--df-messenger-chips-padding,6px 16px);overflow:hidden;max-width:100%;position:relative}.chip .focus-outline:focus-visible{position:static}.chip .focus-outline:focus-visible::before{border-radius:var(--df-messenger-chips-border-radius,999px)}.chip:hover{background:var(--df-messenger-chips-background-hover,var(--df-messenger-chips-hover-background,var(--df-messenger-chips-hover-background-color,rgba(68,71,70,.08))));border-color:var(--df-messenger-chips-border-color-hover,var(--df-messenger-chips-border-color,var(--df-messenger-default-border-color)))}.chip a,.chip button{background:0 0;border:none;padding:0;cursor:pointer;display:inline-flex;min-width:0;color:var(--df-messenger-chips-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-family:var(--df-messenger-chips-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-chips-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-chips-font-weight,normal);text-decoration:none;vertical-align:bottom}.chip:hover a,.chip:hover button{font-weight:var(--df-messenger-chips-font-weight-hover,var(--df-messenger-chips-font-weight,normal))}.chip .text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.chip img{margin-left:var(--df-messenger-chips-icon-offset,-8px);margin-right:var(--df-messenger-chips-icon-spacing,8px);max-height:var(--df-messenger-chips-icon-font-size,18px);max-width:var(--df-messenger-chips-icon-font-size,18px)}.chip .icon{margin-left:var(--df-messenger-chips-icon-spacing,8px);margin-right:var(--df-messenger-chips-icon-offset,-8px);height:var(--df-messenger-chips-icon-font-size,18px);width:var(--df-messenger-chips-icon-font-size,18px);align-self:center}.chip .icon svg{width:inherit;height:inherit;fill:var(--df-messenger-chips-icon-font-color,var(--df-messenger-chips-font-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))))}"]);
var DF_Mqf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="df-chips-wrapper" role="list">\n        ', "\n      </div>\n    "]);

function DF_MJ(a, b) {
    a = DF_MG.call(this, a, b, "chips") || this;
    a.chips = [];
    return a
}
DF_Mf(DF_MJ, DF_MG);
DF_MJ.C = DF_MG.C;
DF_MJ.m = DF_MG.m;
DF_MJ.o = DF_MG.o;
DF_MJ.h = DF_MG.h;
DF_MJ.g = DF_MG.g;
DF_MJ.v = DF_MG.v;
DF_MJ.i = DF_MG.i;
DF_MJ.s = DF_MG.s;
DF_MJ.l = DF_MG.l;
DF_MJ.u = DF_MG.u;
DF_MJ.prototype.isVisible = function() {
    return 0 < this.chips.length && !this.clicked
};
DF_MJ.prototype.render = function() {
    var a = this;
    if (!this.chips.length || this.clicked) return null;
    var b = DF_Mn(this.languageCode, "agentSays"),
        c = this.chips.map(function(d) {
            return d.render(a, a.Ga)
        });
    return DF_Mv(DF_Mqf, b, c)
};
var DF_Mrf = DF_MJ;
DF_Mrf.j = [DF_Mpf, DF_Mz];
DF_Mj([DF_Mr({
    type: Array
}), DF_Mk("design:type", Array)], DF_Mrf.prototype, "chips", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Boolean)], DF_Mrf.prototype, "clicked", void 0);
DF_Mrf = DF_Mj([DF_Mo("df-chips"), DF_Mk("design:paramtypes", [String, String])], DF_Mrf);
var DF_Msf = DF_Mp([".citations-wrapper{padding:var(--df-messenger-citations-spacing,10px) 0}:host(.first-child) .citations-wrapper{padding-top:0}:host(.last-child) .citations-wrapper{padding-bottom:0}.citations-message{display:var(--df-messenger-citations-message-display,flex);color:var(--df-messenger-citations-message-font-color,#041e49);font-size:var(--df-messenger-citations-message-font-size, 12px);margin-bottom:var(--df-messenger-citations-distance,8px);justify-content:var(--df-messenger-message-bot-align,flex-start)}.citations-list{display:flex;gap:var(--df-messenger-citations-distance,8px);row-gap:var(--df-messenger-citations-distance,8px);flex-direction:var(--df-messenger-citations-flex-direction,row);flex-wrap:wrap;align-items:var(--df-messenger-message-bot-align,flex-start);justify-content:var(--df-messenger-message-bot-align,flex-start)}.citation{border:1px solid;border-color:var(--df-messenger-citations-border-color,#1a73e8);border-radius:var(--df-messenger-citations-border-radius,4px);padding:var(--df-messenger-citations-padding,8px);text-decoration:none;background:var(--df-messenger-citations-background,var(--df-messenger-citations-background-color,#fff));box-shadow:var(--df-messenger-citations-box-shadow,none);color:var(--df-messenger-citations-font-color,#1a73e8);font-family:var(--df-messenger-citations-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-citations-font-size, 11px);font-weight:var(--df-messenger-citations-font-weight,normal);display:flex;align-items:center;overflow:hidden;max-width:100%;box-sizing:border-box}.citation.focus-outline:focus-visible::before{border-radius:var(--df-messenger-citations-border-radius,999px)}.citation:hover{background:var(--df-messenger-citations-background-hover,var(--df-messenger-citations-hover-background,var(--df-messenger-citations-hover-background-color,rgba(68,71,70,.08))));border-color:var(--df-messenger-citations-border-color-hover,var(--df-messenger-citations-border-color,#1a73e8));font-weight:var(--df-messenger-citations-font-weight-hover,var(--df-messenger-citations-font-weight,normal))}.citation .icon{margin-left:var(--df-messenger-citations-icon-offset,0);margin-right:var(--df-messenger-citations-icon-spacing,8px);width:var(--df-messenger-citations-icon-font-size,14px);height:var(--df-messenger-citations-icon-font-size,14px)}.citation .icon svg{fill:var(--df-messenger-citations-icon-font-color,var(--df-messenger-citations-font-color,#1a73e8));width:inherit;height:inherit}.citation .title{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}"]);
var DF_Mtf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="citations-wrapper" role="list">\n        <div class="citations-message">\n          ', '\n        </div>\n        <div class="citations-list">\n          ', "\n        </div>\n      </div>\n    "]),
    DF_Muf = DF_Mc('\n      <a\n        class="citation focus-outline"\n        href=";"\n        target=";"\n        rel=";"\n        @click=;\n        role="listitem"\n      >\n        <span class="visually-hidden">;</span>\n        <span class="icon">;</span>\n        <span class="title">;</span>\n      </a>'.split(";"));

function DF_MK(a, b) {
    a = DF_MD.call(this, a, b, "match_citations") || this;
    a.citations = [];
    return a
}
DF_Mf(DF_MK, DF_MD);
DF_MK.C = DF_MD.C;
DF_MK.m = DF_MD.m;
DF_MK.o = DF_MD.o;
DF_MK.h = DF_MD.h;
DF_MK.g = DF_MD.g;
DF_MK.v = DF_MD.v;
DF_MK.i = DF_MD.i;
DF_MK.s = DF_MD.s;
DF_MK.l = DF_MD.l;
DF_MK.u = DF_MD.u;
DF_MK.prototype.render = function() {
    var a = this;
    if (0 === this.citations.length) return null;
    var b = DF_Mn(this.languageCode, "agentSays"),
        c = DF_Mn(this.languageCode, "citationsMessage"),
        d = this.citations.map(function(e) {
            return DF_Mvf(a, e)
        });
    return DF_Mv(DF_Mtf, b, c, d)
};

function DF_Mvf(a, b) {
    var c = DF_Mn(a.languageCode, "opensInANewTab");
    return DF_Mv(DF_Muf, b.anchor.href, b.anchor.target, b.anchor.rel, function() {
        var d;
        DF_Ml(a, "df-citation-clicked", {
            actionLink: null == (d = b.anchor) ? void 0 : d.href
        })
    }, c, DF_Mge, b.title)
}
var DF_Mwf = DF_MK;
DF_Mwf.j = [DF_Msf, DF_Mz];
DF_Mj([DF_Mr({
    type: Array
}), DF_Mk("design:type", Array)], DF_Mwf.prototype, "citations", void 0);
DF_Mwf = DF_Mj([DF_Mo("df-citations"), DF_Mk("design:paramtypes", [String, String])], DF_Mwf);
var DF_Mxf = DF_Mc(["", ""]);

function DF_ML(a, b) {
    a = DF_MD.call(this, a, b, "custom_template") || this;
    a.elementName = null;
    a.payload = null;
    a.responseId = null;
    a.element = null;
    return a
}
DF_Mf(DF_ML, DF_MD);
DF_ML.C = DF_MD.C;
DF_ML.m = DF_MD.m;
DF_ML.o = DF_MD.o;
DF_ML.h = DF_MD.h;
DF_ML.g = DF_MD.g;
DF_ML.v = DF_MD.v;
DF_ML.i = DF_MD.i;
DF_ML.s = DF_MD.s;
DF_ML.l = DF_MD.l;
DF_ML.u = DF_MD.u;
DF_ML.prototype.connectedCallback = function() {
    DF_MD.prototype.connectedCallback.call(this);
    this.elementName && customElements.get(this.elementName) && (this.element = document.createElement(this.elementName), this.element.dfPayload = this.payload, this.element.dfResponseId = this.responseId)
};
DF_ML.prototype.render = function() {
    return this.element ? DF_Mv(DF_Mxf, this.element) : null
};
var DF_Myf = DF_ML;
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_Myf.prototype, "elementName", void 0);
DF_Mj([DF_Mr({
    type: Object
}), DF_Mk("design:type", Object)], DF_Myf.prototype, "payload", void 0);
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_Myf.prototype, "responseId", void 0);
DF_Myf = DF_Mj([DF_Mo("df-custom-template"), DF_Mk("design:paramtypes", [String, String])], DF_Myf);
var DF_Mzf = DF_Mp(["#description-wrapper{display:flex;flex-direction:column;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));font-size:var(--df-messenger-default-font-size);padding:var(--df-messenger-card-padding,16px)}.description-line{padding-top:8px;word-break:break-word}.title{color:inherit;font-size:inherit;font-weight:700;margin:0}"]);
var DF_MAf = DF_Mc(['<h3 class="title">\n      ', "\n    </h3>"]),
    DF_MBf = DF_Mc(['<div class="description-line">\n        ', "\n      </div>"]),
    DF_MCf = DF_Mc(['\n      <div id="description-wrapper">\n        ', "\n        ", "\n      </div>\n    "]);

function DF_MM(a, b) {
    a = DF_MD.call(this, a, b, "description") || this;
    a.title = "";
    a.text = [];
    return a
}
DF_Mf(DF_MM, DF_MD);
DF_MM.C = DF_MD.C;
DF_MM.m = DF_MD.m;
DF_MM.o = DF_MD.o;
DF_MM.h = DF_MD.h;
DF_MM.g = DF_MD.g;
DF_MM.v = DF_MD.v;
DF_MM.i = DF_MD.i;
DF_MM.s = DF_MD.s;
DF_MM.l = DF_MD.l;
DF_MM.u = DF_MD.u;
DF_MM.prototype.render = function() {
    if (this.text || this.title) {
        var a = this.title ? DF_Mv(DF_MAf, this.title) : void 0,
            b, c = null == (b = this.text) ? void 0 : b.map(function(d) {
                return DF_Mv(DF_MBf, d)
            });
        return DF_Mv(DF_MCf, a, c)
    }
};
var DF_MDf = DF_MM;
DF_MDf.j = [DF_Mzf, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_MDf.prototype, "title", void 0);
DF_Mj([DF_Mr({
    type: Array
}), DF_Mk("design:type", Object)], DF_MDf.prototype, "text", void 0);
DF_MDf = DF_Mj([DF_Mo("df-description"), DF_Mk("design:paramtypes", [String, String])], DF_MDf);
var DF_MEf = DF_Mc(['<hr class="divider">']);

function DF_MN(a, b) {
    return DF_MD.call(this, a, b, "divider") || this
}
DF_Mf(DF_MN, DF_MD);
DF_MN.C = DF_MD.C;
DF_MN.m = DF_MD.m;
DF_MN.o = DF_MD.o;
DF_MN.h = DF_MD.h;
DF_MN.g = DF_MD.g;
DF_MN.v = DF_MD.v;
DF_MN.i = DF_MD.i;
DF_MN.s = DF_MD.s;
DF_MN.l = DF_MD.l;
DF_MN.u = DF_MD.u;
DF_MN.prototype.ma = function() {
    return this
};
DF_MN.prototype.render = function() {
    return DF_Mv(DF_MEf)
};
var DF_MFf = DF_MN;
DF_MFf = DF_Mj([DF_Mo("df-divider"), DF_Mk("design:paramtypes", [String, String])], DF_MFf);
var DF_MGf = DF_Mp([".files-wrapper{padding:var(--df-messenger-files-spacing,10px) 0;display:flex;justify-content:var(--df-messenger-message-bot-align,flex-start)}:host(.first-child) .files-wrapper{padding-top:0}:host(.last-child) .files-wrapper{padding-bottom:0}.files-list{display:flex;min-width:0;gap:var(--df-messenger-files-distance,8px);row-gap:var(--df-messenger-files-distance,8px);flex-direction:var(--df-messenger-files-flex-direction,row);flex-wrap:wrap;align-items:var(--df-messenger-message-bot-align,flex-start);justify-content:var(--df-messenger-message-bot-align,flex-start)}.file{background:var(--df-messenger-files-background,var(--df-messenger-files-background-color,#fff));border:var(--df-messenger-files-border,var(--df-messenger-default-border));border-radius:var(--df-messenger-files-border-radius,999px);box-shadow:var(--df-messenger-files-box-shadow,var(--df-messenger-default-box-shadow));padding:var(--df-messenger-files-padding,6px 16px);overflow:hidden;max-width:100%;box-sizing:border-box;position:relative}.file .focus-outline:focus-visible{position:static}.file .focus-outline:focus-visible::before{border-radius:var(--df-messenger-files-border-radius,999px)}.file:hover{background:var(--df-messenger-files-background-hover,rgba(68,71,70,.08));border:var(--df-messenger-files-border-hover,var(--df-messenger-files-border,var(--df-messenger-default-border)))}.file-content{display:flex;align-items:center;color:var(--df-messenger-files-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-family:var(--df-messenger-files-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-files-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-files-font-weight,normal);text-decoration:none}.file:hover a{font-weight:var(--df-messenger-files-font-weight-hover,var(--df-messenger-files-font-weight,normal))}.file-content img{padding-right:var(--df-messenger-files-text-spacing,8px);margin:var(--df-messenger-files-image-offset,0 0 0 -8px);width:var(--df-messenger-files-image-size,18px);height:var(--df-messenger-files-image-size,18px)}.file-content .text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.file-content .icon{padding-left:var(--df-messenger-files-text-spacing,8px);margin:var(--df-messenger-files-icon-offset,0 -8px 0 0);height:var(--df-messenger-files-icon-size,18px);width:var(--df-messenger-files-icon-size,18px)}.file-content .icon svg{width:inherit;height:inherit;fill:var(--df-messenger-files-icon-font-color,var(--df-messenger-default-icon-font-color))}"]);
var DF_MHf = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="files-wrapper">\n        <div class="files-list"  role="list">\n          ', "\n        </div>\n      </div>\n    "]),
    DF_MIf = DF_Mc(['\n      <span role="listitem" class="file focus-outline">\n        ', "\n      </span>"]),
    DF_MJf = DF_Mc(['<img src="', '" aria-hidden="true">']),
    DF_MKf = DF_Mc('\n        <a\n          class="file-content focus-outline"\n          href=";"\n          target=";"\n          rel=";"\n          @click=;\n          download\n        >\n          ;\n          <span class="text">;</span>\n          <span class="icon">;</span>\n        </a>'.split(";")),
    DF_MLf = DF_Mc(['\n      <span class="file-content">\n        ', '\n        <span class="text">', "</span>\n      </span>"]);

function DF_MO(a, b) {
    a = DF_MD.call(this, a, b, "files") || this;
    a.files = [];
    return a
}
DF_Mf(DF_MO, DF_MD);
DF_MO.C = DF_MD.C;
DF_MO.m = DF_MD.m;
DF_MO.o = DF_MD.o;
DF_MO.h = DF_MD.h;
DF_MO.g = DF_MD.g;
DF_MO.v = DF_MD.v;
DF_MO.i = DF_MD.i;
DF_MO.s = DF_MD.s;
DF_MO.l = DF_MD.l;
DF_MO.u = DF_MD.u;
DF_MO.prototype.render = function() {
    var a = this,
        b = DF_Mn(this.languageCode, "agentSays"),
        c = this.files.map(function(d) {
            return DF_Mv(DF_MIf, DF_MMf(a, d))
        });
    return DF_Mv(DF_MHf, b, c)
};

function DF_MMf(a, b) {
    var c, d = (null == (c = b.image) ? 0 : c.rawUrl) ? DF_Mv(DF_MJf, b.image.rawUrl) : null;
    return b.anchor ? DF_Mv(DF_MKf, b.anchor.href, b.anchor.target, b.anchor.rel, function() {
        var e;
        DF_Ml(a, "df-file-clicked", {
            actionLink: null == (e = b.anchor) ? void 0 : e.href
        })
    }, d, b.name, DF_Mme) : DF_Mv(DF_MLf, d, b.name)
}
var DF_MNf = DF_MO;
DF_MNf.j = [DF_MGf, DF_Mz];
DF_Mj([DF_Mr({
    type: Array
}), DF_Mk("design:type", Array)], DF_MNf.prototype, "files", void 0);
DF_MNf = DF_Mj([DF_Mo("df-files"), DF_Mk("design:paramtypes", [String, String])], DF_MNf);
var DF_MOf = DF_Mp([".markdown :first-child{margin-top:0}.markdown :last-child{margin-bottom:0}"]);
var DF_MPf = DF_Mp([":host{--df-messenger-message-internal-border-radius:var(--df-messenger-message-border-radius,\n      var(--df-messenger-default-border-radius)\n    );--df-messenger-message-internal-border-top-left-radius:var(--df-messenger-message-border-top-left-radius,\n      var(--df-messenger-message-internal-border-radius)\n    );--df-messenger-message-internal-border-top-right-radius:var(--df-messenger-message-border-top-right-radius,\n    var(--df-messenger-message-internal-border-radius)\n  );--df-messenger-message-internal-border-bottom-left-radius:var(--df-messenger-message-border-bottom-left-radius,\n      var(--df-messenger-message-internal-border-radius)\n    );--df-messenger-message-internal-border-bottom-right-radius:var(--df-messenger-message-border-bottom-right-radius,\n      var(--df-messenger-message-internal-border-radius)\n    )}.message{font-family:var(--df-messenger-message-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-message-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );line-height:var(--df-messenger-message-line-height, normal);word-break:break-word;word-wrap:break-word}.message.bot-message{padding:var(--df-messenger-message-bot-padding,var(--df-messenger-message-padding,12px));border-top-left-radius:var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius));border-bottom-left-radius:var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius));background:var(--df-messenger-message-bot-background,var(--df-messenger-message-bot-background-color,#ecf3fe));border:var(--df-messenger-message-bot-border,var(--df-messenger-message-border,none));color:var(--df-messenger-message-bot-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-weight:var(--df-messenger-message-bot-font-weight,var(--df-messenger-message-font-weight,normal))}.message.user-message{padding:var(--df-messenger-message-user-padding,var(--df-messenger-message-padding,12px));border-top-left-radius:var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius));border-top-right-radius:var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius));border-bottom-left-radius:var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius));border-bottom-right-radius:var(--df-messenger-message-user-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius));background:var(--df-messenger-message-user-background,var(--df-messenger-message-user-background-color,#e1e3e1));border:var(--df-messenger-message-user-border,var(--df-messenger-message-border,none));color:var(--df-messenger-message-user-font-color,var(--df-messenger-font-color,var(--df-messenger-default-font-color)));font-weight:var(--df-messenger-message-user-font-weight,var(--df-messenger-message-font-weight,normal))}:host(.first) .message.bot-message{border-bottom-left-radius:var(--df-messenger-message-bot-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-bot-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.mid) .message.bot-message{border-top-left-radius:var(--df-messenger-message-bot-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-bot-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))));border-bottom-left-radius:var(--df-messenger-message-bot-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-bot-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-bot-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-bot-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.last) .message.bot-message{border-top-left-radius:var(--df-messenger-message-bot-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-bot-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-bot-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-bot-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))))}:host(.first) .message.user-message{border-bottom-left-radius:var(--df-messenger-message-user-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-user-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-user-border-bottom-right-radius,ar(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.mid) .message.user-message{border-top-left-radius:var(--df-messenger-message-user-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-user-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))));border-bottom-left-radius:var(--df-messenger-message-user-stack-border-bottom-left-radius,var(--df-messenger-message-stack-border-bottom-left-radius,var(--df-messenger-message-user-border-bottom-left-radius,var(--df-messenger-message-internal-border-bottom-left-radius))));border-bottom-right-radius:var(--df-messenger-message-user-stack-border-bottom-right-radius,var(--df-messenger-message-stack-border-bottom-right-radius,var(--df-messenger-message-user-border-bottom-right-radius,var(--df-messenger-message-internal-border-bottom-right-radius))))}:host(.last) .message.user-message{border-top-left-radius:var(--df-messenger-message-user-stack-border-top-left-radius,var(--df-messenger-message-stack-border-top-left-radius,var(--df-messenger-message-user-border-top-left-radius,var(--df-messenger-message-internal-border-top-left-radius))));border-top-right-radius:var(--df-messenger-message-user-stack-border-top-right-radius,var(--df-messenger-message-stack-border-top-right-radius,var(--df-messenger-message-user-border-top-right-radius,var(--df-messenger-message-internal-border-top-right-radius))))}"]);
var DF_MQf = DF_Mc([""]),
    DF_MRf = DF_Mc(['\n      <span class="visually-hidden">\n        ', '\n      </span>\n      <div class="message bot-message">\n        ', "\n      </div>"]);

function DF_MP(a, b) {
    a = DF_MD.call(this, a, b, "html") || this;
    a.html = null;
    return a
}
DF_Mf(DF_MP, DF_MD);
DF_MP.C = DF_MD.C;
DF_MP.m = DF_MD.m;
DF_MP.o = DF_MD.o;
DF_MP.h = DF_MD.h;
DF_MP.g = DF_MD.g;
DF_MP.v = DF_MD.v;
DF_MP.i = DF_MD.i;
DF_MP.s = DF_MD.s;
DF_MP.l = DF_MD.l;
DF_MP.u = DF_MD.u;
DF_MP.prototype.render = function() {
    return this.html ? DF_Mv(DF_MRf, DF_Mn(this.languageCode, "agentSays"), DF_M2e(this.html)) : DF_Mv(DF_MQf)
};
var DF_MSf = DF_MP;
DF_MSf.j = [DF_MOf, DF_MZe, DF_MPf, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_MSf.prototype, "html", void 0);
DF_MSf = DF_Mj([DF_Mo("df-html-message"), DF_Mk("design:paramtypes", [String, String])], DF_MSf);
var DF_MTf = DF_Mp([".image-wrapper{padding:var(--df-messenger-card-padding,16px)}img.image{max-width:100%;border-radius:var(--df-messenger-image-border-radius,0)}.loading{height:200px}a{display:block;position:relative}.reference{position:absolute;top:16px;right:16px;max-width:calc(100% - 48px);display:flex;align-items:center;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.7);font-size:11px;line-height:16px}.reference img{width:16x;height:16px;margin-right:4px}.reference .text{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]);
var DF_MUf = DF_Mc(['<img class="loading" style=', ">"]),
    DF_MVf = DF_Mc(['<div class="image-wrapper">', "</div>"]),
    DF_MWf = DF_Mc(["", ""]),
    DF_MXf = DF_Mc(['\n      <img class="image" src=', ' alt="', '" />']),
    DF_MYf = DF_Mc('\n      <a\n        href=";"\n        target=";"\n        rel=";"\n        @click=;\n      >\n        ;\n        ;\n      </a>'.split(";")),
    DF_MZf = DF_Mc(['<img src="', '" />']),
    DF_M_f = DF_Mc(['\n      <div class="reference">\n        ', '\n        <span class="text">', "</span>\n      </div>"]);

function DF_MQ(a, b) {
    a = DF_MD.call(this, a, b, "image") || this;
    a.source = "";
    a.accessibilityText = "";
    a.reference = null;
    a.ab = !0;
    a.error = !1;
    a.Lb = a.Lb.bind(a);
    a.Kb = a.Kb.bind(a);
    return a
}
DF_Mf(DF_MQ, DF_MD);
DF_MQ.C = DF_MD.C;
DF_MQ.m = DF_MD.m;
DF_MQ.o = DF_MD.o;
DF_MQ.h = DF_MD.h;
DF_MQ.g = DF_MD.g;
DF_MQ.v = DF_MD.v;
DF_MQ.i = DF_MD.i;
DF_MQ.s = DF_MD.s;
DF_MQ.l = DF_MD.l;
DF_MQ.u = DF_MD.u;
DF_M = DF_MQ.prototype;
DF_M.connectedCallback = function() {
    DF_MD.prototype.connectedCallback.call(this);
    this.source && DF_MYa(this.source, this.Lb, this.Kb)
};
DF_M.render = function() {
    if (!this.source) return null;
    if (this.ab) {
        var a = DF_Mff({
            background: 'url("https://www.gstatic.com/dialogflow-console/common/assets/integrations/dialogflow-messenger/progress_spinner_grey.gif") 50% no-repeat'
        });
        return DF_Mv(DF_MUf, a)
    }
    if (this.error) a = DF_Mv(DF_MWf, this.accessibilityText);
    else if (a = DF_Mv(DF_MXf, this.source, this.accessibilityText), this.reference) {
        if (this.reference) {
            var b = null;
            var c;
            if (null == (c = this.reference.image) ? 0 : c.rawUrl) b = DF_Mv(DF_MZf, this.reference.image.rawUrl);
            b = DF_Mv(DF_M_f, b, this.reference.text)
        } else b = null;
        a = DF_Mv(DF_MYf, this.reference.anchor.href, this.reference.anchor.target, this.reference.anchor.rel, this.rc, a, b)
    }
    return DF_Mv(DF_MVf, a)
};
DF_M.Lb = function() {
    this.ab = !1
};
DF_M.Kb = function() {
    this.ab = !1;
    this.error = !0
};
DF_M.rc = function() {
    var a, b;
    DF_Ml(this, "df-image-clicked", {
        actionLink: null == (a = this.reference) ? void 0 : null == (b = a.anchor) ? void 0 : b.href
    })
};
var DF_M0f = DF_MQ;
DF_M0f.j = [DF_MTf];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_M0f.prototype, "source", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_M0f.prototype, "accessibilityText", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_M0f.prototype, "reference", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M0f.prototype, "ab", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M0f.prototype, "error", void 0);
DF_M0f = DF_Mj([DF_Mo("df-image"), DF_Mk("design:paramtypes", [String, String])], DF_M0f);
var DF_M1f = DF_Mp([":host([role=listitem]) .title-card-elements{padding:var(--df-messenger-list-padding,var(--df-messenger-card-padding,16px));margin:0 var(--df-messenger-list-inset,0)}:host(:not(:first-of-type)) .title-card-elements{padding-top:var(--df-messenger-list-spacing,10px)}:host(:not(:last-of-type)) .title-card-elements{padding-bottom:var(--df-messenger-list-spacing,10px);border-bottom:var(--df-messenger-list-border-bottom,var(--df-messenger-default-border))}.list-button{background:0 0;border:none;text-align:left;box-sizing:border-box;width:calc(100% - 2 * var(--df-messenger-list-inset,0px));cursor:pointer}"]);
var DF_M2f = DF_Mp([".title,.title-card-elements{font-size:var(--df-messenger-default-font-size)}.subtitle,.title{line-height:22px}.title-card-elements{display:flex;font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );padding:var(--df-messenger-card-padding,16px)}.link-wrapper{text-decoration:none}.image{margin-right:16px;max-height:24px;max-width:24px}.title{color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));font-weight:700;margin:0;word-break:break-all}.subtitle{color:var(--df-messenger-secondary-font-color,var(--df-messenger-default-secondary-font-color))}"]);
var DF_M3f = DF_Mc(['\n      <img class="image" src="', '" />']),
    DF_M4f = DF_Mc(['\n      <h3 class="title">\n        ', "\n      </h3>"]),
    DF_M5f = DF_Mc(['\n      <div class="subtitle">\n        ', "\n      </div>"]),
    DF_M6f = DF_Mc(["\n      ", '\n      <div class="text-container">\n        ', "\n        ", "\n      </div>"]),
    DF_M7f = DF_Mc('\n        <a\n          @click=";"\n          class="link-wrapper focus-outline"\n          target=";"\n          href=";"\n          rel=";"\n        >\n          <span class="visually-hidden">;</span>\n          <div class="title-card-elements">\n            ;\n          </div>\n        </a>'.split(";")),
    DF_M8f = DF_Mc(['\n      <div class="title-card-elements">\n        ', "\n      </div>"]);

function DF_MR(a, b, c) {
    a = DF_MG.call(this, a, b, void 0 === c ? "info" : c) || this;
    a.title = "";
    a.subtitle = "";
    a.image = null;
    a.anchor = null;
    a.j = a.j.bind(a);
    return a
}
DF_Mf(DF_MR, DF_MG);
DF_MR.C = DF_MG.C;
DF_MR.m = DF_MG.m;
DF_MR.o = DF_MG.o;
DF_MR.h = DF_MG.h;
DF_MR.g = DF_MG.g;
DF_MR.v = DF_MG.v;
DF_MR.i = DF_MG.i;
DF_MR.s = DF_MG.s;
DF_MR.l = DF_MG.l;
DF_MR.u = DF_MG.u;
DF_MR.prototype.render = function() {
    var a, b = (null == (a = this.image) ? 0 : a.rawUrl) ? DF_Mv(DF_M3f, this.image.rawUrl) : void 0;
    return this.O(DF_Mv(DF_M6f, b, this.title ? DF_Mv(DF_M4f, this.title) : void 0, this.subtitle ? DF_Mv(DF_M5f, this.subtitle) : void 0), this.j)
};
DF_MR.prototype.O = function(a, b) {
    if (this.anchor) {
        var c = DF_Mn(this.languageCode, "opensInANewTab");
        return DF_Mv(DF_M7f, b, this.anchor.target, this.anchor.href, this.anchor.rel, c, a)
    }
    return DF_Mv(DF_M8f, a)
};
DF_MR.prototype.j = function() {
    var a;
    DF_Ml(this, "df-info-card-clicked", {
        actionLink: null == (a = this.anchor) ? void 0 : a.href
    })
};
var DF_MS = DF_MR;
DF_MS.j = [DF_M2f, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_MS.prototype, "title", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_MS.prototype, "subtitle", void 0);
DF_Mj([DF_Mr({
    D: !1
}), DF_Mk("design:type", Object)], DF_MS.prototype, "image", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_MS.prototype, "anchor", void 0);
DF_MS = DF_Mj([DF_Mo("df-title"), DF_Mk("design:paramtypes", [String, String, Object])], DF_MS);
var DF_M9f = DF_Mc(["\n        <button\n          @click=", '\n          class="list-button focus-outline title-card-elements"\n        >\n          ', "\n        </button>"]);

function DF_MT(a, b) {
    a = DF_MS.call(this, a, b, "list") || this;
    a.event = null;
    return a
}
DF_Mf(DF_MT, DF_MS);
DF_MT.C = DF_MS.C;
DF_MT.m = DF_MS.m;
DF_MT.o = DF_MS.o;
DF_MT.h = DF_MS.h;
DF_MT.g = DF_MS.g;
DF_MT.v = DF_MS.v;
DF_MT.i = DF_MS.i;
DF_MT.s = DF_MS.s;
DF_MT.l = DF_MS.l;
DF_MT.u = DF_MS.u;
DF_MT.prototype.connectedCallback = function() {
    DF_MS.prototype.connectedCallback.call(this);
    this.setAttribute("role", "listitem");
    this.h = this.h.bind(this)
};
DF_MT.prototype.O = function(a) {
    return this.event && !this.anchor ? DF_Mv(DF_M9f, this.h, a) : DF_MS.prototype.O.call(this, a, this.h)
};
DF_MT.prototype.j = function() {
    var a = this;
    return DF_Mh(function(b) {
        return DF_Mg(b, a.h(), 0)
    })
};
DF_MT.prototype.h = function() {
    var a = this,
        b, c, d, e, f, g, h, k;
    return DF_Mh(function(l) {
        c = (null == (b = a.event) ? void 0 : b.languageCode) || a.languageCode;
        DF_Ml(a, "df-list-element-clicked", Object.assign({}, {
            event: null == (d = a.event) ? void 0 : d.event
        }, (null == (e = a.event) ? 0 : e.event) ? {
            languageCode: c
        } : {}, {
            actionLink: null == (f = a.anchor) ? void 0 : f.href
        }));
        if (null != (g = a.event) && g.event) return h = DF_Mdf(a.event.event, c), DF_Mg(l, null == (k = a.Ga) ? void 0 : k.presenter.sendRequest(h), 0);
        l.g = 0
    })
};
var DF_M$f = DF_MT;
DF_M$f.j = [DF_M1f, DF_M2f, DF_Mz];
DF_Mj([DF_Mr({
    type: Object
}), DF_Mk("design:type", Object)], DF_M$f.prototype, "event", void 0);
DF_M$f = DF_Mj([DF_Mo("df-list-element"), DF_Mk("design:paramtypes", [String, String])], DF_M$f);
var DF_Mag = DF_Mc([""]),
    DF_Mbg = DF_Mc(['\n      <style>\n        @import url(//www.gstatic.com/external_hosted/highlightjs/styles/googlecode.css);\n      </style>\n      <span class="visually-hidden">\n        ', '\n      </span>\n      <div class="message bot-message markdown">\n        ', "\n      </div>"]);

function DF_MU(a, b) {
    a = DF_MD.call(this, a, b, "markdown") || this;
    a.markdown = null;
    return a
}
DF_Mf(DF_MU, DF_MD);
DF_MU.C = DF_MD.C;
DF_MU.m = DF_MD.m;
DF_MU.o = DF_MD.o;
DF_MU.h = DF_MD.h;
DF_MU.g = DF_MD.g;
DF_MU.v = DF_MD.v;
DF_MU.i = DF_MD.i;
DF_MU.s = DF_MD.s;
DF_MU.l = DF_MD.l;
DF_MU.u = DF_MD.u;
DF_MU.prototype.render = function() {
    return this.markdown ? DF_Mv(DF_Mbg, DF_Mn(this.languageCode, "agentSays"), DF_M2e(this.markdown)) : DF_Mv(DF_Mag)
};
var DF_Mcg = DF_MU;
DF_Mcg.j = [DF_MOf, DF_MZe, DF_MPf, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mcg.prototype, "markdown", void 0);
DF_Mcg = DF_Mj([DF_Mo("df-markdown-message"), DF_Mk("design:paramtypes", [String, String])], DF_Mcg);
var DF_Mdg = DF_Mc(["<br>"]),
    DF_Meg = DF_Mc(["\n            ", "\n            ", ""]),
    DF_Mfg = DF_Mc(["\n        ", ""]),
    DF_Mgg = DF_Mc(['\n      <span class="visually-hidden">', '</span>\n      <div class="message ', '">\n        ', "\n      </div>"]);

function DF_MV(a, b) {
    a = DF_MD.call(this, a, b, "text") || this;
    a.text = "";
    a.isBot = !1;
    a.screenReaderTextKey = void 0;
    return a
}
DF_Mf(DF_MV, DF_MD);
DF_MV.C = DF_MD.C;
DF_MV.m = DF_MD.m;
DF_MV.o = DF_MD.o;
DF_MV.h = DF_MD.h;
DF_MV.g = DF_MD.g;
DF_MV.v = DF_MD.v;
DF_MV.i = DF_MD.i;
DF_MV.s = DF_MD.s;
DF_MV.l = DF_MD.l;
DF_MV.u = DF_MD.u;

function DF_Mhg(a) {
    var b = a.split("\n");
    return DF_Mv(DF_Mfg, b.map(function(c, d) {
        return DF_Mv(DF_Meg, c, d < b.length - 1 ? DF_Mv(DF_Mdg) : null)
    }))
}
DF_MV.prototype.render = function() {
    var a = this.screenReaderTextKey ? DF_Mn(this.languageCode, this.screenReaderTextKey) : DF_Mn(this.languageCode, this.isBot ? "agentSays" : "iSay");
    return DF_Mv(DF_Mgg, a, this.isBot ? "bot-message" : "user-message", DF_Mhg(this.text))
};
var DF_Mig = DF_MV;
DF_Mig.j = [DF_MPf, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mig.prototype, "text", void 0);
DF_Mj([DF_Mr({
    type: Boolean,
    L: !0
}), DF_Mk("design:type", Object)], DF_Mig.prototype, "isBot", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mig.prototype, "screenReaderTextKey", void 0);
DF_Mig = DF_Mj([DF_Mo("df-text-message"), DF_Mk("design:paramtypes", [String, String])], DF_Mig);
var DF_Mjg = DF_Mp([":host(:not(:only-child)) .wrapper{padding:var(--df-messenger-card-padding,16px)}:host(.markdown) .wrapper{display:inline-block;padding-left:0;padding-right:0}:host(.markdown:first-child) .wrapper{padding-top:0}:host(.markdown:last-child) .wrapper{padding-bottom:0}:host(.markdown) .embed,:host(:not(:only-child)) .embed,:host(:not(:only-child)) .link,:host(:not(:only-child)) .video{border:var(--df-messenger-video-border,var(--df-messenger-default-border));border-radius:var(--df-messenger-video-border-radius,var(--df-messenger-default-border-radius));overflow:hidden}.link{display:inline-block;position:relative;text-decoration:none}.thumbnail,iframe,video{max-width:100%;display:block}.thumbnail,video{width:var(--df-messenger-video-width,auto);height:var(--df-messenger-video-height,auto)}iframe{width:var(--df-messenger-video-embed-width,var(--df-messenger-video-width,560px));height:var(--df-messenger-video-embed-height,var(--df-messenger-video-height,315px))}.title{display:flex;align-items:center;padding:12px 16px;font-size:var(--df-messenger-font-size,\n      var(--df-messenger-default-font-size)\n    );font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color))}.youtube svg{width:24px;height:24px;margin-right:8px}.play{position:absolute;pointer-events:none;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:999px;padding:8px;width:36px;height:36px;background:#000;opacity:.8}.play svg{width:inherit;height:inherit;fill:white}"]);

function DF_Mkg(a) {
    var b, c = null != (b = a.anchor) ? b : a.actionLink ? {
        href: a.actionLink
    } : null;
    return c ? new DF_Mlg(c) : null
}

function DF_Mmg(a) {
    var b, c = null != (b = a.anchor) ? b : a.actionLink ? {
        href: a.actionLink
    } : null;
    return c ? new DF_Mlg(c) : null
}

function DF_Mlg(a) {
    this.href = (null == a ? void 0 : a.href) || "";
    this.target = (null == a ? void 0 : a.target) || "_blank";
    this.rel = (null == a ? void 0 : a.rel) || "noopener noreferrer"
};
var DF_Mng = DF_Mc(['\n        <div class="wrapper">\n          <div class="video">\n            <video src="', '" controls>', "</video>\n            ", "\n          </div>\n        </div>"]),
    DF_Mog = DF_Mc(["https://www.youtube.com/embed"]),
    DF_Mpg = DF_Mc(['\n        <div class="wrapper">\n          <div class="embed">\n            <iframe\n              src="', '"\n              title="', '"\n              frameborder="0"\n              allowfullscreen\n            ></iframe>\n            ', "\n          </div>\n        </div>"]),
    DF_Mqg = DF_Mc('\n      <div class="wrapper">\n        <a\n          class="link"\n          href=";"\n          target=";"\n          rel=";"\n        >\n          <span class="visually-hidden">;</span>\n          <img class="thumbnail" src=";"/>\n          ;\n          <div class="play">;</div>\n        </a>\n      </div>'.split(";")),
    DF_Mrg = DF_Mc(['<div class="title">', "</div>"]),
    DF_Msg = DF_Mc(['\n        <div class="title youtube">\n          ', "", "\n        </div>"]);

function DF_MW(a, b) {
    a = DF_MD.call(this, a, b, "video") || this;
    a.videoType = null;
    a.anchor = null;
    a.source = null;
    a.embeddedPlayer = null;
    a.thumbnail = null;
    a.videoTitle = null;
    return a
}
DF_Mf(DF_MW, DF_MD);
DF_MW.C = DF_MD.C;
DF_MW.m = DF_MD.m;
DF_MW.o = DF_MD.o;
DF_MW.h = DF_MD.h;
DF_MW.g = DF_MD.g;
DF_MW.v = DF_MD.v;
DF_MW.i = DF_MD.i;
DF_MW.s = DF_MD.s;
DF_MW.l = DF_MD.l;
DF_MW.u = DF_MD.u;
DF_MW.prototype.connectedCallback = function() {
    DF_MD.prototype.connectedCallback.call(this);
    var a = this.dataset.markdownUrl;
    a && (this.videoType = "link", this.anchor = new DF_Mlg({
        href: a
    }), this.embeddedPlayer = "youtube", this.classList.add("markdown"))
};
DF_MW.prototype.render = function() {
    if ("raw" === this.videoType) return DF_Mv(DF_Mng, this.source, "Your browser does not support the video tag.", DF_Mtg(this));
    if ("link" === this.videoType && "youtube" === this.embeddedPlayer) {
        var a = DF_MSc(DF_Mog);
        var b = DF_M8a(this.anchor.href);
        var c = DF_M7b(a).toString(),
            d = c.split(/\?|#/),
            e = d[0];
        a = /\?/.test(c) ? d[1] : void 0;
        c = /#/.test(c) ? a ? d[2] : d[1] : void 0;
        b = e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(b);
        void 0 !== a && (b += "?" + a);
        void 0 !== c && (b += "#" + c);
        b = DF_M9b(b);
        return DF_Mv(DF_Mpg,
            b, this.title, DF_Mtg(this))
    }
    b = DF_Mn(this.languageCode, "opensInANewTab");
    return DF_Mv(DF_Mqg, this.anchor.href, this.anchor.target, this.anchor.rel, b, this.thumbnail.rawUrl, DF_Mtg(this), DF_Mie)
};

function DF_Mtg(a) {
    return a.videoTitle ? DF_Mv(DF_Mrg, a.videoTitle) : "link" === a.videoType && DF_M7a.test(a.anchor.href) ? DF_Mv(DF_Msg, DF_Mje, a.dataset.markdownTitle || "Youtube video") : null
}
DF_Ma.Object.defineProperties(DF_MW.prototype, {
    j: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.dataset.markdownUrl = a
        }
    },
    h: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.dataset.markdownTitle = a
        }
    }
});
var DF_Mug = DF_MW;
DF_Mug.j = [DF_Mjg, DF_Mz];
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mug.prototype, "videoType", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mug.prototype, "anchor", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mug.prototype, "source", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mug.prototype, "embeddedPlayer", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mug.prototype, "thumbnail", void 0);
DF_Mj([DF_Mr(), DF_Mk("design:type", Object)], DF_Mug.prototype, "videoTitle", void 0);
DF_Mug = DF_Mj([DF_Mo("df-video"), DF_Mk("design:paramtypes", [String, String])], DF_Mug);

function DF_Mvg(a) {
    if (!a) return null;
    var b;
    return (null == (b = a.src) ? 0 : b.rawUrl) ? {
        rawUrl: a.src.rawUrl
    } : a.rawUrl ? {
        rawUrl: a.rawUrl
    } : null
};
var DF_Mwg = DF_Mc(['<img\n          src="', '"\n          aria-hidden="true"\n          alt="', '">']),
    DF_Mxg = DF_Mc(['\n      <span role="listitem" class="chip">\n        <button\n          class="focus-outline"\n          @click=', "\n        >\n          ", '\n          <span class="text">', "</span>\n        </button>\n      </span>"]),
    DF_Myg = DF_Mc(['<img\n          src="', '"\n          aria-hidden="true"\n          alt="', '">']),
    DF_Mzg = DF_Mc('\n      <span role="listitem" class="chip">\n        <a\n          @click=;\n          class="chip-link focus-outline"\n          href=";"\n          target=";"\n          rel=";"\n        >\n          <span class="visually-hidden">;</span>\n          ;\n          <span class="text">;</span>\n          <span class="icon">;</span>\n        </a>\n      </span>'.split(";"));

function DF_MAg(a, b, c, d) {
    this.text = a;
    this.image = b;
    this.accessibilityText = c;
    this.mode = d
}
DF_MAg.prototype.render = function(a, b) {
    var c = this,
        d, e = (null == (d = this.image) ? 0 : d.rawUrl) ? DF_Mv(DF_Mwg, this.image.rawUrl, this.accessibilityText || "") : null;
    return DF_Mv(DF_Mxg, function() {
        a.clicked = !0;
        null == b || b.presenter.storeMessageClicked(a.uniqueId);
        DF_Ml(a, "df-chip-clicked", {
            text: c.text
        });
        "blocking" === c.mode && b && (b.canAcceptInput = !0);
        null == b || b.renderCustomText(c.text, !1);
        null == b || b.presenter.sendRequest(DF_Mcf(c.text, a.languageCode))
    }, e, this.text)
};

function DF_MBg(a, b, c, d, e) {
    this.text = a;
    this.anchor = b;
    this.image = c;
    this.accessibilityText = d;
    this.mode = e
}
DF_MBg.prototype.render = function(a, b) {
    var c = this,
        d = DF_Mn(a.languageCode, "opensInANewTab"),
        e, f = (null == (e = this.image) ? 0 : e.rawUrl) ? DF_Mv(DF_Myg, this.image.rawUrl, this.accessibilityText || "") : null;
    return DF_Mv(DF_Mzg, function() {
        DF_Ml(a, "df-chip-clicked", {
            actionLink: c.anchor.href
        });
        "blocking" === c.mode && b && (b.canAcceptInput = !0)
    }, this.anchor.href, this.anchor.target, this.anchor.rel, d, f, this.text, DF_Mhe)
};
var DF_MCg = DF_Mp([":host{font-size:0}.code-block-wrapper{font-family:var(--df-messenger-font-family,\n      var(--df-messenger-default-font-family)\n    );color:var(--df-messenger-font-color,var(--df-messenger-default-font-color));border-radius:16px;border:var(--df-messenger-code-block-border,var(--df-messenger-default-border));overflow:hidden;display:inline-block;box-sizing:border-box;width:var(--df-messenger-code-block-width,auto);max-width:100%}.header{background:var(--df-messenger-code-block-header-background,#fff);padding:var(--df-messenger-code-block-header-padding,12px 16px);font-size:var(--df-messenger-code-block-header-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );font-weight:var(--df-messenger-code-block-header-font-weight,500);border-bottom:var(--df-messenger-code-block-border,var(--df-messenger-default-border))}.footer{display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;min-height:49px;background:var(--df-messenger-code-block-footer-background,#fff);padding:var(--df-messenger-code-block-footer-padding,8px 16px);font-size:var(--df-messenger-code-block-footer-font-size, 12px);font-weight:var(--df-messenger-code-block-footer-font-weight,normal);border-top:var(--df-messenger-code-block-border,var(--df-messenger-default-border))}.code{background:var(--df-messenger-code-block-code-background,#f2f2f2);padding:var(--df-messenger-code-block-code-padding,16px);font-size:var(--df-messenger-code-block-code-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );overflow-x:auto}.copy-button{margin:-12px;padding:12px;fill:var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color))}.copy-button.action-button.active{background-color:rgba(0,0,0,.33);transition:background-color .2s}"]);
var DF_MDg = DF_Mc('\n      <div><div class="code-block-wrapper">\n        <div class="header">;</div>\n        <div class="code">\n          <slot></slot>\n        </div>\n        <div class="footer">\n          <span>;</span>\n          <button\n            class="copy-button action-button focus-outline"\n            aria-label=";"\n            @click=;\n          >\n            ;\n            </button>\n        </div>\n      </div></div>'.split(";"));

function DF_MX() {
    return DF_Mx.apply(this, arguments) || this
}
DF_Mf(DF_MX, DF_Mx);
DF_MX.C = DF_Mx.C;
DF_MX.m = DF_Mx.m;
DF_MX.o = DF_Mx.o;
DF_MX.h = DF_Mx.h;
DF_MX.g = DF_Mx.g;
DF_MX.v = DF_Mx.v;
DF_MX.i = DF_Mx.i;
DF_MX.s = DF_Mx.s;
DF_MX.l = DF_Mx.l;
DF_MX.u = DF_Mx.u;
DF_MX.prototype.render = function() {
    var a, b = DF_Mn(null == (a = this.j) ? void 0 : a.languageCode, "useCodeWithCautionText"),
        c;
    a = DF_Mn(null == (c = this.j) ? void 0 : c.languageCode, "copyCodeAriaLabel");
    return DF_Mv(DF_MDg, this.h, b, a, this.O, DF_Mfe)
};
DF_MX.prototype.O = function() {
    if (0 !== this.Qb.length) {
        var a = this.Qb[0].textContent;
        if (a) {
            var b = this.T.querySelector(".copy-button");
            null == b || b.classList.add("active");
            setTimeout(function() {
                null == b || b.classList.remove("active")
            }, 200);
            navigator.clipboard.writeText(a)
        }
    }
};
DF_Ma.Object.defineProperties(DF_MX.prototype, {
    h: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.dataset.language = a
        },
        get: function() {
            var a;
            return null != (a = this.dataset.language) ? a : ""
        }
    },
    j: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.closest("df-markdown-message")
        }
    }
});
var DF_MEg = DF_MX;
DF_MEg.F = "language";
DF_MEg.j = [DF_MCg, DF_Mz];
DF_Mj([function(a) {
    return function(b, c) {
        var d = null != a ? a : {},
            e = d.slot,
            f = d.Gd,
            g = "slot" + (e ? "[name=" + e + "]" : ":not([name])");
        return DF_MGb(b, c, {
            get: function() {
                var h, k, l, m = null != (l = null == (k = null == (h = this.T) ? void 0 : h.querySelector(g)) ? void 0 : k.assignedElements(a)) ? l : [];
                return void 0 === f ? m : m.filter(function(n) {
                    return n.matches(f)
                })
            }
        })
    }
}(), DF_Mk("design:type", Array)], DF_MEg.prototype, "Qb", void 0);
DF_MEg = DF_Mj([DF_Mo("df-code-block")], DF_MEg);

function DF_MFg(a, b) {
    if (1 === a.nodeType) {
        var c = a.tagName;
        if ("SCRIPT" === c || "STYLE" === c) throw Error("");
    }
    a.innerHTML = DF_MKc(b)
};
var DF_MGg = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

function DF_MHg(a) {
    var b = DF_MSc(DF_MIg);
    if (b instanceof DF_M6b) a.href = DF_M7b(b).toString();
    else {
        if (-1 === DF_MGg.indexOf("stylesheet")) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
        if (b instanceof DF_Mt) b = DF_Mac(b);
        else {
            b: if (DF_MRc) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    c = "https:";
                    break b
                }
                c = c.protocol
            } else c: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (d) {
                    c = void 0;
                    break c
                }
                c = c.protocol;c = ":" === c || "" === c ? "https:" : c
            }
            b = "javascript:" !== c ? b : void 0
        }
        if (void 0 === b) return;
        a.href =
            b
    }
    a.rel = "stylesheet"
};

function DF_MJg(a, b) {
    a.src = DF_M7b(b);
    var c, d;
    (c = (b = null == (d = (c = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : d.call(c, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
};

function DF_MKg(a) {
    this.Oa = a;
    this.Zb = "CodeBlock"
}
DF_MKg.prototype.Vb = function(a) {
    return DF_MLg(a, "df-code-block", ["data-language"])
};
DF_MKg.prototype.hc = function(a) {
    var b;
    return a.nodeType === Node.ELEMENT_NODE && "code" === a.nodeName.toLowerCase() && "pre" === (null == (b = a.parentNode) ? void 0 : b.nodeName.toLowerCase())
};
DF_MKg.prototype.Xa = function(a) {
    var b = globalThis;
    if (b.hljs && a.textContent && 0 !== a.classList.length) {
        var c = a.classList[0];
        if (c.startsWith("language-")) {
            c = c.substring(9);
            try {
                var d = b.hljs.getLanguage(c).name,
                    e = b.hljs.highlight(c, a.textContent);
                DF_MFg(a, this.Oa.ea(e.value));
                var f = a.parentElement,
                    g = new DF_MEg;
                g.h = d;
                var h = document.createElement("pre");
                h.classList.add("code-block");
                h.appendChild(a);
                g.appendChild(h);
                f.replaceWith(g)
            } catch (k) {
                console.debug("DF-MESSENGER", "hljs", k)
            }
        }
    }
};

function DF_MMg() {
    this.Zb = "Youtube"
}
DF_MMg.prototype.Vb = function(a) {
    return DF_MLg(a, "df-video", ["data-markdown-url", "data-markdown-title"])
};
DF_MMg.prototype.hc = function(a) {
    return a.nodeType === Node.ELEMENT_NODE && "a" === a.nodeName.toLowerCase()
};
DF_MMg.prototype.Xa = function(a) {
    var b = a.getAttribute("href");
    if (b && DF_M8a(b)) {
        var c = new DF_Mug("", "");
        c.j = b;
        a.textContent && (c.h = a.textContent);
        a.replaceWith(c)
    }
};

function DF_MNg() {
    return null
};
var DF_MOg = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-CONTROLS": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-EXPANDED": !0,
        "* ARIA-GOOG-EDITABLE": !0,
        "* ARIA-HASPOPUP": !0,
        "* ARIA-HIDDEN": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-MULTILINE": !0,
        "* ARIA-MULTISELECTABLE": !0,
        "* ARIA-ORIENTATION": !0,
        "* ARIA-PLACEHOLDER": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROLEDESCRIPTION": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    },
    DF_MPg = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
var DF_MQg = DF_MGc() ? !1 : DF_Mu("Opera"),
    DF_MRg = DF_MGc() ? !1 : DF_Mu("Trident") || DF_Mu("MSIE"),
    DF_MSg = DF_Mu("Edge"),
    DF_MTg = DF_Mu("Gecko") && !(-1 != DF_MCc().toLowerCase().indexOf("webkit") && !DF_Mu("Edge")) && !(DF_Mu("Trident") || DF_Mu("MSIE")) && !DF_Mu("Edge"),
    DF_MUg = -1 != DF_MCc().toLowerCase().indexOf("webkit") && !DF_Mu("Edge");

function DF_MVg() {
    var a = DF_Mi.document;
    return a ? a.documentMode : void 0
}
var DF_MWg;
a: {
    var DF_MXg = "",
        DF_MYg = function() {
            var a = DF_MCc();
            if (DF_MTg) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (DF_MSg) return /Edge\/([\d\.]+)/.exec(a);
            if (DF_MRg) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (DF_MUg) return /WebKit\/(\S+)/.exec(a);
            if (DF_MQg) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();DF_MYg && (DF_MXg = DF_MYg ? DF_MYg[1] : "");
    if (DF_MRg) {
        var DF_MZg = DF_MVg();
        if (null != DF_MZg && DF_MZg > parseFloat(DF_MXg)) {
            DF_MWg = String(DF_MZg);
            break a
        }
    }
    DF_MWg = DF_MXg
}
var DF_M_g = DF_MWg,
    DF_M0g;
if (DF_Mi.document && DF_MRg) {
    var DF_M1g = DF_MVg();
    DF_M0g = DF_M1g ? DF_M1g : parseInt(DF_M_g, 10) || void 0
} else DF_M0g = void 0;
var DF_M2g = DF_M0g;
var DF_M3g = function(a) {
    var b = !1,
        c;
    return function() {
        b || (c = a(), b = !0);
        return c
    }
}(function() {
    var a = document.createElement("div"),
        b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a.appendChild(b);
    b = a.firstChild.firstChild;
    a.innerHTML = DF_MKc(DF_MMc);
    return !b.parentElement
});

function DF_M4g(a, b) {
    if (DF_M3g())
        for (; a.lastChild;) a.removeChild(a.lastChild);
    a.innerHTML = DF_MKc(b)
};

function DF_M5g(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : null
};
var DF_M6g = {};

function DF_M7g(a) {
    var b = DF_M6g.hasOwnProperty(a) ? DF_M6g[a] : null;
    if (b) return b;
    65536 < Object.keys(DF_M6g).length && (DF_M6g = {});
    var c = [0, 0, 0, 0],
        d = RegExp("\\\\[0-9A-Fa-f]{1,5}\\s", "g");
    b = DF_M8g(a, RegExp("\\\\[0-9A-Fa-f]{6}\\s?", "g"));
    b = DF_M8g(b, d);
    b = DF_M8g(b, /\\./g);
    b = b.replace(RegExp(":not\\(([^\\)]*)\\)", "g"), "     $1 ");
    b = b.replace(RegExp("{[^]*", "gm"), "");
    b = DF_M9g(b, c, RegExp("(\\[[^\\]]+\\])", "g"), 2);
    b = DF_M9g(b, c, RegExp("(#[^\\#\\s\\+>~\\.\\[:]+)", "g"), 1);
    b = DF_M9g(b, c, RegExp("(\\.[^\\s\\+>~\\.\\[:]+)", "g"),
        2);
    b = DF_M9g(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
    b = DF_M9g(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
    b = DF_M9g(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
    b = b.replace(/[\*\s\+>~]/g, " ");
    b = b.replace(/[#\.]/g, " ");
    DF_M9g(b, c, /([^\s\+>~\.\[:]+)/g, 3);
    b = c;
    return DF_M6g[a] = b
}

function DF_M9g(a, b, c, d) {
    return a.replace(c, function(e) {
        b[d] += 1;
        return Array(e.length + 1).join(" ")
    })
}

function DF_M8g(a, b) {
    return a.replace(b, function(c) {
        return Array(c.length + 1).join("A")
    })
};
var DF_M$g = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    },
    DF_Mah = /[\n\f\r"'()*<>]/g,
    DF_Mbh = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };

function DF_Mch(a) {
    return DF_Mbh[a]
}

function DF_Mdh(a, b, c) {
    b = DF_M$b(b);
    if ("" == b) return null;
    var d = String(b.slice(0, 4)).toLowerCase();
    if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) {
        if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
        else {
            a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) {
                var e = "\"'".charAt(d);
                if (b.charAt(0) == e && b.charAt(b.length - 1) == e) {
                    b = b.substring(1, b.length - 1);
                    break a
                }
            }
            a = c ? (a = c(b, a)) && "about:invalid#zClosurez" != DF_Mac(a) ? 'url("' + DF_Mac(a).replace(DF_Mah, DF_Mch) + '")' : null : null
        }
        return a
    }
    if (0 <
        b.indexOf("(")) {
        if (/"|'/.test(b)) return null;
        for (a = /([\-\w]+)\(/g; c = a.exec(b);)
            if (!(c[1].toLowerCase() in DF_M$g)) return null
    }
    return b
};
!DF_Mu("Android") || DF_MHc();
DF_MHc();
DF_Mu("Safari") && (DF_MHc() || (DF_MGc() ? 0 : DF_Mu("Coast")) || (DF_MGc() ? 0 : DF_Mu("Opera")) || (DF_MGc() ? 0 : DF_Mu("Edge")) || (DF_MGc() ? DF_MFc("Microsoft Edge") : DF_Mu("Edg/")) || DF_MGc() && DF_MFc("Opera"));

function DF_MY(a, b) {
    a = DF_Mi[a];
    return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
}

function DF_Meh(a, b) {
    return (a = DF_Mi[a]) && a.prototype && a.prototype[b] || null
}
var DF_Mfh = DF_MY("Element", "attributes") || DF_MY("Node", "attributes"),
    DF_Mgh = DF_Meh("Element", "hasAttribute"),
    DF_Mhh = DF_Meh("Element", "getAttribute"),
    DF_Mih = DF_Meh("Element", "setAttribute"),
    DF_Mjh = DF_Meh("Element", "removeAttribute");
DF_MY("Element", "innerHTML") || DF_MY("HTMLElement", "innerHTML");
var DF_Mkh = DF_Meh("Element", "getElementsByTagName"),
    DF_Mlh = DF_Meh("Element", "matches") || DF_Meh("Element", "msMatchesSelector"),
    DF_Mmh = DF_MY("Node", "nodeName"),
    DF_Mnh = DF_MY("Node", "nodeType"),
    DF_Moh = DF_MY("Node", "parentNode");
DF_MY("Node", "childNodes");
var DF_Mph = DF_MY("HTMLElement", "style") || DF_MY("Element", "style"),
    DF_Mqh = DF_MY("HTMLStyleElement", "sheet"),
    DF_Mrh = DF_Meh("CSSStyleDeclaration", "getPropertyValue"),
    DF_Msh = DF_Meh("CSSStyleDeclaration", "setProperty"),
    DF_Mth = DF_MY("Element", "namespaceURI") || DF_MY("Node", "namespaceURI");

function DF_Muh(a, b, c, d) {
    if (a) return a.apply(b);
    a = b[c];
    if (!d(a)) throw Error("Clobbering detected");
    return a
}

function DF_Mvh(a, b, c, d) {
    if (a) return a.apply(b, d);
    if (DF_MRg && 10 > document.documentMode) {
        if (!b[c].call) throw Error("IE Clobbering detected");
    } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
    return b[c].apply(b, d)
}

function DF_Mwh(a) {
    return DF_Muh(DF_Mfh, a, "attributes", function(b) {
        return b instanceof NamedNodeMap
    })
}

function DF_Mxh(a, b, c) {
    try {
        DF_Mvh(DF_Mih, a, "setAttribute", [b, c])
    } catch (d) {
        if (-1 == d.message.indexOf("A security problem occurred")) throw d;
    }
}

function DF_Myh(a) {
    return DF_Muh(DF_Mph, a, "style", function(b) {
        return b instanceof CSSStyleDeclaration
    })
}

function DF_Mzh(a) {
    return DF_Muh(DF_Mqh, a, "sheet", function(b) {
        return b instanceof CSSStyleSheet
    })
}

function DF_MAh(a) {
    return DF_Muh(DF_Mmh, a, "nodeName", function(b) {
        return "string" == typeof b
    })
}

function DF_MBh(a) {
    return DF_Muh(DF_Mnh, a, "nodeType", function(b) {
        return "number" == typeof b
    })
}

function DF_MCh(a) {
    return DF_Muh(DF_Moh, a, "parentNode", function(b) {
        return !(b && "string" == typeof b.name && b.name && "parentnode" == b.name.toLowerCase())
    })
}

function DF_MDh(a, b) {
    return DF_Mvh(DF_Mrh, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [b]) || ""
}

function DF_MEh(a, b, c) {
    DF_Mvh(DF_Msh, a, a.setProperty ? "setProperty" : "setAttribute", [b, c])
}

function DF_MFh(a) {
    return DF_Muh(DF_Mth, a, "namespaceURI", function(b) {
        return "string" == typeof b
    })
};
var DF_MGh = DF_MRg && 10 > document.documentMode ? null : RegExp("\\s*([^\\s'\",]+[^'\",]*(('([^'\\r\\n\\f\\\\]|\\\\[^])*')|(\"([^\"\\r\\n\\f\\\\]|\\\\[^])*\")|[^'\",])*)", "g"),
    DF_MHh = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };

function DF_MIh(a, b, c) {
    var d = [];
    DF_MJh(DF_MYb(a.cssRules)).forEach(function(e) {
        if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
        if (!(b && DF_MRg && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
            var f = b ? e.selectorText.replace(DF_MGh, "#" + b + " $1") : e.selectorText,
                g = d.push;
            e = DF_MKh(e.style, c);
            if (-1 != f.indexOf("<")) throw Error("Selector does not allow '<', got: " + f);
            var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(h)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " +
                f);
            a: {
                for (var k = {
                        "(": ")",
                        "[": "]"
                    }, l = [], m = 0; m < h.length; m++) {
                    var n = h[m];
                    if (k[n]) l.push(k[n]);
                    else {
                        b: {
                            var p = void 0;
                            for (p in k)
                                if (k[p] == n) {
                                    p = !0;
                                    break b
                                } p = !1
                        }
                        if (p && l.pop() != n) {
                            h = !1;
                            break a
                        }
                    }
                }
                h = 0 == l.length
            }
            if (!h) throw Error("() and [] in selector must be balanced, got: " + f);
            if (!(e instanceof DF_Mhc)) {
                h = "";
                for (var q in e)
                    if (Object.prototype.hasOwnProperty.call(e, q)) {
                        if (!/^[-_a-zA-Z0-9]+$/.test(q)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + q);
                        k = e[q];
                        null != k && (k = Array.isArray(k) ? k.map(DF_Mkc).join(" ") :
                            DF_Mkc(k), h += q + ":" + k + ";")
                    } e = h ? new DF_Mhc(h, DF_Mgc) : DF_Mjc
            }
            g.call(d, new DF_Msc(f + "{" + DF_Mic(e).replace(/</g, "\\3C ") + "}", DF_Mrc))
        }
    });
    return DF_Mtc(d)
}

function DF_MJh(a) {
    return a.filter(function(b) {
        return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE
    })
}

function DF_MLh(a, b, c) {
    a = DF_MMh("<style>" + a + "</style>");
    return null == a || null == a.sheet ? DF_Mvc : DF_MIh(a.sheet, void 0 != b ? b : null, c)
}

function DF_MMh(a) {
    a = DF_MLc("<html><head></head><body>" + a + "</body></html>");
    return (new DOMParser).parseFromString(DF_MKc(a), "text/html").body.children[0]
}

function DF_MKh(a, b) {
    if (!a) return DF_Mjc;
    var c = document.createElement("div").style;
    DF_MNh(a).forEach(function(d) {
        var e = DF_MUg && d in DF_MHh ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
        0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = DF_MDh(a, d), d = DF_Mdh(e, d, b), null != d && DF_MEh(c, e, d))
    });
    return new DF_Mhc(c.cssText || "", DF_Mgc)
}

function DF_MOh(a) {
    var b = Array.from(DF_Mvh(DF_Mkh, a, "getElementsByTagName", ["STYLE"])),
        c = DF_MZb(b, function(g) {
            return DF_MYb(DF_Mzh(g).cssRules)
        });
    c = DF_MJh(c);
    for (var d = [], e = 0; e < c.length; e++) d[e] = {
        index: e,
        Nb: c[e]
    };
    d.sort(function(g, h) {
        var k = DF_M7g(g.Nb.selectorText),
            l = DF_M7g(h.Nb.selectorText);
        a: {
            for (var m = Math.min(k.length, l.length), n = 0; n < m; n++) {
                var p = k[n],
                    q = l[n];
                p = p > q ? 1 : p < q ? -1 : 0;
                if (0 != p) {
                    l = p;
                    break a
                }
            }
            k = k.length;l = l.length;l = k > l ? 1 : k < l ? -1 : 0
        }
        return l || g.index - h.index
    });
    for (e = 0; e < d.length; e++) c[e] = d[e].Nb;
    c.reverse();
    a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
    for (var f; f = a.nextNode();) c.forEach(function(g) {
        DF_Mvh(DF_Mlh, f, f.matches ? "matches" : "msMatchesSelector", [g.selectorText]) && g.style && DF_MPh(f, g.style)
    });
    b.forEach(DF_M5g)
}

function DF_MPh(a, b) {
    var c = DF_MNh(a.style);
    DF_MNh(b).forEach(function(d) {
        if (!(0 <= c.indexOf(d))) {
            var e = DF_MDh(b, d);
            DF_MEh(a.style, d, e)
        }
    })
}

function DF_MNh(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    "array" == b || "object" == b && "number" == typeof a.length ? a = DF_MYb(a) : (a = DF_M_b(a), b = DF_MUb(a, "cssText"), 0 <= b && Array.prototype.splice.call(a, b, 1));
    return a
};
var DF_MQh = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
    DF_MRh = 0;

function DF_MSh() {
    this.i = [];
    this.h = [];
    this.g = "data-elementweakmap-index-" + DF_MRh++
}
DF_MSh.prototype.set = function(a, b) {
    if (DF_Mvh(DF_Mgh, a, "hasAttribute", [this.g])) {
        var c = parseInt(DF_Mvh(DF_Mhh, a, "getAttribute", [this.g]) || null, 10);
        this.h[c] = b
    } else c = this.h.push(b) - 1, DF_Mxh(a, this.g, c.toString()), this.i.push(a);
    return this
};
DF_MSh.prototype.get = function(a) {
    if (DF_Mvh(DF_Mgh, a, "hasAttribute", [this.g])) return a = parseInt(DF_Mvh(DF_Mhh, a, "getAttribute", [this.g]) || null, 10), this.h[a]
};
DF_MSh.prototype.clear = function() {
    this.i.forEach(function(a) {
        DF_Mvh(DF_Mjh, a, "removeAttribute", [this.g])
    }, this);
    this.i = [];
    this.h = []
};
var DF_MTh;
(DF_MTh = !DF_MRg) || (DF_MTh = 10 <= Number(DF_M2g));
var DF_MUh = DF_MTh,
    DF_MVh = !DF_MRg || null == document.documentMode;

function DF_MWh() {
    this.h = document.implementation.createHTMLDocument("")
};
var DF_MXh = {
    APPLET: !0,
    AUDIO: !0,
    BASE: !0,
    BGSOUND: !0,
    EMBED: !0,
    FORM: !0,
    IFRAME: !0,
    ISINDEX: !0,
    KEYGEN: !0,
    LAYER: !0,
    LINK: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    SVG: !0,
    STYLE: !0,
    TEMPLATE: !0,
    VIDEO: !0
};
var DF_MYh = {
    A: !0,
    ABBR: !0,
    ACRONYM: !0,
    ADDRESS: !0,
    AREA: !0,
    ARTICLE: !0,
    ASIDE: !0,
    B: !0,
    BDI: !0,
    BDO: !0,
    BIG: !0,
    BLOCKQUOTE: !0,
    BR: !0,
    BUTTON: !0,
    CAPTION: !0,
    CENTER: !0,
    CITE: !0,
    CODE: !0,
    COL: !0,
    COLGROUP: !0,
    DATA: !0,
    DATALIST: !0,
    DD: !0,
    DEL: !0,
    DETAILS: !0,
    DFN: !0,
    DIALOG: !0,
    DIR: !0,
    DIV: !0,
    DL: !0,
    DT: !0,
    EM: !0,
    FIELDSET: !0,
    FIGCAPTION: !0,
    FIGURE: !0,
    FONT: !0,
    FOOTER: !0,
    FORM: !0,
    H1: !0,
    H2: !0,
    H3: !0,
    H4: !0,
    H5: !0,
    H6: !0,
    HEADER: !0,
    HGROUP: !0,
    HR: !0,
    I: !0,
    IMG: !0,
    INPUT: !0,
    INS: !0,
    KBD: !0,
    LABEL: !0,
    LEGEND: !0,
    LI: !0,
    MAIN: !0,
    MAP: !0,
    MARK: !0,
    MENU: !0,
    METER: !0,
    NAV: !0,
    NOSCRIPT: !0,
    OL: !0,
    OPTGROUP: !0,
    OPTION: !0,
    OUTPUT: !0,
    P: !0,
    PRE: !0,
    PROGRESS: !0,
    Q: !0,
    S: !0,
    SAMP: !0,
    SECTION: !0,
    SELECT: !0,
    SMALL: !0,
    SOURCE: !0,
    SPAN: !0,
    STRIKE: !0,
    STRONG: !0,
    STYLE: !0,
    SUB: !0,
    SUMMARY: !0,
    SUP: !0,
    TABLE: !0,
    TBODY: !0,
    TD: !0,
    TEXTAREA: !0,
    TFOOT: !0,
    TH: !0,
    THEAD: !0,
    TIME: !0,
    TR: !0,
    TT: !0,
    U: !0,
    UL: !0,
    VAR: !0,
    WBR: !0
};
var DF_MZh = {
    "ANNOTATION-XML": !0,
    "COLOR-PROFILE": !0,
    "FONT-FACE": !0,
    "FONT-FACE-SRC": !0,
    "FONT-FACE-URI": !0,
    "FONT-FACE-FORMAT": !0,
    "FONT-FACE-NAME": !0,
    "MISSING-GLYPH": !0
};

function DF_M_h(a) {
    this.h = document.implementation.createHTMLDocument("");
    a = a || new DF_M0h;
    DF_M1h(a);
    this.g = DF_M0b(a.g);
    this.G = DF_M0b(a.N);
    this.i = DF_M0b(a.j);
    this.aa = a.ta;
    a.ua.forEach(function(b) {
        if (0 != b.lastIndexOf("data-", 0)) throw new DF_MTb('Only "data-" attributes allowed, got: %s.', [b]);
        if (0 == b.lastIndexOf("data-sanitizer-", 0)) throw new DF_MTb('Attributes with "%s" prefix are not allowed, got: %s.', ["data-sanitizer-", b]);
        this.g["* " + b.toUpperCase()] = DF_M2h
    }, this);
    a.aa.forEach(function(b) {
        b = b.toUpperCase();
        if (-1 == b.indexOf("-") || DF_MZh[b]) throw new DF_MTb("Only valid custom element tag names allowed, got: %s.", [b]);
        this.i[b] = !0
    }, this);
    this.N = a.i;
    this.F = a.K;
    this.j = null;
    this.K = a.G
}
DF_MEa(DF_M_h, DF_MWh);

function DF_M3h(a) {
    return function(b, c) {
        return (b = a(DF_M$b(b), c)) && "about:invalid#zClosurez" != DF_Mac(b) ? DF_Mac(b) : null
    }
}

function DF_M0h() {
    this.g = {};
    DF_MVb([DF_MOg, DF_MPg], function(a) {
        DF_M_b(a).forEach(function(b) {
            this.g[b] = DF_M2h
        }, this)
    }, this);
    this.h = {};
    this.ua = [];
    this.aa = [];
    this.N = DF_M0b(DF_MXh);
    this.j = DF_M0b(DF_MYh);
    this.ta = !1;
    this.Fa = DF_Mdc;
    this.O = this.F = this.Ea = this.i = DF_MNg;
    this.K = null;
    this.ka = this.G = !1
}

function DF_MLg(a, b, c) {
    a.aa.push(b);
    c && c.forEach(function(d) {
        d = DF_M4h(b, d);
        this.g[d] = DF_M2h;
        this.h[d] = !0
    }, a);
    return a
}

function DF_M5h() {
    var a = DF_M6h();
    if (a.G) throw Error("Rules from STYLE tags are already being inlined.");
    delete a.N.STYLE;
    a.K = "*";
    a.O = DF_M7h;
    return a
}

function DF_M6h() {
    var a = new DF_M0h,
        b = DF_M8h.concat("style");
    a.j = {
        SPAN: !0
    };
    b.forEach(function(c) {
        c = c.toUpperCase();
        if (DF_MYh[c]) this.j[c] = !0;
        else throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist.");
    }, a);
    return a
}

function DF_M9h(a, b) {
    a.i = b;
    return a
}

function DF_M$h(a, b) {
    a.F = b;
    return a
}

function DF_Mai(a, b) {
    return function(c, d, e, f) {
        c = a(c, d, e, f);
        return null == c ? null : b(c, d, e, f)
    }
}

function DF_Mbi(a, b, c, d) {
    a[c] && !b[c] && (a[c] = DF_Mai(a[c], d))
}

function DF_M1h(a) {
    if (a.ka) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
    DF_Mbi(a.g, a.h, "* USEMAP", DF_Mci);
    var b = DF_M3h(a.Fa);
    ["* ACTION", "* CITE", "* HREF"].forEach(function(d) {
        DF_Mbi(this.g, this.h, d, b)
    }, a);
    var c = DF_M3h(a.i);
    ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) {
        DF_Mbi(this.g, this.h, d, c)
    }, a);
    ["* FOR", "* HEADERS", "* NAME"].forEach(function(d) {
        DF_Mbi(this.g, this.h, d, DF_MDa(DF_Mdi, this.Ea))
    }, a);
    DF_Mbi(a.g, a.h, "A TARGET", DF_MDa(DF_Mei, ["_blank", "_self"]));
    DF_Mbi(a.g,
        a.h, "* CLASS", DF_MDa(DF_Mfi, a.F));
    DF_Mbi(a.g, a.h, "* ID", DF_MDa(DF_Mgi, a.F));
    DF_Mbi(a.g, a.h, "* STYLE", DF_MDa(a.O, c));
    a.ka = !0
}

function DF_M4h(a, b) {
    a || (a = "*");
    return (a + " " + b).toUpperCase()
}

function DF_M7h(a, b, c, d) {
    if (!d.zb) return null;
    b = DF_Mic(DF_MKh(d.zb, function(e, f) {
        c.Rc = f;
        e = a(e, c);
        var g;
        null == e ? g = null : g = new DF_Mt(e, DF_Mec);
        return g
    }));
    return "" == b ? null : b
}

function DF_M2h(a) {
    return DF_M$b(a)
}

function DF_Mei(a, b) {
    b = DF_M$b(b);
    return 0 <= DF_MUb(a, b.toLowerCase()) ? b : null
}

function DF_Mci(a) {
    return (a = DF_M$b(a)) && "#" == a.charAt(0) ? a : null
}

function DF_Mdi(a, b, c) {
    return a(DF_M$b(b), c)
}

function DF_Mfi(a, b, c) {
    b = b.split(/(?:\s+)/);
    for (var d = [], e = 0; e < b.length; e++) {
        var f = a(b[e], c);
        f && d.push(f)
    }
    return 0 == d.length ? null : d.join(" ")
}

function DF_Mgi(a, b, c) {
    return a(DF_M$b(b), c)
}
DF_M_h.prototype.ea = function(a) {
    var b = !("STYLE" in this.G) && "STYLE" in this.i;
    this.j = "*" == this.F && b ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)) : this.F;
    if (DF_MUh) {
        b = a;
        a = this.h.createElement("span");
        if (DF_MUh) {
            this.j && "*" == this.F && (a.id = this.j);
            this.K && (b = DF_MMh("<div>" + b + "</div>"), DF_MOh(b), b = b.innerHTML);
            b = DF_MLc(b);
            var c = document.createElement("template");
            if (DF_MVh && "content" in c) DF_M4g(c, b), c = c.content;
            else {
                var d =
                    document.implementation.createHTMLDocument("x");
                c = d.body;
                DF_M4g(d.body, b)
            }
            b = document.createTreeWalker(c, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
            for (c = DF_MQh ? new WeakMap : new DF_MSh; d = b.nextNode();) {
                c: {
                    var e = d;
                    switch (DF_MBh(e)) {
                        case 3:
                            e = DF_Mhi(this, e);
                            break c;
                        case 1:
                            if ("TEMPLATE" == DF_MAh(e).toUpperCase()) e = null;
                            else {
                                var f = DF_MAh(e).toUpperCase();
                                if (f in this.G || "http://www.w3.org/1999/xhtml" != DF_MFh(e)) var g = null;
                                else this.i[f] ? g = this.h.createElement(f) : (g = this.h.createElement("span"),
                                    this.aa && DF_Mxh(g, "data-sanitizer-original-tag", f.toLowerCase()));
                                if (g) {
                                    var h = g,
                                        k = DF_Mwh(e);
                                    if (null != k)
                                        for (var l = 0; f = k[l]; l++)
                                            if (f.specified) {
                                                var m = e;
                                                var n = f;
                                                var p = n.name;
                                                if (0 == p.lastIndexOf("data-sanitizer-", 0)) n = null;
                                                else {
                                                    var q = DF_MAh(m);
                                                    n = n.value;
                                                    var r = {
                                                            tagName: DF_M$b(q).toLowerCase(),
                                                            attributeName: DF_M$b(p).toLowerCase()
                                                        },
                                                        t = {
                                                            zb: void 0
                                                        };
                                                    "style" == r.attributeName && (t.zb = DF_Myh(m));
                                                    m = DF_M4h(q, p);
                                                    m in this.g ? (p = this.g[m], n = p(n, r, t)) : (p = DF_M4h(null, p), p in this.g ? (p = this.g[p], n = p(n, r, t)) : n = null)
                                                }
                                                null !==
                                                    n && DF_Mxh(h, f.name, n)
                                            } e = g
                                } else e = null
                            }
                            break c;
                        default:
                            e = null
                    }
                }
                if (e) {
                    if (1 == DF_MBh(e) && c.set(d, e), d = DF_MCh(d), f = !1, d) g = DF_MBh(d), h = DF_MAh(d).toLowerCase(), k = DF_MCh(d), 11 != g || k ? "body" == h && k && (g = DF_MCh(k)) && !DF_MCh(g) && (f = !0) : f = !0, g = null, f || !d ? g = a : 1 == DF_MBh(d) && (g = c.get(d)), g.content && (g = g.content), g.appendChild(e)
                } else
                    for (e = d; d = e.firstChild;) e.removeChild(d)
            }
            c.clear && c.clear()
        }
        0 < DF_Mwh(a).length && (b = this.h.createElement("span"), b.appendChild(a), a = b);
        a = (new XMLSerializer).serializeToString(a);
        a = a.slice(a.indexOf(">") +
            1, a.lastIndexOf("</"))
    } else a = "";
    return DF_MLc(a)
};

function DF_Mhi(a, b) {
    var c = b.data;
    (b = DF_MCh(b)) && "style" == DF_MAh(b).toLowerCase() && !("STYLE" in a.G) && "STYLE" in a.i && (c = DF_Muc(DF_MLh(c, a.j, DF_MCa(function(d, e) {
        return this.N(d, {
            Rc: e
        })
    }, a))));
    return document.createTextNode(c)
};
var DF_M8h = "a b br div h1 h2 h3 i img li ol p span table td thead tbody th tr u ul".split(" ");

function DF_Mii(a, b) {
    if (!b) return DF_Mfc;
    if ("*" === b) return DF_MQc(a);
    b = DF_Md(b.split(","));
    for (var c = b.next(); !c.done; c = b.next())
        if (c = c.value.trim(), 0 !== c.length && a.startsWith(c)) return DF_MQc(a);
    return DF_Mfc
}

function DF_Mji(a) {
    return new DF_M_h(DF_M9h(DF_M$h(DF_M5h(), function(b, c) {
        return "class" === (null == c ? void 0 : c.attributeName) ? b : null
    }), function(b) {
        return DF_Mii(b, a)
    }))
};
/*

 Copyright (c) 2011-2018, Christopher Jeffrey (https://github.com/chjj/)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
*/
function DF_Mki(a, b, c) {
    if (0 === a.length) return "";
    for (var d = 0; d < a.length;) {
        var e = a.charAt(a.length - d - 1);
        if (e !== b || c)
            if (e !== b && c) d++;
            else break;
        else d++
    }
    return a.substr(0, a.length - d)
}

function DF_Mli(a, b) {
    a = a.replace(/\|/g, function(d, e, f) {
        for (d = !1; 0 <= --e && "\\" === f[e];) d = !d;
        return d ? "|" : " |"
    }).split(/ \|/);
    var c = 0;
    if (a.length > b) a.splice(b);
    else
        for (; a.length < b;) a.push("");
    for (; c < a.length; c++) a[c] = a[c].trim().replace(/\\\|/g, "|");
    return a
}

function DF_Mmi(a, b) {
    for (var c = 1, d, e; c < arguments.length; c++)
        for (e in d = arguments[c], d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
    return a
}

function DF_Mni() {}

function DF_Moi(a, b, c) {
    if (a) {
        try {
            var d = decodeURIComponent(DF_Mpi(c)).replace(/[^\w:]/g, "").toLowerCase()
        } catch (e) {
            return null
        }
        if (0 === d.indexOf("javascript:") || 0 === d.indexOf("vbscript:") || 0 === d.indexOf("data:")) return null
    }
    b && !DF_Mqi.test(c) && (a = b, DF_Mri[" " + a] || (DF_Mri[" " + a] = /^[^:]+:\/*[^/]*$/.test(a) ? a + "/" : DF_Mki(a, "/", !0)), a = DF_Mri[" " + a], c = "//" === c.slice(0, 2) ? a.replace(/:[\s\S]*/, ":") + c : "/" === c.charAt(0) ? a.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + c : a + c);
    try {
        c = encodeURI(c).replace(/%25/g, "%")
    } catch (e) {
        return null
    }
    return c
}

function DF_MZ(a, b) {
    a = a.source || a;
    b = b || "";
    return {
        replace: function(c, d) {
            d = d.source || d;
            d = d.replace(/(^|[^\[])\^/g, "$1");
            a = a.replace(c, d);
            return this
        },
        M: function() {
            return new RegExp(a, b)
        }
    }
}

function DF_Mpi(a) {
    return a.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(b, c) {
        c = c.toLowerCase();
        return "colon" === c ? ":" : "#" === c.charAt(0) ? "x" === c.charAt(1) ? String.fromCharCode(parseInt(c.substring(2), 16)) : String.fromCharCode(+c.substring(1)) : ""
    })
}

function DF_M_(a, b) {
    if (b) {
        if (DF_Msi.test(a)) return a.replace(DF_Mti, function(c) {
            return DF_Mui[c]
        })
    } else if (DF_Mvi.test(a)) return a.replace(DF_Mwi, function(c) {
        return DF_Mui[c]
    });
    return a
}

function DF_Mxi() {
    this.Pa = {}
}

function DF_Myi(a) {
    this.g = [];
    this.token = null;
    this.options = a || DF_M0.na;
    this.options.H = this.options.H || new DF_Mzi;
    this.H = this.options.H;
    this.H.options = this.options;
    this.i = new DF_Mxi
}

function DF_MAi() {}

function DF_Mzi() {
    this.options = DF_M0.na
}

function DF_MBi(a, b) {
    this.options = b || DF_M0.na;
    this.links = a;
    this.g = DF_M1.sa;
    this.H = this.options.H || new DF_Mzi;
    this.H.options = this.options;
    this.h = !1;
    if (!this.links) throw Error("Tokens array requires a `links` property.");
    this.options.ia ? this.g = DF_M1.ia : this.options.W && (this.g = this.options.xb ? DF_M1.xb : DF_M1.W)
}

function DF_MCi(a) {
    this.g = [];
    this.g.links = Object.create(null);
    this.options = a || DF_M0.na;
    this.h = DF_M2.sa;
    this.options.ia ? this.h = DF_M2.ia : this.options.W && (this.h = this.options.Pb ? DF_M2.Pb : DF_M2.W)
}
var DF_M2 = {
    jd: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    Bb: DF_Mni,
    Ya: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    ic: DF_Mni,
    Ja: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
    Ka: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
    table: DF_Mni,
    ec: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    da: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
    text: /^[^\n]+/,
    la: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
    vb: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
};
DF_M2.Ka = DF_MZ(DF_M2.Ka).replace("label", DF_M2.la).replace("title", DF_M2.vb).M();
DF_M2.yb = /(?:[*+-]|\d{1,9}\.)/;
DF_M2.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
DF_M2.item = DF_MZ(DF_M2.item, "gm").replace(/bull/g, DF_M2.yb).M();
DF_M2.list = DF_MZ(DF_M2.list).replace(/bull/g, DF_M2.yb).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + DF_M2.Ka.source + ")").M();
DF_M2.Ub = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
DF_M2.rb = /\x3c!--(?!-?>)[\s\S]*?--\x3e/;
DF_M2.html = DF_MZ(DF_M2.html, "i").replace("comment", DF_M2.rb).replace("tag", DF_M2.Ub).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).M();
DF_M2.da = DF_MZ(DF_M2.da).replace("hr", DF_M2.Ya).replace("heading", DF_M2.heading).replace("lheading", DF_M2.ec).replace("tag", DF_M2.Ub).M();
DF_M2.Ja = DF_MZ(DF_M2.Ja).replace("paragraph", DF_M2.da).M();
DF_M2.sa = DF_Mmi({}, DF_M2);
DF_M2.W = DF_Mmi({}, DF_M2.sa, {
    Bb: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    da: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});
DF_M2.W.da = DF_MZ(DF_M2.da).replace("(?!", "(?!" + DF_M2.W.Bb.source.replace("\\1", "\\2") + "|" + DF_M2.list.source.replace("\\1", "\\3") + "|").M();
DF_M2.Pb = DF_Mmi({}, DF_M2.W, {
    ic: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});
DF_M2.ia = DF_Mmi({}, DF_M2.sa, {
    html: DF_MZ("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", DF_M2.rb).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").M(),
    Ka: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
});

function DF_MDi(a, b) {
    return (new DF_MCi(b)).token(a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), !0)
}
DF_MCi.prototype.token = function(a, b) {
    a = a.replace(/^ +$/gm, "");
    for (var c, d, e, f, g, h, k, l, m, n, p; a;) {
        if (e = this.h.jd.exec(a)) a = a.substring(e[0].length), 1 < e[0].length && this.g.push({
            type: "space"
        });
        if (e = this.h.code.exec(a)) a = a.substring(e[0].length), e = e[0].replace(/^ {4}/gm, ""), this.g.push({
            type: "code",
            text: this.options.ia ? e : DF_Mki(e, "\n")
        });
        else if (e = this.h.Bb.exec(a)) a = a.substring(e[0].length), this.g.push({
            type: "code",
            lang: e[2] ? e[2].trim() : e[2],
            text: e[3] || ""
        });
        else if (e = this.h.heading.exec(a)) a = a.substring(e[0].length),
            this.g.push({
                type: "heading",
                depth: e[1].length,
                text: e[2]
            });
        else {
            if (b && (e = this.h.ic.exec(a)) && (g = {
                    type: "table",
                    ca: DF_Mli(e[1].replace(/^ *| *\| *$/g, "")),
                    align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: e[3] ? e[3].replace(/\n$/, "").split("\n") : []
                }, g.ca.length === g.align.length)) {
                a = a.substring(e[0].length);
                for (l = 0; l < g.align.length; l++) g.align[l] = /^ *-+: *$/.test(g.align[l]) ? "right" : /^ *:-+: *$/.test(g.align[l]) ? "center" : /^ *:-+ *$/.test(g.align[l]) ? "left" : null;
                for (l = 0; l < g.cells.length; l++) g.cells[l] =
                    DF_Mli(g.cells[l], g.ca.length);
                this.g.push(g);
                continue
            }
            if (e = this.h.Ya.exec(a)) a = a.substring(e[0].length), this.g.push({
                type: "hr"
            });
            else if (e = this.h.Ja.exec(a)) a = a.substring(e[0].length), this.g.push({
                type: "blockquote_start"
            }), e = e[0].replace(/^ *> ?/gm, ""), this.token(e, b), this.g.push({
                type: "blockquote_end"
            });
            else if (e = this.h.list.exec(a)) {
                a = a.substring(e[0].length);
                f = e[2];
                c = 1 < f.length;
                h = {
                    type: "list_start",
                    ordered: c,
                    start: c ? +f : "",
                    Na: !1
                };
                this.g.push(h);
                e = e[0].match(this.h.item);
                k = [];
                c = !1;
                m = e.length;
                for (l =
                    0; l < m; l++) g = e[l], d = g.length, g = g.replace(/^ *([*+-]|\d+\.) */, ""), ~g.indexOf("\n ") && (d -= g.length, g = this.options.ia ? g.replace(/^ {1,4}/gm, "") : g.replace(new RegExp("^ {1," + d + "}", "gm"), "")), l !== m - 1 && (d = DF_M2.yb.exec(e[l + 1])[0], 1 < f.length ? 1 === d.length : 1 < d.length || this.options.pd && d !== f) && (a = e.slice(l + 1).join("\n") + a, l = m - 1), d = c || /\n\n(?!\s*$)/.test(g), l !== m - 1 && (c = "\n" === g.charAt(g.length - 1), d || (d = c)), d && (h.Na = !0), n = /^\[[ xX]\] /.test(g), p = void 0, n && (p = " " !== g[1], g = g.replace(/^\[[ xX]\] +/, "")), d = {
                    type: "list_item_start",
                    sd: n,
                    checked: p,
                    Na: d
                }, k.push(d), this.g.push(d), this.token(g, !1), this.g.push({
                    type: "list_item_end"
                });
                if (h.Na)
                    for (m = k.length, l = 0; l < m; l++) k[l].Na = !0;
                this.g.push({
                    type: "list_end"
                })
            } else if (e = this.h.html.exec(a)) a = a.substring(e[0].length), this.g.push({
                type: this.options.ea ? "paragraph" : "html",
                Ed: !this.options.Oa && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
                text: e[0]
            });
            else if (b && (e = this.h.Ka.exec(a))) a = a.substring(e[0].length), e[3] && (e[3] = e[3].substring(1, e[3].length - 1)), f = e[1].toLowerCase().replace(/\s+/g,
                " "), this.g.links[f] || (this.g.links[f] = {
                href: e[2],
                title: e[3]
            });
            else {
                if (b && (e = this.h.table.exec(a)) && (g = {
                        type: "table",
                        ca: DF_Mli(e[1].replace(/^ *| *\| *$/g, "")),
                        align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: e[3] ? e[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
                    }, g.ca.length === g.align.length)) {
                    a = a.substring(e[0].length);
                    for (l = 0; l < g.align.length; l++) g.align[l] = /^ *-+: *$/.test(g.align[l]) ? "right" : /^ *:-+: *$/.test(g.align[l]) ? "center" : /^ *:-+ *$/.test(g.align[l]) ? "left" : null;
                    for (l = 0; l < g.cells.length; l++) g.cells[l] =
                        DF_Mli(g.cells[l].replace(/^ *\| *| *\| *$/g, ""), g.ca.length);
                    this.g.push(g);
                    continue
                }
                if (e = this.h.ec.exec(a)) a = a.substring(e[0].length), this.g.push({
                    type: "heading",
                    depth: "=" === e[2] ? 1 : 2,
                    text: e[1]
                });
                else if (b && (e = this.h.da.exec(a))) a = a.substring(e[0].length), this.g.push({
                    type: "paragraph",
                    text: "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1]
                });
                else if (e = this.h.text.exec(a)) a = a.substring(e[0].length), this.g.push({
                    type: "text",
                    text: e[0]
                });
                else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
            }
        }
    }
    return this.g
};
var DF_M1 = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    wb: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: DF_Mni,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
    cb: /^!?\[(label)\]\[(ref)\]/,
    Ib: /^!?\[(ref)\](?:\[\])?/,
    Ra: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    ra: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    ya: /^( {2,}|\\)\n(?!\s*$)/,
    La: DF_Mni,
    text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
    Nc: "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"
};
DF_M1.ra = DF_MZ(DF_M1.ra).replace(/punctuation/g, DF_M1.Nc).M();
DF_M1.Kc = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
DF_M1.Oc = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
DF_M1.Jc = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
DF_M1.wb = DF_MZ(DF_M1.wb).replace("scheme", DF_M1.Oc).replace("email", DF_M1.Jc).M();
DF_M1.Ec = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
DF_M1.tag = DF_MZ(DF_M1.tag).replace("comment", DF_M2.rb).replace("attribute", DF_M1.Ec).M();
DF_M1.la = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/;
DF_M1.Mc = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
DF_M1.vb = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
DF_M1.link = DF_MZ(DF_M1.link).replace("label", DF_M1.la).replace("href", DF_M1.Mc).replace("title", DF_M1.vb).M();
DF_M1.cb = DF_MZ(DF_M1.cb).replace("label", DF_M1.la).replace("ref", DF_M2.la).M();
DF_M1.Ib = DF_MZ(DF_M1.Ib).replace("ref", DF_M2.la).M();
DF_M1.sa = DF_Mmi({}, DF_M1);
DF_M1.ia = DF_Mmi({}, DF_M1.sa, {
    Ra: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    ra: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: DF_MZ(/^!?\[(label)\]\((.*?)\)/).replace("label", DF_M1.la).M(),
    cb: DF_MZ(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", DF_M1.la).M()
});
DF_M1.W = DF_Mmi({}, DF_M1.sa, {
    escape: DF_MZ(DF_M1.escape).replace("])", "~|])").M(),
    Lc: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    Fc: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    La: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: DF_MZ(DF_M1.text).replace("]|", "~]|").replace("|$", "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$").M()
});
DF_M1.W.url = DF_MZ(DF_M1.W.url, "i").replace("email", DF_M1.W.Lc).M();
DF_M1.xb = DF_Mmi({}, DF_M1.W, {
    ya: DF_MZ(DF_M1.ya).replace("{2,}", "*").M(),
    text: DF_MZ(DF_M1.W.text).replace("{2,}", "*").M()
});
DF_MBi.prototype.output = function(a) {
    for (var b = "", c, d, e; a;)
        if (e = this.g.escape.exec(a)) a = a.substring(e[0].length), b += DF_M_(e[1]);
        else if (e = this.g.tag.exec(a)) !this.h && /^<a /i.test(e[0]) ? this.h = !0 : this.h && /^<\/a>/i.test(e[0]) && (this.h = !1), !this.i && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.i = !0 : this.i && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.i = !1), a = a.substring(e[0].length), b += this.options.ea ? this.options.Oa ? this.options.Oa(e[0]) : DF_M_(e[0]) : e[0];
    else if (e = this.g.link.exec(a)) {
        a: {
            d =
            e[2];
            if (-1 !== d.indexOf(")"))
                for (var f = c = 0; f < d.length; f++)
                    if ("\\" === d[f]) f++;
                    else if ("(" === d[f]) c++;
            else if (")" === d[f] && (c--, 0 > c)) {
                d = f;
                break a
            }
            d = -1
        } - 1 < d && (c = e[2].length - d, e[2] = e[2].substring(0, d), e[0] = e[0].substring(0, e[0].length - c));a = a.substring(e[0].length);this.h = !0;d = e[2];this.options.ia ? (c = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(d)) ? (d = c[1], c = c[3]) : c = "" : c = e[3] ? e[3].slice(1, -1) : "";d = d.trim().replace(/^<([\s\S]*)>$/, "$1");b += DF_MEi(this, e, {
            href: DF_MFi(d),
            title: DF_MFi(c)
        });this.h = !1
    }
    else if ((e = this.g.cb.exec(a)) ||
        (e = this.g.Ib.exec(a))) a = a.substring(e[0].length), c = (e[2] || e[1]).replace(/\s+/g, " "), (c = this.links[c.toLowerCase()]) && c.href ? (this.h = !0, b += DF_MEi(this, e, c), this.h = !1) : (b += e[0].charAt(0), a = e[0].substring(1) + a);
    else if (e = this.g.Ra.exec(a)) a = a.substring(e[0].length), b += this.H.Ra(this.output(e[4] || e[3] || e[2] || e[1]));
    else if (e = this.g.ra.exec(a)) a = a.substring(e[0].length), b += this.H.ra(this.output(e[6] || e[5] || e[4] || e[3] || e[2] || e[1]));
    else if (e = this.g.code.exec(a)) a = a.substring(e[0].length), b += this.H.Yb(DF_M_(e[2].trim(),
        !0));
    else if (e = this.g.ya.exec(a)) a = a.substring(e[0].length), b += this.H.ya();
    else if (e = this.g.La.exec(a)) a = a.substring(e[0].length), b += this.H.La(this.output(e[1]));
    else if (e = this.g.wb.exec(a)) a = a.substring(e[0].length), "@" === e[2] ? (c = DF_M_(this.Hb(e[1])), d = "mailto:" + c) : d = c = DF_M_(e[1]), b += this.H.link(d, null, c);
    else if (!this.h && (e = this.g.url.exec(a))) {
        if ("@" === e[2]) c = DF_M_(e[0]), d = "mailto:" + c;
        else {
            do d = e[0], e[0] = this.g.Fc.exec(e[0])[0]; while (d !== e[0]);
            c = DF_M_(e[0]);
            d = "www." === e[1] ? "http://" + c : c
        }
        a = a.substring(e[0].length);
        b += this.H.link(d, null, c)
    } else if (e = this.g.text.exec(a)) a = a.substring(e[0].length), b = this.i ? b + this.H.text(e[0]) : b + this.H.text(DF_M_(this.Ob(e[0])));
    else if (a) throw Error("Infinite loop on byte: " + a.charCodeAt(0));
    return b
};

function DF_MFi(a) {
    return a ? a.replace(DF_M1.Kc, "$1") : a
}

function DF_MEi(a, b, c) {
    var d = c.href;
    c = c.title ? DF_M_(c.title) : null;
    return "!" !== b[0].charAt(0) ? a.H.link(d, c, a.output(b[1])) : a.H.image(d, c, DF_M_(b[1]))
}
DF_MBi.prototype.Ob = function(a) {
    return this.options.Ob ? a.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : a
};
DF_MBi.prototype.Hb = function(a) {
    if (!this.options.Hb) return a;
    for (var b = "", c = a.length, d = 0, e; d < c; d++) e = a.charCodeAt(d), .5 < Math.random() && (e = "x" + e.toString(16)), b += "&#" + e + ";";
    return b
};
DF_M = DF_Mzi.prototype;
DF_M.code = function(a, b, c) {
    b = (b || "").match(/\S*/)[0];
    if (this.options.highlight) {
        var d = this.options.highlight(a, b);
        null != d && d !== a && (c = !0, a = d)
    }
    return b ? '<pre><code class="' + this.options.gd + DF_M_(b, !0) + '">' + (c ? a : DF_M_(a, !0)) + "</code></pre>\n" : "<pre><code>" + (c ? a : DF_M_(a, !0)) + "</code></pre>"
};
DF_M.Ja = function(a) {
    return "<blockquote>\n" + a + "</blockquote>\n"
};
DF_M.html = function(a) {
    return a
};
DF_M.heading = function(a, b, c, d) {
    if (this.options.ad) {
        var e = "<h" + b + ' id="' + this.options.bd;
        c = c.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
        if (d.Pa.hasOwnProperty(c)) {
            var f = c;
            do d.Pa[f]++, c = f + "-" + d.Pa[f]; while (d.Pa.hasOwnProperty(c))
        }
        d.Pa[c] = 0;
        a = e + c + '">' + a + "</h" + b + ">\n"
    } else a = "<h" + b + ">" + a + "</h" + b + ">\n";
    return a
};
DF_M.Ya = function() {
    return this.options.nb ? "<hr/>\n" : "<hr>\n"
};
DF_M.list = function(a, b, c) {
    var d = b ? "ol" : "ul";
    return "<" + d + (b && 1 !== c ? ' start="' + c + '"' : "") + ">\n" + a + "</" + d + ">\n"
};
DF_M.da = function(a) {
    return "<p>" + a + "</p>\n"
};
DF_M.table = function(a, b) {
    b && (b = "<tbody>" + b + "</tbody>");
    return "<table>\n<thead>\n" + a + "</thead>\n" + b + "</table>\n"
};

function DF_MGi(a, b) {
    var c = b.ca ? "th" : "td";
    return (b.align ? "<" + c + ' align="' + b.align + '">' : "<" + c + ">") + a + "</" + c + ">\n"
}
DF_M.Ra = function(a) {
    return "<strong>" + a + "</strong>"
};
DF_M.ra = function(a) {
    return "<em>" + a + "</em>"
};
DF_M.Yb = function(a) {
    return "<code>" + a + "</code>"
};
DF_M.ya = function() {
    return this.options.nb ? "<br/>" : "<br>"
};
DF_M.La = function(a) {
    return "<del>" + a + "</del>"
};
DF_M.link = function(a, b, c) {
    a = DF_Moi(this.options.ea, this.options.Wb, a);
    if (null === a) return c;
    a = '<a href="' + DF_M_(a) + '"';
    b && (a += ' title="' + b + '"');
    return a + (">" + c + "</a>")
};
DF_M.image = function(a, b, c) {
    a = DF_Moi(this.options.ea, this.options.Wb, a);
    if (null === a) return c;
    a = '<img src="' + a + '" alt="' + c + '"';
    b && (a += ' title="' + b + '"');
    return a += this.options.nb ? "/>" : ">"
};
DF_M.text = function(a) {
    return a
};
DF_M = DF_MAi.prototype;
DF_M.Ra = function(a) {
    return a
};
DF_M.ra = function(a) {
    return a
};
DF_M.Yb = function(a) {
    return a
};
DF_M.La = function(a) {
    return a
};
DF_M.text = function(a) {
    return a
};
DF_M.link = function(a, b, c) {
    return c
};
DF_M.image = function(a, b, c) {
    return c
};
DF_M.ya = function() {
    return ""
};

function DF_MHi(a, b) {
    return (new DF_Myi(b)).parse(a)
}
DF_Myi.prototype.parse = function(a) {
    this.inline = new DF_MBi(a.links, this.options);
    this.h = new DF_MBi(a.links, DF_Mmi({}, this.options, {
        H: new DF_MAi
    }));
    this.g = a.reverse();
    for (a = ""; this.next();) a += DF_MIi(this);
    return a
};
DF_Myi.prototype.next = function() {
    return this.token = this.g.pop()
};

function DF_MJi(a) {
    for (var b = a.token.text;
        "text" === (a.g[a.g.length - 1] || 0).type;) b += "\n" + a.next().text;
    return a.inline.output(b)
}

function DF_MIi(a) {
    switch (a.token.type) {
        case "space":
            return "";
        case "hr":
            return a.H.Ya();
        case "heading":
            return a.H.heading(a.inline.output(a.token.text), a.token.depth, DF_Mpi(a.h.output(a.token.text)), a.i);
        case "code":
            return a.H.code(a.token.text, a.token.lang, a.token.Vc);
        case "table":
            var b = "",
                c = "",
                d, e;
            var f = "";
            for (d = 0; d < a.token.ca.length; d++) f += DF_MGi(a.inline.output(a.token.ca[d]), {
                ca: !0,
                align: a.token.align[d]
            });
            b += "<tr>\n" + f + "</tr>\n";
            for (d = 0; d < a.token.cells.length; d++) {
                var g = a.token.cells[d];
                f = "";
                for (e = 0; e < g.length; e++) f += DF_MGi(a.inline.output(g[e]), {
                    ca: !1,
                    align: a.token.align[e]
                });
                c += "<tr>\n" + f + "</tr>\n"
            }
            return a.H.table(b, c);
        case "blockquote_start":
            for (c = "";
                "blockquote_end" !== a.next().type;) c += DF_MIi(a);
            return a.H.Ja(c);
        case "list_start":
            c = "";
            b = a.token.ordered;
            for (d = a.token.start;
                "list_end" !== a.next().type;) c += DF_MIi(a);
            return a.H.list(c, b, d);
        case "list_item_start":
            c = "";
            b = a.token.Na;
            for (a.token.sd && (c += "<input " + (a.token.checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (a.H.options.nb ?
                    " /" : "") + "> ");
                "list_item_end" !== a.next().type;) c += b || "text" !== a.token.type ? DF_MIi(a) : DF_MJi(a);
            return "<li>" + c + "</li>\n";
        case "html":
            return a.H.html(a.token.text);
        case "paragraph":
            return a.H.da(a.inline.output(a.token.text));
        case "text":
            return a.H.da(DF_MJi(a));
        default:
            c = 'Token with "' + a.token.type + '" type was not found.';
            if (a.options.silent) return console.log(c), "";
            throw Error(c);
    }
}
var DF_Msi = /[&<>"']/,
    DF_Mti = /[&<>"']/g,
    DF_Mui = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    },
    DF_Mvi = /[<>"']|&(?!#?\w+;)/,
    DF_Mwi = /[<>"']|&(?!#?\w+;)/g,
    DF_Mri = {},
    DF_Mqi = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
DF_Mni.exec = DF_Mni;

function DF_M0(a, b, c) {
    if ("undefined" === typeof a || null === a) throw Error("marked(): input parameter is undefined or null");
    if ("string" !== typeof a) throw Error("marked(): input parameter is of type " + Object.prototype.toString.call(a) + ", string expected");
    if (c || "function" === typeof b) {
        c || (c = b, b = null);
        b = DF_Mmi({}, DF_M0.na, b || {});
        var d = b.highlight,
            e = 0;
        try {
            var f = DF_MDi(a, b)
        } catch (k) {
            return c(k)
        }
        var g = f.length;
        var h = function(k) {
            if (k) return b.highlight = d, c(k);
            try {
                var l = DF_MHi(f, b)
            } catch (m) {
                k = m
            }
            b.highlight = d;
            return k ? c(k) : c(null, l)
        };
        if (!d || 3 > d.length) return h();
        delete b.highlight;
        if (!g) return h();
        for (; e < f.length; e++)(function(k) {
            return "code" !== k.type ? --g || h() : d(k.text, k.lang, function(l, m) {
                if (l) return h(l);
                if (null == m || m === k.text) return --g || h();
                k.text = m;
                k.Vc = !0;
                --g || h()
            })
        })(f[e])
    } else try {
        return b && (b = DF_Mmi({}, DF_M0.na, b)), DF_MHi(DF_MDi(a, b), b)
    } catch (k) {
        k.message += "\nPlease report this to https://github.com/markedjs/marked.";
        if ((b || DF_M0.na).silent) return "<p>An error occurred:</p><pre>" + DF_M_(k.message,
            !0) + "</pre>";
        throw k;
    }
}
DF_M0.options = function(a) {
    DF_Mmi(DF_M0.na, a);
    return DF_M0
};
DF_M0.Wc = function() {
    return {
        Wb: null,
        xb: !1,
        W: !0,
        ad: !0,
        bd: "",
        highlight: null,
        gd: "language-",
        Hb: !0,
        ia: !1,
        H: new DF_Mzi,
        ea: !1,
        Oa: null,
        silent: !1,
        pd: !1,
        Ob: !1,
        Pb: !0,
        nb: !1
    }
};
DF_M0.na = DF_M0.Wc();
DF_M0.parse = DF_M0;

function DF_MKi(a) {
    return DF_M9h(DF_M$h(new DF_M0h, function(b, c) {
        return "class" === (null == c ? void 0 : c.attributeName) ? b : null
    }), function(b) {
        return DF_Mii(b, a)
    })
}

function DF_MLi(a) {
    this.g = new DF_M_h(DF_MKi(a));
    this.h = [new DF_MKg(this.g), new DF_MMg];
    a = DF_MKi(a);
    for (var b = DF_Md(this.h), c = b.next(); !c.done; c = b.next()) a = c.value.Vb(a);
    this.i = new DF_M_h(a)
}
DF_MLi.prototype.Xa = function(a) {
    var b = document.createElement("template");
    DF_MFg(b, a);
    a = document.createNodeIterator(b.content, NodeFilter.SHOW_ELEMENT, function(h) {
        return h.nodeType === Node.ELEMENT_NODE ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    for (var c = a.nextNode(); c;) {
        var d = c;
        c = a.nextNode();
        for (var e = [], f = DF_Md(this.h), g = f.next(); !g.done; g = f.next()) g = g.value, g.hc(d) && (e.push(g.Zb), 1 < e.length || g.Xa(d));
        1 < e.length && console.debug("DF-MESSENGER", "Node '" + d.nodeName + "' targeted by multiple enrichers: " +
            e.join(", ") + " (first one executed)")
    }
    return this.i.ea(b.innerHTML)
};

function DF_MMi(a, b, c, d) {
    a = a.substring(b, c);
    return d ? a : a.replace(/\n/g, "  \n")
};

function DF_MNi(a, b) {
    this.utterance = a;
    this.urlAllowlist = void 0 === b ? null : b
}
DF_MNi.prototype.render = function() {
    return Object.assign({}, {
        utteranceId: this.utterance.utteranceId,
        languageCode: this.utterance.languageCode,
        isBot: this.utterance.isBot,
        mode: this.utterance.mode,
        elements: DF_MOi(this)
    }, void 0 !== this.utterance.allowFeedback ? {
        allowFeedback: this.utterance.allowFeedback
    } : {}, this.utterance.responseId ? {
        responseId: this.utterance.responseId
    } : {})
};

function DF_MOi(a) {
    return a.utterance.messages.map(function(b) {
        switch (b.type) {
            case "text":
                b = b.text;
                if (a.utterance.isBot) {
                    for (var c, d = new DF_MLi(a.urlAllowlist), e = DF_M0, f = "", g = /```/g, h, k = !1, l = 0; h = g.exec(b);) h = h.index + 3, f += DF_MMi(b, l, h, k), k = !k, l = h;
                    f += DF_MMi(b, l, b.length, k);
                    (c = (e = null == (c = e(f)) ? void 0 : c.trim()) ? d.Xa(d.g.ea(e)) : null) ? (b = new DF_Mcg(a.utterance.utteranceId, "none"), b.languageCode = a.utterance.languageCode, b.markdown = c) : b = DF_MPi(a, b)
                } else b = DF_MPi(a, b);
                return b;
            case "customCard":
                return DF_MQi(a,
                    b.richElements);
            default:
                return DF_MRi(a, b)
        }
    }).filter(DF_M2a)
}

function DF_MPi(a, b) {
    var c = new DF_Mig(a.utterance.utteranceId, "none");
    c.isBot = a.utterance.isBot;
    c.languageCode = a.utterance.languageCode;
    c.text = b;
    return c
}

function DF_MQi(a, b) {
    b = b.map(function(d) {
        return DF_MRi(a, d)
    }).filter(DF_M2a);
    if (0 === b.length) return null;
    var c = new DF_Mof(a.utterance.utteranceId, "none");
    c.languageCode = a.utterance.languageCode;
    c.elements = b;
    return c
}

function DF_MRi(a, b) {
    var c = void 0;
    switch (b.type) {
        case "info":
            var d = new DF_MS(a.utterance.utteranceId, b.id);
            d.title = b.title ? b.title : "";
            d.subtitle = b.subtitle ? b.subtitle : "";
            d.image = DF_Mvg(b.image);
            d.anchor = DF_Mkg(b);
            c = d;
            break;
        case "description":
            d = new DF_MDf(a.utterance.utteranceId, b.id);
            d.title = b.title ? b.title : "";
            var e;
            d.text = null != (e = b.text) ? e : null;
            c = d;
            break;
        case "button":
            d = new DF_Mlf(a.utterance.utteranceId, b.id);
            d.text = b.text;
            var f;
            e = null != (f = b.anchor) ? f : b.link ? {
                href: b.link
            } : null;
            d.anchor = e ? new DF_Mlg(e) :
                null;
            var g;
            d.icon = null != (g = b.icon) ? g : null;
            d.image = DF_Mvg(b.image);
            d.event = b.event;
            d.mode = b.mode || "normal";
            c = d;
            break;
        case "image":
            d = new DF_M0f(a.utterance.utteranceId, b.id);
            d.source = b.rawUrl ? b.rawUrl : "";
            d.accessibilityText = b.accessibilityText ? b.accessibilityText : "image";
            var h;
            d.reference = b.reference ? {
                text: b.reference.text,
                anchor: new DF_Mlg(b.reference.anchor),
                image: null != (h = DF_Mvg(b.reference.image)) ? h : void 0
            } : null;
            c = d;
            break;
        case "list":
            d = new DF_M$f(a.utterance.utteranceId, b.id);
            d.title = b.title ? b.title :
                "";
            d.subtitle = b.subtitle ? b.subtitle : "";
            d.image = DF_Mvg(b.image);
            var k;
            d.event = null != (k = b.event) ? k : null;
            d.anchor = b.anchor ? new DF_Mlg(b.anchor) : null;
            c = d;
            break;
        case "divider":
            c = new DF_MFf(a.utterance.utteranceId, b.id);
            break;
        case "accordion":
            d = new DF_M8e(a.utterance.utteranceId, b.id);
            d.title = b.title;
            d.subtitle = b.subtitle;
            d.image = DF_Mvg(b.image);
            d.text = DF_Mji(a.urlAllowlist).ea(b.text);
            c = d;
            break;
        case "chips":
            c = DF_MSi(a, b);
            break;
        case "html":
            d = new DF_MSf(a.utterance.utteranceId, b.id);
            d.html = DF_Mji(a.urlAllowlist).ea(b.html);
            c = d;
            break;
        case "match_citations":
            c = DF_MTi(a, b);
            break;
        case "custom_template":
            d = new DF_Myf(a.utterance.utteranceId, b.id);
            d.elementName = b.name;
            d.payload = b.payload;
            var l;
            d.responseId = null != (l = a.utterance.responseId) ? l : null;
            c = d;
            break;
        case "video":
            a: {
                f = new DF_Mug(a.utterance.utteranceId, b.id);
                switch (b.source.type) {
                    case "link":
                        f.anchor = new DF_Mlg(b.source.anchor);
                        var m;
                        f.embeddedPlayer = null != (m = b.source.embeddedPlayer) ? m : null;
                        b.source.thumbnail ? f.thumbnail = DF_Mvg(b.source.thumbnail) : !b.source.embeddedPlayer &&
                            DF_M7a.test(b.source.anchor.href) && (g = (g = DF_M8a(b.source.anchor.href)) ? "https://ytimg.googleusercontent.com/vi/" + g + "/hqdefault.jpg" : void 0, g && (f.thumbnail = {
                                rawUrl: g
                            }));
                        if (!f.thumbnail && !f.embeddedPlayer) {
                            c = void 0;
                            break a
                        }
                        break;
                    case "raw":
                        f.source = b.source.rawUrl;
                        break;
                    default:
                        console.debug("DF-MESSENGER", "Unknown video source", b.source);
                        c = void 0;
                        break a
                }
                f.videoTitle = null != (d = b.title) ? d : null;f.videoType = b.source.type;c = f
            }
            break;
        case "files":
            c = DF_MUi(a, b);
            break;
        default:
            console.error("DF-MESSENGER", "Parser",
                "Could not render " + b.type)
    }
    c && (c.languageCode = a.utterance.languageCode);
    return c
}

function DF_MSi(a, b) {
    if (0 !== b.options.length) return a = new DF_Mrf(a.utterance.utteranceId, b.id), a.chips = b.options.map(function(c) {
        var d, e = null != (d = c.anchor) ? d : c.link ? {
            href: c.link
        } : null;
        d = e ? new DF_Mlg(e) : null;
        var f;
        e = null != (f = DF_Mvg(c.image)) ? f : void 0;
        return d ? new DF_MBg(c.text, d, e, c.accessibilityText, c.mode) : new DF_MAg(c.text, e, c.accessibilityText, c.mode)
    }), a
}

function DF_MTi(a, b) {
    var c = b.citations.map(function(d) {
        var e = DF_Mmg(d);
        return e ? {
            title: d.title,
            anchor: e
        } : null
    }).filter(DF_M2a);
    if (0 !== c.length) return a = new DF_Mwf(a.utterance.utteranceId, b.id), a.citations = c, a
}

function DF_MUi(a, b) {
    a = new DF_MNf(a.utterance.utteranceId, b.id);
    a.files = b.files.map(function(c) {
        var d = c.anchor ? new DF_Mlg(c.anchor) : void 0,
            e, f = null != (e = DF_Mvg(c.image)) ? e : void 0;
        return {
            name: c.name,
            image: f,
            anchor: d
        }
    });
    return a
}

function DF_MVi(a) {
    return a.reduce(function(b, c) {
        var d = Object.assign({}, c);
        d.elements = c.elements.filter(function(e) {
            return e.isVisible()
        });
        0 < d.elements.length && b.push(d);
        return b
    }, [])
};
var DF_MWi = DF_Mc(["https://www.gstatic.com/external_hosted/highlightjs/highlight.pack.js"]),
    DF_MIg = DF_Mc(["https://www.gstatic.com/external_hosted/highlightjs/styles/googlecode.css"]),
    DF_MXi = function() {
        var a = null;
        return function() {
            if (null == a) {
                var b = document.createElement("script");
                DF_MJg(b, DF_MSc(DF_MWi));
                var c = new Promise(function(f) {
                    b.addEventListener("load", function() {
                        return void f()
                    })
                });
                document.head.appendChild(b);
                var d = document.createElement("link");
                DF_MHg(d);
                var e = new Promise(function(f) {
                    d.addEventListener("load",
                        function() {
                            return void f()
                        })
                });
                document.head.appendChild(d);
                a = Promise.all([c, e]).then(function() {})
            }
            return a
        }
    }();

function DF_MYi(a) {
    return null != a ? a : DF_Mw
};
var DF_MZi = DF_Mc(['\n      <div class="entry ', '">\n        ', "\n        ", "\n      </div>"]),
    DF_M_i = DF_Mc(['\n      <div class="actor-container">\n        <div class="actor">\n          <img src=', " />\n        </div>\n      </div>"]),
    DF_M0i = DF_Mc(["\n      <df-messenger-utterance\n        .utterance=", "\n        .languageCode=", "\n      ></df-messenger-utterance>"]),
    DF_M1i = DF_Mc(['\n      <div class="typing-message">\n        <div class="message">', "</div>\n      </div>"]),
    DF_M2i = DF_Mc(['<img src="',
        '" />'
    ]),
    DF_M3i = DF_Mc(["", ""]),
    DF_M4i = DF_Mc(['\n      <div\n        class="error ', '"\n        aria-live="', '"\n      >\n        ', "\n      </div>"]),
    DF_M5i = DF_Mc(['\n      <div id="message-list" aria-live="polite">\n        <div class="content">\n          ', "\n          ", "\n        </div>\n      </div>"]),
    DF_M6i = DF_Mc('\n      <div\n        class="jump-to-bottom ;"\n        aria-live=";"\n      >\n        <button\n          class="focus-outline"\n          aria-label=";"\n          @click=;\n        >\n          <span class="material-icons icon">arrow_downward</span>\n          ;\n        </button>\n      </div>'.split(";")),
    DF_M7i = DF_Mc('\n      <style>\n        @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n      </style>\n      <div\n        class="message-list-wrapper ,\n          ,"\n      >\n        ,\n        ,\n        ,\n      </div >'.split(","));

function DF_M3() {
    var a = DF_MA.apply(this, arguments) || this;
    a.botWritingText = null;
    a.botWritingImage = null;
    a.urlAllowlist = null;
    a.enableCodeHighlight = !1;
    a.botActorImage = null;
    a.userActorImage = null;
    a.noTitlebar = !1;
    a.initialMessages = [];
    a.showBotWriting = !1;
    a.errorCode = null;
    a.O = null;
    a.messages = [];
    a.j = 0;
    a.Qa = !1;
    a.ua = 0;
    a.Ea = new Promise(function(b) {
        a.Fa = b
    });
    a.debug = new DF_MXe;
    return a
}
DF_Mf(DF_M3, DF_MA);
DF_M3.C = DF_MA.C;
DF_M3.m = DF_MA.m;
DF_M3.o = DF_MA.o;
DF_M3.h = DF_MA.h;
DF_M3.g = DF_MA.g;
DF_M3.v = DF_MA.v;
DF_M3.i = DF_MA.i;
DF_M3.s = DF_MA.s;
DF_M3.l = DF_MA.l;
DF_M3.u = DF_MA.u;
DF_M = DF_M3.prototype;
DF_M.connectedCallback = function() {
    DF_MA.prototype.connectedCallback.call(this);
    DF_Ml(this, "df-register-message-consumer", {
        consumer: this
    })
};
DF_M.Z = function(a) {
    var b = this;
    DF_MA.prototype.Z.call(this, a);
    this.enableCodeHighlight ? DF_MXi().then(function() {
        DF_M8i(b)
    }) : DF_M8i(this)
};
DF_M.Da = function(a) {
    var b = this;
    DF_MA.prototype.Da.call(this, a);
    (a.has("messages") || this.showBotWriting) && setTimeout(function() {
        b.jumpToBottom()
    }, 50)
};
DF_M.clearMessages = function() {
    this.messages = []
};
DF_M.addMessages = function(a) {
    var b = this;
    return DF_Mh(function(c) {
        if (1 == c.g) return DF_Mg(c, b.Ea, 2);
        b.messages = [].concat(DF_Me(b.messages), DF_Me(a.map(function(d) {
            return (new DF_MNi(d, b.urlAllowlist)).render()
        })));
        c.g = 0
    })
};

function DF_M8i(a) {
    a.messages = a.initialMessages.map(function(b) {
        return (new DF_MNi(b, a.urlAllowlist)).render()
    });
    a.Fa();
    DF_M9i(a);
    setTimeout(function() {
        DF_M$i(a);
        DF_Maj(a);
        DF_Mbj(a)
    })
}

function DF_M9i(a) {
    a.addEventListener("df-chip-clicked", function() {
        a.messages = DF_MVi(a.messages)
    })
}

function DF_M$i(a) {
    var b = a.h;
    b.addEventListener("scroll", function() {
        b.scrollTop <= a.j || (DF_Ml(a, "df-messenger-message-list-highest-scrolltop", {
            scrollTop: b.scrollTop
        }), a.j = b.scrollTop)
    });
    b.scrollTop = a.j
}

function DF_Maj(a) {
    var b = a.h;
    b.addEventListener("df-messenger-scroll-into-view", function(c) {
        c = c.detail;
        var d = c.element,
            e = b.scrollTop + b.clientHeight,
            f = d.offsetTop + d.offsetHeight + c.padding;
        f > e && a.h.scrollTo({
            top: b.scrollTop + (f - e),
            behavior: "smooth"
        });
        e = b.scrollTop;
        c = d.offsetTop - c.padding;
        c < e && a.h.scrollTo({
            top: b.scrollTop - (e - c),
            behavior: "smooth"
        })
    })
}

function DF_Mbj(a) {
    var b = a.h;
    a.h.addEventListener("scroll", function() {
        var c = Math.ceil(b.scrollTop),
            d = c < Math.min(a.ua, b.scrollHeight - b.clientHeight);
        a.Qa = b.scrollHeight > b.clientHeight && b.scrollHeight - Math.ceil(b.scrollTop) > b.clientHeight && (d || a.Qa);
        a.ua = c
    })
}
DF_M.jumpToBottom = function() {
    var a = this.h;
    a.scrollTo({
        top: a.scrollHeight - a.clientHeight,
        behavior: "smooth"
    })
};

function DF_Mcj(a, b) {
    return (a = b ? a.botActorImage : a.userActorImage) ? DF_Mv(DF_M_i, a) : null
}

function DF_Mdj(a) {
    return a.messages.map(function(b) {
        var c = b.isBot;
        return DF_Mv(DF_MZi, c ? "bot" : "user", DF_Mcj(a, c), DF_Mv(DF_M0i, b, a.languageCode))
    })
}
DF_M.render = function() {
    var a = this.noTitlebar ? "no-titlebar" : "",
        b = this.Qa ? "show-shadow" : "",
        c, d = DF_Mn(this.languageCode, "403" === (null != (c = this.errorCode) ? c : this.O) ? "authErrorMessage" : "genericErrorMessage");
    this.O = this.errorCode;
    c = DF_Mv(DF_M4i, this.errorCode ? "show" : "", DF_MYi(this.errorCode ? "polite" : void 0), d);
    d = DF_Mdj(this);
    var e;
    if (this.showBotWriting) {
        var f = this.botWritingImage ? DF_Mv(DF_M2i, this.botWritingImage) : DF_Mv(DF_M3i, null != (e = this.botWritingText) ? e : "...");
        e = DF_Mv(DF_MZi, "bot", DF_Mcj(this, !0),
            DF_Mv(DF_M1i, f))
    } else e = null;
    e = DF_Mv(DF_M5i, d, e);
    d = DF_Mn(this.languageCode, "jumpToBottom");
    return DF_Mv(DF_M7i, a, b, c, e, DF_Mv(DF_M6i, this.Qa ? "show" : "", DF_MYi(this.errorCode ? "polite" : void 0), d, this.jumpToBottom, d))
};
DF_Ma.Object.defineProperties(DF_M3.prototype, {
    listScrollTop: {
        configurable: !0,
        enumerable: !0,
        set: function(a) {
            this.T && (this.h.scrollTop = a);
            this.j = a
        },
        get: function() {
            return this.j
        }
    },
    h: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.T.querySelector("#message-list")
        }
    }
});
var DF_M4 = DF_M3;
DF_M4.j = [DF_MTd, DF_Mz];
DF_Mj([DF_Mr({
    D: "bot-writing-text",
    type: String
}), DF_Mk("design:type", Object)], DF_M4.prototype, "botWritingText", void 0);
DF_Mj([DF_Mr({
    D: "bot-writing-image",
    type: String
}), DF_Mk("design:type", Object)], DF_M4.prototype, "botWritingImage", void 0);
DF_Mj([DF_Mr({
    D: "url-allowlist",
    type: String
}), DF_Mk("design:type", Object)], DF_M4.prototype, "urlAllowlist", void 0);
DF_Mj([DF_Mr({
    D: "enable-code-highlight",
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M4.prototype, "enableCodeHighlight", void 0);
DF_Mj([DF_Mr({
    D: "bot-actor-image",
    type: String
}), DF_Mk("design:type", Object)], DF_M4.prototype, "botActorImage", void 0);
DF_Mj([DF_Mr({
    D: "user-actor-image",
    type: String
}), DF_Mk("design:type", Object)], DF_M4.prototype, "userActorImage", void 0);
DF_Mj([DF_Mr({
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M4.prototype, "noTitlebar", void 0);
DF_Mj([DF_Mr({
    type: Array
}), DF_Mk("design:type", Array)], DF_M4.prototype, "initialMessages", void 0);
DF_Mj([DF_Mr({
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M4.prototype, "showBotWriting", void 0);
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_M4.prototype, "errorCode", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Array)], DF_M4.prototype, "messages", void 0);
DF_Mj([DF_Mr({
    type: Number
}), DF_Mk("design:type", Number), DF_Mk("design:paramtypes", [Number])], DF_M4.prototype, "listScrollTop", null);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M4.prototype, "Qa", void 0);
DF_M4 = DF_Mj([DF_Mo("df-messenger-message-list")], DF_M4);
var DF_Mej = DF_Mp(["#titlebar-title h2,#titlebar-title h3{margin:0;max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.titlebar-wrapper{display:flex;align-items:center;min-height:50px;background:var(--df-messenger-titlebar-background,var(--df-messenger-titlebar-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));color:var(--df-messenger-titlebar-font-color,#fff);padding:var(--df-messenger-titlebar-padding,0 15px);border-top-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border-top-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border:var(--df-messenger-titlebar-border,none);border-bottom:var(--df-messenger-titlebar-border-bottom,none)}#titlebar-title{flex-grow:1;overflow:hidden;display:flex;align-items:center;justify-content:var(--df-messenger-titlebar-title-align,flex-start);flex-direction:var(--df-messenger-titlebar-title-order,row);padding:6px;margin:-6px}#titlebar-title:focus-visible:before{inset:6px}#titlebar-title img{width:var(--df-messenger-titlebar-icon-width,var(--df-messenger-titlebar-title-font-size,18px));height:var(--df-messenger-titlebar-icon-height,var(--df-messenger-titlebar-title-font-size,18px));margin:var(--df-messenger-titlebar-icon-padding,0 12px 0 0)}#titlebar-title .title-text{flex-grow:1;overflow:hidden;display:flex;flex-direction:column;align-items:var(--df-messenger-titlebar-title-align,start)}#titlebar-title h2{font-size:var(--df-messenger-titlebar-title-font-size, 18px);font-family:var(--df-messenger-titlebar-title-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-weight:var(--df-messenger-titlebar-title-font-weight,400);letter-spacing:var(--df-messenger-titlebar-title-letter-spacing,\n      var(--df-messenger-titlebar-letter-spacing, normal)\n    );line-height:var(--df-messenger-titlebar-title-line-height, normal)}#titlebar-title h3{font-size:var(--df-messenger-titlebar-subtitle-font-size, 14px);font-family:var(--df-messenger-titlebar-subtitle-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-weight:var(--df-messenger-titlebar-subtitle-font-weight,400);color:var(--df-messenger-titlebar-subtitle-font-color,var(--df-messenger-titlebar-font-color,#fff));letter-spacing:var(--df-messenger-titlebar-subtitle-letter-spacing,\n      var(--df-messenger-titlebar-letter-spacing, normal)\n    );line-height:var(--df-messenger-titlebar-subtitle-line-height, normal)}"]);
var DF_Mfj = DF_Mc(['<img src="', '">']),
    DF_Mgj = DF_Mc(['<h2 tabindex="-1">', "</h2>"]),
    DF_Mhj = DF_Mc(['<h3 tabindex="-1">', "</h3>"]),
    DF_Mij = DF_Mc(['\n      <div class="title-text">\n        ', "\n        ", "\n      </div>"]),
    DF_Mjj = DF_Mc(['\n      <div class="titlebar-wrapper">\n        <div\n          id="titlebar-title"\n          class="focus-outline-contrast focus-outset"\n          tabindex="0"\n        >\n          ', "\n          ", '\n        </div>\n        <slot name="action"></slot>\n      </div>\n    ']);

function DF_Mkj() {
    var a = DF_MA.apply(this, arguments) || this;
    a.chatTitle = null;
    a.chatSubtitle = null;
    a.chatTitleIcon = null;
    return a
}
DF_Mf(DF_Mkj, DF_MA);
DF_Mkj.C = DF_MA.C;
DF_Mkj.m = DF_MA.m;
DF_Mkj.o = DF_MA.o;
DF_Mkj.h = DF_MA.h;
DF_Mkj.g = DF_MA.g;
DF_Mkj.v = DF_MA.v;
DF_Mkj.i = DF_MA.i;
DF_Mkj.s = DF_MA.s;
DF_Mkj.l = DF_MA.l;
DF_Mkj.u = DF_MA.u;
DF_Mkj.prototype.render = function() {
    var a = this.chatTitleIcon ? DF_Mv(DF_Mfj, this.chatTitleIcon) : null;
    var b = (b = DF_M3a(this.chatTitle, this.languageCode, "chatTitle")) ? DF_Mv(DF_Mgj, b) : null;
    var c = this.chatSubtitle ? DF_Mv(DF_Mhj, this.chatSubtitle) : null;
    return DF_Mv(DF_Mjj, a, b || c ? DF_Mv(DF_Mij, b, c) : null)
};
var DF_Mlj = DF_Mkj;
DF_Mlj.j = [DF_Mej, DF_Mz];
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_Mlj.prototype, "chatTitle", void 0);
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_Mlj.prototype, "chatSubtitle", void 0);
DF_Mj([DF_Mr({
    type: String
}), DF_Mk("design:type", Object)], DF_Mlj.prototype, "chatTitleIcon", void 0);
DF_Mlj = DF_Mj([DF_Mo("df-messenger-titlebar")], DF_Mlj);
var DF_Mmj = DF_Mp(["#send-icon-button:not(.action-button),textarea.input-box{background-color:transparent}.input-box-wrapper.show-focus,.input-container{position:relative}#send-icon,.microphone,.upload-icon-button-wrapper svg{fill:var(--df-messenger-send-icon-color,var(--df-messenger-icon-font-color,var(--df-messenger-default-icon-font-color)))}:host{--df-messenger-internal-input-font-size:var(--df-messenger-input-font-size,\n      var(--df-messenger-font-size,\n        var(--df-messenger-default-font-size)\n      )\n    );--df-messenger-internal-input-font-color:var(--df-messenger-input-font-color,\n      var(--df-messenger-font-color,\n        var(--df-messenger-default-font-color)\n      )\n    )}.input-container{background:var(--df-messenger-input-background,var(--df-messenger-input-background-color,#fff));border-bottom-left-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border-bottom-right-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));border:var(--df-messenger-input-border,none)}.input-container.border-top{border-top:var(--df-messenger-input-border-top,var(--df-messenger-default-border))}.input-box-wrapper{max-width:var(--df-messenger-chat-max-width,none);margin-left:auto;margin-right:auto;display:flex;align-items:flex-end;display:flex;padding:var(--df-messenger-input-padding,8px);overflow-y:auto;scrollbar-gutter:var(--df-messenger-input-gutter,stable)}.input-wrapper{flex-grow:1;border-bottom:var(--df-messenger-input-border-bottom,none);padding:var(--df-messenger-input-inner-padding,5px 48px 5px 0)}.textarea-wrapper{background:var(--df-messenger-input-box-background,var(--df-messenger-input-box-background-color,transparent));padding:var(--df-messenger-input-box-padding,8px 0);border:var(--df-messenger-input-box-border,none);border-radius:var(--df-messenger-input-box-border-radius,0);overflow:hidden;cursor:text;display:flex;align-items:center}.textarea-wrapper:focus-within{border:var(--df-messenger-input-box-focus-border,var(--df-messenger-input-box-border,none));padding:var(--df-messenger-input-box-focus-padding,var(--df-messenger-input-box-padding,8px 0))}::placeholder{color:var(--df-messenger-input-placeholder-font-color,var(--df-messenger-internal-input-font-color));opacity:.7}::-ms-input-placeholder{color:var(--df-messenger-input-placeholder-font-color,var(--df-messenger-internal-input-font-color));opacity:.7}textarea.input-box{flex-grow:1;padding:0;margin:0;border:none;outline:0;resize:none;width:100%;color:var(--df-messenger-internal-input-font-color);font-family:var(--df-messenger-input-font-family,\n      var(--df-messenger-font-family,\n        var(--df-messenger-default-font-family)\n      )\n    );font-size:var(--df-messenger-internal-input-font-size);font-weight:var(--df-messenger-input-font-weight,normal);max-height:calc(var(--df-messenger-internal-input-font-size) * 4)}textarea.input-box:focus{outline-width:0}.microphone{width:48px;height:48px;padding:12px;margin:-12px -12px -12px 0}.send-icon-button-wrapper,.upload-icon-button-wrapper{width:48px;height:48px;margin-bottom:var(--df-messenger-send-icon-offset-y,-2px);display:flex}.microphone.focus-outline:focus-visible::before{border-radius:999px}.microphone.active{fill:var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))}.upload-icon-button-wrapper{margin-right:-48px;margin-right:calc(-48px + var(--df-messenger-send-icon-offset-x,0px));justify-content:center;align-items:center;position:relative}.upload-icon-button-wrapper button{padding:0}.upload-icon-button-wrapper input{position:absolute;inset:0;z-index:-1;opacity:0}.send-icon-button-wrapper{margin-left:calc(-48px + var(--df-messenger-send-icon-offset-x,0px));justify-content:center;align-items:center}#send-icon-button,#send-icon-button:focus,#send-icon-button:hover{padding:0;border:none;visibility:inherit;transform-origin:center;transform:scale(1,1);transition:transform .3s,background-color .3s}#send-icon-button.disabled{visibility:hidden;transform-origin:center;transform:scale(.01,.01);transition:visibility .3s,transform .3s}#send-icon-button:focus{outline:0}#send-icon-button:focus-visible{position:relative}#send-icon,.upload-icon-button-wrapper svg{height:24px;margin:12px;width:24px}#send-icon-button.active:hover #send-icon{fill:var(--df-messenger-send-icon-color-hover,var(--df-messenger-send-icon-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))))}#send-icon-button.active #send-icon{fill:var(--df-messenger-send-icon-color-active,var(--df-messenger-send-icon-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))))}.error-wrapper{position:absolute;left:0;right:0;top:0;transform:translateY(-100%);overflow:hidden}.error{background:var(--df-messenger-input-error-background,var(--df-messenger-input-error-background-color,#e53935));color:var(--df-messenger-input-error-color,#fafafa);font-size:13px;font-weight:700;line-height:1.7;padding:0 10px;transform:translateY(100%);transition:transform .2s}.error-wrapper.show .error{transform:translateY(0);transition:transform .2s}"]);

function DF_Mnj() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
        var b = 16 * Math.random() | 0;
        return "x" === a ? b.toString(16) : (b & 3 | 8).toString(16)
    })
};
var DF_Moj = DF_Mc(["\n  .show-focus:after {\n    ", "\n  }\n"]),
    DF_Mpj = DF_Mc(['\n      <div class="upload-icon-button-wrapper">\n        <button\n          id="upload-button"\n          class="focus-outline focus-inset action-button"\n          @click=', "\n        >\n          ", '\n        </button>\n        <input\n          type="file" name="filedata" aria-hidden="true" tabindex="-1"\n          @change=', "\n        />\n      </div>"]),
    DF_Mqj = DF_Mc(['\n          <textarea class="input-box"\n            disabled\n            rows="1"\n          ></textarea>']),
    DF_Mrj = DF_Mc('\n        <textarea class="input-box"\n          rows="1"\n          @input=;\n          @keydown=;\n          @focusin=;\n          @focusout=;\n          type="text"\n          aria-label=";"\n          placeholder=";"\n        ></textarea>'.split(";")),
    DF_Msj = DF_Mc(['\n      <button\n        class="microphone action-button focus-outline\n          ', '"\n        @click=', "\n      >\n        ", "\n      </button>"]),
    DF_Mtj = DF_Mc(['\n      <div\n        class="textarea-wrapper"\n        @mousedown=',
        "\n        @click=", "\n      >\n        ", "\n        ", "\n      </div>"
    ]),
    DF_Muj = DF_Mc('\n      <div class="input-container ;">\n        <div class="error-wrapper ;">\n          <div class="error">;</div>\n        </div>\n        <div class="input-box-wrapper ;">\n          ;\n          <div class="input-wrapper">\n            ;\n          </div>\n          <div class="send-icon-button-wrapper">\n            <button\n              class="focus-outline focus-inset\n                ;\n                ;"\n              id="send-icon-button"\n              @click=;\n              aria-label=";"\n            >\n              <svg xmlns="http://www.w3.org/2000/svg" id="send-icon">\n                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>\n                <path d="M0 0h24v24H0z" fill="none"/>\n              </svg>\n            </button>\n          </div>\n        </div>\n      </div>'.split(";")),
    DF_Mvj = DF_Mp(DF_Moj, DF_MPd(!1));

function DF_M5() {
    var a = DF_MA.apply(this, arguments) || this;
    a.canAcceptInput = !0;
    a.botWriting = !1;
    a.bb = !1;
    a.Ba = !1;
    a.Ab = "";
    a.active = !1;
    a.gb = !1;
    a.showBorderTop = !1;
    a.placeholderText = null;
    a.maxInputValueLength = 256;
    a.enableFileUpload = !1;
    a.enableAudioInput = !1;
    a.Ma = !1;
    a.j = null;
    return a
}
DF_Mf(DF_M5, DF_MA);
DF_M5.C = DF_MA.C;
DF_M5.m = DF_MA.m;
DF_M5.o = DF_MA.o;
DF_M5.h = DF_MA.h;
DF_M5.g = DF_MA.g;
DF_M5.v = DF_MA.v;
DF_M5.i = DF_MA.i;
DF_M5.s = DF_MA.s;
DF_M5.l = DF_MA.l;
DF_M5.u = DF_MA.u;
DF_M = DF_M5.prototype;
DF_M.sc = function(a) {
    this.gb = this.bb ? !1 : !0;
    a.relatedTarget && (this.bb = !1)
};
DF_M.tc = function() {
    this.gb = !1
};
DF_M.uc = function() {
    this.g.style.height = "";
    this.g.style.height = this.g.scrollHeight.toString() + "px";
    var a = this.h.length;
    DF_M$a(a, this.maxInputValueLength) ? this.Ba = !1 : (this.Ba = !0, this.Ab = DF_Mn(this.languageCode, "messageTooLong", {
        numOfChars: "" + (a - this.maxInputValueLength)
    }));
    this.active = 0 < a && !this.Ba && this.canAcceptInput
};
DF_M.sendMessage = function() {
    var a = this.h.length;
    if (0 !== a && DF_M$a(a, this.maxInputValueLength) && this.canAcceptInput && !this.botWriting) {
        DF_Ml(this, "df-user-input-entered", {
            input: this.h
        });
        this.Y.renderCustomText(this.h, !1);
        this.sendRequest(this.h, this.Y);
        this.active = this.Ba = !1;
        this.h = "";
        this.g.style.height = "";
        var b;
        null == (b = this.g) || b.focus()
    }
};
DF_M.sendRequest = function(a, b) {
    var c = this;
    return DF_Mh(function(d) {
        return DF_Mg(d, b.presenter.sendRequest(DF_Mcf(a, c.languageCode)), 0)
    })
};
DF_M.Zc = function() {
    this.T.querySelector(".upload-icon-button-wrapper input").click()
};

function DF_Mwj(a, b) {
    var c, d, e, f, g, h, k, l, m;
    return DF_Mh(function(n) {
        if (1 == n.g) {
            d = null == (c = b.target.files) ? void 0 : c[0];
            if (!d) return n.return();
            DF_Ml(a, "df-upload-file-selected", {
                file: d
            });
            b.target.value = "";
            if (null == (e = a.Y) || !e.gcsUpload) return n.return();
            f = a.Y.sessionId + "/" + DF_Mnj() + "_" + d.name;
            g = a.Y.gcsUpload + "/" + f;
            return DF_Mg(n, a.Y.presenter.uploadFile(d, f), 2)
        }
        h = a.Y.presenter.getQueryParameters();
        h.parameters ? h.parameters.files || (h.parameters.files = []) : h.parameters = {
            files: []
        };
        h.parameters.files.push(g);
        a.Y.presenter.setQueryParameters(h);
        k = (a.Y.isAuthenticationRequired ? "https://storage.mtls.cloud.google.com/" : "https://storage.googleapis.com/") + g;
        l = DF_Ml(a, "df-file-upload-completed", {
            file: d,
            gcsPath: f,
            actionLink: k
        });
        if (!l) return n.return();
        m = {
            type: "files",
            files: [{
                name: d.name,
                anchor: {
                    href: k
                },
                image: {
                    rawUrl: "https://fonts.gstatic.com/s/i/short-term/release/googlesymbols/cloud_download/default/24px.svg"
                }
            }]
        };
        a.Y.renderCustomCard([m]);
        n.g = 0
    })
}

function DF_Mxj(a, b) {
    b.stopPropagation();
    if (a.Ma) {
        a.Ma = !1;
        var c;
        null == (c = a.j) || c.stop()
    } else navigator.mediaDevices.getUserMedia({
        audio: !0
    }).then(function(d) {
        a.j = new MediaRecorder(d);
        a.j.ondataavailable = function(e) {
            var f, g;
            return DF_Mh(function(h) {
                g = null == (f = a.j) ? void 0 : f.state;
                a.j = null;
                if ("inactive" !== g || !a.Y) return h.return();
                DF_Ml(a, "df-audio-input-recorded", {
                    data: e.data
                });
                h.g = 0
            })
        };
        a.j.start()
    }), a.Ma = !0
}

function DF_Myj(a) {
    return a.enableFileUpload ? DF_Mv(DF_Mpj, a.Zc, DF_Mke, function(b) {
        return void DF_Mwj(a, b)
    }) : null
}

function DF_Mzj(a) {
    if (!a.canAcceptInput) return DF_Mv(DF_Mqj);
    var b = a.placeholderText || DF_Mn(a.languageCode, "askSomething"),
        c = DF_Mn(a.languageCode, "inputAriaLabel");
    return DF_Mv(DF_Mrj, a.uc, function(d) {
        "Enter" !== d.key || d.shiftKey || (d.preventDefault(), a.sendMessage(), DF_MNa(a))
    }, a.sc, a.tc, c, b)
}

function DF_MAj(a) {
    return a.enableAudioInput ? DF_Mv(DF_Msj, a.Ma ? "active" : "", function(b) {
        return void DF_Mxj(a, b)
    }, DF_Mle) : null
}

function DF_MBj(a) {
    return DF_Mv(DF_Mtj, function() {
        return a.bb = !0
    }, function() {
        var b;
        return void(null == (b = a.g) ? void 0 : b.focus())
    }, DF_Mzj(a), DF_MAj(a))
}
DF_M.render = function() {
    var a = DF_Mn(this.languageCode, "sendAriaLabel");
    return DF_Mv(DF_Muj, this.showBorderTop ? "border-top" : "", this.Ba ? "show" : "", this.Ab, this.gb ? "show-focus" : "", DF_Myj(this), DF_MBj(this), this.canAcceptInput ? "" : "disabled", this.active ? "active action-button" : "", this.sendMessage, a)
};
DF_Ma.Object.defineProperties(DF_M5.prototype, {
    g: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.T.querySelector("textarea")
        }
    },
    h: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return (null == (a = this.g) ? void 0 : a.value) || ""
        },
        set: function(a) {
            var b = this.g;
            b && (b.value = a)
        }
    }
});
var DF_M6 = DF_M5;
DF_M6.j = [DF_Mmj, DF_Mz, DF_Mvj];
DF_Mj([DF_MUa({
    context: "df-instance",
    subscribe: !0
}), DF_Mk("design:type", Object)], DF_M6.prototype, "Y", void 0);
DF_Mj([DF_MUa({
    context: "df-canacceptinput",
    subscribe: !0
}), DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "canAcceptInput", void 0);
DF_Mj([DF_MUa({
    context: "df-botwriting",
    subscribe: !0
}), DF_Mk("design:type", Object)], DF_M6.prototype, "botWriting", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "bb", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "Ba", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "Ab", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "active", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "gb", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M6.prototype, "showBorderTop", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: String
}), DF_Mk("design:type", Object)], DF_M6.prototype, "placeholderText", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: Number
}), DF_Mk("design:type", Object)], DF_M6.prototype, "maxInputValueLength", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M6.prototype, "enableFileUpload", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: Boolean
}), DF_Mk("design:type", Object)], DF_M6.prototype, "enableAudioInput", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M6.prototype, "Ma", void 0);
DF_M6 = DF_Mj([DF_Mo("df-messenger-user-input")], DF_M6);
var DF_MCj = DF_Mc(["<df-messenger-auth-screen\n        .requestAuthText=", "\n      ></df-messenger-auth-screen>"]),
    DF_MDj = DF_Mc(['\n      <div class="chat-wrapper"\n        role="dialog"\n        aria-label="', '">\n        ', "\n        ", "\n      </div>\n    "]),
    DF_MEj = DF_Mc(['\n      <slot name="titlebar">\n        \x3c!--\n          Use default titlebar, used if nothing else specified for the slot.\n        --\x3e\n        <df-messenger-titlebar\n          .chatTitle=', "\n          .chatSubtitle=",
        "\n          .chatTitleIcon=", "\n          .languageCode=", "\n        ></df-messenger-titlebar>\n      </slot>"
    ]),
    DF_MFj = DF_Mc("\n      ;\n      ;\n      <df-messenger-user-input\n        .showBorderTop=;\n        .placeholderText=;\n        .maxInputValueLength=;\n        .enableFileUpload=;\n        .enableAudioInput=;\n        .languageCode=;\n      ></df-messenger-user-input>".split(";"));

function DF_M7() {
    var a = DF_My.apply(this, arguments) || this;
    a.noTitlebar = !1;
    a.isNestedChatElement = !1;
    a.errorCode = null;
    a.botWriting = !1;
    a.isAuthenticationPending = !1;
    return a
}
DF_Mf(DF_M7, DF_My);
DF_M7.C = DF_My.C;
DF_M7.m = DF_My.m;
DF_M7.o = DF_My.o;
DF_M7.h = DF_My.h;
DF_M7.g = DF_My.g;
DF_M7.v = DF_My.v;
DF_M7.i = DF_My.i;
DF_M7.s = DF_My.s;
DF_M7.l = DF_My.l;
DF_M7.u = DF_My.u;
DF_M7.prototype.connectedCallback = function() {
    var a = this;
    DF_My.prototype.connectedCallback.call(this);
    this.id = "df-chat-wrapper";
    this.addEventListener("df-messenger-message-list-highest-scrolltop", function(b) {
        b = b.detail.scrollTop;
        var c;
        null == (c = a.V) || c.presenter.storeChatScrollDistance(b)
    })
};
DF_M7.prototype.Z = function(a) {
    DF_My.prototype.Z.call(this, a);
    DF_MGj(this);
    this.isNestedChatElement || DF_MHd(this)
};
DF_M7.prototype.setInput = function(a) {
    var b, c = null == (b = this.T.querySelector("df-messenger-user-input")) ? void 0 : b.g;
    c && (c.value = a, c.dispatchEvent(new Event("input", {
        bubbles: !0,
        composed: !0
    })), c.dispatchEvent(new Event("mousedown", {
        bubbles: !0,
        composed: !0
    })), c.focus())
};

function DF_MGj(a) {
    var b;
    null == (b = a.V) || b.addEventListener("df-messenger-error", function(c) {
        var d, e;
        a.errorCode = null != (e = null == (d = c.detail.error.error) ? void 0 : d.status) ? e : null;
        setTimeout(function() {
            a.errorCode = null
        }, 5E3)
    })
}
DF_M7.prototype.render = function() {
    var a, b = this.noTitlebar ? null : DF_Mv(DF_MEj, this.chatTitle, this.chatSubtitle, this.chatTitleIcon, this.languageCode);
    if (!this.h) {
        this.h = new DF_M4;
        var c, d;
        this.h.listScrollTop = null != (d = null == (c = this.V) ? void 0 : c.presenter.getChatScrollDistance()) ? d : 0
    }
    this.h.noTitlebar = this.noTitlebar;
    var e;
    this.h.enableCodeHighlight = (null == (e = this.V) ? void 0 : e.enableCodeHighlight) || !1;
    var f;
    this.h.urlAllowlist = (null == (f = this.V) ? void 0 : f.urlAllowlist) || null;
    this.h.languageCode = this.languageCode;
    this.h.errorCode = this.errorCode;
    this.h.showBotWriting = this.botWriting;
    this.h.botWritingText = this.botWritingText;
    this.h.botWritingImage = this.botWritingImage;
    this.h.botActorImage = this.botActorImage;
    this.h.userActorImage = this.userActorImage;
    b = DF_Mv(DF_MFj, b, this.h, !0, this.placeholderText, (null == (a = this.V) ? void 0 : a.maxQueryLength) || DF_Mw, this.enableFileUpload, this.enableAudioInput, this.languageCode);
    a = DF_M3a(this.chatTitle, this.languageCode, "chatTitle");
    return DF_Mv(DF_MDj, a, b, this.isAuthenticationPending ?
        DF_Mv(DF_MCj, this.requestAuthText) : null)
};
var DF_MHj = DF_M7;
DF_MHj.j = [DF_MSd, DF_Mz];
DF_Mj([DF_Mr({
    D: "no-titlebar",
    type: Boolean,
    L: !0
}), DF_Mk("design:type", Object)], DF_MHj.prototype, "noTitlebar", void 0);
DF_Mj([DF_Mr({
    D: !1,
    type: Boolean
}), DF_Mk("design:type", Object)], DF_MHj.prototype, "isNestedChatElement", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_MHj.prototype, "errorCode", void 0);
DF_Mj([DF_MUa({
    context: "df-botwriting",
    subscribe: !0
}), DF_Ms(), DF_Mk("design:type", Object)], DF_MHj.prototype, "botWriting", void 0);
DF_Mj([DF_MUa({
    context: "df-authenticationpending",
    subscribe: !0
}), DF_Ms(), DF_Mk("design:type", Object)], DF_MHj.prototype, "isAuthenticationPending", void 0);
DF_MHj = DF_Mj([DF_Mo("df-messenger-chat")], DF_MHj);
var DF_MIj = DF_Mp([".bubble .close-icon img,.bubble .close-icon svg{width:inherit;height:inherit}.chat-wrapper.left-bottom,.chat-wrapper.left-top{right:var(--df-messenger-internal-chat-bubble-size-offset)}:host{--df-messenger-internal-chat-bubble-size:var(--df-messenger-chat-bubble-size, 64px);--df-messenger-internal-chat-window-offset:var(--df-messenger-chat-window-offset, 16px);--df-messenger-internal-chat-bubble-size-offset:calc(var(--df-messenger-internal-chat-bubble-size) + var(--df-messenger-internal-chat-window-offset));--df-messenger-internal-chat-bubble-size-half:calc(var(--df-messenger-internal-chat-bubble-size) / 2);--df-messenger-internal-chat-bubble-size-half-neg:calc(0px - var(--df-messenger-internal-chat-bubble-size) / 2);--df-messenger-internal-chat-bubble-size-half-offset:calc(var(--df-messenger-internal-chat-bubble-size) / 2 + var(--df-messenger-internal-chat-window-offset));--df-messenger-internal-chat-bubble-size-half-offset-neg:calc(0px - var(--df-messenger-internal-chat-bubble-size) / 2 - var(--df-messenger-internal-chat-window-offset))}.container{position:relative;display:inline-block}.bubble{padding:0;margin:0;border:none;width:var(--df-messenger-internal-chat-bubble-size);height:var(--df-messenger-internal-chat-bubble-size);border-radius:var(--df-messenger-chat-bubble-border-radius,var(--df-messenger-internal-chat-bubble-size-half));border:var(--df-messenger-chat-bubble-border,none);background:var(--df-messenger-chat-bubble-background,var(--df-messenger-chat-bubble-background-color,var(--df-messenger-primary-color,var(--df-messenger-default-primary-color))));cursor:pointer;user-select:none;display:flex;justify-content:center;align-items:center;position:relative}.bubble.focus-outline:focus-visible:before{border-radius:var(--df-messenger-chat-bubble-border-radius,var(--df-messenger-internal-chat-bubble-size-half))}.bubble .icon{color:var(--df-messenger-chat-bubble-icon-color,#fff);opacity:1;transition:opacity .5s}.bubble .icon.fade{opacity:0;transition:opacity .5s}.bubble .close-icon{width:var(--df-messenger-chat-bubble-close-icon-size,24px);height:var(--df-messenger-chat-bubble-close-icon-size,24px);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) rotate(0);opacity:0;transition:transform .5s,opacity .5s}.chat-wrapper.right-bottom,.chat-wrapper.right-top{left:var(--df-messenger-internal-chat-bubble-size-offset)}.bubble .close-icon svg{fill:var(--df-messenger-chat-bubble-icon-color,white)}.bubble .close-icon.rotate-fade{opacity:1;transform:translate(-50%,-50%) rotate(var(--df-messenger-chat-bubble-close-icon-transform-rotate,-90deg));transition:transform .5s,opacity .5s}.chat-wrapper{position:absolute;height:var(--df-messenger-chat-window-height,480px);width:var(--df-messenger-chat-window-width,320px);border-radius:var(--df-messenger-chat-border-radius,var(--df-messenger-default-chat-border-radius));box-shadow:var(--df-messenger-chat-window-box-shadow,none);visibility:hidden;transition:transform .3s,visibility .3s;right:0;bottom:var(--df-messenger-internal-chat-bubble-size-offset);transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01,.01)}.chat-wrapper.right-bottom{top:0;transform-origin:top left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset-neg),var(--df-messenger-internal-chat-bubble-size-half)) scale(.01,.01)}.chat-wrapper.right-top{bottom:0;transform-origin:bottom left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset-neg),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01,.01)}.chat-wrapper.left-bottom{top:0;transform-origin:top right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half)) scale(.01,.01)}.chat-wrapper.bottom-left,.chat-wrapper.bottom-right{top:var(--df-messenger-internal-chat-bubble-size-offset)}.chat-wrapper.left-top{bottom:0;transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-offset),var(--df-messenger-internal-chat-bubble-size-half-neg)) scale(.01,.01)}.chat-wrapper.top-left,.chat-wrapper.top-right{bottom:var(--df-messenger-internal-chat-bubble-size-offset)}.chat-wrapper.top-right{left:0;transform-origin:bottom left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01,.01)}.chat-wrapper.top-left{right:0;transform-origin:bottom right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset)) scale(.01,.01)}.chat-wrapper.bottom-right{left:0;transform-origin:top left;transform:translate(var(--df-messenger-internal-chat-bubble-size-half),var(--df-messenger-internal-chat-bubble-size-half-offset-neg)) scale(.01,.01)}.chat-wrapper.bottom-left{right:0;transform-origin:top right;transform:translate(var(--df-messenger-internal-chat-bubble-size-half-neg),var(--df-messenger-internal-chat-bubble-size-half-offset-neg)) scale(.01,.01)}.chat-wrapper.fullscreen-always{position:fixed;inset:0;width:unset;height:unset;transform-origin:center}@media screen and (max-width:500px){.chat-wrapper.fullscreen-small{position:fixed;inset:0;width:unset;height:unset;transform-origin:center}}.chat-wrapper.expanded{visibility:visible;transform:translate(0,0) scale(1,1);transition:transform .3s}"]);
var DF_MJj = DF_Mc(['\n          <span class="icon ', '">\n            ', "\n          </span>"]),
    DF_MKj = DF_Mc(['\n      <img\n        src="', '"\n        class="icon ', '"\n      />']),
    DF_MLj = DF_Mc(['<img src="', '" />']),
    DF_MMj = DF_Mc(['\n        <style>\n          @import url(//fonts.googleapis.com/icon?family=Material+Icons);\n          .minimize-action {\n            margin: 0;\n            padding: 12px;\n            margin-right: -12px;\n            background: none;\n            border: none;\n            color: var(--df-messenger-titlebar-icon-font-color, inherit);\n          }\n        </style>\n        <button\n          class="material-icons minimize-action focus-outline-contrast"\n          @click=',
        '\n          slot="action"\n          aria-label="', '"\n        >\n          ', "\n        </button>"
    ]),
    DF_MNj = DF_Mc(['\n        <style>\n          .minimize-action {\n            margin: 0;\n            padding: 12px;\n            background-color: transparent;\n            border: none;\n          }\n\n          .minimize-action img {\n            width: var(--df-messenger-chat-collapse-icon-size, unset);\n            height: var(--df-messenger-chat-collapse-icon-size, unset);\n          }\n        </style>\n        <button\n          class="minimize-action focus-outline-contrast"\n          @click=',
        '\n          slot="action"\n          aria-label="', '"\n        >\n          <img src="', '" />\n        </button>'
    ]),
    DF_MOj = DF_Mc('\n      <div\n        style=;\n        class="chat-wrapper\n          ; ;\n          ;"\n      >\n        <df-messenger-chat\n          .chatTitle=;\n          .chatSubtitle=;\n          .botWritingText=;\n          .botWritingImage=;\n          .requestAuthText=;\n          .placeholderText=;\n          .botActorImage=;\n          .userActorImage=;\n          .enableFileUpload=;\n          .enableAudioInput=;\n          .isNestedChatElement=;\n        >\n          <df-messenger-titlebar\n            .chatTitle=;\n            .chatSubtitle=;\n            .chatTitleIcon=;\n            .languageCode=;\n            slot="titlebar"\n          >\n            ;\n          </df-messenger-titlebar>\n        </df-messenger-chat>\n      </div>\n    '.split(";")),
    DF_MPj = DF_Mc('\n      <div class="container">\n        <button\n          class="bubble focus-outline"\n          @click=;\n          aria-expanded=";"\n          aria-label=";"\n        >\n          ;\n          <span class="close-icon ;">\n            ;\n          </span>\n        </button>\n        ;\n      </div>\n    '.split(";"));

function DF_MQj() {
    var a = DF_My.apply(this, arguments) || this;
    a.anchor = null;
    a.chatIcon = "https://www.gstatic.com/dialogflow-console/common/assets/integrations/icons/messenger-cx-chat-icon.svg";
    a.chatCloseIcon = null;
    a.chatCollapseIcon = null;
    a.allowFullscreen = null;
    a.h = DF_M9a(function() {
        if (!a.V) return !1;
        void 0 === a.expanded && (a.expanded = a.V.presenter.isChatBubbleExpanded());
        DF_MRj(a);
        a.expanded && DF_MHd(a);
        return !0
    });
    return a
}
DF_Mf(DF_MQj, DF_My);
DF_MQj.C = DF_My.C;
DF_MQj.m = DF_My.m;
DF_MQj.o = DF_My.o;
DF_MQj.h = DF_My.h;
DF_MQj.g = DF_My.g;
DF_MQj.v = DF_My.v;
DF_MQj.i = DF_My.i;
DF_MQj.s = DF_My.s;
DF_MQj.l = DF_My.l;
DF_MQj.u = DF_My.u;
DF_M = DF_MQj.prototype;
DF_M.connectedCallback = function() {
    DF_MSj(this);
    DF_MTj(this);
    DF_MUj(this);
    DF_My.prototype.connectedCallback.call(this)
};
DF_M.Z = function(a) {
    var b = this;
    DF_My.prototype.Z.call(this, a);
    DF_MVj(this);
    window.addEventListener("resize", function() {
        return void DF_MVj(b)
    })
};
DF_M.Da = function(a) {
    DF_My.prototype.Da.call(this, a);
    this.h();
    a.has("chatIcon") && DF_MSj(this);
    a.has("chatCloseIcon") && DF_MTj(this);
    a.has("chatCollapseIcon") && DF_MUj(this)
};
DF_M.openChat = function() {
    this.expanded || this.Sa()
};
DF_M.closeChat = function() {
    this.expanded && this.Sa()
};
DF_M.setInput = function(a) {
    var b;
    null == (b = this.T.querySelector("df-messenger-chat")) || b.setInput(a)
};
DF_M.Sa = function() {
    var a = this,
        b;
    return DF_Mh(function(c) {
        if (1 == c.g) return a.expanded = !a.expanded, DF_MRj(a), null == (b = a.V) || b.presenter.storeChatBubbleExpanded(a.expanded), a.expanded ? c = DF_Mg(c, DF_MHd(a), 2) : (c.g = 2, c = void 0), c;
        DF_MVj(a);
        c.g = 0
    })
};

function DF_MRj(a) {
    DF_Ml(a, "df-chat-open-changed", {
        isOpen: a.expanded
    })
}

function DF_MVj(a) {
    var b = a.T.querySelector(".chat-wrapper");
    b && (a.expanded ? b.style.transform = "" : "always" === a.allowFullscreen || "small" === a.allowFullscreen && 500 > window.innerWidth ? (a = a.parentElement.getBoundingClientRect(), b.style.transform = "translate(" + ((a.left + a.right) / 2 - window.innerWidth / 2) + "px, " + ((a.top + a.bottom) / 2 - window.innerHeight / 2) + "px) scale(0.01, 0.01)") : b.style.transform = "")
}

function DF_MSj(a) {
    DF_MYa(a.chatIcon, function() {
        a.mb = !1
    }, function() {
        a.mb = !0
    })
}

function DF_MTj(a) {
    a.chatCloseIcon ? DF_MYa(a.chatCloseIcon, function() {
        a.kb = !1
    }, function() {
        a.kb = !0
    }) : a.kb = !0
}

function DF_MUj(a) {
    a.chatCollapseIcon ? DF_MYa(a.chatCollapseIcon, function() {
        a.lb = !1
    }, function() {
        a.lb = !0
    }) : a.lb = !0
}

function DF_MWj(a) {
    switch (a.anchor) {
        case "top-left":
        case "left-top":
            return "south_east";
        case "top-right":
        case "right-top":
            return "south_west";
        case "right-bottom":
        case "bottom-right":
            return "north_west";
        case "left-bottom":
        case "bottom-left":
            return "north_east";
        default:
            return "south_east"
    }
}
DF_M.render = function() {
    var a = DF_MXj(this, !!this.expanded),
        b = this.Sa,
        c = !!this.expanded,
        d = void 0 === this.mb ? null : this.mb ? DF_Mv(DF_MJj, this.expanded ? "fade" : "", DF_M$d) : DF_Mv(DF_MKj, this.chatIcon, this.expanded ? "fade" : ""),
        e = this.expanded ? "rotate-fade" : "",
        f = this.kb ? DF_Mae : DF_Mv(DF_MLj, this.chatCloseIcon),
        g = {};
    this.chatWidth && (g.width = this.chatWidth + "px");
    this.chatHeight && (g.height = this.chatHeight + "px");
    g = DF_Mff(g);
    var h = this.expanded ? "expanded" : "",
        k = this.anchor,
        l = this.allowFullscreen ? "fullscreen-" + this.allowFullscreen :
        "",
        m = this.chatTitle,
        n = this.chatSubtitle,
        p = this.botWritingText,
        q = this.botWritingImage,
        r = this.requestAuthText,
        t = this.placeholderText,
        v = this.botActorImage,
        u = this.userActorImage,
        x = this.enableFileUpload,
        w = this.enableAudioInput,
        z = this.chatTitle,
        A = this.chatSubtitle,
        B = this.chatTitleIcon,
        C = this.languageCode,
        y = DF_MXj(this, !0);
    return DF_Mv(DF_MPj, b, c, a, d, e, f, DF_Mv(DF_MOj, g, h, k, l, m, n, p, q, r, t, v, u, x, w, !0, z, A, B, C, this.lb ? DF_Mv(DF_MMj, this.Sa, y, DF_MWj(this)) : DF_Mv(DF_MNj, this.Sa, y, this.chatCollapseIcon)))
};

function DF_MXj(a, b) {
    return DF_Mn(a.languageCode, b ? "openAriaLabel" : "closeAriaLabel", {
        chatTitle: DF_M3a(a.chatTitle, a.languageCode, "chatTitle")
    })
}
var DF_M8 = DF_MQj;
DF_M8.j = [DF_MIj, DF_Mz];
DF_Mj([DF_Mr({
    D: "expanded",
    type: Boolean
}), DF_Mk("design:type", Boolean)], DF_M8.prototype, "expanded", void 0);
DF_Mj([DF_Mr({
    D: "anchor",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M8.prototype, "anchor", void 0);
DF_Mj([DF_Mr({
    D: "chat-icon",
    type: String
}), DF_Mk("design:type", Object)], DF_M8.prototype, "chatIcon", void 0);
DF_Mj([DF_Mr({
    D: "chat-close-icon",
    type: String
}), DF_Mk("design:type", Object)], DF_M8.prototype, "chatCloseIcon", void 0);
DF_Mj([DF_Mr({
    D: "chat-collapse-icon",
    type: String
}), DF_Mk("design:type", Object)], DF_M8.prototype, "chatCollapseIcon", void 0);
DF_Mj([DF_Mr({
    D: "chat-width",
    type: Number,
    L: !0
}), DF_Mk("design:type", Number)], DF_M8.prototype, "chatWidth", void 0);
DF_Mj([DF_Mr({
    D: "chat-height",
    type: Number,
    L: !0
}), DF_Mk("design:type", Number)], DF_M8.prototype, "chatHeight", void 0);
DF_Mj([DF_Mr({
    D: "allow-fullscreen",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M8.prototype, "allowFullscreen", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Boolean)], DF_M8.prototype, "mb", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Boolean)], DF_M8.prototype, "kb", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Boolean)], DF_M8.prototype, "lb", void 0);
DF_M8 = DF_Mj([DF_Mo("df-messenger-chat-bubble")], DF_M8);
var DF_MYj = DF_Mc(["https://accounts.google.com/gsi/client"]);

function DF_MZj(a, b) {
    this.clientId = a;
    this.scope = b
}
DF_MZj.prototype.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        return 1 == b.g ? DF_Mg(b, DF_M_j(), 2) : b.return(a.requestAccessToken())
    })
};
DF_MZj.prototype.requestAccessToken = function() {
    var a = this;
    return new Promise(function(b, c) {
        globalThis.google.accounts.oauth2.initTokenClient({
            client_id: a.clientId,
            scope: a.scope,
            callback: function(d) {
                var e = console,
                    f = e.debug,
                    g = Object.assign({}, d);
                g.access_token && (g.access_token = "REDACTED");
                f.call(e, "DF-MESSENGER", "requestAccessToken", g);
                d.access_token ? b(Object.assign({}, {
                    token: d.access_token
                }, d.expires_in && {
                    expirationMs: 1E3 * d.expires_in
                })) : c()
            },
            error_callback: function(d) {
                console.error("DF-MESSENGER",
                    "requestAccessToken", d);
                c()
            }
        }).requestAccessToken()
    })
};
var DF_M_j = function() {
    var a = null;
    return function() {
        if (null == a) {
            var b = document.createElement("script");
            DF_MJg(b, DF_MSc(DF_MYj));
            a = new Promise(function(c) {
                b.addEventListener("load", function() {
                    return void c()
                })
            });
            document.head.appendChild(b)
        }
        return a
    }
}();

function DF_M0j(a) {
    this.audience = a
}

function DF_M1j(a, b) {
    var c, d, e, f, g;
    return DF_Mh(function(h) {
        switch (h.g) {
            case 1:
                return c = JSON.stringify({
                    grantType: "urn:ietf:params:oauth:grant-type:token-exchange",
                    audience: a.audience,
                    scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform",
                    requestedTokenType: "urn:ietf:params:oauth:token-type:access_token",
                    subjectToken: b,
                    subjectTokenType: "urn:ietf:params:oauth:token-type:jwt"
                }), DF_Mg(h, fetch("https://sts.googleapis.com/v1/token", {
                        method: "POST",
                        body: c
                    }),
                    2);
            case 2:
                d = h.h;
                if (d.ok) {
                    h.g = 3;
                    break
                }
                return DF_Mg(h, d.text(), 4);
            case 4:
                throw e = h.h, f = d.status, {
                    message: e,
                    status: f
                };
            case 3:
                return DF_Mg(h, d.json(), 5);
            case 5:
                return g = h.h, h.return({
                    token: g.access_token,
                    expirationMs: 1E3 * g.expires_in
                })
        }
    })
};

function DF_M2j(a, b, c, d) {
    this.clientId = b;
    this.authority = c;
    this.redirectUri = d;
    this.g = new DF_M0j(a)
}
DF_M2j.prototype.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        return b.return(new Promise(function(c) {
            var d, e, f, g, h;
            return DF_Mh(function(k) {
                switch (k.g) {
                    case 1:
                        return d = {
                            auth: {
                                clientId: a.clientId,
                                authority: a.authority,
                                redirectUri: a.redirectUri
                            },
                            cache: {
                                cacheLocation: "sessionStorage"
                            }
                        }, e = new window.msal.PublicClientApplication(d), DF_Mg(k, e.initialize(), 2);
                    case 2:
                        return f = {
                            scopes: ["user.read"]
                        }, DF_Mg(k, e.loginPopup(f), 3);
                    case 3:
                        return g = k.h, DF_Mg(k, DF_M1j(a.g, g.idToken), 4);
                    case 4:
                        h =
                            k.h, c(h), k.g = 0
                }
            })
        }))
    })
};

function DF_M3j() {
    this.g = document || {
        cookie: ""
    }
}
DF_M3j.prototype.set = function(a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
        var e = c.md;
        d = c.nd || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.fc
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
        e : "")
};
DF_M3j.prototype.get = function(a, b) {
    for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = DF_M$b(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
        if (f == a) return ""
    }
    return b
};

function DF_M4j(a, b) {
    a.get(b);
    a.set(b, "", {
        fc: 0,
        path: void 0,
        domain: void 0
    })
};

function DF_M5j(a) {
    this.g = a
}
DF_M5j.prototype.storeAccessToken = function(a) {
    this.g.storeAccessToken(a.token, (new Date).getTime() + a.expirationMs)
};
DF_M5j.prototype.restoreAccessToken = function() {
    var a = this.g.getAccessToken(),
        b = this.g.getAccessTokenExpiration();
    if (!a || !b) return null;
    var c = (new Date).getTime();
    return b <= c ? null : {
        token: a,
        expirationMs: b - c
    }
};
DF_M5j.prototype.clearAccessToken = function() {
    this.g.clearAccessToken()
};

function DF_M6j() {}
DF_M6j.prototype.storeAccessToken = function(a) {
    console.debug("DF-MESSENGER", "setAccessTokenCookie", a);
    var b = new DF_M3j,
        c = {
            fc: a.expirationMs / 1E3,
            nd: !0,
            md: "strict"
        };
    b.set("accessToken", a.token, c);
    b.set("accessTokenExpiration", ((new Date).getTime() + a.expirationMs).toString(), c)
};
DF_M6j.prototype.restoreAccessToken = function() {
    var a = new DF_M3j,
        b = a.get("accessToken");
    a = a.get("accessTokenExpiration");
    if (!b || !a) return null;
    a = Number(a);
    var c = (new Date).getTime();
    return a <= c ? null : {
        token: b,
        expirationMs: a - c
    }
};
DF_M6j.prototype.clearAccessToken = function() {
    var a = new DF_M3j;
    DF_M4j(a, "accessToken");
    DF_M4j(a, "accessTokenExpiration")
};

function DF_M7j(a, b) {
    this.g = a;
    this.i = 0;
    a = this.g;
    if (a.authSettings) try {
        var c = JSON.parse(a.authSettings)
    } catch (d) {
        console.error(d), c = null
    } else c = null;
    a: if (c) switch (c.provider) {
        case "Google":
            a = new DF_MZj(c.clientId, c.scope);
            break a;
        case "Microsoft":
            a = new DF_M2j(c.audience, c.clientId, c.authority, c.redirectUri);
            break a;
        default:
            throw Error("Unsupported auth provider: " + c.provider);
    } else a = new DF_MZj(this.g.oauthClientId, "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/cloud-platform");
    this.j = a;
    this.h = (null == c ? 0 : c.storeInCookie) ? new DF_M6j : new DF_M5j(b)
}
DF_M7j.prototype.requestAuthentication = function() {
    var a = this,
        b;
    return DF_Mh(function(c) {
        if (1 == c.g) return DF_Mg(c, a.j.requestAuthentication(), 2);
        b = c.h;
        a.g.accessToken = b.token;
        b.expirationMs && (DF_M8j(a, b.expirationMs), a.h.storeAccessToken(b));
        c.g = 0
    })
};
DF_M7j.prototype.restoreAccessToken = function() {
    var a = this.h.restoreAccessToken();
    if (!a) return !1;
    this.g.accessToken = a.token;
    DF_M8j(this, a.expirationMs);
    return !0
};
DF_M7j.prototype.clearAccessToken = function() {
    this.h.clearAccessToken();
    this.g.accessToken = null
};

function DF_M8j(a, b) {
    clearTimeout(a.i);
    a.i = setTimeout(function() {
        a.g.accessToken = null;
        a.h.clearAccessToken()
    }, b)
};

function DF_M9j() {}

function DF_M$j(a, b, c) {
    var d, e;
    return DF_Mh(function(f) {
        if (1 == f.g) return DF_Mg(f, fetch(b, {
            method: "POST",
            headers: c,
            body: a
        }), 2);
        if (3 != f.g) {
            d = f.h;
            if (!d.ok) throw {
                error: {
                    code: 404 === d.status ? "NOT_FOUND" : 401 === d.status || 403 === d.status ? "AUTH_ERROR" : "UNKNOWN",
                    message: "Fetch error",
                    status: d.status.toString()
                }
            };
            return DF_Mg(f, d.text(), 3)
        }
        return (e = f.h) && 0 === e.indexOf(")]}'\n") ? f.return(e.substring(5)) : f.return(e)
    })
};

function DF_Mak(a) {
    this.g = a
}
DF_Mf(DF_Mak, DF_M9j);
DF_Mak.prototype.uploadFile = function(a, b) {
    var c = this;
    return new Promise(function(d, e) {
        console.debug("DF-MESSENGER", "uploadFile", a, b);
        DF_M$j(a, "https://storage.googleapis.com/upload/storage/v1/b/" + c.g.gcsUpload + "/o?uploadType=media&name=" + encodeURIComponent(b), DF_Mbk(c, a.type)).then(function() {
            console.debug("DF-MESSENGER", "uploadFile", "Response", "ok");
            d()
        }).catch(function(f) {
            console.error("DF-MESSENGER", "uploadFile", "Error", f);
            DF_Ml(c.g, "df-messenger-error", {
                error: f
            });
            e(f)
        })
    })
};

function DF_Mbk(a, b) {
    b = {
        "Content-Type": b
    };
    a.g.isAuthenticationRequired && (b.Authorization = "Bearer " + a.g.accessToken);
    return b
};

function DF_Mck(a) {
    var b = a.responseId,
        c, d = (null == (c = a.queryResult) ? void 0 : c.allowAnswerFeedback) || !1,
        e, f;
    c = null == (e = a.queryResult) ? void 0 : null == (f = e.currentPage) ? void 0 : f.name;
    var g = "normal",
        h, k;
    if (!(null == (h = a.queryResult) ? 0 : null == (k = h.responseMessages) ? 0 : k.length)) return Object.assign({}, {
        responseId: b,
        mode: g,
        messages: [],
        allowFeedback: d
    }, c ? {
        currentPageName: c
    } : {});
    e = [];
    a = DF_Md(a.queryResult.responseMessages);
    for (f = a.next(); !f.done; f = a.next())
        if (f = f.value, f.text && f.text.text && (h = f.text.text.map(function(l) {
                return {
                    type: "text",
                    text: l
                }
            }), e.push.apply(e, DF_Me(h))), f.payload && f.payload.richContent)
            for (h = void 0, f = (null == (h = f.payload.richContent) ? void 0 : h.map(function(l) {
                    return l.filter(DF_M2a).map(function(m) {
                        m.id || (m.id = DF_Mnj());
                        DF_Mdk(m) && (g = "blocking");
                        return m
                    })
                })) || [], f = DF_Md(f), h = f.next(); !h.done; h = f.next()) e.push.apply(e, DF_Me(DF_MZa(h.value)));
    return Object.assign({}, {
        responseId: b,
        mode: g,
        messages: e,
        allowFeedback: d
    }, c ? {
        currentPageName: c
    } : {})
}

function DF_Mdk(a) {
    switch (a.type) {
        case "button":
            return "blocking" === a.mode;
        case "chips":
            return a.options.some(function(b) {
                return "blocking" === b.mode
            });
        default:
            return !1
    }
};

function DF_Mek(a) {
    this.g = a
}
DF_Mf(DF_Mek, DF_M9j);

function DF_Mfk(a, b) {
    a.g.botWriting = !0;
    DF_Ml(a.g, "df-request-sent", {
        requestBody: b
    });
    return new Promise(function(c, d) {
        DF_M$j(JSON.stringify(b), DF_Mgk(a, "detectIntent"), DF_Mhk(a)).then(function(e) {
            e = JSON.parse(e);
            console.debug("DF-MESSENGER", "detectIntent", "Response", e);
            var f = DF_Mck(e);
            DF_Ml(a.g, "df-response-received", {
                messages: f.messages,
                raw: e
            });
            c(f)
        }).catch(function(e) {
            console.error("DF-MESSENGER", "detectIntent", "Error", e);
            DF_Ml(a.g, "df-messenger-error", {
                error: e
            });
            d(e)
        }).finally(function() {
            a.g.botWriting = !1
        })
    })
}
DF_Mek.prototype.sendFeedback = function(a) {
    var b = this;
    DF_Ml(this.g, "df-feedback-request-sent", {
        requestBody: a
    });
    return new Promise(function(c, d) {
        DF_M$j(JSON.stringify(a), DF_Mgk(b, "submitAnswerFeedback"), DF_Mhk(b)).then(function(e) {
            console.debug("DF-MESSENGER", "submitAnswerFeedback", "Response", JSON.parse(e));
            c()
        }).catch(function(e) {
            console.error("DF-MESSENGER", "submitAnswerFeedback", "Error", e);
            DF_Ml(b.g, "df-messenger-error", {
                error: e
            });
            d(e)
        })
    })
};

function DF_Mgk(a, b) {
    if (a.g.isAuthenticationRequired) return a.g.apiUriOrDefault + "/projects/" + a.g.projectId + "/locations/" + a.g.location + "/agents/" + a.g.agentId + "/" + (a.g.environment ? "environments/" + a.g.environment + "/" : "") + "sessions/" + a.g.sessionId + ":" + b;
    switch (b) {
        case "detectIntent":
            return a.g.projectId ? a.g.apiUriOrDefault + "/projects/" + a.g.projectId + "/agents/" + a.g.agentId + "/sessions/" + a.g.sessionId : a.g.apiUriOrDefault + "/" + a.g.agentId + "/sessions/" + a.g.sessionId;
        case "submitAnswerFeedback":
            return a.g.projectId ?
                a.g.apiUriOrDefault + "/submitanswerfeedback/projects/" + a.g.projectId + "/agents/" + a.g.agentId + "/sessions/" + a.g.sessionId : a.g.apiUriOrDefault + "/submitanswerfeedback/" + a.g.agentId + "/sessions/" + a.g.sessionId;
        default:
            throw Error("Unimplemented");
    }
}

function DF_Mhk(a) {
    var b = {
        "Content-Type": "application/json"
    };
    a.g.isAuthenticationRequired && (b.Authorization = "Bearer " + a.g.accessToken, b["X-Goog-User-Project"] = a.g.projectId);
    return b
};

function DF_Mik(a) {
    this.g = new DF_Mek(a);
    this.h = new DF_Mak(a)
}
DF_Mik.prototype.sendFeedback = function(a) {
    return this.g.sendFeedback(a)
};
DF_Mik.prototype.uploadFile = function(a, b) {
    return this.h.uploadFile(a, b)
};

function DF_Mjk() {
    this.allowFeedback = !1;
    this.mode = "normal";
    this.languageCode = null;
    this.utteranceId = "utterance-" + DF_Mnj()
}

function DF_Mkk(a, b, c) {
    return Object.assign({}, {
        utteranceId: a.utteranceId,
        languageCode: a.languageCode,
        mode: a.mode,
        messages: b,
        isBot: c
    }, a.responseId ? {
        responseId: a.responseId
    } : {}, c ? {
        allowFeedback: a.allowFeedback
    } : {})
}

function DF_Mlk(a, b) {
    a.languageCode = b;
    return a
};

function DF_Mmk(a) {
    this.g = a
}
DF_Mmk.prototype.processResponse = function(a) {
    var b = new DF_Mjk;
    b.responseId = a.responseId;
    b.allowFeedback = a.allowFeedback;
    b.mode = a.mode;
    b = DF_Mkk(DF_Mlk(b, this.g.languageCode), a.messages, !0);
    this.g.addUtterance(b);
    b = [];
    for (var c = DF_Md(a.messages), d = c.next(); !d.done; d = c.next())
        if (d = d.value, "customCard" === d.type) {
            d = DF_Md(d.richElements);
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, "info" === e.type && (e = DF_Mkg(e)) && b.push(e.href)
        } else if ("match_citations" === d.type)
        for (d = DF_Md(d.citations), e = d.next(); !e.done; e =
            d.next())(e = DF_Mmg(e.value)) && b.push(e.href);
    b.length && DF_Ml(this.g, "df-url-suggested", {
        suggestedUrls: b
    });
    var f;
    (null == (f = a.currentPageName) ? 0 : f.endsWith("END_SESSION")) && DF_Ml(this.g, "df-session-ended", {})
};

function DF_Mnk() {
    this.sessionId = null;
    this.N = [];
    this.G = {};
    this.h = !1;
    this.i = 0;
    this.F = new Set;
    this.K = new Map;
    this.canAcceptInput = !0;
    this.g = this.accessToken = this.j = this.endUserMetadata = null
}
DF_M = DF_Mnk.prototype;
DF_M.storeSessionId = function(a) {
    this.sessionId = a
};
DF_M.storeUtterance = function(a) {
    this.N.push(a)
};
DF_M.storeChatBubbleExpanded = function(a) {
    this.h = a
};
DF_M.storeChatScrollDistance = function(a) {
    this.i = a
};
DF_M.storeMessageClicked = function(a) {
    this.F.add(a)
};
DF_M.storeUtteranceReaction = function(a, b) {
    this.K.set(a, b)
};
DF_M.storeCanAcceptInput = function(a) {
    this.canAcceptInput = a
};
DF_M.storeEndUserMetadata = function(a) {
    this.endUserMetadata = a
};
DF_M.storeQueryParameters = function(a) {
    this.G = a
};
DF_M.storeLastResponseInstant = function(a) {
    this.j = a
};
DF_M.storeAccessToken = function(a, b) {
    this.accessToken = a;
    this.g = b
};
DF_M.getEndUserMetadata = function() {
    return null === this.endUserMetadata ? null : Object.assign({}, this.endUserMetadata)
};
DF_M.getLastResponseInstant = function() {
    return this.j
};
DF_M.getSessionId = function() {
    return this.sessionId
};
DF_M.getUtterances = function() {
    return [].concat(DF_Me(this.N))
};
DF_M.isChatBubbleExpanded = function() {
    return this.h
};
DF_M.getChatScrollDistance = function() {
    return this.i
};
DF_M.isMessageClicked = function(a) {
    return this.F.has(a)
};
DF_M.getUtteranceReaction = function(a) {
    return this.K.get(a) || 0
};
DF_M.getCanAcceptInput = function() {
    return this.canAcceptInput
};
DF_M.getQueryParameters = function() {
    return this.G
};
DF_M.getAccessToken = function() {
    return !this.accessToken || !this.g || (new Date).getTime() > this.g ? null : this.accessToken
};
DF_M.getAccessTokenExpiration = function() {
    return this.g
};
DF_M.clearMessages = function() {
    this.N = []
};
DF_M.clearLastResponseInstant = function() {
    this.j = null
};
DF_M.clearAccessToken = function() {
    this.g = this.accessToken = null
};
DF_M.clearAll = function() {
    this.sessionId = null;
    this.clearMessages();
    this.endUserMetadata = null;
    this.G = {};
    this.clearLastResponseInstant();
    this.F.clear();
    this.K.clear();
    this.canAcceptInput = !0;
    this.h = !1;
    this.i = 0;
    this.clearAccessToken()
};

function DF_Mok() {}
DF_M = DF_Mok.prototype;
DF_M.storeSessionId = function(a) {
    DF_Mpk("sessionID", a)
};
DF_M.storeUtterance = function(a) {
    a = JSON.stringify(a);
    var b = DF_Mqk("messages") || "";
    DF_Mpk("messages", b.length ? b + "," + a : a)
};
DF_M.storeChatBubbleExpanded = function(a) {
    DF_Mpk("chatBubbleExpansion", String(a))
};
DF_M.storeChatScrollDistance = function(a) {
    DF_Mpk("chatScrollDistance", String(a))
};
DF_M.storeMessageClicked = function(a) {
    DF_Mpk(a + "-clicked", "true")
};
DF_M.storeUtteranceReaction = function(a, b) {
    DF_Mpk(a + "-reaction", String(b))
};
DF_M.storeCanAcceptInput = function(a) {
    DF_Mpk("canAccessInput", String(a))
};
DF_M.storeEndUserMetadata = function(a) {
    DF_Mpk("endUserMetadata", JSON.stringify(a))
};
DF_M.storeQueryParameters = function(a) {
    DF_Mpk("queryParameters", JSON.stringify(a))
};
DF_M.storeLastResponseInstant = function(a) {
    DF_Mpk("lastResponseInstant", String(a))
};
DF_M.storeAccessToken = function(a, b) {
    DF_Mpk("accessToken", a);
    DF_Mpk("accessTokenExpiration", String(b))
};

function DF_Mpk(a, b) {
    console.debug("DF-MESSENGER", "SessionStorage", "setItem", a, null === b ? null : 24 > b.length ? b : b.substring(0, 24) + "...");
    try {
        window.sessionStorage.setItem("df-messenger-" + a, b)
    } catch (c) {
        console.error("DF-MESSENGER", "SessionStorage", "setItem", c)
    }
}
DF_M.getEndUserMetadata = function() {
    try {
        var a = DF_Mqk("endUserMetadata");
        if (a) return JSON.parse(a)
    } catch (b) {
        console.error("DF-MESSENGER", "SessionStorage", "getEndUserMetadata", b)
    }
    return null
};
DF_M.getQueryParameters = function() {
    try {
        var a = DF_Mqk("queryParameters");
        if (a) return JSON.parse(a)
    } catch (b) {
        console.error("DF-MESSENGER", "SessionStorage", "getQueryParameters", b)
    }
    return {}
};
DF_M.getLastResponseInstant = function() {
    var a = DF_Mqk("lastResponseInstant");
    return a ? Number(a) : null
};
DF_M.getSessionId = function() {
    return DF_Mqk("sessionID")
};
DF_M.getUtterances = function() {
    try {
        var a = DF_Mqk("messages");
        if (a) return JSON.parse("[" + a + "]")
    } catch (b) {
        console.error("DF-MESSENGER", "SessionStorage", "getStoredMessages", b)
    }
    return []
};
DF_M.isChatBubbleExpanded = function() {
    var a = DF_Mqk("chatBubbleExpansion");
    return !!a && "true" === a
};
DF_M.getChatScrollDistance = function() {
    var a = DF_Mqk("chatScrollDistance");
    return a ? Number(a) : 0
};
DF_M.isMessageClicked = function(a) {
    a = DF_Mqk(a + "-clicked");
    return !!a && "true" === a
};
DF_M.getUtteranceReaction = function(a) {
    return (a = DF_Mqk(a + "-reaction")) ? Number(a) : 0
};
DF_M.getCanAcceptInput = function() {
    return "false" !== DF_Mqk("canAccessInput")
};
DF_M.getAccessToken = function() {
    var a = DF_Mqk("accessToken"),
        b = this.getAccessTokenExpiration();
    return !a || !b || (new Date).getTime() > Number(b) ? null : a
};
DF_M.getAccessTokenExpiration = function() {
    var a = DF_Mqk("accessTokenExpiration");
    return a ? Number(a) : null
};

function DF_Mqk(a) {
    var b = null;
    try {
        b = window.sessionStorage.getItem("df-messenger-" + a), console.debug("DF-MESSENGER", "SessionStorage", "getItem", a, null === b ? null : 24 > b.length ? b : b.substring(0, 24) + "...")
    } catch (c) {
        console.error("DF-MESSENGER", "SessionStorage", "getItem", a, c)
    }
    return b
}
DF_M.clearMessages = function() {
    DF_Mrk("messages")
};
DF_M.clearLastResponseInstant = function() {
    DF_Mrk("lastResponseInstant")
};
DF_M.clearAccessToken = function() {
    DF_Mrk("accessToken");
    DF_Mrk("accessTokenExpiration")
};

function DF_Mrk(a) {
    console.debug("DF-MESSENGER", "SessionStorage", "removeItem", a);
    window.sessionStorage.removeItem("df-messenger-" + a)
}
DF_M.clearAll = function() {
    console.debug("DF-MESSENGER", "SessionStorage", "clear");
    for (var a = [], b = 0; b < window.sessionStorage.length; ++b) {
        var c = void 0,
            d = null != (c = window.sessionStorage.key(b)) ? c : "";
        d.startsWith("df-messenger") && a.push(d)
    }
    a.forEach(function(e) {
        return void window.sessionStorage.removeItem(e)
    })
};

function DF_Msk(a) {
    this.h = a;
    this.G = !1;
    this.j = 0;
    a: switch (this.h.storageOption) {
        case "none":
            a = new DF_Mnk;
            break a;
        default:
            a = new DF_Mok
    }
    this.g = a;
    this.K = new DF_Mmk(this.h);
    this.i = new DF_M7j(this.h, this.g);
    this.F = new DF_Mik(this.h)
}
DF_M = DF_Msk.prototype;
DF_M.triggerWelcomeIntent = function(a) {
    var b = this;
    return DF_Mh(function(c) {
        if (1 == c.g) {
            if (!b.G) return c.return(!1);
            console.debug("DF-MESSENGER", "trigger welcome intent");
            b.G = !1;
            return DF_Mg(c, b.sendRequest(DF_Mdf(a, b.h.languageCode)), 2)
        }
        return c.return(!0)
    })
};
DF_M.restoreSessionTimeout = function(a) {
    var b = this,
        c = this.g.getLastResponseInstant();
    c && (a -= (new Date).getTime() - c, 0 >= a ? DF_Mtk(this) : this.j = window.setTimeout(function() {
        return void DF_Mtk(b)
    }, a))
};
DF_M.requestAuthentication = function() {
    return this.i.requestAuthentication()
};
DF_M.storeEndUserMetadata = function(a) {
    this.g.storeEndUserMetadata(a)
};
DF_M.setQueryParameters = function(a) {
    this.g.storeQueryParameters(a)
};
DF_M.storeNewSessionId = function(a) {
    this.G = !0;
    DF_Muk(this);
    this.g.storeSessionId(a)
};
DF_M.storeUtterance = function(a) {
    this.g.storeUtterance(a)
};
DF_M.storeMessageClicked = function(a) {
    this.g.storeMessageClicked(a)
};
DF_M.storeUtteranceReaction = function(a, b) {
    this.g.storeUtteranceReaction(a, b)
};
DF_M.storeChatBubbleExpanded = function(a) {
    this.g.storeChatBubbleExpanded(a)
};
DF_M.storeChatScrollDistance = function(a) {
    this.g.storeChatScrollDistance(a)
};
DF_M.storeCanAcceptInput = function(a) {
    this.g.storeCanAcceptInput(a)
};
DF_M.storeLastResponseInstant = function(a) {
    this.g.storeLastResponseInstant(a)
};
DF_M.getCanAcceptInput = function() {
    return this.g.getCanAcceptInput()
};
DF_M.getSessionId = function() {
    return this.g.getSessionId()
};
DF_M.getUtterances = function() {
    var a = this;
    return this.g.getUtterances().reduce(function(b, c) {
        c.messages = DF_Mvk(a, c.messages, c.utteranceId);
        0 < c.messages.length && b.push(c);
        return b
    }, [])
};
DF_M.getQueryParameters = function() {
    return this.g.getQueryParameters()
};
DF_M.processResponse = function(a) {
    this.K.processResponse(a)
};

function DF_Mvk(a, b, c) {
    return b.filter(function(d) {
        return "chips" === d.type ? !a.g.isMessageClicked("chips-" + c + "-" + d.id) : !0
    })
}
DF_M.isChatBubbleExpanded = function() {
    return this.g.isChatBubbleExpanded()
};
DF_M.getChatScrollDistance = function() {
    return this.g.getChatScrollDistance()
};
DF_M.getUtteranceReaction = function(a) {
    return this.g.getUtteranceReaction(a)
};
DF_M.restoreAccessToken = function() {
    return this.i.restoreAccessToken()
};
DF_M.clearStorage = function() {
    this.g.clearAll();
    this.clearAuthentication()
};
DF_M.clearAuthentication = function() {
    this.i.clearAccessToken()
};
DF_M.sendRequest = function(a) {
    var b = this,
        c, d, e, f;
    return DF_Mh(function(g) {
        if (1 == g.g) {
            c = {
                queryInput: a
            };
            d = b.getQueryParameters();
            d.channel = "DF_MESSENGER";
            if (e = b.g.getEndUserMetadata()) d.endUserMetadata = e;
            b.h.sessionTtl && (86400 <= b.h.sessionTtl && console.error("DF-MESSENGER", "session-ttl must be strictly less than 86400 seconds"), d.sessionTtl = b.h.sessionTtl + "s");
            0 < Object.keys(d).length && (c.queryParams = d);
            return DF_Mg(g, DF_Mfk(b.F.g, c), 2)
        }
        f = g.h;
        b.processResponse(f);
        DF_Mwk(b);
        g.g = 0
    })
};

function DF_Mtk(a) {
    DF_Muk(a);
    console.debug("DF-MESSENGER", "session timed out!");
    DF_Ml(a.h, "df-session-expired", {})
}

function DF_Mwk(a) {
    DF_Muk(a);
    a.j = window.setTimeout(function() {
        return void DF_Mtk(a)
    }, 1E3 * (a.h.sessionTtl || 1800));
    a.g.storeLastResponseInstant((new Date).getTime())
}

function DF_Muk(a) {
    window.clearTimeout(a.j);
    a.j = 0;
    a.g.clearLastResponseInstant()
}
DF_M.sendFeedback = function(a) {
    return this.F.sendFeedback(a)
};
DF_M.uploadFile = function(a, b) {
    return this.F.uploadFile(a, b)
};
DF_M.getStorageHandler = function() {
    return this.g
};
DF_M.getResponseHandler = function() {
    return this.K
};
DF_M.getAuthProvider = function() {
    return this.i
};
var DF_Mxk = DF_Mc(['\n        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Google+Sans">\n        <style>\n          :root {\n            --df-messenger-default-font-family: "Google Sans", "Helvetica Neue", sans-serif;\n            --df-messenger-default-font-size: 14px;\n            --df-messenger-default-font-color: #1f1f1f;\n            --df-messenger-default-secondary-font-color: #757575;\n            --df-messenger-default-icon-font-color: #444746;\n            --df-messenger-default-primary-color: #0b57d0;\n            --df-messenger-default-link-font-color: #0b57d0;\n            --df-messenger-default-link-decoration: underline;\n            --df-messenger-default-focus-color: #1e88e5;\n            --df-messenger-default-focus-color-contrast: #fff;\n            --df-messenger-default-border-color: #e0e0e0;\n            --df-messenger-default-border: 1px solid var(--df-messenger-default-border-color);\n            --df-messenger-default-border-radius: 8px;\n            --df-messenger-default-chat-border-radius: 0;\n            --df-messenger-default-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24);\n          }\n        </style>']);
var DF_Myk = DF_Mc(['\n      <div class="chat-bubble-default-wrapper">\n        <df-messenger-chat-bubble\n          .chatTitle=', "\n        ></df-messenger-chat-bubble>\n      </div>"]),
    DF_Mzk = DF_Mc(['\n      <div class="wrapper">\n        ', "\n        <slot @slotchange=", "></slot>\n      </div>\n    "]);

function DF_M9() {
    var a = DF_Mx.call(this) || this;
    a.apiUri = null;
    a.oauthClientId = null;
    a.authSettings = null;
    a.projectId = null;
    a.agentId = null;
    a.languageCode = null;
    a.allowFeedback = null;
    a.chatTitle = null;
    a.welcomeIntent = null;
    a.gcsUpload = null;
    a.sessionId = null;
    a.Gb = null;
    a.location = null;
    a.environment = null;
    a.urlAllowlist = null;
    a.sessionTtl = null;
    a.maxQueryLength = 256;
    a.botWriting = !1;
    a.Za = !0;
    a.isAuthenticationPending = !1;
    a.vc = a;
    a.debug = new DF_MXe;
    a.Fb = !1;
    a.addUtterance = a.addUtterance.bind(a);
    return a
}
DF_Mf(DF_M9, DF_Mx);
DF_M9.C = DF_Mx.C;
DF_M9.m = DF_Mx.m;
DF_M9.o = DF_Mx.o;
DF_M9.h = DF_Mx.h;
DF_M9.g = DF_Mx.g;
DF_M9.v = DF_Mx.v;
DF_M9.i = DF_Mx.i;
DF_M9.s = DF_Mx.s;
DF_M9.l = DF_Mx.l;
DF_M9.u = DF_Mx.u;
DF_M = DF_M9.prototype;
DF_M.connectedCallback = function() {
    var a = this,
        b = DF_MAk(this);
    0 < b.length && console.error("DF-MESSENGER", "The widget is missing the following attributes", b);
    this.presenter = new DF_Msk(this);
    this.isAuthenticationPending = !this.accessToken && this.isAuthenticationRequired;
    DF_MBk(this);
    this.isAuthenticationPending && this.presenter.restoreAccessToken();
    this.canAcceptInput = this.presenter.getCanAcceptInput();
    DF_MCd(DF_Mv(DF_Mxk), document.head, {
        eb: document.head.querySelector("link,style")
    });
    this.addEventListener("df-register-message-consumer",
        function(c) {
            c.stopPropagation();
            a.h = c.detail.consumer;
            c = a.presenter.getUtterances();
            if (0 < c.length) {
                var d;
                null == (d = a.h) || d.addMessages(c)
            }
        });
    DF_Mx.prototype.connectedCallback.call(this)
};
DF_M.Z = function(a) {
    var b = this;
    DF_Ml(this, "df-messenger-loaded", {});
    DF_Mx.prototype.Z.call(this, a);
    this.presenter.restoreSessionTimeout(1E3 * (this.sessionTtl || 1800));
    setTimeout(function() {
        b.Fb = !0
    }, 1)
};
DF_M.requestAuthentication = function() {
    var a = this;
    return DF_Mh(function(b) {
        1 == b.g ? b = DF_Mg(b, a.presenter.requestAuthentication(), 2) : a.welcomeIntent ? b = DF_Mg(b, a.presenter.triggerWelcomeIntent(a.welcomeIntent), 0) : (b.g = 0, b = void 0);
        return b
    })
};
DF_M.renderCustomText = function(a, b) {
    b = void 0 === b ? !0 : b;
    a = {
        type: "text",
        text: a
    };
    b = DF_Mkk(DF_Mlk(new DF_Mjk, this.languageCode), [a], b);
    this.addUtterance(b)
};
DF_M.renderCustomCard = function(a) {
    a = DF_MZa(a);
    a = DF_Mkk(DF_Mlk(new DF_Mjk, this.languageCode), a, !0);
    this.addUtterance(a)
};
DF_M.setContext = function(a) {
    this.presenter.storeEndUserMetadata(a)
};
DF_M.setQueryParameters = function(a) {
    this.presenter.setQueryParameters(a)
};
DF_M.reactionsAllowed = function() {
    return "all" === this.allowFeedback
};
DF_M.clearStorage = function() {
    this.presenter.clearStorage();
    this.Za = !0;
    var a;
    null == (a = this.h) || a.clearMessages()
};
DF_M.clearAuthentication = function() {
    this.presenter.clearAuthentication()
};
DF_M.startNewSession = function(a) {
    (null == a ? 0 : a.retainHistory) || this.clearStorage();
    this.sessionId = "dfMessenger-" + DF_Mnj();
    this.presenter.storeNewSessionId(this.sessionId);
    this.welcomeIntent && !this.isAuthenticationPending && this.presenter.triggerWelcomeIntent(this.welcomeIntent)
};
DF_M.addUtterance = function(a) {
    "blocking" === a.mode && (this.canAcceptInput = !1);
    this.presenter.storeUtterance(a);
    var b;
    null == (b = this.h) || b.addMessages([a])
};
DF_M.sendQuery = function(a) {
    var b = this;
    return DF_Mh(function(c) {
        return DF_Mg(c, b.sendRequest("query", a), 0)
    })
};
DF_M.sendRequest = function(a, b) {
    var c = this,
        d, e, f;
    return DF_Mh(function(g) {
        switch (g.g) {
            case 1:
                switch (a) {
                    case "query":
                        g.g = 2;
                        return;
                    case "event":
                        g.g = 3;
                        return;
                    case "audio":
                        g.g = 4;
                        return;
                    case "feedback":
                        g.g = 5;
                        return;
                    default:
                        throw Error("Unknown request type: " + a);
                }
            case 2:
                if (!DF_M5a(b)) throw Error("Bad argument type, 'query' expects string");
                d = b;
                if (!DF_M$a(d.length, c.maxQueryLength)) throw Error("Bad argument, payload exceeds " + c.maxQueryLength + " characters");
                return DF_Mg(g, c.presenter.sendRequest(DF_Mcf(b,
                    c.languageCode)), 7);
            case 7:
                return g.return();
            case 3:
                if (!DF_M5a(b)) throw Error("Bad argument type, 'event' expects string");
                return DF_Mg(g, c.presenter.sendRequest(DF_Mdf(b, c.languageCode)), 8);
            case 8:
                return g.return();
            case 4:
                if (!DF_M5a(b)) throw Error("Bad argument type, 'audio' expects string");
                var h = c.presenter,
                    k = h.sendRequest,
                    l = c.languageCode,
                    m = Object.assign({}, DF_Mbf);
                m.audio.audio = b;
                m.languageCode = l || "";
                return DF_Mg(g, k.call(h, m), 9);
            case 9:
                return g.return();
            case 5:
                if (!DF_M6a(b)) throw Error("Bad argument type, 'feedback' expects object");
                e = b;
                if (!DF_M5a(e.responseId) || !DF_M6a(e.answerFeedback)) throw Error("Bad argument type, 'responseId' and 'answerFeedback' are required");
                if (1024 < ((null == (f = e.answerFeedback.customRating) ? void 0 : f.length) || 0)) throw Error("Bad argument, payload's customRating exceeds 1024 characters");
                return DF_Mg(g, c.presenter.sendFeedback(b), 10);
            case 10:
                return g.return()
        }
    })
};

function DF_MAk(a) {
    var b = [];
    a.projectId || b.push("project-id");
    a.agentId || b.push("agent-id");
    a.languageCode || (console.debug("DF-MESSENGER", "df-messenger", "using en language code"), a.languageCode = "en");
    a.location || (console.debug("DF-MESSENGER", "df-messenger", "using global location"), a.location = "global");
    return b
}

function DF_MBk(a) {
    if (!a.sessionId) {
        var b = a.presenter.getSessionId();
        b ? a.sessionId = b : (a.sessionId = "dfMessenger-" + DF_Mnj(), a.presenter.storeNewSessionId(a.sessionId))
    }
}
DF_M.od = function() {
    DF_MNa(this)
};
DF_M.render = function() {
    return DF_Mv(DF_Mzk, !this.Fb || this.j ? null : DF_Mv(DF_Myk, this.chatTitle), this.od)
};
DF_Ma.Object.defineProperties(DF_M9.prototype, {
    apiUriOrDefault: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.apiUri || (this.isAuthenticationRequired ? this.location && "global" !== this.location ? "https://" + this.location + "-dialogflow.googleapis.com/v3" : "https://dialogflow.googleapis.com/v3" : this.location && "global" !== this.location ? "https://dialogflow.cloud.google.com/v1/cx/locations/" + this.location + "/integrations/messenger/webhook" : "https://dialogflow.cloud.google.com/v1/cx/integrations/messenger/webhook")
        }
    },
    accessToken: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Gb
        },
        set: function(a) {
            this.Gb = a;
            this.isAuthenticationPending = !this.accessToken && this.isAuthenticationRequired
        }
    },
    storageOption: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.getAttribute("storage-option")
        }
    },
    enableCodeHighlight: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.hasAttribute("enable-code-highlight")
        }
    },
    canAcceptInput: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.Za
        },
        set: function(a) {
            this.Za =
                a;
            this.presenter.storeCanAcceptInput(a)
        }
    },
    isAuthenticationRequired: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return !!this.oauthClientId || !!this.authSettings
        }
    },
    assignedNodes: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return null == (a = this.T.querySelector("slot")) ? void 0 : a.assignedNodes()
        }
    },
    j: {
        configurable: !0,
        enumerable: !0,
        get: function() {
            var a;
            return null == (a = this.assignedNodes) ? void 0 : a.some(function(b) {
                if (b.nodeType === Node.TEXT_NODE) {
                    var c;
                    return 0 < (null != (c = b.textContent) ? c : "").trim().length
                }
                return !0
            })
        }
    }
});
var DF_M$ = DF_M9;
DF_M$.j = [DF_MId, DF_Mz];
DF_Mj([DF_Mr({
    D: "api-uri",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "apiUri", void 0);
DF_Mj([DF_Mr({
    D: "oauth-client-id",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "oauthClientId", void 0);
DF_Mj([DF_Mr({
    D: "auth",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "authSettings", void 0);
DF_Mj([DF_Mr({
    D: "project-id",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "projectId", void 0);
DF_Mj([DF_Mr({
    D: "agent-id",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "agentId", void 0);
DF_Mj([DF_MVa({
    context: "df-languagecode"
}), DF_Mr({
    D: "language-code",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "languageCode", void 0);
DF_Mj([DF_Mr({
    D: "allow-feedback",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "allowFeedback", void 0);
DF_Mj([DF_Mr({
    D: "chat-title",
    type: String
}), DF_Mk("design:type", Object)], DF_M$.prototype, "chatTitle", void 0);
DF_Mj([DF_Mr({
    D: "intent",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "welcomeIntent", void 0);
DF_Mj([DF_Mr({
    D: "gcs-upload",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "gcsUpload", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M$.prototype, "sessionId", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M$.prototype, "Gb", void 0);
DF_Mj([DF_Mr({
    D: "location",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "location", void 0);
DF_Mj([DF_Mr({
    D: "environment",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "environment", void 0);
DF_Mj([DF_Mr({
    D: "url-allowlist",
    type: String,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "urlAllowlist", void 0);
DF_Mj([DF_Mr({
    D: "session-ttl",
    type: Number,
    L: !0
}), DF_Mk("design:type", Object)], DF_M$.prototype, "sessionTtl", void 0);
DF_Mj([DF_Mr({
    D: "max-query-length",
    type: Number,
    L: !0
}), DF_Mk("design:type", Number)], DF_M$.prototype, "maxQueryLength", void 0);
DF_Mj([DF_MVa({
    context: "df-botwriting"
}), DF_Ms(), DF_Mk("design:type", Object)], DF_M$.prototype, "botWriting", void 0);
DF_Mj([DF_MVa({
    context: "df-canacceptinput"
}), DF_Ms(), DF_Mk("design:type", Object)], DF_M$.prototype, "Za", void 0);
DF_Mj([DF_MVa({
    context: "df-authenticationpending"
}), DF_Ms(), DF_Mk("design:type", Object)], DF_M$.prototype, "isAuthenticationPending", void 0);
DF_Mj([DF_MVa({
    context: "df-instance"
}), DF_Mk("design:type", Object)], DF_M$.prototype, "vc", void 0);
DF_Mj([DF_Ms(), DF_Mk("design:type", Object)], DF_M$.prototype, "Fb", void 0);
DF_M$ = DF_Mj([DF_Mo("df-messenger"), DF_Mk("design:paramtypes", [])], DF_M$);