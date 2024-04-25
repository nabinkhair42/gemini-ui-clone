function mt(f) {
    if (f === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return f
}
function ki(f, t) {
    f.prototype = Object.create(t.prototype),
    f.prototype.constructor = f,
    f.__proto__ = t
}
var J = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, qt = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Ee, W, z, nt = 1e8, M = 1 / nt, Re = Math.PI * 2, Er = Re / 4, Rr = 0, Oi = Math.sqrt, Fr = Math.cos, zr = Math.sin, X = function(t) {
    return typeof t == "string"
}, L = function(t) {
    return typeof t == "function"
}, gt = function(t) {
    return typeof t == "number"
}, de = function(t) {
    return typeof t == "undefined"
}, ht = function(t) {
    return typeof t == "object"
}, tt = function(t) {
    return t !== !1
}, Fe = function() {
    return typeof window != "undefined"
}, pe = function(t) {
    return L(t) || X(t)
}, Ci = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Q = Array.isArray, ze = /(?:-?\.?\d|\.)+/gi, Le = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Be = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ie = /[+-]=-?[.\d]+/, Mi = /[^,'"\[\]\s]+/gi, Lr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, E, st, Ne, Ve, rt = {}, me = {}, Di, Ai = function(t) {
    return (me = zt(t, rt)) && K
}, ge = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, ye = function(t, e) {
    return !e && console.warn(t)
}, Ei = function(t, e) {
    return t && (rt[t] = e) && me && (me[t] = e) || rt
}, ee = function() {
    return 0
}, Br = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, xe = {
    suppressEvents: !0,
    kill: !1
}, Ir = {
    suppressEvents: !0
}, Ue = {}, Tt = [], Ye = {}, Ri, et = {}, Xe = {}, Fi = 30, ve = [], qe = "", Ge = function(t) {
    var e = t[0], i, r;
    if (ht(e) || L(e) || (t = [t]),
    !(i = (e._gsap || {}).harness)) {
        for (r = ve.length; r-- && !ve[r].targetTest(e); )
            ;
        i = ve[r]
    }
    for (r = t.length; r--; )
        t[r] && (t[r]._gsap || (t[r]._gsap = new ii(t[r],i))) || t.splice(r, 1);
    return t
}, wt = function(t) {
    return t._gsap || Ge(ut(t))[0]._gsap
}, We = function(t, e, i) {
    return (i = t[e]) && L(i) ? t[e]() : de(i) && t.getAttribute && t.getAttribute(e) || i
}, Z = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, B = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, q = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, Ft = function(t, e) {
    var i = e.charAt(0)
      , r = parseFloat(e.substr(2));
    return t = parseFloat(t),
    i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
}, Nr = function(t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
        ;
    return r < i
}, Te = function() {
    var t = Tt.length, e = Tt.slice(0), i, r;
    for (Ye = {},
    Tt.length = 0,
    i = 0; i < t; i++)
        r = e[i],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, zi = function(t, e, i, r) {
    Tt.length && !W && Te(),
    t.render(e, i, r || W && e < 0 && (t._initted || t._startAt)),
    Tt.length && !W && Te()
}, Li = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Mi).length < 2 ? e : X(t) ? t.trim() : t
}, Bi = function(t) {
    return t
}, at = function(t, e) {
    for (var i in e)
        i in t || (t[i] = e[i]);
    return t
}, Vr = function(t) {
    return function(e, i) {
        for (var r in i)
            r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
    }
}, zt = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Ii = function f(t, e) {
    for (var i in e)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = ht(e[i]) ? f(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t
}, we = function(t, e) {
    var i = {}, r;
    for (r in t)
        r in e || (i[r] = t[r]);
    return i
}, ie = function(t) {
    var e = t.parent || E
      , i = t.keyframes ? Vr(Q(t.keyframes)) : at;
    if (tt(t.inherit))
        for (; e; )
            i(t, e.vars.defaults),
            e = e.parent || e._dp;
    return t
}, Ur = function(t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
        ;
    return i < 0
}, Ni = function(t, e, i, r, n) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var s = t[r], a;
    if (n)
        for (a = e[n]; s && s[n] > a; )
            s = s._prev;
    return s ? (e._next = s._next,
    s._next = e) : (e._next = t[i],
    t[i] = e),
    e._next ? e._next._prev = e : t[r] = e,
    e._prev = s,
    e.parent = e._dp = t,
    e
}, be = function(t, e, i, r) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var n = e._prev
      , s = e._next;
    n ? n._next = s : t[i] === e && (t[i] = s),
    s ? s._prev = n : t[r] === e && (t[r] = n),
    e._next = e._prev = e.parent = null
}, bt = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, Lt = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; )
            i._dirty = 1,
            i = i.parent;
    return t
}, Yr = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
        e.totalDuration(),
        e = e.parent;
    return t
}, Qe = function(t, e, i, r) {
    return t._startAt && (W ? t._startAt.revert(xe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
}, Xr = function f(t) {
    return !t || t._ts && f(t.parent)
}, Vi = function(t) {
    return t._repeat ? Gt(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Gt = function(t, e) {
    var i = Math.floor(t /= e);
    return t && i === t ? i - 1 : i
}, Pe = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, Se = function(t) {
    return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || M) || 0))
}, ke = function(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
    Se(t),
    i._dirty || Lt(i, t)),
    t
}, Ui = function(t, e) {
    var i;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Pe(t.rawTime(), e),
    (!e._dur || ne(0, e.totalDuration(), i) - e._tTime > M) && e.render(i, !0)),
    Lt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (i = t; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        t._zTime = -M
    }
}, lt = function(t, e, i, r) {
    return e.parent && bt(e),
    e._start = q((gt(i) ? i : i || t !== E ? ot(t, i, e) : t._time) + e._delay),
    e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
    Ni(t, e, "_first", "_last", t._sort ? "_start" : 0),
    je(e) || (t._recent = e),
    r || Ui(t, e),
    t._ts < 0 && ke(t, t._tTime),
    t
}, Yi = function(t, e) {
    return (rt.ScrollTrigger || ge("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t)
}, Xi = function(t, e, i, r, n) {
    if (ai(t, e, n),
    !t._initted)
        return 1;
    if (!i && t._pt && !W && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Ri !== it.frame)
        return Tt.push(t),
        t._lazy = [n, r],
        1
}, qr = function f(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || f(e))
}, je = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart"
}, Gr = function(t, e, i, r) {
    var n = t.ratio, s = e < 0 || !e && (!t._start && qr(t) && !(!t._initted && je(t)) || (t._ts < 0 || t._dp._ts < 0) && !je(t)) ? 0 : 1, a = t._rDelay, o = 0, u, _, l;
    if (a && t._repeat && (o = ne(0, t._tDur, e),
    _ = Gt(o, a),
    t._yoyo && _ & 1 && (s = 1 - s),
    _ !== Gt(t._tTime, a) && (n = 1 - s,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    s !== n || W || r || t._zTime === M || !e && t._zTime) {
        if (!t._initted && Xi(t, e, r, i, o))
            return;
        for (l = t._zTime,
        t._zTime = e || (i ? M : 0),
        i || (i = e && !l),
        t.ratio = s,
        t._from && (s = 1 - s),
        t._time = 0,
        t._tTime = o,
        u = t._pt; u; )
            u.r(s, u.d),
            u = u._next;
        e < 0 && Qe(t, e, i, !0),
        t._onUpdate && !i && ft(t, "onUpdate"),
        o && t._repeat && !i && t.parent && ft(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === s && (s && bt(t, 1),
        !i && !W && (ft(t, s ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, Wr = function(t, e, i) {
    var r;
    if (i > e)
        for (r = t._first; r && r._start <= i; ) {
            if (r.data === "isPause" && r._start > e)
                return r;
            r = r._next
        }
    else
        for (r = t._last; r && r._start >= i; ) {
            if (r.data === "isPause" && r._start < e)
                return r;
            r = r._prev
        }
}, Wt = function(t, e, i, r) {
    var n = t._repeat
      , s = q(e) || 0
      , a = t._tTime / t._tDur;
    return a && !r && (t._time *= s / t._dur),
    t._dur = s,
    t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s,
    a > 0 && !r && ke(t, t._tTime = t._tDur * a),
    t.parent && Se(t),
    i || Lt(t.parent, t),
    t
}, qi = function(t) {
    return t instanceof j ? Lt(t) : Wt(t, t._dur)
}, Qr = {
    _start: 0,
    endTime: ee,
    totalDuration: ee
}, ot = function f(t, e, i) {
    var r = t.labels, n = t._recent || Qr, s = t.duration() >= nt ? n.endTime(!1) : t._dur, a, o, u;
    return X(e) && (isNaN(e) || e in r) ? (o = e.charAt(0),
    u = e.substr(-1) === "%",
    a = e.indexOf("="),
    o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")),
    (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s),
    r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
    u && i && (o = o / 100 * (Q(i) ? i[0] : i).totalDuration()),
    a > 1 ? f(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e
}, re = function(t, e, i) {
    var r = gt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
    if (r && (s.duration = e[1]),
    s.parent = i,
    t) {
        for (a = s,
        o = i; o && !("immediateRender"in a); )
            a = o.vars.defaults || {},
            o = tt(o.vars.inherit) && o.parent;
        s.immediateRender = tt(a.immediateRender),
        t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
    }
    return new I(e[0],s,e[n + 1])
}, Pt = function(t, e) {
    return t || t === 0 ? e(t) : e
}, ne = function(t, e, i) {
    return i < t ? t : i > e ? e : i
}, G = function(t, e) {
    return !X(t) || !(e = Lr.exec(t)) ? "" : e[1]
}, jr = function(t, e, i) {
    return Pt(i, function(r) {
        return ne(t, e, r)
    })
}, Ke = [].slice, Gi = function(t, e) {
    return t && ht(t) && "length"in t && (!e && !t.length || t.length - 1 in t && ht(t[0])) && !t.nodeType && t !== st
}, Kr = function(t, e, i) {
    return i === void 0 && (i = []),
    t.forEach(function(r) {
        var n;
        return X(r) && !e || Gi(r, 1) ? (n = i).push.apply(n, ut(r)) : i.push(r)
    }) || i
}, ut = function(t, e, i) {
    return z && !e && z.selector ? z.selector(t) : X(t) && !i && (Ne || !Kt()) ? Ke.call((e || Ve).querySelectorAll(t), 0) : Q(t) ? Kr(t, i) : Gi(t) ? Ke.call(t, 0) : t ? [t] : []
}, He = function(t) {
    return t = ut(t)[0] || ye("Invalid scope") || {},
    function(e) {
        var i = t.current || t.nativeElement || t;
        return ut(e, i.querySelectorAll ? i : i === t ? ye("Invalid scope") || Ve.createElement("div") : t)
    }
}, Wi = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, Qi = function(t) {
    if (L(t))
        return t;
    var e = ht(t) ? t : {
        each: t
    }
      , i = Bt(e.ease)
      , r = e.from || 0
      , n = parseFloat(e.base) || 0
      , s = {}
      , a = r > 0 && r < 1
      , o = isNaN(r) || a
      , u = e.axis
      , _ = r
      , l = r;
    return X(r) ? _ = l = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !a && o && (_ = r[0],
    l = r[1]),
    function(c, d, p) {
        var h = (p || e).length, m = s[h], g, y, v, T, x, S, P, b, w;
        if (!m) {
            if (w = e.grid === "auto" ? 0 : (e.grid || [1, nt])[1],
            !w) {
                for (P = -nt; P < (P = p[w++].getBoundingClientRect().left) && w < h; )
                    ;
                w--
            }
            for (m = s[h] = [],
            g = o ? Math.min(w, h) * _ - .5 : r % w,
            y = w === nt ? 0 : o ? h * l / w - .5 : r / w | 0,
            P = 0,
            b = nt,
            S = 0; S < h; S++)
                v = S % w - g,
                T = y - (S / w | 0),
                m[S] = x = u ? Math.abs(u === "y" ? T : v) : Oi(v * v + T * T),
                x > P && (P = x),
                x < b && (b = x);
            r === "random" && Wi(m),
            m.max = P - b,
            m.min = b,
            m.v = h = (parseFloat(e.amount) || parseFloat(e.each) * (w > h ? h - 1 : u ? u === "y" ? h / w : w : Math.max(w, h / w)) || 0) * (r === "edges" ? -1 : 1),
            m.b = h < 0 ? n - h : n,
            m.u = G(e.amount || e.each) || 0,
            i = i && h < 0 ? nr(i) : i
        }
        return h = (m[c] - m.min) / m.max || 0,
        q(m.b + (i ? i(h) : h) * m.v) + m.u
    }
}, Ze = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(i) {
        var r = q(Math.round(parseFloat(i) / t) * t * e);
        return (r - r % 1) / e + (gt(i) ? 0 : G(i))
    }
}, ji = function(t, e) {
    var i = Q(t), r, n;
    return !i && ht(t) && (r = i = t.radius || nt,
    t.values ? (t = ut(t.values),
    (n = !gt(t[0])) && (r *= r)) : t = Ze(t.increment)),
    Pt(e, i ? L(t) ? function(s) {
        return n = t(s),
        Math.abs(n - s) <= r ? n : s
    }
    : function(s) {
        for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), u = nt, _ = 0, l = t.length, c, d; l--; )
            n ? (c = t[l].x - a,
            d = t[l].y - o,
            c = c * c + d * d) : c = Math.abs(t[l] - a),
            c < u && (u = c,
            _ = l);
        return _ = !r || u <= r ? t[_] : s,
        n || _ === s || gt(s) ? _ : _ + G(s)
    }
    : Ze(t))
}, Ki = function(t, e, i, r) {
    return Pt(Q(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
        return Q(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
    })
}, Hr = function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
    return function(r) {
        return e.reduce(function(n, s) {
            return s(n)
        }, r)
    }
}, Zr = function(t, e) {
    return function(i) {
        return t(parseFloat(i)) + (e || G(i))
    }
}, $r = function(t, e, i) {
    return Zi(t, e, 0, 1, i)
}, Hi = function(t, e, i) {
    return Pt(i, function(r) {
        return t[~~e(r)]
    })
}, Jr = function f(t, e, i) {
    var r = e - t;
    return Q(t) ? Hi(t, f(0, t.length), e) : Pt(i, function(n) {
        return (r + (n - t) % r) % r + t
    })
}, tn = function f(t, e, i) {
    var r = e - t
      , n = r * 2;
    return Q(t) ? Hi(t, f(0, t.length - 1), e) : Pt(i, function(s) {
        return s = (n + (s - t) % n) % n || 0,
        t + (s > r ? n - s : s)
    })
}, Qt = function(t) {
    for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
        s = t.indexOf(")", r),
        a = t.charAt(r + 7) === "[",
        n = t.substr(r + 7, s - r - 7).match(a ? Mi : ze),
        i += t.substr(e, r - e) + Ki(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
        e = s + 1;
    return i + t.substr(e, t.length - e)
}, Zi = function(t, e, i, r, n) {
    var s = e - t
      , a = r - i;
    return Pt(n, function(o) {
        return i + ((o - t) / s * a || 0)
    })
}, en = function f(t, e, i, r) {
    var n = isNaN(t + e) ? 0 : function(d) {
        return (1 - d) * t + d * e
    }
    ;
    if (!n) {
        var s = X(t), a = {}, o, u, _, l, c;
        if (i === !0 && (r = 1) && (i = null),
        s)
            t = {
                p: t
            },
            e = {
                p: e
            };
        else if (Q(t) && !Q(e)) {
            for (_ = [],
            l = t.length,
            c = l - 2,
            u = 1; u < l; u++)
                _.push(f(t[u - 1], t[u]));
            l--,
            n = function(p) {
                p *= l;
                var h = Math.min(c, ~~p);
                return _[h](p - h)
            }
            ,
            i = e
        } else
            r || (t = zt(Q(t) ? [] : {}, t));
        if (!_) {
            for (o in e)
                ri.call(a, t, o, "get", e[o]);
            n = function(p) {
                return fi(p, a) || (s ? t.p : t)
            }
        }
    }
    return Pt(i, n)
}, $i = function(t, e, i) {
    var r = t.labels, n = nt, s, a, o;
    for (s in r)
        a = r[s] - e,
        a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s,
        n = a);
    return o
}, ft = function(t, e, i) {
    var r = t.vars, n = r[e], s = z, a = t._ctx, o, u, _;
    if (!!n)
        return o = r[e + "Params"],
        u = r.callbackScope || t,
        i && Tt.length && Te(),
        a && (z = a),
        _ = o ? n.apply(u, o) : n.call(u),
        z = s,
        _
}, se = function(t) {
    return bt(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!W),
    t.progress() < 1 && ft(t, "onInterrupt"),
    t
}, jt, Ji = [], tr = function(t) {
    if (Fe() && t) {
        t = !t.name && t.default || t;
        var e = t.name
          , i = L(t)
          , r = e && !i && t.init ? function() {
            this._props = []
        }
        : t
          , n = {
            init: ee,
            render: fi,
            add: ri,
            kill: yn,
            modifier: gn,
            rawVars: 0
        }
          , s = {
            targetTest: 0,
            get: 0,
            getSetter: Oe,
            aliases: {},
            register: 0
        };
        if (Kt(),
        t !== r) {
            if (et[e])
                return;
            at(r, at(we(t, n), s)),
            zt(r.prototype, zt(n, we(t, s))),
            et[r.prop = e] = r,
            t.targetTest && (ve.push(r),
            Ue[e] = 1),
            e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        Ei(e, r),
        t.register && t.register(K, r, $)
    } else
        t && Ji.push(t)
}, D = 255, ae = {
    aqua: [0, D, D],
    lime: [0, D, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, D],
    navy: [0, 0, 128],
    white: [D, D, D],
    olive: [128, 128, 0],
    yellow: [D, D, 0],
    orange: [D, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [D, 0, 0],
    pink: [D, 192, 203],
    cyan: [0, D, D],
    transparent: [D, D, D, 0]
}, $e = function(t, e, i) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * D + .5 | 0
}, er = function(t, e, i) {
    var r = t ? gt(t) ? [t >> 16, t >> 8 & D, t & D] : 0 : ae.black, n, s, a, o, u, _, l, c, d, p;
    if (!r) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        ae[t])
            r = ae[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (n = t.charAt(1),
            s = t.charAt(2),
            a = t.charAt(3),
            t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return r = parseInt(t.substr(1, 6), 16),
                [r >> 16, r >> 8 & D, r & D, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            r = [t >> 16, t >> 8 & D, t & D]
        } else if (t.substr(0, 3) === "hsl") {
            if (r = p = t.match(ze),
            !e)
                o = +r[0] % 360 / 360,
                u = +r[1] / 100,
                _ = +r[2] / 100,
                s = _ <= .5 ? _ * (u + 1) : _ + u - _ * u,
                n = _ * 2 - s,
                r.length > 3 && (r[3] *= 1),
                r[0] = $e(o + 1 / 3, n, s),
                r[1] = $e(o, n, s),
                r[2] = $e(o - 1 / 3, n, s);
            else if (~t.indexOf("="))
                return r = t.match(Le),
                i && r.length < 4 && (r[3] = 1),
                r
        } else
            r = t.match(ze) || ae.transparent;
        r = r.map(Number)
    }
    return e && !p && (n = r[0] / D,
    s = r[1] / D,
    a = r[2] / D,
    l = Math.max(n, s, a),
    c = Math.min(n, s, a),
    _ = (l + c) / 2,
    l === c ? o = u = 0 : (d = l - c,
    u = _ > .5 ? d / (2 - l - c) : d / (l + c),
    o = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4,
    o *= 60),
    r[0] = ~~(o + .5),
    r[1] = ~~(u * 100 + .5),
    r[2] = ~~(_ * 100 + .5)),
    i && r.length < 4 && (r[3] = 1),
    r
}, ir = function(t) {
    var e = []
      , i = []
      , r = -1;
    return t.split(yt).forEach(function(n) {
        var s = n.match(Rt) || [];
        e.push.apply(e, s),
        i.push(r += s.length + 1)
    }),
    e.c = i,
    e
}, rr = function(t, e, i) {
    var r = "", n = (t + r).match(yt), s = e ? "hsla(" : "rgba(", a = 0, o, u, _, l;
    if (!n)
        return t;
    if (n = n.map(function(c) {
        return (c = er(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
    }),
    i && (_ = ir(t),
    o = i.c,
    o.join(r) !== _.c.join(r)))
        for (u = t.replace(yt, "1").split(Rt),
        l = u.length - 1; a < l; a++)
            r += u[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (_.length ? _ : n.length ? n : i).shift());
    if (!u)
        for (u = t.split(yt),
        l = u.length - 1; a < l; a++)
            r += u[a] + n[a];
    return r + u[l]
}, yt = function() {
    var f = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in ae)
        f += "|" + t + "\\b";
    return new RegExp(f + ")","gi")
}(), rn = /hsl[a]?\(/, Je = function(t) {
    var e = t.join(" "), i;
    if (yt.lastIndex = 0,
    yt.test(e))
        return i = rn.test(e),
        t[1] = rr(t[1], i),
        t[0] = rr(t[0], i, ir(t[1])),
        !0
}, oe, it = function() {
    var f = Date.now, t = 500, e = 33, i = f(), r = i, n = 1e3 / 240, s = n, a = [], o, u, _, l, c, d, p = function h(m) {
        var g = f() - r, y = m === !0, v, T, x, S;
        if (g > t && (i += g - e),
        r += g,
        x = r - i,
        v = x - s,
        (v > 0 || y) && (S = ++l.frame,
        c = x - l.time * 1e3,
        l.time = x = x / 1e3,
        s += v + (v >= n ? 4 : n - v),
        T = 1),
        y || (o = u(h)),
        T)
            for (d = 0; d < a.length; d++)
                a[d](x, c, S, m)
    };
    return l = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(m) {
            return c / (1e3 / (m || 60))
        },
        wake: function() {
            Di && (!Ne && Fe() && (st = Ne = window,
            Ve = st.document || {},
            rt.gsap = K,
            (st.gsapVersions || (st.gsapVersions = [])).push(K.version),
            Ai(me || st.GreenSockGlobals || !st.gsap && st || {}),
            _ = st.requestAnimationFrame,
            Ji.forEach(tr)),
            o && l.sleep(),
            u = _ || function(m) {
                return setTimeout(m, s - l.time * 1e3 + 1 | 0)
            }
            ,
            oe = 1,
            p(2))
        },
        sleep: function() {
            (_ ? st.cancelAnimationFrame : clearTimeout)(o),
            oe = 0,
            u = ee
        },
        lagSmoothing: function(m, g) {
            t = m || 1 / 0,
            e = Math.min(g || 33, t)
        },
        fps: function(m) {
            n = 1e3 / (m || 240),
            s = l.time * 1e3 + n
        },
        add: function(m, g, y) {
            var v = g ? function(T, x, S, P) {
                m(T, x, S, P),
                l.remove(v)
            }
            : m;
            return l.remove(m),
            a[y ? "unshift" : "push"](v),
            Kt(),
            v
        },
        remove: function(m, g) {
            ~(g = a.indexOf(m)) && a.splice(g, 1) && d >= g && d--
        },
        _listeners: a
    },
    l
}(), Kt = function() {
    return !oe && it.wake()
}, k = {}, nn = /^[\d.\-M][\d.\-,\s]/, sn = /["']/g, an = function(t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, u; n < s; n++)
        o = i[n],
        a = n !== s - 1 ? o.lastIndexOf(",") : o.length,
        u = o.substr(0, a),
        e[r] = isNaN(u) ? u.replace(sn, "").trim() : +u,
        r = o.substr(a + 1).trim();
    return e
}, on = function(t) {
    var e = t.indexOf("(") + 1
      , i = t.indexOf(")")
      , r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
}, un = function(t) {
    var e = (t + "").split("(")
      , i = k[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [an(e[1])] : on(t).split(",").map(Li)) : k._CE && nn.test(t) ? k._CE("", t) : i
}, nr = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, sr = function f(t, e) {
    for (var i = t._first, r; i; )
        i instanceof j ? f(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? f(i.timeline, e) : (r = i._ease,
        i._ease = i._yEase,
        i._yEase = r,
        i._yoyo = e)),
        i = i._next
}, Bt = function(t, e) {
    return t && (L(t) ? t : k[t] || un(t)) || e
}, It = function(t, e, i, r) {
    i === void 0 && (i = function(o) {
        return 1 - e(1 - o)
    }
    ),
    r === void 0 && (r = function(o) {
        return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2
    }
    );
    var n = {
        easeIn: e,
        easeOut: i,
        easeInOut: r
    }, s;
    return Z(t, function(a) {
        k[a] = rt[a] = n,
        k[s = a.toLowerCase()] = i;
        for (var o in n)
            k[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = k[a + "." + o] = n[o]
    }),
    n
}, ar = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
    }
}, ti = function f(t, e, i) {
    var r = e >= 1 ? e : 1
      , n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
      , s = n / Re * (Math.asin(1 / r) || 0)
      , a = function(_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * zr((_ - s) * n) + 1
    }
      , o = t === "out" ? a : t === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : ar(a);
    return n = Re / n,
    o.config = function(u, _) {
        return f(t, u, _)
    }
    ,
    o
}, ei = function f(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function(s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0
    }
      , r = t === "out" ? i : t === "in" ? function(n) {
        return 1 - i(1 - n)
    }
    : ar(i);
    return r.config = function(n) {
        return f(t, n)
    }
    ,
    r
};
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(f, t) {
    var e = t < 5 ? t + 1 : t;
    It(f + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
It("Elastic", ti("in"), ti("out"), ti());
(function(f, t) {
    var e = 1 / t
      , i = 2 * e
      , r = 2.5 * e
      , n = function(a) {
        return a < e ? f * a * a : a < i ? f * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? f * (a -= 2.25 / t) * a + .9375 : f * Math.pow(a - 2.625 / t, 2) + .984375
    };
    It("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
}
)(7.5625, 2.75);
It("Expo", function(f) {
    return f ? Math.pow(2, 10 * (f - 1)) : 0
});
It("Circ", function(f) {
    return -(Oi(1 - f * f) - 1)
});
It("Sine", function(f) {
    return f === 1 ? 1 : -Fr(f * Er) + 1
});
It("Back", ei("in"), ei("out"), ei());
k.SteppedEase = k.steps = rt.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t
          , r = t + (e ? 0 : 1)
          , n = e ? 1 : 0
          , s = 1 - M;
        return function(a) {
            return ((r * ne(0, s, a) | 0) + n) * i
        }
    }
};
qt.ease = k["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(f) {
    return qe += f + "," + f + "Params,"
});
var ii = function(t, e) {
    this.id = Rr++,
    t._gsap = this,
    this.target = t,
    this.harness = e,
    this.get = e ? e.get : We,
    this.set = e ? e.getSetter : Oe
}
  , ue = function() {
    function f(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        Wt(this, +e.duration, 1, 1),
        this.data = e.data,
        z && (this._ctx = z,
        z.data.push(this)),
        oe || it.wake()
    }
    var t = f.prototype;
    return t.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    t.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        Wt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(i, r) {
        if (Kt(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (ke(this, i),
            !n._dp || n.parent || Ui(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && lt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === M || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        zi(this, i, r)),
        this
    }
    ,
    t.time = function(i, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Vi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
    }
    ,
    t.totalProgress = function(i, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    t.progress = function(i, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Vi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    t.iteration = function(i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Gt(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(i) {
        if (!arguments.length)
            return this._rts === -M ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var r = this.parent && this._ts ? Pe(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -M ? 0 : this._rts,
        this.totalTime(ne(-Math.abs(this._delay), this._tDur, r), !0),
        Se(this),
        Yr(this)
    }
    ,
    t.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Kt(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M && (this._tTime -= M)))),
        this) : this._ps
    }
    ,
    t.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && lt(r, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(i) {
        return this._start + (tt(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(i) {
        var r = this.parent || this._dp;
        return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Pe(r.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(i) {
        i === void 0 && (i = Ir);
        var r = W;
        return W = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        W = r,
        this
    }
    ,
    t.globalTime = function(i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            n = r._start + n / (r._ts || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : n
    }
    ,
    t.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        qi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(i) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = i,
            qi(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    t.seek = function(i, r) {
        return this.totalTime(ot(this, i), tt(r))
    }
    ,
    t.restart = function(i, r) {
        return this.play().totalTime(i ? -this._delay : 0, tt(r))
    }
    ,
    t.play = function(i, r) {
        return i != null && this.seek(i, r),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(i, r) {
        return i != null && this.seek(i || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(i, r) {
        return i != null && this.seek(i, r),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -M : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -M,
        this
    }
    ,
    t.isActive = function() {
        var i = this.parent || this._dp, r = this._start, n;
        return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - M)
    }
    ,
    t.eventCallback = function(i, r, n) {
        var s = this.vars;
        return arguments.length > 1 ? (r ? (s[i] = r,
        n && (s[i + "Params"] = n),
        i === "onUpdate" && (this._onUpdate = r)) : delete s[i],
        this) : s[i]
    }
    ,
    t.then = function(i) {
        var r = this;
        return new Promise(function(n) {
            var s = L(i) ? i : Bi
              , a = function() {
                var u = r.then;
                r.then = null,
                L(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
                n(s),
                r.then = u
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
        }
        )
    }
    ,
    t.kill = function() {
        se(this)
    }
    ,
    f
}();
at(ue.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -M,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var j = function(f) {
    ki(t, f);
    function t(i, r) {
        var n;
        return i === void 0 && (i = {}),
        n = f.call(this, i) || this,
        n.labels = {},
        n.smoothChildTiming = !!i.smoothChildTiming,
        n.autoRemoveChildren = !!i.autoRemoveChildren,
        n._sort = tt(i.sortChildren),
        E && lt(i.parent || E, mt(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Yi(mt(n), i.scrollTrigger),
        n
    }
    var e = t.prototype;
    return e.to = function(r, n, s) {
        return re(0, arguments, this),
        this
    }
    ,
    e.from = function(r, n, s) {
        return re(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(r, n, s, a) {
        return re(2, arguments, this),
        this
    }
    ,
    e.set = function(r, n, s) {
        return n.duration = 0,
        n.parent = this,
        ie(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new I(r,n,ot(this, s),1),
        this
    }
    ,
    e.call = function(r, n, s) {
        return lt(this, I.delayedCall(0, r, n), s)
    }
    ,
    e.staggerTo = function(r, n, s, a, o, u, _) {
        return s.duration = n,
        s.stagger = s.stagger || a,
        s.onComplete = u,
        s.onCompleteParams = _,
        s.parent = this,
        new I(r,s,ot(this, o)),
        this
    }
    ,
    e.staggerFrom = function(r, n, s, a, o, u, _) {
        return s.runBackwards = 1,
        ie(s).immediateRender = tt(s.immediateRender),
        this.staggerTo(r, n, s, a, o, u, _)
    }
    ,
    e.staggerFromTo = function(r, n, s, a, o, u, _, l) {
        return a.startAt = s,
        ie(a).immediateRender = tt(a.immediateRender),
        this.staggerTo(r, n, a, o, u, _, l)
    }
    ,
    e.render = function(r, n, s) {
        var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, _ = r <= 0 ? 0 : q(r), l = this._zTime < 0 != r < 0 && (this._initted || !u), c, d, p, h, m, g, y, v, T, x, S, P;
        if (this !== E && _ > o && r >= 0 && (_ = o),
        _ !== this._tTime || s || l) {
            if (a !== this._time && u && (_ += this._time - a,
            r += this._time - a),
            c = _,
            T = this._start,
            v = this._ts,
            g = !v,
            l && (u || (a = this._zTime),
            (r || !n) && (this._zTime = r)),
            this._repeat) {
                if (S = this._yoyo,
                m = u + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(m * 100 + r, n, s);
                if (c = q(_ % m),
                _ === o ? (h = this._repeat,
                c = u) : (h = ~~(_ / m),
                h && h === _ / m && (c = u,
                h--),
                c > u && (c = u)),
                x = Gt(this._tTime, m),
                !a && this._tTime && x !== h && this._tTime - x * m - this._dur <= 0 && (x = h),
                S && h & 1 && (c = u - c,
                P = 1),
                h !== x && !this._lock) {
                    var b = S && x & 1
                      , w = b === (S && h & 1);
                    if (h < x && (b = !b),
                    a = b ? 0 : _ % u ? u : _,
                    this._lock = 1,
                    this.render(a || (P ? 0 : q(h * m)), n, !u)._lock = 0,
                    this._tTime = _,
                    !n && this.parent && ft(this, "onRepeat"),
                    this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
                    a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    o = this._tDur,
                    w && (this._lock = 2,
                    a = b ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !P && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !g)
                        return this;
                    sr(this, P)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = Wr(this, q(a), q(c)),
            y && (_ -= c - (c = y._start))),
            this._tTime = _,
            this._time = c,
            this._act = !v,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            a = 0),
            !a && c && !n && !h && (ft(this, "onStart"),
            this._tTime !== _))
                return this;
            if (c >= a && r >= 0)
                for (d = this._first; d; ) {
                    if (p = d._next,
                    (d._act || c >= d._start) && d._ts && y !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s),
                        c !== this._time || !this._ts && !g) {
                            y = 0,
                            p && (_ += this._zTime = -M);
                            break
                        }
                    }
                    d = p
                }
            else {
                d = this._last;
                for (var O = r < 0 ? r : c; d; ) {
                    if (p = d._prev,
                    (d._act || O <= d._end) && d._ts && y !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (O - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (O - d._start) * d._ts, n, s || W && (d._initted || d._startAt)),
                        c !== this._time || !this._ts && !g) {
                            y = 0,
                            p && (_ += this._zTime = O ? -M : M);
                            break
                        }
                    }
                    d = p
                }
            }
            if (y && !n && (this.pause(),
            y.render(c >= a ? 0 : -M)._zTime = c >= a ? 1 : -1,
            this._ts))
                return this._start = T,
                Se(this),
                this.render(r, n, s);
            this._onUpdate && !n && ft(this, "onUpdate", !0),
            (_ === o && this._tTime >= this.totalDuration() || !_ && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (_ === o && this._ts > 0 || !_ && this._ts < 0) && bt(this, 1),
            !n && !(r < 0 && !a) && (_ || a || !o) && (ft(this, _ === o && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(_ < o && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    e.add = function(r, n) {
        var s = this;
        if (gt(n) || (n = ot(this, n, r)),
        !(r instanceof ue)) {
            if (Q(r))
                return r.forEach(function(a) {
                    return s.add(a, n)
                }),
                this;
            if (X(r))
                return this.addLabel(r, n);
            if (L(r))
                r = I.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? lt(this, r, n) : this
    }
    ,
    e.getChildren = function(r, n, s, a) {
        r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -nt);
        for (var o = [], u = this._first; u; )
            u._start >= a && (u instanceof I ? n && o.push(u) : (s && o.push(u),
            r && o.push.apply(o, u.getChildren(!0, n, s)))),
            u = u._next;
        return o
    }
    ,
    e.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
            if (n[s].vars.id === r)
                return n[s]
    }
    ,
    e.remove = function(r) {
        return X(r) ? this.removeLabel(r) : L(r) ? this.killTweensOf(r) : (be(this, r),
        r === this._recent && (this._recent = this._last),
        Lt(this))
    }
    ,
    e.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = q(it.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        f.prototype.totalTime.call(this, r, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(r, n) {
        return this.labels[r] = ot(this, n),
        this
    }
    ,
    e.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    e.addPause = function(r, n, s) {
        var a = I.delayedCall(0, n || ee, s);
        return a.data = "isPause",
        this._hasPause = 1,
        lt(this, a, ot(this, r))
    }
    ,
    e.removePause = function(r) {
        var n = this._first;
        for (r = ot(this, r); n; )
            n._start === r && n.data === "isPause" && bt(n),
            n = n._next
    }
    ,
    e.killTweensOf = function(r, n, s) {
        for (var a = this.getTweensOf(r, s), o = a.length; o--; )
            St !== a[o] && a[o].kill(r, n);
        return this
    }
    ,
    e.getTweensOf = function(r, n) {
        for (var s = [], a = ut(r), o = this._first, u = gt(n), _; o; )
            o instanceof I ? Nr(o._targets, a) && (u ? (!St || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (_ = o.getTweensOf(a, n)).length && s.push.apply(s, _),
            o = o._next;
        return s
    }
    ,
    e.tweenTo = function(r, n) {
        n = n || {};
        var s = this, a = ot(s, r), o = n, u = o.startAt, _ = o.onStart, l = o.onStartParams, c = o.immediateRender, d, p = I.to(s, at({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: n.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || M,
            onStart: function() {
                if (s.pause(),
                !d) {
                    var m = n.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    p._dur !== m && Wt(p, m, 0, 1).render(p._time, !0, !0),
                    d = 1
                }
                _ && _.apply(p, l || [])
            }
        }, n));
        return c ? p.render(0) : p
    }
    ,
    e.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, at({
            startAt: {
                time: ot(this, r)
            }
        }, s))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        $i(this, ot(this, r))
    }
    ,
    e.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        $i(this, ot(this, r), 1)
    }
    ,
    e.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + M)
    }
    ,
    e.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, o = this.labels, u; a; )
            a._start >= s && (a._start += r,
            a._end += r),
            a = a._next;
        if (n)
            for (u in o)
                o[u] >= s && (o[u] += r);
        return Lt(this)
    }
    ,
    e.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(r),
            n = n._next;
        return f.prototype.invalidate.call(this, r)
    }
    ,
    e.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n; )
            s = n._next,
            this.remove(n),
            n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Lt(this)
    }
    ,
    e.totalDuration = function(r) {
        var n = 0, s = this, a = s._last, o = nt, u, _, l;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (l = s.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                _ = a._start,
                _ > o && s._sort && a._ts && !s._lock ? (s._lock = 1,
                lt(s, a, _ - a._delay, 1)._lock = 0) : o = _,
                _ < 0 && a._ts && (n -= _,
                (!l && !s._dp || l && l.smoothChildTiming) && (s._start += _ / s._ts,
                s._time -= _,
                s._tTime -= _),
                s.shiftChildren(-_, !1, -1 / 0),
                o = 0),
                a._end > n && a._ts && (n = a._end),
                a = u;
            Wt(s, s === E && s._time > n ? s._time : n, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    t.updateRoot = function(r) {
        if (E._ts && (zi(E, Pe(r, E)),
        Ri = it.frame),
        it.frame >= Fi) {
            Fi += J.autoSleep || 120;
            var n = E._first;
            if ((!n || !n._ts) && J.autoSleep && it._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || it.sleep()
            }
        }
    }
    ,
    t
}(ue);
at(j.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var fn = function(t, e, i, r, n, s, a) {
    var o = new $(this._pt,t,e,0,1,ui,null,n), u = 0, _ = 0, l, c, d, p, h, m, g, y;
    for (o.b = i,
    o.e = r,
    i += "",
    r += "",
    (g = ~r.indexOf("random(")) && (r = Qt(r)),
    s && (y = [i, r],
    s(y, t, e),
    i = y[0],
    r = y[1]),
    c = i.match(Be) || []; l = Be.exec(r); )
        p = l[0],
        h = r.substring(u, l.index),
        d ? d = (d + 1) % 5 : h.substr(-5) === "rgba(" && (d = 1),
        p !== c[_++] && (m = parseFloat(c[_ - 1]) || 0,
        o._pt = {
            _next: o._pt,
            p: h || _ === 1 ? h : ",",
            s: m,
            c: p.charAt(1) === "=" ? Ft(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0
        },
        u = Be.lastIndex);
    return o.c = u < r.length ? r.substring(u, r.length) : "",
    o.fp = a,
    (Ie.test(r) || g) && (o.e = 0),
    this._pt = o,
    o
}, ri = function(t, e, i, r, n, s, a, o, u, _) {
    L(r) && (r = r(n || 0, t, s));
    var l = t[e], c = i !== "get" ? i : L(l) ? u ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l, d = L(l) ? u ? dn : fr : oi, p;
    if (X(r) && (~r.indexOf("random(") && (r = Qt(r)),
    r.charAt(1) === "=" && (p = Ft(c, r) + (G(c) || 0),
    (p || p === 0) && (r = p))),
    !_ || c !== r || si)
        return !isNaN(c * r) && r !== "" ? (p = new $(this._pt,t,e,+c || 0,r - (c || 0),typeof l == "boolean" ? mn : _r,0,d),
        u && (p.fp = u),
        a && p.modifier(a, this, t),
        this._pt = p) : (!l && !(e in t) && ge(e, r),
        fn.call(this, t, e, c, r, d, o || J.stringFilter, u))
}, _n = function(t, e, i, r, n) {
    if (L(t) && (t = fe(t, n, e, i, r)),
    !ht(t) || t.style && t.nodeType || Q(t) || Ci(t))
        return X(t) ? fe(t, n, e, i, r) : t;
    var s = {}, a;
    for (a in t)
        s[a] = fe(t[a], n, e, i, r);
    return s
}, ni = function(t, e, i, r, n, s) {
    var a, o, u, _;
    if (et[t] && (a = new et[t]).init(n, a.rawVars ? e[t] : _n(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new $(i._pt,n,t,0,1,a.render,a,0,a.priority),
    i !== jt))
        for (u = i._ptLookup[i._targets.indexOf(n)],
        _ = a._props.length; _--; )
            u[a._props[_]] = o;
    return a
}, St, si, ai = function f(t, e, i) {
    var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, o = r.lazy, u = r.onUpdate, _ = r.onUpdateParams, l = r.callbackScope, c = r.runBackwards, d = r.yoyoEase, p = r.keyframes, h = r.autoRevert, m = t._dur, g = t._startAt, y = t._targets, v = t.parent, T = v && v.data === "nested" ? v.vars.targets : y, x = t._overwrite === "auto" && !Ee, S = t.timeline, P, b, w, O, C, F, N, V, A, Y, U, H, Mt;
    if (S && (!p || !n) && (n = "none"),
    t._ease = Bt(n, qt.ease),
    t._yEase = d ? nr(Bt(d === !0 ? n : d, qt.ease)) : 0,
    d && t._yoyo && !t._repeat && (d = t._yEase,
    t._yEase = t._ease,
    t._ease = d),
    t._from = !S && !!r.runBackwards,
    !S || p && !r.stagger) {
        if (V = y[0] ? wt(y[0]).harness : 0,
        H = V && r[V.prop],
        P = we(r, Ue),
        g && (g._zTime < 0 && g.progress(1),
        e < 0 && c && a && !h ? g.render(-1, !0) : g.revert(c && m ? xe : Br),
        g._lazy = 0),
        s) {
            if (bt(t._startAt = I.set(y, at({
                data: "isStart",
                overwrite: !1,
                parent: v,
                immediateRender: !0,
                lazy: !g && tt(o),
                startAt: null,
                delay: 0,
                onUpdate: u,
                onUpdateParams: _,
                callbackScope: l,
                stagger: 0
            }, s))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (W || !a && !h) && t._startAt.revert(xe),
            a && m && e <= 0 && i <= 0) {
                e && (t._zTime = e);
                return
            }
        } else if (c && m && !g) {
            if (e && (a = !1),
            w = at({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !g && tt(o),
                immediateRender: a,
                stagger: 0,
                parent: v
            }, P),
            H && (w[V.prop] = H),
            bt(t._startAt = I.set(y, w)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (W ? t._startAt.revert(xe) : t._startAt.render(-1, !0)),
            t._zTime = e,
            !a)
                f(t._startAt, M, M);
            else if (!e)
                return
        }
        for (t._pt = t._ptCache = 0,
        o = m && tt(o) || o && !m,
        b = 0; b < y.length; b++) {
            if (C = y[b],
            N = C._gsap || Ge(y)[b]._gsap,
            t._ptLookup[b] = Y = {},
            Ye[N.id] && Tt.length && Te(),
            U = T === y ? b : T.indexOf(C),
            V && (A = new V).init(C, H || P, t, U, T) !== !1 && (t._pt = O = new $(t._pt,C,A.name,0,1,A.render,A,0,A.priority),
            A._props.forEach(function(Dt) {
                Y[Dt] = O
            }),
            A.priority && (F = 1)),
            !V || H)
                for (w in P)
                    et[w] && (A = ni(w, P, t, U, C, T)) ? A.priority && (F = 1) : Y[w] = O = ri.call(t, C, w, "get", P[w], U, T, 0, r.stringFilter);
            t._op && t._op[b] && t.kill(C, t._op[b]),
            x && t._pt && (St = t,
            E.killTweensOf(C, Y, t.globalTime(e)),
            Mt = !t.parent,
            St = 0),
            t._pt && o && (Ye[N.id] = 1)
        }
        F && _i(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = u,
    t._initted = (!t._op || t._pt) && !Mt,
    p && e <= 0 && S.render(nt, !0, !0)
}, hn = function(t, e, i, r, n, s, a) {
    var o = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, _, l, c;
    if (!o)
        for (o = t._ptCache[e] = [],
        l = t._ptLookup,
        c = t._targets.length; c--; ) {
            if (u = l[c][e],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                    u = u._next;
            if (!u)
                return si = 1,
                t.vars[e] = "+=0",
                ai(t, a),
                si = 0,
                1;
            o.push(u)
        }
    for (c = o.length; c--; )
        _ = o[c],
        u = _._pt || _,
        u.s = (r || r === 0) && !n ? r : u.s + (r || 0) + s * u.c,
        u.c = i - u.s,
        _.e && (_.e = B(i) + G(_.e)),
        _.b && (_.b = u.s + G(_.b))
}, ln = function(t, e) {
    var i = t[0] ? wt(t[0]).harness : 0, r = i && i.aliases, n, s, a, o;
    if (!r)
        return e;
    n = zt({}, e);
    for (s in r)
        if (s in n)
            for (o = r[s].split(","),
            a = o.length; a--; )
                n[o[a]] = n[s];
    return n
}, cn = function(t, e, i, r) {
    var n = e.ease || r || "power1.inOut", s, a;
    if (Q(e))
        a = i[t] || (i[t] = []),
        e.forEach(function(o, u) {
            return a.push({
                t: u / (e.length - 1) * 100,
                v: o,
                e: n
            })
        });
    else
        for (s in e)
            a = i[s] || (i[s] = []),
            s === "ease" || a.push({
                t: parseFloat(t),
                v: e[s],
                e: n
            })
}, fe = function(t, e, i, r, n) {
    return L(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? Qt(t) : t
}, or = qe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", ur = {};
Z(or + ",id,stagger,delay,duration,paused,scrollTrigger", function(f) {
    return ur[f] = 1
});
var I = function(f) {
    ki(t, f);
    function t(i, r, n, s) {
        var a;
        typeof r == "number" && (n.duration = r,
        r = n,
        n = null),
        a = f.call(this, s ? r : ie(r)) || this;
        var o = a.vars, u = o.duration, _ = o.delay, l = o.immediateRender, c = o.stagger, d = o.overwrite, p = o.keyframes, h = o.defaults, m = o.scrollTrigger, g = o.yoyoEase, y = r.parent || E, v = (Q(i) || Ci(i) ? gt(i[0]) : "length"in r) ? [i] : ut(i), T, x, S, P, b, w, O, C;
        if (a._targets = v.length ? Ge(v) : ye("GSAP target " + i + " not found. https://greensock.com", !J.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        p || c || pe(u) || pe(_)) {
            if (r = a.vars,
            T = a.timeline = new j({
                data: "nested",
                defaults: h || {},
                targets: y && y.data === "nested" ? y.vars.targets : v
            }),
            T.kill(),
            T.parent = T._dp = mt(a),
            T._start = 0,
            c || pe(u) || pe(_)) {
                if (P = v.length,
                O = c && Qi(c),
                ht(c))
                    for (b in c)
                        ~or.indexOf(b) && (C || (C = {}),
                        C[b] = c[b]);
                for (x = 0; x < P; x++)
                    S = we(r, ur),
                    S.stagger = 0,
                    g && (S.yoyoEase = g),
                    C && zt(S, C),
                    w = v[x],
                    S.duration = +fe(u, mt(a), x, w, v),
                    S.delay = (+fe(_, mt(a), x, w, v) || 0) - a._delay,
                    !c && P === 1 && S.delay && (a._delay = _ = S.delay,
                    a._start += _,
                    S.delay = 0),
                    T.to(w, S, O ? O(x, w, v) : 0),
                    T._ease = k.none;
                T.duration() ? u = _ = 0 : a.timeline = 0
            } else if (p) {
                ie(at(T.vars.defaults, {
                    ease: "none"
                })),
                T._ease = Bt(p.ease || r.ease || "none");
                var F = 0, N, V, A;
                if (Q(p))
                    p.forEach(function(Y) {
                        return T.to(v, Y, ">")
                    }),
                    T.duration();
                else {
                    S = {};
                    for (b in p)
                        b === "ease" || b === "easeEach" || cn(b, p[b], S, p.easeEach);
                    for (b in S)
                        for (N = S[b].sort(function(Y, U) {
                            return Y.t - U.t
                        }),
                        F = 0,
                        x = 0; x < N.length; x++)
                            V = N[x],
                            A = {
                                ease: V.e,
                                duration: (V.t - (x ? N[x - 1].t : 0)) / 100 * u
                            },
                            A[b] = V.v,
                            T.to(v, A, F),
                            F += A.duration;
                    T.duration() < u && T.to({}, {
                        duration: u - T.duration()
                    })
                }
            }
            u || a.duration(u = T.duration())
        } else
            a.timeline = 0;
        return d === !0 && !Ee && (St = mt(a),
        E.killTweensOf(v),
        St = 0),
        lt(y, mt(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (l || !u && !p && a._start === q(y._time) && tt(l) && Xr(mt(a)) && y.data !== "nested") && (a._tTime = -M,
        a.render(Math.max(0, -_) || 0)),
        m && Yi(mt(a), m),
        a
    }
    var e = t.prototype;
    return e.render = function(r, n, s) {
        var a = this._time, o = this._tDur, u = this._dur, _ = r < 0, l = r > o - M && !_ ? o : r < M ? 0 : r, c, d, p, h, m, g, y, v, T;
        if (!u)
            Gr(this, r, n, s);
        else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
            if (c = l,
            v = this.timeline,
            this._repeat) {
                if (h = u + this._rDelay,
                this._repeat < -1 && _)
                    return this.totalTime(h * 100 + r, n, s);
                if (c = q(l % h),
                l === o ? (p = this._repeat,
                c = u) : (p = ~~(l / h),
                p && p === l / h && (c = u,
                p--),
                c > u && (c = u)),
                g = this._yoyo && p & 1,
                g && (T = this._yEase,
                c = u - c),
                m = Gt(this._tTime, h),
                c === a && !s && this._initted)
                    return this._tTime = l,
                    this;
                p !== m && (v && this._yEase && sr(v, g),
                this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1,
                this.render(q(h * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Xi(this, _ ? r : c, s, n, l))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (u !== this._dur)
                    return this.render(r, n, s)
            }
            if (this._tTime = l,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = y = (T || this._ease)(c / u),
            this._from && (this.ratio = y = 1 - y),
            c && !a && !n && !p && (ft(this, "onStart"),
            this._tTime !== l))
                return this;
            for (d = this._pt; d; )
                d.r(y, d.d),
                d = d._next;
            v && v.render(r < 0 ? r : !c && g ? -M : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r),
            this._onUpdate && !n && (_ && Qe(this, r, n, s),
            ft(this, "onUpdate")),
            this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && ft(this, "onRepeat"),
            (l === this._tDur || !l) && this._tTime === l && (_ && !this._onUpdate && Qe(this, r, !0, !0),
            (r || !u) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && bt(this, 1),
            !n && !(_ && !a) && (l || a || g) && (ft(this, l === o ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(l < o && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        f.prototype.invalidate.call(this, r)
    }
    ,
    e.resetTo = function(r, n, s, a) {
        oe || it.wake(),
        this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || ai(this, o),
        u = this._ease(o / this._dur),
        hn(this, r, n, s, a, u, o) ? this.resetTo(r, n, s, a) : (ke(this, 0),
        this.parent || Ni(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    e.kill = function(r, n) {
        if (n === void 0 && (n = "all"),
        !r && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? se(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, St && St.vars.overwrite !== !0)._first || se(this),
            this.parent && s !== this.timeline.totalDuration() && Wt(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var a = this._targets, o = r ? ut(r) : a, u = this._ptLookup, _ = this._pt, l, c, d, p, h, m, g;
        if ((!n || n === "all") && Ur(a, o))
            return n === "all" && (this._pt = 0),
            se(this);
        for (l = this._op = this._op || [],
        n !== "all" && (X(n) && (h = {},
        Z(n, function(y) {
            return h[y] = 1
        }),
        n = h),
        n = ln(a, n)),
        g = a.length; g--; )
            if (~o.indexOf(a[g])) {
                c = u[g],
                n === "all" ? (l[g] = n,
                p = c,
                d = {}) : (d = l[g] = l[g] || {},
                p = n);
                for (h in p)
                    m = c && c[h],
                    m && ((!("kill"in m.d) || m.d.kill(h) === !0) && be(this, m, "_pt"),
                    delete c[h]),
                    d !== "all" && (d[h] = 1)
            }
        return this._initted && !this._pt && _ && se(this),
        this
    }
    ,
    t.to = function(r, n) {
        return new t(r,n,arguments[2])
    }
    ,
    t.from = function(r, n) {
        return re(1, arguments)
    }
    ,
    t.delayedCall = function(r, n, s, a) {
        return new t(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }
    ,
    t.fromTo = function(r, n, s) {
        return re(2, arguments)
    }
    ,
    t.set = function(r, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new t(r,n)
    }
    ,
    t.killTweensOf = function(r, n, s) {
        return E.killTweensOf(r, n, s)
    }
    ,
    t
}(ue);
at(I.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(f) {
    I[f] = function() {
        var t = new j
          , e = Ke.call(arguments, 0);
        return e.splice(f === "staggerFromTo" ? 5 : 4, 0, 0),
        t[f].apply(t, e)
    }
});
var oi = function(t, e, i) {
    return t[e] = i
}
  , fr = function(t, e, i) {
    return t[e](i)
}
  , dn = function(t, e, i, r) {
    return t[e](r.fp, i)
}
  , pn = function(t, e, i) {
    return t.setAttribute(e, i)
}
  , Oe = function(t, e) {
    return L(t[e]) ? fr : de(t[e]) && t.setAttribute ? pn : oi
}
  , _r = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
  , mn = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
  , ui = function(t, e) {
    var i = e._pt
      , r = "";
    if (!t && e.b)
        r = e.b;
    else if (t === 1 && e.e)
        r = e.e;
    else {
        for (; i; )
            r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r,
            i = i._next;
        r += e.c
    }
    e.set(e.t, e.p, r, e)
}
  , fi = function(t, e) {
    for (var i = e._pt; i; )
        i.r(t, i.d),
        i = i._next
}
  , gn = function(t, e, i, r) {
    for (var n = this._pt, s; n; )
        s = n._next,
        n.p === r && n.modifier(t, e, i),
        n = s
}
  , yn = function(t) {
    for (var e = this._pt, i, r; e; )
        r = e._next,
        e.p === t && !e.op || e.op === t ? be(this, e, "_pt") : e.dep || (i = 1),
        e = r;
    return !i
}
  , xn = function(t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
}
  , _i = function(t) {
    for (var e = t._pt, i, r, n, s; e; ) {
        for (i = e._next,
        r = n; r && r.pr > e.pr; )
            r = r._next;
        (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e,
        (e._next = r) ? r._prev = e : s = e,
        e = i
    }
    t._pt = n
}
  , $ = function() {
    function f(e, i, r, n, s, a, o, u, _) {
        this.t = i,
        this.s = n,
        this.c = s,
        this.p = r,
        this.r = a || _r,
        this.d = o || this,
        this.set = u || oi,
        this.pr = _ || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = f.prototype;
    return t.modifier = function(i, r, n) {
        this.mSet = this.mSet || this.set,
        this.set = xn,
        this.m = i,
        this.mt = n,
        this.tween = r
    }
    ,
    f
}();
Z(qe + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(f) {
    return Ue[f] = 1
});
rt.TweenMax = rt.TweenLite = I;
rt.TimelineLite = rt.TimelineMax = j;
E = new j({
    sortChildren: !1,
    defaults: qt,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
J.stringFilter = Je;
var Nt = []
  , Ce = {}
  , vn = []
  , hr = 0
  , Tn = 0
  , hi = function(t) {
    return (Ce[t] || vn).map(function(e) {
        return e()
    })
}
  , li = function() {
    var t = Date.now()
      , e = [];
    t - hr > 2 && (hi("matchMediaInit"),
    Nt.forEach(function(i) {
        var r = i.queries, n = i.conditions, s, a, o, u;
        for (a in r)
            s = st.matchMedia(r[a]).matches,
            s && (o = 1),
            s !== n[a] && (n[a] = s,
            u = 1);
        u && (i.revert(),
        o && e.push(i))
    }),
    hi("matchMediaRevert"),
    e.forEach(function(i) {
        return i.onMatch(i)
    }),
    hr = t,
    hi("matchMedia"))
}
  , lr = function() {
    function f(e, i) {
        this.selector = i && He(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Tn++,
        e && this.add(e)
    }
    var t = f.prototype;
    return t.add = function(i, r, n) {
        L(i) && (n = r,
        r = i,
        i = L);
        var s = this
          , a = function() {
            var u = z, _ = s.selector, l;
            return u && u !== s && u.data.push(s),
            n && (s.selector = He(n)),
            z = s,
            l = r.apply(s, arguments),
            L(l) && s._r.push(l),
            z = u,
            s.selector = _,
            s.isReverted = !1,
            l
        };
        return s.last = a,
        i === L ? a(s) : i ? s[i] = a : a
    }
    ,
    t.ignore = function(i) {
        var r = z;
        z = null,
        i(this),
        z = r
    }
    ,
    t.getTweens = function() {
        var i = [];
        return this.data.forEach(function(r) {
            return r instanceof f ? i.push.apply(i, r.getTweens()) : r instanceof I && !(r.parent && r.parent.data === "nested") && i.push(r)
        }),
        i
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(i, r) {
        var n = this;
        if (i) {
            var s = this.getTweens();
            this.data.forEach(function(o) {
                o.data === "isFlip" && (o.revert(),
                o.getChildren(!0, !0, !1).forEach(function(u) {
                    return s.splice(s.indexOf(u), 1)
                }))
            }),
            s.map(function(o) {
                return {
                    g: o.globalTime(0),
                    t: o
                }
            }).sort(function(o, u) {
                return u.g - o.g || -1 / 0
            }).forEach(function(o) {
                return o.t.revert(i)
            }),
            this.data.forEach(function(o) {
                return !(o instanceof I) && o.revert && o.revert(i)
            }),
            this._r.forEach(function(o) {
                return o(i, n)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(o) {
                return o.kill && o.kill()
            });
        if (this.clear(),
        r)
            for (var a = Nt.length; a--; )
                Nt[a].id === this.id && Nt.splice(a, 1)
    }
    ,
    t.revert = function(i) {
        this.kill(i || {})
    }
    ,
    f
}()
  , wn = function() {
    function f(e) {
        this.contexts = [],
        this.scope = e
    }
    var t = f.prototype;
    return t.add = function(i, r, n) {
        ht(i) || (i = {
            matches: i
        });
        var s = new lr(0,n || this.scope), a = s.conditions = {}, o, u, _;
        z && !s.selector && (s.selector = z.selector),
        this.contexts.push(s),
        r = s.add("onMatch", r),
        s.queries = i;
        for (u in i)
            u === "all" ? _ = 1 : (o = st.matchMedia(i[u]),
            o && (Nt.indexOf(s) < 0 && Nt.push(s),
            (a[u] = o.matches) && (_ = 1),
            o.addListener ? o.addListener(li) : o.addEventListener("change", li)));
        return _ && r(s),
        this
    }
    ,
    t.revert = function(i) {
        this.kill(i || {})
    }
    ,
    t.kill = function(i) {
        this.contexts.forEach(function(r) {
            return r.kill(i, !0)
        })
    }
    ,
    f
}()
  , Me = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        e.forEach(function(r) {
            return tr(r)
        })
    },
    timeline: function(t) {
        return new j(t)
    },
    getTweensOf: function(t, e) {
        return E.getTweensOf(t, e)
    },
    getProperty: function(t, e, i, r) {
        X(t) && (t = ut(t)[0]);
        var n = wt(t || {}).get
          , s = i ? Bi : Li;
        return i === "native" && (i = ""),
        t && (e ? s((et[e] && et[e].get || n)(t, e, i, r)) : function(a, o, u) {
            return s((et[a] && et[a].get || n)(t, a, o, u))
        }
        )
    },
    quickSetter: function(t, e, i) {
        if (t = ut(t),
        t.length > 1) {
            var r = t.map(function(_) {
                return K.quickSetter(_, e, i)
            })
              , n = r.length;
            return function(_) {
                for (var l = n; l--; )
                    r[l](_)
            }
        }
        t = t[0] || {};
        var s = et[e]
          , a = wt(t)
          , o = a.harness && (a.harness.aliases || {})[e] || e
          , u = s ? function(_) {
            var l = new s;
            jt._pt = 0,
            l.init(t, i ? _ + i : _, jt, 0, [t]),
            l.render(1, l),
            jt._pt && fi(1, jt)
        }
        : a.set(t, o);
        return s ? u : function(_) {
            return u(t, o, i ? _ + i : _, a, 1)
        }
    },
    quickTo: function(t, e, i) {
        var r, n = K.to(t, zt((r = {},
        r[e] = "+=0.1",
        r.paused = !0,
        r), i || {})), s = function(o, u, _) {
            return n.resetTo(e, o, u, _)
        };
        return s.tween = n,
        s
    },
    isTweening: function(t) {
        return E.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Bt(t.ease, qt.ease)),
        Ii(qt, t || {})
    },
    config: function(t) {
        return Ii(J, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
          , i = t.effect
          , r = t.plugins
          , n = t.defaults
          , s = t.extendTimeline;
        (r || "").split(",").forEach(function(a) {
            return a && !et[a] && !rt[a] && ye(e + " effect requires " + a + " plugin.")
        }),
        Xe[e] = function(a, o, u) {
            return i(ut(a), at(o || {}, n), u)
        }
        ,
        s && (j.prototype[e] = function(a, o, u) {
            return this.add(Xe[e](a, ht(o) ? o : (u = o) && {}, this), u)
        }
        )
    },
    registerEase: function(t, e) {
        k[t] = Bt(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? Bt(t, e) : k
    },
    getById: function(t) {
        return E.getById(t)
    },
    exportRoot: function(t, e) {
        t === void 0 && (t = {});
        var i = new j(t), r, n;
        for (i.smoothChildTiming = tt(t.smoothChildTiming),
        E.remove(i),
        i._dp = 0,
        i._time = i._tTime = E._time,
        r = E._first; r; )
            n = r._next,
            (e || !(!r._dur && r instanceof I && r.vars.onComplete === r._targets[0])) && lt(i, r, r._start - r._delay),
            r = n;
        return lt(E, i, 0),
        i
    },
    context: function(t, e) {
        return t ? new lr(t,e) : z
    },
    matchMedia: function(t) {
        return new wn(t)
    },
    matchMediaRefresh: function() {
        return Nt.forEach(function(t) {
            var e = t.conditions, i, r;
            for (r in e)
                e[r] && (e[r] = !1,
                i = 1);
            i && t.revert()
        }) || li()
    },
    addEventListener: function(t, e) {
        var i = Ce[t] || (Ce[t] = []);
        ~i.indexOf(e) || i.push(e)
    },
    removeEventListener: function(t, e) {
        var i = Ce[t]
          , r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1)
    },
    utils: {
        wrap: Jr,
        wrapYoyo: tn,
        distribute: Qi,
        random: Ki,
        snap: ji,
        normalize: $r,
        getUnit: G,
        clamp: jr,
        splitColor: er,
        toArray: ut,
        selector: He,
        mapRange: Zi,
        pipe: Hr,
        unitize: Zr,
        interpolate: en,
        shuffle: Wi
    },
    install: Ai,
    effects: Xe,
    ticker: it,
    updateRoot: j.updateRoot,
    plugins: et,
    globalTimeline: E,
    core: {
        PropTween: $,
        globals: Ei,
        Tween: I,
        Timeline: j,
        Animation: ue,
        getCache: wt,
        _removeLinkedListItem: be,
        reverting: function() {
            return W
        },
        context: function(t) {
            return t && z && (z.data.push(t),
            t._ctx = z),
            z
        },
        suppressOverwrites: function(t) {
            return Ee = t
        }
    }
};
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(f) {
    return Me[f] = I[f]
});
it.add(j.updateRoot);
jt = Me.to({}, {
    duration: 0
});
var bn = function(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
    return i
}
  , Pn = function(t, e) {
    var i = t._targets, r, n, s;
    for (r in e)
        for (n = i.length; n--; )
            s = t._ptLookup[n][r],
            s && (s = s.d) && (s._pt && (s = bn(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r))
}
  , ci = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(r, n, s) {
            s._onInit = function(a) {
                var o, u;
                if (X(n) && (o = {},
                Z(n, function(_) {
                    return o[_] = 1
                }),
                n = o),
                e) {
                    o = {};
                    for (u in n)
                        o[u] = e(n[u]);
                    n = o
                }
                Pn(a, n)
            }
        }
    }
}
  , K = Me.registerPlugin({
    name: "attr",
    init: function(t, e, i, r, n) {
        var s, a, o;
        this.tween = i;
        for (s in e)
            o = t.getAttribute(s) || "",
            a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s),
            a.op = s,
            a.b = o,
            this._props.push(s)
    },
    render: function(t, e) {
        for (var i = e._pt; i; )
            W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
    }
}, ci("roundProps", Ze), ci("modifiers"), ci("snap", ji)) || Me;
I.version = j.version = K.version = "3.12.2";
Di = 1;
Fe() && Kt();
var Sn = k.Power0
  , kn = k.Power1
  , On = k.Power2
  , Cn = k.Power3
  , Mn = k.Power4
  , Dn = k.Linear
  , An = k.Quad
  , En = k.Cubic
  , Rn = k.Quart
  , Fn = k.Quint
  , zn = k.Strong
  , Ln = k.Elastic
  , Bn = k.Back
  , In = k.SteppedEase
  , Nn = k.Bounce
  , Vn = k.Sine
  , Un = k.Expo
  , Yn = k.Circ;
var cr, kt, Ht, di, Vt, Xn, dr, pi, qn = function() {
    return typeof window != "undefined"
}, xt = {}, Ut = 180 / Math.PI, Zt = Math.PI / 180, $t = Math.atan2, pr = 1e8, mi = /([A-Z])/g, Gn = /(left|right|width|margin|padding|x)/i, Wn = /[\s,\(]\S/, ct = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, gi = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Qn = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, jn = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, Kn = function(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
}, mr = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, gr = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, Hn = function(t, e, i) {
    return t.style[e] = i
}, Zn = function(t, e, i) {
    return t.style.setProperty(e, i)
}, $n = function(t, e, i) {
    return t._gsap[e] = i
}, Jn = function(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i
}, ts = function(t, e, i, r, n) {
    var s = t._gsap;
    s.scaleX = s.scaleY = i,
    s.renderTransform(n, s)
}, es = function(t, e, i, r, n) {
    var s = t._gsap;
    s[e] = i,
    s.renderTransform(n, s)
}, R = "transform", _t = R + "Origin", is = function f(t, e) {
    var i = this
      , r = this.target
      , n = r.style;
    if (t in xt && n) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = ct[t] || t,
            ~t.indexOf(",") ? t.split(",").forEach(function(s) {
                return i.tfm[s] = vt(r, s)
            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : vt(r, t);
        else
            return ct.transform.split(",").forEach(function(s) {
                return f.call(i, s, e)
            });
        if (this.props.indexOf(R) >= 0)
            return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(_t, e, "")),
        t = R
    }
    (n || e) && this.props.push(t, e, n[t])
}, yr = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, rs = function() {
    var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
    for (n = 0; n < t.length; n += 3)
        t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(mi, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            r[s] = this.tfm[s];
        r.svg && (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        n = pi(),
        (!n || !n.isStart) && !i[R] && (yr(i),
        r.uncache = 1)
    }
}, xr = function(t, e) {
    var i = {
        target: t,
        props: [],
        revert: rs,
        save: is
    };
    return t._gsap || K.core.getCache(t),
    e && e.split(",").forEach(function(r) {
        return i.save(r)
    }),
    i
}, vr, yi = function(t, e) {
    var i = kt.createElementNS ? kt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : kt.createElement(t);
    return i.style ? i : kt.createElement(t)
}, dt = function f(t, e, i) {
    var r = getComputedStyle(t);
    return r[e] || r.getPropertyValue(e.replace(mi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && f(t, Jt(e) || e, 1) || ""
}, Tr = "O,Moz,ms,Ms,Webkit".split(","), Jt = function(t, e, i) {
    var r = e || Vt
      , n = r.style
      , s = 5;
    if (t in n && !i)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Tr[s] + t in n); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Tr[s] : "") + t
}, xi = function() {
    qn() && window.document && (cr = window,
    kt = cr.document,
    Ht = kt.documentElement,
    Vt = yi("div") || {
        style: {}
    },
    Xn = yi("div"),
    R = Jt(R),
    _t = R + "Origin",
    Vt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    vr = !!Jt("perspective"),
    pi = K.core.reverting,
    di = 1)
}, vi = function f(t) {
    var e = yi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
    if (Ht.appendChild(e),
    e.appendChild(this),
    this.style.display = "block",
    t)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = f
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
    Ht.removeChild(e),
    this.style.cssText = n,
    s
}, wr = function(t, e) {
    for (var i = e.length; i--; )
        if (t.hasAttribute(e[i]))
            return t.getAttribute(e[i])
}, br = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = vi.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === vi || (e = vi.call(t, !0)),
    e && !e.width && !e.x && !e.y ? {
        x: +wr(t, ["x", "cx", "x1"]) || 0,
        y: +wr(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : e
}, Pr = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && br(t))
}, _e = function(t, e) {
    if (e) {
        var i = t.style;
        e in xt && e !== _t && (e = R),
        i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
        i.removeProperty(e.replace(mi, "-$1").toLowerCase())) : i.removeAttribute(e)
    }
}, Ot = function(t, e, i, r, n, s) {
    var a = new $(t._pt,e,i,0,1,s ? gr : mr);
    return t._pt = a,
    a.b = r,
    a.e = n,
    t._props.push(i),
    a
}, Sr = {
    deg: 1,
    rad: 1,
    turn: 1
}, ns = {
    grid: 1,
    flex: 1
}, Ct = function f(t, e, i, r) {
    var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = Vt.style, o = Gn.test(e), u = t.tagName.toLowerCase() === "svg", _ = (u ? "client" : "offset") + (o ? "Width" : "Height"), l = 100, c = r === "px", d = r === "%", p, h, m, g;
    return r === s || !n || Sr[r] || Sr[s] ? n : (s !== "px" && !c && (n = f(t, e, i, "px")),
    g = t.getCTM && Pr(t),
    (d || s === "%") && (xt[e] || ~e.indexOf("adius")) ? (p = g ? t.getBBox()[o ? "width" : "height"] : t[_],
    B(d ? n / p * l : n / 100 * p)) : (a[o ? "width" : "height"] = l + (c ? s : r),
    h = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode,
    g && (h = (t.ownerSVGElement || {}).parentNode),
    (!h || h === kt || !h.appendChild) && (h = kt.body),
    m = h._gsap,
    m && d && m.width && o && m.time === it.time && !m.uncache ? B(n / m.width * l) : ((d || s === "%") && !ns[dt(h, "display")] && (a.position = dt(t, "position")),
    h === t && (a.position = "static"),
    h.appendChild(Vt),
    p = Vt[_],
    h.removeChild(Vt),
    a.position = "absolute",
    o && d && (m = wt(h),
    m.time = it.time,
    m.width = h[_]),
    B(c ? p * n / l : p && n ? l / p * n : 0))))
}, vt = function(t, e, i, r) {
    var n;
    return di || xi(),
    e in ct && e !== "transform" && (e = ct[e],
    ~e.indexOf(",") && (e = e.split(",")[0])),
    xt[e] && e !== "transform" ? (n = le(t, r),
    n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Ae(dt(t, _t)) + " " + n.zOrigin + "px") : (n = t.style[e],
    (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = De[e] && De[e](t, e, i) || dt(t, e) || We(t, e) || (e === "opacity" ? 1 : 0))),
    i && !~(n + "").trim().indexOf(" ") ? Ct(t, e, n, i) + i : n
}, ss = function(t, e, i, r) {
    if (!i || i === "none") {
        var n = Jt(e, t, 1)
          , s = n && dt(t, n, 1);
        s && s !== i ? (e = n,
        i = s) : e === "borderColor" && (i = dt(t, "borderTopColor"))
    }
    var a = new $(this._pt,t.style,e,0,1,ui), o = 0, u = 0, _, l, c, d, p, h, m, g, y, v, T, x;
    if (a.b = i,
    a.e = r,
    i += "",
    r += "",
    r === "auto" && (t.style[e] = r,
    r = dt(t, e) || r,
    t.style[e] = i),
    _ = [i, r],
    Je(_),
    i = _[0],
    r = _[1],
    c = i.match(Rt) || [],
    x = r.match(Rt) || [],
    x.length) {
        for (; l = Rt.exec(r); )
            m = l[0],
            y = r.substring(o, l.index),
            p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
            m !== (h = c[u++] || "") && (d = parseFloat(h) || 0,
            T = h.substr((d + "").length),
            m.charAt(1) === "=" && (m = Ft(d, m) + T),
            g = parseFloat(m),
            v = m.substr((g + "").length),
            o = Rt.lastIndex - v.length,
            v || (v = v || J.units[e] || T,
            o === r.length && (r += v,
            a.e += v)),
            T !== v && (d = Ct(t, e, h, v) || 0),
            a._pt = {
                _next: a._pt,
                p: y || u === 1 ? y : ",",
                s: d,
                c: g - d,
                m: p && p < 4 || e === "zIndex" ? Math.round : 0
            });
        a.c = o < r.length ? r.substring(o, r.length) : ""
    } else
        a.r = e === "display" && r === "none" ? gr : mr;
    return Ie.test(r) && (a.e = 0),
    this._pt = a,
    a
}, kr = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, as = function(t) {
    var e = t.split(" ")
      , i = e[0]
      , r = e[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i,
    i = r,
    r = t),
    e[0] = kr[i] || i,
    e[1] = kr[r] || r,
    e.join(" ")
}, os = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o, u;
        if (n === "all" || n === !0)
            r.cssText = "",
            o = 1;
        else
            for (n = n.split(","),
            u = n.length; --u > -1; )
                a = n[u],
                xt[a] && (o = 1,
                a = a === "transformOrigin" ? _t : R),
                _e(i, a);
        o && (_e(i, R),
        s && (s.svg && i.removeAttribute("transform"),
        le(i, 1),
        s.uncache = 1,
        yr(r)))
    }
}, De = {
    clearProps: function(t, e, i, r, n) {
        if (n.data !== "isFromStart") {
            var s = t._pt = new $(t._pt,e,i,0,0,os);
            return s.u = r,
            s.pr = -10,
            s.tween = n,
            t._props.push(i),
            1
        }
    }
}, he = [1, 0, 0, 1, 0, 0], Or = {}, Cr = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Mr = function(t) {
    var e = dt(t, R);
    return Cr(e) ? he : e.substr(7).match(Le).map(B)
}, Ti = function(t, e) {
    var i = t._gsap || wt(t), r = t.style, n = Mr(t), s, a, o, u;
    return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix,
    n = [o.a, o.b, o.c, o.d, o.e, o.f],
    n.join(",") === "1,0,0,1,0,0" ? he : n) : (n === he && !t.offsetParent && t !== Ht && !i.svg && (o = r.display,
    r.display = "block",
    s = t.parentNode,
    (!s || !t.offsetParent) && (u = 1,
    a = t.nextElementSibling,
    Ht.appendChild(t)),
    n = Mr(t),
    o ? r.display = o : _e(t, "display"),
    u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Ht.removeChild(t))),
    e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, wi = function(t, e, i, r, n, s) {
    var a = t._gsap, o = n || Ti(t, !0), u = a.xOrigin || 0, _ = a.yOrigin || 0, l = a.xOffset || 0, c = a.yOffset || 0, d = o[0], p = o[1], h = o[2], m = o[3], g = o[4], y = o[5], v = e.split(" "), T = parseFloat(v[0]) || 0, x = parseFloat(v[1]) || 0, S, P, b, w;
    i ? o !== he && (P = d * m - p * h) && (b = T * (m / P) + x * (-h / P) + (h * y - m * g) / P,
    w = T * (-p / P) + x * (d / P) - (d * y - p * g) / P,
    T = b,
    x = w) : (S = br(t),
    T = S.x + (~v[0].indexOf("%") ? T / 100 * S.width : T),
    x = S.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * S.height : x)),
    r || r !== !1 && a.smooth ? (g = T - u,
    y = x - _,
    a.xOffset = l + (g * d + y * h) - g,
    a.yOffset = c + (g * p + y * m) - y) : a.xOffset = a.yOffset = 0,
    a.xOrigin = T,
    a.yOrigin = x,
    a.smooth = !!r,
    a.origin = e,
    a.originIsAbsolute = !!i,
    t.style[_t] = "0px 0px",
    s && (Ot(s, a, "xOrigin", u, T),
    Ot(s, a, "yOrigin", _, x),
    Ot(s, a, "xOffset", l, a.xOffset),
    Ot(s, a, "yOffset", c, a.yOffset)),
    t.setAttribute("data-svg-origin", T + " " + x)
}, le = function(t, e) {
    var i = t._gsap || new ii(t);
    if ("x"in i && !e && !i.uncache)
        return i;
    var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), u = dt(t, _t) || "0", _, l, c, d, p, h, m, g, y, v, T, x, S, P, b, w, O, C, F, N, V, A, Y, U, H, Mt, Dt, te, At, Si, pt, Et;
    return _ = l = c = h = m = g = y = v = T = 0,
    d = p = 1,
    i.svg = !!(t.getCTM && Pr(t)),
    o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[R] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[R] !== "none" ? o[R] : "")),
    r.scale = r.rotate = r.translate = "none"),
    P = Ti(t, i.svg),
    i.svg && (i.uncache ? (H = t.getBBox(),
    u = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px",
    U = "") : U = !e && t.getAttribute("data-svg-origin"),
    wi(t, U || u, !!U || i.originIsAbsolute, i.smooth !== !1, P)),
    x = i.xOrigin || 0,
    S = i.yOrigin || 0,
    P !== he && (C = P[0],
    F = P[1],
    N = P[2],
    V = P[3],
    _ = A = P[4],
    l = Y = P[5],
    P.length === 6 ? (d = Math.sqrt(C * C + F * F),
    p = Math.sqrt(V * V + N * N),
    h = C || F ? $t(F, C) * Ut : 0,
    y = N || V ? $t(N, V) * Ut + h : 0,
    y && (p *= Math.abs(Math.cos(y * Zt))),
    i.svg && (_ -= x - (x * C + S * N),
    l -= S - (x * F + S * V))) : (Et = P[6],
    Si = P[7],
    Dt = P[8],
    te = P[9],
    At = P[10],
    pt = P[11],
    _ = P[12],
    l = P[13],
    c = P[14],
    b = $t(Et, At),
    m = b * Ut,
    b && (w = Math.cos(-b),
    O = Math.sin(-b),
    U = A * w + Dt * O,
    H = Y * w + te * O,
    Mt = Et * w + At * O,
    Dt = A * -O + Dt * w,
    te = Y * -O + te * w,
    At = Et * -O + At * w,
    pt = Si * -O + pt * w,
    A = U,
    Y = H,
    Et = Mt),
    b = $t(-N, At),
    g = b * Ut,
    b && (w = Math.cos(-b),
    O = Math.sin(-b),
    U = C * w - Dt * O,
    H = F * w - te * O,
    Mt = N * w - At * O,
    pt = V * O + pt * w,
    C = U,
    F = H,
    N = Mt),
    b = $t(F, C),
    h = b * Ut,
    b && (w = Math.cos(b),
    O = Math.sin(b),
    U = C * w + F * O,
    H = A * w + Y * O,
    F = F * w - C * O,
    Y = Y * w - A * O,
    C = U,
    A = H),
    m && Math.abs(m) + Math.abs(h) > 359.9 && (m = h = 0,
    g = 180 - g),
    d = B(Math.sqrt(C * C + F * F + N * N)),
    p = B(Math.sqrt(Y * Y + Et * Et)),
    b = $t(A, Y),
    y = Math.abs(b) > 2e-4 ? b * Ut : 0,
    T = pt ? 1 / (pt < 0 ? -pt : pt) : 0),
    i.svg && (U = t.getAttribute("transform"),
    i.forceCSS = t.setAttribute("transform", "") || !Cr(dt(t, R)),
    U && t.setAttribute("transform", U))),
    Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1,
    y += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (p *= -1,
    y += y <= 0 ? 180 : -180)),
    e = e || i.uncache,
    i.x = _ - ((i.xPercent = _ && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s,
    i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s,
    i.z = c + s,
    i.scaleX = B(d),
    i.scaleY = B(p),
    i.rotation = B(h) + a,
    i.rotationX = B(m) + a,
    i.rotationY = B(g) + a,
    i.skewX = y + a,
    i.skewY = v + a,
    i.transformPerspective = T + s,
    (i.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (r[_t] = Ae(u)),
    i.xOffset = i.yOffset = 0,
    i.force3D = J.force3D,
    i.renderTransform = i.svg ? fs : vr ? Dr : us,
    i.uncache = 0,
    i
}, Ae = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, bi = function(t, e, i) {
    var r = G(e);
    return B(parseFloat(e) + parseFloat(Ct(t, "x", i + "px", r))) + r
}, us = function(t, e) {
    e.z = "0px",
    e.rotationY = e.rotationX = "0deg",
    e.force3D = 0,
    Dr(t, e)
}, Yt = "0deg", ce = "0px", Xt = ") ", Dr = function(t, e) {
    var i = e || this
      , r = i.xPercent
      , n = i.yPercent
      , s = i.x
      , a = i.y
      , o = i.z
      , u = i.rotation
      , _ = i.rotationY
      , l = i.rotationX
      , c = i.skewX
      , d = i.skewY
      , p = i.scaleX
      , h = i.scaleY
      , m = i.transformPerspective
      , g = i.force3D
      , y = i.target
      , v = i.zOrigin
      , T = ""
      , x = g === "auto" && t && t !== 1 || g === !0;
    if (v && (l !== Yt || _ !== Yt)) {
        var S = parseFloat(_) * Zt, P = Math.sin(S), b = Math.cos(S), w;
        S = parseFloat(l) * Zt,
        w = Math.cos(S),
        s = bi(y, s, P * w * -v),
        a = bi(y, a, -Math.sin(S) * -v),
        o = bi(y, o, b * w * -v + v)
    }
    m !== ce && (T += "perspective(" + m + Xt),
    (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
    (x || s !== ce || a !== ce || o !== ce) && (T += o !== ce || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Xt),
    u !== Yt && (T += "rotate(" + u + Xt),
    _ !== Yt && (T += "rotateY(" + _ + Xt),
    l !== Yt && (T += "rotateX(" + l + Xt),
    (c !== Yt || d !== Yt) && (T += "skew(" + c + ", " + d + Xt),
    (p !== 1 || h !== 1) && (T += "scale(" + p + ", " + h + Xt),
    y.style[R] = T || "translate(0, 0)"
}, fs = function(t, e) {
    var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.rotation, u = i.skewX, _ = i.skewY, l = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, h = i.yOrigin, m = i.xOffset, g = i.yOffset, y = i.forceCSS, v = parseFloat(s), T = parseFloat(a), x, S, P, b, w;
    o = parseFloat(o),
    u = parseFloat(u),
    _ = parseFloat(_),
    _ && (_ = parseFloat(_),
    u += _,
    o += _),
    o || u ? (o *= Zt,
    u *= Zt,
    x = Math.cos(o) * l,
    S = Math.sin(o) * l,
    P = Math.sin(o - u) * -c,
    b = Math.cos(o - u) * c,
    u && (_ *= Zt,
    w = Math.tan(u - _),
    w = Math.sqrt(1 + w * w),
    P *= w,
    b *= w,
    _ && (w = Math.tan(_),
    w = Math.sqrt(1 + w * w),
    x *= w,
    S *= w)),
    x = B(x),
    S = B(S),
    P = B(P),
    b = B(b)) : (x = l,
    b = c,
    S = P = 0),
    (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = Ct(d, "x", s, "px"),
    T = Ct(d, "y", a, "px")),
    (p || h || m || g) && (v = B(v + p - (p * x + h * P) + m),
    T = B(T + h - (p * S + h * b) + g)),
    (r || n) && (w = d.getBBox(),
    v = B(v + r / 100 * w.width),
    T = B(T + n / 100 * w.height)),
    w = "matrix(" + x + "," + S + "," + P + "," + b + "," + v + "," + T + ")",
    d.setAttribute("transform", w),
    y && (d.style[R] = w)
}, _s = function(t, e, i, r, n) {
    var s = 360, a = X(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? Ut : 1), u = o - r, _ = r + u + "deg", l, c;
    return a && (l = n.split("_")[1],
    l === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    l === "cw" && u < 0 ? u = (u + s * pr) % s - ~~(u / s) * s : l === "ccw" && u > 0 && (u = (u - s * pr) % s - ~~(u / s) * s)),
    t._pt = c = new $(t._pt,e,i,r,u,Qn),
    c.e = _,
    c.u = "deg",
    t._props.push(i),
    c
}, Ar = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, hs = function(t, e, i) {
    var r = Ar({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, o, u, _, l, c, d, p;
    r.svg ? (u = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    s[R] = e,
    a = le(i, 1),
    _e(i, R),
    i.setAttribute("transform", u)) : (u = getComputedStyle(i)[R],
    s[R] = e,
    a = le(i, 1),
    s[R] = u);
    for (o in xt)
        u = r[o],
        _ = a[o],
        u !== _ && n.indexOf(o) < 0 && (d = G(u),
        p = G(_),
        l = d !== p ? Ct(i, o, u, p) : parseFloat(u),
        c = parseFloat(_),
        t._pt = new $(t._pt,a,o,l,c - l,gi),
        t._pt.u = p || 0,
        t._props.push(o));
    Ar(a, r)
};
Z("padding,margin,Width,Radius", function(f, t) {
    var e = "Top"
      , i = "Right"
      , r = "Bottom"
      , n = "Left"
      , s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
        return t < 2 ? f + a : "border" + a + f
    });
    De[t > 1 ? "border" + f : f] = function(a, o, u, _, l) {
        var c, d;
        if (arguments.length < 4)
            return c = s.map(function(p) {
                return vt(a, p, u)
            }),
            d = c.join(" "),
            d.split(c[0]).length === 5 ? c[0] : d;
        c = (_ + "").split(" "),
        d = {},
        s.forEach(function(p, h) {
            return d[p] = c[h] = c[h] || c[(h - 1) / 2 | 0]
        }),
        a.init(o, d, l)
    }
});
var Pi = {
    name: "css",
    register: xi,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, r, n) {
        var s = this._props, a = t.style, o = i.vars.startAt, u, _, l, c, d, p, h, m, g, y, v, T, x, S, P, b;
        di || xi(),
        this.styles = this.styles || xr(t),
        b = this.styles.props,
        this.tween = i;
        for (h in e)
            if (h !== "autoRound" && (_ = e[h],
            !(et[h] && ni(h, e, i, r, t, n)))) {
                if (d = typeof _,
                p = De[h],
                d === "function" && (_ = _.call(i, r, t, n),
                d = typeof _),
                d === "string" && ~_.indexOf("random(") && (_ = Qt(_)),
                p)
                    p(this, t, h, _, i) && (P = 1);
                else if (h.substr(0, 2) === "--")
                    u = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                    _ += "",
                    yt.lastIndex = 0,
                    yt.test(u) || (m = G(u),
                    g = G(_)),
                    g ? m !== g && (u = Ct(t, h, u, g) + g) : m && (_ += m),
                    this.add(a, "setProperty", u, _, r, n, 0, 0, h),
                    s.push(h),
                    b.push(h, 0, a[h]);
                else if (d !== "undefined") {
                    if (o && h in o ? (u = typeof o[h] == "function" ? o[h].call(i, r, t, n) : o[h],
                    X(u) && ~u.indexOf("random(") && (u = Qt(u)),
                    G(u + "") || (u += J.units[h] || G(vt(t, h)) || ""),
                    (u + "").charAt(1) === "=" && (u = vt(t, h))) : u = vt(t, h),
                    c = parseFloat(u),
                    y = d === "string" && _.charAt(1) === "=" && _.substr(0, 2),
                    y && (_ = _.substr(2)),
                    l = parseFloat(_),
                    h in ct && (h === "autoAlpha" && (c === 1 && vt(t, "visibility") === "hidden" && l && (c = 0),
                    b.push("visibility", 0, a.visibility),
                    Ot(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)),
                    h !== "scale" && h !== "transform" && (h = ct[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    v = h in xt,
                    v) {
                        if (this.styles.save(h),
                        T || (x = t._gsap,
                        x.renderTransform && !e.parseTransform || le(t, e.parseTransform),
                        S = e.smoothOrigin !== !1 && x.smooth,
                        T = this._pt = new $(this._pt,a,R,0,1,x.renderTransform,x,0,-1),
                        T.dep = 1),
                        h === "scale")
                            this._pt = new $(this._pt,x,"scaleY",x.scaleY,(y ? Ft(x.scaleY, y + l) : l) - x.scaleY || 0,gi),
                            this._pt.u = 0,
                            s.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            b.push(_t, 0, a[_t]),
                            _ = as(_),
                            x.svg ? wi(t, _, 0, S, 0, this) : (g = parseFloat(_.split(" ")[2]) || 0,
                            g !== x.zOrigin && Ot(this, x, "zOrigin", x.zOrigin, g),
                            Ot(this, a, h, Ae(u), Ae(_)));
                            continue
                        } else if (h === "svgOrigin") {
                            wi(t, _, 1, S, 0, this);
                            continue
                        } else if (h in Or) {
                            _s(this, x, h, c, y ? Ft(c, y + _) : _);
                            continue
                        } else if (h === "smoothOrigin") {
                            Ot(this, x, "smooth", x.smooth, _);
                            continue
                        } else if (h === "force3D") {
                            x[h] = _;
                            continue
                        } else if (h === "transform") {
                            hs(this, _, t);
                            continue
                        }
                    } else
                        h in a || (h = Jt(h) || h);
                    if (v || (l || l === 0) && (c || c === 0) && !Wn.test(_) && h in a)
                        m = (u + "").substr((c + "").length),
                        l || (l = 0),
                        g = G(_) || (h in J.units ? J.units[h] : m),
                        m !== g && (c = Ct(t, h, u, g)),
                        this._pt = new $(this._pt,v ? x : a,h,c,(y ? Ft(c, y + l) : l) - c,!v && (g === "px" || h === "zIndex") && e.autoRound !== !1 ? Kn : gi),
                        this._pt.u = g || 0,
                        m !== g && g !== "%" && (this._pt.b = u,
                        this._pt.r = jn);
                    else if (h in a)
                        ss.call(this, t, h, u, y ? y + _ : _);
                    else if (h in t)
                        this.add(t, h, u || t[h], y ? y + _ : _, r, n);
                    else if (h !== "parseTransform") {
                        ge(h, _);
                        continue
                    }
                    v || (h in a ? b.push(h, 0, a[h]) : b.push(h, 1, u || t[h])),
                    s.push(h)
                }
            }
        P && _i(this)
    },
    render: function(t, e) {
        if (e.tween._time || !pi())
            for (var i = e._pt; i; )
                i.r(t, i.d),
                i = i._next;
        else
            e.styles.revert()
    },
    get: vt,
    aliases: ct,
    getSetter: function(t, e, i) {
        var r = ct[e];
        return r && r.indexOf(",") < 0 && (e = r),
        e in xt && e !== _t && (t._gsap.x || vt(t, "x")) ? i && dr === i ? e === "scale" ? Jn : $n : (dr = i || {}) && (e === "scale" ? ts : es) : t.style && !de(t.style[e]) ? Hn : ~e.indexOf("-") ? Zn : Oe(t, e)
    },
    core: {
        _removeProperty: _e,
        _getMatrix: Ti
    }
};
K.utils.checkPrefix = Jt;
K.core.getStyleSaver = xr;
(function(f, t, e, i) {
    var r = Z(f + "," + t + "," + e, function(n) {
        xt[n] = 1
    });
    Z(t, function(n) {
        J.units[n] = "deg",
        Or[n] = 1
    }),
    ct[r[13]] = f + "," + t,
    Z(i, function(n) {
        var s = n.split(":");
        ct[s[1]] = r[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(f) {
    J.units[f] = "px"
});
K.registerPlugin(Pi);
var ls = K.registerPlugin(Pi) || K
  , vs = ls.core.Tween;
export {ls as a};
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
