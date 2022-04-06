/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function (e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function (e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function (e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                T()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                    return e === i
                }, a, !0), l = be(function (e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                } return r
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return h(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function (e) {
            return O(e, "nextSibling")
        },
        prev: function (e) {
            return O(e, "previousSibling")
        },
        nextAll: function (e) {
            return h(e, "nextSibling")
        },
        prevAll: function (e) {
            return h(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return S.each(arguments, function (e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Se(this, e, Ce), !1
            },
            trigger: function () {
                return Se(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        },
        remove: function (e) {
            return Oe(this, e)
        },
        text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
                    return Je(e, u, n)
                })
            },
            set: function (e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function () {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        et || (et = !0, ot())
    }, S.fx.stop = function () {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function (e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/* mobile */
var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
};
var uri = window.location.toString();
if (uri.indexOf("&m=", "&m=") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m="));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=", "?m=") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m="));
    window.history.replaceState({}, document.title, clean_uri);
};
var uri = window.location.toString();
if (uri.indexOf("&m", "&m") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m", "?m") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m"));
    window.history.replaceState({}, document.title, clean_uri);
};

/* anti ctrl */
shortcut = {
    all_shortcuts: {},
    add: function (a, b, c) {
        var d = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (c)
            for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]);
        else c = d;
        d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)), a = a.toLowerCase(), e = function (d) {
            d = d || window.event;
            if (c.disable_in_input) {
                var e;
                d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
                if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return
            }
            d.keyCode ? code = d.keyCode : d.which && (code = d.which), e = String.fromCharCode(code)
                .toLowerCase(), 188 == code && (e = ","), 190 == code && (e = ".");
            var f = a.split("+"),
                g = 0,
                h = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                i = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                j = !1,
                l = !1,
                m = !1,
                n = !1,
                o = !1,
                p = !1,
                q = !1,
                r = !1;
            d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
            for (var s = 0; k = f[s], s < f.length; s++) "ctrl" == k || "control" == k ? (g++, m = !0) : "shift" == k ? (g++, j = !0) : "alt" == k ? (g++, o = !0) : "meta" == k ? (g++, q = !0) : 1 < k.length ? i[k] == code && g++ : c.keycode ? c.keycode == code && g++ : e == k ? g++ : h[e] && d.shiftKey && (e = h[e], e == k && g++);
            if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate)) return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
        }, this.all_shortcuts[a] = {
            callback: e,
            target: d,
            event: c.type
        }, d.addEventListener ? d.addEventListener(c.type, e, !1) : d.attachEvent ? d.attachEvent("on" + c.type, e) : d["on" + c.type] = e
    },
    remove: function (a) {
        var a = a.toLowerCase(),
            b = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (b) {
            var a = b.event,
                c = b.target,
                b = b.callback;
            c.detachEvent ? c.detachEvent("on" + a, b) : c.removeEventListener ? c.removeEventListener(a, b, !1) : c["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function () {
    var pages = [

        "https://euizhltcd6ih.com/j430q0q9v?key=1ca12afba1ffa31c0cbf971b78e06f7b",
        "https://jc32arlvqpv8.com/wmbh1ee0r?key=09d2bbf0c9678ba48f0526c2e11b464c",
        "https://www.trustedcpmrevenue.com/vetxzi7f?key=b4f78df472659153a5792364ea8e96a8",
        "https://slahpxqb6wto.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",
        "https://www.trustedcpmrevenue.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
        "https://www.trustedcpmrevenue.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
        "https://practicallysacrificestock.com/tz07feby?key=b0ae871d1325158f414e53d9fdf695cb",
        "https://www.trustedcpmrevenue.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
        "https://bonepa.com/e0fbb9db8b/552c957723/?placementName=default",
        "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",
        "https://vdbaa.com/fullpage.php?section=General&pub=831371&ga=g",
        "https://qoaaa.com/7066c7c5a8/a878503e65/?placementName=default",
        "https://bonepa.com/c49187b39f/403fc795f5/?placementName=default",
        "https://qoaaa.com/bb0ede6ad4/0c81745787/?placementName=default",
        "https://vdbaa.com/fullpage.php?section=General&pub=745199&ga=g",
        "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",

    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    location.href = randomPage();
});

/* antiback */
(function (window, location) {
    history.replaceState(null, document.title, location.pathname + "#!/history");
    history.pushState(null, document.title, location.pathname);
    window.addEventListener("popstate", function () {
        if (location.hash === "#!/history") {
            history.replaceState(null, document.title, location.pathname);
            setTimeout(function () {
                var pages = [

                    "https://bonepa.com/c49187b39f/1ae66b9705/?placementName=default",
                    "https://bonepa.com/e0fbb9db8b/e4016c2871/?placementName=default",
                    "https://bonepa.com/e0fbb9db8b/ea98870615/?placementName=default",
                    "https://euizhltcd6ih.com/a1cxr71k2p?key=fb4650db89e13e5f6259102256e2dd28",
                    "https://euizhltcd6ih.com/a37hczh2m?key=5d9cb36282c1542ab7c479496e0d553f",
                    "https://euizhltcd6ih.com/a42brqwd?key=7f50c5443250077a18e3940d8497eac1",
                    "https://euizhltcd6ih.com/a44ks6dhc?key=6579b672533c66cfa5d018a6b1440d41",
                    "https://euizhltcd6ih.com/a535dsff?key=63bde51383ca2766d81d050c648b569c",
                    "https://euizhltcd6ih.com/ad0ih8ah6?key=7817628a291e26cd32c7822aa2797485",
                    "https://euizhltcd6ih.com/afqni0ew?key=db9123903e4389fe642148942dfad77f",
                    "https://euizhltcd6ih.com/ag7qpb60s2?key=5b2968b76a4447d2c7441b837bea743c",
                    "https://euizhltcd6ih.com/aikvymbmi?key=50d1f3a2e3019294d680cb20d8a49df1",
                    "https://euizhltcd6ih.com/am3k2fmb4?key=881525934399961b8974eaf76d9f4671",
                    "https://euizhltcd6ih.com/angec1fir?key=646cab74e7a1242dee50622fe197058d",
                    "https://euizhltcd6ih.com/axb4ebe5?key=73c2fefb423ee015214e179573cc85cd",
                    "https://euizhltcd6ih.com/az0bhryvnz?key=6f823a49a9ea680bb6186ecd94d1f9cf",
                    "https://euizhltcd6ih.com/az4fe297?key=14befe67aecb7bb3969dca16ec1f3a6f",
                    "https://euizhltcd6ih.com/azg4br6q40?key=c6666165dad7e58016d3f23fdf98c31b",
                    "https://euizhltcd6ih.com/b6ez2baw7?key=7770e89516b7ce6c1d34ae325907c743",
                    "https://euizhltcd6ih.com/b7bcwyaw?key=5dd95e3df5e9c2e2beed6a84f39a294e",
                    "https://euizhltcd6ih.com/b9hkyvpm?key=ea0f391602ab3d2caf6180c624116dd8",
                    "https://euizhltcd6ih.com/ba5ihtf44?key=a2a48f0692e26f154683ca2ab4fa013b",
                    "https://euizhltcd6ih.com/bbbi2qa9u?key=7a2735e41090a4cf2e7cde2e439f9a47",
                    "https://euizhltcd6ih.com/bbgb1krq?key=ee02d4b880658437043814eb145afaaa",
                    "https://euizhltcd6ih.com/bdxxt5tu?key=7654dc00577a4edb24ce3e6071ceb44d",
                    "https://euizhltcd6ih.com/beap4g9h?key=fbc2cda4f822e139e5cbdded9c523eaa",
                    "https://euizhltcd6ih.com/bh37t3uqw?key=8bb096b571a884dd4744e2fef8d268a0",
                    "https://euizhltcd6ih.com/bif0r25r7?key=1acc97784b8e334f079f9d61bec945db",
                    "https://euizhltcd6ih.com/bnnz018301?key=b8ab55573bc845fe1ad066b834356776",
                    "https://euizhltcd6ih.com/bpbpcjf7mu?key=8acd449891d85b99dc7f49af706bce44",
                    "https://euizhltcd6ih.com/bprtc8kg?key=0fd67b7109a0ee79cfdbd80aad7c6959",
                    "https://euizhltcd6ih.com/bs3mdny1nt?key=b72a5ccc2d9de4220ca7fd9a7493d43e",
                    "https://euizhltcd6ih.com/bvxddg833v?key=9b96eee8612288822df32caa7e6b868d",
                    "https://euizhltcd6ih.com/bw0wgavb?key=6eee8031d78c95c6467439de5bf77b51",
                    "https://euizhltcd6ih.com/bytfwrcv?key=2fe6ba1e9d5b1ff7ccf9459cd977bd1e",
                    "https://euizhltcd6ih.com/c17c2ui689?key=713bed973f5582cd4f89b84e22b3be59",
                    "https://euizhltcd6ih.com/c3kfd03fc?key=de49f70046bfad4792423364416a5443",
                    "https://euizhltcd6ih.com/c4mcga33p6?key=b774c4b4d432a181947a754d44e08ebf",
                    "https://euizhltcd6ih.com/c4z22csdjz?key=7d05ea9f10c16d08bc3558c9688b4c86",
                    "https://euizhltcd6ih.com/c5htj3m54?key=8b066a9c51eebffa3d149dd127ced09b",
                    "https://euizhltcd6ih.com/cbau725wv?key=5321f568cb4a04137a7dead56793f075",
                    "https://euizhltcd6ih.com/chdcqh4qdt?key=2d86994f85f523697b148ab55e7bbbc2",
                    "https://euizhltcd6ih.com/chmuakmxv6?key=c3315374c953df30ef92f472001d31a4",
                    "https://euizhltcd6ih.com/ciu0pcnxuf?key=6a5a9aecd5da8e696653db88ea400087",
                    "https://euizhltcd6ih.com/cj4wjdm8h?key=e354a651a84b8aeb1da0e173892ac2f7",
                    "https://euizhltcd6ih.com/ck9723bauk?key=f00f8f049e0df3ee9edb641b8771a87b",
                    "https://euizhltcd6ih.com/cmc8wsw2w?key=5104bb1c7037df40b82b994870b8085f",
                    "https://euizhltcd6ih.com/cmg10sh2?key=13d6300ae182e43b9c4d2af92aa7209e",
                    "https://euizhltcd6ih.com/cpnbma39?key=215a8cd00225f51d7c6d877f75c6fef2",
                    "https://euizhltcd6ih.com/cri26xei?key=3f1f614f08353413b956a36ff4390e36",
                    "https://euizhltcd6ih.com/ctb6k4s648?key=80f2421cd21831bf88ead4316b327c09",
                    "https://euizhltcd6ih.com/ctspqxwp?key=f3763d7e68c1f6e589af40087192ae96",
                    "https://euizhltcd6ih.com/cxdpnd0b?key=6c7414f5f09e93773631a543a6fe8d54",
                    "https://euizhltcd6ih.com/cxgvpk8cbj?key=ad799bb2afffcd81efac5132def1f1ac",
                    "https://euizhltcd6ih.com/cy7hzvawi?key=4ab14f76aeeeb0d2394d27f7be1a6650",
                    "https://euizhltcd6ih.com/cztvnfjb?key=58c89b6a6a192d406290aa399e095258",
                    "https://euizhltcd6ih.com/d02i2qvfc?key=eeded307f3fc1165c94952407fc110e0",
                    "https://euizhltcd6ih.com/d0a6rbgtr?key=ebbfe9854901b5f461885531a01d3f7b",
                    "https://euizhltcd6ih.com/d669pamcur?key=6fca0eef2e15ccfb1aa3b181cc1417b1",
                    "https://euizhltcd6ih.com/d82cikp2uy?key=46348e19cae8b8946530fc4b9e348fa2",
                    "https://euizhltcd6ih.com/dbmv24aq6?key=969839e79f6d81a9523d5383ac473574",
                    "https://euizhltcd6ih.com/de2a45aa?key=3e0aaf033282a7bea93ca1a9a24705bc",
                    "https://euizhltcd6ih.com/dfskd3yp1?key=cea70923947d167bd2b73ddb14e3eb7c",
                    "https://euizhltcd6ih.com/dv584hqkk?key=4f1f67f83434035a8697ce7aefc1bcfb",
                    "https://euizhltcd6ih.com/dv85sm7r?key=1a4b4546305c3d3d341560f264af4e1d",
                    "https://euizhltcd6ih.com/dxhwi1xn?key=cdc73ec4710419d77259488aeac38ee3",
                    "https://euizhltcd6ih.com/dxp03v3w?key=e5c85dc9c9dc4c4f0bea6984695c2d33",
                    "https://euizhltcd6ih.com/dy49qxw7f?key=7569b99b3bea91fdd37d58692eb324c1",
                    "https://euizhltcd6ih.com/e7dpt2spw0?key=19c09864456d00c389c86629a9d8e931",
                    "https://euizhltcd6ih.com/e91h5p8w?key=f1afc20691c053112ff827d50a87b2ed",
                    "https://euizhltcd6ih.com/e9p6wz3r?key=a33274a62d18e735d74d61f596499c30",
                    "https://euizhltcd6ih.com/ea38s7g69?key=98e3671eb3ebc087e394578430631a59",
                    "https://euizhltcd6ih.com/eb2tbbnv?key=07fed1edaf88aa2e66ca3f6393dbb617",
                    "https://euizhltcd6ih.com/eb7e58g5?key=cc8d30b5fa1b9117fa22d2ffc5833cb6",
                    "https://euizhltcd6ih.com/efj84ipf?key=a80f44913563574591d37f3d71c28577",
                    "https://euizhltcd6ih.com/ehd2k038en?key=e44e783996daaa24434c68acf29e83b0",
                    "https://euizhltcd6ih.com/ejrt8900sb?key=c3690317bd779694c2a07421e335054f",
                    "https://euizhltcd6ih.com/emzfeatt9g?key=f8f8a9808bb629100f46f3438e9f0cdb",
                    "https://euizhltcd6ih.com/enmih9aa?key=73c6565d0d9f26343372ad4cfc7cf03c",
                    "https://euizhltcd6ih.com/enpwxy59?key=2e1be5717a62688697e346fae41bae69",
                    "https://euizhltcd6ih.com/eprcqstci?key=96855c514754c5a5a35cf806aba31b8a",
                    "https://euizhltcd6ih.com/eqkghad73?key=62e6b85d06b22a55a8aad1a5a2b1341d",
                    "https://euizhltcd6ih.com/er8c4cpki?key=07af3cfe7a799f1c6226d37fb6959b3d",
                    "https://euizhltcd6ih.com/etk0fwpng?key=7f963884958e2ca84c1ac51163f9fef3",
                    "https://euizhltcd6ih.com/euq17n7d80?key=061e546b5e045f34c302da4bec733fc8",
                    "https://euizhltcd6ih.com/evp4f8w8jk?key=adb2fc10c93b70681cbed1782b8dae0f",
                    "https://euizhltcd6ih.com/evt0712zyn?key=432cfc0d2570999ac56afff9e82dd949",
                    "https://euizhltcd6ih.com/eyffpbri?key=9bc646939d9ee50ec209d45f8b4ccdd8",
                    "https://euizhltcd6ih.com/f224bktbrj?key=dd0095aa1ab767603fb11ea4444b50b1",
                    "https://euizhltcd6ih.com/f3jhggqwz?key=50ecf00fd717ca080e1bd440fc8b7716",
                    "https://euizhltcd6ih.com/f654jx4j4d?key=1bf097c3c297f8a896d240e1763b7721",
                    "https://euizhltcd6ih.com/f8zn60e8e?key=150d91f92457b9657652fbe7c97a8c77",
                    "https://euizhltcd6ih.com/f9y37ji4?key=fc66e1e6d22794c5133b2abe3fab9b08",
                    "https://euizhltcd6ih.com/fe4wbew0?key=62c73267340844356d38330b17e610df",
                    "https://euizhltcd6ih.com/fhcbznmg9?key=2e298447d2d2313d08f957e63753e5a3",
                    "https://euizhltcd6ih.com/fj8acru98a?key=c973a0ce158cc5059bad786ebf7faa25",
                    "https://euizhltcd6ih.com/fsztcps79?key=00ac4e80e2e498b79c7038e6f406bc13",
                    "https://euizhltcd6ih.com/ftangsfqpd?key=2a7a4a6486aec098fd275ec29e0b852d",
                    "https://euizhltcd6ih.com/fwwtfw8q8?key=589279eba0e5ac9bf815934b2c76efc5",
                    "https://euizhltcd6ih.com/fxbauc3fa?key=8af304ca071be33577d1b414b170ba26",
                    "https://euizhltcd6ih.com/fxnvavfis?key=96afed9948ed300034e5b00b0b022708",
                    "https://euizhltcd6ih.com/g2n71nix?key=3a7dff1703571ad02f7a00cf6155a317",
                    "https://euizhltcd6ih.com/g30pkse7k?key=55283e010e0da4546ffb54892e30cc6d",
                    "https://euizhltcd6ih.com/g3z5ypmpx7?key=63681fa49dc466538da0f2f245afc157",
                    "https://euizhltcd6ih.com/g6t1b46fhy?key=a3a83a2ecff286f82f8d6ae2cfc35727",
                    "https://euizhltcd6ih.com/g986j75vj1?key=4c737c07c9bc37b1fcf949238255790f",
                    "https://euizhltcd6ih.com/gdgs7kmtm?key=4940fd6da529b97abe686278986ec313",
                    "https://euizhltcd6ih.com/gew23caz?key=c260ccc6fdd0eeec63da298d51e17bcc",
                    "https://euizhltcd6ih.com/gg7iccj7b?key=c250d8ef8953191e5bcfa39edde88ba6",
                    "https://euizhltcd6ih.com/gm42imzsrv?key=3e3665f814951dc5e8433fdfdaf6b3a5",
                    "https://euizhltcd6ih.com/gm9g4h5x?key=303ba5d31bb93defedb4e15e7288fe88",
                    "https://euizhltcd6ih.com/gqfi1wxsf?key=6642ee0f656cd30b21b8ccd91a81e7e9",
                    "https://euizhltcd6ih.com/gqfu465u?key=eed64f778ddb8a3e7471e1964a49d9f8",
                    "https://euizhltcd6ih.com/gt2v112zu?key=bf9d4a6064d2d8aa0d5f2ab8e208bfe7",
                    "https://euizhltcd6ih.com/gtnewqyd?key=837d9c882f4e92915c3feb4b6397ad93",
                    "https://euizhltcd6ih.com/gu9j4erm9?key=0f8f322e871283331705519015456c46",
                    "https://euizhltcd6ih.com/guyk96mv0v?key=0db1900fdb5271d47a315cdc5d8bf67e",
                    "https://euizhltcd6ih.com/gxc8u0m9xj?key=86c2043e317accd0de2e0b0d248d080d",
                    "https://euizhltcd6ih.com/gxdxb744f?key=2ea23d000bd716d167da89b8a01af77f",
                    "https://euizhltcd6ih.com/gyc2bw6r?key=d27161c7eced332defcc7d22124d1a37",
                    "https://euizhltcd6ih.com/h1d8v4ur5?key=6915c864f8269f1bccac39b224eddb2c",
                    "https://euizhltcd6ih.com/h1uf6whn?key=689b58ed7791c0319a8212fc462d8998",
                    "https://euizhltcd6ih.com/h3i2zjdv?key=d6b816f73eb2ebc3e9d6eff190f508ca",
                    "https://euizhltcd6ih.com/h6ykcp7t?key=2df032e05b50b28745c7325699dc9988",
                    "https://euizhltcd6ih.com/hb4hxkgfc?key=b06fe0961eec520032a6c92ddd7176e4",
                    "https://euizhltcd6ih.com/hgjhc541d?key=fdf3bba21cff3893b98de2fbe565bd8f",
                    "https://euizhltcd6ih.com/hi7mqfrpz?key=0fd1f7237ed65639a2eaa4c1561a0b6a",
                    "https://euizhltcd6ih.com/hq7pxq0tyn?key=0c06f7022809d361550d26f2eef074ad",
                    "https://euizhltcd6ih.com/hre7t565j?key=9cc32db5cb183371d9133d4d9d5179a3",
                    "https://euizhltcd6ih.com/htg00m3r1?key=6aaa34bef4972eae3c93e748637924ae",
                    "https://euizhltcd6ih.com/hwspikdyki?key=f44c2e684baa639a78375249b308b00b",
                    "https://euizhltcd6ih.com/hy6g9idsm?key=5626a4093fc8af42ffb8097a2e494935",
                    "https://euizhltcd6ih.com/i3hfz6vj8?key=edebfd0b41e08caf4f027bb804c84dee",
                    "https://euizhltcd6ih.com/i3pggnty6f?key=8906d748d9dc7a91f0f121cb74e54bbb",
                    "https://euizhltcd6ih.com/ia071irmpi?key=2e2755fc5216abbede748e0b42c380bc",
                    "https://euizhltcd6ih.com/ia98ngps?key=97683812682a0a9bb94aca3c66783a26",
                    "https://euizhltcd6ih.com/ih7njyvhd?key=2580ad7117dcf9fccd09d0b967063ddf",
                    "https://euizhltcd6ih.com/ik7qm3wm6?key=18ef4ec58e787a761e1b9a02b9853d9a",
                    "https://euizhltcd6ih.com/ingtjasdm5?key=2dc8f91c470658a441cbf904908909bc",
                    "https://euizhltcd6ih.com/ipgkerf9nj?key=5ae7e9e103ab4eb0fc0d7a796b96f533",
                    "https://euizhltcd6ih.com/iqce746y?key=aee1dddf5c851951fc977d10f755fd37",
                    "https://euizhltcd6ih.com/ishsegknig?key=a81c2bbf440bcc87dc2939d37da352c6",
                    "https://euizhltcd6ih.com/iwtibfgc7j?key=907c01020077c0e275c98d490491378b",
                    "https://euizhltcd6ih.com/iytjxpd6b?key=6ee686a9e2f742e39eb9c11a528f5898",
                    "https://euizhltcd6ih.com/j0dzxs2q?key=d312e325d7ea1a972864e6cab2e83104",
                    "https://euizhltcd6ih.com/j131i800v?key=31243c4c11b5cee119504c8ff8bf8bea",
                    "https://euizhltcd6ih.com/j1wtdzbn2?key=f44d516f4f3d4abacaeb44a66821dd25",
                    "https://euizhltcd6ih.com/j21fww4usc?key=f9d50ec1042e7b737fdc0a08c2964c97",
                    "https://euizhltcd6ih.com/j430q0q9v?key=1ca12afba1ffa31c0cbf971b78e06f7b",
                    "https://euizhltcd6ih.com/j6gq1bhg?key=652fd19ac04907e54993a7669469ddc9",
                    "https://euizhltcd6ih.com/j7r4jt6v80?key=14ab0687c16665b97447830781ec839c",
                    "https://euizhltcd6ih.com/j8nyf1dks?key=9dd0d352cd94072ed167c3e9cab86df1",
                    "https://euizhltcd6ih.com/jay5k7jqf?key=9be88320680c28201cd7841b8b7397da",
                    "https://euizhltcd6ih.com/jcxmak1ifj?key=7ffcfb8e926351ff9dede37c02f2eb9d",
                    "https://euizhltcd6ih.com/jkrk6mxc7?key=0b8eb640ea4ff0f79f6bad74ba98d3c1",
                    "https://euizhltcd6ih.com/jn5pu44r29?key=8e6231c211bf6bab9a17e90147d438de",
                    "https://euizhltcd6ih.com/jnvcjhp2a9?key=bcc895c37496d1c77b4b0ee819e6e096",
                    "https://euizhltcd6ih.com/jpjx10szi?key=4631154728969b5c81bc0c589685b4a5",
                    "https://euizhltcd6ih.com/jrqvpbnkg?key=6d99c91f983c4c25d041823b8bfe6a92",
                    "https://euizhltcd6ih.com/js3k7831r?key=a8b83cb44276024b55a5c65f80a3bde0",
                    "https://euizhltcd6ih.com/jtbqem7sa?key=dac2ec96c8b1b77d7fcd77d287ddeacf",
                    "https://euizhltcd6ih.com/jxea88ui8?key=844e61b5069ae78056439d0bb1c34590",
                    "https://euizhltcd6ih.com/k4twkyb4?key=4b7ca469cf8bd544091f394bf100f23a",
                    "https://euizhltcd6ih.com/kcy7atwt?key=941c3ffe16e10d73002695cc0ebc7878",
                    "https://euizhltcd6ih.com/khjg4u8k?key=a488bae33b95a580689d7e89ac7ab9c8",
                    "https://euizhltcd6ih.com/krhiyxx2?key=34bbe127376d82c813273ca96bde0931",
                    "https://euizhltcd6ih.com/kryd3s245?key=002e3374917a12474b1076393ce38726",
                    "https://euizhltcd6ih.com/kujj8vf3pj?key=7654c59931614a49496ec64f57401e1e",
                    "https://euizhltcd6ih.com/kvzff93g?key=1d26c88f4a5dd1be8f8b39d7271759f2",
                    "https://euizhltcd6ih.com/kweweh4bf?key=9ad6ff7b878f5ac25bcfdd506f671d6b",
                    "https://euizhltcd6ih.com/ky6yh35a?key=95d6056e794c2d17d0247da98be43c54",
                    "https://euizhltcd6ih.com/kyn65hb2j?key=9a82b5bd6cb48a3c3772768423d657bf",
                    "https://euizhltcd6ih.com/m1s870zhyc?key=ec9943c99d135ce50de576480ab60e08",
                    "https://euizhltcd6ih.com/m37tu6xt8?key=874c4ce9733e30bf7792ee60e18d1c36",
                    "https://euizhltcd6ih.com/m6vvud4z?key=3a54b0743ce1bb59cf87a2ce4f476647",
                    "https://euizhltcd6ih.com/m7f8ifwh?key=fdfb1017d57f60ee325e817dedd683dd",
                    "https://euizhltcd6ih.com/mbztwtt29b?key=93f00c8c8dda7168589fa1267b34657c",
                    "https://euizhltcd6ih.com/mcjt6cwyqz?key=71459d1ecfd11420f3e4baa4d7da992e",
                    "https://euizhltcd6ih.com/md8nkjsed5?key=3adafa0fd3df1eb03de0ce631735d970",
                    "https://euizhltcd6ih.com/merrq4376a?key=7812099ff90eca26629d76b13137472b",
                    "https://euizhltcd6ih.com/merxj5sc?key=41e609c91eb764af1d55e1e9653e3c26",
                    "https://euizhltcd6ih.com/mn8shpjyj?key=409d7da440c1eae1f536bca655fdb06a",
                    "https://euizhltcd6ih.com/mnfszr5s?key=b412294c33174a705039200cc99d0f52",
                    "https://euizhltcd6ih.com/mnnkdxvg8?key=3eaaffa05725b77a11b6dc78797199c4",
                    "https://euizhltcd6ih.com/mqmb9ugj?key=8db4be9b8aa0328e607bbba43b221c94",
                    "https://euizhltcd6ih.com/mu3yez507j?key=08bc46d07542453be77a5ae4518e35a6",
                    "https://euizhltcd6ih.com/mujzajgs6?key=f0ddadd6b6272e6b6d2112aa144ed435",
                    "https://euizhltcd6ih.com/mwcfca1ut?key=a53ed6e2fba6f71f2cb0d505ea6d4b53",
                    "https://euizhltcd6ih.com/n1rdzy5ky0?key=75ff99e5159fb5ef661eacc497d21203",
                    "https://euizhltcd6ih.com/n42g91vcfw?key=0e76ec4bf3d14e012f94eca9719c5bf4",
                    "https://euizhltcd6ih.com/n4ag6n4p6?key=81254fe42c6ff24aded6531345eda16e",
                    "https://euizhltcd6ih.com/n4cw5zrs?key=18f9505af982f92b16cfe6c8bcdbfc68",
                    "https://euizhltcd6ih.com/n8pq68bziz?key=a4d67a99b44ea7720ad6529803560bac",
                    "https://euizhltcd6ih.com/n9fyc6uyjf?key=5680d13a8d0cfb23970d778a5977025c",
                    "https://euizhltcd6ih.com/nd40sc7j?key=05b480cac3536fab0237f9110782f90f",
                    "https://euizhltcd6ih.com/ndgnqfa1?key=212e90534ef633d6201288fce3c071dc",
                    "https://euizhltcd6ih.com/nfeb2jmi?key=69a4c49cd5053368a2be3d2932f2e091",
                    "https://euizhltcd6ih.com/nfsjifay19?key=ade198fcd6bde125e2671f85a8a63f0e",
                    "https://euizhltcd6ih.com/ng6ka2maq?key=d2fdf1f09640866a35179fb5e9722951",
                    "https://euizhltcd6ih.com/ngyq89hvx?key=dc1751b50a6995302133fc14b21df4e2",
                    "https://euizhltcd6ih.com/njhrnkzj?key=35e7ecaef802ada026295596beb77cca",
                    "https://euizhltcd6ih.com/nkgki95z7z?key=b3658911afd8644a6f508323ee84612e",
                    "https://euizhltcd6ih.com/nkr999xg?key=e92b4de9f70a3886f1f9e5ad289bd40a",
                    "https://euizhltcd6ih.com/nxmr0tgwqb?key=1d6b7aaf2e0c75172af377715c6a6ace",
                    "https://euizhltcd6ih.com/nxnakrv6f?key=552692bb6f6c83774935f1cbcc4ae4c9",
                    "https://euizhltcd6ih.com/ny0qt9chqi?key=4c7edc4573033b9bfef4501847604729",
                    "https://euizhltcd6ih.com/p0gq54hm?key=262a05fac8191d7c0ad4dfc611dd435d",
                    "https://euizhltcd6ih.com/p2g47zs7?key=d5f10af7b90cfb9398ec9f07ac4d2c28",
                    "https://euizhltcd6ih.com/p5u7p1ms?key=1c6ea933230497902efc20360bd816ae",
                    "https://euizhltcd6ih.com/pbgww9bfm?key=3986c79a14057f54b1d17837d0953645",
                    "https://euizhltcd6ih.com/phbptirx3?key=cd794326528e5c54256fc35a7b6b4985",
                    "https://euizhltcd6ih.com/phn1pjpv?key=33dd737765c1ec01b27b3479ed45c69b",
                    "https://euizhltcd6ih.com/pnbvb0vb?key=0be37083a54b1035871864c18c88a632",
                    "https://euizhltcd6ih.com/pntxxkek?key=8e7317f62f26be4c8e965055a2448f02",
                    "https://euizhltcd6ih.com/ptge97sjjy?key=12f8155cbcac6390602931be19de7f02",
                    "https://euizhltcd6ih.com/puk6n3a9?key=b1fa963144023bbbaf3b4735934b3477",
                    "https://euizhltcd6ih.com/pukhw3fzm?key=3a3b48ae61e9290383fbe5ae636bc761",
                    "https://euizhltcd6ih.com/pvc624u5q4?key=e3ab16815340900228fcdc72bf967697",
                    "https://euizhltcd6ih.com/pvmjzx68h?key=917213c532cae5f2fbac10211810f231",
                    "https://euizhltcd6ih.com/pw9v5vjk?key=edc16b1a616afbcc664f9b3cc123c996",
                    "https://euizhltcd6ih.com/pwuiy0pj4r?key=73a00c8d502195e58f1a9bc95bb5f2f2",
                    "https://euizhltcd6ih.com/px597uwpe?key=456a8a174ab1be2adb84ad4b89b86903",
                    "https://euizhltcd6ih.com/pzj940aza?key=f56535fed1e2a045b387e08c0b6fc827",
                    "https://euizhltcd6ih.com/pzsk83vss?key=e7c097b94c712e2e22037be915f7f3b0",
                    "https://euizhltcd6ih.com/q1z6i7je08?key=185b808aff3bdc6eb57bbe768783b651",
                    "https://euizhltcd6ih.com/q2fdbi10y?key=4a1d48595a9107cc8c177afca2e53a2c",
                    "https://euizhltcd6ih.com/q38ihgpz?key=6cbdbcb2a159ca2d2b7d69c31b1a4c4e",
                    "https://euizhltcd6ih.com/q84h9x9u?key=092b6b2b30509bca79ad5c355cf9a394",
                    "https://euizhltcd6ih.com/q950z1nfdx?key=68d75bf111d134c242f7d559aa164416",
                    "https://euizhltcd6ih.com/qa9rzp7m?key=1f8370948ceb000b97b4f1e009e77f5a",
                    "https://euizhltcd6ih.com/qai0m5u0?key=dca01ed6b307c341642db298940056a8",
                    "https://euizhltcd6ih.com/qcyu4c2p4?key=e5d7644e6c6b0769a9888e339509af58",
                    "https://euizhltcd6ih.com/qicu4mkxz?key=eb2fd0ebca80169dc99b618dce8f18bd",
                    "https://euizhltcd6ih.com/qmharnzzb?key=fb6c301a353194d4ab95cdd73136d4d9",
                    "https://euizhltcd6ih.com/qphj6zec?key=de18bfa60093deed77fb384a922d2eb3",
                    "https://euizhltcd6ih.com/qqt0baj9e6?key=743e9844676664ac5c03c904d66efb63",
                    "https://euizhltcd6ih.com/qs1vbfg3?key=31b0feb29b15e51de8c97f636ec42a12",
                    "https://euizhltcd6ih.com/qucktvy1p3?key=36cee096e0bcfbc0ef49d42d55ef4f1f",
                    "https://euizhltcd6ih.com/quuz0epef?key=00119e85248c31d0371f0afb05ac97d4",
                    "https://euizhltcd6ih.com/r0tq6u0ndz?key=1f86ae9dbed46286ca8f89dc667c0ff1",
                    "https://euizhltcd6ih.com/r1spwx78?key=712d3a261a84b4fe34eb2e48af8b8fa6",
                    "https://euizhltcd6ih.com/r2mhdueuw1?key=66c7bee0bbfeb54233d89dce18bc309d",
                    "https://euizhltcd6ih.com/r3gry8950?key=200973c3abb2b9b47f5354631d0376d1",
                    "https://euizhltcd6ih.com/r4kdw4qjip?key=bd3f902154d0d223470c3ae1448c06b8",
                    "https://euizhltcd6ih.com/r4vt5u502?key=fd62b440372d3d38923da3ca154f152b",
                    "https://euizhltcd6ih.com/r7sx8wry?key=8a64ce49b6372cd1d5e26b0ac9e80d08",
                    "https://euizhltcd6ih.com/reg5v5yc0u?key=08593f74bb5136aa73314db07c0c0a7c",
                    "https://euizhltcd6ih.com/rjgpiwdn?key=73a0465030c7973dc1aaeb75a32b33e1",
                    "https://euizhltcd6ih.com/rkai5j358?key=6acd5659f50713a01c085d18351c06b7",
                    "https://euizhltcd6ih.com/rm0r99esr?key=64bad855e0b03811c92dafddb252595b",
                    "https://euizhltcd6ih.com/rn1gyfbea?key=2d68f43bc7dcdd541cb00cf362acf27d",
                    "https://euizhltcd6ih.com/rn531xxc?key=e337717112cd2fa9b031c9589ee9e777",
                    "https://euizhltcd6ih.com/rpi6tu7s4h?key=bc8735d33b52f01cd8361d458b78db50",
                    "https://euizhltcd6ih.com/rqw2yrac?key=803aed1933b7cf0c5095e76a9e957349",
                    "https://euizhltcd6ih.com/ruy651yfm?key=317b3c5caf55eef1dd22593099465fa1",
                    "https://euizhltcd6ih.com/rv06r5smbb?key=886504093359911368c3b343cd9ffb6c",
                    "https://euizhltcd6ih.com/rwa5vx3qn?key=38ebd4d1af2a554e0c30cd12ef58dafc",
                    "https://euizhltcd6ih.com/rwjx98v4?key=878b976aa0be0a794bf2bbdf4b7038a9",
                    "https://euizhltcd6ih.com/rxm6ta8d?key=b1dc2f2ed82cc746f4159cbd0f38f043",
                    "https://euizhltcd6ih.com/rxug9z4v?key=7cd9c28320ed9c255f4a8e419e44a9d7",
                    "https://euizhltcd6ih.com/rypq1bua9?key=0c1697cf9a9a0f298e946c9a14806aed",
                    "https://euizhltcd6ih.com/rzmg1xh2?key=2d7645eb18afe5b447f36390e0dd6d13",
                    "https://euizhltcd6ih.com/s1zfust2ut?key=20ceb3b1fdb12d886104288ff52061f4",
                    "https://euizhltcd6ih.com/s30wt79f?key=1241c305c8e25873200031bf5a1e3916",
                    "https://euizhltcd6ih.com/s33udsm1s?key=80909e2f192c6bb32a3b2d924537efc3",
                    "https://euizhltcd6ih.com/s44a8rr3?key=49c140140eab1e3b299d0b2c28148319",
                    "https://euizhltcd6ih.com/s540bws1ir?key=3bd349039c5bc5e3e6aa0f984e704cef",
                    "https://euizhltcd6ih.com/s92urwv6x?key=cf310e7d0e553fb8588f97687b7f0413",
                    "https://euizhltcd6ih.com/s9tg1qggdr?key=2d474f0cfc0f4f55ab5a4b62b769e324",
                    "https://euizhltcd6ih.com/sa457fb665?key=da42281e5bde50e27d88600a24178d62",
                    "https://euizhltcd6ih.com/scvzyzxf?key=dcbce6d31215ed60a70287ee1043f2f1",
                    "https://euizhltcd6ih.com/sexfwxib?key=6e0830f31391bd7d3d6361b839a845ee",
                    "https://euizhltcd6ih.com/sgb803cgs?key=dc85081eb5f2aaeb1aeb40bd54c49e8f",
                    "https://euizhltcd6ih.com/sh2dtj6j1?key=71b40656476d2bbd35b480cc4e0a3acd",
                    "https://euizhltcd6ih.com/sj5ihszza?key=061f9e59efe5856caaf9072c0b36673f",
                    "https://euizhltcd6ih.com/spswevf78k?key=c2c96d388359843bca09cccc0ae4030c",
                    "https://euizhltcd6ih.com/sscjnfed?key=65040735ad0e27d4afcc3785c295aad5",
                    "https://euizhltcd6ih.com/sv0b26r511?key=5da4e952ac82d100f58e97aa67c98ed7",
                    "https://euizhltcd6ih.com/svzdmj7qzq?key=cabf306d3cfa1623e70cb8f16c49a0a1",
                    "https://euizhltcd6ih.com/szunuqd9?key=6e17e33d45b356cc5df27674fafa045c",
                    "https://euizhltcd6ih.com/t7ga864n?key=9c333191691422ffcca06b654a014fd3",
                    "https://euizhltcd6ih.com/t8zqz6te?key=80c53e200a0142e6c86d1b1ad89ca255",
                    "https://euizhltcd6ih.com/taq3063p?key=fbdcddf98e3cefe2e2535e35b26c37cd",
                    "https://euizhltcd6ih.com/tdmp06078?key=a5c510dbbbb380443c84b6ffdc5c609e",
                    "https://euizhltcd6ih.com/tehpdipu?key=a9938f0df5aed4c61d02e2dfb27ea7b2",
                    "https://euizhltcd6ih.com/temfcvrxg9?key=6d97a837efa064f7dd6f5a2941d27db7",
                    "https://euizhltcd6ih.com/tfzk8yg5?key=aa3a15907c635576380b3fab03c5b60a",
                    "https://euizhltcd6ih.com/tjnnvqtru?key=56dd47a4e89080ac63a6848024ff4083",
                    "https://euizhltcd6ih.com/tpdvx8g38?key=8c0f5f3c68f8ac6c10145684b2c6c6f5",
                    "https://euizhltcd6ih.com/tryjgegkwk?key=3bda418b00b5e9f34b648fc2b27959d6",
                    "https://euizhltcd6ih.com/ts50bvyuh?key=427456b7e21240221ffda373e3d422c7",
                    "https://euizhltcd6ih.com/ttmbeyix0?key=7ed455446a5c172622461cb9ba94fc7e",
                    "https://euizhltcd6ih.com/ttqfupa1?key=eff1e5bc61983832772f7547fda0ea9d",
                    "https://euizhltcd6ih.com/ttzx37ags?key=05e0ed83aca1536fac29a32944fd9074",
                    "https://euizhltcd6ih.com/tusjmhff3?key=cdd352cfa7c6e9cb58cfabfb6b1dd5b5",
                    "https://euizhltcd6ih.com/tyi1nq118?key=af90e35c6f2322ce422bfbca05a82909",
                    "https://euizhltcd6ih.com/u1unfnzr?key=70ecdd77d3395f6e9610f0813fda70cd",
                    "https://euizhltcd6ih.com/u4eraiygag?key=3bc0dc8c5e74b52b4f94116e921545d8",
                    "https://euizhltcd6ih.com/u73y265vh?key=5d6575918579d85b602b223a199c7664",
                    "https://euizhltcd6ih.com/u75qe5ra7p?key=25b8cd417569e5946471c18c790ba4a4",
                    "https://euizhltcd6ih.com/u8hvnxuaz3?key=4d9f0c920a79a2005a9fa0e164edb35b",
                    "https://euizhltcd6ih.com/uaj20hvxuz?key=1af408901a7c3d13337f31575eb81851",
                    "https://euizhltcd6ih.com/uj22dhib?key=c3436688472cb014b10fe06738b1c9d4",
                    "https://euizhltcd6ih.com/unph6u2w2?key=e46e231f9be29d0c9bb9430de40be301",
                    "https://euizhltcd6ih.com/uqdnngjk?key=196773a144da3868ea35c792b555fc31",
                    "https://euizhltcd6ih.com/uqiarbt26i?key=1878c69d39224b9caa6ed3c64e61d6b5",
                    "https://euizhltcd6ih.com/uskabimbw?key=fdb8570de7732bbdefbc6722b05a2dcd",
                    "https://euizhltcd6ih.com/uw7svkq68?key=ccadaa86aaf19a6cb5757eabec8820d7",
                    "https://euizhltcd6ih.com/v25y43198?key=2fd2eb3ac65530dcb033326c87883cb5",
                    "https://euizhltcd6ih.com/v6pbwauiy?key=430e643e5caea72f26711f74f10a0383",
                    "https://euizhltcd6ih.com/vawcu26ut?key=64fef56d9ebf22220fce2618d2a63d29",
                    "https://euizhltcd6ih.com/vfk3xxw6?key=57b83b27ca42122bf18881c4329b5141",
                    "https://euizhltcd6ih.com/vn7xzsd3?key=ee7035e6aae2dda464e154c89c89b1ae",
                    "https://euizhltcd6ih.com/vnqdhthii?key=847d2bf16dfeb622511d39e34b45302f",
                    "https://euizhltcd6ih.com/vny02frsm?key=163ce8788821e13e34dc286294d61090",
                    "https://euizhltcd6ih.com/vrb9bvgvad?key=ff062551e412c81535ea4c8a91387185",
                    "https://euizhltcd6ih.com/vt3z91eg4g?key=f885f4ab75e3475198024462dcaa5b29",
                    "https://euizhltcd6ih.com/vxwmm1zn5?key=93605787ace0a6cb211de931a6f6a65d",
                    "https://euizhltcd6ih.com/vxzbfwrz?key=9d4387abacf76a316b1409a31ce6dd7b",
                    "https://euizhltcd6ih.com/vzi8g55h29?key=69aaee311e8980fc87bbe4311e20f735",
                    "https://euizhltcd6ih.com/w0ei4efk?key=d388ee990565d05e1c6b96b62fadbdd3",
                    "https://euizhltcd6ih.com/w1s6zyyhm6?key=c5f9fd1d88ce9fa58b512ea16be49d5b",
                    "https://euizhltcd6ih.com/w8h7r3ha?key=ae19a7dc94ea8237fc34cf67383ce70a",
                    "https://euizhltcd6ih.com/waava0et?key=b967b1049776227dc801b5ca5a0375f3",
                    "https://euizhltcd6ih.com/wbhy4tqe?key=0440e27f7b07ab59d750f5d2cbca344a",
                    "https://euizhltcd6ih.com/wdrubt9g?key=0db63f95b4f4c2cc02447c887c341026",
                    "https://euizhltcd6ih.com/wexujnf0i3?key=8cecab423c9aaa88949f1010183e1fa9",
                    "https://euizhltcd6ih.com/wfc7cbpza4?key=4842d4b68c460d936663a40d1b6e66d7",
                    "https://euizhltcd6ih.com/wheux042?key=d875b96cdfaaaaa7d8f064bb6cced5aa",
                    "https://euizhltcd6ih.com/wj2237q8?key=906d84768282e108eab15ffd08ce7e21",
                    "https://euizhltcd6ih.com/wjx26x2p3?key=f00ab9818335f6ad67c05235ae1bbe52",
                    "https://euizhltcd6ih.com/wurv6jhs5m?key=eac125b97fb2868c3a735239ae6ad6b5",
                    "https://euizhltcd6ih.com/wy9sf429x?key=1947615dc271c8bafea5bf58de37fab5",
                    "https://euizhltcd6ih.com/wzq93d11n?key=df15085c2edeb7093e6458962e3464c3",
                    "https://euizhltcd6ih.com/x39c32bsb?key=4ac9afa4703aa9902874d528402838da",
                    "https://euizhltcd6ih.com/x8dq5zvzv9?key=0974b47a7cecca70d315c2a683e1f52e",
                    "https://euizhltcd6ih.com/xj5tm0ns?key=e838391f32bbc7ef14ff39f601498ce5",
                    "https://euizhltcd6ih.com/xku0mvyqc?key=4ed655877d261370e42a7f8435b13f1c",
                    "https://euizhltcd6ih.com/xnak0u5a?key=e96350008d047e3d781eb612a926cc1a",
                    "https://euizhltcd6ih.com/xuar9cua0d?key=3bb773e062c5178c422c417fae8181b4",
                    "https://euizhltcd6ih.com/xvmd61dyt?key=1ddef5758919a53d6792b7dfd57919c1",
                    "https://euizhltcd6ih.com/xwvc9f2ea?key=261eab9eb77f6f1a4e3811798fd0f74a",
                    "https://euizhltcd6ih.com/xzwan8te?key=59cad77168de7913dba8ef5216773d4e",
                    "https://euizhltcd6ih.com/y0f3gnu1cb?key=e9b0e9948c634be277ff3718ce56b41d",
                    "https://euizhltcd6ih.com/y1kw1mtdn?key=871b3a588c0fee9b5c8d8ac3a70d4333",
                    "https://euizhltcd6ih.com/y28i6x5yx?key=0de495f2f1ba9cff16073e593cfea701",
                    "https://euizhltcd6ih.com/y2v5dfmep?key=7fd493b5e557b7d3665261d9be1fba45",
                    "https://euizhltcd6ih.com/y37cg2d3?key=0dc57eb8cba5ec6e36007984a0df52ce",
                    "https://euizhltcd6ih.com/y4hbv6kp?key=4a310423faf69987a1869271e5b1d5e0",
                    "https://euizhltcd6ih.com/y6fuvqq1g?key=cf7e98c23644775c5e6ec0934c5540c6",
                    "https://euizhltcd6ih.com/y7ivwsvg?key=4c1d7c5820e882759597e9ae1f9ca452",
                    "https://euizhltcd6ih.com/y7tjae0p?key=4b2b676cccdddb8baf973a51f5904bff",
                    "https://euizhltcd6ih.com/y81wzmn2?key=0522ed6c52904ec2456b8647fa85be1e",
                    "https://euizhltcd6ih.com/y8jttrgm?key=0f6429942eb9e6095fc493eab66ff2b0",
                    "https://euizhltcd6ih.com/y8wgtc1pxx?key=908c2edd6f62c066dc62665323949736",
                    "https://euizhltcd6ih.com/ya8zan03?key=d25a993917196de3fb51f6e22ca9e5ef",
                    "https://euizhltcd6ih.com/yd2hx2igbd?key=290ec73a2d3d492e6499e4d5ea02514e",
                    "https://euizhltcd6ih.com/yd476jvg?key=08ffdc68e7851d2de35e09bb251f614e",
                    "https://euizhltcd6ih.com/yet13ta01p?key=a49bb9aba404fd671bd758580f581b85",
                    "https://euizhltcd6ih.com/yfkyk8vy?key=2ded893e75cd231699f72bf3a0e4bbe9",
                    "https://euizhltcd6ih.com/yhu1c3gxux?key=34055d62b6b19b95507a0d8b16db60df",
                    "https://euizhltcd6ih.com/yk08xv5x48?key=a660aeade7c92e8abb7c309f64dbf85c",
                    "https://euizhltcd6ih.com/yk43pav3c?key=3c9eff0c9fe6811feee1b70a6ab48dcf",
                    "https://euizhltcd6ih.com/ymw8xn8vc?key=08b35fbf2c7bd9cb6dbc901b47410da3",
                    "https://euizhltcd6ih.com/ypjgi6s509?key=8f0e041bbff607f1be53c0d16e2bdf39",
                    "https://euizhltcd6ih.com/ypmna4b9?key=d06668a6a9acb567db3dc199ff20ad69",
                    "https://euizhltcd6ih.com/yq8h1y36r7?key=e2c5911f5770da7d6a456778ada037b2",
                    "https://euizhltcd6ih.com/ysx9z4h1?key=d054e36303ed7155f7293bbf53673c1d",
                    "https://euizhltcd6ih.com/yu9wrmc2n?key=d569c272789b2ee5bc0b0a567d7419d1",
                    "https://euizhltcd6ih.com/yx03ykqgd1?key=e625776d4f8aff73f6700b1a9615f481",
                    "https://euizhltcd6ih.com/yxbws1ived?key=27dc0541bc3bcddfdba8e9d6eb498fec",
                    "https://euizhltcd6ih.com/z1q3bvs01x?key=9689c9140657df25ee3e36a5bd9d198a",
                    "https://euizhltcd6ih.com/z1z2cusa9g?key=9bce5ab9a0904b30ef5ab1ab9ed551f7",
                    "https://euizhltcd6ih.com/z6w37nm82?key=f8f587b99f5f9daf68c0332c56039ddd",
                    "https://euizhltcd6ih.com/z870t7493?key=68213db4b42ec8cff6466190e5254d8f",
                    "https://euizhltcd6ih.com/zbn121mu0?key=918efcedff844bc17c6a1f61480bbfbc",
                    "https://euizhltcd6ih.com/zcan17i4z?key=8097b60d14a95bbbd9e053611c0df5ac",
                    "https://euizhltcd6ih.com/zdq6esfj?key=d75ea079d2e381aea77821a19975bfff",
                    "https://euizhltcd6ih.com/zhv3va4w?key=2b1a2f11e1b5ab1103a786e0af6c947a",
                    "https://euizhltcd6ih.com/zispbxgfx?key=8e96659e514b94263310f5cec85a96e2",
                    "https://euizhltcd6ih.com/zj31kf23z?key=095ca7c90e2d9b8b1ccee245379cd220",
                    "https://euizhltcd6ih.com/zn7t52nn?key=9f39efedfe8e407dcf489375c40a2a13",
                    "https://euizhltcd6ih.com/znaiius8t?key=b5829e1878ccb42a9a80b2c2de275bfc",
                    "https://euizhltcd6ih.com/zpx5njuc5?key=fb706151ecf68b6aa2b1804bcba4625c",
                    "https://euizhltcd6ih.com/zqgj52mbd8?key=fc5a375683a95c900844db978c5603f6",
                    "https://euizhltcd6ih.com/zrc2ktrm?key=5a7054d5ab1adb0e2188652fbe1cfc26",
                    "https://euizhltcd6ih.com/zrxsjr414?key=4762ecf2a153cdfeaeac068c1e1ea790",
                    "https://euizhltcd6ih.com/zw2afkqcg2?key=98f78edef74d74794f3e56999ca48a54",
                    "https://euizhltcd6ih.com/zwgx1c9n?key=1afc4a7227b5db91b1752b896a8b05fb",
                    "https://euizhltcd6ih.com/zy9dhpcp1?key=5770d028f321ffa566979fb9af667c27",
                    "https://jc32arlvqpv8.com/ambsxni391?key=d07b062bbb53b21eda079cf420406a07",
                    "https://jc32arlvqpv8.com/aqfm0qa6?key=0af8b37da7aeada6248295d4672e08be",
                    "https://jc32arlvqpv8.com/av8huse0?key=8139b2cb5fce34e957fa7f36781596b1",
                    "https://jc32arlvqpv8.com/azrwcevz?key=e998f26cd01c793644c13a0342e86a42",
                    "https://jc32arlvqpv8.com/bfpn2ciwgx?key=7b9a836463774b6d0453a803b24de97f",
                    "https://jc32arlvqpv8.com/bsq0j6jtn9?key=41f85eb499541049519d388786d77e30",
                    "https://jc32arlvqpv8.com/bv9amxxs19?key=95449fd0f4ce5ef3546aafac5fc45d77",
                    "https://jc32arlvqpv8.com/bwy9vth1i?key=a71ade8838296d86abf7d8f6057ab1f0",
                    "https://jc32arlvqpv8.com/c926qgfj?key=d0a7ea6f1230ecb7308b74c47a5af2ed",
                    "https://jc32arlvqpv8.com/cdpe03gy?key=8e08f4865c2f51aa4a3a55d75137f609",
                    "https://jc32arlvqpv8.com/cfz32nexe?key=0a92265cc6bbd244967c05e5dcd6fdee",
                    "https://jc32arlvqpv8.com/cmqavqce07?key=9738cacc26a6653e8023c6d823f087d0",
                    "https://jc32arlvqpv8.com/ddmgdzrau2?key=ba530798c1cf1d98a5eceab33829dc00",
                    "https://jc32arlvqpv8.com/dkfauym9q?key=da92d8a9b2bc2c4d89f491bc0c56c260",
                    "https://jc32arlvqpv8.com/dkhtady0?key=5e62b342c7fcb584706d95defa8d31fe",
                    "https://jc32arlvqpv8.com/dz3exj36?key=76d01842c3b642693ce225e201bbbcbc",
                    "https://jc32arlvqpv8.com/dztqqe3y?key=d1aae5cf50bab02b4881b771362baf00",
                    "https://jc32arlvqpv8.com/eatwc3p13j?key=be71206dfd7ccb2d34131423759a8f0c",
                    "https://jc32arlvqpv8.com/ebbdyya0f5?key=59247fa22de951d8dc15f0efaa2bed57",
                    "https://jc32arlvqpv8.com/emr8bibe?key=377f9772ee4a367d1bb23845cb0eac57",
                    "https://jc32arlvqpv8.com/eqipcmw7q?key=79663e94521fe13a08ceed6314cc11bf",
                    "https://jc32arlvqpv8.com/equ0gh9n33?key=b3261a4f5ef9cfa0ccad50834f82c12c",
                    "https://jc32arlvqpv8.com/euid6835gr?key=372022bd87a44f59fd855e87e40ce569",
                    "https://jc32arlvqpv8.com/febkqdwq69?key=85936785030b9494c1edaf06c2488cc3",
                    "https://jc32arlvqpv8.com/fg1c5daup?key=c0d27bdfa80cd4632ef03417e0c9e35b",
                    "https://jc32arlvqpv8.com/fp4wthtx2?key=2817bf1f2254c82807a289c606faec6f",
                    "https://jc32arlvqpv8.com/gbvn3b8qup?key=1b277bcf074c36ecd91894fd8ab0406e",
                    "https://jc32arlvqpv8.com/gcf5vvqjeq?key=20598c887a5aa1721439416618246cda",
                    "https://jc32arlvqpv8.com/gcpynm0z?key=5e606ee1879a71001cc9170ac5d94695",
                    "https://jc32arlvqpv8.com/ghrv5waz?key=6f6577363488abc80ff9e747217aed93",
                    "https://jc32arlvqpv8.com/gjczxi2jam?key=8124b2a0247265d5f1eff2f27b665b09",
                    "https://jc32arlvqpv8.com/gkpjy3cy?key=a7fe804ea952f73be83bc9a01f78805b",
                    "https://jc32arlvqpv8.com/hdngw3tr?key=aae85d7c1740a8bc0748e6f360fe1622",
                    "https://jc32arlvqpv8.com/hiix5qceqf?key=525a6d02350ed82356aa34c6cf538816",
                    "https://jc32arlvqpv8.com/hm9631wr?key=a4c01251a56d486ff15fcc32d7786fb2",
                    "https://jc32arlvqpv8.com/hupc92ms?key=68c61fece30e1ea271dc5d76f89b4b6f",
                    "https://jc32arlvqpv8.com/i0c8xt2dcf?key=a31f28b2f524dbff1c9787a8e42d3bfa",
                    "https://jc32arlvqpv8.com/iadd416v?key=d4d6ce432756990b54b053d7c1834b02",
                    "https://jc32arlvqpv8.com/icawegy7r?key=55544a7937b3790d46c81f64980cf489",
                    "https://jc32arlvqpv8.com/ie2rgx6y?key=ff45a64b558a6fb586349a7c8f5d3e16",
                    "https://jc32arlvqpv8.com/iwg8xwah9?key=b559a8298700613a9e5af87385e8bdb0",
                    "https://jc32arlvqpv8.com/j1nziafzd2?key=56827d4886d80c4cfa8cb582053a49e1",
                    "https://jc32arlvqpv8.com/j1q3yx4y?key=52e2fef14d3583e713d8d819f83c3560",
                    "https://jc32arlvqpv8.com/j7gtiy3y9f?key=af1823410035cd95a080d259f69e1b4d",
                    "https://jc32arlvqpv8.com/j8w7tsch2n?key=00052f38e76e3c3c965a2baadfeb6f06",
                    "https://jc32arlvqpv8.com/jf4vgsdz?key=0637016d062065ea91d708f606d58687",
                    "https://jc32arlvqpv8.com/jjja3pfvj?key=922bdc164faada76fe30b937edae4ec5",
                    "https://jc32arlvqpv8.com/jmjjf2tpye?key=0bb522da23edc62d994ee6cb999793eb",
                    "https://jc32arlvqpv8.com/jwmmqu7v8n?key=aebf234d8d881928d809857ba3f96787",
                    "https://jc32arlvqpv8.com/jx19fu0m?key=22a4a39db8af8a2cb8e5be9201adfd63",
                    "https://jc32arlvqpv8.com/jy2sk5n95?key=9972d8c3e71383345fc6a17fa042c45b",
                    "https://jc32arlvqpv8.com/jyvwfepc?key=d95ad22440034a8a274a12cc5725e40d",
                    "https://jc32arlvqpv8.com/ka5pzmvmt7?key=07bcfd2fb96d63250aa9181aeddf361d",
                    "https://jc32arlvqpv8.com/kwmipxzd?key=180c9c812bad15341633e44333358fa4",
                    "https://jc32arlvqpv8.com/kzbhstex6?key=d6cccd06677d7f6b489811bb4c5fd02c",
                    "https://jc32arlvqpv8.com/m5820mup?key=e65b0177713313e95c2ccbdc92d8b583",
                    "https://jc32arlvqpv8.com/m6kzdyei4?key=1b985c34b6bccc8c195c45a6ad34517e",
                    "https://jc32arlvqpv8.com/mjudxaswsb?key=c00d99f2dc8c1883cf8ddc8540c9f4fa",
                    "https://jc32arlvqpv8.com/mkj0qb3eis?key=8b718ea3534b23805b3c05bb493dfc5f",
                    "https://jc32arlvqpv8.com/msgbv3pqyt?key=15e0417eaacf36557f11901655117276",
                    "https://jc32arlvqpv8.com/mun6envc?key=6908859476bfecf92c696dd94169c3fe",
                    "https://jc32arlvqpv8.com/mxgquc9r?key=2d6a623cb7310da834a22eaf985663d2",
                    "https://jc32arlvqpv8.com/n7feff0wf?key=676bf36563bcf5478bd7cbfaa927098c",
                    "https://jc32arlvqpv8.com/nii7r0bj9z?key=fe084bcef6a933a894ede04ae5ea5377",
                    "https://jc32arlvqpv8.com/nty69vcf7a?key=bc29f794ce091daed4af62f467da60f1",
                    "https://jc32arlvqpv8.com/ny2xmpd1j9?key=ed904ed4262c76d3f9decfc93f17c691",
                    "https://jc32arlvqpv8.com/ny60g8qv4k?key=1a25d3d14dd5e77ff474bd3321ed6fe1",
                    "https://jc32arlvqpv8.com/pbixc3cg?key=6a99c79e1ff45481ae35dc74f1caaa24",
                    "https://jc32arlvqpv8.com/pw7jym84?key=dbf268fa9c5d50af894452355800b7f9",
                    "https://jc32arlvqpv8.com/q17eymr7g?key=4f42d09727b5e5d83467e46ab57b670d",
                    "https://jc32arlvqpv8.com/r0hzxy2u3c?key=2f91fe619c5a8544bab657d9e188e00a",
                    "https://jc32arlvqpv8.com/r0qkt6xw61?key=c7fdd1f27668d5d1afafedcfa798c9c6",
                    "https://jc32arlvqpv8.com/r1nvnphj?key=08f5096ff57b4e1e857fdd35d28e3b64",
                    "https://jc32arlvqpv8.com/r27jr838i6?key=168105890ab8ecf2547239eed3288339",
                    "https://jc32arlvqpv8.com/rd3t6ad8m?key=40576f83105bd005d6f465f4182c841a",
                    "https://jc32arlvqpv8.com/rnbqpjs1h?key=c1767c1a9593845975b9279ea85e3080",
                    "https://jc32arlvqpv8.com/s4r4c50dzq?key=18facff7b6bd75e7d440ee4af914aaf9",
                    "https://jc32arlvqpv8.com/s7meuf02b?key=8908ca478e3190dbf0337b1f9b9ba96a",
                    "https://jc32arlvqpv8.com/sbsqkx14?key=55620dfa1f3a08cd494367b9cc229365",
                    "https://jc32arlvqpv8.com/t128di34?key=00fd373d2e067780068aba0b49b83337",
                    "https://jc32arlvqpv8.com/t43gusz3h?key=1803b70747f5843db3b50f0da78aa68b",
                    "https://jc32arlvqpv8.com/t6ac9a4m6?key=be67308f399c44bde2e26b8c6aabeb7c",
                    "https://jc32arlvqpv8.com/thygp8czw?key=3a5f39bd4fcd406006675c95b6a1b169",
                    "https://jc32arlvqpv8.com/tjmtjkfjw?key=13520f331e7c464106f90ed408620fea",
                    "https://jc32arlvqpv8.com/tnhbjs2p7k?key=e058d5834a48dd39483244e896d42bb5",
                    "https://jc32arlvqpv8.com/tuvbx0fph5?key=4474b7af947e3521a95c0e29b13a3281",
                    "https://jc32arlvqpv8.com/tvxfxhnd?key=3775d45e78a37d295926d62df993e54e",
                    "https://jc32arlvqpv8.com/twr53sjuu?key=1cfed387d0d4f068bc5de253831e1059",
                    "https://jc32arlvqpv8.com/twuyzavm?key=a1b44e47a3f2ee07914ca990cde28b2c",
                    "https://jc32arlvqpv8.com/u3b4rk1xkr?key=20f30ae0f102a9cb433bf41f578437c1",
                    "https://jc32arlvqpv8.com/u3yaiihv?key=c6a58c519ee2e6e253f10eecc3b0f217",
                    "https://jc32arlvqpv8.com/u4677xkb?key=05ba21a47de910224c66ca12b4c8f9a5",
                    "https://jc32arlvqpv8.com/u8gvtz23?key=25bbd1dc60dd23cdfe1f93c2eeb960db",
                    "https://jc32arlvqpv8.com/up0dvhigy1?key=17552183ae896197330969a5e64b6286",
                    "https://jc32arlvqpv8.com/utvyt092n?key=51d61b2a1c85cde5d2f2e126f58be132",
                    "https://jc32arlvqpv8.com/uufj3d9au?key=645580972fb71f64e1434f39f46aaefd",
                    "https://jc32arlvqpv8.com/uzw3g4ig?key=89ab8d5e786a0f9b9b454ce266394f2e",
                    "https://jc32arlvqpv8.com/vdeq6cwdn?key=bf764cf2f1acdead9951a0794ca37874",
                    "https://jc32arlvqpv8.com/vn805t5wpq?key=4dae7d99f47fc210c1bd02d1ad496459",
                    "https://jc32arlvqpv8.com/vnyup4rjzk?key=ed7d3d88203fd24900e2b6674f9faa4a",
                    "https://jc32arlvqpv8.com/vy5z3e1rx?key=7a0fbaff893c71fae5b834b0800d78f0",
                    "https://jc32arlvqpv8.com/vyvj72qf9j?key=0d8cab24e3e4955ebf1d0f23858f9e86",
                    "https://jc32arlvqpv8.com/w3ekjj96ib?key=f4ed0bfc136342d330fc61a65c809514",
                    "https://jc32arlvqpv8.com/w3g2c30c?key=933bc66e9a52b21f6b8fa1e99538d3fe",
                    "https://jc32arlvqpv8.com/w64nb5yht?key=c82679beea5b644f28ca5eb64f32da2c",
                    "https://jc32arlvqpv8.com/warfxk2nhz?key=d421ad21ecbbbc8bc0d1d832555b93ca",
                    "https://jc32arlvqpv8.com/wbukpu0b?key=0d255fc4f219674e1daadf6f7b19ea3d",
                    "https://jc32arlvqpv8.com/wmbh1ee0r?key=09d2bbf0c9678ba48f0526c2e11b464c",
                    "https://jc32arlvqpv8.com/wrsb8m55?key=12f27ec0f4dd0db89cbf4553bd20216e",
                    "https://jc32arlvqpv8.com/x541bs3qj?key=59f323349c5ed31a047ed38b4e7098da",
                    "https://jc32arlvqpv8.com/x67xtafj3?key=550f8f44a75a8c10df824ea6e81d374d",
                    "https://jc32arlvqpv8.com/xe1z6sy21?key=f1088b512897b51e5614579c61cc538d",
                    "https://jc32arlvqpv8.com/xtdigmpci?key=dc553d4e52287eb28b475ba8d1e73f56",
                    "https://jc32arlvqpv8.com/yigkvjxtv?key=169115c55e742404deacc140dbf8cb56",
                    "https://jc32arlvqpv8.com/yr05x6ud?key=797b9a269f9da03aece87f00a182c01a",
                    "https://jc32arlvqpv8.com/yvuamfqj?key=62342d0790cff46c389a11a53711f65a",
                    "https://jc32arlvqpv8.com/yxat75y6?key=1f30da0eeeecd32f491691c8b61c0406",
                    "https://jc32arlvqpv8.com/z57y1vcr?key=ad69c775dd4bb91ff2bfd2d470965cfc",
                    "https://jc32arlvqpv8.com/z5xvbiu1y?key=ded78cccae4af75ee413460a6f82e3c1",
                    "https://jc32arlvqpv8.com/zdp11x3y0p?key=1e840fcb2df7f691e86e505929e6b521",
                    "https://jc32arlvqpv8.com/zjkq4g54w?key=e92f6942d241fe934335f6af7e8ff5a5",
                    "https://jc32arlvqpv8.com/zs1yn3fe?key=64a9a303e92696f716ab9742336c3ed0",
                    "https://jc32arlvqpv8.com/zs2ve0tq?key=0fd5afaaf5ceea2eee31865578d7d5d9",
                    "https://jc32arlvqpv8.com/zy1cjquq7?key=131bb62b2eaa2b6bfe310f45b55045ad",
                    "https://practicallysacrificestock.com/b2ughqsc?key=e4d471abe0b82cfdf0e8a0ea8b121e2d",
                    "https://practicallysacrificestock.com/b37nrku9?key=556430cf77fee7f338b416d819c797b7",
                    "https://practicallysacrificestock.com/bi8k4kqbj?key=98ee36c749c7b0ffc39a979d372d6a45",
                    "https://practicallysacrificestock.com/brzq6phna?key=b4887ea013eb33feaa1fbcdb8b4e624b",
                    "https://practicallysacrificestock.com/cc3g2zhz?key=17e3f282bf1d055159d271e8eeea144f",
                    "https://practicallysacrificestock.com/ckh5p3918e?key=b3ba603f2809a46ddc0ac244eb62ba28",
                    "https://practicallysacrificestock.com/cqr9satpjg?key=0a1bff81cb32918139629fef24179569",
                    "https://practicallysacrificestock.com/d7p5g1by?key=3add04d40885924207f79f3a0d649a80",
                    "https://practicallysacrificestock.com/dzbhwrub?key=4ee45dc99c9a52cc40df13d044d72f28",
                    "https://practicallysacrificestock.com/eazkd255q?key=09fd3aecdc00588fa8e24f198cbd087e",
                    "https://practicallysacrificestock.com/evjws6rp?key=8474a472950d4984f97b27537e81f7e1",
                    "https://practicallysacrificestock.com/f3dvg2z8?key=501855bec48d7b521132911471775a1c",
                    "https://practicallysacrificestock.com/fnrz8pppdp?key=cf3ad4b2a548428419151d63778569e5",
                    "https://practicallysacrificestock.com/gkzv4gemj?key=8be04cb7ac349a4ce46e0af74bf51f25",
                    "https://practicallysacrificestock.com/h20qjt9e9c?key=32291ab1d8e84ff36536c6c6970a8ed5",
                    "https://practicallysacrificestock.com/hd3i2qsfxy?key=954a93123d9aa832b1544c3f45d22d2d",
                    "https://practicallysacrificestock.com/hgfzx03d1s?key=1ccdf55188774ad507817aae79bf1a69",
                    "https://practicallysacrificestock.com/hqqkackmcd?key=60f97044a13bc2cb9a3dea7a71a6371c",
                    "https://practicallysacrificestock.com/hyexw9ppq?key=e2a5c1c1de2eeee9d635c5b605f2f0b8",
                    "https://practicallysacrificestock.com/ib0d1dkd6?key=02dd5cdf6c9086779fcdb68d3775debe",
                    "https://practicallysacrificestock.com/j260dwie?key=499a2ec15c1d7754c8fd45628e8abbed",
                    "https://practicallysacrificestock.com/je3d57ed?key=f955ceaf2e9d29d66cf8b9d14998868e",
                    "https://practicallysacrificestock.com/jei5qkhy6?key=ca7908786e595cb3da07ae7459d83446",
                    "https://practicallysacrificestock.com/k4petmc3t?key=8786fe5681400c5c8a5ba3b5bc94c784",
                    "https://practicallysacrificestock.com/kqx3ched?key=533c6f6b28c879db2c051180c067c0a5",
                    "https://practicallysacrificestock.com/mpd0kxy2me?key=60f4f1f8de8d514b3976d9dd77e24c33",
                    "https://practicallysacrificestock.com/mxajuprvc?key=e16e2632bfe1b5ec4a842a62ead81c22",
                    "https://practicallysacrificestock.com/n4fh1i4ag0?key=cf790f759f20bd80f16f9cacb131d5d8",
                    "https://practicallysacrificestock.com/n8m4xgj7yi?key=5d4607283e34208c73b6cc13168cdc10",
                    "https://practicallysacrificestock.com/p9rcskhf3?key=f818228733e8e3e9c149bfc7a8525958",
                    "https://practicallysacrificestock.com/qy1c4sraj?key=5d1acdf921e93dbb62486a627ad1d141",
                    "https://practicallysacrificestock.com/qz6j8i3eh?key=b0adab845ad4b251417f6f5e6cddbf9f",
                    "https://practicallysacrificestock.com/r87ikvhdp?key=9adab6a4db6ca8b9190dd3b2b0ae599f",
                    "https://practicallysacrificestock.com/rf3hj3wa?key=a6fbab40c2a0b18472a8efcfb17bba46",
                    "https://practicallysacrificestock.com/rijwdwn2?key=309f9c58c8a9a3d0fad1f2d44d242f8e",
                    "https://practicallysacrificestock.com/rrw3guz3v?key=4916af0c7f11298b6ca4eca2447542f6",
                    "https://practicallysacrificestock.com/rvkccwmgv?key=fac122eaec207e61dc0c492ef5c200b4",
                    "https://practicallysacrificestock.com/rzru0zj9?key=0dffad3f09d73a94ce093266e9cb3842",
                    "https://practicallysacrificestock.com/s1h933z2?key=7973d4cd4ae0f55477dd84d91de5859e",
                    "https://practicallysacrificestock.com/sjc9ta2te9?key=5c9e44dd9997b697789c81ba0f9b78d0",
                    "https://practicallysacrificestock.com/suum95c9i5?key=37c6d3f84c3d6bedf036bc3c493dcb24",
                    "https://practicallysacrificestock.com/tcmmetem1?key=af0d4a9dc8fd20707ab6d39127b9d15d",
                    "https://practicallysacrificestock.com/tvq1i6q99t?key=7d2ab7ef36efce4cbdabb2f98c11092b",
                    "https://practicallysacrificestock.com/tz07feby?key=b0ae871d1325158f414e53d9fdf695cb",
                    "https://practicallysacrificestock.com/unc10cnvw?key=38882bc4722ee196a5f5b8be9c8ad306",
                    "https://practicallysacrificestock.com/uu7iqk2qw?key=fe87dd3bf9ff68b702549362d10c7b46",
                    "https://practicallysacrificestock.com/uvdbb8en?key=3763e5320c373f2ab584ee712f55b9e8",
                    "https://practicallysacrificestock.com/v1657scsg?key=fb910614ea5badbbf23d71dca65d0d8a",
                    "https://practicallysacrificestock.com/wasa6rc6?key=1e65b2b48f4fb465c4eeafbe1f7efa97",
                    "https://practicallysacrificestock.com/wnr13weg?key=cdb3931478f3b6cd7287d70e15684485",
                    "https://practicallysacrificestock.com/x9fr16cu?key=3c4376fed07694705f0b275dc01c1b75",
                    "https://practicallysacrificestock.com/y055n5by9?key=8f123a9f1ca77c35b1220fb33fb0dcf6",
                    "https://practicallysacrificestock.com/ze4nkwi2?key=38e8be11c2c84c92c375d272033cc354",
                    "https://practicallysacrificestock.com/zgs4ygkhbd?key=94a0b888f06d38015288bf4e7114abe8",
                    "https://practicallysacrificestock.com/zy5w6yrs3j?key=aeb98671b987527aba045eb44ef688d2",
                    "https://practicallysacrificestock.com/zyymidyw0?key=43f62457a40610fc9998bafc5d2075f2",
                    "https://qoaaa.com/7066c7c5a8/95d281788b/?placementName=default",
                    "https://qoaaa.com/bb0ede6ad4/9ca5a236c1/?placementName=default",
                    "https://slahpxqb6wto.com/a3crf5hcdr?key=4a5694d302014f1fb12dc909313006d5",
                    "https://slahpxqb6wto.com/ad3tz7ch6w?key=fb350f8f1349300c3f05e80e3cbf84f4",
                    "https://slahpxqb6wto.com/ae7pridfn?key=2d1eeb0ea6f30687dc70a5d94734b49d",
                    "https://slahpxqb6wto.com/ak48evehby?key=dc2439b492d041977c0ca5c84a603623",
                    "https://slahpxqb6wto.com/ast33jvt?key=6463cbe473d63ab8b50021c47547f621",
                    "https://slahpxqb6wto.com/asx92z1r0?key=e23f8c62138f622c9cc4818f33ae37ac",
                    "https://slahpxqb6wto.com/ava2bdd3h?key=d9828ce2561f3e9ad5c1d7d9fae0e042",
                    "https://slahpxqb6wto.com/ax8cs9qd76?key=8d96606a08ec3e99592d7cd34b098d71",
                    "https://slahpxqb6wto.com/b2qde5nzz?key=07cff17b7d58b0b8914ef6f58568d79e",
                    "https://slahpxqb6wto.com/bda8i2bd0?key=d55606f9f50b3bc16c19ca0d572d3c0f",
                    "https://slahpxqb6wto.com/bewykswd2?key=53d4efb601473466f7e00e541a5240c0",
                    "https://slahpxqb6wto.com/bht0fz0v?key=5f59b8a58c64c95d96641a5ca6b8d533",
                    "https://slahpxqb6wto.com/brichh2z4k?key=41b3703d74b907548c3e45c98b239291",
                    "https://slahpxqb6wto.com/buk3xxwmi3?key=67222f5c921fa7f441b47e68a6f9f307",
                    "https://slahpxqb6wto.com/c7pp77mp?key=755900e93fd9904469d0d6a38461a7d0",
                    "https://slahpxqb6wto.com/chci0vz8?key=4789f94dfba3ed7475440f2ad8285ae8",
                    "https://slahpxqb6wto.com/cirx2f56s4?key=4b95d5817ee478e818e6202a50c12d86",
                    "https://slahpxqb6wto.com/cq5fznrc1?key=189775571daf6053bf2f611ff07a7fce",
                    "https://slahpxqb6wto.com/ctewgy01?key=cc2f4962b17357055beac1fbe9bd6514",
                    "https://slahpxqb6wto.com/cz78dee78?key=c5bec57039332c9712f70da172f941ee",
                    "https://slahpxqb6wto.com/cz7yvcqfn4?key=3a0b1fd71a9be8322e91eb14c50d771c",
                    "https://slahpxqb6wto.com/d3i3mfnzc1?key=5cfdec634b4843096797c74d0ea1a683",
                    "https://slahpxqb6wto.com/d91p2gyf?key=b93cc6d883f2b0250754ad019e153439",
                    "https://slahpxqb6wto.com/ddxxi3jrc7?key=802d8c9f88d42d2290ab306f10b7f874",
                    "https://slahpxqb6wto.com/de4k8hpqqz?key=4b9656053ef913c5d69ccf848f88b1ff",
                    "https://slahpxqb6wto.com/disihn9p7?key=8a79af88c79bb00417c0ddef9c4489e2",
                    "https://slahpxqb6wto.com/djydb9ks?key=d66cdeea54c8f96568b5ce8b0fe7962e",
                    "https://slahpxqb6wto.com/dx0fgzjr?key=9f6ca2a752053a49483177112ae231ba",
                    "https://slahpxqb6wto.com/e0yz6gz2r4?key=b3361a57334437da1978da5557de2ca9",
                    "https://slahpxqb6wto.com/e37qnkif7?key=84810396cc009bd0162419341f7b1b73",
                    "https://slahpxqb6wto.com/ei2aadzs?key=39dde21ba3b92420c33b69c96e1f1f54",
                    "https://slahpxqb6wto.com/eqj2iir6a?key=ef8e4afd379af09c997226c5669c4b0d",
                    "https://slahpxqb6wto.com/es94ykvx?key=4a046b5ef257e9deff7a90fa7280a755",
                    "https://slahpxqb6wto.com/eyx2442c?key=93ef8df5f851c01533bde41211de3fea",
                    "https://slahpxqb6wto.com/f1h8r3hxvv?key=52075fecb7870ab24592567b79e63638",
                    "https://slahpxqb6wto.com/fdxd5nyk3?key=a05354a9e7b8d0eabed39d780cfc32d7",
                    "https://slahpxqb6wto.com/fnzk6d4fq?key=b197f4507e81dd33ba2d91fae899068f",
                    "https://slahpxqb6wto.com/g042g11s?key=04f7cec8dd2ecb73902508a5f1d40043",
                    "https://slahpxqb6wto.com/g25wt85ih5?key=b42cd02f10e44894992a19a59b9266cd",
                    "https://slahpxqb6wto.com/giqddjp4?key=069a98832aaa7c1605267732caf10e4c",
                    "https://slahpxqb6wto.com/gpeidtgh3?key=7f731ba6ffaac56de0e54d6d68a87952",
                    "https://slahpxqb6wto.com/h4c2z6qcd?key=3a6983e37498901a6646dd63978f9b71",
                    "https://slahpxqb6wto.com/haq3ep8m?key=3ec9d610ae3fea2b53d631acf9366b02",
                    "https://slahpxqb6wto.com/hn7vjuiw?key=6657cb125fad29a54eb3bfa52b695b81",
                    "https://slahpxqb6wto.com/hwrup98urq?key=269c88cf78493a79ab3cf0dc8f41fa4c",
                    "https://slahpxqb6wto.com/ig6xzn1at?key=d9724104fa7489e255311ed25101ce6f",
                    "https://slahpxqb6wto.com/inqzkuy9nq?key=141096b346d9a1fa5a25fc565127d32b",
                    "https://slahpxqb6wto.com/ip60tcpi?key=471831ee8bf154600782f3af09072a14",
                    "https://slahpxqb6wto.com/jd2pjbux?key=50242f13a159bf106ed168532a24927b",
                    "https://slahpxqb6wto.com/jr3rqgzir?key=369b20ed50e8d1185909b4618f6b4915",
                    "https://slahpxqb6wto.com/jw7exp47n?key=f24bf574877b117542c7d6ca01fe8880",
                    "https://slahpxqb6wto.com/jxuigiue06?key=38e4382b92b9670a0d6070cca5a95b6f",
                    "https://slahpxqb6wto.com/k306r4pt?key=5a1f9b9fc28f22a3dfacb3bac79c6a1b",
                    "https://slahpxqb6wto.com/kec6smx1j?key=8cd38b465f97daecca43e171c3734b4e",
                    "https://slahpxqb6wto.com/kek0y6a5s?key=1848da6a8d47c2d4253e085d5c9993df",
                    "https://slahpxqb6wto.com/kprhi3r2u4?key=0769fb413a7d78bd7dc6f92e82ee89a5",
                    "https://slahpxqb6wto.com/m7gsvm50?key=5e1a617f279849d6f308bbed075663f6",
                    "https://slahpxqb6wto.com/mkpiq8n7xp?key=30d1cd19b1f1b082e62655d89697c607",
                    "https://slahpxqb6wto.com/mvg7vp8r3?key=684210efde9764100097281f31939744",
                    "https://slahpxqb6wto.com/mz1s4xrzf?key=6ff028eee450819df8255463934ac4a8",
                    "https://slahpxqb6wto.com/n1w1f9v8s?key=7b3999cccb75fc03c25b0c2780ce8982",
                    "https://slahpxqb6wto.com/n4iga4n4?key=2d0f7ac921c6884d9c895b61e6377daf",
                    "https://slahpxqb6wto.com/nb5ddefxw?key=9d8fc3acd06e232dbfcf7a40cf42c621",
                    "https://slahpxqb6wto.com/nirwh0k802?key=b93d710b8c542087b11c2267b4cf67c4",
                    "https://slahpxqb6wto.com/njmwpy995q?key=311236a4767412e3cd310702efed9486",
                    "https://slahpxqb6wto.com/nu35y50i0?key=e64905d6ec324989dcc20080b8b4f8c7",
                    "https://slahpxqb6wto.com/p05cta6gfa?key=7ecbd4940b906149ae5f51e2e260f17d",
                    "https://slahpxqb6wto.com/p3d7bhef6?key=9bba477b0388b392868a8595b1700a01",
                    "https://slahpxqb6wto.com/pad4jp7f?key=7f296bbf03c2ca904ee3c49e8f73c54b",
                    "https://slahpxqb6wto.com/pe2ti5gc?key=f838de27718e32cbc04840358ea213b3",
                    "https://slahpxqb6wto.com/psewth1wv?key=608f75d309c548356d7e9c0ae997cd45",
                    "https://slahpxqb6wto.com/q8cyfbuf?key=f5a279f2fc3d1cfbac618a22bb74f783",
                    "https://slahpxqb6wto.com/qa778bge?key=359c7128069b884b83b90c5f8f4df224",
                    "https://slahpxqb6wto.com/qced7xwn5?key=daab088a6740e9c7d67e20df458f9873",
                    "https://slahpxqb6wto.com/qpgj5922tw?key=f08a0e6d41b1660a1ce103465ed32fcf",
                    "https://slahpxqb6wto.com/qq7mi6y34m?key=ee61cf99b75c28469e49ec33efa05c5a",
                    "https://slahpxqb6wto.com/qv2pkbya?key=0ff760ddcb6d073c58302df9a5005b21",
                    "https://slahpxqb6wto.com/ra3ynru38k?key=bdfc992106c17b3ea6f8ec7f33bf8243",
                    "https://slahpxqb6wto.com/rra37zm4r?key=871965ae63211ee74f2e304a2b704512",
                    "https://slahpxqb6wto.com/ruvbwdvxsb?key=6c0027e9c3ab63aa23b06b622f26e698",
                    "https://slahpxqb6wto.com/rz3r8tnd3?key=ee7b66c38017c77c63132e5746013c68",
                    "https://slahpxqb6wto.com/sjcp3tq4?key=458d412a571e19007b30a8ddddf33296",
                    "https://slahpxqb6wto.com/sjhhmz7u?key=b82c0e5d290017d6f618999dae98cf7b",
                    "https://slahpxqb6wto.com/snrhtxhbv?key=8543aa43110af58a4df17e29565a1632",
                    "https://slahpxqb6wto.com/suuq9sntp?key=e9a16421438fbdae6d90cd9732379b20",
                    "https://slahpxqb6wto.com/szj4nt516?key=9e06e1b4a7f9c33be2cd3cee65853162",
                    "https://slahpxqb6wto.com/tb36tdyr3p?key=17f93d26c0f1f986c95d48471c7c8fdb",
                    "https://slahpxqb6wto.com/tj10hbyc?key=11dac1612e3eed969afad147654a038e",
                    "https://slahpxqb6wto.com/tpcffrqg3?key=7d533d7891597861f6017172234b7aa7",
                    "https://slahpxqb6wto.com/tuta1m7ekp?key=9ce6862ab81f5076b3e094bc4b3deb1f",
                    "https://slahpxqb6wto.com/tvie8ux8gb?key=857ca293b32dc2b360df8e0ea9973efd",
                    "https://slahpxqb6wto.com/u5tfwrdv?key=6288dc1e49d35071019c07445324f8c3",
                    "https://slahpxqb6wto.com/v6tdasna7?key=f3c2d964cabb328966390c02b7ac60f7",
                    "https://slahpxqb6wto.com/v86wcs13?key=c60a9027c3c8732db4e813d374da1fe9",
                    "https://slahpxqb6wto.com/vmmuj3wh?key=4f07c9da1d7377eee3c47a4182b2b6d7",
                    "https://slahpxqb6wto.com/w2yqi54g?key=3150437f255bfdfccccf18e538bc06fc",
                    "https://slahpxqb6wto.com/w55sctn0n6?key=fb8ba1e17dd9b704e5e7545f8c85f245",
                    "https://slahpxqb6wto.com/x3g50mrhq?key=9efd4402e9edb7f9d724af495d215681",
                    "https://slahpxqb6wto.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",
                    "https://slahpxqb6wto.com/xx6wfuepdn?key=a70b59da9971d420afdef45be1089ecc",
                    "https://slahpxqb6wto.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
                    "https://slahpxqb6wto.com/yaqqwswv6n?key=46f18a3e0510c04f96220f87ce27beef",
                    "https://slahpxqb6wto.com/z1k9i3hx6j?key=0045da9837f69be018231c4839c6517c",
                    "https://slahpxqb6wto.com/z314bipi?key=5429afc311e9aa88fc8ac34130306129",
                    "https://slahpxqb6wto.com/zbq2mbztb?key=6e3c970fe7f268cf6fdb4f9f08e71814",
                    "https://vdbaa.com/fullpage.php?section=General&pub=745199&ga=g",
                    "https://vdbaa.com/fullpage.php?section=General&pub=831371&ga=g",
                    "https://www.effectivecpmcontent.com/akh7cfy0s?key=85eedacc6f9080667d09e90ec46bbe78",
                    "https://www.effectivecpmcontent.com/e33xmypmu?key=9ccad1e11880c35ce8f03453c7868d04",
                    "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
                    "https://www.effectivecpmcontent.com/fv8hvkea?key=b2a79e0bab2031163d784183e018aa32",
                    "https://www.effectivecpmcontent.com/fy5jvdb6er?key=a2d372865650fa92d16ff8a9aca84c08",
                    "https://www.effectivecpmcontent.com/gm3sa354w?key=fd9666fe0dd8b18f02eae1925c6b3b48",
                    "https://www.effectivecpmcontent.com/hbjzk9r9?key=aa781bc4972ce6778b29f2c836085e1c",
                    "https://www.effectivecpmcontent.com/ian5sddbhn?key=cab0e894642dc56f27b8ada7e2ed25ff",
                    "https://www.effectivecpmcontent.com/ib553a7f?key=eb5ff9a09aede3c9193c188e468a6530",
                    "https://www.effectivecpmcontent.com/je6mvi5z?key=4f62984fcd8eedeaa3658115e87b1504",
                    "https://www.effectivecpmcontent.com/jsqixcjg0?key=b41e77ab60f778820d10d6713f59b408",
                    "https://www.effectivecpmcontent.com/m3mt6q24?key=d95d6095e4fac18df6a7a817871e1c41",
                    "https://www.effectivecpmcontent.com/mfetaga5jq?key=c03cfedcf6388f911dce716f063a8d5e",
                    "https://www.effectivecpmcontent.com/mftq4y8w8?key=6961aac94ba5530f814973783bec98e0",
                    "https://www.effectivecpmcontent.com/p62r7t1g?key=3dea117232d8de1e4986fd4b93c1d19e",
                    "https://www.effectivecpmcontent.com/rtguqt6gk?key=b5db3a320ba507a92a0512608ad8d10a",
                    "https://www.effectivecpmcontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
                    "https://www.effectivecpmcontent.com/u5sr9965xe?key=4ef3d7d56a9ae04ad42c891cdff76b7a",
                    "https://www.effectivecpmcontent.com/vetxzi7f?key=b4f78df472659153a5792364ea8e96a8",
                    "https://www.effectivecpmcontent.com/vfenh94ucy?key=a121d703c5ac1be24e9b541bc305a0eb",
                    "https://www.effectivecpmcontent.com/winir4sa?key=0fe7b34f3d199c9ed6a275b17f8ba005",
                    "https://www.effectivecpmcontent.com/x75y7kj4?key=39e47f1f02a5fa14e64c6739fa36c698",
                    "https://www.effectivecpmcontent.com/ys5zk6m7n?key=26b3c19b88bebcaea8e9706448d758fe",
                    "https://www.effectivecpmcontent.com/znn0w3rs?key=59710ef8679cc3ad2e7c10ef26b9eff0",
                    "https://www.effectivecpmcontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
                    "https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
                    "https://www.safestgatetocontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
                    "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",
                    "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",

                ];

                function randomPage() {
                    return pages[Math.round(Math.random() * (pages.length - 1))];
                }
                location.href = randomPage();
            }, 0);
        }
    }, false);
}(window, location));

/* copas */
function nocopas() {
    var e = window.getSelection();
    pagelink = " Read more : " + document.location.href, copytext = e + pagelink, newdiv = document.createElement("div"), newdiv.style.position = "absolute", newdiv.style.left = "-99999px", document.body.appendChild(newdiv), newdiv.innerHTML = copytext, e.selectAllChildren(newdiv), window.setTimeout(function () {
        document.body.removeChild(newdiv)
    }, 100)
}
document.addEventListener("copy", nocopas);

// script redirect ctrl U
function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        var pages = [

            "https://bonepa.com/c49187b39f/1ae66b9705/?placementName=default",
            "https://bonepa.com/e0fbb9db8b/e4016c2871/?placementName=default",
            "https://bonepa.com/e0fbb9db8b/ea98870615/?placementName=default",
            "https://euizhltcd6ih.com/a1cxr71k2p?key=fb4650db89e13e5f6259102256e2dd28",
            "https://euizhltcd6ih.com/a37hczh2m?key=5d9cb36282c1542ab7c479496e0d553f",
            "https://euizhltcd6ih.com/a42brqwd?key=7f50c5443250077a18e3940d8497eac1",
            "https://euizhltcd6ih.com/a44ks6dhc?key=6579b672533c66cfa5d018a6b1440d41",
            "https://euizhltcd6ih.com/a535dsff?key=63bde51383ca2766d81d050c648b569c",
            "https://euizhltcd6ih.com/ad0ih8ah6?key=7817628a291e26cd32c7822aa2797485",
            "https://euizhltcd6ih.com/afqni0ew?key=db9123903e4389fe642148942dfad77f",
            "https://euizhltcd6ih.com/ag7qpb60s2?key=5b2968b76a4447d2c7441b837bea743c",
            "https://euizhltcd6ih.com/aikvymbmi?key=50d1f3a2e3019294d680cb20d8a49df1",
            "https://euizhltcd6ih.com/am3k2fmb4?key=881525934399961b8974eaf76d9f4671",
            "https://euizhltcd6ih.com/angec1fir?key=646cab74e7a1242dee50622fe197058d",
            "https://euizhltcd6ih.com/axb4ebe5?key=73c2fefb423ee015214e179573cc85cd",
            "https://euizhltcd6ih.com/az0bhryvnz?key=6f823a49a9ea680bb6186ecd94d1f9cf",
            "https://euizhltcd6ih.com/az4fe297?key=14befe67aecb7bb3969dca16ec1f3a6f",
            "https://euizhltcd6ih.com/azg4br6q40?key=c6666165dad7e58016d3f23fdf98c31b",
            "https://euizhltcd6ih.com/b6ez2baw7?key=7770e89516b7ce6c1d34ae325907c743",
            "https://euizhltcd6ih.com/b7bcwyaw?key=5dd95e3df5e9c2e2beed6a84f39a294e",
            "https://euizhltcd6ih.com/b9hkyvpm?key=ea0f391602ab3d2caf6180c624116dd8",
            "https://euizhltcd6ih.com/ba5ihtf44?key=a2a48f0692e26f154683ca2ab4fa013b",
            "https://euizhltcd6ih.com/bbbi2qa9u?key=7a2735e41090a4cf2e7cde2e439f9a47",
            "https://euizhltcd6ih.com/bbgb1krq?key=ee02d4b880658437043814eb145afaaa",
            "https://euizhltcd6ih.com/bdxxt5tu?key=7654dc00577a4edb24ce3e6071ceb44d",
            "https://euizhltcd6ih.com/beap4g9h?key=fbc2cda4f822e139e5cbdded9c523eaa",
            "https://euizhltcd6ih.com/bh37t3uqw?key=8bb096b571a884dd4744e2fef8d268a0",
            "https://euizhltcd6ih.com/bif0r25r7?key=1acc97784b8e334f079f9d61bec945db",
            "https://euizhltcd6ih.com/bnnz018301?key=b8ab55573bc845fe1ad066b834356776",
            "https://euizhltcd6ih.com/bpbpcjf7mu?key=8acd449891d85b99dc7f49af706bce44",
            "https://euizhltcd6ih.com/bprtc8kg?key=0fd67b7109a0ee79cfdbd80aad7c6959",
            "https://euizhltcd6ih.com/bs3mdny1nt?key=b72a5ccc2d9de4220ca7fd9a7493d43e",
            "https://euizhltcd6ih.com/bvxddg833v?key=9b96eee8612288822df32caa7e6b868d",
            "https://euizhltcd6ih.com/bw0wgavb?key=6eee8031d78c95c6467439de5bf77b51",
            "https://euizhltcd6ih.com/bytfwrcv?key=2fe6ba1e9d5b1ff7ccf9459cd977bd1e",
            "https://euizhltcd6ih.com/c17c2ui689?key=713bed973f5582cd4f89b84e22b3be59",
            "https://euizhltcd6ih.com/c3kfd03fc?key=de49f70046bfad4792423364416a5443",
            "https://euizhltcd6ih.com/c4mcga33p6?key=b774c4b4d432a181947a754d44e08ebf",
            "https://euizhltcd6ih.com/c4z22csdjz?key=7d05ea9f10c16d08bc3558c9688b4c86",
            "https://euizhltcd6ih.com/c5htj3m54?key=8b066a9c51eebffa3d149dd127ced09b",
            "https://euizhltcd6ih.com/cbau725wv?key=5321f568cb4a04137a7dead56793f075",
            "https://euizhltcd6ih.com/chdcqh4qdt?key=2d86994f85f523697b148ab55e7bbbc2",
            "https://euizhltcd6ih.com/chmuakmxv6?key=c3315374c953df30ef92f472001d31a4",
            "https://euizhltcd6ih.com/ciu0pcnxuf?key=6a5a9aecd5da8e696653db88ea400087",
            "https://euizhltcd6ih.com/cj4wjdm8h?key=e354a651a84b8aeb1da0e173892ac2f7",
            "https://euizhltcd6ih.com/ck9723bauk?key=f00f8f049e0df3ee9edb641b8771a87b",
            "https://euizhltcd6ih.com/cmc8wsw2w?key=5104bb1c7037df40b82b994870b8085f",
            "https://euizhltcd6ih.com/cmg10sh2?key=13d6300ae182e43b9c4d2af92aa7209e",
            "https://euizhltcd6ih.com/cpnbma39?key=215a8cd00225f51d7c6d877f75c6fef2",
            "https://euizhltcd6ih.com/cri26xei?key=3f1f614f08353413b956a36ff4390e36",
            "https://euizhltcd6ih.com/ctb6k4s648?key=80f2421cd21831bf88ead4316b327c09",
            "https://euizhltcd6ih.com/ctspqxwp?key=f3763d7e68c1f6e589af40087192ae96",
            "https://euizhltcd6ih.com/cxdpnd0b?key=6c7414f5f09e93773631a543a6fe8d54",
            "https://euizhltcd6ih.com/cxgvpk8cbj?key=ad799bb2afffcd81efac5132def1f1ac",
            "https://euizhltcd6ih.com/cy7hzvawi?key=4ab14f76aeeeb0d2394d27f7be1a6650",
            "https://euizhltcd6ih.com/cztvnfjb?key=58c89b6a6a192d406290aa399e095258",
            "https://euizhltcd6ih.com/d02i2qvfc?key=eeded307f3fc1165c94952407fc110e0",
            "https://euizhltcd6ih.com/d0a6rbgtr?key=ebbfe9854901b5f461885531a01d3f7b",
            "https://euizhltcd6ih.com/d669pamcur?key=6fca0eef2e15ccfb1aa3b181cc1417b1",
            "https://euizhltcd6ih.com/d82cikp2uy?key=46348e19cae8b8946530fc4b9e348fa2",
            "https://euizhltcd6ih.com/dbmv24aq6?key=969839e79f6d81a9523d5383ac473574",
            "https://euizhltcd6ih.com/de2a45aa?key=3e0aaf033282a7bea93ca1a9a24705bc",
            "https://euizhltcd6ih.com/dfskd3yp1?key=cea70923947d167bd2b73ddb14e3eb7c",
            "https://euizhltcd6ih.com/dv584hqkk?key=4f1f67f83434035a8697ce7aefc1bcfb",
            "https://euizhltcd6ih.com/dv85sm7r?key=1a4b4546305c3d3d341560f264af4e1d",
            "https://euizhltcd6ih.com/dxhwi1xn?key=cdc73ec4710419d77259488aeac38ee3",
            "https://euizhltcd6ih.com/dxp03v3w?key=e5c85dc9c9dc4c4f0bea6984695c2d33",
            "https://euizhltcd6ih.com/dy49qxw7f?key=7569b99b3bea91fdd37d58692eb324c1",
            "https://euizhltcd6ih.com/e7dpt2spw0?key=19c09864456d00c389c86629a9d8e931",
            "https://euizhltcd6ih.com/e91h5p8w?key=f1afc20691c053112ff827d50a87b2ed",
            "https://euizhltcd6ih.com/e9p6wz3r?key=a33274a62d18e735d74d61f596499c30",
            "https://euizhltcd6ih.com/ea38s7g69?key=98e3671eb3ebc087e394578430631a59",
            "https://euizhltcd6ih.com/eb2tbbnv?key=07fed1edaf88aa2e66ca3f6393dbb617",
            "https://euizhltcd6ih.com/eb7e58g5?key=cc8d30b5fa1b9117fa22d2ffc5833cb6",
            "https://euizhltcd6ih.com/efj84ipf?key=a80f44913563574591d37f3d71c28577",
            "https://euizhltcd6ih.com/ehd2k038en?key=e44e783996daaa24434c68acf29e83b0",
            "https://euizhltcd6ih.com/ejrt8900sb?key=c3690317bd779694c2a07421e335054f",
            "https://euizhltcd6ih.com/emzfeatt9g?key=f8f8a9808bb629100f46f3438e9f0cdb",
            "https://euizhltcd6ih.com/enmih9aa?key=73c6565d0d9f26343372ad4cfc7cf03c",
            "https://euizhltcd6ih.com/enpwxy59?key=2e1be5717a62688697e346fae41bae69",
            "https://euizhltcd6ih.com/eprcqstci?key=96855c514754c5a5a35cf806aba31b8a",
            "https://euizhltcd6ih.com/eqkghad73?key=62e6b85d06b22a55a8aad1a5a2b1341d",
            "https://euizhltcd6ih.com/er8c4cpki?key=07af3cfe7a799f1c6226d37fb6959b3d",
            "https://euizhltcd6ih.com/etk0fwpng?key=7f963884958e2ca84c1ac51163f9fef3",
            "https://euizhltcd6ih.com/euq17n7d80?key=061e546b5e045f34c302da4bec733fc8",
            "https://euizhltcd6ih.com/evp4f8w8jk?key=adb2fc10c93b70681cbed1782b8dae0f",
            "https://euizhltcd6ih.com/evt0712zyn?key=432cfc0d2570999ac56afff9e82dd949",
            "https://euizhltcd6ih.com/eyffpbri?key=9bc646939d9ee50ec209d45f8b4ccdd8",
            "https://euizhltcd6ih.com/f224bktbrj?key=dd0095aa1ab767603fb11ea4444b50b1",
            "https://euizhltcd6ih.com/f3jhggqwz?key=50ecf00fd717ca080e1bd440fc8b7716",
            "https://euizhltcd6ih.com/f654jx4j4d?key=1bf097c3c297f8a896d240e1763b7721",
            "https://euizhltcd6ih.com/f8zn60e8e?key=150d91f92457b9657652fbe7c97a8c77",
            "https://euizhltcd6ih.com/f9y37ji4?key=fc66e1e6d22794c5133b2abe3fab9b08",
            "https://euizhltcd6ih.com/fe4wbew0?key=62c73267340844356d38330b17e610df",
            "https://euizhltcd6ih.com/fhcbznmg9?key=2e298447d2d2313d08f957e63753e5a3",
            "https://euizhltcd6ih.com/fj8acru98a?key=c973a0ce158cc5059bad786ebf7faa25",
            "https://euizhltcd6ih.com/fsztcps79?key=00ac4e80e2e498b79c7038e6f406bc13",
            "https://euizhltcd6ih.com/ftangsfqpd?key=2a7a4a6486aec098fd275ec29e0b852d",
            "https://euizhltcd6ih.com/fwwtfw8q8?key=589279eba0e5ac9bf815934b2c76efc5",
            "https://euizhltcd6ih.com/fxbauc3fa?key=8af304ca071be33577d1b414b170ba26",
            "https://euizhltcd6ih.com/fxnvavfis?key=96afed9948ed300034e5b00b0b022708",
            "https://euizhltcd6ih.com/g2n71nix?key=3a7dff1703571ad02f7a00cf6155a317",
            "https://euizhltcd6ih.com/g30pkse7k?key=55283e010e0da4546ffb54892e30cc6d",
            "https://euizhltcd6ih.com/g3z5ypmpx7?key=63681fa49dc466538da0f2f245afc157",
            "https://euizhltcd6ih.com/g6t1b46fhy?key=a3a83a2ecff286f82f8d6ae2cfc35727",
            "https://euizhltcd6ih.com/g986j75vj1?key=4c737c07c9bc37b1fcf949238255790f",
            "https://euizhltcd6ih.com/gdgs7kmtm?key=4940fd6da529b97abe686278986ec313",
            "https://euizhltcd6ih.com/gew23caz?key=c260ccc6fdd0eeec63da298d51e17bcc",
            "https://euizhltcd6ih.com/gg7iccj7b?key=c250d8ef8953191e5bcfa39edde88ba6",
            "https://euizhltcd6ih.com/gm42imzsrv?key=3e3665f814951dc5e8433fdfdaf6b3a5",
            "https://euizhltcd6ih.com/gm9g4h5x?key=303ba5d31bb93defedb4e15e7288fe88",
            "https://euizhltcd6ih.com/gqfi1wxsf?key=6642ee0f656cd30b21b8ccd91a81e7e9",
            "https://euizhltcd6ih.com/gqfu465u?key=eed64f778ddb8a3e7471e1964a49d9f8",
            "https://euizhltcd6ih.com/gt2v112zu?key=bf9d4a6064d2d8aa0d5f2ab8e208bfe7",
            "https://euizhltcd6ih.com/gtnewqyd?key=837d9c882f4e92915c3feb4b6397ad93",
            "https://euizhltcd6ih.com/gu9j4erm9?key=0f8f322e871283331705519015456c46",
            "https://euizhltcd6ih.com/guyk96mv0v?key=0db1900fdb5271d47a315cdc5d8bf67e",
            "https://euizhltcd6ih.com/gxc8u0m9xj?key=86c2043e317accd0de2e0b0d248d080d",
            "https://euizhltcd6ih.com/gxdxb744f?key=2ea23d000bd716d167da89b8a01af77f",
            "https://euizhltcd6ih.com/gyc2bw6r?key=d27161c7eced332defcc7d22124d1a37",
            "https://euizhltcd6ih.com/h1d8v4ur5?key=6915c864f8269f1bccac39b224eddb2c",
            "https://euizhltcd6ih.com/h1uf6whn?key=689b58ed7791c0319a8212fc462d8998",
            "https://euizhltcd6ih.com/h3i2zjdv?key=d6b816f73eb2ebc3e9d6eff190f508ca",
            "https://euizhltcd6ih.com/h6ykcp7t?key=2df032e05b50b28745c7325699dc9988",
            "https://euizhltcd6ih.com/hb4hxkgfc?key=b06fe0961eec520032a6c92ddd7176e4",
            "https://euizhltcd6ih.com/hgjhc541d?key=fdf3bba21cff3893b98de2fbe565bd8f",
            "https://euizhltcd6ih.com/hi7mqfrpz?key=0fd1f7237ed65639a2eaa4c1561a0b6a",
            "https://euizhltcd6ih.com/hq7pxq0tyn?key=0c06f7022809d361550d26f2eef074ad",
            "https://euizhltcd6ih.com/hre7t565j?key=9cc32db5cb183371d9133d4d9d5179a3",
            "https://euizhltcd6ih.com/htg00m3r1?key=6aaa34bef4972eae3c93e748637924ae",
            "https://euizhltcd6ih.com/hwspikdyki?key=f44c2e684baa639a78375249b308b00b",
            "https://euizhltcd6ih.com/hy6g9idsm?key=5626a4093fc8af42ffb8097a2e494935",
            "https://euizhltcd6ih.com/i3hfz6vj8?key=edebfd0b41e08caf4f027bb804c84dee",
            "https://euizhltcd6ih.com/i3pggnty6f?key=8906d748d9dc7a91f0f121cb74e54bbb",
            "https://euizhltcd6ih.com/ia071irmpi?key=2e2755fc5216abbede748e0b42c380bc",
            "https://euizhltcd6ih.com/ia98ngps?key=97683812682a0a9bb94aca3c66783a26",
            "https://euizhltcd6ih.com/ih7njyvhd?key=2580ad7117dcf9fccd09d0b967063ddf",
            "https://euizhltcd6ih.com/ik7qm3wm6?key=18ef4ec58e787a761e1b9a02b9853d9a",
            "https://euizhltcd6ih.com/ingtjasdm5?key=2dc8f91c470658a441cbf904908909bc",
            "https://euizhltcd6ih.com/ipgkerf9nj?key=5ae7e9e103ab4eb0fc0d7a796b96f533",
            "https://euizhltcd6ih.com/iqce746y?key=aee1dddf5c851951fc977d10f755fd37",
            "https://euizhltcd6ih.com/ishsegknig?key=a81c2bbf440bcc87dc2939d37da352c6",
            "https://euizhltcd6ih.com/iwtibfgc7j?key=907c01020077c0e275c98d490491378b",
            "https://euizhltcd6ih.com/iytjxpd6b?key=6ee686a9e2f742e39eb9c11a528f5898",
            "https://euizhltcd6ih.com/j0dzxs2q?key=d312e325d7ea1a972864e6cab2e83104",
            "https://euizhltcd6ih.com/j131i800v?key=31243c4c11b5cee119504c8ff8bf8bea",
            "https://euizhltcd6ih.com/j1wtdzbn2?key=f44d516f4f3d4abacaeb44a66821dd25",
            "https://euizhltcd6ih.com/j21fww4usc?key=f9d50ec1042e7b737fdc0a08c2964c97",
            "https://euizhltcd6ih.com/j430q0q9v?key=1ca12afba1ffa31c0cbf971b78e06f7b",
            "https://euizhltcd6ih.com/j6gq1bhg?key=652fd19ac04907e54993a7669469ddc9",
            "https://euizhltcd6ih.com/j7r4jt6v80?key=14ab0687c16665b97447830781ec839c",
            "https://euizhltcd6ih.com/j8nyf1dks?key=9dd0d352cd94072ed167c3e9cab86df1",
            "https://euizhltcd6ih.com/jay5k7jqf?key=9be88320680c28201cd7841b8b7397da",
            "https://euizhltcd6ih.com/jcxmak1ifj?key=7ffcfb8e926351ff9dede37c02f2eb9d",
            "https://euizhltcd6ih.com/jkrk6mxc7?key=0b8eb640ea4ff0f79f6bad74ba98d3c1",
            "https://euizhltcd6ih.com/jn5pu44r29?key=8e6231c211bf6bab9a17e90147d438de",
            "https://euizhltcd6ih.com/jnvcjhp2a9?key=bcc895c37496d1c77b4b0ee819e6e096",
            "https://euizhltcd6ih.com/jpjx10szi?key=4631154728969b5c81bc0c589685b4a5",
            "https://euizhltcd6ih.com/jrqvpbnkg?key=6d99c91f983c4c25d041823b8bfe6a92",
            "https://euizhltcd6ih.com/js3k7831r?key=a8b83cb44276024b55a5c65f80a3bde0",
            "https://euizhltcd6ih.com/jtbqem7sa?key=dac2ec96c8b1b77d7fcd77d287ddeacf",
            "https://euizhltcd6ih.com/jxea88ui8?key=844e61b5069ae78056439d0bb1c34590",
            "https://euizhltcd6ih.com/k4twkyb4?key=4b7ca469cf8bd544091f394bf100f23a",
            "https://euizhltcd6ih.com/kcy7atwt?key=941c3ffe16e10d73002695cc0ebc7878",
            "https://euizhltcd6ih.com/khjg4u8k?key=a488bae33b95a580689d7e89ac7ab9c8",
            "https://euizhltcd6ih.com/krhiyxx2?key=34bbe127376d82c813273ca96bde0931",
            "https://euizhltcd6ih.com/kryd3s245?key=002e3374917a12474b1076393ce38726",
            "https://euizhltcd6ih.com/kujj8vf3pj?key=7654c59931614a49496ec64f57401e1e",
            "https://euizhltcd6ih.com/kvzff93g?key=1d26c88f4a5dd1be8f8b39d7271759f2",
            "https://euizhltcd6ih.com/kweweh4bf?key=9ad6ff7b878f5ac25bcfdd506f671d6b",
            "https://euizhltcd6ih.com/ky6yh35a?key=95d6056e794c2d17d0247da98be43c54",
            "https://euizhltcd6ih.com/kyn65hb2j?key=9a82b5bd6cb48a3c3772768423d657bf",
            "https://euizhltcd6ih.com/m1s870zhyc?key=ec9943c99d135ce50de576480ab60e08",
            "https://euizhltcd6ih.com/m37tu6xt8?key=874c4ce9733e30bf7792ee60e18d1c36",
            "https://euizhltcd6ih.com/m6vvud4z?key=3a54b0743ce1bb59cf87a2ce4f476647",
            "https://euizhltcd6ih.com/m7f8ifwh?key=fdfb1017d57f60ee325e817dedd683dd",
            "https://euizhltcd6ih.com/mbztwtt29b?key=93f00c8c8dda7168589fa1267b34657c",
            "https://euizhltcd6ih.com/mcjt6cwyqz?key=71459d1ecfd11420f3e4baa4d7da992e",
            "https://euizhltcd6ih.com/md8nkjsed5?key=3adafa0fd3df1eb03de0ce631735d970",
            "https://euizhltcd6ih.com/merrq4376a?key=7812099ff90eca26629d76b13137472b",
            "https://euizhltcd6ih.com/merxj5sc?key=41e609c91eb764af1d55e1e9653e3c26",
            "https://euizhltcd6ih.com/mn8shpjyj?key=409d7da440c1eae1f536bca655fdb06a",
            "https://euizhltcd6ih.com/mnfszr5s?key=b412294c33174a705039200cc99d0f52",
            "https://euizhltcd6ih.com/mnnkdxvg8?key=3eaaffa05725b77a11b6dc78797199c4",
            "https://euizhltcd6ih.com/mqmb9ugj?key=8db4be9b8aa0328e607bbba43b221c94",
            "https://euizhltcd6ih.com/mu3yez507j?key=08bc46d07542453be77a5ae4518e35a6",
            "https://euizhltcd6ih.com/mujzajgs6?key=f0ddadd6b6272e6b6d2112aa144ed435",
            "https://euizhltcd6ih.com/mwcfca1ut?key=a53ed6e2fba6f71f2cb0d505ea6d4b53",
            "https://euizhltcd6ih.com/n1rdzy5ky0?key=75ff99e5159fb5ef661eacc497d21203",
            "https://euizhltcd6ih.com/n42g91vcfw?key=0e76ec4bf3d14e012f94eca9719c5bf4",
            "https://euizhltcd6ih.com/n4ag6n4p6?key=81254fe42c6ff24aded6531345eda16e",
            "https://euizhltcd6ih.com/n4cw5zrs?key=18f9505af982f92b16cfe6c8bcdbfc68",
            "https://euizhltcd6ih.com/n8pq68bziz?key=a4d67a99b44ea7720ad6529803560bac",
            "https://euizhltcd6ih.com/n9fyc6uyjf?key=5680d13a8d0cfb23970d778a5977025c",
            "https://euizhltcd6ih.com/nd40sc7j?key=05b480cac3536fab0237f9110782f90f",
            "https://euizhltcd6ih.com/ndgnqfa1?key=212e90534ef633d6201288fce3c071dc",
            "https://euizhltcd6ih.com/nfeb2jmi?key=69a4c49cd5053368a2be3d2932f2e091",
            "https://euizhltcd6ih.com/nfsjifay19?key=ade198fcd6bde125e2671f85a8a63f0e",
            "https://euizhltcd6ih.com/ng6ka2maq?key=d2fdf1f09640866a35179fb5e9722951",
            "https://euizhltcd6ih.com/ngyq89hvx?key=dc1751b50a6995302133fc14b21df4e2",
            "https://euizhltcd6ih.com/njhrnkzj?key=35e7ecaef802ada026295596beb77cca",
            "https://euizhltcd6ih.com/nkgki95z7z?key=b3658911afd8644a6f508323ee84612e",
            "https://euizhltcd6ih.com/nkr999xg?key=e92b4de9f70a3886f1f9e5ad289bd40a",
            "https://euizhltcd6ih.com/nxmr0tgwqb?key=1d6b7aaf2e0c75172af377715c6a6ace",
            "https://euizhltcd6ih.com/nxnakrv6f?key=552692bb6f6c83774935f1cbcc4ae4c9",
            "https://euizhltcd6ih.com/ny0qt9chqi?key=4c7edc4573033b9bfef4501847604729",
            "https://euizhltcd6ih.com/p0gq54hm?key=262a05fac8191d7c0ad4dfc611dd435d",
            "https://euizhltcd6ih.com/p2g47zs7?key=d5f10af7b90cfb9398ec9f07ac4d2c28",
            "https://euizhltcd6ih.com/p5u7p1ms?key=1c6ea933230497902efc20360bd816ae",
            "https://euizhltcd6ih.com/pbgww9bfm?key=3986c79a14057f54b1d17837d0953645",
            "https://euizhltcd6ih.com/phbptirx3?key=cd794326528e5c54256fc35a7b6b4985",
            "https://euizhltcd6ih.com/phn1pjpv?key=33dd737765c1ec01b27b3479ed45c69b",
            "https://euizhltcd6ih.com/pnbvb0vb?key=0be37083a54b1035871864c18c88a632",
            "https://euizhltcd6ih.com/pntxxkek?key=8e7317f62f26be4c8e965055a2448f02",
            "https://euizhltcd6ih.com/ptge97sjjy?key=12f8155cbcac6390602931be19de7f02",
            "https://euizhltcd6ih.com/puk6n3a9?key=b1fa963144023bbbaf3b4735934b3477",
            "https://euizhltcd6ih.com/pukhw3fzm?key=3a3b48ae61e9290383fbe5ae636bc761",
            "https://euizhltcd6ih.com/pvc624u5q4?key=e3ab16815340900228fcdc72bf967697",
            "https://euizhltcd6ih.com/pvmjzx68h?key=917213c532cae5f2fbac10211810f231",
            "https://euizhltcd6ih.com/pw9v5vjk?key=edc16b1a616afbcc664f9b3cc123c996",
            "https://euizhltcd6ih.com/pwuiy0pj4r?key=73a00c8d502195e58f1a9bc95bb5f2f2",
            "https://euizhltcd6ih.com/px597uwpe?key=456a8a174ab1be2adb84ad4b89b86903",
            "https://euizhltcd6ih.com/pzj940aza?key=f56535fed1e2a045b387e08c0b6fc827",
            "https://euizhltcd6ih.com/pzsk83vss?key=e7c097b94c712e2e22037be915f7f3b0",
            "https://euizhltcd6ih.com/q1z6i7je08?key=185b808aff3bdc6eb57bbe768783b651",
            "https://euizhltcd6ih.com/q2fdbi10y?key=4a1d48595a9107cc8c177afca2e53a2c",
            "https://euizhltcd6ih.com/q38ihgpz?key=6cbdbcb2a159ca2d2b7d69c31b1a4c4e",
            "https://euizhltcd6ih.com/q84h9x9u?key=092b6b2b30509bca79ad5c355cf9a394",
            "https://euizhltcd6ih.com/q950z1nfdx?key=68d75bf111d134c242f7d559aa164416",
            "https://euizhltcd6ih.com/qa9rzp7m?key=1f8370948ceb000b97b4f1e009e77f5a",
            "https://euizhltcd6ih.com/qai0m5u0?key=dca01ed6b307c341642db298940056a8",
            "https://euizhltcd6ih.com/qcyu4c2p4?key=e5d7644e6c6b0769a9888e339509af58",
            "https://euizhltcd6ih.com/qicu4mkxz?key=eb2fd0ebca80169dc99b618dce8f18bd",
            "https://euizhltcd6ih.com/qmharnzzb?key=fb6c301a353194d4ab95cdd73136d4d9",
            "https://euizhltcd6ih.com/qphj6zec?key=de18bfa60093deed77fb384a922d2eb3",
            "https://euizhltcd6ih.com/qqt0baj9e6?key=743e9844676664ac5c03c904d66efb63",
            "https://euizhltcd6ih.com/qs1vbfg3?key=31b0feb29b15e51de8c97f636ec42a12",
            "https://euizhltcd6ih.com/qucktvy1p3?key=36cee096e0bcfbc0ef49d42d55ef4f1f",
            "https://euizhltcd6ih.com/quuz0epef?key=00119e85248c31d0371f0afb05ac97d4",
            "https://euizhltcd6ih.com/r0tq6u0ndz?key=1f86ae9dbed46286ca8f89dc667c0ff1",
            "https://euizhltcd6ih.com/r1spwx78?key=712d3a261a84b4fe34eb2e48af8b8fa6",
            "https://euizhltcd6ih.com/r2mhdueuw1?key=66c7bee0bbfeb54233d89dce18bc309d",
            "https://euizhltcd6ih.com/r3gry8950?key=200973c3abb2b9b47f5354631d0376d1",
            "https://euizhltcd6ih.com/r4kdw4qjip?key=bd3f902154d0d223470c3ae1448c06b8",
            "https://euizhltcd6ih.com/r4vt5u502?key=fd62b440372d3d38923da3ca154f152b",
            "https://euizhltcd6ih.com/r7sx8wry?key=8a64ce49b6372cd1d5e26b0ac9e80d08",
            "https://euizhltcd6ih.com/reg5v5yc0u?key=08593f74bb5136aa73314db07c0c0a7c",
            "https://euizhltcd6ih.com/rjgpiwdn?key=73a0465030c7973dc1aaeb75a32b33e1",
            "https://euizhltcd6ih.com/rkai5j358?key=6acd5659f50713a01c085d18351c06b7",
            "https://euizhltcd6ih.com/rm0r99esr?key=64bad855e0b03811c92dafddb252595b",
            "https://euizhltcd6ih.com/rn1gyfbea?key=2d68f43bc7dcdd541cb00cf362acf27d",
            "https://euizhltcd6ih.com/rn531xxc?key=e337717112cd2fa9b031c9589ee9e777",
            "https://euizhltcd6ih.com/rpi6tu7s4h?key=bc8735d33b52f01cd8361d458b78db50",
            "https://euizhltcd6ih.com/rqw2yrac?key=803aed1933b7cf0c5095e76a9e957349",
            "https://euizhltcd6ih.com/ruy651yfm?key=317b3c5caf55eef1dd22593099465fa1",
            "https://euizhltcd6ih.com/rv06r5smbb?key=886504093359911368c3b343cd9ffb6c",
            "https://euizhltcd6ih.com/rwa5vx3qn?key=38ebd4d1af2a554e0c30cd12ef58dafc",
            "https://euizhltcd6ih.com/rwjx98v4?key=878b976aa0be0a794bf2bbdf4b7038a9",
            "https://euizhltcd6ih.com/rxm6ta8d?key=b1dc2f2ed82cc746f4159cbd0f38f043",
            "https://euizhltcd6ih.com/rxug9z4v?key=7cd9c28320ed9c255f4a8e419e44a9d7",
            "https://euizhltcd6ih.com/rypq1bua9?key=0c1697cf9a9a0f298e946c9a14806aed",
            "https://euizhltcd6ih.com/rzmg1xh2?key=2d7645eb18afe5b447f36390e0dd6d13",
            "https://euizhltcd6ih.com/s1zfust2ut?key=20ceb3b1fdb12d886104288ff52061f4",
            "https://euizhltcd6ih.com/s30wt79f?key=1241c305c8e25873200031bf5a1e3916",
            "https://euizhltcd6ih.com/s33udsm1s?key=80909e2f192c6bb32a3b2d924537efc3",
            "https://euizhltcd6ih.com/s44a8rr3?key=49c140140eab1e3b299d0b2c28148319",
            "https://euizhltcd6ih.com/s540bws1ir?key=3bd349039c5bc5e3e6aa0f984e704cef",
            "https://euizhltcd6ih.com/s92urwv6x?key=cf310e7d0e553fb8588f97687b7f0413",
            "https://euizhltcd6ih.com/s9tg1qggdr?key=2d474f0cfc0f4f55ab5a4b62b769e324",
            "https://euizhltcd6ih.com/sa457fb665?key=da42281e5bde50e27d88600a24178d62",
            "https://euizhltcd6ih.com/scvzyzxf?key=dcbce6d31215ed60a70287ee1043f2f1",
            "https://euizhltcd6ih.com/sexfwxib?key=6e0830f31391bd7d3d6361b839a845ee",
            "https://euizhltcd6ih.com/sgb803cgs?key=dc85081eb5f2aaeb1aeb40bd54c49e8f",
            "https://euizhltcd6ih.com/sh2dtj6j1?key=71b40656476d2bbd35b480cc4e0a3acd",
            "https://euizhltcd6ih.com/sj5ihszza?key=061f9e59efe5856caaf9072c0b36673f",
            "https://euizhltcd6ih.com/spswevf78k?key=c2c96d388359843bca09cccc0ae4030c",
            "https://euizhltcd6ih.com/sscjnfed?key=65040735ad0e27d4afcc3785c295aad5",
            "https://euizhltcd6ih.com/sv0b26r511?key=5da4e952ac82d100f58e97aa67c98ed7",
            "https://euizhltcd6ih.com/svzdmj7qzq?key=cabf306d3cfa1623e70cb8f16c49a0a1",
            "https://euizhltcd6ih.com/szunuqd9?key=6e17e33d45b356cc5df27674fafa045c",
            "https://euizhltcd6ih.com/t7ga864n?key=9c333191691422ffcca06b654a014fd3",
            "https://euizhltcd6ih.com/t8zqz6te?key=80c53e200a0142e6c86d1b1ad89ca255",
            "https://euizhltcd6ih.com/taq3063p?key=fbdcddf98e3cefe2e2535e35b26c37cd",
            "https://euizhltcd6ih.com/tdmp06078?key=a5c510dbbbb380443c84b6ffdc5c609e",
            "https://euizhltcd6ih.com/tehpdipu?key=a9938f0df5aed4c61d02e2dfb27ea7b2",
            "https://euizhltcd6ih.com/temfcvrxg9?key=6d97a837efa064f7dd6f5a2941d27db7",
            "https://euizhltcd6ih.com/tfzk8yg5?key=aa3a15907c635576380b3fab03c5b60a",
            "https://euizhltcd6ih.com/tjnnvqtru?key=56dd47a4e89080ac63a6848024ff4083",
            "https://euizhltcd6ih.com/tpdvx8g38?key=8c0f5f3c68f8ac6c10145684b2c6c6f5",
            "https://euizhltcd6ih.com/tryjgegkwk?key=3bda418b00b5e9f34b648fc2b27959d6",
            "https://euizhltcd6ih.com/ts50bvyuh?key=427456b7e21240221ffda373e3d422c7",
            "https://euizhltcd6ih.com/ttmbeyix0?key=7ed455446a5c172622461cb9ba94fc7e",
            "https://euizhltcd6ih.com/ttqfupa1?key=eff1e5bc61983832772f7547fda0ea9d",
            "https://euizhltcd6ih.com/ttzx37ags?key=05e0ed83aca1536fac29a32944fd9074",
            "https://euizhltcd6ih.com/tusjmhff3?key=cdd352cfa7c6e9cb58cfabfb6b1dd5b5",
            "https://euizhltcd6ih.com/tyi1nq118?key=af90e35c6f2322ce422bfbca05a82909",
            "https://euizhltcd6ih.com/u1unfnzr?key=70ecdd77d3395f6e9610f0813fda70cd",
            "https://euizhltcd6ih.com/u4eraiygag?key=3bc0dc8c5e74b52b4f94116e921545d8",
            "https://euizhltcd6ih.com/u73y265vh?key=5d6575918579d85b602b223a199c7664",
            "https://euizhltcd6ih.com/u75qe5ra7p?key=25b8cd417569e5946471c18c790ba4a4",
            "https://euizhltcd6ih.com/u8hvnxuaz3?key=4d9f0c920a79a2005a9fa0e164edb35b",
            "https://euizhltcd6ih.com/uaj20hvxuz?key=1af408901a7c3d13337f31575eb81851",
            "https://euizhltcd6ih.com/uj22dhib?key=c3436688472cb014b10fe06738b1c9d4",
            "https://euizhltcd6ih.com/unph6u2w2?key=e46e231f9be29d0c9bb9430de40be301",
            "https://euizhltcd6ih.com/uqdnngjk?key=196773a144da3868ea35c792b555fc31",
            "https://euizhltcd6ih.com/uqiarbt26i?key=1878c69d39224b9caa6ed3c64e61d6b5",
            "https://euizhltcd6ih.com/uskabimbw?key=fdb8570de7732bbdefbc6722b05a2dcd",
            "https://euizhltcd6ih.com/uw7svkq68?key=ccadaa86aaf19a6cb5757eabec8820d7",
            "https://euizhltcd6ih.com/v25y43198?key=2fd2eb3ac65530dcb033326c87883cb5",
            "https://euizhltcd6ih.com/v6pbwauiy?key=430e643e5caea72f26711f74f10a0383",
            "https://euizhltcd6ih.com/vawcu26ut?key=64fef56d9ebf22220fce2618d2a63d29",
            "https://euizhltcd6ih.com/vfk3xxw6?key=57b83b27ca42122bf18881c4329b5141",
            "https://euizhltcd6ih.com/vn7xzsd3?key=ee7035e6aae2dda464e154c89c89b1ae",
            "https://euizhltcd6ih.com/vnqdhthii?key=847d2bf16dfeb622511d39e34b45302f",
            "https://euizhltcd6ih.com/vny02frsm?key=163ce8788821e13e34dc286294d61090",
            "https://euizhltcd6ih.com/vrb9bvgvad?key=ff062551e412c81535ea4c8a91387185",
            "https://euizhltcd6ih.com/vt3z91eg4g?key=f885f4ab75e3475198024462dcaa5b29",
            "https://euizhltcd6ih.com/vxwmm1zn5?key=93605787ace0a6cb211de931a6f6a65d",
            "https://euizhltcd6ih.com/vxzbfwrz?key=9d4387abacf76a316b1409a31ce6dd7b",
            "https://euizhltcd6ih.com/vzi8g55h29?key=69aaee311e8980fc87bbe4311e20f735",
            "https://euizhltcd6ih.com/w0ei4efk?key=d388ee990565d05e1c6b96b62fadbdd3",
            "https://euizhltcd6ih.com/w1s6zyyhm6?key=c5f9fd1d88ce9fa58b512ea16be49d5b",
            "https://euizhltcd6ih.com/w8h7r3ha?key=ae19a7dc94ea8237fc34cf67383ce70a",
            "https://euizhltcd6ih.com/waava0et?key=b967b1049776227dc801b5ca5a0375f3",
            "https://euizhltcd6ih.com/wbhy4tqe?key=0440e27f7b07ab59d750f5d2cbca344a",
            "https://euizhltcd6ih.com/wdrubt9g?key=0db63f95b4f4c2cc02447c887c341026",
            "https://euizhltcd6ih.com/wexujnf0i3?key=8cecab423c9aaa88949f1010183e1fa9",
            "https://euizhltcd6ih.com/wfc7cbpza4?key=4842d4b68c460d936663a40d1b6e66d7",
            "https://euizhltcd6ih.com/wheux042?key=d875b96cdfaaaaa7d8f064bb6cced5aa",
            "https://euizhltcd6ih.com/wj2237q8?key=906d84768282e108eab15ffd08ce7e21",
            "https://euizhltcd6ih.com/wjx26x2p3?key=f00ab9818335f6ad67c05235ae1bbe52",
            "https://euizhltcd6ih.com/wurv6jhs5m?key=eac125b97fb2868c3a735239ae6ad6b5",
            "https://euizhltcd6ih.com/wy9sf429x?key=1947615dc271c8bafea5bf58de37fab5",
            "https://euizhltcd6ih.com/wzq93d11n?key=df15085c2edeb7093e6458962e3464c3",
            "https://euizhltcd6ih.com/x39c32bsb?key=4ac9afa4703aa9902874d528402838da",
            "https://euizhltcd6ih.com/x8dq5zvzv9?key=0974b47a7cecca70d315c2a683e1f52e",
            "https://euizhltcd6ih.com/xj5tm0ns?key=e838391f32bbc7ef14ff39f601498ce5",
            "https://euizhltcd6ih.com/xku0mvyqc?key=4ed655877d261370e42a7f8435b13f1c",
            "https://euizhltcd6ih.com/xnak0u5a?key=e96350008d047e3d781eb612a926cc1a",
            "https://euizhltcd6ih.com/xuar9cua0d?key=3bb773e062c5178c422c417fae8181b4",
            "https://euizhltcd6ih.com/xvmd61dyt?key=1ddef5758919a53d6792b7dfd57919c1",
            "https://euizhltcd6ih.com/xwvc9f2ea?key=261eab9eb77f6f1a4e3811798fd0f74a",
            "https://euizhltcd6ih.com/xzwan8te?key=59cad77168de7913dba8ef5216773d4e",
            "https://euizhltcd6ih.com/y0f3gnu1cb?key=e9b0e9948c634be277ff3718ce56b41d",
            "https://euizhltcd6ih.com/y1kw1mtdn?key=871b3a588c0fee9b5c8d8ac3a70d4333",
            "https://euizhltcd6ih.com/y28i6x5yx?key=0de495f2f1ba9cff16073e593cfea701",
            "https://euizhltcd6ih.com/y2v5dfmep?key=7fd493b5e557b7d3665261d9be1fba45",
            "https://euizhltcd6ih.com/y37cg2d3?key=0dc57eb8cba5ec6e36007984a0df52ce",
            "https://euizhltcd6ih.com/y4hbv6kp?key=4a310423faf69987a1869271e5b1d5e0",
            "https://euizhltcd6ih.com/y6fuvqq1g?key=cf7e98c23644775c5e6ec0934c5540c6",
            "https://euizhltcd6ih.com/y7ivwsvg?key=4c1d7c5820e882759597e9ae1f9ca452",
            "https://euizhltcd6ih.com/y7tjae0p?key=4b2b676cccdddb8baf973a51f5904bff",
            "https://euizhltcd6ih.com/y81wzmn2?key=0522ed6c52904ec2456b8647fa85be1e",
            "https://euizhltcd6ih.com/y8jttrgm?key=0f6429942eb9e6095fc493eab66ff2b0",
            "https://euizhltcd6ih.com/y8wgtc1pxx?key=908c2edd6f62c066dc62665323949736",
            "https://euizhltcd6ih.com/ya8zan03?key=d25a993917196de3fb51f6e22ca9e5ef",
            "https://euizhltcd6ih.com/yd2hx2igbd?key=290ec73a2d3d492e6499e4d5ea02514e",
            "https://euizhltcd6ih.com/yd476jvg?key=08ffdc68e7851d2de35e09bb251f614e",
            "https://euizhltcd6ih.com/yet13ta01p?key=a49bb9aba404fd671bd758580f581b85",
            "https://euizhltcd6ih.com/yfkyk8vy?key=2ded893e75cd231699f72bf3a0e4bbe9",
            "https://euizhltcd6ih.com/yhu1c3gxux?key=34055d62b6b19b95507a0d8b16db60df",
            "https://euizhltcd6ih.com/yk08xv5x48?key=a660aeade7c92e8abb7c309f64dbf85c",
            "https://euizhltcd6ih.com/yk43pav3c?key=3c9eff0c9fe6811feee1b70a6ab48dcf",
            "https://euizhltcd6ih.com/ymw8xn8vc?key=08b35fbf2c7bd9cb6dbc901b47410da3",
            "https://euizhltcd6ih.com/ypjgi6s509?key=8f0e041bbff607f1be53c0d16e2bdf39",
            "https://euizhltcd6ih.com/ypmna4b9?key=d06668a6a9acb567db3dc199ff20ad69",
            "https://euizhltcd6ih.com/yq8h1y36r7?key=e2c5911f5770da7d6a456778ada037b2",
            "https://euizhltcd6ih.com/ysx9z4h1?key=d054e36303ed7155f7293bbf53673c1d",
            "https://euizhltcd6ih.com/yu9wrmc2n?key=d569c272789b2ee5bc0b0a567d7419d1",
            "https://euizhltcd6ih.com/yx03ykqgd1?key=e625776d4f8aff73f6700b1a9615f481",
            "https://euizhltcd6ih.com/yxbws1ived?key=27dc0541bc3bcddfdba8e9d6eb498fec",
            "https://euizhltcd6ih.com/z1q3bvs01x?key=9689c9140657df25ee3e36a5bd9d198a",
            "https://euizhltcd6ih.com/z1z2cusa9g?key=9bce5ab9a0904b30ef5ab1ab9ed551f7",
            "https://euizhltcd6ih.com/z6w37nm82?key=f8f587b99f5f9daf68c0332c56039ddd",
            "https://euizhltcd6ih.com/z870t7493?key=68213db4b42ec8cff6466190e5254d8f",
            "https://euizhltcd6ih.com/zbn121mu0?key=918efcedff844bc17c6a1f61480bbfbc",
            "https://euizhltcd6ih.com/zcan17i4z?key=8097b60d14a95bbbd9e053611c0df5ac",
            "https://euizhltcd6ih.com/zdq6esfj?key=d75ea079d2e381aea77821a19975bfff",
            "https://euizhltcd6ih.com/zhv3va4w?key=2b1a2f11e1b5ab1103a786e0af6c947a",
            "https://euizhltcd6ih.com/zispbxgfx?key=8e96659e514b94263310f5cec85a96e2",
            "https://euizhltcd6ih.com/zj31kf23z?key=095ca7c90e2d9b8b1ccee245379cd220",
            "https://euizhltcd6ih.com/zn7t52nn?key=9f39efedfe8e407dcf489375c40a2a13",
            "https://euizhltcd6ih.com/znaiius8t?key=b5829e1878ccb42a9a80b2c2de275bfc",
            "https://euizhltcd6ih.com/zpx5njuc5?key=fb706151ecf68b6aa2b1804bcba4625c",
            "https://euizhltcd6ih.com/zqgj52mbd8?key=fc5a375683a95c900844db978c5603f6",
            "https://euizhltcd6ih.com/zrc2ktrm?key=5a7054d5ab1adb0e2188652fbe1cfc26",
            "https://euizhltcd6ih.com/zrxsjr414?key=4762ecf2a153cdfeaeac068c1e1ea790",
            "https://euizhltcd6ih.com/zw2afkqcg2?key=98f78edef74d74794f3e56999ca48a54",
            "https://euizhltcd6ih.com/zwgx1c9n?key=1afc4a7227b5db91b1752b896a8b05fb",
            "https://euizhltcd6ih.com/zy9dhpcp1?key=5770d028f321ffa566979fb9af667c27",
            "https://jc32arlvqpv8.com/ambsxni391?key=d07b062bbb53b21eda079cf420406a07",
            "https://jc32arlvqpv8.com/aqfm0qa6?key=0af8b37da7aeada6248295d4672e08be",
            "https://jc32arlvqpv8.com/av8huse0?key=8139b2cb5fce34e957fa7f36781596b1",
            "https://jc32arlvqpv8.com/azrwcevz?key=e998f26cd01c793644c13a0342e86a42",
            "https://jc32arlvqpv8.com/bfpn2ciwgx?key=7b9a836463774b6d0453a803b24de97f",
            "https://jc32arlvqpv8.com/bsq0j6jtn9?key=41f85eb499541049519d388786d77e30",
            "https://jc32arlvqpv8.com/bv9amxxs19?key=95449fd0f4ce5ef3546aafac5fc45d77",
            "https://jc32arlvqpv8.com/bwy9vth1i?key=a71ade8838296d86abf7d8f6057ab1f0",
            "https://jc32arlvqpv8.com/c926qgfj?key=d0a7ea6f1230ecb7308b74c47a5af2ed",
            "https://jc32arlvqpv8.com/cdpe03gy?key=8e08f4865c2f51aa4a3a55d75137f609",
            "https://jc32arlvqpv8.com/cfz32nexe?key=0a92265cc6bbd244967c05e5dcd6fdee",
            "https://jc32arlvqpv8.com/cmqavqce07?key=9738cacc26a6653e8023c6d823f087d0",
            "https://jc32arlvqpv8.com/ddmgdzrau2?key=ba530798c1cf1d98a5eceab33829dc00",
            "https://jc32arlvqpv8.com/dkfauym9q?key=da92d8a9b2bc2c4d89f491bc0c56c260",
            "https://jc32arlvqpv8.com/dkhtady0?key=5e62b342c7fcb584706d95defa8d31fe",
            "https://jc32arlvqpv8.com/dz3exj36?key=76d01842c3b642693ce225e201bbbcbc",
            "https://jc32arlvqpv8.com/dztqqe3y?key=d1aae5cf50bab02b4881b771362baf00",
            "https://jc32arlvqpv8.com/eatwc3p13j?key=be71206dfd7ccb2d34131423759a8f0c",
            "https://jc32arlvqpv8.com/ebbdyya0f5?key=59247fa22de951d8dc15f0efaa2bed57",
            "https://jc32arlvqpv8.com/emr8bibe?key=377f9772ee4a367d1bb23845cb0eac57",
            "https://jc32arlvqpv8.com/eqipcmw7q?key=79663e94521fe13a08ceed6314cc11bf",
            "https://jc32arlvqpv8.com/equ0gh9n33?key=b3261a4f5ef9cfa0ccad50834f82c12c",
            "https://jc32arlvqpv8.com/euid6835gr?key=372022bd87a44f59fd855e87e40ce569",
            "https://jc32arlvqpv8.com/febkqdwq69?key=85936785030b9494c1edaf06c2488cc3",
            "https://jc32arlvqpv8.com/fg1c5daup?key=c0d27bdfa80cd4632ef03417e0c9e35b",
            "https://jc32arlvqpv8.com/fp4wthtx2?key=2817bf1f2254c82807a289c606faec6f",
            "https://jc32arlvqpv8.com/gbvn3b8qup?key=1b277bcf074c36ecd91894fd8ab0406e",
            "https://jc32arlvqpv8.com/gcf5vvqjeq?key=20598c887a5aa1721439416618246cda",
            "https://jc32arlvqpv8.com/gcpynm0z?key=5e606ee1879a71001cc9170ac5d94695",
            "https://jc32arlvqpv8.com/ghrv5waz?key=6f6577363488abc80ff9e747217aed93",
            "https://jc32arlvqpv8.com/gjczxi2jam?key=8124b2a0247265d5f1eff2f27b665b09",
            "https://jc32arlvqpv8.com/gkpjy3cy?key=a7fe804ea952f73be83bc9a01f78805b",
            "https://jc32arlvqpv8.com/hdngw3tr?key=aae85d7c1740a8bc0748e6f360fe1622",
            "https://jc32arlvqpv8.com/hiix5qceqf?key=525a6d02350ed82356aa34c6cf538816",
            "https://jc32arlvqpv8.com/hm9631wr?key=a4c01251a56d486ff15fcc32d7786fb2",
            "https://jc32arlvqpv8.com/hupc92ms?key=68c61fece30e1ea271dc5d76f89b4b6f",
            "https://jc32arlvqpv8.com/i0c8xt2dcf?key=a31f28b2f524dbff1c9787a8e42d3bfa",
            "https://jc32arlvqpv8.com/iadd416v?key=d4d6ce432756990b54b053d7c1834b02",
            "https://jc32arlvqpv8.com/icawegy7r?key=55544a7937b3790d46c81f64980cf489",
            "https://jc32arlvqpv8.com/ie2rgx6y?key=ff45a64b558a6fb586349a7c8f5d3e16",
            "https://jc32arlvqpv8.com/iwg8xwah9?key=b559a8298700613a9e5af87385e8bdb0",
            "https://jc32arlvqpv8.com/j1nziafzd2?key=56827d4886d80c4cfa8cb582053a49e1",
            "https://jc32arlvqpv8.com/j1q3yx4y?key=52e2fef14d3583e713d8d819f83c3560",
            "https://jc32arlvqpv8.com/j7gtiy3y9f?key=af1823410035cd95a080d259f69e1b4d",
            "https://jc32arlvqpv8.com/j8w7tsch2n?key=00052f38e76e3c3c965a2baadfeb6f06",
            "https://jc32arlvqpv8.com/jf4vgsdz?key=0637016d062065ea91d708f606d58687",
            "https://jc32arlvqpv8.com/jjja3pfvj?key=922bdc164faada76fe30b937edae4ec5",
            "https://jc32arlvqpv8.com/jmjjf2tpye?key=0bb522da23edc62d994ee6cb999793eb",
            "https://jc32arlvqpv8.com/jwmmqu7v8n?key=aebf234d8d881928d809857ba3f96787",
            "https://jc32arlvqpv8.com/jx19fu0m?key=22a4a39db8af8a2cb8e5be9201adfd63",
            "https://jc32arlvqpv8.com/jy2sk5n95?key=9972d8c3e71383345fc6a17fa042c45b",
            "https://jc32arlvqpv8.com/jyvwfepc?key=d95ad22440034a8a274a12cc5725e40d",
            "https://jc32arlvqpv8.com/ka5pzmvmt7?key=07bcfd2fb96d63250aa9181aeddf361d",
            "https://jc32arlvqpv8.com/kwmipxzd?key=180c9c812bad15341633e44333358fa4",
            "https://jc32arlvqpv8.com/kzbhstex6?key=d6cccd06677d7f6b489811bb4c5fd02c",
            "https://jc32arlvqpv8.com/m5820mup?key=e65b0177713313e95c2ccbdc92d8b583",
            "https://jc32arlvqpv8.com/m6kzdyei4?key=1b985c34b6bccc8c195c45a6ad34517e",
            "https://jc32arlvqpv8.com/mjudxaswsb?key=c00d99f2dc8c1883cf8ddc8540c9f4fa",
            "https://jc32arlvqpv8.com/mkj0qb3eis?key=8b718ea3534b23805b3c05bb493dfc5f",
            "https://jc32arlvqpv8.com/msgbv3pqyt?key=15e0417eaacf36557f11901655117276",
            "https://jc32arlvqpv8.com/mun6envc?key=6908859476bfecf92c696dd94169c3fe",
            "https://jc32arlvqpv8.com/mxgquc9r?key=2d6a623cb7310da834a22eaf985663d2",
            "https://jc32arlvqpv8.com/n7feff0wf?key=676bf36563bcf5478bd7cbfaa927098c",
            "https://jc32arlvqpv8.com/nii7r0bj9z?key=fe084bcef6a933a894ede04ae5ea5377",
            "https://jc32arlvqpv8.com/nty69vcf7a?key=bc29f794ce091daed4af62f467da60f1",
            "https://jc32arlvqpv8.com/ny2xmpd1j9?key=ed904ed4262c76d3f9decfc93f17c691",
            "https://jc32arlvqpv8.com/ny60g8qv4k?key=1a25d3d14dd5e77ff474bd3321ed6fe1",
            "https://jc32arlvqpv8.com/pbixc3cg?key=6a99c79e1ff45481ae35dc74f1caaa24",
            "https://jc32arlvqpv8.com/pw7jym84?key=dbf268fa9c5d50af894452355800b7f9",
            "https://jc32arlvqpv8.com/q17eymr7g?key=4f42d09727b5e5d83467e46ab57b670d",
            "https://jc32arlvqpv8.com/r0hzxy2u3c?key=2f91fe619c5a8544bab657d9e188e00a",
            "https://jc32arlvqpv8.com/r0qkt6xw61?key=c7fdd1f27668d5d1afafedcfa798c9c6",
            "https://jc32arlvqpv8.com/r1nvnphj?key=08f5096ff57b4e1e857fdd35d28e3b64",
            "https://jc32arlvqpv8.com/r27jr838i6?key=168105890ab8ecf2547239eed3288339",
            "https://jc32arlvqpv8.com/rd3t6ad8m?key=40576f83105bd005d6f465f4182c841a",
            "https://jc32arlvqpv8.com/rnbqpjs1h?key=c1767c1a9593845975b9279ea85e3080",
            "https://jc32arlvqpv8.com/s4r4c50dzq?key=18facff7b6bd75e7d440ee4af914aaf9",
            "https://jc32arlvqpv8.com/s7meuf02b?key=8908ca478e3190dbf0337b1f9b9ba96a",
            "https://jc32arlvqpv8.com/sbsqkx14?key=55620dfa1f3a08cd494367b9cc229365",
            "https://jc32arlvqpv8.com/t128di34?key=00fd373d2e067780068aba0b49b83337",
            "https://jc32arlvqpv8.com/t43gusz3h?key=1803b70747f5843db3b50f0da78aa68b",
            "https://jc32arlvqpv8.com/t6ac9a4m6?key=be67308f399c44bde2e26b8c6aabeb7c",
            "https://jc32arlvqpv8.com/thygp8czw?key=3a5f39bd4fcd406006675c95b6a1b169",
            "https://jc32arlvqpv8.com/tjmtjkfjw?key=13520f331e7c464106f90ed408620fea",
            "https://jc32arlvqpv8.com/tnhbjs2p7k?key=e058d5834a48dd39483244e896d42bb5",
            "https://jc32arlvqpv8.com/tuvbx0fph5?key=4474b7af947e3521a95c0e29b13a3281",
            "https://jc32arlvqpv8.com/tvxfxhnd?key=3775d45e78a37d295926d62df993e54e",
            "https://jc32arlvqpv8.com/twr53sjuu?key=1cfed387d0d4f068bc5de253831e1059",
            "https://jc32arlvqpv8.com/twuyzavm?key=a1b44e47a3f2ee07914ca990cde28b2c",
            "https://jc32arlvqpv8.com/u3b4rk1xkr?key=20f30ae0f102a9cb433bf41f578437c1",
            "https://jc32arlvqpv8.com/u3yaiihv?key=c6a58c519ee2e6e253f10eecc3b0f217",
            "https://jc32arlvqpv8.com/u4677xkb?key=05ba21a47de910224c66ca12b4c8f9a5",
            "https://jc32arlvqpv8.com/u8gvtz23?key=25bbd1dc60dd23cdfe1f93c2eeb960db",
            "https://jc32arlvqpv8.com/up0dvhigy1?key=17552183ae896197330969a5e64b6286",
            "https://jc32arlvqpv8.com/utvyt092n?key=51d61b2a1c85cde5d2f2e126f58be132",
            "https://jc32arlvqpv8.com/uufj3d9au?key=645580972fb71f64e1434f39f46aaefd",
            "https://jc32arlvqpv8.com/uzw3g4ig?key=89ab8d5e786a0f9b9b454ce266394f2e",
            "https://jc32arlvqpv8.com/vdeq6cwdn?key=bf764cf2f1acdead9951a0794ca37874",
            "https://jc32arlvqpv8.com/vn805t5wpq?key=4dae7d99f47fc210c1bd02d1ad496459",
            "https://jc32arlvqpv8.com/vnyup4rjzk?key=ed7d3d88203fd24900e2b6674f9faa4a",
            "https://jc32arlvqpv8.com/vy5z3e1rx?key=7a0fbaff893c71fae5b834b0800d78f0",
            "https://jc32arlvqpv8.com/vyvj72qf9j?key=0d8cab24e3e4955ebf1d0f23858f9e86",
            "https://jc32arlvqpv8.com/w3ekjj96ib?key=f4ed0bfc136342d330fc61a65c809514",
            "https://jc32arlvqpv8.com/w3g2c30c?key=933bc66e9a52b21f6b8fa1e99538d3fe",
            "https://jc32arlvqpv8.com/w64nb5yht?key=c82679beea5b644f28ca5eb64f32da2c",
            "https://jc32arlvqpv8.com/warfxk2nhz?key=d421ad21ecbbbc8bc0d1d832555b93ca",
            "https://jc32arlvqpv8.com/wbukpu0b?key=0d255fc4f219674e1daadf6f7b19ea3d",
            "https://jc32arlvqpv8.com/wmbh1ee0r?key=09d2bbf0c9678ba48f0526c2e11b464c",
            "https://jc32arlvqpv8.com/wrsb8m55?key=12f27ec0f4dd0db89cbf4553bd20216e",
            "https://jc32arlvqpv8.com/x541bs3qj?key=59f323349c5ed31a047ed38b4e7098da",
            "https://jc32arlvqpv8.com/x67xtafj3?key=550f8f44a75a8c10df824ea6e81d374d",
            "https://jc32arlvqpv8.com/xe1z6sy21?key=f1088b512897b51e5614579c61cc538d",
            "https://jc32arlvqpv8.com/xtdigmpci?key=dc553d4e52287eb28b475ba8d1e73f56",
            "https://jc32arlvqpv8.com/yigkvjxtv?key=169115c55e742404deacc140dbf8cb56",
            "https://jc32arlvqpv8.com/yr05x6ud?key=797b9a269f9da03aece87f00a182c01a",
            "https://jc32arlvqpv8.com/yvuamfqj?key=62342d0790cff46c389a11a53711f65a",
            "https://jc32arlvqpv8.com/yxat75y6?key=1f30da0eeeecd32f491691c8b61c0406",
            "https://jc32arlvqpv8.com/z57y1vcr?key=ad69c775dd4bb91ff2bfd2d470965cfc",
            "https://jc32arlvqpv8.com/z5xvbiu1y?key=ded78cccae4af75ee413460a6f82e3c1",
            "https://jc32arlvqpv8.com/zdp11x3y0p?key=1e840fcb2df7f691e86e505929e6b521",
            "https://jc32arlvqpv8.com/zjkq4g54w?key=e92f6942d241fe934335f6af7e8ff5a5",
            "https://jc32arlvqpv8.com/zs1yn3fe?key=64a9a303e92696f716ab9742336c3ed0",
            "https://jc32arlvqpv8.com/zs2ve0tq?key=0fd5afaaf5ceea2eee31865578d7d5d9",
            "https://jc32arlvqpv8.com/zy1cjquq7?key=131bb62b2eaa2b6bfe310f45b55045ad",
            "https://practicallysacrificestock.com/b2ughqsc?key=e4d471abe0b82cfdf0e8a0ea8b121e2d",
            "https://practicallysacrificestock.com/b37nrku9?key=556430cf77fee7f338b416d819c797b7",
            "https://practicallysacrificestock.com/bi8k4kqbj?key=98ee36c749c7b0ffc39a979d372d6a45",
            "https://practicallysacrificestock.com/brzq6phna?key=b4887ea013eb33feaa1fbcdb8b4e624b",
            "https://practicallysacrificestock.com/cc3g2zhz?key=17e3f282bf1d055159d271e8eeea144f",
            "https://practicallysacrificestock.com/ckh5p3918e?key=b3ba603f2809a46ddc0ac244eb62ba28",
            "https://practicallysacrificestock.com/cqr9satpjg?key=0a1bff81cb32918139629fef24179569",
            "https://practicallysacrificestock.com/d7p5g1by?key=3add04d40885924207f79f3a0d649a80",
            "https://practicallysacrificestock.com/dzbhwrub?key=4ee45dc99c9a52cc40df13d044d72f28",
            "https://practicallysacrificestock.com/eazkd255q?key=09fd3aecdc00588fa8e24f198cbd087e",
            "https://practicallysacrificestock.com/evjws6rp?key=8474a472950d4984f97b27537e81f7e1",
            "https://practicallysacrificestock.com/f3dvg2z8?key=501855bec48d7b521132911471775a1c",
            "https://practicallysacrificestock.com/fnrz8pppdp?key=cf3ad4b2a548428419151d63778569e5",
            "https://practicallysacrificestock.com/gkzv4gemj?key=8be04cb7ac349a4ce46e0af74bf51f25",
            "https://practicallysacrificestock.com/h20qjt9e9c?key=32291ab1d8e84ff36536c6c6970a8ed5",
            "https://practicallysacrificestock.com/hd3i2qsfxy?key=954a93123d9aa832b1544c3f45d22d2d",
            "https://practicallysacrificestock.com/hgfzx03d1s?key=1ccdf55188774ad507817aae79bf1a69",
            "https://practicallysacrificestock.com/hqqkackmcd?key=60f97044a13bc2cb9a3dea7a71a6371c",
            "https://practicallysacrificestock.com/hyexw9ppq?key=e2a5c1c1de2eeee9d635c5b605f2f0b8",
            "https://practicallysacrificestock.com/ib0d1dkd6?key=02dd5cdf6c9086779fcdb68d3775debe",
            "https://practicallysacrificestock.com/j260dwie?key=499a2ec15c1d7754c8fd45628e8abbed",
            "https://practicallysacrificestock.com/je3d57ed?key=f955ceaf2e9d29d66cf8b9d14998868e",
            "https://practicallysacrificestock.com/jei5qkhy6?key=ca7908786e595cb3da07ae7459d83446",
            "https://practicallysacrificestock.com/k4petmc3t?key=8786fe5681400c5c8a5ba3b5bc94c784",
            "https://practicallysacrificestock.com/kqx3ched?key=533c6f6b28c879db2c051180c067c0a5",
            "https://practicallysacrificestock.com/mpd0kxy2me?key=60f4f1f8de8d514b3976d9dd77e24c33",
            "https://practicallysacrificestock.com/mxajuprvc?key=e16e2632bfe1b5ec4a842a62ead81c22",
            "https://practicallysacrificestock.com/n4fh1i4ag0?key=cf790f759f20bd80f16f9cacb131d5d8",
            "https://practicallysacrificestock.com/n8m4xgj7yi?key=5d4607283e34208c73b6cc13168cdc10",
            "https://practicallysacrificestock.com/p9rcskhf3?key=f818228733e8e3e9c149bfc7a8525958",
            "https://practicallysacrificestock.com/qy1c4sraj?key=5d1acdf921e93dbb62486a627ad1d141",
            "https://practicallysacrificestock.com/qz6j8i3eh?key=b0adab845ad4b251417f6f5e6cddbf9f",
            "https://practicallysacrificestock.com/r87ikvhdp?key=9adab6a4db6ca8b9190dd3b2b0ae599f",
            "https://practicallysacrificestock.com/rf3hj3wa?key=a6fbab40c2a0b18472a8efcfb17bba46",
            "https://practicallysacrificestock.com/rijwdwn2?key=309f9c58c8a9a3d0fad1f2d44d242f8e",
            "https://practicallysacrificestock.com/rrw3guz3v?key=4916af0c7f11298b6ca4eca2447542f6",
            "https://practicallysacrificestock.com/rvkccwmgv?key=fac122eaec207e61dc0c492ef5c200b4",
            "https://practicallysacrificestock.com/rzru0zj9?key=0dffad3f09d73a94ce093266e9cb3842",
            "https://practicallysacrificestock.com/s1h933z2?key=7973d4cd4ae0f55477dd84d91de5859e",
            "https://practicallysacrificestock.com/sjc9ta2te9?key=5c9e44dd9997b697789c81ba0f9b78d0",
            "https://practicallysacrificestock.com/suum95c9i5?key=37c6d3f84c3d6bedf036bc3c493dcb24",
            "https://practicallysacrificestock.com/tcmmetem1?key=af0d4a9dc8fd20707ab6d39127b9d15d",
            "https://practicallysacrificestock.com/tvq1i6q99t?key=7d2ab7ef36efce4cbdabb2f98c11092b",
            "https://practicallysacrificestock.com/tz07feby?key=b0ae871d1325158f414e53d9fdf695cb",
            "https://practicallysacrificestock.com/unc10cnvw?key=38882bc4722ee196a5f5b8be9c8ad306",
            "https://practicallysacrificestock.com/uu7iqk2qw?key=fe87dd3bf9ff68b702549362d10c7b46",
            "https://practicallysacrificestock.com/uvdbb8en?key=3763e5320c373f2ab584ee712f55b9e8",
            "https://practicallysacrificestock.com/v1657scsg?key=fb910614ea5badbbf23d71dca65d0d8a",
            "https://practicallysacrificestock.com/wasa6rc6?key=1e65b2b48f4fb465c4eeafbe1f7efa97",
            "https://practicallysacrificestock.com/wnr13weg?key=cdb3931478f3b6cd7287d70e15684485",
            "https://practicallysacrificestock.com/x9fr16cu?key=3c4376fed07694705f0b275dc01c1b75",
            "https://practicallysacrificestock.com/y055n5by9?key=8f123a9f1ca77c35b1220fb33fb0dcf6",
            "https://practicallysacrificestock.com/ze4nkwi2?key=38e8be11c2c84c92c375d272033cc354",
            "https://practicallysacrificestock.com/zgs4ygkhbd?key=94a0b888f06d38015288bf4e7114abe8",
            "https://practicallysacrificestock.com/zy5w6yrs3j?key=aeb98671b987527aba045eb44ef688d2",
            "https://practicallysacrificestock.com/zyymidyw0?key=43f62457a40610fc9998bafc5d2075f2",
            "https://qoaaa.com/7066c7c5a8/95d281788b/?placementName=default",
            "https://qoaaa.com/bb0ede6ad4/9ca5a236c1/?placementName=default",
            "https://slahpxqb6wto.com/a3crf5hcdr?key=4a5694d302014f1fb12dc909313006d5",
            "https://slahpxqb6wto.com/ad3tz7ch6w?key=fb350f8f1349300c3f05e80e3cbf84f4",
            "https://slahpxqb6wto.com/ae7pridfn?key=2d1eeb0ea6f30687dc70a5d94734b49d",
            "https://slahpxqb6wto.com/ak48evehby?key=dc2439b492d041977c0ca5c84a603623",
            "https://slahpxqb6wto.com/ast33jvt?key=6463cbe473d63ab8b50021c47547f621",
            "https://slahpxqb6wto.com/asx92z1r0?key=e23f8c62138f622c9cc4818f33ae37ac",
            "https://slahpxqb6wto.com/ava2bdd3h?key=d9828ce2561f3e9ad5c1d7d9fae0e042",
            "https://slahpxqb6wto.com/ax8cs9qd76?key=8d96606a08ec3e99592d7cd34b098d71",
            "https://slahpxqb6wto.com/b2qde5nzz?key=07cff17b7d58b0b8914ef6f58568d79e",
            "https://slahpxqb6wto.com/bda8i2bd0?key=d55606f9f50b3bc16c19ca0d572d3c0f",
            "https://slahpxqb6wto.com/bewykswd2?key=53d4efb601473466f7e00e541a5240c0",
            "https://slahpxqb6wto.com/bht0fz0v?key=5f59b8a58c64c95d96641a5ca6b8d533",
            "https://slahpxqb6wto.com/brichh2z4k?key=41b3703d74b907548c3e45c98b239291",
            "https://slahpxqb6wto.com/buk3xxwmi3?key=67222f5c921fa7f441b47e68a6f9f307",
            "https://slahpxqb6wto.com/c7pp77mp?key=755900e93fd9904469d0d6a38461a7d0",
            "https://slahpxqb6wto.com/chci0vz8?key=4789f94dfba3ed7475440f2ad8285ae8",
            "https://slahpxqb6wto.com/cirx2f56s4?key=4b95d5817ee478e818e6202a50c12d86",
            "https://slahpxqb6wto.com/cq5fznrc1?key=189775571daf6053bf2f611ff07a7fce",
            "https://slahpxqb6wto.com/ctewgy01?key=cc2f4962b17357055beac1fbe9bd6514",
            "https://slahpxqb6wto.com/cz78dee78?key=c5bec57039332c9712f70da172f941ee",
            "https://slahpxqb6wto.com/cz7yvcqfn4?key=3a0b1fd71a9be8322e91eb14c50d771c",
            "https://slahpxqb6wto.com/d3i3mfnzc1?key=5cfdec634b4843096797c74d0ea1a683",
            "https://slahpxqb6wto.com/d91p2gyf?key=b93cc6d883f2b0250754ad019e153439",
            "https://slahpxqb6wto.com/ddxxi3jrc7?key=802d8c9f88d42d2290ab306f10b7f874",
            "https://slahpxqb6wto.com/de4k8hpqqz?key=4b9656053ef913c5d69ccf848f88b1ff",
            "https://slahpxqb6wto.com/disihn9p7?key=8a79af88c79bb00417c0ddef9c4489e2",
            "https://slahpxqb6wto.com/djydb9ks?key=d66cdeea54c8f96568b5ce8b0fe7962e",
            "https://slahpxqb6wto.com/dx0fgzjr?key=9f6ca2a752053a49483177112ae231ba",
            "https://slahpxqb6wto.com/e0yz6gz2r4?key=b3361a57334437da1978da5557de2ca9",
            "https://slahpxqb6wto.com/e37qnkif7?key=84810396cc009bd0162419341f7b1b73",
            "https://slahpxqb6wto.com/ei2aadzs?key=39dde21ba3b92420c33b69c96e1f1f54",
            "https://slahpxqb6wto.com/eqj2iir6a?key=ef8e4afd379af09c997226c5669c4b0d",
            "https://slahpxqb6wto.com/es94ykvx?key=4a046b5ef257e9deff7a90fa7280a755",
            "https://slahpxqb6wto.com/eyx2442c?key=93ef8df5f851c01533bde41211de3fea",
            "https://slahpxqb6wto.com/f1h8r3hxvv?key=52075fecb7870ab24592567b79e63638",
            "https://slahpxqb6wto.com/fdxd5nyk3?key=a05354a9e7b8d0eabed39d780cfc32d7",
            "https://slahpxqb6wto.com/fnzk6d4fq?key=b197f4507e81dd33ba2d91fae899068f",
            "https://slahpxqb6wto.com/g042g11s?key=04f7cec8dd2ecb73902508a5f1d40043",
            "https://slahpxqb6wto.com/g25wt85ih5?key=b42cd02f10e44894992a19a59b9266cd",
            "https://slahpxqb6wto.com/giqddjp4?key=069a98832aaa7c1605267732caf10e4c",
            "https://slahpxqb6wto.com/gpeidtgh3?key=7f731ba6ffaac56de0e54d6d68a87952",
            "https://slahpxqb6wto.com/h4c2z6qcd?key=3a6983e37498901a6646dd63978f9b71",
            "https://slahpxqb6wto.com/haq3ep8m?key=3ec9d610ae3fea2b53d631acf9366b02",
            "https://slahpxqb6wto.com/hn7vjuiw?key=6657cb125fad29a54eb3bfa52b695b81",
            "https://slahpxqb6wto.com/hwrup98urq?key=269c88cf78493a79ab3cf0dc8f41fa4c",
            "https://slahpxqb6wto.com/ig6xzn1at?key=d9724104fa7489e255311ed25101ce6f",
            "https://slahpxqb6wto.com/inqzkuy9nq?key=141096b346d9a1fa5a25fc565127d32b",
            "https://slahpxqb6wto.com/ip60tcpi?key=471831ee8bf154600782f3af09072a14",
            "https://slahpxqb6wto.com/jd2pjbux?key=50242f13a159bf106ed168532a24927b",
            "https://slahpxqb6wto.com/jr3rqgzir?key=369b20ed50e8d1185909b4618f6b4915",
            "https://slahpxqb6wto.com/jw7exp47n?key=f24bf574877b117542c7d6ca01fe8880",
            "https://slahpxqb6wto.com/jxuigiue06?key=38e4382b92b9670a0d6070cca5a95b6f",
            "https://slahpxqb6wto.com/k306r4pt?key=5a1f9b9fc28f22a3dfacb3bac79c6a1b",
            "https://slahpxqb6wto.com/kec6smx1j?key=8cd38b465f97daecca43e171c3734b4e",
            "https://slahpxqb6wto.com/kek0y6a5s?key=1848da6a8d47c2d4253e085d5c9993df",
            "https://slahpxqb6wto.com/kprhi3r2u4?key=0769fb413a7d78bd7dc6f92e82ee89a5",
            "https://slahpxqb6wto.com/m7gsvm50?key=5e1a617f279849d6f308bbed075663f6",
            "https://slahpxqb6wto.com/mkpiq8n7xp?key=30d1cd19b1f1b082e62655d89697c607",
            "https://slahpxqb6wto.com/mvg7vp8r3?key=684210efde9764100097281f31939744",
            "https://slahpxqb6wto.com/mz1s4xrzf?key=6ff028eee450819df8255463934ac4a8",
            "https://slahpxqb6wto.com/n1w1f9v8s?key=7b3999cccb75fc03c25b0c2780ce8982",
            "https://slahpxqb6wto.com/n4iga4n4?key=2d0f7ac921c6884d9c895b61e6377daf",
            "https://slahpxqb6wto.com/nb5ddefxw?key=9d8fc3acd06e232dbfcf7a40cf42c621",
            "https://slahpxqb6wto.com/nirwh0k802?key=b93d710b8c542087b11c2267b4cf67c4",
            "https://slahpxqb6wto.com/njmwpy995q?key=311236a4767412e3cd310702efed9486",
            "https://slahpxqb6wto.com/nu35y50i0?key=e64905d6ec324989dcc20080b8b4f8c7",
            "https://slahpxqb6wto.com/p05cta6gfa?key=7ecbd4940b906149ae5f51e2e260f17d",
            "https://slahpxqb6wto.com/p3d7bhef6?key=9bba477b0388b392868a8595b1700a01",
            "https://slahpxqb6wto.com/pad4jp7f?key=7f296bbf03c2ca904ee3c49e8f73c54b",
            "https://slahpxqb6wto.com/pe2ti5gc?key=f838de27718e32cbc04840358ea213b3",
            "https://slahpxqb6wto.com/psewth1wv?key=608f75d309c548356d7e9c0ae997cd45",
            "https://slahpxqb6wto.com/q8cyfbuf?key=f5a279f2fc3d1cfbac618a22bb74f783",
            "https://slahpxqb6wto.com/qa778bge?key=359c7128069b884b83b90c5f8f4df224",
            "https://slahpxqb6wto.com/qced7xwn5?key=daab088a6740e9c7d67e20df458f9873",
            "https://slahpxqb6wto.com/qpgj5922tw?key=f08a0e6d41b1660a1ce103465ed32fcf",
            "https://slahpxqb6wto.com/qq7mi6y34m?key=ee61cf99b75c28469e49ec33efa05c5a",
            "https://slahpxqb6wto.com/qv2pkbya?key=0ff760ddcb6d073c58302df9a5005b21",
            "https://slahpxqb6wto.com/ra3ynru38k?key=bdfc992106c17b3ea6f8ec7f33bf8243",
            "https://slahpxqb6wto.com/rra37zm4r?key=871965ae63211ee74f2e304a2b704512",
            "https://slahpxqb6wto.com/ruvbwdvxsb?key=6c0027e9c3ab63aa23b06b622f26e698",
            "https://slahpxqb6wto.com/rz3r8tnd3?key=ee7b66c38017c77c63132e5746013c68",
            "https://slahpxqb6wto.com/sjcp3tq4?key=458d412a571e19007b30a8ddddf33296",
            "https://slahpxqb6wto.com/sjhhmz7u?key=b82c0e5d290017d6f618999dae98cf7b",
            "https://slahpxqb6wto.com/snrhtxhbv?key=8543aa43110af58a4df17e29565a1632",
            "https://slahpxqb6wto.com/suuq9sntp?key=e9a16421438fbdae6d90cd9732379b20",
            "https://slahpxqb6wto.com/szj4nt516?key=9e06e1b4a7f9c33be2cd3cee65853162",
            "https://slahpxqb6wto.com/tb36tdyr3p?key=17f93d26c0f1f986c95d48471c7c8fdb",
            "https://slahpxqb6wto.com/tj10hbyc?key=11dac1612e3eed969afad147654a038e",
            "https://slahpxqb6wto.com/tpcffrqg3?key=7d533d7891597861f6017172234b7aa7",
            "https://slahpxqb6wto.com/tuta1m7ekp?key=9ce6862ab81f5076b3e094bc4b3deb1f",
            "https://slahpxqb6wto.com/tvie8ux8gb?key=857ca293b32dc2b360df8e0ea9973efd",
            "https://slahpxqb6wto.com/u5tfwrdv?key=6288dc1e49d35071019c07445324f8c3",
            "https://slahpxqb6wto.com/v6tdasna7?key=f3c2d964cabb328966390c02b7ac60f7",
            "https://slahpxqb6wto.com/v86wcs13?key=c60a9027c3c8732db4e813d374da1fe9",
            "https://slahpxqb6wto.com/vmmuj3wh?key=4f07c9da1d7377eee3c47a4182b2b6d7",
            "https://slahpxqb6wto.com/w2yqi54g?key=3150437f255bfdfccccf18e538bc06fc",
            "https://slahpxqb6wto.com/w55sctn0n6?key=fb8ba1e17dd9b704e5e7545f8c85f245",
            "https://slahpxqb6wto.com/x3g50mrhq?key=9efd4402e9edb7f9d724af495d215681",
            "https://slahpxqb6wto.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",
            "https://slahpxqb6wto.com/xx6wfuepdn?key=a70b59da9971d420afdef45be1089ecc",
            "https://slahpxqb6wto.com/y2zywvx6?key=1913df17f2e84ef9fe8bdcd130e989e7",
            "https://slahpxqb6wto.com/yaqqwswv6n?key=46f18a3e0510c04f96220f87ce27beef",
            "https://slahpxqb6wto.com/z1k9i3hx6j?key=0045da9837f69be018231c4839c6517c",
            "https://slahpxqb6wto.com/z314bipi?key=5429afc311e9aa88fc8ac34130306129",
            "https://slahpxqb6wto.com/zbq2mbztb?key=6e3c970fe7f268cf6fdb4f9f08e71814",
            "https://vdbaa.com/fullpage.php?section=General&pub=745199&ga=g",
            "https://vdbaa.com/fullpage.php?section=General&pub=831371&ga=g",
            "https://www.effectivecpmcontent.com/akh7cfy0s?key=85eedacc6f9080667d09e90ec46bbe78",
            "https://www.effectivecpmcontent.com/e33xmypmu?key=9ccad1e11880c35ce8f03453c7868d04",
            "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
            "https://www.effectivecpmcontent.com/fv8hvkea?key=b2a79e0bab2031163d784183e018aa32",
            "https://www.effectivecpmcontent.com/fy5jvdb6er?key=a2d372865650fa92d16ff8a9aca84c08",
            "https://www.effectivecpmcontent.com/gm3sa354w?key=fd9666fe0dd8b18f02eae1925c6b3b48",
            "https://www.effectivecpmcontent.com/hbjzk9r9?key=aa781bc4972ce6778b29f2c836085e1c",
            "https://www.effectivecpmcontent.com/ian5sddbhn?key=cab0e894642dc56f27b8ada7e2ed25ff",
            "https://www.effectivecpmcontent.com/ib553a7f?key=eb5ff9a09aede3c9193c188e468a6530",
            "https://www.effectivecpmcontent.com/je6mvi5z?key=4f62984fcd8eedeaa3658115e87b1504",
            "https://www.effectivecpmcontent.com/jsqixcjg0?key=b41e77ab60f778820d10d6713f59b408",
            "https://www.effectivecpmcontent.com/m3mt6q24?key=d95d6095e4fac18df6a7a817871e1c41",
            "https://www.effectivecpmcontent.com/mfetaga5jq?key=c03cfedcf6388f911dce716f063a8d5e",
            "https://www.effectivecpmcontent.com/mftq4y8w8?key=6961aac94ba5530f814973783bec98e0",
            "https://www.effectivecpmcontent.com/p62r7t1g?key=3dea117232d8de1e4986fd4b93c1d19e",
            "https://www.effectivecpmcontent.com/rtguqt6gk?key=b5db3a320ba507a92a0512608ad8d10a",
            "https://www.effectivecpmcontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
            "https://www.effectivecpmcontent.com/u5sr9965xe?key=4ef3d7d56a9ae04ad42c891cdff76b7a",
            "https://www.effectivecpmcontent.com/vetxzi7f?key=b4f78df472659153a5792364ea8e96a8",
            "https://www.effectivecpmcontent.com/vfenh94ucy?key=a121d703c5ac1be24e9b541bc305a0eb",
            "https://www.effectivecpmcontent.com/winir4sa?key=0fe7b34f3d199c9ed6a275b17f8ba005",
            "https://www.effectivecpmcontent.com/x75y7kj4?key=39e47f1f02a5fa14e64c6739fa36c698",
            "https://www.effectivecpmcontent.com/ys5zk6m7n?key=26b3c19b88bebcaea8e9706448d758fe",
            "https://www.effectivecpmcontent.com/znn0w3rs?key=59710ef8679cc3ad2e7c10ef26b9eff0",
            "https://www.effectivecpmcontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
            "https://www.safestgatetocontent.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
            "https://www.safestgatetocontent.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
            "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",
            "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",

        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        location.href = randomPage();
    }
}
document.onkeydown = redirectCU;

//anti copas jquery
window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
        (event.ctrlKey && event.shiftKey && event.keyCode == 74) ||
        (event.ctrlKey && event.keyCode == 85) ||
        (event.ctrlKey && event.keyCode == 80)) {
        return false;
    }
});

