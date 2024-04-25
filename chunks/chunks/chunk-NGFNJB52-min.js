import {a as m} from "./chunk-AFKMFZLY-min.js";
import {a as h} from "./chunk-DJS7JTO5-min.js";
import {a as g} from "./chunk-RLK5BNRA-min.js";
import {a as s} from "./chunk-E3AMLOTO-min.js";
var d = (o,e,r)=>Math.min(Math.max(o, e), r)
  , v = (o,e,r)=>o + (e - o) * r;
var p = {
    vStart: "bottom",
    vEnd: "top",
    dStart: "top",
    dEnd: "bottom",
    clamp: !0
}
  , b = class {
    constructor(e, r={}) {
        this.screenManager = g.instance;
        this.globalScrollManager = h.instance;
        this.calculatePoint = e=>{
            let r = e.trim().split(" ");
            if (r[0] !== "top" && r[0] !== "bottom")
                throw new Error('Invalid scrolling trigger value, "top" or "bottom" required');
            let t = this.domElement.getBoundingClientRect()
              , n = t.top + this.globalScrollManager.scrollY
              , i = r[0] === "top" ? n : n + t.height
              , l = (r == null ? void 0 : r[1]) ? parseInt(r[1]) : 0;
            if (l === 0)
                return i;
            let a = r[1].replace(`${l}`, "");
            if (a !== "px" && a !== "%" && a !== "vh")
                throw new Error('Invalid provided unit for scroll trigger, "px", "%" or "vh" expected');
            let c = 0;
            switch (a) {
            case "%":
                c = i + t.height * (l / 100);
                break;
            case "px":
                c = i + l;
                break;
            case "vh":
                c = i + l * (this.screenManager.innerHeight / 100);
                break
            }
            return c
        }
        ;
        this.handleScreenResize = ()=>{
            this.elementEntryPoint = this.calculatePoint(this.options.dStart || "");
            let r = this.calculatePoint(this.options.dEnd || "") - this.elementEntryPoint
              , {vStart: t, vEnd: n} = this.options
              , i = t === "bottom" && n === "top" ? this.screenManager.innerHeight : t === n ? 0 : -this.screenManager.innerHeight;
            this.globalScrollHeight = r + i
        }
        ;
        let t = m(p, r);
        if (typeof e == "string") {
            let n = document.querySelector(e);
            if (!n)
                throw new Error(`ScrollManager: domElement with selector ${e} not found`);
            this.domElement = n
        } else
            this.domElement = e;
        this.options = t,
        this.handleScreenResize()
    }
    get scrollY() {
        return this.globalScrollManager.scrollY
    }
    get scrollProgression() {
        if (this.elementEntryPoint === void 0 || this.globalScrollHeight === void 0)
            return 0;
        let r = (this.globalScrollManager.scrollY + (this.options.vStart === "bottom" && this.screenManager.innerHeight || 0) - this.elementEntryPoint) / this.globalScrollHeight;
        return this.options.clamp ? d(r, 0, 1) : r
    }
}
;
var u = {
    resizeObserver: !0,
    scrollManagement: !0,
    scrollTriggerElement: null,
    elementResizeManagement: !0,
    intersectionObserver: !0,
    scrollOption: p
}
  , S = class extends HTMLElement {
    constructor(e=u) {
        super();
        this.isInViewPort = !1;
        this.globalScrollManager = h.instance;
        this.handleIntersect = e=>{
            (e == null ? void 0 : e[0].isIntersecting) ? (this.isInViewPort = !0,
            s.ticker.add(this._tick),
            this.enterViewPort()) : (this.isInViewPort = !1,
            s.ticker.remove(this._tick),
            this.leaveViewPort())
        }
        ;
        this.tick = ()=>{}
        ;
        this.handleResize = ()=>{}
        ;
        this.leaveViewPort = ()=>{}
        ;
        this._tick = ()=>{
            this.tick()
        }
        ;
        this._handleResize = ()=>{
            var e;
            (e = this.scrollManager) == null || e.handleScreenResize(),
            this.handleResize()
        }
        ;
        let r = m(u, e)
          , t = (e == null ? void 0 : e.scrollTriggerElement) ? e.scrollTriggerElement : this;
        this.screenManager = g.instance,
        this.scrollManager = r.scrollManagement ? new b(t,r == null ? void 0 : r.scrollOption) : null,
        this.resizeObserver = e.elementResizeManagement ? new ResizeObserver(this._handleResize) : null,
        this.intersectionObserver = r.intersectionObserver ? new IntersectionObserver(this.handleIntersect) : null
    }
    connectedCallback() {
        var e, r;
        this.intersectionObserver !== null ? this.intersectionObserver.observe(this) : s.ticker.add(this._tick),
        this.screenManager.subscribe(this._handleResize),
        (e = this.resizeObserver) == null || e.observe(this),
        (r = this.intersectionObserver) == null || r.observe(this),
        this._handleResize()
    }
    disconnectedCallback() {
        var e;
        s.ticker.remove(this._tick),
        this.screenManager.unsubscribe(this._handleResize),
        (e = this.resizeObserver) == null || e.disconnect(),
        this.resizeObserver = null
    }
    enterViewPort() {}
}
;
export {v as a, S as b};
