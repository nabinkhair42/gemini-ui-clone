import {a as u} from "./chunk-DJS7JTO5-min.js";
import {a as S} from "./chunk-RLK5BNRA-min.js";
import {a as r} from "./chunk-E3AMLOTO-min.js";
var f = (o,e,t)=>Math.min(Math.max(o, e), t);
var v = (o,e)=>{
    let t = {
        ...o
    };
    for (let s in t)
        t[s] = (e == null ? void 0 : e[s]) === void 0 ? t[s] : e[s];
    return t
}
;
var p = {
    vStart: "bottom",
    vEnd: "top",
    dStart: "top",
    dEnd: "bottom",
    clamp: !0
}
  , b = class {
    constructor(e, t={}) {
        this.screenManager = S.instance,
        this.globalScrollManager = u.instance,
        this.calculatePoint = i=>{
            let n = i.trim().split(" ");
            if (n[0] !== "top" && n[0] !== "bottom")
                throw new Error('Invalid scrolling trigger value, "top" or "bottom" required');
            let l = this.domElement.getBoundingClientRect()
              , c = l.top + this.globalScrollManager.scrollY
              , a = n[0] === "top" ? c : c + l.height
              , h = (n == null ? void 0 : n[1]) ? parseInt(n[1]) : 0;
            if (h === 0)
                return a;
            let g = n[1].replace(`${h}`, "");
            if (g !== "px" && g !== "%" && g !== "vh")
                throw new Error('Invalid provided unit for scroll trigger, "px", "%" or "vh" expected');
            let m = 0;
            switch (g) {
            case "%":
                m = a + l.height * (h / 100);
                break;
            case "px":
                m = a + h;
                break;
            case "vh":
                m = a + h * (this.screenManager.innerHeight / 100);
                break
            }
            return m
        }
        ,
        this.handleScreenResize = ()=>{
            this.elementEntryPoint = this.calculatePoint(this.options.dStart || "");
            let n = this.calculatePoint(this.options.dEnd || "") - this.elementEntryPoint
              , {vStart: l, vEnd: c} = this.options
              , a = l === "bottom" && c === "top" ? this.screenManager.innerHeight : l === c ? 0 : -this.screenManager.innerHeight;
            this.globalScrollHeight = n + a
        }
        ;
        let s = v(p, t);
        if (typeof e == "string") {
            let i = document.querySelector(e);
            if (!i)
                throw new Error(`ScrollManager: domElement with selector ${e} not found`);
            this.domElement = i
        } else
            this.domElement = e;
        this.options = s,
        this.handleScreenResize()
    }
    get scrollY() {
        return this.globalScrollManager.scrollY
    }
    get scrollProgression() {
        if (this.elementEntryPoint === void 0 || this.globalScrollHeight === void 0)
            return 0;
        let t = (this.globalScrollManager.scrollY + (this.options.vStart === "bottom" && this.screenManager.innerHeight || 0) - this.elementEntryPoint) / this.globalScrollHeight;
        return this.options.clamp ? f(t, 0, 1) : t
    }
}
;
var d = class {
    static get instance() {
        return this._instance || (this._instance = new d),
        this._instance
    }
    constructor() {
        this.screenManagerCallbacks = [],
        this.innerWidth = window.innerWidth,
        this.innerHeight = window.innerHeight,
        this.mouse = {
            clientX: 0,
            clientY: 0,
            normalizedX: 0,
            normalizedY: 0
        },
        this.subscribe = e=>{
            this.screenManagerCallbacks.push(e)
        }
        ,
        this.unsubscribe = e=>{
            this.screenManagerCallbacks = this.screenManagerCallbacks.filter(t=>e !== t)
        }
        ,
        this.handleResize = ()=>{
            this.innerWidth = window.innerWidth,
            this.innerHeight = window.innerHeight;
            for (let e of this.screenManagerCallbacks)
                setTimeout(e, 0)
        }
        ,
        this.onMouseMove = e=>{
            let {innerWidth: t, innerHeight: s} = this
              , {clientX: i, clientY: n} = e;
            this.mouse.clientX = i,
            this.mouse.clientY = n,
            this.mouse.normalizedX = i / t * 2 - 1,
            this.mouse.normalizedY = n / s * 2 - 1
        }
        ,
        this.kill = ()=>{
            removeEventListener("resize", this.handleResize),
            removeEventListener("mousemove", this.onMouseMove),
            this.resizeObserver.disconnect()
        }
        ,
        this.resizeObserver = new ResizeObserver(this.handleResize),
        this.resizeObserver.observe(document.body),
        addEventListener("resize", this.handleResize),
        addEventListener("mousemove", this.onMouseMove)
    }
}
;
var z = {
    resizeObserver: !0,
    scrollManagement: !0,
    scrollTriggerElement: null,
    elementResizeManagement: !0,
    intersectionObserver: !0,
    scrollOption: p
}
  , M = class extends HTMLElement {
    constructor(e=z) {
        super();
        this.isInViewPort = !1,
        this.globalScrollManager = u.instance,
        this.handleIntersect = i=>{
            (i == null ? void 0 : i[0].isIntersecting) ? (this.isInViewPort = !0,
            r.ticker.add(this._tick),
            this.enterViewPort()) : (this.isInViewPort = !1,
            r.ticker.remove(this._tick),
            this.leaveViewPort())
        }
        ,
        this.tick = ()=>{}
        ,
        this.handleResize = ()=>{}
        ,
        this.leaveViewPort = ()=>{}
        ,
        this._tick = ()=>{
            this.tick()
        }
        ,
        this._handleResize = ()=>{
            var i;
            (i = this.scrollManager) === null || i === void 0 || i.handleScreenResize(),
            this.handleResize()
        }
        ;
        let t = v(z, e)
          , s = (e == null ? void 0 : e.scrollTriggerElement) ? e.scrollTriggerElement : this;
        this.screenManager = d.instance,
        this.scrollManager = t.scrollManagement ? new b(s,t == null ? void 0 : t.scrollOption) : null,
        this.resizeObserver = e.elementResizeManagement ? new ResizeObserver(this._handleResize) : null,
        this.intersectionObserver = t.intersectionObserver ? new IntersectionObserver(this.handleIntersect) : null
    }
    connectedCallback() {
        var e, t;
        this.intersectionObserver !== null ? this.intersectionObserver.observe(this) : r.ticker.add(this._tick),
        this.screenManager.subscribe(this._handleResize),
        (e = this.resizeObserver) === null || e === void 0 || e.observe(this),
        (t = this.intersectionObserver) === null || t === void 0 || t.observe(this),
        this._handleResize()
    }
    disconnectedCallback() {
        var e;
        r.ticker.remove(this._tick),
        this.screenManager.unsubscribe(this._handleResize),
        (e = this.resizeObserver) === null || e === void 0 || e.disconnect(),
        this.resizeObserver = null
    }
    enterViewPort() {}
}
;
var w = class extends M {
    constructor() {
        super();
        this.handleResize = ()=>{
            var e;
            if (this.heading) {
                let t = this.heading.getBoundingClientRect().width
                  , s = t > innerWidth ? t - innerWidth : innerWidth - t;
                (e = this.animationTimeline) === null || e === void 0 || e.kill();
                let i = r.timeline();
                i.to(this.heading, {
                    translateX: -s
                }),
                this.animationTimeline = i
            }
        }
        ,
        this.tick = ()=>{
            !!this.animationTimeline && !!this.scrollManager && this.animationTimeline.progress(this.scrollManager.scrollProgression)
        }
        ,
        this.heading = this.querySelector("#variation_title"),
        this.handleResize(),
        this.animationTimeline = r.timeline()
    }
}
;
export {w as a};