//Script Redirect Klik Kanan
function redirectKK(e) {
    if (e.which == 3) {
        alert("You right click!");
        var pages = [


            "https://jc32arlvqpv8.com/ny2xmpd1j9?key=ed904ed4262c76d3f9decfc93f17c691",
            "https://euizhltcd6ih.com/bprtc8kg?key=0fd67b7109a0ee79cfdbd80aad7c6959",
            "https://www.effectivecpmcontent.com/mftq4y8w8?key=6961aac94ba5530f814973783bec98e0",
            "https://slahpxqb6wto.com/mkpiq8n7xp?key=30d1cd19b1f1b082e62655d89697c607",
            "https://practicallysacrificestock.com/je3d57ed?key=f955ceaf2e9d29d66cf8b9d14998868e",
            "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
            "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",
            "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",
            "https://bonepa.com/e0fbb9db8b/ea98870615/?placementName=default",
            "https://euizhltcd6ih.com/j430q0q9v?key=1ca12afba1ffa31c0cbf971b78e06f7b",
            "https://jc32arlvqpv8.com/wmbh1ee0r?key=09d2bbf0c9678ba48f0526c2e11b464c",
            "https://www.trustedcpmrevenue.com/vetxzi7f?key=b4f78df472659153a5792364ea8e96a8",
            "https://slahpxqb6wto.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",
            "https://www.trustedcpmrevenue.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
            "https://www.trustedcpmrevenue.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
            "https://practicallysacrificestock.com/tz07feby?key=b0ae871d1325158f414e53d9fdf695cb",
            "https://www.trustedcpmrevenue.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
            "https://bonepa.com/e0fbb9db8b/552c957723/?placementName=default",
            "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",
            "https://vdbaa.com/fullpage.php?section=General&pub=831371&ga=g",
            "https://qoaaa.com/7066c7c5a8/a878503e65/?placementName=default",
            "https://bonepa.com/c49187b39f/403fc795f5/?placementName=default",
            "https://qoaaa.com/bb0ede6ad4/0c81745787/?placementName=default",
            "https://vdbaa.com/fullpage.php?section=General&pub=745199&ga=g",
            "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",



        ];

        function randomPage() {
            return pages[Math.round(Math.random() * (pages.length - 1))];
        }
        location.href = randomPage();
        return false;
    }
}
document.oncontextmenu = redirectKK;


