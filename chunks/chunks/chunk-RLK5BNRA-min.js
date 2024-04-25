var n = class {
    constructor() {
        this.screenManagerCallbacks = [];
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.mouse = {
            clientX: 0,
            clientY: 0,
            normalizedX: 0,
            normalizedY: 0
        };
        this.subscribe = e=>{
            this.screenManagerCallbacks.push(e)
        }
        ;
        this.unsubscribe = e=>{
            this.screenManagerCallbacks = this.screenManagerCallbacks.filter(i=>e !== i)
        }
        ;
        this.handleResize = ()=>{
            this.innerWidth = window.innerWidth,
            this.innerHeight = window.innerHeight;
            for (let e of this.screenManagerCallbacks)
                setTimeout(e, 0)
        }
        ;
        this.onMouseMove = e=>{
            let {innerWidth: i, innerHeight: t} = this
              , {clientX: s, clientY: r} = e;
            this.mouse.clientX = s,
            this.mouse.clientY = r,
            this.mouse.normalizedX = s / i * 2 - 1,
            this.mouse.normalizedY = r / t * 2 - 1
        }
        ;
        this.kill = ()=>{
            removeEventListener("resize", this.handleResize),
            removeEventListener("mousemove", this.onMouseMove),
            this.resizeObserver.disconnect()
        }
        ;
        this.resizeObserver = new ResizeObserver(this.handleResize),
        this.resizeObserver.observe(document.body),
        addEventListener("resize", this.handleResize),
        addEventListener("mousemove", this.onMouseMove)
    }
    static get instance() {
        return this._instance || (this._instance = new n),
        this._instance
    }
}
;
export {n as a};
