var l = class {
    constructor() {
        this.scrollY = window.scrollY;
        this.previousScroll = 0;
        this.handleWindowScroll = ()=>{
            this.previousScroll = this.scrollY,
            this.scrollY = window.scrollY
        }
        ;
        this.setup = ()=>{
            window.addEventListener("scroll", this.handleWindowScroll)
        }
        ;
        this.setup()
    }
    static get instance() {
        return this._instance || (this._instance = new l),
        this._instance
    }
    get scrollDirection() {
        return this.scrollY > this.previousScroll ? -1 : this.scrollY < this.previousScroll ? 1 : 0
    }
}
;
export {l as a};
