(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [109], {
        7814: function (e, t, r) {
            "use strict";
            r.d(t, {
                G: function () {
                    return g
                }
            });
            var n = r(8947),
                o = r(5697),
                i = r.n(o),
                a = r(7294);

            function u(e) {
                return (u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function f(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function (t) {
                        f(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                if (null == e) return {};
                var r, n, o = function (e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }

            function p(e) {
                return function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                }(e) || function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function y(e) {
                return t = e, (t -= 0) === t ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function (e, t) {
                    return t ? t.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1);
                var t
            }

            function d(e) {
                return e.split(";").map((function (e) {
                    return e.trim()
                })).filter((function (e) {
                    return e
                })).reduce((function (e, t) {
                    var r, n = t.indexOf(":"),
                        o = y(t.slice(0, n)),
                        i = t.slice(n + 1).trim();
                    return o.startsWith("webkit") ? e[(r = o, r.charAt(0).toUpperCase() + r.slice(1))] = i : e[o] = i, e
                }), {})
            }
            var b = !1;
            try {
                b = !0
            } catch (O) {}

            function m(e) {
                return e && "object" === u(e) && e.prefix && e.iconName && e.icon ? e : n.Qc.icon ? n.Qc.icon(e) : null === e ? null : e && "object" === u(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? {
                    prefix: e[0],
                    iconName: e[1]
                } : "string" === typeof e ? {
                    prefix: "fas",
                    iconName: e
                } : void 0
            }

            function v(e, t) {
                return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? f({}, e, t) : {}
            }

            function g(e) {
                var t = e.forwardedRef,
                    r = l(e, ["forwardedRef"]),
                    o = r.icon,
                    i = r.mask,
                    a = r.symbol,
                    u = r.className,
                    c = r.title,
                    y = r.titleId,
                    d = m(o),
                    O = v("classes", [].concat(p(function (e) {
                        var t, r = e.spin,
                            n = e.pulse,
                            o = e.fixedWidth,
                            i = e.inverse,
                            a = e.border,
                            u = e.listItem,
                            c = e.flip,
                            s = e.size,
                            l = e.rotation,
                            p = e.pull,
                            y = (f(t = {
                                "fa-spin": r,
                                "fa-pulse": n,
                                "fa-fw": o,
                                "fa-inverse": i,
                                "fa-border": a,
                                "fa-li": u,
                                "fa-flip-horizontal": "horizontal" === c || "both" === c,
                                "fa-flip-vertical": "vertical" === c || "both" === c
                            }, "fa-".concat(s), "undefined" !== typeof s && null !== s), f(t, "fa-rotate-".concat(l), "undefined" !== typeof l && null !== l && 0 !== l), f(t, "fa-pull-".concat(p), "undefined" !== typeof p && null !== p), f(t, "fa-swap-opacity", e.swapOpacity), t);
                        return Object.keys(y).map((function (e) {
                            return y[e] ? e : null
                        })).filter((function (e) {
                            return e
                        }))
                    }(r)), p(u.split(" ")))),
                    w = v("transform", "string" === typeof r.transform ? n.Qc.transform(r.transform) : r.transform),
                    j = v("mask", m(i)),
                    S = (0, n.qv)(d, s({}, O, {}, w, {}, j, {
                        symbol: a,
                        title: c,
                        titleId: y
                    }));
                if (!S) return function () {
                    var e;
                    !b && console && "function" === typeof console.error && (e = console).error.apply(e, arguments)
                }("Could not find icon", d), null;
                var P = S.abstract,
                    x = {
                        ref: t
                    };
                return Object.keys(r).forEach((function (e) {
                    g.defaultProps.hasOwnProperty(e) || (x[e] = r[e])
                })), h(P[0], x)
            }
            g.displayName = "FontAwesomeIcon", g.propTypes = {
                border: i().bool,
                className: i().string,
                mask: i().oneOfType([i().object, i().array, i().string]),
                fixedWidth: i().bool,
                inverse: i().bool,
                flip: i().oneOf(["horizontal", "vertical", "both"]),
                icon: i().oneOfType([i().object, i().array, i().string]),
                listItem: i().bool,
                pull: i().oneOf(["right", "left"]),
                pulse: i().bool,
                rotation: i().oneOf([0, 90, 180, 270]),
                size: i().oneOf(["lg", "xs", "sm", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
                spin: i().bool,
                symbol: i().oneOfType([i().bool, i().string]),
                title: i().string,
                transform: i().oneOfType([i().string, i().object]),
                swapOpacity: i().bool
            }, g.defaultProps = {
                border: !1,
                className: "",
                mask: null,
                fixedWidth: !1,
                inverse: !1,
                flip: null,
                icon: null,
                listItem: !1,
                pull: null,
                pulse: !1,
                rotation: null,
                size: null,
                spin: !1,
                symbol: !1,
                title: "",
                transform: null,
                swapOpacity: !1
            };
            var h = function e(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" === typeof r) return r;
                var o = (r.children || []).map((function (r) {
                        return e(t, r)
                    })),
                    i = Object.keys(r.attributes || {}).reduce((function (e, t) {
                        var n = r.attributes[t];
                        switch (t) {
                            case "class":
                                e.attrs.className = n, delete r.attributes.class;
                                break;
                            case "style":
                                e.attrs.style = d(n);
                                break;
                            default:
                                0 === t.indexOf("aria-") || 0 === t.indexOf("data-") ? e.attrs[t.toLowerCase()] = n : e.attrs[y(t)] = n
                        }
                        return e
                    }), {
                        attrs: {}
                    }),
                    a = n.style,
                    u = void 0 === a ? {} : a,
                    f = l(n, ["style"]);
                return i.attrs.style = s({}, i.attrs.style, {}, u), t.apply(void 0, [r.tag, s({}, i.attrs, {}, f)].concat(p(o)))
            }.bind(null, a.createElement)
        },
        9008: function (e, t, r) {
            e.exports = r(639)
        },
        9590: function (e) {
            var t = "undefined" !== typeof Element,
                r = "function" === typeof Map,
                n = "function" === typeof Set,
                o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function i(e, a) {
                if (e === a) return !0;
                if (e && a && "object" == typeof e && "object" == typeof a) {
                    if (e.constructor !== a.constructor) return !1;
                    var u, f, c, s;
                    if (Array.isArray(e)) {
                        if ((u = e.length) != a.length) return !1;
                        for (f = u; 0 !== f--;)
                            if (!i(e[f], a[f])) return !1;
                        return !0
                    }
                    if (r && e instanceof Map && a instanceof Map) {
                        if (e.size !== a.size) return !1;
                        for (s = e.entries(); !(f = s.next()).done;)
                            if (!a.has(f.value[0])) return !1;
                        for (s = e.entries(); !(f = s.next()).done;)
                            if (!i(f.value[1], a.get(f.value[0]))) return !1;
                        return !0
                    }
                    if (n && e instanceof Set && a instanceof Set) {
                        if (e.size !== a.size) return !1;
                        for (s = e.entries(); !(f = s.next()).done;)
                            if (!a.has(f.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                        if ((u = e.length) != a.length) return !1;
                        for (f = u; 0 !== f--;)
                            if (e[f] !== a[f]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
                    if ((u = (c = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                    for (f = u; 0 !== f--;)
                        if (!Object.prototype.hasOwnProperty.call(a, c[f])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (f = u; 0 !== f--;)
                        if (("_owner" !== c[f] && "__v" !== c[f] && "__o" !== c[f] || !e.$$typeof) && !i(e[c[f]], a[c[f]])) return !1;
                    return !0
                }
                return e !== e && a !== a
            }
            e.exports = function (e, t) {
                try {
                    return i(e, t)
                } catch (r) {
                    if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw r
                }
            }
        },
        1106: function (e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            t.Z = void 0;
            var o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== n(e) && "function" !== typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(7294)),
                i = r(2136),
                a = r(6906),
                u = r(370);

            function f() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function () {
                    return e
                }, e
            }
            var c = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.color,
                    r = void 0 === t ? u.defaultConfig.color : t,
                    n = e.changeFrequency,
                    f = void 0 === n ? u.defaultConfig.changeFrequency : n,
                    c = e.radius,
                    s = void 0 === c ? u.defaultConfig.radius : c,
                    l = e.speed,
                    p = void 0 === l ? u.defaultConfig.speed : l,
                    y = e.wind,
                    d = void 0 === y ? u.defaultConfig.wind : y,
                    b = e.snowflakeCount,
                    m = void 0 === b ? 150 : b,
                    v = e.style,
                    g = (0, a.useSnowfallStyle)(v),
                    h = (0, o.useRef)(),
                    O = (0, a.useComponentSize)(h),
                    w = (0, o.useRef)(0),
                    j = (0, o.useRef)(Date.now()),
                    S = (0, a.useDeepMemo)({
                        color: r,
                        changeFrequency: f,
                        radius: s,
                        speed: p,
                        wind: d
                    }),
                    P = (0, a.useSnowflakes)(h, m, S),
                    x = function (e) {
                        h.current = e
                    },
                    A = (0, o.useCallback)((function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = h.current;
                        if (t) {
                            P.forEach((function (r) {
                                return r.update(t, e)
                            }));
                            var r = t.getContext("2d");
                            r && (r.clearRect(0, 0, t.offsetWidth, t.offsetHeight), P.forEach((function (e) {
                                return e.draw(t, r)
                            })))
                        }
                    }), [P]),
                    C = (0, o.useCallback)((function () {
                        var e = Date.now(),
                            t = Date.now() - j.current;
                        j.current = e;
                        var r = t / i.targetFrameTime;
                        A(r), w.current = requestAnimationFrame(C)
                    }), [A]);
                return (0, o.useEffect)((function () {
                    return C(),
                        function () {
                            return cancelAnimationFrame(w.current)
                        }
                }), [C]), o.default.createElement("canvas", {
                    ref: x,
                    height: O.height,
                    width: O.width,
                    style: g
                })
            };
            t.Z = c
        },
        370: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.defaultConfig = void 0;
            var n = r(7486);

            function o(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(r), !0).forEach((function (t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function a(e) {
                return function (e) {
                    if (Array.isArray(e)) return u(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return u(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, t)
                }(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function s(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var l = {
                color: "#dee4fd",
                radius: [.5, 3],
                speed: [1, 3],
                wind: [-.5, 2],
                changeFrequency: 200
            };
            t.defaultConfig = l;
            var p = function () {
                function e(t) {
                    var r = this,
                        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    f(this, e), s(this, "config", void 0), s(this, "params", void 0), s(this, "framesSinceLastUpdate", void 0), s(this, "draw", (function (e, t) {
                        var n = t || e.getContext("2d");
                        n && (n.beginPath(), n.arc(r.params.x, r.params.y, r.params.radius, 0, 2 * Math.PI), n.fillStyle = r.fullConfig.color, n.closePath(), n.fill())
                    })), s(this, "translate", (function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            o = r.params,
                            i = o.x,
                            a = o.y,
                            u = o.wind,
                            f = o.speed,
                            c = o.nextWind,
                            s = o.nextSpeed;
                        r.params.x = (i + u * t) % e.offsetWidth, r.params.y = (a + f * t) % e.offsetHeight, r.params.speed = (0, n.lerp)(f, s, .01), r.params.wind = (0, n.lerp)(u, c, .01), r.framesSinceLastUpdate++ > r.fullConfig.changeFrequency && (r.updateTargetParams(), r.framesSinceLastUpdate = 0)
                    })), s(this, "updateTargetParams", (function () {
                        r.params.nextSpeed = n.random.apply(void 0, a(r.fullConfig.speed)), r.params.nextWind = n.random.apply(void 0, a(r.fullConfig.wind))
                    })), s(this, "update", (function (e, t) {
                        r.translate(e, t)
                    })), this.config = o;
                    var i = this.fullConfig,
                        u = i.radius,
                        c = i.wind,
                        l = i.speed;
                    this.params = {
                        x: (0, n.random)(0, t.offsetWidth),
                        y: (0, n.random)(-t.offsetHeight, 0),
                        radius: n.random.apply(void 0, a(u)),
                        speed: n.random.apply(void 0, a(l)),
                        wind: n.random.apply(void 0, a(c)),
                        nextSpeed: n.random.apply(void 0, a(c)),
                        nextWind: n.random.apply(void 0, a(l))
                    }, this.framesSinceLastUpdate = 0
                }
                var t, r, o;
                return t = e, (r = [{
                    key: "fullConfig",
                    get: function () {
                        return i(i({}, l), this.config)
                    }
                }]) && c(t.prototype, r), o && c(t, o), e
            }();
            t.default = p
        },
        2136: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.targetFrameTime = t.snowfallBaseStyle = void 0;
            t.snowfallBaseStyle = {
                pointerEvents: "none",
                backgroundColor: "transparent",
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "0%"
            };
            t.targetFrameTime = 1e3 / 60
        },
        6906: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useDeepCompareEffect = m, t.useDeepMemo = function (e) {
                var t = y((0, n.useState)(e), 2),
                    r = t[0],
                    o = t[1];
                return m((function () {
                    return o(e)
                }), [e]), r
            }, t.useSnowfallStyle = t.useComponentSize = t.useSnowflakes = void 0;
            var n = r(7294),
                o = f(r(9590)),
                i = f(r(370)),
                a = r(2136),
                u = r(7486);

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function (t) {
                        l(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function p(e) {
                return function (e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function (e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || d(e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                    } catch (f) {
                        o = !0, i = f
                    } finally {
                        try {
                            n || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return r
                }(e, t) || d(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function d(e, t) {
                if (e) {
                    if ("string" === typeof e) return b(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? b(e, t) : void 0
                }
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            t.useSnowflakes = function (e, t, r) {
                var o = y((0, n.useState)([]), 2),
                    a = o[0],
                    u = o[1];
                return (0, n.useEffect)((function () {
                    u((function (n) {
                        var o = t - n.length;
                        return o > 0 ? [].concat(p(n), p(function (e, t, r) {
                            for (var n = [], o = 0; o < t; o++) n.push(new i.default(e.current, r));
                            return n
                        }(e, o, r))) : o < 0 ? n.slice(0, t) : n
                    }))
                }), [t, e, r]), (0, n.useEffect)((function () {
                    u((function (e) {
                        return e.map((function (e) {
                            return e.config = r, e
                        }))
                    }))
                }), [r]), a
            };
            t.useComponentSize = function (e) {
                var t = y((0, n.useState)((0, u.getSize)(e.current)), 2),
                    r = t[0],
                    o = t[1],
                    i = (0, n.useCallback)((function () {
                        e.current && o((0, u.getSize)(e.current))
                    }), [e]);
                return (0, n.useLayoutEffect)((function () {
                    var t = window.ResizeObserver;
                    if (e.current) {
                        if (i(), "function" === typeof t) {
                            var r = new t(i);
                            return r.observe(e.current),
                                function () {
                                    return r.disconnect()
                                }
                        }
                        return window.addEventListener("resize", i),
                            function () {
                                return window.removeEventListener("resize", i)
                            }
                    }
                }), [e, i]), r
            };

            function m(e, t) {
                var r = (0, n.useRef)(t);
                (0, o.default)(t, r.current) || (r.current = t), (0, n.useEffect)(e, r.current)
            }
            t.useSnowfallStyle = function (e) {
                return (0, n.useMemo)((function () {
                    return s(s({}, a.snowfallBaseStyle), e || {})
                }), [e])
            }
        },
        7486: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.random = function (e, t) {
                var r = Math.random() * (t - e + 1) + e;
                return Number.isInteger(e) && Number.isInteger(t) ? Math.floor(r) : r
            }, t.lerp = function (e, t, r) {
                return (1 - r) * e + r * t
            }, t.getSize = function (e) {
                return e ? {
                    height: e.offsetHeight,
                    width: e.offsetWidth
                } : {
                    height: 0,
                    width: 0
                }
            }
        }
    }
]);