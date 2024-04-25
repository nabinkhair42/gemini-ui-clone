import {a as p} from "../../chunk-PEATFMNR-min.js";
import "../../chunk-P56TXV5W-min.js";
import {a} from "../../chunk-ODSL2YY7-min.js";
import {a as e} from "../../chunk-PVKMAFVQ-min.js";
import "../../chunk-E27WR637-min.js";
function d({input: s, inputAria: t, output: i, outputAria: n}) {
    return e("div", {
        className: "item images js-item",
        "aria-labelledBy": "context"
    }, e("div", {
        class: "input"
    }, e("span", {
        "aria-label": "input: "
    }, " "), e("div", {
        className: "box"
    }, e("video", {
        src: a("/static/videos/knitting.mp4"),
        muted: !0,
        playsInline: !0,
        width: "540",
        height: "540",
        className: "js-video"
    }), e("div", {
        className: "text js-blur"
    }, e("p", {
        className: "js-blur-alpha",
        "aria-label": t
    }, s)))), e("svg", {
        width: "31",
        height: "16",
        viewBox: "0 0 31 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z",
        fill: "url(#paint0_linear_550_1815)"
    }), e("defs", null, e("linearGradient", {
        id: "paint0_linear_550_1815",
        x1: "29.2857",
        y1: "7.99996",
        x2: "0",
        y2: "7.99997",
        gradientUnits: "userSpaceOnUse"
    }, e("stop", {
        "stop-color": "#076EFF"
    }), e("stop", {
        offset: "0.291667",
        "stop-color": "#4FABFF"
    }), e("stop", {
        offset: "0.614583",
        "stop-color": "#B1C5FF"
    }), e("stop", {
        offset: "0.963542",
        "stop-color": "#FFDDB7"
    })))), e("div", {
        className: "output"
    }, e("span", null, e("span", {
        "aria-label": "Gemini output: "
    }, "Gemini")), e("div", null, e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "274",
        height: "357",
        viewBox: "0 0 274 357",
        fill: "none"
    }, e("path", {
        d: "M2 30C2 14.536 14.536 2 30 2H242.614H244C259.464 2 272 14.536 272 30V327C272 342.464 259.464 355 244 355H30C14.536 355 2 342.464 2 327V30Z",
        stroke: "url(#paint0_linear_550_1808)",
        "stroke-width": "4"
    }), e("defs", null, e("linearGradient", {
        id: "paint0_linear_550_1808",
        x1: "243.685",
        y1: "-95.8483",
        x2: "-75.0875",
        y2: "13.6087",
        gradientUnits: "userSpaceOnUse"
    }, e("stop", {
        "stop-color": "#076EFF"
    }), e("stop", {
        offset: "0.307292",
        "stop-color": "#4FABFF"
    }), e("stop", {
        offset: "0.588542",
        "stop-color": "#B1C5FF"
    }), e("stop", {
        offset: "0.8125",
        "stop-color": "#FFDDB7"
    }), e("stop", {
        offset: "1",
        "stop-color": "#FFB7B7"
    })))), e("div", {
        className: "js-output-alpha"
    }, e("div", {
        className: "box"
    }, e("div", {
        className: "inner js-box-scale"
    }, e("div", {
        className: "inner js-box-scale-inner"
    }, e("img", {
        src: a("/static/images/gallery/pink_and_blue_octopus.jpg"),
        width: "512",
        height: "512",
        loading: "lazy",
        alt: "Pink and blue mouse octopus knit"
    }), e("div", {
        className: "text js-blur",
        "aria-label": n
    }, i.map((o,l)=>e("p", {
        className: "js-blur-alpha",
        key: `sound-output-${l}`
    }, o)))))), e("div", {
        className: "box",
        "aria-hidden": !0,
        role: "none presentation"
    }, e("div", {
        className: "inner js-box-scale"
    }, e("div", {
        className: "inner js-box-scale-inner"
    }, e("img", {
        src: a("/static/images/gallery/pink_and_blue_mouse.jpg"),
        width: "512",
        height: "512",
        alt: "Pink and blue mouse knit"
    }), e("div", {
        className: "text js-blur"
    }, i.map((o,l)=>e("p", {
        className: "js-blur-alpha",
        key: `sound-output-${l}`
    }, o))))))))))
}
function c({input: s, inputAria: t, output: i, outputAria: n}) {
    return e("section-slider-sound", {
        className: "item sound js-item",
        "aria-labelledBy": "context"
    }, e("div", {
        class: "input"
    }, e("span", {
        "aria-label": "input: "
    }, " "), e("p", {
        class: "context sr-only"
    }, t), e("div", {
        className: "box"
    }, e("video", {
        src: a("/static/videos/pxl.mp4"),
        muted: !0,
        loop: !0,
        playsInline: !0,
        width: "406",
        height: "720",
        className: "js-video"
    }), e("div", {
        className: "text js-blur"
    }, e("p", {
        className: "js-blur-alpha"
    }, s && s.split(" ").map(o=>e("span", {
        className: "js-speech"
    }, o, " ", "")))))), e("svg", {
        width: "31",
        height: "16",
        viewBox: "0 0 31 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z",
        fill: "url(#paint0_linear_550_1815)"
    }), e("defs", null, e("linearGradient", {
        id: "paint0_linear_550_1815",
        x1: "29.2857",
        y1: "7.99996",
        x2: "0",
        y2: "7.99997",
        gradientUnits: "userSpaceOnUse"
    }, e("stop", {
        "stop-color": "#076EFF"
    }), e("stop", {
        offset: "0.291667",
        "stop-color": "#4FABFF"
    }), e("stop", {
        offset: "0.614583",
        "stop-color": "#B1C5FF"
    }), e("stop", {
        offset: "0.963542",
        "stop-color": "#FFDDB7"
    })))), e("div", {
        className: "output"
    }, e("span", null, e("span", {
        "aria-label": "Gemini output: "
    }, "Gemini")), e("div", null, e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "274",
        height: "357",
        viewBox: "0 0 274 357",
        fill: "none",
        "aria-hidden": !0
    }, e("path", {
        d: "M2 30C2 14.536 14.536 2 30 2H242.614H244C259.464 2 272 14.536 272 30V327C272 342.464 259.464 355 244 355H30C14.536 355 2 342.464 2 327V30Z",
        stroke: "url(#paint0_linear_550_1808)",
        "stroke-width": "4"
    }), e("defs", null, e("linearGradient", {
        id: "paint0_linear_550_1808",
        x1: "243.685",
        y1: "-95.8483",
        x2: "-75.0875",
        y2: "13.6087",
        gradientUnits: "userSpaceOnUse"
    }, e("stop", {
        "stop-color": "#076EFF"
    }), e("stop", {
        offset: "0.307292",
        "stop-color": "#4FABFF"
    }), e("stop", {
        offset: "0.588542",
        "stop-color": "#B1C5FF"
    }), e("stop", {
        offset: "0.8125",
        "stop-color": "#FFDDB7"
    }), e("stop", {
        offset: "1",
        "stop-color": "#FFB7B7"
    })))), e("div", {
        className: "js-output-alpha"
    }, i.map((o,l)=>e("p", {
        class: "js-stagger",
        key: `sound-output-${l}`
    }, o))))))
}
function m({input: s, inputAria: t, output: i, outputAria: n}) {
    return e("div", {
        className: "item code js-item",
        "aria-labelledBy": "context"
    }, e("div", {
        className: "input"
    }, e("span", {
        "aria-label": "input: "
    }, " "), e("div", {
        className: "box"
    }, e("video", {
        src: a("/static/videos/flocking.mp4"),
        muted: !0,
        loop: !0,
        playsInline: !0,
        width: "1280",
        height: "720",
        className: "js-video"
    }), e("div", {
        className: "text js-blur"
    }, e("p", {
        className: "js-blur-alpha",
        "aria-label": t
    }, s)))), e("svg", {
        width: "31",
        height: "16",
        viewBox: "0 0 31 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z",
        fill: "url(#paint0_linear_550_1815)"
    }), e("defs", null, e("linearGradient", {
        id: "paint0_linear_550_1815",
        x1: "29.2857",
        y1: "7.99996",
        x2: "0",
        y2: "7.99997",
        gradientUnits: "userSpaceOnUse"
    }, e("stop", {
        "stop-color": "#076EFF"
    }), e("stop", {
        offset: "0.291667",
        "stop-color": "#4FABFF"
    }), e("stop", {
        offset: "0.614583",
        "stop-color": "#B1C5FF"
    }), e("stop", {
        offset: "0.963542",
        "stop-color": "#FFDDB7"
    })))), e("div", {
        className: "output"
    }, e("span", null, e("span", {
        "aria-label": "Gemini output: "
    }, "Gemini")), e("div", null, e("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "274",
        height: "357",
        viewBox: "0 0 274 357",
        fill: "none"
    }, e("path", {
        d: "M2 30C2 14.536 14.536 2 30 2H242.614H244C259.464 2 272 14.536 272 30V327C272 342.464 259.464 355 244 355H30C14.536 355 2 342.464 2 327V30Z",
        stroke: "url(#paint0_linear_550_1808)",
        "stroke-width": "4"
    }), e("defs", null, e("linearGradient", {
        id: "paint0_linear_550_1808",
        x1: "243.685",
        y1: "-95.8483",
        x2: "-75.0875",
        y2: "13.6087",
        gradientUnits: "userSpaceOnUse"
    }, e("stop", {
        "stop-color": "#076EFF"
    }), e("stop", {
        offset: "0.307292",
        "stop-color": "#4FABFF"
    }), e("stop", {
        offset: "0.588542",
        "stop-color": "#B1C5FF"
    }), e("stop", {
        offset: "0.8125",
        "stop-color": "#FFDDB7"
    }), e("stop", {
        offset: "1",
        "stop-color": "#FFB7B7"
    })))), e("div", {
        className: "padding js-output-alpha",
        "aria-label": n
    }, i.map((o,l)=>e("span", {
        class: "js-stagger",
        key: `sound-output-${l}`
    }, o)), e("video", {
        src: a("/static/videos/flocking-coded.mp4"),
        muted: !0,
        loop: !0,
        autoPlay: !0,
        playsInline: !0,
        width: "1276",
        height: "720",
        className: "js-stagger"
    }), e("pre", {
        "aria-hidden": !0,
        role: "none presentation",
        className: "js-stagger"
    }, `
class Boid {
  constructor(x, y) {
    this.pos = new p5.Vector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(2, 4));
    this.acc = new p5.Vector();
    this.maxForce = 0.2;
    this.maxSpeed = 4;
  }
}`)))))
}
var r = {
    images: d,
    sound: c,
    code: m
};
function v({partial: s}) {
    return e("div", {
        className: "section-slider",
        "data-section": (s == null ? void 0 : s.sectionId) || !1
    }, e(p, {
        ...s.header
    }), e("section-slider", {
        className: "slider",
        style: {
            "--gallery-length": s.items.length
        }
    }, e("div", {
        className: "slides"
    }, e("p", {
        id: "context"
    }, s.examplesContext), s.items.map(t=>{
        let i = r == null ? void 0 : r[t.animationId];
        return i ? e("div", {
            className: "slide js-slide"
        }, e("div", null, e("div", {
            class: "header"
        }, e("h3", {
            class: "sr-only"
        }, t.title), e("p", {
            className: "title",
            "aria-hidden": !0
        }, t.title.split(" ").map(n=>e("span", {
            className: "js-word"
        }, n)))), e(i, {
            ...t.example
        }))) : null
    }
    )), e("div", {
        className: "controls"
    }, e("button", {
        "aria-label": "Previous slide",
        className: "arrow arrow--left js-arrow",
        "data-direction": "previous"
    }, e("svg", {
        role: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: "46",
        height: "46",
        viewBox: "0 0 46 46",
        fill: "none"
    }, e("circle", {
        cx: "23",
        cy: "23",
        r: "21",
        fill: "white",
        opacity: .2
    })), e("span", {
        role: "none"
    }, e("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        title: "Arrow Left",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M3.825 9L9.425 14.6L8 16L0 8L8 0L9.425 1.4L3.825 7H16V9H3.825Z",
        fill: "white"
    })))), e("div", {
        className: "dots"
    }, s.items.map((t,i)=>e("div", {
        className: "js-dot",
        "data-index": i
    }))), e("button", {
        "aria-label": "Next slide",
        className: "arrow arrow--right js-arrow",
        "data-direction": "next"
    }, e("svg", {
        role: "none",
        xmlns: "http://www.w3.org/2000/svg",
        width: "46",
        height: "46",
        viewBox: "0 0 46 46",
        fill: "none",
        title: "Arrow Right"
    }, e("circle", {
        cx: "23",
        cy: "23",
        r: "21",
        fill: "white",
        opacity: .2
    })), e("span", {
        role: "none"
    }, e("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("path", {
        d: "M12.175 7L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9L0 9L1.74846e-07 7L12.175 7Z",
        fill: "white"
    })))))))
}
var S = v;
export {S as default};
