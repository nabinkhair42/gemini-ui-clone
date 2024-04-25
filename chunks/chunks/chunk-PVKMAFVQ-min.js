var A, d, O, _e, C, V, j, F, te, H = {}, z = [], ne = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, N = Array.isArray;
function x(e, _) {
    for (var t in _)
        e[t] = _[t];
    return e
}
function G(e) {
    var _ = e.parentNode;
    _ && _.removeChild(e)
}
function ue(e, _, t) {
    var l, o, r, f = {};
    for (r in _)
        r == "key" ? l = _[r] : r == "ref" ? o = _[r] : f[r] = _[r];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? A.call(arguments, 2) : t),
    typeof e == "function" && e.defaultProps != null)
        for (r in e.defaultProps)
            f[r] === void 0 && (f[r] = e.defaultProps[r]);
    return T(e, f, l, o, null)
}
function T(e, _, t, l, o) {
    var r = {
        type: e,
        props: _,
        key: t,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: o ?? ++O,
        __i: -1,
        __u: 0
    };
    return o == null && d.vnode != null && d.vnode(r),
    r
}
function $(e) {
    return e.children
}
function U(e, _) {
    this.props = e,
    this.context = _
}
function P(e, _) {
    if (_ == null)
        return e.__ ? P(e.__, e.__i + 1) : null;
    for (var t; _ < e.__k.length; _++)
        if ((t = e.__k[_]) != null && t.__e != null)
            return t.__e;
    return typeof e.type == "function" ? P(e) : null
}
function q(e) {
    var _, t;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null,
        _ = 0; _ < e.__k.length; _++)
            if ((t = e.__k[_]) != null && t.__e != null) {
                e.__e = e.__c.base = t.__e;
                break
            }
        return q(e)
    }
}
function J(e) {
    (!e.__d && (e.__d = !0) && C.push(e) && !L.__r++ || V !== d.debounceRendering) && ((V = d.debounceRendering) || j)(L)
}
function L() {
    var e, _, t, l, o, r, f, u, c;
    for (C.sort(F); e = C.shift(); )
        e.__d && (_ = C.length,
        l = void 0,
        r = (o = (t = e).__v).__e,
        u = [],
        c = [],
        (f = t.__P) && ((l = x({}, o)).__v = o.__v + 1,
        ee(f, l, o, t.__n, f.ownerSVGElement !== void 0, 32 & o.__u ? [r] : null, u, r ?? P(o), !!(32 & o.__u), c),
        l.__.__k[l.__i] = l,
        le(u, l, c),
        l.__e != r && q(l)),
        C.length > _ && C.sort(F));
    L.__r = 0
}
function K(e, _, t, l, o, r, f, u, c, i, p) {
    var n, m, s, h, k, v = l && l.__k || z, a = _.length;
    for (t.__d = c,
    oe(t, _, v),
    c = t.__d,
    n = 0; n < a; n++)
        (s = t.__k[n]) != null && typeof s != "boolean" && typeof s != "function" && (m = s.__i === -1 ? H : v[s.__i] || H,
        s.__i = n,
        ee(e, s, m, o, r, f, u, c, i, p),
        h = s.__e,
        s.ref && m.ref != s.ref && (m.ref && I(m.ref, null, s),
        p.push(s.ref, s.__c || h, s)),
        k == null && h != null && (k = h),
        65536 & s.__u || m.__k === s.__k ? c = Q(s, c, e) : typeof s.type == "function" && s.__d !== void 0 ? c = s.__d : h && (c = h.nextSibling),
        s.__d = void 0,
        s.__u &= -196609);
    t.__d = c,
    t.__e = k
}
function oe(e, _, t) {
    var l, o, r, f, u, c = _.length, i = t.length, p = i, n = 0;
    for (e.__k = [],
    l = 0; l < c; l++)
        (o = e.__k[l] = (o = _[l]) == null || typeof o == "boolean" || typeof o == "function" ? null : typeof o == "string" || typeof o == "number" || typeof o == "bigint" || o.constructor == String ? T(null, o, null, null, o) : N(o) ? T($, {
            children: o
        }, null, null, null) : o.__b > 0 ? T(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o) != null ? (o.__ = e,
        o.__b = e.__b + 1,
        u = re(o, t, f = l + n, p),
        o.__i = u,
        r = null,
        u !== -1 && (p--,
        (r = t[u]) && (r.__u |= 131072)),
        r == null || r.__v === null ? (u == -1 && n--,
        typeof o.type != "function" && (o.__u |= 65536)) : u !== f && (u === f + 1 ? n++ : u > f ? p > c - f ? n += u - f : n-- : n = u < f && u == f - 1 ? u - f : 0,
        u !== l + n && (o.__u |= 65536))) : (r = t[l]) && r.key == null && r.__e && (r.__e == e.__d && (e.__d = P(r)),
        R(r, r, !1),
        t[l] = null,
        p--);
    if (p)
        for (l = 0; l < i; l++)
            (r = t[l]) != null && (131072 & r.__u) == 0 && (r.__e == e.__d && (e.__d = P(r)),
            R(r, r))
}
function Q(e, _, t) {
    var l, o;
    if (typeof e.type == "function") {
        for (l = e.__k,
        o = 0; l && o < l.length; o++)
            l[o] && (l[o].__ = e,
            _ = Q(l[o], _, t));
        return _
    }
    return e.__e != _ && (t.insertBefore(e.__e, _ || null),
    _ = e.__e),
    _ && _.nextSibling
}
function re(e, _, t, l) {
    var o = e.key
      , r = e.type
      , f = t - 1
      , u = t + 1
      , c = _[t];
    if (c === null || c && o == c.key && r === c.type)
        return t;
    if (l > (c != null && (131072 & c.__u) == 0 ? 1 : 0))
        for (; f >= 0 || u < _.length; ) {
            if (f >= 0) {
                if ((c = _[f]) && (131072 & c.__u) == 0 && o == c.key && r === c.type)
                    return f;
                f--
            }
            if (u < _.length) {
                if ((c = _[u]) && (131072 & c.__u) == 0 && o == c.key && r === c.type)
                    return u;
                u++
            }
        }
    return -1
}
function X(e, _, t) {
    _[0] === "-" ? e.setProperty(_, t ?? "") : e[_] = t == null ? "" : typeof t != "number" || ne.test(_) ? t : t + "px"
}
function M(e, _, t, l, o) {
    var r;
    e: if (_ === "style")
        if (typeof t == "string")
            e.style.cssText = t;
        else {
            if (typeof l == "string" && (e.style.cssText = l = ""),
            l)
                for (_ in l)
                    t && _ in t || X(e.style, _, "");
            if (t)
                for (_ in t)
                    l && t[_] === l[_] || X(e.style, _, t[_])
        }
    else if (_[0] === "o" && _[1] === "n")
        r = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/, "$1")),
        _ = _.toLowerCase()in e ? _.toLowerCase().slice(2) : _.slice(2),
        e.l || (e.l = {}),
        e.l[_ + r] = t,
        t ? l ? t.u = l.u : (t.u = Date.now(),
        e.addEventListener(_, r ? Z : Y, r)) : e.removeEventListener(_, r ? Z : Y, r);
    else {
        if (o)
            _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (_ !== "width" && _ !== "height" && _ !== "href" && _ !== "list" && _ !== "form" && _ !== "tabIndex" && _ !== "download" && _ !== "rowSpan" && _ !== "colSpan" && _ !== "role" && _ in e)
            try {
                e[_] = t ?? "";
                break e
            } catch {}
        typeof t == "function" || (t == null || t === !1 && _[4] !== "-" ? e.removeAttribute(_) : e.setAttribute(_, t))
    }
}
function Y(e) {
    var _ = this.l[e.type + !1];
    if (e.t) {
        if (e.t <= _.u)
            return
    } else
        e.t = Date.now();
    return _(d.event ? d.event(e) : e)
}
function Z(e) {
    return this.l[e.type + !0](d.event ? d.event(e) : e)
}
function ee(e, _, t, l, o, r, f, u, c, i) {
    var p, n, m, s, h, k, v, a, y, b, S, w, B, E, W, g = _.type;
    if (_.constructor !== void 0)
        return null;
    128 & t.__u && (c = !!(32 & t.__u),
    r = [u = _.__e = t.__e]),
    (p = d.__b) && p(_);
    e: if (typeof g == "function")
        try {
            if (a = _.props,
            y = (p = g.contextType) && l[p.__c],
            b = p ? y ? y.props.value : p.__ : l,
            t.__c ? v = (n = _.__c = t.__c).__ = n.__E : ("prototype"in g && g.prototype.render ? _.__c = n = new g(a,b) : (_.__c = n = new U(a,b),
            n.constructor = g,
            n.render = se),
            y && y.sub(n),
            n.props = a,
            n.state || (n.state = {}),
            n.context = b,
            n.__n = l,
            m = n.__d = !0,
            n.__h = [],
            n._sb = []),
            n.__s == null && (n.__s = n.state),
            g.getDerivedStateFromProps != null && (n.__s == n.state && (n.__s = x({}, n.__s)),
            x(n.__s, g.getDerivedStateFromProps(a, n.__s))),
            s = n.props,
            h = n.state,
            n.__v = _,
            m)
                g.getDerivedStateFromProps == null && n.componentWillMount != null && n.componentWillMount(),
                n.componentDidMount != null && n.__h.push(n.componentDidMount);
            else {
                if (g.getDerivedStateFromProps == null && a !== s && n.componentWillReceiveProps != null && n.componentWillReceiveProps(a, b),
                !n.__e && (n.shouldComponentUpdate != null && n.shouldComponentUpdate(a, n.__s, b) === !1 || _.__v === t.__v)) {
                    for (_.__v !== t.__v && (n.props = a,
                    n.state = n.__s,
                    n.__d = !1),
                    _.__e = t.__e,
                    _.__k = t.__k,
                    _.__k.forEach(function(D) {
                        D && (D.__ = _)
                    }),
                    S = 0; S < n._sb.length; S++)
                        n.__h.push(n._sb[S]);
                    n._sb = [],
                    n.__h.length && f.push(n);
                    break e
                }
                n.componentWillUpdate != null && n.componentWillUpdate(a, n.__s, b),
                n.componentDidUpdate != null && n.__h.push(function() {
                    n.componentDidUpdate(s, h, k)
                })
            }
            if (n.context = b,
            n.props = a,
            n.__P = e,
            n.__e = !1,
            w = d.__r,
            B = 0,
            "prototype"in g && g.prototype.render) {
                for (n.state = n.__s,
                n.__d = !1,
                w && w(_),
                p = n.render(n.props, n.state, n.context),
                E = 0; E < n._sb.length; E++)
                    n.__h.push(n._sb[E]);
                n._sb = []
            } else
                do
                    n.__d = !1,
                    w && w(_),
                    p = n.render(n.props, n.state, n.context),
                    n.state = n.__s;
                while (n.__d && ++B < 25);
            n.state = n.__s,
            n.getChildContext != null && (l = x(x({}, l), n.getChildContext())),
            m || n.getSnapshotBeforeUpdate == null || (k = n.getSnapshotBeforeUpdate(s, h)),
            K(e, N(W = p != null && p.type === $ && p.key == null ? p.props.children : p) ? W : [W], _, t, l, o, r, f, u, c, i),
            n.base = _.__e,
            _.__u &= -161,
            n.__h.length && f.push(n),
            v && (n.__E = n.__ = null)
        } catch (D) {
            _.__v = null,
            c || r != null ? (_.__e = u,
            _.__u |= c ? 160 : 32,
            r[r.indexOf(u)] = null) : (_.__e = t.__e,
            _.__k = t.__k),
            d.__e(D, _, t)
        }
    else
        r == null && _.__v === t.__v ? (_.__k = t.__k,
        _.__e = t.__e) : _.__e = ie(t.__e, _, t, l, o, r, f, c, i);
    (p = d.diffed) && p(_)
}
function le(e, _, t) {
    _.__d = void 0;
    for (var l = 0; l < t.length; l++)
        I(t[l], t[++l], t[++l]);
    d.__c && d.__c(_, e),
    e.some(function(o) {
        try {
            e = o.__h,
            o.__h = [],
            e.some(function(r) {
                r.call(o)
            })
        } catch (r) {
            d.__e(r, o.__v)
        }
    })
}
function ie(e, _, t, l, o, r, f, u, c) {
    var i, p, n, m, s, h, k, v = t.props, a = _.props, y = _.type;
    if (y === "svg" && (o = !0),
    r != null) {
        for (i = 0; i < r.length; i++)
            if ((s = r[i]) && "setAttribute"in s == !!y && (y ? s.localName === y : s.nodeType === 3)) {
                e = s,
                r[i] = null;
                break
            }
    }
    if (e == null) {
        if (y === null)
            return document.createTextNode(a);
        e = o ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, a.is && a),
        r = null,
        u = !1
    }
    if (y === null)
        v === a || u && e.data === a || (e.data = a);
    else {
        if (r = r && A.call(e.childNodes),
        v = t.props || H,
        !u && r != null)
            for (v = {},
            i = 0; i < e.attributes.length; i++)
                v[(s = e.attributes[i]).name] = s.value;
        for (i in v)
            s = v[i],
            i == "children" || (i == "dangerouslySetInnerHTML" ? n = s : i === "key" || i in a || M(e, i, null, s, o));
        for (i in a)
            s = a[i],
            i == "children" ? m = s : i == "dangerouslySetInnerHTML" ? p = s : i == "value" ? h = s : i == "checked" ? k = s : i === "key" || u && typeof s != "function" || v[i] === s || M(e, i, s, v[i], o);
        if (p)
            u || n && (p.__html === n.__html || p.__html === e.innerHTML) || (e.innerHTML = p.__html),
            _.__k = [];
        else if (n && (e.innerHTML = ""),
        K(e, N(m) ? m : [m], _, t, l, o && y !== "foreignObject", r, f, r ? r[0] : t.__k && P(t, 0), u, c),
        r != null)
            for (i = r.length; i--; )
                r[i] != null && G(r[i]);
        u || (i = "value",
        h !== void 0 && (h !== e[i] || y === "progress" && !h || y === "option" && h !== v[i]) && M(e, i, h, v[i], !1),
        i = "checked",
        k !== void 0 && k !== e[i] && M(e, i, k, v[i], !1))
    }
    return e
}
function I(e, _, t) {
    try {
        typeof e == "function" ? e(_) : e.current = _
    } catch (l) {
        d.__e(l, t)
    }
}
function R(e, _, t) {
    var l, o;
    if (d.unmount && d.unmount(e),
    (l = e.ref) && (l.current && l.current !== e.__e || I(l, null, _)),
    (l = e.__c) != null) {
        if (l.componentWillUnmount)
            try {
                l.componentWillUnmount()
            } catch (r) {
                d.__e(r, _)
            }
        l.base = l.__P = null,
        e.__c = void 0
    }
    if (l = e.__k)
        for (o = 0; o < l.length; o++)
            l[o] && R(l[o], _, t || typeof e.type != "function");
    t || e.__e == null || G(e.__e),
    e.__ = e.__e = e.__d = void 0
}
function se(e, _, t) {
    return this.constructor(e, t)
}
A = z.slice,
d = {
    __e: function(e, _, t, l) {
        for (var o, r, f; _ = _.__; )
            if ((o = _.__c) && !o.__)
                try {
                    if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)),
                    f = o.__d),
                    o.componentDidCatch != null && (o.componentDidCatch(e, l || {}),
                    f = o.__d),
                    f)
                        return o.__E = o
                } catch (u) {
                    e = u
                }
        throw e
    }
},
O = 0,
_e = function(e) {
    return e != null && e.constructor == null
}
,
U.prototype.setState = function(e, _) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = x({}, this.state),
    typeof e == "function" && (e = e(x({}, t), this.props)),
    e && x(t, e),
    e != null && this.__v && (_ && this._sb.push(_),
    J(this))
}
,
U.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    J(this))
}
,
U.prototype.render = $,
C = [],
j = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
F = function(e, _) {
    return e.__v.__b - _.__v.__b
}
,
L.__r = 0,
te = 0;
export {ue as a, $ as b};