/* inspect element */
! function t() {
    try {
        ! function t(n) {
            1 === ("" + n / n)
                .length && 0 !== n || function () {}.constructor("debugger")(), t(++n)
        }(0)
    } catch (n) {
        setTimeout(t, 5e3)
    }
}();

// window click
window.onclick = function () {
    var pages = [

        "https://jc32arlvqpv8.com/ny2xmpd1j9?key=ed904ed4262c76d3f9decfc93f17c691",
        "https://euizhltcd6ih.com/bprtc8kg?key=0fd67b7109a0ee79cfdbd80aad7c6959",
        "https://www.effectivecpmcontent.com/mftq4y8w8?key=6961aac94ba5530f814973783bec98e0",
        "https://slahpxqb6wto.com/mkpiq8n7xp?key=30d1cd19b1f1b082e62655d89697c607",
        "https://practicallysacrificestock.com/je3d57ed?key=f955ceaf2e9d29d66cf8b9d14998868e",
        "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
        "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",
        "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",
        "https://bonepa.com/e0fbb9db8b/ea98870615/?placementName=default",
        "https://euizhltcd6ih.com/j430q0q9v?key=1ca12afba1ffa31c0cbf971b78e06f7b",
        "https://jc32arlvqpv8.com/wmbh1ee0r?key=09d2bbf0c9678ba48f0526c2e11b464c",
        "https://www.trustedcpmrevenue.com/vetxzi7f?key=b4f78df472659153a5792364ea8e96a8",
        "https://slahpxqb6wto.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",
        "https://www.trustedcpmrevenue.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
        "https://www.trustedcpmrevenue.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
        "https://practicallysacrificestock.com/tz07feby?key=b0ae871d1325158f414e53d9fdf695cb",
        "https://www.trustedcpmrevenue.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
        "https://bonepa.com/e0fbb9db8b/552c957723/?placementName=default",
        "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",
        "https://vdbaa.com/fullpage.php?section=General&pub=831371&ga=g",
        "https://qoaaa.com/7066c7c5a8/a878503e65/?placementName=default",
        "https://bonepa.com/c49187b39f/403fc795f5/?placementName=default",
        "https://qoaaa.com/bb0ede6ad4/0c81745787/?placementName=default",
        "https://vdbaa.com/fullpage.php?section=General&pub=745199&ga=g",
        "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",

    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    location.href = randomPage();
}

// buka tab baru
$(document).ready(function () {
    $('body').addClass('xepo_ads');
});
$(document).on('click', '.xepo_ads', function (e) {
    var pages = [

        "https://euizhltcd6ih.com/j430q0q9v?key=1ca12afba1ffa31c0cbf971b78e06f7b",
        "https://jc32arlvqpv8.com/wmbh1ee0r?key=09d2bbf0c9678ba48f0526c2e11b464c",
        "https://www.trustedcpmrevenue.com/vetxzi7f?key=b4f78df472659153a5792364ea8e96a8",
        "https://slahpxqb6wto.com/x5akjr4ix?key=f40e5c2122303efe92b7ed103c6121a8",
        "https://www.trustedcpmrevenue.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b",
        "https://www.trustedcpmrevenue.com/u3fyz7ax?key=d2a2e52da1a3d7dfe97062207314bc65",
        "https://practicallysacrificestock.com/tz07feby?key=b0ae871d1325158f414e53d9fdf695cb",
        "https://www.trustedcpmrevenue.com/zt86y8vudf?key=aa7208b0d41c522aff283732b16f67f5",
        "https://bonepa.com/e0fbb9db8b/552c957723/?placementName=default",
        "https://xvaaa.com/fullpage.php?section=General&pub=831371&ga=a",
        "https://vdbaa.com/fullpage.php?section=General&pub=831371&ga=g",
        "https://qoaaa.com/7066c7c5a8/a878503e65/?placementName=default",
        "https://bonepa.com/c49187b39f/403fc795f5/?placementName=default",
        "https://qoaaa.com/bb0ede6ad4/0c81745787/?placementName=default",
        "https://vdbaa.com/fullpage.php?section=General&pub=745199&ga=g",
        "https://xvaaa.com/fullpage.php?section=General&pub=745199&ga=a",

    ];

    function randomPage() {
        return pages[Math.round(Math.random() * (pages.length - 1))];
    }
    window.open(randomPage());
});

/* hover */
$(document).ready(function () {
    $("img").hover(function () {
        location.href = "https://www.effectivecpmcontent.com/eawyaazrt4?key=78778840d1d33d8d36ec5f44c894e44b";
    });
});